// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 581
// Export: mapObjectsPool; preserved source: modules/webpack/exports/PoolManager.js
// Original canonical SHA-256: 37497497c5fe7e5567367ec9fbf04bcba61281f0149ab853395158fa4f09d750
var __s0local1 = function () {
  function PoolManager() {
    this.pool = new Map();
  }
  PoolManager.prototype.obtain = function (__s5param0, __s5param1) {
    if (!this.pool.has(__s5param0)) {
      this.pool.set(__s5param0, []);
    }
    if (this.pool.get(__s5param0).length > 0) {
      return this.pool.get(__s5param0).pop();
    } else {
      return __s5param1(__s5param0);
    }
  };
  PoolManager.prototype.recycle = function (__s10param0) {
    var __s10local0 = __s10param0.worldmapObjectVO.graphicClassName;
    if (!this.pool.has(__s10local0)) {
      __s0local0.warn("trying to recycle an item that was not in the pool", __s10local0);
      __s10param0.remove();
      return;
    }
    if (__s10param0.objectContainer) {
      __s10param0.objectContainer.asDisplayObject().scaleX = 1;
      __s10param0.objectContainer.asDisplayObject().scaleY = 1;
      this.pool.get(__s10local0).push(__s10param0.objectContainer);
      __s10param0.removeForPool();
      __s10param0.objectContainer = null;
    }
  };
  PoolManager.prototype.clearPool = function () {
    this.pool.clear();
  };
  PoolManager.prototype.getNestedSize = function () {
    var __s16local0 = Array.from(this.pool.values()).reduce(function (__s18param0, __s18param1) {
      return __s18param0 += __s18param1.length;
    }, 0);
    __s0local0.debug("Pool has currently " + this.pool.size + " Classes with a total of " + __s16local0 + " instances");
    return __s16local0;
  };
  return PoolManager;
}();
exports.mapObjectsPool = new __s0local1();
