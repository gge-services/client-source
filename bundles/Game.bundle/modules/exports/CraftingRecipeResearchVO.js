Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_ResearchVO = require("gge-module:export_ResearchVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CraftingRecipeResearchVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingRecipeResearchVO, __s1param0);
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "research_recipe_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "descriptionTextReplacements", {
    get: function () {
      return [this.unlockedRecipe.level];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "nameTextId", {
    get: function () {
      return "research_recipe_" + this.unlockedRecipe.type + "_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "fullNameText", {
    get: function () {
      var __s11local0 = this.unlockedRecipe;
      var __s11local1 = __dep_exact_92d05af59ee2ff30.Localize.text(this.nameTextId, [__dep_exact_92d05af59ee2ff30.Localize.text(__s11local0.output.list[0].getNameTextId(), __s11local0.output.list[0].getNameTextParams())]);
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__s11local1, __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [this.level])]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "unlockedRecipe", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.getRecipeByID(this.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE).rawValues[0]);
    },
    enumerable: true,
    configurable: true
  });
  CraftingRecipeResearchVO.prototype.icon = function () {
    var __s15local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CraftingRecipeResearchVO.ICON_RESEARCH_RECIPE, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CraftingRecipeResearchVO.ICON_RESEARCH_RECIPE), null, 0, false);
    __s15local0.doWhenLoaded(this.bindFunction(this.renderRecipeIcon));
    return __s15local0;
  };
  CraftingRecipeResearchVO.prototype.renderRecipeIcon = function (__s17param0) {
    var __s17local0 = this.unlockedRecipe;
    if (__s17local0) {
      __s17param0.gotoAndStop(__s17local0.getRecipeIconFrame());
      var __s17local1 = __s17local0.output.list[0];
      var __s17local2 = __s17param0.currentshownDisplayObject.iconHolder;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s17local2).addIconMc(__s17local2), __s17local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(40, 40)));
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s17param0);
    }
  };
  CraftingRecipeResearchVO.ICON_RESEARCH_RECIPE = "Icon_Research_Recipe";
  return CraftingRecipeResearchVO;
}(__dep_export_ResearchVO.ResearchVO);
exports.CraftingRecipeResearchVO = __s0local1;
