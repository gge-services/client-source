Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleResearchRecipeInfoDialog() {
    return __s1param0.call(this, CastleResearchRecipeInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResearchRecipeInfoDialog, __s1param0);
  CastleResearchRecipeInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleResearchRecipeInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.setRecipe(this.dialogProperties.recipeVO);
  };
  CastleResearchRecipeInfoDialog.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_left:
          this.changeLevel(-1);
          break;
        case this.dialogDisp.btn_right:
          this.changeLevel(1);
      }
    }
  };
  CastleResearchRecipeInfoDialog.prototype.changeLevel = function (__s13param0) {
    var __s13local0 = this.currentRecipe;
    var __s13local1 = this.currentRecipe;
    for (var __s13local2 = 0; __s13local2 < this.recipes.length; __s13local2++) {
      if (this.currentRecipe.level + __s13param0 == this.recipes[__s13local2].level) {
        this.setRecipe(this.recipes[__s13local2]);
        return;
      }
      if (this.recipes[__s13local2].level < __s13local0.level) {
        __s13local0 = this.recipes[__s13local2];
      }
      if (this.recipes[__s13local2].level > __s13local1.level) {
        __s13local1 = this.recipes[__s13local2];
      }
    }
    if (__s13param0 < 0) {
      this.setRecipe(__s13local1);
    } else {
      this.setRecipe(__s13local0);
    }
  };
  CastleResearchRecipeInfoDialog.prototype.setRecipe = function (__s22param0) {
    this.currentRecipe = __s22param0;
    __dep_export_CostHelper.CostHelper.initAsCosts(this.currentRecipe.input, this.dialogDisp, false, true, new __dep_export_CollectableRendererList.CollectableRendererList());
    var __s22local0 = this.dialogDisp.mc_duration;
    __s22local0.mouseChildren = false;
    __s22local0.toolTipText = "dialog_ci_craft_ciTime_tooltip";
    this.textFieldManager.registerTextField(__s22local0.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRecipe.craftingDuration)));
    var __s22local1 = this.currentRecipe.output.list[0];
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_icon).addItemMc(this.dialogDisp.mc_icon.mc_icon).addTextfield(this.dialogDisp.mc_icon.txt_amount), __s22local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(130, 130)));
    var __s22local2 = __dep_exact_92d05af59ee2ff30.Localize.text(this.currentRecipe.output.list[0].getNameTextId(), this.currentRecipe.output.list[0].getNameTextParams());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_researchTower_craftingManual_header", [__s22local2])));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("building_level_fromTo", [this.currentRecipe.level, this.recipes.length]));
    this.dialogDisp.icon_recipe.gotoAndStop(this.currentRecipe.getRecipeIconFrame());
  };
  Object.defineProperty(CastleResearchRecipeInfoDialog.prototype, "recipes", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.getRecipeClustersByQueue(this.dialogProperties.recipeVO.queueID).get(this.dialogProperties.recipeVO.recipeGroupID).get(this.dialogProperties.recipeVO.type);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchRecipeInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchRecipeInfoDialog.NAME = "CastleResearchRecipeInfo";
  return CastleResearchRecipeInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResearchRecipeInfoDialog = __s0local1;
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
