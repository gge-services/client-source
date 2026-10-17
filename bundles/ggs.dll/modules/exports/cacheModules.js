// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 220
// Export: cacheModules; preserved source: modules/webpack/exports/cacheModules.js
// Original canonical SHA-256: f2b74dc1694699d62b13653ece332661403a11b305363495b295ad6db7fc3ca3
exports.cacheModules = function cacheModules(__s17param0) {
  function isValidModuleName(__s19param0) {
    if (/^\d+$/.test(__s19param0)) {
      return false;
    }
    var __s19local0 = __s19param0.charAt(0);
    return (__s19local0 !== __s19local0.toLowerCase() || __s19local0 === __s19local0.toUpperCase()) && __s19local0 !== "_";
  }
  var __s17local0 = window;
  var __s17local1 = __s17local0.cachedModlues;
  if (__s17param0.precachingDone === undefined) {
    __s17param0.precachingDone = true;
    if (!__s17local1) {
      __s17local0.cachedModlues = {};
      __s17local1 = __s17local0.cachedModlues;
    }
    var __s17local2 = {};
    var __s17local3 = __s17param0.c;
    for (var __s17local4 in __s17local3) {
      var __s17local5 = __s17local3[__s17local4];
      var __s17local6 = undefined;
      if (__s17local5 && (__s17local6 = __s17local5.exports)) {
        for (var __s17local7 in __s17local6) {
          if (__s17local7 === "a") {
            var __s17local8;
            if (typeof (__s17local8 = __s17local6[__s17local7]) != "function") {
              continue;
            }
            var __s17local9 = __s17local8.name;
            if (__s17local1.hasOwnProperty(__s17local9)) {
              if (!__s17local2.hasOwnProperty(__s17local9)) {
                __s17local2[__s17local9] = 0;
              }
              __s17local2[__s17local9]++;
            }
            __s17local1[__s17local9] = __s17local8;
          } else {
            if (!isValidModuleName(__s17local7) || typeof __s17local6[__s17local7] != "function") {
              continue;
            }
            if (__s17local1.hasOwnProperty(__s17local7)) {
              if (!__s17local2.hasOwnProperty(__s17local7)) {
                __s17local2[__s17local7] = 0;
              }
              __s17local2[__s17local7]++;
            }
            __s17local1[__s17local7] = __s17local6[__s17local7];
          }
        }
      }
    }
    __s0local0.debug("Cached " + Object.keys(__s17local1).length + " modules. Found " + Object.keys(__s17local2).length + " duplicates:");
    __s0local0.debug(__s17local2);
    createjs.precacheModules(require);
  }
  return __s17local1;
};
