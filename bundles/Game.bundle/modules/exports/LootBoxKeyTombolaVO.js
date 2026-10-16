Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function LootBoxKeyTombolaVO() {
    this._ID = 0;
    this._lootBoxKeyTombolaID = 0;
    this._addRareMysteryBoxKey = 0;
    this._addEpicMysteryBoxKey = 0;
    this._addLegendaryMysteryBoxKey = 0;
    this._shares = 0;
  }
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "ID", {
    get: function () {
      return this._ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "lootBoxKeyTombolaID", {
    get: function () {
      return this._lootBoxKeyTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "addRareMysteryBoxKey", {
    get: function () {
      return this._addRareMysteryBoxKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "addEpicMysteryBoxKey", {
    get: function () {
      return this._addEpicMysteryBoxKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "addLegendaryMysteryBoxKey", {
    get: function () {
      return this._addLegendaryMysteryBoxKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxKeyTombolaVO.prototype.parseXML = function (__s17param0) {
    this._ID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("entryID", __s17param0, "0", true));
    this._lootBoxKeyTombolaID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tombolaID", __s17param0, "0"));
    this._addRareMysteryBoxKey = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("addRareMysteryBoxKey", __s17param0, "0"));
    this._addEpicMysteryBoxKey = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("addEpicMysteryBoxKey", __s17param0, "0"));
    this._addLegendaryMysteryBoxKey = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("addLegendaryMysteryBoxKey", __s17param0, "0"));
    this._shares = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shares", __s17param0, "0"));
  };
  return LootBoxKeyTombolaVO;
}();
exports.LootBoxKeyTombolaVO = __s0local0;
