Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_GFXEvent = require("gge-module:export_GFXEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GFXData() {
    var __s3local0 = this;
    __s3local0._animationActive = false;
    __s3local0._isAlertFrameVisible = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._animationActive = __dep_export_CastleModel.CastleModel.localData.readAnimation();
    __s3local0._isAlertFrameVisible = __dep_export_CastleModel.CastleModel.localData.readAlertFrameVisibility();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GFXData, __s1param0);
  GFXData.prototype.applyAnimationABTest = function () {
    if (__dep_export_CastleModel.CastleModel.localData.isAnimationSet()) {
      this._animationActive = __dep_export_CastleModel.CastleModel.localData.readAnimation();
    } else {
      this._animationActive = false;
    }
    this.dispatchEvent(new __dep_export_GFXEvent.GFXEvent(__dep_export_GFXEvent.GFXEvent.ANIMATION_STATE_CHANGED));
  };
  Object.defineProperty(GFXData.prototype, "animationActive", {
    get: function () {
      return this._animationActive;
    },
    set: function (__s11param0) {
      this._animationActive = __s11param0;
      __dep_export_CastleModel.CastleModel.localData.saveAnimation(this._animationActive);
      this.dispatchEvent(new __dep_export_GFXEvent.GFXEvent(__dep_export_GFXEvent.GFXEvent.ANIMATION_STATE_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GFXData.prototype, "alertFrameVisible", {
    get: function () {
      return this._isAlertFrameVisible;
    },
    set: function (__s15param0) {
      this._isAlertFrameVisible = __s15param0;
      __dep_export_CastleModel.CastleModel.localData.saveAlertFrameVisibility(this._isAlertFrameVisible);
      this.dispatchEvent(new __dep_export_GFXEvent.GFXEvent(__dep_export_GFXEvent.GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  return GFXData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.GFXData = __s0local0;
