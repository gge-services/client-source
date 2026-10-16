Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __dep_export_GachaEventMainDialog = require("gge-module:export_GachaEventMainDialog");
var __s0local0 = function (__s1param0) {
  function GachaComponentAnimation(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentAnimation, __s1param0);
  GachaComponentAnimation.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    var __s5local0 = this.getEventVO().assetName();
    var __s5local1 = this.getEventVO().getCurrentGachaVO().skinID;
    var __s5local2 = __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME + "_Animation_Idle_" + __s5local0 + (__s5local1 ? "_" + __s5local1 : "");
    var __s5local3 = __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME + "_Animation_Active_" + __s5local0 + (__s5local1 ? "_" + __s5local1 : "");
    var __s5local4 = this.getEventVO().animationFPS;
    var __s5local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local2, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local2), null, __s5local4, true);
    var __s5local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local3, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local3), null, __s5local4, true);
    this._idleAnimation = __s5local5;
    this._activeAnimation = __s5local6;
    this._idleAnimation.doWhenLoaded(this.bindFunction(this.onLoadComplete));
    var __s5local7 = this.getEventVO().animationPos;
    var __s5local8 = this.getEventVO().animationScale;
    this._idleAnimation.scaleX = this._idleAnimation.scaleY = __s5local8;
    this._activeAnimation.scaleX = this._activeAnimation.scaleY = __s5local8;
    this._idleAnimation.x = __s5local7.x;
    this._idleAnimation.y = __s5local7.y;
    this._activeAnimation.x = __s5local7.x;
    this._activeAnimation.y = __s5local7.y;
    this._idleAnimation.visible = true;
    this._activeAnimation.visible = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp);
    this.disp.addChild(this._idleAnimation);
    this.disp.addChild(this._activeAnimation);
  };
  GachaComponentAnimation.prototype.onLoadComplete = function (__s7param0 = null) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.playAllMovies(this._idleAnimation);
  };
  GachaComponentAnimation.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
  };
  GachaComponentAnimation.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onSpin));
  };
  GachaComponentAnimation.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    if (this._activeAnimation) {
      this._activeAnimation.stop();
      this._activeAnimation.onLoopEnd.removeAll();
    }
  };
  GachaComponentAnimation.prototype.onSpin = function (__s16param0) {
    if (this.getEventVO().eventId == __s16param0.eventVO.eventId) {
      this._idleAnimation.visible = false;
      this._activeAnimation.visible = true;
      this._idleAnimation.gotoAndStop(1);
      if (this._activeAnimation.numFrames > 1) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.goAndPlayAllMovies(this._activeAnimation, 1, -1, 1);
        this._activeAnimation.onLoopEnd.addOnce(this.bindFunction(this.onSpinEnd));
      } else {
        this.onSpinEnd();
      }
    }
  };
  GachaComponentAnimation.prototype.onSpinEnd = function () {
    this._idleAnimation.visible = true;
    this._activeAnimation.visible = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.playAllMovies(this._idleAnimation);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.stopAllMoviesGotoFrameOne(this._activeAnimation);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.SPIN_ANIMATION_COMPLETE, this.getEventVO()));
  };
  GachaComponentAnimation.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentAnimation;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentAnimation = __s0local0;
