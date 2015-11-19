/**
 * Created by maitbela on 17/11/2015.
 */

"use strict";

var React = require('react');

var TableView = React.createClass({

    getInitialState: function() {
        return {
            "tableStruct": {
                "columns": [{
                    "value": "Assigned",
                    "subColumnsTotal": 1,
                    "subColumns": [{
                        "value": "P1"
                    }, {
                        "value": "P2"
                    }, {
                        "value": "P3"
                    }]
                }, {
                    "value": "In Progress",
                    "subColumnsTotal": 0,
                    "subColumns": [{
                        "value": "P1"
                    }, {
                        "value": "P2"
                    }, {
                        "value": "P3"
                    }]
                }],
                "rows": [{
                    "value": "VVM Team",
                    "subRowsTotal": 0,
                    "subRows": [
                        {
                            "value": "Mohamed"
                        }, {
                            "value": "Nathan"
                        }, {
                            "value": "Lyes"
                        }
                    ]
                }]
            },
            "data" : {
                "columns": [{
                    "Assigned" : [
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                                },{
                                value: 20,
                                name: "not spa"
                                },{
                                value: 30,
                                name: "pending"
                                }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        }
                    ],
                    "In Progress": [
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        }
                    ]
                },{
                    "Assigned" : [
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        }
                    ],
                    "In Progress": [
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        }
                    ]
                },{
                    "Assigned" : [
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },{
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        }
                    ],
                    "In Progress": [
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        },
                        {
                            cell : [{
                                value: 10,
                                name: "spa"
                            },{
                                value: 10,
                                name: "not spa"
                            },{
                                value: 10,
                                name: "pending"
                            }
                            ]
                        }
                    ]
                }]
            }
        }
    },
    //lopping the subColumns array and create each column header
    showSubColumns: function(subColumns, subColumnsTotal) {
        var total;
        var subColumns = subColumns.map(function(subColumn) {
            return (
                <div className="flex-item">{subColumn.value}</div>
            );
        });
        if(subColumnsTotal){
            total = <div className="flex-item">Total</div>
        }
        return (
            <div className="flex-container">
                {subColumns}
                {total}
            </div>
        );
    },

    showTeam: function(subRows, subRowsTotal) {
        var total;
        var subRows = subRows.map(function(subRow) {
            return (
                <div className="flex-item">{subRow.value}</div>
            );
        });
        if(subRowsTotal){
            total = <div className="flex-item">Total</div>
        }
        return (
            <div className="flex-container members">
                {subRows}
                {total}
            </div>
        );
    },

    showData: function(row, key) {
        var items = row[key].map(function(cells){
            return (
                <div className="flex-item">
                    <div className="flex-container">
                    {cells.cell.map(function(item){
                        return(
                        <div className="flex-item">{item.value}
                            </div>);
                    },this)}
                    </div>
                </div>
            );
        });
        return items
    },
    render: function() {
        var header = this.state.tableStruct.columns.map(function(column){
            return (
                <div className="flex-item" style={{flex: column.subColumns.length + column.subColumnsTotal}}>
                    <div className="flex-container">
                        <div className="flex-item">{column.value}</div>
                    </div>
                    {this.showSubColumns(column.subColumns, column.subColumnsTotal)}
                </div>
            );
        }, this);

        var team = this.state.tableStruct.rows.map(function(row){
            return (
                <div className="flex-item team" style={{flex: 1.2}}>
                    <div className="flex-container">
                        <div className="flex-item">{row.value}</div>
                    </div>
                    {this.showTeam(row.subRows, row.subRowsTotal)}
                </div>
            );
        }, this);
        
        var data = this.state.data.columns.map(function(row){
            return (
                <div className="flex-container">
                    {this.state.tableStruct.columns.map(function(column){
                        return (
                            this.showData(row, column.value)
                        );
                    },this)}
                </div>
            );
        }, this);

        return(
            <div className="flex">
                <div className="flex-container">
                    <div className="flex-item" style={{flex : 1.2}}>
                        <div className="flex-container">
                        </div>
                    </div>
                    {header}
                </div>
                <div className="flex-container">
                    {team}

                    <div className="flex-item" style={{flex: 7}}>
                    {data}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TableView;