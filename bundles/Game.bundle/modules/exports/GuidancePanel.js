Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function GuidancePanel() {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(GuidancePanel.ASSET_NAME, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GuidancePanel.ASSET_NAME), null, 0, false);
    __s3local0._clip.doWhenLoaded(__s3local0.bindFunction(__s3local0.onLoaded));
    __s3local0.disp.addChild(__s3local0._clip);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GuidancePanel, __s1param0);
  GuidancePanel.prototype.onLoaded = function () {
    this.panelDisp.icon_questGiver.scaleX = this.panelDisp.icon_questGiver.scaleY = 0.6;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.panelDisp.mc_speechbubble.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.panelDisp.icon_questGiver, 1.05);
    this._itxt_text = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.mc_speechbubble.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  GuidancePanel.prototype.showWithText = function (__s7param0, __s7param1, __s7param2) {
    var __s7local0 = this;
    if (__s7param2 === undefined) {
      __s7param2 = null;
    }
    this._clip.doWhenLoaded(function (__s10param0) {
      __s7local0.show();
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s7local0.panelDisp.icon_questGiver);
      var __s10local0 = __dep_export_CastleModel.CastleModel.questData.getQuestGiverSmallClassName(__s7param0, __dep_export_CastleModel.CastleModel.userData.hasAlternativeQuestGiver);
      var __s10local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s10local0 + "_Icon", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s10local0), null, 0, false, __dep_exact_81dacdf05bd32292.getDefinitionByName("QuestGiverSmall_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Icon"));
      __s7local0.panelDisp.icon_questGiver.addChild(__s10local1);
      __s7local0.panelDisp.mc_speechbubble.visible = true;
      __s7local0._itxt_text.textContentVO.textId = __s7param1;
      __s7local0._itxt_text.textContentVO.textReplacements = __s7param2;
    });
  };
  GuidancePanel.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.panelDisp.icon_questGiver:
        this.panelDisp.mc_speechbubble.visible = true;
        break;
      case this.panelDisp.mc_speechbubble.btn_close:
        this.panelDisp.mc_speechbubble.visible = false;
    }
  };
  GuidancePanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth - 100;
      this.disp.y = 100;
    }
  };
  Object.defineProperty(GuidancePanel.prototype, "panelDisp", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  GuidancePanel.ASSET_NAME = "GuidancePanelExt";
  return GuidancePanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.GuidancePanel = __s0local1;
