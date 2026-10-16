Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleDefenceBuyUnitsDialog = require("gge-module:export_CastleDefenceBuyUnitsDialog");
var __dep_export_CastleDefenceBuyUnitsDialogProperties = require("gge-module:export_CastleDefenceBuyUnitsDialogProperties");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_CastleAdvancedTroopSelectionInfiniteEvent = require("gge-module:export_CastleAdvancedTroopSelectionInfiniteEvent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function ACastleAdvancedTroopSelectionInfiniteScrollItem() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.dispatcher = new __dep_export_CastleEventDispatcher.CastleEventDispatcher();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleAdvancedTroopSelectionInfiniteScrollItem, __s1param0);
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._itxt_totalAmount = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_unit.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    this._itxt_totalAmount.autoFitToBounds = true;
    this._itxt_infoMarchspeed = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_infoMarchspeed.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    this.itemMc.mc_infoMarchspeed.toolTipText = "marchspeed";
    this.itemMc.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.itemMc.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    this.itemMc.mc_unit.mouseChildren = false;
    this.itemMc.mc_infoMarchspeed.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.mc_selection.btn_all, this.itemMc.mc_selection.btn_remove, this.itemMc.mc_unit, this.itemMc.mc_selection.mc_slider.btn_slider], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.onValueChange = function (__s7param0) {
    this.troopSelectionScrollItemVO.selectedAmount = this._amountComponent.getSelectedAmount();
    this.dispatcher.dispatchEvent(new __dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent(this, __dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED));
    if (this._itxt_totalAmount.textContentVO) {
      this._itxt_totalAmount.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.inventoryAmount - this._amountComponent.getSelectedAmount();
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.fill = function () {
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
    this._amountComponent = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountComponent.init(this.itemMc.mc_selection.mc_slider, this.itemMc.mc_selection.amountPicker, this.itemMc.mc_selection.btn_all);
    this._amountComponent.minAmount = 0;
    if (this.hasAttackSupportTool()) {
      this._amountComponent.setNumberOfItems(1);
    }
    this._amountComponent.centerSliderButtonOnDefault = false;
    this._amountComponent.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(this.troopSelectionScrollItemVO.unitVO, this.itemMc.mc_unit.mc_bg, null, null);
    __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(this.troopSelectionScrollItemVO.unitVO, this.itemMc.mc_unit, 36, 36, 36, 36, 15, new __s0local1(-20, 20), true, function () {}, this.itemMc.mc_unit.mc_unitLevel);
    this.itemMc.mc_unit.toolTipText = this.troopSelectionScrollItemVO.unitVO.getNameString();
    this.fillAdditionalComponents();
    this.updateSelection();
    if (this._itxt_infoMarchspeed.textContentVO) {
      this._itxt_infoMarchspeed.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.unitSpeed;
    }
    this.itemMc.mc_infoMarchspeed.doCache();
    if (this._itxt_totalAmount.textContentVO) {
      this._itxt_totalAmount.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.inventoryAmount - this._amountComponent.getSelectedAmount();
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.hasAttackSupportTool = function () {
    return this.troopSelectionScrollItemVO.unitVO && this.troopSelectionScrollItemVO.unitVO.isOffenseSupportTool;
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.updateSelection = function () {
    if (this.isShown && this.scrollItemVO) {
      if (this.hasAttackSupportTool()) {
        this._amountComponent.setMaxNumberOfItems(1);
      } else {
        var __s20local0 = this.troopSelectionScrollItemVO.unitVO;
        if (__s20local0 && __s20local0.amountPerWave > 0 && __s20local0.amountPerWave != this.troopSelectionScrollItemVO.maxAmount) {
          this._amountComponent.setMaxNumberOfItems(this.troopSelectionScrollItemVO.maxToolWaveAmount);
        } else {
          this._amountComponent.setMaxNumberOfItems(this.troopSelectionScrollItemVO.maxAmount);
        }
      }
      this._amountComponent.setSelectedAmount(this.troopSelectionScrollItemVO.selectedAmount);
      this._amountComponent.enableComponent(this.troopSelectionScrollItemVO.isAdjustable);
      this.itemMc.mc_selection.btn_remove.visible = this.troopSelectionScrollItemVO.selectedAmount > 0;
      if (this.itemMc.mc_selection.icon_discount) {
        this.itemMc.mc_selection.icon_discount.visible = false;
      }
      if (!this.itemMc.mc_selection.btn_remove.visible && this.troopSelectionScrollItemVO.sourceArea) {
        var __s20local1 = __dep_export_CastleModel.CastleModel.permanentCastleData.getUnitBaseLocation(this.troopSelectionScrollItemVO.sourceArea).unitsVO.getAssociatedEventPackage(this.troopSelectionScrollItemVO.unitVO.wodId);
        var __s20local2 = __dep_exact_f855840627e6e145.int(__s20local1 ? __s20local1.c2Discount : 0);
        var __s20local3 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
        if (__s20local3 && __s20local3.wodIDHasDiscount(this.troopSelectionScrollItemVO.unitVO.wodId) && __s20local2 == 0) {
          __s20local2 = __s20local3.discount;
        }
        if (__s20local2 > 0 && this.itemMc.mc_selection.icon_discount) {
          this.itemMc.mc_selection.icon_discount.visible = true;
          __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_selection.icon_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s20local2]));
          this.itemMc.mc_selection.icon_discount.toolTipText = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_primeSale_tt", [__s20local2]);
          this.itemMc.mc_selection.icon_discount.mouseChildren = false;
        }
      }
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.onClick = function (__s31param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      switch (__s31param0.target) {
        case this.itemMc.mc_selection.btn_remove:
          this._amountComponent.setSelectedAmount(0);
          this.troopSelectionScrollItemVO.selectedAmount = 0;
          this._amountComponent.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
          __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
          break;
        case this.itemMc.mc_unit:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.troopSelectionScrollItemVO.unitVO));
          break;
        case this.itemMc.btn_instantBuy:
          this.showInstantBuyDialog(this.troopSelectionScrollItemVO.unitVO);
      }
      __s1param0.prototype.onClick.call(this, __s31param0);
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.showInstantBuyDialog = function (__s35param0) {
    var __s35local0 = -1;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.sourceArea, "EventCampMapobjectVO")) {
      __s35local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDefenceBuyUnitsDialog.CastleDefenceBuyUnitsDialog, new __dep_export_CastleDefenceBuyUnitsDialogProperties.CastleDefenceBuyUnitsDialogProperties(__s35param0, __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.sourceArea, __s35local0));
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.fillAdditionalComponents = function () {};
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.itemMc) {
      this.itemMc.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.itemMc) {
      this.itemMc.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
  };
  Object.defineProperty(ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype, "troopSelectionScrollItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype, "scrollItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.onMouseDown = function (__s53param0) {};
  Object.defineProperty(ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAdvancedTroopSelectionInfiniteScrollItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.ACastleAdvancedTroopSelectionInfiniteScrollItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
