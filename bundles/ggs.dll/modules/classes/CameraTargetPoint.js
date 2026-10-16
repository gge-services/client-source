Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CameraTargetPoint(__s3param0, __s3param1, __s3param2, __s3param3 = 0, __s3param4 = 0, __s3param5 = true) {
    this.targetFollowSpeed = 500;
    this.targetFollowAcceleration = 100;
    this.targetFollowMaxSpeed = 1000;
    this.targetPoint = __s3param0;
    this.centerPoint = __s3param1;
    this.targetFollowSpeed = __s3param2;
    this.targetFollowAcceleration = __s3param3;
    this.targetFollowMaxSpeed = __s3param4;
    if (__s3param4 == 0) {
      this.targetFollowMaxSpeed = __s3param2;
    }
    this.isRelative = __s3param5;
  }
  CameraTargetPoint.prototype.getCorrectedTargetPoint = function (__s6param0) {
    if (this.isRelative) {
      return new __s0local0(this.centerPoint.x - this.targetPoint.x * __s6param0, this.centerPoint.y - this.targetPoint.y * __s6param0);
    } else {
      return this.targetPoint.clone();
    }
  };
  return CameraTargetPoint;
}();
exports.CameraTargetPoint = __s0local1;
