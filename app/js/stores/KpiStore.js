/**
 * Created by maitbela on 13/11/2015.
 */
// Dispatcher
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var KpiConstants = require('../constants/KpiConstants');

var KpiStore = assign({}, EventEmitter.prototype, {
    /**
     * Add a listener when something has changed in the kanban
     * @param callback
     */
    addChangeListener: function (callback) {
        this.on(KpiConstants.CHANGE, callback);
    },

    /**
     * Remove the change listener
     */
    removeChangeListener: function (callback) {
        this.removeListener(KpiConstants.CHANGE, callback);
    },

    /**
     * Emit the change for all listeners
     * @param e
     */
    emitChange: function (e) {
        this.emit(KpiConstants.CHANGE, e);
    },

    getSelectedPreview: function () {
        return selectedPreview;
    }
});

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case KpiConstants.SHOW_DRILL_DOWN :
            selectedPreview = action.node;
            KpiStore.emitChange(action.node);
            break;
    }
});

module.exports = KpiStore;