Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CollectableTransformVO(__s3param0 = null, __s3param1 = 1) {
    this._scale = 0;
    this._offset = __s3param0 || new __s0local0(0, 0);
    this._scale = __s3param1;
  }
  CollectableTransformVO.prototype.clone = function () {
    return new CollectableTransformVO(new __s0local0(this._offset.x, this._offset.y), this._scale);
  };
  Object.defineProperty(CollectableTransformVO.prototype, "offset", {
    get: function () {
      return this._offset;
    },
    set: function (__s9param0) {
      this._offset = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableTransformVO.prototype, "scale", {
    get: function () {
      return this._scale;
    },
    set: function (__s13param0) {
      this._scale = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableTransformVO;
}();
exports.CollectableTransformVO = __s0local1;
