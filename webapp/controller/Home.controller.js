sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";

   return Controller.extend("demo.survey2.SurveyDemo2.controller.Home", {
	onPressS: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("new", {type: "Survey"});
		},
	onPressQ: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("new", {type : "Quiz"});
		}
   });
});