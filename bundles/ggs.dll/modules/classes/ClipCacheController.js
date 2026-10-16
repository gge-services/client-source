Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClipCacheController() {
    this.bitmapCache = new Map();
    this.globalCache = new Map();
    this.maxCacheItems = 5;
  }
  ClipCacheController.prototype.getCache = function (__s5param0, __s5param1 = null) {
    var __s5local0 = this.globalCache.get(__s5param0);
    if (!__s5local0 || __s5local0 && __s5local0.length < 1) {
      return null;
    } else if (__s5param1) {
      return this.getClipSourceByColorID(__s5local0, this.getColorIDByColorVector(__s5param1));
    } else {
      return __s5local0[0];
    }
  };
  ClipCacheController.prototype.getColorIDByColorVector = function (__s10param0 = null) {
    if (__s10param0 && __s10param0.length > 0) {
      var __s10local0 = "";
      for (var __s10local1 = 0; __s10local1 < __s10param0.length; __s10local1++) {
        __s10local0 += __s10param0[__s10local1].colorID;
      }
      return __s10local0;
    }
    return null;
  };
  ClipCacheController.prototype.addToCache = function (__s15param0, __s15param1) {
    var __s15local0 = this.globalCache.get(__s15param0);
    if (!__s15local0) {
      this.globalCache.set(__s15param0, __s15local0 = []);
    }
    if (this.getClipSourceByColorID(__s15local0, __s15param1.colorID) == null) {
      if (__s15local0.length >= this.maxCacheItems) {
        __s15local0.shift();
      }
      __s15local0.push(__s15param1);
    }
  };
  ClipCacheController.prototype.removeFromCache = function (__s20param0) {
    if (this.globalCache.get(__s20param0)) {
      this.globalCache.get(__s20param0);
      this.globalCache.delete(__s20param0);
    }
  };
  ClipCacheController.prototype.getClipSourceByColorID = function (__s23param0, __s23param1) {
    for (var __s23local0 = 0, __s23local1 = __s23param0; __s23local0 < __s23local1.length; __s23local0++) {
      var __s23local2 = __s23local1[__s23local0];
      if (__s23local2.colorID == __s23param1) {
        return __s23local2;
      }
    }
    return null;
  };
  ClipCacheController.prototype.dispose = function () {
    for (var __s28local0 = 0, __s28local1 = Array.from(this.globalCache.keys()); __s28local0 < __s28local1.length; __s28local0++) {
      var __s28local2 = __s28local1[__s28local0];
      for (var __s28local3 = 0, __s28local4 = this.globalCache.get(__s28local2); __s28local3 < __s28local4.length; __s28local3++) {
        var __s28local5 = __s28local4[__s28local3];
        if (__s28local5) {
          __s28local5.destroy();
        }
      }
    }
    this.globalCache = new Map();
  };
  return ClipCacheController;
}();
exports.ClipCacheController = __s0local0;
