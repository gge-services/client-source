Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleSamuraiInvasionEventTeaserDialog() {
    return __s1param0.call(this, CastleSamuraiInvasionEventTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSamuraiInvasionEventTeaserDialog, __s1param0);
  CastleSamuraiInvasionEventTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_goTo);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goTo.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_action_event")).autoFitToBounds = true;
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.getEventVO();
    var __s7local1 = !!__s7local0 && __s7local0.daimyoInfoVO.isEnabled;
    this.dialogDisp.mc_teaser1.visible = !__s7local1;
    this.dialogDisp.mc_teaser2.visible = !__s7local1;
    this.dialogDisp.mc_teaserDaimyo1.visible = __s7local1;
    this.dialogDisp.mc_teaserDaimyo2.visible = __s7local1;
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_samuraiInvasion_message_header"));
    var __s9local0 = this.getEventVO();
    var __s9local1 = "dialog_samuraiInvasion_message_copy";
    if (__s9local0 && __s9local0.daimyoInfoVO.isEnabled) {
      __s9local1 = "dialog_samuraiInvasionDaimyo_message_copy";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local1)).autoFitToBounds = true;
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.getEventVO = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
    } else {
      return null;
    }
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.dialogDisp.btn_goTo:
        var __s16local0 = new __dep_export_CastleQuestConditionVO.CastleQuestConditionVO();
        __s16local0.loadFromParamArray([__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG]);
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [null, __s16local0]);
    }
  };
  CastleSamuraiInvasionEventTeaserDialog.NAME = "CastleSamuraiInvasionEventTeaser_Daimyo";
  return CastleSamuraiInvasionEventTeaserDialog;
}(require("gge-module:export_CastleBasicSpecialEventTeaserDialog").CastleBasicSpecialEventTeaserDialog);
exports.CastleSamuraiInvasionEventTeaserDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleQuestConditionVO = require("gge-module:export_CastleQuestConditionVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
