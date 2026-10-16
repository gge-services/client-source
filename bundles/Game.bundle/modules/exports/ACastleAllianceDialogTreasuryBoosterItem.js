Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function ACastleAllianceDialogTreasuryBoosterItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3param0.addChild(__s3local0.disp);
    __s3local0._itemClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s3param1, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_CastleAllianceDialog.CastleAllianceDialog.NAME));
    __s3local0.disp.addChild(__s3local0._itemClip);
    __s3local0._buffVO = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleAllianceDialogTreasuryBoosterItem, __s1param0);
  ACastleAllianceDialogTreasuryBoosterItem.prototype.destroy = function () {
    this._itemClip = null;
    __s1param0.prototype.destroy.call(this);
  };
  ACastleAllianceDialogTreasuryBoosterItem.prototype.update = function () {
    this.updateIcon();
  };
  ACastleAllianceDialogTreasuryBoosterItem.prototype.updateIcon = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.buffVO.seriesID, this.allianceInfoVO.getBoostMaxLevel(this.buffVO.seriesID)).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
    if (__s9local0) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.itemMc.mc_icon).addIconMc(this.itemMc.mc_icon), new __dep_export_CollectableItemEffectVO.CollectableItemEffectVO(__s9local0.effect.effectID, false), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local1(60, 60)));
    }
  };
  Object.defineProperty(ACastleAllianceDialogTreasuryBoosterItem.prototype, "itemMc", {
    get: function () {
      return this._itemClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleAllianceDialogTreasuryBoosterItem.prototype, "allianceInfoVO", {
    get: function () {
      __dep_export_AllianceInfoVO.AllianceInfoVO;
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleAllianceDialogTreasuryBoosterItem.prototype, "buffVO", {
    get: function () {
      return this._buffVO;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAllianceDialogTreasuryBoosterItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ACastleAllianceDialogTreasuryBoosterItem = __s0local2;
var __dep_export_CollectableItemEffectVO = require("gge-module:export_CollectableItemEffectVO");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_AllianceInfoVO = require("gge-module:export_AllianceInfoVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
