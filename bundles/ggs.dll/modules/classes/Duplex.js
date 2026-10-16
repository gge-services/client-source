var __dep_class_Item = require("gge-module:class_Item");
var __s0local0 = Object.keys || function (__s1param0) {
  var __s1local0 = [];
  for (var __s1local1 in __s1param0) {
    __s1local0.push(__s1local1);
  }
  return __s1local0;
};
module.exports = Duplex;
var __dep_class_EElistenerCount = require("gge-module:class_EElistenerCount");
var __dep_class_CorkedRequest = require("gge-module:class_CorkedRequest");
require("gge-module:opaque_abbdd9b5728f0d40f7dc71b1")(Duplex, __dep_class_EElistenerCount);
for (var __s0local1 = __s0local0(__dep_class_CorkedRequest.prototype), __s0local2 = 0; __s0local2 < __s0local1.length; __s0local2++) {
  var __s0local3 = __s0local1[__s0local2];
  Duplex.prototype[__s0local3] ||= __dep_class_CorkedRequest.prototype[__s0local3];
}
function Duplex(__s7param0) {
  if (!(this instanceof Duplex)) {
    return new Duplex(__s7param0);
  }
  __dep_class_EElistenerCount.call(this, __s7param0);
  __dep_class_CorkedRequest.call(this, __s7param0);
  this.allowHalfOpen = true;
  if (__s7param0) {
    if (__s7param0.readable === false) {
      this.readable = false;
    }
    if (__s7param0.writable === false) {
      this.writable = false;
    }
    if (__s7param0.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once("end", onend);
    }
  }
}
function onend() {
  if (!this._writableState.ended) {
    __dep_class_Item.nextTick(onEndNT, this);
  }
}
function onEndNT(__s17param0) {
  __s17param0.end();
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, "writableBuffer", {
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, "writableLength", {
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});
Object.defineProperty(Duplex.prototype, "destroyed", {
  enumerable: false,
  get: function get() {
    return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(__s27param0) {
    if (this._readableState !== undefined && this._writableState !== undefined) {
      this._readableState.destroyed = __s27param0;
      this._writableState.destroyed = __s27param0;
    }
  }
});
