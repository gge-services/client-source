Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function SeasonWorldmapPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonWorldmapPanelButton, __s1param0);
  Object.defineProperty(SeasonWorldmapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_WorldMap;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SeasonWorldmapPanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_worldmap";
  };
  SeasonWorldmapPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
  };
  SeasonWorldmapPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP;
  };
  return SeasonWorldmapPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.SeasonWorldmapPanelButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
