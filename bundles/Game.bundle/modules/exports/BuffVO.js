Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BuffVO(__s3param0, __s3param1 = -1) {
    this._buffLevel = 0;
    this._endTime = 0;
    this._buffLevel = __s3param0;
    this._endTime = __s3param1;
  }
  Object.defineProperty(BuffVO.prototype, "level", {
    get: function () {
      if (this.isTemporary && this.remainingDuration <= 0) {
        return 0;
      } else {
        return this._buffLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuffVO.prototype, "remainingDuration", {
    get: function () {
      if (this.isTemporary) {
        return Math.max(0, this._endTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000);
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuffVO.prototype, "isTemporary", {
    get: function () {
      return this._endTime != -1;
    },
    enumerable: true,
    configurable: true
  });
  return BuffVO;
}();
exports.BuffVO = __s0local0;
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
