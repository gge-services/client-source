Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ResearchGroupVO() {
    this.id = 0;
    this.tabId = 0;
    this.researchTypeId = 0;
    this._advancement = -1;
    this.researches = [];
    this._prerequisites = [];
    this._prerequisitesPaths = new Map();
  }
  ResearchGroupVO.prototype.addResearch = function (__s5param0) {
    this.researches.push(__s5param0);
    __s5param0.groupVO = this;
    this.researches.sort(function (__s7param0, __s7param1) {
      return __s7param0.level - __s7param1.level;
    });
  };
  ResearchGroupVO.prototype.addPrerequisite = function (__s9param0) {
    if (__s9param0 != this) {
      if (this._prerequisites != null) {
        for (var __s9local0 = 0, __s9local1 = this._prerequisites; __s9local0 < __s9local1.length; __s9local0++) {
          var __s9local2 = __s9local1[__s9local0];
          if (__s9local2 !== undefined && __s9local2 == __s9param0) {
            return;
          }
        }
      }
      this._prerequisites.push(__s9param0);
    }
  };
  ResearchGroupVO.prototype.addPrerequisitePath = function (__s16param0, __s16param1) {
    if (__s16param0 && __s16param1) {
      this._prerequisitesPaths.set(__s16param0, __s16param1);
    }
  };
  Object.defineProperty(ResearchGroupVO.prototype, "isLocked", {
    get: function () {
      return this.topResearch.isLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "isFullyResearched", {
    get: function () {
      return this.lastResearch.isComplete;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "maxLevel", {
    get: function () {
      return this.researches.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "currentLevel", {
    get: function () {
      for (var __s25local0 = 0; __s25local0 < this.researches.length; __s25local0++) {
        if (!this.researches[__s25local0].isComplete) {
          return __s25local0;
        }
      }
      return this.maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "activeResearch", {
    get: function () {
      for (var __s30local0 = 0; __s30local0 < this.researches.length; __s30local0++) {
        var __s30local1 = this.researches[__s30local0];
        if (!__s30local1.isComplete) {
          return __s30local1;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.getResearchByLevel = function (__s35param0) {
    for (var __s35local0 = 0; __s35local0 < this.researches.length; __s35local0++) {
      if (this.researches[__s35local0].level == __s35param0) {
        return this.researches[__s35local0];
      }
    }
    return this.activeResearch;
  };
  Object.defineProperty(ResearchGroupVO.prototype, "lastResearch", {
    get: function () {
      return this.researches[this.researches.length - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "firstResearch", {
    get: function () {
      return this.researches[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "topResearch", {
    get: function () {
      return this.activeResearch || this.lastResearch;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.fillFromParamXML = function (__s46param0) {
    this.id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("groupID", __s46param0, "-1", true));
    this.researchTypeId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("researchTypeID", __s46param0, "0", false));
    this.tabId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tabID", __s46param0, "1", true)) - 1;
    this._x = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("x", __s46param0, "1", true));
    this._y = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("y", __s46param0, "1", true));
    this._predecessorX1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("predecessorX1", __s46param0, "1", true));
    this._predecessorY1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("predecessorY1", __s46param0, "1", true));
    this._categoryID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("categoryID", __s46param0, "0", false));
  };
  ResearchGroupVO.prototype.getValueOnLevel = function (__s48param0) {
    var __s48local0;
    for (var __s48local1 = 0; __s48local1 < this.researches.length && __s48local1 < __s48param0; __s48local1++) {
      var __s48local2 = this.researches[__s48local1].getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
      __s48local0 ||= new __s48local2.effect.effectType.valueClass();
      __s48local0.add(__s48local2.effectValue, null);
    }
    return __s48local0 || new __dep_export_EffectValueSimple.EffectValueSimple();
  };
  Object.defineProperty(ResearchGroupVO.prototype, "prerequisites", {
    get: function () {
      return this._prerequisites;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "prerequisitePaths", {
    get: function () {
      return this._prerequisitesPaths;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "isResearchable", {
    get: function () {
      return !this.isLocked && !this.isFullyResearched && !this.isEmptyGroup();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "advancement", {
    get: function () {
      if (this._advancement == -1) {
        var __s58local0 = -1;
        if (this._prerequisites != null) {
          for (var __s58local1 = 0, __s58local2 = this._prerequisites; __s58local1 < __s58local2.length; __s58local1++) {
            var __s58local3 = __s58local2[__s58local1];
            if (__s58local3 !== undefined && __s58local3.advancement > __s58local0) {
              __s58local0 = __s58local3.advancement;
            }
          }
        }
        this._advancement = __s58local0 + 1;
      }
      return this._advancement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "toolTip", {
    get: function () {
      var __s65local0 = this.topResearch;
      var __s65local1 = __s65local0.fullNameText;
      if (this.currentLevel > 0 && __s65local0.showEffectValue) {
        __s65local1 += "\n " + __s65local0.getBonusText(this.getValueOnLevel(this.currentLevel).textReplacements);
      }
      var __s65local2 = this.requirementsText;
      if (__s65local2) {
        __s65local1 += "\n" + __s65local2;
      }
      return __s65local1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "requirementsText", {
    get: function () {
      var __s69local0 = this.topResearch;
      var __s69local1 = [];
      if (this.isLocked) {
        if (__s69local0.minResearchTowerLevel > __dep_export_CastleModel.CastleModel.researchData.researchTowerLevel) {
          var __s69local2 = __dep_exact_92d05af59ee2ff30.Localize.text("researchtower_name");
          var __s69local3 = __dep_exact_92d05af59ee2ff30.Localize.text("building_with_level", [__s69local2, __s69local0.minResearchTowerLevel]);
          __s69local1.push(__s69local3);
        } else {
          for (var __s69local4 = 0; __s69local4 < __s69local0.prerequisites.length; __s69local4++) {
            __s69local1.push(__s69local0.prerequisites[__s69local4].fullNameText);
          }
        }
      }
      if (__s69local0.isLockedByLevel()) {
        if (__dep_export_CastleModel.CastleModel.userData.level < __s69local0.requiredLevel) {
          __s69local1.push(__dep_exact_92d05af59ee2ff30.Localize.text("level_placeholder", [__s69local0.requiredLevel]));
        } else {
          __s69local1.push(__dep_exact_92d05af59ee2ff30.Localize.text("legendaryLevel_placeholder", [__s69local0.requiredLegendLevel]));
        }
      }
      var __s69local5 = "";
      if (__s69local1.length > 0) {
        var __s69local6 = __dep_exact_f855840627e6e145.int(Math.min(__s69local1.length - 1, ResearchGroupVO.TEXT_IDS_TOOLTIP_PREREQUISITES.length - 1));
        var __s69local7 = ResearchGroupVO.TEXT_IDS_TOOLTIP_PREREQUISITES[__s69local6];
        __s69local5 = __dep_exact_92d05af59ee2ff30.Localize.text(__s69local7, __s69local1);
      }
      return __s69local5;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.icon = function () {
    return this.researches[0].icon();
  };
  Object.defineProperty(ResearchGroupVO.prototype, "predecessorX1", {
    get: function () {
      return this._predecessorX1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "predecessorY1", {
    get: function () {
      return this._predecessorY1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "x", {
    get: function () {
      return this._x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.isEmptyGroup = function () {
    return this.firstResearch.isEmptyResearch();
  };
  Object.defineProperty(ResearchGroupVO.prototype, "categoryID", {
    get: function () {
      return this._categoryID;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.__initialize_static_members = function () {
    ResearchGroupVO.RESEARCH_TYPE_CORE = 0;
    ResearchGroupVO.RESEARCH_TYPE_ECONOMY = 1;
    ResearchGroupVO.RESEARCH_TYPE_MILITARY = 2;
    ResearchGroupVO.TEXT_IDS_TOOLTIP_PREREQUISITES = ["research_need_one", "research_need_two", "research_need_three", "research_need_four"];
  };
  return ResearchGroupVO;
}();
exports.ResearchGroupVO = __s0local0;
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_EffectValueSimple = require("gge-module:export_EffectValueSimple");
__s0local0.__initialize_static_members();
