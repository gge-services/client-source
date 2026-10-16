Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SeasonGachaEventMainDialog = require("gge-module:export_SeasonGachaEventMainDialog");
var __dep_export_SeasonGachaEventMainDialogProperties = require("gge-module:export_SeasonGachaEventMainDialogProperties");
var __dep_export_AGachaEventVO = require("gge-module:export_AGachaEventVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function HalloweenGachaEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HalloweenGachaEventVO, __s1param0);
  HalloweenGachaEventVO.prototype.openDialog = function (__s5param0 = true) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonGachaEventMainDialog.SeasonGachaEventMainDialog, new __dep_export_SeasonGachaEventMainDialogProperties.SeasonGachaEventMainDialogProperties(this));
  };
  Object.defineProperty(HalloweenGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new __s0local0(391, 385);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HalloweenGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HalloweenGachaEventVO.prototype, "eventName", {
    get: function () {
      return "HalloweenGacha";
    },
    enumerable: true,
    configurable: true
  });
  return HalloweenGachaEventVO;
}(__dep_export_AGachaEventVO.AGachaEventVO);
exports.HalloweenGachaEventVO = __s0local1;
