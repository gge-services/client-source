Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollectableRenderComponent = require("gge-module:export_ACollectableRenderComponent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __s0local0 = function (__s1param0) {
  function CollectableRendererLevelIndicatorMC() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererLevelIndicatorMC, __s1param0);
  CollectableRendererLevelIndicatorMC.prototype.reset = function () {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = false;
    }
  };
  CollectableRendererLevelIndicatorMC.prototype.update = function () {
    var __s8local0 = this.clips.collectableLevelIndicatorVO.levelClassName;
    this._levelClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s8local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s8local0));
    this._levelClip.recycleAsset = false;
    if (__s8local0) {
      var __s8local1 = this.clips.itemMc ? this.clips.itemMc : this.clips.iconMc;
      if (__s8local1) {
        __s8local1.addChild(this._levelClip);
      }
      if (this.clips.collectableLevelIndicatorVO.pos) {
        this._levelClip.x = this.clips.collectableLevelIndicatorVO.pos.x;
        this._levelClip.y = this.clips.collectableLevelIndicatorVO.pos.y;
      }
      if (this.clips.collectableLevelIndicatorVO.scale) {
        this._levelClip.scaleX = this.clips.collectableLevelIndicatorVO.scale.x;
        this._levelClip.scaleY = this.clips.collectableLevelIndicatorVO.scale.y;
      }
    }
    if (this._levelClip.isLoaded) {
      this.loadingComplete(this._levelClip);
    } else {
      this._levelClip.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
  };
  CollectableRendererLevelIndicatorMC.prototype.loadingComplete = function (__s16param0) {
    var __s16local0 = this._levelClip.currentshownDisplayObject;
    var __s16local1 = this.clips.collectableLevelIndicatorVO.level;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s16local0.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s16local1));
  };
  CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_BUILDING = "Colleactable_LevelIndicator_Building";
  CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_UNIT = "Colleactable_LevelIndicator_Unit";
  return CollectableRendererLevelIndicatorMC;
}(__dep_export_ACollectableRenderComponent.ACollectableRenderComponent);
exports.CollectableRendererLevelIndicatorMC = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
