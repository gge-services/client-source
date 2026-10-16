Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function URLRequest(__s3param0, __s3param1 = null, __s3param2 = "GET") {
    this.url = __s3param0;
    this.data = __s3param1;
    this.method = __s3param2;
  }
  URLRequest.prototype.getURLWithParams = function () {
    if (!this.data || this.method.toUpperCase() !== "GET") {
      return this.url;
    }
    var __s5local0 = this.data instanceof URLSearchParams ? this.data.toString() : new URLSearchParams(this.data).toString();
    if (__s5local0.length > 0) {
      return this.url + (this.url.includes("?") ? "&" : "?") + __s5local0;
    } else {
      return this.url;
    }
  };
  return URLRequest;
}();
exports.URLRequest = __s0local0;
