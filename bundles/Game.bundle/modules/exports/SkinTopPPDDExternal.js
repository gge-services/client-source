Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function SkinTopPPDDExternal(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, "PivatePrimeDayDynamicDialog_BG_Skin_Top_Left_" + __s3param1) || this;
    __s3local0.offerVO = __s3param2;
    if (__s3local0.isLoaded) {
      __s3local0.onDisplayObjectClipIsLoaded(null);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkinTopPPDDExternal, __s1param0);
  SkinTopPPDDExternal.prototype.onDisplayObjectClipIsLoaded = function (__s6param0 = null) {
    if (this.offerVO) {
      this.updateTimer();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
    }
  };
  SkinTopPPDDExternal.prototype.updateTimer = function (__s9param0 = null) {
    if (this.offerVO.remainingSeconds >= 1) {
      this.clipDisp.mc_timer.visible = true;
      this.clipDisp.mc_timeless.visible = false;
      var __s9local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.offerVO.remainingSeconds);
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.mc_timer.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s9local0));
    } else {
      this.clipDisp.mc_timer.visible = false;
      this.clipDisp.mc_timeless.visible = true;
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.mc_timeless.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_limitedTime")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    }
  };
  SkinTopPPDDExternal.prototype.onHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
  };
  return SkinTopPPDDExternal;
}(require("gge-module:export_PPDDExternalPart").PPDDExternalPart);
exports.SkinTopPPDDExternal = __s0local0;
