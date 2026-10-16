module.exports = Reader;
var __s0local0;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
var __s0local1 = __dep_class_Buffer_allocUnsafe.LongBits;
var __s0local2 = __dep_class_Buffer_allocUnsafe.utf8;
function indexOutOfRange(__s1param0, __s1param1) {
  return RangeError("index out of range: " + __s1param0.pos + " + " + (__s1param1 || 1) + " > " + __s1param0.len);
}
function Reader(__s3param0) {
  this.buf = __s3param0;
  this.pos = 0;
  this.len = __s3param0.length;
}
var __s0local3 = typeof Uint8Array != "undefined" ? function create_typed_array(__s5param0) {
  if (__s5param0 instanceof Uint8Array || Array.isArray(__s5param0)) {
    return new Reader(__s5param0);
  }
  throw Error("illegal buffer");
} : function create_array(__s8param0) {
  if (Array.isArray(__s8param0)) {
    return new Reader(__s8param0);
  }
  throw Error("illegal buffer");
};
function readLongVarint() {
  var __s11local0 = new __s0local1(0, 0);
  var __s11local1 = 0;
  if (!(this.len - this.pos > 4)) {
    for (; __s11local1 < 3; ++__s11local1) {
      if (this.pos >= this.len) {
        throw indexOutOfRange(this);
      }
      __s11local0.lo = (__s11local0.lo | (this.buf[this.pos] & 127) << __s11local1 * 7) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return __s11local0;
      }
    }
    __s11local0.lo = (__s11local0.lo | (this.buf[this.pos++] & 127) << __s11local1 * 7) >>> 0;
    return __s11local0;
  }
  for (; __s11local1 < 4; ++__s11local1) {
    __s11local0.lo = (__s11local0.lo | (this.buf[this.pos] & 127) << __s11local1 * 7) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return __s11local0;
    }
  }
  __s11local0.lo = (__s11local0.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
  __s11local0.hi = (__s11local0.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
  if (this.buf[this.pos++] < 128) {
    return __s11local0;
  }
  __s11local1 = 0;
  if (this.len - this.pos > 4) {
    for (; __s11local1 < 5; ++__s11local1) {
      __s11local0.hi = (__s11local0.hi | (this.buf[this.pos] & 127) << __s11local1 * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return __s11local0;
      }
    }
  } else {
    for (; __s11local1 < 5; ++__s11local1) {
      if (this.pos >= this.len) {
        throw indexOutOfRange(this);
      }
      __s11local0.hi = (__s11local0.hi | (this.buf[this.pos] & 127) << __s11local1 * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return __s11local0;
      }
    }
  }
  throw Error("invalid varint encoding");
}
function readFixed32_end(__s31param0, __s31param1) {
  return (__s31param0[__s31param1 - 4] | __s31param0[__s31param1 - 3] << 8 | __s31param0[__s31param1 - 2] << 16 | __s31param0[__s31param1 - 1] << 24) >>> 0;
}
function readFixed64() {
  if (this.pos + 8 > this.len) {
    throw indexOutOfRange(this, 8);
  }
  return new __s0local1(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
Reader.create = __dep_class_Buffer_allocUnsafe.Buffer ? function create_buffer_setup(__s36param0) {
  return (Reader.create = function create_buffer(__s38param0) {
    if (__dep_class_Buffer_allocUnsafe.Buffer.isBuffer(__s38param0)) {
      return new __s0local0(__s38param0);
    } else {
      return __s0local3(__s38param0);
    }
  })(__s36param0);
} : __s0local3;
Reader.prototype._slice = __dep_class_Buffer_allocUnsafe.Array.prototype.subarray || __dep_class_Buffer_allocUnsafe.Array.prototype.slice;
Reader.prototype.uint32 = function read_uint32_setup() {
  var __s42local0 = 4294967295;
  return function read_uint32() {
    __s42local0 = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return __s42local0;
    }
    __s42local0 = (__s42local0 | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return __s42local0;
    }
    __s42local0 = (__s42local0 | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return __s42local0;
    }
    __s42local0 = (__s42local0 | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return __s42local0;
    }
    __s42local0 = (__s42local0 | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return __s42local0;
    }
    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }
    return __s42local0;
  };
}();
Reader.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};
Reader.prototype.sint32 = function read_sint32() {
  var __s54local0 = this.uint32();
  return __s54local0 >>> 1 ^ -(__s54local0 & 1) | 0;
};
Reader.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};
Reader.prototype.fixed32 = function read_fixed32() {
  if (this.pos + 4 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  return readFixed32_end(this.buf, this.pos += 4);
};
Reader.prototype.sfixed32 = function read_sfixed32() {
  if (this.pos + 4 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
Reader.prototype.float = function read_float() {
  if (this.pos + 4 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  var __s64local0 = __dep_class_Buffer_allocUnsafe.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return __s64local0;
};
Reader.prototype.double = function read_double() {
  if (this.pos + 8 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  var __s67local0 = __dep_class_Buffer_allocUnsafe.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return __s67local0;
};
Reader.prototype.bytes = function read_bytes() {
  var __s70local0 = this.uint32();
  var __s70local1 = this.pos;
  var __s70local2 = this.pos + __s70local0;
  if (__s70local2 > this.len) {
    throw indexOutOfRange(this, __s70local0);
  }
  this.pos += __s70local0;
  if (Array.isArray(this.buf)) {
    return this.buf.slice(__s70local1, __s70local2);
  } else if (__s70local1 === __s70local2) {
    return new this.buf.constructor(0);
  } else {
    return this._slice.call(this.buf, __s70local1, __s70local2);
  }
};
Reader.prototype.string = function read_string() {
  var __s76local0 = this.bytes();
  return __s0local2.read(__s76local0, 0, __s76local0.length);
};
Reader.prototype.skip = function skip(__s78param0) {
  if (typeof __s78param0 == "number") {
    if (this.pos + __s78param0 > this.len) {
      throw indexOutOfRange(this, __s78param0);
    }
    this.pos += __s78param0;
  } else {
    do {
      if (this.pos >= this.len) {
        throw indexOutOfRange(this);
      }
    } while (this.buf[this.pos++] & 128);
  }
  return this;
};
Reader.prototype.skipType = function (__s86param0) {
  switch (__s86param0) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      while ((__s86param0 = this.uint32() & 7) != 4) {
        this.skipType(__s86param0);
      }
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + __s86param0 + " at offset " + this.pos);
  }
  return this;
};
Reader._configure = function (__s91param0) {
  __s0local0 = __s91param0;
  var __s91local0 = __dep_class_Buffer_allocUnsafe.Long ? "toLong" : "toNumber";
  __dep_class_Buffer_allocUnsafe.merge(Reader.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[__s91local0](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[__s91local0](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[__s91local0](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[__s91local0](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[__s91local0](false);
    }
  });
};
