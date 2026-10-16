Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RelicUpgradeDialogPayment(__s3param0) {
    var __s3local0 = this;
    __s3local0._onBuyButtonClicked = new __dep_exact_5c7bc328fca9e4de.Signal(Boolean);
    __s3local0._isWaitingForServer = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialogPayment, __s1param0);
  RelicUpgradeDialogPayment.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.mc_normal.btn_buy, this.disp.mc_premium.btn_buy], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_normal.btn_buy.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("standard"))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_premium.btn_buy.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("premium"))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_premium.mc_chance.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage", [100])).autoFitToBounds = true;
    this.disp.mc_normal.mc_chance.toolTipText = "dialog_relicEnchanter_details_chanceCounter_standard_tooltip";
    this.disp.mc_premium.mc_chance.toolTipText = "dialog_relicEnchanter_details_chanceCounter_premium_tooltip";
    this.disp.mc_normal.mc_chance.mouseChildren = false;
    this.disp.mc_premium.mc_chance.mouseChildren = false;
  };
  RelicUpgradeDialogPayment.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
  };
  RelicUpgradeDialogPayment.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
    this._isWaitingForServer = false;
    __s1param0.prototype.removeEventListener.call(this);
  };
  RelicUpgradeDialogPayment.prototype.updateWithNewVO = function (__s11param0, __s11param1) {
    this._relicVO = __s11param0;
    this._equipType = __s11param1;
    this.update();
  };
  RelicUpgradeDialogPayment.prototype.update = function () {
    var __s13local0 = this.getCurrentEnchantmentLevel();
    var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.relicXml.maxRelicEnchanterLevel);
    this._canUpgrade = !!this.relicVO && __s13local0 < __s13local1;
    this._canUpgradeWithPremium = !!this.relicVO && __s13local0 > 0;
    this.destroyCollectableRenderList();
    if (this._canUpgrade) {
      var __s13local2 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEnchanter(__s13local0 + 1);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_normal.mc_chance.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage", [__s13local2.chance])).autoFitToBounds = true;
      this.setCurrencies(this.disp.mc_normal, this.getCosts(false, __s13local2));
      this.setCurrencies(this.disp.mc_premium, this.getCosts(true, this._canUpgradeWithPremium ? __s13local2 : null));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_normal.mc_chance.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO("-")).autoFitToBounds = true;
      this.setCurrencies(this.disp.mc_normal, this.getCosts(false));
      this.setCurrencies(this.disp.mc_premium, this.getCosts(true));
    }
    var __s13local3 = "";
    if (this.relicVO) {
      if (__s13local0 >= __s13local1) {
        __s13local3 = "dialog_relicEnchanter_details_maxEquipment_tooltip";
      } else if (!this._canUpgradeWithPremium) {
        __s13local3 = "dialog_relicEnchanter_details_firstEnchanted_norubin_tooltip";
      }
    } else {
      __s13local3 = "dialog_relicEnchanter_details_selectEquipment_tooltip";
    }
    this.disp.mc_normal.btn_buy.toolTipText = __s13local3;
    this.disp.mc_premium.btn_buy.toolTipText = __s13local3;
    this.updateSale();
    this.enableBuyButtons();
  };
  RelicUpgradeDialogPayment.prototype.getCosts = function (__s21param0, __s21param1 = null) {
    var __s21local0 = new __dep_export_CollectableList.CollectableList();
    __s21local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s21param1 ? __s21param1.costRelicFragments : -1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS));
    if (__s21param0) {
      var __s21local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER);
      var __s21local2 = __dep_exact_f855840627e6e145.int(__s21local1 ? __s21local1.discount : 0);
      __s21local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, __s21param1 ? __s21param1.c2Cost * (1 - __s21local2 / 100) : -1));
    } else {
      __s21local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C1, __s21param1 ? __s21param1.c1Cost : -1));
    }
    return __s21local0;
  };
  RelicUpgradeDialogPayment.prototype.setCurrencies = function (__s25param0, __s25param1) {
    var __s25local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(25, 20));
    __s25local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s25param0, "mc_currency"), __s25param1, __s25local0, null, RelicUpgradeDialogPayment.afterRenderFuncCurrency);
  };
  RelicUpgradeDialogPayment.afterRenderFuncCurrency = function (__s27param0) {
    if (__s27param0.itemVO.amount < 0) {
      var __s27local0 = __s27param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.COST_TEXTFIELD);
      __s27local0.setText("-");
      __s27local0.setTextColor(__dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    }
  };
  RelicUpgradeDialogPayment.prototype.updateSale = function () {
    var __s30local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER);
    var __s30local1 = __s30local0 != null;
    this.disp.mc_premium.mc_sale.visible = __s30local1;
    if (__s30local1) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_premium.mc_sale.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_subtract", [__s30local0.discount])).autoFitToBounds = true;
    }
  };
  RelicUpgradeDialogPayment.prototype.getCurrentEnchantmentLevel = function () {
    if (this.relicVO) {
      if (this._equipType != __dep_export_RelicUpgradeDialogStatus.RelicUpgradeDialogStatus.EQUIP_TYPE_GEM || this.relicVO.type != __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        return __dep_exact_f855840627e6e145.int(this.relicVO.getEnchantmentLevel());
      }
      var __s33local0 = this.relicVO.vo;
      if (__s33local0 && __s33local0.gemVO) {
        return __dep_exact_f855840627e6e145.int(__s33local0.gemVO.enchantmentLevel);
      }
    }
    return -1;
  };
  RelicUpgradeDialogPayment.prototype.onClick = function (__s38param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s38param0.target)) {
      __s1param0.prototype.onClick.call(this, __s38param0);
      switch (__s38param0.target) {
        case this.disp.mc_normal.btn_buy:
          this._onBuyButtonClicked.dispatch(false);
          this.handleButtonsEnabled();
          break;
        case this.disp.mc_premium.btn_buy:
          this._onBuyButtonClicked.dispatch(true);
          this.handleButtonsEnabled();
      }
    }
  };
  RelicUpgradeDialogPayment.prototype.handleButtonsEnabled = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_normal.btn_buy, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_premium.btn_buy, false);
  };
  RelicUpgradeDialogPayment.prototype.enableBuyButtons = function () {
    if (!this._isWaitingForServer) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_normal.btn_buy, this._canUpgrade);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_premium.btn_buy, this._canUpgrade && this._canUpgradeWithPremium);
    }
  };
  RelicUpgradeDialogPayment.prototype.onRelicUpgradeReceived = function (__s47param0) {
    this._isWaitingForServer = false;
    this.enableBuyButtons();
  };
  RelicUpgradeDialogPayment.prototype.onSpecialEventChanged = function (__s49param0) {
    this.updateSale();
  };
  RelicUpgradeDialogPayment.prototype.onEquipTypeChanged = function (__s51param0) {
    this._equipType = __s51param0;
    this.update();
  };
  Object.defineProperty(RelicUpgradeDialogPayment.prototype, "relicVO", {
    get: function () {
      return this._relicVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogPayment.prototype, "onBuyButtonClicked", {
    get: function () {
      return this._onBuyButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  return RelicUpgradeDialogPayment;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.RelicUpgradeDialogPayment = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_RelicUpgradeDialogStatus = require("gge-module:export_RelicUpgradeDialogStatus");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
