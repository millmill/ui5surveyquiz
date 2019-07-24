sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";
	
	var oModel;
	var oData;
	var answers = 2;

	
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
		},
		
		onRemove : function () {
			if (answers > 2){
				answers -= 1;
				this.getView().byId("radio" + answers).setVisible(false);
				this.getView().byId("inputlist" + answers).setVisible(false);
			}
		},
		
		onAdd : function () {
			if (answers < 5){
				this.getView().byId("radio" + answers).setVisible(true);
				this.getView().byId("inputlist" + answers).setVisible(true);
				answers += 1;
			}
		}
	});
});