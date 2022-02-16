sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onNext: function () {
                var oSelectedIndex = this.byId("idRbg1").getSelectedIndex();
                if (oSelectedIndex === 0) {
                    this.oRouter.navTo("view2");
                } else if (oSelectedIndex === 1) {
                    this.oRouter.navTo("chart2");
                } else if (oSelectedIndex === 2) {
                    this.oRouter.navTo("chart3");
                } else if (oSelectedIndex === 3) {
                    this.oRouter.navTo("chartMap4");
                }
            }
        });
    });
