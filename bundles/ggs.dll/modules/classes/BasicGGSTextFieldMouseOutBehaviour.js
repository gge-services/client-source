Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __s0local0 = function () {
  function BasicGGSTextFieldMouseOutBehaviour() {}
  BasicGGSTextFieldMouseOutBehaviour.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor) {
      __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor.showCustomCursor();
      if (__dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor != null) {
        __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().customCursor.isEnabled = true;
      }
    }
  };
  return BasicGGSTextFieldMouseOutBehaviour;
}();
exports.BasicGGSTextFieldMouseOutBehaviour = __s0local0;
