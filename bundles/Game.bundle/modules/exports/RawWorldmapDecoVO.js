Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RawWorldmapDecoVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._decoId = -1;
    this._width = 0;
    this._height = 0;
    this._decoId = __s3param0;
    this._type = __s3param1;
    this._width = __s3param2;
    this._height = __s3param3;
  }
  Object.defineProperty(RawWorldmapDecoVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RawWorldmapDecoVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RawWorldmapDecoVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RawWorldmapDecoVO.prototype, "decoId", {
    get: function () {
      return this._decoId;
    },
    enumerable: true,
    configurable: true
  });
  return RawWorldmapDecoVO;
}();
exports.RawWorldmapDecoVO = __s0local0;
