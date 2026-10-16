module.exports = LongBits;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
function LongBits(__s1param0, __s1param1) {
  this.lo = __s1param0 >>> 0;
  this.hi = __s1param1 >>> 0;
}
var __s0local0 = LongBits.zero = new LongBits(0, 0);
__s0local0.toNumber = function () {
  return 0;
};
__s0local0.zzEncode = __s0local0.zzDecode = function () {
  return this;
};
__s0local0.length = function () {
  return 1;
};
var __s0local1 = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
LongBits.fromNumber = function fromNumber(__s9param0) {
  if (__s9param0 === 0) {
    return __s0local0;
  }
  var __s9local0 = __s9param0 < 0;
  if (__s9local0) {
    __s9param0 = -__s9param0;
  }
  var __s9local1 = __s9param0 >>> 0;
  var __s9local2 = (__s9param0 - __s9local1) / 4294967296 >>> 0;
  if (__s9local0) {
    __s9local2 = ~__s9local2 >>> 0;
    __s9local1 = ~__s9local1 >>> 0;
    if (++__s9local1 > 4294967295) {
      __s9local1 = 0;
      if (++__s9local2 > 4294967295) {
        __s9local2 = 0;
      }
    }
  }
  return new LongBits(__s9local1, __s9local2);
};
LongBits.from = function from(__s16param0) {
  if (typeof __s16param0 == "number") {
    return LongBits.fromNumber(__s16param0);
  }
  if (__dep_class_Buffer_allocUnsafe.isString(__s16param0)) {
    if (!__dep_class_Buffer_allocUnsafe.Long) {
      return LongBits.fromNumber(parseInt(__s16param0, 10));
    }
    __s16param0 = __dep_class_Buffer_allocUnsafe.Long.fromString(__s16param0);
  }
  if (__s16param0.low || __s16param0.high) {
    return new LongBits(__s16param0.low >>> 0, __s16param0.high >>> 0);
  } else {
    return __s0local0;
  }
};
LongBits.prototype.toNumber = function toNumber(__s23param0) {
  if (!__s23param0 && this.hi >>> 31) {
    var __s23local0 = 1 + ~this.lo >>> 0;
    var __s23local1 = ~this.hi >>> 0;
    if (!__s23local0) {
      __s23local1 = __s23local1 + 1 >>> 0;
    }
    return -(__s23local0 + __s23local1 * 4294967296);
  }
  return this.lo + this.hi * 4294967296;
};
LongBits.prototype.toLong = function toLong(__s27param0) {
  if (__dep_class_Buffer_allocUnsafe.Long) {
    return new __dep_class_Buffer_allocUnsafe.Long(this.lo | 0, this.hi | 0, Boolean(__s27param0));
  } else {
    return {
      low: this.lo | 0,
      high: this.hi | 0,
      unsigned: Boolean(__s27param0)
    };
  }
};
var __s0local2 = String.prototype.charCodeAt;
LongBits.fromHash = function fromHash(__s31param0) {
  if (__s31param0 === __s0local1) {
    return __s0local0;
  } else {
    return new LongBits((__s0local2.call(__s31param0, 0) | __s0local2.call(__s31param0, 1) << 8 | __s0local2.call(__s31param0, 2) << 16 | __s0local2.call(__s31param0, 3) << 24) >>> 0, (__s0local2.call(__s31param0, 4) | __s0local2.call(__s31param0, 5) << 8 | __s0local2.call(__s31param0, 6) << 16 | __s0local2.call(__s31param0, 7) << 24) >>> 0);
  }
};
LongBits.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
LongBits.prototype.zzEncode = function zzEncode() {
  var __s37local0 = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ __s37local0) >>> 0;
  this.lo = (this.lo << 1 ^ __s37local0) >>> 0;
  return this;
};
LongBits.prototype.zzDecode = function zzDecode() {
  var __s39local0 = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ __s39local0) >>> 0;
  this.hi = (this.hi >>> 1 ^ __s39local0) >>> 0;
  return this;
};
LongBits.prototype.length = function length() {
  var __s41local0 = this.lo;
  var __s41local1 = (this.lo >>> 28 | this.hi << 4) >>> 0;
  var __s41local2 = this.hi >>> 24;
  if (__s41local2 === 0) {
    if (__s41local1 === 0) {
      if (__s41local0 < 16384) {
        if (__s41local0 < 128) {
          return 1;
        } else {
          return 2;
        }
      } else if (__s41local0 < 2097152) {
        return 3;
      } else {
        return 4;
      }
    } else if (__s41local1 < 16384) {
      if (__s41local1 < 128) {
        return 5;
      } else {
        return 6;
      }
    } else if (__s41local1 < 2097152) {
      return 7;
    } else {
      return 8;
    }
  } else if (__s41local2 < 128) {
    return 9;
  } else {
    return 10;
  }
};
