Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ACastleDismissUnitsDialog(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0._oldSelectUnitAmount = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 || ACastleDismissUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleDismissUnitsDialog, __s1param0);
  ACastleDismissUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.btnHelp.toolTipText = "generic_help";
    this._amountComponent ||= new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.updateUnitAmount));
    this.initBasicButtons([this.dialogDisp.btnClose, this.dialogDisp.btnCancel, this.dialogDisp.btnDismiss, this.dialogDisp.btnHelp]);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnDismiss, false);
  };
  ACastleDismissUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.initAmountComponent(this.dismissUnitsDialogProperties.maxUnits);
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.dismissUnitsDialogProperties.unitVO, this.dialogDisp.mc_content, ACastleDismissUnitsDialog.WODPIC_MAX_WIDTH, ACastleDismissUnitsDialog.WODPIC_MAX_HEIGHT, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btnDismiss, true);
  };
  ACastleDismissUnitsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.dialogDisp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.updateUnitAmount));
  };
  ACastleDismissUnitsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.dialogDisp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.updateUnitAmount));
  };
  ACastleDismissUnitsDialog.prototype.updateUnitAmount = function (__s13param0 = null) {
    if (this._oldSelectUnitAmount != this.selectedUnitAmount) {
      this._oldSelectUnitAmount = this.selectedUnitAmount;
      this.onUnitAmountChanged();
    }
  };
  ACastleDismissUnitsDialog.prototype.initAmountComponent = function (__s16param0) {
    this._amountComponent.setNumberOfItems(__s16param0);
    this._amountComponent.setSelectedAmount(__s16param0);
    this._oldSelectUnitAmount = -1;
    this.updateUnitAmount();
  };
  ACastleDismissUnitsDialog.prototype.onClick = function (__s18param0) {
    if (!this.isLocked && !this.isWaitingForServerMessage && (__s1param0.prototype.onClick.call(this, __s18param0), __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target))) {
      switch (__s18param0.target) {
        case this.dialogDisp.btnClose:
        case this.dialogDisp.btnCancel:
          this.hide();
          break;
        case this.dialogDisp.btnDismiss:
          this.dismissUnits();
          this.hide();
          break;
        case this.dialogDisp.btnHelp:
          this.showHelp();
      }
    }
  };
  Object.defineProperty(ACastleDismissUnitsDialog.prototype, "selectedUnitAmount", {
    get: function () {
      return this._amountComponent.getSelectedAmount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleDismissUnitsDialog.prototype, "maxSelectableUnits", {
    set: function (__s24param0) {
      this._amountComponent.setMaxNumberOfItems(__s24param0);
    },
    enumerable: true,
    configurable: true
  });
  ACastleDismissUnitsDialog.prototype.dismissUnits = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleDismissUnitsDialog.prototype.showHelp = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleDismissUnitsDialog.prototype.onUnitAmountChanged = function () {};
  Object.defineProperty(ACastleDismissUnitsDialog.prototype, "dismissUnitsDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ACastleDismissUnitsDialog.__initialize_static_members = function () {
    ACastleDismissUnitsDialog.NAME = "CastleRecruitDismissUnitsEx";
    ACastleDismissUnitsDialog.WODPIC_MAX_WIDTH = 100;
    ACastleDismissUnitsDialog.WODPIC_MAX_HEIGHT = 90;
  };
  return ACastleDismissUnitsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ACastleDismissUnitsDialog = __s0local0;
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
