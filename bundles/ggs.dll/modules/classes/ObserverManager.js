Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ObserverManager() {
    this.observerData = [];
  }
  ObserverManager.prototype.subscribeOnce = function (__s5param0) {
    for (var __s5local0 = this.observerData.length, __s5local1 = 0; __s5local1 < __s5local0; __s5local1++) {
      if (__s5param0 === this.observerData[__s5local1]) {
        return;
      }
    }
    this.observerData.push(__s5param0);
  };
  ObserverManager.prototype.subscribe = function (__s10param0) {
    this.observerData.push(__s10param0);
  };
  ObserverManager.prototype.unsubscribe = function (__s12param0) {
    for (var __s12local0 = this.observerData.length, __s12local1 = 0; __s12local1 < __s12local0; __s12local1++) {
      if (__s12param0 === this.observerData[__s12local1]) {
        this.observerData.splice(__s12local1, 1);
        break;
      }
    }
  };
  ObserverManager.prototype.unsubscribeAllObserver = function () {
    this.observerData = [];
  };
  ObserverManager.prototype.notify = function (__s19param0) {
    for (var __s19local0 = this.observerData.length - 1; __s19local0 >= 0; __s19local0--) {
      this.observerData[__s19local0].update(__s19param0);
    }
  };
  return ObserverManager;
}();
exports.ObserverManager = __s0local0;
