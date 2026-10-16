Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAttackAddUnitsDialog() {
    return __s1param0.call(this, CastleAttackAddUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAttackAddUnitsDialog, __s1param0);
  CastleAttackAddUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._amountComponent = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_addUnit_remove");
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all, this.dialogDisp.mc_slider.btn_slider]);
  };
  CastleAttackAddUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    var __s7local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_defenceAddToolConsumption"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.addUnitsProperties.unitVO.getNameString()));
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.addUnitsProperties.unitVO, "ToolUnitVO")) {
      __s7local0.textContentVO.textId = "dialog_defenceAddToolConsumption";
    } else {
      __s7local0.textContentVO.textId = this.addUnitsProperties.unitVO.getShortInfoString();
    }
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleAttackAddUnitsDialog.MAX_WIDTH, CastleAttackAddUnitsDialog.MAX_HEIGHT, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.dialogDisp.btn_remove.visible = this.addUnitsProperties.editMode;
    this.dialogDisp.mc_slider.visible = true;
    var __s7local1 = __dep_exact_f855840627e6e145.int(this.addUnitsProperties.maxAmount);
    var __s7local2 = __dep_exact_f855840627e6e145.int(this.addUnitsProperties.unitVO.inventoryAmount);
    if (this.addUnitsProperties.editMode) {
      __s7local2 += __dep_exact_f855840627e6e145.int(this.addUnitsProperties.itemVO.unitVO.inventoryAmount);
    }
    __s7local2 = this.addUnitsProperties.maxAmountOnlyForSoldier && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.addUnitsProperties.unitVO, "ToolUnitVO") ? __dep_exact_f855840627e6e145.int(Math.min(__s7local2, __dep_exact_26a421b704832cff.TravelConst.MAX_TOOLS_PER_SLOT)) : __dep_exact_f855840627e6e145.int(Math.min(__s7local2, __s7local1));
    var __s7local3 = __dep_exact_f855840627e6e145.int(this.addUnitsProperties.itemVO.isFree() ? 0 : this.addUnitsProperties.itemVO.getAmount());
    __s7local2 = __dep_exact_f855840627e6e145.int(Math.min(__s7local2, this.addUnitsProperties.itemContainer.freeItems + __s7local3));
    this._amountComponent.setNumberOfItems(__s7local2);
    this._amountComponent.setSelectedAmount(__s7local3);
    this._amountComponent.selectTextfield();
    this._amountComponent.enableSliderComponent(true);
    this._amountComponent.enablePickerComponent(true);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleAttackAddUnitsDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
  };
  CastleAttackAddUnitsDialog.prototype.onRemoveSpecialEvent = function (__s14param0) {
    if (__s14param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE && this.addUnitsProperties.targetAreaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ALIEN_CAMP || __s14param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE && this.addUnitsProperties.targetAreaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) {
      this.hide();
    }
  };
  CastleAttackAddUnitsDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onConfirmToAddUnits();
          break;
        case this.dialogDisp.btn_remove:
          this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, 0);
          this.hide();
      }
    }
  };
  CastleAttackAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    if (!this.addUnitsProperties.itemVO.isFree()) {
      this.addUnitsProperties.addItemFunction(this.addUnitsProperties.itemVO.unitVO, this.addUnitsProperties.itemVO, 0);
    }
    this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, this._amountComponent.getSelectedAmount());
    this.hide();
  };
  Object.defineProperty(CastleAttackAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
  CastleAttackAddUnitsDialog.MAX_WIDTH = 70;
  CastleAttackAddUnitsDialog.MAX_HEIGHT = 70;
  return CastleAttackAddUnitsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAttackAddUnitsDialog = __s0local0;
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
