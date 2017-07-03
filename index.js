'use strict';

// LOAD ENV VARS
require('dotenv-extended').load({path: '.env'});

// NODE MODULES
var builder = require('botbuilder');
var restify = require('restify');

// LOCAL MODULES
var luisActions = require('./luis-actions');
var weatherAction = require('./sample-actions/weather');

// LOCAL VARS
var actions = [weatherAction];
var luisModelUrl = process.env.LUIS_MODEL_URL;

// init restify server config
var server = restify.createServer();
server.use(restify.bodyParser());

// bind server to port & display start message
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});

// status route
// server.get('/', function (request, response) {
//     response.send(200, {status: 'online'});
// });

// chat page
server.get('/', restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));
server.get('/directline', restify.serveStatic({
    directory: './public',
    default: 'index.html'
}));
server.get('/webchat', restify.serveStatic({
    directory: './public',
    default: 'index.html'
}));
// init chat connector
var connector = new builder.ChatConnector({appId: process.env.MICROSOFT_APP_ID, appPassword: process.env.MICROSOFT_APP_PASSWORD});
// bind chat connector to /api/messages route
server.post('/api/messages', connector.listen());

// init bot & bind to chat connector
var bot = new builder.UniversalBot(connector);
// init LUIS recognizer with LUIS model URL
var luisRecognizer = new builder.LuisRecognizer(luisModelUrl);

// default reply handler
var defaultReplyHandler = function (session) {
    session.send(`Sorry, I did not understand ${session.message.text}`);
    session.endConversation('You can request the current weather forecast for CITY_NAME by typing: "what is the weather in Miami?"');
};

// bind LUIS recognizer to intent dialog
var intentDialog = bot.dialog('/', new builder.IntentDialog({recognizers: [luisRecognizer]}).onDefault(defaultReplyHandler));

// bind LUIS actions to bot dialog
luisActions.bindToBotDialog(bot, intentDialog, luisModelUrl, actions, defaultReplyHandler, onContextCreationHandler);


function onContextCreationHandler(action, actionModel, next, session) {
    if (action.intentName === 'FindHotels') {
        if (!actionModel.parameters.Checkin) {
            actionModel.parameters.Checkin = new Date();
        }

        if (!actionModel.parameters.Checkout) {
            actionModel.parameters.Checkout = new Date();
            actionModel
                .parameters
                .Checkout
                .setDate(actionModel.parameters.Checkout.getDate() + 1);
        }
    }
    next();
}

// END OF LINE
