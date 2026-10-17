// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 586
// Export: URLLoaderService; preserved source: modules/internal/exact_641ec3cad9f04760.js
// Original canonical SHA-256: 60503e23b9ffcbbf15d0a7ea81dccbc0a2f21193aaaf210fd35f379cac365eb2
var __s0local1 = function () {
  function URLLoaderService(__s3param0) {
    var __s3local0 = this;
    this.urlRequest = __s3param0;
    this.onload = function () {
      if (!__s3local0.request || !__s3local0.resolve || !__s3local0.reject) {
        throw new Error("Already disposed");
      }
      if (__s3local0.request.status >= 200 && __s3local0.request.status < 300) {
        __s0local0.debug("SUCCESS: ", __s3local0.request.responseURL, __s3local0.request.status);
        __s3local0.resolve(__s3local0.request.responseText);
      } else {
        __s0local0.warn("FAILURE:", __s3local0.request.responseURL, __s3local0.request.status, __s3local0.request.responseText);
        __s3local0.reject(false);
      }
    };
    this.onerror = function (__s10param0) {
      if (!__s3local0.reject) {
        throw new Error("Already disposed");
      }
      __s0local0.error("ERROR:", __s10param0);
      __s3local0.reject(__s10param0);
    };
    this.request = new XMLHttpRequest();
    this.request.open(this.urlRequest.method, this.urlRequest.url, true);
    this.request.onload = this.onload;
    this.request.onerror = this.onerror;
  }
  URLLoaderService.prototype.load = function () {
    var __s13local0 = this;
    var __s13local1 = this.request;
    if (__s13local1) {
      return new Promise(function (__s16param0, __s16param1) {
        __s0local0.debug("URLLoaderService.load: " + __s13local0.urlRequest.method + " request.sent to " + __s13local0.urlRequest.url);
        __s13local1.send(__s13local0.urlRequest.data);
        __s13local0.resolve = __s16param0;
        __s13local0.reject = __s16param1;
      });
    } else {
      return Promise.reject(new Error("this.request was already disposed (undefined)"));
    }
  };
  URLLoaderService.prototype.dispose = function () {
    if (this.request) {
      this.request.onload = function () {};
      this.request.onerror = function () {};
      this.request = undefined;
    }
    this.resolve = undefined;
    this.reject = undefined;
  };
  return URLLoaderService;
}();
exports.URLLoaderService = __s0local1;
