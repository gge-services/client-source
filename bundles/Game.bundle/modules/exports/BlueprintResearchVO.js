Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AResearchVO = require("gge-module:export_AResearchVO");
var __s0local0 = function (__s1param0) {
  function BlueprintResearchVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BlueprintResearchVO, __s1param0);
  Object.defineProperty(BlueprintResearchVO.prototype, "effectText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this.descriptionTextId, this.descriptionTextReplacements);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "effectText").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "research_ciBlueprints_copy";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "descriptionTextId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "descriptionTextReplacements", {
    get: function () {
      return [this.highestRecipe.level];
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "descriptionTextReplacements").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "nameTextId", {
    get: function () {
      return this.blueprintVO.nameId;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "nameTextId").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "fullNameText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text(this.nameTextId), __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [this.level])]);
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "fullNameText").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  BlueprintResearchVO.prototype.icon = function () {
    var __s25local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.blueprintVO.assetName, this.blueprintVO.assetURL, null, 0, false);
    __s25local0.doWhenLoaded(this.bindFunction(function (__s27param0) {
      __s27param0.scaleX = __s25local0.scaleY = 1.2;
      __dep_export_ConstructionItemRenderer.ConstructionItemRenderer.renderBlueprint(this.blueprintVO, __s27param0, function (__s29param0) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s25local0);
      });
    }));
    return __s25local0;
  };
  Object.defineProperty(BlueprintResearchVO.prototype, "highestRecipe", {
    get: function () {
      for (var __s31local0, __s31local1 = this.totalEffectiveBonus.rawValues, __s31local2 = __dep_exact_f855840627e6e145.int(__s31local1.length - 1); __s31local2 >= 0 && !(__s31local0 = __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.recipes.get(__s31local1[__s31local2])); __s31local2--) {
        console.warn("Research " + this.researchID + " unlocks recipeID " + __s31local1[__s31local2] + " which does not exist");
      }
      return __s31local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "blueprintVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.blueprints.get(this.highestRecipe.blueprintId);
    },
    enumerable: true,
    configurable: true
  });
  BlueprintResearchVO.prototype.onMouseOverResearchIcon = function (__s37param0) {
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.showBlueprintToolTip(__s37param0, this.blueprintVO);
  };
  BlueprintResearchVO.prototype.onMouseOutResearchIcon = function () {
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
  };
  return BlueprintResearchVO;
}(__dep_export_AResearchVO.AResearchVO);
exports.BlueprintResearchVO = __s0local0;
var __dep_export_ConstructionItemRenderer = require("gge-module:export_ConstructionItemRenderer");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
