Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_GlobalEffectEvent = require("gge-module:export_GlobalEffectEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconGlobalEffectEvent() {
    return __s1param0.call(this, "GlobalEffectEventButton", __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_HIGH) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconGlobalEffectEvent, __s1param0);
  StatusIconGlobalEffectEvent.prototype.setVisibilityLoaded = function () {
    if (this.eventVO && this.eventVO.remainingEventTimeInSeconds > 3 && this.eventVO.getShownItems().length > 0) {
      this.setTooltip("dialog_globalEffects_header");
      this.iconDisp.mc_new.visible = this.eventVO.showNewSign > 0;
      this.textFieldManager.registerTextField(this.iconDisp.mc_new.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.eventVO.showNewSign));
      this.show();
    } else {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconGlobalEffectEvent.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconGlobalEffectEvent.prototype.onClick = function () {
    if (this.eventVO) {
      this.eventVO.openDialog();
    } else {
      this.hide();
    }
  };
  StatusIconGlobalEffectEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalEffectData.addEventListener(__dep_export_GlobalEffectEvent.GlobalEffectEvent.SEEN_EFFECTS_UPDATED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconGlobalEffectEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalEffectData.removeEventListener(__dep_export_GlobalEffectEvent.GlobalEffectEvent.SEEN_EFFECTS_UPDATED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconGlobalEffectEvent.prototype.onChangePosibilityToShowMe = function (__s19param0) {
    this.setVisibility();
  };
  return StatusIconGlobalEffectEvent;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.StatusIconGlobalEffectEvent = __s0local0;
