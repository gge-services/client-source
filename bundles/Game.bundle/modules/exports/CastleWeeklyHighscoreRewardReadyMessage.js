Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleWeeklyHighscoreRewardReadyMessage() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWeeklyHighscoreRewardReadyMessage.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWeeklyHighscoreRewardReadyMessage, __s1param0);
  CastleWeeklyHighscoreRewardReadyMessage.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rankreward_message_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rankreward_message_copy"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_rank]);
    this.dialogDisp.btn_rank.toolTipText = "dialog_rankreward_title";
  };
  CastleWeeklyHighscoreRewardReadyMessage.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_rank:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWeeklyHighscoreRewardDialog.CastleWeeklyHighscoreRewardDialog);
    }
  };
  CastleWeeklyHighscoreRewardReadyMessage.__initialize_static_members = function () {
    CastleWeeklyHighscoreRewardReadyMessage.NAME = "CastleWeeklyHighscoreRewardReady";
  };
  return CastleWeeklyHighscoreRewardReadyMessage;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleWeeklyHighscoreRewardReadyMessage = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWeeklyHighscoreRewardDialog = require("gge-module:export_CastleWeeklyHighscoreRewardDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
