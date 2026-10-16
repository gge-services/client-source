Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function PopoverVO() {
    this._queueId = -1;
    this._id = -1;
  }
  PopoverVO.prototype.parseServerObject = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__s5param0.ID);
    this._data = __s5param0.D;
  };
  Object.defineProperty(PopoverVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PopoverVO.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PopoverVO.prototype, "queueId", {
    get: function () {
      return this._queueId;
    },
    set: function (__s13param0) {
      this._queueId = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  return PopoverVO;
}();
exports.PopoverVO = __s0local0;
