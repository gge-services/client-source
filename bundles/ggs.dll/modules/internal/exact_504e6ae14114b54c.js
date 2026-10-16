export var DirectionalRotationPlugin = require("gge-module:opaque_e6baa51a685d4351b8bdaca8")._gsScope._gsDefine.plugin({
  propName: "directionalRotation",
  version: "0.3.1",
  API: 2,
  init: function (__s1param0, __s1param1, __s1param2, __s1param3) {
    if (typeof __s1param1 != "object") {
      __s1param1 = {
        rotation: __s1param1
      };
    }
    this.finals = {};
    var __s1local0;
    var __s1local1;
    var __s1local2;
    var __s1local3;
    var __s1local4;
    var __s1local5;
    var __s1local6 = __s1param1.useRadians === true ? Math.PI * 2 : 360;
    for (__s1local0 in __s1param1) {
      if (__s1local0 !== "useRadians") {
        if (typeof (__s1local3 = __s1param1[__s1local0]) == "function") {
          __s1local3 = __s1local3(__s1param3, __s1param0);
        }
        __s1local1 = (__s1local5 = (__s1local3 + "").split("_"))[0];
        __s1local2 = parseFloat(typeof __s1param0[__s1local0] != "function" ? __s1param0[__s1local0] : __s1param0[__s1local0.indexOf("set") || typeof __s1param0["get" + __s1local0.substr(3)] != "function" ? __s1local0 : "get" + __s1local0.substr(3)]());
        __s1local4 = (__s1local3 = this.finals[__s1local0] = typeof __s1local1 == "string" && __s1local1.charAt(1) === "=" ? __s1local2 + parseInt(__s1local1.charAt(0) + "1", 10) * Number(__s1local1.substr(2)) : Number(__s1local1) || 0) - __s1local2;
        if (__s1local5.length) {
          if ((__s1local1 = __s1local5.join("_")).indexOf("short") !== -1 && (__s1local4 %= __s1local6) !== __s1local4 % (__s1local6 / 2)) {
            __s1local4 = __s1local4 < 0 ? __s1local4 + __s1local6 : __s1local4 - __s1local6;
          }
          if (__s1local1.indexOf("_cw") !== -1 && __s1local4 < 0) {
            __s1local4 = (__s1local4 + __s1local6 * 9999999999) % __s1local6 - (__s1local4 / __s1local6 | 0) * __s1local6;
          } else if (__s1local1.indexOf("ccw") !== -1 && __s1local4 > 0) {
            __s1local4 = (__s1local4 - __s1local6 * 9999999999) % __s1local6 - (__s1local4 / __s1local6 | 0) * __s1local6;
          }
        }
        if (__s1local4 > 0.000001 || __s1local4 < -0.000001) {
          this._addTween(__s1param0, __s1local0, __s1local2, __s1local2 + __s1local4, __s1local0);
          this._overwriteProps.push(__s1local0);
        }
      }
    }
    return true;
  },
  set: function (__s13param0) {
    var __s13local0;
    if (__s13param0 !== 1) {
      this._super.setRatio.call(this, __s13param0);
    } else {
      for (__s13local0 = this._firstPT; __s13local0;) {
        if (__s13local0.f) {
          __s13local0.t[__s13local0.p](this.finals[__s13local0.p]);
        } else {
          __s13local0.t[__s13local0.p] = this.finals[__s13local0.p];
        }
        __s13local0 = __s13local0._next;
      }
    }
  }
});
/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
DirectionalRotationPlugin._autoCSS = true;
