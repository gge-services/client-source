Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSendTroopsToSeasonAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSendTroopsToSeasonAddUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendTroopsToSeasonAddUnitsDialog, __s1param0);
  CastleSendTroopsToSeasonAddUnitsDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToSeasonAddUnitsDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToSeasonAddUnitsDialog.prototype.onSpecialEventRemoved = function (__s9param0) {
    this.hide();
  };
  CastleSendTroopsToSeasonAddUnitsDialog.__initialize_static_members = function () {
    CastleSendTroopsToSeasonAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
  };
  return CastleSendTroopsToSeasonAddUnitsDialog;
}(require("gge-module:export_CastleSendTroopsAddUnitsDialog").CastleSendTroopsAddUnitsDialog);
exports.CastleSendTroopsToSeasonAddUnitsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
