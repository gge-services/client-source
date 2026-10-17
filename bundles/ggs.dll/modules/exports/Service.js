// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 90
// Export: Service; preserved source: modules/internal/exact_551693c13e511709.js
// Original canonical SHA-256: 936cdcaff7eb4be88cc25bb28f5f6fbc2ed9e856f54d0e0309cceadaa947404a
var __s0local1 = function () {
  function Service(__s3param0) {
    var __s3local0 = this;
    this.onload = function () {
      if (__s3local0.request.status >= 200 && __s3local0.request.status < 300 && __s3local0.request.responseText) {
        __s0local0.debug("SERVICE RESULT - SUCCESS");
        __s3local0.resolve(__s3local0.request.responseText);
      } else {
        __s0local0.debug("SERVICE RESULT - FAILURE:", __s3local0.request.status, __s3local0.request.responseText);
        __s3local0.reject(false);
      }
    };
    this.onerror = function (__s9param0) {
      __s0local0.debug("SERVICE RESULT - ERROR:", __s9param0);
      __s3local0.reject(__s9param0);
    };
    this.url = __s3param0;
    this.request = new XMLHttpRequest();
    this.request.open("GET", this.url, true);
    this.request.onload = this.onload;
    this.request.onerror = this.onerror;
  }
  Service.prototype.load = function () {
    var __s11local0 = this;
    return new Promise(function (__s13param0, __s13param1) {
      __s0local0.debug("Service.load: ", __s11local0.url);
      if (__s11local0.request) {
        __s11local0.resolve = __s13param0;
        __s11local0.reject = __s13param1;
        __s11local0.request.send();
        __s0local0.debug("Service.load: request.send");
      } else {
        __s13param1(false);
      }
    });
  };
  Service.prototype.dispose = function () {
    if (this.request) {
      this.request.onload = null;
      this.request.onerror = null;
      this.request = null;
    }
    this.resolve = null;
    this.reject = null;
  };
  return Service;
}();
exports.Service = __s0local1;
