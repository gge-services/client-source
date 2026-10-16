Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoMovementSpawnProbability(__s3param0, __s3param1) {
    this._from = 0;
    this._to = 1;
    this._from = __s3param0;
    this._to = __s3param1;
  }
  IsoMovementSpawnProbability.prototype.isInInterval = function (__s5param0) {
    return __s5param0 >= this.from && __s5param0 <= this.to;
  };
  Object.defineProperty(IsoMovementSpawnProbability.prototype, "from", {
    get: function () {
      return this._from;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementSpawnProbability.prototype, "to", {
    get: function () {
      return this._to;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementSpawnProbability;
}();
exports.IsoMovementSpawnProbability = __s0local0;
