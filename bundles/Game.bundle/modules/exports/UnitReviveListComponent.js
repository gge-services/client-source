Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __s0local0 = function (__s1param0) {
  function UnitReviveListComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0.category = __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL;
    __s3local0._reviveSlotLevelHandlerComponent = new __dep_export_HospitalReviveSlotLevelHandlerComponent.HospitalReviveSlotLevelHandlerComponent();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitReviveListComponent, __s1param0);
  UnitReviveListComponent.prototype.createBuildListItem = function () {
    return new __dep_export_UnitReviveListItem.UnitReviveListItem(new Library.CastleInterfaceElements.ReviveListItem_S());
  };
  UnitReviveListComponent.prototype.fillItems = function (__s7param0, __s7param1 = 0) {
    __s1param0.prototype.fillItems.call(this, __s7param0, __s7param1);
  };
  UnitReviveListComponent.prototype.setItemTooltip = function (__s9param0) {
    __s9param0.disp.toolTipText = null;
    if (__s9param0.slotVO.isLocked) {
      __s9param0.disp.toolTipText = {
        t: "dialog_hospital_lockedSlot_tooltip",
        p: [this._reviveSlotLevelHandlerComponent.getHospitalLevelForSlotIndex(__s9param0.slotVO.pos)]
      };
    } else if (__s9param0.slotVO.isFree) {
      __s9param0.disp.toolTipText = "recruitSlot_available";
    } else {
      var __s9local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__s9param0.slotVO.unitVO.type + "_name");
      if (__s9param0.slotVO.pos != 0) {
        __s9param0.disp.toolTipText = {
          t: "healSlot_occupied_queue",
          p: [__s9local0]
        };
      } else {
        __s9param0.disp.toolTipText = {
          t: "healSlot_occupied",
          p: [__s9local0]
        };
      }
    }
  };
  UnitReviveListComponent.prototype.onItemLockedClick = function (__s16param0) {};
  return UnitReviveListComponent;
}(require("gge-module:export_UnitBuildListComponent").UnitBuildListComponent);
exports.UnitReviveListComponent = __s0local0;
var __dep_export_HospitalReviveSlotLevelHandlerComponent = require("gge-module:export_HospitalReviveSlotLevelHandlerComponent");
var __dep_export_UnitReviveListItem = require("gge-module:export_UnitReviveListItem");
