Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BasicMapmovementVO = require("gge-module:export_BasicMapmovementVO");
var __s0local0 = function (__s1param0) {
  function MarketMapmovementVO() {
    var __s3local0 = this;
    __s3local0._carriages = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = MarketMapmovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MarketMapmovementVO, __s1param0);
  MarketMapmovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    if (__s5param0.MM) {
      this.parse_MM(__s5param0.MM);
    }
  };
  MarketMapmovementVO.prototype.parse_MM = function (__s8param0) {
    this._carriages = __dep_exact_f855840627e6e145.int(__s8param0.C);
    if (__s8param0.G) {
      this._lootList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s8param0.G);
    }
  };
  Object.defineProperty(MarketMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return this._movementOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID && !this.isReturnHome;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MarketMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return false;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MarketMapmovementVO.prototype, "lootList", {
    get: function () {
      return this._lootList;
    },
    enumerable: true,
    configurable: true
  });
  MarketMapmovementVO.prototype.isSubscriptionBuffed = function () {
    return this.targetOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID && this.sourceOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID && __dep_export_CastleModel.CastleModel.userData.allianceID > 0 && this.targetOwnerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID && __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, this.targetArea.areaType, this.targetArea.kingdomID) > 0;
  };
  MarketMapmovementVO.__initialize_static_members = function () {
    MarketMapmovementVO.NAME = "Market";
  };
  return MarketMapmovementVO;
}(__dep_export_BasicMapmovementVO.BasicMapmovementVO);
exports.MarketMapmovementVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO");
__s0local0.__initialize_static_members();
