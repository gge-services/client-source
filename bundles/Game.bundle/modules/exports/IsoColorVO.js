Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoColorVO(__s3param0, __s3param1, __s3param2) {
    this._backgroundColor = 0;
    this._shadowColor = 0;
    this._buildingGroundColor = 0;
    this._backgroundColor = __s3param0;
    this._shadowColor = __s3param1;
    this._buildingGroundColor = __s3param2;
  }
  Object.defineProperty(IsoColorVO.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoColorVO.prototype, "shadowColor", {
    get: function () {
      return this._shadowColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoColorVO.prototype, "buildingGroundColor", {
    get: function () {
      return this._buildingGroundColor;
    },
    enumerable: true,
    configurable: true
  });
  return IsoColorVO;
}();
exports.IsoColorVO = __s0local0;
