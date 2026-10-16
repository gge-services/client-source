Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.Shape;
var __s0local2 = function (__s1param0) {
  function CastleWorldmapBitmap(__s3param0 = null, __s3param1 = "auto", __s3param2 = false) {
    var __s3local0 = this;
    __s3local0.sectorX = 0;
    __s3local0.sectorY = 0;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    var __s3local1 = new __s0local1();
    __s3local1.graphics.beginFill("#ff0000").drawRect(0, 0, __s3local0.width, __s3local0.height);
    __s3local0.hitArea = __s3local1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapBitmap, __s1param0);
  CastleWorldmapBitmap.prototype.draw = function (__s5param0, __s5param1) {
    if (!this.image) {
      return true;
    }
    var __s5local0 = this.image;
    return __s5local0.naturalWidth !== undefined && (__s5local0.naturalWidth === 0 || __s5local0.naturalHeight === 0) || __s5local0.naturalWidth === undefined && (__s5local0.width === 0 || __s5local0.height === 0) || __s1param0.prototype.draw.call(this, __s5param0, __s5param1);
  };
  return CastleWorldmapBitmap;
}(__s0local0);
exports.CastleWorldmapBitmap = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "Bitmap");
