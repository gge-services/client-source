Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function GeomUtil() {}
  GeomUtil.getLineSegmentIntersection = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0 = GeomUtil.getLineIntersection(__s5param0, __s5param1, __s5param2, __s5param3);
    if (__s5local0 == null) {
      return null;
    } else if (GeomUtil.inRange(__s5local0, __s5param0, __s5param1) && GeomUtil.inRange(__s5local0, __s5param2, __s5param3)) {
      return __s5local0;
    } else {
      return null;
    }
  };
  GeomUtil.getLineIntersection = function (__s10param0, __s10param1, __s10param2, __s10param3) {
    var __s10local0 = (__s10param1.y - __s10param0.y) / (__s10param1.x - __s10param0.x);
    var __s10local1 = (__s10param3.y - __s10param2.y) / (__s10param3.x - __s10param2.x);
    if (__s10local0 == __s10local1) {
      return null;
    }
    var __s10local2 = NaN;
    var __s10local3 = NaN;
    var __s10local4 = NaN;
    if (isFinite(__s10local0)) {
      if (isFinite(__s10local1)) {
        __s10local3 = __s10local0 * (__s10local2 = ((__s10local4 = __s10param0.y - __s10local0 * __s10param0.x) - (__s10param2.y - __s10local1 * __s10param2.x)) / (__s10local1 - __s10local0)) + __s10local4;
      } else {
        __s10local4 = __s10param0.y - __s10local0 * __s10param0.x;
        __s10local3 = __s10local0 * (__s10local2 = __s10param2.x) + __s10local4;
      }
    } else {
      __s10local3 = __s10local1 * (__s10local2 = __s10param0.x) + (__s10param2.y - __s10local1 * __s10param2.x);
    }
    return new __s0local0(__s10local2, __s10local3);
  };
  GeomUtil.inRange = function (__s17param0, __s17param1, __s17param2) {
    if (__s17param1.x != __s17param2.x) {
      return __s17param0.x <= __s17param1.x != __s17param0.x < __s17param2.x;
    } else {
      return __s17param0.y <= __s17param1.y != __s17param0.y < __s17param2.y;
    }
  };
  return GeomUtil;
}();
exports.GeomUtil = __s0local1;
