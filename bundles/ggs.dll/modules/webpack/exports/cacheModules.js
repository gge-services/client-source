Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_opaque_3ceb4ad97d4557409871cd49 = require("gge-module:opaque_3ceb4ad97d4557409871cd49");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("getDefinitionByName");
function getDefinitionByName(__s1param0) {
  var __s1local0 = window.cachedModlues[__s1param0];
  if (__s1local0 !== undefined) {
    return __s1local0;
  }
  var __s1local1 = getDefinitionByNameFromLibrary(__s1param0);
  if (__s1local1 !== undefined) {
    return __s1local1;
  }
  __s0local0.warn("The definition \"" + __s1param0 + "\" could not be found");
}
exports.getDefinitionByName = getDefinitionByName;
window.getDefinitionByName = getDefinitionByName;
var __s0local1 = /_walkmap/i;
function __s0local2(__s5param0) {
  var __s5local0 = window.Library;
  if (__s5local0 !== undefined) {
    for (var __s5local1 in __s5local0) {
      if (__s5local0.hasOwnProperty(__s5local1)) {
        var __s5local2 = __s5local0[__s5local1];
        if (__s5param0 in __s5local2) {
          return __s5local2[__s5param0];
        }
      }
    }
  }
  if (!__s0local1.test(__s5param0)) {
    __s0local0.error("The definition \"" + __s5param0 + "\" could not be found in Assets Library");
  }
}
var __s0local3 = __dep_opaque_3ceb4ad97d4557409871cd49(__s0local2);
function getDefinitionByNameFromLibrary(__s13param0) {
  var __s13local0 = __s0local3(__s13param0);
  if (!__s13local0) {
    if (__s13local0 = __s0local2(__s13param0)) {
      __s0local3.cache.set(__s13param0, __s13local0);
    }
  }
  return __s13local0;
}
exports.getDefinitionByNameFromLibrary = getDefinitionByNameFromLibrary;
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
