Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SBuyUnitPackageVO = require("gge-module:export_C2SBuyUnitPackageVO");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleRecruitSelectedUnitComponent(__s3param0) {
    this._oldSelectedUnitAmount = 1;
    this._initialized = false;
    this._freeSlots = 0;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this._disp.btn_max, this._disp.recruitmentBtn]);
    this._disp.visible = false;
  }
  CastleRecruitSelectedUnitComponent.prototype.initWithProp = function (__s5param0) {
    this.properties = __s5param0;
    if (__s5param0.updateCompleteComponent) {
      this.hide();
    }
    this.init();
    this.addEventListeners();
    this._disp.visible = true;
    this._initialized = true;
  };
  CastleRecruitSelectedUnitComponent.prototype.hide = function () {
    if (this.properties && this.properties.updateCompleteComponent || !__dep_export_ButtonHelper.ButtonHelper.isEnablingDelayed(this._disp.recruitmentBtn)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.recruitmentBtn, false);
    }
    if (this.costTextFields) {
      this.costTextFields.length = 0;
    }
    if (this._amountPicker) {
      this._amountPicker.destroy();
    }
    this.removeEventListeners();
    this._disp.visible = false;
  };
  CastleRecruitSelectedUnitComponent.prototype.dispose = function () {
    this.hide();
    this._initialized = false;
  };
  CastleRecruitSelectedUnitComponent.prototype.addEventListeners = function () {
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    this._disp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED, this.bindFunction(this.onMaxValueBlocked));
  };
  CastleRecruitSelectedUnitComponent.prototype.removeEventListeners = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    this._disp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED, this.bindFunction(this.onMaxValueBlocked));
  };
  CastleRecruitSelectedUnitComponent.prototype.init = function () {
    if (!this.textFieldManager.isTextFieldRegistered(this._disp.txt_title)) {
      this.i_txt_title = this.textFieldManager.registerTextField(this._disp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
      this.i_infoTime_txt_value = this.textFieldManager.registerTextField(this._disp.infoTime.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
      this._disp.infoTime.txt_value.mouseEnabled = false;
      __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.setIconInInfoArea(__dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.ICON_TIME, this._disp.infoTime);
      this.i_infoFood_txt_value = this.textFieldManager.registerTextField(this._disp.infoFood.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
      this.i_recruitment_txt_title = this.textFieldManager.registerTextField(this._disp.recruitmentBtn.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
      this._disp.infoFood.txt_value.mouseEnabled = false;
      this.costTextFields = [];
      this._disp.btn_max.toolTipText = "max";
      this._disp.txt_cost0.toolTipText = "costs";
      this._disp.txt_cost1.toolTipText = "costs";
    }
    if (this._amountPicker) {
      this._amountPicker.destroy();
    }
    this._amountPicker = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    this._amountPicker.init(this.disp.mc_slider, this._disp.amountPicker, this._disp.btn_max);
    if (this.properties.updateCompleteComponent) {
      this._oldSelectedUnitAmount = -1;
    }
    this.i_txt_title.textContentVO.textId = this.properties.unitVO.getNameString();
    var __s19local0;
    var __s19local1 = __dep_exact_f855840627e6e145.int(this.properties.unitVO.wodId);
    var __s19local2 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local1, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.properties.unitVO, "ToolUnitVO")) {
      this._disp.infoTime.toolTipText = "dialog_recruit_tools_requiredProductionTime_tooltip";
      this._disp.txt_cost1.toolTipText = "costs";
    } else {
      if (this.properties.isHospitalDialog) {
        this._disp.infoTime.toolTipText = "dialog_heal_units_requiredHealingTime_tooltip";
      } else {
        this._disp.infoTime.toolTipText = "dialog_recruit_units_requiredRecruitmentTime_tooltip";
      }
      __s19local0 = __s19local2.beefSupply > 0 ? "dialog_recruit_units_beefConsumptionTotal_tooltip" : __s19local2.meadSupply > 0 ? "dialog_recruit_units_meadConsumptionTotal_tooltip" : "dialog_recruit_units_foodConsumptionTotal_tooltip";
      this._disp.infoFood.toolTipText = __s19local0;
      this._disp.txt_cost1.toolTipText = __s19local0;
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_max, true);
    var __s19local3 = __dep_exact_f855840627e6e145.int(Math.max(__dep_export_CastleModel.CastleModel.currencyData.getAffordableAmount(__s19local2), __dep_export_CastleModel.CastleModel.areaData.activeStorage.getAffordableAmount(__s19local2)));
    if (this.properties.unitVO.costC2 > 0 && !this.properties.isHospitalDialog) {
      __s19local3 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.properties.unitVO, "ToolUnitVO") ? this.properties.maxUnits : 99;
    }
    this._amountPicker.setNumberOfItems((Math.min(Math.max(1, __s19local3), this.properties.maxUnits), this.properties.maxUnits));
    if ((this.properties.unitVO.costC2 <= 0 || this.properties.isHospitalDialog) && this.properties.updateCompleteComponent) {
      this.selectMaxAmount();
    }
    this.costTextFields.push(this.textFieldManager.registerTextField(this._disp.txt_cost0.txt_cost, new __dep_exact_92d05af59ee2ff30_1.TextVO("")));
    this.costTextFields.push(this.textFieldManager.registerTextField(this._disp.txt_cost1.txt_cost, new __dep_exact_92d05af59ee2ff30_1.TextVO("")));
    var __s19local4 = 0;
    if (!this.properties.updateCompleteComponent) {
      if (this._amountPicker.numberOfItems < this._oldSelectedUnitAmount) {
        this._oldSelectedUnitAmount = __dep_exact_f855840627e6e145.int(this._amountPicker.numberOfItems);
      }
      __s19local4 = this._oldSelectedUnitAmount;
      this._oldSelectedUnitAmount = -1;
      this._amountPicker.setSelectedAmount(__s19local4);
    }
    this.onChangeUnitAmount();
    this.initCosts();
    this.setupRecruitBtn();
  };
  CastleRecruitSelectedUnitComponent.prototype.setupRecruitBtn = function () {
    if (this._freeSlots > 0) {
      if (this.properties.isHospitalDialog) {
        this.i_recruitment_txt_title.textContentVO.textId = "dialog_allianceHelp_healUnits_short";
        this.enableRecruitBtnWithTooltip("", true, true);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.properties.unitVO, "ToolUnitVO")) {
        if (this.properties.unitVO.getRecruitmentTime(1) > 0) {
          this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buildTools_short";
          this.enableRecruitBtnWithTooltip("", true, true);
        } else {
          this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buyTools_short";
          this.enableRecruitBtnWithTooltip("", true, true);
        }
      } else {
        this.i_recruitment_txt_title.textContentVO.textId = "panel_action_recruit";
        this.enableRecruitBtnWithTooltip("", true, true);
      }
    } else if (this.properties.isHospitalDialog) {
      this.i_recruitment_txt_title.textContentVO.textId = "dialog_allianceHelp_healUnits_short";
      this.enableRecruitBtnWithTooltip("panel_action_recruit_slotsoccupied_tooltip", false, false);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.properties.unitVO, "ToolUnitVO")) {
      if (this.properties.unitVO.getRecruitmentTime(1) > 0) {
        this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buildTools_short";
        this.enableRecruitBtnWithTooltip("panel_action_buildTools_slotsoccupied_tooltip", false, false);
      } else {
        this.i_recruitment_txt_title.textContentVO.textId = "panel_action_buyTools_short";
        this.enableRecruitBtnWithTooltip("", true, true);
      }
    } else {
      this.i_recruitment_txt_title.textContentVO.textId = "panel_action_recruit";
      this.enableRecruitBtnWithTooltip("panel_action_recruit_slotsoccupied_tooltip", false, false);
    }
    if (this._disp.recruitmentBtn.cacheCanvas) {
      this._disp.recruitmentBtn.updateCache();
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.enableRecruitBtnWithTooltip = function (__s46param0, __s46param1, __s46param2) {
    this._disp.recruitmentBtn.toolTipText = __s46param0;
    if (__s46param2 && this.properties.updateCompleteComponent || __dep_export_ButtonHelper.ButtonHelper.isEnablingDelayed(this._disp.recruitmentBtn)) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this._disp.recruitmentBtn, __s46param1);
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.recruitmentBtn, __s46param1);
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.selectMaxAmount = function () {
    this._amountPicker.setSelectedAmount(this._amountPicker.numberOfItems);
  };
  CastleRecruitSelectedUnitComponent.prototype.getTimeForSelectedAmount = function (__s52param0) {
    var __s52local0;
    var __s52local1 = this.properties.unitVO;
    if (this.properties.isHospitalDialog) {
      __s52local0 = __s52local1.getBoostedHealTimeForAmount(__s52param0);
    } else {
      __s52local0 = __s52local1.getBoostedRecruitmentTime(__s52param0);
      __s52local0 -= __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getAbsoluteProductionBoost(__s52local1, __s52local0, __s52param0, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo));
    }
    return __s52local0;
  };
  CastleRecruitSelectedUnitComponent.prototype.isOutOfTutorial = function () {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
  };
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "selectedUnitAmount", {
    get: function () {
      if (this._amountPicker) {
        return this._amountPicker.getSelectedAmount();
      } else {
        return 0;
      }
    },
    set: function (__s62param0) {
      this._amountPicker.setSelectedAmount(__s62param0);
      this.onChangeUnitAmount();
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitSelectedUnitComponent.prototype.getMissingResourcesArray = function () {
    var __s64local0 = [];
    var __s64local1 = __dep_exact_f855840627e6e145.int(this.selectedUnitAmount + 1);
    for (var __s64local2 = this.getCostList(__s64local1), __s64local3 = 0; __s64local3 < __s64local2.length; ++__s64local3) {
      var __s64local4 = __s64local2.getItemByIndex(__s64local3);
      var __s64local5 = __dep_exact_f855840627e6e145.int(__dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s64local4)));
      __s64local0.push(__s64local4.amount > __s64local5);
    }
    return __s64local0;
  };
  CastleRecruitSelectedUnitComponent.prototype.onMaxValueBlocked = function (__s68param0 = null) {
    if (this.isOutOfTutorial()) {
      for (var __s68local0 = this.getMissingResourcesArray(), __s68local1 = 0; __s68local1 < __s68local0.length; ++__s68local1) {
        if (__s68local0[__s68local1]) {
          this.costTextFields[__s68local1].color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        }
      }
      window.setTimeout(this.bindFunction(this.deactivateBlockedHint), 500);
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.deactivateBlockedHint = function () {
    this.initCosts();
  };
  CastleRecruitSelectedUnitComponent.prototype.initCosts = function () {
    var __s76local0 = this.getCostList(this.selectedUnitAmount);
    if (__s76local0.length > 2) {
      throw new Error("Item costs more than two resources, but this dialog can only display two.");
    }
    var __s76local1 = this.fillToolTipForCostsSuccess(__s76local0);
    __dep_export_CostHelper.CostHelper.initAsCosts(__s76local0, this._disp, false, !__s76local1);
    this._disp.mc_discount.visible = false;
    var __s76local2 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
    if (!this.properties.isHospitalDialog && __s76local2 && __s76local2.wodIDHasDiscount(this.properties.unitVO.wodId)) {
      this._disp.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this._disp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [-__s76local2.discount]));
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.fillToolTipForCostsSuccess = function (__s80param0) {
    var __s80local0;
    var __s80local1 = false;
    var __s80local2 = __s80param0.list[0];
    var __s80local3 = __s80param0.list[1];
    var __s80local4 = this.getStorageAmountForCollectable(__s80local2);
    var __s80local5 = this.getStorageAmountForCollectable(__s80local3);
    if (__s80local4 != -1) {
      __s80local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__s80local2.getTooltipTextId());
      this._disp.txt_cost0.toolTipText = {
        t: "currencyPlaceholder_StockPlaceholder",
        p: [__s80local0, __dep_exact_92d05af59ee2ff30.Localize.number(__s80local4)]
      };
      __s80local1 = true;
    }
    if (__s80local5 != -1) {
      __s80local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__s80local3.getTooltipTextId());
      this._disp.txt_cost1.toolTipText = {
        t: "currencyPlaceholder_StockPlaceholder",
        p: [__s80local0, __dep_exact_92d05af59ee2ff30.Localize.number(__s80local5)]
      };
      __s80local1 = true;
    }
    return __s80local1;
  };
  CastleRecruitSelectedUnitComponent.prototype.getStorageAmountForCollectable = function (__s84param0) {
    var __s84local0 = -1;
    if (!__s84param0) {
      return -1;
    }
    var __s84local1 = __dep_export_CollectableHelper.CollectableHelper.getServerKeyByCollectable(__s84param0);
    var __s84local2 = __dep_export_CastleModel.CastleModel.currencyData.getCurrencyByKey(__s84local1);
    if (__s84local2) {
      __s84local0 = __s84local2.amount;
    }
    return __s84local0;
  };
  CastleRecruitSelectedUnitComponent.prototype.onChangeUnitAmount = function (__s88param0 = null) {
    if (this._oldSelectedUnitAmount != this.selectedUnitAmount) {
      this.refresh();
      this.initCosts();
      this._oldSelectedUnitAmount = __dep_exact_f855840627e6e145.int(this.selectedUnitAmount);
      this.updateTutorialStep();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_max, this._amountPicker.getSelectedAmount() != this._amountPicker.numberOfItems);
      this.setupRecruitBtn();
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.refresh = function () {
    if (this.i_infoTime_txt_value && this.i_infoTime_txt_value.textContentVO) {
      this.i_infoTime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this.getTimeForSelectedAmount(this.selectedUnitAmount));
    }
    if (this.properties) {
      if (this.properties.isHospitalDialog) {
        var __s91local0 = this.properties.unitVO.healingCostC2 > 0 && this.properties.unitVO.isSubscriptionHealingPremiumActive || this.properties.unitVO.healingCostC2 < 0 && this.properties.unitVO.isSubscriptionHealingNonPremiumActive;
        __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_infoTime_txt_value, __s91local0, 20, new __s0local1(-5, 0));
      } else {
        __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_infoTime_txt_value, this.properties.unitVO.isRecruitTimeSubscriptionBuffed, 20, new __s0local1(-5, 0));
      }
      var __s91local1 = __dep_exact_f855840627e6e145.int(this.properties.unitVO.foodSupply * this.selectedUnitAmount);
      var __s91local2 = __dep_exact_f855840627e6e145.int(this.properties.unitVO.meadSupply * this.selectedUnitAmount);
      var __s91local3 = __dep_exact_f855840627e6e145.int(this.properties.unitVO.beefSupply * this.selectedUnitAmount);
      this.i_infoFood_txt_value.textContentVO.stringValue = String(__dep_exact_9e901e8e2483a22f.MathBase.max(__s91local1, __s91local2, __s91local3));
      this._disp.infoFood.visible = __dep_exact_9e901e8e2483a22f.MathBase.max(__s91local1, __s91local2, __s91local3) > 0;
      if (__s91local3 > 0) {
        __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.setIconInInfoArea(__dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.ICON_BEEF_CONSUMPTION, this._disp.infoFood);
      }
      if (__s91local2 > 0) {
        __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.setIconInInfoArea(__dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.ICON_MEAD_CONSUMPTION, this._disp.infoFood);
      } else if (__s91local1 > 0) {
        __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.setIconInInfoArea(__dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.ICON_FOOD_CONSUMPTION, this._disp.infoFood);
      }
    }
  };
  CastleRecruitSelectedUnitComponent.prototype.onReviveClick = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReviveUnitPackageVO.C2SReviveUnitPackageVO(this.properties.unitVO.wodId, this.selectedUnitAmount));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.recruitmentBtn, false);
  };
  CastleRecruitSelectedUnitComponent.prototype.onRecruitmentClick = function () {
    var __s102local0 = this.properties.unitVO;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.recruitmentBtn, false);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyUnitPackageVO.C2SBuyUnitPackageVO(__dep_export_CastleModel.CastleModel.militaryData.getListIdByCategory(__s102local0.isAuxiliary ? __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : __s102local0.unitCategory), __s102local0.wodId, this.selectedUnitAmount, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().areaId));
  };
  CastleRecruitSelectedUnitComponent.prototype.updateTutorialStep = function () {
    this._amountPicker.enableComponent(true);
  };
  CastleRecruitSelectedUnitComponent.prototype.getCostList = function (__s106param0) {
    var __s106local0 = new __dep_export_CollectableList.CollectableList();
    if (this.properties.isHospitalDialog) {
      __s106local0 = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(this.properties.unitVO.healingCostC1 * __s106param0), new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.properties.unitVO.healingCostC2 * __s106param0));
    } else {
      for (var __s106local1 = 0, __s106local2 = this.properties.unitVO.getCostTypes(); __s106local1 < __s106local2.length; __s106local1++) {
        var __s106local3 = __s106local2[__s106local1];
        if (__s106local3 !== undefined) {
          var __s106local4 = __dep_exact_f855840627e6e145.int(this.properties.unitVO.getCost(__s106local3));
          var __s106local5 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
          if (__s106local5 && __s106local5.wodIDHasDiscount(this.properties.unitVO.wodId)) {
            __s106local4 = Math.ceil(__s106local4 * (1 - __s106local5.discount / 100));
          }
          if (__s106local4) {
            __s106local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s106local3.type, __s106local4 * __s106param0, __s106local3.id));
          }
        }
      }
    }
    return __s106local0;
  };
  CastleRecruitSelectedUnitComponent.prototype.onClick = function (__s115param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s115param0.target)) {
      switch (__s115param0.target) {
        case this._disp.recruitmentBtn:
          if (this.properties.isHospitalDialog) {
            this.onReviveClick();
          } else {
            this.onRecruitmentClick();
          }
          if (this.properties.confirmCallback != null) {
            this.properties.confirmCallback();
          }
          break;
        case this._disp.btn_max:
          this.selectMaxAmount();
      }
    }
  };
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "needsUpdate", {
    get: function () {
      return this._disp.visible || !this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitSelectedUnitComponent.prototype, "freeSlots", {
    set: function (__s128param0) {
      this._freeSlots = __s128param0;
      if (this._initialized) {
        this.setupRecruitBtn();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitSelectedUnitComponent.MAX_WIDTH = 100;
  CastleRecruitSelectedUnitComponent.MAX_HEIGHT = 90;
  return CastleRecruitSelectedUnitComponent;
}();
exports.CastleRecruitSelectedUnitComponent = __s0local2;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleRecruitDialogUnits = require("gge-module:export_CastleRecruitDialogUnits");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_C2SReviveUnitPackageVO = require("gge-module:export_C2SReviveUnitPackageVO");
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
