Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSendTroopsToFactionAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSendTroopsToFactionAddUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendTroopsToFactionAddUnitsDialog, __s1param0);
  CastleSendTroopsToFactionAddUnitsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToFactionAddUnitsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToFactionAddUnitsDialog.prototype.onSpecialEventRemoved = function (__s9param0) {
    if (__s9param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION) {
      this.hide();
    }
  };
  CastleSendTroopsToFactionAddUnitsDialog.__initialize_static_members = function () {
    CastleSendTroopsToFactionAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
  };
  return CastleSendTroopsToFactionAddUnitsDialog;
}(require("gge-module:export_CastleSendTroopsAddUnitsDialog").CastleSendTroopsAddUnitsDialog);
exports.CastleSendTroopsToFactionAddUnitsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
