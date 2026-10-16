Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceGiftCollect = require("gge-module:export_C2SAllianceGiftCollect");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AllianceGiftScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceGiftScrollItem, __s1param0);
  AllianceGiftScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.setTexts();
    this.setGiftIcon();
    this.updateCollectButton();
  };
  AllianceGiftScrollItem.prototype.setTexts = function () {
    this.remainingTime = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.remainingSecondsText));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.btn_collect.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceGift_collect"));
    this._disp.mc_giftTimerTooltip.toolTipText = "resttime";
  };
  Object.defineProperty(AllianceGiftScrollItem.prototype, "remainingSecondsText", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getHoureMinuteSecondTimeString(this.giftVO.remainingTimeInSeconds);
    },
    enumerable: true,
    configurable: true
  });
  AllianceGiftScrollItem.prototype.setGiftIcon = function () {
    if (this._giftIcon) {
      this._giftIcon.destroy();
    }
    this._giftIcon = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp.mc_item), this.giftVO.reward, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON));
  };
  AllianceGiftScrollItem.prototype.onMouseClick = function (__s14param0) {
    __s1param0.prototype.onMouseClick.call(this, __s14param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target) && __s14param0.target == this._disp.btn_collect) {
      this.giftVO.collectInProgress = true;
      this.updateCollectButton();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceGiftCollect.C2SAllianceGiftCollect(this.giftVO.id));
    }
  };
  AllianceGiftScrollItem.prototype.updateCollectButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_collect, !this.giftVO.collectInProgress);
  };
  AllianceGiftScrollItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this._giftIcon.update();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceGiftScrollItem.prototype.onTimerUpdate = function (__s21param0) {
    if (this.remainingTime && this.remainingTime.textContentVO) {
      this.remainingTime.textContentVO.stringValue = this.remainingSecondsText;
    } else {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  AllianceGiftScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._giftIcon) {
      this._giftIcon.destroy();
    }
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceGiftScrollItem.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  Object.defineProperty(AllianceGiftScrollItem.prototype, "giftVO", {
    get: function () {
      return this._scrollItemVO.giftVO;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceGiftScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.AllianceGiftScrollItem = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
