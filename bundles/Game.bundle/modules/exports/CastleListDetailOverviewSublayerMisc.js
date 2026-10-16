Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewSublayerMisc(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itemList.scrollItemClass = __dep_export_CastleListDetailOverviewItemMisc.CastleListDetailOverviewItemMisc;
    __s3local0.subLayerDisp.icon_publicOrder.toolTipText = "publicOrder";
    __s3local0.subLayerDisp.icon_protection.toolTipText = "protection";
    __s3local0.subLayerDisp.icon_guards.toolTipText = "guards";
    __s3local0.subLayerDisp.icon_population.toolTipText = "population";
    __s3local0.subLayerDisp.icon_marketCarriges.toolTipText = "marketCarriges";
    __s3local0.subLayerDisp.icon_aquamarin.toolTipText = "aquamarin_name";
    __s3local0.subLayerDisp.icon_aquamarin_points.toolTipText = "aquamarin_points_alliance_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewSublayerMisc, __s1param0);
  CastleListDetailOverviewSublayerMisc.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    var __s5local0 = __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID);
    this.subLayerDisp.icon_aquamarin.visible = __s5local0;
    this.subLayerDisp.icon_aquamarin_points.visible = __s5local0;
  };
  return CastleListDetailOverviewSublayerMisc;
}(require("gge-module:export_CastleListDetailOverviewSublayer").CastleListDetailOverviewSublayer);
exports.CastleListDetailOverviewSublayerMisc = __s0local0;
var __dep_export_CastleListDetailOverviewItemMisc = require("gge-module:export_CastleListDetailOverviewItemMisc");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
