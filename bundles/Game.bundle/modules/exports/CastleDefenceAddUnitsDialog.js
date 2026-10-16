Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleDefenceAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleDefenceAddUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDefenceAddUnitsDialog, __s1param0);
  CastleDefenceAddUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all]);
  };
  CastleDefenceAddUnitsDialog.prototype.setInfoText = function () {
    if (this.addUnitsProperties.unitVO.dollWod != 0) {
      this.itxt_info.textContentVO.textId = "dialog_addDoll_defenceInfo";
    } else {
      this.itxt_info.textContentVO.textId = "dialog_addUnit_defenceInfo";
    }
  };
  CastleDefenceAddUnitsDialog.prototype.showLoaded = function (__s11param0 = null) {
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.addUnitsProperties.unitVO.getNameString()));
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    var __s11local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    if (this.addUnitsProperties.unitVO.numberofDolls <= 0) {
      __s11local0.textContentVO.textId = "dialog_defenceAddToolConsumption";
    }
    this._amountComponent ||= new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    this.setInfoText();
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleDefenceAddUnitsDialog.MAX_WIDTH, CastleDefenceAddUnitsDialog.MAX_HEIGHT, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.dialogDisp.btn_remove.visible = this.addUnitsProperties.editMode;
    var __s11local1 = __dep_exact_f855840627e6e145.int(this.addUnitsProperties.unitVO.inventoryAmount);
    if (this.addUnitsProperties.editMode) {
      __s11local1 += __dep_exact_f855840627e6e145.int(this.addUnitsProperties.itemVO.unitVO.inventoryAmount);
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.addUnitsProperties.unitVO, "ToolUnitVO")) {
      __s11local1 = __dep_exact_f855840627e6e145.int(Math.min(__s11local1, __dep_exact_26a421b704832cff.DefenseConst.MAX_SLOTSIZE));
    }
    var __s11local2 = __dep_exact_f855840627e6e145.int(this.addUnitsProperties.itemVO.isFree() ? 0 : this.addUnitsProperties.itemVO.getAmount());
    if (!this.addUnitsProperties.itemVO.isFree() && this.addUnitsProperties.unitVO.type != this.addUnitsProperties.itemVO.unitVO.type) {
      __s11local2 = 1;
    }
    __s11local1 = __dep_exact_f855840627e6e145.int(Math.min(__s11local1, this.addUnitsProperties.itemContainer.freeItems + __s11local2));
    this._amountComponent.setNumberOfItems(__s11local1);
    this._amountComponent.setSelectedAmount(__s11local2);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_close, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_cancle, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_remove, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_all, this.isOutOfTutorial());
    this._amountComponent.selectTextfield();
    this._amountComponent.enablePickerComponent(true);
    this._amountComponent.enableSliderComponent(true);
    __s1param0.prototype.showLoaded.call(this, __s11param0);
  };
  CastleDefenceAddUnitsDialog.prototype.onClick = function (__s17param0) {
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
  CastleDefenceAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    if (!this.addUnitsProperties.itemVO.isFree()) {
      this.addUnitsProperties.addItemFunction(this.addUnitsProperties.itemVO.unitVO, this.addUnitsProperties.itemVO, 0);
    }
    this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, this._amountComponent.getSelectedAmount());
    this.hide();
  };
  Object.defineProperty(CastleDefenceAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceAddUnitsDialog.__initialize_static_members = function () {
    CastleDefenceAddUnitsDialog.NAME = "CastleDefenceAddUnitsEx";
    CastleDefenceAddUnitsDialog.MAX_WIDTH = 90;
    CastleDefenceAddUnitsDialog.MAX_HEIGHT = 100;
  };
  return CastleDefenceAddUnitsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleDefenceAddUnitsDialog = __s0local0;
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
