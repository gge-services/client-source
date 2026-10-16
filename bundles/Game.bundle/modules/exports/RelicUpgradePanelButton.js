Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function RelicUpgradePanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradePanelButton, __s1param0);
  RelicUpgradePanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onAreaInfoUpdated));
  };
  RelicUpgradePanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onAreaInfoUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(RelicUpgradePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Relicus;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradePanelButton.prototype.getButtonTooltip = function () {
    return "hud_button_relicEnchanter_relicEnchanterUpgrade_tooltip";
  };
  RelicUpgradePanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleModel.CastleModel.equipData.hasRelicEnchanter;
  };
  RelicUpgradePanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_RelicUpgradeDialog.RelicUpgradeDialog);
  };
  RelicUpgradePanelButton.prototype.onAreaInfoUpdated = function (__s19param0) {
    if (!this.isButtonVisible()) {
      this.update();
    }
  };
  return RelicUpgradePanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.RelicUpgradePanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RelicUpgradeDialog = require("gge-module:export_RelicUpgradeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
