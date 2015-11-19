"use strict";

var React = require('react');
var BacklogTrend = require('./BacklogTrend.react');
var TableView = require('./TableView.react');
var DrillDown = require('./DrillDown.react');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1> BacklogTrend</h1>
                <BacklogTrend />
                <h1> Table View </h1>
                <TableView />
                <h1> Drill Down </h1>
                <DrillDown />
            </div>
        );
    }
});

module.exports = App;