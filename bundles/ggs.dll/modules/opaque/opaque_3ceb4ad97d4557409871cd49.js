var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __s0local0 = "Expected a function";
var __s0local1 = "__lodash_hash_undefined__";
var __s0local2 = "[object Function]";
var __s0local3 = "[object GeneratorFunction]";
var __s0local4 = /^\[object .+?Constructor\]$/;
var __s0local5 = typeof __dep_exact_d8857732a937369e == "object" && __dep_exact_d8857732a937369e && __dep_exact_d8857732a937369e.Object === Object && __dep_exact_d8857732a937369e;
var __s0local6 = typeof self == "object" && self && self.Object === Object && self;
var __s0local7 = __s0local5 || __s0local6 || Function("return this")();
var __s0local8;
var __s0local9 = Array.prototype;
var __s0local10 = Function.prototype;
var __s0local11 = Object.prototype;
var __s0local12 = __s0local7["__core-js_shared__"];
var __s0local13 = (__s0local8 = /[^.]+$/.exec(__s0local12 && __s0local12.keys && __s0local12.keys.IE_PROTO || "")) ? "Symbol(src)_1." + __s0local8 : "";
var __s0local14 = __s0local10.toString;
var __s0local15 = __s0local11.hasOwnProperty;
var __s0local16 = __s0local11.toString;
var __s0local17 = RegExp("^" + __s0local14.call(__s0local15).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var __s0local18 = __s0local9.splice;
var __s0local19 = getNative(__s0local7, "Map");
var __s0local20 = getNative(Object, "create");
function Hash(__s1param0) {
  var __s1local0 = -1;
  var __s1local1 = __s1param0 ? __s1param0.length : 0;
  for (this.clear(); ++__s1local0 < __s1local1;) {
    var __s1local2 = __s1param0[__s1local0];
    this.set(__s1local2[0], __s1local2[1]);
  }
}
function ListCache(__s5param0) {
  var __s5local0 = -1;
  var __s5local1 = __s5param0 ? __s5param0.length : 0;
  for (this.clear(); ++__s5local0 < __s5local1;) {
    var __s5local2 = __s5param0[__s5local0];
    this.set(__s5local2[0], __s5local2[1]);
  }
}
function MapCache(__s9param0) {
  var __s9local0 = -1;
  var __s9local1 = __s9param0 ? __s9param0.length : 0;
  for (this.clear(); ++__s9local0 < __s9local1;) {
    var __s9local2 = __s9param0[__s9local0];
    this.set(__s9local2[0], __s9local2[1]);
  }
}
function assocIndexOf(__s13param0, __s13param1) {
  var __s13local0;
  var __s13local1;
  for (var __s13local2 = __s13param0.length; __s13local2--;) {
    if ((__s13local0 = __s13param0[__s13local2][0]) === (__s13local1 = __s13param1) || __s13local0 != __s13local0 && __s13local1 != __s13local1) {
      return __s13local2;
    }
  }
  return -1;
}
function baseIsNative(__s18param0) {
  return !!isObject(__s18param0) && !function isMasked(__s20param0) {
    return !!__s0local13 && __s0local13 in __s20param0;
  }(__s18param0) && (function isFunction(__s22param0) {
    var __s22local0 = isObject(__s22param0) ? __s0local16.call(__s22param0) : "";
    return __s22local0 == __s0local2 || __s22local0 == __s0local3;
  }(__s18param0) || function isHostObject(__s24param0) {
    var __s24local0 = false;
    if (__s24param0 != null && typeof __s24param0.toString != "function") {
      try {
        __s24local0 = !!(__s24param0 + "");
      } catch (__s28local0) {}
    }
    return __s24local0;
  }(__s18param0) ? __s0local17 : __s0local4).test(function toSource(__s30param0) {
    if (__s30param0 != null) {
      try {
        return __s0local14.call(__s30param0);
      } catch (__s34local0) {}
      try {
        return __s30param0 + "";
      } catch (__s37local0) {}
    }
    return "";
  }(__s18param0));
}
function getMapData(__s39param0, __s39param1) {
  var __s39local0 = __s39param0.__data__;
  if (function isKeyable(__s41param0) {
    var __s41local0 = typeof __s41param0;
    if (__s41local0 == "string" || __s41local0 == "number" || __s41local0 == "symbol" || __s41local0 == "boolean") {
      return __s41param0 !== "__proto__";
    } else {
      return __s41param0 === null;
    }
  }(__s39param1)) {
    return __s39local0[typeof __s39param1 == "string" ? "string" : "hash"];
  } else {
    return __s39local0.map;
  }
}
function getNative(__s47param0, __s47param1) {
  var __s47local0 = function getValue(__s49param0, __s49param1) {
    if (__s49param0 == null) {
      return undefined;
    } else {
      return __s49param0[__s49param1];
    }
  }(__s47param0, __s47param1);
  if (baseIsNative(__s47local0)) {
    return __s47local0;
  } else {
    return undefined;
  }
}
function memoize(__s55param0, __s55param1) {
  if (typeof __s55param0 != "function" || __s55param1 && typeof __s55param1 != "function") {
    throw new TypeError(__s0local0);
  }
  function __s55local0() {
    var __s58local0 = arguments;
    var __s58local1 = __s55param1 ? __s55param1.apply(this, __s58local0) : __s58local0[0];
    var __s58local2 = __s55local0.cache;
    if (__s58local2.has(__s58local1)) {
      return __s58local2.get(__s58local1);
    }
    var __s58local3 = __s55param0.apply(this, __s58local0);
    __s55local0.cache = __s58local2.set(__s58local1, __s58local3);
    return __s58local3;
  }
  __s55local0.cache = new (memoize.Cache || MapCache)();
  return __s55local0;
}
function isObject(__s61param0) {
  var __s61local0 = typeof __s61param0;
  return !!__s61param0 && (__s61local0 == "object" || __s61local0 == "function");
}
Hash.prototype.clear = function hashClear() {
  this.__data__ = __s0local20 ? __s0local20(null) : {};
};
Hash.prototype.delete = function hashDelete(__s65param0) {
  return this.has(__s65param0) && delete this.__data__[__s65param0];
};
Hash.prototype.get = function hashGet(__s67param0) {
  var __s67local0 = this.__data__;
  if (__s0local20) {
    var __s67local1 = __s67local0[__s67param0];
    if (__s67local1 === __s0local1) {
      return undefined;
    } else {
      return __s67local1;
    }
  }
  if (__s0local15.call(__s67local0, __s67param0)) {
    return __s67local0[__s67param0];
  } else {
    return undefined;
  }
};
Hash.prototype.has = function hashHas(__s74param0) {
  var __s74local0 = this.__data__;
  if (__s0local20) {
    return __s74local0[__s74param0] !== undefined;
  } else {
    return __s0local15.call(__s74local0, __s74param0);
  }
};
Hash.prototype.set = function hashSet(__s78param0, __s78param1) {
  this.__data__[__s78param0] = __s0local20 && __s78param1 === undefined ? __s0local1 : __s78param1;
  return this;
};
ListCache.prototype.clear = function listCacheClear() {
  this.__data__ = [];
};
ListCache.prototype.delete = function listCacheDelete(__s82param0) {
  var __s82local0 = this.__data__;
  var __s82local1 = assocIndexOf(__s82local0, __s82param0);
  return !(__s82local1 < 0) && !(__s82local1 == __s82local0.length - 1 ? __s82local0.pop() : __s0local18.call(__s82local0, __s82local1, 1), 0);
};
ListCache.prototype.get = function listCacheGet(__s84param0) {
  var __s84local0 = this.__data__;
  var __s84local1 = assocIndexOf(__s84local0, __s84param0);
  if (__s84local1 < 0) {
    return undefined;
  } else {
    return __s84local0[__s84local1][1];
  }
};
ListCache.prototype.has = function listCacheHas(__s88param0) {
  return assocIndexOf(this.__data__, __s88param0) > -1;
};
ListCache.prototype.set = function listCacheSet(__s90param0, __s90param1) {
  var __s90local0 = this.__data__;
  var __s90local1 = assocIndexOf(__s90local0, __s90param0);
  if (__s90local1 < 0) {
    __s90local0.push([__s90param0, __s90param1]);
  } else {
    __s90local0[__s90local1][1] = __s90param1;
  }
  return this;
};
MapCache.prototype.clear = function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (__s0local19 || ListCache)(),
    string: new Hash()
  };
};
MapCache.prototype.delete = function mapCacheDelete(__s96param0) {
  return getMapData(this, __s96param0).delete(__s96param0);
};
MapCache.prototype.get = function mapCacheGet(__s98param0) {
  return getMapData(this, __s98param0).get(__s98param0);
};
MapCache.prototype.has = function mapCacheHas(__s100param0) {
  return getMapData(this, __s100param0).has(__s100param0);
};
MapCache.prototype.set = function mapCacheSet(__s102param0, __s102param1) {
  getMapData(this, __s102param0).set(__s102param0, __s102param1);
  return this;
};
memoize.Cache = MapCache;
module.exports = memoize;
