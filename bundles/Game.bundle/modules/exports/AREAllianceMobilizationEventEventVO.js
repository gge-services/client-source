Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AllianceMobilizationEventDialog = require("gge-module:export_AllianceMobilizationEventDialog");
var __dep_export_AllianceMobilizationEventDialogProperties = require("gge-module:export_AllianceMobilizationEventDialogProperties");
var __s0local0 = function (__s1param0) {
  function AREAllianceMobilizationEventEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AREAllianceMobilizationEventEventVO, __s1param0);
  Object.defineProperty(AREAllianceMobilizationEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AREAllianceMobilizationEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AREAllianceMobilizationEventEventVO.prototype.openDialog = function (__s9param0 = true) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceMobilizationEventDialog.AllianceMobilizationEventDialog, new __dep_export_AllianceMobilizationEventDialogProperties.AllianceMobilizationEventDialogProperties(__dep_export_AllianceMobilizationEventDialog.AllianceMobilizationEventDialog.TAB_QUESTS, this.eventId));
  };
  AREAllianceMobilizationEventEventVO.prototype.getEventSpecificTextID = function (__s11param0) {
    var __s11local0 = __s11param0.replace("_ame_", "_arme_");
    if (__dep_exact_92d05af59ee2ff30.Localize.text(__s11local0) != __s11local0) {
      return __s11local0;
    } else {
      return __s11param0;
    }
  };
  AREAllianceMobilizationEventEventVO.SEEN_EVENT_KEY = "seenAREAllianceMobilizationEvent";
  return AREAllianceMobilizationEventEventVO;
}(require("gge-module:export_AllianceMobilizationEventEventVO").AllianceMobilizationEventEventVO);
exports.AREAllianceMobilizationEventEventVO = __s0local0;
