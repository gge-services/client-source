Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SSpinCharacterTombolaVO = require("gge-module:export_C2SSpinCharacterTombolaVO");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_SelectInputFieldComponent = require("gge-module:export_SelectInputFieldComponent");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_GeneralsHubDialog = require("gge-module:export_GeneralsHubDialog");
var __dep_export_GeneralsHubDialogIMultiRewardItem = require("gge-module:export_GeneralsHubDialogIMultiRewardItem");
var __s0local2 = function (__s1param0) {
  function GeneralsHubRewardsComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.MAX_REWARD_ITEMS = 4;
    __s3local0.completeCounter = 0;
    __s3local0._allTest = 100;
    __s3local0.pausePayButton = false;
    __s3local0.doorMC = __s3local0.disp.parent.mc_door_opened;
    __s3local0.heroMC = __s3local0.disp.parent.mc_silhouette;
    __s3local0.collRenderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    __s3local0.collRenderRewards = [];
    for (var __s3local1 = 0; __s3local1 < __s3local0.MAX_REWARD_ITEMS; __s3local1++) {
      __s3local0.collRenderRewards.push(new __dep_export_CollectableRendererList.CollectableRendererList());
    }
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.dialogDisp.mc_payedOffering.btn_start_paid, __s3local0.dialogDisp.mc_payedOffering.btn_minus, __s3local0.dialogDisp.mc_payedOffering.btn_plus, __s3local0.dialogDisp.mc_payedOffering.btn_max, __s3local0.dialogDisp.mc_payedOffering.btn_buyToken, __s3local0.dialogDisp.mc_freeOffering.btn_confirm], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __s3local0.inputTextField = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(__s3local0.dialogDisp.mc_payedOffering.mc_pickerTxt, __s3local0.bindFunction(__s3local0.onPercentValueInput), "1");
    __s3local0.inputTextField.searchField.restrict = "0-9";
    __s3local0.elementsToHideWhileRewardsShowing = [__s3local0.disp.parent.btn_cinematics];
    __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.mc_drawnRewardsAmounts.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rewards_colon"));
    __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.mc_drawnRewardsAmounts.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("offerings_colon"));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubRewardsComponent, __s1param0);
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "currentInventoryAmountOfferingCurrency", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubRewardsComponent.prototype.onCurrenciesUpdated = function () {
    if (!(__dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency <= 0) && !!this.currentQuestVO) {
      this.setSelectedAmount(__dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentInventoryAmountOfferingCurrency, 0, this.maxOfferings));
      this.updateButtons();
    }
  };
  GeneralsHubRewardsComponent.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      switch (__s14param0.target) {
        case this.dialogDisp.mc_payedOffering.btn_start_paid:
          __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpinCharacterTombolaVO.C2SSpinCharacterTombolaVO(this.currentQuestVO.characterID, __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency, 0, this.selectedAmount));
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_start_paid, false);
          this.pausePayButton = true;
          break;
        case this.dialogDisp.mc_freeOffering.btn_confirm:
          __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpinCharacterTombolaVO.C2SSpinCharacterTombolaVO(this.currentQuestVO.characterID, __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency, 1, 1));
          break;
        case this.dialogDisp.mc_payedOffering.btn_minus:
          this.setSelectedAmount(this.selectedAmount > 1 ? this.selectedAmount - 1 : 1);
          break;
        case this.dialogDisp.mc_payedOffering.btn_plus:
          this.setSelectedAmount(this.selectedAmount < this.maxOfferings ? this.selectedAmount + 1 : this.maxOfferings);
          break;
        case this.dialogDisp.mc_payedOffering.btn_max:
          this.setSelectedAmount(this.maxOfferings);
          break;
        case this.dialogDisp.mc_payedOffering.btn_buyToken:
          var __s14local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
          __s14local0.eventPackageVO = this.getTokenPackageVO();
          __s14local0.buyType = __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_OFFERINGS;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s14local0);
      }
    }
  };
  GeneralsHubRewardsComponent.prototype.getTokenPackageVO = function () {
    return this.currentQuestVO.getPackageVOForCurrencyID(__dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency);
  };
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "maxOfferings", {
    get: function () {
      return Math.min(__dep_exact_26a421b704832cff.TombolaConst.BATCH_OPENING_SPIN_CAP, this.currentInventoryAmountOfferingCurrency);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubRewardsComponent.prototype.onPercentValueInput = function () {
    var __s22local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.selectedAmount, 1, this.maxOfferings);
    this.setSelectedAmount(__s22local0);
  };
  GeneralsHubRewardsComponent.prototype.setSelectedAmount = function (__s24param0) {
    this.inputTextField.updateText(__s24param0.toString());
    this.updateButtons();
  };
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "selectedAmount", {
    get: function () {
      return parseInt(this.inputTextField.text);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubRewardsComponent.prototype.updateButtons = function () {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_payedOffering.btn_start_paid.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_gachaPayout_drawAgain_button")));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_freeOffering.btn_confirm.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_gachaPayout_freeDraw_button")));
    var __s28local0 = this.currentQuestVO.availableQuests > 0 && __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency == this.currentQuestVO.getTombolaOfferingCurrencyIDByTombolaID(this.currentQuestVO.freeOpeningTombolaID);
    this.dialogDisp.mc_payedOffering.visible = !__s28local0;
    this.dialogDisp.mc_freeOffering.visible = __s28local0;
    var __s28local1 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency);
    var __s28local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(38, 38));
    __s28local2.icon.useDropShadowIcon = true;
    var __s28local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(54, 54));
    var __s28local4 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.mc_payedOffering.btn_start_paid.mc_icon);
    var __s28local5 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.mc_payedOffering.mc_icon);
    var __s28local6 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.mc_freeOffering.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.collRenderList, __s28local4, __s28local1, __s28local2);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.collRenderList1, __s28local5, __s28local1, __s28local3);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.collRenderList2, __s28local6, __s28local1, __s28local3);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_start_paid, this.currentInventoryAmountOfferingCurrency > 0 && this.selectedAmount > 0 && !this.pausePayButton);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_minus, this.currentInventoryAmountOfferingCurrency > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_plus, this.currentInventoryAmountOfferingCurrency > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_max, this.currentInventoryAmountOfferingCurrency > 0);
    this.dialogDisp.mc_payedOffering.mc_pickerTxt.mouseChildren = this.currentInventoryAmountOfferingCurrency > 0;
    if (this.currentInventoryAmountOfferingCurrency <= 0) {
      this.inputTextField.searchField.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_RED;
    } else {
      this.inputTextField.searchField.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
    }
    this.dialogDisp.mc_payedOffering.btn_start_paid.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.mc_payedOffering.btn_start_paid) || this.pausePayButton ? null : {
      t: "dialog_generals_inn_gachaPayout_drawAgain_noMoreOfferings_tooltip",
      p: [__s28local1.getNameTextId()]
    };
    this.dialogDisp.mc_payedOffering.btn_buyToken.toolTipText = {
      t: "dialog_generals_inn_buyOffering_placeholder_tooltip",
      p: [__s28local1.getNameTextId()]
    };
    this.dialogDisp.mc_payedOffering.btn_buyToken.visible = !!this.getTokenPackageVO();
  };
  GeneralsHubRewardsComponent.prototype.onRewardsGained = function (__s32param0) {
    this.completeCounter = 0;
    this.currentQuestVO = __s32param0.params[0];
    var __s32local0 = __s32param0.params[1];
    this._allTest = 100;
    this.pausePayButton = false;
    this.updateButtons();
    var __s32local1 = [];
    for (var __s32local2 = 0; __s32local2 < __s32local0.length; __s32local2++) {
      var __s32local3 = __s32local0[__s32local2];
      var __s32local4 = __s32local3.R;
      var __s32local5 = new __dep_export_CollectableList.CollectableList();
      var __s32local6 = __s32local3.A ? __s32local3.A : 1;
      if (__s32local3.RR) {
        for (var __s32local7 = 0; __s32local7 < __s32local6; __s32local7++) {
          __s32local5.addList(__dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s32local3.RR), __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1);
        }
      } else if (__s32local3.RW) {
        for (var __s32local8 = 0; __s32local8 < __s32local6; __s32local8++) {
          __s32local5.addList(__dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s32local3.RW, __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1));
        }
      }
      for (var __s32local9 = 0; __s32local9 < __s32local5.length; __s32local9++) {
        __s32local1.push({
          R: __s32local4,
          RW: __s32local5.getItemByIndex(__s32local9)
        });
      }
    }
    __s32local1.sort(this.bindFunction(this.sortByRarity));
    var __s32local10 = __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1;
    this.dialogDisp.parent.mouseChildren = __s32local10;
    this.dialogDisp.mc_rewards.visible = !__s32local10;
    this.dialogDisp.mc_rewards2.visible = __s32local10;
    if (__s32local10) {
      this.showRewardCount();
      this.showRewardMultiList(__s32local1);
    } else {
      this.hideRewardCount();
      this.showRewardsBig(__s32local1);
    }
    if (this.dialogDisp.visible) {
      this.onOverlayShow();
    } else {
      this.startGainAnimation();
    }
  };
  GeneralsHubRewardsComponent.prototype.sortByRarity = function (__s48param0, __s48param1) {
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s48param0.RW, "CollectableItemGenericCurrencyVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s48param1.RW, "CollectableItemGenericCurrencyVO")) {
      return 1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s48param0.RW, "CollectableItemGenericCurrencyVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s48param1.RW, "CollectableItemGenericCurrencyVO")) {
      return -1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s48param0.RW, "CollectableItemGenericCurrencyVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s48param1.RW, "CollectableItemGenericCurrencyVO")) {
      if (__s48param0.RW.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange()) && !__s48param1.RW.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange())) {
        return -1;
      }
      if (!__s48param0.RW.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange()) && __s48param1.RW.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange())) {
        return 1;
      }
      if (__s48param0.RW.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange()) && __s48param1.RW.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange())) {
        return __s48param1.RW.id - __s48param0.RW.id;
      }
    }
    return __s48param1.R - __s48param0.R;
  };
  GeneralsHubRewardsComponent.prototype.randomSort = function (__s56param0, __s56param1) {
    return __dep_exact_9e901e8e2483a22f.MathBase.random(-1, 1);
  };
  GeneralsHubRewardsComponent.prototype.showRewardsBig = function (__s58param0) {
    var __s58local0 = __s58param0.slice(0, this.MAX_REWARD_ITEMS);
    __s58local0.sort(this.bindFunction(this.randomSort));
    this.shownRewards = __s58local0;
    for (var __s58local1 = 0; __s58local1 < this.MAX_REWARD_ITEMS; __s58local1++) {
      var __s58local2 = this.dialogDisp.mc_rewards["mc_item" + __s58local1];
      var __s58local3 = __s58local0.length > __s58local1 ? __s58local0[__s58local1].RW : null;
      if (this.showCurrencyAsGeneral(__s58local3)) {
        this.showGeneralReward(__s58local2, __s58local3, __s58local1);
      } else {
        this.showNormalReward(__s58local2, __s58local3, __s58local1);
      }
      __s58local2 = this.dialogDisp["mc_animation" + __s58local1];
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s58local2);
    }
  };
  GeneralsHubRewardsComponent.prototype.showNormalReward = function (__s64param0, __s64param1, __s64param2) {
    __s64param0.visible = false;
    __s64param0.mc_item.visible = true;
    if (__s64param1) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s64param0.mc_general);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s64param0.mc_icon);
      var __s64local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(173, 173));
      __s64local0.icon.unitLevelDimension = new __s0local0(70, 70);
      __s64local0.icon.unitLevelOffset = new __s0local0(-70, -70);
      var __s64local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s64param0.mc_item.mc_item).addIconMc(__s64param0.mc_item.mc_item.mc_icon).addBuildingLevelMc(__s64param0.mc_item.mc_item.mc_buildingLevel).addTextfieldBgMc(__s64param0.mc_item.mc_item.text_bg).addTextfield(__s64param0.mc_item.mc_item.txt_text).addInfoBtn(__s64param0.mc_item.btn_info);
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s64param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s64param1.getNameTextId())).visible = false;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s64param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s64param1.getNameTextId())).visible = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.collRenderRewards[__s64param2], __s64local1, __s64param1, __s64local0);
    }
  };
  GeneralsHubRewardsComponent.prototype.showGeneralReward = function (__s67param0, __s67param1, __s67param2) {
    __s67param0.visible = false;
    __s67param0.mc_item.visible = false;
    if (__s67param1) {
      var __s67local0 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralXMLVOByTokenID(__s67param1.id);
      var __s67local1 = __s67local0.generalID;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s67param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s67param1.getNameTextId())).visible = false;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s67param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s67local0.nameTextID)).visible = false;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s67param0.mc_general);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s67param0.mc_icon);
      if (__dep_export_GeneralsHubDialog.GeneralsHubDialog.showTokensInsteadOfGenerals) {
        var __s67local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s67param0.mc_icon).addIconMc(__s67param0.mc_icon);
        var __s67local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(250, 250));
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.collRenderRewards[__s67param2], __s67local2, __s67param1, __s67local3);
      } else {
        __s67param0.mc_general.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralClip(__s67local1, true, 1));
      }
      __s67param0.mc_general.mouseChildren = false;
      __s67param0.mc_icon.mouseChildren = false;
      __s67param0.mc_general.toolTipText = __s67param0.mc_icon.toolTipText = __s67local0.nameTextID;
    }
  };
  GeneralsHubRewardsComponent.prototype.startGainAnimation = function () {
    this.doorMC.visible = false;
    this.heroMC.visible = false;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.doorMC, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5,
      repeat: 1
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.heroMC, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5,
      repeat: 1
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp, 0, {
      visible: false
    }, {
      visible: true,
      delay: 1.5,
      repeat: 1,
      onComplete: this.bindFunction(this.onOverlayShow)
    });
  };
  GeneralsHubRewardsComponent.prototype.onOverlayShow = function () {
    var __s74local0 = [];
    this.setSelectedAmount(__dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentInventoryAmountOfferingCurrency, 0, __dep_exact_26a421b704832cff.TombolaConst.BATCH_OPENING_SPIN_CAP));
    this.doorMC.visible = false;
    this.heroMC.visible = false;
    this.elementsToHideWhileRewardsShowing.forEach(function (__s76param0) {
      __s76param0.visible = false;
    });
    if (__dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1) {
      this.animateRewardList();
    } else {
      for (var __s74local1 = 0; __s74local1 < this.shownRewards.length; __s74local1++) {
        var __s74local2 = undefined;
        var __s74local3 = this.dialogDisp.mc_rewards["mc_animation" + __s74local1];
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s74local3);
        this.shownRewards[__s74local1].RW;
        if (this.shownRewards[__s74local1].R && this.shownRewards[__s74local1].R > 0) {
          switch (this.shownRewards[__s74local1].R) {
            case 1:
              __s74local2 = "_Common";
              break;
            case 2:
              __s74local2 = "_Rare";
              break;
            case 3:
              __s74local2 = "_Epic";
              break;
            case 4:
              __s74local2 = "_Legendary";
          }
        } else {
          __s74local2 = "_Common";
        }
        __s74local0.push(__s74local3);
        var __s74local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("RewardAnimation" + __s74local2, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Rewards_Animation"), null, 24, false);
        __s74local3.addChild(__s74local4);
        __s74local4.doWhenLoaded(this.bindFunction(this.onLoaded));
        __s74local3.visible = true;
        __s74local3.alpha = __s74local2 == "_Common" ? 0.9 : 1;
      }
      var __s74local5 = 0;
      for (__s74local1 = 0; __s74local1 < this.shownRewards.length; __s74local1++, __s74local5 += 0.2) {
        __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s74local0[__s74local1], 0, {}, {
          delay: __s74local5,
          repeat: 1,
          onComplete: this.bindFunction(this.onStartSingleRewardAnim),
          onCompleteParams: [__s74local0[__s74local1], this.dialogDisp.mc_rewards["mc_item" + __s74local1]]
        });
      }
    }
  };
  GeneralsHubRewardsComponent.prototype.isCrurrencyForGeneral = function (__s87param0) {
    return !!__s87param0 && __s87param0.itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && __dep_export_CastleModel.CastleModel.generalsData.getGeneralXMLVOByTokenID(__s87param0.id) != null;
  };
  GeneralsHubRewardsComponent.prototype.showCurrencyAsGeneral = function (__s89param0) {
    if (!__s89param0) {
      return false;
    }
    if (__s89param0.itemType != __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY) {
      return false;
    }
    var __s89local0 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralXMLVOByTokenID(__s89param0.id);
    if (!__s89local0) {
      return false;
    }
    var __s89local1 = __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(__s89local0.generalID);
    var __s89local2 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s89param0.id);
    return (!__s89local1 || !__s89local1.isUnlocked) && __s89local2 >= __s89local0.rarity.unlockCosts || !!__s89local1 && !!__s89local1.isUnlocked && !!(__s89local1.requiredShards > 0) && !!(__s89local2 >= __s89local1.requiredShards);
  };
  GeneralsHubRewardsComponent.prototype.onLoaded = function (__s94param0) {
    __s94param0.currentshownDisplayObject.scaleX = 1.8;
    __s94param0.currentshownDisplayObject.scaleY = 2.2;
    __s94param0.currentshownDisplayObject.gotoAndStop(0);
  };
  GeneralsHubRewardsComponent.prototype.onStartSingleRewardAnim = function (__s96param0, __s96param1) {
    if (__s96param0.getChildAt(0)) {
      __s96param0.getChildAt(0).currentshownDisplayObject.gotoAndPlay(1);
    }
    __s96param1.alpha = 0;
    __s96param1.visible = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s96param1, 0.5, {
      alpha: 0,
      scaleY: 1.2
    }, {
      alpha: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut,
      onComplete: this.bindFunction(this.onAnimationComplete)
    });
  };
  GeneralsHubRewardsComponent.prototype.onAnimationComplete = function () {
    this.completeCounter++;
    if (this.completeCounter >= this.shownRewards.length) {
      this.dialogDisp.parent.mouseChildren = true;
      this.doorMC.visible = false;
      this.heroMC.visible = false;
    }
  };
  GeneralsHubRewardsComponent.prototype.showRewardMultiList = function (__s102param0) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_rewards2.mc_items);
    this.dialogDisp.parent.mouseChildren = false;
    var __s102local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_GeneralsHubDialogIMultiRewardItem.GeneralsHubDialogIMultiRewardItem, "GeneralsHubRewardRow", __dep_export_GeneralsHubDialog.GeneralsHubDialog.NAME);
    __s102local0.itemPaddingY = 54;
    __s102local0.useSmoothScroll = true;
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_rewards2).addSliderMc(this.dialogDisp.mc_rewards2.mc_slider).addMouseWheelAreaMc(this.dialogDisp.mc_rewards2).addItemMc(this.dialogDisp.mc_rewards2.mc_items), __s102local0);
    this._list.onShow();
    var __s102local1 = [];
    var __s102local2 = 0;
    for (var __s102local3 = 0; __s102local3 < __s102param0.length; __s102local3++) {
      if (__s102local1.length < __s102local2 + 1) {
        __s102local1.push({
          rewards: []
        });
      }
      if (__s102local1[__s102local2].rewards.length >= 4) {
        __s102local2++;
        __s102local1.push({
          rewards: []
        });
      }
      __s102local1[__s102local2].rewards.push(__s102param0[__s102local3]);
    }
    this._list.updateWithNewData(__s102local1);
    this._list.onShow();
  };
  GeneralsHubRewardsComponent.prototype.animateRewardList = function () {
    var __s109local0 = 0;
    for (var __s109local1 = 0; __s109local1 < this._list.items.length; __s109local1++) {
      if (this._list.items[__s109local1].isVisible) {
        for (var __s109local2 = 0; __s109local2 < 4; __s109local2++) {
          var __s109local3 = this._list.items[__s109local1].getItemMc()["mc_item" + __s109local2];
          var __s109local4 = this._list.items[__s109local1].getItemMc()["mc_icon" + __s109local2];
          __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s109local3, 0.5, {
            alpha: 0
          }, {
            alpha: 1,
            ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut,
            delay: __s109local0
          });
          __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s109local4, 0.5, {
            alpha: 0
          }, {
            alpha: 1,
            ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut,
            delay: __s109local0
          });
          __s109local0 += 0.1;
        }
      }
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.parent, 0, {}, {
      mouseChildren: true,
      delay: 2
    });
  };
  GeneralsHubRewardsComponent.prototype.showRewardCount = function () {
    this.dialogDisp.mc_drawnRewardsAmounts.visible = true;
    this.dialogDisp.mc_payedOffering.x = -this.dialogDisp.mc_drawnRewardsAmounts.width / 2;
    var __s116local0 = __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrencyAmount;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_drawnRewardsAmounts.txt_amount1, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s116local0 * 4));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_drawnRewardsAmounts.txt_amount2, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s116local0));
  };
  GeneralsHubRewardsComponent.prototype.hideRewardCount = function () {
    this.dialogDisp.mc_drawnRewardsAmounts.visible = false;
    this.dialogDisp.mc_payedOffering.x = 0;
  };
  GeneralsHubRewardsComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.doorMC.visible = false;
    this.heroMC.visible = false;
    this.disp.visible = false;
    for (var __s120local0 = 0; __s120local0 < this.MAX_REWARD_ITEMS; __s120local0++) {
      this.dialogDisp.mc_rewards["mc_animation" + __s120local0].visible = false;
    }
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
    this.disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
  };
  GeneralsHubRewardsComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
    this.disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
  };
  GeneralsHubRewardsComponent.prototype.reshowElements = function () {
    this.elementsToHideWhileRewardsShowing.forEach(function (__s129param0) {
      __s129param0.visible = true;
    });
  };
  return GeneralsHubRewardsComponent;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.GeneralsHubRewardsComponent = __s0local2;
