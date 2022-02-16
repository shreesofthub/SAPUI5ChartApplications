sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/suite/ui/commons/ChartContainer",
    "sap/suite/ui/commons/ChartContainerContent"
],
    function (Controller, oChartContainer, oChartContainerContent) {
        "use strict";

        return Controller.extend("project1.controller.chart3", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                var oData = {
                    "customerSales": [
                        {
                            "name": "TATA",
                            "sales": "20000"
                        },
                        {
                            "name": "Mahindra",
                            "sales": "10000"
                        },
                        {
                            "name": "IBM",
                            "sales": "15000"
                        },
                        {
                            "name": "Kirlosker",
                            "sales": "1500"
                        },
                        {
                            "name": "Crompton Greaves",
                            "sales": "2000"
                        },
                        {
                            "name": "BAJAJ",
                            "sales": "5000"
                        },
                        {
                            "name": "Philips",
                            "sales": "1000"
                        }
                    ],
                    "salesByCountry": [
                        {
                            "country": "India",
                            "sales": "15000"
                        },
                        {
                            "country": "JAPAN",
                            "sales": "12000"
                        },
                        {
                            "country": "Singpore",
                            "sales": "14000"
                        },
                        {
                            "country": "China",
                            "sales": "1000"
                        },
                        {
                            "country": "CANADA",
                            "sales": "8000"
                        },
                        {
                            "country": "USA",
                            "sales": "2000"
                        }, {
                            "country": "RUSSIA",
                            "sales": "13000"
                        },
                        {
                            "country": "GERMAN",
                            "sales": "5000"
                        }
                    ]
                };
                var oModel = new sap.ui.model.json.JSONModel(oData);
                var oView = this.getView();
                oView.setModel(oModel);
                this.adjustMyChartBox(oView,"idVizFrame3_1","idChart3BLayC1");
                this.adjustMyChartBox(oView,"idVizFrame3_2","idChart3BLayC2");
                this.adjustMyChartBox(oView,"idVizFrame3_3","idChart3BLayC3");
                this.adjustMyChartBox(oView,"idVizFrame3_4","idChart3BLayC4");
            },
            adjustMyChartBox: function (oView, sChartId, oBlockId) {
                var oVizFrame1 = oView.byId(sChartId);
                var chartContainerContent = new oChartContainerContent({
                    content: [oVizFrame1]
                });
                var chartContainer = new oChartContainer({
                    content: [chartContainerContent]
                });
                chartContainer.setShowFullScreen(true);
                // chartContainer.setAutoAdjustHeight(true);
                oView.byId(oBlockId).addContent(chartContainer);
            },
            onBack: function () {
                this.oRouter.navTo("RouteView1");
            }

        });
    });
