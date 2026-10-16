Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogSublayer() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogSublayer, __s1param0);
  AllianceRaidEventDialogSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    var __s5local0 = __s5param0[0];
    this.updatePosition(__s5local0.x, __s5local0.y);
  };
  AllianceRaidEventDialogSublayer.prototype.updatePosition = function (__s7param0, __s7param1) {
    this.subLayerDisp.x = -__s7param0 / 2;
    this.subLayerDisp.y = -__s7param1 / 2;
  };
  AllianceRaidEventDialogSublayer.prototype.updateBackground = function (__s9param0) {};
  AllianceRaidEventDialogSublayer.prototype.createScrollList = function (__s11param0, __s11param1) {
    var __s11local0 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s11param0);
    if (!__s11local0.maskMc && __s11param0.mc_items) {
      __s11local0.addMaskMc(__s11param0.mc_items.mask);
    }
    var __s11local1 = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s11local0, __s11param1);
    __s11local1.onShow();
    return __s11local1;
  };
  Object.defineProperty(AllianceRaidEventDialogSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventDialogSublayer.prototype, "dialogProperties", {
    get: function () {
      return this._params[1];
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventDialogSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.AllianceRaidEventDialogSublayer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
