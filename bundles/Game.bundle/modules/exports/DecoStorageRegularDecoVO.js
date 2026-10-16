Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function DecoStorageRegularDecoVO() {
    this._wodId = -1;
    this._amount = 0;
    this._newAmount = 0;
    this._localStorageAmount = 0;
  }
  DecoStorageRegularDecoVO.prototype.parseData = function (__s5param0) {
    var __s5local0 = __s5param0;
    if (__s5local0) {
      this._wodId = __dep_exact_f855840627e6e145.int(__s5local0[0]);
      this._amount = __dep_exact_f855840627e6e145.int(__s5local0[1]);
      this._newAmount = __dep_exact_f855840627e6e145.int(__s5local0[2]);
    }
  };
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    set: function (__s12param0) {
      this._amount = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "newAmount", {
    get: function () {
      return this._newAmount;
    },
    set: function (__s16param0) {
      this._newAmount = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "localStorageAmount", {
    get: function () {
      return this._localStorageAmount;
    },
    set: function (__s20param0) {
      this._localStorageAmount = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageRegularDecoVO;
}();
exports.DecoStorageRegularDecoVO = __s0local0;
