Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog, __s1param0);
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.prototype.onSpecialEventRemoved = function (__s9param0) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    if (!__s9local0 || __s9local0.eventId == __s9param0.specialEventVO.eventId) {
      this.hide();
    }
  };
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.NAME = "CastleSendResOrTroopsToSeasonInfoInsufficientTime";
  return CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog;
}(require("gge-module:export_CastleStandardYesNoDialog").CastleStandardYesNoDialog);
exports.CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
