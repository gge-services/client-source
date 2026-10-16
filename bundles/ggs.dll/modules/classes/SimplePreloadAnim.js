Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Container;
var __s0local2 = function (__s1param0) {
  function SimplePreloadAnim() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.addEventListener(__s0local0.ADDED_TO_STAGE, __s3local0.bindFunction(__s3local0.onAddedToStage));
    __s3local0.addEventListener(__s0local0.REMOVED_FROM_STAGE, __s3local0.bindFunction(__s3local0.onRemovedFromStage));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SimplePreloadAnim, __s1param0);
  SimplePreloadAnim.prototype.onAddedToStage = function (__s5param0) {
    if (!this._ggsLogo) {
      this._ggsLogo = new __s0local1();
      this.addChild(this._ggsLogo);
      this.resizeLogo();
      this.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updatePreloadAnim));
      this.stage.addEventListener(__s0local0.RESIZE, this.bindFunction(this.resizeLogo));
    }
  };
  SimplePreloadAnim.prototype.onRemovedFromStage = function (__s8param0) {
    if (this._ggsLogo) {
      this.removeChild(this._ggsLogo);
      this._ggsLogo = null;
      this.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updatePreloadAnim));
      this.stage.removeEventListener(__s0local0.RESIZE, this.bindFunction(this.resizeLogo));
    }
  };
  SimplePreloadAnim.prototype.updatePreloadAnim = function (__s11param0) {
    if (this._ggsLogo) {
      this._ggsLogo.spinner.rotation += 5;
    }
  };
  SimplePreloadAnim.prototype.resizeLogo = function (__s14param0 = null) {
    if (this._ggsLogo) {
      this._ggsLogo.x = this.stage.stageWidth / 2;
      this._ggsLogo.y = this.stage.stageHeight / 2;
      this._ggsLogo.bg.width = this.stage.stageWidth;
      this._ggsLogo.bg.height = this.stage.stageHeight;
    }
  };
  return SimplePreloadAnim;
}(__s0local1);
exports.SimplePreloadAnim = __s0local2;
