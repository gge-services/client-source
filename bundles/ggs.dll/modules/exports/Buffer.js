// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 93
// Export: Buffer; preserved source: modules/webpack/exports/INSPECT_MAX_BYTES.js
// Original canonical SHA-256: fb1c19b8807db253ec9cf8009d1d171bffd94c5b2cb2dfedd0a653abd5fb2d7c
exports.Buffer = Buffer;
Buffer.TYPED_ARRAY_SUPPORT = __dep_exact_d8857732a937369e.TYPED_ARRAY_SUPPORT !== undefined ? __dep_exact_d8857732a937369e.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
  try {
    var __s170local0 = new Uint8Array(1);
    __s170local0.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return __s170local0.foo() === 42 && typeof __s170local0.subarray == "function" && __s170local0.subarray(1, 1).byteLength === 0;
  } catch (__s175local0) {
    return false;
  }
}();
Buffer.poolSize = 8192;
Buffer._augment = function (__s177param0) {
  __s177param0.__proto__ = Buffer.prototype;
  return __s177param0;
};
Buffer.from = function (__s179param0, __s179param1, __s179param2) {
  return from(null, __s179param0, __s179param1, __s179param2);
};
Buffer.alloc = function (__s183param0, __s183param1, __s183param2) {
  return function alloc(__s185param0, __s185param1, __s185param2, __s185param3) {
    assertSize(__s185param1);
    if (__s185param1 <= 0) {
      return createBuffer(__s185param0, __s185param1);
    } else if (__s185param2 !== undefined) {
      if (typeof __s185param3 == "string") {
        return createBuffer(__s185param0, __s185param1).fill(__s185param2, __s185param3);
      } else {
        return createBuffer(__s185param0, __s185param1).fill(__s185param2);
      }
    } else {
      return createBuffer(__s185param0, __s185param1);
    }
  }(null, __s183param0, __s183param1, __s183param2);
};
Buffer.allocUnsafe = function (__s192param0) {
  return allocUnsafe(null, __s192param0);
};
Buffer.allocUnsafeSlow = function (__s194param0) {
  return allocUnsafe(null, __s194param0);
};
Buffer.isBuffer = function isBuffer(__s196param0) {
  return __s196param0 != null && !!__s196param0._isBuffer;
};
Buffer.compare = function compare(__s198param0, __s198param1) {
  if (!Buffer.isBuffer(__s198param0) || !Buffer.isBuffer(__s198param1)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (__s198param0 === __s198param1) {
    return 0;
  }
  var __s198local0 = __s198param0.length;
  var __s198local1 = __s198param1.length;
  for (var __s198local2 = 0, __s198local3 = Math.min(__s198local0, __s198local1); __s198local2 < __s198local3; ++__s198local2) {
    if (__s198param0[__s198local2] !== __s198param1[__s198local2]) {
      __s198local0 = __s198param0[__s198local2];
      __s198local1 = __s198param1[__s198local2];
      break;
    }
  }
  if (__s198local0 < __s198local1) {
    return -1;
  } else if (__s198local1 < __s198local0) {
    return 1;
  } else {
    return 0;
  }
};
Buffer.isEncoding = function isEncoding(__s208param0) {
  switch (String(__s208param0).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(__s211param0, __s211param1) {
  if (!__dep_exact_62a7ac38f6a50359(__s211param0)) {
    throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (__s211param0.length === 0) {
    return Buffer.alloc(0);
  }
  var __s211local0;
  if (__s211param1 === undefined) {
    __s211param1 = 0;
    __s211local0 = 0;
    for (; __s211local0 < __s211param0.length; ++__s211local0) {
      __s211param1 += __s211param0[__s211local0].length;
    }
  }
  var __s211local1 = Buffer.allocUnsafe(__s211param1);
  var __s211local2 = 0;
  for (__s211local0 = 0; __s211local0 < __s211param0.length; ++__s211local0) {
    var __s211local3 = __s211param0[__s211local0];
    if (!Buffer.isBuffer(__s211local3)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    __s211local3.copy(__s211local1, __s211local2);
    __s211local2 += __s211local3.length;
  }
  return __s211local1;
};
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.prototype.swap16 = function swap16() {
  var __s221local0 = this.length;
  if (__s221local0 % 2 != 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var __s221local1 = 0; __s221local1 < __s221local0; __s221local1 += 2) {
    swap(this, __s221local1, __s221local1 + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var __s226local0 = this.length;
  if (__s226local0 % 4 != 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var __s226local1 = 0; __s226local1 < __s226local0; __s226local1 += 4) {
    swap(this, __s226local1, __s226local1 + 3);
    swap(this, __s226local1 + 1, __s226local1 + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var __s231local0 = this.length;
  if (__s231local0 % 8 != 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var __s231local1 = 0; __s231local1 < __s231local0; __s231local1 += 8) {
    swap(this, __s231local1, __s231local1 + 7);
    swap(this, __s231local1 + 1, __s231local1 + 6);
    swap(this, __s231local1 + 2, __s231local1 + 5);
    swap(this, __s231local1 + 3, __s231local1 + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString() {
  var __s236local0 = this.length | 0;
  if (__s236local0 === 0) {
    return "";
  } else if (arguments.length === 0) {
    return utf8Slice(this, 0, __s236local0);
  } else {
    return function slowToString(__s241param0, __s241param1, __s241param2) {
      var __s241local0 = false;
      if (__s241param1 === undefined || __s241param1 < 0) {
        __s241param1 = 0;
      }
      if (__s241param1 > this.length) {
        return "";
      }
      if (__s241param2 === undefined || __s241param2 > this.length) {
        __s241param2 = this.length;
      }
      if (__s241param2 <= 0) {
        return "";
      }
      if ((__s241param2 >>>= 0) <= (__s241param1 >>>= 0)) {
        return "";
      }
      for (__s241param0 ||= "utf8";;) {
        switch (__s241param0) {
          case "hex":
            return hexSlice(this, __s241param1, __s241param2);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, __s241param1, __s241param2);
          case "ascii":
            return asciiSlice(this, __s241param1, __s241param2);
          case "latin1":
          case "binary":
            return latin1Slice(this, __s241param1, __s241param2);
          case "base64":
            return base64Slice(this, __s241param1, __s241param2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, __s241param1, __s241param2);
          default:
            if (__s241local0) {
              throw new TypeError("Unknown encoding: " + __s241param0);
            }
            __s241param0 = (__s241param0 + "").toLowerCase();
            __s241local0 = true;
        }
      }
    }.apply(this, arguments);
  }
};
Buffer.prototype.equals = function equals(__s252param0) {
  if (!Buffer.isBuffer(__s252param0)) {
    throw new TypeError("Argument must be a Buffer");
  }
  return this === __s252param0 || Buffer.compare(this, __s252param0) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var __s255local0 = "";
  var __s255local1 = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    __s255local0 = this.toString("hex", 0, __s255local1).match(/.{2}/g).join(" ");
    if (this.length > __s255local1) {
      __s255local0 += " ... ";
    }
  }
  return "<Buffer " + __s255local0 + ">";
};
Buffer.prototype.compare = function compare(__s259param0, __s259param1, __s259param2, __s259param3, __s259param4) {
  if (!Buffer.isBuffer(__s259param0)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (__s259param1 === undefined) {
    __s259param1 = 0;
  }
  if (__s259param2 === undefined) {
    __s259param2 = __s259param0 ? __s259param0.length : 0;
  }
  if (__s259param3 === undefined) {
    __s259param3 = 0;
  }
  if (__s259param4 === undefined) {
    __s259param4 = this.length;
  }
  if (__s259param1 < 0 || __s259param2 > __s259param0.length || __s259param3 < 0 || __s259param4 > this.length) {
    throw new RangeError("out of range index");
  }
  if (__s259param3 >= __s259param4 && __s259param1 >= __s259param2) {
    return 0;
  }
  if (__s259param3 >= __s259param4) {
    return -1;
  }
  if (__s259param1 >= __s259param2) {
    return 1;
  }
  __s259param1 >>>= 0;
  __s259param2 >>>= 0;
  __s259param3 >>>= 0;
  __s259param4 >>>= 0;
  if (this === __s259param0) {
    return 0;
  }
  var __s259local0 = __s259param4 - __s259param3;
  var __s259local1 = __s259param2 - __s259param1;
  for (var __s259local2 = Math.min(__s259local0, __s259local1), __s259local3 = this.slice(__s259param3, __s259param4), __s259local4 = __s259param0.slice(__s259param1, __s259param2), __s259local5 = 0; __s259local5 < __s259local2; ++__s259local5) {
    if (__s259local3[__s259local5] !== __s259local4[__s259local5]) {
      __s259local0 = __s259local3[__s259local5];
      __s259local1 = __s259local4[__s259local5];
      break;
    }
  }
  if (__s259local0 < __s259local1) {
    return -1;
  } else if (__s259local1 < __s259local0) {
    return 1;
  } else {
    return 0;
  }
};
Buffer.prototype.includes = function includes(__s277param0, __s277param1, __s277param2) {
  return this.indexOf(__s277param0, __s277param1, __s277param2) !== -1;
};
Buffer.prototype.indexOf = function indexOf(__s279param0, __s279param1, __s279param2) {
  return bidirectionalIndexOf(this, __s279param0, __s279param1, __s279param2, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(__s281param0, __s281param1, __s281param2) {
  return bidirectionalIndexOf(this, __s281param0, __s281param1, __s281param2, false);
};
Buffer.prototype.write = function write(__s283param0, __s283param1, __s283param2, __s283param3) {
  if (__s283param1 === undefined) {
    __s283param3 = "utf8";
    __s283param2 = this.length;
    __s283param1 = 0;
  } else if (__s283param2 === undefined && typeof __s283param1 == "string") {
    __s283param3 = __s283param1;
    __s283param2 = this.length;
    __s283param1 = 0;
  } else {
    if (!isFinite(__s283param1)) {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    __s283param1 |= 0;
    if (isFinite(__s283param2)) {
      __s283param2 |= 0;
      if (__s283param3 === undefined) {
        __s283param3 = "utf8";
      }
    } else {
      __s283param3 = __s283param2;
      __s283param2 = undefined;
    }
  }
  var __s283local0 = this.length - __s283param1;
  if (__s283param2 === undefined || __s283param2 > __s283local0) {
    __s283param2 = __s283local0;
  }
  if (__s283param0.length > 0 && (__s283param2 < 0 || __s283param1 < 0) || __s283param1 > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  __s283param3 ||= "utf8";
  var __s283local1 = false;
  for (;;) {
    switch (__s283param3) {
      case "hex":
        return hexWrite(this, __s283param0, __s283param1, __s283param2);
      case "utf8":
      case "utf-8":
        return utf8Write(this, __s283param0, __s283param1, __s283param2);
      case "ascii":
        return asciiWrite(this, __s283param0, __s283param1, __s283param2);
      case "latin1":
      case "binary":
        return latin1Write(this, __s283param0, __s283param1, __s283param2);
      case "base64":
        return base64Write(this, __s283param0, __s283param1, __s283param2);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, __s283param0, __s283param1, __s283param2);
      default:
        if (__s283local1) {
          throw new TypeError("Unknown encoding: " + __s283param3);
        }
        __s283param3 = ("" + __s283param3).toLowerCase();
        __s283local1 = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
Buffer.prototype.slice = function slice(__s347param0, __s347param1) {
  var __s347local0;
  var __s347local1 = this.length;
  __s347param0 = ~~__s347param0;
  __s347param1 = __s347param1 === undefined ? __s347local1 : ~~__s347param1;
  if (__s347param0 < 0) {
    if ((__s347param0 += __s347local1) < 0) {
      __s347param0 = 0;
    }
  } else if (__s347param0 > __s347local1) {
    __s347param0 = __s347local1;
  }
  if (__s347param1 < 0) {
    if ((__s347param1 += __s347local1) < 0) {
      __s347param1 = 0;
    }
  } else if (__s347param1 > __s347local1) {
    __s347param1 = __s347local1;
  }
  if (__s347param1 < __s347param0) {
    __s347param1 = __s347param0;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    (__s347local0 = this.subarray(__s347param0, __s347param1)).__proto__ = Buffer.prototype;
  } else {
    var __s347local2 = __s347param1 - __s347param0;
    __s347local0 = new Buffer(__s347local2, undefined);
    for (var __s347local3 = 0; __s347local3 < __s347local2; ++__s347local3) {
      __s347local0[__s347local3] = this[__s347local3 + __s347param0];
    }
  }
  return __s347local0;
};
Buffer.prototype.readUIntLE = function readUIntLE(__s360param0, __s360param1, __s360param2) {
  __s360param0 |= 0;
  __s360param1 |= 0;
  if (!__s360param2) {
    checkOffset(__s360param0, __s360param1, this.length);
  }
  var __s360local0 = this[__s360param0];
  for (var __s360local1 = 1, __s360local2 = 0; ++__s360local2 < __s360param1 && (__s360local1 *= 256);) {
    __s360local0 += this[__s360param0 + __s360local2] * __s360local1;
  }
  return __s360local0;
};
Buffer.prototype.readUIntBE = function readUIntBE(__s365param0, __s365param1, __s365param2) {
  __s365param0 |= 0;
  __s365param1 |= 0;
  if (!__s365param2) {
    checkOffset(__s365param0, __s365param1, this.length);
  }
  var __s365local0 = this[__s365param0 + --__s365param1];
  for (var __s365local1 = 1; __s365param1 > 0 && (__s365local1 *= 256);) {
    __s365local0 += this[__s365param0 + --__s365param1] * __s365local1;
  }
  return __s365local0;
};
Buffer.prototype.readUInt8 = function readUInt8(__s370param0, __s370param1) {
  if (!__s370param1) {
    checkOffset(__s370param0, 1, this.length);
  }
  return this[__s370param0];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(__s373param0, __s373param1) {
  if (!__s373param1) {
    checkOffset(__s373param0, 2, this.length);
  }
  return this[__s373param0] | this[__s373param0 + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(__s376param0, __s376param1) {
  if (!__s376param1) {
    checkOffset(__s376param0, 2, this.length);
  }
  return this[__s376param0] << 8 | this[__s376param0 + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(__s379param0, __s379param1) {
  if (!__s379param1) {
    checkOffset(__s379param0, 4, this.length);
  }
  return (this[__s379param0] | this[__s379param0 + 1] << 8 | this[__s379param0 + 2] << 16) + this[__s379param0 + 3] * 16777216;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(__s382param0, __s382param1) {
  if (!__s382param1) {
    checkOffset(__s382param0, 4, this.length);
  }
  return this[__s382param0] * 16777216 + (this[__s382param0 + 1] << 16 | this[__s382param0 + 2] << 8 | this[__s382param0 + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(__s385param0, __s385param1, __s385param2) {
  __s385param0 |= 0;
  __s385param1 |= 0;
  if (!__s385param2) {
    checkOffset(__s385param0, __s385param1, this.length);
  }
  var __s385local0 = this[__s385param0];
  for (var __s385local1 = 1, __s385local2 = 0; ++__s385local2 < __s385param1 && (__s385local1 *= 256);) {
    __s385local0 += this[__s385param0 + __s385local2] * __s385local1;
  }
  if (__s385local0 >= (__s385local1 *= 128)) {
    __s385local0 -= Math.pow(2, __s385param1 * 8);
  }
  return __s385local0;
};
Buffer.prototype.readIntBE = function readIntBE(__s391param0, __s391param1, __s391param2) {
  __s391param0 |= 0;
  __s391param1 |= 0;
  if (!__s391param2) {
    checkOffset(__s391param0, __s391param1, this.length);
  }
  for (var __s391local0 = __s391param1, __s391local1 = 1, __s391local2 = this[__s391param0 + --__s391local0]; __s391local0 > 0 && (__s391local1 *= 256);) {
    __s391local2 += this[__s391param0 + --__s391local0] * __s391local1;
  }
  if (__s391local2 >= (__s391local1 *= 128)) {
    __s391local2 -= Math.pow(2, __s391param1 * 8);
  }
  return __s391local2;
};
Buffer.prototype.readInt8 = function readInt8(__s397param0, __s397param1) {
  if (!__s397param1) {
    checkOffset(__s397param0, 1, this.length);
  }
  if (this[__s397param0] & 128) {
    return (255 - this[__s397param0] + 1) * -1;
  } else {
    return this[__s397param0];
  }
};
Buffer.prototype.readInt16LE = function readInt16LE(__s402param0, __s402param1) {
  if (!__s402param1) {
    checkOffset(__s402param0, 2, this.length);
  }
  var __s402local0 = this[__s402param0] | this[__s402param0 + 1] << 8;
  if (__s402local0 & 32768) {
    return __s402local0 | -65536;
  } else {
    return __s402local0;
  }
};
Buffer.prototype.readInt16BE = function readInt16BE(__s407param0, __s407param1) {
  if (!__s407param1) {
    checkOffset(__s407param0, 2, this.length);
  }
  var __s407local0 = this[__s407param0 + 1] | this[__s407param0] << 8;
  if (__s407local0 & 32768) {
    return __s407local0 | -65536;
  } else {
    return __s407local0;
  }
};
Buffer.prototype.readInt32LE = function readInt32LE(__s412param0, __s412param1) {
  if (!__s412param1) {
    checkOffset(__s412param0, 4, this.length);
  }
  return this[__s412param0] | this[__s412param0 + 1] << 8 | this[__s412param0 + 2] << 16 | this[__s412param0 + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(__s415param0, __s415param1) {
  if (!__s415param1) {
    checkOffset(__s415param0, 4, this.length);
  }
  return this[__s415param0] << 24 | this[__s415param0 + 1] << 16 | this[__s415param0 + 2] << 8 | this[__s415param0 + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(__s418param0, __s418param1) {
  if (!__s418param1) {
    checkOffset(__s418param0, 4, this.length);
  }
  return __dep_export_read.read(this, __s418param0, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(__s421param0, __s421param1) {
  if (!__s421param1) {
    checkOffset(__s421param0, 4, this.length);
  }
  return __dep_export_read.read(this, __s421param0, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(__s424param0, __s424param1) {
  if (!__s424param1) {
    checkOffset(__s424param0, 8, this.length);
  }
  return __dep_export_read.read(this, __s424param0, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(__s427param0, __s427param1) {
  if (!__s427param1) {
    checkOffset(__s427param0, 8, this.length);
  }
  return __dep_export_read.read(this, __s427param0, false, 52, 8);
};
Buffer.prototype.writeUIntLE = function writeUIntLE(__s430param0, __s430param1, __s430param2, __s430param3) {
  if (!(__s430param0 = +__s430param0, __s430param1 |= 0, __s430param2 |= 0, __s430param3)) {
    checkInt(this, __s430param0, __s430param1, __s430param2, Math.pow(2, __s430param2 * 8) - 1, 0);
  }
  var __s430local0 = 1;
  var __s430local1 = 0;
  for (this[__s430param1] = __s430param0 & 255; ++__s430local1 < __s430param2 && (__s430local0 *= 256);) {
    this[__s430param1 + __s430local1] = __s430param0 / __s430local0 & 255;
  }
  return __s430param1 + __s430param2;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(__s435param0, __s435param1, __s435param2, __s435param3) {
  if (!(__s435param0 = +__s435param0, __s435param1 |= 0, __s435param2 |= 0, __s435param3)) {
    checkInt(this, __s435param0, __s435param1, __s435param2, Math.pow(2, __s435param2 * 8) - 1, 0);
  }
  var __s435local0 = __s435param2 - 1;
  var __s435local1 = 1;
  for (this[__s435param1 + __s435local0] = __s435param0 & 255; --__s435local0 >= 0 && (__s435local1 *= 256);) {
    this[__s435param1 + __s435local0] = __s435param0 / __s435local1 & 255;
  }
  return __s435param1 + __s435param2;
};
Buffer.prototype.writeUInt8 = function writeUInt8(__s440param0, __s440param1, __s440param2) {
  __s440param0 = +__s440param0;
  __s440param1 |= 0;
  if (!__s440param2) {
    checkInt(this, __s440param0, __s440param1, 1, 255, 0);
  }
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    __s440param0 = Math.floor(__s440param0);
  }
  this[__s440param1] = __s440param0 & 255;
  return __s440param1 + 1;
};
Buffer.prototype.writeUInt16LE = function writeUInt16LE(__s444param0, __s444param1, __s444param2) {
  __s444param0 = +__s444param0;
  __s444param1 |= 0;
  if (!__s444param2) {
    checkInt(this, __s444param0, __s444param1, 2, 65535, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s444param1] = __s444param0 & 255;
    this[__s444param1 + 1] = __s444param0 >>> 8;
  } else {
    objectWriteUInt16(this, __s444param0, __s444param1, true);
  }
  return __s444param1 + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(__s449param0, __s449param1, __s449param2) {
  __s449param0 = +__s449param0;
  __s449param1 |= 0;
  if (!__s449param2) {
    checkInt(this, __s449param0, __s449param1, 2, 65535, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s449param1] = __s449param0 >>> 8;
    this[__s449param1 + 1] = __s449param0 & 255;
  } else {
    objectWriteUInt16(this, __s449param0, __s449param1, false);
  }
  return __s449param1 + 2;
};
Buffer.prototype.writeUInt32LE = function writeUInt32LE(__s454param0, __s454param1, __s454param2) {
  __s454param0 = +__s454param0;
  __s454param1 |= 0;
  if (!__s454param2) {
    checkInt(this, __s454param0, __s454param1, 4, 4294967295, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s454param1 + 3] = __s454param0 >>> 24;
    this[__s454param1 + 2] = __s454param0 >>> 16;
    this[__s454param1 + 1] = __s454param0 >>> 8;
    this[__s454param1] = __s454param0 & 255;
  } else {
    objectWriteUInt32(this, __s454param0, __s454param1, true);
  }
  return __s454param1 + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(__s459param0, __s459param1, __s459param2) {
  __s459param0 = +__s459param0;
  __s459param1 |= 0;
  if (!__s459param2) {
    checkInt(this, __s459param0, __s459param1, 4, 4294967295, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s459param1] = __s459param0 >>> 24;
    this[__s459param1 + 1] = __s459param0 >>> 16;
    this[__s459param1 + 2] = __s459param0 >>> 8;
    this[__s459param1 + 3] = __s459param0 & 255;
  } else {
    objectWriteUInt32(this, __s459param0, __s459param1, false);
  }
  return __s459param1 + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(__s464param0, __s464param1, __s464param2, __s464param3) {
  __s464param0 = +__s464param0;
  __s464param1 |= 0;
  if (!__s464param3) {
    var __s464local0 = Math.pow(2, __s464param2 * 8 - 1);
    checkInt(this, __s464param0, __s464param1, __s464param2, __s464local0 - 1, -__s464local0);
  }
  var __s464local1 = 0;
  var __s464local2 = 1;
  var __s464local3 = 0;
  for (this[__s464param1] = __s464param0 & 255; ++__s464local1 < __s464param2 && (__s464local2 *= 256);) {
    if (__s464param0 < 0 && __s464local3 === 0 && this[__s464param1 + __s464local1 - 1] !== 0) {
      __s464local3 = 1;
    }
    this[__s464param1 + __s464local1] = (__s464param0 / __s464local2 >> 0) - __s464local3 & 255;
  }
  return __s464param1 + __s464param2;
};
Buffer.prototype.writeIntBE = function writeIntBE(__s470param0, __s470param1, __s470param2, __s470param3) {
  __s470param0 = +__s470param0;
  __s470param1 |= 0;
  if (!__s470param3) {
    var __s470local0 = Math.pow(2, __s470param2 * 8 - 1);
    checkInt(this, __s470param0, __s470param1, __s470param2, __s470local0 - 1, -__s470local0);
  }
  var __s470local1 = __s470param2 - 1;
  var __s470local2 = 1;
  var __s470local3 = 0;
  for (this[__s470param1 + __s470local1] = __s470param0 & 255; --__s470local1 >= 0 && (__s470local2 *= 256);) {
    if (__s470param0 < 0 && __s470local3 === 0 && this[__s470param1 + __s470local1 + 1] !== 0) {
      __s470local3 = 1;
    }
    this[__s470param1 + __s470local1] = (__s470param0 / __s470local2 >> 0) - __s470local3 & 255;
  }
  return __s470param1 + __s470param2;
};
Buffer.prototype.writeInt8 = function writeInt8(__s476param0, __s476param1, __s476param2) {
  __s476param0 = +__s476param0;
  __s476param1 |= 0;
  if (!__s476param2) {
    checkInt(this, __s476param0, __s476param1, 1, 127, -128);
  }
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    __s476param0 = Math.floor(__s476param0);
  }
  if (__s476param0 < 0) {
    __s476param0 = 255 + __s476param0 + 1;
  }
  this[__s476param1] = __s476param0 & 255;
  return __s476param1 + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(__s481param0, __s481param1, __s481param2) {
  __s481param0 = +__s481param0;
  __s481param1 |= 0;
  if (!__s481param2) {
    checkInt(this, __s481param0, __s481param1, 2, 32767, -32768);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s481param1] = __s481param0 & 255;
    this[__s481param1 + 1] = __s481param0 >>> 8;
  } else {
    objectWriteUInt16(this, __s481param0, __s481param1, true);
  }
  return __s481param1 + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(__s486param0, __s486param1, __s486param2) {
  __s486param0 = +__s486param0;
  __s486param1 |= 0;
  if (!__s486param2) {
    checkInt(this, __s486param0, __s486param1, 2, 32767, -32768);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s486param1] = __s486param0 >>> 8;
    this[__s486param1 + 1] = __s486param0 & 255;
  } else {
    objectWriteUInt16(this, __s486param0, __s486param1, false);
  }
  return __s486param1 + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(__s491param0, __s491param1, __s491param2) {
  __s491param0 = +__s491param0;
  __s491param1 |= 0;
  if (!__s491param2) {
    checkInt(this, __s491param0, __s491param1, 4, 2147483647, -2147483648);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s491param1] = __s491param0 & 255;
    this[__s491param1 + 1] = __s491param0 >>> 8;
    this[__s491param1 + 2] = __s491param0 >>> 16;
    this[__s491param1 + 3] = __s491param0 >>> 24;
  } else {
    objectWriteUInt32(this, __s491param0, __s491param1, true);
  }
  return __s491param1 + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(__s496param0, __s496param1, __s496param2) {
  __s496param0 = +__s496param0;
  __s496param1 |= 0;
  if (!__s496param2) {
    checkInt(this, __s496param0, __s496param1, 4, 2147483647, -2147483648);
  }
  if (__s496param0 < 0) {
    __s496param0 = 4294967295 + __s496param0 + 1;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[__s496param1] = __s496param0 >>> 24;
    this[__s496param1 + 1] = __s496param0 >>> 16;
    this[__s496param1 + 2] = __s496param0 >>> 8;
    this[__s496param1 + 3] = __s496param0 & 255;
  } else {
    objectWriteUInt32(this, __s496param0, __s496param1, false);
  }
  return __s496param1 + 4;
};
Buffer.prototype.writeFloatLE = function writeFloatLE(__s502param0, __s502param1, __s502param2) {
  return writeFloat(this, __s502param0, __s502param1, true, __s502param2);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(__s504param0, __s504param1, __s504param2) {
  return writeFloat(this, __s504param0, __s504param1, false, __s504param2);
};
Buffer.prototype.writeDoubleLE = function writeDoubleLE(__s506param0, __s506param1, __s506param2) {
  return writeDouble(this, __s506param0, __s506param1, true, __s506param2);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(__s508param0, __s508param1, __s508param2) {
  return writeDouble(this, __s508param0, __s508param1, false, __s508param2);
};
Buffer.prototype.copy = function copy(__s510param0, __s510param1, __s510param2, __s510param3) {
  __s510param2 ||= 0;
  if (!__s510param3 && __s510param3 !== 0) {
    __s510param3 = this.length;
  }
  if (__s510param1 >= __s510param0.length) {
    __s510param1 = __s510param0.length;
  }
  __s510param1 ||= 0;
  if (__s510param3 > 0 && __s510param3 < __s510param2) {
    __s510param3 = __s510param2;
  }
  if (__s510param3 === __s510param2) {
    return 0;
  }
  if (__s510param0.length === 0 || this.length === 0) {
    return 0;
  }
  if (__s510param1 < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (__s510param2 < 0 || __s510param2 >= this.length) {
    throw new RangeError("sourceStart out of bounds");
  }
  if (__s510param3 < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  if (__s510param3 > this.length) {
    __s510param3 = this.length;
  }
  if (__s510param0.length - __s510param1 < __s510param3 - __s510param2) {
    __s510param3 = __s510param0.length - __s510param1 + __s510param2;
  }
  var __s510local0;
  var __s510local1 = __s510param3 - __s510param2;
  if (this === __s510param0 && __s510param2 < __s510param1 && __s510param1 < __s510param3) {
    for (__s510local0 = __s510local1 - 1; __s510local0 >= 0; --__s510local0) {
      __s510param0[__s510local0 + __s510param1] = this[__s510local0 + __s510param2];
    }
  } else if (__s510local1 < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (__s510local0 = 0; __s510local0 < __s510local1; ++__s510local0) {
      __s510param0[__s510local0 + __s510param1] = this[__s510local0 + __s510param2];
    }
  } else {
    Uint8Array.prototype.set.call(__s510param0, this.subarray(__s510param2, __s510param2 + __s510local1), __s510param1);
  }
  return __s510local1;
};
Buffer.prototype.fill = function fill(__s529param0, __s529param1, __s529param2, __s529param3) {
  if (typeof __s529param0 == "string") {
    if (typeof __s529param1 == "string") {
      __s529param3 = __s529param1;
      __s529param1 = 0;
      __s529param2 = this.length;
    } else if (typeof __s529param2 == "string") {
      __s529param3 = __s529param2;
      __s529param2 = this.length;
    }
    if (__s529param0.length === 1) {
      var __s529local0 = __s529param0.charCodeAt(0);
      if (__s529local0 < 256) {
        __s529param0 = __s529local0;
      }
    }
    if (__s529param3 !== undefined && typeof __s529param3 != "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof __s529param3 == "string" && !Buffer.isEncoding(__s529param3)) {
      throw new TypeError("Unknown encoding: " + __s529param3);
    }
  } else if (typeof __s529param0 == "number") {
    __s529param0 &= 255;
  }
  if (__s529param1 < 0 || this.length < __s529param1 || this.length < __s529param2) {
    throw new RangeError("Out of range index");
  }
  if (__s529param2 <= __s529param1) {
    return this;
  }
  var __s529local1;
  __s529param1 >>>= 0;
  __s529param2 = __s529param2 === undefined ? this.length : __s529param2 >>> 0;
  __s529param0 ||= 0;
  if (typeof __s529param0 == "number") {
    for (__s529local1 = __s529param1; __s529local1 < __s529param2; ++__s529local1) {
      this[__s529local1] = __s529param0;
    }
  } else {
    var __s529local2 = Buffer.isBuffer(__s529param0) ? __s529param0 : utf8ToBytes(new Buffer(__s529param0, __s529param3).toString());
    var __s529local3 = __s529local2.length;
    for (__s529local1 = 0; __s529local1 < __s529param2 - __s529param1; ++__s529local1) {
      this[__s529local1 + __s529param1] = __s529local2[__s529local1 % __s529local3];
    }
  }
  return this;
};
