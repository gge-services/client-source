Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DecoStorageUniqueDecoVO() {
    this._wodId = -1;
    this._uniqueId = -1;
    this._fusionXP = 0;
    this._isNew = false;
  }
  DecoStorageUniqueDecoVO.prototype.parseData = function (__s5param0) {
    var __s5local0 = __s5param0;
    if (__s5local0) {
      this._wodId = __dep_exact_f855840627e6e145.int(__s5local0[0]);
      this._uniqueId = __dep_exact_f855840627e6e145.int(__s5local0[1]);
      this._fusionXP = __dep_exact_f855840627e6e145.int(__s5local0[2]);
      this._isNew = __s5local0[3] == 1;
    }
  };
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "uniqueId", {
    get: function () {
      return this._uniqueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "fusionXP", {
    get: function () {
      return this._fusionXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    set: function (__s16param0) {
      this._isNew = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageUniqueDecoVO;
}();
exports.DecoStorageUniqueDecoVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
