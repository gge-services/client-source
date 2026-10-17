// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 477
// Export: assetsPool; preserved source: modules/classes/AssetsPool.js
// Original canonical SHA-256: a8e921da8501efce199eb60124d837446c057833543cf2df2331a6bf4091baf1
var __s0local1 = function () {
  function AssetsPool() {
    this.pool = new Map();
  }
  AssetsPool.prototype.allocate = function (__s5param0) {
    var __s5local0 = __s5param0.__fname || __s5param0.name;
    var __s5local1 = new __s5param0();
    if (!this.pool.has(__s5local0)) {
      this.pool.set(__s5local0, []);
    }
    this.pool.get(__s5local0).push(__s5local1);
  };
  AssetsPool.prototype.recycle = function (__s8param0) {
    var __s8local0 = __s8param0.constructor.__fname || __s8param0.constructor.name;
    if (this.pool.has(__s8local0)) {
      this.pool.get(__s8local0).push(__s8param0);
    } else {
      __s0local0.warn("trying to recycle an item that was not in the pool ", __s8local0);
    }
  };
  AssetsPool.prototype.obtain = function (__s12param0) {
    var __s12local0 = __s12param0.__fname || __s12param0.name;
    if (!this.hasAvailable(__s12local0)) {
      this.allocate(__s12param0);
    }
    return this.pool.get(__s12local0).shift();
  };
  AssetsPool.prototype.hasAvailable = function (__s15param0) {
    return this.pool.has(__s15param0) && this.pool.get(__s15param0).length > 0;
  };
  AssetsPool.prototype.clearPool = function () {
    this.pool.clear();
  };
  AssetsPool.prototype.getNestedSize = function () {
    var __s19local0 = Array.from(this.pool.values()).reduce(function (__s21param0, __s21param1) {
      return __s21param0 += __s21param1.length;
    }, 0);
    __s0local0.debug("Pool has currently " + this.pool.size + " Classes with a total of " + __s19local0 + " instances");
    return __s19local0;
  };
  return AssetsPool;
}();
exports.assetsPool = new __s0local1();
