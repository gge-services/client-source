Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_LegendSkillsDataEvent = require("gge-module:export_LegendSkillsDataEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_export_ABundleMVC = require("gge-module:export_ABundleMVC");
var __dep_export_CastlePremiumMarketPlaceDialogProperties = require("gge-module:export_CastlePremiumMarketPlaceDialogProperties");
var __dep_export_CastleInGameHelpCategoriesEnum = require("gge-module:export_CastleInGameHelpCategoriesEnum");
var __dep_export_CastleInGameHelpDialogProperties = require("gge-module:export_CastleInGameHelpDialogProperties");
var __dep_export_CastleTitleMainDialogProperties = require("gge-module:export_CastleTitleMainDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_export_GloryHUDAnimationController = require("gge-module:export_GloryHUDAnimationController");
var __dep_export_GloryHUDModel = require("gge-module:export_GloryHUDModel");
var __dep_export_GloryHUDView = require("gge-module:export_GloryHUDView");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleUserStatePanel() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __s0local0()) || this).createPanelDisp();
    __s3local0.i_txt_userLevel = __s3local0.textFieldManager.registerTextField(__s3local0.userStatePanel.mc_normalBg.mc_level_bg.txt_userLevel, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    __s3local0.i_txt_userLegendLevel = __s3local0.textFieldManager.registerTextField(__s3local0.userStatePanel.mc_paragonBg.mc_button.txt_legendLevel, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    __s3local0.i_txt_userMight = __s3local0.textFieldManager.registerTextField(__s3local0.userStatePanel.txt_userMight, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.i_xpBar_txt_userXP = __s3local0.textFieldManager.registerTextField(__s3local0.userStatePanel.mc_xpBar.txt_userXP, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_XP, [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.userData.userXP, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 0
    })]));
    __s3local0.i_txt_userCurrency1 = __s3local0.textFieldManager.registerTextField(__s3local0.userStatePanel.mc_currency1.txt_userCurrency1, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    __s3local0.i_txt_userCurrency2 = __s3local0.textFieldManager.registerTextField(__s3local0.userStatePanel.mc_currency2.txt_userCurrency2, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUserStatePanel, __s1param0);
  CastleUserStatePanel.prototype.createPanelDisp = function () {
    this.panelDisp = new Library.CastleInterfaceElements.CastleUserState_X();
    this.gloryHUDDisp = this.panelDisp.mc_gloryHUD;
    this.disp.addChild(this.gloryHUDDisp);
    this.disp.addChild(this.panelDisp);
    return this.disp;
  };
  CastleUserStatePanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.userStatePanel.mc_subscription.btn_subscription, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.addGoldComp = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(this.userStatePanel.btn_payment);
    this.buyLevelComp = new __dep_export_ButtonBuyLevelComponent.ButtonBuyLevelComponent(this.userStatePanel.btn_buyLevel);
    this.userStatePanel.btn_buyLevel.toolTipText = "addXp_tt";
    this.userStatePanel.btn_buyLevel.mouseOverScale = 1.2;
    this.i_txt_username = this.textFieldManager.registerTextField(this.userStatePanel.txt_userName, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
    this.i_txt_username.autoFitToBounds = true;
    this.userStatePanel.mc_currency1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.userStatePanel.mc_currency2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.userStatePanel.mc_xpBar.toolTipText = {
      t: "panel_state_xpToLevelUp",
      p: [__dep_export_CastleModel.CastleModel.userData.userXPtoNextLevel]
    };
    this.userStatePanel.txt_userMight.mouseEnabled = false;
    this.userStatePanel.mc_mightBar.mouseChildren = false;
    this.userStatePanel.mc_crest_normal.mouseChildren = false;
    this.userStatePanel.mc_crest_paragon.mouseChildren = false;
    this.userStatePanel.mc_paragonBg.mc_button.mouseChildren = false;
    this.userStatePanel.mc_normalBg.mc_level_bg.mouseChildren = false;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.userStatePanel.mc_xpBar);
    this.createGloryHUDComponent();
    this.onChangeXP();
    this.onChangeCurrency();
    this.updateCrest();
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeXP));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateCrest));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.updateCrest));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onChangeName));
    this.controller.addEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    if (__dep_export_CastleModel.CastleModel.legendSkillData.hasLegendTemple()) {
      this.onHasLegendTemple(null);
    } else {
      this.controller.addEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onHasLegendTemple));
    }
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.disp.scaleX = this.disp.scaleY = 0.8;
    }
  };
  CastleUserStatePanel.prototype.onChangeName = function (__s12param0 = null) {
    this.i_txt_username.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.userData.userName;
    if (__s12param0) {
      this.updateCache();
    }
  };
  CastleUserStatePanel.prototype.createGloryHUDComponent = function () {
    this._gloryHUD = new __dep_export_ABundleMVC.ABundleMVC();
    var __s15local0 = new __dep_export_GloryHUDModel.GloryHUDModel();
    var __s15local1 = new __dep_export_GloryHUDView.GloryHUDView(this.gloryHUDDisp);
    var __s15local2 = new __dep_export_GloryHUDAnimationController.GloryHUDAnimationController();
    this._gloryHUD.setModel(__s15local0);
    this._gloryHUD.addView(__s15local1);
    this._gloryHUD.setController(__s15local2);
    this.gloryHUDDisp.mouseChildren = false;
  };
  CastleUserStatePanel.prototype.updateSubscription = function () {
    this.userStatePanel.mc_subscription.visible = false;
    var __s17local0 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SUBSCRIPTION;
    var __s17local1 = this.userStatePanel.mc_subscription.btn_subscription;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s17local1, __s17local0);
    __s17local1.toolTipText = __s17local0 ? "dialog_subscriptions_name_generic" : "dialog_accountInfo_notAvailable_tooltip";
    this.userStatePanel.mc_subscription.mc_background.gotoAndStop(__dep_export_CastleModel.CastleModel.subscriptionData.isAnyPackageActive() ? 2 : 1);
    this.updateCache();
  };
  CastleUserStatePanel.prototype.onHasLegendTemple = function (__s19param0) {
    if (__dep_export_CastleModel.CastleModel.legendSkillData.hasLegendTemple()) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.userStatePanel.mc_paragonBg.mc_button]);
      this.controller.removeEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onHasLegendTemple));
    }
  };
  CastleUserStatePanel.prototype.show = function () {
    this.onChangeXP();
    this.onChangeMight();
    this.onChangeCurrency();
    this.onChangeName();
    this.updateCrest();
    this.addGoldComp.init();
    __s1param0.prototype.show.call(this);
    this.allowCaching = true;
  };
  CastleUserStatePanel.prototype.onChangeMight = function (__s24param0 = null) {
    if (this.i_txt_userMight && this.i_txt_userMight.textContentVO && this.userStatePanel && this.userStatePanel.mc_mightBar && this.userStatePanel.mc_mightBar.mightBar) {
      this.i_txt_userMight.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.mightData.userCurrentMight;
      try {
        var __s24local0 = __dep_export_CastleModel.CastleModel.mightData.getNextMightRank(__dep_export_CastleModel.CastleModel.mightData.userHighestMightAchieved);
        if (__s24local0) {
          this.userStatePanel.mc_mightBar.toolTipText = {
            t: "might_display_info_tooltip",
            p: [__dep_export_CastleModel.CastleModel.mightData.userMightToNextLevel]
          };
          this.userStatePanel.mc_mightBar.mightBar.scaleX = Math.min(Math.max(__dep_export_CastleModel.CastleModel.mightData.userCurrentMight / __s24local0.threshold, 0), 1);
        } else {
          this.userStatePanel.mc_mightBar.toolTipText = "might_display_max_tooltip";
          this.userStatePanel.mc_mightBar.mightBar.scaleX = 1;
        }
      } catch (__s30local0) {
        __dep_exact_9e901e8e2483a22f_3.debug(__s30local0.stack);
        console.log(__s30local0.stack);
      }
      if (__s24param0) {
        this.updateCache();
      }
    }
  };
  CastleUserStatePanel.prototype.onChangeXP = function (__s33param0 = null) {
    this.i_xpBar_txt_userXP.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_XP;
    var __s33local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userXP - (__dep_export_CastleModel.CastleModel.userData.isLegend ? __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP_XP : 0));
    this.i_xpBar_txt_userXP.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s33local0)];
    if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
      this.userStatePanel.mc_paragonBg.mc_button.toolTipText = "panel_state_LegendLevel";
      this.userStatePanel.mc_normalBg.visible = false;
      this.userStatePanel.mc_paragonBg.visible = true;
      this.i_txt_userLegendLevel.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.userData.userLegendLevel);
      this.userStatePanel.mc_xpBar.icon_xpLegend.visible = true;
    } else {
      this.userStatePanel.mc_normalBg.mc_level_bg.toolTipText = "panel_state_Level";
      this.userStatePanel.mc_normalBg.visible = true;
      this.userStatePanel.mc_paragonBg.visible = false;
      var __s33local1 = this.i_txt_userLevel.y;
      this.i_txt_userLevel.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.userData.userLevel);
      if (this.i_txt_userLevel.y != __s33local1) {
        this.i_txt_userLevel.y = __s33local1;
      }
      this.userStatePanel.mc_xpBar.icon_xpLegend.visible = false;
    }
    if (__dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_exact_26a421b704832cff.PlayerConst.LEGEND_LEVEL_CAP) {
      this.userStatePanel.mc_xpBar.toolTipText = "panel_state_levelCap_legend";
      var __s33local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s33local2.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_DIRTY_GREEN;
      this.userStatePanel.mc_xpBar.xpbar.useFilters([new createjs.ColorFilter(__s33local2.redMultiplier, __s33local2.greenMultiplier, __s33local2.blueMultiplier, __s33local2.alphaMultiplier, __s33local2.redOffset, __s33local2.greenOffset, __s33local2.blueOffset, __s33local2.alphaOffset)]);
      this.userStatePanel.mc_xpBar.xpbar.scaleX = 1;
    } else {
      var __s33local3 = __dep_export_CastleModel.CastleModel.userData.isLegend ? "panel_state_xpToLevelUp_legend" : "panel_state_xpToLevelUp";
      this.userStatePanel.mc_xpBar.toolTipText = {
        t: __s33local3,
        p: [__dep_export_CastleModel.CastleModel.userData.userXPtoNextLevel]
      };
      this.userStatePanel.mc_xpBar.xpbar.scaleX = Math.max(0, __dep_export_CastleModel.CastleModel.userData.xpPercentToNextLevel);
    }
    this.userStatePanel.mc_crest_paragon.actLikeButton = this.userStatePanel.mc_crest_normal.actLikeButton = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST;
    this.userStatePanel.mc_mightBar.actLikeButton = this.enableGloryHud;
    this.gloryHUDDisp.actLikeButton = this.enableGloryHud;
    this.updateSubscription();
    if (__s33param0) {
      this.updateCache();
    }
  };
  CastleUserStatePanel.prototype.onChangeCurrency = function (__s41param0 = null) {
    if (this.i_txt_userCurrency1) {
      this.i_txt_userCurrency1.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.c1Amount;
    } else {
      this.i_txt_userCurrency1 = this.textFieldManager.registerTextField(this.userStatePanel.txt_userCurrency1, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.c1Amount, {
        compactThreshold: 10000000,
        compactFractionalDigits: 0
      }), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    }
    if (this.i_txt_userCurrency2) {
      this.i_txt_userCurrency2.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
    } else {
      this.i_txt_userCurrency2 = this.textFieldManager.registerTextField(this.userStatePanel.txt_userCurrency2, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.c2Amount, {
        compactThreshold: 10000000,
        compactFractionalDigits: 0
      }), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    }
    if (__s41param0) {
      this.updateCache();
    }
  };
  CastleUserStatePanel.prototype.updateCrest = function (__s48param0) {
    var __s48local0;
    var __s48local1;
    var __s48local2 = this;
    if (__s48param0 === undefined) {
      __s48param0 = null;
    }
    if (__dep_export_CastleModel.CastleModel.userData.playerCrest) {
      if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
        this.userStatePanel.mc_crest_normal.visible = false;
        this.userStatePanel.mc_crest_paragon.visible = true;
        __s48local0 = this.userStatePanel.mc_crest_paragon;
      } else {
        this.userStatePanel.mc_crest_paragon.visible = false;
        this.userStatePanel.mc_crest_normal.visible = true;
        __s48local0 = this.userStatePanel.mc_crest_normal;
      }
      __s48local0.visible = true;
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s48local0, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, false).then(function () {
        __s48local2.updateCache();
      }).catch(function (__s56param0) {
        __dep_exact_9e901e8e2483a22f.warn("failed to set crest Graphics", __s56param0);
      });
      __s48local1 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST ? __dep_exact_92d05af59ee2ff30.Localize.text("crest_tooltip") + (__dep_export_CastleModel.CastleModel.userData.playerCrest.tooltipText != null ? "\n\n" + __dep_export_CastleModel.CastleModel.userData.playerCrest.tooltipText : "") : {
        t: __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED,
        p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST]
      };
      __s48local0.toolTipText = __s48local1;
      if (__s48param0) {
        this.updateCache();
      }
    }
  };
  CastleUserStatePanel.prototype.onClick = function (__s59param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s59param0.target)) {
      __s1param0.prototype.onClick.call(this, __s59param0);
      switch (__s59param0.target) {
        case this.userStatePanel.btn_payment:
          this.addGoldComp.onClickButton(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_USER_STATE_PANEL, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_USER_STATE_PANEL);
          break;
        case this.userStatePanel.mc_crest_paragon:
        case this.userStatePanel.mc_crest_normal:
          if (__dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog, new __dep_export_CastlePremiumMarketPlaceDialogProperties.CastlePremiumMarketPlaceDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST));
          }
          break;
        case this.userStatePanel.mc_paragonBg.mc_button:
          if (__dep_export_CastleModel.CastleModel.legendSkillData.hasLegendTemple()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog);
          }
          break;
        case this.gloryHUDDisp:
          if (this.gloryHUD_model().isAnimating) {
            this.gloryHUD_controller().stopAnimation();
          }
          if (!this.enableGloryHud) {
            break;
          }
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTitleMainDialog.CastleTitleMainDialog, new __dep_export_CastleTitleMainDialogProperties.CastleTitleMainDialogProperties());
          break;
        case this.userStatePanel.mc_mightBar:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleIngameHelpDialog.CastleIngameHelpDialog, new __dep_export_CastleInGameHelpDialogProperties.CastleInGameHelpDialogProperties(__dep_export_CastleInGameHelpCategoriesEnum.CastleInGameHelpCategoriesEnum.MIGHT_POINTS));
          break;
        case this.userStatePanel.btn_buyLevel:
          this.buyLevelComp.onClickButton();
      }
    }
  };
  Object.defineProperty(CastleUserStatePanel.prototype, "enableGloryHud", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GLORY_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserStatePanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._gloryHUD.destroy();
    this.addGoldComp.destroy();
    this.buyLevelComp.destroy();
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeXP));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateCrest));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.updateCrest));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onChangeName));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
    this.controller.removeEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onHasLegendTemple));
    this.controller.removeEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userLevel);
    this.textFieldManager.unregisterTextFieldByReference(this.i_xpBar_txt_userXP);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userCurrency1);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userCurrency2);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userMight);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_username);
    this.i_txt_userLevel = null;
    this.i_txt_userLegendLevel = null;
    this.i_txt_userMight = null;
    this.i_xpBar_txt_userXP = null;
    this.i_txt_userCurrency1 = null;
    this.i_txt_userCurrency2 = null;
    this.i_txt_username = null;
  };
  CastleUserStatePanel.prototype.onSubscriptionChanged = function (__s71param0) {
    this.updateSubscription();
  };
  CastleUserStatePanel.prototype.gloryHUD_model = function () {
    return this._gloryHUD.getModel();
  };
  CastleUserStatePanel.prototype.gloryHUD_controller = function () {
    return this._gloryHUD.controllers[0];
  };
  Object.defineProperty(CastleUserStatePanel.prototype, "userStatePanel", {
    get: function () {
      return this.panelDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserStatePanel.prototype, "dispToCache", {
    get: function () {
      return this.panelDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserStatePanel.NAME = "CastleUserState_X";
  return CastleUserStatePanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleUserStatePanel = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_ButtonBuyLevelComponent = require("gge-module:export_ButtonBuyLevelComponent");
var __dep_export_CastleIngameHelpDialog = require("gge-module:export_CastleIngameHelpDialog");
var __dep_export_CastleLegendSkillDialog = require("gge-module:export_CastleLegendSkillDialog");
var __dep_export_CastlePremiumMarketPlaceDialog = require("gge-module:export_CastlePremiumMarketPlaceDialog");
var __dep_export_CastleTitleMainDialog = require("gge-module:export_CastleTitleMainDialog");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
