/**
 * Created by maitbela on 17/11/2015.
 */

"use strict";

var React = require('react');

var TableView = React.createClass({

    getInitialState: function() {
        return {
            "tableStruct": {
                "columns": [
                    {
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
                }, {
                    "value": "Total",
                    "subColumnsTotal": 1,
                    "subColumns": []
                }],
                "rows": [{
                    "value": "VVM Team",
                    "subRowsTotal": 1,
                    "subRows": [
                        {
                            "value": "Mohamed Amine"
                        }, {
                            "value": "Nathan"
                        }, {
                            "value": "Lyes"
                        }
                    ]
                },{
                    "value": "VVM Team",
                    "subRowsTotal": 1,
                    "subRows": [
                        {
                            "value": "Mohamed Amine"
                        }, {
                            "value": "Nathan"
                        }, {
                            "value": "Lyes"
                        }
                    ]
                }, {
                    "value": "Total",
                    "subRowsTotal": 1,
                    "subRows": []
                }]
            },
            "data" : {
                "rows": [
                    {
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },
                    {
                        row : [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            }
                        ]
                    },
                    {
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },
                    {
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },{
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },{
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },{
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },{
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    },{
                        row: [
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell: [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Pending"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "Withing SLA range"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "About to breach SLA"
                                }
                                ]
                            },
                            {
                                selectedFieldValuesFilter: 'Assigned',
                                cell : [{
                                    value: 10,
                                    name: "SLA breached"
                                }
                                ]
                            }
                        ]
                    }
                ]
            },
            "legend" : [

            ]
        }
    },

    showSubColumns: function(column) {
        var total;
        var subColumn = column.subColumns.map(function (subColumn) {
            return (
                <div className="flex-item Aligner border-item" onClick={this.handleClick.bind(this,column.value +" "+ subColumn.value)} >{subColumn.value}</div>
            );
        },this);

        if(column.subColumnsTotal){
            total = <div className="flex-item Aligner border-item" onClick={this.handleClick.bind(this,column.value +" Total")}>Total</div>
        }

        return (
            <div className="flex-container sizeSubCol">
                {subColumn}
                {total}
            </div>
        );
    },

    showTeam: function(rows) {
        var total;
        var attribute;
        var subRows = rows.subRows.map(function(subRow, index) {
            attribute = "flex-item Aligner-items sizeItem";
            if (index%2 != 0) {
                attribute = "flex-item Aligner-items sizeItem flex-row";
            }
            return (
                <div className={attribute} onClick={this.handleClick.bind(this, rows.value + " " + subRow.value)}>{subRow.value}</div>
            );
        },this );
        if(attribute == "flex-item Aligner-items sizeItem flex-row") {
            attribute = "flex-item Aligner-items sizeItem";
        } else {
            attribute = "flex-item Aligner-items sizeItem flex-row";
        }
        if(rows.subRowsTotal > 0){
            total = <div className={attribute} onClick={this.handleClick.bind(this, rows.value + " Total")}>Total</div>
        }
        return (
            <div className="flex-container members" style={{flex: 1}}>
                {subRows}
                {total}
            </div>
        );
    },

    showData: function(row, index) {
        var items = row.map(function(cells){
            var attribute = "flex-item Aligner-items border-item " +cells.column;
            if (index%2 != 0) {
                attribute = "flex-item Aligner-items border-item " +cells.column +"2";
            }
          /*  if(cells.column != "Total") {
                attribute += " border-item";
            }
            if(cells.team == "Total") {
                attribute = " flex-item Aligner-items Total border-total";
            }*/
            return (
                <div className={attribute} onMouseOver={this.handleMouseOver.bind(this, cells.cell)}  onClick={this.handleClick.bind(this, cells.selectedFieldValuesFilter)} >
                    <div className="flex-container">
                    {cells.cell.map(function(item){
                        var className = "flex-items "+ item.name;
                        return(
                            <div className={className} onClick={this.handleClick.bind(this, cells.selectedFieldValuesFilter)}>{item.value}</div>);
                    },this)}
                    </div>
                </div>
            );
        },this );
        return items
    },

    handleClick: function(item, e){
        //VVM util/EventHelper
        e.stopPropagation();
        e.preventDefault();
        console.log('click item : ' + item);
    },
    handleMouseOver: function(items, e) {
        e.stopPropagation();
        e.preventDefault();
        this.createLegend(items);
    },
    createLegend: function(items) {
        var newArray = Array();
        if(items) {
            items.map(function (item) {
               newArray.push({title : item.name, value: item.value});
            }, this);
            this.setState({legend:newArray});
        }
    },

    render: function() {
        var numberOfRows = 0;

        var header = this.state.tableStruct.columns.map(function(column){
            var row;
            if(column.subColumns.length >0) {
                numberOfRows += column.subColumns.length + column.subColumnsTotal;
                row = <div className="flex-item " style={{flex: column.subColumns.length + column.subColumnsTotal}}>
                    <div className="flex-container">
                        <div className="flex-item sizeSubCol Aligner column bottomBorder" onClick={this.handleClick.bind(this, column.value)}>{column.value}</div>
                    </div>
                    {this.showSubColumns(column)}
                </div>
            } else {
                numberOfRows +=1;
                row = <div className="flex-item border-header-total Aligner TotalHeader" style={{flex: 1}} onClick={this.handleClick.bind(this, column.value)}>
                    Total
                </div>
            }
            return {row}
        }, this);

        var teamMemeber = [];
        var team = this.state.tableStruct.rows.map(function(rows){
            teamMemeber.push(rows.subRows.length + rows.subRowsTotal);
            var row;
            if(rows.subRows.length>0) {
                row = <div className="flex-item ">
                    <div className="flex-container bottomBorder">
                        <div className="flex-container" style={{flex:0.5}}>
                            <div className="flex-item Aligner column" onClick={this.handleClick.bind(this, rows.value)}>{rows.value}</div>
                        </div>
                        {this.showTeam(rows)}
                    </div>
                </div>
            } else {
                row = <div className="flex-item ">
                    <div className="flex-container bottomBorder" onClick={this.handleClick.bind(this, "Total")} >
                        <div className="flex-item sizeItem Aligner border-item Total">Total</div>
                    </div>
                </div>
            }
            return {row}
        }, this);
        var i =0;
        var data = this.state.data.rows.map(function(rows, index){
            var attribute = "flex-container sizeItem ";
            if (index%2 != 0) {
                attribute = "flex-container sizeItem flex-row ";
            }
            if(index === teamMemeber[0]-1) {
                attribute = attribute + " bottomBorder";
                teamMemeber[0] += teamMemeber[i+1];
                i++;
            }
            return (
                <div className={attribute}>
                    {this.showData(rows.row, index)}
                </div>
            );
        }, this);

        var legend = this.state.legend.map(function(items){
            var attribut = "flex-items " + items.title;
            return (<div className="legend"> <div className={attribut} ></div> <div> {items.title}  {items.value} </div></div>);
        }, this);

        return(
            <div className="content">
                <div className="legend">
                {legend}
                </div>
                <div className="flex">
                    <div className="flex-container container border-header">
                        <div className="flex-item border-item flex-row" style={{flex : 1.5}}>
                            <div className="flex-container">
                                <div className="flex-item">
                                </div>
                            </div>
                        </div>
                        {header}
                    </div>
                    <div className="flex-container">
                        <div className="flex-item"  style={{flex: 1.5}}>
                        {team}
                        </div>
                        <div className="flex-item" style={{flex: numberOfRows}}>
                        {data}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TableView;
