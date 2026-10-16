Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePrimeDayRewardXMLNode() {
    this._paymentrewardID = 0;
    this._c2ForReward = 0;
    this._shownCurrencyValue = 0;
    this._shownOfferBonus = 0;
    this._displayType = 0;
  }
  CastlePrimeDayRewardXMLNode.prototype.parseXML = function (__s5param0) {
    this._paymentrewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("paymentrewardID", __s5param0, "-1", false));
    this._c2ForReward = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2ForReward", __s5param0, "-1", false));
    this._shownCurrencyValue = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shownCurrencyValue", __s5param0, "-1", false));
    this._shownOfferBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shownOfferBonus", __s5param0, "-1", false));
    this._displayType = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("displayType", __s5param0, "-1", false));
  };
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "paymentrewardID", {
    get: function () {
      return this._paymentrewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "c2ForReward", {
    get: function () {
      return this._c2ForReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "shownCurrencyValue", {
    get: function () {
      return this._shownCurrencyValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "shownOfferBonus", {
    get: function () {
      return this._shownOfferBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "displayType", {
    get: function () {
      return this._displayType;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeDayRewardXMLNode;
}();
exports.CastlePrimeDayRewardXMLNode = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
