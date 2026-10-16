Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoDefencePosition = require("gge-module:export_IsoDefencePosition");
var __dep_export_AIsoGeneratorDefenceComponent = require("gge-module:export_AIsoGeneratorDefenceComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoGeneratorDefenceCommon() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGeneratorDefenceCommon, __s1param0);
  IsoGeneratorDefenceCommon.prototype.execute = function () {
    var __s5local0;
    var __s5local1;
    var __s5local2 = [];
    var __s5local3 = [];
    for (var __s5local4 = 0, __s5local5 = this.parentGenerator.grounds; __s5local4 < __s5local5.length; __s5local4++) {
      if ((__s5local0 = __s5local5[__s5local4]).rotatedWidth == 20 && __s5local0.rotatedHeight == 20) {
        __s5local2.push(new __s0local0(__s5local0.x, __s5local0.y + 10 - 1));
        __s5local2.push(new __s0local0(__s5local0.x2, __s5local0.y + 10 - 1));
        __s5local2.push(new __s0local0(__s5local0.x + 10 - 1, __s5local0.y));
        __s5local2.push(new __s0local0(__s5local0.x + 10 - 1, __s5local0.y2));
        __s5local2.push(new __s0local0(__s5local0.x, __s5local0.y + 10));
        __s5local2.push(new __s0local0(__s5local0.x2, __s5local0.y + 10));
        __s5local2.push(new __s0local0(__s5local0.x + 10, __s5local0.y));
        __s5local2.push(new __s0local0(__s5local0.x + 10, __s5local0.y2));
      }
      __s5local2.push(new __s0local0(__s5local0.x, __s5local0.y));
      __s5local2.push(new __s0local0(__s5local0.x, __s5local0.y2));
      __s5local2.push(new __s0local0(__s5local0.x2, __s5local0.y));
      __s5local2.push(new __s0local0(__s5local0.x2, __s5local0.y2));
      __s5local3.push(new __s0local0(__s5local0.x, __s5local0.y));
      __s5local3.push(new __s0local0(__s5local0.x, __s5local0.y2));
      __s5local3.push(new __s0local0(__s5local0.x2, __s5local0.y));
      __s5local3.push(new __s0local0(__s5local0.x2, __s5local0.y2));
    }
    for (var __s5local6 = 0, __s5local7 = this.parentGenerator.grounds; __s5local6 < __s5local7.length; __s5local6++) {
      if ((__s5local0 = __s5local7[__s5local6]).rotatedWidth != 20 || __s5local0.rotatedHeight != 20) {
        if (__s5local0.rotatedWidth > __s5local0.rotatedHeight) {
          __s5local2.push(new __s0local0(__s5local0.x + 10, __s5local0.y));
          __s5local2.push(new __s0local0(__s5local0.x + 10, __s5local0.y2));
        } else {
          __s5local2.push(new __s0local0(__s5local0.x, __s5local0.y + 10));
          __s5local2.push(new __s0local0(__s5local0.x2, __s5local0.y + 10));
        }
      }
    }
    __s5local2.sort(IsoGeneratorDefenceCommon.sortByViewDistanceFunc);
    __s5local3.sort(IsoGeneratorDefenceCommon.sortByViewDistanceFunc);
    for (var __s5local8 = 0, __s5local9 = __s5local2; __s5local8 < __s5local9.length; __s5local8++) {
      __s5local1 = __s5local9[__s5local8];
      this.addPossiblePositionToList(this.parentGenerator.result.outerCorners, this.bindFunction(this.getPossibleOuterCornerPosition), __s5local1);
    }
    for (var __s5local10 = 0, __s5local11 = __s5local2; __s5local10 < __s5local11.length; __s5local10++) {
      __s5local1 = __s5local11[__s5local10];
      this.addPossiblePositionToList(this.parentGenerator.result.innerCorners, this.bindFunction(this.getPossibleInnerCornerPosition), __s5local1);
    }
    for (var __s5local12 = 0, __s5local13 = __s5local2; __s5local12 < __s5local13.length; __s5local12++) {
      __s5local1 = __s5local13[__s5local12];
      this.addPossiblePositionToList(this.parentGenerator.result.sides, this.bindFunction(this.getPossibleSidePosition), __s5local1);
    }
    for (var __s5local14 = 0, __s5local15 = __s5local3; __s5local14 < __s5local15.length; __s5local14++) {
      __s5local1 = __s5local15[__s5local14];
      this.addPossiblePositionToList(this.parentGenerator.result.groundCornerSides, this.bindFunction(this.getPossibleSidePosition), __s5local1);
    }
  };
  IsoGeneratorDefenceCommon.sortByViewDistanceFunc = function (__s23param0, __s23param1) {
    return __dep_export_ClientConstUtils.ClientConstUtils.distanceSquared(__dep_export_IsoConst.IsoConst.Z_SORT_LOOK_POINT, __s23param0) - __dep_export_ClientConstUtils.ClientConstUtils.distanceSquared(__dep_export_IsoConst.IsoConst.Z_SORT_LOOK_POINT, __s23param1);
  };
  IsoGeneratorDefenceCommon.prototype.addPossiblePositionToList = function (__s25param0, __s25param1, __s25param2) {
    try {
      var __s25local0 = __s25param1(__s25param2);
      if (__s25local0) {
        __s25param0.push(__s25local0);
      }
    } catch (__s29local0) {}
  };
  IsoGeneratorDefenceCommon.prototype.hasGroundAt = function (__s31param0, __s31param1) {
    return !!this.map && !(__s31param1 < 0) && !(__s31param1 >= this.map.length) && !!this.map[__s31param1] && !(__s31param0 < 0) && !(__s31param0 >= this.map[__s31param1].length) && this.map[__s31param1][__s31param0] && this.map[__s31param1][__s31param0].hasGround;
  };
  IsoGeneratorDefenceCommon.prototype.getPossibleOuterCornerPosition = function (__s33param0) {
    var __s33local0 = -1;
    if (this.hasGroundAt(__s33param0.x, __s33param0.y)) {
      if (this.hasGroundAt(__s33param0.x, __s33param0.y + 1) || this.hasGroundAt(__s33param0.x - 1, __s33param0.y + 1) || this.hasGroundAt(__s33param0.x - 1, __s33param0.y)) {
        if (this.hasGroundAt(__s33param0.x, __s33param0.y - 1) || this.hasGroundAt(__s33param0.x - 1, __s33param0.y - 1) || this.hasGroundAt(__s33param0.x - 1, __s33param0.y)) {
          if (this.hasGroundAt(__s33param0.x, __s33param0.y - 1) || this.hasGroundAt(__s33param0.x + 1, __s33param0.y - 1) || this.hasGroundAt(__s33param0.x + 1, __s33param0.y)) {
            if (!this.hasGroundAt(__s33param0.x, __s33param0.y + 1) && !this.hasGroundAt(__s33param0.x + 1, __s33param0.y + 1) && !this.hasGroundAt(__s33param0.x + 1, __s33param0.y)) {
              __s33local0 = 0;
            }
          } else {
            __s33local0 = 2;
          }
        } else {
          __s33local0 = 3;
        }
      } else {
        __s33local0 = 1;
      }
    }
    if (__s33local0 >= 0) {
      return new __dep_export_IsoDefencePosition.IsoDefencePosition(__s33param0, __s33local0);
    } else {
      return null;
    }
  };
  IsoGeneratorDefenceCommon.prototype.getPossibleInnerCornerPosition = function (__s45param0) {
    var __s45local0 = -1;
    var __s45local1 = __s45param0;
    if (this.hasGroundAt(__s45param0.x, __s45param0.y)) {
      if (this.hasGroundAt(__s45param0.x, __s45param0.y - 1) && this.hasGroundAt(__s45param0.x + 1, __s45param0.y) && !this.hasGroundAt(__s45param0.x + 1, __s45param0.y - 1)) {
        __s45local0 = 2;
      } else if (this.hasGroundAt(__s45param0.x, __s45param0.y + 1) && this.hasGroundAt(__s45param0.x + 1, __s45param0.y) && !this.hasGroundAt(__s45param0.x + 1, __s45param0.y + 1)) {
        __s45local0 = 0;
      } else if (this.hasGroundAt(__s45param0.x - 1, __s45param0.y) && this.hasGroundAt(__s45param0.x - 1, __s45param0.y + 1) && !this.hasGroundAt(__s45param0.x, __s45param0.y + 1)) {
        __s45local1 = new __s0local0(__s45param0.x - 1, __s45param0.y);
        __s45local0 = 0;
      } else if (this.hasGroundAt(__s45param0.x, __s45param0.y + 1) && this.hasGroundAt(__s45param0.x - 1, __s45param0.y) && !this.hasGroundAt(__s45param0.x - 1, __s45param0.y + 1)) {
        __s45local0 = 1;
      } else if (this.hasGroundAt(__s45param0.x, __s45param0.y - 1) && this.hasGroundAt(__s45param0.x - 1, __s45param0.y) && !this.hasGroundAt(__s45param0.x - 1, __s45param0.y - 1)) {
        __s45local0 = 3;
      }
    }
    if (__s45local0 >= 0) {
      return new __dep_export_IsoDefencePosition.IsoDefencePosition(__s45local1, __s45local0);
    } else {
      return null;
    }
  };
  IsoGeneratorDefenceCommon.prototype.getPossibleSidePosition = function (__s55param0) {
    var __s55local0 = -1;
    if (this.hasGroundAt(__s55param0.x, __s55param0.y) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y) && this.hasGroundAt(__s55param0.x, __s55param0.y - 1) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y - 1) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y - 1) && !this.hasGroundAt(__s55param0.x, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x - 1, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x + 1, __s55param0.y + 1)) {
      __s55local0 = 1;
    }
    if (this.hasGroundAt(__s55param0.x, __s55param0.y) && this.hasGroundAt(__s55param0.x, __s55param0.y + 1) && this.hasGroundAt(__s55param0.x, __s55param0.y - 1) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y - 1) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x + 1, __s55param0.y) && !this.hasGroundAt(__s55param0.x + 1, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x + 1, __s55param0.y - 1)) {
      __s55local0 = 0;
    }
    if (this.hasGroundAt(__s55param0.x, __s55param0.y) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y) && this.hasGroundAt(__s55param0.x, __s55param0.y + 1) && this.hasGroundAt(__s55param0.x - 1, __s55param0.y + 1) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x, __s55param0.y - 1) && !this.hasGroundAt(__s55param0.x - 1, __s55param0.y - 1) && !this.hasGroundAt(__s55param0.x + 1, __s55param0.y - 1)) {
      __s55local0 = 3;
    }
    if (this.hasGroundAt(__s55param0.x, __s55param0.y) && this.hasGroundAt(__s55param0.x, __s55param0.y + 1) && this.hasGroundAt(__s55param0.x, __s55param0.y - 1) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y - 1) && this.hasGroundAt(__s55param0.x + 1, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x - 1, __s55param0.y) && !this.hasGroundAt(__s55param0.x - 1, __s55param0.y + 1) && !this.hasGroundAt(__s55param0.x - 1, __s55param0.y - 1)) {
      __s55local0 = 2;
    }
    if (__s55local0 >= 0) {
      return new __dep_export_IsoDefencePosition.IsoDefencePosition(__s55param0, __s55local0);
    } else {
      return null;
    }
  };
  return IsoGeneratorDefenceCommon;
}(__dep_export_AIsoGeneratorDefenceComponent.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceCommon = __s0local1;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
