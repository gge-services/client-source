// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 275; original: modules/classes/EElistenerCount.js
function ReadableState(__s7param0, __s7param1, __s7param2) {
  __s0local0 = __s0local0 || require("gge-module:class_Duplex");
  __s7param0 = __s7param0 || {};
  if (typeof __s7param2 != "boolean") {
    __s7param2 = __s7param1 instanceof __s0local0;
  }
  this.objectMode = !!__s7param0.objectMode;
  if (__s7param2) {
    this.objectMode = this.objectMode || !!__s7param0.readableObjectMode;
  }
  this.highWaterMark = __s0local8(this, __s7param0, "readableHighWaterMark", __s7param2);
  this.buffer = new __dep_class_BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true;
  this.emitClose = __s7param0.emitClose !== false;
  this.autoDestroy = !!__s7param0.autoDestroy;
  this.destroyed = false;
  this.defaultEncoding = __s7param0.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (__s7param0.encoding) {
    __s0local5 ||= require("gge-module:export_StringDecoder").StringDecoder;
    this.decoder = new __s0local5(__s7param0.encoding);
    this.encoding = __s7param0.encoding;
  }
}
