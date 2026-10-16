Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function EffectValueMap() {
    this._map = new Map();
  }
  EffectValueMap.prototype.parseFromValueString = function (__s5param0) {
    var __s5local0 = [];
    if (__s5param0.indexOf("#") > -1) {
      for (var __s5local1 = __s5param0.split("#"), __s5local2 = 0; __s5local2 < __s5local1.length; __s5local2++) {
        var __s5local3 = __s5local1[__s5local2].split("+");
        __s5local0.push(parseInt(__s5local3[0]));
        __s5local0.push(__s5local3.length > 1 ? parseInt(__s5local3[1]) : 0);
      }
    } else {
      var __s5local4;
      __s5local4 = __s5param0.indexOf(",") > -1 ? __s5param0.split(",") : __s5param0.indexOf("+") > -1 ? __s5param0.split("+") : [__s5param0];
      for (var __s5local5 = 0; __s5local5 < __s5local4.length; ++__s5local5) {
        __s5local0.push(parseInt(__s5local4[__s5local5]));
      }
    }
    return this.parseFromValueArray(__s5local0);
  };
  EffectValueMap.prototype.parseFromValueArray = function (__s13param0) {
    this._map = new Map();
    for (var __s13local0 = 0; __s13local0 < __s13param0.length; __s13local0 += 2) {
      this._map.set(__s13param0[__s13local0], __s13local0 + 1 < __s13param0.length ? __s13param0[__s13local0 + 1] : 0);
    }
    return this;
  };
  EffectValueMap.prototype.add = function (__s17param0, __s17param1) {
    var __s17local0 = __s17param0;
    if (!__s17local0 || !__s17local0._map) {
      return this;
    }
    for (var __s17local1 = 0, __s17local2 = Array.from(__s17local0._map.keys()); __s17local1 < __s17local2.length; __s17local1++) {
      var __s17local3 = __s17local2[__s17local1];
      if (this._map.has(__s17local3)) {
        this._map.set(__s17local3, this._map.get(__s17local3) + __s17local0._map.get(__s17local3));
      } else {
        this._map.set(__s17local3, __s17local0._map.get(__s17local3));
      }
    }
    return this;
  };
  Object.defineProperty(EffectValueMap.prototype, "rawValues", {
    get: function () {
      var __s24local0 = [];
      if (this._map != null) {
        for (var __s24local1 = 0, __s24local2 = Array.from(this._map.keys()); __s24local1 < __s24local2.length; __s24local1++) {
          var __s24local3 = __s24local2[__s24local1];
          if (__s24local3 !== undefined) {
            __s24local0.push(__s24local3);
            __s24local0.push(this._map.get(__s24local3));
          }
        }
      }
      return __s24local0;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueMap.prototype.clone = function () {
    var __s30local0 = new EffectValueMap();
    __s30local0.parseFromValueArray(this.rawValues);
    return __s30local0;
  };
  Object.defineProperty(EffectValueMap.prototype, "strength", {
    get: function () {
      var __s32local0 = 0;
      if (this._map != null) {
        for (var __s32local1 = 0, __s32local2 = Array.from(this._map.values()); __s32local1 < __s32local2.length; __s32local1++) {
          var __s32local3 = __s32local2[__s32local1];
          if (__s32local3 !== undefined) {
            __s32local0 = __s32local3;
            break;
          }
        }
      }
      return __s32local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueMap.prototype, "textReplacements", {
    get: function () {
      return [this.strength];
    },
    enumerable: true,
    configurable: true
  });
  EffectValueMap.prototype.hasWodId = function (__s40param0) {
    return this._map.has(__s40param0);
  };
  EffectValueMap.prototype.getValueforId = function (__s42param0) {
    if (this._map.get(__s42param0)) {
      return this._map.get(__s42param0);
    } else {
      return 0;
    }
  };
  EffectValueMap.prototype.getWodIds = function () {
    return __dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeys(this._map);
  };
  EffectValueMap.prototype.getContextTextReplacements = function (__s48param0) {
    return this.textReplacements;
  };
  return EffectValueMap;
}();
exports.EffectValueMap = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
