var __dep_class_Item = require("gge-module:class_Item");
var __s0local0;
function _defineProperty(__s1param0, __s1param1, __s1param2) {
  if (__s1param1 in __s1param0) {
    Object.defineProperty(__s1param0, __s1param1, {
      value: __s1param2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    __s1param0[__s1param1] = __s1param2;
  }
  return __s1param0;
}
var __dep_exact_4bd25ea810b22e83 = require("gge-module:exact_4bd25ea810b22e83");
var __s0local1 = Symbol("lastResolve");
var __s0local2 = Symbol("lastReject");
var __s0local3 = Symbol("error");
var __s0local4 = Symbol("ended");
var __s0local5 = Symbol("lastPromise");
var __s0local6 = Symbol("handlePromise");
var __s0local7 = Symbol("stream");
function createIterResult(__s5param0, __s5param1) {
  return {
    value: __s5param0,
    done: __s5param1
  };
}
function readAndResolve(__s7param0) {
  var __s7local0 = __s7param0[__s0local1];
  if (__s7local0 !== null) {
    var __s7local1 = __s7param0[__s0local7].read();
    if (__s7local1 !== null) {
      __s7param0[__s0local5] = null;
      __s7param0[__s0local1] = null;
      __s7param0[__s0local2] = null;
      __s7local0(createIterResult(__s7local1, false));
    }
  }
}
var __s0local8 = Object.getPrototypeOf(function () {});
var __s0local9 = Object.setPrototypeOf((_defineProperty(__s0local0 = {
  get stream() {
    return this[__s0local7];
  },
  next: function next() {
    var __s15local0 = this;
    var __s15local1 = this[__s0local3];
    if (__s15local1 !== null) {
      return Promise.reject(__s15local1);
    }
    if (this[__s0local4]) {
      return Promise.resolve(createIterResult(undefined, true));
    }
    if (this[__s0local7].destroyed) {
      return new Promise(function (__s20param0, __s20param1) {
        __dep_class_Item.nextTick(function () {
          if (__s15local0[__s0local3]) {
            __s20param1(__s15local0[__s0local3]);
          } else {
            __s20param0(createIterResult(undefined, true));
          }
        });
      });
    }
    var __s15local2;
    var __s15local3 = this[__s0local5];
    if (__s15local3) {
      __s15local2 = new Promise(function wrapForNext(__s27param0, __s27param1) {
        return function (__s29param0, __s29param1) {
          __s27param0.then(function () {
            if (__s27param1[__s0local4]) {
              __s29param0(createIterResult(undefined, true));
            } else {
              __s27param1[__s0local6](__s29param0, __s29param1);
            }
          }, __s29param1);
        };
      }(__s15local3, this));
    } else {
      var __s15local4 = this[__s0local7].read();
      if (__s15local4 !== null) {
        return Promise.resolve(createIterResult(__s15local4, false));
      }
      __s15local2 = new Promise(this[__s0local6]);
    }
    this[__s0local5] = __s15local2;
    return __s15local2;
  }
}, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(__s0local0, "return", function _return() {
  var __s39local0 = this;
  return new Promise(function (__s41param0, __s41param1) {
    __s39local0[__s0local7].destroy(null, function (__s43param0) {
      if (__s43param0) {
        __s41param1(__s43param0);
      } else {
        __s41param0(createIterResult(undefined, true));
      }
    });
  });
}), __s0local0), __s0local8);
module.exports = function createReadableStreamAsyncIterator(__s47param0) {
  var __s47local0;
  var __s47local1 = Object.create(__s0local9, (_defineProperty(__s47local0 = {}, __s0local7, {
    value: __s47param0,
    writable: true
  }), _defineProperty(__s47local0, __s0local1, {
    value: null,
    writable: true
  }), _defineProperty(__s47local0, __s0local2, {
    value: null,
    writable: true
  }), _defineProperty(__s47local0, __s0local3, {
    value: null,
    writable: true
  }), _defineProperty(__s47local0, __s0local4, {
    value: __s47param0._readableState.endEmitted,
    writable: true
  }), _defineProperty(__s47local0, __s0local6, {
    value: function value(__s49param0, __s49param1) {
      var __s49local0 = __s47local1[__s0local7].read();
      if (__s49local0) {
        __s47local1[__s0local5] = null;
        __s47local1[__s0local1] = null;
        __s47local1[__s0local2] = null;
        __s49param0(createIterResult(__s49local0, false));
      } else {
        __s47local1[__s0local1] = __s49param0;
        __s47local1[__s0local2] = __s49param1;
      }
    },
    writable: true
  }), __s47local0));
  __s47local1[__s0local5] = null;
  __dep_exact_4bd25ea810b22e83(__s47param0, function (__s53param0) {
    if (__s53param0 && __s53param0.code !== "ERR_STREAM_PREMATURE_CLOSE") {
      var __s53local0 = __s47local1[__s0local2];
      if (__s53local0 !== null) {
        __s47local1[__s0local5] = null;
        __s47local1[__s0local1] = null;
        __s47local1[__s0local2] = null;
        __s53local0(__s53param0);
      }
      __s47local1[__s0local3] = __s53param0;
      return;
    }
    var __s53local1 = __s47local1[__s0local1];
    if (__s53local1 !== null) {
      __s47local1[__s0local5] = null;
      __s47local1[__s0local1] = null;
      __s47local1[__s0local2] = null;
      __s53local1(createIterResult(undefined, true));
    }
    __s47local1[__s0local4] = true;
  });
  __s47param0.on("readable", function onReadable(__s58param0) {
    __dep_class_Item.nextTick(readAndResolve, __s58param0);
  }.bind(null, __s47local1));
  return __s47local1;
};
