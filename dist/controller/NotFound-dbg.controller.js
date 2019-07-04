sap.ui.define([
	"./BaseController",
	"sap/ui/core/routing/History"
], function (BaseController, History) {
	"use strict";

	return BaseController.extend("demo.survey2.SurveyDemo2.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed : function () {
			this.getRouter().navTo("overview");
		},
		
		onNavBack : function() {
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				this.getRouter().navTo("overview", {}, true);
			}
		}

	});

});