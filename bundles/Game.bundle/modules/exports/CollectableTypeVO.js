Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function CollectableTypeVO(__s3param0 = null, __s3param1 = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE)) {
    this._id = 0;
    this._type = __s3param0 || __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    this._id = __s3param1;
  }
  CollectableTypeVO.prototype.initByCollectable = function (__s5param0, __s5param1 = true) {
    if (!__s5param0) {
      this._type = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
      if (__s5param1) {
        this._id = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE);
      }
    }
    this._type = __s5param0.itemType;
    this._id = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE);
    if (__s5param1 && "id" in __s5param0) {
      this._id = __dep_exact_f855840627e6e145.int(__s5param0.id);
    }
    return this;
  };
  CollectableTypeVO.prototype.hasType = function (__s10param0) {
    return !!__s10param0 && __s10param0.itemType == this.type && (!("id" in __s10param0) || this.id == -Number.MAX_VALUE || __s10param0.id == this.id);
  };
  CollectableTypeVO.prototype.isSameAs = function (__s12param0) {
    return this.type == __s12param0.type && this.id == __s12param0.id;
  };
  Object.defineProperty(CollectableTypeVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (__s16param0) {
      this._type = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableTypeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s20param0) {
      this._id = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableTypeVO;
}();
exports.CollectableTypeVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
