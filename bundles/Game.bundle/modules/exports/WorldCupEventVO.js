Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function WorldCupEventVO() {
    var __s3local0 = this;
    __s3local0._matchDate = 0;
    __s3local0._teamA = 0;
    __s3local0._teamB = 0;
    __s3local0._paymentC2 = 0;
    __s3local0._bonusC2 = 0;
    __s3local0._voted = 0;
    __s3local0._currencyC2 = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._teamA = -1;
    __s3local0._teamB = -1;
    __s3local0._paymentC2 = -1;
    __s3local0._bonusC2 = -1;
    __s3local0._voted = -1;
    __s3local0._currencyC2 = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldCupEventVO, __s1param0);
  WorldCupEventVO.prototype.parseParamObject = function (__s5param0) {
    this._teamA = __dep_exact_f855840627e6e145.int(__s5param0.TA);
    this._teamB = __dep_exact_f855840627e6e145.int(__s5param0.TB);
    this._paymentC2 = __dep_exact_f855840627e6e145.int(__s5param0.PC2);
    this._bonusC2 = __dep_exact_f855840627e6e145.int(__s5param0.BC2);
    this._voted = __dep_exact_f855840627e6e145.int(__s5param0.V);
    this._currencyC2 = __dep_exact_f855840627e6e145.int(__s5param0.CC2);
  };
  WorldCupEventVO.prototype.parse_VWC = function (__s7param0) {
    this._voted = __dep_exact_f855840627e6e145.int(__s7param0.V);
    this._currencyC2 = __dep_exact_f855840627e6e145.int(__s7param0.CC2);
    __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(WorldCupEventVO.VALUES_UPDATED, this));
  };
  Object.defineProperty(WorldCupEventVO.prototype, "teamA", {
    get: function () {
      return this._teamA;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "teamB", {
    get: function () {
      return this._teamB;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "paymentC2", {
    get: function () {
      return this._paymentC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "bonusC2", {
    get: function () {
      return this._bonusC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "voted", {
    get: function () {
      return this._voted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "currencyC2", {
    get: function () {
      return this._currencyC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldCupEventVO.prototype, "bonusRubies", {
    get: function () {
      return this._paymentC2 * this._bonusC2 / 100;
    },
    enumerable: true,
    configurable: true
  });
  WorldCupEventVO.__initialize_static_members = function () {
    WorldCupEventVO.VALUES_UPDATED = "worldCupEventValuesUpdated";
    WorldCupEventVO.VOTE_VALUE_TEAM_DRAW = 0;
    WorldCupEventVO.VOTE_VALUE_TEAM_A = 1;
    WorldCupEventVO.VOTE_VALUE_TEAM_B = 2;
  };
  WorldCupEventVO.VOTE_VALUE_QUERY = -1;
  return WorldCupEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.WorldCupEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
