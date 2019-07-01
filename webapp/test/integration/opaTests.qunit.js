/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"internalSurveyTool/internalSurveyTool/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});