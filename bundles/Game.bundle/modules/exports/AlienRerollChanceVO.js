Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AlienRerollChanceVO() {
    this._amountUnits = 0;
    this._chance = NaN;
    this._isSoftCurrency = false;
    this._isHardCurrency = false;
  }
  AlienRerollChanceVO.prototype.parseXML = function (__s5param0) {
    this._amountUnits = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("amountUnits", __s5param0, "0", true));
    this._chance = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("chance", __s5param0, "0", true)) / 1000;
    this._isSoftCurrency = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isSoftCurrency", __s5param0, "0")) == 1;
    this._isHardCurrency = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isHardCurrency", __s5param0, "0")) == 1;
  };
  Object.defineProperty(AlienRerollChanceVO.prototype, "amountUnits", {
    get: function () {
      return this._amountUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienRerollChanceVO.prototype, "chance", {
    get: function () {
      return this._chance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienRerollChanceVO.prototype, "isSoftCurrency", {
    get: function () {
      return this._isSoftCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienRerollChanceVO.prototype, "isHardCurrency", {
    get: function () {
      return this._isHardCurrency;
    },
    enumerable: true,
    configurable: true
  });
  return AlienRerollChanceVO;
}();
exports.AlienRerollChanceVO = __s0local0;
