Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BoosterVO(__s3param0, __s3param1, __s3param2 = 0, __s3param3 = 0) {
    this._id = 0;
    this._duration = 0;
    this._level = 0;
    this._purchaseCount = 0;
    this._id = __s3param0;
    this._duration = __s3param1;
    this._level = __s3param2;
    this._purchaseCount = __s3param3;
  }
  BoosterVO.prototype.clone = function () {
    return new BoosterVO(this.id, this.duration, this.level, this.purchaseCount);
  };
  Object.defineProperty(BoosterVO.prototype, "isWoodBooster", {
    get: function () {
      return this.id == 0 || this.id == 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "isStoneBooster", {
    get: function () {
      return this.id == 1 || this.id == 4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "isFoodBooster", {
    get: function () {
      return this.id == 2 || this.id == 5;
    },
    enumerable: true,
    configurable: true
  });
  BoosterVO.prototype.isMarauder = function () {
    return this.id == 6;
  };
  BoosterVO.prototype.isTaxcollector = function () {
    return this.id == 8;
  };
  BoosterVO.prototype.isInstructor = function () {
    return this.id == 10;
  };
  Object.defineProperty(BoosterVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s21param0) {
      this._id = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (__s25param0) {
      this._duration = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (__s29param0) {
      this._level = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "purchaseCount", {
    get: function () {
      return this._purchaseCount;
    },
    set: function (__s33param0) {
      this._purchaseCount = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  return BoosterVO;
}();
exports.BoosterVO = __s0local0;
