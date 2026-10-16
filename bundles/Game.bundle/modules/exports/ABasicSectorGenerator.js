Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstWorldmapDeco = require("gge-module:export_ClientConstWorldmapDeco");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_AreaTypeSectorMap = require("gge-module:export_AreaTypeSectorMap");
var __s0local0 = function () {
  function ABasicSectorGenerator() {}
  ABasicSectorGenerator.prototype.generateDecoObjects = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0 * __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH);
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param1 * __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT);
    this.rand = new __dep_exact_9e901e8e2483a22f.SimpleRandom(__s5local0 * __dep_exact_26a421b704832cff.WorldConst.SEED_VALUE_1 + __s5local1 * __dep_exact_26a421b704832cff.WorldConst.SEED_VALUE_2);
    var __s5local2 = new __dep_export_AreaTypeSectorMap.AreaTypeSectorMap(__s5param2);
    this.setDecoElements(__s5local2);
    return __s5local2.getAsMap();
  };
  ABasicSectorGenerator.prototype.setDecoElements = function (__s7param0) {
    var __s7local0;
    var __s7local1 = this.decoTypeCount;
    for (var __s7local2 = __dep_exact_f855840627e6e145.int(__s7local1.length), __s7local3 = 0, __s7local4 = 0, __s7local5 = 0; __s7local5 < __s7local2; __s7local5++) {
      __s7local3 = __dep_exact_f855840627e6e145.int(__s7local1[__s7local5][0]);
      __s7local4 = __dep_exact_f855840627e6e145.int(__s7local1[__s7local5][1]);
      __s7local0 = __dep_export_ClientConstWorldmapDeco.ClientConstWorldmapDeco.DECO_OBJECT_LIST.get(__s7local3);
      this.placeDecoObjects(__s7param0, __s7local0, __s7local4);
    }
  };
  ABasicSectorGenerator.prototype.placeDecoObjects = function (__s11param0, __s11param1, __s11param2) {
    var __s11local0;
    var __s11local1 = __s11param0.getFreePositionsForElements(__s11param1.width, __s11param1.height);
    for (var __s11local2 = __dep_exact_f855840627e6e145.int(Math.min(__s11param2, __s11local1.length)), __s11local3 = 0, __s11local4 = 0; __s11local4 < __s11local2; __s11local4++) {
      __s11local3 = __dep_exact_f855840627e6e145.int(this.rand.nextInt(__s11local1.length));
      __s11local0 = __s11local1.splice(__s11local3, 1).shift();
      __s11param0.put(-(__s11param1.decoId + 1), __s11local0.x, __s11local0.y, __s11param1.width, __s11param1.height);
    }
  };
  Object.defineProperty(ABasicSectorGenerator.prototype, "worldData", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicSectorGenerator.prototype, "kingdomID", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicSectorGenerator.prototype, "resourceSpotAreaType", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicSectorGenerator.prototype, "decoTypeCount", {
    get: function () {
      return ABasicSectorGenerator.DEFAULT_DECO_TYPE_COUNT;
    },
    enumerable: true,
    configurable: true
  });
  ABasicSectorGenerator.__initialize_static_members = function () {
    ABasicSectorGenerator.DEFAULT_DECO_TYPE_COUNT = [[14, 3], [13, 3], [12, 3], [9, 1], [10, 1], [11, 1], [5, 2], [7, 2], [4, 2], [8, 1], [3, 2], [2, 1], [19, 5], [18, 5], [17, 10], [16, 3], [15, 3], [6, 1], [1, 1], [0, 2]];
  };
  return ABasicSectorGenerator;
}();
exports.ABasicSectorGenerator = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleSectorGenerator");
__s0local0.__initialize_static_members();
