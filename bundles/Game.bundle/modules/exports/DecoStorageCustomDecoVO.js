Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function DecoStorageCustomDecoVO() {
    this._wodId = -1;
    this._customId = -1;
    this._decoValue = 0;
    this._isNew = false;
  }
  DecoStorageCustomDecoVO.prototype.parseData = function (__s5param0) {
    var __s5local0 = __s5param0;
    if (__s5local0) {
      this._wodId = __dep_exact_f855840627e6e145.int(__s5local0[0]);
      this._customId = __dep_exact_f855840627e6e145.int(__s5local0[1]);
      this._decoValue = __dep_exact_f855840627e6e145.int(__s5local0[2]);
      this._isNew = __s5local0[3] == 1;
    }
  };
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "customId", {
    get: function () {
      return this._customId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "decoValue", {
    get: function () {
      return this._decoValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    set: function (__s16param0) {
      this._isNew = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageCustomDecoVO;
}();
exports.DecoStorageCustomDecoVO = __s0local0;
