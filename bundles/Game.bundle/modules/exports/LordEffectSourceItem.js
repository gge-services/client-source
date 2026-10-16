Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function LordEffectSourceItem(__s3param0) {
    var __s3local0 = this;
    this._bonusVO = __s3param0;
    this._disp = new __s0local0();
    var __s3local1 = this._bonusVO.effectSources.length > 1;
    __s3param0.effectSources.sort(function (__s5param0, __s5param1) {
      return __s5param0.order - __s5param1.order;
    }).forEach(function (__s7param0, __s7param1) {
      var __s7local0 = __s3local0.createSourceMC(__s7param0, __s3local1);
      __s3local0._disp.addChild(__s7local0);
      __s7local0.x = __s3local0.getLayout(__s3param0.effectSources.length)[__s7param1][0];
      __s7local0.y = __s3local0.getLayout(__s3param0.effectSources.length)[__s7param1][1];
    });
  }
  LordEffectSourceItem.prototype.createSourceMC = function (__s9param0, __s9param1) {
    var __s9local0 = LordEffectSourceItem.ASSET_CLIP_PREFIX + __s9param0.name + (__s9param1 ? LordEffectSourceItem.ASSET_CLIP_SMALL_SUFFIX : "");
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(LordEffectSourceItem.ASSET_NAME), null, 24, false);
  };
  LordEffectSourceItem.prototype.getLayout = function (__s11param0) {
    switch (__s11param0) {
      case 1:
        return LordEffectSourceItem.LAYOUT[0];
      case 2:
        return LordEffectSourceItem.LAYOUT[1];
      default:
        return LordEffectSourceItem.LAYOUT[2];
    }
  };
  Object.defineProperty(LordEffectSourceItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectSourceItem.ASSET_NAME = "Effect_Source_Icons";
  LordEffectSourceItem.ASSET_CLIP_PREFIX = "Effect_Source_";
  LordEffectSourceItem.ASSET_CLIP_SMALL_SUFFIX = "_Small";
  LordEffectSourceItem.LAYOUT = [[[0, 0]], [[-5, 0], [5, 0]], [[-5, -5], [5, -5], [-5, 5], [5, 5]]];
  return LordEffectSourceItem;
}();
exports.LordEffectSourceItem = __s0local1;
