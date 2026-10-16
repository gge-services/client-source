Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractDisplayObjectClip = require("gge-module:class_AbstractDisplayObjectClip");
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __s0local0 = function (__s1param0) {
  function GoodgameDisplayObjectClip(__s3param0, __s3param1, __s3param2 = 24, __s3param3 = true, __s3param4 = false, __s3param5 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.animationManager = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.instance.animationManager;
    __s3local0.clipColor = __s3param1;
    __s3local0.targetFps = __s3param2;
    __s3local0._running = __s3param3;
    __s3local0.hasSubLayer = __s3param4;
    __s3local0.animationColorChange = __s3param5;
    __s3local0._startFrame = 1;
    __s3local0.initCurrentClip(__s3param0);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GoodgameDisplayObjectClip, __s1param0);
  GoodgameDisplayObjectClip.prototype.once = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {};
  GoodgameDisplayObjectClip.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
  };
  return GoodgameDisplayObjectClip;
}(__dep_class_AbstractDisplayObjectClip.AbstractDisplayObjectClip);
exports.GoodgameDisplayObjectClip = __s0local0;
