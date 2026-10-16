Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalizationJS.URLLoaderService");
var __s0local1 = function () {
  function URLLoaderService(__s3param0) {
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
  URLLoaderService.prototype.load = function () {
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
  URLLoaderService.prototype.dispose = function () {
    if (this.request) {
      this.request.onload = null;
      this.request.onerror = null;
      this.request = null;
    }
    this.resolve = null;
    this.reject = null;
  };
  return URLLoaderService;
}();
exports.URLLoaderService = __s0local1;
