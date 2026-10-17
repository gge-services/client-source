// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 73
// Export: DictionaryUtil; preserved source: modules/internal/exact_c95e4ededfdf159c.js
// Original canonical SHA-256: 21da2a0bdf4b91877a05eeb3a1efc093e18386e148dc56948647c497ada2bbf9
var __s0local0 = function () {
  function DictionaryUtil() {}
  DictionaryUtil.getKeys = function (__s5param0) {
    var __s5local0 = [];
    if (__s5param0 === null) {
      return [];
    } else {
      __s5param0.forEach(function (__s9param0, __s9param1, __s9param2) {
        __s5local0.push(__s9param1);
      });
      return __s5local0;
    }
  };
  DictionaryUtil.getValues = function (__s11param0) {
    var __s11local0 = [];
    if (__s11param0 === null) {
      return [];
    } else {
      __s11param0.forEach(function (__s15param0, __s15param1, __s15param2) {
        __s11local0.push(__s15param0);
      });
      return __s11local0;
    }
  };
  DictionaryUtil.containsKey = function (__s17param0, __s17param1) {
    return __s17param0.has(__s17param1);
  };
  DictionaryUtil.containsValue = function (__s19param0, __s19param1) {
    var __s19local0 = false;
    return __s19param0 !== null && (__s19param0.forEach(function (__s21param0, __s21param1, __s21param2) {
      if (__s21param0 === __s19param1) {
        __s19local0 = true;
      }
    }), __s19local0);
  };
  DictionaryUtil.clone = function (__s24param0) {
    return new Map(__s24param0);
  };
  DictionaryUtil.getKeyForValue = function (__s26param0, __s26param1) {
    var __s26local0 = null;
    __s26param0.forEach(function (__s28param0, __s28param1, __s28param2) {
      if (__s28param0 === __s26param1) {
        __s26local0 = __s28param1;
      }
    });
    return __s26local0;
  };
  DictionaryUtil.concatDictionaries = function () {
    var __s31local0 = [];
    for (var __s31local1 = 0; __s31local1 < arguments.length; __s31local1++) {
      __s31local0[__s31local1] = arguments[__s31local1];
    }
    var __s31local2 = new Map();
    for (var __s31local3 = 0; __s31local3 < __s31local0.length; __s31local3++) {
      __s31local0[__s31local3].forEach(function (__s37param0, __s37param1, __s37param2) {
        __s31local2.set(__s37param1, __s37param0);
      });
    }
    return __s31local2;
  };
  DictionaryUtil.getDictionaryLength = function (__s39param0) {
    return __s39param0.size;
  };
  DictionaryUtil.isEmpty = function (__s41param0) {
    return __s41param0.size === 0;
  };
  return DictionaryUtil;
}();
exports.DictionaryUtil = __s0local0;
