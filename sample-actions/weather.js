// NODE MODULES
var util = require('util');
var request = require('request-promise');
var LuisActions = require('../luis-actions');
var fs = require('fs');
var builder = require('botbuilder');
var json = require('json-stringify-pretty-compact');
var moment = require('moment');

// LOCAL VARS
var APIXU_API_KEY = process.env.APIXU_API_KEY;

// DEFINE THE WEATHER ACTION
var WeatherInPlaceAction = {
    intentName: 'WeatherInPlace',
    friendlyName: 'What\'s the weather?',
    schema: {
        Place: {
            type: 'string',
            builtInType: LuisActions.BuiltInTypes.Geography.City,
            message: 'Please provide a location'
        }
    },
    // Action fulfillment method, recieves parameters as keyed-object (parameters
    // argument) and a callback function to invoke with the fulfillment result.
    fulfill: function (parameters, done) {
        var apiUrl = `http://api.apixu.com/v1/forecast.json?key=${APIXU_API_KEY}&q=${encodeURIComponent(parameters.Place)}&days=4`;
        // DEBUG
        // console.log('Fetching weather data via API URL:');
        // console.log(apiUrl);
        
        var requestOptions = {
            url: apiUrl,
            json: true
        };
        request(requestOptions)
            .then(function (weatherData) {
                if (!weatherData.error) {
                    // DEBUG //
                    // console.log(json(weatherData));
                    // populate the weather card template with the weather data from API
                    var weatherCard = generateWeatherAdaptiveCard(weatherData);
                    // build out the response message with weather card as an attachment
                    var cardMessage = new builder.Message().addAttachment(weatherCard);
                    // return the weather card as a message
                    done(cardMessage);
                }
                else {
                    done(weatherData.error.message + ': "' + parameters.Place + '"');
                }
            })
            .catch(console.error);
    }
};

function generateWeatherAdaptiveCard(weatherData) {
    // load weather card template
    var weatherCard = require('./card-templates/weather-card');
    // set current condition icon
    weatherCard.content.body[0].columns[0].items[0].url = `https:${weatherData.current.condition.icon}`;
    // set location name + last updated time
    weatherCard.content.body[0].columns[1].items[0].text = `**${weatherData.location.name}**`;
    // set current temp in F
    weatherCard.content.body[0].columns[1].items[1].text = `${weatherData.current.temp_f}° F`;
    // set current conditions text
    weatherCard.content.body[0].columns[1].items[2].text = weatherData.current.condition.text;
    // set wind speed and direction
    weatherCard.content.body[0].columns[1].items[3].text = `Winds ${weatherData.current.wind_mph} mph ${weatherData.current.wind_dir}`;
    // set the select action URL
    weatherCard.content.body[1].columns[0].selectAction.url = `https://www.bing.com/search?q=forecast in ${weatherData.location.name}`;
    weatherCard.content.body[1].columns[1].selectAction.url = `https://www.bing.com/search?q=forecast in ${weatherData.location.name}`;
    weatherCard.content.body[1].columns[2].selectAction.url = `https://www.bing.com/search?q=forecast in ${weatherData.location.name}`;
    weatherCard.content.body[1].columns[3].selectAction.url = `https://www.bing.com/search?q=forecast in ${weatherData.location.name}`;
    // set the spoken utterance
    weatherCard.content.speak = `<s>Today the temperature is ${weatherData.current.temp_f}° F in ${weatherData.location.name}</s><s>Winds are ${weatherData.current.wind_mph} miles per hour from the ${weatherData.current.wind_dir}</s>`;
    
    // set the daily forcast info per day
    var day1 = weatherData.forecast.forecastday[0]; // today
    var day2 = weatherData.forecast.forecastday[1]; // tomorrow
    var day3 = weatherData.forecast.forecastday[2];
    var day4 = weatherData.forecast.forecastday[3];
    // DAY 1
    weatherCard.content.body[1].columns[0].items[0].text = moment(day1.date).format('llll').split(',')[0]; // day name
    weatherCard.content.body[1].columns[0].items[1].url = `https:${day1.day.condition.icon}`; // day icon
    weatherCard.content.body[1].columns[0].items[2].text = `${Math.round(day1.day.maxtemp_f)}/${Math.round(day1.day.mintemp_f)}`; // day high/low temp
    // DAY 2
    weatherCard.content.body[1].columns[1].items[0].text = moment(day2.date).format('llll').split(',')[0]; // day name
    weatherCard.content.body[1].columns[1].items[1].url = `https:${day2.day.condition.icon}`; // day icon
    weatherCard.content.body[1].columns[1].items[2].text = `${Math.round(day2.day.maxtemp_f)}/${Math.round(day2.day.mintemp_f)}`; // day high/low temp
    // DAY 3
    weatherCard.content.body[1].columns[2].items[0].text = moment(day3.date).format('llll').split(',')[0]; // day name
    weatherCard.content.body[1].columns[2].items[1].url = `https:${day3.day.condition.icon}`; // day icon
    weatherCard.content.body[1].columns[2].items[2].text = `${Math.round(day3.day.maxtemp_f)}/${Math.round(day3.day.mintemp_f)}`; // day high/low temp
    // DAY 4
    weatherCard.content.body[1].columns[3].items[0].text = moment(day4.date).format('llll').split(',')[0]; // day name
    weatherCard.content.body[1].columns[3].items[1].url = `https:${day4.day.condition.icon}`; // day icon
    weatherCard.content.body[1].columns[3].items[2].text = `${Math.round(day4.day.maxtemp_f)}/${Math.round(day4.day.mintemp_f)}`; // day high/low temp
    // return the weather card attachment data
    return weatherCard;
}

module.exports = WeatherInPlaceAction;

// END OF LINE
