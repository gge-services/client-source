Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialReadBattleLogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialReadBattleLogCommand, __s1param0);
  TutorialReadBattleLogCommand.prototype.internalExecute = function () {
    this.filter.replace(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog);
    var __s5local0 = this.layoutManager.getPanel(__dep_export_CastleMultiInfoPanel.CastleMultiInfoPanel).buttons.getAnyButtonByClass(__dep_export_MessagePanelButton.MessagePanelButton);
    var __s5local1 = __s5local0.buttonMc;
    this.arrows.replace(__s5local1, true, false, 1, new __s0local0(17, 2));
    this.blocker.replace(__s5local0.disp);
    this.blocker.add(__s5local0.buttonMc);
    this.spotlight.replace(__s5local1);
    this.layoutManager.tutorialPanel.showWithText("tut_dungeon_winDungeon_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog, this.bindFunction(this.onInbox));
  };
  TutorialReadBattleLogCommand.prototype.onInbox = function () {
    this.trackStep("s_080_160_messages_menu_opened");
    this.layoutManager.tutorialPanel.hide();
    var __s7local0 = this.layoutManager.getDialog(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog);
    __s7local0.changeMessageCategory(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
    var __s7local1 = __s7local0.getCurrentSublayer();
    if (__s7local1 && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s7local1, "ACastleBaseInboxMessageList")) {
      var __s7local2 = __s7local1.getLatestBattleLog();
      if (!__s7local2) {
        this.finishStep();
        return;
      }
      var __s7local3 = __s7local2.disp;
      this.arrows.replace(__s7local3);
      this.blocker.replace(__s7local3);
      this.spotlight.clear();
      this.filter.add(__dep_export_CastleBattleLogMessageAdvanced.CastleBattleLogMessageAdvanced);
      this.tutorialController.waitForExternalDialogShow(__dep_export_CastleBattleLogMessageAdvanced.CastleBattleLogMessageAdvanced, this.bindFunction(this.onBattleLog));
    }
  };
  TutorialReadBattleLogCommand.prototype.onBattleLog = function () {
    this.trackStep("s_080_170_battlereport_opened");
    var __s11local0 = this.layoutManager.getDialog(__dep_export_CastleBattleLogMessageAdvanced.CastleBattleLogMessageAdvanced);
    var __s11local1 = __dep_exact_81dacdf05bd32292.castAs(__s11local0, "CastleBattleLogMessageAdvanced");
    if (__s11local1 != null) {
      var __s11local2 = __s11local1.dialogDisp.btn_ok;
      this.arrows.replace(__s11local2);
      this.blocker.replace(__s11local2);
    }
    this.tutorialController.waitForDialogHide(__dep_export_CastleBattleLogMessageAdvanced.CastleBattleLogMessageAdvanced, this.bindFunction(this.waitForInboxHide));
    this.finishTriggerQuest();
  };
  TutorialReadBattleLogCommand.prototype.waitForInboxHide = function () {
    this.trackStep("s_080_180_battlereport_confirmed");
    var __s14local0 = this.layoutManager.getDialog(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog).dialogDisp.btn_cancel;
    this.arrows.replace(__s14local0);
    this.blocker.replace(__s14local0);
    if (this.layoutManager.isOnMap) {
      this.tutorialController.waitForDialogHide(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog, this.bindFunction(this.goToMainCastle));
    } else {
      this.tutorialController.waitForDialogHide(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog, this.bindFunction(this.finishStep));
    }
  };
  TutorialReadBattleLogCommand.prototype.goToMainCastle = function () {
    this.trackStep("s_080_190_messages_menu_closed");
    this.arrows.replace(this.getActionPanelButtonDisp(__dep_export_CastlePanelButton.CastlePanelButton));
    this.replaceActionPanelButtonInBlocker(__dep_export_CastlePanelButton.CastlePanelButton);
    this.layoutManager.tutorialPanel.showWithText("tut_dungeon_returntocastle_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.arrivedAtCastle));
  };
  TutorialReadBattleLogCommand.prototype.arrivedAtCastle = function (__s20param0) {
    this.trackStep("s_080_210_castle_entered");
    this.finishStep();
  };
  return TutorialReadBattleLogCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialReadBattleLogCommand = __s0local1;
var __dep_export_CastleBattleLogMessageAdvanced = require("gge-module:export_CastleBattleLogMessageAdvanced");
var __dep_export_CastleMessageInboxDialog = require("gge-module:export_CastleMessageInboxDialog");
var __dep_export_CastleMultiInfoPanel = require("gge-module:export_CastleMultiInfoPanel");
var __dep_export_CastlePanelButton = require("gge-module:export_CastlePanelButton");
var __dep_export_MessagePanelButton = require("gge-module:export_MessagePanelButton");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ISimpleCommand");
