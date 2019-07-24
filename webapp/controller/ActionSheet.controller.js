sap.ui.define([
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Fragment, Controller, MessageToast) {
	"use strict";

	var CController = Controller.extend("demo.survey2.SurveyDemo2.C", {
		handleOpen : function (oEvent) {
			var oButton = oEvent.getSource();

			// create action sheet only once
			if (!this._actionSheet) {
				this._actionSheet = sap.ui.xmlfragment(
					"demo.survey2.SurveyDemo2.view.ActionSheet",
					this
				);
				this.getView().addDependent(this._actionSheet);
			}

			this._actionSheet.openBy(oButton);
		},

		actionSelected : function(oEvent){
			MessageToast.show("Adding the answer option '" + oEvent.getSource().getText() + "'");
			
		},
		
		makeCheckbox : function(oEvent){
		//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		//	oRouter.navTo("questionCheckbox");
		MessageToast.show("I want to open the view for setting the " + oEvent.getSource().getText() + " option");
		}
	});

	return CController;

});