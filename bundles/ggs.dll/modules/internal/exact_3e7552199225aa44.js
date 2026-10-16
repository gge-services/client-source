var __dep_exact_76f5beb5408a546a = require("gge-module:exact_76f5beb5408a546a");
var __dep_class_HashBase = require("gge-module:class_HashBase");
var __s0local0 = require("gge-module:exact_b99e01da6106991e").Buffer;
var __s0local1 = new Array(16);
function MD5() {
  __dep_class_HashBase.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
}
function rotl(__s3param0, __s3param1) {
  return __s3param0 << __s3param1 | __s3param0 >>> 32 - __s3param1;
}
function fnF(__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5, __s5param6) {
  return rotl(__s5param0 + (__s5param1 & __s5param2 | ~__s5param1 & __s5param3) + __s5param4 + __s5param5 | 0, __s5param6) + __s5param1 | 0;
}
function fnG(__s7param0, __s7param1, __s7param2, __s7param3, __s7param4, __s7param5, __s7param6) {
  return rotl(__s7param0 + (__s7param1 & __s7param3 | __s7param2 & ~__s7param3) + __s7param4 + __s7param5 | 0, __s7param6) + __s7param1 | 0;
}
function fnH(__s9param0, __s9param1, __s9param2, __s9param3, __s9param4, __s9param5, __s9param6) {
  return rotl(__s9param0 + (__s9param1 ^ __s9param2 ^ __s9param3) + __s9param4 + __s9param5 | 0, __s9param6) + __s9param1 | 0;
}
function fnI(__s11param0, __s11param1, __s11param2, __s11param3, __s11param4, __s11param5, __s11param6) {
  return rotl(__s11param0 + (__s11param2 ^ (__s11param1 | ~__s11param3)) + __s11param4 + __s11param5 | 0, __s11param6) + __s11param1 | 0;
}
__dep_exact_76f5beb5408a546a(MD5, __dep_class_HashBase);
MD5.prototype._update = function () {
  var __s13local0 = __s0local1;
  for (var __s13local1 = 0; __s13local1 < 16; ++__s13local1) {
    __s13local0[__s13local1] = this._block.readInt32LE(__s13local1 * 4);
  }
  var __s13local2 = this._a;
  var __s13local3 = this._b;
  var __s13local4 = this._c;
  var __s13local5 = this._d;
  __s13local3 = fnI(__s13local3 = fnI(__s13local3 = fnI(__s13local3 = fnI(__s13local3 = fnH(__s13local3 = fnH(__s13local3 = fnH(__s13local3 = fnH(__s13local3 = fnG(__s13local3 = fnG(__s13local3 = fnG(__s13local3 = fnG(__s13local3 = fnF(__s13local3 = fnF(__s13local3 = fnF(__s13local3 = fnF(__s13local3, __s13local4 = fnF(__s13local4, __s13local5 = fnF(__s13local5, __s13local2 = fnF(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[0], 3614090360, 7), __s13local3, __s13local4, __s13local0[1], 3905402710, 12), __s13local2, __s13local3, __s13local0[2], 606105819, 17), __s13local5, __s13local2, __s13local0[3], 3250441966, 22), __s13local4 = fnF(__s13local4, __s13local5 = fnF(__s13local5, __s13local2 = fnF(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[4], 4118548399, 7), __s13local3, __s13local4, __s13local0[5], 1200080426, 12), __s13local2, __s13local3, __s13local0[6], 2821735955, 17), __s13local5, __s13local2, __s13local0[7], 4249261313, 22), __s13local4 = fnF(__s13local4, __s13local5 = fnF(__s13local5, __s13local2 = fnF(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[8], 1770035416, 7), __s13local3, __s13local4, __s13local0[9], 2336552879, 12), __s13local2, __s13local3, __s13local0[10], 4294925233, 17), __s13local5, __s13local2, __s13local0[11], 2304563134, 22), __s13local4 = fnF(__s13local4, __s13local5 = fnF(__s13local5, __s13local2 = fnF(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[12], 1804603682, 7), __s13local3, __s13local4, __s13local0[13], 4254626195, 12), __s13local2, __s13local3, __s13local0[14], 2792965006, 17), __s13local5, __s13local2, __s13local0[15], 1236535329, 22), __s13local4 = fnG(__s13local4, __s13local5 = fnG(__s13local5, __s13local2 = fnG(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[1], 4129170786, 5), __s13local3, __s13local4, __s13local0[6], 3225465664, 9), __s13local2, __s13local3, __s13local0[11], 643717713, 14), __s13local5, __s13local2, __s13local0[0], 3921069994, 20), __s13local4 = fnG(__s13local4, __s13local5 = fnG(__s13local5, __s13local2 = fnG(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[5], 3593408605, 5), __s13local3, __s13local4, __s13local0[10], 38016083, 9), __s13local2, __s13local3, __s13local0[15], 3634488961, 14), __s13local5, __s13local2, __s13local0[4], 3889429448, 20), __s13local4 = fnG(__s13local4, __s13local5 = fnG(__s13local5, __s13local2 = fnG(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[9], 568446438, 5), __s13local3, __s13local4, __s13local0[14], 3275163606, 9), __s13local2, __s13local3, __s13local0[3], 4107603335, 14), __s13local5, __s13local2, __s13local0[8], 1163531501, 20), __s13local4 = fnG(__s13local4, __s13local5 = fnG(__s13local5, __s13local2 = fnG(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[13], 2850285829, 5), __s13local3, __s13local4, __s13local0[2], 4243563512, 9), __s13local2, __s13local3, __s13local0[7], 1735328473, 14), __s13local5, __s13local2, __s13local0[12], 2368359562, 20), __s13local4 = fnH(__s13local4, __s13local5 = fnH(__s13local5, __s13local2 = fnH(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[5], 4294588738, 4), __s13local3, __s13local4, __s13local0[8], 2272392833, 11), __s13local2, __s13local3, __s13local0[11], 1839030562, 16), __s13local5, __s13local2, __s13local0[14], 4259657740, 23), __s13local4 = fnH(__s13local4, __s13local5 = fnH(__s13local5, __s13local2 = fnH(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[1], 2763975236, 4), __s13local3, __s13local4, __s13local0[4], 1272893353, 11), __s13local2, __s13local3, __s13local0[7], 4139469664, 16), __s13local5, __s13local2, __s13local0[10], 3200236656, 23), __s13local4 = fnH(__s13local4, __s13local5 = fnH(__s13local5, __s13local2 = fnH(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[13], 681279174, 4), __s13local3, __s13local4, __s13local0[0], 3936430074, 11), __s13local2, __s13local3, __s13local0[3], 3572445317, 16), __s13local5, __s13local2, __s13local0[6], 76029189, 23), __s13local4 = fnH(__s13local4, __s13local5 = fnH(__s13local5, __s13local2 = fnH(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[9], 3654602809, 4), __s13local3, __s13local4, __s13local0[12], 3873151461, 11), __s13local2, __s13local3, __s13local0[15], 530742520, 16), __s13local5, __s13local2, __s13local0[2], 3299628645, 23), __s13local4 = fnI(__s13local4, __s13local5 = fnI(__s13local5, __s13local2 = fnI(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[0], 4096336452, 6), __s13local3, __s13local4, __s13local0[7], 1126891415, 10), __s13local2, __s13local3, __s13local0[14], 2878612391, 15), __s13local5, __s13local2, __s13local0[5], 4237533241, 21), __s13local4 = fnI(__s13local4, __s13local5 = fnI(__s13local5, __s13local2 = fnI(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[12], 1700485571, 6), __s13local3, __s13local4, __s13local0[3], 2399980690, 10), __s13local2, __s13local3, __s13local0[10], 4293915773, 15), __s13local5, __s13local2, __s13local0[1], 2240044497, 21), __s13local4 = fnI(__s13local4, __s13local5 = fnI(__s13local5, __s13local2 = fnI(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[8], 1873313359, 6), __s13local3, __s13local4, __s13local0[15], 4264355552, 10), __s13local2, __s13local3, __s13local0[6], 2734768916, 15), __s13local5, __s13local2, __s13local0[13], 1309151649, 21), __s13local4 = fnI(__s13local4, __s13local5 = fnI(__s13local5, __s13local2 = fnI(__s13local2, __s13local3, __s13local4, __s13local5, __s13local0[4], 4149444226, 6), __s13local3, __s13local4, __s13local0[11], 3174756917, 10), __s13local2, __s13local3, __s13local0[2], 718787259, 15), __s13local5, __s13local2, __s13local0[9], 3951481745, 21);
  this._a = this._a + __s13local2 | 0;
  this._b = this._b + __s13local3 | 0;
  this._c = this._c + __s13local4 | 0;
  this._d = this._d + __s13local5 | 0;
};
MD5.prototype._digest = function () {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  var __s17local0 = __s0local0.allocUnsafe(16);
  __s17local0.writeInt32LE(this._a, 0);
  __s17local0.writeInt32LE(this._b, 4);
  __s17local0.writeInt32LE(this._c, 8);
  __s17local0.writeInt32LE(this._d, 12);
  return __s17local0;
};
module.exports = MD5;
