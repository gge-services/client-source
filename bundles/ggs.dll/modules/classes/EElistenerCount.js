var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __dep_class_Item = require("gge-module:class_Item");
var __s0local0;
module.exports = Readable;
Readable.ReadableState = ReadableState;
require("gge-module:exact_1d35166404a4f9a6").EventEmitter;
var __s0local1 = function EElistenerCount(__s1param0, __s1param1) {
  return __s1param0.listeners(__s1param1).length;
};
var __dep_exact_b2b03f94649f1d90 = require("gge-module:exact_b2b03f94649f1d90");
var __s0local2 = require("gge-module:export_INSPECT_MAX_BYTES").Buffer;
var __s0local3 = __dep_exact_d8857732a937369e.Uint8Array || function () {};
var __s0local4;
var __dep_opaque_e3b0c44298fc1c149afbf4c8__1 = require("gge-module:opaque_e3b0c44298fc1c149afbf4c8__1");
__s0local4 = __dep_opaque_e3b0c44298fc1c149afbf4c8__1 && __dep_opaque_e3b0c44298fc1c149afbf4c8__1.debuglog ? __dep_opaque_e3b0c44298fc1c149afbf4c8__1.debuglog("stream") : function debug() {};
var __s0local5;
var __s0local6;
var __s0local7;
var __dep_class_BufferList = require("gge-module:class_BufferList");
var __dep_exact_8a487fc32c912355 = require("gge-module:exact_8a487fc32c912355");
var __s0local8 = require("gge-module:exact_73c74d53982a1bcd").getHighWaterMark;
var __s0local9 = require("gge-module:export_codes").codes;
var __s0local10 = __s0local9.ERR_INVALID_ARG_TYPE;
var __s0local11 = __s0local9.ERR_STREAM_PUSH_AFTER_EOF;
var __s0local12 = __s0local9.ERR_METHOD_NOT_IMPLEMENTED;
var __s0local13 = __s0local9.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
require("gge-module:opaque_abbdd9b5728f0d40f7dc71b1")(Readable, __dep_exact_b2b03f94649f1d90);
var __s0local14 = __dep_exact_8a487fc32c912355.errorOrDestroy;
var __s0local15 = ["error", "close", "destroy", "pause", "resume"];
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
function Readable(__s12param0) {
  __s0local0 = __s0local0 || require("gge-module:class_Duplex");
  if (!(this instanceof Readable)) {
    return new Readable(__s12param0);
  }
  var __s12local0 = this instanceof __s0local0;
  this._readableState = new ReadableState(__s12param0, this, __s12local0);
  this.readable = true;
  if (__s12param0) {
    if (typeof __s12param0.read == "function") {
      this._read = __s12param0.read;
    }
    if (typeof __s12param0.destroy == "function") {
      this._destroy = __s12param0.destroy;
    }
  }
  __dep_exact_b2b03f94649f1d90.call(this);
}
function readableAddChunk(__s18param0, __s18param1, __s18param2, __s18param3, __s18param4) {
  __s0local4("readableAddChunk", __s18param1);
  var __s18local0;
  var __s18local1 = __s18param0._readableState;
  if (__s18param1 === null) {
    __s18local1.reading = false;
    (function onEofChunk(__s21param0, __s21param1) {
      __s0local4("onEofChunk");
      if (__s21param1.ended) {
        return;
      }
      if (__s21param1.decoder) {
        var __s21local0 = __s21param1.decoder.end();
        if (__s21local0 && __s21local0.length) {
          __s21param1.buffer.push(__s21local0);
          __s21param1.length += __s21param1.objectMode ? 1 : __s21local0.length;
        }
      }
      __s21param1.ended = true;
      if (__s21param1.sync) {
        emitReadable(__s21param0);
      } else {
        __s21param1.needReadable = false;
        if (!__s21param1.emittedReadable) {
          __s21param1.emittedReadable = true;
          emitReadable_(__s21param0);
        }
      }
    })(__s18param0, __s18local1);
  } else {
    if (!__s18param4) {
      __s18local0 = function chunkInvalid(__s31param0, __s31param1) {
        var __s31local0;
        if (!function _isUint8Array(__s33param0) {
          return __s0local2.isBuffer(__s33param0) || __s33param0 instanceof __s0local3;
        }(__s31param1) && typeof __s31param1 != "string" && __s31param1 !== undefined && !__s31param0.objectMode) {
          __s31local0 = new __s0local10("chunk", ["string", "Buffer", "Uint8Array"], __s31param1);
        }
        return __s31local0;
      }(__s18local1, __s18param1);
    }
    if (__s18local0) {
      __s0local14(__s18param0, __s18local0);
    } else if (__s18local1.objectMode || __s18param1 && __s18param1.length > 0) {
      if (typeof __s18param1 != "string" && !__s18local1.objectMode && Object.getPrototypeOf(__s18param1) !== __s0local2.prototype) {
        __s18param1 = function _uint8ArrayToBuffer(__s39param0) {
          return __s0local2.from(__s39param0);
        }(__s18param1);
      }
      if (__s18param3) {
        if (__s18local1.endEmitted) {
          __s0local14(__s18param0, new __s0local13());
        } else {
          addChunk(__s18param0, __s18local1, __s18param1, true);
        }
      } else if (__s18local1.ended) {
        __s0local14(__s18param0, new __s0local11());
      } else {
        if (__s18local1.destroyed) {
          return false;
        }
        __s18local1.reading = false;
        if (__s18local1.decoder && !__s18param2) {
          __s18param1 = __s18local1.decoder.write(__s18param1);
          if (__s18local1.objectMode || __s18param1.length !== 0) {
            addChunk(__s18param0, __s18local1, __s18param1, false);
          } else {
            maybeReadMore(__s18param0, __s18local1);
          }
        } else {
          addChunk(__s18param0, __s18local1, __s18param1, false);
        }
      }
    } else if (!__s18param3) {
      __s18local1.reading = false;
      maybeReadMore(__s18param0, __s18local1);
    }
  }
  return !__s18local1.ended && (__s18local1.length < __s18local1.highWaterMark || __s18local1.length === 0);
}
function addChunk(__s52param0, __s52param1, __s52param2, __s52param3) {
  if (__s52param1.flowing && __s52param1.length === 0 && !__s52param1.sync) {
    __s52param1.awaitDrain = 0;
    __s52param0.emit("data", __s52param2);
  } else {
    __s52param1.length += __s52param1.objectMode ? 1 : __s52param2.length;
    if (__s52param3) {
      __s52param1.buffer.unshift(__s52param2);
    } else {
      __s52param1.buffer.push(__s52param2);
    }
    if (__s52param1.needReadable) {
      emitReadable(__s52param0);
    }
  }
  maybeReadMore(__s52param0, __s52param1);
}
Object.defineProperty(Readable.prototype, "destroyed", {
  enumerable: false,
  get: function get() {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function set(__s61param0) {
    if (this._readableState) {
      this._readableState.destroyed = __s61param0;
    }
  }
});
Readable.prototype.destroy = __dep_exact_8a487fc32c912355.destroy;
Readable.prototype._undestroy = __dep_exact_8a487fc32c912355.undestroy;
Readable.prototype._destroy = function (__s64param0, __s64param1) {
  __s64param1(__s64param0);
};
Readable.prototype.push = function (__s66param0, __s66param1) {
  var __s66local0;
  var __s66local1 = this._readableState;
  if (__s66local1.objectMode) {
    __s66local0 = true;
  } else if (typeof __s66param0 == "string") {
    if ((__s66param1 = __s66param1 || __s66local1.defaultEncoding) !== __s66local1.encoding) {
      __s66param0 = __s0local2.from(__s66param0, __s66param1);
      __s66param1 = "";
    }
    __s66local0 = true;
  }
  return readableAddChunk(this, __s66param0, __s66param1, false, __s66local0);
};
Readable.prototype.unshift = function (__s71param0) {
  return readableAddChunk(this, __s71param0, null, true, false);
};
Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
Readable.prototype.setEncoding = function (__s75param0) {
  __s0local5 ||= require("gge-module:export_StringDecoder").StringDecoder;
  var __s75local0 = new __s0local5(__s75param0);
  this._readableState.decoder = __s75local0;
  this._readableState.encoding = this._readableState.decoder.encoding;
  for (var __s75local1 = this._readableState.buffer.head, __s75local2 = ""; __s75local1 !== null;) {
    __s75local2 += __s75local0.write(__s75local1.data);
    __s75local1 = __s75local1.next;
  }
  this._readableState.buffer.clear();
  if (__s75local2 !== "") {
    this._readableState.buffer.push(__s75local2);
  }
  this._readableState.length = __s75local2.length;
  return this;
};
var __s0local16 = 1073741824;
function howMuchToRead(__s80param0, __s80param1) {
  if (__s80param0 <= 0 || __s80param1.length === 0 && __s80param1.ended) {
    return 0;
  } else if (__s80param1.objectMode) {
    return 1;
  } else if (__s80param0 != __s80param0) {
    if (__s80param1.flowing && __s80param1.length) {
      return __s80param1.buffer.head.data.length;
    } else {
      return __s80param1.length;
    }
  } else {
    if (__s80param0 > __s80param1.highWaterMark) {
      __s80param1.highWaterMark = function computeNewHighWaterMark(__s89param0) {
        if (__s89param0 >= __s0local16) {
          __s89param0 = __s0local16;
        } else {
          __s89param0--;
          __s89param0 |= __s89param0 >>> 1;
          __s89param0 |= __s89param0 >>> 2;
          __s89param0 |= __s89param0 >>> 4;
          __s89param0 |= __s89param0 >>> 8;
          __s89param0 |= __s89param0 >>> 16;
          __s89param0++;
        }
        return __s89param0;
      }(__s80param0);
    }
    if (__s80param0 <= __s80param1.length) {
      return __s80param0;
    } else if (__s80param1.ended) {
      return __s80param1.length;
    } else {
      __s80param1.needReadable = true;
      return 0;
    }
  }
}
function emitReadable(__s96param0) {
  var __s96local0 = __s96param0._readableState;
  __s0local4("emitReadable", __s96local0.needReadable, __s96local0.emittedReadable);
  __s96local0.needReadable = false;
  if (!__s96local0.emittedReadable) {
    __s0local4("emitReadable", __s96local0.flowing);
    __s96local0.emittedReadable = true;
    __dep_class_Item.nextTick(emitReadable_, __s96param0);
  }
}
function emitReadable_(__s99param0) {
  var __s99local0 = __s99param0._readableState;
  __s0local4("emitReadable_", __s99local0.destroyed, __s99local0.length, __s99local0.ended);
  if (!__s99local0.destroyed && (!!__s99local0.length || !!__s99local0.ended)) {
    __s99param0.emit("readable");
    __s99local0.emittedReadable = false;
  }
  __s99local0.needReadable = !__s99local0.flowing && !__s99local0.ended && __s99local0.length <= __s99local0.highWaterMark;
  flow(__s99param0);
}
function maybeReadMore(__s102param0, __s102param1) {
  if (!__s102param1.readingMore) {
    __s102param1.readingMore = true;
    __dep_class_Item.nextTick(maybeReadMore_, __s102param0, __s102param1);
  }
}
function maybeReadMore_(__s105param0, __s105param1) {
  while (!__s105param1.reading && !__s105param1.ended && (__s105param1.length < __s105param1.highWaterMark || __s105param1.flowing && __s105param1.length === 0)) {
    var __s105local0 = __s105param1.length;
    __s0local4("maybeReadMore read 0");
    __s105param0.read(0);
    if (__s105local0 === __s105param1.length) {
      break;
    }
  }
  __s105param1.readingMore = false;
}
function updateReadableListening(__s110param0) {
  var __s110local0 = __s110param0._readableState;
  __s110local0.readableListening = __s110param0.listenerCount("readable") > 0;
  if (__s110local0.resumeScheduled && !__s110local0.paused) {
    __s110local0.flowing = true;
  } else if (__s110param0.listenerCount("data") > 0) {
    __s110param0.resume();
  }
}
function nReadingNextTick(__s114param0) {
  __s0local4("readable nexttick read 0");
  __s114param0.read(0);
}
function resume_(__s116param0, __s116param1) {
  __s0local4("resume", __s116param1.reading);
  if (!__s116param1.reading) {
    __s116param0.read(0);
  }
  __s116param1.resumeScheduled = false;
  __s116param0.emit("resume");
  flow(__s116param0);
  if (__s116param1.flowing && !__s116param1.reading) {
    __s116param0.read(0);
  }
}
function flow(__s120param0) {
  var __s120local0 = __s120param0._readableState;
  for (__s0local4("flow", __s120local0.flowing); __s120local0.flowing && __s120param0.read() !== null;);
}
function fromList(__s123param0, __s123param1) {
  if (__s123param1.length === 0) {
    return null;
  } else {
    if (__s123param1.objectMode) {
      __s123local0 = __s123param1.buffer.shift();
    } else if (!__s123param0 || __s123param0 >= __s123param1.length) {
      __s123local0 = __s123param1.decoder ? __s123param1.buffer.join("") : __s123param1.buffer.length === 1 ? __s123param1.buffer.first() : __s123param1.buffer.concat(__s123param1.length);
      __s123param1.buffer.clear();
    } else {
      __s123local0 = __s123param1.buffer.consume(__s123param0, __s123param1.decoder);
    }
    return __s123local0;
  }
  var __s123local0;
}
function endReadable(__s130param0) {
  var __s130local0 = __s130param0._readableState;
  __s0local4("endReadable", __s130local0.endEmitted);
  if (!__s130local0.endEmitted) {
    __s130local0.ended = true;
    __dep_class_Item.nextTick(endReadableNT, __s130local0, __s130param0);
  }
}
function endReadableNT(__s133param0, __s133param1) {
  __s0local4("endReadableNT", __s133param0.endEmitted, __s133param0.length);
  if (!__s133param0.endEmitted && __s133param0.length === 0 && (__s133param0.endEmitted = true, __s133param1.readable = false, __s133param1.emit("end"), __s133param0.autoDestroy)) {
    var __s133local0 = __s133param1._writableState;
    if (!__s133local0 || __s133local0.autoDestroy && __s133local0.finished) {
      __s133param1.destroy();
    }
  }
}
function indexOf(__s137param0, __s137param1) {
  for (var __s137local0 = 0, __s137local1 = __s137param0.length; __s137local0 < __s137local1; __s137local0++) {
    if (__s137param0[__s137local0] === __s137param1) {
      return __s137local0;
    }
  }
  return -1;
}
Readable.prototype.read = function (__s142param0) {
  __s0local4("read", __s142param0);
  __s142param0 = parseInt(__s142param0, 10);
  var __s142local0 = this._readableState;
  var __s142local1 = __s142param0;
  if (__s142param0 !== 0) {
    __s142local0.emittedReadable = false;
  }
  if (__s142param0 === 0 && __s142local0.needReadable && ((__s142local0.highWaterMark !== 0 ? __s142local0.length >= __s142local0.highWaterMark : __s142local0.length > 0) || __s142local0.ended)) {
    __s0local4("read: emitReadable", __s142local0.length, __s142local0.ended);
    if (__s142local0.length === 0 && __s142local0.ended) {
      endReadable(this);
    } else {
      emitReadable(this);
    }
    return null;
  }
  if ((__s142param0 = howMuchToRead(__s142param0, __s142local0)) === 0 && __s142local0.ended) {
    if (__s142local0.length === 0) {
      endReadable(this);
    }
    return null;
  }
  var __s142local2;
  var __s142local3 = __s142local0.needReadable;
  __s0local4("need readable", __s142local3);
  if (__s142local0.length === 0 || __s142local0.length - __s142param0 < __s142local0.highWaterMark) {
    __s0local4("length less than watermark", __s142local3 = true);
  }
  if (__s142local0.ended || __s142local0.reading) {
    __s0local4("reading or ended", __s142local3 = false);
  } else if (__s142local3) {
    __s0local4("do read");
    __s142local0.reading = true;
    __s142local0.sync = true;
    if (__s142local0.length === 0) {
      __s142local0.needReadable = true;
    }
    this._read(__s142local0.highWaterMark);
    __s142local0.sync = false;
    if (!__s142local0.reading) {
      __s142param0 = howMuchToRead(__s142local1, __s142local0);
    }
  }
  if ((__s142local2 = __s142param0 > 0 ? fromList(__s142param0, __s142local0) : null) === null) {
    __s142local0.needReadable = __s142local0.length <= __s142local0.highWaterMark;
    __s142param0 = 0;
  } else {
    __s142local0.length -= __s142param0;
    __s142local0.awaitDrain = 0;
  }
  if (__s142local0.length === 0) {
    if (!__s142local0.ended) {
      __s142local0.needReadable = true;
    }
    if (__s142local1 !== __s142param0 && __s142local0.ended) {
      endReadable(this);
    }
  }
  if (__s142local2 !== null) {
    this.emit("data", __s142local2);
  }
  return __s142local2;
};
Readable.prototype._read = function (__s161param0) {
  __s0local14(this, new __s0local12("_read()"));
};
Readable.prototype.pipe = function (__s163param0, __s163param1) {
  var __s163local0 = this;
  var __s163local1 = this._readableState;
  switch (__s163local1.pipesCount) {
    case 0:
      __s163local1.pipes = __s163param0;
      break;
    case 1:
      __s163local1.pipes = [__s163local1.pipes, __s163param0];
      break;
    default:
      __s163local1.pipes.push(__s163param0);
  }
  __s163local1.pipesCount += 1;
  __s0local4("pipe count=%d opts=%j", __s163local1.pipesCount, __s163param1);
  var __s163local2 = (!__s163param1 || __s163param1.end !== false) && __s163param0 !== __dep_class_Item.stdout && __s163param0 !== __dep_class_Item.stderr ? onend : unpipe;
  function onunpipe(__s166param0, __s166param1) {
    __s0local4("onunpipe");
    if (__s166param0 === __s163local0 && __s166param1 && __s166param1.hasUnpiped === false) {
      __s166param1.hasUnpiped = true;
      (function cleanup() {
        __s0local4("cleanup");
        __s163param0.removeListener("close", onclose);
        __s163param0.removeListener("finish", onfinish);
        __s163param0.removeListener("drain", __s163local3);
        __s163param0.removeListener("error", onerror);
        __s163param0.removeListener("unpipe", onunpipe);
        __s163local0.removeListener("end", onend);
        __s163local0.removeListener("end", unpipe);
        __s163local0.removeListener("data", ondata);
        __s163local4 = true;
        if (!!__s163local1.awaitDrain && (!__s163param0._writableState || !!__s163param0._writableState.needDrain)) {
          __s163local3();
        }
      })();
    }
  }
  function onend() {
    __s0local4("onend");
    __s163param0.end();
  }
  if (__s163local1.endEmitted) {
    __dep_class_Item.nextTick(__s163local2);
  } else {
    __s163local0.once("end", __s163local2);
  }
  __s163param0.on("unpipe", onunpipe);
  var __s163local3 = function pipeOnDrain(__s176param0) {
    return function pipeOnDrainFunctionResult() {
      var __s178local0 = __s176param0._readableState;
      __s0local4("pipeOnDrain", __s178local0.awaitDrain);
      if (__s178local0.awaitDrain) {
        __s178local0.awaitDrain--;
      }
      if (__s178local0.awaitDrain === 0 && __s0local1(__s176param0, "data")) {
        __s178local0.flowing = true;
        flow(__s176param0);
      }
    };
  }(__s163local0);
  __s163param0.on("drain", __s163local3);
  var __s163local4 = false;
  function ondata(__s182param0) {
    __s0local4("ondata");
    var __s182local0 = __s163param0.write(__s182param0);
    __s0local4("dest.write", __s182local0);
    if (__s182local0 === false) {
      if ((__s163local1.pipesCount === 1 && __s163local1.pipes === __s163param0 || __s163local1.pipesCount > 1 && indexOf(__s163local1.pipes, __s163param0) !== -1) && !__s163local4) {
        __s0local4("false write response, pause", __s163local1.awaitDrain);
        __s163local1.awaitDrain++;
      }
      __s163local0.pause();
    }
  }
  function onerror(__s186param0) {
    __s0local4("onerror", __s186param0);
    unpipe();
    __s163param0.removeListener("error", onerror);
    if (__s0local1(__s163param0, "error") === 0) {
      __s0local14(__s163param0, __s186param0);
    }
  }
  function onclose() {
    __s163param0.removeListener("finish", onfinish);
    unpipe();
  }
  function onfinish() {
    __s0local4("onfinish");
    __s163param0.removeListener("close", onclose);
    unpipe();
  }
  function unpipe() {
    __s0local4("unpipe");
    __s163local0.unpipe(__s163param0);
  }
  __s163local0.on("data", ondata);
  (function prependListener(__s195param0, __s195param1, __s195param2) {
    if (typeof __s195param0.prependListener == "function") {
      return __s195param0.prependListener(__s195param1, __s195param2);
    }
    if (__s195param0._events && __s195param0._events[__s195param1]) {
      if (Array.isArray(__s195param0._events[__s195param1])) {
        __s195param0._events[__s195param1].unshift(__s195param2);
      } else {
        __s195param0._events[__s195param1] = [__s195param2, __s195param0._events[__s195param1]];
      }
    } else {
      __s195param0.on(__s195param1, __s195param2);
    }
  })(__s163param0, "error", onerror);
  __s163param0.once("close", onclose);
  __s163param0.once("finish", onfinish);
  __s163param0.emit("pipe", __s163local0);
  if (!__s163local1.flowing) {
    __s0local4("pipe resume");
    __s163local0.resume();
  }
  return __s163param0;
};
Readable.prototype.unpipe = function (__s203param0) {
  var __s203local0 = this._readableState;
  var __s203local1 = {
    hasUnpiped: false
  };
  if (__s203local0.pipesCount === 0) {
    return this;
  }
  if (__s203local0.pipesCount === 1) {
    if (__s203param0 && __s203param0 !== __s203local0.pipes) {
      return this;
    } else {
      __s203param0 ||= __s203local0.pipes;
      __s203local0.pipes = null;
      __s203local0.pipesCount = 0;
      __s203local0.flowing = false;
      if (__s203param0) {
        __s203param0.emit("unpipe", this, __s203local1);
      }
      return this;
    }
  }
  if (!__s203param0) {
    var __s203local2 = __s203local0.pipes;
    var __s203local3 = __s203local0.pipesCount;
    __s203local0.pipes = null;
    __s203local0.pipesCount = 0;
    __s203local0.flowing = false;
    for (var __s203local4 = 0; __s203local4 < __s203local3; __s203local4++) {
      __s203local2[__s203local4].emit("unpipe", this, {
        hasUnpiped: false
      });
    }
    return this;
  }
  var __s203local5 = indexOf(__s203local0.pipes, __s203param0);
  if (__s203local5 === -1) {
    return this;
  } else {
    __s203local0.pipes.splice(__s203local5, 1);
    __s203local0.pipesCount -= 1;
    if (__s203local0.pipesCount === 1) {
      __s203local0.pipes = __s203local0.pipes[0];
    }
    __s203param0.emit("unpipe", this, __s203local1);
    return this;
  }
};
Readable.prototype.on = function (__s216param0, __s216param1) {
  var __s216local0 = __dep_exact_b2b03f94649f1d90.prototype.on.call(this, __s216param0, __s216param1);
  var __s216local1 = this._readableState;
  if (__s216param0 === "data") {
    __s216local1.readableListening = this.listenerCount("readable") > 0;
    if (__s216local1.flowing !== false) {
      this.resume();
    }
  } else if (__s216param0 === "readable") {
    if (!__s216local1.endEmitted && !__s216local1.readableListening) {
      __s216local1.readableListening = __s216local1.needReadable = true;
      __s216local1.flowing = false;
      __s216local1.emittedReadable = false;
      __s0local4("on readable", __s216local1.length, __s216local1.reading);
      if (__s216local1.length) {
        emitReadable(this);
      } else if (!__s216local1.reading) {
        __dep_class_Item.nextTick(nReadingNextTick, this);
      }
    }
  }
  return __s216local0;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function (__s224param0, __s224param1) {
  var __s224local0 = __dep_exact_b2b03f94649f1d90.prototype.removeListener.call(this, __s224param0, __s224param1);
  if (__s224param0 === "readable") {
    __dep_class_Item.nextTick(updateReadableListening, this);
  }
  return __s224local0;
};
Readable.prototype.removeAllListeners = function (__s227param0) {
  var __s227local0 = __dep_exact_b2b03f94649f1d90.prototype.removeAllListeners.apply(this, arguments);
  if (__s227param0 === "readable" || __s227param0 === undefined) {
    __dep_class_Item.nextTick(updateReadableListening, this);
  }
  return __s227local0;
};
Readable.prototype.resume = function () {
  var __s230local0 = this._readableState;
  if (!__s230local0.flowing) {
    __s0local4("resume");
    __s230local0.flowing = !__s230local0.readableListening;
    (function resume(__s233param0, __s233param1) {
      if (!__s233param1.resumeScheduled) {
        __s233param1.resumeScheduled = true;
        __dep_class_Item.nextTick(resume_, __s233param0, __s233param1);
      }
    })(this, __s230local0);
  }
  __s230local0.paused = false;
  return this;
};
Readable.prototype.pause = function () {
  __s0local4("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    __s0local4("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  this._readableState.paused = true;
  return this;
};
Readable.prototype.wrap = function (__s239param0) {
  var __s239local0 = this;
  var __s239local1 = this._readableState;
  var __s239local2 = false;
  __s239param0.on("end", function () {
    __s0local4("wrapped end");
    if (__s239local1.decoder && !__s239local1.ended) {
      var __s241local0 = __s239local1.decoder.end();
      if (__s241local0 && __s241local0.length) {
        __s239local0.push(__s241local0);
      }
    }
    __s239local0.push(null);
  });
  __s239param0.on("data", function (__s245param0) {
    if ((__s0local4("wrapped data"), __s239local1.decoder && (__s245param0 = __s239local1.decoder.write(__s245param0)), !__s239local1.objectMode || __s245param0 !== null && __s245param0 !== undefined) && (__s239local1.objectMode || __s245param0 && __s245param0.length)) {
      if (!__s239local0.push(__s245param0)) {
        __s239local2 = true;
        __s239param0.pause();
      }
    }
  });
  for (var __s239local3 in __s239param0) {
    if (this[__s239local3] === undefined && typeof __s239param0[__s239local3] == "function") {
      this[__s239local3] = function methodWrap(__s252param0) {
        return function methodWrapReturnFunction() {
          return __s239param0[__s252param0].apply(__s239param0, arguments);
        };
      }(__s239local3);
    }
  }
  for (var __s239local4 = 0; __s239local4 < __s0local15.length; __s239local4++) {
    __s239param0.on(__s0local15[__s239local4], this.emit.bind(this, __s0local15[__s239local4]));
  }
  this._read = function (__s258param0) {
    __s0local4("wrapped _read", __s258param0);
    if (__s239local2) {
      __s239local2 = false;
      __s239param0.resume();
    }
  };
  return this;
};
if (typeof Symbol == "function") {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (__s0local6 === undefined) {
      __s0local6 = require("gge-module:exact_4b0c52c84c97113b");
    }
    return __s0local6(this);
  };
}
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, "readableBuffer", {
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, "readableFlowing", {
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(__s271param0) {
    if (this._readableState) {
      this._readableState.flowing = __s271param0;
    }
  }
});
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, "readableLength", {
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
});
if (typeof Symbol == "function") {
  Readable.from = function (__s277param0, __s277param1) {
    if (__s0local7 === undefined) {
      __s0local7 = require("gge-module:exact_8fa0831bfdca891a");
    }
    return __s0local7(Readable, __s277param0, __s277param1);
  };
}
