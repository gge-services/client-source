Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __s0local0 = function () {
  function BasicGGSTextFieldMouseOverBehaviour() {}
  BasicGGSTextFieldMouseOverBehaviour.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor) {
      __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor.hideCustomCursor();
      if (__dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor != null) {
        __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor.isEnabled = false;
      }
    }
  };
  return BasicGGSTextFieldMouseOverBehaviour;
}();
exports.BasicGGSTextFieldMouseOverBehaviour = __s0local0;
