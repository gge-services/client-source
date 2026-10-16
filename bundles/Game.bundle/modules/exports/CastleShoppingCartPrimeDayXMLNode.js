Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleShoppingCartPrimeDayXMLNode() {
    this._cartOptionId = 0;
    this._typeId = 0;
    this._groupId = 0;
    this._minLevel = 0;
    this._maxLevel = 0;
    this._shownOfferBonus = 0;
    this._rewardID = 0;
    this._c2LifetimeSpentMin = 0;
    this._c2LifetimeSpentMax = 0;
    this._c290daysMin = 0;
    this._c290daysMax = 0;
  }
  CastleShoppingCartPrimeDayXMLNode.prototype.parseXML = function (__s5param0) {
    this._cartOptionId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("cartOptionID", __s5param0, "-1", true));
    this._typeId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("typeID", __s5param0, "-1", true));
    this._groupId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("groupID", __s5param0, "-1", true));
    this._minLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minLevel", __s5param0, "6", true));
    this._maxLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxLevel", __s5param0, "870", true));
    this._shownOfferBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shownOfferBonus", __s5param0, "-1", true));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "-1", true));
    this._c2LifetimeSpentMin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2LifetimeSpentMin", __s5param0, "-1", false));
    this._c2LifetimeSpentMax = __s5param0.c2LifetimeSpentMax !== undefined ? __dep_exact_f855840627e6e145.int(__s5param0.c2LifetimeSpentMax) : Number.MAX_VALUE;
    this._c290daysMin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("C290daysMin", __s5param0, "-1", false));
    this._c290daysMax = __s5param0.C290daysMax !== undefined ? __dep_exact_f855840627e6e145.int(__s5param0.C290daysMax) : Number.MAX_VALUE;
    var __s5local0 = __dep_export_CastleModel.CastleModel.rewardData.getListById(this._rewardID);
    if (!__s5local0) {
      throw new Error("Invalid reward id " + this._rewardID);
    }
    if (__s5local0.length > 1) {
      throw new Error("Reward " + this._rewardID + "doesn't contain only 1 item!");
    }
    this._item = __s5local0.getItemByIndexSave(0);
  };
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "cartOptionId", {
    get: function () {
      return this._cartOptionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "typeId", {
    get: function () {
      return this._typeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "groupId", {
    get: function () {
      return this._groupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "shownOfferBonus", {
    get: function () {
      return this._shownOfferBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c2LifetimeSpentMin", {
    get: function () {
      return this._c2LifetimeSpentMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c2LifetimeSpentMax", {
    get: function () {
      return this._c2LifetimeSpentMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "item", {
    get: function () {
      return this._item;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c290daysMin", {
    get: function () {
      return this._c290daysMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c290daysMax", {
    get: function () {
      return this._c290daysMax;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayXMLNode;
}();
exports.CastleShoppingCartPrimeDayXMLNode = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
