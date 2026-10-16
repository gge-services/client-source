Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleAdvancedTroopSelectionEvent = require("gge-module:export_CastleAdvancedTroopSelectionEvent");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ACastleAdvancedTroopSelectionScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._itxt_totalAmount = __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_unit.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    __s3local0._itxt_totalAmount.autoFitToBounds = true;
    __s3local0._itxt_infoMarchspeed = __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_infoMarchspeed.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    __s3param0.mc_infoMarchspeed.toolTipText = "marchspeed";
    __s3param0.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    __s3param0.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    __s3param0.mc_unit.mouseChildren = false;
    __s3param0.mc_infoMarchspeed.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.mc_selection.btn_all, __s3param0.mc_selection.btn_remove, __s3param0.mc_unit], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleAdvancedTroopSelectionScrollItem, __s1param0);
  ACastleAdvancedTroopSelectionScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    }
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.onValueChange = function (__s8param0) {
    this.troopSelectionScrollItemVO.selectedAmount = this._amountComponent.getSelectedAmount();
    this.dispatchEvent(new __dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent(this, __dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED));
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.customFillItem = function () {
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
    this._amountComponent = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountComponent.init(this.disp.mc_selection.mc_slider, this.disp.mc_selection.amountPicker, this.disp.mc_selection.btn_all);
    this._amountComponent.minAmount = 0;
    this._amountComponent.configureTextField(6, true);
    if (this.hasAttackSupportTool()) {
      this._amountComponent.setNumberOfItems(1);
    }
    this._amountComponent.centerSliderButtonOnDefault = false;
    this._amountComponent.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(this.troopSelectionScrollItemVO.unitVO, this.disp.mc_unit.mc_bg, this.advancedSelectionItemBackground, this.advancedSelectionItemBackground_Berimond);
    if (this._itxt_totalAmount.textContentVO) {
      this._itxt_totalAmount.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.inventoryAmount;
    }
    __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(this.troopSelectionScrollItemVO.unitVO, this.disp.mc_unit, 22, 24, 22, 24, 15, new __s0local0(-20, 20), true, function () {}, this.disp.mc_unit.mc_unitLevel);
    this.disp.mc_unit.toolTipText = this.troopSelectionScrollItemVO.unitVO.getNameString();
    this.fillAdditionalComponents();
    this.updateSelection();
    this._itxt_infoMarchspeed.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.unitSpeed;
    this.disp.mc_infoMarchspeed.doCache();
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.hasAttackSupportTool = function () {
    return this.troopSelectionScrollItemVO.unitVO && this.troopSelectionScrollItemVO.unitVO.isOffenseSupportTool;
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.updateSelection = function () {
    if (this.visible && this.scrollItemVO) {
      if (this.hasAttackSupportTool()) {
        this._amountComponent.setMaxNumberOfItems(1);
      } else {
        var __s19local0 = this.troopSelectionScrollItemVO.unitVO;
        if (__s19local0 && __s19local0.amountPerWave > 0 && __s19local0.amountPerWave != this.troopSelectionScrollItemVO.maxAmount) {
          this._amountComponent.setMaxNumberOfItems(this.troopSelectionScrollItemVO.maxToolWaveAmount);
        } else {
          this._amountComponent.setMaxNumberOfItems(this.troopSelectionScrollItemVO.maxAmount);
        }
      }
      this._amountComponent.setSelectedAmount(this.troopSelectionScrollItemVO.selectedAmount);
      this._amountComponent.enableComponent(this.troopSelectionScrollItemVO.isAdjustable);
      this.disp.mc_selection.btn_remove.visible = this.troopSelectionScrollItemVO.selectedAmount > 0;
      if (this.disp.mc_selection.icon_discount) {
        this.disp.mc_selection.icon_discount.visible = false;
      }
      if (!this.disp.mc_selection.btn_remove.visible && this.troopSelectionScrollItemVO.sourceArea) {
        var __s19local1 = __dep_export_CastleModel.CastleModel.permanentCastleData.getUnitBaseLocation(this.troopSelectionScrollItemVO.sourceArea).unitsVO.getAssociatedEventPackage(this.troopSelectionScrollItemVO.unitVO.wodId);
        var __s19local2 = __dep_exact_f855840627e6e145.int(__s19local1 ? __s19local1.c2Discount : 0);
        var __s19local3 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
        if (__s19local3 && __s19local3.wodIDHasDiscount(this.troopSelectionScrollItemVO.unitVO.wodId) && __s19local2 == 0) {
          __s19local2 = __s19local3.discount;
        }
        if (__s19local2 > 0 && this.disp.mc_selection.icon_discount) {
          this.disp.mc_selection.icon_discount.visible = true;
          __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_selection.icon_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s19local2]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
          this.disp.mc_selection.icon_discount.toolTipText = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_primeSale_tt", [__s19local2]);
          this.disp.mc_selection.icon_discount.mouseChildren = false;
        }
      }
    }
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.onMouseClick = function (__s30param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      switch (__s30param0.target) {
        case this.disp.mc_selection.btn_remove:
          this._amountComponent.setSelectedAmount(0);
          this.troopSelectionScrollItemVO.selectedAmount = 0;
          break;
        case this.disp.mc_unit:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.troopSelectionScrollItemVO.unitVO));
      }
      __s1param0.prototype.onMouseClick.call(this, __s30param0);
    }
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this._amountComponent.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    this._amountComponent.destroy();
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.fillAdditionalComponents = function () {};
  Object.defineProperty(ACastleAdvancedTroopSelectionScrollItem.prototype, "troopSelectionScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAdvancedTroopSelectionScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ACastleAdvancedTroopSelectionScrollItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
