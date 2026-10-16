Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_C2SSetAutoSellGemConditionsEventVO = require("gge-module:export_C2SSetAutoSellGemConditionsEventVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AutoSellGemsVO() {
    var __s3local0 = this;
    __s3local0._actives = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._actives = __s3local0.createActiveMatrix();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellGemsVO, __s1param0);
  AutoSellGemsVO.prototype.parseASG = function (__s5param0) {
    var __s5local0 = __s5param0;
    if (__s5local0 && (this.setAllActives(0), __s5local0 != null)) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          this.setActive(parseInt(__s5local3[1]), __s5local3[0]);
        }
      }
    }
  };
  AutoSellGemsVO.prototype.setActive = function (__s11param0, __s11param1) {
    this._actives.set(__s11param0, __s11param1);
  };
  AutoSellGemsVO.prototype.setAllActives = function (__s13param0) {
    if (this._actives != null) {
      for (var __s13local0 = 0, __s13local1 = Array.from(this._actives.keys()); __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        this._actives.set(__s13local2, __s13param0);
      }
    }
  };
  AutoSellGemsVO.prototype.copy = function (__s18param0) {
    for (var __s18local0 = 0, __s18local1 = Array.from(__s18param0._actives.keys()); __s18local0 < __s18local1.length; __s18local0++) {
      var __s18local2 = __s18local1[__s18local0];
      this._actives.set(__s18local2, __s18param0._actives.get(__s18local2));
    }
  };
  AutoSellGemsVO.prototype.sendConfigToServer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetAutoSellGemConditionsEventVO.C2SSetAutoSellGemConditionsEventVO(this));
  };
  AutoSellGemsVO.prototype.createActiveMatrix = function () {
    var __s24local0 = new Map();
    for (var __s24local1 = 0, __s24local2 = Array.from(__dep_export_CastleModel.CastleModel.gemData.gemColors.keys()); __s24local1 < __s24local2.length; __s24local1++) {
      var __s24local3 = __s24local2[__s24local1];
      __s24local0.set(__s24local3, 0);
    }
    return __s24local0;
  };
  Object.defineProperty(AutoSellGemsVO.prototype, "actives", {
    get: function () {
      return this._actives;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellGemsVO;
}(require("gge-module:export_ASubAutoSellVO").ASubAutoSellVO);
exports.AutoSellGemsVO = __s0local0;
