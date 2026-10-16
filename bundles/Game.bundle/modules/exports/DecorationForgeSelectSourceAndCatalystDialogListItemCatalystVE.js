Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DecorationForgeCatalystConversionDialogProperties = require("gge-module:export_DecorationForgeCatalystConversionDialogProperties");
var __dep_export_ADecorationForgeSelectionListItemCatalystVE = require("gge-module:export_ADecorationForgeSelectionListItemCatalystVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3param0.btn_add, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE, __s1param0);
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    var __s5local0 = this.getCurrencyVO();
    this.disp.visible = __s5local0 != null;
    if (__s5local0) {
      var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(60, 60));
      __s5local1.tooltip.useAmount = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), __s5local0, __s5local1);
      __dep_export_ClientConstFusion.ClientConstFusion.setCatalystTextfield(this.disp.txt_amount, __s5local0);
      var __s5local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPChanceFromCatalyst(__s5local0.xmlCurrencyVO.tier, __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, this.itemVO.targetDecoItemVO.buildingVO.fusionInfoVO.getCurrentLevel())));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_bonusChance, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage", [__s5local2]));
      this.disp.mc_item.mc_empty.visible = __s5local0.amount <= 0;
    }
  };
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.isSelectable = function () {
    var __s8local0 = this.getCurrencyVO();
    return !!__s8local0 && __s8local0.amount > 0;
  };
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.onMouseUp = function (__s10param0) {
    if (__s10param0.target != this.disp.btn_add) {
      __s1param0.prototype.onMouseUp.call(this, __s10param0);
    }
  };
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      __s1param0.prototype.onClick.call(this, __s13param0);
      switch (__s13param0.target) {
        case this.disp.btn_add:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogs(__dep_export_DecorationForgeCatalystConversionDialog.DecorationForgeCatalystConversionDialog, new __dep_export_DecorationForgeCatalystConversionDialogProperties.DecorationForgeCatalystConversionDialogProperties(this.getCurrencyVO()));
      }
    }
  };
  return DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE;
}(__dep_export_ADecorationForgeSelectionListItemCatalystVE.ADecorationForgeSelectionListItemCatalystVE);
exports.DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DecorationForgeCatalystConversionDialog = require("gge-module:export_DecorationForgeCatalystConversionDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
