Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function QFICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QFICommand, __s1param0);
  Object.defineProperty(QFICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_FINISHED;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  QFICommand.prototype.exec = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        var __s9local3 = __dep_exact_f855840627e6e145.int(__s9local2.QID);
        var __s9local4 = __dep_export_CastleModel.CastleModel.questData.getQuestPrototype(__s9local3);
        if (!__s9local4) {
          return;
        }
        if (__s9local4.isCampaignQuest) {
          var __s9local5 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
          if (__s9local5 && __s9local5.getQuestByID(__s9local4.questID)) {
            __s9local4 = __s9local5.getQuestByID(__s9local4.questID);
          }
        }
        if (!__s9local4.isStarterQuest && !__s9local4.hidden) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleQuestCompletedDialog.CastleQuestCompletedDialog, new __dep_export_CastleQuestCompletedDialogProperties.CastleQuestCompletedDialogProperties(__s9local4, __s9local2), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
          if (this.layoutManager.isIngameState) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().blockDialogs = false;
          }
        }
        __dep_export_CastleModel.CastleModel.questData.finishQuest(__s9local2.QID);
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  };
  return QFICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.QFICommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleQuestCompletedDialog = require("gge-module:export_CastleQuestCompletedDialog");
var __dep_export_CastleQuestCompletedDialogProperties = require("gge-module:export_CastleQuestCompletedDialogProperties");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
