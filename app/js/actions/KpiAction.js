// Dispatcher
var AppDispatcher = require('../dispatcher/AppDispatcher');
var KpiConstants = require('../constants/KpiConstants');

var KpiAction = {
    showItem: function(node) {
        AppDispatcher.dispatch({
            actionType: KpiConstants.SHOW_DRILL_DOWN,
            node: node
        });
    }
}

module.exports = KpiAction;