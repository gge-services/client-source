Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function LootBoxTypeVO() {
    this._lootBoxTypeID = 0;
    this._lootBoxKeyPayoutThreshold = 0;
    this._lootBoxKeyProgress = 0;
    this._lootBoxTheme = "";
  }
  Object.defineProperty(LootBoxTypeVO.prototype, "lootBoxTypeID", {
    get: function () {
      return this._lootBoxTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTypeVO.prototype, "lootBoxKeyPayoutThreshold", {
    get: function () {
      return this._lootBoxKeyPayoutThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTypeVO.prototype, "lootBoxTheme", {
    get: function () {
      return this._lootBoxTheme;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTypeVO.prototype, "keyProgress", {
    get: function () {
      return this._lootBoxKeyProgress;
    },
    set: function (__s13param0) {
      this._lootBoxKeyProgress = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxTypeVO.prototype.parseXML = function (__s15param0) {
    this._lootBoxKeyPayoutThreshold = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxKeyPayoutThreshold", __s15param0, "0", true));
    this._lootBoxTheme = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxTheme", __s15param0, "0", true);
    this._lootBoxTypeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootBoxTypeID", __s15param0, "0"));
  };
  LootBoxTypeVO.LOOT_BOX_TYPE_MYSTERY_BOX = 1;
  LootBoxTypeVO.LOOT_BOX_TYPE_GENERAL_BOX = 2;
  return LootBoxTypeVO;
}();
exports.LootBoxTypeVO = __s0local0;
