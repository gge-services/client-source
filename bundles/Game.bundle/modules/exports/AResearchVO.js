Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function AResearchVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.researchID = 0;
    __s3local0.groupID = 0;
    __s3local0.level = 0;
    __s3local0.prerequisiteIDs = [];
    __s3local0._researchDuration = 0;
    __s3local0._tempServerResearchDuration = 0;
    __s3local0._minResearchTowerLevel = 1;
    __s3local0._requiredLevel = 0;
    __s3local0._requiredLegendLevel = 0;
    __s3local0.onlyWithResearchExpert = false;
    __s3local0._isComplete = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResearchVO, __s1param0);
  AResearchVO.prototype.fillFromParamXML = function (__s5param0) {
    this.researchID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("researchID", __s5param0, "-1", true));
    this.groupID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("groupID", __s5param0, "-1", true));
    this.level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "-1", true));
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("prerequisiteIDs", __s5param0, "");
    var __s5local1 = __s5local0 == "" ? [] : __s5local0.split(",");
    this.prerequisiteIDs = [];
    for (var __s5local2 = 0; __s5local2 < __s5local1.length; __s5local2++) {
      var __s5local3 = parseInt(__s5local1[__s5local2]);
      if (__s5local3 > 0) {
        this.prerequisiteIDs.push(__s5local3);
      }
    }
    this._minResearchTowerLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minResearchTowerLevel", __s5param0, "1"));
    this._requiredLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredLevel", __s5param0, "0"));
    this._requiredLegendLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredLegendLevel", __s5param0, "0"));
    this._researchDuration = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("researchDuration", __s5param0, "0", true));
    this._tempServerResearchDuration = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("globalServerResearchDuration", __s5param0, "0", true));
    this._costs = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
    this._tempServerCosts = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, "globalServerCost");
    this.onlyWithResearchExpert = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("onlyWithResearchExpert", __s5param0, "0")) == 1;
    var __s5local4 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s5param0, "");
    if (__s5local4 != "") {
      for (var __s5local5 = 0, __s5local6 = __s5local4.split(","); __s5local5 < __s5local6.length; __s5local5++) {
        var __s5local7 = __s5local6[__s5local5];
        if (__s5local7.length > 0) {
          var __s5local8 = __s5local7.split("&");
          var __s5local9 = parseInt(__s5local8[0]);
          var __s5local10 = __s5local8[1] || "";
          var __s5local11 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s5local9);
          var __s5local12 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s5local11, __s5local10);
          this._boni.push(__s5local12);
        }
      }
    }
  };
  AResearchVO.prototype.setupPrerequisites = function (__s14param0) {
    this._prerequisites = [];
    if (this.prerequisiteIDs != null) {
      for (var __s14local0 = 0, __s14local1 = this.prerequisiteIDs; __s14local0 < __s14local1.length; __s14local0++) {
        var __s14local2 = __s14local1[__s14local0];
        if (__s14local2 !== undefined) {
          var __s14local3 = __s14param0.get(__s14local2);
          this._prerequisites.push(__s14local3);
          this.groupVO.addPrerequisite(__s14local3.groupVO);
          if (!__s14local3._nextResearch || __s14local3._nextResearch.researchID < this.researchID) {
            __s14local3._nextResearch = this;
          }
        }
      }
    }
  };
  Object.defineProperty(AResearchVO.prototype, "baseResearchDuration", {
    get: function () {
      if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
        return this._tempServerResearchDuration;
      } else {
        return this._researchDuration;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "researchDuration", {
    get: function () {
      var __s25local0 = __dep_export_CastleModel.CastleModel.researchData.researchBoost + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST).strength;
      __s25local0 += __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST);
      __s25local0 += __dep_export_CastleModel.CastleModel.lordData.getTotalBaronEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST);
      return __dep_exact_f855840627e6e145.int(this.baseResearchDuration / (1 + __s25local0 / 100)) + __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BONUS).strength);
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.getBaseCosts = function () {
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      return this._tempServerCosts;
    } else {
      return this._costs;
    }
  };
  AResearchVO.prototype.getFinalCosts = function () {
    var __s31local0 = this.getBaseCosts().clone();
    __s31local0.combineDuplicatedItems();
    var __s31local1 = __dep_exact_81dacdf05bd32292.castAs(__s31local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C1), "CollectableItemC1VO");
    if (__s31local1) {
      __s31local1.amount = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__s31local1.amount);
    }
    var __s31local2 = __dep_exact_81dacdf05bd32292.castAs(__s31local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C2), "CollectableItemC2VO");
    if (__s31local2) {
      __s31local2.amount = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__s31local2.amount);
    }
    var __s31local3 = 0;
    for (__s31local3 = 0; __s31local3 < __s31local0.list.length; __s31local3++) {
      if (__dep_exact_81dacdf05bd32292.castAs(this._costs.list[__s31local3], "ACollectableItemResourceVO")) {
        __s31local0.list[__s31local3].amount *= 1 - __dep_export_CastleModel.CastleModel.userData.getGlobalConstructionItemEffectByType(__dep_export_CastleEffectEnum.CastleEffectEnum.REDUCERESEARCHRESOURCECOSTS) / 100;
      }
      if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s31local0.getItemByIndex(__s31local3), "CollectableItemC2VO")) {
        __s31local0.getItemByIndex(__s31local3).isSubscriptionBuffed = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_COST_BONUS);
      }
      if (__s31local0.getItemByIndex(__s31local3).isSubscriptionBuffed) {
        __s31local0.getItemByIndex(__s31local3).amount *= 1 + __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_COST_BONUS) / 100;
        __s31local0.getItemByIndex(__s31local3).useSubscriptionStar = true;
      }
    }
    return __s31local0;
  };
  Object.defineProperty(AResearchVO.prototype, "minResearchTowerLevel", {
    get: function () {
      return this._minResearchTowerLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "isLocked", {
    get: function () {
      if (this._minResearchTowerLevel > __dep_export_CastleModel.CastleModel.researchData.researchTowerLevel) {
        return true;
      }
      if (this._prerequisites != null) {
        for (var __s42local0 = 0, __s42local1 = this._prerequisites; __s42local0 < __s42local1.length; __s42local0++) {
          var __s42local2 = __s42local1[__s42local0];
          if (__s42local2 !== undefined && !__s42local2.isComplete) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "isComplete", {
    get: function () {
      return this._isComplete;
    },
    set: function (__s51param0) {
      this._isComplete = __s51param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "isResearchable", {
    get: function () {
      return !this.isComplete && !this.isLocked && !this.isLockedByLevel();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "groupVO", {
    get: function () {
      return this._groupVO;
    },
    set: function (__s57param0) {
      this._groupVO = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "totalEffectiveBonus", {
    get: function () {
      return this._groupVO.getValueOnLevel(this.level);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "prerequisites", {
    get: function () {
      return this._prerequisites;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "nextResearch", {
    get: function () {
      return this._nextResearch;
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.isBlockedBy = function (__s65param0) {
    if (this.prerequisites != null) {
      for (var __s65local0 = 0, __s65local1 = this.prerequisites; __s65local0 < __s65local1.length; __s65local0++) {
        var __s65local2 = __s65local1[__s65local0];
        if (__s65local2 !== undefined && !__s65local2.isComplete && __s65local2.groupID == __s65param0.id) {
          return true;
        }
      }
    }
    return false;
  };
  AResearchVO.prototype.getBonusText = function (__s71param0) {
    return "";
  };
  Object.defineProperty(AResearchVO.prototype, "effectText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "descriptionTextReplacements", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "nameTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "fullNameText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.icon = function () {
    return null;
  };
  Object.defineProperty(AResearchVO.prototype, "showEffectValue", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "showInfoBtn", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.onMouseOverResearchIcon = function (__s89param0) {};
  AResearchVO.prototype.onMouseOutResearchIcon = function () {};
  AResearchVO.prototype.isEmptyResearch = function () {
    return this.boni.length == 0 && !this.hasEffects();
  };
  Object.defineProperty(AResearchVO.prototype, "requiredLegendLevel", {
    get: function () {
      return this._requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "requiredLevel", {
    get: function () {
      return this._requiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.isLockedByLevel = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel < this.requiredLevel || __dep_export_CastleModel.CastleModel.userData.userLegendLevel < this.requiredLegendLevel;
  };
  return AResearchVO;
}(require("gge-module:export_EffectsHandlerVO").EffectsHandlerVO);
exports.AResearchVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
