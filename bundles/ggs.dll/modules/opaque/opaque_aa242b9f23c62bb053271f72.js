import * as __s0local0 from "./1.js";
var __s0local1 = 180 / Math.PI;
var __s0local2 = [];
var __s0local3 = [];
var __s0local4 = [];
var __s0local5 = {};
var __s0local6 = __s0local0._gsScope._gsDefine.globals;
function __s0local7(__s1param0, __s1param1, __s1param2, __s1param3) {
  if (__s1param2 === __s1param3) {
    __s1param2 = __s1param3 - (__s1param3 - __s1param1) / 1000000;
  }
  if (__s1param0 === __s1param1) {
    __s1param1 = __s1param0 + (__s1param2 - __s1param0) / 1000000;
  }
  this.a = __s1param0;
  this.b = __s1param1;
  this.c = __s1param2;
  this.d = __s1param3;
  this.da = __s1param3 - __s1param0;
  this.ca = __s1param2 - __s1param0;
  this.ba = __s1param1 - __s1param0;
}
function __s0local8(__s5param0, __s5param1, __s5param2, __s5param3) {
  var __s5local0 = {
    a: __s5param0
  };
  var __s5local1 = {};
  var __s5local2 = {};
  var __s5local3 = {
    c: __s5param3
  };
  var __s5local4 = (__s5param0 + __s5param1) / 2;
  var __s5local5 = (__s5param1 + __s5param2) / 2;
  var __s5local6 = (__s5param2 + __s5param3) / 2;
  var __s5local7 = (__s5local4 + __s5local5) / 2;
  var __s5local8 = (__s5local5 + __s5local6) / 2;
  var __s5local9 = (__s5local8 - __s5local7) / 8;
  __s5local0.b = __s5local4 + (__s5param0 - __s5local4) / 4;
  __s5local1.b = __s5local7 + __s5local9;
  __s5local0.c = __s5local1.a = (__s5local0.b + __s5local1.b) / 2;
  __s5local1.c = __s5local2.a = (__s5local7 + __s5local8) / 2;
  __s5local2.b = __s5local8 - __s5local9;
  __s5local3.b = __s5local6 + (__s5param3 - __s5local6) / 4;
  __s5local2.c = __s5local3.a = (__s5local2.b + __s5local3.b) / 2;
  return [__s5local0, __s5local1, __s5local2, __s5local3];
}
function __s0local9(__s7param0, __s7param1, __s7param2, __s7param3, __s7param4) {
  var __s7local0;
  var __s7local1;
  var __s7local2;
  var __s7local3;
  var __s7local4;
  var __s7local5;
  var __s7local6;
  var __s7local7;
  var __s7local8;
  var __s7local9;
  var __s7local10;
  var __s7local11;
  var __s7local12;
  var __s7local13 = __s7param0.length - 1;
  var __s7local14 = 0;
  var __s7local15 = __s7param0[0].a;
  for (__s7local0 = 0; __s7local0 < __s7local13; __s7local0++) {
    __s7local1 = (__s7local4 = __s7param0[__s7local14]).a;
    __s7local2 = __s7local4.d;
    __s7local3 = __s7param0[__s7local14 + 1].d;
    if (__s7param4) {
      __s7local10 = __s0local2[__s7local0];
      __s7local12 = ((__s7local11 = __s0local3[__s7local0]) + __s7local10) * __s7param1 * 0.25 / (__s7param3 ? 0.5 : __s0local4[__s7local0] || 0.5);
      __s7local7 = __s7local2 - ((__s7local5 = __s7local2 - (__s7local2 - __s7local1) * (__s7param3 ? __s7param1 * 0.5 : __s7local10 !== 0 ? __s7local12 / __s7local10 : 0)) + (((__s7local6 = __s7local2 + (__s7local3 - __s7local2) * (__s7param3 ? __s7param1 * 0.5 : __s7local11 !== 0 ? __s7local12 / __s7local11 : 0)) - __s7local5) * (__s7local10 * 3 / (__s7local10 + __s7local11) + 0.5) / 4 || 0));
    } else {
      __s7local7 = __s7local2 - ((__s7local5 = __s7local2 - (__s7local2 - __s7local1) * __s7param1 * 0.5) + (__s7local6 = __s7local2 + (__s7local3 - __s7local2) * __s7param1 * 0.5)) / 2;
    }
    __s7local5 += __s7local7;
    __s7local6 += __s7local7;
    __s7local4.c = __s7local8 = __s7local5;
    __s7local4.b = __s7local0 !== 0 ? __s7local15 : __s7local15 = __s7local4.a + (__s7local4.c - __s7local4.a) * 0.6;
    __s7local4.da = __s7local2 - __s7local1;
    __s7local4.ca = __s7local8 - __s7local1;
    __s7local4.ba = __s7local15 - __s7local1;
    if (__s7param2) {
      __s7local9 = __s0local8(__s7local1, __s7local15, __s7local8, __s7local2);
      __s7param0.splice(__s7local14, 1, __s7local9[0], __s7local9[1], __s7local9[2], __s7local9[3]);
      __s7local14 += 4;
    } else {
      __s7local14++;
    }
    __s7local15 = __s7local6;
  }
  (__s7local4 = __s7param0[__s7local14]).b = __s7local15;
  __s7local4.c = __s7local15 + (__s7local4.d - __s7local15) * 0.4;
  __s7local4.da = __s7local4.d - __s7local4.a;
  __s7local4.ca = __s7local4.c - __s7local4.a;
  __s7local4.ba = __s7local15 - __s7local4.a;
  if (__s7param2) {
    __s7local9 = __s0local8(__s7local4.a, __s7local15, __s7local4.c, __s7local4.d);
    __s7param0.splice(__s7local14, 1, __s7local9[0], __s7local9[1], __s7local9[2], __s7local9[3]);
  }
}
function __s0local10(__s16param0, __s16param1, __s16param2, __s16param3) {
  var __s16local0;
  var __s16local1;
  var __s16local2;
  var __s16local3;
  var __s16local4;
  var __s16local5;
  var __s16local6 = [];
  if (__s16param3) {
    for (__s16local1 = (__s16param0 = [__s16param3].concat(__s16param0)).length; --__s16local1 > -1;) {
      if (typeof (__s16local5 = __s16param0[__s16local1][__s16param1]) == "string" && __s16local5.charAt(1) === "=") {
        __s16param0[__s16local1][__s16param1] = __s16param3[__s16param1] + Number(__s16local5.charAt(0) + __s16local5.substr(2));
      }
    }
  }
  if ((__s16local0 = __s16param0.length - 2) < 0) {
    __s16local6[0] = new __s0local7(__s16param0[0][__s16param1], 0, 0, __s16param0[0][__s16param1]);
    return __s16local6;
  }
  for (__s16local1 = 0; __s16local1 < __s16local0; __s16local1++) {
    __s16local2 = __s16param0[__s16local1][__s16param1];
    __s16local3 = __s16param0[__s16local1 + 1][__s16param1];
    __s16local6[__s16local1] = new __s0local7(__s16local2, 0, 0, __s16local3);
    if (__s16param2) {
      __s16local4 = __s16param0[__s16local1 + 2][__s16param1];
      __s0local2[__s16local1] = (__s0local2[__s16local1] || 0) + (__s16local3 - __s16local2) * (__s16local3 - __s16local2);
      __s0local3[__s16local1] = (__s0local3[__s16local1] || 0) + (__s16local4 - __s16local3) * (__s16local4 - __s16local3);
    }
  }
  __s16local6[__s16local1] = new __s0local7(__s16param0[__s16local1][__s16param1], 0, 0, __s16param0[__s16local1 + 1][__s16param1]);
  return __s16local6;
}
function __s0local11(__s26param0, __s26param1, __s26param2, __s26param3, __s26param4, __s26param5) {
  var __s26local0;
  var __s26local1;
  var __s26local2;
  var __s26local3;
  var __s26local4;
  var __s26local5;
  var __s26local6;
  var __s26local7;
  var __s26local8 = {};
  var __s26local9 = [];
  var __s26local10 = __s26param5 || __s26param0[0];
  __s26param4 = typeof __s26param4 == "string" ? "," + __s26param4 + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
  if (__s26param1 == null) {
    __s26param1 = 1;
  }
  for (__s26local1 in __s26param0[0]) {
    __s26local9.push(__s26local1);
  }
  if (__s26param0.length > 1) {
    __s26local7 = __s26param0[__s26param0.length - 1];
    __s26local6 = true;
    __s26local0 = __s26local9.length;
    while (--__s26local0 > -1) {
      __s26local1 = __s26local9[__s26local0];
      if (Math.abs(__s26local10[__s26local1] - __s26local7[__s26local1]) > 0.05) {
        __s26local6 = false;
        break;
      }
    }
    if (__s26local6) {
      __s26param0 = __s26param0.concat();
      if (__s26param5) {
        __s26param0.unshift(__s26param5);
      }
      __s26param0.push(__s26param0[1]);
      __s26param5 = __s26param0[__s26param0.length - 3];
    }
  }
  __s0local2.length = __s0local3.length = __s0local4.length = 0;
  __s26local0 = __s26local9.length;
  while (--__s26local0 > -1) {
    __s26local1 = __s26local9[__s26local0];
    __s0local5[__s26local1] = __s26param4.indexOf("," + __s26local1 + ",") !== -1;
    __s26local8[__s26local1] = __s0local10(__s26param0, __s26local1, __s0local5[__s26local1], __s26param5);
  }
  for (__s26local0 = __s0local2.length; --__s26local0 > -1;) {
    __s0local2[__s26local0] = Math.sqrt(__s0local2[__s26local0]);
    __s0local3[__s26local0] = Math.sqrt(__s0local3[__s26local0]);
  }
  if (!__s26param3) {
    for (__s26local0 = __s26local9.length; --__s26local0 > -1;) {
      if (__s0local5[__s26local1]) {
        __s26local5 = (__s26local2 = __s26local8[__s26local9[__s26local0]]).length - 1;
        __s26local3 = 0;
        for (; __s26local3 < __s26local5; __s26local3++) {
          __s26local4 = __s26local2[__s26local3 + 1].da / __s0local3[__s26local3] + __s26local2[__s26local3].da / __s0local2[__s26local3] || 0;
          __s0local4[__s26local3] = (__s0local4[__s26local3] || 0) + __s26local4 * __s26local4;
        }
      }
    }
    for (__s26local0 = __s0local4.length; --__s26local0 > -1;) {
      __s0local4[__s26local0] = Math.sqrt(__s0local4[__s26local0]);
    }
  }
  __s26local0 = __s26local9.length;
  __s26local3 = __s26param2 ? 4 : 1;
  while (--__s26local0 > -1) {
    __s26local2 = __s26local8[__s26local1 = __s26local9[__s26local0]];
    __s0local9(__s26local2, __s26param1, __s26param2, __s26param3, __s0local5[__s26local1]);
    if (__s26local6) {
      __s26local2.splice(0, __s26local3);
      __s26local2.splice(__s26local2.length - __s26local3, __s26local3);
    }
  }
  return __s26local8;
}
function __s0local12(__s52param0, __s52param1, __s52param2) {
  var __s52local0;
  var __s52local1;
  var __s52local2;
  var __s52local3;
  var __s52local4;
  var __s52local5;
  var __s52local6;
  var __s52local7;
  var __s52local8;
  var __s52local9;
  var __s52local10;
  var __s52local11 = 1 / __s52param2;
  for (var __s52local12 = __s52param0.length; --__s52local12 > -1;) {
    __s52local2 = (__s52local9 = __s52param0[__s52local12]).a;
    __s52local3 = __s52local9.d - __s52local2;
    __s52local4 = __s52local9.c - __s52local2;
    __s52local5 = __s52local9.b - __s52local2;
    __s52local0 = __s52local1 = 0;
    __s52local7 = 1;
    for (; __s52local7 <= __s52param2; __s52local7++) {
      __s52local0 = __s52local1 - (__s52local1 = ((__s52local6 = __s52local11 * __s52local7) * __s52local6 * __s52local3 + (__s52local8 = 1 - __s52local6) * 3 * (__s52local6 * __s52local4 + __s52local8 * __s52local5)) * __s52local6);
      __s52param1[__s52local10 = __s52local12 * __s52param2 + __s52local7 - 1] = (__s52param1[__s52local10] || 0) + __s52local0 * __s52local0;
    }
  }
}
export var BezierPlugin = __s0local0._gsScope._gsDefine.plugin({
  propName: "bezier",
  priority: -1,
  version: "1.3.8",
  API: 2,
  global: true,
  init: function (__s58param0, __s58param1, __s58param2) {
    this._target = __s58param0;
    if (__s58param1 instanceof Array) {
      __s58param1 = {
        values: __s58param1
      };
    }
    this._func = {};
    this._mod = {};
    this._props = [];
    this._timeRes = __s58param1.timeResolution == null ? 6 : parseInt(__s58param1.timeResolution, 10);
    var __s58local0;
    var __s58local1;
    var __s58local2;
    var __s58local3;
    var __s58local4;
    var __s58local5 = __s58param1.values || [];
    var __s58local6 = {};
    var __s58local7 = __s58local5[0];
    var __s58local8 = __s58param1.autoRotate || __s58param2.vars.orientToBezier;
    this._autoRotate = __s58local8 ? __s58local8 instanceof Array ? __s58local8 : [["x", "y", "rotation", __s58local8 === true ? 0 : Number(__s58local8) || 0]] : null;
    for (__s58local0 in __s58local7) {
      this._props.push(__s58local0);
    }
    for (__s58local2 = this._props.length; --__s58local2 > -1;) {
      __s58local0 = this._props[__s58local2];
      this._overwriteProps.push(__s58local0);
      __s58local1 = this._func[__s58local0] = typeof __s58param0[__s58local0] == "function";
      __s58local6[__s58local0] = __s58local1 ? __s58param0[__s58local0.indexOf("set") || typeof __s58param0["get" + __s58local0.substr(3)] != "function" ? __s58local0 : "get" + __s58local0.substr(3)]() : parseFloat(__s58param0[__s58local0]);
      if (!__s58local4) {
        if (__s58local6[__s58local0] !== __s58local5[0][__s58local0]) {
          __s58local4 = __s58local6;
        }
      }
    }
    this._beziers = __s58param1.type !== "cubic" && __s58param1.type !== "quadratic" && __s58param1.type !== "soft" ? __s0local11(__s58local5, isNaN(__s58param1.curviness) ? 1 : __s58param1.curviness, false, __s58param1.type === "thruBasic", __s58param1.correlate, __s58local4) : function (__s67param0, __s67param1, __s67param2) {
      var __s67local0;
      var __s67local1;
      var __s67local2;
      var __s67local3;
      var __s67local4;
      var __s67local5;
      var __s67local6;
      var __s67local7;
      var __s67local8;
      var __s67local9;
      var __s67local10;
      var __s67local11 = {};
      var __s67local12 = (__s67param1 = __s67param1 || "soft") === "cubic" ? 3 : 2;
      var __s67local13 = __s67param1 === "soft";
      var __s67local14 = [];
      if (__s67local13 && __s67param2) {
        __s67param0 = [__s67param2].concat(__s67param0);
      }
      if (__s67param0 == null || __s67param0.length < __s67local12 + 1) {
        throw "invalid Bezier data";
      }
      for (__s67local8 in __s67param0[0]) {
        __s67local14.push(__s67local8);
      }
      for (__s67local5 = __s67local14.length; --__s67local5 > -1;) {
        __s67local11[__s67local8 = __s67local14[__s67local5]] = __s67local4 = [];
        __s67local9 = 0;
        __s67local7 = __s67param0.length;
        __s67local6 = 0;
        for (; __s67local6 < __s67local7; __s67local6++) {
          __s67local0 = __s67param2 == null ? __s67param0[__s67local6][__s67local8] : typeof (__s67local10 = __s67param0[__s67local6][__s67local8]) == "string" && __s67local10.charAt(1) === "=" ? __s67param2[__s67local8] + Number(__s67local10.charAt(0) + __s67local10.substr(2)) : Number(__s67local10);
          if (__s67local13 && __s67local6 > 1 && __s67local6 < __s67local7 - 1) {
            __s67local4[__s67local9++] = (__s67local0 + __s67local4[__s67local9 - 2]) / 2;
          }
          __s67local4[__s67local9++] = __s67local0;
        }
        __s67local7 = __s67local9 - __s67local12 + 1;
        __s67local9 = 0;
        __s67local6 = 0;
        for (; __s67local6 < __s67local7; __s67local6 += __s67local12) {
          __s67local0 = __s67local4[__s67local6];
          __s67local1 = __s67local4[__s67local6 + 1];
          __s67local2 = __s67local4[__s67local6 + 2];
          __s67local3 = __s67local12 === 2 ? 0 : __s67local4[__s67local6 + 3];
          __s67local4[__s67local9++] = __s67local10 = __s67local12 === 3 ? new __s0local7(__s67local0, __s67local1, __s67local2, __s67local3) : new __s0local7(__s67local0, (__s67local1 * 2 + __s67local0) / 3, (__s67local1 * 2 + __s67local2) / 3, __s67local2);
        }
        __s67local4.length = __s67local9;
      }
      return __s67local11;
    }(__s58local5, __s58param1.type, __s58local6);
    this._segCount = this._beziers[__s58local0].length;
    if (this._timeRes) {
      var __s58local9 = function (__s81param0, __s81param1) {
        var __s81local0;
        var __s81local1;
        var __s81local2;
        var __s81local3;
        var __s81local4 = [];
        var __s81local5 = [];
        var __s81local6 = 0;
        var __s81local7 = 0;
        var __s81local8 = (__s81param1 = __s81param1 >> 0 || 6) - 1;
        var __s81local9 = [];
        var __s81local10 = [];
        for (__s81local0 in __s81param0) {
          __s0local12(__s81param0[__s81local0], __s81local4, __s81param1);
        }
        __s81local2 = __s81local4.length;
        __s81local1 = 0;
        for (; __s81local1 < __s81local2; __s81local1++) {
          __s81local6 += Math.sqrt(__s81local4[__s81local1]);
          __s81local10[__s81local3 = __s81local1 % __s81param1] = __s81local6;
          if (__s81local3 === __s81local8) {
            __s81local7 += __s81local6;
            __s81local9[__s81local3 = __s81local1 / __s81param1 >> 0] = __s81local10;
            __s81local5[__s81local3] = __s81local7;
            __s81local6 = 0;
            __s81local10 = [];
          }
        }
        return {
          length: __s81local7,
          lengths: __s81local5,
          segments: __s81local9
        };
      }(this._beziers, this._timeRes);
      this._length = __s58local9.length;
      this._lengths = __s58local9.lengths;
      this._segments = __s58local9.segments;
      this._l1 = this._li = this._s1 = this._si = 0;
      this._l2 = this._lengths[0];
      this._curSeg = this._segments[0];
      this._s2 = this._curSeg[0];
      this._prec = 1 / this._curSeg.length;
    }
    if (__s58local8 = this._autoRotate) {
      this._initialRotations = [];
      if (!(__s58local8[0] instanceof Array)) {
        this._autoRotate = __s58local8 = [__s58local8];
      }
      __s58local2 = __s58local8.length;
      while (--__s58local2 > -1) {
        for (__s58local3 = 0; __s58local3 < 3; __s58local3++) {
          __s58local0 = __s58local8[__s58local2][__s58local3];
          this._func[__s58local0] = typeof __s58param0[__s58local0] == "function" && __s58param0[__s58local0.indexOf("set") || typeof __s58param0["get" + __s58local0.substr(3)] != "function" ? __s58local0 : "get" + __s58local0.substr(3)];
        }
        __s58local0 = __s58local8[__s58local2][2];
        this._initialRotations[__s58local2] = (this._func[__s58local0] ? this._func[__s58local0].call(this._target) : this._target[__s58local0]) || 0;
        this._overwriteProps.push(__s58local0);
      }
    }
    this._startRatio = __s58param2.vars.runBackwards ? 1 : 0;
    return true;
  },
  set: function (__s94param0) {
    var __s94local0;
    var __s94local1;
    var __s94local2;
    var __s94local3;
    var __s94local4;
    var __s94local5;
    var __s94local6;
    var __s94local7;
    var __s94local8;
    var __s94local9;
    var __s94local10 = this._segCount;
    var __s94local11 = this._func;
    var __s94local12 = this._target;
    var __s94local13 = __s94param0 !== this._startRatio;
    if (this._timeRes) {
      __s94local8 = this._lengths;
      __s94local9 = this._curSeg;
      __s94param0 *= this._length;
      __s94local2 = this._li;
      if (__s94param0 > this._l2 && __s94local2 < __s94local10 - 1) {
        for (__s94local7 = __s94local10 - 1; __s94local2 < __s94local7 && (this._l2 = __s94local8[++__s94local2]) <= __s94param0;);
        this._l1 = __s94local8[__s94local2 - 1];
        this._li = __s94local2;
        this._curSeg = __s94local9 = this._segments[__s94local2];
        this._s2 = __s94local9[this._s1 = this._si = 0];
      } else if (__s94param0 < this._l1 && __s94local2 > 0) {
        while (__s94local2 > 0 && (this._l1 = __s94local8[--__s94local2]) >= __s94param0);
        if (__s94local2 === 0 && __s94param0 < this._l1) {
          this._l1 = 0;
        } else {
          __s94local2++;
        }
        this._l2 = __s94local8[__s94local2];
        this._li = __s94local2;
        this._curSeg = __s94local9 = this._segments[__s94local2];
        this._s1 = __s94local9[(this._si = __s94local9.length - 1) - 1] || 0;
        this._s2 = __s94local9[this._si];
      }
      __s94local0 = __s94local2;
      __s94param0 -= this._l1;
      __s94local2 = this._si;
      if (__s94param0 > this._s2 && __s94local2 < __s94local9.length - 1) {
        for (__s94local7 = __s94local9.length - 1; __s94local2 < __s94local7 && (this._s2 = __s94local9[++__s94local2]) <= __s94param0;);
        this._s1 = __s94local9[__s94local2 - 1];
        this._si = __s94local2;
      } else if (__s94param0 < this._s1 && __s94local2 > 0) {
        while (__s94local2 > 0 && (this._s1 = __s94local9[--__s94local2]) >= __s94param0);
        if (__s94local2 === 0 && __s94param0 < this._s1) {
          this._s1 = 0;
        } else {
          __s94local2++;
        }
        this._s2 = __s94local9[__s94local2];
        this._si = __s94local2;
      }
      __s94local5 = (__s94local2 + (__s94param0 - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
    } else {
      __s94local5 = (__s94param0 - (__s94local0 = __s94param0 < 0 ? 0 : __s94param0 >= 1 ? __s94local10 - 1 : __s94local10 * __s94param0 >> 0) * (1 / __s94local10)) * __s94local10;
    }
    __s94local1 = 1 - __s94local5;
    __s94local2 = this._props.length;
    while (--__s94local2 > -1) {
      __s94local3 = this._props[__s94local2];
      __s94local6 = (__s94local5 * __s94local5 * (__s94local4 = this._beziers[__s94local3][__s94local0]).da + __s94local1 * 3 * (__s94local5 * __s94local4.ca + __s94local1 * __s94local4.ba)) * __s94local5 + __s94local4.a;
      if (this._mod[__s94local3]) {
        __s94local6 = this._mod[__s94local3](__s94local6, __s94local12);
      }
      if (__s94local11[__s94local3]) {
        __s94local12[__s94local3](__s94local6);
      } else {
        __s94local12[__s94local3] = __s94local6;
      }
    }
    if (this._autoRotate) {
      var __s94local14;
      var __s94local15;
      var __s94local16;
      var __s94local17;
      var __s94local18;
      var __s94local19;
      var __s94local20;
      var __s94local21 = this._autoRotate;
      for (__s94local2 = __s94local21.length; --__s94local2 > -1;) {
        __s94local3 = __s94local21[__s94local2][2];
        __s94local19 = __s94local21[__s94local2][3] || 0;
        __s94local20 = __s94local21[__s94local2][4] === true ? 1 : __s0local1;
        __s94local4 = this._beziers[__s94local21[__s94local2][0]];
        __s94local14 = this._beziers[__s94local21[__s94local2][1]];
        if (__s94local4 && __s94local14) {
          __s94local4 = __s94local4[__s94local0];
          __s94local14 = __s94local14[__s94local0];
          __s94local15 = __s94local4.a + (__s94local4.b - __s94local4.a) * __s94local5;
          __s94local15 += ((__s94local17 = __s94local4.b + (__s94local4.c - __s94local4.b) * __s94local5) - __s94local15) * __s94local5;
          __s94local17 += (__s94local4.c + (__s94local4.d - __s94local4.c) * __s94local5 - __s94local17) * __s94local5;
          __s94local16 = __s94local14.a + (__s94local14.b - __s94local14.a) * __s94local5;
          __s94local16 += ((__s94local18 = __s94local14.b + (__s94local14.c - __s94local14.b) * __s94local5) - __s94local16) * __s94local5;
          __s94local18 += (__s94local14.c + (__s94local14.d - __s94local14.c) * __s94local5 - __s94local18) * __s94local5;
          __s94local6 = __s94local13 ? Math.atan2(__s94local18 - __s94local16, __s94local17 - __s94local15) * __s94local20 + __s94local19 : this._initialRotations[__s94local2];
          if (this._mod[__s94local3]) {
            __s94local6 = this._mod[__s94local3](__s94local6, __s94local12);
          }
          if (__s94local11[__s94local3]) {
            __s94local12[__s94local3](__s94local6);
          } else {
            __s94local12[__s94local3] = __s94local6;
          }
        }
      }
    }
  }
});
var __s0local13 = BezierPlugin.prototype;
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
BezierPlugin.bezierThrough = __s0local11;
BezierPlugin.cubicToQuadratic = __s0local8;
BezierPlugin._autoCSS = true;
BezierPlugin.quadraticToCubic = function (__s122param0, __s122param1, __s122param2) {
  return new __s0local7(__s122param0, (__s122param1 * 2 + __s122param0) / 3, (__s122param1 * 2 + __s122param2) / 3, __s122param2);
};
BezierPlugin._cssRegister = function () {
  var __s124local0 = __s0local6.CSSPlugin;
  if (__s124local0) {
    var __s124local1 = __s124local0._internals;
    var __s124local2 = __s124local1._parseToProxy;
    var __s124local3 = __s124local1._setPluginRatio;
    var __s124local4 = __s124local1.CSSPropTween;
    __s124local1._registerComplexSpecialProp("bezier", {
      parser: function (__s127param0, __s127param1, __s127param2, __s127param3, __s127param4, __s127param5) {
        if (__s127param1 instanceof Array) {
          __s127param1 = {
            values: __s127param1
          };
        }
        __s127param5 = new BezierPlugin();
        var __s127local0;
        var __s127local1;
        var __s127local2;
        var __s127local3 = __s127param1.values;
        var __s127local4 = __s127local3.length - 1;
        var __s127local5 = [];
        var __s127local6 = {};
        if (__s127local4 < 0) {
          return __s127param4;
        }
        for (__s127local0 = 0; __s127local0 <= __s127local4; __s127local0++) {
          __s127local2 = __s124local2(__s127param0, __s127local3[__s127local0], __s127param3, __s127param4, __s127param5, __s127local4 !== __s127local0);
          __s127local5[__s127local0] = __s127local2.end;
        }
        for (__s127local1 in __s127param1) {
          __s127local6[__s127local1] = __s127param1[__s127local1];
        }
        __s127local6.values = __s127local5;
        (__s127param4 = new __s124local4(__s127param0, "bezier", 0, 0, __s127local2.pt, 2)).data = __s127local2;
        __s127param4.plugin = __s127param5;
        __s127param4.setRatio = __s124local3;
        if (__s127local6.autoRotate === 0) {
          __s127local6.autoRotate = true;
        }
        if (!!__s127local6.autoRotate && !(__s127local6.autoRotate instanceof Array)) {
          __s127local0 = __s127local6.autoRotate === true ? 0 : Number(__s127local6.autoRotate);
          __s127local6.autoRotate = __s127local2.end.left != null ? [["left", "top", "rotation", __s127local0, false]] : __s127local2.end.x != null && [["x", "y", "rotation", __s127local0, false]];
        }
        if (__s127local6.autoRotate) {
          if (!__s127param3._transform) {
            __s127param3._enableTransforms(false);
          }
          __s127local2.autoRotate = __s127param3._target._gsTransform;
          __s127local2.proxy.rotation = __s127local2.autoRotate.rotation || 0;
          __s127param3._overwriteProps.push("rotation");
        }
        __s127param5._onInitTween(__s127local2.proxy, __s127local6, __s127param3._tween);
        return __s127param4;
      }
    });
  }
};
__s0local13._mod = function (__s139param0) {
  var __s139local0;
  var __s139local1 = this._overwriteProps;
  for (var __s139local2 = __s139local1.length; --__s139local2 > -1;) {
    if ((__s139local0 = __s139param0[__s139local1[__s139local2]]) && typeof __s139local0 == "function") {
      this._mod[__s139local1[__s139local2]] = __s139local0;
    }
  }
};
__s0local13._kill = function (__s144param0) {
  var __s144local0;
  var __s144local1;
  var __s144local2 = this._props;
  for (__s144local0 in this._beziers) {
    if (__s144local0 in __s144param0) {
      delete this._beziers[__s144local0];
      delete this._func[__s144local0];
      __s144local1 = __s144local2.length;
      while (--__s144local1 > -1) {
        if (__s144local2[__s144local1] === __s144local0) {
          __s144local2.splice(__s144local1, 1);
        }
      }
    }
  }
  if (__s144local2 = this._autoRotate) {
    for (__s144local1 = __s144local2.length; --__s144local1 > -1;) {
      if (__s144param0[__s144local2[__s144local1][2]]) {
        __s144local2.splice(__s144local1, 1);
      }
    }
  }
  return this._super._kill.call(this, __s144param0);
};
