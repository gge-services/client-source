Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
__dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
exports.getSize = function getSize(__s1param0) {
  switch (typeof __s1param0) {
    case "boolean":
      return 4;
    case "number":
      return 8;
    case "string":
      return __s1param0.length * 2;
    case "object":
      return Object.keys(__s1param0).reduce(function (__s4param0, __s4param1) {
        return __s4param0 + getSize(__s4param1) + getSize(__s1param0[__s4param1]);
      }, 0);
    default:
      return 0;
  }
};
