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
       // depth3D: 20,
        angle: 10,

        "columnWidth": 1,

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

        graphs: graphs,

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
            data: [
            {
                "date": "01-02",
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
                    }
                ]
            },{
                "date": "03-02",
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
                    }
                ]
            },
                {
                "date": "04-02",
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
                    }
                ]
            },
                {
                "date": "05-02",
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
                    }
                ]
            },
                {
                "date": "06-02",
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
                    }
                ]
            },
                {
                "date": "07-02",
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
                    }
                ]
            },
                {
                "date": "08-02",
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
                    }
                ]
            },
                {
                "date": "09-02",
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
                    }
                ]
            },
                {
                "date": "10-02",
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
                    }
                ]
            },
                {
                "date": "11-02",
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
                    }
                ]
            },
                {
                "date": "12-02",
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
                    }
                ]
            }
        ]
        };
    },

    componentWillMount: function () {
       var data = this.state.data.map(function(item) {
            var data = {
                "date" : item.date,
                "open": item.opened,
                "close": item.closed
            }

            item.splits.map(function(split){
                data[split.name] = split.value
            });
            return data;
        });
        var color = ["#FFB300", "#039BE5", "#546E7A", "#7CB342"];
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
            title: "open",
            lineColor: "#3949AB",
            type: "smoothedLine",
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
            title: "close",
            valueAxis: "right",
            lineColor: "#DA245A",
            type: "smoothedLine",
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
        this.parseData();
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