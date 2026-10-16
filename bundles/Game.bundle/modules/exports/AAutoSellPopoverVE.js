Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_APopoverVE = require("gge-module:export_APopoverVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AAutoSellPopoverVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAutoSellPopoverVE, __s1param0);
  AAutoSellPopoverVE.prototype.fillContent = function (__s5param0) {
    this.destroyCollectableRenderList();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_autoSell_title"));
    var __s5local0 = new __dep_export_CollectableItemC1VO.CollectableItemC1VO(this.popoverVO.data.C1);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5param0).addIconMc(__s5param0.mc_sellIcon), __s5local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(30, 30)));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5param0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_nominal_add", [__s5local0.amount]));
  };
  AAutoSellPopoverVE.prototype.getPopoverConfig = function () {
    var __s7local0 = new __dep_export_SimplePopoverConfig.SimplePopoverConfig("AutoSellPopover");
    __s7local0.useClickArea = false;
    __s7local0.waitDuration = 3;
    __s7local0.fadeOutDuration = 0.5;
    return __s7local0;
  };
  return AAutoSellPopoverVE;
}(__dep_export_APopoverVE.APopoverVE);
exports.AAutoSellPopoverVE = __s0local1;
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
