Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = function (__s1param0) {
  function Matrix() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(Matrix, __s1param0);
  Matrix.prototype.createGradientBox = function (__s5param0, __s5param1, __s5param2 = 0, __s5param3 = 0, __s5param4 = 0) {
    this.createBox(__s5param0 / 1638.4, __s5param1 / 1638.4, __s5param2, __s5param3 + __s5param0 / 2, __s5param4 + __s5param1 / 2);
  };
  Matrix.prototype.createBox = function (__s7param0, __s7param1, __s7param2 = 0, __s7param3 = 0, __s7param4 = 0) {
    if (__s7param2 !== 0) {
      var __s7local0 = Math.cos(__s7param2);
      var __s7local1 = Math.sin(__s7param2);
      this.a = __s7local0 * __s7param0;
      this.b = __s7local1 * __s7param1;
      this.c = -__s7local1 * __s7param0;
      this.d = __s7local0 * __s7param1;
    } else {
      this.a = __s7param0;
      this.b = 0;
      this.c = 0;
      this.d = __s7param1;
    }
    this.tx = __s7param3;
    this.ty = __s7param4;
  };
  Matrix.DEG_TO_RAD = Math.PI / 180;
  return Matrix;
}(createjs.Matrix2D);
exports.Matrix = __s0local0;
