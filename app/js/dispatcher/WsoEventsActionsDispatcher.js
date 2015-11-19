"use strict";

var AppDispatcher = require('./AppDispatcher');

var WsoEventActions = {
    dispatchEvent: function (eventType, data) {
        AppDispatcher.dispatch({
            actionType: eventType,
            model: data
        });
    }
};

module.exports = WsoEventActions;
