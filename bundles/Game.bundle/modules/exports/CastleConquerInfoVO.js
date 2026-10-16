Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleConquerInfoVO() {
    var __s3local0 = this;
    __s3local0._availableBarons = 0;
    __s3local0._maxBarons = 0;
    __s3local0.isCapital = false;
    __s3local0.isMetropol = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConquerInfoVO, __s1param0);
  CastleConquerInfoVO.prototype.fillFromParamObject = function (__s5param0) {
    __s1param0.prototype.fillFromParamObject.call(this, __s5param0);
    if (__s5param0.gaa.AI) {
      this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.gaa.AI);
    } else {
      this._targetArea = this.isCapital ? new __dep_export_CapitalMapobjectVO.CapitalMapobjectVO() : this.isMetropol ? new __dep_export_MetropolMapobjectVO.MetropolMapobjectVO() : new __dep_export_OutpostMapobjectVO.OutpostMapobjectVO();
      this._targetArea.parseAreaInfo(__s5param0.gaa.AI);
    }
    this._targetArea.keepLevel = Math.max(1, this._targetArea.keepLevel);
    this._targetArea.gateLevel = Math.max(1, this._targetArea.gateLevel);
    this._targetArea.wallLevel = Math.max(1, this._targetArea.wallLevel);
    this._targetArea.towerLevel = Math.max(1, this._targetArea.towerLevel);
    this._targetOwner = this._targetArea.controllerWorldMapOwnerInfoVO;
    if (!this.isCapital && !this.isMetropol) {
      this.parseBarons(__s5param0);
    }
    this._army.init(this.targetOwnerLevel, true, this._targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_TOWER || this._targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAPITAL, this._targetArea);
  };
  CastleConquerInfoVO.prototype.addAdditionalWave = function () {
    this._army.addAdditionalWave(this.targetOwnerLevel, true, this._targetArea);
  };
  CastleConquerInfoVO.prototype.deductLastWave = function () {
    this.unitInventory.addAll(this._army.getUnitVectorFromCompleteWave(this.army.getWaveCount() - 1));
    this._army.deductLastWave();
  };
  CastleConquerInfoVO.prototype.parseBarons = function (__s14param0) {
    this._availableBarons = __dep_exact_f855840627e6e145.int(__s14param0.AB);
    this._maxBarons = __dep_exact_f855840627e6e145.int(__s14param0.MB);
  };
  CastleConquerInfoVO.prototype.getLowestTravelSpeed = function (__s16param0 = false, __s16param1 = null) {
    var __s16local0 = 0;
    __s16local0 = this.isCapital ? __dep_exact_26a421b704832cff.TravelConst.CAPITAL_CONQUER_SPEED : this.isMetropol ? __dep_exact_26a421b704832cff.TravelConst.METROPOL_CONQUER_SPEED : __dep_exact_26a421b704832cff.TravelConst.BARON_SPEED;
    return __dep_exact_f855840627e6e145.int(Math.min(__s16local0, __s1param0.prototype.getLowestTravelSpeed.call(this, __s16param0, __s16param1)));
  };
  return CastleConquerInfoVO;
}(require("gge-module:export_CastleAttackInfoVO").CastleAttackInfoVO);
exports.CastleConquerInfoVO = __s0local0;
var __dep_export_CapitalMapobjectVO = require("gge-module:export_CapitalMapobjectVO");
var __dep_export_MetropolMapobjectVO = require("gge-module:export_MetropolMapobjectVO");
var __dep_export_OutpostMapobjectVO = require("gge-module:export_OutpostMapobjectVO");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightScreenVO");
