Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleRecruitStrongholdAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRecruitStrongholdAddUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitStrongholdAddUnitsDialog, __s1param0);
  CastleRecruitStrongholdAddUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.itxt_name ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_info ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.dialogDisp.btn_remove.visible = false;
    this.unitIcon = new Library.CastleInterfaceElements_Icons.Icon_UnitsNoshadow_Big();
    this.strongholdIcon = new Library.CastleInterfaceElements.Icon_Stronghold_Big();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(this.unitIcon, 22, 22);
    if (!this._amountComponent) {
      this._amountComponent = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
      this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
      this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    }
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all]);
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.showLoaded = function (__s8param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s8param0);
    this._amountComponent.selectTextfield();
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.hideLoaded = function (__s10param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.applyPropertiesLoaded = function (__s12param0 = null) {
    this.itxt_name.textContentVO.textId = this.addUnitsProperties.unitVO.getNameString();
    this.itxt_info.textContentVO.textId = this.addUnitsProperties.unitVO.getShortInfoString();
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleRecruitStrongholdAddUnitsDialog.MAX_WIDTH, CastleRecruitStrongholdAddUnitsDialog.MAX_HEIGHT, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mcHolderLeft);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mcHolderRight);
    if (this.addUnitsProperties.store) {
      this.dialogDisp.mcHolderLeft.scaleX = this.dialogDisp.mcHolderLeft.scaleY = 1.4;
      this.dialogDisp.mcHolderRight.scaleX = this.dialogDisp.mcHolderRight.scaleY = 1;
      this.dialogDisp.mcHolderLeft.addChild(this.unitIcon);
      this.dialogDisp.mcHolderRight.addChild(this.strongholdIcon);
      this.dialogDisp.tooltipHitarea.toolTipText = "stronghold_MoveIn";
    } else {
      this.dialogDisp.mcHolderLeft.scaleX = this.dialogDisp.mcHolderLeft.scaleY = 1;
      this.dialogDisp.mcHolderRight.scaleX = this.dialogDisp.mcHolderRight.scaleY = 1.4;
      this.dialogDisp.mcHolderLeft.addChild(this.strongholdIcon);
      this.dialogDisp.mcHolderRight.addChild(this.unitIcon);
      this.dialogDisp.tooltipHitarea.toolTipText = "stronghold_MoveOut";
    }
    if (this.addUnitsProperties.unitVO.isStronghold) {
      this.initAmountComponent(this.addUnitsProperties.maxAmount, 1);
    } else {
      this.initAmountComponent(this.addUnitsProperties.maxAmount, this.addUnitsProperties.maxAmount);
    }
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.initAmountComponent = function (__s18param0, __s18param1 = 1) {
    this._amountComponent.setNumberOfItems(__s18param0);
    this._amountComponent.setSelectedAmount(__s18param1);
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.onInventoryUpdated = function (__s20param0) {
    var __s20local0 = this._amountComponent.getSelectedAmount();
    if ((__s20local0 = this.addUnitsProperties.store ? __dep_exact_f855840627e6e145.int(Math.min(__s20local0, __dep_export_CastleModel.CastleModel.militaryData.currentHiddenSoldierSpace, __dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId))) : __dep_exact_f855840627e6e145.int(Math.min(__s20local0, __dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId)))) > 0) {
      if (this.addUnitsProperties.unitVO.isStronghold) {
        this.initAmountComponent(__dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId), 1);
      } else {
        this.initAmountComponent(Math.min(__dep_export_CastleModel.CastleModel.militaryData.currentHiddenSoldierSpace, __dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId)), __s20local0);
      }
    } else {
      this.hide();
    }
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO.wodId, this._amountComponent.getSelectedAmount());
    if (this.addUnitsProperties.itemVO) {
      if (!this.addUnitsProperties.itemVO.isFree()) {
        this.addUnitsProperties.addItemFunction(this.addUnitsProperties.itemVO.unitVO, this.addUnitsProperties.itemVO, 0);
      }
      this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, this._amountComponent.getSelectedAmount());
    }
    this.hide();
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      switch (__s30param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onConfirmToAddUnits();
          break;
        case this.dialogDisp.btn_remove:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleRecruitStrongholdAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitStrongholdAddUnitsDialog.__initialize_static_members = function () {
    CastleRecruitStrongholdAddUnitsDialog.NAME = "CastleRecruitStrongholdAddUnitsEx";
    CastleRecruitStrongholdAddUnitsDialog.MAX_WIDTH = 70;
    CastleRecruitStrongholdAddUnitsDialog.MAX_HEIGHT = 70;
  };
  return CastleRecruitStrongholdAddUnitsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleRecruitStrongholdAddUnitsDialog = __s0local0;
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
