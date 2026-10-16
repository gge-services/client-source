module.exports = BufferWriter;
var __dep_class_State = require("gge-module:class_State");
(BufferWriter.prototype = Object.create(__dep_class_State.prototype)).constructor = BufferWriter;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
var __s0local0 = __dep_class_Buffer_allocUnsafe.Buffer;
function BufferWriter() {
  __dep_class_State.call(this);
}
BufferWriter.alloc = function alloc_buffer(__s3param0) {
  return (BufferWriter.alloc = __dep_class_Buffer_allocUnsafe._Buffer_allocUnsafe)(__s3param0);
};
var __s0local1 = __s0local0 && __s0local0.prototype instanceof Uint8Array && __s0local0.prototype.set.name === "set" ? function writeBytesBuffer_set(__s5param0, __s5param1, __s5param2) {
  __s5param1.set(__s5param0, __s5param2);
} : function writeBytesBuffer_copy(__s7param0, __s7param1, __s7param2) {
  if (__s7param0.copy) {
    __s7param0.copy(__s7param1, __s7param2, 0, __s7param0.length);
  } else {
    for (var __s7local0 = 0; __s7local0 < __s7param0.length;) {
      __s7param1[__s7param2++] = __s7param0[__s7local0++];
    }
  }
};
function writeStringBuffer(__s13param0, __s13param1, __s13param2) {
  if (__s13param0.length < 40) {
    __dep_class_Buffer_allocUnsafe.utf8.write(__s13param0, __s13param1, __s13param2);
  } else {
    __s13param1.utf8Write(__s13param0, __s13param2);
  }
}
BufferWriter.prototype.bytes = function write_bytes_buffer(__s17param0) {
  if (__dep_class_Buffer_allocUnsafe.isString(__s17param0)) {
    __s17param0 = __dep_class_Buffer_allocUnsafe._Buffer_from(__s17param0, "base64");
  }
  var __s17local0 = __s17param0.length >>> 0;
  this.uint32(__s17local0);
  if (__s17local0) {
    this._push(__s0local1, __s17local0, __s17param0);
  }
  return this;
};
BufferWriter.prototype.string = function write_string_buffer(__s21param0) {
  var __s21local0 = __s0local0.byteLength(__s21param0);
  this.uint32(__s21local0);
  if (__s21local0) {
    this._push(writeStringBuffer, __s21local0, __s21param0);
  }
  return this;
};
