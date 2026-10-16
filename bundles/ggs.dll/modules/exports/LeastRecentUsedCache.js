Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LeastRecentUsedCache(__s3param0 = 300) {
    this.maxEntries = __s3param0;
    this.values = new Map();
  }
  LeastRecentUsedCache.prototype.get = function (__s5param0) {
    var __s5local0;
    if (this.values.has(__s5param0)) {
      __s5local0 = this.values.get(__s5param0);
      this.values.delete(__s5param0);
      this.values.set(__s5param0, __s5local0);
      return __s5local0;
    }
  };
  LeastRecentUsedCache.prototype.put = function (__s8param0, __s8param1) {
    if (this.values.size >= this.maxEntries) {
      var __s8local0 = this.values.keys().next().value;
      this.values.delete(__s8local0);
    }
    if (this.values.get(__s8param0) === undefined) {
      this.values.set(__s8param0, __s8param1);
    }
  };
  LeastRecentUsedCache.prototype.clear = function () {
    this.values.clear();
  };
  return LeastRecentUsedCache;
}();
exports.LeastRecentUsedCache = __s0local0;
