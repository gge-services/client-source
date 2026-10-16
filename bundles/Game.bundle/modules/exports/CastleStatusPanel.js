Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_export_CastleStatusBar = require("gge-module:export_CastleStatusBar");
var __dep_export_StatusIconSeasonGacha_Anniversary = require("gge-module:export_StatusIconSeasonGacha_Anniversary");
var __dep_export_StatusIconSeasonGacha_BlackFriday = require("gge-module:export_StatusIconSeasonGacha_BlackFriday");
var __dep_export_StatusIconSeasonGacha_Carnival = require("gge-module:export_StatusIconSeasonGacha_Carnival");
var __dep_export_StatusIconSeasonGacha_Christmas = require("gge-module:export_StatusIconSeasonGacha_Christmas");
var __dep_export_StatusIconSeasonGacha_Easter = require("gge-module:export_StatusIconSeasonGacha_Easter");
var __dep_export_StatusIconSeasonGacha_Halloween = require("gge-module:export_StatusIconSeasonGacha_Halloween");
var __dep_export_StatusIconSeasonGacha_Summer = require("gge-module:export_StatusIconSeasonGacha_Summer");
var __dep_export_StatusBarExpansionDirectionEnum = require("gge-module:export_StatusBarExpansionDirectionEnum");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Container;
var __s0local2 = function (__s1param0) {
  function CastleStatusPanel(__s3param0 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0 || new __s0local1()) || this;
    __s3local0._panel = __s3local0.disp;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStatusPanel, __s1param0);
  CastleStatusPanel.prototype.initComponents = function () {
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new __dep_export_StatusIconLastManStanding.StatusIconLastManStanding(__dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION));
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new __dep_export_StatusIconLastManStanding.StatusIconLastManStanding(__dep_exact_26a421b704832cff.FactionConst.RED_FACTION));
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new __dep_export_StatusIconRepairAll.StatusIconRepairAll());
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new __dep_export_StatusIconActivityBonusComponent.StatusIconActivityBonusComponent());
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new __dep_export_StatusIconGlobalEffectEvent.StatusIconGlobalEffectEvent());
    this._bars[CastleStatusPanel.BAR_RIGHT_2].addIcon(new __dep_export_StatusIconStartupLoginBonusComponent.StatusIconStartupLoginBonusComponent());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new __dep_export_StatusIconAttackWarnings.StatusIconAttackWarnings());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new __dep_export_StatusIconAdvisorAttack_Nomad.StatusIconAdvisorAttack_Nomad());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new __dep_export_StatusIconAdvisorAttack_Samurai.StatusIconAdvisorAttack_Samurai());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new __dep_export_StatusIconAdvisorAttack_Faction.StatusIconAdvisorAttack_Faction());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new __dep_export_StatusIconAdvisorAttack_Baron.StatusIconAdvisorAttack_Baron());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new __dep_export_StatusIconOpenGate.StatusIconOpenGate());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new __dep_export_StatusIconNoobProtection.StatusIconNoobProtection());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new __dep_export_StatusIconPeaceProtection.StatusIconPeaceProtection());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new __dep_export_StatusIconFactionProtection.StatusIconFactionProtection());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new __dep_export_StatusIconCapEyecatcher.StatusIconCapEyecatcher());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new __dep_export_StatusIconWebshop.StatusIconWebshop());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new __dep_export_StatusIconAllianceTeaserComponent.StatusIconAllianceTeaserComponent());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new __dep_export_StatusIconAllianceAction.StatusIconAllianceAction());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconOfferHub.StatusIconOfferHub());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconDynamicOffer.StatusIconDynamicOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconPrimeAlliBonus.StatusIconPrimeAlliBonus());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconAlliPaymentBonus.StatusIconAlliPaymentBonus());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconSpecialIngameOffer.StatusIconSpecialIngameOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconSpecialOffer.StatusIconSpecialOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconTimelessSpecialOffer.StatusIconTimelessSpecialOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconPaymentReward.StatusIconPaymentReward());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconTieredPaymentReward.StatusIconTieredPaymentReward());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconReactivationPaymentRewardEvent.StatusIconReactivationPaymentRewardEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconPrimeTimeOffer.StatusIconPrimeTimeOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconPrimeSaleEvent.StatusIconPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconUnitPrimeSaleEvent.StatusIconUnitPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconEquipmentEnhancerPrimeSaleEvent.StatusIconEquipmentEnhancerPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconEventPackagePrimeSaleEvent.StatusIconEventPackagePrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconPrimeSaleReviveAllEvent.StatusIconPrimeSaleReviveAllEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconWorldCup.StatusIconWorldCup());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconGoodgamesGift.StatusIconGoodgamesGift());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconPersonalFameBooster.StatusIconPersonalFameBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconFameBooster.StatusIconFameBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconKhanTabletBooster.StatusIconKhanTabletBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconRageBooster.StatusIconRageBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconKhanMedalBooster.StatusIconKhanMedalBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconSamuraiBooster.StatusIconSamuraiBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconAllianceCoinBooster.StatusIconAllianceCoinBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconBoosterSale.StatusIconBoosterSale());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconSeasonPassSale.StatusIconSeasonPassSale());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconBoosterSaleLabeled.StatusIconBoosterSaleLabeled());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconXPBooster.StatusIconXPBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconGallantryBooster.StatusIconGallantryBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconFactionInvasionBooster.StatusIconFactionInvasionBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconShoppingCart.StatusIconShoppingCart());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconRelicEnchanterPrimeSaleEvent.StatusIconRelicEnchanterPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new __dep_export_StatusIconMailGiftComponent.StatusIconMailGiftComponent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconOfferHub.StatusIconOfferHub());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconEilandRanking.StatusIconEilandRanking());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconTemporaryServerEvent.StatusIconTemporaryServerEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconAllianceBattleGroundEvent.StatusIconAllianceBattleGroundEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonLeagueEvent.StatusIconSeasonLeagueEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconCollectorEvent.StatusIconCollectorEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconFactionEvent.StatusIconFactionEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonEvent.StatusIconSeasonEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconLeaveEvent.StatusIconLeaveEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_Christmas.StatusIconSeasonGacha_Christmas());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_Easter.StatusIconSeasonGacha_Easter());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_Summer.StatusIconSeasonGacha_Summer());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_Halloween.StatusIconSeasonGacha_Halloween());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_Anniversary.StatusIconSeasonGacha_Anniversary());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_BlackFriday.StatusIconSeasonGacha_BlackFriday());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new __dep_export_StatusIconSeasonGacha_Carnival.StatusIconSeasonGacha_Carnival());
    this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].addIcon(new __dep_export_StatusIconDailyQuest.StatusIconDailyQuest());
  };
  CastleStatusPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.dispToCache.tickEnabled = true;
    this._bars = [new __dep_export_CastleStatusBar.CastleStatusBar(__dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_LEFT, true), new __dep_export_CastleStatusBar.CastleStatusBar(__dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_DOWN), new __dep_export_CastleStatusBar.CastleStatusBar(__dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_RIGHT), new __dep_export_CastleStatusBar.CastleStatusBar(__dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_DOWN), new __dep_export_CastleStatusBar.CastleStatusBar(__dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_RIGHT), new __dep_export_CastleOfferHubStatusBar.CastleOfferHubStatusBar("events"), new __dep_export_CastleOfferHubStatusBar.CastleOfferHubStatusBar("offersOverview"), new __dep_export_CastleStatusBar.CastleStatusBar(__dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_LEFT)];
    if (this._bars != null) {
      for (var __s7local0 = 0, __s7local1 = this._bars; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          this._panel.addChild(__s7local2.disp);
        }
      }
    }
    this.repositioningBars();
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.initComponents();
  };
  CastleStatusPanel.prototype.destroy = function () {
    for (this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState)); this._panel.numChildren > 0;) {
      this._panel.removeChildAt(0);
    }
    if (this._bars != null) {
      for (var __s13local0 = 0, __s13local1 = this._bars; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.dispose();
        }
      }
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleStatusPanel.prototype.onChangeLayoutState = function (__s21param0 = null) {
    if (this._bars != null) {
      for (var __s21local0 = 0, __s21local1 = this._bars; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined) {
          __s21local2.onChangeLayoutState();
        }
      }
    }
  };
  CastleStatusPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = 0;
      this.repositioningBars();
    }
  };
  CastleStatusPanel.prototype.onCastleStatusBarIconsRepositioned = function (__s30param0) {
    this.repositioningBars();
  };
  CastleStatusPanel.prototype.repositioningBars = function () {
    if (this.disp.visible) {
      this._bars[CastleStatusPanel.BAR_RIGHT].disp.x = this.disp.stage.stageWidth - (CastleStatusPanel.RIGHT_SPACE + CastleStatusPanel.RIGHT_SPACE_ACTIVITY_CHEST);
      this._bars[CastleStatusPanel.BAR_RIGHT].disp.y = CastleStatusPanel.TOP_SPACE_RIGHT_BAR;
      this._bars[CastleStatusPanel.BAR_RIGHT_2].disp.x = this.disp.stage.stageWidth - CastleStatusPanel.RIGHT_SPACE;
      this._bars[CastleStatusPanel.BAR_RIGHT_2].disp.y = this._bars[CastleStatusPanel.BAR_RIGHT].disp.y + CastleStatusPanel.BAR_SPACING;
      this._bars[CastleStatusPanel.BAR_LEFT].disp.x = CastleStatusPanel.LEFT_SPACE;
      this._bars[CastleStatusPanel.BAR_LEFT].disp.y = CastleStatusPanel.TOP_SPACE_LEFT_BAR;
      this._bars[CastleStatusPanel.BAR_LEFT_2].disp.x = CastleStatusPanel.LEFT_SPACE;
      this._bars[CastleStatusPanel.BAR_LEFT_2].disp.y = this._bars[CastleStatusPanel.BAR_LEFT].disp.y + CastleStatusPanel.BAR_SPACING;
      this._bars[CastleStatusPanel.BAR_LEFT_3].expandTo = __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_DOWN;
      this._bars[CastleStatusPanel.BAR_LEFT_3].disp.x = CastleStatusPanel.LEFT_SPACE_BAR_LEFT_3_DOWN;
      this._bars[CastleStatusPanel.BAR_LEFT_3].disp.y = CastleStatusPanel.TOP_SPACE_BAR_LEFT_3;
      if (this.disp.stage.stageHeight < CastleStatusPanel.MOVE_DAILY_QUEST_AT_HEIGHT) {
        this._bars[CastleStatusPanel.BAR_LEFT_3].addPositionReset(2, 80, 0, true);
      } else {
        this._bars[CastleStatusPanel.BAR_LEFT_3].clearPositionResets();
      }
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        this._bars[CastleStatusPanel.BAR_LEFT_3].disp.y -= 80;
      }
      if (this.disp.stage.stageWidth > CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SCALE_AT_WIDTH) {
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL;
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.x = this.disp.stage.stageWidth - (this.layoutManager.isInEventState ? CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SEASON : CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL);
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleX = this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleY = 1;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.x = CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleX = this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleY = 1;
      } else {
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.y = this.disp.stage.stageHeight - (CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET);
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.x = this.disp.stage.stageWidth - (this.layoutManager.isInEventState ? CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SEASON - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET : CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET);
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleX = this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleY = CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_SCALE;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.y = this.disp.stage.stageHeight - (CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET);
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.x = CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL_SMALL_RESOLUTION;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleX = this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleY = CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_SCALE;
        if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
          this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.x += 50;
        }
      }
      this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].onChangeLayoutState();
      if (this.disp.stage.stageHeight < CastleStatusPanel.MOVE_DAILY_QUEST_AT_HEIGHT) {
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.x = this.disp.stage.stageWidth - CastleStatusPanel.RIGHT_SPACE_QUEST_SMALL_RESOLUTION;
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_QUEST_SMALL_RESOLUTION;
      } else {
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.x = this.disp.stage.stageWidth - CastleStatusPanel.RIGHT_SPACE_QUEST;
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_QUEST;
      }
      if (__dep_export_CastleQuestStartPanel.CastleQuestStartPanel.movePanelUp()) {
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.y += __dep_export_ClientConstCastle.ClientConstCastle.SEASON_PANEL_OFFSET;
      }
    }
  };
  CastleStatusPanel.prototype.onClick = function (__s44param0) {
    if (__s44param0.target instanceof __s0local0 && __s44param0.target.statusIcon) {
      __s44param0.target.statusIcon.onClick(__s44param0);
    }
  };
  CastleStatusPanel.prototype.addStatusIcon = function (__s47param0, __s47param1) {
    this._bars[__s47param0].addIcon(__s47param1);
    this.repositioningBars();
  };
  CastleStatusPanel.prototype.removeStatusIcon = function (__s49param0, __s49param1) {
    this._bars[__s49param0].removeIcon(__s49param1);
    this.repositioningBars();
  };
  CastleStatusPanel.prototype.hasStatusIcon = function (__s51param0, __s51param1) {
    return this._bars[__s51param0].hasIcon(__s51param1);
  };
  CastleStatusPanel.__initialize_static_members = function () {
    CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SCALE_AT_WIDTH = CastleStatusPanel.WIDTH_FOR_SMALL_RESOLUTION;
  };
  CastleStatusPanel.NAME = "CastleStatusPanel";
  CastleStatusPanel.BAR_RIGHT = 0;
  CastleStatusPanel.BAR_RIGHT_2 = 1;
  CastleStatusPanel.BAR_LEFT = 2;
  CastleStatusPanel.BAR_LEFT_2 = 3;
  CastleStatusPanel.BAR_LEFT_3 = 7;
  CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT = 5;
  CastleStatusPanel.BAR_ACTION_PANEL_LEFT = 6;
  CastleStatusPanel.BAR_QUESTPANEL_TOP = 4;
  CastleStatusPanel.WIDTH_FOR_SMALL_RESOLUTION = 908;
  CastleStatusPanel.BAR_SPACING = 80;
  CastleStatusPanel.LEFT_SPACE = 190;
  CastleStatusPanel.RIGHT_SPACE = 180;
  CastleStatusPanel.TOP_SPACE_LEFT_BAR = 70;
  CastleStatusPanel.TOP_SPACE_RIGHT_BAR = 100;
  CastleStatusPanel.BOTTOM_SPACE = 35;
  CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL_LEFT = 10;
  CastleStatusPanel.BOTTOM_SPACE_OVER_VERSIONTEXT = 10;
  CastleStatusPanel.BOTTOM_SPACE_MULTIINFOPANEL_SMALL_RESOLUTION = 50;
  CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL = 222;
  CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL_SMALL_RESOLUTION = 212;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SEASON = 357;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL = 515;
  CastleStatusPanel.LEFT_SPACE_BAR_LEFT_3_RIGHT = 40;
  CastleStatusPanel.LEFT_SPACE_BAR_LEFT_3_DOWN = 55;
  CastleStatusPanel.TOP_SPACE_BAR_LEFT_3 = 260;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_HIGH_RESOLUTION_OFFSET = 50;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET = 10;
  CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL = 39;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_SCALE = 0.75;
  CastleStatusPanel.BOTTOM_SPACE_QUEST = 285;
  CastleStatusPanel.RIGHT_SPACE_QUEST = 40;
  CastleStatusPanel.BOTTOM_SPACE_QUEST_SMALL_RESOLUTION = 190;
  CastleStatusPanel.RIGHT_SPACE_QUEST_SMALL_RESOLUTION = 120;
  CastleStatusPanel.RIGHT_SPACE_ACTIVITY_CHEST = 15;
  CastleStatusPanel.MOVE_DAILY_QUEST_AT_HEIGHT = 680;
  return CastleStatusPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleStatusPanel = __s0local2;
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_export_StatusIconBoosterSale = require("gge-module:export_StatusIconBoosterSale");
var __dep_export_StatusIconBoosterSaleLabeled = require("gge-module:export_StatusIconBoosterSaleLabeled");
var __dep_export_StatusIconSeasonPassSale = require("gge-module:export_StatusIconSeasonPassSale");
var __dep_export_StatusIconShoppingCart = require("gge-module:export_StatusIconShoppingCart");
var __dep_export_StatusIconDailyQuest = require("gge-module:export_StatusIconDailyQuest");
var __dep_export_StatusIconEquipmentEnhancerPrimeSaleEvent = require("gge-module:export_StatusIconEquipmentEnhancerPrimeSaleEvent");
var __dep_export_StatusIconEventPackagePrimeSaleEvent = require("gge-module:export_StatusIconEventPackagePrimeSaleEvent");
var __dep_export_StatusIconPrimeSaleEvent = require("gge-module:export_StatusIconPrimeSaleEvent");
var __dep_export_StatusIconRelicEnchanterPrimeSaleEvent = require("gge-module:export_StatusIconRelicEnchanterPrimeSaleEvent");
var __dep_export_StatusIconUnitPrimeSaleEvent = require("gge-module:export_StatusIconUnitPrimeSaleEvent");
var __dep_export_StatusIconAttackWarnings = require("gge-module:export_StatusIconAttackWarnings");
var __dep_export_CastleOfferHubStatusBar = require("gge-module:export_CastleOfferHubStatusBar");
var __dep_export_StatusIconAlliPaymentBonus = require("gge-module:export_StatusIconAlliPaymentBonus");
var __dep_export_StatusIconDynamicOffer = require("gge-module:export_StatusIconDynamicOffer");
var __dep_export_StatusIconGoodgamesGift = require("gge-module:export_StatusIconGoodgamesGift");
var __dep_export_StatusIconPrimeAlliBonus = require("gge-module:export_StatusIconPrimeAlliBonus");
var __dep_export_StatusIconPrimeTimeOffer = require("gge-module:export_StatusIconPrimeTimeOffer");
var __dep_export_StatusIconSpecialIngameOffer = require("gge-module:export_StatusIconSpecialIngameOffer");
var __dep_export_StatusIconSpecialOffer = require("gge-module:export_StatusIconSpecialOffer");
var __dep_export_StatusIconTimelessSpecialOffer = require("gge-module:export_StatusIconTimelessSpecialOffer");
var __dep_export_StatusIconWorldCup = require("gge-module:export_StatusIconWorldCup");
var __dep_export_StatusIconFactionProtection = require("gge-module:export_StatusIconFactionProtection");
var __dep_export_StatusIconNoobProtection = require("gge-module:export_StatusIconNoobProtection");
var __dep_export_StatusIconOpenGate = require("gge-module:export_StatusIconOpenGate");
var __dep_export_StatusIconPeaceProtection = require("gge-module:export_StatusIconPeaceProtection");
var __dep_export_StatusIconActivityBonusComponent = require("gge-module:export_StatusIconActivityBonusComponent");
var __dep_export_StatusIconStartupLoginBonusComponent = require("gge-module:export_StatusIconStartupLoginBonusComponent");
var __dep_export_StatusIconAdvisorAttack_Baron = require("gge-module:export_StatusIconAdvisorAttack_Baron");
var __dep_export_StatusIconAdvisorAttack_Faction = require("gge-module:export_StatusIconAdvisorAttack_Faction");
var __dep_export_StatusIconAdvisorAttack_Nomad = require("gge-module:export_StatusIconAdvisorAttack_Nomad");
var __dep_export_StatusIconAdvisorAttack_Samurai = require("gge-module:export_StatusIconAdvisorAttack_Samurai");
var __dep_export_StatusIconAllianceAction = require("gge-module:export_StatusIconAllianceAction");
var __dep_export_StatusIconAllianceBattleGroundEvent = require("gge-module:export_StatusIconAllianceBattleGroundEvent");
var __dep_export_StatusIconAllianceCoinBooster = require("gge-module:export_StatusIconAllianceCoinBooster");
var __dep_export_StatusIconAllianceTeaserComponent = require("gge-module:export_StatusIconAllianceTeaserComponent");
var __dep_export_StatusIconCapEyecatcher = require("gge-module:export_StatusIconCapEyecatcher");
var __dep_export_StatusIconCollectorEvent = require("gge-module:export_StatusIconCollectorEvent");
var __dep_export_StatusIconEilandRanking = require("gge-module:export_StatusIconEilandRanking");
var __dep_export_StatusIconFactionEvent = require("gge-module:export_StatusIconFactionEvent");
var __dep_export_StatusIconFameBooster = require("gge-module:export_StatusIconFameBooster");
var __dep_export_StatusIconGallantryBooster = require("gge-module:export_StatusIconGallantryBooster");
var __dep_export_StatusIconGlobalEffectEvent = require("gge-module:export_StatusIconGlobalEffectEvent");
var __dep_export_StatusIconKhanMedalBooster = require("gge-module:export_StatusIconKhanMedalBooster");
var __dep_export_StatusIconKhanTabletBooster = require("gge-module:export_StatusIconKhanTabletBooster");
var __dep_export_StatusIconLastManStanding = require("gge-module:export_StatusIconLastManStanding");
var __dep_export_StatusIconLeaveEvent = require("gge-module:export_StatusIconLeaveEvent");
var __dep_export_StatusIconMailGiftComponent = require("gge-module:export_StatusIconMailGiftComponent");
var __dep_export_StatusIconOfferHub = require("gge-module:export_StatusIconOfferHub");
var __dep_export_StatusIconPaymentReward = require("gge-module:export_StatusIconPaymentReward");
var __dep_export_StatusIconPersonalFameBooster = require("gge-module:export_StatusIconPersonalFameBooster");
var __dep_export_StatusIconPrimeSaleReviveAllEvent = require("gge-module:export_StatusIconPrimeSaleReviveAllEvent");
var __dep_export_StatusIconRageBooster = require("gge-module:export_StatusIconRageBooster");
var __dep_export_StatusIconReactivationPaymentRewardEvent = require("gge-module:export_StatusIconReactivationPaymentRewardEvent");
var __dep_export_StatusIconRepairAll = require("gge-module:export_StatusIconRepairAll");
var __dep_export_StatusIconSamuraiBooster = require("gge-module:export_StatusIconSamuraiBooster");
var __dep_export_StatusIconSeasonEvent = require("gge-module:export_StatusIconSeasonEvent");
var __dep_export_StatusIconSeasonLeagueEvent = require("gge-module:export_StatusIconSeasonLeagueEvent");
var __dep_export_StatusIconTemporaryServerEvent = require("gge-module:export_StatusIconTemporaryServerEvent");
var __dep_export_StatusIconTieredPaymentReward = require("gge-module:export_StatusIconTieredPaymentReward");
var __dep_export_StatusIconWebshop = require("gge-module:export_StatusIconWebshop");
var __dep_export_StatusIconXPBooster = require("gge-module:export_StatusIconXPBooster");
var __dep_export_StatusIconFactionInvasionBooster = require("gge-module:export_StatusIconFactionInvasionBooster");
__s0local2.__initialize_static_members();
