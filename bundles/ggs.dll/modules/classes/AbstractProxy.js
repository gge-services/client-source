Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function () {
  function AbstractProxy() {}
  Object.defineProperty(AbstractProxy.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractProxy;
}();
exports.AbstractProxy = __s0local0;
