Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __s0local0 = function (__s1param0) {
  function CastleRefineryToolsmithRecipeScrollItemVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.currentRecipeIndex = 0;
    __s3local0.recipes = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRefineryToolsmithRecipeScrollItemVO, __s1param0);
  CastleRefineryToolsmithRecipeScrollItemVO.prototype.changeCurrentRecipe = function (__s5param0) {
    this.currentRecipeIndex = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentRecipeIndex + __s5param0, 0, this.recipes.length - 1);
  };
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItemVO.prototype, "currentRecipeVO", {
    get: function () {
      return this.recipes[this.currentRecipeIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItemVO.prototype, "allRecipesLocked", {
    get: function () {
      return this.recipes.every(function (__s11param0) {
        return !__s11param0.learned;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItemVO.prototype, "groupLocked", {
    get: function () {
      var __s13local0 = this.currentRecipeVO;
      var __s13local1 = __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__s13local0.queueID) ? [__dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__s13local0.queueID).craftingEffects] : null;
      return !__dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEffectValueForType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE_GROUPS, null, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(), __s13local1).hasID(__s13local0.recipeGroupID);
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithRecipeScrollItemVO;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItemVO);
exports.CastleRefineryToolsmithRecipeScrollItemVO = __s0local0;
