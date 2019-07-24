sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";
	
	var oModel;
	var oData;
	
	return Controller.extend("demo.survey2.SurveyDemo2.controller.SurveyQuestion", {
		getQuestion : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/InputValue");
			var sMsg = oBundle.getText("question", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		onOpenQDialog : function () {
			this.getOwnerComponent().openSaveQDialog();
		},
		onInit : function () {
			oData = {
				//answers : {
					answer0 : "Yes",
					answer1 : "No",
					answer2 : "Maybe",
					answer3 : "",
					answer4 : ""
				//} 
			};
			oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		handleLiveChange : function () {
			alert("Live Change");
			//var sValue = oEvent.getParameter("value");
			//this.byId("enterQ").setText(sValue);
		},
		
		onAdd : function () {
			var oButton = new sap.m.RadioButton();
			oButton.setText(oModel.getData().answer2);
			this.byId("answers").addButton(oButton);
			var oInput = new sap.m.Input();
			oInput.setValueLiveUpdate(true);
			var x = this;
			oInput.attachLiveChange(x.handleLiveChange());
			oInput.setValue(oModel.getData().answer2);
			var oInputList = new sap.m.InputListItem();
			oInputList.addContent(oInput);
			this.byId("answers_list").addItem(oInputList);
		}
	});
});