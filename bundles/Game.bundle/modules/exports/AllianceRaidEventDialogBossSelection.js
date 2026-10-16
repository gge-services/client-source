Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AllianceRaidBossCardItem = require("gge-module:export_AllianceRaidBossCardItem");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogBossSelection(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._width = 0;
    __s3local0._bossCards = [];
    __s3local0._rewardsCallback = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogBossSelection, __s1param0);
  AllianceRaidEventDialogBossSelection.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_chooseBoss, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_choose_boss_title")));
    this._itxt_timer = this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_remainingTime, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._contentDefaultX = this.subLayerDisp.mc_bossList.mc_content.x;
    this.initBossCards();
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO(this.subLayerDisp.mc_bossList.btn_left, this.subLayerDisp.mc_bossList.btn_right).addMouseWheelElements([this.subLayerDisp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal());
    this._scrollComponent.init(0, 0, AllianceRaidEventDialogBossSelection.SCROLL_STEP, AllianceRaidEventDialogBossSelection.SCROLL_STEP / 2);
  };
  AllianceRaidEventDialogBossSelection.prototype.initBossCards = function () {
    var __s7local0 = this.subLayerDisp.mc_bossList.mc_content;
    for (var __s7local1 = 0; __s7local1 < 3; __s7local1++) {
      var __s7local2 = new __dep_export_AllianceRaidBossCardItem.AllianceRaidBossCardItem(__s7local0["item" + __s7local1], this._rewardsCallback);
      this._bossCards.push(__s7local2);
    }
  };
  AllianceRaidEventDialogBossSelection.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.show();
    this.updateScrollComponent(this._width);
    this._bossCards.forEach(function (__s13param0) {
      return __s13param0.onShow();
    });
    this.updateBossCards();
    __dep_export_CastleModel.CastleModel.raidBossData.requestBossStatus();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onBSEArrived));
  };
  AllianceRaidEventDialogBossSelection.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._bossCards.forEach(function (__s17param0) {
      return __s17param0.onHide();
    });
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onBSEArrived));
  };
  AllianceRaidEventDialogBossSelection.prototype.updateBossCards = function () {
    var __s19local0 = this.eventVO && this.eventVO.raidBossServerDataVO ? this.eventVO.raidBossServerDataVO.bossCards : [];
    this._bossCards.forEach(function (__s21param0, __s21param1) {
      __s21param0.update(__s21param1 < __s19local0.length ? __s19local0[__s21param1] : null);
    });
  };
  AllianceRaidEventDialogBossSelection.prototype.onBSEArrived = function (__s23param0) {
    this.updateBossCards();
  };
  AllianceRaidEventDialogBossSelection.prototype.onScroll = function () {
    var __s25local0 = this._contentDefaultX - this._scrollComponent.currentValue;
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.subLayerDisp.mc_bossList.mc_content, 0.25, {
      x: __s25local0
    });
  };
  AllianceRaidEventDialogBossSelection.prototype.updateScrollComponent = function (__s27param0) {
    var __s27local0 = Math.max(0, this.subLayerDisp.mc_bossList.mc_content.width + this.subLayerDisp.mc_bossList.mc_content.x * 2 - __s27param0);
    var __s27local1 = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, __s27local0, AllianceRaidEventDialogBossSelection.SCROLL_STEP, AllianceRaidEventDialogBossSelection.SCROLL_STEP);
    this._scrollComponent.scrollToValue(__s27local1);
  };
  AllianceRaidEventDialogBossSelection.prototype.onTimerUpdate = function (__s29param0 = null) {
    this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  AllianceRaidEventDialogBossSelection.prototype.onClick = function (__s31param0) {
    __s1param0.prototype.onClick.call(this, __s31param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      __s31param0.target;
    }
  };
  AllianceRaidEventDialogBossSelection.prototype.updatePosition = function (__s34param0, __s34param1) {
    __s1param0.prototype.updatePosition.call(this, __s34param0, __s34param1);
    this._width = __s34param0;
    var __s34local0 = this.subLayerDisp.parent;
    this.subLayerDisp.mc_timer.x = __s34param0 - __s34local0.mc_buttons.width - 10;
    this.subLayerDisp.mc_timer.y = 5;
    var __s34local1 = Math.min(0, __s34param1 - 645);
    this.subLayerDisp.mc_bossList.y = 155 + __s34local1;
    this.subLayerDisp.mc_bossList.btn_right.x = __s34param0;
    this.updateScrollComponent(__s34param0);
    this.subLayerDisp.txt_chooseBoss.x = __s34param0 / 2 - this.subLayerDisp.txt_chooseBoss.width / 2;
    this.subLayerDisp.txt_chooseBoss.y = __s34local0.mc_tabs.height + (this.subLayerDisp.mc_bossList.y - __s34local0.mc_tabs.height) / 2 - this.subLayerDisp.txt_chooseBoss.height / 2;
  };
  AllianceRaidEventDialogBossSelection.SCROLL_STEP = 425;
  return AllianceRaidEventDialogBossSelection;
}(require("gge-module:export_AllianceRaidEventDialogSublayer").AllianceRaidEventDialogSublayer);
exports.AllianceRaidEventDialogBossSelection = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
