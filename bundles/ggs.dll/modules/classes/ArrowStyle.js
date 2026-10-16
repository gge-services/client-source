Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  return function ArrowStyle(__s3param0 = null) {
    this.headWidth = -1;
    this.headLength = 10;
    this.shaftThickness = 2;
    this.shaftPosition = 0;
    this.shaftControlPosition = 0.5;
    this.shaftControlSize = 0.5;
    this.edgeControlPosition = 0.5;
    this.edgeControlSize = 0.5;
    if (__s3param0 != null) {
      for (var __s3local0 in __s3param0) {
        this[__s3local0] = __s3param0[__s3local0];
      }
    }
  };
}();
exports.ArrowStyle = __s0local0;
