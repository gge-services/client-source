Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IntPoint(__s3param0 = 0, __s3param1 = 0) {
    this.x = __s3param0;
    this.y = __s3param1;
  }
  IntPoint.prototype.add = function (__s5param0) {
    this.x += __s5param0.x;
    this.y += __s5param0.y;
  };
  IntPoint.prototype.addNew = function (__s7param0) {
    return new IntPoint(this.x + __s7param0.x, this.y + __s7param0.y);
  };
  IntPoint.prototype.equals = function (__s9param0) {
    return this.x == __s9param0.x && this.y == __s9param0.y;
  };
  IntPoint.prototype.toString = function () {
    return "IntPoint(" + this.x + ", " + this.y + ")";
  };
  return IntPoint;
}();
exports.IntPoint = __s0local0;
