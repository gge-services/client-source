Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_EquipmentBonusVO = require("gge-module:export_EquipmentBonusVO");
var __s0local0 = function (__s1param0) {
  function BasicEquipmentVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._boni = [];
    __s3local0._id = NaN;
    __s3local0._uniqueID = 0;
    __s3local0._rareID = 0;
    __s3local0._visualRareID = 0;
    __s3local0._enchantmentLevel = 0;
    __s3local0._durationEndTimestamp = NaN;
    __s3local0._totalDuration = 0;
    __s3local0._canSlotGem = true;
    __s3local0._isPermanent = true;
    __s3local0._starRarity = -1;
    __s3local0._starLevel = -1;
    __s3local0._reuseAssetOfEquipmentID = -1;
    __s3local0._skinID = -1;
    __s3local0._equipmentTypeID = -1;
    __s3local0._sellPriceOverride = -1;
    __s3local0._sellCurrencies = null;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicEquipmentVO, __s1param0);
  BasicEquipmentVO.prototype.parseCustomPrivateOfferEquipment = function (__s5param0) {
    var __s5local0 = __s5param0[4].split(",");
    var __s5local1 = [];
    if (__s5local0 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local0; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          __s5local1.push([parseInt(__s5local4.split("&")[0]), parseInt(__s5local4.split("&")[1])]);
        }
      }
    }
    this.parseEquipFromArray([0, __s5param0[0], __s5param0[1], __s5param0[2], __s5param0[3], __s5local1, -1, -1, 0, 0, BasicEquipmentVO.NO_GEM_ID]);
  };
  BasicEquipmentVO.prototype.parseEquipFromArray = function (__s11param0) {
    if (!(__s11param0.length < 3)) {
      this._id = __s11param0[0];
      this._slotTypeId = __s11param0[1];
      this._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(this._slotTypeId);
      this._lordTypeId = __s11param0[2];
      this._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.getLordType(this._lordTypeId);
      this.rareID = __s11param0[3];
      this._rarity = BasicEquipmentVO.parseRarityID(this._visualRareID);
      this._graphicString = __s11param0[4];
      this._uniqueID = __dep_exact_f855840627e6e145.int(__s11param0[6]);
      this._setID = __s11param0[7];
      this._enchantmentLevel = __dep_exact_f855840627e6e145.int(__s11param0[8]);
      this._durationEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s11param0[9] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._isPermanent = __s11param0[9] < 1;
      if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "RelicEquipmentVO")) {
        this._boni = this.parseBonuses(__s11param0[5]);
      }
      var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param0[10]);
      if (__s11param0.length > 10 && __s11local0 != BasicEquipmentVO.NO_GEM_ID) {
        this._gemVO = __dep_export_CastleModel.CastleModel.gemData.getGemVO(__s11local0);
      }
      var __s11local1 = __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this._uniqueID);
      if (__s11local1) {
        this._canSlotGem = __s11local1.canSlotGem;
        this._starLevel = __s11local1.starLevel;
        this._starRarity = __s11local1.starRarity;
        this._reuseAssetOfEquipmentID = __s11local1.reuseAssetOfEquipmentID;
        this._skinID = __s11local1.skinID;
        this._sellPriceOverride = __s11local1.sellPriceOverride;
        this._sellCurrencies = __s11local1.sellCurrencies;
      }
      this._equipmentTypeID = __dep_exact_f855840627e6e145.int(__s11param0.length >= 12 ? __s11param0[11] : __dep_exact_26a421b704832cff.EquipmentConst.EQUIPMENT_TYPE_ID_GENERATED);
      if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "RelicEquipmentVO")) {
        this._visClassName = this.setVisClassName();
      }
    }
  };
  BasicEquipmentVO.prototype.parseXML = function (__s18param0) {
    this._id = parseInt(__s18param0.equipmentID || "");
    this._slotTypeId = parseInt(__s18param0.slotID || "");
    this._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(this._slotTypeId);
    this._lordTypeId = parseInt(__s18param0.wearerID || "");
    this._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.getLordType(this._lordTypeId);
    this._rareID = parseInt(__s18param0.unique || "0") == 1 ? -1 : parseInt(__s18param0.rarenessID || "0");
    this.rareID = this._rareID;
    this._rarity = BasicEquipmentVO.parseRarityID(this._visualRareID);
    this._enchantmentLevel = 0;
    this._graphicString = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("picID", __s18param0, "-1");
    this._totalDuration = parseInt(__s18param0.duration || "0") * __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC;
    this._durationEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this._totalDuration * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._isPermanent = this._totalDuration < 1;
    var __s18local0 = __s18param0.effects || "";
    var __s18local1 = [];
    if (__s18local0.length > 0) {
      __s18local1 = __s18local0.split(",");
    }
    var __s18local2 = [];
    if (__s18local1 != null) {
      for (var __s18local3 = 0, __s18local4 = __s18local1; __s18local3 < __s18local4.length; __s18local3++) {
        var __s18local5 = __s18local4[__s18local3];
        if (__s18local5 !== undefined) {
          if (__s18local5.split("&")[1].indexOf("+") >= 0) {
            var __s18local6 = __s18local5.split("&")[1];
            __s18local2.push([parseInt(__s18local5.split("&")[0]), [parseInt(__s18local6.split("+")[0]), parseInt(__s18local6.split("+")[1])]]);
          } else {
            __s18local2.push([parseInt(__s18local5.split("&")[0]), [parseInt(__s18local5.split("&")[1])]]);
          }
        }
      }
    }
    if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "RelicEquipmentVO")) {
      this._boni = this.parseBonuses(__s18local2);
    }
    this._uniqueID = parseInt(__s18param0.equipmentID || "");
    this._setID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("setID", __s18param0, "-1"));
    this._sellPriceOverride = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sellPriceOverride", __s18param0, "-1"));
    var __s18local7 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("AlienHeroEffectString", __s18param0, "");
    this._equipmentTypeID = __s18local7 != "" ? parseInt(__s18local7) : __dep_exact_26a421b704832cff.EquipmentConst.EQUIPMENT_TYPE_ID_GENERATED;
    this._canSlotGem = !!parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("canSlotGem", __s18param0, "1"));
    this._starLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("starLevel", __s18param0, "-1"));
    this._starRarity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("starRarity", __s18param0, "-1"));
    this._reuseAssetOfEquipmentID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("reuseAssetOfEquipmentID", __s18param0, "-1"));
    this._skinID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skinID", __s18param0, "-1"));
    if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "RelicEquipmentVO")) {
      this._visClassName = this.setVisClassName();
    }
  };
  BasicEquipmentVO.prototype.parseBonus = function (__s29param0, __s29param1) {
    return new __dep_export_EquipmentBonusVO.EquipmentBonusVO().parseEquipmentFromValueArray(__s29param0, [__s29param1]);
  };
  BasicEquipmentVO.prototype.parseBonuses = function (__s31param0) {
    var __s31local0 = [];
    for (var __s31local1 = 0; __s31local1 < __s31param0.length; __s31local1++) {
      var __s31local2 = __s31param0[__s31local1];
      __s31local0.push(this.parseBonus(__s31local2[0], Array.isArray(__s31local2[1]) ? __s31local2[1] : [__s31local2[1]]));
    }
    return __s31local0;
  };
  BasicEquipmentVO.prototype.setVisClassName = function () {
    if (this._rarity == BasicEquipmentVO.RARITY_UNIQUE) {
      return "Item_Unique_" + this.reuseAssetOfEquipmentID;
    } else {
      return "Item_" + this._slotType + "0" + this.graphicsSuffix + "_LV" + this._rareID;
    }
  };
  BasicEquipmentVO.parseRarityID = function (__s39param0) {
    switch (__s39param0) {
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON:
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON:
        return BasicEquipmentVO.RARITY_COMMON;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE:
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE:
        return BasicEquipmentVO.RARITY_RARE;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC:
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC:
        return BasicEquipmentVO.RARITY_EPIC;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY:
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY:
        return BasicEquipmentVO.RARITY_LEGENDARY;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RELIC:
        return BasicEquipmentVO.RARITY_RELIC;
      default:
        return BasicEquipmentVO.RARITY_UNIQUE;
    }
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "visClassName", {
    get: function () {
      return this._visClassName;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this._visClassName);
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "graphicsSuffix", {
    get: function () {
      return String(Math.min(__dep_exact_f855840627e6e145.int(this._graphicString) + 1, 4));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "nameString", {
    get: function () {
      var __s52local0;
      if (this.rarity == BasicEquipmentVO.RARITY_UNIQUE) {
        var __s52local1 = "equipment_unique_" + this._uniqueID;
        __s52local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_92d05af59ee2ff30.Localize.hasText(__s52local1) ? __s52local1 : "equipment_unique_" + this.reuseAssetOfEquipmentID);
        if (this._enchantmentLevel > 0) {
          __s52local0 = __dep_exact_92d05af59ee2ff30.Localize.text("equipment_name_enchanted", [__s52local0, this._enchantmentLevel]);
        }
        if (__s52local0.length <= 1) {
          return this.typeDescriptionText;
        } else {
          return __s52local0;
        }
      }
      __s52local0 = __dep_exact_92d05af59ee2ff30.Localize.text("equip_name_rarity_" + this.rarity.toLowerCase() + "_slottype_" + this.slotType.toLowerCase(), [this.effectSuffix]);
      if (this._enchantmentLevel > 0) {
        __s52local0 = __dep_exact_92d05af59ee2ff30.Localize.text("equipment_name_enchanted", [__s52local0, this._enchantmentLevel]);
      }
      if (__s52local0.length <= 1) {
        return this.typeDescriptionText;
      } else {
        return __s52local0;
      }
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "nameString").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "effectSuffix", {
    get: function () {
      if (this._boni.length <= 0) {
        return "";
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("equip_name_effect_" + this._boni[0].effect.name);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "nameColor", {
    get: function () {
      var __s67local0 = 0;
      switch (this.rarity) {
        case BasicEquipmentVO.RARITY_COMMON:
          __s67local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_COMMON;
          break;
        case BasicEquipmentVO.RARITY_RARE:
          __s67local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_RARE;
          break;
        case BasicEquipmentVO.RARITY_EPIC:
          __s67local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_EPIC;
          break;
        case BasicEquipmentVO.RARITY_LEGENDARY:
          __s67local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_LEGENDARY;
          break;
        case BasicEquipmentVO.RARITY_UNIQUE:
          __s67local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      }
      return __s67local0;
    },
    set: function (__s70param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "nameColor").set.call(this, __s70param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isUseableForTripleCraft", {
    get: function () {
      if (this._slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
        return false;
      }
      switch (this._rarity) {
        case BasicEquipmentVO.RARITY_COMMON:
        case BasicEquipmentVO.RARITY_EPIC:
        case BasicEquipmentVO.RARITY_LEGENDARY:
        case BasicEquipmentVO.RARITY_RARE:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isUseableForSextupleCraft", {
    get: function () {
      if (this._slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
        return false;
      }
      switch (this._rarity) {
        case BasicEquipmentVO.RARITY_COMMON:
        case BasicEquipmentVO.RARITY_EPIC:
        case BasicEquipmentVO.RARITY_RARE:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.isSkinItem = function () {
    return this._slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN;
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "bonusDescriptionText", {
    get: function () {
      var __s82local0 = "";
      if (this._boni != null) {
        for (var __s82local1 = 0, __s82local2 = this._boni; __s82local1 < __s82local2.length; __s82local1++) {
          var __s82local3 = __s82local2[__s82local1];
          if (__s82local3 !== undefined) {
            if (__s82local0.length > 0) {
              __s82local0 += "\n";
            }
            if (__dep_export_CastleModel.CastleModel.settingsData.showEffectValuesActive) {
              __s82local0 += __s82local3.effect.name + ": " + __s82local3.strength;
            } else {
              __s82local0 += __s82local3.descriptionText;
            }
          }
        }
      }
      return __s82local0;
    },
    set: function (__s91param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "bonusDescriptionText").set.call(this, __s91param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "typeDescriptionText", {
    get: function () {
      return (this.lordType ? __dep_exact_92d05af59ee2ff30.Localize.text("equipment_itemType_" + this.lordType.toLowerCase()) + " - " : "") + (this.slotType ? __dep_exact_92d05af59ee2ff30.Localize.text("equipment_slotType_" + this.slotType.toLowerCase()) + " - " : "") + (this.rarity ? __dep_exact_92d05af59ee2ff30.Localize.text("equipment_rarity_" + this.rarity.toLowerCase()) : "") + (this.isPermanent ? " - " + __dep_exact_92d05af59ee2ff30.Localize.text("permanent") : " - " + __dep_exact_92d05af59ee2ff30.Localize.text("temporary"));
    },
    set: function (__s95param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "typeDescriptionText").set.call(this, __s95param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "typeDescriptionStarLevelText", {
    get: function () {
      if (!this.hasStar) {
        return "";
      }
      var __s97local0 = "";
      switch (this.starRarity) {
        case BasicEquipmentVO.STAR_RARITY_COMMON:
          __s97local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_ordinary");
          break;
        case BasicEquipmentVO.STAR_RARITY_UNIQUE:
          __s97local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_unique");
          break;
        case BasicEquipmentVO.STAR_RARITY_RARE:
          __s97local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_rare");
          break;
        case BasicEquipmentVO.STAR_RARITY_EPIC:
          __s97local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_epic");
          break;
        case BasicEquipmentVO.STAR_RARITY_LEGENDARY:
          __s97local0 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity_legendary");
      }
      var __s97local1 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_rarity", [__s97local0]);
      var __s97local2 = __dep_exact_92d05af59ee2ff30.Localize.text("starSystem_level", [this.starLevel]);
      return __dep_exact_92d05af59ee2ff30.Localize.text("value_dash_split", [__s97local2, __s97local1]);
    },
    set: function (__s101param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "typeDescriptionStarLevelText").set.call(this, __s101param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "hasSetbonus", {
    get: function () {
      return this._setID != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s107param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "id").set.call(this, __s107param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "extraText", {
    get: function () {
      if (this._rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE) {
        var __s109local0 = "equipment_unique_" + this._uniqueID + "_desc";
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_92d05af59ee2ff30.Localize.hasText(__s109local0) ? __s109local0 : "equipment_unique_" + this.reuseAssetOfEquipmentID + "_desc");
      }
      return "";
    },
    set: function (__s112param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "extraText").set.call(this, __s112param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "extraTextId", {
    get: function () {
      if (this._rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE) {
        return "equipment_unique_" + this._uniqueID + "_desc";
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "extraTextAppearanceTarget", {
    get: function () {
      if (this.isSkinItem()) {
        if (this.lordType == BasicEquipmentVO.LORD_TYPE_BARON) {
          var __s118local0 = this.skinInfoObject;
          if (__s118local0 && __s118local0.increasedSize) {
            return __dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_description_appearance_baron_transformationTarget_increasedSizeLTPE");
          } else {
            return __dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_description_appearance_baron_transformationTarget");
          }
        }
        return __dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_description_appearance_commander_transformationTarget");
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinInfoObject", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getWorldmapSkin(this._skinID);
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.hasSkinInfo = function () {
    return !!this.skinInfoObject;
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "skinAssetID", {
    get: function () {
      var __s128local0 = this.skinInfoObject;
      if (__s128local0) {
        return String(__s128local0.name);
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesOutpostResourceAssets", {
    get: function () {
      var __s132local0 = this.skinInfoObject;
      return !!__s132local0 && __s132local0.definesResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesAssetForAllCastleLevels", {
    get: function () {
      var __s134local0 = this.skinInfoObject;
      return !!__s134local0 && __s134local0.definesAllCastleLevels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesAssetForMoat", {
    get: function () {
      var __s136local0 = this.skinInfoObject;
      return !!__s136local0 && __s136local0.definesMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesIncreasedAsset", {
    get: function () {
      var __s138local0 = this.skinInfoObject;
      return !!__s138local0 && __s138local0.increasedSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "uniqueID", {
    get: function () {
      return this._uniqueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "enchantmentLevel", {
    get: function () {
      return this._enchantmentLevel;
    },
    set: function (__s144param0) {
      this._enchantmentLevel = __s144param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isEnchantable", {
    get: function () {
      return this._slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "hasEnchantmentUpgradePath", {
    get: function () {
      if (this._boni == null || this._boni.length == 0) {
        return false;
      }
      if (!__dep_export_CastleModel.CastleModel.equipData || !__dep_export_CastleModel.CastleModel.equipData.equipmentXml) {
        return false;
      }
      for (var __s148local0 = 0; __s148local0 < this._boni.length; __s148local0++) {
        var __s148local1 = this._boni[__s148local0];
        if (__s148local1) {
          var __s148local2 = __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEnchantmentFactor(__s148local1.id, __s148local0 == 0);
          if (__s148local2 != 0 && !isNaN(__s148local2)) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "remainingDuration", {
    get: function () {
      return Math.max(this._durationEndTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer(), 0) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.setRemainingTime = function (__s158param0) {
    this._durationEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s158param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "totalDuration", {
    get: function () {
      return this._totalDuration;
    },
    set: function (__s162param0) {
      this._totalDuration = __s162param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    set: function (__s166param0) {
      this._gemVO = __s166param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isHeroBonus", {
    get: function () {
      return this.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "rareID", {
    get: function () {
      return this._rareID;
    },
    set: function (__s172param0) {
      this._rareID = __s172param0;
      this.visualRareID = __s172param0;
      this._rarity = BasicEquipmentVO.parseRarityID(this._visualRareID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isPermanent", {
    get: function () {
      return this._isPermanent;
    },
    set: function (__s176param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "isPermanent").set.call(this, __s176param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "visualRareID", {
    get: function () {
      return this._visualRareID;
    },
    set: function (__s180param0) {
      switch (__s180param0) {
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON:
          this._visualRareID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON);
          break;
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE:
          this._visualRareID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE);
          break;
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC:
          this._visualRareID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC);
          break;
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY:
          this._visualRareID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY);
          break;
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RELIC:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RELIC:
          this._visualRareID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RELIC);
          break;
        default:
          this._visualRareID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "sellPriceOverride", {
    get: function () {
      return this._sellPriceOverride;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "sellCurrencies", {
    get: function () {
      return this._sellCurrencies;
    },
    set: function (__s187param0) {
      this._sellCurrencies = __s187param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "canSlotGem", {
    get: function () {
      return this._canSlotGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "starRarity", {
    get: function () {
      return this._starRarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "starLevel", {
    get: function () {
      return this._starLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "hasStar", {
    get: function () {
      return this.starLevel > -1 && this.starRarity > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "reuseAssetOfEquipmentID", {
    get: function () {
      if (this._reuseAssetOfEquipmentID > 0) {
        return this._reuseAssetOfEquipmentID;
      } else {
        return this._uniqueID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "durationEndTimestamp", {
    get: function () {
      return this._durationEndTimestamp;
    },
    set: function (__s203param0) {
      this._durationEndTimestamp = __s203param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "equipmentTypeID", {
    get: function () {
      return this._equipmentTypeID;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.RARITY_COMMON = "Common";
  BasicEquipmentVO.RARITY_RARE = "Rare";
  BasicEquipmentVO.RARITY_EPIC = "Epic";
  BasicEquipmentVO.RARITY_LEGENDARY = "Legendary";
  BasicEquipmentVO.RARITY_UNIQUE = "Unique";
  BasicEquipmentVO.RARITY_RELIC = "Relic";
  BasicEquipmentVO.STAR_RARITY_COMMON = 0;
  BasicEquipmentVO.STAR_RARITY_RARE = 1;
  BasicEquipmentVO.STAR_RARITY_EPIC = 2;
  BasicEquipmentVO.STAR_RARITY_LEGENDARY = 3;
  BasicEquipmentVO.STAR_RARITY_UNIQUE = 4;
  BasicEquipmentVO.NO_GEM_ID = -1;
  return BasicEquipmentVO;
}(__dep_export_BasicEquippableVO.BasicEquippableVO);
exports.BasicEquipmentVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
