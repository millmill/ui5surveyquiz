sap.ui.define(["sap/ui/test/Opa5"],function(e){"use strict";return e.extend("demo.survey2.SurveyDemo2.test.integration.pages.Common",{createAWaitForAnEntitySet:function(e){return{success:function(){var t;var r=this.getMockServer().then(function(r){t=r.getEntitySetData(e.entitySet)});this.iWaitForPromise(r);return this.waitFor({success:function(){e.success.call(this,t)}})}}},getMockServer:function(){return new Promise(function(t){e.getWindow().sap.ui.require(["demo/survey2/SurveyDemo2/localService/mockserver"],function(e){t(e.getMockServer())})})}})});