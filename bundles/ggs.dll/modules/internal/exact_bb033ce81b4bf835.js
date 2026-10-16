function EventEmitter() {
  this._listeners = {};
}
module.exports = EventEmitter;
EventEmitter.prototype.on = function __s3local0(__s3param0, __s3param1, __s3param2) {
  (this._listeners[__s3param0] ||= []).push({
    fn: __s3param1,
    ctx: __s3param2 || this
  });
  return this;
};
EventEmitter.prototype.off = function off(__s5param0, __s5param1) {
  if (__s5param0 === undefined) {
    this._listeners = {};
  } else if (__s5param1 === undefined) {
    this._listeners[__s5param0] = [];
  } else {
    for (var __s5local0 = this._listeners[__s5param0], __s5local1 = 0; __s5local1 < __s5local0.length;) {
      if (__s5local0[__s5local1].fn === __s5param1) {
        __s5local0.splice(__s5local1, 1);
      } else {
        ++__s5local1;
      }
    }
  }
  return this;
};
EventEmitter.prototype.emit = function emit(__s14param0) {
  var __s14local0 = this._listeners[__s14param0];
  if (__s14local0) {
    var __s14local1 = [];
    for (var __s14local2 = 1; __s14local2 < arguments.length;) {
      __s14local1.push(arguments[__s14local2++]);
    }
    for (__s14local2 = 0; __s14local2 < __s14local0.length;) {
      __s14local0[__s14local2].fn.apply(__s14local0[__s14local2++].ctx, __s14local1);
    }
  }
  return this;
};
