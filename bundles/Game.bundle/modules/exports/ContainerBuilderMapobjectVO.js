Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function ContainerBuilderMapobjectVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.underConstruction = false;
    __s3local0.bgAssetName = "";
    __s3local0._graphicClassName = "";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ContainerBuilderMapobjectVO, __s1param0);
  ContainerBuilderMapobjectVO.prototype.getBackgroundClip = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s5local1 = ContainerBuilderMapobjectVO.BACKGROUND_MAPOBJECT + __s5local0;
    return this.getAsExternalClip(__s5local1);
  };
  ContainerBuilderMapobjectVO.prototype.getCastleFlagClip = function (__s7param0) {
    return this.getFlagClip(__s7param0, ContainerBuilderMapobjectVO.VO_NAME_CASTLE);
  };
  ContainerBuilderMapobjectVO.prototype.getFlagClip = function (__s9param0, __s9param1) {
    var __s9local0;
    var __s9local1;
    if (__s9param0.hasVIPFlag) {
      __s9local1 = __s9local0 = __s9param1 + ContainerBuilderMapobjectVO.FLAG_VIP;
    } else if (__s9param0.hasPremiumFlag) {
      __s9local0 = __s9param1 + ContainerBuilderMapobjectVO.FLAG_PREMIUM;
      __s9local1 = ContainerBuilderMapobjectVO.FILE_NAME_FLAGS_PREMIUM;
    } else {
      __s9local1 = __s9local0 = __s9param1 + ContainerBuilderMapobjectVO.FLAG_DEFAULT;
    }
    return this.getAsExternalClip(__s9local0, this.assetFileURL(__s9local1), this.getClipColor(__s9param0));
  };
  Object.defineProperty(ContainerBuilderMapobjectVO.prototype, "graphicClassName", {
    get: function () {
      return this._graphicClassName;
    },
    enumerable: true,
    configurable: true
  });
  ContainerBuilderMapobjectVO.prototype.getAsExternalClip = function (__s16param0, __s16param1 = null, __s16param2 = null) {
    __s16param1 ||= this.assetFileURL(__s16param0);
    try {
      this.underConstruction = false;
      return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s16param0, __s16param1, __s16param2, 0, false, null, false, 1, false, false, false);
    } catch (__s19local0) {
      this.underConstruction = true;
      return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("UnderConstruction_Mapobject", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("UnderConstruction_Mapobject"), null, 0, false);
    }
  };
  ContainerBuilderMapobjectVO.prototype.assetFileURL = function (__s21param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s21param0);
  };
  ContainerBuilderMapobjectVO.prototype.getClipColor = function (__s23param0) {
    var __s23local0 = [];
    __s23local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor(ContainerBuilderMapobjectVO.LAYER_NAME_FLAG, __s23param0.crest.colorsFour));
    return __s23local0;
  };
  ContainerBuilderMapobjectVO.prototype.getFactionTag = function (__s25param0) {
    switch (__s25param0) {
      case __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION:
        return "Blue";
      case __dep_exact_26a421b704832cff.FactionConst.RED_FACTION:
        return "Red";
      default:
        return "";
    }
  };
  ContainerBuilderMapobjectVO.FILE_NAME_FLAGS_PREMIUM = "FlagsPremium";
  ContainerBuilderMapobjectVO.BACKGROUND_MAPOBJECT = "MapObjectBackground_";
  ContainerBuilderMapobjectVO.VO_NAME_CASTLE = "Castle";
  ContainerBuilderMapobjectVO.FLAG_VIP = "_Flag_VIP";
  ContainerBuilderMapobjectVO.FLAG_PREMIUM = "_Flag_Premium";
  ContainerBuilderMapobjectVO.FLAG_DEFAULT = "_Flag_Default";
  ContainerBuilderMapobjectVO.LAYER_NAME_FLAG = "flag";
  return ContainerBuilderMapobjectVO;
}(require("gge-module:export_InteractiveMapobjectVO").InteractiveMapobjectVO);
exports.ContainerBuilderMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
