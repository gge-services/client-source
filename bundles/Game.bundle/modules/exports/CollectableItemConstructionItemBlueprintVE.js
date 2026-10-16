Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ConstructionItemRenderer = require("gge-module:export_ConstructionItemRenderer");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemConstructionItemBlueprintVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemConstructionItemBlueprintVE, __s1param0);
  CollectableItemConstructionItemBlueprintVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemConstructionItemBlueprintVE.prototype.iconCreate = function () {
    this.dispCreator.cacheDisp = false;
    this._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.itemBlueprintVO.blueprintVO.assetName, this.itemBlueprintVO.blueprintVO.assetURL, null, 0, false);
    this.dispCreator.addClip(castAs(this._clip, "IGoodgameClip"));
    this._clip.doWhenLoaded(this.bindFunction(this.onMainClipLoaded));
  };
  CollectableItemConstructionItemBlueprintVE.prototype.iconDestroy = function () {
    this._clip = null;
    __s1param0.prototype.iconDestroy.call(this);
  };
  CollectableItemConstructionItemBlueprintVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemBlueprintVO.blueprintVO) {
      __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.showBlueprintToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemBlueprintVO.blueprintVO);
    }
  };
  CollectableItemConstructionItemBlueprintVE.prototype.onMainClipLoaded = function (__s14param0 = null) {
    var __s14local0 = this._clip.currentshownDisplayObject;
    __s14local0.glow.visible = false;
    __s14local0.banner.visible = false;
    var __s14local1 = this.itemBlueprintVO.blueprintVO.recipes;
    if (__dep_export_ConstructionItemsHelper.ConstructionItemsHelper.isRecipeUnlocked(__s14local1[0])) {
      var __s14local2 = __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.newBlueprints;
      if (__s14local1 != null) {
        for (var __s14local3 = 0, __s14local4 = __s14local1; __s14local3 < __s14local4.length; __s14local3++) {
          var __s14local5 = __s14local4[__s14local3];
          if (__s14local5 !== undefined && __s14local2.indexOf(__s14local5.id) > -1) {
            __s14local0.banner.visible = true;
            break;
          }
        }
      }
    } else {
      this.dispCreator.dispContainer.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    }
    __dep_export_ConstructionItemRenderer.ConstructionItemRenderer.renderBlueprint(this.itemBlueprintVO.blueprintVO, this._clip, this.bindFunction(this.onAllDispClipsLoaded));
  };
  Object.defineProperty(CollectableItemConstructionItemBlueprintVE.prototype, "itemBlueprintVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemConstructionItemBlueprintVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemConstructionItemBlueprintVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
