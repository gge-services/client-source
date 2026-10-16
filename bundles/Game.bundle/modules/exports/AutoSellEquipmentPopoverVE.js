Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_AAutoSellPopoverVE = require("gge-module:export_AAutoSellPopoverVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AutoSellEquipmentPopoverVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellEquipmentPopoverVE, __s1param0);
  AutoSellEquipmentPopoverVE.prototype.fillContent = function (__s5param0) {
    __s1param0.prototype.fillContent.call(this, __s5param0);
    var __s5local0 = new __dep_export_CollectableItemEquipmentRarenessVO.CollectableItemEquipmentRarenessVO();
    __s5local0.parseServerObject(this.popoverVO.data.E);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5param0).addIconMc(__s5param0.mc_itemIcon), __s5local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(40, 40)));
  };
  return AutoSellEquipmentPopoverVE;
}(__dep_export_AAutoSellPopoverVE.AAutoSellPopoverVE);
exports.AutoSellEquipmentPopoverVE = __s0local1;
var __dep_export_CollectableItemEquipmentRarenessVO = require("gge-module:export_CollectableItemEquipmentRarenessVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
