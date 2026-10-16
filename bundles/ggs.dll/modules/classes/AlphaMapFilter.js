createjs.Filter.prototype.equals = function (__s1param0) {
  return __s1param0 instanceof createjs.Filter && __s1param0.constructor.name === this.constructor.name;
};
createjs.BlurFilter.prototype.equals = function (__s3param0) {
  return __s3param0 instanceof createjs.BlurFilter && this.blurX === __s3param0.blurX && this.blurY === __s3param0.blurY && this.quality === __s3param0.quality;
};
createjs.ColorFilter.prototype.equals = function (__s5param0) {
  return __s5param0 instanceof createjs.ColorFilter && this.alphaMultiplier === __s5param0.alphaMultiplier && this.alphaOffset === __s5param0.alphaOffset && this.blueMultiplier === __s5param0.blueMultiplier && this.blueOffset === __s5param0.blueOffset && this.greenMultiplier === __s5param0.greenMultiplier && this.greenOffset === __s5param0.greenOffset && this.redMultiplier === __s5param0.redMultiplier && this.redOffset === __s5param0.redOffset;
};
createjs.ColorMatrixFilter.prototype.equals = function (__s7param0) {
  if (!(__s7param0 instanceof createjs.ColorMatrixFilter)) {
    return false;
  }
  if (this.matrix instanceof createjs.ColorMatrix || __s7param0.matrix instanceof createjs.ColorMatrix) {
    return false;
  }
  for (var __s7local0 = 0; __s7local0 < this.matrix.length; __s7local0++) {
    if (this.matrix[__s7local0] !== __s7param0.matrix[__s7local0]) {
      return false;
    }
  }
  return true;
};
createjs.AlphaMapFilter.prototype.equals = function (__s14param0) {
  return false;
};
createjs.AlphaMaskFilter.prototype.equals = function (__s16param0) {
  return false;
};
createjs.DropShadowFilter.prototype.equals = function (__s18param0) {
  return __s18param0 instanceof createjs.DropShadowFilter && this.angle === __s18param0.angle && this.blurX === __s18param0.blurX && this.blurY === __s18param0.blurY && this.color === __s18param0.color && this.quality === __s18param0.quality && this.distance === __s18param0.distance;
};
createjs.GlowFilter.prototype.equals = function (__s20param0) {
  return __s20param0 instanceof createjs.GlowFilter && this.strength === __s20param0.strength && this.blurX === __s20param0.blurX && this.blurY === __s20param0.blurY && this.color === __s20param0.color && this.quality === __s20param0.quality;
};
Object.defineProperty(createjs.Filter.prototype, "isScaled", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
