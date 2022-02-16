sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"],
    function (oController, oHistory) {
        return oController.extend("project1.controller.chart2", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                var oModel = new sap.ui.model.json.JSONModel({
                    "Reports": [{
                        "Year": "2017",

                        "SAP": 100,
                        "SAPUI5": 100,
                        "ABAP": 200,
                        "JAVA": 200
                    }, {
                        "Year": "2018",

                        "SAP": 200,
                        "SAPUI5": 50,
                        "ABAP": 200,
                        "JAVA": 200
                    }, {
                        "Year": "2019",

                        "SAP": 200,
                        "SAPUI5": 50,
                        "ABAP": 200,
                        "JAVA": 200
                    }, {
                        "Year": "2020",

                        "SAP": 200,
                        "SAPUI5": 100,
                        "ABAP": 200,
                        "JAVA": 200
                    }

                    ]
                });
                var oVizFrame = this.byId("idVizFrame");
                var oTable = this.byId("idChartTable1");
                oTable.setModel(oModel);
                oVizFrame.setModel(oModel);
            },
            onBack: function () {
                var history = oHistory.getInstance();
                var prevTag = history.getPreviousHash();
                if (prevTag !== undefined) {
                    window.history.go(-1);

                } else {
                    this.oRouter.navTo("RouteView1");
                }
            }
        });
    }
)