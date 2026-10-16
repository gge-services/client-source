Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SRequestForgeCraftVO = require("gge-module:export_C2SRequestForgeCraftVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceDialogForge = require("gge-module:export_CastleAllianceDialogForge");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceDialogForgeHigh(__s3param0) {
    var __s3local0 = this;
    __s3local0.costIndex = 0;
    __s3local0.costsArray = [__dep_export_CollectableEnum.CollectableEnum.C1, __dep_export_CollectableEnum.CollectableEnum.C2];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_timer = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_info2, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_costInfo = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_info1, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_arrow_left, __s3local0.subLayerDisp.btn_arrow_right, __s3local0.subLayerDisp.btn_sell]);
    __s3local0.subLayerDisp.btn_info.mouseChildren = false;
    __s3local0.initInfoToolTip();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogForgeHigh, __s1param0);
  CastleAllianceDialogForgeHigh.prototype.initInfoToolTip = function () {
    var __s5local0 = this.subLayerDisp.mc_info_tooltip;
    this.textFieldManager.registerTextField(__s5local0.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("relicAllianceSmithy_ratingGuide_desc"));
    this.textFieldManager.registerTextField(__s5local0.txt_title_left, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("relicAllianceSmithy_ratingGuide_standardRating")));
    this.textFieldManager.registerTextField(__s5local0.txt_title_right, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("relicAllianceSmithy_ratingGuide_premiumRating")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_from_to, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("to_2"));
    for (var __s5local1 = 0; __s5local1 < 7; __s5local1++) {
      this.textFieldManager.registerTextField(__s5local0["txt_rating_" + __s5local1], new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("relicAllianceSmithy_ratingGuide_ratingLvl" + (__s5local1 + 1)));
    }
  };
  CastleAllianceDialogForgeHigh.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this.setCosts();
    this.updateTimer();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    this.subLayerDisp.mc_info_tooltip.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, this.isEquipmentOnScreen);
    this.updateSellButtonTooltip();
  };
  CastleAllianceDialogForgeHigh.prototype.updateSellButtonTooltip = function () {
    this.subLayerDisp.btn_sell.toolTipText = this.isEquipmentOnScreen ? "allyforge_tooltip_sell" : "allyforge_tooltip_sell_noEquipment";
  };
  CastleAllianceDialogForgeHigh.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
  };
  CastleAllianceDialogForgeHigh.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.subLayerDisp.btn_arrow_left:
          this.changeCostCurrency(-1);
          break;
        case this.subLayerDisp.btn_arrow_right:
          this.changeCostCurrency(1);
          break;
        case this.subLayerDisp.btn_sell:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(this.subLayerDisp.mc_equip.equipVO, this.bindFunction(this.confirmSellCallback), null));
          break;
        case this.subLayerDisp.btn_info:
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s15param0)) {
            this.subLayerDisp.mc_info_tooltip.visible = !this.subLayerDisp.mc_info_tooltip.visible;
          }
      }
    }
  };
  CastleAllianceDialogForgeHigh.prototype.confirmSellCallback = function () {
    if (this.subLayerDisp.mc_equip.equipVO instanceof __dep_export_RelicGemVO.RelicGemVO) {
      __dep_export_CastleModel.CastleModel.gemData.sell(this.subLayerDisp.mc_equip.equipVO);
    } else {
      __dep_export_CastleModel.CastleModel.equipData.sell(this.subLayerDisp.mc_equip.equipVO, -1, -1);
    }
    this.throwEquipInInventory();
  };
  CastleAllianceDialogForgeHigh.prototype.onMouseOver = function (__s24param0) {
    __s1param0.prototype.onMouseOver.call(this, __s24param0);
    switch (__s24param0.target) {
      case this.subLayerDisp.btn_info:
        this.subLayerDisp.mc_info_tooltip.visible = true;
    }
  };
  CastleAllianceDialogForgeHigh.prototype.onMouseOut = function (__s27param0) {
    __s1param0.prototype.onMouseOut.call(this, __s27param0);
    switch (__s27param0.target) {
      case this.subLayerDisp.btn_info:
        this.subLayerDisp.mc_info_tooltip.visible = false;
    }
  };
  CastleAllianceDialogForgeHigh.prototype.changeCostCurrency = function (__s30param0) {
    var __s30local0 = this.costIndex + __s30param0;
    if (__s30local0 < 0) {
      __s30local0 = __dep_exact_f855840627e6e145.int(this.costsArray.length - 1);
    }
    if (__s30local0 > this.costsArray.length - 1) {
      __s30local0 = 0;
    }
    this.costIndex = __s30local0;
    this.setTextsAndValues();
  };
  CastleAllianceDialogForgeHigh.prototype.setCosts = function () {
    this.setCostMC(this.currentCostCollectableVO, this.subLayerDisp.mc_cost, new __s0local0(30, 30));
    this.setCostMC(this.currentCostCollectableVO, this.subLayerDisp.mc_info_cost, new __s0local0(20, 20));
    this.subLayerDisp.info_info1_tooltip.toolTipText = __dep_exact_92d05af59ee2ff30_3.Localize.text("relicequip_dialog_relicAllianceSmithy_smithyUseCounter_tooltip", [this.currentCostCollectableVO.getNameTextId()]);
    this.subLayerDisp.info_info2_tooltip.toolTipText = __dep_exact_92d05af59ee2ff30_3.Localize.text("relicequip_dialog_relicAllianceSmithy_smithyResetTimer_tooltip");
    this.itxt_cost.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.costAmount);
    this.itxt_cost.color = this.canEffort ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.subLayerDisp.info_info1_tooltip.alpha = 1;
    this.subLayerDisp.info_info2_tooltip.alpha = 1;
  };
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "currentCostCollectableVO", {
    get: function () {
      var __s36local0 = this.costsArray[this.costIndex];
      if (typeof __s36local0 == "number") {
        return __dep_export_CollectableHelper.CollectableHelper.createVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s36local0).type);
      } else {
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__s36local0);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogForgeHigh.prototype.onCraftButtonPressed = function () {
    if (this.isAllowedToCraft && !this.isEquipmentOnScreen) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRequestForgeCraftVO.C2SRequestForgeCraftVO(this.costsArray[this.costIndex] == __dep_export_CollectableEnum.CollectableEnum.C2 ? 1 : 0));
    } else if (this.isEquipmentOnScreen) {
      this.throwEquipInInventory();
    }
    this.updateSellButtonTooltip();
  };
  CastleAllianceDialogForgeHigh.prototype.throwEquipInInventory = function () {
    __s1param0.prototype.throwEquipInInventory.call(this);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, false);
    this.subLayerDisp.btn_sell.toolTipText = "allyforge_tooltip_sell_noEquipment";
  };
  CastleAllianceDialogForgeHigh.prototype.onForgeItem = function (__s46param0) {
    __s1param0.prototype.onForgeItem.call(this, __s46param0);
    this.updateSellButtonTooltip();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, this.isEquipmentOnScreen);
  };
  CastleAllianceDialogForgeHigh.prototype.onForgeGem = function (__s48param0) {
    __s1param0.prototype.onForgeGem.call(this, __s48param0);
    this.updateSellButtonTooltip();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, this.isEquipmentOnScreen);
  };
  CastleAllianceDialogForgeHigh.prototype.onTimer = function (__s50param0) {
    this.updateTimer();
  };
  CastleAllianceDialogForgeHigh.prototype.onUserCurrencyChange = function (__s52param0) {
    this.setCosts();
  };
  CastleAllianceDialogForgeHigh.prototype.updateTimer = function () {
    this.itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.timerData.timeTillDailyResetInSec);
  };
  CastleAllianceDialogForgeHigh.prototype.setCostMC = function (__s56param0, __s56param1, __s56param2) {
    var __s56local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, __s56param2);
    __s56local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s56param1).addIconMc(__s56param1), __s56param0, __s56local0);
  };
  CastleAllianceDialogForgeHigh.prototype.setRating = function () {
    if (this.costsArray[this.costIndex] == __dep_export_CollectableEnum.CollectableEnum.C2) {
      this.subLayerDisp.icon_relic_star_left_0.gotoAndStop(3);
      this.subLayerDisp.icon_relic_star_left_1.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_left_2.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_right_0.gotoAndStop(4);
      this.subLayerDisp.icon_relic_star_right_1.gotoAndStop(4);
      this.subLayerDisp.icon_relic_star_right_2.gotoAndStop(4);
    } else {
      this.subLayerDisp.icon_relic_star_left_0.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_left_1.gotoAndStop(2);
      this.subLayerDisp.icon_relic_star_left_2.gotoAndStop(2);
      this.subLayerDisp.icon_relic_star_right_0.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_right_1.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_right_2.gotoAndStop(1);
    }
  };
  CastleAllianceDialogForgeHigh.prototype.setTextsAndValues = function () {
    __s1param0.prototype.setTextsAndValues.call(this);
    this.itxt_costInfo.textContentVO.numberValue = this.forgedAmount;
    this.itxt_copy.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("relicequip_dialog_relicAllianceSmithy_desc");
    this.subLayerDisp.info_costs_tooltip.toolTipText = __dep_exact_92d05af59ee2ff30_3.Localize.text("relicequip_dialog_relicAllianceSmithy_currencySelection_tooltip", [this.currentCostCollectableVO.getNameTextId()]);
    this.setCosts();
    this.setRating();
  };
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "canEffort", {
    get: function () {
      if (this.costsArray[this.costIndex] == __dep_export_CollectableEnum.CollectableEnum.C2) {
        return __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.c2Cost;
      } else {
        return __dep_export_CastleModel.CastleModel.currencyData.c1Amount >= this.c1Cost;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "costAmount", {
    get: function () {
      if (this.costsArray[this.costIndex] == __dep_export_CollectableEnum.CollectableEnum.C2) {
        return this.c2Cost;
      } else {
        return this.c1Cost;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "c1Cost", {
    get: function () {
      return __dep_exact_26a421b704832cff.AllianceForgeConst.calculateC1CostForSoftCurrencyRelicAllianceForge(this.forgedAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "c2Cost", {
    get: function () {
      return __dep_exact_26a421b704832cff.AllianceForgeConst.calculateC2CostForHardCurrencyRelicAllianceForge(this.forgedAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "forgedAmount", {
    get: function () {
      if (this.costsArray[this.costIndex] == __dep_export_CollectableEnum.CollectableEnum.C2) {
        return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceForgeRelicUsagesHard;
      } else {
        return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceForgeRelicUsagesSoft;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "isAllowedToCraft", {
    get: function () {
      return true;
    },
    set: function (__s82param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceDialogForge.CastleAllianceDialogForge.prototype, "isAllowedToCraft").set.call(this, __s82param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogForgeHigh.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_3.Localize.text("help_relicAllianceSmithy"));
  };
  return CastleAllianceDialogForgeHigh;
}(__dep_export_CastleAllianceDialogForge.CastleAllianceDialogForge);
exports.CastleAllianceDialogForgeHigh = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleEquipmentSellDialog = require("gge-module:export_CastleEquipmentSellDialog");
var __dep_export_CastleEquipmentSellDialogProperties = require("gge-module:export_CastleEquipmentSellDialogProperties");
var __dep_export_RelicGemVO = require("gge-module:export_RelicGemVO");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
