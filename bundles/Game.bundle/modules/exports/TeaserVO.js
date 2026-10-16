Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TeaserVO() {
    this._id = 0;
    this._timestamp = 0;
  }
  TeaserVO.prototype.fillFromParamObject = function (__s5param0) {
    this.id = __dep_exact_f855840627e6e145.int(__s5param0.FID);
    this.timestamp = __s5param0.FTS;
  };
  Object.defineProperty(TeaserVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s9param0) {
      this._id = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TeaserVO.prototype, "timestamp", {
    get: function () {
      return this._timestamp;
    },
    set: function (__s13param0) {
      this._timestamp = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  return TeaserVO;
}();
exports.TeaserVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
