var __s0local0 = require("gge-module:export_codes").codes.ERR_STREAM_PREMATURE_CLOSE;
function noop() {}
module.exports = function eos(__s3param0, __s3param1, __s3param2) {
  if (typeof __s3param1 == "function") {
    return eos(__s3param0, null, __s3param1);
  }
  __s3param1 ||= {};
  __s3param2 = function once(__s6param0) {
    var __s6local0 = false;
    return function () {
      if (!__s6local0) {
        __s6local0 = true;
        for (var __s8local0 = arguments.length, __s8local1 = new Array(__s8local0), __s8local2 = 0; __s8local2 < __s8local0; __s8local2++) {
          __s8local1[__s8local2] = arguments[__s8local2];
        }
        __s6param0.apply(this, __s8local1);
      }
    };
  }(__s3param2 || noop);
  var __s3local0 = __s3param1.readable || __s3param1.readable !== false && __s3param0.readable;
  var __s3local1 = __s3param1.writable || __s3param1.writable !== false && __s3param0.writable;
  var __s3local2 = function onlegacyfinish() {
    if (!__s3param0.writable) {
      __s3local4();
    }
  };
  var __s3local3 = __s3param0._writableState && __s3param0._writableState.finished;
  var __s3local4 = function onfinish() {
    __s3local1 = false;
    __s3local3 = true;
    if (!__s3local0) {
      __s3param2.call(__s3param0);
    }
  };
  var __s3local5 = __s3param0._readableState && __s3param0._readableState.endEmitted;
  var __s3local6 = function onend() {
    __s3local0 = false;
    __s3local5 = true;
    if (!__s3local1) {
      __s3param2.call(__s3param0);
    }
  };
  var __s3local7 = function onerror(__s22param0) {
    __s3param2.call(__s3param0, __s22param0);
  };
  var __s3local8 = function onclose() {
    var __s24local0;
    if (__s3local0 && !__s3local5) {
      if (!__s3param0._readableState || !__s3param0._readableState.ended) {
        __s24local0 = new __s0local0();
      }
      return __s3param2.call(__s3param0, __s24local0);
    } else if (__s3local1 && !__s3local3) {
      if (!__s3param0._writableState || !__s3param0._writableState.ended) {
        __s24local0 = new __s0local0();
      }
      return __s3param2.call(__s3param0, __s24local0);
    } else {
      return undefined;
    }
  };
  var __s3local9 = function onrequest() {
    __s3param0.req.on("finish", __s3local4);
  };
  if (function isRequest(__s33param0) {
    return __s33param0.setHeader && typeof __s33param0.abort == "function";
  }(__s3param0)) {
    __s3param0.on("complete", __s3local4);
    __s3param0.on("abort", __s3local8);
    if (__s3param0.req) {
      __s3local9();
    } else {
      __s3param0.on("request", __s3local9);
    }
  } else if (__s3local1 && !__s3param0._writableState) {
    __s3param0.on("end", __s3local2);
    __s3param0.on("close", __s3local2);
  }
  __s3param0.on("end", __s3local6);
  __s3param0.on("finish", __s3local4);
  if (__s3param1.error !== false) {
    __s3param0.on("error", __s3local7);
  }
  __s3param0.on("close", __s3local8);
  return function () {
    __s3param0.removeListener("complete", __s3local4);
    __s3param0.removeListener("abort", __s3local8);
    __s3param0.removeListener("request", __s3local9);
    if (__s3param0.req) {
      __s3param0.req.removeListener("finish", __s3local4);
    }
    __s3param0.removeListener("end", __s3local2);
    __s3param0.removeListener("close", __s3local2);
    __s3param0.removeListener("finish", __s3local4);
    __s3param0.removeListener("end", __s3local6);
    __s3param0.removeListener("error", __s3local7);
    __s3param0.removeListener("close", __s3local8);
  };
};
