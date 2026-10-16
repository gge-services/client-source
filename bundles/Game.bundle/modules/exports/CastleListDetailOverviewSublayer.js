Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleListDetailOverviewItemVO = require("gge-module:export_CastleListDetailOverviewItemVO");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itemList = new __dep_export_SliderItemScrollList.SliderItemScrollList(__s3local0.subLayerDisp);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_down, __s3local0.subLayerDisp.mc_slider.btn_slider]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewSublayer, __s1param0);
  CastleListDetailOverviewSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.fillList(__s5param0[0]);
  };
  CastleListDetailOverviewSublayer.prototype.fillList = function (__s7param0) {
    var __s7local0 = __dep_export_CastleModel.CastleModel.userData.getCastleListWithLandmarks();
    this.itemList.clear();
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          this.itemList.pushContent(new __dep_export_CastleListDetailOverviewItemVO.CastleListDetailOverviewItemVO(__s7local3, this.currentFilter));
        }
      }
    }
    this.itemList.initList(__s7param0 ? 0 : this.itemList.currentStartIndex);
  };
  Object.defineProperty(CastleListDetailOverviewSublayer.prototype, "currentFilter", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleListDetailOverviewSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
  };
  return CastleListDetailOverviewSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleListDetailOverviewSublayer = __s0local0;
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
