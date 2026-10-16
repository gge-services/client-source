(function (__s1param0) {
  var __s1local0 = {
    boolean: fromString,
    number: fromString,
    object: function fromObject(__s3param0, __s3param1, __s3param2) {
      var __s3local0 = !!__s3param1;
      var __s3local1 = __s3param2 === null;
      if (__s3local1) {
        if (!__s3local0) {
          return;
        }
        __s3param2 = {};
      }
      var __s3local2;
      var __s3local3 = Object.keys(__s3param2);
      var __s3local4 = __s3local3.length;
      var __s3local5 = __s3local3.filter(isAttribute);
      var __s3local6 = __s3local5.length;
      var __s3local7 = __s3param0.i;
      var __s3local8 = __s3param0.l;
      var __s3local9 = __s3local0 && __s3local7;
      if (__s3local0) {
        if (__s3local7 && __s3param0.r) {
          __s3param0.r += __s1local2 + __s3local8;
        }
        __s3param0.r += "<" + __s3param1;
        __s3local5.forEach(function (__s9param0) {
          (function writeAttributes(__s11param0, __s11param1, __s11param2) {
            if (__s1local3(__s11param2)) {
              __s11param2.forEach(function (__s14param0) {
                writeAttributes(__s11param0, __s11param1, __s14param0);
              });
            } else if (__s11param1 || typeof __s11param2 != "object") {
              (function writeAttribute(__s17param0, __s17param1, __s17param2) {
                var __s17local0 = __s17param0.f;
                if (__s17local0) {
                  __s17param2 = __s17local0(__s17param1, __s17param2);
                }
                if (__s17param2 === undefined) {
                  return;
                }
                if (!__s17param1) {
                  __s17param0.r += " " + __s17param2;
                  return;
                }
                __s17param0.r += " " + __s17param1;
                if (__s17param2 === null) {
                  return;
                }
                __s17param0.r += "=\"" + function escapeAttribute(__s23param0) {
                  return __s1local4.call(__s23param0, /([&"])/g, escapeRef);
                }(__s17param2) + "\"";
              })(__s11param0, __s11param1, __s11param2);
            } else {
              Object.keys(__s11param2).forEach(function (__s26param0) {
                writeAttributes(__s11param0, __s26param0, __s11param2[__s26param0]);
              });
            }
          })(__s3param0, __s9param0.substr(1), __s3param2[__s9param0]);
        });
        var __s3local10 = __s3local1 || __s3local6 && __s3local4 === __s3local6;
        if (__s3local10) {
          var __s3local11 = __s3param1[0];
          if (__s3local11 !== "!" && __s3local11 !== "?") {
            __s3param0.r += "/";
          }
        }
        __s3param0.r += ">";
        if (__s3local10) {
          return;
        }
      }
      __s3local3.forEach(function (__s31param0) {
        if (!isAttribute(__s31param0)) {
          if (__s3local9 && (__s31param0 && __s31param0 !== "#" || __s1local3(__s3param2[__s31param0]))) {
            __s3param0.l += __s3param0.s;
            __s3local9 = 0;
            __s3local2 = 1;
          }
          fromAny(__s3param0, __s31param0, __s3param2[__s31param0]);
        }
      });
      if (__s3local2) {
        __s3param0.l = __s3param0.l.substr(__s3param0.i);
        __s3param0.r += __s1local2 + __s3param0.l;
      }
      if (__s3local0) {
        __s3param0.r += "</" + __s3param1 + ">";
      }
    },
    string: fromString
  };
  var __s1local1 = {
    "\t": "&#x09;",
    "\n": "&#x0a;",
    "\r": "&#x0d;",
    " ": "&#x20;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  };
  var __s1local2 = "\n";
  var __s1local3 = Array.isArray || _isArray;
  var __s1local4 = String.prototype.replace;
  function fromAny(__s37param0, __s37param1, __s37param2) {
    if (__s37param1 === "#") {
      __s37param1 = "";
    }
    if (_isArray(__s37param2)) {
      return function fromArray(__s41param0, __s41param1, __s41param2) {
        Array.prototype.forEach.call(__s41param2, function (__s43param0) {
          fromAny(__s41param0, __s41param1, __s43param0);
        });
      }(__s37param0, __s37param1, __s37param2);
    }
    var __s37local0 = __s37param0.f;
    if (__s37local0) {
      __s37param2 = __s37local0(__s37param1, __s37param2);
    }
    var __s37local1 = __s1local0[typeof __s37param2];
    if (__s37local1) {
      __s37local1(__s37param0, __s37param1, __s37param2);
    }
  }
  function fromString(__s47param0, __s47param1, __s47param2) {
    if (__s47param1 === "?") {
      __s47param2 = "<?" + __s47param2 + "?>";
    } else if (__s47param1 === "!") {
      __s47param2 = "<!" + __s47param2 + ">";
    } else {
      __s47param2 = function escapeTextNode(__s52param0) {
        return __s1local4.call(__s52param0, /(^\s|[&<>]|\s$)/g, escapeRef);
      }(__s47param2);
      if (__s47param1) {
        __s47param2 = "<" + __s47param1 + ">" + __s47param2 + "</" + __s47param1 + ">";
      }
    }
    if (__s47param1 && __s47param0.i && __s47param0.r) {
      __s47param0.r += __s1local2 + __s47param0.l;
    }
    __s47param0.r += __s47param2;
  }
  function isAttribute(__s56param0) {
    return __s56param0 && __s56param0[0] === "@";
  }
  function escapeRef(__s58param0) {
    return __s1local1[__s58param0] || __s58param0;
  }
  function _isArray(__s60param0) {
    return __s60param0 instanceof Array;
  }
  __s1param0.toXML = function _toXML(__s62param0, __s62param1, __s62param2) {
    var __s62local0 = function createJob(__s64param0, __s64param1) {
      var __s64local0 = {
        f: __s64param0,
        l: "",
        r: ""
      };
      if (__s64param1) {
        var __s64local1 = "";
        if (__s64param1 > 0) {
          for (var __s64local2 = __s64param1; __s64local2; __s64local2--) {
            __s64local1 += " ";
          }
        } else {
          __s64local1 += __s64param1;
        }
        __s64local0.s = __s64local1;
        __s64local0.i = __s64local1.length;
      }
      return __s64local0;
    }(__s62param1, __s62param2);
    fromAny(__s62local0, "", __s62param0);
    return __s62local0.r;
  };
})(typeof exports == "object" && exports || {});
