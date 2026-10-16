Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function AICCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AICCommand, __s1param0);
  Object.defineProperty(AICCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ALLIANCE_INVASION_CAMP_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AICCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    if (__s9param1 && __s9param1.length > 0) {
      __s9local0 = JSON.parse(__s9param1[1]);
    }
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        var __s9local1 = __s9local0[__dep_exact_26a421b704832cff.CommKeys.ALLIANCE_CAMP][0];
        if (!__s9local1) {
          return;
        }
        var __s9local2 = __s9local1[__dep_exact_26a421b704832cff.CommKeys.EVENT_ID];
        var __s9local3 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s9local2), "IAllianceCampUpdateable");
        if (__s9local3) {
          var __s9local4 = __dep_export_CastleModel.CastleModel.allianceInvasionCampData.getAllianceCamp(__s9local1[__dep_exact_26a421b704832cff.CommKeys.ALLIANCE_CAMP_ID], __s9local3.isDifficultyScalingActivated ? __s9local1[__dep_exact_26a421b704832cff.CommKeys.ALLIANCE_CAMP_ID] : -1);
          if (!__s9local4) {
            return false;
          }
          __s9local3.parse_AIC(__s9local4, __s9local1[__dep_exact_26a421b704832cff.CommKeys.ALLIANCE_RAGE]);
          __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s9local2)));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return AICCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.AICCommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
