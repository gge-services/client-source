Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_export_JavascriptCallSetLanguageVO = require("gge-module:export_JavascriptCallSetLanguageVO");
var __s0local0 = function () {
  function JavascriptCallSetLanguageFactory() {}
  JavascriptCallSetLanguageFactory.prototype.createVO = function () {
    return new __dep_export_JavascriptCallSetLanguageVO.JavascriptCallSetLanguageVO(this.env.currentCountryLanguageCode);
  };
  Object.defineProperty(JavascriptCallSetLanguageFactory.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return JavascriptCallSetLanguageFactory;
}();
exports.JavascriptCallSetLanguageFactory = __s0local0;
