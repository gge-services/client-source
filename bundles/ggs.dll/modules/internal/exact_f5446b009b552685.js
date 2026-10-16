var __s0local0;
var __s0local1 = require("gge-module:export_codes").codes;
var __s0local2 = __s0local1.ERR_MISSING_ARGS;
var __s0local3 = __s0local1.ERR_STREAM_DESTROYED;
function noop(__s1param0) {
  if (__s1param0) {
    throw __s1param0;
  }
}
function call(__s4param0) {
  __s4param0();
}
function pipe(__s6param0, __s6param1) {
  return __s6param0.pipe(__s6param1);
}
module.exports = function pipeline() {
  for (var __s8local0 = arguments.length, __s8local1 = new Array(__s8local0), __s8local2 = 0; __s8local2 < __s8local0; __s8local2++) {
    __s8local1[__s8local2] = arguments[__s8local2];
  }
  var __s8local3;
  var __s8local4 = function popCallback(__s12param0) {
    if (__s12param0.length) {
      if (typeof __s12param0[__s12param0.length - 1] != "function") {
        return noop;
      } else {
        return __s12param0.pop();
      }
    } else {
      return noop;
    }
  }(__s8local1);
  if (Array.isArray(__s8local1[0])) {
    __s8local1 = __s8local1[0];
  }
  if (__s8local1.length < 2) {
    throw new __s0local2("streams");
  }
  var __s8local5 = __s8local1.map(function (__s20param0, __s20param1) {
    var __s20local0 = __s20param1 < __s8local1.length - 1;
    return function destroyer(__s22param0, __s22param1, __s22param2, __s22param3) {
      __s22param3 = function once(__s24param0) {
        var __s24local0 = false;
        return function () {
          if (!__s24local0) {
            __s24local0 = true;
            __s24param0.apply(undefined, arguments);
          }
        };
      }(__s22param3);
      var __s22local0 = false;
      __s22param0.on("close", function () {
        __s22local0 = true;
      });
      if (__s0local0 === undefined) {
        __s0local0 = require("gge-module:exact_4bd25ea810b22e83");
      }
      __s0local0(__s22param0, {
        readable: __s22param1,
        writable: __s22param2
      }, function (__s32param0) {
        if (__s32param0) {
          return __s22param3(__s32param0);
        }
        __s22local0 = true;
        __s22param3();
      });
      var __s22local1 = false;
      return function (__s35param0) {
        if (!__s22local0 && !__s22local1) {
          __s22local1 = true;
          if (function isRequest(__s38param0) {
            return __s38param0.setHeader && typeof __s38param0.abort == "function";
          }(__s22param0)) {
            return __s22param0.abort();
          } else if (typeof __s22param0.destroy == "function") {
            return __s22param0.destroy();
          } else {
            __s22param3(__s35param0 || new __s0local3("pipe"));
            return;
          }
        }
      };
    }(__s20param0, __s20local0, __s20param1 > 0, function (__s43param0) {
      __s8local3 ||= __s43param0;
      if (__s43param0) {
        __s8local5.forEach(call);
      }
      if (!__s20local0) {
        __s8local5.forEach(call);
        __s8local4(__s8local3);
      }
    });
  });
  return __s8local1.reduce(pipe);
};
