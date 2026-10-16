Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoDefencePosition = require("gge-module:export_IsoDefencePosition");
var __dep_export_AIsoGeneratorDefenceComponent = require("gge-module:export_AIsoGeneratorDefenceComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoGeneratorDefenceMoat() {
    var __s3local0 = this;
    __s3local0._collisionList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGeneratorDefenceMoat, __s1param0);
  IsoGeneratorDefenceMoat.prototype.execute = function () {
    var __s5local0;
    this._collisionList.length = 0;
    for (var __s5local1 = 0, __s5local2 = this.parentGenerator.result.outerCorners; __s5local1 < __s5local2.length; __s5local1++) {
      __s5local0 = __s5local2[__s5local1];
      this.addPossiblePositionToList(this.parentGenerator.result.moat.outerCorners, this.getOuterCornerPosition(__s5local0), false);
    }
    for (var __s5local3 = 0, __s5local4 = this.parentGenerator.result.innerCorners; __s5local3 < __s5local4.length; __s5local3++) {
      __s5local0 = __s5local4[__s5local3];
      this.addPossiblePositionToList(this.parentGenerator.result.moat.innerCorners, this.getInnerCornerPosition(__s5local0), false);
    }
    this.parentGenerator.result.moat.gate = new __dep_export_IsoDefencePosition.IsoDefencePosition(new __s0local0(this.parentGenerator.result.gate.pos.x, this.parentGenerator.result.gate.pos.y), this.parentGenerator.result.gate.rot, new __s0local0(5, 4));
    this._collisionList.push(this.parentGenerator.result.moat.gate);
    for (var __s5local5 = 0, __s5local6 = this.parentGenerator.grounds; __s5local5 < __s5local6.length; __s5local5++) {
      var __s5local7 = __s5local6[__s5local5];
      if (__s5local7 !== undefined) {
        for (var __s5local8 = __dep_exact_f855840627e6e145.int(__s5local7.x); __s5local8 <= __s5local7.x2; ++__s5local8) {
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new __s0local0(__s5local8, __s5local7.y)));
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new __s0local0(__s5local8, __s5local7.y2)));
        }
        for (var __s5local9 = __dep_exact_f855840627e6e145.int(__s5local7.y); __s5local9 <= __s5local7.y2; ++__s5local9) {
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new __s0local0(__s5local7.x, __s5local9)));
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new __s0local0(__s5local7.x2, __s5local9)));
        }
      }
    }
  };
  IsoGeneratorDefenceMoat.prototype.cleanup = function () {
    this._collisionList.length = 0;
  };
  IsoGeneratorDefenceMoat.prototype.addPossiblePositionsToList = function (__s20param0, __s20param1) {
    if (__s20param1 && __s20param1 != null) {
      for (var __s20local0 = 0, __s20local1 = __s20param1; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined) {
          this.addPossiblePositionToList(__s20param0, __s20local2, __s20param1.length < 2, __s20param1.length < 2);
        }
      }
    }
  };
  IsoGeneratorDefenceMoat.prototype.addPossiblePositionToList = function (__s26param0, __s26param1, __s26param2 = true, __s26param3 = true) {
    if (__s26param1) {
      if (!__s26param2 || !this.isCollidingWithAnyOtherPosition(this._collisionList, __s26param1)) {
        if (__s26param3) {
          this._collisionList.push(__s26param1);
        }
        __s26param0.push(__s26param1);
      }
    }
  };
  IsoGeneratorDefenceMoat.prototype.getOuterCornerPosition = function (__s31param0) {
    var __s31local0;
    var __s31local1;
    switch (__s31param0.rot) {
      case 0:
        __s31local1 = new __s0local0(__s31param0.pos.x + 1, __s31param0.pos.y + 1);
        __s31local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s31local1, __s31param0.rot, new __s0local0(6, 6));
        break;
      case 1:
        __s31local1 = new __s0local0(__s31param0.pos.x - 2, __s31param0.pos.y + 1);
        __s31local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s31local1, __s31param0.rot, new __s0local0(5, 5), new __s0local0(__s31local1.x - 3, __s31local1.y + 1));
        break;
      case 2:
        __s31local1 = new __s0local0(__s31param0.pos.x + 1, __s31param0.pos.y - 2);
        __s31local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s31local1, __s31param0.rot, new __s0local0(5, 6), new __s0local0(__s31local1.x + 2, __s31local1.y - 3));
        break;
      case 3:
        __s31local1 = new __s0local0(__s31param0.pos.x - 2, __s31param0.pos.y - 2);
        __s31local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s31local1, __s31param0.rot, new __s0local0(5, 5), new __s0local0(__s31local1.x - 3, __s31local1.y - 3));
    }
    return __s31local0;
  };
  IsoGeneratorDefenceMoat.prototype.getInnerCornerPosition = function (__s34param0) {
    var __s34local0;
    var __s34local1;
    if (__s34param0.rot == 0) {
      __s34local1 = new __s0local0(__s34param0.pos.x + 1, __s34param0.pos.y + 1);
      __s34local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s34local1, __s34param0.rot, new __s0local0(6, 6), new __s0local0(__s34local1.x - 1, __s34local1.y - 1));
    }
    if (this.parentGenerator.isoData.areaData.isSeasonCamp) {
      switch (__s34param0.rot) {
        case 1:
          __s34local1 = new __s0local0(__s34param0.pos.x - 2, __s34param0.pos.y + 1);
          __s34local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s34local1, __s34param0.rot, new __s0local0(9, 8), new __s0local0(__s34local1.x - 5, __s34local1.y - 1));
          break;
        case 2:
          __s34local1 = new __s0local0(__s34param0.pos.x + 1, __s34param0.pos.y - 2);
          __s34local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s34local1, __s34param0.rot, new __s0local0(8, 9), new __s0local0(__s34local1.x - 1, __s34local1.y - 5));
          break;
        case 3:
          __s34local1 = new __s0local0(__s34param0.pos.x - 2, __s34param0.pos.y - 2);
          __s34local0 = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s34local1, __s34param0.rot, new __s0local0(7, 7), new __s0local0(__s34local1.x - 4, __s34local1.y - 4));
      }
    }
    return __s34local0;
  };
  IsoGeneratorDefenceMoat.prototype.getWallPositions = function (__s39param0) {
    var __s39local0;
    if (this.map[__s39param0.y][__s39param0.x].hasGround) {
      if (!this.map[__s39param0.y][__s39param0.x - 1].hasGround) {
        __s39local0 = this.addPosToListOrCreateOne(__s39local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s39param0, 3, new __s0local0(3, 1), new __s0local0(__s39param0.x - 3, __s39param0.y)));
      }
      if (!this.map[__s39param0.y][__s39param0.x + 1].hasGround && !this.map[__s39param0.y + 2][__s39param0.x + 1].hasGround) {
        __s39local0 = this.addPosToListOrCreateOne(__s39local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s39param0, 0, new __s0local0(3, 1), new __s0local0(__s39param0.x, __s39param0.y)));
      }
      if (!this.map[__s39param0.y + 1][__s39param0.x].hasGround && !this.map[__s39param0.y + 1][__s39param0.x + 2].hasGround) {
        __s39local0 = this.addPosToListOrCreateOne(__s39local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s39param0, 1, new __s0local0(1, 3), new __s0local0(__s39param0.x, __s39param0.y)));
      }
      if (!this.map[__s39param0.y - 1][__s39param0.x].hasGround) {
        __s39local0 = this.addPosToListOrCreateOne(__s39local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s39param0, 2, new __s0local0(1, 3), new __s0local0(__s39param0.x, __s39param0.y - 3)));
      }
    }
    return __s39local0;
  };
  return IsoGeneratorDefenceMoat;
}(__dep_export_AIsoGeneratorDefenceComponent.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceMoat = __s0local1;
