Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function LegendHallPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LegendHallPanelButton, __s1param0);
  Object.defineProperty(LegendHallPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_LegendTemple;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  LegendHallPanelButton.prototype.getButtonTooltip = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("legendtemple_name");
  };
  LegendHallPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog);
  };
  LegendHallPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle;
  };
  LegendHallPanelButton.prototype.isButtonVisible = function () {
    return !!__dep_export_Iso.Iso.data && !__dep_export_CastleComponent.CastleComponent.layoutManager.isInMyOccupiedCastle && __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.LEGEND_TEMPLE);
  };
  return LegendHallPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.LegendHallPanelButton = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleLegendSkillDialog = require("gge-module:export_CastleLegendSkillDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
