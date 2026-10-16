Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralsHubPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubPanelButton, __s1param0);
  GeneralsHubPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.onProgress.add(this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  GeneralsHubPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.onProgress.remove(this.bindFunction(this.onQuestUpdate));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  GeneralsHubPanelButton.prototype.updateOnVisible = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.generalsData.getTotalAmountOfAvailableDraws();
    this.setAmount(__s9local0 > 0, __s9local0);
  };
  Object.defineProperty(GeneralsHubPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_GeneralsHUB;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.generalsIntroductionData.canAccessGenerals();
  };
  GeneralsHubPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "ringmenu_building_generals_inn";
    } else if (__dep_export_CastleModel.CastleModel.userData.level < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]);
    } else {
      return "panel_action_generals_notAvailable_quest";
    }
  };
  Object.defineProperty(GeneralsHubPanelButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubPanelButton.prototype.onButtonClicked = function () {
    __dep_export_GeneralsHelper.GeneralsHelper.showGeneralsHubDialog();
  };
  GeneralsHubPanelButton.prototype.onQuestUpdate = function () {
    this.update();
  };
  GeneralsHubPanelButton.prototype.onHubUpdated = function (__s30param0) {
    this.update();
  };
  GeneralsHubPanelButton.prototype.onCurrenciesUpdated = function (__s32param0) {
    this.update();
  };
  GeneralsHubPanelButton.prototype.onTimerUpdate = function (__s34param0) {
    if (this.isVisible && this.isButtonEnabled) {
      __dep_export_CastleModel.CastleModel.generalsData.checkHubQuestCooldowns();
    }
  };
  return GeneralsHubPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.GeneralsHubPanelButton = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
