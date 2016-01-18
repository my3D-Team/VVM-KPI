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
                        "value": "01 - Da Decidere",
                        "isSubColumnsTotalRequested": true,
                        "subColumns": [
                            {
                                "value": "1"
                            },
                            {
                                "value": "2"
                            },
                            {
                                "value": "3"
                            },
                            {
                                "value": "4"
                            }
                        ]
                    },
                    {
                        "value": "02 - Sospeso",
                        "isSubColumnsTotalRequested": true,
                        "subColumns": [
                            {
                                "value": "1"
                            },
                            {
                                "value": "2"
                            },
                            {
                                "value": "3"
                            },
                            {
                                "value": "4"
                            },
                            {
                                "value": "5"
                            }
                        ]
                    },
                    {
                        "value": "03 - Da Stimare",
                        "isSubColumnsTotalRequested": true,
                        "subColumns": [
                            {
                                "value": "2"
                            }
                        ]
                    }
                ],
                "rows": [
                    {
                        "value": "tracker48440",
                        "isSubRowsTotalRequested": true,
                        "subRows": [
                            {
                                "value": "Alessandra Corona"
                            },
                            {
                                "value": "Alessandro Angelo Colombini"
                            },
                            {
                                "value": "Andrea Alessandri"
                            },
                            {
                                "value": "Antonella Spiezio"
                            },
                            {
                                "value": "Antonino Emma"
                            },
                            {
                                "value": "Davide Lombardi"
                            },
                            {
                                "value": "Gianfranco Pennone"
                            },
                            {
                                "value": "Ivano Dalmasso"
                            },
                            {
                                "value": "Laura Uccello"
                            },
                            {
                                "value": "Marco Capra"
                            },
                            {
                                "value": "Michele Giacobini"
                            },
                            {
                                "value": "Monica Bestazzoni"
                            },
                            {
                                "value": "No user"
                            },
                            {
                                "value": "Saverio Tassinari"
                            },
                            {
                                "value": "Total"
                            }
                        ]
                    },
                    {
                        "value": "Total",
                        "isSubRowsTotalRequested": null,
                        "subRows": []
                    }
                ],
                "isColumnsTotalRequested": true,
                "isRowsTotalRequested": true
            },
            "data": {
                "rows": [
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='1'&assignedteam='tracker48440'&assignedperson='Alessandra Corona'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='Alessandro Angelo Colombini'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='4'&assignedteam='tracker48440'&assignedperson='Andrea Alessandri'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='2'&assignedteam='tracker48440'&assignedperson='Antonella Spiezio'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='3'&assignedteam='tracker48440'&assignedperson='Antonino Emma'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='2'&assignedteam='tracker48440'&assignedperson='Davide Lombardi'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='3'&assignedteam='tracker48440'&assignedperson='Davide Lombardi'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='2'&assignedteam='tracker48440'&assignedperson='Gianfranco Pennone'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='Ivano Dalmasso'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='3'&assignedteam='tracker48440'&assignedperson='Laura Uccello'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='Laura Uccello'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='3'&assignedteam='tracker48440'&assignedperson='Marco Capra'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='Michele Giacobini'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='Monica Bestazzoni'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='1'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 7,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 7,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='2'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 125,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 125,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='3'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 7,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 7,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='4'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 143,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 143,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 3,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 3,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='1'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 8,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 8,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='2'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 22,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 22,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='3'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 13,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 13,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='5'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 48,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 48,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 6,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 6,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='03 - Da Stimare'&priority='2'&assignedteam='tracker48440'&assignedperson='No user'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 6,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 6,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 197,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 197,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'&assignedteam='tracker48440'&assignedperson='Saverio Tassinari'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": false,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 0,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 0,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            },
                            {
                                "cell": [
                                    {
                                        "value": 1,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 1,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='01 - Da Decidere'&priority='1'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 7,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 7,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='01 - Da Decidere'&priority='2'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 125,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 125,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='01 - Da Decidere'&priority='3'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 8,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 8,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='01 - Da Decidere'&priority='4'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 144,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 144,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='01 - Da Decidere'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='02 - Sospeso'&priority='1'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 12,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 12,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='02 - Sospeso'&priority='2'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 30,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 30,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='02 - Sospeso'&priority='3'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 20,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 20,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='02 - Sospeso'&priority='4'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='02 - Sospeso'&priority='5'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 68,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 68,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='02 - Sospeso'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 6,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 6,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='03 - Da Stimare'&priority='2'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 6,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 6,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'&status='03 - Da Stimare'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 218,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 218,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "assignedteam='tracker48440'"
                            }
                        ]
                    },
                    {
                        "row": [
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='1'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 7,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 7,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='2'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 125,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 125,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='3'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 8,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 8,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'&priority='4'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 144,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 144,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='01 - Da Decidere'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 4,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 4,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='1'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 12,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 12,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='2'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 30,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 30,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='3'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 20,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 20,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='4'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 2,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 2,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'&priority='5'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 68,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 68,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='02 - Sospeso'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 6,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 6,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='03 - Da Stimare'&priority='2'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 6,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 6,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": "status='03 - Da Stimare'"
                            },
                            {
                                "cell": [
                                    {
                                        "value": 218,
                                        "name": "SLA_TOTAL"
                                    }
                                ],
                                "cellTotal": 218,
                                "isTotalCell": true,
                                "selectedFieldValuesFilter": ""
                            }
                        ]
                    }
                ]
            }
            ,
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

        if(column.isSubColumnsTotalRequested){
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
                var subColumnsTotal = 0;
                if(column.isSubColumnsTotalRequested) {
                    subColumnsTotal =1;
                }
                numberOfRows += column.subColumns.length + subColumnsTotal;
                row = <div className="flex-item " style={{flex: column.subColumns.length + subColumnsTotal}}>
                    <div className="flex-container">
                        <div className="flex-item sizeSubCol Aligner column bottomBorder" onClick={this.handleClick.bind(this, column.value)}>{column.value}</div>
                    </div>
                    {this.showSubColumns(column)}
                </div>
            }
            return {row}
        }, this);

        var headerTotal;
        if(this.state.tableStruct.isColumnsTotalRequested){
            numberOfRows +=1;
            headerTotal = <div className="flex-item border-header-total Aligner TotalHeader" style={{flex: 1}} onClick={this.handleClick.bind(this, "headerTotal")}>
                Total
            </div>
        }

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
            }
            return {row}
        }, this);
        var teamTotal;
        if(this.state.tableStruct.isRowsTotalRequested){
            teamTotal = <div className="flex-item ss">
                <div className="flex-container bottomBorder" onClick={this.handleClick.bind(this, "Total")} >
                    <div className="flex-item sizeItem Aligner border-item Total">Total</div>
                </div>
            </div>
        }

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
                        {headerTotal}
                    </div>
                    <div className="flex-container">
                        <div className="flex-item"  style={{flex: 1.5}}>
                        {team}
                        {teamTotal}
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
