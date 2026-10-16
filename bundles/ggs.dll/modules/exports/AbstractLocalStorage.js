Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AbstractLocalStorage(__s3param0) {
    if (__s3param0 === undefined || __s3param0 === null || __s3param0 === "") {
      throw new Error("Section cannot be null or empty");
    }
    this._section = __s3param0;
  }
  AbstractLocalStorage.prototype.hasAttribute = function (__s6param0) {
    return this._data.hasOwnProperty(__s6param0);
  };
  AbstractLocalStorage.prototype.getAttribute = function (__s8param0) {
    return this._data[__s8param0];
  };
  AbstractLocalStorage.prototype.setAttribute = function (__s10param0, __s10param1) {
    this._data[__s10param0] = __s10param1;
  };
  AbstractLocalStorage.prototype.deleteAttribute = function (__s12param0) {
    if (this.hasAttribute(__s12param0)) {
      delete this._data[__s12param0];
    }
  };
  AbstractLocalStorage.prototype.getAttributes = function () {
    var __s15local0 = [];
    for (var __s15local1 in this._data) {
      if (this._data[__s15local1] !== null) {
        __s15local0.push(__s15local1);
      }
    }
    return __s15local0;
  };
  return AbstractLocalStorage;
}();
exports.AbstractLocalStorage = __s0local0;
