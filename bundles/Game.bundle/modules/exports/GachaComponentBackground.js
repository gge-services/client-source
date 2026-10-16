Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __dep_export_GachaEventMainDialog = require("gge-module:export_GachaEventMainDialog");
var __s0local0 = function (__s1param0) {
  function GachaComponentBackground(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentBackground, __s1param0);
  GachaComponentBackground.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.updateBackground();
  };
  GachaComponentBackground.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onUpdate));
  };
  GachaComponentBackground.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onUpdate));
  };
  GachaComponentBackground.prototype.onUpdate = function (__s11param0) {
    if (__s11param0.eventVO.eventId != this.getEventVO().eventId) {
      this.updateBackground();
    }
  };
  GachaComponentBackground.prototype.updateBackground = function () {
    var __s14local0 = this;
    var __s14local1 = this.getEventVO().assetName();
    var __s14local2 = this.getEventVO().getCurrentGachaVO().skinID;
    var __s14local3 = __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME + "_Elements_" + __s14local1;
    var __s14local4 = __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME + "_Background_" + __s14local1 + (__s14local2 ? "_" + __s14local2 : "");
    var __s14local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s14local4, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s14local3), null, 0, false);
    this._currentBG = __s14local5;
    __s14local5.doWhenLoaded(function () {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s14local0.disp);
      __s14local0.disp.addChild(__s14local0._currentBG);
    });
  };
  GachaComponentBackground.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentBackground;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentBackground = __s0local0;
