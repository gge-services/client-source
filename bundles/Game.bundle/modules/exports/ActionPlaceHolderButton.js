Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ActionPlaceHolderButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ActionPlaceHolderButton, __s1param0);
  Object.defineProperty(ActionPlaceHolderButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.ActionPanel_Placeholder_Icon;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ActionPlaceHolderButton.prototype.isButtonEnabled = function () {
    return false;
  };
  ActionPlaceHolderButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleActionPanel.CastleActionPanel).buttons.amountOfVisibleButtons() < 9;
  };
  Object.defineProperty(ActionPlaceHolderButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  ActionPlaceHolderButton.prototype.onButtonClicked = function () {};
  return ActionPlaceHolderButton;
}(__dep_export_APanelButton.APanelButton);
exports.ActionPlaceHolderButton = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleActionPanel = require("gge-module:export_CastleActionPanel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
