Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("CoreJS.BasicJSVariables");
var __s0local1 = function () {
  function BasicJSVariables() {}
  BasicJSVariables.prototype.readVariablesFromJavaScript = function () {
    var __s5local0 = this;
    if (this._initialized) {
      return Promise.resolve("already initialized");
    } else {
      __s0local0.info("readVariablesFromJavaScript: journeyHash");
      return new Promise(function (__s9param0, __s9param1) {
        __dep_export_CSSMouseCursor.ExternalInterface.asyncCall("journeyHash").then(function (__s11param0) {
          __s0local0.info("journeyHash: ", __s11param0);
          __s5local0._initialized = true;
          __s5local0._journeyHash = __s11param0;
          __s9param0(__s11param0);
        }).catch(function (__s13param0) {
          __s5local0._initialized = true;
          __s0local0.warn(__s13param0);
          __s9param0(__s13param0);
        });
      });
    }
  };
  BasicJSVariables.prototype.toString = function () {
    return "journeyHash: " + this._journeyHash;
  };
  Object.defineProperty(BasicJSVariables.prototype, "journeyHash", {
    get: function () {
      if (!this._initialized) {
        throw new Error("BasicJSVariables is not initialized!");
      }
      return this._journeyHash;
    },
    enumerable: true,
    configurable: true
  });
  return BasicJSVariables;
}();
exports.BasicJSVariables = __s0local1;
