Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_CampaignVars = require("gge-module:class_CampaignVars");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function () {
  function BasicTrackingStringComposer() {}
  BasicTrackingStringComposer.composeVarDataForRegistration = function (__s5param0, __s5param1) {
    var __s5local0 = BasicTrackingStringComposer.env.campainVars;
    var __s5local1 = this.env.urlVariables.urlParams.get("gci") || "";
    var __s5local2 = [];
    __s5local2[0] = __s5param0;
    __s5local2[1] = __s5param1;
    __s5local2[2] = __s5local0.placement;
    __s5local2[3] = __s5local0.keyword;
    __s5local2[4] = __s5local0.network;
    __s5local2[5] = __s5local0.channelId;
    __s5local2[6] = __s5local0.trafficSource;
    __s5local2[7] = __s5local0.camp;
    __s5local2[8] = __s5local0.adgr;
    __s5local2[9] = __s5local0.matchtype;
    __s5local2[10] = BasicTrackingStringComposer.env.jsVariables.journeyHash;
    __s5local2[11] = BasicTrackingStringComposer.env.urlVariables.websiteId;
    __s5local2[12] = "";
    __s5local2[13] = "";
    __s5local2[14] = "";
    __s5local2[15] = __s5local1;
    __s5local2[16] = __s5local0.ad_click_id;
    return __s5local2.join(__dep_class_CampaignVars.CampaignVars.DEFAULT_DELIMITER);
  };
  Object.defineProperty(BasicTrackingStringComposer, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicTrackingStringComposer;
}();
exports.BasicTrackingStringComposer = __s0local0;
