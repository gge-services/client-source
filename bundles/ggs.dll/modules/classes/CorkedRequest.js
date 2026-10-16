var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __dep_class_Item = require("gge-module:class_Item");
function CorkedRequest(__s1param0) {
  var __s1local0 = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    (function onCorkedFinish(__s5param0, __s5param1, __s5param2) {
      var __s5local0 = __s5param0.entry;
      __s5param0.entry = null;
      while (__s5local0) {
        var __s5local1 = __s5local0.callback;
        __s5param1.pendingcb--;
        __s5local1(__s5param2);
        __s5local0 = __s5local0.next;
      }
      __s5param1.corkedRequestsFree.next = __s5param0;
    })(__s1local0, __s1param0);
  };
}
var __s0local0;
module.exports = Writable;
Writable.WritableState = WritableState;
var __s0local1 = {
  deprecate: require("gge-module:exact_7357c18e0605dc1b")
};
var __dep_exact_b2b03f94649f1d90 = require("gge-module:exact_b2b03f94649f1d90");
var __s0local2 = require("gge-module:export_INSPECT_MAX_BYTES").Buffer;
var __s0local3 = __dep_exact_d8857732a937369e.Uint8Array || function () {};
var __s0local4;
var __dep_exact_8a487fc32c912355 = require("gge-module:exact_8a487fc32c912355");
var __s0local5 = require("gge-module:exact_73c74d53982a1bcd").getHighWaterMark;
var __s0local6 = require("gge-module:export_codes").codes;
var __s0local7 = __s0local6.ERR_INVALID_ARG_TYPE;
var __s0local8 = __s0local6.ERR_METHOD_NOT_IMPLEMENTED;
var __s0local9 = __s0local6.ERR_MULTIPLE_CALLBACK;
var __s0local10 = __s0local6.ERR_STREAM_CANNOT_PIPE;
var __s0local11 = __s0local6.ERR_STREAM_DESTROYED;
var __s0local12 = __s0local6.ERR_STREAM_NULL_VALUES;
var __s0local13 = __s0local6.ERR_STREAM_WRITE_AFTER_END;
var __s0local14 = __s0local6.ERR_UNKNOWN_ENCODING;
var __s0local15 = __dep_exact_8a487fc32c912355.errorOrDestroy;
function nop() {}
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
function Writable(__s33param0) {
  var __s33local0 = this instanceof (__s0local0 = __s0local0 || require("gge-module:class_Duplex"));
  if (!__s33local0 && !__s0local4.call(Writable, this)) {
    return new Writable(__s33param0);
  }
  this._writableState = new WritableState(__s33param0, this, __s33local0);
  this.writable = true;
  if (__s33param0) {
    if (typeof __s33param0.write == "function") {
      this._write = __s33param0.write;
    }
    if (typeof __s33param0.writev == "function") {
      this._writev = __s33param0.writev;
    }
    if (typeof __s33param0.destroy == "function") {
      this._destroy = __s33param0.destroy;
    }
    if (typeof __s33param0.final == "function") {
      this._final = __s33param0.final;
    }
  }
  __dep_exact_b2b03f94649f1d90.call(this);
}
function doWrite(__s41param0, __s41param1, __s41param2, __s41param3, __s41param4, __s41param5, __s41param6) {
  __s41param1.writelen = __s41param3;
  __s41param1.writecb = __s41param6;
  __s41param1.writing = true;
  __s41param1.sync = true;
  if (__s41param1.destroyed) {
    __s41param1.onwrite(new __s0local11("write"));
  } else if (__s41param2) {
    __s41param0._writev(__s41param4, __s41param1.onwrite);
  } else {
    __s41param0._write(__s41param4, __s41param5, __s41param1.onwrite);
  }
  __s41param1.sync = false;
}
function afterWrite(__s46param0, __s46param1, __s46param2, __s46param3) {
  if (!__s46param2) {
    (function onwriteDrain(__s49param0, __s49param1) {
      if (__s49param1.length === 0 && __s49param1.needDrain) {
        __s49param1.needDrain = false;
        __s49param0.emit("drain");
      }
    })(__s46param0, __s46param1);
  }
  __s46param1.pendingcb--;
  __s46param3();
  finishMaybe(__s46param0, __s46param1);
}
function clearBuffer(__s52param0, __s52param1) {
  __s52param1.bufferProcessing = true;
  var __s52local0 = __s52param1.bufferedRequest;
  if (__s52param0._writev && __s52local0 && __s52local0.next) {
    var __s52local1 = __s52param1.bufferedRequestCount;
    var __s52local2 = new Array(__s52local1);
    var __s52local3 = __s52param1.corkedRequestsFree;
    __s52local3.entry = __s52local0;
    var __s52local4 = 0;
    var __s52local5 = true;
    for (; __s52local0;) {
      __s52local2[__s52local4] = __s52local0;
      if (!__s52local0.isBuf) {
        __s52local5 = false;
      }
      __s52local0 = __s52local0.next;
      __s52local4 += 1;
    }
    __s52local2.allBuffers = __s52local5;
    doWrite(__s52param0, __s52param1, true, __s52param1.length, __s52local2, "", __s52local3.finish);
    __s52param1.pendingcb++;
    __s52param1.lastBufferedRequest = null;
    if (__s52local3.next) {
      __s52param1.corkedRequestsFree = __s52local3.next;
      __s52local3.next = null;
    } else {
      __s52param1.corkedRequestsFree = new CorkedRequest(__s52param1);
    }
    __s52param1.bufferedRequestCount = 0;
  } else {
    while (__s52local0) {
      var __s52local6 = __s52local0.chunk;
      var __s52local7 = __s52local0.encoding;
      var __s52local8 = __s52local0.callback;
      doWrite(__s52param0, __s52param1, false, __s52param1.objectMode ? 1 : __s52local6.length, __s52local6, __s52local7, __s52local8);
      __s52local0 = __s52local0.next;
      __s52param1.bufferedRequestCount--;
      if (__s52param1.writing) {
        break;
      }
    }
    if (__s52local0 === null) {
      __s52param1.lastBufferedRequest = null;
    }
  }
  __s52param1.bufferedRequest = __s52local0;
  __s52param1.bufferProcessing = false;
}
function needFinish(__s65param0) {
  return __s65param0.ending && __s65param0.length === 0 && __s65param0.bufferedRequest === null && !__s65param0.finished && !__s65param0.writing;
}
function callFinal(__s67param0, __s67param1) {
  __s67param0._final(function (__s69param0) {
    __s67param1.pendingcb--;
    if (__s69param0) {
      __s0local15(__s67param0, __s69param0);
    }
    __s67param1.prefinished = true;
    __s67param0.emit("prefinish");
    finishMaybe(__s67param0, __s67param1);
  });
}
function finishMaybe(__s72param0, __s72param1) {
  var __s72local0 = needFinish(__s72param1);
  if (__s72local0 && (function prefinish(__s74param0, __s74param1) {
    if (!__s74param1.prefinished && !__s74param1.finalCalled) {
      if (typeof __s74param0._final != "function" || __s74param1.destroyed) {
        __s74param1.prefinished = true;
        __s74param0.emit("prefinish");
      } else {
        __s74param1.pendingcb++;
        __s74param1.finalCalled = true;
        __dep_class_Item.nextTick(callFinal, __s74param0, __s74param1);
      }
    }
  }(__s72param0, __s72param1), __s72param1.pendingcb === 0 && (__s72param1.finished = true, __s72param0.emit("finish"), __s72param1.autoDestroy))) {
    var __s72local1 = __s72param0._readableState;
    if (!__s72local1 || __s72local1.autoDestroy && __s72local1.endEmitted) {
      __s72param0.destroy();
    }
  }
  return __s72local0;
}
require("gge-module:opaque_abbdd9b5728f0d40f7dc71b1")(Writable, __dep_exact_b2b03f94649f1d90);
WritableState.prototype.getBuffer = function getBuffer() {
  for (var __s81local0 = this.bufferedRequest, __s81local1 = []; __s81local0;) {
    __s81local1.push(__s81local0);
    __s81local0 = __s81local0.next;
  }
  return __s81local1;
};
(function () {
  try {
    Object.defineProperty(WritableState.prototype, "buffer", {
      get: __s0local1.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
    });
  } catch (__s90local0) {}
})();
if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
  __s0local4 = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(__s93param0) {
      return !!__s0local4.call(this, __s93param0) || this === Writable && __s93param0 && __s93param0._writableState instanceof WritableState;
    }
  });
} else {
  __s0local4 = function realHasInstance(__s96param0) {
    return __s96param0 instanceof this;
  };
}
Writable.prototype.pipe = function () {
  __s0local15(this, new __s0local10());
};
Writable.prototype.write = function (__s100param0, __s100param1, __s100param2) {
  var __s100local0 = this._writableState;
  var __s100local1 = false;
  var __s100local2 = !__s100local0.objectMode && function _isUint8Array(__s102param0) {
    return __s0local2.isBuffer(__s102param0) || __s102param0 instanceof __s0local3;
  }(__s100param0);
  if (__s100local2 && !__s0local2.isBuffer(__s100param0)) {
    __s100param0 = function _uint8ArrayToBuffer(__s105param0) {
      return __s0local2.from(__s105param0);
    }(__s100param0);
  }
  if (typeof __s100param1 == "function") {
    __s100param2 = __s100param1;
    __s100param1 = null;
  }
  if (__s100local2) {
    __s100param1 = "buffer";
  } else {
    __s100param1 ||= __s100local0.defaultEncoding;
  }
  if (typeof __s100param2 != "function") {
    __s100param2 = nop;
  }
  if (__s100local0.ending) {
    (function writeAfterEnd(__s112param0, __s112param1) {
      var __s112local0 = new __s0local13();
      __s0local15(__s112param0, __s112local0);
      __dep_class_Item.nextTick(__s112param1, __s112local0);
    })(this, __s100param2);
  } else if (__s100local2 || function validChunk(__s114param0, __s114param1, __s114param2, __s114param3) {
    var __s114local0;
    if (__s114param2 === null) {
      __s114local0 = new __s0local12();
    } else if (typeof __s114param2 != "string" && !__s114param1.objectMode) {
      __s114local0 = new __s0local7("chunk", ["string", "Buffer"], __s114param2);
    }
    return !__s114local0 || (__s0local15(__s114param0, __s114local0), __dep_class_Item.nextTick(__s114param3, __s114local0), false);
  }(this, __s100local0, __s100param0, __s100param2)) {
    __s100local0.pendingcb++;
    __s100local1 = function writeOrBuffer(__s119param0, __s119param1, __s119param2, __s119param3, __s119param4, __s119param5) {
      if (!__s119param2) {
        var __s119local0 = function decodeChunk(__s122param0, __s122param1, __s122param2) {
          if (!__s122param0.objectMode && __s122param0.decodeStrings !== false && typeof __s122param1 == "string") {
            __s122param1 = __s0local2.from(__s122param1, __s122param2);
          }
          return __s122param1;
        }(__s119param1, __s119param3, __s119param4);
        if (__s119param3 !== __s119local0) {
          __s119param2 = true;
          __s119param4 = "buffer";
          __s119param3 = __s119local0;
        }
      }
      var __s119local1 = __s119param1.objectMode ? 1 : __s119param3.length;
      __s119param1.length += __s119local1;
      var __s119local2 = __s119param1.length < __s119param1.highWaterMark;
      if (!__s119local2) {
        __s119param1.needDrain = true;
      }
      if (__s119param1.writing || __s119param1.corked) {
        var __s119local3 = __s119param1.lastBufferedRequest;
        __s119param1.lastBufferedRequest = {
          chunk: __s119param3,
          encoding: __s119param4,
          isBuf: __s119param2,
          callback: __s119param5,
          next: null
        };
        if (__s119local3) {
          __s119local3.next = __s119param1.lastBufferedRequest;
        } else {
          __s119param1.bufferedRequest = __s119param1.lastBufferedRequest;
        }
        __s119param1.bufferedRequestCount += 1;
      } else {
        doWrite(__s119param0, __s119param1, false, __s119local1, __s119param3, __s119param4, __s119param5);
      }
      return __s119local2;
    }(this, __s100local0, __s100local2, __s100param0, __s100param1, __s100param2);
  }
  return __s100local1;
};
Writable.prototype.cork = function () {
  this._writableState.corked++;
};
Writable.prototype.uncork = function () {
  var __s133local0 = this._writableState;
  if (__s133local0.corked) {
    __s133local0.corked--;
    if (!__s133local0.writing && !__s133local0.corked && !__s133local0.bufferProcessing && !!__s133local0.bufferedRequest) {
      clearBuffer(this, __s133local0);
    }
  }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(__s137param0) {
  if (typeof __s137param0 == "string") {
    __s137param0 = __s137param0.toLowerCase();
  }
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((__s137param0 + "").toLowerCase()) > -1)) {
    throw new __s0local14(__s137param0);
  }
  this._writableState.defaultEncoding = __s137param0;
  return this;
};
Object.defineProperty(Writable.prototype, "writableBuffer", {
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Writable.prototype._write = function (__s145param0, __s145param1, __s145param2) {
  __s145param2(new __s0local8("_write()"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function (__s147param0, __s147param1, __s147param2) {
  var __s147local0 = this._writableState;
  if (typeof __s147param0 == "function") {
    __s147param2 = __s147param0;
    __s147param0 = null;
    __s147param1 = null;
  } else if (typeof __s147param1 == "function") {
    __s147param2 = __s147param1;
    __s147param1 = null;
  }
  if (__s147param0 !== null && __s147param0 !== undefined) {
    this.write(__s147param0, __s147param1);
  }
  if (__s147local0.corked) {
    __s147local0.corked = 1;
    this.uncork();
  }
  if (!__s147local0.ending) {
    (function endWritable(__s154param0, __s154param1, __s154param2) {
      __s154param1.ending = true;
      finishMaybe(__s154param0, __s154param1);
      if (__s154param2) {
        if (__s154param1.finished) {
          __dep_class_Item.nextTick(__s154param2);
        } else {
          __s154param0.once("finish", __s154param2);
        }
      }
      __s154param1.ended = true;
      __s154param0.writable = false;
    })(this, __s147local0, __s147param2);
  }
  return this;
};
Object.defineProperty(Writable.prototype, "writableLength", {
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});
Object.defineProperty(Writable.prototype, "destroyed", {
  enumerable: false,
  get: function get() {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function set(__s163param0) {
    if (this._writableState) {
      this._writableState.destroyed = __s163param0;
    }
  }
});
Writable.prototype.destroy = __dep_exact_8a487fc32c912355.destroy;
Writable.prototype._undestroy = __dep_exact_8a487fc32c912355.undestroy;
Writable.prototype._destroy = function (__s166param0, __s166param1) {
  __s166param1(__s166param0);
};
