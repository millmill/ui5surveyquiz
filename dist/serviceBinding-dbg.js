function initModel() {
	var sUrl = "/SurveycrocdbDest/survey_pkg/myservice.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}