Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function () {
  function FrameVO(__s3param0 = 0, __s3param1 = 0) {
    this.offsetX = __s3param0;
    this.offsetY = __s3param1;
  }
  FrameVO.prototype.loadFromParamObject = function (__s5param0) {
    var __s5local0 = String(__s5param0.filename);
    this._frameName = __s5local0.substr(0, __s5local0.length - 4);
    this._posOnSheet = new __s0local1(__s5param0.frame.x, __s5param0.frame.y, __s5param0.frame.w, __s5param0.frame.h);
    this._registrationPoint = new __s0local0(this.offsetX - __s5param0.spriteSourceSize.x, this.offsetY - __s5param0.spriteSourceSize.y);
  };
  Object.defineProperty(FrameVO.prototype, "frameName", {
    get: function () {
      return this._frameName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FrameVO.prototype, "posOnSheet", {
    get: function () {
      return this._posOnSheet;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FrameVO.prototype, "registrationPoint", {
    get: function () {
      return this._registrationPoint;
    },
    enumerable: true,
    configurable: true
  });
  return FrameVO;
}();
exports.FrameVO = __s0local2;
