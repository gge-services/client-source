Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function DifficultyScalingHelper() {}
  DifficultyScalingHelper.addDifficultyIcon = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s5param0);
    var __s5local0 = "EventDifficulty_" + __s5param1.name;
    var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, DifficultyScalingHelper.assetFileURL(__s5local0), null, 0, false);
    __s5local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(__s5param2, __s5param3);
    __s5local1.recycleAsset = false;
    __s5param0.addChild(__s5local1);
    if (__s5param4) {
      __s5param4.mouseChildren = false;
      __s5param4.toolTipText = __s5param1.name_textID;
    }
  };
  DifficultyScalingHelper.addTeaserImage = function (__s8param0, __s8param1) {
    var __s8local0;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s8param0);
    switch (__s8param1 % 100) {
      case 1:
      case 2:
        __s8local0 = 1;
        break;
      case 3:
      case 4:
        __s8local0 = 2;
        break;
      case 5:
      case 6:
        __s8local0 = 3;
        break;
      case 7:
      case 8:
        __s8local0 = 4;
        break;
      case 9:
      case 10:
        __s8local0 = 5;
        break;
      case 11:
        __s8local0 = 6;
    }
    var __s8local1 = "EventDifficultyTeaser_" + __s8local0;
    var __s8local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s8local1, DifficultyScalingHelper.assetFileURL(__s8local1), null, 0, false);
    __s8param0.addChild(__s8local2);
  };
  DifficultyScalingHelper.assetFileURL = function (__s11param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s11param0);
  };
  DifficultyScalingHelper.getSinglePlayerScoreEvent = function (__s13param0) {
    var __s13local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s13param0);
    if (!__s13local0) {
      return null;
    }
    switch (__s13param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return __s13local0.singleEventVO;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION:
        return __s13local0.scoreBarVO;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return __s13local0.scoreBarVO;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
        return __s13local0.singleEventVO(true);
      default:
        return __s13local0;
    }
  };
  DifficultyScalingHelper.getAllianceScoreEvent = function (__s17param0) {
    var __s17local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s17param0);
    if (!__s17local0) {
      return null;
    }
    switch (__s17param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return __s17local0.allianceEventVO;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION:
        return __s17local0.allianceBarVO;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return __s17local0.allianceBarVO;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
        return __s17local0.allianceEventVO;
      default:
        return __s17local0;
    }
  };
  return DifficultyScalingHelper;
}();
exports.DifficultyScalingHelper = __s0local0;
