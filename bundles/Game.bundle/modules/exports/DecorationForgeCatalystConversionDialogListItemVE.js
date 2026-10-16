Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_ADecorationForgeSelectionListItemCatalystVE = require("gge-module:export_ADecorationForgeSelectionListItemCatalystVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeCatalystConversionDialogListItemVE(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeCatalystConversionDialogListItemVE, __s1param0);
  DecorationForgeCatalystConversionDialogListItemVE.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    var __s5local0 = this.getCurrencyVO();
    this.disp.visible = this._itemVO != null;
    if (this._itemVO) {
      var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(60, 60));
      __s5local1.tooltip.useAmount = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), __s5local0, __s5local1);
      var __s5local2 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCatalystInfo(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s5local0.id);
      this.disp.mc_item.mc_disassemble.visible = !__s5local2.deprecated && __s5local2.addDecoDust > 0;
      this.disp.mc_item.mc_assemble.visible = !__s5local2.deprecated && __s5local2.costDecoDust > 0;
      __dep_export_ClientConstFusion.ClientConstFusion.setCatalystTextfield(this.disp.txt_amount, __s5local0);
      this.disp.mc_empty.visible = false;
    }
  };
  return DecorationForgeCatalystConversionDialogListItemVE;
}(__dep_export_ADecorationForgeSelectionListItemCatalystVE.ADecorationForgeSelectionListItemCatalystVE);
exports.DecorationForgeCatalystConversionDialogListItemVE = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
