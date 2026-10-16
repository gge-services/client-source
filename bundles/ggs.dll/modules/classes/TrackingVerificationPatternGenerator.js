Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __s0local0 = function () {
  function TrackingVerificationPatternGenerator() {}
  TrackingVerificationPatternGenerator.getPattern = function (__s5param0) {
    var __s5local0 = TrackingVerificationPatternGenerator.standardPattern;
    switch (__s5param0) {
      case TrackingVerificationPatternGenerator.CLASSIC_STANDARD_PATTERN:
        break;
      case TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_WWW_PATTERN:
        __s5local0 = __s5local0.concat(TrackingVerificationPatternGenerator.firstSessionStandardPattern, TrackingVerificationPatternGenerator.firstInstanceWWWCase);
        break;
      case TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_SSO_PATTERN:
        __s5local0 = __s5local0.concat(TrackingVerificationPatternGenerator.firstSessionStandardPattern, TrackingVerificationPatternGenerator.firstInstanceSSOCase);
        break;
      case TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_LP_PATTERN:
        __s5local0 = __s5local0.concat(TrackingVerificationPatternGenerator.firstSessionStandardPattern);
        break;
      default:
        __dep_exact_048b0d27b75c40dd.error("Unknown tracking pattern!");
    }
    return __s5local0;
  };
  Object.defineProperty(TrackingVerificationPatternGenerator, "standardPattern", {
    get: function () {
      return [__dep_class_TrackingEventIds.TrackingEventIds.IMPRESSION];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerificationPatternGenerator, "firstSessionStandardPattern", {
    get: function () {
      return [__dep_class_TrackingEventIds.TrackingEventIds.WORLD_ASSIGNMENT, __dep_class_TrackingEventIds.TrackingEventIds.CONNECTION, __dep_class_TrackingEventIds.TrackingEventIds.CONNECTION, __dep_class_TrackingEventIds.TrackingEventIds.CONNECTION, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.LOADING_CIRCLE, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.FIRST_GAME_SCREEN, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.LOADING_BAR, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.NETWORK_XML_START, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.NETWORK_XML_END, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.LANG_XML_START, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.LANG_XML_END, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ITEM_XML_START, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ITEM_XML_END, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ASSETS_START, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ASSETS_END, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.GAME_SWF_LOADED, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.SERVER_CONNECT, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.SERVER_CONNECT_SUCCESS, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.VERSION_CHECK_SEND, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.GAME_JOINED];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerificationPatternGenerator, "firstInstanceWWWCase", {
    get: function () {
      return [__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ENTER_NAME, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ENTER_EMAIL, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ENTER_PASSWORD, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.REGISTERED];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerificationPatternGenerator, "firstInstanceSSOCase", {
    get: function () {
      return [__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA_SSO, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.REGISTERED];
    },
    enumerable: true,
    configurable: true
  });
  TrackingVerificationPatternGenerator.CLASSIC_STANDARD_PATTERN = "CLASSIC_STANDARD_PATTERN";
  TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_SSO_PATTERN = "CLASSIC_FIRST_INSTANCE_SSO_PATTERN";
  TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_WWW_PATTERN = "CLASSIC_FIRST_INSTANCE_WWW_PATTERN";
  TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_LP_PATTERN = "CLASSIC_FIRST_INSTANCE_LP_PATTERN";
  return TrackingVerificationPatternGenerator;
}();
exports.TrackingVerificationPatternGenerator = __s0local0;
