Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function BackToMainServerButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BackToMainServerButton, __s1param0);
  BackToMainServerButton.prototype.isButtonVisible = function () {
    return __dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  BackToMainServerButton.prototype.getButtonTooltip = function () {
    return "panel_action_mainKingdom";
  };
  Object.defineProperty(BackToMainServerButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_GoToCastle;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  BackToMainServerButton.prototype.onButtonClicked = function () {
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGOUT);
  };
  return BackToMainServerButton;
}(__dep_export_APanelButton.APanelButton);
exports.BackToMainServerButton = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
