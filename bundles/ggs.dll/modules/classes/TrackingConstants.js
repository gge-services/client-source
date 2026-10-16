Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = function () {
  function TrackingConstants() {}
  Object.defineProperty(TrackingConstants, "JSON_TRACKING_URL", {
    get: function () {
      var __s5local0 = __dep_export_AssetLoadingFlowType.EnvGlobalsHandler.globals.publicGameTitleForPaths;
      if (__dep_export_AssetLoadingFlowType.EnvGlobalsHandler.globals.isLocal || __dep_export_AssetLoadingFlowType.EnvGlobalsHandler.globals.isTest) {
        return __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __s5local0 + "-test-client-tracking.goodgamestudios.com/";
      } else {
        return __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __s5local0 + "-client-tracking.goodgamestudios.com/";
      }
    },
    enumerable: true,
    configurable: true
  });
  TrackingConstants.TEST_TRACKING_SERVER = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://10.0.17.151:8443/";
  return TrackingConstants;
}();
exports.TrackingConstants = __s0local0;
