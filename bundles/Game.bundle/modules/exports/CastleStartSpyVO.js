Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleStartSpyVO() {
    this._guardCount = 0;
    this._availableSpies = 0;
    this._availablePlagueMonks = 0;
    this._totalPlagueMonks = 0;
    this._distance = 0;
    this._spiesInUse = 1;
    this._accuracy = 0;
    this._damage = 0;
    this._risk = 0;
    this._cost = 0;
    this._startCastleId = 0;
    this._spyType = 0;
  }
  CastleStartSpyVO.prototype.setSpyValues = function (__s5param0, __s5param1) {
    var __s5local0 = !__dep_exact_81dacdf05bd32292.instanceOfClass(this.worldmapObjectVO, "OutpostMapobjectVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(this._worldmapObjectVO, "OutpostMapobjectVO") && this._worldmapObjectVO.ownerInfo.playerID > 0;
    this._spiesInUse = __dep_exact_f855840627e6e145.int(Math.max(1, __s5param1));
    this._accuracy = __s5param0;
    this._risk = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.getSpyRisk(this._spiesInUse, this._guardCount, this._accuracy, this._worldmapObjectVO.ownerInfo.playerID < 0 && !__dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(this._worldmapObjectVO.ownerInfo.playerID), __s5local0));
    this._cost = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.getTravelCostC1(this._spiesInUse, this._distance, this._risk));
  };
  CastleStartSpyVO.prototype.setSabotageValues = function (__s7param0, __s7param1) {
    this._spiesInUse = __dep_exact_f855840627e6e145.int(Math.max(1, __s7param1));
    this._damage = __s7param0;
    this._risk = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.getSabotageRisk(this._spiesInUse, this._guardCount, this._damage));
    this._cost = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.getTravelCostC1(this._spiesInUse, this._distance, this._risk));
  };
  CastleStartSpyVO.prototype.setPlagueValues = function (__s9param0, __s9param1) {
    this._spiesInUse = __dep_exact_f855840627e6e145.int(Math.max(1, __s9param1));
    this._damage = __s9param0;
    this._risk = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.getSabotageRisk(this._spiesInUse, this._guardCount, this._damage));
    this._cost = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.getTravelCostC1(this._spiesInUse, this._distance, this._risk));
  };
  Object.defineProperty(CastleStartSpyVO.prototype, "distance", {
    get: function () {
      return this._distance;
    },
    set: function (__s13param0) {
      this._distance = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "guardCount", {
    get: function () {
      return this._guardCount;
    },
    set: function (__s17param0) {
      this._guardCount = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "availableSpies", {
    get: function () {
      return this._availableSpies;
    },
    set: function (__s21param0) {
      this._availableSpies = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "availablePlagueMonks", {
    get: function () {
      return this._availablePlagueMonks;
    },
    set: function (__s25param0) {
      this._availablePlagueMonks = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartSpyVO.prototype.getTravelTime = function (__s27param0, __s27param1) {
    var __s27local0 = 0;
    __s27local0 = __s27param0 == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE ? __dep_exact_26a421b704832cff.SpyConst.TRAVELSPEED_SABOTAGE : __dep_exact_26a421b704832cff.SpyConst.TRAVELSPEED_SPY;
    var __s27local1 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ESPIONAGE_SPEED_BOOST).strength / 100;
    __s27local1 += __dep_export_CastleModel.CastleModel.userData.getGlobalConstructionItemEffectByType(__dep_export_CastleEffectEnum.CastleEffectEnum.ESPIONAGESPEEDBOOST) / 100;
    __s27local1 += __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, -1, this.worldmapObjectVO.areaType, this.worldmapObjectVO.spaceID).strength / 100;
    __s27local1 += __dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.worldmapObjectVO.areaType, this.worldmapObjectVO.spaceID) / 100;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.TravelConst.getTravelTime(__s27local0, this._distance, __s27local1, 0, false));
  };
  Object.defineProperty(CastleStartSpyVO.prototype, "accuracy", {
    get: function () {
      return this._accuracy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "spiesInUse", {
    get: function () {
      return this._spiesInUse;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "risk", {
    get: function () {
      return this._risk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "cost", {
    get: function () {
      return this._cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "startCastleId", {
    get: function () {
      return this._startCastleId;
    },
    set: function (__s39param0) {
      this._startCastleId = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "worldmapObjectVO", {
    get: function () {
      return this._worldmapObjectVO;
    },
    set: function (__s43param0) {
      this._worldmapObjectVO = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "spyType", {
    get: function () {
      return this._spyType;
    },
    set: function (__s47param0) {
      this._spyType = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "damage", {
    get: function () {
      return this._damage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "totalPlagueMonks", {
    get: function () {
      return this._totalPlagueMonks;
    },
    set: function (__s53param0) {
      this._totalPlagueMonks = __s53param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStartSpyVO;
}();
exports.CastleStartSpyVO = __s0local0;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
