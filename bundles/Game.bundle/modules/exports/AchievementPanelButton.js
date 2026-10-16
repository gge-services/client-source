Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function AchievementPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AchievementPanelButton, __s1param0);
  AchievementPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(AchievementPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.btn_achiev;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  AchievementPanelButton.prototype.getButtonTooltip = function () {
    if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return "dialog_accountInfo_notAvailable_tooltip";
    } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS]);
    } else {
      return "panel_action_achievement";
    }
  };
  AchievementPanelButton.prototype.isButtonEnabled = function () {
    return !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS;
  };
  AchievementPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAchievementDialog.CastleAchievementDialog);
  };
  return AchievementPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.AchievementPanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAchievementDialog = require("gge-module:export_CastleAchievementDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
