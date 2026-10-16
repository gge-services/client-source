var __s0local0 = require("gge-module:exact_b99e01da6106991e").Buffer;
var __s0local1 = require("gge-module:export_Duplex").Transform;
function HashBase(__s1param0) {
  __s0local1.call(this);
  this._block = __s0local0.allocUnsafe(__s1param0);
  this._blockSize = __s1param0;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
}
require("gge-module:exact_76f5beb5408a546a")(HashBase, __s0local1);
HashBase.prototype._transform = function (__s3param0, __s3param1, __s3param2) {
  var __s3local0 = null;
  try {
    this.update(__s3param0, __s3param1);
  } catch (__s6local0) {
    __s3local0 = __s6local0;
  }
  __s3param2(__s3local0);
};
HashBase.prototype._flush = function (__s8param0) {
  var __s8local0 = null;
  try {
    this.push(this.digest());
  } catch (__s11local0) {
    __s8local0 = __s11local0;
  }
  __s8param0(__s8local0);
};
HashBase.prototype.update = function (__s13param0, __s13param1) {
  (function throwIfNotStringOrBuffer(__s15param0, __s15param1) {
    if (!__s0local0.isBuffer(__s15param0) && typeof __s15param0 != "string") {
      throw new TypeError(__s15param1 + " must be a string or a buffer");
    }
  })(__s13param0, "Data");
  if (this._finalized) {
    throw new Error("Digest already called");
  }
  if (!__s0local0.isBuffer(__s13param0)) {
    __s13param0 = __s0local0.from(__s13param0, __s13param1);
  }
  var __s13local0 = this._block;
  for (var __s13local1 = 0; this._blockOffset + __s13param0.length - __s13local1 >= this._blockSize;) {
    for (var __s13local2 = this._blockOffset; __s13local2 < this._blockSize;) {
      __s13local0[__s13local2++] = __s13param0[__s13local1++];
    }
    this._update();
    this._blockOffset = 0;
  }
  while (__s13local1 < __s13param0.length) {
    __s13local0[this._blockOffset++] = __s13param0[__s13local1++];
  }
  for (var __s13local3 = 0, __s13local4 = __s13param0.length * 8; __s13local4 > 0; ++__s13local3) {
    this._length[__s13local3] += __s13local4;
    if ((__s13local4 = this._length[__s13local3] / 4294967296 | 0) > 0) {
      this._length[__s13local3] -= __s13local4 * 4294967296;
    }
  }
  return this;
};
HashBase.prototype._update = function () {
  throw new Error("_update is not implemented");
};
HashBase.prototype.digest = function (__s31param0) {
  if (this._finalized) {
    throw new Error("Digest already called");
  }
  this._finalized = true;
  var __s31local0 = this._digest();
  if (__s31param0 !== undefined) {
    __s31local0 = __s31local0.toString(__s31param0);
  }
  this._block.fill(0);
  this._blockOffset = 0;
  for (var __s31local1 = 0; __s31local1 < 4; ++__s31local1) {
    this._length[__s31local1] = 0;
  }
  return __s31local0;
};
HashBase.prototype._digest = function () {
  throw new Error("_digest is not implemented");
};
module.exports = HashBase;
