Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_MovieClipHelper = require("gge-module:class_MovieClipHelper");
var __dep_class_BasicCustomCursor = require("gge-module:class_BasicCustomCursor");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = function (__s1param0) {
  function ExtraScreenMovieClip(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.disp = __s3param0;
    __s3local0.basicCustomCursor = __s3param1;
    __s3param0.addEventListener("click", __s3local0.bindFunction(__s3local0.onClick));
    __s3param0.addEventListener("mouseover", __s3local0.bindFunction(__s3local0.onCursorOver));
    __s3param0.addEventListener("mouseout", __s3local0.bindFunction(__s3local0.onCursorOut));
    __s3param0.addEventListener(__s0local1.ADDED_TO_STAGE, __s3local0.bindFunction(__s3local0.onDispAddedToStage));
    __s3param0.addEventListener(__s0local1.REMOVED_FROM_STAGE, __s3local0.bindFunction(__s3local0.onRemoveDisp));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ExtraScreenMovieClip, __s1param0);
  ExtraScreenMovieClip.prototype.onDispAddedToStage = function (__s5param0) {
    this.disp.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onDispAddedToStage));
    this.disp.stage.addEventListener(__s0local1.RESIZE, this.bindFunction(this.updatePosition));
    this.updatePos();
  };
  ExtraScreenMovieClip.prototype.onRemoveDisp = function (__s7param0) {
    this.disp.removeEventListener("click", this.bindFunction(this.onClick));
    this.disp.removeEventListener("mouseover", this.bindFunction(this.onCursorOver));
    this.disp.removeEventListener("mouseout", this.bindFunction(this.onCursorOut));
    this.disp.removeEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveDisp));
    this.disp.stage.removeEventListener(__s0local1.RESIZE, this.bindFunction(this.updatePosition));
    this.basicCustomCursor.setCursorType(__dep_class_BasicCustomCursor.BasicCustomCursor.CURSOR_ARROW);
    __dep_class_MovieClipHelper.MovieClipHelper.clearMovieClip(this.disp);
    this.disp = null;
  };
  ExtraScreenMovieClip.prototype.init = function () {};
  ExtraScreenMovieClip.prototype.onClick = function (__s11param0) {};
  ExtraScreenMovieClip.prototype.onCursorOver = function (__s13param0) {};
  ExtraScreenMovieClip.prototype.onCursorOut = function (__s15param0) {};
  ExtraScreenMovieClip.prototype.updatePosition = function (__s17param0) {
    this.updatePos();
  };
  ExtraScreenMovieClip.prototype.updatePos = function () {
    if (this.disp && this.disp.stage) {
      if (this.disp.stage.stageHeight / 600 < this.disp.stage.stageWidth / 800) {
        this.disp.scaleX = this.disp.scaleY = this.disp.stage.stageHeight / 600;
      } else {
        this.disp.scaleX = this.disp.scaleY = this.disp.stage.stageWidth / 800;
      }
      this.disp.x = (this.disp.stage.stageWidth - this.disp.scaleX * 800) * 0.5;
    }
  };
  return ExtraScreenMovieClip;
}(__s0local0);
exports.ExtraScreenMovieClip = __s0local2;
