module.exports = Writer;
var __s0local0;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
var __s0local1 = __dep_class_Buffer_allocUnsafe.LongBits;
var __s0local2 = __dep_class_Buffer_allocUnsafe.base64;
var __s0local3 = __dep_class_Buffer_allocUnsafe.utf8;
function __s0local4(__s1param0, __s1param1, __s1param2) {
  this.fn = __s1param0;
  this.len = __s1param1;
  this.next = undefined;
  this.val = __s1param2;
}
function noop() {}
function Writer() {
  this.len = 0;
  this.head = new __s0local4(noop, 0, 0);
  this.tail = this.head;
  this.states = null;
}
function writeByte(__s7param0, __s7param1, __s7param2) {
  __s7param1[__s7param2] = __s7param0 & 255;
}
function VarintOp(__s9param0, __s9param1) {
  this.len = __s9param0;
  this.next = undefined;
  this.val = __s9param1;
}
function writeVarint64(__s11param0, __s11param1, __s11param2) {
  while (__s11param0.hi) {
    __s11param1[__s11param2++] = __s11param0.lo & 127 | 128;
    __s11param0.lo = (__s11param0.lo >>> 7 | __s11param0.hi << 25) >>> 0;
    __s11param0.hi >>>= 7;
  }
  while (__s11param0.lo > 127) {
    __s11param1[__s11param2++] = __s11param0.lo & 127 | 128;
    __s11param0.lo = __s11param0.lo >>> 7;
  }
  __s11param1[__s11param2++] = __s11param0.lo;
}
function writeFixed32(__s17param0, __s17param1, __s17param2) {
  __s17param1[__s17param2] = __s17param0 & 255;
  __s17param1[__s17param2 + 1] = __s17param0 >>> 8 & 255;
  __s17param1[__s17param2 + 2] = __s17param0 >>> 16 & 255;
  __s17param1[__s17param2 + 3] = __s17param0 >>> 24;
}
Writer.create = __dep_class_Buffer_allocUnsafe.Buffer ? function create_buffer_setup() {
  return (Writer.create = function create_buffer() {
    return new __s0local0();
  })();
} : function create_array() {
  return new Writer();
};
Writer.alloc = function alloc(__s25param0) {
  return new __dep_class_Buffer_allocUnsafe.Array(__s25param0);
};
if (__dep_class_Buffer_allocUnsafe.Array !== Array) {
  Writer.alloc = __dep_class_Buffer_allocUnsafe.pool(Writer.alloc, __dep_class_Buffer_allocUnsafe.Array.prototype.subarray);
}
Writer.prototype._push = function push(__s28param0, __s28param1, __s28param2) {
  this.tail = this.tail.next = new __s0local4(__s28param0, __s28param1, __s28param2);
  this.len += __s28param1;
  return this;
};
VarintOp.prototype = Object.create(__s0local4.prototype);
VarintOp.prototype.fn = function writeVarint32(__s30param0, __s30param1, __s30param2) {
  while (__s30param0 > 127) {
    __s30param1[__s30param2++] = __s30param0 & 127 | 128;
    __s30param0 >>>= 7;
  }
  __s30param1[__s30param2] = __s30param0;
};
Writer.prototype.uint32 = function write_uint32(__s34param0) {
  this.len += (this.tail = this.tail.next = new VarintOp((__s34param0 >>>= 0) < 128 ? 1 : __s34param0 < 16384 ? 2 : __s34param0 < 2097152 ? 3 : __s34param0 < 268435456 ? 4 : 5, __s34param0)).len;
  return this;
};
Writer.prototype.int32 = function write_int32(__s36param0) {
  if (__s36param0 < 0) {
    return this._push(writeVarint64, 10, __s0local1.fromNumber(__s36param0));
  } else {
    return this.uint32(__s36param0);
  }
};
Writer.prototype.sint32 = function write_sint32(__s40param0) {
  return this.uint32((__s40param0 << 1 ^ __s40param0 >> 31) >>> 0);
};
Writer.prototype.uint64 = function write_uint64(__s42param0) {
  var __s42local0 = __s0local1.from(__s42param0);
  return this._push(writeVarint64, __s42local0.length(), __s42local0);
};
Writer.prototype.int64 = Writer.prototype.uint64;
Writer.prototype.sint64 = function write_sint64(__s44param0) {
  var __s44local0 = __s0local1.from(__s44param0).zzEncode();
  return this._push(writeVarint64, __s44local0.length(), __s44local0);
};
Writer.prototype.bool = function write_bool(__s46param0) {
  return this._push(writeByte, 1, __s46param0 ? 1 : 0);
};
Writer.prototype.fixed32 = function write_fixed32(__s48param0) {
  return this._push(writeFixed32, 4, __s48param0 >>> 0);
};
Writer.prototype.sfixed32 = Writer.prototype.fixed32;
Writer.prototype.fixed64 = function write_fixed64(__s50param0) {
  var __s50local0 = __s0local1.from(__s50param0);
  return this._push(writeFixed32, 4, __s50local0.lo)._push(writeFixed32, 4, __s50local0.hi);
};
Writer.prototype.sfixed64 = Writer.prototype.fixed64;
Writer.prototype.float = function write_float(__s52param0) {
  return this._push(__dep_class_Buffer_allocUnsafe.float.writeFloatLE, 4, __s52param0);
};
Writer.prototype.double = function write_double(__s54param0) {
  return this._push(__dep_class_Buffer_allocUnsafe.float.writeDoubleLE, 8, __s54param0);
};
var __s0local5 = __dep_class_Buffer_allocUnsafe.Array.prototype.set ? function writeBytes_set(__s56param0, __s56param1, __s56param2) {
  __s56param1.set(__s56param0, __s56param2);
} : function writeBytes_for(__s58param0, __s58param1, __s58param2) {
  for (var __s58local0 = 0; __s58local0 < __s58param0.length; ++__s58local0) {
    __s58param1[__s58param2 + __s58local0] = __s58param0[__s58local0];
  }
};
Writer.prototype.bytes = function write_bytes(__s62param0) {
  var __s62local0 = __s62param0.length >>> 0;
  if (!__s62local0) {
    return this._push(writeByte, 1, 0);
  }
  if (__dep_class_Buffer_allocUnsafe.isString(__s62param0)) {
    var __s62local1 = Writer.alloc(__s62local0 = __s0local2.length(__s62param0));
    __s0local2.decode(__s62param0, __s62local1, 0);
    __s62param0 = __s62local1;
  }
  return this.uint32(__s62local0)._push(__s0local5, __s62local0, __s62param0);
};
Writer.prototype.string = function write_string(__s66param0) {
  var __s66local0 = __s0local3.length(__s66param0);
  if (__s66local0) {
    return this.uint32(__s66local0)._push(__s0local3.write, __s66local0, __s66param0);
  } else {
    return this._push(writeByte, 1, 0);
  }
};
Writer.prototype.fork = function fork() {
  this.states = new function State(__s72param0) {
    this.head = __s72param0.head;
    this.tail = __s72param0.tail;
    this.len = __s72param0.len;
    this.next = __s72param0.states;
  }(this);
  this.head = this.tail = new __s0local4(noop, 0, 0);
  this.len = 0;
  return this;
};
Writer.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new __s0local4(noop, 0, 0);
    this.len = 0;
  }
  return this;
};
Writer.prototype.ldelim = function ldelim() {
  var __s78local0 = this.head;
  var __s78local1 = this.tail;
  var __s78local2 = this.len;
  this.reset().uint32(__s78local2);
  if (__s78local2) {
    this.tail.next = __s78local0.next;
    this.tail = __s78local1;
    this.len += __s78local2;
  }
  return this;
};
Writer.prototype.finish = function finish() {
  for (var __s81local0 = this.head.next, __s81local1 = this.constructor.alloc(this.len), __s81local2 = 0; __s81local0;) {
    __s81local0.fn(__s81local0.val, __s81local1, __s81local2);
    __s81local2 += __s81local0.len;
    __s81local0 = __s81local0.next;
  }
  return __s81local1;
};
Writer._configure = function (__s85param0) {
  __s0local0 = __s85param0;
};
