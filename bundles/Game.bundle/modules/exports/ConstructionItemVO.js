Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_RecruitmentHelper = require("gge-module:export_RecruitmentHelper");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleEffectVO = require("gge-module:export_CastleEffectVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function () {
  function ConstructionItemVO(__s3param0 = null) {
    this._id = 0;
    this._groupId = 0;
    this._effectGroupId = 0;
    this._level = 0;
    this._rarity = 0;
    this._slotType = 0;
    this._applicableBuildings = [];
    this._removalCostC1 = 0;
    this._isPremium = false;
    this._disassemblingTombolaID = -1;
    this._expirationTimestamp = 0;
    if (__s3param0) {
      this.fillFromParamXML(__s3param0);
    }
  }
  ConstructionItemVO.prototype.fillFromParamXML = function (__s6param0) {
    this.parseBasicValues(__s6param0);
    this.parseEffects(__s6param0);
    this.parseBoni(__s6param0);
  };
  ConstructionItemVO.prototype.parseBasicValues = function (__s8param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("constructionItemID", __s8param0, "0"));
    this._groupId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("constructionItemGroupID", __s8param0, "0"));
    this._effectGroupId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("constructionItemEffectGroupID", __s8param0, "0"));
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s8param0, "0"));
    this._rarity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rarenessID", __s8param0, "0"));
    this._slotType = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("slotTypeID", __s8param0, "0"));
    this._removalCostC1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("removalCostC1", __s8param0, "0"));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("name", __s8param0, "");
    this._lockRemoval = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lockRemoval", __s8param0, "");
    this._isPremium = !!__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isPremium", __s8param0, "");
    this._duration = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("duration", __s8param0, "0"));
    this._disassemblingTombolaID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("disassemblingTombolaID", __s8param0, "-1"));
    this._disassembleMaterials = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s8param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_ADD);
  };
  ConstructionItemVO.prototype.parseEffects = function (__s10param0) {
    this._effects = __dep_export_CastleEffectVO.CastleEffectVO.createFromXML(__s10param0);
  };
  ConstructionItemVO.prototype.parseBoni = function (__s12param0) {
    this._boni = [];
    var __s12local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s12param0, "");
    if (__s12local0 != "") {
      for (var __s12local1 = 0, __s12local2 = __s12local0.split(","); __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3.length > 0) {
          var __s12local4 = __s12local3.split("&");
          var __s12local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s12local4[0]));
          var __s12local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s12local5, __s12local4[1]);
          this._boni.push(__s12local6);
        }
      }
    }
  };
  Object.defineProperty(ConstructionItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "groupId", {
    get: function () {
      return this._groupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "disassembleMaterials", {
    get: function () {
      return this._disassembleMaterials;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isPrimaryItem", {
    get: function () {
      return this._slotType == __dep_exact_26a421b704832cff.ConstructionItemConst.PRIMARY_SLOT_TYPE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isSecondaryItem", {
    get: function () {
      return this._slotType == __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isAppearanceItem", {
    get: function () {
      return this._slotType == __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "skin", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "effectGroupId", {
    get: function () {
      return this._effectGroupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "buildingIconClass", {
    get: function () {
      if (!this._applicableBuildings) {
        return null;
      }
      var __s42local0 = [];
      if (this._applicableBuildings != null) {
        for (var __s42local1 = 0, __s42local2 = this._applicableBuildings; __s42local1 < __s42local2.length; __s42local1++) {
          var __s42local3 = __s42local2[__s42local1];
          if (__s42local3 !== undefined) {
            var __s42local4 = __dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(__s42local3).buildingGroundIconClass;
            if (__s42local0.indexOf(__s42local4) == -1) {
              __s42local0.push(__dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(__s42local3).buildingGroundIconClass);
            }
            if (__s42local0.length > 1) {
              return null;
            }
          }
        }
      }
      return __s42local0[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "visClassName", {
    get: function () {
      return "ConstructionItem_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.name);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "effectText", {
    get: function () {
      var __s53local0 = this;
      var __s53local1 = "";
      this._effects.forEach(function (__s55param0) {
        if (__s53local1 != "") {
          __s53local1 += "\n";
        }
        __s53local1 += __dep_exact_92d05af59ee2ff30.Localize.text(__s55param0.constructionItemTextId, [__s55param0.value]) + (__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs ? "  || Type: " + __s55param0.type.name + " ||" : "");
      });
      this._boni.forEach(function (__s58param0) {
        if (__s53local1 != "") {
          __s53local1 += "\n";
        }
        var __s58local0 = "ci_effect_" + __s58param0.effect.getEnhancedName(__s58param0.effectValue);
        var __s58local1 = __s53local0.getEffectTextReplacements(__s58param0);
        __s53local1 += __dep_exact_92d05af59ee2ff30.Localize.text(__s58local0, __s58local1) + (__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs ? "  || TypeID: " + __s58param0.effect.effectTypeID + " ||" : "");
      });
      if (__s53local1 == "") {
        return __dep_exact_92d05af59ee2ff30.Localize.text("ci_effect_NA");
      } else {
        return __s53local1;
      }
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.getEffectTextReplacements = function (__s63param0) {
    if (__s63param0.effect.effectType.type != __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS) {
      return __s63param0.effectValue.textReplacements;
    }
    var __s63local0 = [];
    for (var __s63local1 = 0, __s63local2 = __s63param0.effectValue.rawValues; __s63local1 < __s63local2.length; __s63local1++) {
      var __s63local3 = __s63local2[__s63local1];
      var __s63local4 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s63local3);
      if (__s63local4) {
        __s63local0.push(__dep_exact_92d05af59ee2ff30.Localize.text(__s63local4.getNameString()));
      }
    }
    return [__s63local0.join(", ")];
  };
  Object.defineProperty(ConstructionItemVO.prototype, "removalCostC1", {
    get: function () {
      return this._removalCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "rarityColor", {
    get: function () {
      var __s71local0 = 0;
      switch (this.rarity) {
        case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_COMMON:
          __s71local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_COMMON;
          break;
        case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_RARE:
          __s71local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_RARE;
          break;
        case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_EPIC:
          __s71local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_EPIC;
          break;
        case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY:
          __s71local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_LEGENDARY;
          break;
        case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_UNIQUE:
          __s71local0 = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      }
      return __s71local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "slotNameTextId", {
    get: function () {
      return __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getSlotNameTextId(this.slotType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "rarityTextId", {
    get: function () {
      return ConstructionItemVO.rarityText(this.rarity);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.rarityText = function (__s78param0) {
    var __s78local0 = "equipment_rarity_";
    switch (__s78param0) {
      case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_COMMON:
        return __s78local0 + "common";
      case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_RARE:
        return __s78local0 + "rare";
      case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_EPIC:
        return __s78local0 + "epic";
      case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY:
        return __s78local0 + "legendary";
      case __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_UNIQUE:
        return __s78local0 + "unique";
    }
    return "";
  };
  Object.defineProperty(ConstructionItemVO.prototype, "skinnedBuildingVO", {
    get: function () {
      if (!this.isAppearanceItem || !this._applicableBuildings || this._applicableBuildings.length < 1) {
        return null;
      }
      var __s81local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this._applicableBuildings[0].wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
      __s81local0.appearanceItem = this;
      return __s81local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "applicableBuildingsString", {
    get: function () {
      if (!this._applicableBuildings) {
        return "";
      }
      var __s84local0 = [];
      if (this._applicableBuildings != null) {
        for (var __s84local1 = 0, __s84local2 = this._applicableBuildings; __s84local1 < __s84local2.length; __s84local1++) {
          var __s84local3 = __s84local2[__s84local1];
          if (__s84local3 !== undefined) {
            var __s84local4 = __dep_exact_92d05af59ee2ff30.Localize.text(__s84local3.getNameString());
            if (__s84local0.indexOf(__s84local4) == -1) {
              __s84local0.push(__s84local4);
            }
          }
        }
      }
      return __s84local0.join(", ");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "nameTextId", {
    get: function () {
      return __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getBaseNameTextId(this.slotType) + "_" + this.name + (this.isPremium ? "_premium" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "flavourTextId", {
    get: function () {
      if (this.rarity == __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_UNIQUE || this.isAppearanceItem) {
        if (__dep_exact_92d05af59ee2ff30.Localize.text(this.nameTextId + "_flavour") != this.nameTextId + "_flavour" && __dep_exact_92d05af59ee2ff30.Localize.text(this.nameTextId + "_flavour") != "") {
          return this.nameTextId + "_flavour";
        } else {
          return this.nameTextId + "_flavor";
        }
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "descriptionTextId", {
    get: function () {
      switch (this.slotType) {
        case __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE:
          if (this.isTemporary) {
            return "ci_short_info_temporaryAppearance";
          } else {
            return "ci_short_info_appearance";
          }
        case __dep_exact_26a421b704832cff.ConstructionItemConst.PRIMARY_SLOT_TYPE:
          return "ci_short_info_primary";
        case __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE:
          return "ci_short_info_secondary";
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "applicableBuildings", {
    get: function () {
      return this._applicableBuildings;
    },
    set: function (__s107param0) {
      this._applicableBuildings = __s107param0;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.compareTo = function (__s109param0) {
    if (this.rarity != __s109param0.rarity) {
      if (this.rarity == __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_UNIQUE || this.rarity > __s109param0.rarity && __s109param0.rarity != __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_UNIQUE) {
        return -1;
      } else {
        return 1;
      }
    }
    if (this.level != __s109param0.level) {
      return __s109param0.level - this.level;
    }
    if (this._applicableBuildings && __s109param0._applicableBuildings && this._applicableBuildings.length > 0 && __s109param0._applicableBuildings.length > 0) {
      var __s109local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this._applicableBuildings[0].getNameString());
      var __s109local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__s109param0._applicableBuildings[0].getNameString());
      if (__s109local0 < __s109local1) {
        return -1;
      }
      if (__s109local0 > __s109local1) {
        return 1;
      }
    }
    if (this.id != __s109param0.id) {
      return this.id - __s109param0.id;
    } else {
      return 0;
    }
  };
  Object.defineProperty(ConstructionItemVO.prototype, "upgradeRecipe", {
    get: function () {
      var __s120local0 = __dep_export_CastleModel.CastleModel.constructionItemData.getNextLevelItem(this);
      if (__s120local0) {
        return __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.findRecipeFor(__s120local0);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "areaLimit", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.constructionItemData.getLimitByEffectGroup(this.effectGroupId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isRemovalLocked", {
    get: function () {
      return !!this._lockRemoval && (this._lockRemoval == ConstructionItemVO.RECRUIT_LOCKED && __dep_export_RecruitmentHelper.RecruitmentHelper.isRecruitingUnits() || this._lockRemoval == ConstructionItemVO.TOOL_PRODUCTION_LOCKED && __dep_export_RecruitmentHelper.RecruitmentHelper.isProducingTools());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isPremium", {
    get: function () {
      return this._isPremium;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isTemporary", {
    get: function () {
      return this._duration > 0;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.clone = function () {
    var __s134local0 = new ConstructionItemVO();
    __s134local0.fillFromOther(this);
    return __s134local0;
  };
  ConstructionItemVO.prototype.fillFromOther = function (__s136param0) {
    this._id = __s136param0._id;
    this._groupId = __s136param0._groupId;
    this._effectGroupId = __s136param0._effectGroupId;
    this._level = __s136param0._level;
    this._rarity = __s136param0._rarity;
    this._slotType = __s136param0._slotType;
    this._removalCostC1 = __s136param0._slotType;
    this._name = __s136param0._name;
    this._lockRemoval = __s136param0._lockRemoval;
    this._isPremium = __s136param0._isPremium;
    this._duration = __s136param0._duration;
    this._disassembleMaterials = __s136param0._disassembleMaterials;
    this._effects = __s136param0._effects;
    this._boni = __s136param0._boni;
    this._applicableBuildings = __s136param0._applicableBuildings;
  };
  ConstructionItemVO.prototype.getRemainingTime = function () {
    if (this.isExpiring()) {
      return Math.max(this._expirationTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer(), 0) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    } else {
      return this._duration;
    }
  };
  ConstructionItemVO.prototype.isExpiring = function () {
    return this._expirationTimestamp > 0;
  };
  Object.defineProperty(ConstructionItemVO.prototype, "disassemblingTombolaID", {
    get: function () {
      return this._disassemblingTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.setRemainingTime = function (__s146param0) {
    this._expirationTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s146param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  Object.defineProperty(ConstructionItemVO.prototype, "effectsAmount", {
    get: function () {
      var __s148local0 = 0;
      if (this._effects) {
        __s148local0 += this._effects.length;
      }
      if (this._boni) {
        __s148local0 += this._boni.length;
      }
      return Math.max(1, __s148local0);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.getBluePrintEffectName = function (__s152param0) {
    if (__s152param0 < this._effects.length) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this._effects[__s152param0].constructionItemTextId + "_tt");
    }
    if (__s152param0 < this.effectsAmount) {
      var __s152local0 = this._boni[__s152param0 - this._effects.length];
      return __dep_exact_92d05af59ee2ff30.Localize.text("ci_effect_" + __s152local0.effect.getEnhancedName(__s152local0.effectValue) + "_tt");
    }
    return "";
  };
  ConstructionItemVO.prototype.getBlueprintEffectValueText = function (__s156param0) {
    if (__s156param0 < this._effects.length) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this._effects[__s156param0].type.valueTextID, [this._effects[__s156param0].value]);
    }
    if (__s156param0 < this.effectsAmount) {
      var __s156local0 = this._boni[__s156param0 - this._effects.length];
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s156local0.effect.effectType.type.simpleValueTextID, __s156local0.effectValue.textReplacements);
    }
    return "";
  };
  Object.defineProperty(ConstructionItemVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.RECRUIT_LOCKED = "SOLDIER_RECRUITMENT";
  ConstructionItemVO.TOOL_PRODUCTION_LOCKED = "TOOL_PRODUCTION";
  return ConstructionItemVO;
}();
exports.ConstructionItemVO = __s0local0;
