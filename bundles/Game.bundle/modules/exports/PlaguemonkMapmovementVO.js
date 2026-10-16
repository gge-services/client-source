Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicMapmovementVO = require("gge-module:export_BasicMapmovementVO");
var __s0local0 = function (__s1param0) {
  function PlaguemonkMapmovementVO() {
    var __s3local0 = this;
    __s3local0._plagueMonkCount = 0;
    __s3local0._plagueMonkRisk = 0;
    __s3local0._plagueDamage = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = PlaguemonkMapmovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlaguemonkMapmovementVO, __s1param0);
  PlaguemonkMapmovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.sourceArea, "PlagueareaMapobjectVO")) {
      this.sourceArea.kingdomID = this.kingdomID;
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetArea, "PlagueareaMapobjectVO")) {
      this.targetArea.kingdomID = this.kingdomID;
    }
    this.parsePlagueMonkInfo(__s5param0.P);
  };
  PlaguemonkMapmovementVO.prototype.parsePlagueMonkInfo = function (__s9param0) {
    this._plagueDamage = __dep_exact_f855840627e6e145.int(__s9param0.E);
    this._plagueMonkCount = __dep_exact_f855840627e6e145.int(__s9param0.C);
    this._plagueMonkRisk = __dep_exact_f855840627e6e145.int(__s9param0.R);
  };
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "plagueMonkCount", {
    get: function () {
      return this._plagueMonkCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "plagueMonkRisk", {
    get: function () {
      return this._plagueMonkRisk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return false;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "plagueDamage", {
    get: function () {
      return this._plagueDamage;
    },
    enumerable: true,
    configurable: true
  });
  PlaguemonkMapmovementVO.__initialize_static_members = function () {
    PlaguemonkMapmovementVO.NAME = "Plaguemonk";
  };
  return PlaguemonkMapmovementVO;
}(__dep_export_BasicMapmovementVO.BasicMapmovementVO);
exports.PlaguemonkMapmovementVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO");
__s0local0.__initialize_static_members();
