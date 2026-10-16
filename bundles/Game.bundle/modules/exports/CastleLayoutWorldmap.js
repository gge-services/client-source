Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __s0local0 = function (__s1param0) {
  function CastleLayoutWorldmap() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutWorldmap, __s1param0);
  CastleLayoutWorldmap.prototype.setLayout = function (__s5param0, __s5param1) {
    __s1param0.prototype.setLayout.call(this, __s5param0, __s5param1);
    __s5param0.changeScreen(__dep_export_CastleWorldMapScreen.CastleWorldMapScreen, null);
    __s5param0.worldmapScreen.buildWorldMap();
    __s5param0.addTutorialPanel();
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector) {
      __s5param0.showPanelRedirecter(__dep_export_ABGAllianceCollectorPointPanel.ABGAllianceCollectorPointPanel, null, false);
    }
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
      __s5param0.showPanelRedirecter(__dep_export_ABGAllianceTowerPanel.ABGAllianceTowerPanel, null, false);
      __s5param0.showPanelRedirecter(__dep_export_ABGAllianceTowerPointMalusInfoPanel.ABGAllianceTowerPointMalusInfoPanel, null, false);
    }
    __s5param0.showPanelRedirecter(__dep_export_CastleNavigationPanel.CastleNavigationPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleActionPanel.CastleActionPanel, null, false);
  };
  return CastleLayoutWorldmap;
}(require("gge-module:export_CastleBasicLayout").CastleBasicLayout);
exports.CastleLayoutWorldmap = __s0local0;
var __dep_export_ABGAllianceCollectorPointPanel = require("gge-module:export_ABGAllianceCollectorPointPanel");
var __dep_export_ABGAllianceTowerPanel = require("gge-module:export_ABGAllianceTowerPanel");
var __dep_export_ABGAllianceTowerPointMalusInfoPanel = require("gge-module:export_ABGAllianceTowerPointMalusInfoPanel");
var __dep_export_CastleActionPanel = require("gge-module:export_CastleActionPanel");
var __dep_export_CastleNavigationPanel = require("gge-module:export_CastleNavigationPanel");
var __dep_export_CastleWorldMapScreen = require("gge-module:export_CastleWorldMapScreen");
