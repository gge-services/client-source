Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_GeneralsOverviewDialog = require("gge-module:export_GeneralsOverviewDialog");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralsOverviewPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsOverviewPanelButton, __s1param0);
  GeneralsOverviewPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.onProgress.add(this.bindFunction(this.onQuestUpdate));
  };
  GeneralsOverviewPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.onProgress.remove(this.bindFunction(this.onQuestUpdate));
  };
  GeneralsOverviewPanelButton.prototype.updateOnVisible = function () {};
  Object.defineProperty(GeneralsOverviewPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Generals;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsOverviewPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.generalsIntroductionData.canAccessGenerals();
  };
  GeneralsOverviewPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "ringmenu_building_generals_overview";
    } else if (__dep_export_CastleModel.CastleModel.userData.level < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]);
    } else {
      return "panel_action_generals_notAvailable_quest";
    }
  };
  Object.defineProperty(GeneralsOverviewPanelButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsOverviewPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsOverviewDialog.GeneralsOverviewDialog);
  };
  GeneralsOverviewPanelButton.prototype.onQuestUpdate = function () {
    this.update();
  };
  return GeneralsOverviewPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.GeneralsOverviewPanelButton = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
