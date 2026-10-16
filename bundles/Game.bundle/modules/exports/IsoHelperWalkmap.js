Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function IsoHelperWalkmap() {
    this.walkMapCache = new Map();
    this.spawnPointCache = new Map();
  }
  IsoHelperWalkmap.prototype.generateWalkmap = function (__s5param0) {
    var __s5local0 = this.walkMapCache.get(__s5param0);
    if (__s5local0 === undefined) {
      var __s5local1 = this.getBitmapData(__s5param0);
      if (__s5local1) {
        var __s5local2 = this.getWalkMapFromBitmapData(__s5local1);
        var __s5local3 = __s5local2.walkMap;
        var __s5local4 = __s5local2.spawnPoints;
        this.spawnPointCache.add(__s5param0, __s5local4);
        this.walkMapCache.add(__s5param0, __s5local3);
        __s5local0 = __s5local3;
      } else {
        __s5local0 = null;
        this.walkMapCache.add(__s5param0, __s5local0);
        this.spawnPointCache.add(__s5param0, []);
      }
    }
    return __s5local0;
  };
  IsoHelperWalkmap.prototype.getSpawnPoints = function (__s10param0) {
    var __s10local0 = this.spawnPointCache.get(__s10param0);
    if (__s10local0 === undefined) {
      var __s10local1 = this.getBitmapData(__s10param0);
      if (__s10local1) {
        var __s10local2 = this.getWalkMapFromBitmapData(__s10local1);
        var __s10local3 = __s10local2.walkMap;
        var __s10local4 = __s10local2.spawnPoints;
        this.spawnPointCache.add(__s10param0, __s10local4);
        this.walkMapCache.add(__s10param0, __s10local3);
        __s10local0 = __s10local4;
      } else {
        __s10local0 = [];
        this.spawnPointCache.add(__s10param0, __s10local0);
        this.walkMapCache.add(__s10param0, null);
      }
    }
    return __s10local0;
  };
  IsoHelperWalkmap.prototype.getWalkMapFromBitmapData = function (__s15param0) {
    var __s15local0;
    var __s15local1 = Array(__s15param0.height);
    var __s15local2 = [];
    for (var __s15local3 = 0; __s15local3 < __s15param0.height; __s15local3++) {
      __s15local1[__s15local3] = Array(__s15param0.width);
      for (var __s15local4 = 0; __s15local4 < __s15param0.width; __s15local4++) {
        __s15local0 = __s15param0.getPixel(__s15local4, __s15local3);
        __s15local1[__s15local3][__s15local4] = __s15local0 != IsoHelperWalkmap.BLOCKED;
        if (__s15local0 > IsoHelperWalkmap.SPAWNPOINT || __s15local0 == IsoHelperWalkmap.SPAWNPOINT2) {
          __s15local2.push(new __s0local0(__s15local4, __s15local3));
        }
      }
    }
    return {
      walkMap: __s15local1,
      spawnPoints: __s15local2
    };
  };
  IsoHelperWalkmap.prototype.getBitmapData = function (__s22param0) {
    var __s22local0;
    if (/wall|guard_tower|crane|deco|event|moat|gate|univ|forg/i.test(__s22param0)) {
      return null;
    }
    try {
      if (__s22local0 = __dep_exact_81dacdf05bd32292.getDefinitionByNameFromLibrary(__s22param0)) {
        return new __s22local0();
      } else {
        return null;
      }
    } catch (__s28local0) {
      return null;
    }
  };
  IsoHelperWalkmap.prototype.createWalkmapWithWalkableL = function (__s30param0) {
    for (var __s30local0 = Array(__s30param0.y), __s30local1 = 0; __s30local1 < __s30local0.length; ++__s30local1) {
      __s30local0[__s30local1] = Array(__s30param0.x);
      for (var __s30local2 = 0; __s30local2 < __s30local0[__s30local1].length; ++__s30local2) {
        __s30local0[__s30local1][__s30local2] = __s30local1 == __s30local0.length - 1 || __s30local2 == __s30local0[__s30local1].length - 1;
      }
    }
    return __s30local0;
  };
  IsoHelperWalkmap.prototype.createWalkmapFullBlocked = function (__s36param0) {
    var __s36local0 = new __s0local0(Math.floor(__s36param0.x), Math.floor(__s36param0.y));
    if (__s36local0.x <= 0 || __s36local0.y <= 0) {
      return [];
    }
    for (var __s36local1 = Array(__s36param0.y), __s36local2 = 0; __s36local2 < __s36local1.length; ++__s36local2) {
      __s36local1[__s36local2] = Array(__s36param0.x);
      for (var __s36local3 = 0; __s36local3 < __s36local1[__s36local2].length; ++__s36local3) {
        __s36local1[__s36local2][__s36local3] = false;
      }
    }
    return __s36local1;
  };
  IsoHelperWalkmap.prototype.mirrorWalkmap = function (__s43param0) {
    var __s43local0 = Array(__s43param0[0].length);
    for (var __s43local1 = 0; __s43local1 < __s43param0[0].length; ++__s43local1) {
      __s43local0[__s43local1] = Array(__s43param0.length);
      for (var __s43local2 = 0; __s43local2 < __s43param0.length; ++__s43local2) {
        __s43local0[__s43local1][__s43local2] = __s43param0[__s43local2][__s43local1];
      }
    }
    return __s43local0;
  };
  IsoHelperWalkmap.prototype.mirrorSpawnPoints = function (__s49param0) {
    var __s49local0 = new Array(__s49param0.length);
    for (var __s49local1 = 0; __s49local1 < __s49param0.length; ++__s49local1) {
      __s49local0[__s49local1] = new __s0local0(__s49param0[__s49local1].y, __s49param0[__s49local1].x);
    }
    return __s49local0;
  };
  IsoHelperWalkmap.__initialize_static_members = function () {
    IsoHelperWalkmap.WALKABLE = 16777215;
    IsoHelperWalkmap.BLOCKED = 0;
    IsoHelperWalkmap.SPAWNPOINT = 16711680;
    IsoHelperWalkmap.SPAWNPOINT2 = 16711681;
  };
  return IsoHelperWalkmap;
}();
exports.IsoHelperWalkmap = __s0local1;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
__s0local1.__initialize_static_members();
