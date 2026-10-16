Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __s0local0 = function (__s1param0) {
  function GachaDeco2x2EventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaDeco2x2EventVO, __s1param0);
  GachaDeco2x2EventVO.prototype.getDistrictType = function () {
    return __dep_export_IsoObjectEnum.IsoObjectEnum.DECO_DISTRICT_2X2;
  };
  Object.defineProperty(GachaDeco2x2EventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaDeco2x2EventVO.prototype, "eventName", {
    get: function () {
      return "GachaDeco2x2";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaDeco2x2EventVO.prototype, "animationFPS", {
    get: function () {
      return 24;
    },
    enumerable: true,
    configurable: true
  });
  return GachaDeco2x2EventVO;
}(require("gge-module:export_ADistrictGachaEventVO").ADistrictGachaEventVO);
exports.GachaDeco2x2EventVO = __s0local0;
