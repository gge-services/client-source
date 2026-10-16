Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CircularItemDistributorProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = 1, __s3param5 = 0) {
    this._amountItems = 0;
    this._targetCircleRadius = 0;
    this._highlightAnimationDurationInSeconds = 0;
    this._animationDelay = 0;
    this._itemClass = __s3param0;
    this._amountItems = __s3param1;
    this._dispClassName = __s3param2;
    this._targetCircleRadius = __s3param3;
    this._highlightAnimationDurationInSeconds = __s3param4;
    this._animationDelay = __s3param5;
  }
  Object.defineProperty(CircularItemDistributorProperties.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "amountItems", {
    get: function () {
      return this._amountItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "targetCircleRadius", {
    get: function () {
      return this._targetCircleRadius;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "highlightAnimationDurationInSeconds", {
    get: function () {
      return this._highlightAnimationDurationInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "animationDelay", {
    get: function () {
      return this._animationDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "dispClassName", {
    get: function () {
      return this._dispClassName;
    },
    enumerable: true,
    configurable: true
  });
  return CircularItemDistributorProperties;
}();
exports.CircularItemDistributorProperties = __s0local0;
