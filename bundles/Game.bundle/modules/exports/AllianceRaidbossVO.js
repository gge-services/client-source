Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AllianceRaidbossVO() {
    this._raidBossID = 0;
    this._rarity = 0;
    this._leagueTypeID = 0;
    this._bossLevels = [];
    CONSTRUCTOR_HACK;
  }
  AllianceRaidbossVO.prototype.parseXML = function (__s5param0) {
    this._raidBossID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("raidBossID", __s5param0, "0", true));
    this._rarity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rarity", __s5param0, "0", true));
    this._leagueTypeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("leagueTypeID", __s5param0, "0", true));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("name", __s5param0, "", false);
    this._lifebarColor = "#" + __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lifebarColor", __s5param0, "000000", false);
    this._selectionCardText = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("selectionCardText", __s5param0, "", false);
  };
  AllianceRaidbossVO.prototype.addBossLevel = function (__s7param0) {
    this._bossLevels.push(__s7param0);
    this._bossLevels.sort(this.bindFunction(this.sortByLevel));
  };
  AllianceRaidbossVO.prototype.getBossLevel = function (__s9param0) {
    return this._bossLevels[__s9param0 - 1];
  };
  AllianceRaidbossVO.prototype.sortByLevel = function (__s11param0, __s11param1) {
    return __s11param0.level - __s11param1.level;
  };
  Object.defineProperty(AllianceRaidbossVO.prototype, "raidBossID", {
    get: function () {
      return this._raidBossID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "rarityTextColor", {
    get: function () {
      switch (this.rarity) {
        case 1:
          return AllianceRaidbossVO.RARITY_COLOR_COMMON;
        case 2:
          return AllianceRaidbossVO.RARITY_COLOR_RARE;
        case 3:
          return AllianceRaidbossVO.RARITY_COLOR_EPIC;
        case 4:
          return AllianceRaidbossVO.RARITY_COLOR_LEGENDARY;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "maxLevel", {
    get: function () {
      return this._bossLevels.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "bossLevels", {
    get: function () {
      return this._bossLevels;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossVO.prototype.getBossNameTextID = function () {
    return "are_boss_name_" + this.name;
  };
  Object.defineProperty(AllianceRaidbossVO.prototype, "lifebarColor", {
    get: function () {
      return this._lifebarColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossVO.prototype, "selectionCardText", {
    get: function () {
      return this._selectionCardText;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossVO.RARITY_COLOR_COMMON = 13421772;
  AllianceRaidbossVO.RARITY_COLOR_RARE = 10541384;
  AllianceRaidbossVO.RARITY_COLOR_EPIC = 13141503;
  AllianceRaidbossVO.RARITY_COLOR_LEGENDARY = 16362780;
  return AllianceRaidbossVO;
}();
exports.AllianceRaidbossVO = __s0local0;
