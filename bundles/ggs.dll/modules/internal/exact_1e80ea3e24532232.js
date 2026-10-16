createjs.ColorFilter.prototype.applyFilter = function (__s1param0, __s1param1, __s1param2, __s1param3, __s1param4, __s1param5, __s1param6, __s1param7) {
  __s1param5 = __s1param5 || __s1param0;
  if (__s1param6 == null) {
    __s1param6 = __s1param1;
  }
  if (__s1param7 == null) {
    __s1param7 = __s1param2;
  }
  if (this.redMultiplier === 0 && this.blueMultiplier === 0 && this.greenMultiplier === 0 && this.alphaMultiplier === 1) {
    __s1param0.save();
    __s1param0.globalCompositeOperation = "xor";
    __s1param0.fillStyle = "rgb(" + this.redOffset + ", " + this.greenOffset + ", " + this.blueOffset + ")";
    __s1param0.fillRect(__s1param0._cacheOffsetX, __s1param0._cacheOffsetY, __s1param3, __s1param4);
    __s1param0.fillRect(__s1param0._cacheOffsetX, __s1param0._cacheOffsetY, __s1param3, __s1param4);
    __s1param0.restore();
    return true;
  }
  try {
    var __s1local0 = __s1param0.getImageData(__s1param1, __s1param2, __s1param3, __s1param4);
    return !!this._applyFilter(__s1local0) && (__s1param5.putImageData(__s1local0, __s1param6, __s1param7), true);
  } catch (__s7local0) {
    return false;
  }
};
