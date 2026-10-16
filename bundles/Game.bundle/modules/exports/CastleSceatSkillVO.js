Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SBuySceatSkillVO = require("gge-module:export_C2SBuySceatSkillVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CastleSceatSkillVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._activeActivationTimestamp = -1;
    __s3local0._sortOrder = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSceatSkillVO, __s1param0);
  CastleSceatSkillVO.prototype.parseXML = function (__s5param0) {
    __s1param0.prototype.parseXML.call(this, __s5param0);
    this._costList = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, "cost");
    this._cost = this._costList.list[0].amount;
    this._activationTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("activationTime", __s5param0, "0"));
    this._sortOrder = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s5param0, "0"));
    this.parseBoni(__s5param0);
  };
  CastleSceatSkillVO.prototype.parseBoni = function (__s7param0) {
    this._boni = [];
    var __s7local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effect", __s7param0, "") || __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s7param0, "");
    if (__s7local0 != "") {
      for (var __s7local1 = 0, __s7local2 = __s7local0.split(","); __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3.length > 0) {
          var __s7local4 = __s7local3.split("&");
          var __s7local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s7local4[0]));
          var __s7local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s7local5, __s7local4[1]);
          this._boni.push(__s7local6);
        }
      }
    }
  };
  CastleSceatSkillVO.prototype.getEffectValueByType = function (__s13param0, __s13param1 = -1, __s13param2 = -1, __s13param3 = -1, __s13param4 = null) {
    var __s13local0 = new __s13param0.valueClass();
    if (this._boni != null) {
      for (var __s13local1 = 0, __s13local2 = this._boni; __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined && __s13local3.matchesConditions(__s13param0, __s13param1, __s13param2, __s13param3, __s13param4)) {
          __s13local0.add(__s13local3.effectValue, null);
        }
      }
    }
    return __s13local0;
  };
  CastleSceatSkillVO.prototype.getUnlockLevel = function () {
    var __s19local0 = -1;
    var __s19local1 = this.getCurrentEffectValue;
    var __s19local2 = this.boni[0].effect.effectType.type;
    if (__s19local1) {
      var __s19local3 = this.getCurrentEffectValue.strength;
      if (__s19local2 == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS) {
        var __s19local4 = undefined;
        var __s19local5 = undefined;
        for (var __s19local6 = 0, __s19local7 = this.boni; __s19local6 < __s19local7.length; __s19local6++) {
          var __s19local8 = __s19local7[__s19local6].effectValue;
          var __s19local9 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s19local8.strength);
          __s19local5 ||= __s19local9;
          if (__s19local9 && __s19local9.sceatSkillLocked == this.id) {
            __s19local4 = __s19local9;
          }
        }
        __s19local0 = __s19local4 ? __s19local4.level : __s19local5 ? __s19local5.level : -1;
      } else {
        var __s19local10 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s19local3);
        __s19local0 = __s19local10 ? __s19local10.level : -1;
      }
    }
    return __s19local0;
  };
  Object.defineProperty(CastleSceatSkillVO.prototype, "getCurrentEffectValue", {
    get: function () {
      return this._boni[0].effectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "getCurrentEffectTypeId", {
    get: function () {
      return this._boni[0].effect.effectTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "hasBuildingEffect", {
    get: function () {
      return this.getCurrentEffectTypeId == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "hasUnitEffect", {
    get: function () {
      return this.getCurrentEffectTypeId == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_legendTemple_sceat_" + this._skillGroupID + "_name";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_legendTemple_sceat_" + this._skillGroupID + "_desc";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "shortDescriptionTextID", {
    get: function () {
      return "dialog_legendTemple_sceat_" + this._skillGroupID + "_desc_short";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "costTextID", {
    get: function () {
      switch (this.costCurrencyID) {
        case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN:
          return "dialog_legendTemple_sceatCosts";
        case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT:
          return "dialog_legendTemple_imperialDucatCosts";
      }
      return "dialog_legendTemple_sceatCosts";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "costCurrencyID", {
    get: function () {
      var __s44local0 = this._costList.list[0];
      if (__s44local0 instanceof __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO) {
        return __s44local0.xmlCurrencyVO.id;
      } else {
        return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "previewText", {
    get: function () {
      var __s48local0 = this.boni.some(function (__s50param0) {
        return __s50param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
      });
      if (this.boni.some(function (__s52param0) {
        return __s52param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS;
      })) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_sceat_preview_buildings");
      }
      if (__s48local0) {
        var __s48local1 = this.boni.find(function (__s56param0) {
          return __s56param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
        }).effectValue.strength;
        var __s48local2 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s48local1);
        if (__s48local2) {
          if (__s48local2 instanceof __dep_export_ToolUnitVO.ToolUnitVO) {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_sceat_preview_tools");
          } else {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_sceat_preview_units");
          }
        }
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleSceatSkillVO.prototype.createSkillIcon = function () {
    if (this.isPreview) {
      var __s61local0 = this.boni.some(function (__s64param0) {
        return __s64param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
      });
      var __s61local1 = "";
      if (this.boni.some(function (__s66param0) {
        return __s66param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS;
      })) {
        __s61local1 = "Skill_UnlockBuilding";
      } else if (__s61local0) {
        var __s61local2 = this.boni.find(function (__s70param0) {
          return __s70param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
        }).effectValue.strength;
        var __s61local3 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s61local2);
        if (__s61local3) {
          __s61local1 = __s61local3 instanceof __dep_export_ToolUnitVO.ToolUnitVO ? "Skill_UnlockTool" : "Skill_UnlockUnit";
        }
      }
      var __s61local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s61local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s61local1), null, 0, false);
      __s61local4.recycleAsset = false;
      return __s61local4;
    }
    return __s1param0.prototype.createSkillIcon.call(this);
  };
  Object.defineProperty(CastleSceatSkillVO.prototype, "skillIconClassName", {
    get: function () {
      return "SceatSkill_" + this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "activationTime", {
    get: function () {
      return this._activationTime;
    },
    enumerable: true,
    configurable: true
  });
  CastleSceatSkillVO.prototype.setRemainingActivationTime = function (__s77param0) {
    this._activeActivationTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s77param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  CastleSceatSkillVO.prototype.getRemainingActivationTime = function () {
    return (this._activeActivationTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
  };
  CastleSceatSkillVO.prototype.buySkill = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuySceatSkillVO.C2SBuySceatSkillVO(this.id));
  };
  CastleSceatSkillVO.prototype.getSkipCosts = function () {
    return __dep_exact_26a421b704832cff.SceatSkillConst.getFastCompleteCostC2(this.getRemainingActivationTime(), __dep_export_CastleModel.CastleModel.userData.userLevel);
  };
  Object.defineProperty(CastleSceatSkillVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSceatSkillVO;
}(require("gge-module:export_CastleLegendSkillVO").CastleLegendSkillVO);
exports.CastleSceatSkillVO = __s0local0;
