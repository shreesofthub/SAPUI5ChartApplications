sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("project1.controller.view2", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                that = this;
                that.oRouter = that.getOwnerComponent().getRouter();
                var data = {
                    'Population': [
                        { "Year": "2010", "Value": "158626687" },
                        { "Year": "2011", "Value": "531160986" },
                        { "Year": "2012", "Value": "915105168" },
                        { "Year": "2013", "Value": "1093786762" },
                        { "Year": "2014", "Value": "1274018495" },
                    ]
                };
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(data);
                var oFrame = new sap.viz.ui5.controls.VizFrame("idFrame", {
                    height: "400px",
                    width: "70%",
                    vizType: "column"
                });
                var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                    dimensions: [{
                        name: 'Year',
                        value: "{Year}"
                    }],

                    measures: [{
                        name: 'Population',
                        value: '{Value}'
                    }],

                    data: {
                        path: "/Population"
                    }
                });
                var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    uid: "valueAxis",
                    type: "Measure",
                    values: ["Population"]
                });
                var oFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    uid: "categoryAxis",
                    type: "Dimension",
                    values: ["Year"]
                });
                oFrame.addFeed(oFeedValueAxis);
                oFrame.addFeed(oFeedCategoryAxis);
                oFrame.setDataset(oDataset);
                oFrame.setModel(oModel);
                oFrame.setVizProperties({
                    title: {
                        text: "Population chart based on Year"
                    }
                })
                this.byId("idPage2").addContent(oFrame);
            },
            onBack: function () {
                this.oRouter.navTo("RouteView1");
            }
        })
    }
);