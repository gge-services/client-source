Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SMinuteSkipCraftingVO = require("gge-module:export_C2SMinuteSkipCraftingVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ConstructionItemCraftingMinuteSkipProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._recipeVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemCraftingMinuteSkipProperties, __s1param0);
  ConstructionItemCraftingMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s5param0) {
    return new __dep_export_C2SMinuteSkipCraftingVO.C2SMinuteSkipCraftingVO(__s5param0);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new __dep_export_C2SMinuteSkipCraftingVO.C2SMinuteSkipCraftingVO("-", 1);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this._recipeVO && this.getRemainingTime() > 0;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ci_crafting");
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._recipeVO.constructionItem.nameTextId);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getIconFrame = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_BUILDING);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_ci_craft_header";
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.displayPicture = function (__s27param0) {
    return __s27param0.addChild(__dep_export_ConstructionItemRenderer.ConstructionItemRenderer.render(this._recipeVO.constructionItem));
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getTotalTime = function () {
    return __dep_export_CastleModel.CastleModel.constructionItemData.totalCraftingTime;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getRemainingTime = function () {
    return __dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getSkipCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getFastCompleteCostC2(__dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds, 2));
  };
  return ConstructionItemCraftingMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.ConstructionItemCraftingMinuteSkipProperties = __s0local0;
var __dep_export_ConstructionItemRenderer = require("gge-module:export_ConstructionItemRenderer");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMinuteSkipProperties");
