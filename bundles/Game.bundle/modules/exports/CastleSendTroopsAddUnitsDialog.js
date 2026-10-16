Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleSendTroopsAddUnitsDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 ?? CastleSendTroopsAddUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendTroopsAddUnitsDialog, __s1param0);
  CastleSendTroopsAddUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all, this.dialogDisp.mc_slider.btn_slider]);
  };
  CastleSendTroopsAddUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.i_txt_infoConsumption = this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.addUnitsProperties.unitVO.getShortInfoString()));
    this.i_txt_infoConsumption.autoFitToBounds = true;
    this.i_txt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.addUnitsProperties.unitVO.getNameString()));
    this._amountComponent ||= new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleSendTroopsAddUnitsDialog.MAX_WIDTH, CastleSendTroopsAddUnitsDialog.MAX_HEIGHT, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.dialogDisp.btn_remove.visible = this.addUnitsProperties.currentItems > 0;
    this.dialogDisp.mc_slider.visible = true;
    this._amountComponent.setNumberOfItems(this.addUnitsProperties.maxItems);
    this._amountComponent.setSelectedAmount(this.addUnitsProperties.currentItems);
    this._amountComponent.selectTextfield();
    __s1param0.prototype.showLoaded.call(this);
  };
  CastleSendTroopsAddUnitsDialog.prototype.onClick = function (__s9param0) {
    var __s9local0;
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onConfirmToAddUnits();
          break;
        case this.dialogDisp.btn_remove:
          __s9local0 = [this.addUnitsProperties.unitVO, 0];
          this.addUnitsProperties.addItemFunction(__s9local0);
          this.hide();
      }
    }
  };
  CastleSendTroopsAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    var __s13local0;
    __s13local0 = [this.addUnitsProperties.unitVO, this._amountComponent.getSelectedAmount()];
    this.addUnitsProperties.addItemFunction(__s13local0);
    this.hide();
  };
  Object.defineProperty(CastleSendTroopsAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendTroopsAddUnitsDialog.__initialize_static_members = function () {
    CastleSendTroopsAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
    CastleSendTroopsAddUnitsDialog.MAX_WIDTH = 70;
    CastleSendTroopsAddUnitsDialog.MAX_HEIGHT = 70;
  };
  return CastleSendTroopsAddUnitsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSendTroopsAddUnitsDialog = __s0local0;
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
