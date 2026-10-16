Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("PathFactory");
var __s0local1 = function () {
  function PathFactory() {}
  PathFactory.prototype.build = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param0.replace(PathFactory.REGEXP_STRIP_WHITES, "");
    var __s5local1 = __s5param0.match(PathFactory.REGEXP_DEFAULT_REPLACEMENT);
    if (__s5local1) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        var __s5local5 = __s5param1[__s5local4 = __s5local4.replace(PathFactory.REGEXP_STRIP_CURLY, "").replace(PathFactory.REGEXP_STRIP_WHITES, "")];
        if (!__s5local5) {
          __s0local0.warn("The environment setting '" + __s5local4 + "' is not valid.");
        }
        try {
          var __s5local6 = new RegExp("\\{\\s*" + __s5local4 + "\\s*\\}", "gi");
          __s5local0 = __s5local0.replace(__s5local6, __s5local5);
        } catch (__s12local0) {
          __s0local0.error("Replacing with RegExp failed for key", __s5local4, __s12local0, __s5local0);
        }
      }
    }
    return __s5local0;
  };
  PathFactory.REGEXP_STRIP_WHITES = /^\s+|\s+$/g;
  PathFactory.REGEXP_STRIP_CURLY = /^\{|\}$/g;
  PathFactory.REGEXP_DEFAULT_REPLACEMENT = /\{.*?\}/g;
  return PathFactory;
}();
exports.PathFactory = __s0local1;
