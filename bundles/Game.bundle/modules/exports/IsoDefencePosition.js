Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoDefencePosition(__s3param0 = null, __s3param1 = -1, __s3param2 = null, __s3param3 = null) {
    this._rot = -1;
    this._pos = __s3param0;
    this._rot = __s3param1;
    this._dimension = __s3param2;
    this._collisionPos = __s3param3;
  }
  IsoDefencePosition.prototype.collidesWith = function (__s5param0) {
    var __s5local0 = this.collisionPos ? this.collisionPos : this.pos;
    var __s5local1 = __s5param0.collisionPos ? __s5param0.collisionPos : __s5param0.pos;
    return __s5local0.x < __s5local1.x + __s5param0.dimension.x && __s5local0.x + this.dimension.x > __s5local1.x && __s5local0.y < __s5local1.y + __s5param0.dimension.y && __s5local0.y + this.dimension.y > __s5local1.y;
  };
  Object.defineProperty(IsoDefencePosition.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (__s9param0) {
      this._pos = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePosition.prototype, "dimension", {
    get: function () {
      return this._dimension;
    },
    set: function (__s13param0) {
      this._dimension = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePosition.prototype, "rot", {
    get: function () {
      return this._rot;
    },
    set: function (__s17param0) {
      this._rot = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePosition.prototype, "collisionPos", {
    get: function () {
      return this._collisionPos;
    },
    set: function (__s21param0) {
      this._collisionPos = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDefencePosition;
}();
exports.IsoDefencePosition = __s0local0;
