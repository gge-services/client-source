Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleBasicLayout() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicLayout, __s1param0);
  CastleBasicLayout.prototype.setLayout = function (__s5param0, __s5param1) {
    this._lcontext = __s5param0;
    this.removeInterface(__s5param0);
    __s5param0.showPanelRedirecter(__dep_export_CastleChatPanel.CastleChatPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel, null, false);
    if (__dep_export_CastleModel.CastleModel.userData.level > 1) {
      __s5param0.showPanelRedirecter(__dep_export_CastleStatusPanel.CastleStatusPanel, null, false);
    } else {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    }
    __s5param0.showPanelRedirecter(__dep_export_CastleUserStatePanel.CastleUserStatePanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    __s5param0.showPanelRedirecter(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel, null, false);
    __s5param0.showPanelRedirecter(__dep_export_CastleMultiInfoPanel.CastleMultiInfoPanel, null, false);
    this.addBuddyListPanel(__s5param0);
  };
  Object.defineProperty(CastleBasicLayout.prototype, "castleEnv", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLayout.prototype.onLevelUp = function () {
    this._lcontext.showPanelRedirecter(__dep_export_CastleStatusPanel.CastleStatusPanel, null, false);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  return CastleBasicLayout;
}(require("gge-module:export_ACastleLayoutStrategy").ACastleLayoutStrategy);
exports.CastleBasicLayout = __s0local0;
var __dep_export_CastleChatPanel = require("gge-module:export_CastleChatPanel");
var __dep_export_CastleOptionPanel = require("gge-module:export_CastleOptionPanel");
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_export_CastleUserStatePanel = require("gge-module:export_CastleUserStatePanel");
var __dep_export_CastleMultiInfoPanel = require("gge-module:export_CastleMultiInfoPanel");
