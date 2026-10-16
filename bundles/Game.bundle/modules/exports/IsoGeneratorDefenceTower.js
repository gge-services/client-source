Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_IsoDefencePosition = require("gge-module:export_IsoDefencePosition");
var __dep_export_AIsoGeneratorDefenceComponent = require("gge-module:export_AIsoGeneratorDefenceComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoGeneratorDefenceTower() {
    var __s3local0 = this;
    __s3local0._collisionList = [];
    __s3local0._numberOfAddedTowers = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGeneratorDefenceTower, __s1param0);
  IsoGeneratorDefenceTower.prototype.execute = function () {
    var __s5local0;
    this._collisionList.length = 0;
    this._collisionList.push(this.parentGenerator.result.gate);
    this._numberOfAddedTowers = 0;
    for (var __s5local1 = 0, __s5local2 = this.parentGenerator.result.outerCorners; __s5local1 < __s5local2.length; __s5local1++) {
      __s5local0 = __s5local2[__s5local1];
      if (this.numberOfAddedTowers < this.parentGenerator.numberOfOwningTowers) {
        this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getOuterTowerPosition), __s5local0);
      } else {
        this.addTowerPosition(this.parentGenerator.result.emptyTowers, this.bindFunction(this.getOuterTowerPosition), __s5local0);
      }
    }
    for (var __s5local3 = 0, __s5local4 = this.parentGenerator.result.innerCorners; __s5local3 < __s5local4.length; __s5local3++) {
      __s5local0 = __s5local4[__s5local3];
      if (this.numberOfAddedTowers < this.parentGenerator.numberOfOwningTowers) {
        this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getInnerTowerPosition), __s5local0);
      } else {
        this.addTowerPosition(this.parentGenerator.result.emptyTowers, this.bindFunction(this.getInnerTowerPosition), __s5local0);
      }
    }
    for (var __s5local5 = 0, __s5local6 = this.parentGenerator.result.groundCornerSides; __s5local5 < __s5local6.length && (__s5local0 = __s5local6[__s5local5], !(this.numberOfAddedTowers >= this.parentGenerator.numberOfOwningTowers)); __s5local5++) {
      this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getSideTowerPosition), __s5local0);
    }
    for (var __s5local7 = 0, __s5local8 = this.parentGenerator.result.sides; __s5local7 < __s5local8.length && (__s5local0 = __s5local8[__s5local7], !(this.numberOfAddedTowers >= this.parentGenerator.numberOfOwningTowers)); __s5local7++) {
      this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getSideTowerPosition), __s5local0);
    }
  };
  IsoGeneratorDefenceTower.prototype.cleanup = function () {
    this._collisionList.length = 0;
    this._numberOfAddedTowers = 0;
  };
  IsoGeneratorDefenceTower.prototype.addTowerPosition = function (__s21param0, __s21param1, __s21param2) {
    var __s21local0 = __s21param1(__s21param2);
    return !this.isCollidingWithAnyOtherPosition(this._collisionList, __s21local0) && (this._collisionList.push(__s21local0), __s21param0.push(__s21local0), this._numberOfAddedTowers++, true);
  };
  IsoGeneratorDefenceTower.prototype.getOuterTowerPosition = function (__s23param0) {
    var __s23local0;
    switch (__s23param0.rot) {
      case 0:
        __s23local0 = new __s0local0(__s23param0.pos.x + 1, __s23param0.pos.y + 1);
        break;
      case 1:
        __s23local0 = new __s0local0(__s23param0.pos.x - 2, __s23param0.pos.y + 1);
        break;
      case 2:
        __s23local0 = new __s0local0(__s23param0.pos.x + 1, __s23param0.pos.y - 2);
        break;
      case 3:
        __s23local0 = new __s0local0(__s23param0.pos.x - 2, __s23param0.pos.y - 2);
    }
    return new __dep_export_IsoDefencePosition.IsoDefencePosition(__s23local0, __s23param0.rot, IsoGeneratorDefenceTower.TOWER_DIMENSION);
  };
  IsoGeneratorDefenceTower.prototype.getInnerTowerPosition = function (__s26param0) {
    var __s26local0;
    switch (__s26param0.rot) {
      case 0:
        __s26local0 = new __s0local0(__s26param0.pos.x + 1, __s26param0.pos.y + 1);
        break;
      case 1:
        __s26local0 = new __s0local0(__s26param0.pos.x - 2, __s26param0.pos.y + 1);
        break;
      case 2:
        __s26local0 = new __s0local0(__s26param0.pos.x + 1, __s26param0.pos.y - 2);
        break;
      case 3:
        __s26local0 = new __s0local0(__s26param0.pos.x - 2, __s26param0.pos.y - 2);
    }
    return new __dep_export_IsoDefencePosition.IsoDefencePosition(__s26local0, __s26param0.rot, IsoGeneratorDefenceTower.TOWER_DIMENSION);
  };
  IsoGeneratorDefenceTower.prototype.getSideTowerPosition = function (__s29param0) {
    var __s29local0;
    switch (__s29param0.rot) {
      case 0:
        __s29local0 = new __s0local0(__s29param0.pos.x + 1, __s29param0.pos.y);
        break;
      case 1:
        __s29local0 = new __s0local0(__s29param0.pos.x, __s29param0.pos.y + 1);
        break;
      case 2:
        __s29local0 = new __s0local0(__s29param0.pos.x - 2, __s29param0.pos.y);
        break;
      case 3:
        __s29local0 = new __s0local0(__s29param0.pos.x, __s29param0.pos.y - 2);
    }
    return new __dep_export_IsoDefencePosition.IsoDefencePosition(__s29local0, __s29param0.rot, IsoGeneratorDefenceTower.TOWER_DIMENSION);
  };
  Object.defineProperty(IsoGeneratorDefenceTower.prototype, "numberOfAddedTowers", {
    get: function () {
      return this._numberOfAddedTowers;
    },
    enumerable: true,
    configurable: true
  });
  IsoGeneratorDefenceTower.__initialize_static_members = function () {
    IsoGeneratorDefenceTower.TOWER_DIMENSION = new __s0local0(2, 2);
  };
  return IsoGeneratorDefenceTower;
}(__dep_export_AIsoGeneratorDefenceComponent.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceTower = __s0local1;
__s0local1.__initialize_static_members();
