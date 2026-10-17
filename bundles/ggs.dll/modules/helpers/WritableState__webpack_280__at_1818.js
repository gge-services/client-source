// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 280; original: modules/classes/CorkedRequest.js
function WritableState(__s13param0, __s13param1, __s13param2) {
  __s0local0 = __s0local0 || require("gge-module:class_Duplex");
  __s13param0 = __s13param0 || {};
  if (typeof __s13param2 != "boolean") {
    __s13param2 = __s13param1 instanceof __s0local0;
  }
  this.objectMode = !!__s13param0.objectMode;
  if (__s13param2) {
    this.objectMode = this.objectMode || !!__s13param0.writableObjectMode;
  }
  this.highWaterMark = __s0local5(this, __s13param0, "writableHighWaterMark", __s13param2);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var __s13local0 = __s13param0.decodeStrings === false;
  this.decodeStrings = !__s13local0;
  this.defaultEncoding = __s13param0.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (__s17param0) {
    (function onwrite(__s19param0, __s19param1) {
      var __s19local0 = __s19param0._writableState;
      var __s19local1 = __s19local0.sync;
      var __s19local2 = __s19local0.writecb;
      if (typeof __s19local2 != "function") {
        throw new __s0local9();
      }
      (function onwriteStateUpdate(__s22param0) {
        __s22param0.writing = false;
        __s22param0.writecb = null;
        __s22param0.length -= __s22param0.writelen;
        __s22param0.writelen = 0;
      })(__s19local0);
      if (__s19param1) {
        (function onwriteError(__s25param0, __s25param1, __s25param2, __s25param3, __s25param4) {
          --__s25param1.pendingcb;
          if (__s25param2) {
            __dep_class_Item.nextTick(__s25param4, __s25param3);
            __dep_class_Item.nextTick(finishMaybe, __s25param0, __s25param1);
            __s25param0._writableState.errorEmitted = true;
            __s0local15(__s25param0, __s25param3);
          } else {
            __s25param4(__s25param3);
            __s25param0._writableState.errorEmitted = true;
            __s0local15(__s25param0, __s25param3);
            finishMaybe(__s25param0, __s25param1);
          }
        })(__s19param0, __s19local0, __s19local1, __s19param1, __s19local2);
      } else {
        var __s19local3 = needFinish(__s19local0) || __s19param0.destroyed;
        if (!__s19local3 && !__s19local0.corked && !__s19local0.bufferProcessing && !!__s19local0.bufferedRequest) {
          clearBuffer(__s19param0, __s19local0);
        }
        if (__s19local1) {
          __dep_class_Item.nextTick(afterWrite, __s19param0, __s19local0, __s19local3, __s19local2);
        } else {
          afterWrite(__s19param0, __s19local0, __s19local3, __s19local2);
        }
      }
    })(__s13param1, __s17param0);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.emitClose = __s13param0.emitClose !== false;
  this.autoDestroy = !!__s13param0.autoDestroy;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new CorkedRequest(this);
}
