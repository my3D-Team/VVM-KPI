/**
 * Created by maitbela on 18/11/2015.
 */

"use strict";

var React = require('react');

var DrillDown = React.createClass({
    getInitialState: function() {
        return {
            "data": {
                "header": [
                        {
                            "value": "name"
                        },{
                            "value": "date"
                        },{
                            "value": "Priority 1"
                        },{
                            "value": "Priority 2"
                        },{
                            "value": "Priority 3"
                        },{
                            "value": "Total"
                        }
                    ],
                "body": [
                    {
                        "cell": [
                            {
                                "value": "mohamed"
                            },{
                                "value": "01-10"
                            },{
                                "value": "12"
                            },{
                                "value": "14"
                            },{
                                "value": "14"
                            },{
                                "value": "36"
                            }
                        ]
                    },{ "cell": [
                            {
                                "value": "mohamed"
                            },{
                                "value": "01-10"
                            },{
                                "value": "12"
                            },{
                                "value": "12"
                            },{
                                "value": "14"
                            },{
                                "value": "36"
                            }
                        ]
                    },{ "cell": [
                            {
                                "value": "mohamed"
                            },{
                                "value": "01-10"
                            },{
                                "value": "12"
                            },{
                                "value": "12"
                            },{
                                "value": "14"
                            },{
                                "value": "36"
                            }
                        ]
                    }
                ]
            }
        }
    },

    parseCell: function(cell) {
        var row = cell.map(function(item){
            return (
                <div  className="flex-item"> {item.value} </div>
            );
        });
        return row
    },
    render: function(){
        var header = this.state.data.header.map(function(item){
            return(
                <div className="flex-item">{item.value}</div>
            );
        });

        var body = this.state.data.body.map(function(item){
            return (
                <div className="flex-container"> {this.parseCell(item.cell)}</div>
            );
        }, this);

        return (
            <div className="flex">
                <div className="flex-container header">{header}</div>
                {body}
            </div>
        );
    }
});

module.exports = DrillDown;