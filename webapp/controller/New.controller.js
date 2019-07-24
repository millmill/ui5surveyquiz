sap.ui.define([
   "./BaseController",
   	"sap/ui/model/json/JSONModel",
   "sap/ui/core/routing/History"
], function (BaseController, JSONModel, History) {
   "use strict";

	var sObjectId;

   return BaseController.extend("demo.survey2.SurveyDemo2.controller.New", {
   		onInit : function(){
   			this.getRouter().getRoute("new").attachPatternMatched(this._onObjectMatched, this);
   		},
   		
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
		/**
		onPressPublish: function (oEvent) {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/test/dummy_pkg/myservice.xsodata/");
			var oData = {
				SQID: 0, SQ_TITLE: "Test"
			};
			oModel.create("/SQ", oData);
		}
		*/
		
		
		  onPressPublish: function (oEvent) {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/project/intern-project/intern-project-odata.xsodata/");
			var oTitle = sap.ui.getCore().getModel("title").getData().title;
			var oOwner = sap.ui.getCore().getModel("user").getData().user;
			var d = new Date();
			var oData = {
				SQID: oOwner + "000", SQ_TITLE: oTitle, SQ_LINK: "www.placeholder.com", SQ_TYPE: sObjectId, DATE: d /**(d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()) */, SQ_OWNER: oOwner, NUM_OF_QUESTIONS: 10
			};
			oModel.create("/SQ", oData);
		},
		
		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		/**
		 * Binds the view to the object path.
		 * @function
		 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
		 * @private
		 */

		_onObjectMatched : function (oEvent) {
			sObjectId =  oEvent.getParameter("arguments").type;
		}
	
	});

});

 