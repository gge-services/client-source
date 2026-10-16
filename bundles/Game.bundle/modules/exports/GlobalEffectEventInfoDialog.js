Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local1 = function (__s1param0) {
  function GlobalEffectEventInfoDialog() {
    var __s3local0 = this;
    __s3local0.SHOWN_EVENTS = [__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TEMPSERVER, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ARTIFACT2, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, GlobalEffectEventInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalEffectEventInfoDialog, __s1param0);
  GlobalEffectEventInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0));
    this.dispBounds.height = 550;
  };
  GlobalEffectEventInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_moreInfo_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_kingdoms, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_kingdoms")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_event, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_events")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_globalEffects_moreInfo_desc"));
    this.fillKingdoms();
    this.fillEvents();
    this.scrollComponent.init(0, 100, 5, 5);
    this.scrollComponent.setVisibility(true);
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
  };
  GlobalEffectEventInfoDialog.prototype.onScrollValueChange = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int((this.dialogDisp.mc_list.height - 367) * -1);
    this.dialogDisp.mc_list.y = __dep_exact_9e901e8e2483a22f_1.MathBase.clamp(this.scrollComponent.currentValue / 100 * __s9local0, __s9local0, 0);
  };
  GlobalEffectEventInfoDialog.prototype.fillKingdoms = function () {
    for (var __s11local0 = 0; __s11local0 < 5; __s11local0++) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list["txt_king" + __s11local0], new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s11local0).kingdomNameString)));
    }
  };
  GlobalEffectEventInfoDialog.prototype.fillEvents = function () {
    for (var __s15local0 = 0; __s15local0 < this.SHOWN_EVENTS.length; __s15local0++) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list["mc_event" + __s15local0]);
      this.dialogDisp.mc_list["mc_event" + __s15local0].addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.SHOWN_EVENTS[__s15local0], new __s0local0(50, 50)));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list["txt_event" + __s15local0], new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_title_" + this.SHOWN_EVENTS[__s15local0])));
    }
  };
  GlobalEffectEventInfoDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      switch (__s19param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          return;
      }
    }
  };
  GlobalEffectEventInfoDialog.NAME = "GlobalEffectEventInfo";
  return GlobalEffectEventInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GlobalEffectEventInfoDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
