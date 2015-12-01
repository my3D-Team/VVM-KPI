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
                                team: "VVM team",
                                member: "Mohamed",
                                column: 'Assigned',
                                subColumn: "P1",
                                cell: [{
                                    value: 10,
                                    name: "spa"
                                }, {
                                    value: 20,
                                    name: "not spa"
                                }, {
                                    value: 30,
                                    name: "pending"
                                }
                                ]
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "VVM team",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                        row : [
                            {
                                team: "Total",
                                member: "Total",
                                column:'Assigned',
                                subColumn: "P1",
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
                            },
                            {
                                team: "Total",
                                member: "Total",
                                column:'Assigned',
                                subColumn: "P2",
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
                                team: "Total",
                                member: "Total",
                                column:'Assigned',
                                subColumn: "P3",
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
                                team: "Total",
                                member: "Total",
                                column:'Assigned',
                                subColumn: "Total",
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
                                team: "Total",
                                member: "Total",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "Total",
                                member: "Total",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "Total",
                                member: "Mohamed",
                                column:'In Progress',
                                subColumn: "P1",
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
                                team: "Total",
                                member: "Mohamed",
                                column:'Total',
                                subColumn: "P1",
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
                    }
                ]
            }
        }
    },

    showSubColumns: function(column) {
        var total;
        var subColumn = column.subColumns.map(function (subColumn) {
            return (
                <div className="flex-item Aligner border" onClick={this.handleClick.bind(this,column.value +" "+ subColumn.value)} >{subColumn.value}</div>
            );
        },this);

        if(column.subColumnsTotal){
            total = <div className="flex-item Aligner border" onClick={this.handleClick.bind(this,column.value +" Total")}>Total</div>
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
            <div className="flex-container members">
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
            if(cells.team == "Total") {
                attribute = " flex-item Aligner-items Total border-total";
            }
            return (
                <div className={attribute}  onClick={this.handleClick.bind(this, cells.column + " "+ cells.subColumn + " "+ cells.member)} >
                    <div className="flex-container">
                    {cells.cell.map(function(item){
                        var className = "flex-items "+ item.name;
                        return(
                            <div className={className} onClick={this.handleClick.bind(this, cells.column + " "+ cells.subColumn + " "+ cells.member + " " + item.value + " " + item.name)}></div>);
                    },this)}
                    </div>
                </div>
            );
        },this );
        return items
    },

    handleClick: function(item){
        console.log('click item : ' + item);
    },

    render: function() {
        var numberOfRows = 0;
        var header = this.state.tableStruct.columns.map(function(column){
            var row;
            if(column.subColumns.length >0) {
                numberOfRows += column.subColumns.length + column.subColumnsTotal;
                row = <div className="flex-item border" style={{flex: column.subColumns.length + column.subColumnsTotal}}>
                    <div className="flex-container">
                        <div className="flex-item sizeSubCol Aligner column" onClick={this.handleClick.bind(this, column.value)}>{column.value}</div>
                    </div>
                    {this.showSubColumns(column)}
                </div>
            } else {
                numberOfRows +=1;
                row = <div className="flex-item border-header-total Aligner Total" style={{flex: 1}} onClick={this.handleClick.bind(this, column.value)}>
                    Total
                </div>
            }
            return {row}
        }, this);

        var team = this.state.tableStruct.rows.map(function(rows){
            var row;
            if(rows.subRows.length>0) {
                row = <div className="flex-item ">
                    <div className="flex-container">
                        <div className="flex-item border Aligner column" onClick={this.handleClick.bind(this, rows.value)}>{rows.value}</div>
                        {this.showTeam(rows)}
                    </div>
                </div>
            } else {
                row = <div className="flex-item ">
                    <div className="flex-container" onClick={this.handleClick.bind(this, "Total")} >
                        <div className="flex-item sizeItem Aligner Total">Total</div>
                    </div>
                </div>
            }
            return {row}
        }, this);

        var data = this.state.data.rows.map(function(rows, index){
            var attribute = "flex-container sizeItem";
            if (index%2 != 0) {
                attribute = "flex-container sizeItem flex-row"
            }
            return (
                <div className={attribute}>
                    {this.showData(rows.row, index)}
                </div>
            );
        }, this);

        return(
            <div className="flex">
                <div className="flex-container">
                    <div className="flex-item flex-row border-item" style={{flex : 1.2}}>
                        <div className="flex-container">
                        </div>
                    </div>
                    {header}
                </div>
                <div className="flex-container">
                    <div className="flex-item"  style={{flex: 1.2}}>
                    {team}
                    </div>
                    <div className="flex-item" style={{flex: numberOfRows}}>
                    {data}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TableView;
