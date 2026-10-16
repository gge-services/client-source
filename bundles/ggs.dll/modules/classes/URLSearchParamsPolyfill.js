var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
(function (__s1param0) {
  'use strict';

  var __s1local0 = __s1param0.URLSearchParams ? __s1param0.URLSearchParams : null;
  var __s1local1 = __s1local0 && new __s1local0({
    a: 1
  }).toString() === "a=1";
  var __s1local2 = __s1local0 && new __s1local0("s=%2B").get("s") === "+";
  var __s1local3 = "__URLSearchParams__";
  var __s1local4 = URLSearchParamsPolyfill.prototype;
  var __s1local5 = !!__s1param0.Symbol && !!__s1param0.Symbol.iterator;
  if (!__s1local0 || !__s1local1 || !__s1local2) {
    __s1local4.append = function (__s4param0, __s4param1) {
      appendTo(this[__s1local3], __s4param0, __s4param1);
    };
    __s1local4.delete = function (__s6param0) {
      delete this[__s1local3][__s6param0];
    };
    __s1local4.get = function (__s8param0) {
      var __s8local0 = this[__s1local3];
      if (__s8param0 in __s8local0) {
        return __s8local0[__s8param0][0];
      } else {
        return null;
      }
    };
    __s1local4.getAll = function (__s12param0) {
      var __s12local0 = this[__s1local3];
      if (__s12param0 in __s12local0) {
        return __s12local0[__s12param0].slice(0);
      } else {
        return [];
      }
    };
    __s1local4.has = function (__s16param0) {
      return __s16param0 in this[__s1local3];
    };
    __s1local4.set = function set(__s18param0, __s18param1) {
      this[__s1local3][__s18param0] = ["" + __s18param1];
    };
    __s1local4.toString = function () {
      var __s20local0;
      var __s20local1;
      var __s20local2;
      var __s20local3;
      var __s20local4 = this[__s1local3];
      var __s20local5 = [];
      for (__s20local1 in __s20local4) {
        __s20local2 = encode(__s20local1);
        __s20local0 = 0;
        __s20local3 = __s20local4[__s20local1];
        for (; __s20local0 < __s20local3.length; __s20local0++) {
          __s20local5.push(__s20local2 + "=" + encode(__s20local3[__s20local0]));
        }
      }
      return __s20local5.join("&");
    };
    var __s1local6 = !!__s1local2 && __s1local0 && !__s1local1 && __s1param0.Proxy;
    __s1param0.URLSearchParams = __s1local6 ? new Proxy(__s1local0, {
      construct: function (__s26param0, __s26param1) {
        return new __s26param0(new URLSearchParamsPolyfill(__s26param1[0]).toString());
      }
    }) : URLSearchParamsPolyfill;
    var __s1local7 = __s1param0.URLSearchParams.prototype;
    __s1local7.polyfill = true;
    __s1local7.forEach = __s1local7.forEach || function (__s28param0, __s28param1) {
      var __s28local0 = parseToDict(this.toString());
      Object.getOwnPropertyNames(__s28local0).forEach(function (__s30param0) {
        __s28local0[__s30param0].forEach(function (__s32param0) {
          __s28param0.call(__s28param1, __s32param0, __s30param0, this);
        }, this);
      }, this);
    };
    __s1local7.sort = __s1local7.sort || function () {
      var __s34local0;
      var __s34local1;
      var __s34local2;
      var __s34local3 = parseToDict(this.toString());
      var __s34local4 = [];
      for (__s34local0 in __s34local3) {
        __s34local4.push(__s34local0);
      }
      __s34local4.sort();
      __s34local1 = 0;
      for (; __s34local1 < __s34local4.length; __s34local1++) {
        this.delete(__s34local4[__s34local1]);
      }
      for (__s34local1 = 0; __s34local1 < __s34local4.length; __s34local1++) {
        var __s34local5 = __s34local4[__s34local1];
        var __s34local6 = __s34local3[__s34local5];
        for (__s34local2 = 0; __s34local2 < __s34local6.length; __s34local2++) {
          this.append(__s34local5, __s34local6[__s34local2]);
        }
      }
    };
    __s1local7.keys = __s1local7.keys || function () {
      var __s44local0 = [];
      this.forEach(function (__s46param0, __s46param1) {
        __s44local0.push(__s46param1);
      });
      return makeIterator(__s44local0);
    };
    __s1local7.values = __s1local7.values || function () {
      var __s48local0 = [];
      this.forEach(function (__s50param0) {
        __s48local0.push(__s50param0);
      });
      return makeIterator(__s48local0);
    };
    __s1local7.entries = __s1local7.entries || function () {
      var __s52local0 = [];
      this.forEach(function (__s54param0, __s54param1) {
        __s52local0.push([__s54param1, __s54param0]);
      });
      return makeIterator(__s52local0);
    };
    if (__s1local5) {
      __s1local7[__s1param0.Symbol.iterator] = __s1local7[__s1param0.Symbol.iterator] || __s1local7.entries;
    }
  }
  function URLSearchParamsPolyfill(__s57param0) {
    if ((__s57param0 = __s57param0 || "") instanceof URLSearchParams || __s57param0 instanceof URLSearchParamsPolyfill) {
      __s57param0 = __s57param0.toString();
    }
    this[__s1local3] = parseToDict(__s57param0);
  }
  function encode(__s60param0) {
    var __s60local0 = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(__s60param0).replace(/[!'\(\)~]|%20|%00/g, function (__s62param0) {
      return __s60local0[__s62param0];
    });
  }
  function decode(__s64param0) {
    return decodeURIComponent(__s64param0.replace(/\+/g, " "));
  }
  function makeIterator(__s66param0) {
    var __s66local0 = {
      next: function () {
        var __s68local0 = __s66param0.shift();
        return {
          done: __s68local0 === undefined,
          value: __s68local0
        };
      }
    };
    if (__s1local5) {
      __s66local0[__s1param0.Symbol.iterator] = function () {
        return __s66local0;
      };
    }
    return __s66local0;
  }
  function parseToDict(__s73param0) {
    var __s73local0 = {};
    if (typeof __s73param0 == "object") {
      for (var __s73local1 in __s73param0) {
        if (__s73param0.hasOwnProperty(__s73local1)) {
          appendTo(__s73local0, __s73local1, __s73param0[__s73local1]);
        }
      }
    } else {
      if (__s73param0.indexOf("?") === 0) {
        __s73param0 = __s73param0.slice(1);
      }
      for (var __s73local2 = __s73param0.split("&"), __s73local3 = 0; __s73local3 < __s73local2.length; __s73local3++) {
        var __s73local4 = __s73local2[__s73local3];
        var __s73local5 = __s73local4.indexOf("=");
        if (__s73local5 > -1) {
          appendTo(__s73local0, decode(__s73local4.slice(0, __s73local5)), decode(__s73local4.slice(__s73local5 + 1)));
        } else if (__s73local4) {
          appendTo(__s73local0, decode(__s73local4), "");
        }
      }
    }
    return __s73local0;
  }
  function appendTo(__s85param0, __s85param1, __s85param2) {
    var __s85local0 = typeof __s85param2 == "string" ? __s85param2 : __s85param2 !== null && __s85param2 !== undefined && typeof __s85param2.toString == "function" ? __s85param2.toString() : JSON.stringify(__s85param2);
    if (__s85param1 in __s85param0) {
      __s85param0[__s85param1].push(__s85local0);
    } else {
      __s85param0[__s85param1] = [__s85local0];
    }
  }
})(__dep_exact_d8857732a937369e !== undefined ? __dep_exact_d8857732a937369e : typeof window != "undefined" ? window : this);
