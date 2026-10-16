Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastlePopUpHelper = require("gge-module:export_CastlePopUpHelper");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local3 = function (__s1param0) {
  function RewardHubDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubDialogItem, __s1param0);
  RewardHubDialogItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this.itemMc.actLikeButton = true;
    this.itemMc.mc_down.mouseEnabled = false;
    this.itemMc.mc_hover.mouseEnabled = false;
    this.itemMc.mc_item1.mc_rank.toolTipText = "rank";
    this.itemMc.mc_item1.mc_allianceRank.toolTipText = "rank";
    this.itemMc.mc_item1.mc_globalRank.toolTipText = "rank";
    this.itemMc.mc_item0.mc_rank.toolTipText = "rank";
    this.itemMc.mc_item0.mc_allianceRank.toolTipText = "rank";
    this.itemMc.mc_item0.mc_globalRank.toolTipText = "rank";
  };
  RewardHubDialogItem.prototype.fill = function () {
    this.setDownState(false);
    this.setMouseOverState(false);
    if (this.mainEventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_HUD_name"));
    } else if (this.isAREBossDefeatReward) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_reward_hub_are_boss_defeated"));
    } else {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("event_title_" + this.mainEventID));
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getSubTitle()));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_event);
    this.itemMc.mc_event.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.mainEventID, new __s0local2(50, 50), false));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_subEvent);
    var __s7local0 = null;
    switch (this.mainEventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        if (this.subEventID > 0) {
          this.itemMc.mc_subEvent.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.subEventID, new __s0local2(20, 20), false));
        } else {
          __s7local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Icon_Promotion"))();
        }
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID_MOBILISATION:
        __s7local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Icon_Alliance"))();
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID:
        if (!this.isAREBossDefeatReward) {
          __s7local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Icon_Alliance"))();
        }
    }
    if (__s7local0) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s7local0, 20, 20);
      this.itemMc.mc_subEvent.addChild(__s7local0);
    }
    this.fillItem1();
    this.fillItem2();
  };
  RewardHubDialogItem.prototype.fillItem1 = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_item0.mc_placeholder);
    if (this.isAREBossDefeatReward) {
      var __s17local0 = new __s0local0();
      var __s17local1 = "Icon_ARE_BossID_" + this.vo.counters[0];
      var __s17local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s17local1, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s17local1));
      __s17local2.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(30, 30);
      __s17local0.addChild(__s17local2);
      this.itemMc.mc_item0.mc_placeholder.addChild(__s17local0);
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_item0.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_boss_defeated_level", [this.vo.counters[1]]));
      this.itemMc.mc_item0.mc_globalRank.visible = false;
      this.itemMc.mc_item0.mc_rank.visible = false;
      this.itemMc.mc_item0.mc_allianceRank.visible = false;
      return;
    }
    this.itemMc.mc_item0.mc_globalRank.visible = this.showRank && this.isGlobalRank;
    this.itemMc.mc_item0.mc_rank.visible = this.showRank && !this.isGlobalRank;
    this.itemMc.mc_item0.mc_allianceRank.visible = false;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_item0.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.rank)).visible = this.showRank;
    if (!this.showPoints) {
      __s17local0 = new __s0local0();
      this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(__s17local0, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_SMALL, new __s0local2(50, 50));
      this._promotionIcon.updateWithNewVO(this.promotionVO);
      this._promotionIcon.setVisibility(!!this.promotionVO);
      this.itemMc.mc_item1.mc_placeholder.addChild(__s17local0);
    }
  };
  RewardHubDialogItem.prototype.fillItem2 = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_item1.mc_placeholder);
    if (this.isAREBossDefeatReward) {
      this.itemMc.mc_item1.visible = false;
    } else {
      var __s21local0;
      this.itemMc.mc_item1.visible = true;
      this.itemMc.mc_item1.mc_rank.visible = false;
      this.itemMc.mc_item1.mc_allianceRank.visible = false;
      this.itemMc.mc_item1.mc_globalRank.visible = false;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_item1.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.points)).visible = this.showPoints;
      if (this.showPoints) {
        var __s21local1 = this.subEventID > 0 ? this.subEventID : this.mainEventID;
        __s21local0 = this.getPointsIcon(__s21local1);
      }
      this.itemMc.mc_item1.mc_placeholder.addChild(__s21local0);
    }
  };
  RewardHubDialogItem.prototype.getPointsIcon = function (__s26param0) {
    var __s26local0 = new __s0local2(30, 30);
    switch (__s26param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        (__s26local2 = new Library.CastleInterfaceElements.Icon_Fame()).toolTipText = "dialog_fame_fame";
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
        (__s26local2 = new Library.CastleInterfaceElements_Icons.Icon_GallantryPoints()).toolTipText = "dialog_berimond_nobilityPoints";
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION:
        (__s26local2 = __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.mainEventID, __s26local0, false)).toolTipText = "tooltip_rankingGlobal_points";
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        (__s26local2 = __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.mainEventID, __s26local0, false)).toolTipText = "dialog_longPointsEvent_seasonalPoints";
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID:
        (__s26local2 = __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.mainEventID, __s26local0, false)).toolTipText = "dialog_highscore_totalPoints";
    }
    if (__s26local2) {
      __s26local2.mouseChildren = false;
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s26local2, __s26local0.x, __s26local0.y);
      return __s26local2;
    }
    var __s26local1;
    var __s26local2 = new __s0local0();
    var __s26local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, __s26local0);
    __s26local3.tooltip.useAmount = false;
    switch (__s26param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        __s26local1 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET);
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
        __s26local1 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN);
    }
    if (__s26local1) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(__s26local2), __s26local1, __s26local3);
      return __s26local2;
    } else {
      return __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(__s26param0, __s26local0, false);
    }
  };
  Object.defineProperty(RewardHubDialogItem.prototype, "showPoints", {
    get: function () {
      return this.showRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "showRank", {
    get: function () {
      return !this.promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubDialogItem.prototype.getSubTitle = function () {
    if (this.isAREBossDefeatReward) {
      return "dialog_reward_hub_are_reward_type";
    } else if (this.showPoints) {
      return "dialog_rewardHub_eventEndReward";
    } else {
      return "dialog_rewardHub_promotionReward";
    }
  };
  RewardHubDialogItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.itemMc.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  RewardHubDialogItem.prototype.removeEventListener = function () {
    this.itemMc.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  RewardHubDialogItem.prototype.onMouseDown = function (__s46param0) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  RewardHubDialogItem.prototype.onMouseUp = function (__s48param0) {
    this.setDownState(false);
    this.setMouseOverState(true);
  };
  RewardHubDialogItem.prototype.onRollOver = function (__s50param0) {
    __s1param0.prototype.onRollOver.call(this, __s50param0);
    this.setMouseOverState(true);
    this.setDownState(false);
  };
  RewardHubDialogItem.prototype.onRollOut = function (__s52param0) {
    __s1param0.prototype.onRollOut.call(this, __s52param0);
    this.setMouseOverState(false);
    this.setDownState(false);
  };
  RewardHubDialogItem.prototype.setDownState = function (__s54param0) {
    this.itemMc.mc_down.visible = __s54param0;
  };
  RewardHubDialogItem.prototype.setMouseOverState = function (__s56param0) {
    this.itemMc.mc_hover.visible = __s56param0;
  };
  Object.defineProperty(RewardHubDialogItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  RewardHubDialogItem.prototype.onClick = function (__s60param0) {
    __s1param0.prototype.onClick.call(this, __s60param0);
    __dep_export_CastlePopUpHelper.CastlePopUpHelper.displayPopUp(this.vo.popUpId, this.vo.popUpData);
  };
  Object.defineProperty(RewardHubDialogItem.prototype, "promotionVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(this.promotionID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "promotionID", {
    get: function () {
      return this.vo.promotionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "mainEventID", {
    get: function () {
      return this.vo.mainEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "subEventID", {
    get: function () {
      return this.vo.subEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "isAREBossDefeatReward", {
    get: function () {
      return this.mainEventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID && this.vo.popUpData[__dep_exact_26a421b704832cff.CommKeys.PORTAL_BOSS_ID] != undefined;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "rank", {
    get: function () {
      if (this.vo.counters[0]) {
        return this.vo.counters[0];
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "isGlobalRank", {
    get: function () {
      return this.vo.isGlobalRanking;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "points", {
    get: function () {
      if (this.vo.counters[1]) {
        return this.vo.counters[1];
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.RewardHubDialogItem = __s0local3;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
