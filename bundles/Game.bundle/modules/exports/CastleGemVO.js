Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_GemBonusVO = require("gge-module:export_GemBonusVO");
var __s0local0 = function (__s1param0) {
  function CastleGemVO(__s3param0 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._id = 0;
    __s3local0._upgradeId = 0;
    __s3local0._boni = [];
    __s3local0._maxLevel = -1;
    __s3local0._starRarity = -1;
    __s3local0._starLevel = -1;
    __s3local0._reuseAssetOfGemID = -1;
    __s3local0._sellPriceOverride = -1;
    __s3local0._sellCurrencies = null;
    if (__s3param0) {
      __s3local0.parseXML(__s3param0);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGemVO, __s1param0);
  CastleGemVO.prototype.parseXML = function (__s6param0) {
    this._id = parseInt(__s6param0.gemID || "");
    this._upgradeId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("followingGemID", __s6param0, "-1"));
    var __s6local0 = parseInt(__s6param0.gemLevelID || "");
    this._levelInfos = __dep_export_CastleModel.CastleModel.gemData.getLevelInfo(__s6local0);
    this._setID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("setID", __s6param0, "-1"));
    this._lordTypeId = parseInt(__s6param0.wearerID || "");
    this._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.getLordType(this._lordTypeId);
    this._slotTypeId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("slotID", __s6param0, "0"));
    this._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(this._slotTypeId);
    this._sellPriceOverride = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sellPriceOverride", __s6param0, "-1"));
    this._boni = [];
    var __s6local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s6param0, "");
    var __s6local2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("triggerChance", __s6param0, "100"));
    this._starLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("starLevel", __s6param0, "-1"));
    this._starRarity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("starRarity", __s6param0, "-1"));
    this._reuseAssetOfGemID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("reuseAssetOfGemID", __s6param0, "-1"));
    for (var __s6local3 = 0, __s6local4 = __s6local1.split(","); __s6local3 < __s6local4.length; __s6local3++) {
      var __s6local5 = __s6local4[__s6local3];
      if (__s6local5.length > 0) {
        var __s6local6 = __s6local5.split("&");
        var __s6local7 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s6local6[0]));
        var __s6local8 = new __dep_export_GemBonusVO.GemBonusVO().parseGemBonusFromValueString(__s6local7, __s6local6[1], __s6local2);
        this._boni.push(__s6local8);
      }
    }
  };
  Object.defineProperty(CastleGemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "id").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "level", {
    get: function () {
      return this._levelInfos.levelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "maxLevel", {
    get: function () {
      if (this._maxLevel < 0) {
        this._maxLevel = this.level;
        for (var __s17local0 = this; __s17local0 && __s17local0.upgradeId >= 0;) {
          __s17local0 = __dep_export_CastleModel.CastleModel.gemData.getGemVO(__s17local0.upgradeId);
          this._maxLevel = __s17local0.level;
        }
      }
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "levelInfos", {
    get: function () {
      return this._levelInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "isUpgradable", {
    get: function () {
      return this.upgradeId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "sellPriceOverride", {
    get: function () {
      return this._sellPriceOverride;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "sellCurrencies", {
    get: function () {
      return this._sellCurrencies;
    },
    set: function (__s30param0) {
      this._sellCurrencies = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "upgradeId", {
    get: function () {
      return this._upgradeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "nameString", {
    get: function () {
      if (this.isUnique) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("gem_unique_" + this.reuseAssetOfGemID);
      } else if (this.boni[0].triggerChance == 100) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("gem_effect_name_" + this.boni[0].gemTypeString + "_100", [this.level]);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("gem_effect_name_" + this.boni[0].gemTypeString, [this.level]);
      }
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "nameString").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "isUnique", {
    get: function () {
      return this.level == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "nameColor", {
    get: function () {
      if (this.isUnique) {
        return __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      } else {
        return __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_GEM;
      }
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "nameColor").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "typeDescriptionText", {
    get: function () {
      var __s49local0 = __dep_exact_92d05af59ee2ff30.Localize.text("equipment_itemType_" + this.lordType.toLowerCase());
      if (this.isUnique) {
        var __s49local1 = __dep_exact_92d05af59ee2ff30.Localize.text("equipment_rarity_unique");
        return __s49local0 + " - " + __dep_exact_92d05af59ee2ff30.Localize.text("gem_slotType_" + this.slotType) + " - " + __s49local1;
      }
      return __s49local0;
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "typeDescriptionText").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "typeDescriptionStarLevelText", {
    get: function () {
      if (!this.hasStar) {
        return "";
      }
      var __s54local0 = "";
      switch (this.starRarity) {
        case __dep_export_BasicEquipmentVO.BasicEquipmentVO.STAR_RARITY_COMMON:
          __s54local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_ordinary");
          break;
        case __dep_export_BasicEquipmentVO.BasicEquipmentVO.STAR_RARITY_UNIQUE:
          __s54local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_unique");
          break;
        case __dep_export_BasicEquipmentVO.BasicEquipmentVO.STAR_RARITY_RARE:
          __s54local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_rare");
          break;
        case __dep_export_BasicEquipmentVO.BasicEquipmentVO.STAR_RARITY_EPIC:
          __s54local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_epic");
          break;
        case __dep_export_BasicEquipmentVO.BasicEquipmentVO.STAR_RARITY_LEGENDARY:
          __s54local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_legendary");
      }
      var __s54local1 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity", [__s54local0]);
      var __s54local2 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_level", [this.starLevel]);
      return __dep_exact_92d05af59ee2ff30.Localize.text("value_dash_split", [__s54local2, __s54local1]);
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "typeDescriptionStarLevelText").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "bonusDescriptionText", {
    get: function () {
      var __s60local0 = "";
      if (this._boni != null) {
        for (var __s60local1 = 0, __s60local2 = this._boni; __s60local1 < __s60local2.length; __s60local1++) {
          var __s60local3 = __s60local2[__s60local1];
          if (__s60local3 !== undefined) {
            if (__s60local0.length > 0) {
              __s60local0 += "\n";
            }
            __s60local0 += __s60local3.descriptionText;
          }
        }
      }
      return __s60local0;
    },
    set: function (__s67param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "bonusDescriptionText").set.call(this, __s67param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "extraText", {
    get: function () {
      if (this.isUnique) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("gem_unique_" + this.reuseAssetOfGemID + "_desc");
      } else {
        return "";
      }
    },
    set: function (__s73param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "extraText").set.call(this, __s73param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "isPermanent", {
    get: function () {
      return true;
    },
    set: function (__s79param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "isPermanent").set.call(this, __s79param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "starRarity", {
    get: function () {
      return this._starRarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "starLevel", {
    get: function () {
      return this._starLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "hasStar", {
    get: function () {
      return this.starLevel > -1 && this.starRarity > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "reuseAssetOfGemID", {
    get: function () {
      if (this._reuseAssetOfGemID > 0) {
        return this._reuseAssetOfGemID;
      } else {
        return this._id;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleGemVO;
}(__dep_export_BasicEquippableVO.BasicEquippableVO);
exports.CastleGemVO = __s0local0;
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO");
