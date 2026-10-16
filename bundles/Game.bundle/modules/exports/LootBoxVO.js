Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function LootBoxVO() {
    this._lootBoxID = 0;
    this._lootBoxTypeID = 0;
    this._lootBoxTombolaID = 0;
    this._lootBoxKeyTombolaID = 0;
    this._name = "";
    this._rarity = 0;
    this._draws = 0;
    this._sortOrder = 0;
  }
  Object.defineProperty(LootBoxVO.prototype, "lootBoxID", {
    get: function () {
      return this._lootBoxID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxTypeID", {
    get: function () {
      return this._lootBoxTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxType", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxTypeByID(this.lootBoxTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxTombolaID", {
    get: function () {
      return this._lootBoxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxKeyTombolaID", {
    get: function () {
      return this._lootBoxKeyTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "draws", {
    get: function () {
      return this._draws;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxVO.prototype.parseXML = function (__s23param0) {
    this._lootBoxID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxID", __s23param0, "0", true));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("name", __s23param0, "0", true);
    this._lootBoxTypeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxTypeID", __s23param0, "0"));
    this._lootBoxTombolaID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxTombolaID", __s23param0, "0"));
    this._lootBoxKeyTombolaID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxKeyTombolaID", __s23param0, "0"));
    this._rarity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rarity", __s23param0, "0"));
    this._draws = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("draws", __s23param0, "0"));
    this._sortOrder = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s23param0, "0"));
  };
  return LootBoxVO;
}();
exports.LootBoxVO = __s0local0;
