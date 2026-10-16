Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSoftChestVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSoftChestVO, __s1param0);
  Object.defineProperty(CastleSoftChestVO.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Currency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "currency", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.C1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_pay", {
    get: function () {
      return "dialog_season_start_payC1_02";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_plundermeister", {
    get: function () {
      return "dialog_privateOffer_softChest_descripton";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_general", {
    get: function () {
      return "dialog_privateOffer_softChest_descripton1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_savings", {
    get: function () {
      return "dialog_privateOffer_softChest_rubySave";
    },
    enumerable: true,
    configurable: true
  });
  return CastleSoftChestVO;
}(require("gge-module:export_ACastleChestVO").ACastleChestVO);
exports.CastleSoftChestVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleChestVO");
