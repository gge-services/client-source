Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function ContinueLoadingTexturePackerClipSource() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ContinueLoadingTexturePackerClipSource, __s1param0);
  ContinueLoadingTexturePackerClipSource.prototype.loadFrame = function (__s5param0) {
    if (this._framesStrip.getFrame(__s5param0 - 1) == null) {
      console.error(" we trying to load clip source which are not initialized, not supported in HTML5");
    }
  };
  ContinueLoadingTexturePackerClipSource.prototype.convertClass = function (__s8param0, __s8param1 = null, __s8param2 = 0, __s8param3 = false) {
    this._colorData = __s8param1;
    this.debugColor = __s8param2;
    this.hasSubLayer = __s8param3;
    this._cacheId = this.sourceClass.toString();
    this.sourceBmp = new this.sourceClass();
    this.convertTexturePackerContainer(this.sourceBmp);
  };
  ContinueLoadingTexturePackerClipSource.prototype.convertTexturePackerContainer = function (__s10param0) {
    for (var __s10local0 = 0; __s10local0 < this.animData.length; __s10local0++) {
      this._framesStrip.addFrame(null);
    }
    return null;
  };
  ContinueLoadingTexturePackerClipSource.prototype.cleanUpLoadingData = function () {
    if (this.sourceBmp) {
      this.sourceBmp.dispose();
      this.sourceBmp = null;
    }
    this.animData = null;
  };
  return ContinueLoadingTexturePackerClipSource;
}(require("gge-module:class_ExternalTexturePackerClipSource").ExternalTexturePackerClipSource);
exports.ContinueLoadingTexturePackerClipSource = __s0local0;
