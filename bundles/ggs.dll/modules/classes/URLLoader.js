Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.LoadQueue;
var __s0local1 = function () {
  function URLLoader(__s3param0 = null) {
    this.loadQueue = new __s0local0();
    this.request = __s3param0;
  }
  URLLoader.prototype.load = function (__s5param0) {
    if (!this.request) {
      throw new Error("this.request is not set");
    }
    this.loadQueue.loadFile(this.request.url);
  };
  URLLoader.prototype.close = function () {
    this.loadQueue.close();
  };
  Object.defineProperty(URLLoader.prototype, "dataFormat", {
    get: function () {
      return "";
    },
    set: function (__s12param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(URLLoader.prototype, "data", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  URLLoader.prototype.addEventListener = function (__s16param0, __s16param1) {
    return this.loadQueue.addEventListener(__s16param0, __s16param1);
  };
  URLLoader.prototype.removeEventListener = function (__s18param0, __s18param1) {
    return new Function();
  };
  return URLLoader;
}();
exports.URLLoader = __s0local1;
