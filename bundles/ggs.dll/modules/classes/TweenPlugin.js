import * as __s0local0 from "./1.js";
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
__s0local0._gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function () {
  var __s1local0;
  var __s1local1;
  var __s1local2;
  var __s1local3;
  function __s1local4() {
    __s0local0.TweenPlugin.call(this, "css");
    this._overwriteProps.length = 0;
    this.setRatio = __s1local4.prototype.setRatio;
  }
  var __s1local5 = __s0local0._gsScope._gsDefine.globals;
  var __s1local6 = {};
  var __s1local7 = __s1local4.prototype = new __s0local0.TweenPlugin("css");
  __s1local7.constructor = __s1local4;
  __s1local4.version = "2.0.2";
  __s1local4.API = 2;
  __s1local4.defaultTransformPerspective = 0;
  __s1local4.defaultSkewType = "compensated";
  __s1local4.defaultSmoothOrigin = true;
  __s1local7 = "px";
  __s1local4.suffixMap = {
    top: __s1local7,
    right: __s1local7,
    bottom: __s1local7,
    left: __s1local7,
    width: __s1local7,
    height: __s1local7,
    fontSize: __s1local7,
    padding: __s1local7,
    margin: __s1local7,
    perspective: __s1local7,
    lineHeight: ""
  };
  var __s1local8;
  var __s1local9;
  var __s1local10;
  var __s1local11;
  var __s1local12;
  var __s1local13;
  var __s1local14;
  var __s1local15;
  var __s1local16 = /(?:\-|\.|\b)(\d|\.|e\-)+/g;
  var __s1local17 = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
  var __s1local18 = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi;
  var __s1local19 = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g;
  var __s1local20 = /(?:\d|\-|\+|=|#|\.)*/g;
  var __s1local21 = /opacity *= *([^)]*)/i;
  var __s1local22 = /opacity:([^;]*)/i;
  var __s1local23 = /alpha\(opacity *=.+?\)/i;
  var __s1local24 = /^(rgb|hsl)/;
  var __s1local25 = /([A-Z])/g;
  var __s1local26 = /-([a-z])/gi;
  var __s1local27 = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi;
  function __s1local28(__s5param0, __s5param1) {
    return __s5param1.toUpperCase();
  }
  var __s1local29 = /(?:Left|Right|Width)/i;
  var __s1local30 = /(M11|M12|M21|M22)=[\d\-\.e]+/gi;
  var __s1local31 = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i;
  var __s1local32 = /,(?=[^\)]*(?:\(|$))/gi;
  var __s1local33 = /[\s,\(]/i;
  var __s1local34 = Math.PI / 180;
  var __s1local35 = 180 / Math.PI;
  var __s1local36 = {};
  var __s1local37 = {
    style: {}
  };
  var __s1local38 = __s0local0._gsScope.document || {
    createElement: function () {
      return __s1local37;
    }
  };
  function __s1local39(__s9param0, __s9param1) {
    if (__s1local38.createElementNS) {
      return __s1local38.createElementNS(__s9param1 || "http://www.w3.org/1999/xhtml", __s9param0);
    } else {
      return __s1local38.createElement(__s9param0);
    }
  }
  var __s1local40 = __s1local39("div");
  var __s1local41 = __s1local39("img");
  var __s1local42 = __s1local4._internals = {
    _specialProps: __s1local6
  };
  var __s1local43 = (__s0local0._gsScope.navigator || {}).userAgent || "";
  var __s1local44 = function () {
    var __s13local0 = __s1local43.indexOf("Android");
    var __s13local1 = __s1local39("a");
    __s1local10 = __s1local43.indexOf("Safari") !== -1 && __s1local43.indexOf("Chrome") === -1 && (__s13local0 === -1 || parseFloat(__s1local43.substr(__s13local0 + 8, 2)) > 3);
    __s1local12 = __s1local10 && parseFloat(__s1local43.substr(__s1local43.indexOf("Version/") + 8, 2)) < 6;
    __s1local11 = __s1local43.indexOf("Firefox") !== -1;
    if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(__s1local43) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(__s1local43)) {
      __s1local13 = parseFloat(RegExp.$1);
    }
    return !!__s13local1 && (__s13local1.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(__s13local1.style.opacity));
  }();
  function __s1local45(__s16param0) {
    if (__s1local21.test(typeof __s16param0 == "string" ? __s16param0 : (__s16param0.currentStyle ? __s16param0.currentStyle.filter : __s16param0.style.filter) || "")) {
      return parseFloat(RegExp.$1) / 100;
    } else {
      return 1;
    }
  }
  function __s1local46(__s20param0) {
    if (__s0local0._gsScope.console) {
      console.log(__s20param0);
    }
  }
  var __s1local47 = "";
  var __s1local48 = "";
  function __s1local49(__s23param0, __s23param1) {
    var __s23local0;
    var __s23local1;
    var __s23local2 = (__s23param1 = __s23param1 || __s1local40).style;
    if (__s23local2[__s23param0] !== undefined) {
      return __s23param0;
    }
    __s23param0 = __s23param0.charAt(0).toUpperCase() + __s23param0.substr(1);
    __s23local0 = ["O", "Moz", "ms", "Ms", "Webkit"];
    __s23local1 = 5;
    while (--__s23local1 > -1 && __s23local2[__s23local0[__s23local1] + __s23param0] === undefined);
    if (__s23local1 >= 0) {
      __s1local47 = "-" + (__s1local48 = __s23local1 === 3 ? "ms" : __s23local0[__s23local1]).toLowerCase() + "-";
      return __s1local48 + __s23param0;
    } else {
      return null;
    }
  }
  var __s1local50 = (typeof window != "undefined" ? window : __s1local38.defaultView || {
    getComputedStyle: function () {}
  }).getComputedStyle;
  var __s1local51 = __s1local4.getStyle = function (__s31param0, __s31param1, __s31param2, __s31param3, __s31param4) {
    var __s31local0;
    if (__s1local44 || __s31param1 !== "opacity") {
      if (!__s31param3 && __s31param0.style[__s31param1]) {
        __s31local0 = __s31param0.style[__s31param1];
      } else if (__s31param2 = __s31param2 || __s1local50(__s31param0)) {
        __s31local0 = __s31param2[__s31param1] || __s31param2.getPropertyValue(__s31param1) || __s31param2.getPropertyValue(__s31param1.replace(__s1local25, "-$1").toLowerCase());
      } else if (__s31param0.currentStyle) {
        __s31local0 = __s31param0.currentStyle[__s31param1];
      }
      if (__s31param4 == null || __s31local0 && __s31local0 !== "none" && __s31local0 !== "auto" && __s31local0 !== "auto auto") {
        return __s31local0;
      } else {
        return __s31param4;
      }
    } else {
      return __s1local45(__s31param0);
    }
  };
  var __s1local52 = __s1local42.convertToPixels = function (__s40param0, __s40param1, __s40param2, __s40param3, __s40param4) {
    if (__s40param3 === "px" || !__s40param3 && __s40param1 !== "lineHeight") {
      return __s40param2;
    }
    if (__s40param3 === "auto" || !__s40param2) {
      return 0;
    }
    var __s40local0;
    var __s40local1;
    var __s40local2;
    var __s40local3 = __s1local29.test(__s40param1);
    var __s40local4 = __s40param0;
    var __s40local5 = __s1local40.style;
    var __s40local6 = __s40param2 < 0;
    var __s40local7 = __s40param2 === 1;
    if (__s40local6) {
      __s40param2 = -__s40param2;
    }
    if (__s40local7) {
      __s40param2 *= 100;
    }
    if (__s40param1 !== "lineHeight" || __s40param3) {
      if (__s40param3 === "%" && __s40param1.indexOf("border") !== -1) {
        __s40local0 = __s40param2 / 100 * (__s40local3 ? __s40param0.clientWidth : __s40param0.clientHeight);
      } else {
        __s40local5.cssText = "border:0 solid red;position:" + __s1local51(__s40param0, "position") + ";line-height:0;";
        if (__s40param3 !== "%" && __s40local4.appendChild && __s40param3.charAt(0) !== "v" && __s40param3 !== "rem") {
          __s40local5[__s40local3 ? "borderLeftWidth" : "borderTopWidth"] = __s40param2 + __s40param3;
        } else {
          __s40local4 = __s40param0.parentNode || __s1local38.body;
          if (__s1local51(__s40local4, "display").indexOf("flex") !== -1) {
            __s40local5.position = "absolute";
          }
          __s40local1 = __s40local4._gsCache;
          __s40local2 = __s0local0.default.ticker.frame;
          if (__s40local1 && __s40local3 && __s40local1.time === __s40local2) {
            return __s40local1.width * __s40param2 / 100;
          }
          __s40local5[__s40local3 ? "width" : "height"] = __s40param2 + __s40param3;
        }
        __s40local4.appendChild(__s1local40);
        __s40local0 = parseFloat(__s1local40[__s40local3 ? "offsetWidth" : "offsetHeight"]);
        __s40local4.removeChild(__s1local40);
        if (__s40local3 && __s40param3 === "%" && __s1local4.cacheWidths !== false) {
          (__s40local1 = __s40local4._gsCache = __s40local4._gsCache || {}).time = __s40local2;
          __s40local1.width = __s40local0 / __s40param2 * 100;
        }
        if (__s40local0 === 0 && !__s40param4) {
          __s40local0 = __s1local52(__s40param0, __s40param1, __s40param2, __s40param3, true);
        }
      }
    } else {
      __s40local1 = __s1local50(__s40param0).lineHeight;
      __s40param0.style.lineHeight = __s40param2;
      __s40local0 = parseFloat(__s1local50(__s40param0).lineHeight);
      __s40param0.style.lineHeight = __s40local1;
    }
    if (__s40local7) {
      __s40local0 /= 100;
    }
    if (__s40local6) {
      return -__s40local0;
    } else {
      return __s40local0;
    }
  };
  var __s1local53 = __s1local42.calculateOffset = function (__s59param0, __s59param1, __s59param2) {
    if (__s1local51(__s59param0, "position", __s59param2) !== "absolute") {
      return 0;
    }
    var __s59local0 = __s59param1 === "left" ? "Left" : "Top";
    var __s59local1 = __s1local51(__s59param0, "margin" + __s59local0, __s59param2);
    return __s59param0["offset" + __s59local0] - (__s1local52(__s59param0, __s59param1, parseFloat(__s59local1), __s59local1.replace(__s1local20, "")) || 0);
  };
  function __s1local54(__s62param0, __s62param1) {
    var __s62local0;
    var __s62local1;
    var __s62local2;
    var __s62local3 = {};
    if (__s62param1 = __s62param1 || __s1local50(__s62param0, null)) {
      if (__s62local0 = __s62param1.length) {
        while (--__s62local0 > -1) {
          if ((__s62local2 = __s62param1[__s62local0]).indexOf("-transform") === -1 || __s1local85 === __s62local2) {
            __s62local3[__s62local2.replace(__s1local26, __s1local28)] = __s62param1.getPropertyValue(__s62local2);
          }
        }
      } else {
        for (__s62local0 in __s62param1) {
          if (__s62local0.indexOf("Transform") === -1 || __s1local84 === __s62local0) {
            __s62local3[__s62local0] = __s62param1[__s62local0];
          }
        }
      }
    } else if (__s62param1 = __s62param0.currentStyle || __s62param0.style) {
      for (__s62local0 in __s62param1) {
        if (typeof __s62local0 == "string" && __s62local3[__s62local0] === undefined) {
          __s62local3[__s62local0.replace(__s1local26, __s1local28)] = __s62param1[__s62local0];
        }
      }
    }
    if (!__s1local44) {
      __s62local3.opacity = __s1local45(__s62param0);
    }
    __s62local1 = __s1local98(__s62param0, __s62param1, false);
    __s62local3.rotation = __s62local1.rotation;
    __s62local3.skewX = __s62local1.skewX;
    __s62local3.scaleX = __s62local1.scaleX;
    __s62local3.scaleY = __s62local1.scaleY;
    __s62local3.x = __s62local1.x;
    __s62local3.y = __s62local1.y;
    if (__s1local87) {
      __s62local3.z = __s62local1.z;
      __s62local3.rotationX = __s62local1.rotationX;
      __s62local3.rotationY = __s62local1.rotationY;
      __s62local3.scaleZ = __s62local1.scaleZ;
    }
    if (__s62local3.filters) {
      delete __s62local3.filters;
    }
    return __s62local3;
  }
  function __s1local55(__s80param0, __s80param1, __s80param2, __s80param3, __s80param4) {
    var __s80local0;
    var __s80local1;
    var __s80local2;
    var __s80local3 = {};
    var __s80local4 = __s80param0.style;
    for (__s80local1 in __s80param2) {
      if (__s80local1 !== "cssText" && __s80local1 !== "length" && isNaN(__s80local1) && (__s80param1[__s80local1] !== (__s80local0 = __s80param2[__s80local1]) || __s80param4 && __s80param4[__s80local1]) && __s80local1.indexOf("Origin") === -1) {
        if (typeof __s80local0 == "number" || typeof __s80local0 == "string") {
          __s80local3[__s80local1] = __s80local0 !== "auto" || __s80local1 !== "left" && __s80local1 !== "top" ? __s80local0 !== "" && __s80local0 !== "auto" && __s80local0 !== "none" || typeof __s80param1[__s80local1] != "string" || __s80param1[__s80local1].replace(__s1local19, "") === "" ? __s80local0 : 0 : __s1local53(__s80param0, __s80local1);
          if (__s80local4[__s80local1] !== undefined) {
            __s80local2 = new __s1local70(__s80local4, __s80local1, __s80local4[__s80local1], __s80local2);
          }
        }
      }
    }
    if (__s80param3) {
      for (__s80local1 in __s80param3) {
        if (__s80local1 !== "className") {
          __s80local3[__s80local1] = __s80param3[__s80local1];
        }
      }
    }
    return {
      difs: __s80local3,
      firstMPT: __s80local2
    };
  }
  var __s1local56 = {
    width: ["Left", "Right"],
    height: ["Top", "Bottom"]
  };
  var __s1local57 = ["marginLeft", "marginRight", "marginTop", "marginBottom"];
  function __s1local58(__s91param0, __s91param1, __s91param2) {
    if ((__s91param0.nodeName + "").toLowerCase() === "svg") {
      return (__s91param2 || __s1local50(__s91param0))[__s91param1] || 0;
    }
    if (__s91param0.getCTM && __s1local95(__s91param0)) {
      return __s91param0.getBBox()[__s91param1] || 0;
    }
    var __s91local0 = parseFloat(__s91param1 === "width" ? __s91param0.offsetWidth : __s91param0.offsetHeight);
    var __s91local1 = __s1local56[__s91param1];
    var __s91local2 = __s91local1.length;
    for (__s91param2 = __s91param2 || __s1local50(__s91param0, null); --__s91local2 > -1;) {
      __s91local0 -= parseFloat(__s1local51(__s91param0, "padding" + __s91local1[__s91local2], __s91param2, true)) || 0;
      __s91local0 -= parseFloat(__s1local51(__s91param0, "border" + __s91local1[__s91local2] + "Width", __s91param2, true)) || 0;
    }
    return __s91local0;
  }
  function __s1local59(__s97param0, __s97param1) {
    if (__s97param0 === "contain" || __s97param0 === "auto" || __s97param0 === "auto auto") {
      return __s97param0 + " ";
    }
    if (__s97param0 == null || __s97param0 === "") {
      __s97param0 = "0 0";
    }
    var __s97local0;
    var __s97local1 = __s97param0.split(" ");
    var __s97local2 = __s97param0.indexOf("left") !== -1 ? "0%" : __s97param0.indexOf("right") !== -1 ? "100%" : __s97local1[0];
    var __s97local3 = __s97param0.indexOf("top") !== -1 ? "0%" : __s97param0.indexOf("bottom") !== -1 ? "100%" : __s97local1[1];
    if (__s97local1.length > 3 && !__s97param1) {
      __s97local1 = __s97param0.split(", ").join(",").split(",");
      __s97param0 = [];
      __s97local0 = 0;
      for (; __s97local0 < __s97local1.length; __s97local0++) {
        __s97param0.push(__s1local59(__s97local1[__s97local0]));
      }
      return __s97param0.join(",");
    }
    if (__s97local3 == null) {
      __s97local3 = __s97local2 === "center" ? "50%" : "0";
    } else if (__s97local3 === "center") {
      __s97local3 = "50%";
    }
    if (__s97local2 === "center" || isNaN(parseFloat(__s97local2)) && (__s97local2 + "").indexOf("=") === -1) {
      __s97local2 = "50%";
    }
    __s97param0 = __s97local2 + " " + __s97local3 + (__s97local1.length > 2 ? " " + __s97local1[2] : "");
    if (__s97param1) {
      __s97param1.oxp = __s97local2.indexOf("%") !== -1;
      __s97param1.oyp = __s97local3.indexOf("%") !== -1;
      __s97param1.oxr = __s97local2.charAt(1) === "=";
      __s97param1.oyr = __s97local3.charAt(1) === "=";
      __s97param1.ox = parseFloat(__s97local2.replace(__s1local19, ""));
      __s97param1.oy = parseFloat(__s97local3.replace(__s1local19, ""));
      __s97param1.v = __s97param0;
    }
    return __s97param1 || __s97param0;
  }
  function __s1local60(__s108param0, __s108param1) {
    if (typeof __s108param0 == "function") {
      __s108param0 = __s108param0(__s1local15, __s1local14);
    }
    if (typeof __s108param0 == "string" && __s108param0.charAt(1) === "=") {
      return parseInt(__s108param0.charAt(0) + "1", 10) * parseFloat(__s108param0.substr(2));
    } else {
      return parseFloat(__s108param0) - parseFloat(__s108param1) || 0;
    }
  }
  function __s1local61(__s113param0, __s113param1) {
    if (typeof __s113param0 == "function") {
      __s113param0 = __s113param0(__s1local15, __s1local14);
    }
    var __s113local0 = typeof __s113param0 == "string" && __s113param0.charAt(1) === "=";
    if (typeof __s113param0 == "string" && __s113param0.charAt(__s113param0.length - 2) === "v") {
      __s113param0 = (__s113local0 ? __s113param0.substr(0, 2) : 0) + window["inner" + (__s113param0.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(__s113local0 ? __s113param0.substr(2) : __s113param0) / 100);
    }
    if (__s113param0 == null) {
      return __s113param1;
    } else if (__s113local0) {
      return parseInt(__s113param0.charAt(0) + "1", 10) * parseFloat(__s113param0.substr(2)) + __s113param1;
    } else {
      return parseFloat(__s113param0) || 0;
    }
  }
  function __s1local62(__s120param0, __s120param1, __s120param2, __s120param3) {
    var __s120local0;
    var __s120local1;
    var __s120local2;
    var __s120local3;
    var __s120local4;
    if (typeof __s120param0 == "function") {
      __s120param0 = __s120param0(__s1local15, __s1local14);
    }
    if (__s120param0 == null) {
      __s120local3 = __s120param1;
    } else if (typeof __s120param0 == "number") {
      __s120local3 = __s120param0;
    } else {
      __s120local0 = 360;
      __s120local1 = __s120param0.split("_");
      __s120local2 = ((__s120local4 = __s120param0.charAt(1) === "=") ? parseInt(__s120param0.charAt(0) + "1", 10) * parseFloat(__s120local1[0].substr(2)) : parseFloat(__s120local1[0])) * (__s120param0.indexOf("rad") === -1 ? 1 : __s1local35) - (__s120local4 ? 0 : __s120param1);
      if (__s120local1.length) {
        if (__s120param3) {
          __s120param3[__s120param2] = __s120param1 + __s120local2;
        }
        if (__s120param0.indexOf("short") !== -1 && (__s120local2 %= __s120local0) !== __s120local2 % (__s120local0 / 2)) {
          __s120local2 = __s120local2 < 0 ? __s120local2 + __s120local0 : __s120local2 - __s120local0;
        }
        if (__s120param0.indexOf("_cw") !== -1 && __s120local2 < 0) {
          __s120local2 = (__s120local2 + __s120local0 * 9999999999) % __s120local0 - (__s120local2 / __s120local0 | 0) * __s120local0;
        } else if (__s120param0.indexOf("ccw") !== -1 && __s120local2 > 0) {
          __s120local2 = (__s120local2 - __s120local0 * 9999999999) % __s120local0 - (__s120local2 / __s120local0 | 0) * __s120local0;
        }
      }
      __s120local3 = __s120param1 + __s120local2;
    }
    if (__s120local3 < 0.000001 && __s120local3 > -0.000001) {
      __s120local3 = 0;
    }
    return __s120local3;
  }
  var __s1local63 = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    fuchsia: [255, 0, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  };
  function __s1local64(__s132param0, __s132param1, __s132param2) {
    return ((__s132param0 = __s132param0 < 0 ? __s132param0 + 1 : __s132param0 > 1 ? __s132param0 - 1 : __s132param0) * 6 < 1 ? __s132param1 + (__s132param2 - __s132param1) * __s132param0 * 6 : __s132param0 < 0.5 ? __s132param2 : __s132param0 * 3 < 2 ? __s132param1 + (__s132param2 - __s132param1) * (2 / 3 - __s132param0) * 6 : __s132param1) * 255 + 0.5 | 0;
  }
  var __s1local65 = __s1local4.parseColor = function (__s134param0, __s134param1) {
    var __s134local0;
    var __s134local1;
    var __s134local2;
    var __s134local3;
    var __s134local4;
    var __s134local5;
    var __s134local6;
    var __s134local7;
    var __s134local8;
    var __s134local9;
    var __s134local10;
    if (__s134param0) {
      if (typeof __s134param0 == "number") {
        __s134local0 = [__s134param0 >> 16, __s134param0 >> 8 & 255, __s134param0 & 255];
      } else {
        if (__s134param0.charAt(__s134param0.length - 1) === ",") {
          __s134param0 = __s134param0.substr(0, __s134param0.length - 1);
        }
        if (__s1local63[__s134param0]) {
          __s134local0 = __s1local63[__s134param0];
        } else if (__s134param0.charAt(0) === "#") {
          if (__s134param0.length === 4) {
            __s134param0 = "#" + (__s134local1 = __s134param0.charAt(1)) + __s134local1 + (__s134local2 = __s134param0.charAt(2)) + __s134local2 + (__s134local3 = __s134param0.charAt(3)) + __s134local3;
          }
          __s134local0 = [(__s134param0 = parseInt(__s134param0.substr(1), 16)) >> 16, __s134param0 >> 8 & 255, __s134param0 & 255];
        } else if (__s134param0.substr(0, 3) === "hsl") {
          __s134local0 = __s134local10 = __s134param0.match(__s1local16);
          if (__s134param1) {
            if (__s134param0.indexOf("=") !== -1) {
              return __s134param0.match(__s1local17);
            }
          } else {
            __s134local4 = Number(__s134local0[0]) % 360 / 360;
            __s134local5 = Number(__s134local0[1]) / 100;
            __s134local1 = (__s134local6 = Number(__s134local0[2]) / 100) * 2 - (__s134local2 = __s134local6 <= 0.5 ? __s134local6 * (__s134local5 + 1) : __s134local6 + __s134local5 - __s134local6 * __s134local5);
            if (__s134local0.length > 3) {
              __s134local0[3] = Number(__s134local0[3]);
            }
            __s134local0[0] = __s1local64(__s134local4 + 1 / 3, __s134local1, __s134local2);
            __s134local0[1] = __s1local64(__s134local4, __s134local1, __s134local2);
            __s134local0[2] = __s1local64(__s134local4 - 1 / 3, __s134local1, __s134local2);
          }
        } else {
          __s134local0 = __s134param0.match(__s1local16) || __s1local63.transparent;
        }
        __s134local0[0] = Number(__s134local0[0]);
        __s134local0[1] = Number(__s134local0[1]);
        __s134local0[2] = Number(__s134local0[2]);
        if (__s134local0.length > 3) {
          __s134local0[3] = Number(__s134local0[3]);
        }
      }
    } else {
      __s134local0 = __s1local63.black;
    }
    if (__s134param1 && !__s134local10) {
      __s134local1 = __s134local0[0] / 255;
      __s134local2 = __s134local0[1] / 255;
      __s134local3 = __s134local0[2] / 255;
      __s134local6 = ((__s134local7 = Math.max(__s134local1, __s134local2, __s134local3)) + (__s134local8 = Math.min(__s134local1, __s134local2, __s134local3))) / 2;
      if (__s134local7 === __s134local8) {
        __s134local4 = __s134local5 = 0;
      } else {
        __s134local9 = __s134local7 - __s134local8;
        __s134local5 = __s134local6 > 0.5 ? __s134local9 / (2 - __s134local7 - __s134local8) : __s134local9 / (__s134local7 + __s134local8);
        __s134local4 = __s134local7 === __s134local1 ? (__s134local2 - __s134local3) / __s134local9 + (__s134local2 < __s134local3 ? 6 : 0) : __s134local7 === __s134local2 ? (__s134local3 - __s134local1) / __s134local9 + 2 : (__s134local1 - __s134local2) / __s134local9 + 4;
        __s134local4 *= 60;
      }
      __s134local0[0] = __s134local4 + 0.5 | 0;
      __s134local0[1] = __s134local5 * 100 + 0.5 | 0;
      __s134local0[2] = __s134local6 * 100 + 0.5 | 0;
    }
    return __s134local0;
  };
  function __s1local66(__s154param0, __s154param1) {
    var __s154local0;
    var __s154local1;
    var __s154local2;
    var __s154local3 = __s154param0.match(__s1local67) || [];
    var __s154local4 = 0;
    var __s154local5 = "";
    if (!__s154local3.length) {
      return __s154param0;
    }
    for (__s154local0 = 0; __s154local0 < __s154local3.length; __s154local0++) {
      __s154local1 = __s154local3[__s154local0];
      __s154local4 += (__s154local2 = __s154param0.substr(__s154local4, __s154param0.indexOf(__s154local1, __s154local4) - __s154local4)).length + __s154local1.length;
      if ((__s154local1 = __s1local65(__s154local1, __s154param1)).length === 3) {
        __s154local1.push(1);
      }
      __s154local5 += __s154local2 + (__s154param1 ? "hsla(" + __s154local1[0] + "," + __s154local1[1] + "%," + __s154local1[2] + "%," + __s154local1[3] : "rgba(" + __s154local1.join(",")) + ")";
    }
    return __s154local5 + __s154param0.substr(__s154local4);
  }
  var __s1local67 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
  for (__s1local7 in __s1local63) {
    __s1local67 += "|" + __s1local7 + "\\b";
  }
  __s1local67 = new RegExp(__s1local67 + ")", "gi");
  __s1local4.colorStringFilter = function (__s162param0) {
    var __s162local0;
    var __s162local1 = __s162param0[0] + " " + __s162param0[1];
    if (__s1local67.test(__s162local1)) {
      __s162local0 = __s162local1.indexOf("hsl(") !== -1 || __s162local1.indexOf("hsla(") !== -1;
      __s162param0[0] = __s1local66(__s162param0[0], __s162local0);
      __s162param0[1] = __s1local66(__s162param0[1], __s162local0);
    }
    __s1local67.lastIndex = 0;
  };
  __s0local0.default.defaultStringFilter ||= __s1local4.colorStringFilter;
  function __s1local68(__s165param0, __s165param1, __s165param2, __s165param3) {
    if (__s165param0 == null) {
      return function (__s168param0) {
        return __s168param0;
      };
    }
    var __s165local0;
    var __s165local1 = __s165param1 ? (__s165param0.match(__s1local67) || [""])[0] : "";
    var __s165local2 = __s165param0.split(__s165local1).join("").match(__s1local18) || [];
    var __s165local3 = __s165param0.substr(0, __s165param0.indexOf(__s165local2[0]));
    var __s165local4 = __s165param0.charAt(__s165param0.length - 1) === ")" ? ")" : "";
    var __s165local5 = __s165param0.indexOf(" ") !== -1 ? " " : ",";
    var __s165local6 = __s165local2.length;
    var __s165local7 = __s165local6 > 0 ? __s165local2[0].replace(__s1local16, "") : "";
    if (__s165local6) {
      return __s165local0 = __s165param1 ? function (__s171param0) {
        var __s171local0;
        var __s171local1;
        var __s171local2;
        var __s171local3;
        if (typeof __s171param0 == "number") {
          __s171param0 += __s165local7;
        } else if (__s165param3 && __s1local32.test(__s171param0)) {
          __s171local3 = __s171param0.replace(__s1local32, "|").split("|");
          __s171local2 = 0;
          for (; __s171local2 < __s171local3.length; __s171local2++) {
            __s171local3[__s171local2] = __s165local0(__s171local3[__s171local2]);
          }
          return __s171local3.join(",");
        }
        __s171local0 = (__s171param0.match(__s1local67) || [__s165local1])[0];
        __s171local2 = (__s171local1 = __s171param0.split(__s171local0).join("").match(__s1local18) || []).length;
        if (__s165local6 > __s171local2--) {
          while (++__s171local2 < __s165local6) {
            __s171local1[__s171local2] = __s165param2 ? __s171local1[(__s171local2 - 1) / 2 | 0] : __s165local2[__s171local2];
          }
        }
        return __s165local3 + __s171local1.join(__s165local5) + __s165local5 + __s171local0 + __s165local4 + (__s171param0.indexOf("inset") !== -1 ? " inset" : "");
      } : function (__s180param0) {
        var __s180local0;
        var __s180local1;
        var __s180local2;
        if (typeof __s180param0 == "number") {
          __s180param0 += __s165local7;
        } else if (__s165param3 && __s1local32.test(__s180param0)) {
          __s180local1 = __s180param0.replace(__s1local32, "|").split("|");
          __s180local2 = 0;
          for (; __s180local2 < __s180local1.length; __s180local2++) {
            __s180local1[__s180local2] = __s165local0(__s180local1[__s180local2]);
          }
          return __s180local1.join(",");
        }
        __s180local2 = (__s180local0 = __s180param0.match(__s1local18) || []).length;
        if (__s165local6 > __s180local2--) {
          while (++__s180local2 < __s165local6) {
            __s180local0[__s180local2] = __s165param2 ? __s180local0[(__s180local2 - 1) / 2 | 0] : __s165local2[__s180local2];
          }
        }
        return __s165local3 + __s180local0.join(__s165local5) + __s165local4;
      };
    } else {
      return function (__s190param0) {
        return __s190param0;
      };
    }
  }
  function __s1local69(__s192param0) {
    __s192param0 = __s192param0.split(",");
    return function (__s194param0, __s194param1, __s194param2, __s194param3, __s194param4, __s194param5, __s194param6) {
      var __s194local0;
      var __s194local1 = (__s194param1 + "").split(" ");
      __s194param6 = {};
      __s194local0 = 0;
      for (; __s194local0 < 4; __s194local0++) {
        __s194param6[__s192param0[__s194local0]] = __s194local1[__s194local0] = __s194local1[__s194local0] || __s194local1[(__s194local0 - 1) / 2 >> 0];
      }
      return __s194param3.parse(__s194param0, __s194param6, __s194param4, __s194param5);
    };
  }
  __s1local42._setPluginRatio = function (__s198param0) {
    this.plugin.setRatio(__s198param0);
    var __s198local0;
    var __s198local1;
    var __s198local2;
    var __s198local3;
    var __s198local4;
    var __s198local5 = this.data;
    var __s198local6 = __s198local5.proxy;
    for (var __s198local7 = __s198local5.firstMPT; __s198local7;) {
      __s198local0 = __s198local6[__s198local7.v];
      if (__s198local7.r) {
        __s198local0 = __s198local7.r(__s198local0);
      } else if (__s198local0 < 0.000001 && __s198local0 > -0.000001) {
        __s198local0 = 0;
      }
      __s198local7.t[__s198local7.p] = __s198local0;
      __s198local7 = __s198local7._next;
    }
    if (__s198local5.autoRotate) {
      __s198local5.autoRotate.rotation = __s198local5.mod ? __s198local5.mod.call(this._tween, __s198local6.rotation, this.t, this._tween) : __s198local6.rotation;
    }
    if (__s198param0 === 1 || __s198param0 === 0) {
      __s198local7 = __s198local5.firstMPT;
      __s198local4 = __s198param0 === 1 ? "e" : "b";
      while (__s198local7) {
        if ((__s198local1 = __s198local7.t).type) {
          if (__s198local1.type === 1) {
            __s198local3 = __s198local1.xs0 + __s198local1.s + __s198local1.xs1;
            __s198local2 = 1;
            for (; __s198local2 < __s198local1.l; __s198local2++) {
              __s198local3 += __s198local1["xn" + __s198local2] + __s198local1["xs" + (__s198local2 + 1)];
            }
            __s198local1[__s198local4] = __s198local3;
          }
        } else {
          __s198local1[__s198local4] = __s198local1.s + __s198local1.xs0;
        }
        __s198local7 = __s198local7._next;
      }
    }
  };
  function __s1local70(__s213param0, __s213param1, __s213param2, __s213param3, __s213param4) {
    this.t = __s213param0;
    this.p = __s213param1;
    this.v = __s213param2;
    this.r = __s213param4;
    if (__s213param3) {
      __s213param3._prev = this;
      this._next = __s213param3;
    }
  }
  __s1local42._parseToProxy = function (__s216param0, __s216param1, __s216param2, __s216param3, __s216param4, __s216param5) {
    var __s216local0;
    var __s216local1;
    var __s216local2;
    var __s216local3;
    var __s216local4;
    var __s216local5 = __s216param3;
    var __s216local6 = {};
    var __s216local7 = {};
    var __s216local8 = __s216param2._transform;
    var __s216local9 = __s1local36;
    __s216param2._transform = null;
    __s1local36 = __s216param1;
    __s216param3 = __s216local4 = __s216param2.parse(__s216param0, __s216param1, __s216param3, __s216param4);
    __s1local36 = __s216local9;
    if (__s216param5) {
      __s216param2._transform = __s216local8;
      if (__s216local5) {
        __s216local5._prev = null;
        if (__s216local5._prev) {
          __s216local5._prev._next = null;
        }
      }
    }
    while (__s216param3 && __s216param3 !== __s216local5) {
      if (__s216param3.type <= 1 && (__s216local7[__s216local1 = __s216param3.p] = __s216param3.s + __s216param3.c, __s216local6[__s216local1] = __s216param3.s, __s216param5 || (__s216local3 = new __s1local70(__s216param3, "s", __s216local1, __s216local3, __s216param3.r), __s216param3.c = 0), __s216param3.type === 1)) {
        for (__s216local0 = __s216param3.l; --__s216local0 > 0;) {
          __s216local2 = "xn" + __s216local0;
          __s216local7[__s216local1 = __s216param3.p + "_" + __s216local2] = __s216param3.data[__s216local2];
          __s216local6[__s216local1] = __s216param3[__s216local2];
          if (!__s216param5) {
            __s216local3 = new __s1local70(__s216param3, __s216local2, __s216local1, __s216local3, __s216param3.rxp[__s216local2]);
          }
        }
      }
      __s216param3 = __s216param3._next;
    }
    return {
      proxy: __s216local6,
      end: __s216local7,
      firstMPT: __s216local3,
      pt: __s216local4
    };
  };
  var __s1local71 = __s1local42.CSSPropTween = function (__s227param0, __s227param1, __s227param2, __s227param3, __s227param4, __s227param5, __s227param6, __s227param7, __s227param8, __s227param9, __s227param10) {
    this.t = __s227param0;
    this.p = __s227param1;
    this.s = __s227param2;
    this.c = __s227param3;
    this.n = __s227param6 || __s227param1;
    if (!(__s227param0 instanceof __s1local71)) {
      __s1local3.push(this.n);
    }
    this.r = __s227param7 ? typeof __s227param7 == "function" ? __s227param7 : Math.round : __s227param7;
    this.type = __s227param5 || 0;
    if (__s227param8) {
      this.pr = __s227param8;
      __s1local0 = true;
    }
    this.b = __s227param9 === undefined ? __s227param2 : __s227param9;
    this.e = __s227param10 === undefined ? __s227param2 + __s227param3 : __s227param10;
    if (__s227param4) {
      this._next = __s227param4;
      __s227param4._prev = this;
    }
  };
  function __s1local72(__s232param0, __s232param1, __s232param2, __s232param3, __s232param4, __s232param5) {
    var __s232local0 = new __s1local71(__s232param0, __s232param1, __s232param2, __s232param3 - __s232param2, __s232param4, -1, __s232param5);
    __s232local0.b = __s232param2;
    __s232local0.e = __s232local0.xs0 = __s232param3;
    return __s232local0;
  }
  var __s1local73 = __s1local4.parseComplex = function (__s234param0, __s234param1, __s234param2, __s234param3, __s234param4, __s234param5, __s234param6, __s234param7, __s234param8, __s234param9) {
    __s234param2 = __s234param2 || __s234param5 || "";
    if (typeof __s234param3 == "function") {
      __s234param3 = __s234param3(__s1local15, __s1local14);
    }
    __s234param6 = new __s1local71(__s234param0, __s234param1, 0, 0, __s234param6, __s234param9 ? 2 : 1, null, false, __s234param7, __s234param2, __s234param3);
    __s234param3 += "";
    if (__s234param4 && __s1local67.test(__s234param3 + __s234param2)) {
      __s234param3 = [__s234param2, __s234param3];
      __s1local4.colorStringFilter(__s234param3);
      __s234param2 = __s234param3[0];
      __s234param3 = __s234param3[1];
    }
    var __s234local0;
    var __s234local1;
    var __s234local2;
    var __s234local3;
    var __s234local4;
    var __s234local5;
    var __s234local6;
    var __s234local7;
    var __s234local8;
    var __s234local9;
    var __s234local10;
    var __s234local11;
    var __s234local12;
    var __s234local13 = __s234param2.split(", ").join(",").split(" ");
    var __s234local14 = __s234param3.split(", ").join(",").split(" ");
    var __s234local15 = __s234local13.length;
    var __s234local16 = __s1local8 !== false;
    if (__s234param3.indexOf(",") !== -1 || __s234param2.indexOf(",") !== -1) {
      if ((__s234param3 + __s234param2).indexOf("rgb") !== -1 || (__s234param3 + __s234param2).indexOf("hsl") !== -1) {
        __s234local13 = __s234local13.join(" ").replace(__s1local32, ", ").split(" ");
        __s234local14 = __s234local14.join(" ").replace(__s1local32, ", ").split(" ");
      } else {
        __s234local13 = __s234local13.join(" ").split(",").join(", ").split(" ");
        __s234local14 = __s234local14.join(" ").split(",").join(", ").split(" ");
      }
      __s234local15 = __s234local13.length;
    }
    if (__s234local15 !== __s234local14.length) {
      __s234local15 = (__s234local13 = (__s234param5 || "").split(" ")).length;
    }
    __s234param6.plugin = __s234param8;
    __s234param6.setRatio = __s234param9;
    __s1local67.lastIndex = 0;
    __s234local0 = 0;
    for (; __s234local0 < __s234local15; __s234local0++) {
      __s234local3 = __s234local13[__s234local0];
      __s234local4 = __s234local14[__s234local0] + "";
      if ((__s234local7 = parseFloat(__s234local3)) || __s234local7 === 0) {
        __s234param6.appendXtra("", __s234local7, __s1local60(__s234local4, __s234local7), __s234local4.replace(__s1local17, ""), !!__s234local16 && __s234local4.indexOf("px") !== -1 && Math.round, true);
      } else if (__s234param4 && __s1local67.test(__s234local3)) {
        __s234local11 = ")" + ((__s234local11 = __s234local4.indexOf(")") + 1) ? __s234local4.substr(__s234local11) : "");
        __s234local12 = __s234local4.indexOf("hsl") !== -1 && __s1local44;
        __s234local9 = __s234local4;
        __s234local3 = __s1local65(__s234local3, __s234local12);
        __s234local4 = __s1local65(__s234local4, __s234local12);
        if ((__s234local8 = __s234local3.length + __s234local4.length > 6) && !__s1local44 && __s234local4[3] === 0) {
          __s234param6["xs" + __s234param6.l] += __s234param6.l ? " transparent" : "transparent";
          __s234param6.e = __s234param6.e.split(__s234local14[__s234local0]).join("transparent");
        } else {
          if (!__s1local44) {
            __s234local8 = false;
          }
          if (__s234local12) {
            __s234param6.appendXtra(__s234local9.substr(0, __s234local9.indexOf("hsl")) + (__s234local8 ? "hsla(" : "hsl("), __s234local3[0], __s1local60(__s234local4[0], __s234local3[0]), ",", false, true).appendXtra("", __s234local3[1], __s1local60(__s234local4[1], __s234local3[1]), "%,", false).appendXtra("", __s234local3[2], __s1local60(__s234local4[2], __s234local3[2]), __s234local8 ? "%," : "%" + __s234local11, false);
          } else {
            __s234param6.appendXtra(__s234local9.substr(0, __s234local9.indexOf("rgb")) + (__s234local8 ? "rgba(" : "rgb("), __s234local3[0], __s234local4[0] - __s234local3[0], ",", Math.round, true).appendXtra("", __s234local3[1], __s234local4[1] - __s234local3[1], ",", Math.round).appendXtra("", __s234local3[2], __s234local4[2] - __s234local3[2], __s234local8 ? "," : __s234local11, Math.round);
          }
          if (__s234local8) {
            __s234local3 = __s234local3.length < 4 ? 1 : __s234local3[3];
            __s234param6.appendXtra("", __s234local3, (__s234local4.length < 4 ? 1 : __s234local4[3]) - __s234local3, __s234local11, false);
          }
        }
        __s1local67.lastIndex = 0;
      } else if (__s234local5 = __s234local3.match(__s1local16)) {
        if (!(__s234local6 = __s234local4.match(__s1local17)) || __s234local6.length !== __s234local5.length) {
          return __s234param6;
        }
        __s234local2 = 0;
        __s234local1 = 0;
        for (; __s234local1 < __s234local5.length; __s234local1++) {
          __s234local10 = __s234local5[__s234local1];
          __s234local9 = __s234local3.indexOf(__s234local10, __s234local2);
          __s234param6.appendXtra(__s234local3.substr(__s234local2, __s234local9 - __s234local2), Number(__s234local10), __s1local60(__s234local6[__s234local1], __s234local10), "", !!__s234local16 && __s234local3.substr(__s234local9 + __s234local10.length, 2) === "px" && Math.round, __s234local1 === 0);
          __s234local2 = __s234local9 + __s234local10.length;
        }
        __s234param6["xs" + __s234param6.l] += __s234local3.substr(__s234local2);
      } else {
        __s234param6["xs" + __s234param6.l] += __s234param6.l || __s234param6["xs" + __s234param6.l] ? " " + __s234local4 : __s234local4;
      }
    }
    if (__s234param3.indexOf("=") !== -1 && __s234param6.data) {
      __s234local11 = __s234param6.xs0 + __s234param6.data.s;
      __s234local0 = 1;
      for (; __s234local0 < __s234param6.l; __s234local0++) {
        __s234local11 += __s234param6["xs" + __s234local0] + __s234param6.data["xn" + __s234local0];
      }
      __s234param6.e = __s234local11 + __s234param6["xs" + __s234local0];
    }
    if (!__s234param6.l) {
      __s234param6.type = -1;
      __s234param6.xs0 = __s234param6.e;
    }
    return __s234param6.xfirst || __s234param6;
  };
  var __s1local74 = 9;
  for ((__s1local7 = __s1local71.prototype).l = __s1local7.pr = 0; --__s1local74 > 0;) {
    __s1local7["xn" + __s1local74] = 0;
    __s1local7["xs" + __s1local74] = "";
  }
  __s1local7.xs0 = "";
  __s1local7._next = __s1local7._prev = __s1local7.xfirst = __s1local7.data = __s1local7.plugin = __s1local7.setRatio = __s1local7.rxp = null;
  __s1local7.appendXtra = function (__s263param0, __s263param1, __s263param2, __s263param3, __s263param4, __s263param5) {
    var __s263local0 = this;
    var __s263local1 = __s263local0.l;
    __s263local0["xs" + __s263local1] += __s263param5 && (__s263local1 || __s263local0["xs" + __s263local1]) ? " " + __s263param0 : __s263param0 || "";
    if (__s263param2 || __s263local1 === 0 || __s263local0.plugin) {
      __s263local0.l++;
      __s263local0.type = __s263local0.setRatio ? 2 : 1;
      __s263local0["xs" + __s263local0.l] = __s263param3 || "";
      if (__s263local1 > 0) {
        __s263local0.data["xn" + __s263local1] = __s263param1 + __s263param2;
        __s263local0.rxp["xn" + __s263local1] = __s263param4;
        __s263local0["xn" + __s263local1] = __s263param1;
        if (!__s263local0.plugin) {
          __s263local0.xfirst = new __s1local71(__s263local0, "xn" + __s263local1, __s263param1, __s263param2, __s263local0.xfirst || __s263local0, 0, __s263local0.n, __s263param4, __s263local0.pr);
          __s263local0.xfirst.xs0 = 0;
        }
        return __s263local0;
      } else {
        __s263local0.data = {
          s: __s263param1 + __s263param2
        };
        __s263local0.rxp = {};
        __s263local0.s = __s263param1;
        __s263local0.c = __s263param2;
        __s263local0.r = __s263param4;
        return __s263local0;
      }
    } else {
      __s263local0["xs" + __s263local1] += __s263param1 + (__s263param3 || "");
      return __s263local0;
    }
  };
  function __s1local75(__s270param0, __s270param1) {
    __s270param1 = __s270param1 || {};
    this.p = __s270param1.prefix && __s1local49(__s270param0) || __s270param0;
    __s1local6[__s270param0] = __s1local6[this.p] = this;
    this.format = __s270param1.formatter || __s1local68(__s270param1.defaultValue, __s270param1.color, __s270param1.collapsible, __s270param1.multi);
    if (__s270param1.parser) {
      this.parse = __s270param1.parser;
    }
    this.clrs = __s270param1.color;
    this.multi = __s270param1.multi;
    this.keyword = __s270param1.keyword;
    this.dflt = __s270param1.defaultValue;
    this.pr = __s270param1.priority || 0;
  }
  var __s1local76 = __s1local42._registerComplexSpecialProp = function (__s273param0, __s273param1, __s273param2) {
    if (typeof __s273param1 != "object") {
      __s273param1 = {
        parser: __s273param2
      };
    }
    var __s273local0;
    var __s273local1 = __s273param0.split(",");
    var __s273local2 = __s273param1.defaultValue;
    __s273param2 = __s273param2 || [__s273local2];
    __s273local0 = 0;
    for (; __s273local0 < __s273local1.length; __s273local0++) {
      __s273param1.prefix = __s273local0 === 0 && __s273param1.prefix;
      __s273param1.defaultValue = __s273param2[__s273local0] || __s273local2;
      new __s1local75(__s273local1[__s273local0], __s273param1);
    }
  };
  var __s1local77 = __s1local42._registerPluginProp = function (__s278param0) {
    if (!__s1local6[__s278param0]) {
      var __s278local0 = __s278param0.charAt(0).toUpperCase() + __s278param0.substr(1) + "Plugin";
      __s1local76(__s278param0, {
        parser: function (__s281param0, __s281param1, __s281param2, __s281param3, __s281param4, __s281param5, __s281param6) {
          var __s281local0 = __s1local5.com.greensock.plugins[__s278local0];
          if (__s281local0) {
            __s281local0._cssRegister();
            return __s1local6[__s281param2].parse(__s281param0, __s281param1, __s281param2, __s281param3, __s281param4, __s281param5, __s281param6);
          } else {
            __s1local46("Error: " + __s278local0 + " js file not loaded.");
            return __s281param4;
          }
        }
      });
    }
  };
  (__s1local7 = __s1local75.prototype).parseComplex = function (__s285param0, __s285param1, __s285param2, __s285param3, __s285param4, __s285param5) {
    var __s285local0;
    var __s285local1;
    var __s285local2;
    var __s285local3;
    var __s285local4;
    var __s285local5;
    var __s285local6 = this.keyword;
    if (this.multi) {
      if (__s1local32.test(__s285param2) || __s1local32.test(__s285param1)) {
        __s285local1 = __s285param1.replace(__s1local32, "|").split("|");
        __s285local2 = __s285param2.replace(__s1local32, "|").split("|");
      } else if (__s285local6) {
        __s285local1 = [__s285param1];
        __s285local2 = [__s285param2];
      }
    }
    if (__s285local2) {
      __s285local3 = __s285local2.length > __s285local1.length ? __s285local2.length : __s285local1.length;
      __s285local0 = 0;
      for (; __s285local0 < __s285local3; __s285local0++) {
        __s285param1 = __s285local1[__s285local0] = __s285local1[__s285local0] || this.dflt;
        __s285param2 = __s285local2[__s285local0] = __s285local2[__s285local0] || this.dflt;
        if (__s285local6 && (__s285local4 = __s285param1.indexOf(__s285local6)) !== (__s285local5 = __s285param2.indexOf(__s285local6))) {
          if (__s285local5 === -1) {
            __s285local1[__s285local0] = __s285local1[__s285local0].split(__s285local6).join("");
          } else if (__s285local4 === -1) {
            __s285local1[__s285local0] += " " + __s285local6;
          }
        }
      }
      __s285param1 = __s285local1.join(", ");
      __s285param2 = __s285local2.join(", ");
    }
    return __s1local73(__s285param0, this.p, __s285param1, __s285param2, this.clrs, this.dflt, __s285param3, this.pr, __s285param4, __s285param5);
  };
  __s1local7.parse = function (__s296param0, __s296param1, __s296param2, __s296param3, __s296param4, __s296param5, __s296param6) {
    return this.parseComplex(__s296param0.style, this.format(__s1local51(__s296param0, this.p, __s1local2, false, this.dflt)), this.format(__s296param1), __s296param4, __s296param5);
  };
  __s1local4.registerSpecialProp = function (__s298param0, __s298param1, __s298param2) {
    __s1local76(__s298param0, {
      parser: function (__s300param0, __s300param1, __s300param2, __s300param3, __s300param4, __s300param5, __s300param6) {
        var __s300local0 = new __s1local71(__s300param0, __s300param2, 0, 0, __s300param4, 2, __s300param2, false, __s298param2);
        __s300local0.plugin = __s300param5;
        __s300local0.setRatio = __s298param1(__s300param0, __s300param1, __s300param3._tween, __s300param2);
        return __s300local0;
      },
      priority: __s298param2
    });
  };
  __s1local4.useSVGTransformAttr = true;
  var __s1local78;
  var __s1local79;
  var __s1local80;
  var __s1local81;
  var __s1local82;
  var __s1local83 = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",");
  var __s1local84 = __s1local49("transform");
  var __s1local85 = __s1local47 + "transform";
  var __s1local86 = __s1local49("transformOrigin");
  var __s1local87 = __s1local49("perspective") !== null;
  var __s1local88 = __s1local42.Transform = function () {
    this.perspective = parseFloat(__s1local4.defaultTransformPerspective) || 0;
    this.force3D = __s1local4.defaultForce3D !== false && !!__s1local87 && (__s1local4.defaultForce3D || "auto");
  };
  var __s1local89 = __s0local0._gsScope.SVGElement;
  function __s1local90(__s304param0, __s304param1, __s304param2) {
    var __s304local0;
    var __s304local1 = __s1local38.createElementNS("http://www.w3.org/2000/svg", __s304param0);
    var __s304local2 = /([a-z])([A-Z])/g;
    for (__s304local0 in __s304param2) {
      __s304local1.setAttributeNS(null, __s304local0.replace(__s304local2, "$1-$2").toLowerCase(), __s304param2[__s304local0]);
    }
    __s304param1.appendChild(__s304local1);
    return __s304local1;
  }
  var __s1local91 = __s1local38.documentElement || {};
  __s1local82 = __s1local13 || /Android/i.test(__s1local43) && !__s0local0._gsScope.chrome;
  if (__s1local38.createElementNS && !__s1local82) {
    __s1local79 = __s1local90("svg", __s1local91);
    __s1local81 = (__s1local80 = __s1local90("rect", __s1local79, {
      width: 100,
      height: 50,
      x: 100
    })).getBoundingClientRect().width;
    __s1local80.style[__s1local86] = "50% 50%";
    __s1local80.style[__s1local84] = "scaleX(0.5)";
    __s1local82 = __s1local81 === __s1local80.getBoundingClientRect().width && (!__s1local11 || !__s1local87);
    __s1local91.removeChild(__s1local79);
  }
  var __s1local92 = __s1local82;
  function __s1local93(__s309param0, __s309param1, __s309param2, __s309param3, __s309param4, __s309param5) {
    var __s309local0;
    var __s309local1;
    var __s309local2;
    var __s309local3;
    var __s309local4;
    var __s309local5;
    var __s309local6;
    var __s309local7;
    var __s309local8;
    var __s309local9;
    var __s309local10;
    var __s309local11;
    var __s309local12;
    var __s309local13;
    var __s309local14 = __s309param0._gsTransform;
    var __s309local15 = __s1local97(__s309param0, true);
    if (__s309local14) {
      __s309local12 = __s309local14.xOrigin;
      __s309local13 = __s309local14.yOrigin;
    }
    if (!__s309param3 || (__s309local0 = __s309param3.split(" ")).length < 2) {
      if ((__s309local6 = __s309param0.getBBox()).x === 0 && __s309local6.y === 0 && __s309local6.width + __s309local6.height === 0) {
        __s309local6 = {
          x: parseFloat(__s309param0.hasAttribute("x") ? __s309param0.getAttribute("x") : __s309param0.hasAttribute("cx") ? __s309param0.getAttribute("cx") : 0) || 0,
          y: parseFloat(__s309param0.hasAttribute("y") ? __s309param0.getAttribute("y") : __s309param0.hasAttribute("cy") ? __s309param0.getAttribute("cy") : 0) || 0,
          width: 0,
          height: 0
        };
      }
      __s309local0 = [((__s309param1 = __s1local59(__s309param1).split(" "))[0].indexOf("%") !== -1 ? parseFloat(__s309param1[0]) / 100 * __s309local6.width : parseFloat(__s309param1[0])) + __s309local6.x, (__s309param1[1].indexOf("%") !== -1 ? parseFloat(__s309param1[1]) / 100 * __s309local6.height : parseFloat(__s309param1[1])) + __s309local6.y];
    }
    __s309param2.xOrigin = __s309local3 = parseFloat(__s309local0[0]);
    __s309param2.yOrigin = __s309local4 = parseFloat(__s309local0[1]);
    if (__s309param3 && __s309local15 !== __s1local96) {
      __s309local5 = __s309local15[0];
      __s309local6 = __s309local15[1];
      __s309local7 = __s309local15[2];
      __s309local8 = __s309local15[3];
      __s309local9 = __s309local15[4];
      __s309local10 = __s309local15[5];
      if (__s309local11 = __s309local5 * __s309local8 - __s309local6 * __s309local7) {
        __s309local1 = __s309local3 * (__s309local8 / __s309local11) + __s309local4 * (-__s309local7 / __s309local11) + (__s309local7 * __s309local10 - __s309local8 * __s309local9) / __s309local11;
        __s309local2 = __s309local3 * (-__s309local6 / __s309local11) + __s309local4 * (__s309local5 / __s309local11) - (__s309local5 * __s309local10 - __s309local6 * __s309local9) / __s309local11;
        __s309local3 = __s309param2.xOrigin = __s309local0[0] = __s309local1;
        __s309local4 = __s309param2.yOrigin = __s309local0[1] = __s309local2;
      }
    }
    if (__s309local14) {
      if (__s309param5) {
        __s309param2.xOffset = __s309local14.xOffset;
        __s309param2.yOffset = __s309local14.yOffset;
        __s309local14 = __s309param2;
      }
      if (__s309param4 || __s309param4 !== false && __s1local4.defaultSmoothOrigin !== false) {
        __s309local1 = __s309local3 - __s309local12;
        __s309local2 = __s309local4 - __s309local13;
        __s309local14.xOffset += __s309local1 * __s309local15[0] + __s309local2 * __s309local15[2] - __s309local1;
        __s309local14.yOffset += __s309local1 * __s309local15[1] + __s309local2 * __s309local15[3] - __s309local2;
      } else {
        __s309local14.xOffset = __s309local14.yOffset = 0;
      }
    }
    if (!__s309param5) {
      __s309param0.setAttribute("data-svg-origin", __s309local0.join(" "));
    }
  }
  function __s1local94(__s321param0) {
    var __s321local0;
    var __s321local1 = __s1local39("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg");
    var __s321local2 = this.parentNode;
    var __s321local3 = this.nextSibling;
    var __s321local4 = this.style.cssText;
    __s1local91.appendChild(__s321local1);
    __s321local1.appendChild(this);
    this.style.display = "block";
    if (__s321param0) {
      try {
        __s321local0 = this.getBBox();
        this._originalGetBBox = this.getBBox;
        this.getBBox = __s1local94;
      } catch (__s325local0) {}
    } else if (this._originalGetBBox) {
      __s321local0 = this._originalGetBBox();
    }
    if (__s321local3) {
      __s321local2.insertBefore(this, __s321local3);
    } else {
      __s321local2.appendChild(this);
    }
    __s1local91.removeChild(__s321local1);
    this.style.cssText = __s321local4;
    return __s321local0;
  }
  function __s1local95(__s330param0) {
    return !!__s1local89 && !!__s330param0.getCTM && (!__s330param0.parentNode || !!__s330param0.ownerSVGElement) && !!function (__s332param0) {
      try {
        return __s332param0.getBBox();
      } catch (__s335local0) {
        return __s1local94.call(__s332param0, true);
      }
    }(__s330param0);
  }
  var __s1local96 = [1, 0, 0, 1, 0, 0];
  function __s1local97(__s337param0, __s337param1) {
    var __s337local0;
    var __s337local1;
    var __s337local2;
    var __s337local3;
    var __s337local4;
    var __s337local5;
    var __s337local6 = __s337param0._gsTransform || new __s1local88();
    var __s337local7 = __s337param0.style;
    if (__s1local84) {
      __s337local1 = __s1local51(__s337param0, __s1local85, null, true);
    } else if (__s337param0.currentStyle) {
      __s337local1 = (__s337local1 = __s337param0.currentStyle.filter.match(__s1local30)) && __s337local1.length === 4 ? [__s337local1[0].substr(4), Number(__s337local1[2].substr(4)), Number(__s337local1[1].substr(4)), __s337local1[3].substr(4), __s337local6.x || 0, __s337local6.y || 0].join(",") : "";
    }
    __s337local0 = !__s337local1 || __s337local1 === "none" || __s337local1 === "matrix(1, 0, 0, 1, 0, 0)";
    if (!!__s1local84 && (!!(__s337local5 = !__s1local50(__s337param0) || __s1local50(__s337param0).display === "none") || !__s337param0.parentNode)) {
      if (__s337local5) {
        __s337local3 = __s337local7.display;
        __s337local7.display = "block";
      }
      if (!__s337param0.parentNode) {
        __s337local4 = 1;
        __s1local91.appendChild(__s337param0);
      }
      __s337local0 = !(__s337local1 = __s1local51(__s337param0, __s1local85, null, true)) || __s337local1 === "none" || __s337local1 === "matrix(1, 0, 0, 1, 0, 0)";
      if (__s337local3) {
        __s337local7.display = __s337local3;
      } else if (__s337local5) {
        __s1local102(__s337local7, "display");
      }
      if (__s337local4) {
        __s1local91.removeChild(__s337param0);
      }
    }
    if (__s337local6.svg || __s337param0.getCTM && __s1local95(__s337param0)) {
      if (__s337local0 && (__s337local7[__s1local84] + "").indexOf("matrix") !== -1) {
        __s337local1 = __s337local7[__s1local84];
        __s337local0 = 0;
      }
      __s337local2 = __s337param0.getAttribute("transform");
      if (__s337local0 && __s337local2) {
        __s337local1 = "matrix(" + (__s337local2 = __s337param0.transform.baseVal.consolidate().matrix).a + "," + __s337local2.b + "," + __s337local2.c + "," + __s337local2.d + "," + __s337local2.e + "," + __s337local2.f + ")";
        __s337local0 = 0;
      }
    }
    if (__s337local0) {
      return __s1local96;
    }
    __s337local2 = (__s337local1 || "").match(__s1local16) || [];
    __s1local74 = __s337local2.length;
    while (--__s1local74 > -1) {
      __s337local3 = Number(__s337local2[__s1local74]);
      __s337local2[__s1local74] = (__s337local4 = __s337local3 - (__s337local3 |= 0)) ? (__s337local4 * 100000 + (__s337local4 < 0 ? -0.5 : 0.5) | 0) / 100000 + __s337local3 : __s337local3;
    }
    if (__s337param1 && __s337local2.length > 6) {
      return [__s337local2[0], __s337local2[1], __s337local2[4], __s337local2[5], __s337local2[12], __s337local2[13]];
    } else {
      return __s337local2;
    }
  }
  var __s1local98 = __s1local42.getTransform = function (__s355param0, __s355param1, __s355param2, __s355param3) {
    if (__s355param0._gsTransform && __s355param2 && !__s355param3) {
      return __s355param0._gsTransform;
    }
    var __s355local0;
    var __s355local1;
    var __s355local2;
    var __s355local3;
    var __s355local4;
    var __s355local5;
    var __s355local6 = __s355param2 && __s355param0._gsTransform || new __s1local88();
    var __s355local7 = __s355local6.scaleX < 0;
    var __s355local8 = __s1local87 && (parseFloat(__s1local51(__s355param0, __s1local86, __s355param1, false, "0 0 0").split(" ")[2]) || __s355local6.zOrigin) || 0;
    var __s355local9 = parseFloat(__s1local4.defaultTransformPerspective) || 0;
    __s355local6.svg = !!__s355param0.getCTM && !!__s1local95(__s355param0);
    if (__s355local6.svg) {
      __s1local93(__s355param0, __s1local51(__s355param0, __s1local86, __s355param1, false, "50% 50%") + "", __s355local6, __s355param0.getAttribute("data-svg-origin"));
      __s1local78 = __s1local4.useSVGTransformAttr || __s1local92;
    }
    if ((__s355local0 = __s1local97(__s355param0)) !== __s1local96) {
      if (__s355local0.length === 16) {
        var __s355local10;
        var __s355local11;
        var __s355local12;
        var __s355local13;
        var __s355local14;
        var __s355local15 = __s355local0[0];
        var __s355local16 = __s355local0[1];
        var __s355local17 = __s355local0[2];
        var __s355local18 = __s355local0[3];
        var __s355local19 = __s355local0[4];
        var __s355local20 = __s355local0[5];
        var __s355local21 = __s355local0[6];
        var __s355local22 = __s355local0[7];
        var __s355local23 = __s355local0[8];
        var __s355local24 = __s355local0[9];
        var __s355local25 = __s355local0[10];
        var __s355local26 = __s355local0[12];
        var __s355local27 = __s355local0[13];
        var __s355local28 = __s355local0[14];
        var __s355local29 = __s355local0[11];
        var __s355local30 = Math.atan2(__s355local21, __s355local25);
        if (__s355local6.zOrigin) {
          __s355local26 = __s355local23 * (__s355local28 = -__s355local6.zOrigin) - __s355local0[12];
          __s355local27 = __s355local24 * __s355local28 - __s355local0[13];
          __s355local28 = __s355local25 * __s355local28 + __s355local6.zOrigin - __s355local0[14];
        }
        __s355local6.rotationX = __s355local30 * __s1local35;
        if (__s355local30) {
          __s355local10 = __s355local19 * (__s355local13 = Math.cos(-__s355local30)) + __s355local23 * (__s355local14 = Math.sin(-__s355local30));
          __s355local11 = __s355local20 * __s355local13 + __s355local24 * __s355local14;
          __s355local12 = __s355local21 * __s355local13 + __s355local25 * __s355local14;
          __s355local23 = __s355local19 * -__s355local14 + __s355local23 * __s355local13;
          __s355local24 = __s355local20 * -__s355local14 + __s355local24 * __s355local13;
          __s355local25 = __s355local21 * -__s355local14 + __s355local25 * __s355local13;
          __s355local29 = __s355local22 * -__s355local14 + __s355local29 * __s355local13;
          __s355local19 = __s355local10;
          __s355local20 = __s355local11;
          __s355local21 = __s355local12;
        }
        __s355local30 = Math.atan2(-__s355local17, __s355local25);
        __s355local6.rotationY = __s355local30 * __s1local35;
        if (__s355local30) {
          __s355local11 = __s355local16 * (__s355local13 = Math.cos(-__s355local30)) - __s355local24 * (__s355local14 = Math.sin(-__s355local30));
          __s355local12 = __s355local17 * __s355local13 - __s355local25 * __s355local14;
          __s355local24 = __s355local16 * __s355local14 + __s355local24 * __s355local13;
          __s355local25 = __s355local17 * __s355local14 + __s355local25 * __s355local13;
          __s355local29 = __s355local18 * __s355local14 + __s355local29 * __s355local13;
          __s355local15 = __s355local10 = __s355local15 * __s355local13 - __s355local23 * __s355local14;
          __s355local16 = __s355local11;
          __s355local17 = __s355local12;
        }
        __s355local30 = Math.atan2(__s355local16, __s355local15);
        __s355local6.rotation = __s355local30 * __s1local35;
        if (__s355local30) {
          __s355local10 = __s355local15 * (__s355local13 = Math.cos(__s355local30)) + __s355local16 * (__s355local14 = Math.sin(__s355local30));
          __s355local11 = __s355local19 * __s355local13 + __s355local20 * __s355local14;
          __s355local12 = __s355local23 * __s355local13 + __s355local24 * __s355local14;
          __s355local16 = __s355local16 * __s355local13 - __s355local15 * __s355local14;
          __s355local20 = __s355local20 * __s355local13 - __s355local19 * __s355local14;
          __s355local24 = __s355local24 * __s355local13 - __s355local23 * __s355local14;
          __s355local15 = __s355local10;
          __s355local19 = __s355local11;
          __s355local23 = __s355local12;
        }
        if (__s355local6.rotationX && Math.abs(__s355local6.rotationX) + Math.abs(__s355local6.rotation) > 359.9) {
          __s355local6.rotationX = __s355local6.rotation = 0;
          __s355local6.rotationY = 180 - __s355local6.rotationY;
        }
        __s355local30 = Math.atan2(__s355local19, __s355local20);
        __s355local6.scaleX = (Math.sqrt(__s355local15 * __s355local15 + __s355local16 * __s355local16 + __s355local17 * __s355local17) * 100000 + 0.5 | 0) / 100000;
        __s355local6.scaleY = (Math.sqrt(__s355local20 * __s355local20 + __s355local21 * __s355local21) * 100000 + 0.5 | 0) / 100000;
        __s355local6.scaleZ = (Math.sqrt(__s355local23 * __s355local23 + __s355local24 * __s355local24 + __s355local25 * __s355local25) * 100000 + 0.5 | 0) / 100000;
        __s355local15 /= __s355local6.scaleX;
        __s355local19 /= __s355local6.scaleY;
        __s355local16 /= __s355local6.scaleX;
        __s355local20 /= __s355local6.scaleY;
        if (Math.abs(__s355local30) > 0.00002) {
          __s355local6.skewX = __s355local30 * __s1local35;
          __s355local19 = 0;
          if (__s355local6.skewType !== "simple") {
            __s355local6.scaleY *= 1 / Math.cos(__s355local30);
          }
        } else {
          __s355local6.skewX = 0;
        }
        __s355local6.perspective = __s355local29 ? 1 / (__s355local29 < 0 ? -__s355local29 : __s355local29) : 0;
        __s355local6.x = __s355local26;
        __s355local6.y = __s355local27;
        __s355local6.z = __s355local28;
        if (__s355local6.svg) {
          __s355local6.x -= __s355local6.xOrigin - (__s355local6.xOrigin * __s355local15 - __s355local6.yOrigin * __s355local19);
          __s355local6.y -= __s355local6.yOrigin - (__s355local6.yOrigin * __s355local16 - __s355local6.xOrigin * __s355local20);
        }
      } else if (!__s1local87 || __s355param3 || !__s355local0.length || __s355local6.x !== __s355local0[4] || __s355local6.y !== __s355local0[5] || !__s355local6.rotationX && !__s355local6.rotationY) {
        var __s355local31 = __s355local0.length >= 6;
        var __s355local32 = __s355local31 ? __s355local0[0] : 1;
        var __s355local33 = __s355local0[1] || 0;
        var __s355local34 = __s355local0[2] || 0;
        var __s355local35 = __s355local31 ? __s355local0[3] : 1;
        __s355local6.x = __s355local0[4] || 0;
        __s355local6.y = __s355local0[5] || 0;
        __s355local2 = Math.sqrt(__s355local32 * __s355local32 + __s355local33 * __s355local33);
        __s355local3 = Math.sqrt(__s355local35 * __s355local35 + __s355local34 * __s355local34);
        __s355local4 = __s355local32 || __s355local33 ? Math.atan2(__s355local33, __s355local32) * __s1local35 : __s355local6.rotation || 0;
        __s355local5 = __s355local34 || __s355local35 ? Math.atan2(__s355local34, __s355local35) * __s1local35 + __s355local4 : __s355local6.skewX || 0;
        __s355local6.scaleX = __s355local2;
        __s355local6.scaleY = __s355local3;
        __s355local6.rotation = __s355local4;
        __s355local6.skewX = __s355local5;
        if (__s1local87) {
          __s355local6.rotationX = __s355local6.rotationY = __s355local6.z = 0;
          __s355local6.perspective = __s355local9;
          __s355local6.scaleZ = 1;
        }
        if (__s355local6.svg) {
          __s355local6.x -= __s355local6.xOrigin - (__s355local6.xOrigin * __s355local32 + __s355local6.yOrigin * __s355local34);
          __s355local6.y -= __s355local6.yOrigin - (__s355local6.xOrigin * __s355local33 + __s355local6.yOrigin * __s355local35);
        }
      }
      if (Math.abs(__s355local6.skewX) > 90 && Math.abs(__s355local6.skewX) < 270) {
        if (__s355local7) {
          __s355local6.scaleX *= -1;
          __s355local6.skewX += __s355local6.rotation <= 0 ? 180 : -180;
          __s355local6.rotation += __s355local6.rotation <= 0 ? 180 : -180;
        } else {
          __s355local6.scaleY *= -1;
          __s355local6.skewX += __s355local6.skewX <= 0 ? 180 : -180;
        }
      }
      __s355local6.zOrigin = __s355local8;
      for (__s355local1 in __s355local6) {
        if (__s355local6[__s355local1] < 0.00002 && __s355local6[__s355local1] > -0.00002) {
          __s355local6[__s355local1] = 0;
        }
      }
    }
    if (__s355param2) {
      __s355param0._gsTransform = __s355local6;
      if (__s355local6.svg) {
        if (__s1local78 && __s355param0.style[__s1local84]) {
          __s0local0.default.delayedCall(0.001, function () {
            __s1local102(__s355param0.style, __s1local84);
          });
        } else if (!__s1local78 && __s355param0.getAttribute("transform")) {
          __s0local0.default.delayedCall(0.001, function () {
            __s355param0.removeAttribute("transform");
          });
        }
      }
    }
    return __s355local6;
  };
  function __s1local99(__s387param0) {
    var __s387local0;
    var __s387local1;
    var __s387local2 = this.data;
    var __s387local3 = -__s387local2.rotation * __s1local34;
    var __s387local4 = __s387local3 + __s387local2.skewX * __s1local34;
    var __s387local5 = (Math.cos(__s387local3) * __s387local2.scaleX * 100000 | 0) / 100000;
    var __s387local6 = (Math.sin(__s387local3) * __s387local2.scaleX * 100000 | 0) / 100000;
    var __s387local7 = (Math.sin(__s387local4) * -__s387local2.scaleY * 100000 | 0) / 100000;
    var __s387local8 = (Math.cos(__s387local4) * __s387local2.scaleY * 100000 | 0) / 100000;
    var __s387local9 = this.t.style;
    var __s387local10 = this.t.currentStyle;
    if (__s387local10) {
      __s387local1 = __s387local6;
      __s387local6 = -__s387local7;
      __s387local7 = -__s387local1;
      __s387local0 = __s387local10.filter;
      __s387local9.filter = "";
      var __s387local11;
      var __s387local12;
      var __s387local13 = this.t.offsetWidth;
      var __s387local14 = this.t.offsetHeight;
      var __s387local15 = __s387local10.position !== "absolute";
      var __s387local16 = "progid:DXImageTransform.Microsoft.Matrix(M11=" + __s387local5 + ", M12=" + __s387local6 + ", M21=" + __s387local7 + ", M22=" + __s387local8;
      var __s387local17 = __s387local2.x + __s387local13 * __s387local2.xPercent / 100;
      var __s387local18 = __s387local2.y + __s387local14 * __s387local2.yPercent / 100;
      if (__s387local2.ox != null) {
        __s387local17 += (__s387local11 = (__s387local2.oxp ? __s387local13 * __s387local2.ox * 0.01 : __s387local2.ox) - __s387local13 / 2) - (__s387local11 * __s387local5 + (__s387local12 = (__s387local2.oyp ? __s387local14 * __s387local2.oy * 0.01 : __s387local2.oy) - __s387local14 / 2) * __s387local6);
        __s387local18 += __s387local12 - (__s387local11 * __s387local7 + __s387local12 * __s387local8);
      }
      __s387local16 += __s387local15 ? ", Dx=" + ((__s387local11 = __s387local13 / 2) - (__s387local11 * __s387local5 + (__s387local12 = __s387local14 / 2) * __s387local6) + __s387local17) + ", Dy=" + (__s387local12 - (__s387local11 * __s387local7 + __s387local12 * __s387local8) + __s387local18) + ")" : ", sizingMethod='auto expand')";
      if (__s387local0.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
        __s387local9.filter = __s387local0.replace(__s1local31, __s387local16);
      } else {
        __s387local9.filter = __s387local16 + " " + __s387local0;
      }
      if (__s387param0 === 0 || __s387param0 === 1) {
        if (__s387local5 === 1 && __s387local6 === 0 && __s387local7 === 0 && __s387local8 === 1) {
          if ((!__s387local15 || __s387local16.indexOf("Dx=0, Dy=0") !== -1) && (!__s1local21.test(__s387local0) || parseFloat(RegExp.$1) === 100)) {
            if (__s387local0.indexOf(__s387local0.indexOf("Alpha")) === -1) {
              __s387local9.removeAttribute("filter");
            }
          }
        }
      }
      if (!__s387local15) {
        var __s387local19;
        var __s387local20;
        var __s387local21;
        var __s387local22 = __s1local13 < 8 ? 1 : -1;
        __s387local11 = __s387local2.ieOffsetX || 0;
        __s387local12 = __s387local2.ieOffsetY || 0;
        __s387local2.ieOffsetX = Math.round((__s387local13 - ((__s387local5 < 0 ? -__s387local5 : __s387local5) * __s387local13 + (__s387local6 < 0 ? -__s387local6 : __s387local6) * __s387local14)) / 2 + __s387local17);
        __s387local2.ieOffsetY = Math.round((__s387local14 - ((__s387local8 < 0 ? -__s387local8 : __s387local8) * __s387local14 + (__s387local7 < 0 ? -__s387local7 : __s387local7) * __s387local13)) / 2 + __s387local18);
        __s1local74 = 0;
        for (; __s1local74 < 4; __s1local74++) {
          __s387local21 = (__s387local1 = (__s387local19 = __s387local10[__s387local20 = __s1local57[__s1local74]]).indexOf("px") !== -1 ? parseFloat(__s387local19) : __s1local52(this.t, __s387local20, parseFloat(__s387local19), __s387local19.replace(__s1local20, "")) || 0) !== __s387local2[__s387local20] ? __s1local74 < 2 ? -__s387local2.ieOffsetX : -__s387local2.ieOffsetY : __s1local74 < 2 ? __s387local11 - __s387local2.ieOffsetX : __s387local12 - __s387local2.ieOffsetY;
          __s387local9[__s387local20] = (__s387local2[__s387local20] = Math.round(__s387local1 - __s387local21 * (__s1local74 === 0 || __s1local74 === 2 ? 1 : __s387local22))) + "px";
        }
      }
    }
  }
  var __s1local100 = __s1local42.set3DTransformRatio = __s1local42.setTransformRatio = function (__s400param0) {
    var __s400local0;
    var __s400local1;
    var __s400local2;
    var __s400local3;
    var __s400local4;
    var __s400local5;
    var __s400local6;
    var __s400local7;
    var __s400local8;
    var __s400local9;
    var __s400local10;
    var __s400local11;
    var __s400local12;
    var __s400local13;
    var __s400local14;
    var __s400local15;
    var __s400local16;
    var __s400local17;
    var __s400local18;
    var __s400local19;
    var __s400local20;
    var __s400local21 = this.data;
    var __s400local22 = this.t.style;
    var __s400local23 = __s400local21.rotation;
    var __s400local24 = __s400local21.rotationX;
    var __s400local25 = __s400local21.rotationY;
    var __s400local26 = __s400local21.scaleX;
    var __s400local27 = __s400local21.scaleY;
    var __s400local28 = __s400local21.scaleZ;
    var __s400local29 = __s400local21.x;
    var __s400local30 = __s400local21.y;
    var __s400local31 = __s400local21.z;
    var __s400local32 = __s400local21.svg;
    var __s400local33 = __s400local21.perspective;
    var __s400local34 = __s400local21.force3D;
    var __s400local35 = __s400local21.skewY;
    var __s400local36 = __s400local21.skewX;
    if (__s400local35) {
      __s400local36 += __s400local35;
      __s400local23 += __s400local35;
    }
    if (((__s400param0 === 1 || __s400param0 === 0) && __s400local34 === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !__s400local34) && !__s400local31 && !__s400local33 && !__s400local25 && !__s400local24 && __s400local28 === 1 || __s1local78 && __s400local32 || !__s1local87) {
      if (__s400local23 || __s400local36 || __s400local32) {
        __s400local23 *= __s1local34;
        __s400local19 = __s400local36 * __s1local34;
        __s400local20 = 100000;
        __s400local1 = Math.cos(__s400local23) * __s400local26;
        __s400local4 = Math.sin(__s400local23) * __s400local26;
        __s400local2 = Math.sin(__s400local23 - __s400local19) * -__s400local27;
        __s400local5 = Math.cos(__s400local23 - __s400local19) * __s400local27;
        if (__s400local19 && __s400local21.skewType === "simple") {
          __s400local0 = Math.tan(__s400local19 - __s400local35 * __s1local34);
          __s400local2 *= __s400local0 = Math.sqrt(1 + __s400local0 * __s400local0);
          __s400local5 *= __s400local0;
          if (__s400local35) {
            __s400local0 = Math.tan(__s400local35 * __s1local34);
            __s400local1 *= __s400local0 = Math.sqrt(1 + __s400local0 * __s400local0);
            __s400local4 *= __s400local0;
          }
        }
        if (__s400local32) {
          __s400local29 += __s400local21.xOrigin - (__s400local21.xOrigin * __s400local1 + __s400local21.yOrigin * __s400local2) + __s400local21.xOffset;
          __s400local30 += __s400local21.yOrigin - (__s400local21.xOrigin * __s400local4 + __s400local21.yOrigin * __s400local5) + __s400local21.yOffset;
          if (__s1local78 && (__s400local21.xPercent || __s400local21.yPercent)) {
            __s400local14 = this.t.getBBox();
            __s400local29 += __s400local21.xPercent * 0.01 * __s400local14.width;
            __s400local30 += __s400local21.yPercent * 0.01 * __s400local14.height;
          }
          if (__s400local29 < (__s400local14 = 0.000001) && __s400local29 > -__s400local14) {
            __s400local29 = 0;
          }
          if (__s400local30 < __s400local14 && __s400local30 > -__s400local14) {
            __s400local30 = 0;
          }
        }
        __s400local18 = (__s400local1 * __s400local20 | 0) / __s400local20 + "," + (__s400local4 * __s400local20 | 0) / __s400local20 + "," + (__s400local2 * __s400local20 | 0) / __s400local20 + "," + (__s400local5 * __s400local20 | 0) / __s400local20 + "," + __s400local29 + "," + __s400local30 + ")";
        if (__s400local32 && __s1local78) {
          this.t.setAttribute("transform", "matrix(" + __s400local18);
        } else {
          __s400local22[__s1local84] = (__s400local21.xPercent || __s400local21.yPercent ? "translate(" + __s400local21.xPercent + "%," + __s400local21.yPercent + "%) matrix(" : "matrix(") + __s400local18;
        }
      } else {
        __s400local22[__s1local84] = (__s400local21.xPercent || __s400local21.yPercent ? "translate(" + __s400local21.xPercent + "%," + __s400local21.yPercent + "%) matrix(" : "matrix(") + __s400local26 + ",0,0," + __s400local27 + "," + __s400local29 + "," + __s400local30 + ")";
      }
    } else {
      if (__s1local11) {
        if (__s400local26 < (__s400local14 = 0.0001) && __s400local26 > -__s400local14) {
          __s400local26 = __s400local28 = 0.00002;
        }
        if (__s400local27 < __s400local14 && __s400local27 > -__s400local14) {
          __s400local27 = __s400local28 = 0.00002;
        }
        if (!!__s400local33 && !__s400local21.z && !__s400local21.rotationX && !__s400local21.rotationY) {
          __s400local33 = 0;
        }
      }
      if (__s400local23 || __s400local36) {
        __s400local23 *= __s1local34;
        __s400local15 = __s400local1 = Math.cos(__s400local23);
        __s400local16 = __s400local4 = Math.sin(__s400local23);
        if (__s400local36) {
          __s400local23 -= __s400local36 * __s1local34;
          __s400local15 = Math.cos(__s400local23);
          __s400local16 = Math.sin(__s400local23);
          if (__s400local21.skewType === "simple") {
            __s400local0 = Math.tan((__s400local36 - __s400local35) * __s1local34);
            __s400local15 *= __s400local0 = Math.sqrt(1 + __s400local0 * __s400local0);
            __s400local16 *= __s400local0;
            if (__s400local21.skewY) {
              __s400local0 = Math.tan(__s400local35 * __s1local34);
              __s400local1 *= __s400local0 = Math.sqrt(1 + __s400local0 * __s400local0);
              __s400local4 *= __s400local0;
            }
          }
        }
        __s400local2 = -__s400local16;
        __s400local5 = __s400local15;
      } else {
        if (!__s400local25 && !__s400local24 && __s400local28 === 1 && !__s400local33 && !__s400local32) {
          __s400local22[__s1local84] = (__s400local21.xPercent || __s400local21.yPercent ? "translate(" + __s400local21.xPercent + "%," + __s400local21.yPercent + "%) translate3d(" : "translate3d(") + __s400local29 + "px," + __s400local30 + "px," + __s400local31 + "px)" + (__s400local26 !== 1 || __s400local27 !== 1 ? " scale(" + __s400local26 + "," + __s400local27 + ")" : "");
          return;
        }
        __s400local1 = __s400local5 = 1;
        __s400local2 = __s400local4 = 0;
      }
      __s400local9 = 1;
      __s400local3 = __s400local6 = __s400local7 = __s400local8 = __s400local10 = __s400local11 = 0;
      __s400local12 = __s400local33 ? -1 / __s400local33 : 0;
      __s400local13 = __s400local21.zOrigin;
      __s400local14 = 0.000001;
      ",";
      "0";
      if (__s400local23 = __s400local25 * __s1local34) {
        __s400local15 = Math.cos(__s400local23);
        __s400local7 = -(__s400local16 = Math.sin(__s400local23));
        __s400local10 = __s400local12 * -__s400local16;
        __s400local3 = __s400local1 * __s400local16;
        __s400local6 = __s400local4 * __s400local16;
        __s400local9 = __s400local15;
        __s400local12 *= __s400local15;
        __s400local1 *= __s400local15;
        __s400local4 *= __s400local15;
      }
      if (__s400local23 = __s400local24 * __s1local34) {
        __s400local0 = __s400local2 * (__s400local15 = Math.cos(__s400local23)) + __s400local3 * (__s400local16 = Math.sin(__s400local23));
        __s400local17 = __s400local5 * __s400local15 + __s400local6 * __s400local16;
        __s400local8 = __s400local9 * __s400local16;
        __s400local11 = __s400local12 * __s400local16;
        __s400local3 = __s400local2 * -__s400local16 + __s400local3 * __s400local15;
        __s400local6 = __s400local5 * -__s400local16 + __s400local6 * __s400local15;
        __s400local9 *= __s400local15;
        __s400local12 *= __s400local15;
        __s400local2 = __s400local0;
        __s400local5 = __s400local17;
      }
      if (__s400local28 !== 1) {
        __s400local3 *= __s400local28;
        __s400local6 *= __s400local28;
        __s400local9 *= __s400local28;
        __s400local12 *= __s400local28;
      }
      if (__s400local27 !== 1) {
        __s400local2 *= __s400local27;
        __s400local5 *= __s400local27;
        __s400local8 *= __s400local27;
        __s400local11 *= __s400local27;
      }
      if (__s400local26 !== 1) {
        __s400local1 *= __s400local26;
        __s400local4 *= __s400local26;
        __s400local7 *= __s400local26;
        __s400local10 *= __s400local26;
      }
      if (__s400local13 || __s400local32) {
        if (__s400local13) {
          __s400local29 += __s400local3 * -__s400local13;
          __s400local30 += __s400local6 * -__s400local13;
          __s400local31 += __s400local9 * -__s400local13 + __s400local13;
        }
        if (__s400local32) {
          __s400local29 += __s400local21.xOrigin - (__s400local21.xOrigin * __s400local1 + __s400local21.yOrigin * __s400local2) + __s400local21.xOffset;
          __s400local30 += __s400local21.yOrigin - (__s400local21.xOrigin * __s400local4 + __s400local21.yOrigin * __s400local5) + __s400local21.yOffset;
        }
        if (__s400local29 < __s400local14 && __s400local29 > -__s400local14) {
          __s400local29 = "0";
        }
        if (__s400local30 < __s400local14 && __s400local30 > -__s400local14) {
          __s400local30 = "0";
        }
        if (__s400local31 < __s400local14 && __s400local31 > -__s400local14) {
          __s400local31 = 0;
        }
      }
      __s400local18 = __s400local21.xPercent || __s400local21.yPercent ? "translate(" + __s400local21.xPercent + "%," + __s400local21.yPercent + "%) matrix3d(" : "matrix3d(";
      __s400local18 += (__s400local1 < __s400local14 && __s400local1 > -__s400local14 ? "0" : __s400local1) + "," + (__s400local4 < __s400local14 && __s400local4 > -__s400local14 ? "0" : __s400local4) + "," + (__s400local7 < __s400local14 && __s400local7 > -__s400local14 ? "0" : __s400local7);
      __s400local18 += "," + (__s400local10 < __s400local14 && __s400local10 > -__s400local14 ? "0" : __s400local10) + "," + (__s400local2 < __s400local14 && __s400local2 > -__s400local14 ? "0" : __s400local2) + "," + (__s400local5 < __s400local14 && __s400local5 > -__s400local14 ? "0" : __s400local5);
      if (__s400local24 || __s400local25 || __s400local28 !== 1) {
        __s400local18 += "," + (__s400local8 < __s400local14 && __s400local8 > -__s400local14 ? "0" : __s400local8) + "," + (__s400local11 < __s400local14 && __s400local11 > -__s400local14 ? "0" : __s400local11) + "," + (__s400local3 < __s400local14 && __s400local3 > -__s400local14 ? "0" : __s400local3);
        __s400local18 += "," + (__s400local6 < __s400local14 && __s400local6 > -__s400local14 ? "0" : __s400local6) + "," + (__s400local9 < __s400local14 && __s400local9 > -__s400local14 ? "0" : __s400local9) + "," + (__s400local12 < __s400local14 && __s400local12 > -__s400local14 ? "0" : __s400local12) + ",";
      } else {
        __s400local18 += ",0,0,0,0,1,0,";
      }
      __s400local18 += __s400local29 + "," + __s400local30 + "," + __s400local31 + "," + (__s400local33 ? 1 + -__s400local31 / __s400local33 : 1) + ")";
      __s400local22[__s1local84] = __s400local18;
    }
  };
  (__s1local7 = __s1local88.prototype).x = __s1local7.y = __s1local7.z = __s1local7.skewX = __s1local7.skewY = __s1local7.rotation = __s1local7.rotationX = __s1local7.rotationY = __s1local7.zOrigin = __s1local7.xPercent = __s1local7.yPercent = __s1local7.xOffset = __s1local7.yOffset = 0;
  __s1local7.scaleX = __s1local7.scaleY = __s1local7.scaleZ = 1;
  __s1local76("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
    parser: function (__s438param0, __s438param1, __s438param2, __s438param3, __s438param4, __s438param5, __s438param6) {
      if (__s438param3._lastParsedTransform === __s438param6) {
        return __s438param4;
      }
      __s438param3._lastParsedTransform = __s438param6;
      var __s438local0;
      var __s438local1 = __s438param6.scale && typeof __s438param6.scale == "function" ? __s438param6.scale : 0;
      if (typeof __s438param6[__s438param2] == "function") {
        __s438local0 = __s438param6[__s438param2];
        __s438param6[__s438param2] = __s438param1;
      }
      if (__s438local1) {
        __s438param6.scale = __s438local1(__s1local15, __s438param0);
      }
      var __s438local2;
      var __s438local3;
      var __s438local4;
      var __s438local5;
      var __s438local6;
      var __s438local7;
      var __s438local8;
      var __s438local9;
      var __s438local10;
      var __s438local11 = __s438param0._gsTransform;
      var __s438local12 = __s438param0.style;
      var __s438local13 = __s1local83.length;
      var __s438local14 = __s438param6;
      var __s438local15 = {};
      var __s438local16 = __s1local98(__s438param0, __s1local2, true, __s438local14.parseTransform);
      var __s438local17 = __s438local14.transform && (typeof __s438local14.transform == "function" ? __s438local14.transform(__s1local15, __s1local14) : __s438local14.transform);
      __s438local16.skewType = __s438local14.skewType || __s438local16.skewType || __s1local4.defaultSkewType;
      __s438param3._transform = __s438local16;
      if ("rotationZ" in __s438local14) {
        __s438local14.rotation = __s438local14.rotationZ;
      }
      if (__s438local17 && typeof __s438local17 == "string" && __s1local84) {
        (__s438local3 = __s1local40.style)[__s1local84] = __s438local17;
        __s438local3.display = "block";
        __s438local3.position = "absolute";
        if (__s438local17.indexOf("%") !== -1) {
          __s438local3.width = __s1local51(__s438param0, "width");
          __s438local3.height = __s1local51(__s438param0, "height");
        }
        __s1local38.body.appendChild(__s1local40);
        __s438local2 = __s1local98(__s1local40, null, false);
        if (__s438local16.skewType === "simple") {
          __s438local2.scaleY *= Math.cos(__s438local2.skewX * __s1local34);
        }
        if (__s438local16.svg) {
          __s438local7 = __s438local16.xOrigin;
          __s438local8 = __s438local16.yOrigin;
          __s438local2.x -= __s438local16.xOffset;
          __s438local2.y -= __s438local16.yOffset;
          if (__s438local14.transformOrigin || __s438local14.svgOrigin) {
            __s438local17 = {};
            __s1local93(__s438param0, __s1local59(__s438local14.transformOrigin), __s438local17, __s438local14.svgOrigin, __s438local14.smoothOrigin, true);
            __s438local7 = __s438local17.xOrigin;
            __s438local8 = __s438local17.yOrigin;
            __s438local2.x -= __s438local17.xOffset - __s438local16.xOffset;
            __s438local2.y -= __s438local17.yOffset - __s438local16.yOffset;
          }
          if (__s438local7 || __s438local8) {
            __s438local9 = __s1local97(__s1local40, true);
            __s438local2.x -= __s438local7 - (__s438local7 * __s438local9[0] + __s438local8 * __s438local9[2]);
            __s438local2.y -= __s438local8 - (__s438local7 * __s438local9[1] + __s438local8 * __s438local9[3]);
          }
        }
        __s1local38.body.removeChild(__s1local40);
        __s438local2.perspective ||= __s438local16.perspective;
        if (__s438local14.xPercent != null) {
          __s438local2.xPercent = __s1local61(__s438local14.xPercent, __s438local16.xPercent);
        }
        if (__s438local14.yPercent != null) {
          __s438local2.yPercent = __s1local61(__s438local14.yPercent, __s438local16.yPercent);
        }
      } else if (typeof __s438local14 == "object") {
        __s438local2 = {
          scaleX: __s1local61(__s438local14.scaleX ?? __s438local14.scale, __s438local16.scaleX),
          scaleY: __s1local61(__s438local14.scaleY ?? __s438local14.scale, __s438local16.scaleY),
          scaleZ: __s1local61(__s438local14.scaleZ, __s438local16.scaleZ),
          x: __s1local61(__s438local14.x, __s438local16.x),
          y: __s1local61(__s438local14.y, __s438local16.y),
          z: __s1local61(__s438local14.z, __s438local16.z),
          xPercent: __s1local61(__s438local14.xPercent, __s438local16.xPercent),
          yPercent: __s1local61(__s438local14.yPercent, __s438local16.yPercent),
          perspective: __s1local61(__s438local14.transformPerspective, __s438local16.perspective)
        };
        if ((__s438local6 = __s438local14.directionalRotation) != null) {
          if (typeof __s438local6 == "object") {
            for (__s438local3 in __s438local6) {
              __s438local14[__s438local3] = __s438local6[__s438local3];
            }
          } else {
            __s438local14.rotation = __s438local6;
          }
        }
        if (typeof __s438local14.x == "string" && __s438local14.x.indexOf("%") !== -1) {
          __s438local2.x = 0;
          __s438local2.xPercent = __s1local61(__s438local14.x, __s438local16.xPercent);
        }
        if (typeof __s438local14.y == "string" && __s438local14.y.indexOf("%") !== -1) {
          __s438local2.y = 0;
          __s438local2.yPercent = __s1local61(__s438local14.y, __s438local16.yPercent);
        }
        __s438local2.rotation = __s1local62("rotation" in __s438local14 ? __s438local14.rotation : "shortRotation" in __s438local14 ? __s438local14.shortRotation + "_short" : __s438local16.rotation, __s438local16.rotation, "rotation", __s438local15);
        if (__s1local87) {
          __s438local2.rotationX = __s1local62("rotationX" in __s438local14 ? __s438local14.rotationX : "shortRotationX" in __s438local14 ? __s438local14.shortRotationX + "_short" : __s438local16.rotationX || 0, __s438local16.rotationX, "rotationX", __s438local15);
          __s438local2.rotationY = __s1local62("rotationY" in __s438local14 ? __s438local14.rotationY : "shortRotationY" in __s438local14 ? __s438local14.shortRotationY + "_short" : __s438local16.rotationY || 0, __s438local16.rotationY, "rotationY", __s438local15);
        }
        __s438local2.skewX = __s1local62(__s438local14.skewX, __s438local16.skewX);
        __s438local2.skewY = __s1local62(__s438local14.skewY, __s438local16.skewY);
      }
      if (__s1local87 && __s438local14.force3D != null) {
        __s438local16.force3D = __s438local14.force3D;
        __s438local5 = true;
      }
      if (!(__s438local4 = __s438local16.force3D || __s438local16.z || __s438local16.rotationX || __s438local16.rotationY || __s438local2.z || __s438local2.rotationX || __s438local2.rotationY || __s438local2.perspective) && __s438local14.scale != null) {
        __s438local2.scaleZ = 1;
      }
      while (--__s438local13 > -1) {
        if ((__s438local17 = __s438local2[__s438local10 = __s1local83[__s438local13]] - __s438local16[__s438local10]) > 0.000001 || __s438local17 < -0.000001 || __s438local14[__s438local10] != null || __s1local36[__s438local10] != null) {
          __s438local5 = true;
          __s438param4 = new __s1local71(__s438local16, __s438local10, __s438local16[__s438local10], __s438local17, __s438param4);
          if (__s438local10 in __s438local15) {
            __s438param4.e = __s438local15[__s438local10];
          }
          __s438param4.xs0 = 0;
          __s438param4.plugin = __s438param5;
          __s438param3._overwriteProps.push(__s438param4.n);
        }
      }
      __s438local17 = __s438local14.transformOrigin;
      if (__s438local16.svg && (__s438local17 || __s438local14.svgOrigin)) {
        __s438local7 = __s438local16.xOffset;
        __s438local8 = __s438local16.yOffset;
        __s1local93(__s438param0, __s1local59(__s438local17), __s438local2, __s438local14.svgOrigin, __s438local14.smoothOrigin);
        __s438param4 = __s1local72(__s438local16, "xOrigin", (__s438local11 ? __s438local16 : __s438local2).xOrigin, __s438local2.xOrigin, __s438param4, "transformOrigin");
        __s438param4 = __s1local72(__s438local16, "yOrigin", (__s438local11 ? __s438local16 : __s438local2).yOrigin, __s438local2.yOrigin, __s438param4, "transformOrigin");
        if (__s438local7 !== __s438local16.xOffset || __s438local8 !== __s438local16.yOffset) {
          __s438param4 = __s1local72(__s438local16, "xOffset", __s438local11 ? __s438local7 : __s438local16.xOffset, __s438local16.xOffset, __s438param4, "transformOrigin");
          __s438param4 = __s1local72(__s438local16, "yOffset", __s438local11 ? __s438local8 : __s438local16.yOffset, __s438local16.yOffset, __s438param4, "transformOrigin");
        }
        __s438local17 = "0px 0px";
      }
      if (__s438local17 || __s1local87 && __s438local4 && __s438local16.zOrigin) {
        if (__s1local84) {
          __s438local5 = true;
          __s438local10 = __s1local86;
          __s438local17 = (__s438local17 || __s1local51(__s438param0, __s438local10, __s1local2, false, "50% 50%")) + "";
          (__s438param4 = new __s1local71(__s438local12, __s438local10, 0, 0, __s438param4, -1, "transformOrigin")).b = __s438local12[__s438local10];
          __s438param4.plugin = __s438param5;
          if (__s1local87) {
            __s438local3 = __s438local16.zOrigin;
            __s438local17 = __s438local17.split(" ");
            __s438local16.zOrigin = (__s438local17.length > 2 && (__s438local3 === 0 || __s438local17[2] !== "0px") ? parseFloat(__s438local17[2]) : __s438local3) || 0;
            __s438param4.xs0 = __s438param4.e = __s438local17[0] + " " + (__s438local17[1] || "50%") + " 0px";
            (__s438param4 = new __s1local71(__s438local16, "zOrigin", 0, 0, __s438param4, -1, __s438param4.n)).b = __s438local3;
            __s438param4.xs0 = __s438param4.e = __s438local16.zOrigin;
          } else {
            __s438param4.xs0 = __s438param4.e = __s438local17;
          }
        } else {
          __s1local59(__s438local17 + "", __s438local16);
        }
      }
      if (__s438local5) {
        __s438param3._transformType = __s438local16.svg && __s1local78 || !__s438local4 && this._transformType !== 3 ? 2 : 3;
      }
      if (__s438local0) {
        __s438param6[__s438param2] = __s438local0;
      }
      if (__s438local1) {
        __s438param6.scale = __s438local1;
      }
      return __s438param4;
    },
    prefix: true
  });
  __s1local76("boxShadow", {
    defaultValue: "0px 0px 0px 0px #999",
    prefix: true,
    color: true,
    multi: true,
    keyword: "inset"
  });
  __s1local76("borderRadius", {
    defaultValue: "0px",
    parser: function (__s477param0, __s477param1, __s477param2, __s477param3, __s477param4, __s477param5) {
      __s477param1 = this.format(__s477param1);
      var __s477local0;
      var __s477local1;
      var __s477local2;
      var __s477local3;
      var __s477local4;
      var __s477local5;
      var __s477local6;
      var __s477local7;
      var __s477local8;
      var __s477local9;
      var __s477local10;
      var __s477local11;
      var __s477local12;
      var __s477local13;
      var __s477local14;
      var __s477local15;
      var __s477local16 = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
      var __s477local17 = __s477param0.style;
      __s477local8 = parseFloat(__s477param0.offsetWidth);
      __s477local9 = parseFloat(__s477param0.offsetHeight);
      __s477local0 = __s477param1.split(" ");
      __s477local1 = 0;
      for (; __s477local1 < __s477local16.length; __s477local1++) {
        if (this.p.indexOf("border")) {
          __s477local16[__s477local1] = __s1local49(__s477local16[__s477local1]);
        }
        if ((__s477local4 = __s477local3 = __s1local51(__s477param0, __s477local16[__s477local1], __s1local2, false, "0px")).indexOf(" ") !== -1) {
          __s477local4 = (__s477local3 = __s477local4.split(" "))[0];
          __s477local3 = __s477local3[1];
        }
        __s477local5 = __s477local2 = __s477local0[__s477local1];
        __s477local6 = parseFloat(__s477local4);
        __s477local11 = __s477local4.substr((__s477local6 + "").length);
        if (__s477local12 = __s477local5.charAt(1) === "=") {
          __s477local7 = parseInt(__s477local5.charAt(0) + "1", 10);
          __s477local5 = __s477local5.substr(2);
          __s477local7 *= parseFloat(__s477local5);
          __s477local10 = __s477local5.substr((__s477local7 + "").length - (__s477local7 < 0 ? 1 : 0)) || "";
        } else {
          __s477local7 = parseFloat(__s477local5);
          __s477local10 = __s477local5.substr((__s477local7 + "").length);
        }
        if (__s477local10 === "") {
          __s477local10 = __s1local1[__s477param2] || __s477local11;
        }
        if (__s477local10 !== __s477local11) {
          __s477local13 = __s1local52(__s477param0, "borderLeft", __s477local6, __s477local11);
          __s477local14 = __s1local52(__s477param0, "borderTop", __s477local6, __s477local11);
          if (__s477local10 === "%") {
            __s477local4 = __s477local13 / __s477local8 * 100 + "%";
            __s477local3 = __s477local14 / __s477local9 * 100 + "%";
          } else if (__s477local10 === "em") {
            __s477local4 = __s477local13 / (__s477local15 = __s1local52(__s477param0, "borderLeft", 1, "em")) + "em";
            __s477local3 = __s477local14 / __s477local15 + "em";
          } else {
            __s477local4 = __s477local13 + "px";
            __s477local3 = __s477local14 + "px";
          }
          if (__s477local12) {
            __s477local5 = parseFloat(__s477local4) + __s477local7 + __s477local10;
            __s477local2 = parseFloat(__s477local3) + __s477local7 + __s477local10;
          }
        }
        __s477param4 = __s1local73(__s477local17, __s477local16[__s477local1], __s477local4 + " " + __s477local3, __s477local5 + " " + __s477local2, false, "0px", __s477param4);
      }
      return __s477param4;
    },
    prefix: true,
    formatter: __s1local68("0px 0px 0px 0px", false, true)
  });
  __s1local76("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
    defaultValue: "0px",
    parser: function (__s491param0, __s491param1, __s491param2, __s491param3, __s491param4, __s491param5) {
      return __s1local73(__s491param0.style, __s491param2, this.format(__s1local51(__s491param0, __s491param2, __s1local2, false, "0px 0px")), this.format(__s491param1), false, "0px", __s491param4);
    },
    prefix: true,
    formatter: __s1local68("0px 0px", false, true)
  });
  __s1local76("backgroundPosition", {
    defaultValue: "0 0",
    parser: function (__s493param0, __s493param1, __s493param2, __s493param3, __s493param4, __s493param5) {
      var __s493local0;
      var __s493local1;
      var __s493local2;
      var __s493local3;
      var __s493local4;
      var __s493local5;
      var __s493local6 = "background-position";
      var __s493local7 = __s1local2 || __s1local50(__s493param0, null);
      var __s493local8 = this.format((__s493local7 ? __s1local13 ? __s493local7.getPropertyValue(__s493local6 + "-x") + " " + __s493local7.getPropertyValue(__s493local6 + "-y") : __s493local7.getPropertyValue(__s493local6) : __s493param0.currentStyle.backgroundPositionX + " " + __s493param0.currentStyle.backgroundPositionY) || "0 0");
      var __s493local9 = this.format(__s493param1);
      if (__s493local8.indexOf("%") !== -1 != (__s493local9.indexOf("%") !== -1) && __s493local9.split(",").length < 2 && (__s493local5 = __s1local51(__s493param0, "backgroundImage").replace(__s1local27, "")) && __s493local5 !== "none") {
        __s493local0 = __s493local8.split(" ");
        __s493local1 = __s493local9.split(" ");
        __s1local41.setAttribute("src", __s493local5);
        __s493local2 = 2;
        while (--__s493local2 > -1) {
          if ((__s493local3 = (__s493local8 = __s493local0[__s493local2]).indexOf("%") !== -1) !== (__s493local1[__s493local2].indexOf("%") !== -1)) {
            __s493local4 = __s493local2 === 0 ? __s493param0.offsetWidth - __s1local41.width : __s493param0.offsetHeight - __s1local41.height;
            __s493local0[__s493local2] = __s493local3 ? parseFloat(__s493local8) / 100 * __s493local4 + "px" : parseFloat(__s493local8) / __s493local4 * 100 + "%";
          }
        }
        __s493local8 = __s493local0.join(" ");
      }
      return this.parseComplex(__s493param0.style, __s493local8, __s493local9, __s493param4, __s493param5);
    },
    formatter: __s1local59
  });
  __s1local76("backgroundSize", {
    defaultValue: "0 0",
    formatter: function (__s499param0) {
      if ((__s499param0 += "").substr(0, 2) === "co") {
        return __s499param0;
      } else {
        return __s1local59(__s499param0.indexOf(" ") === -1 ? __s499param0 + " " + __s499param0 : __s499param0);
      }
    }
  });
  __s1local76("perspective", {
    defaultValue: "0px",
    prefix: true
  });
  __s1local76("perspectiveOrigin", {
    defaultValue: "50% 50%",
    prefix: true
  });
  __s1local76("transformStyle", {
    prefix: true
  });
  __s1local76("backfaceVisibility", {
    prefix: true
  });
  __s1local76("userSelect", {
    prefix: true
  });
  __s1local76("margin", {
    parser: __s1local69("marginTop,marginRight,marginBottom,marginLeft")
  });
  __s1local76("padding", {
    parser: __s1local69("paddingTop,paddingRight,paddingBottom,paddingLeft")
  });
  __s1local76("clip", {
    defaultValue: "rect(0px,0px,0px,0px)",
    parser: function (__s503param0, __s503param1, __s503param2, __s503param3, __s503param4, __s503param5) {
      var __s503local0;
      var __s503local1;
      var __s503local2;
      if (__s1local13 < 9) {
        __s503local1 = __s503param0.currentStyle;
        __s503local2 = __s1local13 < 8 ? " " : ",";
        __s503local0 = "rect(" + __s503local1.clipTop + __s503local2 + __s503local1.clipRight + __s503local2 + __s503local1.clipBottom + __s503local2 + __s503local1.clipLeft + ")";
        __s503param1 = this.format(__s503param1).split(",").join(__s503local2);
      } else {
        __s503local0 = this.format(__s1local51(__s503param0, this.p, __s1local2, false, this.dflt));
        __s503param1 = this.format(__s503param1);
      }
      return this.parseComplex(__s503param0.style, __s503local0, __s503param1, __s503param4, __s503param5);
    }
  });
  __s1local76("textShadow", {
    defaultValue: "0px 0px 0px #999",
    color: true,
    multi: true
  });
  __s1local76("autoRound,strictUnits", {
    parser: function (__s507param0, __s507param1, __s507param2, __s507param3, __s507param4) {
      return __s507param4;
    }
  });
  __s1local76("border", {
    defaultValue: "0px solid #000",
    parser: function (__s509param0, __s509param1, __s509param2, __s509param3, __s509param4, __s509param5) {
      var __s509local0 = __s1local51(__s509param0, "borderTopWidth", __s1local2, false, "0px");
      var __s509local1 = this.format(__s509param1).split(" ");
      var __s509local2 = __s509local1[0].replace(__s1local20, "");
      if (__s509local2 !== "px") {
        __s509local0 = parseFloat(__s509local0) / __s1local52(__s509param0, "borderTopWidth", 1, __s509local2) + __s509local2;
      }
      return this.parseComplex(__s509param0.style, this.format(__s509local0 + " " + __s1local51(__s509param0, "borderTopStyle", __s1local2, false, "solid") + " " + __s1local51(__s509param0, "borderTopColor", __s1local2, false, "#000")), __s509local1.join(" "), __s509param4, __s509param5);
    },
    color: true,
    formatter: function (__s512param0) {
      var __s512local0 = __s512param0.split(" ");
      return __s512local0[0] + " " + (__s512local0[1] || "solid") + " " + (__s512param0.match(__s1local67) || ["#000"])[0];
    }
  });
  __s1local76("borderWidth", {
    parser: __s1local69("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
  });
  __s1local76("float,cssFloat,styleFloat", {
    parser: function (__s514param0, __s514param1, __s514param2, __s514param3, __s514param4, __s514param5) {
      var __s514local0 = __s514param0.style;
      var __s514local1 = "cssFloat" in __s514local0 ? "cssFloat" : "styleFloat";
      return new __s1local71(__s514local0, __s514local1, 0, 0, __s514param4, -1, __s514param2, false, 0, __s514local0[__s514local1], __s514param1);
    }
  });
  function __s1local101(__s516param0) {
    var __s516local0;
    var __s516local1 = this.t;
    var __s516local2 = __s516local1.filter || __s1local51(this.data, "filter") || "";
    var __s516local3 = this.s + this.c * __s516param0 | 0;
    if (__s516local3 === 100) {
      if (__s516local2.indexOf("atrix(") === -1 && __s516local2.indexOf("radient(") === -1 && __s516local2.indexOf("oader(") === -1) {
        __s516local1.removeAttribute("filter");
        __s516local0 = !__s1local51(this.data, "filter");
      } else {
        __s516local1.filter = __s516local2.replace(__s1local23, "");
        __s516local0 = true;
      }
    }
    if (!__s516local0) {
      if (this.xn1) {
        __s516local1.filter = __s516local2 = __s516local2 || "alpha(opacity=" + __s516local3 + ")";
      }
      if (__s516local2.indexOf("pacity") === -1) {
        if (__s516local3 !== 0 || !this.xn1) {
          __s516local1.filter = __s516local2 + " alpha(opacity=" + __s516local3 + ")";
        }
      } else {
        __s516local1.filter = __s516local2.replace(__s1local21, "opacity=" + __s516local3);
      }
    }
  }
  __s1local76("opacity,alpha,autoAlpha", {
    defaultValue: "1",
    parser: function (__s526param0, __s526param1, __s526param2, __s526param3, __s526param4, __s526param5) {
      var __s526local0 = parseFloat(__s1local51(__s526param0, "opacity", __s1local2, false, "1"));
      var __s526local1 = __s526param0.style;
      var __s526local2 = __s526param2 === "autoAlpha";
      if (typeof __s526param1 == "string" && __s526param1.charAt(1) === "=") {
        __s526param1 = (__s526param1.charAt(0) === "-" ? -1 : 1) * parseFloat(__s526param1.substr(2)) + __s526local0;
      }
      if (__s526local2 && __s526local0 === 1 && __s1local51(__s526param0, "visibility", __s1local2) === "hidden" && __s526param1 !== 0) {
        __s526local0 = 0;
      }
      if (__s1local44) {
        __s526param4 = new __s1local71(__s526local1, "opacity", __s526local0, __s526param1 - __s526local0, __s526param4);
      } else {
        (__s526param4 = new __s1local71(__s526local1, "opacity", __s526local0 * 100, (__s526param1 - __s526local0) * 100, __s526param4)).xn1 = __s526local2 ? 1 : 0;
        __s526local1.zoom = 1;
        __s526param4.type = 2;
        __s526param4.b = "alpha(opacity=" + __s526param4.s + ")";
        __s526param4.e = "alpha(opacity=" + (__s526param4.s + __s526param4.c) + ")";
        __s526param4.data = __s526param0;
        __s526param4.plugin = __s526param5;
        __s526param4.setRatio = __s1local101;
      }
      if (__s526local2) {
        (__s526param4 = new __s1local71(__s526local1, "visibility", 0, 0, __s526param4, -1, null, false, 0, __s526local0 !== 0 ? "inherit" : "hidden", __s526param1 === 0 ? "hidden" : "inherit")).xs0 = "inherit";
        __s526param3._overwriteProps.push(__s526param4.n);
        __s526param3._overwriteProps.push(__s526param2);
      }
      return __s526param4;
    }
  });
  function __s1local102(__s533param0, __s533param1) {
    if (__s533param1) {
      if (__s533param0.removeProperty) {
        if (__s533param1.substr(0, 2) === "ms" || __s533param1.substr(0, 6) === "webkit") {
          __s533param1 = "-" + __s533param1;
        }
        __s533param0.removeProperty(__s533param1.replace(__s1local25, "-$1").toLowerCase());
      } else {
        __s533param0.removeAttribute(__s533param1);
      }
    }
  }
  function __s1local103(__s539param0) {
    this.t._gsClassPT = this;
    if (__s539param0 === 1 || __s539param0 === 0) {
      this.t.setAttribute("class", __s539param0 === 0 ? this.b : this.e);
      for (var __s539local0 = this.data, __s539local1 = this.t.style; __s539local0;) {
        if (__s539local0.v) {
          __s539local1[__s539local0.p] = __s539local0.v;
        } else {
          __s1local102(__s539local1, __s539local0.p);
        }
        __s539local0 = __s539local0._next;
      }
      if (__s539param0 === 1 && this.t._gsClassPT === this) {
        this.t._gsClassPT = null;
      }
    } else if (this.t.getAttribute("class") !== this.e) {
      this.t.setAttribute("class", this.e);
    }
  }
  __s1local76("className", {
    parser: function (__s548param0, __s548param1, __s548param2, __s548param3, __s548param4, __s548param5, __s548param6) {
      var __s548local0;
      var __s548local1;
      var __s548local2;
      var __s548local3;
      var __s548local4;
      var __s548local5 = __s548param0.getAttribute("class") || "";
      var __s548local6 = __s548param0.style.cssText;
      (__s548param4 = __s548param3._classNamePT = new __s1local71(__s548param0, __s548param2, 0, 0, __s548param4, 2)).setRatio = __s1local103;
      __s548param4.pr = -11;
      __s1local0 = true;
      __s548param4.b = __s548local5;
      __s548local1 = __s1local54(__s548param0, __s1local2);
      if (__s548local2 = __s548param0._gsClassPT) {
        __s548local3 = {};
        __s548local4 = __s548local2.data;
        while (__s548local4) {
          __s548local3[__s548local4.p] = 1;
          __s548local4 = __s548local4._next;
        }
        __s548local2.setRatio(1);
      }
      __s548param0._gsClassPT = __s548param4;
      __s548param4.e = __s548param1.charAt(1) !== "=" ? __s548param1 : __s548local5.replace(new RegExp("(?:\\s|^)" + __s548param1.substr(2) + "(?![\\w-])"), "") + (__s548param1.charAt(0) === "+" ? " " + __s548param1.substr(2) : "");
      __s548param0.setAttribute("class", __s548param4.e);
      __s548local0 = __s1local55(__s548param0, __s548local1, __s1local54(__s548param0), __s548param6, __s548local3);
      __s548param0.setAttribute("class", __s548local5);
      __s548param4.data = __s548local0.firstMPT;
      __s548param0.style.cssText = __s548local6;
      return __s548param4 = __s548param4.xfirst = __s548param3.parse(__s548param0, __s548local0.difs, __s548param4, __s548param5);
    }
  });
  function __s1local104(__s553param0) {
    if ((__s553param0 === 1 || __s553param0 === 0) && this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
      var __s553local0;
      var __s553local1;
      var __s553local2;
      var __s553local3;
      var __s553local4;
      var __s553local5 = this.t.style;
      var __s553local6 = __s1local6.transform.parse;
      if (this.e === "all") {
        __s553local5.cssText = "";
        __s553local3 = true;
      } else {
        for (__s553local2 = (__s553local0 = this.e.split(" ").join("").split(",")).length; --__s553local2 > -1;) {
          __s553local1 = __s553local0[__s553local2];
          if (__s1local6[__s553local1]) {
            if (__s1local6[__s553local1].parse === __s553local6) {
              __s553local3 = true;
            } else {
              __s553local1 = __s553local1 === "transformOrigin" ? __s1local86 : __s1local6[__s553local1].p;
            }
          }
          __s1local102(__s553local5, __s553local1);
        }
      }
      if (__s553local3) {
        __s1local102(__s553local5, __s1local84);
        if (__s553local4 = this.t._gsTransform) {
          if (__s553local4.svg) {
            this.t.removeAttribute("data-svg-origin");
            this.t.removeAttribute("transform");
          }
          delete this.t._gsTransform;
        }
      }
    }
  }
  __s1local76("clearProps", {
    parser: function (__s566param0, __s566param1, __s566param2, __s566param3, __s566param4) {
      (__s566param4 = new __s1local71(__s566param0, __s566param2, 0, 0, __s566param4, 2)).setRatio = __s1local104;
      __s566param4.e = __s566param1;
      __s566param4.pr = -10;
      __s566param4.data = __s566param3._tween;
      __s1local0 = true;
      return __s566param4;
    }
  });
  __s1local7 = "bezier,throwProps,physicsProps,physics2D".split(",");
  __s1local74 = __s1local7.length;
  while (__s1local74--) {
    __s1local77(__s1local7[__s1local74]);
  }
  (__s1local7 = __s1local4.prototype)._firstPT = __s1local7._lastParsedTransform = __s1local7._transform = null;
  __s1local7._onInitTween = function (__s570param0, __s570param1, __s570param2, __s570param3) {
    if (!__s570param0.nodeType) {
      return false;
    }
    this._target = __s1local14 = __s570param0;
    this._tween = __s570param2;
    this._vars = __s570param1;
    __s1local15 = __s570param3;
    __s1local8 = __s570param1.autoRound;
    __s1local0 = false;
    __s1local1 = __s570param1.suffixMap || __s1local4.suffixMap;
    __s1local2 = __s1local50(__s570param0, "");
    __s1local3 = this._overwriteProps;
    var __s570local0;
    var __s570local1;
    var __s570local2;
    var __s570local3;
    var __s570local4;
    var __s570local5;
    var __s570local6;
    var __s570local7;
    var __s570local8;
    var __s570local9 = __s570param0.style;
    if (__s1local9 && __s570local9.zIndex === "") {
      if ((__s570local0 = __s1local51(__s570param0, "zIndex", __s1local2)) === "auto" || __s570local0 === "") {
        this._addLazySet(__s570local9, "zIndex", 0);
      }
    }
    if (typeof __s570param1 == "string") {
      __s570local3 = __s570local9.cssText;
      __s570local0 = __s1local54(__s570param0, __s1local2);
      __s570local9.cssText = __s570local3 + ";" + __s570param1;
      __s570local0 = __s1local55(__s570param0, __s570local0, __s1local54(__s570param0)).difs;
      if (!__s1local44 && __s1local22.test(__s570param1)) {
        __s570local0.opacity = parseFloat(RegExp.$1);
      }
      __s570param1 = __s570local0;
      __s570local9.cssText = __s570local3;
    }
    if (__s570param1.className) {
      this._firstPT = __s570local1 = __s1local6.className.parse(__s570param0, __s570param1.className, "className", this, null, null, __s570param1);
    } else {
      this._firstPT = __s570local1 = this.parse(__s570param0, __s570param1, null);
    }
    if (this._transformType) {
      __s570local8 = this._transformType === 3;
      if (__s1local84) {
        if (__s1local10) {
          __s1local9 = true;
          if (__s570local9.zIndex === "") {
            if ((__s570local6 = __s1local51(__s570param0, "zIndex", __s1local2)) === "auto" || __s570local6 === "") {
              this._addLazySet(__s570local9, "zIndex", 0);
            }
          }
          if (__s1local12) {
            this._addLazySet(__s570local9, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (__s570local8 ? "visible" : "hidden"));
          }
        }
      } else {
        __s570local9.zoom = 1;
      }
      __s570local2 = __s570local1;
      while (__s570local2 && __s570local2._next) {
        __s570local2 = __s570local2._next;
      }
      __s570local7 = new __s1local71(__s570param0, "transform", 0, 0, null, 2);
      this._linkCSSP(__s570local7, null, __s570local2);
      __s570local7.setRatio = __s1local84 ? __s1local100 : __s1local99;
      __s570local7.data = this._transform || __s1local98(__s570param0, __s1local2, true);
      __s570local7.tween = __s570param2;
      __s570local7.pr = -1;
      __s1local3.pop();
    }
    if (__s1local0) {
      while (__s570local1) {
        __s570local5 = __s570local1._next;
        __s570local2 = __s570local3;
        while (__s570local2 && __s570local2.pr > __s570local1.pr) {
          __s570local2 = __s570local2._next;
        }
        if (__s570local1._prev = __s570local2 ? __s570local2._prev : __s570local4) {
          __s570local1._prev._next = __s570local1;
        } else {
          __s570local3 = __s570local1;
        }
        if (__s570local1._next = __s570local2) {
          __s570local2._prev = __s570local1;
        } else {
          __s570local4 = __s570local1;
        }
        __s570local1 = __s570local5;
      }
      this._firstPT = __s570local3;
    }
    return true;
  };
  __s1local7.parse = function (__s597param0, __s597param1, __s597param2, __s597param3) {
    var __s597local0;
    var __s597local1;
    var __s597local2;
    var __s597local3;
    var __s597local4;
    var __s597local5;
    var __s597local6;
    var __s597local7;
    var __s597local8;
    var __s597local9;
    var __s597local10 = __s597param0.style;
    for (__s597local0 in __s597param1) {
      if (typeof (__s597local5 = __s597param1[__s597local0]) == "function") {
        __s597local5 = __s597local5(__s1local15, __s1local14);
      }
      if (__s597local1 = __s1local6[__s597local0]) {
        __s597param2 = __s597local1.parse(__s597param0, __s597local5, __s597local0, this, __s597param2, __s597param3, __s597param1);
      } else {
        if (__s597local0.substr(0, 2) === "--") {
          this._tween._propLookup[__s597local0] = this._addTween.call(this._tween, __s597param0.style, "setProperty", __s1local50(__s597param0).getPropertyValue(__s597local0) + "", __s597local5 + "", __s597local0, false, __s597local0);
          continue;
        }
        __s597local4 = __s1local51(__s597param0, __s597local0, __s1local2) + "";
        __s597local8 = typeof __s597local5 == "string";
        if (__s597local0 === "color" || __s597local0 === "fill" || __s597local0 === "stroke" || __s597local0.indexOf("Color") !== -1 || __s597local8 && __s1local24.test(__s597local5)) {
          if (!__s597local8) {
            __s597local5 = ((__s597local5 = __s1local65(__s597local5)).length > 3 ? "rgba(" : "rgb(") + __s597local5.join(",") + ")";
          }
          __s597param2 = __s1local73(__s597local10, __s597local0, __s597local4, __s597local5, true, "transparent", __s597param2, 0, __s597param3);
        } else if (__s597local8 && __s1local33.test(__s597local5)) {
          __s597param2 = __s1local73(__s597local10, __s597local0, __s597local4, __s597local5, true, null, __s597param2, 0, __s597param3);
        } else {
          __s597local6 = (__s597local2 = parseFloat(__s597local4)) || __s597local2 === 0 ? __s597local4.substr((__s597local2 + "").length) : "";
          if (__s597local4 === "" || __s597local4 === "auto") {
            if (__s597local0 === "width" || __s597local0 === "height") {
              __s597local2 = __s1local58(__s597param0, __s597local0, __s1local2);
              __s597local6 = "px";
            } else if (__s597local0 === "left" || __s597local0 === "top") {
              __s597local2 = __s1local53(__s597param0, __s597local0, __s1local2);
              __s597local6 = "px";
            } else {
              __s597local2 = __s597local0 !== "opacity" ? 0 : 1;
              __s597local6 = "";
            }
          }
          if (__s597local9 = __s597local8 && __s597local5.charAt(1) === "=") {
            __s597local3 = parseInt(__s597local5.charAt(0) + "1", 10);
            __s597local5 = __s597local5.substr(2);
            __s597local3 *= parseFloat(__s597local5);
            __s597local7 = __s597local5.replace(__s1local20, "");
          } else {
            __s597local3 = parseFloat(__s597local5);
            __s597local7 = __s597local8 ? __s597local5.replace(__s1local20, "") : "";
          }
          if (__s597local7 === "") {
            __s597local7 = __s597local0 in __s1local1 ? __s1local1[__s597local0] : __s597local6;
          }
          __s597local5 = __s597local3 || __s597local3 === 0 ? (__s597local9 ? __s597local3 + __s597local2 : __s597local3) + __s597local7 : __s597param1[__s597local0];
          if (__s597local6 !== __s597local7) {
            if (__s597local7 !== "" || __s597local0 === "lineHeight") {
              if ((__s597local3 || __s597local3 === 0) && __s597local2) {
                __s597local2 = __s1local52(__s597param0, __s597local0, __s597local2, __s597local6);
                if (__s597local7 === "%") {
                  __s597local2 /= __s1local52(__s597param0, __s597local0, 100, "%") / 100;
                  if (__s597param1.strictUnits !== true) {
                    __s597local4 = __s597local2 + "%";
                  }
                } else if (__s597local7 === "em" || __s597local7 === "rem" || __s597local7 === "vw" || __s597local7 === "vh") {
                  __s597local2 /= __s1local52(__s597param0, __s597local0, 1, __s597local7);
                } else if (__s597local7 !== "px") {
                  __s597local3 = __s1local52(__s597param0, __s597local0, __s597local3, __s597local7);
                  __s597local7 = "px";
                }
                if (__s597local9 && (__s597local3 || __s597local3 === 0)) {
                  __s597local5 = __s597local3 + __s597local2 + __s597local7;
                }
              }
            }
          }
          if (__s597local9) {
            __s597local3 += __s597local2;
          }
          if (!__s597local2 && __s597local2 !== 0 || !__s597local3 && __s597local3 !== 0) {
            if (__s597local10[__s597local0] !== undefined && (__s597local5 || __s597local5 + "" != "NaN" && __s597local5 != null)) {
              (__s597param2 = new __s1local71(__s597local10, __s597local0, __s597local3 || __s597local2 || 0, 0, __s597param2, -1, __s597local0, false, 0, __s597local4, __s597local5)).xs0 = __s597local5 !== "none" || __s597local0 !== "display" && __s597local0.indexOf("Style") === -1 ? __s597local5 : __s597local4;
            } else {
              __s1local46("invalid " + __s597local0 + " tween value: " + __s597param1[__s597local0]);
            }
          } else {
            (__s597param2 = new __s1local71(__s597local10, __s597local0, __s597local2, __s597local3 - __s597local2, __s597param2, 0, __s597local0, __s1local8 !== false && (__s597local7 === "px" || __s597local0 === "zIndex"), 0, __s597local4, __s597local5)).xs0 = __s597local7;
          }
        }
      }
      if (__s597param3 && __s597param2 && !__s597param2.plugin) {
        __s597param2.plugin = __s597param3;
      }
    }
    return __s597param2;
  };
  __s1local7.setRatio = function (__s630param0) {
    var __s630local0;
    var __s630local1;
    var __s630local2;
    var __s630local3 = this._firstPT;
    if (__s630param0 !== 1 || this._tween._time !== this._tween._duration && this._tween._time !== 0) {
      if (__s630param0 || this._tween._time !== this._tween._duration && this._tween._time !== 0 || this._tween._rawPrevTime === -0.000001) {
        while (__s630local3) {
          __s630local0 = __s630local3.c * __s630param0 + __s630local3.s;
          if (__s630local3.r) {
            __s630local0 = __s630local3.r(__s630local0);
          } else if (__s630local0 < 0.000001 && __s630local0 > -0.000001) {
            __s630local0 = 0;
          }
          if (__s630local3.type) {
            if (__s630local3.type === 1) {
              if ((__s630local2 = __s630local3.l) === 2) {
                __s630local3.t[__s630local3.p] = __s630local3.xs0 + __s630local0 + __s630local3.xs1 + __s630local3.xn1 + __s630local3.xs2;
              } else if (__s630local2 === 3) {
                __s630local3.t[__s630local3.p] = __s630local3.xs0 + __s630local0 + __s630local3.xs1 + __s630local3.xn1 + __s630local3.xs2 + __s630local3.xn2 + __s630local3.xs3;
              } else if (__s630local2 === 4) {
                __s630local3.t[__s630local3.p] = __s630local3.xs0 + __s630local0 + __s630local3.xs1 + __s630local3.xn1 + __s630local3.xs2 + __s630local3.xn2 + __s630local3.xs3 + __s630local3.xn3 + __s630local3.xs4;
              } else if (__s630local2 === 5) {
                __s630local3.t[__s630local3.p] = __s630local3.xs0 + __s630local0 + __s630local3.xs1 + __s630local3.xn1 + __s630local3.xs2 + __s630local3.xn2 + __s630local3.xs3 + __s630local3.xn3 + __s630local3.xs4 + __s630local3.xn4 + __s630local3.xs5;
              } else {
                __s630local1 = __s630local3.xs0 + __s630local0 + __s630local3.xs1;
                __s630local2 = 1;
                for (; __s630local2 < __s630local3.l; __s630local2++) {
                  __s630local1 += __s630local3["xn" + __s630local2] + __s630local3["xs" + (__s630local2 + 1)];
                }
                __s630local3.t[__s630local3.p] = __s630local1;
              }
            } else if (__s630local3.type === -1) {
              __s630local3.t[__s630local3.p] = __s630local3.xs0;
            } else if (__s630local3.setRatio) {
              __s630local3.setRatio(__s630param0);
            }
          } else {
            __s630local3.t[__s630local3.p] = __s630local0 + __s630local3.xs0;
          }
          __s630local3 = __s630local3._next;
        }
      } else {
        while (__s630local3) {
          if (__s630local3.type !== 2) {
            __s630local3.t[__s630local3.p] = __s630local3.b;
          } else {
            __s630local3.setRatio(__s630param0);
          }
          __s630local3 = __s630local3._next;
        }
      }
    } else {
      while (__s630local3) {
        if (__s630local3.type !== 2) {
          if (__s630local3.r && __s630local3.type !== -1) {
            __s630local0 = __s630local3.r(__s630local3.s + __s630local3.c);
            if (__s630local3.type) {
              if (__s630local3.type === 1) {
                __s630local2 = __s630local3.l;
                __s630local1 = __s630local3.xs0 + __s630local0 + __s630local3.xs1;
                __s630local2 = 1;
                for (; __s630local2 < __s630local3.l; __s630local2++) {
                  __s630local1 += __s630local3["xn" + __s630local2] + __s630local3["xs" + (__s630local2 + 1)];
                }
                __s630local3.t[__s630local3.p] = __s630local1;
              }
            } else {
              __s630local3.t[__s630local3.p] = __s630local0 + __s630local3.xs0;
            }
          } else {
            __s630local3.t[__s630local3.p] = __s630local3.e;
          }
        } else {
          __s630local3.setRatio(__s630param0);
        }
        __s630local3 = __s630local3._next;
      }
    }
  };
  __s1local7._enableTransforms = function (__s667param0) {
    this._transform = this._transform || __s1local98(this._target, __s1local2, true);
    this._transformType = this._transform.svg && __s1local78 || !__s667param0 && this._transformType !== 3 ? 2 : 3;
  };
  function __s1local105(__s669param0) {
    this.t[this.p] = this.e;
    this.data._linkCSSP(this, this._next, null, true);
  }
  __s1local7._addLazySet = function (__s671param0, __s671param1, __s671param2) {
    var __s671local0 = this._firstPT = new __s1local71(__s671param0, __s671param1, 0, 0, this._firstPT, 2);
    __s671local0.e = __s671param2;
    __s671local0.setRatio = __s1local105;
    __s671local0.data = this;
  };
  __s1local7._linkCSSP = function (__s673param0, __s673param1, __s673param2, __s673param3) {
    if (__s673param0) {
      if (__s673param1) {
        __s673param1._prev = __s673param0;
      }
      if (__s673param0._next) {
        __s673param0._next._prev = __s673param0._prev;
      }
      if (__s673param0._prev) {
        __s673param0._prev._next = __s673param0._next;
      } else if (this._firstPT === __s673param0) {
        this._firstPT = __s673param0._next;
        __s673param3 = true;
      }
      if (__s673param2) {
        __s673param2._next = __s673param0;
      } else if (!__s673param3 && this._firstPT === null) {
        this._firstPT = __s673param0;
      }
      __s673param0._next = __s673param1;
      __s673param0._prev = __s673param2;
    }
    return __s673param0;
  };
  __s1local7._mod = function (__s682param0) {
    for (var __s682local0 = this._firstPT; __s682local0;) {
      if (typeof __s682param0[__s682local0.p] == "function") {
        __s682local0.r = __s682param0[__s682local0.p];
      }
      __s682local0 = __s682local0._next;
    }
  };
  __s1local7._kill = function (__s687param0) {
    var __s687local0;
    var __s687local1;
    var __s687local2;
    var __s687local3 = __s687param0;
    if (__s687param0.autoAlpha || __s687param0.alpha) {
      __s687local3 = {};
      for (__s687local1 in __s687param0) {
        __s687local3[__s687local1] = __s687param0[__s687local1];
      }
      __s687local3.opacity = 1;
      if (__s687local3.autoAlpha) {
        __s687local3.visibility = 1;
      }
    }
    if (__s687param0.className && (__s687local0 = this._classNamePT)) {
      if ((__s687local2 = __s687local0.xfirst) && __s687local2._prev) {
        this._linkCSSP(__s687local2._prev, __s687local0._next, __s687local2._prev._prev);
      } else if (__s687local2 === this._firstPT) {
        this._firstPT = __s687local0._next;
      }
      if (__s687local0._next) {
        this._linkCSSP(__s687local0._next, __s687local0._next._next, __s687local2._prev);
      }
      this._classNamePT = null;
    }
    __s687local0 = this._firstPT;
    while (__s687local0) {
      if (__s687local0.plugin && __s687local0.plugin !== __s687local1 && __s687local0.plugin._kill) {
        __s687local0.plugin._kill(__s687param0);
        __s687local1 = __s687local0.plugin;
      }
      __s687local0 = __s687local0._next;
    }
    return __s0local0.TweenPlugin.prototype._kill.call(this, __s687local3);
  };
  function __s1local106(__s700param0, __s700param1, __s700param2) {
    var __s700local0;
    var __s700local1;
    var __s700local2;
    var __s700local3;
    if (__s700param0.slice) {
      for (__s700local1 = __s700param0.length; --__s700local1 > -1;) {
        __s1local106(__s700param0[__s700local1], __s700param1, __s700param2);
      }
    } else {
      for (__s700local1 = (__s700local0 = __s700param0.childNodes).length; --__s700local1 > -1;) {
        __s700local3 = (__s700local2 = __s700local0[__s700local1]).type;
        if (__s700local2.style) {
          __s700param1.push(__s1local54(__s700local2));
          if (__s700param2) {
            __s700param2.push(__s700local2);
          }
        }
        if ((__s700local3 === 1 || __s700local3 === 9 || __s700local3 === 11) && !!__s700local2.childNodes.length) {
          __s1local106(__s700local2, __s700param1, __s700param2);
        }
      }
    }
  }
  __s1local4.cascadeTo = function (__s711param0, __s711param1, __s711param2) {
    var __s711local0;
    var __s711local1;
    var __s711local2;
    var __s711local3;
    var __s711local4 = __s0local0.default.to(__s711param0, __s711param1, __s711param2);
    var __s711local5 = [__s711local4];
    var __s711local6 = [];
    var __s711local7 = [];
    var __s711local8 = [];
    var __s711local9 = __s0local0.default._internals.reservedProps;
    __s711param0 = __s711local4._targets || __s711local4.target;
    __s1local106(__s711param0, __s711local6, __s711local8);
    __s711local4.render(__s711param1, true, true);
    __s1local106(__s711param0, __s711local7);
    __s711local4.render(0, true, true);
    __s711local4._enabled(true);
    __s711local0 = __s711local8.length;
    while (--__s711local0 > -1) {
      if ((__s711local1 = __s1local55(__s711local8[__s711local0], __s711local6[__s711local0], __s711local7[__s711local0])).firstMPT) {
        __s711local1 = __s711local1.difs;
        for (__s711local2 in __s711param2) {
          if (__s711local9[__s711local2]) {
            __s711local1[__s711local2] = __s711param2[__s711local2];
          }
        }
        __s711local3 = {};
        for (__s711local2 in __s711local1) {
          __s711local3[__s711local2] = __s711local6[__s711local0][__s711local2];
        }
        __s711local5.push(__s0local0.default.fromTo(__s711local8[__s711local0], __s711param1, __s711local3, __s711local1));
      }
    }
    return __s711local5;
  };
  __s0local0.TweenPlugin.activate([__s1local4]);
  return __s1local4;
}, true);
export var CSSPlugin = __s0local0.globals.CSSPlugin;
