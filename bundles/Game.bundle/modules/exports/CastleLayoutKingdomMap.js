Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleLayoutKingdomMap() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutKingdomMap, __s1param0);
  CastleLayoutKingdomMap.prototype.setLayout = function (__s5param0, __s5param1) {
    this.removeInterface(__s5param0);
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
    __s5param0.changeScreen(__dep_export_CastleKingdomOverviewScreen.CastleKingdomOverviewScreen, null);
    __s5param0.showPanelRedirecter(__dep_export_CastleChatPanel.CastleChatPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleStatusPanel.CastleStatusPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleUserStatePanel.CastleUserStatePanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    __s5param0.showPanelRedirecter(__dep_export_CastleActionPanel.CastleActionPanel, null, true);
    __s5param0.showPanelRedirecter(__dep_export_CastleMultiInfoPanel.CastleMultiInfoPanel, null, true);
  };
  return CastleLayoutKingdomMap;
}(require("gge-module:export_ACastleLayoutStrategy").ACastleLayoutStrategy);
exports.CastleLayoutKingdomMap = __s0local0;
var __dep_export_CastleActionPanel = require("gge-module:export_CastleActionPanel");
var __dep_export_CastleChatPanel = require("gge-module:export_CastleChatPanel");
var __dep_export_CastleOptionPanel = require("gge-module:export_CastleOptionPanel");
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_export_CastleUserStatePanel = require("gge-module:export_CastleUserStatePanel");
var __dep_export_CastleMultiInfoPanel = require("gge-module:export_CastleMultiInfoPanel");
var __dep_export_CastleKingdomOverviewScreen = require("gge-module:export_CastleKingdomOverviewScreen");
