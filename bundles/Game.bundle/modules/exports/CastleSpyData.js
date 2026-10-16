Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetSpyLog = require("gge-module:export_C2SGetSpyLog");
var __dep_export_CastleSpyDataEvent = require("gge-module:export_CastleSpyDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSpyData() {
    var __s3local0 = this;
    __s3local0._maxSpies = 0;
    __s3local0._bonusSpies = 0;
    __s3local0._availablePlagueMonks = 0;
    __s3local0._totalPlagueMonks = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyData, __s1param0);
  CastleSpyData.prototype.parse_SSI = function (__s5param0) {
    var __s5local0;
    if (__s5param0) {
      this._startSpyVO = new __dep_export_CastleStartSpyVO.CastleStartSpyVO();
      this._startSpyVO.guardCount = __dep_exact_f855840627e6e145.int(__s5param0.GC);
      this._startSpyVO.availableSpies = __dep_exact_f855840627e6e145.int(__s5param0.AS);
      this._startSpyVO.availablePlagueMonks = __dep_exact_f855840627e6e145.int(__s5param0.APM);
      this._startSpyVO.totalPlagueMonks = __dep_exact_f855840627e6e145.int(__s5param0.TPM);
      __dep_export_CastleModel.CastleModel.userData.parse_UAP(__s5param0.gaa.uap);
      __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfoArray(__s5param0.gaa.OI);
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.parseAreaInfos(__s5param0.gaa.AI);
      }
      __s5local0 = __s5param0.TX && __s5param0.TY ? [this._startSpyVO, new __s0local0(__s5param0.TX, __s5param0.TY)] : [this._startSpyVO];
      this.controller.dispatchEvent(new __dep_export_CastleSpyDataEvent.CastleSpyDataEvent(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, __s5local0));
    }
  };
  CastleSpyData.prototype.getSpyLog = function (__s9param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyLog.C2SGetSpyLog(__s9param0));
  };
  CastleSpyData.prototype.parseSpyLog = function (__s11param0) {
    if (__s11param0) {
      var __s11local0 = new __dep_export_CastleSpyLogVO.CastleSpyLogVO();
      __s11local0.parseSpyLog(__s11param0);
      this.controller.dispatchEvent(new __dep_export_CastleSpyDataEvent.CastleSpyDataEvent(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.NEW_SPY_LOG, [__s11local0]));
    }
  };
  CastleSpyData.prototype.parse_CPI = function (__s14param0) {
    if (__s14param0) {
      this._availablePlagueMonks = __dep_exact_f855840627e6e145.int(__s14param0.APM);
      this._totalPlagueMonks = __dep_exact_f855840627e6e145.int(__s14param0.TPM);
      this.dispatchEvent(new __dep_export_CastleSpyDataEvent.CastleSpyDataEvent(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE));
    }
  };
  Object.defineProperty(CastleSpyData.prototype, "availablePlagueMonks", {
    get: function () {
      return this._availablePlagueMonks;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyData.prototype.getNumAvailableSpies = function (__s19param0 = false) {
    var __s19local0 = 0;
    for (var __s19local1 = 0, __s19local2 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s19local1 < __s19local2.length; __s19local1++) {
      var __s19local3 = __s19local2[__s19local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s19local3, "SpyMapmovementVO") && __s19local3.isMyMovement) {
        __s19local0 += __dep_exact_f855840627e6e145.int(__s19local3.spyCount);
      }
    }
    return __dep_exact_f855840627e6e145.int(this.getNumAllSpies(__s19param0) - __s19local0);
  };
  CastleSpyData.prototype.getNumAllSpies = function (__s24param0 = false) {
    var __s24local0 = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST).strength;
    var __s24local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AMOUNT_SPIES_BOOST).strength);
    var __s24local2 = __dep_exact_f855840627e6e145.int(__s24param0 ? __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.SPY_AMOUNT_BONUS) : 0);
    return __dep_exact_f855840627e6e145.int((this._maxSpies + __s24local1 + __s24local2) * (1 + __s24local0 / 100));
  };
  CastleSpyData.prototype.parse_GMS = function (__s26param0) {
    if (__s26param0) {
      this._maxSpies = __dep_exact_f855840627e6e145.int(__s26param0.MS);
      this._bonusSpies = __dep_exact_f855840627e6e145.int(__s26param0.BS);
    }
  };
  Object.defineProperty(CastleSpyData.prototype, "totalPlagueMonks", {
    get: function () {
      return this._totalPlagueMonks;
    },
    set: function (__s31param0) {
      this._totalPlagueMonks = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyData.prototype, "bonusSpies", {
    get: function () {
      return this._bonusSpies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyData.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleSpyData = __s0local1;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CastleSpyLogVO = require("gge-module:export_CastleSpyLogVO");
var __dep_export_CastleStartSpyVO = require("gge-module:export_CastleStartSpyVO");
