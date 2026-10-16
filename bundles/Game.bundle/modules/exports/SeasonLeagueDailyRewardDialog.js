Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueDailyRewardDialog() {
    return __s1param0.call(this, SeasonLeagueDailyRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueDailyRewardDialog, __s1param0);
  SeasonLeagueDailyRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_medalPayout_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_multiReward.mc_player.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("forYou"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_multiReward.mc_alliance.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("forYourAlliance"))).autoFitToBounds = true;
  };
  SeasonLeagueDailyRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateText();
    this.updateReward();
  };
  SeasonLeagueDailyRewardDialog.prototype.updateText = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.createEventVOByEventID(this.dialogProperties.eventId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.allianceRank > 0 ? "dialog_seasonLeague_medalPayoutAlliance_copy" : "dialog_seasonLeague_medalPayout_copy", [__s9local0 ? __dep_exact_92d05af59ee2ff30.Localize.text(__s9local0.eventBuildingNameId) : "-", this.dialogProperties.rank, this.dialogProperties.allianceRank])).autoFitToBounds = true;
  };
  SeasonLeagueDailyRewardDialog.prototype.updateReward = function () {
    this.destroyCollectableRenderList();
    if (this.dialogProperties.allianceReward) {
      this.dialogDisp.mc_singleReward.visible = false;
      this.dialogDisp.mc_multiReward.visible = true;
      this.displayReward(this.dialogDisp.mc_multiReward.mc_player, this.dialogProperties.reward);
      this.displayReward(this.dialogDisp.mc_multiReward.mc_alliance, this.dialogProperties.allianceReward);
    } else {
      this.dialogDisp.mc_singleReward.visible = true;
      this.dialogDisp.mc_multiReward.visible = false;
      this.displayReward(this.dialogDisp.mc_singleReward, this.dialogProperties.reward);
    }
  };
  SeasonLeagueDailyRewardDialog.prototype.displayReward = function (__s15param0, __s15param1) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s15param0.mc_icon).addIconMc(__s15param0.mc_icon).addTextfield(__s15param0.txt_text), __s15param1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(95, 60)));
  };
  SeasonLeagueDailyRewardDialog.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      __s1param0.prototype.onClick.call(this, __s17param0);
      switch (__s17param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueDailyRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueDailyRewardDialog.NAME = "SeasonLeagueDailyReward_Alliance";
  return SeasonLeagueDailyRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeagueDailyRewardDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
