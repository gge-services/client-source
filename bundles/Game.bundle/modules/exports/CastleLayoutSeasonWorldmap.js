Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLayoutSeasonWorldmap() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutSeasonWorldmap, __s1param0);
  CastleLayoutSeasonWorldmap.prototype.setLayout = function (__s5param0, __s5param1) {
    this.removeInterface(__s5param0);
    __s5param0.changeScreen(this.screenName, null);
    __s5param0.showPanelRedirecter(__dep_export_CastleChatPanel.CastleChatPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleStatusPanel.CastleStatusPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleUserStatePanel.CastleUserStatePanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    __s5param0.showPanelRedirecter(__dep_export_CastleSeasonEventActionPanel.CastleSeasonEventActionPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleMultiInfoPanel.CastleMultiInfoPanel, null, false);
  };
  Object.defineProperty(CastleLayoutSeasonWorldmap.prototype, "screenName", {
    get: function () {
      return __dep_export_CastleSeasonMapScreen.CastleSeasonMapScreen;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLayoutSeasonWorldmap;
}(require("gge-module:export_ACastleLayoutStrategy").ACastleLayoutStrategy);
exports.CastleLayoutSeasonWorldmap = __s0local0;
var __dep_export_CastleSeasonEventActionPanel = require("gge-module:export_CastleSeasonEventActionPanel");
var __dep_export_CastleChatPanel = require("gge-module:export_CastleChatPanel");
var __dep_export_CastleOptionPanel = require("gge-module:export_CastleOptionPanel");
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_export_CastleUserStatePanel = require("gge-module:export_CastleUserStatePanel");
var __dep_export_CastleMultiInfoPanel = require("gge-module:export_CastleMultiInfoPanel");
var __dep_export_CastleSeasonMapScreen = require("gge-module:export_CastleSeasonMapScreen");
