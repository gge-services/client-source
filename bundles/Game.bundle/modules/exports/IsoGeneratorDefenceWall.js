Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoDefencePosition = require("gge-module:export_IsoDefencePosition");
var __dep_export_AIsoGeneratorDefenceComponent = require("gge-module:export_AIsoGeneratorDefenceComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoGeneratorDefenceWall() {
    var __s3local0 = this;
    __s3local0._collisionList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGeneratorDefenceWall, __s1param0);
  IsoGeneratorDefenceWall.prototype.execute = function () {
    this.initCollisionList();
    for (var __s5local0 = 0, __s5local1 = this.parentGenerator.grounds; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        for (var __s5local3 = __dep_exact_f855840627e6e145.int(__s5local2.x); __s5local3 <= __s5local2.x2; ++__s5local3) {
          this.addPossiblePositionToList(new __s0local0(__s5local3, __s5local2.y));
          this.addPossiblePositionToList(new __s0local0(__s5local3, __s5local2.y2));
        }
        for (var __s5local4 = __dep_exact_f855840627e6e145.int(__s5local2.y); __s5local4 <= __s5local2.y2; ++__s5local4) {
          this.addPossiblePositionToList(new __s0local0(__s5local2.x, __s5local4));
          this.addPossiblePositionToList(new __s0local0(__s5local2.x2, __s5local4));
        }
      }
    }
  };
  IsoGeneratorDefenceWall.prototype.cleanup = function () {
    this._collisionList.length = 0;
  };
  IsoGeneratorDefenceWall.prototype.initCollisionList = function () {
    this._collisionList = this.parentGenerator.result.necessaryTowers.concat(this.parentGenerator.result.emptyTowers);
    this._collisionList.push(this.parentGenerator.result.gate);
  };
  IsoGeneratorDefenceWall.prototype.addPossiblePositionToList = function (__s18param0) {
    var __s18local0 = this.getWallPositions(__s18param0);
    if (__s18local0 && __s18local0 != null) {
      for (var __s18local1 = 0, __s18local2 = __s18local0; __s18local1 < __s18local2.length; __s18local1++) {
        var __s18local3 = __s18local2[__s18local1];
        if (__s18local3 !== undefined) {
          if (!this.isCollidingWithAnyOtherPosition(this._collisionList, __s18local3)) {
            this._collisionList.push(__s18local3);
            this.parentGenerator.result.walls.push(__s18local3);
          }
        }
      }
    }
  };
  IsoGeneratorDefenceWall.prototype.getWallPositions = function (__s25param0) {
    var __s25local0;
    var __s25local1;
    if (!!this.map[__s25param0.y][__s25param0.x].hasGround && !this.map[__s25param0.y][__s25param0.x - 1].hasGround && !this.map[__s25param0.y][__s25param0.x - 2].hasGround) {
      __s25local1 = new __s0local0(__s25param0.x - 1, __s25param0.y);
      __s25local0 = this.addPosToListOrCreateOne(__s25local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s25local1, 3, new __s0local0(2, 1), new __s0local0(__s25local1.x - 2, __s25local1.y)));
    }
    if (!!this.map[__s25param0.y][__s25param0.x].hasGround && !this.map[__s25param0.y + 1][__s25param0.x].hasGround && !this.map[__s25param0.y + 2][__s25param0.x].hasGround) {
      __s25local1 = new __s0local0(__s25param0.x, __s25param0.y + 1);
      __s25local0 = this.addPosToListOrCreateOne(__s25local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s25local1, 1, new __s0local0(1, 2)));
    }
    if (!!this.map[__s25param0.y][__s25param0.x].hasGround && !this.map[__s25param0.y - 1][__s25param0.x].hasGround && !this.map[__s25param0.y - 2][__s25param0.x].hasGround) {
      __s25local1 = new __s0local0(__s25param0.x, __s25param0.y - 1);
      __s25local0 = this.addPosToListOrCreateOne(__s25local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s25local1, 2, new __s0local0(1, 3), new __s0local0(__s25local1.x, __s25local1.y - 1)));
    }
    if (!!this.map[__s25param0.y][__s25param0.x].hasGround && !this.map[__s25param0.y][__s25param0.x + 1].hasGround && !this.map[__s25param0.y][__s25param0.x + 2].hasGround) {
      __s25local1 = new __s0local0(__s25param0.x + 1, __s25param0.y);
      __s25local0 = this.addPosToListOrCreateOne(__s25local0, new __dep_export_IsoDefencePosition.IsoDefencePosition(__s25local1, 0, new __s0local0(3, 1)));
    }
    return __s25local0;
  };
  return IsoGeneratorDefenceWall;
}(__dep_export_AIsoGeneratorDefenceComponent.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceWall = __s0local1;
