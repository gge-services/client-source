Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_AllianceRaidEventDialogBossRewards = require("gge-module:export_AllianceRaidEventDialogBossRewards");
var __dep_export_AllianceRaidEventDialogBossSelection = require("gge-module:export_AllianceRaidEventDialogBossSelection");
var __dep_export_AllianceRaidEventDialogOverview = require("gge-module:export_AllianceRaidEventDialogOverview");
var __dep_export_AllianceRaidEventDialogSublayer = require("gge-module:export_AllianceRaidEventDialogSublayer");
var __dep_export_AllianceRaidEventDialogVictory = require("gge-module:export_AllianceRaidEventDialogVictory");
var __dep_export_AllianceRaidEventRankingDialog = require("gge-module:export_AllianceRaidEventRankingDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventMainDialog() {
    return __s1param0.call(this, AllianceRaidEventMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventMainDialog, __s1param0);
  AllianceRaidEventMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_tabs.btn_blacksmith, this.dialogDisp.mc_tabs.btn_score, this.dialogDisp.mc_buttons.btn_close, this.dialogDisp.mc_buttons.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    for (var __s5local0 = 0; __s5local0 < AllianceRaidEventMainDialog.NUM_MAX_TABS; __s5local0++) {
      __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.mc_tabs["tab_" + __s5local0], 1, __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton);
    }
    this.dialogDisp.mc_buttons.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_tabs.tab_0.toolTipText = "are_tabMain_tooltip";
    this.dialogDisp.mc_tabs.tab_2.toolTipText = "dialog_are_choose_boss_title";
    this.dialogDisp.mc_tabs.btn_blacksmith.toolTipText = "dialog_are_raidbossShopEvent_title";
    this.dialogDisp.mc_tabs.btn_score.toolTipText = "ranking";
    this._subLayer = new Map();
    this._subLayer.set(AllianceRaidEventMainDialog.TAB_OVERVIEW, new __dep_export_AllianceRaidEventDialogOverview.AllianceRaidEventDialogOverview(this.dialogDisp[AllianceRaidEventMainDialog.TAB_OVERVIEW], this.bindFunction(this.showBossSelection), this.bindFunction(this.showActivityRewards)));
    this._subLayer.set(AllianceRaidEventMainDialog.TAB_BOSS_REWARDS, new __dep_export_AllianceRaidEventDialogBossRewards.AllianceRaidEventDialogBossRewards(this.dialogDisp[AllianceRaidEventMainDialog.TAB_BOSS_REWARDS]));
    this._subLayer.set(AllianceRaidEventMainDialog.TAB_BOSS_SELECTION, new __dep_export_AllianceRaidEventDialogBossSelection.AllianceRaidEventDialogBossSelection(this.dialogDisp[AllianceRaidEventMainDialog.TAB_BOSS_SELECTION], this.bindFunction(this.showBossRewardsForBoss)));
    this._subLayer.set(AllianceRaidEventMainDialog.TAB_VICTORY, new __dep_export_AllianceRaidEventDialogVictory.AllianceRaidEventDialogVictory(this.dialogDisp[AllianceRaidEventMainDialog.TAB_VICTORY]));
    this._tabs = [AllianceRaidEventMainDialog.TAB_OVERVIEW, AllianceRaidEventMainDialog.TAB_BOSS_REWARDS, AllianceRaidEventMainDialog.TAB_BOSS_SELECTION];
  };
  AllianceRaidEventMainDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    if (this.eventVO) {
      this.updateTabTooltips();
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
      __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onBossStatusUpdated));
      __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onBossStatusUpdated));
      this.changeCategory(this.dialogProperties.startTab);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_tabs.btn_blacksmith, __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(this.shopEventID));
      if (this.dialogDisp.mc_tabs.btn_score.mc_new) {
        this.dialogDisp.mc_tabs.btn_score.mc_new.visible = false;
      }
      if (this.dialogDisp.mc_tabs.btn_blacksmith.mc_new) {
        this.dialogDisp.mc_tabs.btn_blacksmith.mc_new.visible = __dep_export_CastleModel.CastleModel.localData.readPlayerValue(AllianceRaidEventMainDialog.SHOP_NEW_SEEN_KEY) != 1;
      }
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId));
      }
    } else {
      this.hide();
    }
  };
  AllianceRaidEventMainDialog.prototype.hideLoaded = function () {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onBossStatusUpdated));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onBossStatusUpdated));
  };
  AllianceRaidEventMainDialog.prototype.updateTabTooltips = function () {
    if (this.eventVO) {
      var __s18local0 = this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO();
      if (__s18local0) {
        this.dialogDisp.mc_tabs.tab_0.toolTipText = __s18local0.getBossNameTextID();
        this.dialogDisp.mc_tabs.tab_1.toolTipText = {
          t: "dialog_are_boss_defeated_rewards",
          p: [__dep_exact_92d05af59ee2ff30.Localize.text(__s18local0.getBossNameTextID())]
        };
      } else {
        this.dialogDisp.mc_tabs.tab_0.toolTipText = "dialog_accountInfo_notAvailable_tooltip";
        this.dialogDisp.mc_tabs.tab_1.toolTipText = "dialog_accountInfo_notAvailable_tooltip";
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_tabs.tab_0, this.eventVO.raidBossServerDataVO.hasActiveRaid);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_tabs.tab_1, this.eventVO.raidBossServerDataVO.hasActiveRaid);
    }
  };
  AllianceRaidEventMainDialog.prototype.onBossStatusUpdated = function (__s23param0) {
    this.updateTabTooltips();
  };
  AllianceRaidEventMainDialog.prototype.showBossSelection = function () {
    this.changeCategory(AllianceRaidEventMainDialog.TAB_BOSS_SELECTION);
  };
  AllianceRaidEventMainDialog.prototype.showBossRewardsForBoss = function (__s27param0) {
    this.bossRewardsSublayer.portalBossID = __s27param0;
    this.bossRewardsSublayer.showRewardTab(__dep_export_AllianceRaidEventDialogBossRewards.AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT);
    this.changeCategory(AllianceRaidEventMainDialog.TAB_BOSS_REWARDS);
  };
  AllianceRaidEventMainDialog.prototype.showActivityRewards = function () {
    this.bossRewardsSublayer.showRewardTab(__dep_export_AllianceRaidEventDialogBossRewards.AllianceRaidEventDialogBossRewards.REWARD_TAB_ACTIVITY);
    this.changeCategory(AllianceRaidEventMainDialog.TAB_BOSS_REWARDS);
  };
  AllianceRaidEventMainDialog.prototype.changeCategory = function (__s31param0) {
    var __s31local0 = __s31param0 == AllianceRaidEventMainDialog.TAB_BOSS_REWARDS && this.bossRewardsSublayer.portalBossID > 0;
    __s31param0 = this.hasActiveRaid() || __s31local0 ? __s31param0 : AllianceRaidEventMainDialog.TAB_BOSS_SELECTION;
    if (this._currentCategory != __s31param0) {
      __s1param0.prototype.changeCategory.call(this, __s31param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this._currentDimensions, this.dialogProperties]);
      for (var __s31local1 = 0; __s31local1 < AllianceRaidEventMainDialog.NUM_MAX_TABS; __s31local1++) {
        var __s31local2 = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp.mc_tabs["tab_" + __s31local1]);
        var __s31local3 = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31local2);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s31local2, true);
        if (__s31local1 == this._tabs.indexOf(__s31param0)) {
          __s31local2.selected();
        } else {
          __s31local2.deselected();
        }
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s31local2, __s31local3);
      }
      this.loadBG();
    }
  };
  AllianceRaidEventMainDialog.prototype.onRemoveEvent = function (__s38param0) {
    if (!__dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO()) {
      this.hide();
    }
  };
  AllianceRaidEventMainDialog.prototype.onClick = function (__s41param0) {
    __s1param0.prototype.onClick.call(this, __s41param0);
    switch (__s41param0.target) {
      case this.dialogDisp.mc_buttons.btn_help:
        this._currentSublayer.showHelp();
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceRaidbossEvent"));
        break;
      case this.dialogDisp.mc_buttons.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_tabs.tab_0:
      case this.dialogDisp.mc_tabs.tab_1:
      case this.dialogDisp.mc_tabs.tab_2:
        var __s41local0 = parseInt(__s41param0.target.name.charAt(4));
        if (__s41local0 >= 0 && __s41local0 < this._tabs.length) {
          this.changeCategory(this._tabs[__s41local0]);
        }
        break;
      case this.dialogDisp.mc_tabs.btn_blacksmith:
        if (this.dialogDisp.mc_tabs.btn_blacksmith.mc_new) {
          this.dialogDisp.mc_tabs.btn_blacksmith.mc_new.visible = false;
          __dep_export_CastleModel.CastleModel.localData.savePlayerValue(AllianceRaidEventMainDialog.SHOP_NEW_SEEN_KEY, 1);
        }
        var __s41local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.shopEventID);
        if (__s41local1) {
          __s41local1.openMerchantDialog(true, -1);
        }
        break;
      case this.dialogDisp.mc_tabs.btn_score:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceRaidEventRankingDialog.AllianceRaidEventRankingDialog);
    }
  };
  AllianceRaidEventMainDialog.prototype.loadBG = function () {
    var __s47local0 = this;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_bg);
    var __s47local1 = "";
    switch (this._currentCategory) {
      case AllianceRaidEventMainDialog.TAB_OVERVIEW:
        __s47local1 = "AllianceRaidEventBG_" + this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO().name;
        break;
      case AllianceRaidEventMainDialog.TAB_VICTORY:
        __s47local1 = "AllianceRaidEventBG_Victory_" + this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO().name;
        break;
      case AllianceRaidEventMainDialog.TAB_BOSS_SELECTION:
        __s47local1 = "AllianceRaidEventBG_BossSelection";
        break;
      default:
        __s47local1 += "AllianceRaidEventBG_Generic";
    }
    var __s47local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s47local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s47local1), null, 0, false);
    this.dialogDisp.mc_bg.addChild(__s47local2);
    this._bgClip = __s47local2;
    __s47local2.doWhenLoaded(function (__s50param0) {
      if (__s47local0._currentSublayer) {
        __s47local0._currentSublayer.updateBackground(__s47local0._bgClip);
      }
    });
  };
  AllianceRaidEventMainDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s53local0 = Math.min(Math.max(this.disp.stage.stageWidth, AllianceRaidEventMainDialog.MIN_SIZE.x), AllianceRaidEventMainDialog.MAX_SIZE.x);
      var __s53local1 = Math.min(Math.max(this.disp.stage.stageHeight, AllianceRaidEventMainDialog.MIN_SIZE.y), AllianceRaidEventMainDialog.MAX_SIZE.y);
      var __s53local2 = AllianceRaidEventMainDialog.MAX_SIZE.x / AllianceRaidEventMainDialog.MAX_SIZE.y;
      var __s53local3 = AllianceRaidEventMainDialog.MIN_SIZE.x / AllianceRaidEventMainDialog.MIN_SIZE.y;
      var __s53local4 = 1;
      if (__s53local0 / __s53local1 > __s53local2) {
        __s53local0 = __s53local1 * __s53local2;
      }
      if (__s53local0 / __s53local1 < __s53local3) {
        __s53local1 = __s53local0 / __s53local3;
      }
      if (__s53local1 > this.disp.stage.stageHeight || __s53local0 > this.disp.stage.stageWidth) {
        __s53local4 = Math.min(this.disp.stage.stageWidth / __s53local0, this.disp.stage.stageHeight / __s53local1);
      }
      this.disp.scaleX = this.disp.scaleY = __s53local4;
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.dialogDisp.bg1.width = __s53local0 + 8;
      this.dialogDisp.bg1.height = __s53local1 + 8;
      this.dialogDisp.bg1.x = -this.dialogDisp.bg1.width / 2;
      this.dialogDisp.bg1.y = -this.dialogDisp.bg1.height / 2;
      this.dialogDisp.bg2.width = __s53local0 + 16;
      this.dialogDisp.bg2.height = __s53local1 + 16;
      this.dialogDisp.bg2.x = -this.dialogDisp.bg2.width / 2;
      this.dialogDisp.bg2.y = -this.dialogDisp.bg2.height / 2;
      this.dialogDisp.mc_bg.scaleX = this.dialogDisp.mc_bg.scaleY = __s53local1 / AllianceRaidEventMainDialog.MAX_SIZE.y;
      this.dialogDisp.mc_bg.x = -AllianceRaidEventMainDialog.MAX_SIZE.x * this.dialogDisp.mc_bg.scaleX / 2;
      this.dialogDisp.mc_bg.y = -__s53local1 / 2;
      this.dialogDisp.mc_tabs.x = -__s53local0 / 2;
      this.dialogDisp.mc_tabs.y = -__s53local1 / 2;
      this.dialogDisp.mc_buttons.x = __s53local0 / 2;
      this.dialogDisp.mc_buttons.y = -__s53local1 / 2;
      this.dialogDisp.mc_bg.mask.x = -__s53local0 / 2;
      this.dialogDisp.mc_bg.mask.y = -__s53local1 / 2;
      this.dialogDisp.mc_bg.mask.width = __s53local0;
      this.dialogDisp.mc_bg.mask.height = __s53local1;
      this._currentDimensions ||= new __s0local0();
      this._currentDimensions.x = __s53local0;
      this._currentDimensions.y = __s53local1;
      if (this._currentSublayer && this._currentSublayer instanceof __dep_export_AllianceRaidEventDialogSublayer.AllianceRaidEventDialogSublayer) {
        this._currentSublayer.updatePosition(__s53local0, __s53local1);
      }
    }
  };
  AllianceRaidEventMainDialog.prototype.hasActiveRaid = function () {
    return this.eventVO.raidBossServerDataVO.hasActiveRaid;
  };
  Object.defineProperty(AllianceRaidEventMainDialog.prototype, "bossRewardsSublayer", {
    get: function () {
      return this._subLayer.get(AllianceRaidEventMainDialog.TAB_BOSS_REWARDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventMainDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventMainDialog.prototype, "eventId", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventMainDialog.prototype, "shopEventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID_BOSS_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventMainDialog.__initialize_static_members = function () {
    AllianceRaidEventMainDialog.MAX_SIZE = new __s0local0(1280, 800);
    AllianceRaidEventMainDialog.MIN_SIZE = new __s0local0(800, 600);
  };
  AllianceRaidEventMainDialog.NAME = "AllianceRaidEventMainExt_Aug26";
  AllianceRaidEventMainDialog.NUM_MAX_TABS = 3;
  AllianceRaidEventMainDialog.TAB_OVERVIEW = "sublayer_overview";
  AllianceRaidEventMainDialog.TAB_BOSS_REWARDS = "sublayer_bossRewards";
  AllianceRaidEventMainDialog.TAB_BOSS_SELECTION = "sublayer_bossSelection";
  AllianceRaidEventMainDialog.TAB_VICTORY = "sublayer_victory";
  AllianceRaidEventMainDialog.SHOP_NEW_SEEN_KEY = "seenAREShopNew";
  return AllianceRaidEventMainDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.AllianceRaidEventMainDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
