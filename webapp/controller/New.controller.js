sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/core/routing/History"
], function (Controller, History) {
   "use strict";

   return Controller.extend("demo.survey2.SurveyDemo2.controller.New", {
		onNavBack : function() {
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				this.getRouter().navTo("overview", {}, true);
			}
		},
		
		onPressHome: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("overview");
		},
		
		onPressPublish: function (oEvent) {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/SurveycrocdbDest/survey_pkg/myservice.xsodata/");
			var oData = {
				SURVEYID:111, SNAME:"Test4", SOWNER:"Ian", STYPE:"Quiz", SDATE: new Date(),  SLENGTH:1, SQUESTION:"Question", SANSWERS:"Answers"
			};
			oModel.create("/SURVEYS", oData);
		}
   });
});