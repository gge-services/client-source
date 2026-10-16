Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
exports.debug = function debug() {
  var __s1local0;
  var __s1local1 = [];
  for (var __s1local2 = 0; __s1local2 < arguments.length; __s1local2++) {
    __s1local1[__s1local2] = arguments[__s1local2];
  }
  var __s1local3 = __s1local1[0];
  var __s1local4 = __s1local1.slice(1);
  (__s1local0 = __dep_export_LoggerConfigurator.getLogger("DEPRECATED")).debug.apply(__s1local0, [__s1local3].concat(__s1local4));
};
