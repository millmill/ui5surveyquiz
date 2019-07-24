sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";
	
	return Controller.extend("demo.survey2.SurveyDemo2.controller.SurveyTitle", {
		onInit	   : function () {
			//var oJsonModel = new sap.ui.model.json.JSONModel({data : {}});
			//sap.ui.getCore().setModel(oJsonModel, "title");

			//var oData = sap.ui.getCore().getModel("title").getData();
			//var oJsonModel = new JSONModel({data : {}});
			//this.getView().setModel(oJsonModel);
		},
		
		getTitle   : function () {
			// read msg from i18n model
			var sRecipient = sap.ui.getCore().getModel("title").getData().title;
			// show message
			MessageToast.show(sRecipient);
		},
		onOpenTDialog : function () {
			this.getOwnerComponent().openSaveTDialog();
		},
		handleLiveChange : function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oJsonModel = new sap.ui.model.json.JSONModel({title : sValue});
			sap.ui.getCore().setModel(oJsonModel, "title");
			//this.byId("enterT").setText(sValue);
		}
	});
});