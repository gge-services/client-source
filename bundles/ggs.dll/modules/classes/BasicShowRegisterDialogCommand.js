Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicRegisterDialogProperties = require("gge-module:class_BasicRegisterDialogProperties");
var __s0local0 = function (__s1param0) {
  function BasicShowRegisterDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicShowRegisterDialogCommand, __s1param0);
  BasicShowRegisterDialogCommand.prototype.execute = function (__s5param0 = null) {
    this.layoutManager.showDialog(__dep_class_CommonDialogNames.CommonDialogNames.RegisterDialog_NAME, new __dep_class_BasicRegisterDialogProperties.BasicRegisterDialogProperties());
  };
  Object.defineProperty(BasicShowRegisterDialogCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return BasicShowRegisterDialogCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicShowRegisterDialogCommand = __s0local0;
