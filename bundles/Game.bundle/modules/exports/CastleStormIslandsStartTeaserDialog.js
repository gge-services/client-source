Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleStormIslandsTeaserItemVO = require("gge-module:export_CastleStormIslandsTeaserItemVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
var __dep_export_CastleStormIslandsMainDialogProperties = require("gge-module:export_CastleStormIslandsMainDialogProperties");
var __dep_export_CastleStormIslandsMainDialogOverview = require("gge-module:export_CastleStormIslandsMainDialogOverview");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsStartTeaserDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStormIslandsStartTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsStartTeaserDialog, __s1param0);
  CastleStormIslandsStartTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("kingdomName_Eiland"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time_left, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("kingdom_islandResetTimer_2"));
    this.itxt_countdown = this.textFieldManager.registerTextField(this.dialogDisp.mc_countdown.txt_countdown, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_join, this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_join.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_introduction_joinButton")));
    this.prepareTeaserItemsData();
    this.fillTeasersData();
    this.dialogDisp.mc_countdown.autoFitToBounds = true;
    this.dialogDisp.mc_countdown.toolTipText = "countdown_aquamarin_tooltip";
    this.dialogDisp.mc_countdown.mouseChildren = false;
  };
  CastleStormIslandsStartTeaserDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.messageData.getBodyForTextMessage(this.dialogProperties.messageVO.messageID);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleStormIslandsStartTeaserDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleStormIslandsStartTeaserDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_join:
        this.joinEvent();
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_island_introduction"));
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleStormIslandsStartTeaserDialog.prototype.prepareTeaserItemsData = function () {
    this._teasersData = [];
    this._teasersData.push(new __dep_export_CastleStormIslandsTeaserItemVO.CastleStormIslandsTeaserItemVO("teaser_storm_island_introduction_start", "dialog_island_introduction_section1_title", "dialog_island_introduction_section1_desc"));
    this._teasersData.push(new __dep_export_CastleStormIslandsTeaserItemVO.CastleStormIslandsTeaserItemVO("teaser_storm_islands_introduction_aquamarine", "dialog_island_introduction_section2_title", "dialog_island_introduction_section2_desc"));
    this._teasersData.push(new __dep_export_CastleStormIslandsTeaserItemVO.CastleStormIslandsTeaserItemVO("teaser_storm_islands_introduction_moonstorm", "dialog_island_introduction_section3_title", "dialog_island_introduction_section3_desc"));
  };
  CastleStormIslandsStartTeaserDialog.prototype.fillTeasersData = function () {
    var __s16local0;
    for (var __s16local1 = 0; __s16local1 < this._teasersData.length; __s16local1++) {
      __s16local0 = this.dialogDisp["mc_teaser" + __s16local1];
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s16local0.mc_icon);
      var __s16local2 = new Library.CastleStormIslandsStartTeaser[this._teasersData[__s16local1].clipName]();
      if (__s16local2) {
        __s16local0.mc_icon.addChild(__s16local2);
      }
      this.textFieldManager.registerTextField(__s16local0.txt_desc_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._teasersData[__s16local1].txtTitle));
      this.textFieldManager.registerTextField(__s16local0.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._teasersData[__s16local1].txtCopy));
    }
  };
  CastleStormIslandsStartTeaserDialog.prototype.onTimerUpdate = function (__s21param0) {
    var __s21local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).resetTime);
    this.itxt_countdown.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s21local0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
  };
  Object.defineProperty(CastleStormIslandsStartTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsStartTeaserDialog.prototype.joinEvent = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).resetTime > 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog, new __dep_export_CastleStormIslandsMainDialogProperties.CastleStormIslandsMainDialogProperties(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_MAIN));
      console.log("Main Event Dialogue");
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStormIslandsMainDialogOverview.CastleStormIslandsMainDialogOverview);
    }
  };
  CastleStormIslandsStartTeaserDialog.__initialize_static_members = function () {
    CastleStormIslandsStartTeaserDialog.NAME = "CastleStormIslandsStartTeaser";
  };
  return CastleStormIslandsStartTeaserDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStormIslandsStartTeaserDialog = __s0local0;
__s0local0.__initialize_static_members();
