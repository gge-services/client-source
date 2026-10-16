Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ACollectableItemVE = require("gge-module:export_ACollectableItemVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CollectableItemEffectVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEffectVE, __s1param0);
  CollectableItemEffectVE.prototype.iconCreate = function () {
    this.scaleManually = true;
    var __s5local0 = CollectableItemEffectVE.ASSET_NAME_PREFIX + this.effectVO.effectId;
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local0)) {
      this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s5local0), null, 0, false));
    }
    if (this.effectVO.isTemporary) {
      this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CollectableItemEffectVE.TEMP_ASSET_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(CollectableItemEffectVE.TEMP_ASSET_NAME), null, 0, false));
    }
  };
  CollectableItemEffectVE.prototype.onAllDispClipsLoaded = function (__s9param0 = null) {
    var __s9local0 = this.options.icon.dimension;
    for (var __s9local1 = 0, __s9local2 = this.dispCreator.clipList; __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 !== undefined) {
        __s9local3.scaleX = __s9local3.scaleY = __dep_export_ClientConstUtils.ClientConstUtils.getScaleFactorForFitInBounds(new __s0local0(__s9local3.width, __s9local3.height), __s9local0);
      }
    }
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s9param0);
  };
  Object.defineProperty(CollectableItemEffectVE.prototype, "effectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEffectVE.__initialize_static_members = function () {
    CollectableItemEffectVE.TEMP_ASSET_NAME = CollectableItemEffectVE.ASSET_NAME_PREFIX + "Temp";
  };
  CollectableItemEffectVE.ASSET_NAME_PREFIX = "Effect_Icon_";
  return CollectableItemEffectVE;
}(__dep_export_ACollectableItemVE.ACollectableItemVE);
exports.CollectableItemEffectVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
