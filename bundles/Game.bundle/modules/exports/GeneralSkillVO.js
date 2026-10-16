Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_EffectsHandlerVO = require("gge-module:export_EffectsHandlerVO");
var __dep_export_GeneralBonusVO = require("gge-module:export_GeneralBonusVO");
var __s0local0 = function (__s1param0) {
  function GeneralSkillVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSkillVO, __s1param0);
  GeneralSkillVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillID", __s5param0, "0"));
    this._followingSkillID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("followingSkillID", __s5param0, "0"));
    this._generalID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("generalID", __s5param0, "0"));
    this._tier = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tier", __s5param0, "0"));
    this._skillGroupID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillGroupID", __s5param0, "0"));
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "0"));
    this._totalCostSkillPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("totalCostSkillPoints", __s5param0, "0"));
    this._costSkillPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("costSkillPoints", __s5param0, "0"));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("name", __s5param0, "");
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s5param0, "");
    if (__s5local0 != "") {
      for (var __s5local1 = 0, __s5local2 = __s5local0.split(","); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3.length > 0) {
          var __s5local4 = __s5local3.split("&");
          var __s5local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s5local4[0]));
          var __s5local6 = new __dep_export_GeneralBonusVO.GeneralBonusVO().parseFromValueString(__s5local5, __s5local4[1]);
          this._boni.push(__s5local6);
        }
      }
    }
  };
  Object.defineProperty(GeneralSkillVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "skillGroupID", {
    get: function () {
      return this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "followingSkillID", {
    get: function () {
      return this._followingSkillID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "totalCostSkillPoints", {
    get: function () {
      return this._totalCostSkillPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "costSkillPoints", {
    get: function () {
      return this._costSkillPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "isMaxLevel", {
    get: function () {
      return this._followingSkillID == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "nextLevelSkill", {
    get: function () {
      if (this.followingSkillID) {
        return __dep_export_CastleModel.CastleModel.generalsData.getSkillById(this.followingSkillID);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "nameString", {
    get: function () {
      if (this.isAbilitySkill) {
        var __s33local0 = this.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
        return __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedTitleForAbility(__dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(__s33local0).abilityGroupID);
      }
      return "generals_skill_name_" + this._name;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillVO.prototype.getEffectText = function () {
    var __s36local0;
    for (var __s36local1 = 0, __s36local2 = this.boni; __s36local1 < __s36local2.length; __s36local1++) {
      var __s36local3 = __s36local2[__s36local1];
      __s36local0 = __s36local0 ? __s36local0 + "\n" : "";
      __s36local0 += __s36local3.descriptionText;
    }
    return __s36local0;
  };
  GeneralSkillVO.prototype.isImplemented = function () {
    if (this.isAbilitySkill) {
      var __s40local0 = this.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      return !!__dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(__s40local0);
    }
    return true;
  };
  Object.defineProperty(GeneralSkillVO.prototype, "isAbilitySkill", {
    get: function () {
      return this.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "typeString", {
    get: function () {
      if (this.isAbilitySkill) {
        return "dialog_generals_skill_unlocksSkillWithSlotInfo_tooltip";
      } else {
        return "dialog_generals_skill_permanentSkill_tooltip";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "slotNumber", {
    get: function () {
      var __s49local0 = this.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      var __s49local1 = __dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(__s49local0);
      if (!__s49local1) {
        return -1;
      }
      var __s49local2 = __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(this.generalID);
      for (var __s49local3 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralSlotsByIDs(__s49local2.attackSlots), __s49local4 = 0; __s49local4 < __s49local3.length; __s49local4++) {
        if (__s49local3[__s49local4].abilityGroupIDs.indexOf(__s49local1.abilityGroupID) >= 0) {
          return __s49local4 + 1;
        }
      }
      __s49local3 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralSlotsByIDs(__s49local2.defenseSlots);
      __s49local4 = 0;
      for (; __s49local4 < __s49local3.length; __s49local4++) {
        if (__s49local3[__s49local4].abilityGroupIDs.indexOf(__s49local1.abilityGroupID) >= 0) {
          return __s49local4 + 1;
        }
      }
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "ignoreCap", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillVO;
}(__dep_export_EffectsHandlerVO.EffectsHandlerVO);
exports.GeneralSkillVO = __s0local0;
