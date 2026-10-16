Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLayoutWorldmapRelocation() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutWorldmapRelocation, __s1param0);
  CastleLayoutWorldmapRelocation.prototype.setLayout = function (__s5param0, __s5param1) {
    this.removeInterface(__s5param0);
    __s5param0.changeScreen(__dep_export_CastleWorldMapScreen.CastleWorldMapScreen, null);
    __s5param0.worldmapScreen.buildWorldMap();
    __s5param0.showPanelRedirecter(__dep_export_CastleUserStatePanel.CastleUserStatePanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    this.addBuddyListPanel(__s5param0);
    __s5param0.addTutorialPanel();
    __s5param0.showPanelRedirecter(__dep_export_CastleNavigationPanel.CastleNavigationPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleRelocatePanel.CastleRelocatePanel, null, false);
  };
  return CastleLayoutWorldmapRelocation;
}(require("gge-module:export_ACastleLayoutStrategy").ACastleLayoutStrategy);
exports.CastleLayoutWorldmapRelocation = __s0local0;
var __dep_export_CastleNavigationPanel = require("gge-module:export_CastleNavigationPanel");
var __dep_export_CastleOptionPanel = require("gge-module:export_CastleOptionPanel");
var __dep_export_CastleRelocatePanel = require("gge-module:export_CastleRelocatePanel");
var __dep_export_CastleUserStatePanel = require("gge-module:export_CastleUserStatePanel");
var __dep_export_CastleWorldMapScreen = require("gge-module:export_CastleWorldMapScreen");
