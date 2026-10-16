Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Branch(__s3param0 = null, __s3param1 = null, __s3param2 = null) {
    this._id = __s3param0;
    this._version = __s3param1;
    this._zones = __s3param2;
  }
  Object.defineProperty(Branch.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Branch.prototype, "version", {
    get: function () {
      return this._version;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Branch.prototype, "zones", {
    get: function () {
      return this._zones;
    },
    enumerable: true,
    configurable: true
  });
  return Branch;
}();
exports.Branch = __s0local0;
