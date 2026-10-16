Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function LayerInfo(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5 = 0) {
    this._position = new __s0local0(__s3param0, __s3param1);
    this._scale = __s3param2;
    this._index = __s3param3;
    this._layerName = __s3param4;
    this._rotation = __s3param5;
  }
  Object.defineProperty(LayerInfo.prototype, "layerName", {
    get: function () {
      return this._layerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "position", {
    get: function () {
      return this._position;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "scale", {
    get: function () {
      return this._scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "rotation", {
    get: function () {
      return this._rotation;
    },
    enumerable: true,
    configurable: true
  });
  return LayerInfo;
}();
exports.LayerInfo = __s0local1;
