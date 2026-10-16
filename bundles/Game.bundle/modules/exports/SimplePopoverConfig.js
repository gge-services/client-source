Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  return function SimplePopoverConfig(__s3param0, __s3param1 = null, __s3param2 = null) {
    this.fadeInDuration = 0.5;
    this.fadeOutDuration = 1;
    this.waitDuration = 4;
    this.useClickArea = true;
    this.closeOnClick = true;
    this.assetPos = new __s0local0(0, 0);
    this.assetClipName = __s3param0;
    this.assetFileName = __s3param1 && __s3param1 != "" ? __s3param1 : __s3param0;
    if (__s3param2) {
      this.assetPos = __s3param2;
    }
  };
}();
exports.SimplePopoverConfig = __s0local1;
