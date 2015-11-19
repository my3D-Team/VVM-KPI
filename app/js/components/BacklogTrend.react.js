/**
 * Created by maitbela on 27/10/2015.
 */
"use strict";

var React = require('react');
var KpiAction = require('../actions/KpiAction');
var kpiStore = require('../stores/KpiStore');

var chart;

function initChart(id, data) {
    chart = AmCharts.makeChart(id, {
        type: "serial",
        dataProvider: data,
        categoryField: "date",
       // depth3D: 20,
        angle: 30,

        "startDuration": 1,

        legend: {
            "useGraphSettings": true,
            top: 12
        },

        balloon: {
            adjustBorderColor: true,
            color: "#000000",
            cornerRadius: 10,
            disableMouseEvents: false,
            fadeOutDuration: 1,
            fillColor: "#FFFFFF"
        },

        categoryAxis: {
            title: "date",
            gridPosition: "start"
        },

        valueAxes: [{
            title: "Priority",
            stackType: "regular",
            position: "left"
        },{
            title: "status",
            position: "right",
            id: "right",
            autoGridCount: true
        }],

        graphs: [{
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "open",
            bullet: "round",
            lineAlpha: 1,
            valueAxis: "right",
            title: "open",
            lineColor: "#AEEEEE",
            showHandOnHover: true
        },{
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "close",
            bullet: "round",
            lineAlpha: 1,
            title: "close",
            type: "smoothedLine",
            valueAxis: "right",
            lineColor: "#FFFFFE",
            showHandOnHover: true
        },{
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "P1",
            type: "column",
            lineColor: "#AEF28E",
            lineAlpha: 0,
            fillAlphas: 1,
            title: "P1",
            showHandOnHover: true
        },{
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "P2",
            lineColor: "#AEF15F",
            type: "column",
            lineAlpha: 0,
            fillAlphas: 1,
            title: "P2",
            showHandOnHover: true
        },{
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "P3",
            lineColor: "#5cd16b",
            type: "column",
            lineAlpha: 0,
            fillAlphas: 1,
            title: "P3",
            showHandOnHover: true
        },{
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "P4",
            lineColor: "#EEF10E",
            type: "column",
            lineAlpha: 0,
            fillAlphas: 1,
            title: "P4",
            showHandOnHover: true
        }],


        chartScrollbar: {},
        chartCursor: {
            categoryBalloonEnabled: true,
            oneBalloonOnly: true
        },
        "export": {
            enabled: true
        }
    });
}

var backlogTrend = React.createClass({
    getInitialState: function () {
        return {
            data: [{
                "date": "01-10",
                "P1": 10,
                "P2": 20,
                "P3": 10,
                "P4": 5,
                "open": 15,
                "close": 10
            }, {
                "date": "02-10",
                "P1": 19,
                "P2": 1,
                "P3": 2,
                "P4": 3,
                "open": 7,
                "close": 11
            }, {
                "date": "03-10",
                "P1": 11,
                "P2": 19,
                "P3": 4,
                "P4": 2,
                "open": 9,
                "close": 14
            }, {
                "date": "04-10",
                "P1": 11,
                "P2": 10,
                "P3": 14,
                "P4": 2,
                "open": 8,
                "close": 5
            }, {
                "date": "05-10",
                "P1": 8,
                "P2": 0,
                "P3": 4,
                "P4": 2,
                "open": 20,
                "close": 5
            }, {
                "date": "06-10",
                "P1": 13,
                "P2": 7,
                "P3": 4,
                "P4": 2,
                "open": 18,
                "close": 15
            }, {
                "date": "07-10",
                "P1": 1,
                "P2": 5,
                "P3": 14,
                "P4": 2,
                "open": 10,
                "close": 10
            }, {
                "date": "08-10",
                "P1": 7,
                "P2": 1,
                "P3": 4,
                "P4": 2,
                "open": 5,
                "close": 10
            }
            ],
            dataTwo: [
            {
                "date": "01-02",
                "opened": 20,
                "closed": 30,
                "splits": [
                    {
                        "name": "P1",
                        "value": 20
                    },{
                        "name": "P2",
                        "value": 4
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 15
                    }
                ]
            },{
                "date": "01-02",
                "opened": 20,
                "closed": 30,
                "splits": [
                    {
                        "name": "P1",
                        "value": 20
                    },{
                        "name": "P2",
                        "value": 4
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 15
                    }
                ]
            },{
                "date": "01-02",
                "opened": 20,
                "closed": 30,
                "splits": [
                    {
                        "name": "P1",
                        "value": 20
                    },{
                        "name": "P2",
                        "value": 4
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 15
                    }
                ]
            },{
                "date": "01-02",
                "opened": 20,
                "closed": 30,
                "splits": [
                    {
                        "name": "P1",
                        "value": 20
                    },{
                        "name": "P2",
                        "value": 4
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 15
                    }
                ]
            }
        ]
        };
    },

    componentWillMount: function () {
        initChart('chartdiv', this.state.data);
        chart.addListener("clickGraphItem", this.handleClick);
    },
    componentDidMount: function () {
        kpiStore.addChangeListener(this.onChange);
    },

    componentWillUnMount: function () {
        kpiStore.removeChangeListener(this.onChange);
    },

    handleClick: function(event) {
        KpiAction.showItem(event);
    },

    onChange: function () {
        console.log(kpiStore.getSelectedPreview());
        this.parseData();
    },

    parseData: function() {
       this.state.dataTwo.map(function(items) {

        });
    },
    render: function () {
        var css = {
            width: "75%",
            height: "400px"
        };
        return (
            <div>
                <div style={css} id="chartdiv"></div>
            </div>
        );
    }
});

module.exports = backlogTrend;