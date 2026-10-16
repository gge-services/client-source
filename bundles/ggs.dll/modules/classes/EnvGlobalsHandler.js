Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EnvGlobalsHandler() {}
  Object.defineProperty(EnvGlobalsHandler, "globals", {
    get: function () {
      if (EnvGlobalsHandler._envGlobals == null) {
        throw new Error("The environment globals are not initialized by game.");
      }
      return EnvGlobalsHandler._envGlobals;
    },
    enumerable: true,
    configurable: true
  });
  EnvGlobalsHandler.setEnvGlobalsClass = function (__s8param0) {
    EnvGlobalsHandler._envGlobals = __s8param0;
  };
  return EnvGlobalsHandler;
}();
exports.EnvGlobalsHandler = __s0local0;
