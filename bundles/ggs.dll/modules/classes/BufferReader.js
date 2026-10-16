module.exports = BufferReader;
var __dep_class_Reader = require("gge-module:class_Reader");
(BufferReader.prototype = Object.create(__dep_class_Reader.prototype)).constructor = BufferReader;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
function BufferReader(__s1param0) {
  __dep_class_Reader.call(this, __s1param0);
}
if (__dep_class_Buffer_allocUnsafe.Buffer) {
  BufferReader.prototype._slice = __dep_class_Buffer_allocUnsafe.Buffer.prototype.slice;
}
BufferReader.prototype.string = function read_string_buffer() {
  var __s4local0 = this.uint32();
  return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + __s4local0, this.len));
};
