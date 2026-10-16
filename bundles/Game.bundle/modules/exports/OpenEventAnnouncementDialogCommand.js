Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventAnnouncementDialogProperties = require("gge-module:export_EventAnnouncementDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenEventAnnouncementDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenEventAnnouncementDialogCommand, __s1param0);
  OpenEventAnnouncementDialogCommand.prototype.execute = function (__s5param0 = null) {
    if (!__s5param0 || !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0, "MessageEventAnnouncementVO")) {
      throw new Error("OpenEventAnnouncementDialogCommand expects a MessageEventAnnouncementVO as its commandVars");
    }
    this.messageEventAnnouncementVO = __s5param0;
    var __s5local0 = this.messageEventAnnouncementVO.eventId;
    var __s5local1 = this.messageEventAnnouncementVO.durationTS;
    __dep_export_CastleModel.CastleModel.eventAnnouncementData.isClaimed(__s5local1);
    if (__dep_export_CastleModel.CastleModel.eventAnnouncementData.isAvailable(__s5local1)) {
      var __s5local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.eventAnnouncementData.getLeagueTypeId(__s5local0));
      if (__s5local2 != -1) {
        var __s5local3 = __dep_export_CastleModel.CastleModel.eventAnnouncementData.getEventAnnouncementVO(__s5local0, __s5local2);
        var __s5local4 = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5local3.teaserRewardIDs);
        var __s5local5 = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s5local3.messageRewardID);
        var __s5local6 = new __dep_export_EventAnnouncementDialogProperties.EventAnnouncementDialogProperties(__s5local0, __s5local1, __s5local4, __s5local5);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEventTeaserDialog.CastleEventTeaserDialog, __s5local6);
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.ALERT_INFORMATION), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_eventAnnouncements_expired")));
    }
  };
  return OpenEventAnnouncementDialogCommand;
}(__dep_exact_9e901e8e2483a22f_2.SimpleCommand);
exports.OpenEventAnnouncementDialogCommand = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleEventTeaserDialog = require("gge-module:export_CastleEventTeaserDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
