Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SimpleRandom(__s3param0) {
    this.seed = 0;
    this.seed = __s3param0 ^ -554899859;
  }
  SimpleRandom.prototype.next = function () {
    var __s5local0 = this.seed;
    __s5local0 = this.toInt32(__s5local0, 16807) % 2147483647;
    __s5local0 = (this.toInt32(__s5local0, 14903917) + 11) % 2147483647;
    this.seed = __s5local0;
    return this.seed;
  };
  SimpleRandom.prototype.toInt32 = function (__s7param0, __s7param1) {
    var __s7local0 = __s7param0 * __s7param1;
    var __s7local1 = __s7local0 >> 0;
    var __s7local2 = __s7param0 % 255 * __s7param1 % 255 - __s7local0 % 255;
    if (Math.abs(__s7local2) > 3) {
      __s7local2 = Math.sign(__s7local2) * (Math.abs(__s7local2) - 255);
    }
    return __s7local1 += __s7local2;
  };
  SimpleRandom.prototype.nextInt = function (__s10param0) {
    return this.nextInt2() % __s10param0;
  };
  SimpleRandom.prototype.nextInt2 = function () {
    return Math.abs(this.next());
  };
  return SimpleRandom;
}();
exports.SimpleRandom = __s0local0;
