sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        return Controller.extend("project1.controller.chartMap4", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter().attachRoutePatternMatched(this.mapTheMap, this);
                var oData = {
                    "salesByCountry": [
                        {
                            "country": "IN",
                            "sales": "15000"
                        },
                        {
                            "country": "IT",
                            "sales": "12000"
                        },
                        {
                            "country": "AR",
                            "sales": "14000"
                        },
                        {
                            "country": "MX",
                            "sales": "1000"
                        },
                        {
                            "country": "ES",
                            "sales": "8000"
                        },
                        {
                            "country": "US",
                            "sales": "2000"
                        }, {
                            "country": "FR",
                            "sales": "13000"
                        },
                        {
                            "country": "DE",
                            "sales": "5000"
                        }
                    ]
                };
                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel);
            },
            mapTheMap: function () {
                var that = this;
                var getModel = this.getView().getModel();
                if (getModel !== undefined) {
                    var oCountry = getModel.getProperty("/salesByCountry");
                    var green = 255, red = 1;
                    var oMapData = [];
                    var facto = 255 / oCountry.length;
                    for (var i = 0; i < oCountry.length; i++) {
                        var item = oCountry[i];
                        var newGreen = green - facto * (i + 1);
                        var newRed = red + facto * (i + 1);
                        var color = 'rgb(' + parseInt(newRed) + ',' + parseInt(newGreen) + ',0)';
                        item.sales = color;
                        oMapData.push(item);
                    }
                    // getModel.setProperty("/salesByCountry",oMapData);
                    var oModelColor = new sap.ui.model.json.JSONModel({
                        "mapData": oMapData
                    });
                    that.getView().setModel(oModelColor, "colorModel");
                }
            },
            onBack: function () {
                this.oRouter.navTo("RouteView1");
            }

        });
    });
