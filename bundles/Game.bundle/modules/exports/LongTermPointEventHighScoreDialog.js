Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleGenericHighscoreDialog = require("gge-module:export_CastleGenericHighscoreDialog");
var __dep_export_CastlePointEventHighscoreItemVO = require("gge-module:export_CastlePointEventHighscoreItemVO");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventHighScoreDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, LongTermPointEventHighScoreDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventHighScoreDialog, __s1param0);
  LongTermPointEventHighScoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.leagueRangeGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.ownPointsGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_nobilityPoints, new __dep_exact_92d05af59ee2ff30_1.NumberVO(0));
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_longPointsEvent_seasonalPoints";
  };
  LongTermPointEventHighScoreDialog.prototype.loadingComplete = function (__s7param0) {
    this.dialogDisp.backgroundMC.addChild(__s7param0.currentshownDisplayObject);
  };
  LongTermPointEventHighScoreDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    var __s9local0 = LongTermPointEventHighScoreDialog.SKIN_ASSET_PREFIX + LongTermPointEventHighScoreDialog.eventVO.skin.assetName + LongTermPointEventHighScoreDialog.SKIN_ASSET_SUFFIX;
    var __s9local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s9local0), null, 0, true);
    if (__s9local1.isLoaded) {
      this.loadingComplete(__s9local1);
    } else {
      __s9local1.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
    if (!LongTermPointEventHighScoreDialog.eventVO) {
      this.hide();
    }
  };
  Object.defineProperty(LongTermPointEventHighScoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore_longPointsEvent";
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericHighscoreDialog.CastleGenericHighscoreDialog.prototype, "helpTextId").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventHighScoreDialog.prototype.onGetHighscoreData = function (__s18param0) {
    var __s18local0 = __dep_exact_f855840627e6e145.int(LongTermPointEventHighScoreDialog.eventVO.leagueLevels(__s18param0.leagueId)[0]);
    var __s18local1 = __dep_exact_f855840627e6e145.int(LongTermPointEventHighScoreDialog.eventVO.leagueLevels(__s18param0.leagueId)[1]);
    if (__s18local1 > __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s18local0 != __s18local1 ? "dialog_ranking_legendFilter" : "legendaryLevel_placeholder", [Math.max(__s18local0 - __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP, 1), __s18local1 - __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelrange_placeholder", [__s18local0, __s18local1])).autoFitToBounds = true;
    }
    this.isWaitingForServerMessage = false;
    this._currentLeagueId = __s18param0.leagueId;
    this.initItemRenderers();
    var __s18local2 = __s18param0.params[0].L;
    var __s18local3 = 0;
    for (var __s18local4 = 0; __s18local4 < __dep_export_CastleGenericHighscoreDialog.CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s18local4) {
      var __s18local5 = this._itemRenderers[__s18local4];
      var __s18local6 = null;
      if (__s18local4 < __s18local2.length) {
        var __s18local7 = __s18local2[__s18local4];
        __s18local6 = new __dep_export_CastlePointEventHighscoreItemVO.CastlePointEventHighscoreItemVO();
        var __s18local8 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
        __s18local8.fillFromParamObject(__s18local7[1]);
        __s18local6.ownerInfo = __s18local8;
        __s18local3 = __dep_exact_f855840627e6e145.int(__s18local6.rank = __dep_exact_f855840627e6e145.int(__s18local7[0]));
        __s18local6.amount = __dep_exact_f855840627e6e145.int(__s18local7[1]);
      }
      __s18local5.itemVO = __s18local6;
      __s18local5.updateItem(this._currentSearchName);
    }
    this.updateScrollButtons(__s18local3, __s18param0.params[0].LR);
    this._currentSearchName = "";
    this.ownPointsGGSTF.textContentVO.numberValue = LongTermPointEventHighScoreDialog.eventVO.ownPoints;
  };
  LongTermPointEventHighScoreDialog.prototype.onRemoveSpecialEvent = function (__s25param0) {
    if (__s25param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    }
  };
  Object.defineProperty(LongTermPointEventHighScoreDialog, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventHighScoreDialog.__initialize_static_members = function () {
    LongTermPointEventHighScoreDialog.NAME = "LongTermPeHighScoreDialog_D";
    LongTermPointEventHighScoreDialog.SKIN_ASSET_PREFIX = "LongTermPeHighScoreDialog";
    LongTermPointEventHighScoreDialog.SKIN_ASSET_SUFFIX = "Skin";
  };
  return LongTermPointEventHighScoreDialog;
}(__dep_export_CastleGenericHighscoreDialog.CastleGenericHighscoreDialog);
exports.LongTermPointEventHighScoreDialog = __s0local0;
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
