function initModel() {
	var sUrl = "/SurveycrocdbDest2/project/project.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}