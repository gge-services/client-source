Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundStartDialog() {
    return __s1param0.call(this, CastleAllianceBattlegroundStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundStartDialog, __s1param0);
  CastleAllianceBattlegroundStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleAllianceBattlegroundStartDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_title_113")));
    for (var __s7local0 = 0; __s7local0 < 3; __s7local0++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + __s7local0], new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_introduction_section" + (__s7local0 + 1) + "_title_" + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring)));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + __s7local0], new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_introduction_section" + (__s7local0 + 1) + "_desc_" + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_introduction_line"));
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_background);
    this.dialogDisp.mc_background.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CastleAllianceBattleGroundStarterBG_" + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
  };
  CastleAllianceBattlegroundStartDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_beyondTheHorizon"));
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleAllianceBattlegroundStartDialog.prototype.onOK = function () {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      __dep_export_ABGHelper.ABGHelper.abgEvent.openDialog();
    }
    this.hide();
  };
  CastleAllianceBattlegroundStartDialog.NAME = "CastleAllianceBattleGroundStarter_ABGTower";
  return CastleAllianceBattlegroundStartDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceBattlegroundStartDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
