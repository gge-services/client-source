Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function SectorHelper() {}
  SectorHelper.getNextRandomInt = function (__s5param0) {
    return __dep_exact_f855840627e6e145.int(SectorHelper.rand.nextInt(__s5param0));
  };
  SectorHelper.absolutPosToSectorPos = function (__s7param0) {
    return new __s0local0(__dep_exact_f855840627e6e145.int(__s7param0.x / __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH), __dep_exact_f855840627e6e145.int(__s7param0.y / __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT));
  };
  SectorHelper.getSectorX = function (__s9param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s9param0 / __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH));
  };
  SectorHelper.getSectorY = function (__s11param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s11param0 / __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT));
  };
  SectorHelper.absolutPosToRelativePos = function (__s13param0) {
    return new __s0local0(__s13param0.x % __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH, __s13param0.y % __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT);
  };
  SectorHelper.getSectorTopLeft = function (__s15param0) {
    var __s15local0 = SectorHelper.getLoopedPosition(__s15param0);
    return new __s0local0(__s15local0.x * __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH, __s15local0.y * __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT);
  };
  SectorHelper.getSectorBottomRight = function (__s17param0) {
    var __s17local0 = SectorHelper.getLoopedPosition(__s17param0);
    return new __s0local0(__s17local0.x * __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH + __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH - 1, __s17local0.y * __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT + __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT - 1);
  };
  SectorHelper.getLoopedPosition = function (__s19param0) {
    var __s19local0 = __dep_exact_f855840627e6e145.int(__s19param0.x);
    var __s19local1 = __dep_exact_f855840627e6e145.int(__s19param0.y);
    __s19local0 = __s19param0.x < 0 ? __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X - Math.abs(__s19param0.x) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X) : __dep_exact_f855840627e6e145.int(__s19param0.x % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X);
    __s19local1 = __s19param0.y < 0 ? __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y - Math.abs(__s19param0.y) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y) : __dep_exact_f855840627e6e145.int(__s19param0.y % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y);
    return new __s0local0(__s19local0, __s19local1);
  };
  SectorHelper.getLoopedAreaPosition = function (__s21param0) {
    var __s21local0 = __dep_exact_f855840627e6e145.int(__s21param0.x);
    var __s21local1 = __dep_exact_f855840627e6e145.int(__s21param0.y);
    __s21local0 = __s21param0.x < 0 ? __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH - Math.abs(__s21param0.x) % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH) % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH) : __dep_exact_f855840627e6e145.int(__s21param0.x % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH);
    return new __s0local0(__s21local0, __s21local1);
  };
  SectorHelper.getLoopedAreaPositionX = function (__s23param0) {
    if (__s23param0 < 0) {
      return __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH - Math.abs(__s23param0) % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH) % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH);
    } else {
      return __dep_exact_f855840627e6e145.int(__s23param0 % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH);
    }
  };
  SectorHelper.getLoopedPixelPosition = function (__s27param0) {
    var __s27local0 = __dep_exact_f855840627e6e145.int(__s27param0.x);
    var __s27local1 = __dep_exact_f855840627e6e145.int(__s27param0.y);
    __s27local0 = __s27param0.x < 0 ? __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X - Math.abs(__s27param0.x) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X) : __dep_exact_f855840627e6e145.int(__s27param0.x % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X);
    __s27local1 = __s27param0.y < 0 ? __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y - Math.abs(__s27param0.y) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y) : __dep_exact_f855840627e6e145.int(__s27param0.y % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y);
    return new __s0local0(__s27local0, __s27local1);
  };
  SectorHelper.getScreenLoopedXPixelPosition = function (__s29param0) {
    var __s29local0 = __dep_exact_f855840627e6e145.int(__s29param0);
    var __s29local1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X);
    if (__s29param0 < -__s29local1 / 2 || __s29param0 > -__s29local1 / 2 && __s29param0 < __s29local1 * -3 / 8) {
      __s29local0 += __s29local1;
    }
    if (__s29param0 > __s29local1 / 2 && __s29param0 > __s29local1 * 5 / 8) {
      __s29local0 -= __s29local1;
    }
    return __s29local0;
  };
  SectorHelper.getLoopedYPixelPosition = function (__s33param0) {
    __dep_exact_f855840627e6e145.int(__s33param0);
    if (__s33param0 < 0) {
      return __dep_exact_f855840627e6e145.int((__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y - Math.abs(__s33param0) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y) % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y);
    } else {
      return __dep_exact_f855840627e6e145.int(__s33param0 % __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y);
    }
  };
  SectorHelper.getLoopedSectorPosition = function (__s37param0) {
    var __s37local0 = __dep_exact_f855840627e6e145.int(__s37param0.x);
    var __s37local1 = __dep_exact_f855840627e6e145.int(__s37param0.y);
    var __s37local2 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X));
    var __s37local3 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y));
    __s37local0 = __s37param0.x < 0 ? __dep_exact_f855840627e6e145.int((__s37local2 - Math.abs(__s37param0.x) % __s37local2) % __s37local2) : __dep_exact_f855840627e6e145.int(__s37param0.x % __s37local2);
    __s37local1 = __s37param0.y < 0 ? __dep_exact_f855840627e6e145.int((__s37local3 - Math.abs(__s37param0.y) % __s37local3) % __s37local3) : __dep_exact_f855840627e6e145.int(__s37param0.y % __s37local3);
    return new __s0local0(__s37local0, __s37local1);
  };
  SectorHelper.pixelToAreaPosition = function (__s39param0) {
    var __s39local0 = __dep_exact_f855840627e6e145.int(__s39param0.x);
    var __s39local1 = __dep_exact_f855840627e6e145.int(__s39param0.y);
    __s39local0 = __dep_exact_f855840627e6e145.int(__s39local0 / 64);
    __s39local1 = __dep_exact_f855840627e6e145.int(__s39local1 / 64);
    return new __s0local0(__s39local0, __s39local1);
  };
  SectorHelper.__initialize_static_members = function () {
    SectorHelper.rand = new __dep_exact_9e901e8e2483a22f.SimpleRandom(923);
  };
  return SectorHelper;
}();
exports.SectorHelper = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
__s0local1.__initialize_static_members();
