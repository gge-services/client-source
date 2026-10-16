Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_GeneralIntroductionCinematicsPlaylistDialog = require("gge-module:export_GeneralIntroductionCinematicsPlaylistDialog");
var __dep_export_GeneralsOverviewDialog = require("gge-module:export_GeneralsOverviewDialog");
var __dep_export_GeneralHubIntroductionHandler = require("gge-module:export_GeneralHubIntroductionHandler");
var __dep_export_GeneralsHubInfoDialog = require("gge-module:export_GeneralsHubInfoDialog");
var __dep_export_GeneralsHubRewardsComponent = require("gge-module:export_GeneralsHubRewardsComponent");
var __dep_export_GeneralsHubQuestsComponent = require("gge-module:export_GeneralsHubQuestsComponent");
var __dep_export_AmbientAnimationsHandler = require("gge-module:export_AmbientAnimationsHandler");
var __dep_export_CharactersAnimationsHandler = require("gge-module:export_CharactersAnimationsHandler");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralsHubDialog() {
    var __s3local0 = __s1param0.call(this, GeneralsHubDialog.NAME) || this;
    __s3local0.backgroundAlpha = 1;
    __s3local0.AMOUNT_OF_CURRENCIES_PER_ROW = 5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubDialog, __s1param0);
  GeneralsHubDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_overview, this.dialogDisp.btn_info, this.dialogDisp.btn_cinematics, this.dialogDisp.item_rubies.btn_payment, this.dialogDisp.item_rubies.btn_payment, this.dialogDisp.mc_offerings.btn_close, this.dialogDisp.mc_offerings.btn_open], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.itxt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.item_rubies.txt_text, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.c2Amount, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_t0 = this.textFieldManager.registerTextField(this.dialogDisp.mc_offerings.item_0.txt_text, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_t1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_offerings.item_1.txt_text, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_t2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_offerings.item_2.txt_text, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_overviewCounter = this.textFieldManager.registerTextField(this.dialogDisp.btn_overview.mc_bubble.txt_number, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this.dialogDisp.item_rubies.btn_payment.toolTipText = "add_Gold";
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.mc_offerings.btn_open.toolTipText = "dialog_generals_inn_offeringsCounter_foldOut_tooltip";
    this.dialogDisp.mc_offerings.btn_close.toolTipText = "dialog_generals_inn_offeringsCounter_foldIn_tooltip";
    this.dialogDisp.btn_overview.toolTipText = "panel_action_generals_overview";
    this.dialogDisp.mc_king_hover.visible = false;
    this.dialogDisp.mc_knight_hover.visible = false;
    this.dialogDisp.mc_princess_hover.visible = false;
    this.setAmbientAnimations();
    this.setCharactersAnimations();
    this.questsComponent = new __dep_export_GeneralsHubQuestsComponent.GeneralsHubQuestsComponent(this.dialogDisp);
    this.rewardsComponent = new __dep_export_GeneralsHubRewardsComponent.GeneralsHubRewardsComponent(this.dialogDisp.mc_rewards);
    this.fillItemIcon(this.dialogDisp.mc_offerings.item_0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_FAT_KING_TOKEN);
    this.fillItemIcon(this.dialogDisp.mc_offerings.item_1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KNIGHT_TOKEN);
    this.fillItemIcon(this.dialogDisp.mc_offerings.item_2, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_PRINCESS_TOKEN);
    var __s5local0 = 0;
    for (var __s5local1 = 1; __s5local1 <= 3; __s5local1++) {
      var __s5local2 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(__s5local1);
      for (var __s5local3 = 0; __s5local3 < this.AMOUNT_OF_CURRENCIES_PER_ROW; __s5local3++) {
        var __s5local4 = this.dialogDisp.mc_offerings["itemAdd_" + (__s5local1 - 1) + "_" + __s5local3];
        var __s5local5 = __s5local2.getTombolaOfferingCurrencyID(__s5local3 + 1);
        __s5local4.visible = false;
        __s5local4.bg.alpha = 0.7;
        if (__s5local5 > 0) {
          this.fillItemIcon(__s5local4, __s5local5);
          __s5local0++;
        }
      }
    }
    this.dialogDisp.mc_offerings.btn_open.visible = __s5local0 > 0;
    this.dialogDisp.mc_offerings.btn_close.visible = false;
    this.generalHubIntroductionHandler = new __dep_export_GeneralHubIntroductionHandler.GeneralHubIntroductionHandler(this.dialogDisp, this.charactersAnimationsHandler, this.questsComponent);
    this.generalHubIntroductionHandler.initGeneralIntroductionElements();
  };
  GeneralsHubDialog.prototype.fillItemIcon = function (__s12param0, __s12param1) {
    var __s12local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s12param1);
    var __s12local1 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s12local0, __s12param1);
    var __s12local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(36, 36));
    __s12local2.tooltip.useAmount = false;
    var __s12local3 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s12param0).addIconMc(__s12param0.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), __s12local3, __s12local1, __s12local2);
  };
  GeneralsHubDialog.prototype.setAmbientAnimations = function () {
    this.ambientAnimationsHandler = new __dep_export_AmbientAnimationsHandler.AmbientAnimationsHandler(this.dialogDisp);
    this.ambientAnimationsHandler.loadAnimations();
  };
  GeneralsHubDialog.prototype.setCharactersAnimations = function () {
    this.charactersAnimationsHandler = new __dep_export_CharactersAnimationsHandler.CharactersAnimationsHandler(this.dialogDisp);
    this.charactersAnimationsHandler.loadAnimations();
  };
  GeneralsHubDialog.prototype.showLoaded = function (__s18param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s18param0);
    if (this.ambientAnimationsHandler.isLoaded) {
      this.ambientAnimationsHandler.startAnimations();
    }
    if (this.charactersAnimationsHandler.isLoaded) {
      this.charactersAnimationsHandler.startAnimations();
    }
    this.rewardsComponent.show();
    __dep_export_CastleModel.CastleModel.generalsData.requestQuestUpdateData();
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.fillResources));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.fillResources));
    this.fillResources();
    this.charactersAnimationsHandler.animationsLoadedSignal.add(this.bindFunction(this.onCharactersAnimationsLoaded));
    this.questsComponent.show();
    this.dialogDisp.mc_silhouette.visible = false;
    this.dialogDisp.mc_door_opened.visible = false;
    this.generalHubIntroductionHandler.onShow();
    this.foldInCurrencies();
  };
  GeneralsHubDialog.prototype.foldOutCurrencies = function () {
    for (var __s22local0 = 0; __s22local0 <= 2; __s22local0++) {
      this.dialogDisp.mc_offerings["item_" + __s22local0].bg.alpha = 0.7;
    }
    for (var __s22local1 = 1; __s22local1 <= 3; __s22local1++) {
      for (var __s22local2 = 0; __s22local2 < this.AMOUNT_OF_CURRENCIES_PER_ROW; __s22local2++) {
        var __s22local3 = this.dialogDisp.mc_offerings["itemAdd_" + (__s22local1 - 1) + "_" + __s22local2];
        __s22local3.visible = __s22local3.mc_icon.numChildren > 0;
      }
    }
    this.dialogDisp.mc_offerings.btn_close.visible = true;
  };
  GeneralsHubDialog.prototype.foldInCurrencies = function () {
    for (var __s30local0 = 0; __s30local0 <= 2; __s30local0++) {
      this.dialogDisp.mc_offerings["item_" + __s30local0].bg.alpha = 0.3;
    }
    for (var __s30local1 = 1; __s30local1 <= 3; __s30local1++) {
      for (var __s30local2 = 0; __s30local2 < this.AMOUNT_OF_CURRENCIES_PER_ROW; __s30local2++) {
        this.dialogDisp.mc_offerings["itemAdd_" + (__s30local1 - 1) + "_" + __s30local2].visible = false;
      }
    }
    this.dialogDisp.mc_offerings.btn_close.visible = false;
  };
  GeneralsHubDialog.prototype.fillResources = function (__s38param0 = null) {
    this.itxt_c2.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
    this.itxt_t0.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_FAT_KING_TOKEN);
    this.itxt_t1.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_KNIGHT_TOKEN);
    this.itxt_t2.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_PRINCESS_TOKEN);
    for (var __s38local0 = 1; __s38local0 <= 3; __s38local0++) {
      var __s38local1 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(__s38local0);
      for (var __s38local2 = 0; __s38local2 < this.AMOUNT_OF_CURRENCIES_PER_ROW; __s38local2++) {
        var __s38local3 = this.dialogDisp.mc_offerings["itemAdd_" + (__s38local0 - 1) + "_" + __s38local2];
        var __s38local4 = __s38local1.getTombolaOfferingCurrencyID(__s38local2 + 1);
        if (__s38local3.mc_icon.numChildren > 0) {
          this.textFieldManager.registerTextField(__s38local3.txt_text, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s38local4), {
            compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
            compactFractionalDigits: 2
          }));
        }
      }
    }
    this.rewardsComponent.onCurrenciesUpdated();
    this.updateOverviewCounter();
  };
  GeneralsHubDialog.prototype.onCharactersAnimationsLoaded = function () {
    this.charactersAnimationsHandler.animationHoveredSignal.add(this.bindFunction(this.onAnimationHovered));
    this.charactersAnimationsHandler.animationUnhoveredSignal.add(this.bindFunction(this.onAnimationUnhovered));
  };
  GeneralsHubDialog.prototype.onAnimationHovered = function (__s47param0) {
    this.questsComponent.toggleShowHideElement(__s47param0, true);
  };
  GeneralsHubDialog.prototype.onAnimationUnhovered = function (__s49param0) {
    this.questsComponent.toggleShowHideElement(__s49param0, false);
  };
  GeneralsHubDialog.prototype.updateOverviewCounter = function () {
    var __s51local0 = __dep_export_CastleModel.CastleModel.generalsData.getAmountOfUnlockOrUpgradeableGeneral();
    this.dialogDisp.btn_overview.mc_bubble.visible = __s51local0 > 0;
    this.itxt_overviewCounter.textContentVO.numberValue = __s51local0;
  };
  GeneralsHubDialog.prototype.hideLoaded = function (__s53param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s53param0);
    this.charactersAnimationsHandler.animationsLoadedSignal.remove(this.bindFunction(this.onCharactersAnimationsLoaded));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.fillResources));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.fillResources));
    this.ambientAnimationsHandler.reset();
    this.charactersAnimationsHandler.reset();
    this.rewardsComponent.hide();
    this.generalHubIntroductionHandler.onHide();
    this.questsComponent.hide();
  };
  GeneralsHubDialog.prototype.onClick = function (__s55param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s55param0.target)) {
      __s1param0.prototype.onClick.call(this, __s55param0);
      switch (__s55param0.target) {
        case this.dialogDisp.btn_close:
          if (this.rewardsComponent.disp.visible) {
            this.rewardsComponent.disp.visible = false;
            this.rewardsComponent.reshowElements();
          } else {
            this.hide();
          }
          break;
        case this.dialogDisp.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_GeneralsHubInfoDialog.GeneralsHubInfoDialog);
          break;
        case this.dialogDisp.item_rubies.btn_payment:
          __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_GENERAL_HUB, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_GENERALS_HUB);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_generals_inn_01"));
          break;
        case this.dialogDisp.btn_cinematics:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_GeneralIntroductionCinematicsPlaylistDialog.GeneralIntroductionCinematicsPlaylistDialog);
          break;
        case this.dialogDisp.mc_offerings.btn_close:
          this.foldInCurrencies();
          break;
        case this.dialogDisp.mc_offerings.btn_open:
          this.foldOutCurrencies();
          break;
        case this.dialogDisp.btn_overview:
          this.hide();
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsOverviewDialog.GeneralsOverviewDialog);
      }
    }
  };
  GeneralsHubDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s61local0 = 1;
      if (this.disp.stage.stageHeight < __s61local0 * 1440) {
        __s61local0 = this.disp.stage.stageHeight / 1080;
      }
      if (this.disp.stage.stageWidth / this.disp.stage.stageHeight < 4 / 3) {
        __s61local0 = Math.min(1, Math.min(__s61local0, this.disp.stage.stageWidth / 1440));
      }
      __s61local0 = Math.min(__s61local0, 1);
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = __s61local0;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      var __s61local1 = Math.min(this.disp.stage.stageWidth, __s61local0 * 1920) * 0.5 / __s61local0;
      var __s61local2 = Math.min(this.disp.stage.stageHeight, __s61local0 * 1440) * 0.5 / __s61local0;
      var __s61local3 = 22 - __s61local2 + this.dialogDisp.btn_close.height / 2;
      this.dialogDisp.btn_overview.x = 22 - __s61local1 + 48;
      this.dialogDisp.btn_overview.y = __s61local3;
      this.dialogDisp.btn_info.x = 22 - __s61local1 + this.dialogDisp.btn_info.width / 2;
      this.dialogDisp.btn_info.y = this.dialogDisp.btn_overview.y + 88;
      this.dialogDisp.btn_cinematics.x = this.dialogDisp.btn_info.x;
      this.dialogDisp.btn_cinematics.y = this.dialogDisp.btn_info.y + 83;
      this.dialogDisp.btn_close.x = __s61local1 - 22 - this.dialogDisp.btn_close.width / 2;
      this.dialogDisp.btn_close.y = __s61local3;
      this.dialogDisp.btn_help.x = this.dialogDisp.btn_close.x - this.dialogDisp.btn_close.width / 2 - this.dialogDisp.btn_help.width / 2;
      this.dialogDisp.btn_help.y = __s61local3;
      this.dialogDisp.item_rubies.x = this.dialogDisp.btn_help.x - this.dialogDisp.btn_help.width / 2 - 60 - this.dialogDisp.item_rubies.width / 2;
      this.dialogDisp.item_rubies.y = __s61local3;
      this.dialogDisp.mc_offerings.x = this.dialogDisp.item_rubies.x - this.dialogDisp.item_rubies.width / 2 - 33 - this.dialogDisp.mc_offerings.width;
      this.dialogDisp.mc_offerings.y = __s61local3 - this.dialogDisp.btn_info.height / 2;
      this.dialogDisp.mc_rewards.mc_freeOffering.y = this.dialogDisp.mc_rewards.mc_drawnRewardsAmounts.y = this.dialogDisp.mc_rewards.mc_payedOffering.y = __s61local2 - 22 - this.dialogDisp.mc_rewards.mc_freeOffering.height / 2;
      this.dialogDisp.mc_rewards.mc_rewards.scaleX = this.dialogDisp.mc_rewards.mc_rewards.scaleY = Math.min(1, __s61local1 * 2 / 1902);
      this.dialogDisp.mc_rewards.mc_rewards2.mc_slider.x = this.dialogDisp.btn_close.x + this.dialogDisp.btn_close.width / 2 - this.dialogDisp.mc_rewards.mc_rewards2.x - this.dialogDisp.mc_rewards.mc_rewards2.mc_slider.width;
      GeneralsHubDialog.showTokensInsteadOfGenerals = this.dialogDisp.mc_rewards.mc_rewards.height < 707.247261 && __s61local0 < 0.55556 || this.dialogDisp.stage.stageWidth < this.dialogDisp.stage.stageHeight * 1.3;
      this.dialogDisp.mc_rewards.mc_rewards.y = this.dialogDisp.mc_rewards.mc_freeOffering.y - this.dialogDisp.mc_rewards.mc_freeOffering.height / 2 - Math.max(22, 44 / this.dialogDisp.mc_rewards.mc_rewards.scaleX) - this.dialogDisp.mc_rewards.mc_rewards.scaleX * 820 / 2;
    }
  };
  GeneralsHubDialog.NAME = "GeneralsHub_7";
  GeneralsHubDialog.showTokensInsteadOfGenerals = false;
  return GeneralsHubDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralsHubDialog = __s0local1;
