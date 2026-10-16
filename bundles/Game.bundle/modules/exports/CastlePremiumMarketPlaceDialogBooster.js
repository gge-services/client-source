Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastlePremiumMarketPlaceDialogBooster(__s3param0) {
    var __s3local0 = this;
    __s3local0.lastHighlightTime = 0;
    __s3local0._currentPage = 0;
    __s3local0.highlightIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initBasicButtons([__s3local0.subLayerDisp.btn_right, __s3local0.subLayerDisp.btn_left, __s3local0.subLayerDisp.btn_addGold]);
    __s3local0._paymentBtnComp = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(__s3local0.subLayerDisp.btn_addGold);
    __s3local0.itxt_c2 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_c2, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.c2Amount, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    __s3local0.itxt_page = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_page, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("pageXY", [0, 0], false));
    for (var __s3local1 = 0; __s3local1 < CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE; __s3local1++) {
      __s3local0.prepareItem(__s3local0.subLayerDisp["i" + __s3local1]);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumMarketPlaceDialogBooster, __s1param0);
  CastlePremiumMarketPlaceDialogBooster.prototype.prepareItem = function (__s7param0) {
    this.initBasicButtons([__s7param0.btn_buy]);
    __s7param0.mc_icon_hourglass.mouseEnabled = false;
    __s7param0.mc_icon_hourglass.mouseChildren = false;
    __s7param0.mc_icon_boni.mouseEnabled = false;
    __s7param0.mc_icon_boni.mouseChildren = false;
    __s7param0.mc_icon_base.mouseEnabled = false;
    __s7param0.mc_icon_base.mouseChildren = false;
    __s7param0.info_left.mouseChildren = false;
    __s7param0.info_right.mouseChildren = false;
    __s7param0.info_stretched.mouseChildren = false;
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.goToItemPage = function (__s9param0) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.premiumData.getShopVOsByType(this.currentCategory);
    var __s9local1 = 0;
    if (__s9local0 != null) {
      for (var __s9local2 = 0, __s9local3 = __s9local0; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4 = __s9local3[__s9local2];
        if (__s9local4 !== undefined) {
          if (__s9param0(__s9local4)) {
            break;
          }
          ++__s9local1;
        }
      }
    }
    this.highlightIndex = __dep_exact_f855840627e6e145.int(__s9local1 < __s9local0.length ? __s9local1 : 0);
    this.changeCurrentPage(__dep_exact_f855840627e6e145.int(this.highlightIndex / CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE), false);
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.show = function (__s16param0) {
    __s1param0.prototype.show.call(this, __s16param0);
    this.currentCategory = __s16param0.shift();
    var __s16local0 = __dep_exact_81dacdf05bd32292.castAs(__s16param0.shift(), "CastlePremiumMarketShopVO");
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onDataChanged));
    this.subLayerDisp["i" + this.highlightIndex % CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE].mc_highlight.gotoAndStop(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP);
    if (__dep_export_CastleModel.CastleModel.boosterSaleData.isAnyBoosterOnSale()) {
      this.goToItemPage(function (__s19param0) {
        return __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s19param0, "CastleHeroBoosterShopVO") && __dep_export_CastleModel.CastleModel.boosterSaleData.isBoosterOnSale(__s19param0.id);
      });
    } else if (__s16local0 && __s16local0.isInShopCategory(this.currentCategory)) {
      this.goToItemPage(function (__s22param0) {
        return __s22param0.listSortPriority == __s16local0.listSortPriority;
      });
      this.subLayerDisp["i" + this.highlightIndex % CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE].mc_highlight.gotoAndPlay(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_PLAY);
    } else {
      this.changeCurrentPage(0, false);
    }
    this.updateArrowButtons();
    this.onChangeCurrency();
    this.subLayerDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PREMIUM_FLAG_CHANGED, this.bindFunction(this.onPremiumFlagChanged));
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onDataChanged));
    this._paymentBtnComp.init();
    this.fillItems();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onPremiumFlagChanged = function (__s25param0) {
    this.fillItems();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PREMIUM_FLAG_CHANGED, this.bindFunction(this.onPremiumFlagChanged));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onDataChanged));
    this._paymentBtnComp.destroy();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onDataChanged = function (__s29param0) {
    this.fillItems(false);
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItems = function (__s31param0 = true) {
    var __s31local0 = __dep_export_CastleModel.CastleModel.premiumData.getShopVOsByType(this.currentCategory);
    var __s31local1 = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    var __s31local2 = __s31local1 - this.lastHighlightTime > 5000;
    for (var __s31local3 = this._currentPage * CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE; __s31local3 < (this._currentPage + 1) * CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE; __s31local3++) {
      var __s31local4 = this.subLayerDisp["i" + (__s31local3 - this._currentPage * CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE)];
      if (__s31param0) {
        __s31local4.mc_highlight.gotoAndStop(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP);
      }
      if (__s31local3 >= __s31local0.length) {
        __s31local4.visible = false;
      } else {
        var __s31local5 = __s31local0[__s31local3];
        this.fillItem(__s31local4, __s31local5);
        this.handleBoosterSale(__s31local4, __s31local5, __s31param0, __s31local2, __s31local1);
      }
    }
    this.updateArrowButtons();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItem = function (__s38param0, __s38param1) {
    var __s38local0 = __s38param1.isTeasered;
    __s38param0.visible = true;
    __s38param0.gotoAndStop(__s38local0 ? CastlePremiumMarketPlaceDialogBooster.GOLD_FRAME : CastlePremiumMarketPlaceDialogBooster.DEFAULT_FRAME);
    __s38param0.mouseChildren = true;
    __s38param0.itemVO = __s38param1;
    this.hideAll(__s38param0);
    this.fillItemTextAndIcon(__s38param0, __s38param1);
    __s38param0.icon_shortTime.visible = __s38param1.isLimited;
    __s38param0.icon_shortTime.toolTipText = "limitedOffer";
    __s38param0.info_left.toolTipText = __s38param1.bonusToolTip;
    __s38param0.info_right.toolTipText = __s38param1.nextBonusToolTip;
    __s38param0.mc_icon_boni.gotoAndStop(__s38param1.bonusIconFrame);
    if (__s38param1.isActive) {
      if (__s38param1.isPermanentBooster) {
        this.showTwoInfos(__s38param0, __s38param1, "base", "boni", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s38param1.bonusText[0], [__s38param1.bonusText[1]]), new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s38param1.bonusTextForNextLevel[0], [__s38param1.bonusTextForNextLevel[1]]));
      } else {
        __s38param0.btn_buy.toolTipText = "rise";
        if (__s38param1.hasVisualEffectWhenActive) {
          this.showTwoInfos(__s38param0, __s38param1, "boni", "hourglass", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s38param1.bonusText[0], [__s38param1.bonusText[1] * 100]), new __dep_exact_92d05af59ee2ff30_2.TextVO(__s38param1.duration));
          __s38param0.info_right.toolTipText = __s38param1.timeStringTooltip;
        } else {
          this.showStretched(__s38param0, __s38param1);
        }
      }
    } else if (__s38param1.isPermanentBooster) {
      this.showCentered(__s38param0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s38param1.bonusTextForNextLevel[0], [__s38param1.bonusTextForNextLevel[1]]));
    } else if (__s38param1.hasVisualTimeWhenNotActive) {
      if (__s38param1.hasVisualBonus) {
        this.showTwoInfos(__s38param0, __s38param1, "boni", "hourglass", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s38param1.bonusText[0], [__s38param1.bonusText[1]]), new __dep_exact_92d05af59ee2ff30_2.TextVO(__s38param1.duration));
        __s38param0.info_right.toolTipText = __s38param1.timeStringTooltip;
      } else {
        this.showStretched(__s38param0, __s38param1);
      }
    }
    this.fillItemPrice(__s38param0, __s38param1);
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.handleBoosterSale = function (__s49param0, __s49param1, __s49param2, __s49param3, __s49param4) {
    if ((__s49param1.hasVisualEffectWhenActive || __s49param1.hasVisualBonus) && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s49param1, "CastleHeroBoosterShopVO")) {
      var __s49local0 = __s49param1.id;
      if (__dep_export_CastleModel.CastleModel.boosterSaleData.isBoosterOnSale(__s49local0)) {
        __s49param0.gotoAndStop(CastlePremiumMarketPlaceDialogBooster.GOLD_FRAME);
        if ((__s49param2 || __s49param3) && __s49param0.mc_highlight.currentFrame == CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP - 1) {
          __s49param0.mc_highlight.gotoAndPlay(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_PLAY);
          this.lastHighlightTime = __s49param4;
        }
        __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(__s49param0.mc_discount, __s49local0);
      }
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.hideAll = function (__s54param0) {
    __s54param0.mc_discount.visible = false;
    __s54param0.info_right.visible = false;
    __s54param0.info_left.visible = false;
    __s54param0.info_stretched.visible = false;
    __s54param0.mc_icon_boni.visible = false;
    __s54param0.mc_icon_base.visible = false;
    __s54param0.mc_icon_hourglass.visible = false;
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.showCentered = function (__s56param0, __s56param1) {
    __s56param0.info_right.visible = true;
    __s56param0.info_right.x = CastlePremiumMarketPlaceDialogBooster.X_MIDDLE + CastlePremiumMarketPlaceDialogBooster.X_OFFSET_TEXT;
    __s56param0.mc_icon_boni.visible = true;
    __s56param0.mc_icon_boni.x = CastlePremiumMarketPlaceDialogBooster.X_MIDDLE;
    this.textFieldManager.registerTextField(__s56param0.info_right.textfield, __s56param1, new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.showStretched = function (__s58param0, __s58param1) {
    __s58param0.info_stretched.visible = true;
    __s58param0.mc_icon_hourglass.x = CastlePremiumMarketPlaceDialogBooster.X_LEFT;
    __s58param0.mc_icon_hourglass.visible = true;
    __s58param0.info_stretched.toolTipText = __s58param1.timeStringTooltip;
    this.textFieldManager.registerTextField(__s58param0.info_stretched.textfield, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s58param1.duration), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.showTwoInfos = function (__s60param0, __s60param1, __s60param2, __s60param3, __s60param4, __s60param5) {
    __s60param0.info_left.visible = true;
    __s60param0.info_right.visible = true;
    var __s60local0 = __s60param0["mc_icon_" + __s60param2];
    __s60local0.visible = true;
    __s60local0.x = CastlePremiumMarketPlaceDialogBooster.X_LEFT;
    var __s60local1 = __s60param0["mc_icon_" + __s60param3];
    __s60local1.visible = true;
    __s60local1.x = CastlePremiumMarketPlaceDialogBooster.X_RIGHT;
    __s60param0.info_right.x = CastlePremiumMarketPlaceDialogBooster.X_RIGHT + CastlePremiumMarketPlaceDialogBooster.X_OFFSET_TEXT;
    __s60param0.mc_icon_base.gotoAndStop(__s60param1.baseIconFrame);
    this.textFieldManager.registerTextField(__s60param0.info_left.textfield, __s60param4, new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(__s60param0.info_right.textfield, __s60param5, new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItemTextAndIcon = function (__s62param0, __s62param1) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s62param0.mc_holder);
    __s62param0.mc_holder.scaleX = __s62param0.mc_holder.scaleY = 1;
    __s62param0.mc_holder.addChild(__s62param1.visualMovieClip);
    if (this.textFieldManager.isTextFieldRegistered(__s62param0.txt_title)) {
      this.textFieldManager.getTextField(__s62param0.txt_title).textContentVO.stringValue = __s62param1.title;
      this.textFieldManager.getTextField(__s62param0.txt_copy).textContentVO.stringValue = __s62param1.copy;
    } else {
      this.textFieldManager.registerTextField(__s62param0.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s62param1.title)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.textFieldManager.registerTextField(__s62param0.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s62param1.copy));
      this.textFieldManager.getTextField(__s62param0.txt_title).textContentVO.stringValue = __s62param1.title;
      this.textFieldManager.getTextField(__s62param0.txt_copy).textContentVO.stringValue = __s62param1.copy;
      this.textFieldManager.getTextField(__s62param0.txt_title).autoFitToBounds = true;
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItemPrice = function (__s66param0, __s66param1) {
    var __s66local0 = __s66param1.costString != "";
    __s66param0.btn_buy.visible = __s66param0.icon_currency.visible = __s66param0.txt_price.visible = __s66param0.mc_priceTagBackground.visible = __s66local0;
    __s66param0.gc_deco.visible = !__s66local0;
    if (__s66local0) {
      var __s66local1 = 0;
      switch (__s66param1.payType) {
        case __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_C1:
          __s66local1 = __s66param1.finalCostsC1;
          break;
        case __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_C2:
          __s66local1 = __s66param1.finalCostsC2;
          break;
        case __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_FOOD:
          __s66local1 = __s66param1.baseCosts;
      }
      if (__s66param1.payType == __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_NONE || __s66param1.payType == __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_FOOD && !__s66param1.isActive) {
        this.textFieldManager.registerTextField(__s66param0.txt_price, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("variable"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      } else {
        this.textFieldManager.registerTextField(__s66param0.txt_price, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s66local1), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      }
      __s66param0.icon_currency.gotoAndStop(__s66param1.payType);
      __s66param0.icon_currency.mouseChildren = false;
      __s66param0.icon_currency.toolTipText = __s66param1.costsToolTip;
      __s66param0.btn_buy.gotoAndStop(__s66param1.isActive && __s66param1.isExtendable ? 2 : 1);
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s66param1, "CastleFestivalPremiumShopVO")) {
        __s66param0.btn_buy.gotoAndStop(__s66param1.isActive && __s66param1.isExtendable ? 3 : 1);
      }
      __s66param0.btn_buy.doCache();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s66param0.btn_buy, __s66param1.canBeBought);
      if (__s66param0.btn_buy.enabled) {
        __s66param0.btn_buy.toolTipText = __s66param1.buttonBuyToolTipEnabled;
      } else {
        __s66param0.btn_buy.toolTipText = __s66param1.cantBeBoughtButtonToolTip;
      }
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.changeCurrentPage = function (__s75param0, __s75param1 = true) {
    if (__s75param0 != this._currentPage) {
      this._currentPage = __s75param0;
      if (__s75param1) {
        this.fillItems();
      }
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onChangeCurrency = function (__s79param0 = null) {
    this.itxt_c2.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.updateArrowButtons = function () {
    this.subLayerDisp.btn_right.visible = this._currentPage + 1 < this.maxPage;
    this.subLayerDisp.btn_left.visible = this._currentPage > 0;
    this.itxt_page.textContentVO.textReplacements = [this._currentPage + 1, this.maxPage];
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onMouseUp = function (__s83param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s83param0.target) && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s83param0.target)) {
      switch (__s83param0.target) {
        case this.subLayerDisp.btn_right:
          this.changeCurrentPage(this._currentPage + 1);
          break;
        case this.subLayerDisp.btn_left:
          this.changeCurrentPage(this._currentPage - 1);
          break;
        case this.subLayerDisp.btn_addGold:
          this._paymentBtnComp.onClickButton(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PREMIUM_MARKET_PLACE, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PREMIUM_MARKET_PLACE);
          break;
        default:
          if (__s83param0.target instanceof __s0local0 && __s83param0.target.enabled) {
            __s83param0.target.parent.itemVO.clickedBuyButton();
            return;
          }
      }
    }
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialogBooster.prototype, "maxPage", {
    get: function () {
      var __s88local0 = __dep_export_CastleModel.CastleModel.premiumData.getShopVOsByType(this.currentCategory);
      return Math.max(Math.ceil(__s88local0.length / CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE), 1);
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialogBooster.NAME = "CastlePremiumMarketPlaceDialogBooster";
  CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE = 6;
  CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP = 1;
  CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_PLAY = 1;
  CastlePremiumMarketPlaceDialogBooster.DEFAULT_FRAME = 1;
  CastlePremiumMarketPlaceDialogBooster.GOLD_FRAME = 2;
  CastlePremiumMarketPlaceDialogBooster.X_LEFT = 13;
  CastlePremiumMarketPlaceDialogBooster.X_MIDDLE = 63;
  CastlePremiumMarketPlaceDialogBooster.X_RIGHT = 104;
  CastlePremiumMarketPlaceDialogBooster.X_OFFSET_TEXT = 33;
  return CastlePremiumMarketPlaceDialogBooster;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogBooster = __s0local1;
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
