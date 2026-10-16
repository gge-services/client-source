Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_EventPackageVO = require("gge-module:export_EventPackageVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function VIPPackageVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VIPPackageVO, __s1param0);
  Object.defineProperty(VIPPackageVO.prototype, "textVO", {
    get: function () {
      if (this.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_buyVipPoints_pointAmount_v2", [this.reward.amount]);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.reward.duration));
      }
    },
    enumerable: true,
    configurable: true
  });
  return VIPPackageVO;
}(__dep_export_EventPackageVO.EventPackageVO);
exports.VIPPackageVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
