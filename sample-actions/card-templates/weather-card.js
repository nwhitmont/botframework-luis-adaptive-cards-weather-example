module.exports = {
    "contentType": "application/vnd.microsoft.card.adaptive",
    "content": {
        "type": "AdaptiveCard",
        "body": [
            {
                "type": "ColumnSet",
                "columns": [
                    {
                        "type": "Column",
                        "size": "35",
                        "items": [
                            {
                                "type": "Image",
                                "size": null,
                                "style": null,
                                "url": "https:{CURRENT_CONDITION_ICON}",
                                "horizontalAlignment": "left",
                                "separation": null
                            }
                        ],
                        "style": null,
                        "separation": null
                    }, {
                        "type": "Column",
                        "size": "65",
                        "items": [
                            {
                                "type": "TextBlock",
                                "size": "large",
                                "weight": null,
                                "color": null,
                                "isSubtle": false,
                                "text": "{LOCATION_NAME} ({CURRENT_LAST_UPDATED})",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "TextBlock",
                                "size": "large",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "{CURRENT_TEMP_F}° F",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "{CURRENT_CONDITION_TEXT}",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "Winds {CURRENT_WIND_MPH} mph {CURRENT_WIND_DIR}",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }
                        ],
                        "style": null,
                        "separation": null
                    }
                ],
                "separation": null
            }, {
                "type": "ColumnSet",
                "columns": [
                    {
                        "type": "Column",
                        "size": "20",
                        "items": [
                            {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "Fri",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "Image",
                                "size": null,
                                "style": null,
                                "url": "https://cdn.apixu.com/weather/64x64/day/113.png",
                                "horizontalAlignment": "left",
                                "separation": null
                            }, {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "54/75",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }
                        ],
                        "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://www.bing.com/search?q=forecast in {LOCATION_NAME}"
                        },
                        "style": null,
                        "separation": null
                    }, {
                        "type": "Column",
                        "size": "20",
                        "items": [
                            {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "Sat",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "Image",
                                "size": null,
                                "style": null,
                                "url": "https://cdn.apixu.com/weather/64x64/day/113.png",
                                "horizontalAlignment": "left",
                                "separation": null
                            }, {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "55/79",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }
                        ],
                        "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://www.bing.com/search?q=forecast in {LOCATION_NAME}"
                        },
                        "style": null,
                        "separation": null
                    }, {
                        "type": "Column",
                        "size": "20",
                        "items": [
                            {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "Sun",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "Image",
                                "size": null,
                                "style": null,
                                "url": "https://cdn.apixu.com/weather/64x64/day/113.png",
                                "horizontalAlignment": "left",
                                "separation": null
                            }, {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "57/79",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }
                        ],
                        "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://www.bing.com/search?q=forecast in {LOCATION_NAME}"
                        },
                        "style": null,
                        "separation": null
                    }, {
                        "type": "Column",
                        "size": "20",
                        "items": [
                            {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "Mon",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }, {
                                "type": "Image",
                                "size": null,
                                "style": null,
                                "url": "https://cdn.apixu.com/weather/64x64/day/113.png",
                                "horizontalAlignment": "left",
                                "separation": null
                            }, {
                                "type": "TextBlock",
                                "size": "medium",
                                "weight": null,
                                "color": null,
                                "isSubtle": true,
                                "text": "55/77",
                                "horizontalAlignment": "center",
                                "wrap": false,
                                "maxLines": 0,
                                "separation": "none"
                            }
                        ],
                        "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://www.bing.com/search?q=forecast in {LOCATION_NAME}"
                        },
                        "style": null,
                        "separation": null
                    }
                ],
                "separation": null
            }
        ],
        "actions": [],
        "speak": "<s>Today the temperature is {CURRENT_TEMP_F} in {LOCATION_NAME}</s><s>Winds are " +
        "{CURRENT_WIND_MPH} miles per hour from the {CURRENT_WIND_DIR}</s>"
    },
    "name": "Weather card"
};

// END OF LINE
