var __s0local0 = {};
function createErrorType(__s1param0, __s1param1, __s1param2) {
  __s1param2 ||= Error;
  var __s1local0 = function (__s3param0) {
    function NodeError(__s5param0, __s5param1, __s5param2) {
      return __s3param0.call(this, function getMessage(__s7param0, __s7param1, __s7param2) {
        if (typeof __s1param1 == "string") {
          return __s1param1;
        } else {
          return __s1param1(__s7param0, __s7param1, __s7param2);
        }
      }(__s5param0, __s5param1, __s5param2)) || this;
    }
    (function _inheritsLoose(__s11param0, __s11param1) {
      __s11param0.prototype = Object.create(__s11param1.prototype);
      __s11param0.prototype.constructor = __s11param0;
      __s11param0.__proto__ = __s11param1;
    })(NodeError, __s3param0);
    return NodeError;
  }(__s1param2);
  __s1local0.prototype.name = __s1param2.name;
  __s1local0.prototype.code = __s1param0;
  __s0local0[__s1param0] = __s1local0;
}
function oneOf(__s13param0, __s13param1) {
  if (Array.isArray(__s13param0)) {
    var __s13local0 = __s13param0.length;
    __s13param0 = __s13param0.map(function (__s16param0) {
      return String(__s16param0);
    });
    if (__s13local0 > 2) {
      return `one of ${__s13param1} ${__s13param0.slice(0, __s13local0 - 1).join(", ")}, or ${__s13param0[__s13local0 - 1]}`;
    } else if (__s13local0 === 2) {
      return `one of ${__s13param1} ${__s13param0[0]} or ${__s13param0[1]}`;
    } else {
      return `of ${__s13param1} ${__s13param0[0]}`;
    }
  }
  return `of ${__s13param1} ${String(__s13param0)}`;
}
createErrorType("ERR_INVALID_OPT_VALUE", function (__s21param0, __s21param1) {
  return "The value \"" + __s21param1 + "\" is invalid for option \"" + __s21param0 + "\"";
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function (__s23param0, __s23param1, __s23param2) {
  var __s23local0;
  var __s23local1;
  if (typeof __s23param1 == "string" && function startsWith(__s25param0, __s25param1, __s25param2) {
    return __s25param0.substr(!__s25param2 || __s25param2 < 0 ? 0 : +__s25param2, __s25param1.length) === __s25param1;
  }(__s23param1, "not ")) {
    __s23local0 = "must not be";
    __s23param1 = __s23param1.replace(/^not /, "");
  } else {
    __s23local0 = "must be";
  }
  if (function endsWith(__s29param0, __s29param1, __s29param2) {
    if (__s29param2 === undefined || __s29param2 > __s29param0.length) {
      __s29param2 = __s29param0.length;
    }
    return __s29param0.substring(__s29param2 - __s29param1.length, __s29param2) === __s29param1;
  }(__s23param0, " argument")) {
    __s23local1 = `The ${__s23param0} ${__s23local0} ${oneOf(__s23param1, "type")}`;
  } else {
    var __s23local2 = function includes(__s34param0, __s34param1, __s34param2) {
      if (typeof __s34param2 != "number") {
        __s34param2 = 0;
      }
      return !(__s34param2 + __s34param1.length > __s34param0.length) && __s34param0.indexOf(__s34param1, __s34param2) !== -1;
    }(__s23param0, ".") ? "property" : "argument";
    __s23local1 = `The "${__s23param0}" ${__s23local2} ${__s23local0} ${oneOf(__s23param1, "type")}`;
  }
  return __s23local1 += `. Received type ${typeof __s23param2}`;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function (__s37param0) {
  return "The " + __s37param0 + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function (__s39param0) {
  return "Cannot call " + __s39param0 + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function (__s41param0) {
  return "Unknown encoding: " + __s41param0;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.codes = __s0local0;
