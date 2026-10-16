Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __s0local0 = function (__s1param0) {
  function StatusIconOfferHub() {
    var __s3local0 = this;
    __s3local0._iconCount = 0;
    __s3local0._isAnyNewOffer = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, "Btn_OfferHub", "txt_label", null, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconOfferHub, __s1param0);
  StatusIconOfferHub.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_count = this.textFieldManager.registerTextField(this.icon.icon_count.txt_label, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
  };
  StatusIconOfferHub.prototype.setVisibilityLoaded = function () {
    this.show();
  };
  StatusIconOfferHub.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOfferHub.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOfferHub.prototype.onTimerUpdate = function (__s13param0 = null) {
    this.updateCounter();
  };
  StatusIconOfferHub.prototype.mirrorFirstHubIcon = function (__s15param0) {
    this.firstHubIcon = __s15param0;
    if (__s15param0) {
      if (!this.visible) {
        this.show();
      }
      this.iconClip.doWhenLoaded(this.bindFunction(this.loadInnerIcon));
    } else if (this.visible) {
      this.hide();
    }
  };
  StatusIconOfferHub.prototype.loadInnerIcon = function (__s20param0 = null) {
    if (this.firstHubIcon) {
      if (this._innerIconClip) {
        var __s20local0 = this._innerIconClip.currentshownDisplayObject ? this._innerIconClip.currentshownDisplayObject.txt_label : null;
        if (__s20local0) {
          this.textFieldManager.unregisterTextField(__s20local0);
        }
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.icon.mc_icon);
        this._innerIconClip.dispose();
      }
      this._innerIconClip = __dep_export_ACastleStatusIcon.ACastleStatusIcon.getAsExternalClip(this.firstHubIcon.innerIconClassName);
      this._innerIconClip.doWhenLoaded(this.bindFunction(this.onInnerIconClipLoaded));
    }
  };
  StatusIconOfferHub.prototype.onInnerIconClipLoaded = function (__s25param0 = null) {
    if (this.firstHubIcon) {
      this.firstHubIcon.customizeInnerIconClip(__s25param0);
      __s1param0.prototype.onInnerIconClipLoaded.call(this, __s25param0);
      this.addAndResizeInnerIcon();
      this.updateCache();
    }
  };
  StatusIconOfferHub.prototype.onClick = function (__s28param0 = null) {
    if (__s28param0 && !__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s28param0)) {
      this.firstHubIcon.onClick();
    }
  };
  Object.defineProperty(StatusIconOfferHub.prototype, "iconCount", {
    get: function () {
      return this._iconCount;
    },
    set: function (__s33param0) {
      this._iconCount = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconOfferHub.prototype, "isAnyNewOffer", {
    get: function () {
      return this._isAnyNewOffer;
    },
    set: function (__s37param0) {
      this._isAnyNewOffer = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconOfferHub.prototype.updateCounter = function () {
    this.icon.icon_new.visible = this._isAnyNewOffer;
    this.icon.icon_count.visible = !this._isAnyNewOffer;
    if (this.itxt_count.textContentVO) {
      this.itxt_count.textContentVO.numberValue = this._iconCount;
    }
    this.updateCache();
  };
  return StatusIconOfferHub;
}(require("gge-module:export_AOfferHubBaseStatusIcon").AOfferHubBaseStatusIcon);
exports.StatusIconOfferHub = __s0local0;
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
