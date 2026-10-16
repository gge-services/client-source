Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CachedTimer() {}
  CachedTimer.getCachedTimer = function () {
    if (CachedTimer.dirty || document.visibilityState == "hidden") {
      return CachedTimer.getFreshTimer();
    } else {
      return CachedTimer.cachedTimer;
    }
  };
  CachedTimer.clearCachedTimer = function () {
    CachedTimer.dirty = true;
  };
  CachedTimer.getFreshTimer = function () {
    CachedTimer.cachedTimer = Date.now();
    CachedTimer.dirty = false;
    return CachedTimer.cachedTimer;
  };
  CachedTimer.__initialize_static_members = function () {
    CachedTimer.cachedTimer = 0;
  };
  CachedTimer.dirty = true;
  return CachedTimer;
}();
exports.CachedTimer = __s0local0;
__s0local0.__initialize_static_members();
