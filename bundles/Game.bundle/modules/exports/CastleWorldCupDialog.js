Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleWorldCupDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWorldCupDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldCupDialog, __s1param0);
  CastleWorldCupDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btnRules, this.dialogDisp.btnBuyC2, this.dialogDisp.btnClose]);
    this._notEnoughRubyState = new __dep_export_CastleWorldCupDialogNotEnoughRubiesState.CastleWorldCupDialogNotEnoughRubiesState(this);
    this._notVotedState = new __dep_export_CastleWorldCupDialogNotVotedState.CastleWorldCupDialogNotVotedState(this);
    this._alreadyVotedState = new __dep_export_CastleWorldCupDialogAlreadyVotedState.CastleWorldCupDialogAlreadyVotedState(this);
  };
  CastleWorldCupDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.updateState();
  };
  CastleWorldCupDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_WorldCupEventVO.WorldCupEventVO.VALUES_UPDATED, this.bindFunction(this.onValuesUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  CastleWorldCupDialog.prototype.onValuesUpdated = function (__s11param0) {
    this.updateState();
  };
  CastleWorldCupDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_WorldCupEventVO.WorldCupEventVO.VALUES_UPDATED, this.bindFunction(this.onValuesUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  CastleWorldCupDialog.prototype.onEventEnded = function (__s15param0) {
    if (__s15param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_WORLD_CUP) {
      this.hide();
    }
  };
  CastleWorldCupDialog.prototype.hideDialog = function () {
    this.hide();
  };
  CastleWorldCupDialog.prototype.hideLoaded = function (__s20param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s20param0);
    this.currentState.stopTimer();
  };
  CastleWorldCupDialog.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    this.currentState.onClick(__s22param0);
  };
  CastleWorldCupDialog.prototype.destroy = function () {
    if (this.currentState) {
      this.currentState.destroy();
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleWorldCupDialog.prototype.updateState = function () {
    if (this.dialogProperties.worldCupEventVO.voted >= 0) {
      this.setState(this._alreadyVotedState);
    } else if (this.dialogProperties.worldCupEventVO.currencyC2 >= this.dialogProperties.worldCupEventVO.paymentC2) {
      this.setState(this._notVotedState);
    } else {
      this.setState(this._notEnoughRubyState);
    }
  };
  CastleWorldCupDialog.prototype.setState = function (__s32param0) {
    if (this.currentState) {
      this.currentState.resetState();
    }
    this.currentState = __s32param0;
    this.currentState.updateTexts();
    this.currentState.updateElements();
  };
  Object.defineProperty(CastleWorldCupDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldCupDialog.__initialize_static_members = function () {
    CastleWorldCupDialog.NAME = "CastleWorldCupExternal";
  };
  return CastleWorldCupDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleWorldCupDialog = __s0local0;
var __dep_export_WorldCupEventVO = require("gge-module:export_WorldCupEventVO");
var __dep_export_CastleWorldCupDialogAlreadyVotedState = require("gge-module:export_CastleWorldCupDialogAlreadyVotedState");
var __dep_export_CastleWorldCupDialogNotEnoughRubiesState = require("gge-module:export_CastleWorldCupDialogNotEnoughRubiesState");
var __dep_export_CastleWorldCupDialogNotVotedState = require("gge-module:export_CastleWorldCupDialogNotVotedState");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
