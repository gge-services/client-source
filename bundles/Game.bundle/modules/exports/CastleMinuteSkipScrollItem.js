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
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMinuteSkipScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMinuteSkipScrollItem, __s1param0);
  CastleMinuteSkipScrollItem.prototype.customFillItem = function () {
    var __s5local0;
    __s1param0.prototype.customFillItem.call(this);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item), this.minuteSkipVO, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON));
    var __s5local1 = 0;
    if (this.minuteSkipVO.xmlCurrencyVO.minutesSkipValue > 5 && this.minuteSkipVO.amount > 30) {
      __s5local0 = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.minuteSkipVO.amount, this.minuteSkipVO.xmlCurrencyVO.softCap]);
      __s5local1 = this.minuteSkipVO.amount >= this.minuteSkipVO.xmlCurrencyVO.softCap ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      __s5local0 = new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.minuteSkipVO.amount);
      __s5local1 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    if (this.minuteSkipVO.amount > 0) {
      this.disp.btn_skip.toolTipText = "dialog_timeSkip_timeSkipButton_tooltip";
      if (!__dep_export_ButtonHelper.ButtonHelper.isEnablingDelayed(this.disp.btn_skip)) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_skip, true);
      }
    } else {
      this.disp.btn_skip.toolTipText = "dialog_timeSkip_timeSkipButton_disabled_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_skip, false);
    }
    this.itxt_amount = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_amount, __s5local0);
    this.itxt_amount.color = __s5local1;
    this.itxt_amount.autoFitToBounds = true;
  };
  Object.defineProperty(CastleMinuteSkipScrollItem.prototype, "minuteSkipVO", {
    get: function () {
      return this.scrollItemVO.minuteSkipVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMinuteSkipScrollItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.CastleMinuteSkipScrollItem = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
