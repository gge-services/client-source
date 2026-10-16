Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GoodgameInputTextField = require("gge-module:class_GoodgameInputTextField");
var __dep_class_GoodgameTextField = require("gge-module:class_GoodgameTextField");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".GoodgameAdvancedTextFieldFactory");
var __s0local1 = function () {
  function GoodgameAdvancedTextFieldFactory() {}
  GoodgameAdvancedTextFieldFactory.prototype.createAdvancedTextField = function (__s5param0) {
    __s0local0.debug("createAdvancedTextField for", __s5param0);
    if (__s5param0.type == __dep_export_CSSMouseCursor.TextFieldType.INPUT) {
      return new __dep_class_GoodgameInputTextField.GoodgameInputTextField(__s5param0);
    } else {
      return new __dep_class_GoodgameTextField.GoodgameTextField(__s5param0);
    }
  };
  return GoodgameAdvancedTextFieldFactory;
}();
exports.GoodgameAdvancedTextFieldFactory = __s0local1;
