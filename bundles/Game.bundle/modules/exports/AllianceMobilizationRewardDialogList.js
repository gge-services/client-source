Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleGenericRewardsComponent = require("gge-module:export_CastleGenericRewardsComponent");
var __dep_export_AllianceMobilizationRewardDialog = require("gge-module:export_AllianceMobilizationRewardDialog");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function AllianceMobilizationRewardDialogList(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._listItems = [];
    __s3local0._rewardComponents = [];
    __s3local0._eventID = 0;
    __s3local0._layoutStrategy = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.subLayerDisp.mc_scroll).addMouseWheelElements([__s3local0.subLayerDisp]).addSliderBackground(__s3local0.subLayerDisp.mc_scroll.bg);
    var __s3local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local0.subLayerDisp.mc_items.mask.height, true);
    __s3local0._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s3local1, __s3local2, true);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationRewardDialogList, __s1param0);
  AllianceMobilizationRewardDialogList.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    if (__s5param0 && __s5param0.length > 1) {
      this._eventID = __s5param0[1];
    }
    if (this.eventVO) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_items);
      this._rewardComponents.forEach(function (__s9param0) {
        __s9param0.destroy();
      });
      this._rewardComponents = [];
      this._listItems = [];
      switch (__s5param0[0]) {
        case __dep_export_AllianceMobilizationRewardDialog.AllianceMobilizationRewardDialog.TAB_LEVEL:
          this.createByLevel();
          break;
        case __dep_export_AllianceMobilizationRewardDialog.AllianceMobilizationRewardDialog.TAB_RANK:
          this.createByRank();
      }
      this._layoutStrategy.apply(this._listItems, new __s0local1(0, 0, 0, 0));
      var __s5local0 = Math.max(0, this.subLayerDisp.mc_items.height - this.subLayerDisp.mc_items.mask.height);
      this._scrollComponent.init(0, __s5local0, 88, 88);
      this._scrollComponent.show();
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
      this._scrollComponent.scrollToValue(0);
    }
  };
  AllianceMobilizationRewardDialogList.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_items);
    this._rewardComponents.forEach(function (__s14param0) {
      __s14param0.destroy();
    });
    this._rewardComponents = [];
    this._listItems = [];
  };
  AllianceMobilizationRewardDialogList.prototype.createByLevel = function () {
    var __s16local0 = this;
    var __s16local1 = function (__s18param0) {
      __s16local2.createDivisionElement(__s18param0);
      var __s18local0 = false;
      if (__s18param0 > __s16local2.eventVO.leagueID) {
        __s16local2.createWarningElement(__s16local2.eventVO.getEventSpecificTextID("popup_ame_rewards_level_info_text_" + __s18param0));
        __s18local0 = true;
      }
      __s16local2.eventVO.getDivisionLevelRewards(__s18param0).forEach(function (__s21param0, __s21param1) {
        __s16local0.createRewardElement(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("popup_ame_level_row_title", [__s21param1 + 1]), __s21param0, __s18local0);
      });
    };
    var __s16local2 = this;
    for (var __s16local3 = 1; __s16local3 <= this.eventVO.getMaxLeagueID(); __s16local3++) {
      __s16local1(__s16local3);
    }
  };
  AllianceMobilizationRewardDialogList.prototype.createByRank = function () {
    var __s25local0 = this;
    var __s25local1 = function (__s27param0) {
      __s25local2.createDivisionElement(__s27param0);
      var __s27local0 = false;
      if (__s27param0 > __s25local2.eventVO.leagueID) {
        __s25local2.createWarningElement(__s25local2.eventVO.getEventSpecificTextID("popup_ame_rewards_ranking_info_text_" + __s27param0));
        __s27local0 = true;
      }
      __dep_export_CastleModel.CastleModel.leaderboardRewardsData.getRewardListForDialogList(__s25local2.eventVO.eventId, __s25local2.eventVO.leaderBoardRewardSetID, __s27param0).forEach(function (__s30param0, __s30param1, __s30param2) {
        var __s30local0 = __s30param0.rank;
        var __s30local1 = __s30param0.rewards;
        if (__s30local0.length == 1) {
          __s25local0.createRewardElement(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("popup_ame_ranking_row_title", __s30local0), __s30local1, __s27local0, __s30param1 + 1);
        } else {
          __s25local0.createRewardElement(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("popup_ame_ranking_row_title", [__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_DASH_SPLIT, __s30local0)]), __s30local1, __s27local0, __s30param1 + 1);
        }
      });
    };
    var __s25local2 = this;
    for (var __s25local3 = 1; __s25local3 <= this.eventVO.getMaxLeagueID(); __s25local3++) {
      __s25local1(__s25local3);
    }
  };
  AllianceMobilizationRewardDialogList.prototype.createDivisionElement = function (__s36param0) {
    var __s36local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceMobilizationRewardsExt_Division"))();
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s36local0.txt_division, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.eventVO.getEventSpecificTextID("popup_ame_rewards_division_name_" + __s36param0)), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s36local1 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getDivisionIconClip(__s36param0);
    __s36local1.doWhenLoaded(function () {
      var __s38local0 = (1 + __s36param0 * 0.1) * 25;
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(__s36local1, __s38local0, __s38local0);
      __s36local0.mc_divisionIcon.addChild(__s36local1);
    });
    __s36local0.mc_divisionIconLock.visible = this.eventVO.leagueID < __s36param0;
    this._listItems.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s36local0));
    this.subLayerDisp.mc_items.addChild(__s36local0);
  };
  AllianceMobilizationRewardDialogList.prototype.createWarningElement = function (__s40param0, __s40param1 = null) {
    var __s40local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceMobilizationRewardsExt_Warning"))();
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s40local0.txt_warning, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s40param0, __s40param1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this._listItems.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s40local0));
    this.subLayerDisp.mc_items.addChild(__s40local0);
  };
  AllianceMobilizationRewardDialogList.prototype.createRewardElement = function (__s42param0, __s42param1, __s42param2, __s42param3 = -1) {
    var __s42local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceMobilizationRewardsExt_Reward"))();
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s42local0.txt_text, __s42param0, new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
    __s42local0.mc_locked.visible = __s42param2;
    __s42local0.mc_locked.mouseEnabled = false;
    __s42local0.mc_rankIndicator.visible = __s42param3 > 0 && __s42param3 <= 5;
    __s42local0.mc_rankIndicator.gotoAndStop(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s42param3, 0, 5));
    var __s42local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
    var __s42local2 = new __dep_export_CastleGenericRewardsComponent.CastleGenericRewardsComponent(__s42local0.mc_rewards, false, true, __s42local1);
    __s42local2.onShow();
    __s42local2.updateWithNewData(__s42param1);
    this._rewardComponents.push(__s42local2);
    this._listItems.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s42local0));
    this.subLayerDisp.mc_items.addChild(__s42local0);
  };
  AllianceMobilizationRewardDialogList.prototype.onScroll = function () {
    this.subLayerDisp.mc_items.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(AllianceMobilizationRewardDialogList.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceMobilizationRewardDialogList;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AllianceMobilizationRewardDialogList = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "ISublayer");
