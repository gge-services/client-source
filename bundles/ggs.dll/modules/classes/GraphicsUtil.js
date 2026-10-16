Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ArrowStyle = require("gge-module:class_ArrowStyle");
var __dep_class_GeomUtil = require("gge-module:class_GeomUtil");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function GraphicsUtil() {}
  GraphicsUtil.drawArrow = function (__s5param0, __s5param1, __s5param2, __s5param3 = null) {
    if (!__s5param1.equals(__s5param2)) {
      var __s5local0;
      __s5local0 = __s5param3 == null ? new __dep_class_ArrowStyle.ArrowStyle() : __s5param3 instanceof __dep_class_ArrowStyle.ArrowStyle ? __s5param3 : new __dep_class_ArrowStyle.ArrowStyle(__s5param3);
      var __s5local1 = __s5param2.subtract(__s5param1);
      var __s5local2 = __s5local0.headWidth != -1 ? __s5local0.headWidth / 2 : __s5local0.headLength / 2;
      var __s5local3 = new __s0local0(__s5local1.y, -__s5local1.x);
      __s5local3.normalize(__s5local0.shaftThickness / 2);
      var __s5local4 = __s5param1.add(__s5local3);
      var __s5local5 = __s5param1.subtract(__s5local3);
      var __s5local6 = __s5param2.add(__s5local3);
      var __s5local7 = __s5param2.subtract(__s5local3);
      var __s5local8 = __s5local1.clone();
      __s5local8.normalize(__s5local8.length - __s5local0.headLength);
      __s5local8 = __s5local8.add(__s5param1);
      var __s5local9 = __s5local3.clone();
      __s5local9.normalize(__s5local2);
      var __s5local10 = __s5local8.add(__s5local9);
      var __s5local11 = __s5local8.subtract(__s5local9);
      var __s5local12 = __s0local0.interpolate(__s5param2, __s5local8, __s5local0.shaftPosition);
      var __s5local13 = __dep_class_GeomUtil.GeomUtil.getLineIntersection(__s5local4, __s5local6, __s5local12, __s5local10);
      var __s5local14 = __dep_class_GeomUtil.GeomUtil.getLineIntersection(__s5local5, __s5local7, __s5local12, __s5local11);
      var __s5local15 = __s0local0.interpolate(__s5param2, __s5local8, __s5local0.edgeControlPosition);
      var __s5local16 = __s5local3.clone();
      __s5local16.normalize(__s5local2 * __s5local0.edgeControlSize);
      var __s5local17 = __s5local15.add(__s5local16);
      var __s5local18 = __s5local15.subtract(__s5local16);
      __s5param0.moveTo(__s5local4.x, __s5local4.y);
      __s5param0.lineTo(__s5local13.x, __s5local13.y);
      __s5param0.lineTo(__s5local10.x, __s5local10.y);
      __s5param0.curveTo(__s5local17.x, __s5local17.y, __s5param2.x, __s5param2.y);
      __s5param0.curveTo(__s5local18.x, __s5local18.y, __s5local11.x, __s5local11.y);
      __s5param0.lineTo(__s5local14.x, __s5local14.y);
      __s5param0.lineTo(__s5local5.x, __s5local5.y);
      __s5param0.lineTo(__s5local4.x, __s5local4.y);
    }
  };
  GraphicsUtil.drawArrowBezier = function (__s8param0, __s8param1, __s8param2, __s8param3 = null) {
    if (!__s8param1.equals(__s8param2)) {
      var __s8local0;
      __s8local0 = __s8param3 == null ? new __dep_class_ArrowStyle.ArrowStyle() : __s8param3 instanceof __dep_class_ArrowStyle.ArrowStyle ? __s8param3 : new __dep_class_ArrowStyle.ArrowStyle(__s8param3);
      var __s8local1 = __s8param2.subtract(__s8param1);
      var __s8local2 = __s8local0.headWidth != -1 ? __s8local0.headWidth / 2 : __s8local0.headLength / 2;
      var __s8local3 = new __s0local0(__s8local1.y, -__s8local1.x);
      __s8local3.normalize(__s8local0.shaftThickness / 2);
      var __s8local4 = __s8param1.add(__s8local3);
      var __s8local5 = __s8param1.subtract(__s8local3);
      var __s8local6 = __s8param2.add(__s8local3);
      var __s8local7 = __s8param2.subtract(__s8local3);
      var __s8local8 = __s8local1.clone();
      __s8local8.normalize(__s8local8.length - __s8local0.headLength);
      __s8local8 = __s8local8.add(__s8param1);
      var __s8local9 = __s8local3.clone();
      __s8local9.normalize(__s8local2);
      var __s8local10 = __s8local8.add(__s8local9);
      var __s8local11 = __s8local8.subtract(__s8local9);
      var __s8local12 = __s0local0.interpolate(__s8param2, __s8local8, __s8local0.shaftPosition);
      var __s8local13 = __dep_class_GeomUtil.GeomUtil.getLineIntersection(__s8local4, __s8local6, __s8local12, __s8local10);
      var __s8local14 = __dep_class_GeomUtil.GeomUtil.getLineIntersection(__s8local5, __s8local7, __s8local12, __s8local11);
      var __s8local15 = GraphicsUtil.getCurveControlPoint(__s8local4, __s8local13);
      var __s8local16 = GraphicsUtil.getCurveControlPoint(__s8local5, __s8local14);
      var __s8local17 = __s0local0.interpolate(__s8param2, __s8local8, __s8local0.edgeControlPosition);
      var __s8local18 = __s8local3.clone();
      __s8local18.normalize(__s8local2 * __s8local0.edgeControlSize);
      var __s8local19 = __s8local17.add(__s8local18);
      var __s8local20 = __s8local17.subtract(__s8local18);
      __s8param0.moveTo(__s8local4.x, __s8local4.y);
      __s8param0.curveTo(__s8local15.x, __s8local15.y, __s8local13.x, __s8local13.y);
      __s8param0.lineTo(__s8local10.x, __s8local10.y);
      __s8param0.curveTo(__s8local19.x, __s8local19.y, __s8param2.x, __s8param2.y);
      __s8param0.curveTo(__s8local20.x, __s8local20.y, __s8local11.x, __s8local11.y);
      __s8param0.lineTo(__s8local14.x, __s8local14.y);
      __s8param0.curveTo(__s8local16.x, __s8local16.y, __s8local5.x, __s8local5.y);
      __s8param0.lineTo(__s8local4.x, __s8local4.y);
      var __s8local21 = [__s8local4, __s8local13, __s8local10, __s8param2,, __s8local11, __s8local14, __s8local5];
      return GraphicsUtil.getBoundsByPoints(__s8local21);
    }
  };
  GraphicsUtil.getCurveControlPoint = function (__s11param0, __s11param1) {
    var __s11local0 = __s0local0.distance(__s11param0, __s11param1);
    var __s11local1 = __s11param1.subtract(__s11param0);
    var __s11local2 = new __s0local0(__s11local1.y, -__s11local1.x);
    __s11local2.normalize(__s11local0 * GraphicsUtil.BEZIER_LENGTH_TO_CURVE);
    var __s11local3 = __s0local0.interpolate(__s11param0, __s11param1, 0.5);
    return __s11local3 = __s11local1.x >= 0 ? __s11local3.add(__s11local2) : __s11local3.subtract(__s11local2);
  };
  GraphicsUtil.drawArrowHead = function (__s13param0, __s13param1, __s13param2, __s13param3) {
    var __s13local0;
    if (__s13param3 === undefined) {
      __s13param3 = null;
    }
    __s13local0 = __s13param3 == null ? new __dep_class_ArrowStyle.ArrowStyle() : __s13param3 instanceof __dep_class_ArrowStyle.ArrowStyle ? __s13param3 : new __dep_class_ArrowStyle.ArrowStyle(__s13param3);
    var __s13local1 = __s13param2.subtract(__s13param1);
    var __s13local2 = __s13local0.headWidth != -1 ? __s13local0.headWidth / 2 : __s13local1.length / 2;
    var __s13local3 = __s13local1.clone();
    __s13local3.normalize(__s13local1.length * __s13local0.shaftPosition);
    __s13local3 = __s13param1.add(__s13local3);
    var __s13local4 = (__s13local1 = new __s0local0(__s13local1.y, -__s13local1.x)).clone();
    __s13local4.normalize(__s13local0.shaftControlSize * __s13local2);
    var __s13local5 = __s0local0.interpolate(__s13param1, __s13local3, __s13local0.shaftControlPosition);
    var __s13local6 = __s13local5.add(__s13local4);
    var __s13local7 = __s13local5.subtract(__s13local4);
    __s13local1.normalize(__s13local2);
    var __s13local8 = __s13param1.add(__s13local1);
    var __s13local9 = __s13param1.subtract(__s13local1);
    var __s13local10 = __s0local0.interpolate(__s13param1, __s13param2, __s13local0.edgeControlPosition);
    __s13local1.normalize(__s13local2 * __s13local0.edgeControlSize);
    var __s13local11 = __s13local10.add(__s13local1);
    var __s13local12 = __s13local10.subtract(__s13local1);
    __s13param0.moveTo(__s13local8.x, __s13local8.y);
    __s13param0.curveTo(__s13local6.x, __s13local6.y, __s13local3.x, __s13local3.y);
    __s13param0.curveTo(__s13local7.x, __s13local7.y, __s13local9.x, __s13local9.y);
    __s13param0.curveTo(__s13local12.x, __s13local12.y, __s13param2.x, __s13param2.y);
    __s13param0.curveTo(__s13local11.x, __s13local11.y, __s13local8.x, __s13local8.y);
  };
  GraphicsUtil.BEZIER_LENGTH_TO_CURVE = 0.1;
  GraphicsUtil.rotatePoint = function (__s16param0, __s16param1) {
    return new __s0local0(__s16param0.x * Math.cos(__s16param1) - __s16param0.y * Math.sin(__s16param1), __s16param0.y * Math.cos(__s16param1) + __s16param0.x * Math.sin(__s16param1));
  };
  GraphicsUtil.getBoundsByPoints = function (__s18param0) {
    var __s18local0 = Number.MAX_VALUE;
    var __s18local1 = Number.MIN_VALUE;
    var __s18local2 = Number.MAX_VALUE;
    var __s18local3 = Number.MIN_VALUE;
    __s18param0.forEach(function (__s20param0) {
      __s18local0 = __s18local0 > __s20param0.x ? __s20param0.x : __s18local0;
      __s18local1 = __s18local1 < __s20param0.x ? __s20param0.x : __s18local1;
      __s18local2 = __s18local2 > __s20param0.y ? __s20param0.y : __s18local2;
      __s18local3 = __s18local3 < __s20param0.y ? __s20param0.y : __s18local3;
    });
    return new createjs.Rectangle(__s18local0, __s18local2, __s18local1 - __s18local0, __s18local3 - __s18local2);
  };
  return GraphicsUtil;
}();
exports.GraphicsUtil = __s0local1;
