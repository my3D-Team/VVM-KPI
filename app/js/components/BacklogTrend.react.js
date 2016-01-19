/**
 * Created by maitbela on 27/10/2015.
 */
"use strict";

var React = require('react');
//var AmCharts = require('amcharts3');
//console.log(AmCharts);
var KpiAction = require('../actions/KpiAction');
var kpiStore = require('../stores/KpiStore');

var chart;

function initChart(id, data, graphs) {
    chart = AmCharts.makeChart(id, {
        type: "serial",
        dataProvider: data,
        categoryField: "date",

        fontFamily: "Open Sans",
       // depth3D: 20,
        angle: 10,

        "columnWidth": 0.9,

        "startDuration": 0.3,

        legend: {
            markerType: "square",
            useGraphSettings: true,
            position: "top"
        },

        balloon: {
            fixedPosition: true,
            adjustBorderColor: true,
            cornerRadius: 3,
            fadeOutDuration: 0,
            animationDuration: 0,
            shadowAlpha: 0,
            disableMouseEvents: false
        },

        categoryAxis: {
            title: "Date",
            gridPosition: "start",
            axisColor: "#b0bec5",
            gridAlpha: 0,
            fillAlpha: 1
        },

        valueAxes: [{
            title: "Priority",
            stackType: "regular",
            position: "left",
            axisColor: "#b0bec5",
            gridAlpha: 0,
            fillAlpha: 1
        },{
            title: "Status",
            position: "right",
            id: "right",
            axisColor: "#b0bec5",
            gridColor: "#f9f9f9",
            gridAlpha:1,
            fillColor:"#f9f9f9",
            fillAlpha: 1
        }],

        graphs: graphs,

        chartScrollbar: {
            dragIcon: "dragIconRectSmall",
            enabled: true,
            dragIconHeight: 20,
            scrollbarHeight: 10
        },
        chartCursor: {
            categoryBalloonEnabled: true,
            oneBalloonOnly: true,
            cursorColor: "#017df5"
        },
        "export": {
            enabled: true
        }
    });
}

var backlogTrend = React.createClass({
    getInitialState: function () {
        return {
            data: [
            {
                "dateLabel": "01-02",
                "opened": 2,
                "closed": 13,
                "splits": [
                    {
                        "name": "P1",
                        "value": 10
                    },{
                        "name": "P2",
                        "value": 41
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 15
                    },{
                        "name": "P5",
                        "value": 15
                    }
                ]
            },
                {
                "dateLabel": "03-02",
                "opened": 12,
                "closed": 1,
                "splits": [
                    {
                        "name": "P1",
                        "value": 2
                    },{
                        "name": "P2",
                        "value": 14
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 5
                    },{
                        "name": "P5",
                        "value": 15
                    }
                ]
            },
                {
                "dateLabel": "04-02",
                "opened": 7,
                "closed": 5,
                "splits": [
                    {
                        "name": "P1",
                        "value": 2
                    },{
                        "name": "P2",
                        "value": 14
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 5
                    },{
                        "name": "P5",
                        "value": 25
                    }
                ]
            },
                {
                "dateLabel": "05-02",
                "opened": 2,
                "closed": 5,
                "splits": [
                    {
                        "name": "P1",
                        "value": 2
                    },{
                        "name": "P2",
                        "value": 14
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 5
                    },{
                        "name": "P5",
                        "value": 3
                    }
                ]
            },
                {
                "dateLabel": "06-02",
                "opened": 20,
                "closed": 14,
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
                    },{
                        "name": "P5",
                        "value": 20
                    }
                ]
            },
                {
                "dateLabel": "07-02",
                "opened": 25,
                "closed": 30,
                "splits": [
                    {
                        "name": "P1",
                        "value": 20
                    },{
                        "name": "P2",
                        "value": 34
                    },{
                        "name": "P3",
                        "value": 47
                    },{
                        "name": "P4",
                        "value": 15
                    },{
                        "name": "P5",
                        "value": 1
                    }
                ]
            },
                {
                "dateLabel": "08-02",
                "opened": 20,
                "closed": 13,
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
                    },{
                        "name": "P5",
                        "value": 17
                    }
                ]
            },
                {
                "dateLabel": "09-02",
                "opened": 20,
                "closed": 15,
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
                    },{
                        "name": "P5",
                        "value": 10
                    }
                ]
            },
                {
                "dateLabel": "10-02",
                "opened": 7,
                "closed": 5,
                "splits": [
                    {
                        "name": "P1",
                        "value": 2
                    },{
                        "name": "P2",
                        "value": 14
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 5
                    },{
                        "name": "P5",
                        "value": 17
                    }
                ]
            },
                {
                "dateLabel": "11-02",
                "opened": 12,
                "closed": 5,
                "splits": [
                    {
                        "name": "P1",
                        "value": 2
                    },{
                        "name": "P2",
                        "value": 14
                    },{
                        "name": "P3",
                        "value": 7
                    },{
                        "name": "P4",
                        "value": 5
                    },{
                        "name": "P5",
                        "value": 3
                    }
                ]
            },
                {
                    "dateLabel": "12-02",
                    "opened": 20,
                    "closed": 14,
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
                            "value": 10
                        },{
                            "name": "P5",
                            "value": 15
                        }
                    ]
                },
                {
                    "dateLabel": "13-02",
                    "opened": 5,
                    "closed": 3,
                    "splits": [
                        {
                            "name": "P1",
                            "value": 2
                        },{
                            "name": "P2",
                            "value": 15
                        },{
                            "name": "P3",
                            "value": 7
                        },{
                            "name": "P4",
                            "value": 10
                        },{
                            "name": "P5",
                            "value": 15
                        }
                    ]
                },
                {
                    "dateLabel": "14-02",
                    "opened": 20,
                    "closed": 14,
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
                            "value": 10
                        },{
                            "name": "P5",
                            "value": 15
                        }
                    ]
                }
        ]
        };
    },

    componentWillMount: function () {
       var data = this.state.data.map(function(item) {
            var data = {
                "date" : item.dateLabel,
                "open": item.opened,
                "close": item.closed
            }

            item.splits.map(function(split){
                data[split.name] = split.value
            });
            return data;
        });
        var color = ["#ccff90", "#b0bec5", "#80d8ff","#ffe57f", "#ff8a80"];
        var graphs=[
            {
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "open",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 10,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            lineAlpha: 1,
            valueAxis: "right",
            title: "opened",
            lineColor: "#000F14",
            showHandOnHover: true
        },
            {
            balloonText: "[[title]] of [[category]]:[[value]]",
            valueField: "close",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 10,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            lineAlpha: 1,
            title: "closed",
            valueAxis: "right",
            lineColor: "#006B8F",
            showHandOnHover: true
        }];
        this.state.data[0].splits.map(function(field, index) {
            graphs.push(  {
                    balloonText: "[[title]] of [[category]]:[[value]]",
                    valueField: field.name,
                    lineColor: color[index],
                    type: "column",
                    lineAlpha: 0,
                    fillAlphas: 1,
                    title: field.name,
                    showHandOnHover: true
                })
            });
        console.log(graphs);
        initChart('chartdiv', data, graphs);
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
        console.log(kpiStore.getSelectedPreview().item.category + ": " + kpiStore.getSelectedPreview().item.values.value + " : " + kpiStore.getSelectedPreview().graph.title);
    },
    render: function () {
        var css = {
            width: "100%",
            height: "650px"
        };
        return (
            <div>
                <div style={css} id="chartdiv"></div>
            </div>
        );
    }
});

module.exports = backlogTrend;