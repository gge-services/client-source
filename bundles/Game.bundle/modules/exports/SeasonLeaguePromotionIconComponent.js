Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeaguePromotionIconComponent(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._dispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    __s3local0._iconType = SeasonLeaguePromotionIconComponent.TYPE_NORMAL;
    __s3local0._iconSize = new __s0local0();
    __s3local0._vo = null;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._parentDisp = __s3param0;
    __s3local0._iconType = __s3param1;
    __s3local0._iconSize = __s3param2;
    __s3local0._dispCreator.cacheDisp = false;
    __s3local0._dispCreator.init(__s3param0);
    __s3local0._dispCreator.onLoadedSignal.add(__s3local0.bindFunction(__s3local0.onLoaded));
    __s3local0._dispCreator.switchCreationState(true);
    __s3local0._dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s3local0.getAssetClipName(), __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(SeasonLeaguePromotionIconComponent.ASSET_FILE_NAME)));
    __s3local0._dispCreator.switchCreationState(false);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePromotionIconComponent, __s1param0);
  SeasonLeaguePromotionIconComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._dispCreator.destroy();
  };
  SeasonLeaguePromotionIconComponent.prototype.updateWithNewVO = function (__s7param0) {
    this._vo = __s7param0;
    this.update();
  };
  SeasonLeaguePromotionIconComponent.prototype.update = function () {
    var __s9local0 = this.getItemMc();
    if (__s9local0 && (__s9local0.visible = this.vo !== null, this.vo)) {
      __s9local0.x = 0;
      __s9local0.y = 0;
      __s9local0.mc_major.gotoAndStop(this.vo.majorRank);
      var __s9local1 = this.vo.minorRank > 0;
      __s9local0.mc_minor.visible = __s9local1;
      if (__s9local1) {
        __s9local0.mc_minor.gotoAndStop(this.vo.minorRank);
      }
      this._parentDisp.mouseChildren = false;
      this._parentDisp.toolTipText = this.vo.getNameTextId();
      this._dispCreator.updateCache();
    }
  };
  SeasonLeaguePromotionIconComponent.prototype.setVisibility = function (__s13param0) {
    var __s13local0 = this.getItemMc();
    if (__s13local0) {
      __s13local0.visible = __s13param0;
    }
  };
  SeasonLeaguePromotionIconComponent.prototype.getItemMc = function () {
    return this._dispCreator.getClipMc(0);
  };
  SeasonLeaguePromotionIconComponent.prototype.getAssetClipName = function () {
    switch (this.iconType) {
      case SeasonLeaguePromotionIconComponent.TYPE_BIG:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_BIG;
      case SeasonLeaguePromotionIconComponent.TYPE_NORMAL:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_NORMAL;
      case SeasonLeaguePromotionIconComponent.TYPE_SMALL:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_SMALL;
      default:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_NORMAL;
    }
  };
  SeasonLeaguePromotionIconComponent.prototype.onLoaded = function () {
    this._dispCreator.onLoadedSignal.remove(this.bindFunction(this.onLoaded));
    var __s21local0 = this.getItemMc();
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s21local0);
    var __s21local1 = __dep_export_ClientConstUtils.ClientConstUtils.getScaleFactorForFitInBounds(new __s0local0(__s21local0.width, __s21local0.height), this._iconSize);
    __s21local0.scaleX = __s21local0.scaleY = __s21local1;
    this.update();
  };
  Object.defineProperty(SeasonLeaguePromotionIconComponent.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionIconComponent.prototype, "iconSize", {
    get: function () {
      return this._iconSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionIconComponent.prototype, "iconType", {
    get: function () {
      return this._iconType;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeaguePromotionIconComponent.TYPE_BIG = "typeBig";
  SeasonLeaguePromotionIconComponent.TYPE_NORMAL = "typeNormal";
  SeasonLeaguePromotionIconComponent.TYPE_SMALL = "typeSmall";
  SeasonLeaguePromotionIconComponent.ASSET_FILE_NAME = "SeasonLeaguePromotionIcons";
  SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_SMALL = "SeasonLeaguePromotionIcon_Small";
  SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_NORMAL = "SeasonLeaguePromotionIcon_Normal";
  SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_BIG = "SeasonLeaguePromotionIcon_Big";
  return SeasonLeaguePromotionIconComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.SeasonLeaguePromotionIconComponent = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
