Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_AllianceQuestEvent = require("gge-module:export_AllianceQuestEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function () {
  function AllianceQuestProgressComponent() {
    this._questExpirationSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
  }
  AllianceQuestProgressComponent.prototype.show = function (__s5param0, __s5param1) {
    this._slotVO = __s5param1;
    this._disp = __s5param0;
    this._itxt_progress = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_timer = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_timer, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    var __s5local0 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._slotVO.eventID);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_condition, this._slotVO.allianceQuestVO.getConditionTextVO(__s5local0));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_header, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("popup_ame_quest_requirement_title")));
    this.updateTimer();
    this.updateQuestCondition();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED, this.bindFunction(this.onAllianceQuestsUpdated));
  };
  AllianceQuestProgressComponent.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED, this.bindFunction(this.onAllianceQuestsUpdated));
    this.questExpirationSignal.removeAll();
  };
  AllianceQuestProgressComponent.prototype.onTimerUpdated = function (__s9param0 = null) {
    this.updateTimer();
  };
  AllianceQuestProgressComponent.prototype.onAllianceQuestsUpdated = function (__s11param0 = null) {
    this.updateQuestCondition();
  };
  AllianceQuestProgressComponent.prototype.updateTimer = function () {
    if (this._slotVO) {
      if (this._slotVO.playerID > 0) {
        var __s13local0 = this._slotVO.getRemainingTimeInSeconds();
        this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s13local0);
        if (__s13local0 == 0) {
          this._questExpirationSignal.dispatch();
          this.hide();
        }
      } else {
        this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._slotVO.allianceQuestVO.duration);
      }
    }
  };
  AllianceQuestProgressComponent.prototype.updateQuestCondition = function () {
    if (this._slotVO) {
      var __s19local0 = this._slotVO.questVO.conditions[0].conditionMaxCounter;
      var __s19local1 = this._slotVO.questVO.isCompleted ? __s19local0 : this._slotVO.questVO.conditions[0].conditionCounter;
      var __s19local2 = __s19local0 > 0 ? __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s19local1 / __s19local0, 0, 1) : 0;
      this._itxt_progress.textContentVO.textReplacements = [__s19local1, __s19local0];
      this.disp.mc_progress.progressBar.scaleX = __s19local2;
    }
  };
  Object.defineProperty(AllianceQuestProgressComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestProgressComponent.prototype, "questExpirationSignal", {
    get: function () {
      return this._questExpirationSignal;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceQuestProgressComponent;
}();
exports.AllianceQuestProgressComponent = __s0local0;
