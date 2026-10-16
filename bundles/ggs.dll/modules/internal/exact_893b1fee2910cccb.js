export var RoundPropsPlugin = require("gge-module:opaque_e6baa51a685d4351b8bdaca8")._gsScope._gsDefine.plugin({
  propName: "roundProps",
  version: "1.7.0",
  priority: -1,
  API: 2,
  init: function (__s1param0, __s1param1, __s1param2) {
    this._tween = __s1param2;
    return true;
  }
});
export function _getRoundFunc(__s3param0) {
  var __s3local0 = __s3param0 < 1 ? Math.pow(10, (__s3param0 + "").length - 2) : 1;
  return function (__s5param0) {
    return (Math.round(__s5param0 / __s3param0) * __s3param0 * __s3local0 | 0) / __s3local0;
  };
}
export function _roundLinkedList(__s7param0, __s7param1) {
  while (__s7param0) {
    if (!__s7param0.f && !__s7param0.blob) {
      __s7param0.m = __s7param1 || Math.round;
    }
    __s7param0 = __s7param0._next;
  }
}
var __s0local0 = RoundPropsPlugin.prototype;
/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
export { __s0local0 as p };
__s0local0._onInitAllProps = function () {
  var __s12local0;
  var __s12local1;
  var __s12local2;
  var __s12local3;
  var __s12local4 = this._tween;
  var __s12local5 = __s12local4.vars.roundProps;
  var __s12local6 = {};
  var __s12local7 = __s12local4._propLookup.roundProps;
  if (typeof __s12local5 != "object" || __s12local5.push) {
    if (typeof __s12local5 == "string") {
      __s12local5 = __s12local5.split(",");
    }
    __s12local2 = __s12local5.length;
    while (--__s12local2 > -1) {
      __s12local6[__s12local5[__s12local2]] = Math.round;
    }
  } else {
    for (__s12local3 in __s12local5) {
      __s12local6[__s12local3] = _getRoundFunc(__s12local5[__s12local3]);
    }
  }
  for (__s12local3 in __s12local6) {
    for (__s12local0 = __s12local4._firstPT; __s12local0;) {
      __s12local1 = __s12local0._next;
      if (__s12local0.pg) {
        __s12local0.t._mod(__s12local6);
      } else if (__s12local0.n === __s12local3) {
        if (__s12local0.f === 2 && __s12local0.t) {
          _roundLinkedList(__s12local0.t._firstPT, __s12local6[__s12local3]);
        } else {
          this._add(__s12local0.t, __s12local3, __s12local0.s, __s12local0.c, __s12local6[__s12local3]);
          if (__s12local1) {
            __s12local1._prev = __s12local0._prev;
          }
          if (__s12local0._prev) {
            __s12local0._prev._next = __s12local1;
          } else if (__s12local4._firstPT === __s12local0) {
            __s12local4._firstPT = __s12local1;
          }
          __s12local0._next = __s12local0._prev = null;
          __s12local4._propLookup[__s12local3] = __s12local7;
        }
      }
      __s12local0 = __s12local1;
    }
  }
  return false;
};
__s0local0._add = function (__s32param0, __s32param1, __s32param2, __s32param3, __s32param4) {
  this._addTween(__s32param0, __s32param1, __s32param2, __s32param2 + __s32param3, __s32param1, __s32param4 || Math.round);
  this._overwriteProps.push(__s32param1);
};
