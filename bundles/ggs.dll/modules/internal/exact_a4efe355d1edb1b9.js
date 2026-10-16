module.exports = tokenize;
var __s0local0 = /[\s{}=;:[\],'"()<>]/g;
var __s0local1 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
var __s0local2 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
var __s0local3 = /^ *[*/]+ */;
var __s0local4 = /^\s*\*?\/*/;
var __s0local5 = /\n/g;
var __s0local6 = /\s/;
var __s0local7 = /\\(.?)/g;
var __s0local8 = {
  0: "\0",
  r: "\r",
  n: "\n",
  t: "\t"
};
function unescape(__s1param0) {
  return __s1param0.replace(__s0local7, function (__s3param0, __s3param1) {
    switch (__s3param1) {
      case "\\":
      case "":
        return __s3param1;
      default:
        return __s0local8[__s3param1] || "";
    }
  });
}
function tokenize(__s6param0, __s6param1) {
  var __s6local0 = 0;
  var __s6local1 = (__s6param0 = __s6param0.toString()).length;
  var __s6local2 = 1;
  var __s6local3 = null;
  var __s6local4 = null;
  var __s6local5 = 0;
  var __s6local6 = false;
  var __s6local7 = [];
  var __s6local8 = null;
  function illegal(__s8param0) {
    return Error("illegal " + __s8param0 + " (line " + __s6local2 + ")");
  }
  function charAt(__s10param0) {
    return __s6param0.charAt(__s10param0);
  }
  function setComment(__s12param0, __s12param1) {
    __s6local3 = __s6param0.charAt(__s12param0++);
    __s6local5 = __s6local2;
    __s6local6 = false;
    var __s12local0;
    var __s12local1 = __s12param0 - (__s6param1 ? 2 : 3);
    do {
      if (--__s12local1 < 0 || (__s12local0 = __s6param0.charAt(__s12local1)) === "\n") {
        __s6local6 = true;
        break;
      }
    } while (__s12local0 === " " || __s12local0 === "\t");
    for (var __s12local2 = __s6param0.substring(__s12param0, __s12param1).split(__s0local5), __s12local3 = 0; __s12local3 < __s12local2.length; ++__s12local3) {
      __s12local2[__s12local3] = __s12local2[__s12local3].replace(__s6param1 ? __s0local4 : __s0local3, "").trim();
    }
    __s6local4 = __s12local2.join("\n").trim();
  }
  function isDoubleSlashCommentLine(__s19param0) {
    var __s19local0 = findEndOfLine(__s19param0);
    var __s19local1 = __s6param0.substring(__s19param0, __s19local0);
    return /^\s*\/{1,2}/.test(__s19local1);
  }
  function findEndOfLine(__s21param0) {
    for (var __s21local0 = __s21param0; __s21local0 < __s6local1 && charAt(__s21local0) !== "\n";) {
      __s21local0++;
    }
    return __s21local0;
  }
  function next() {
    if (__s6local7.length > 0) {
      return __s6local7.shift();
    }
    if (__s6local8) {
      return function readString() {
        var __s29local0 = __s6local8 === "'" ? __s0local2 : __s0local1;
        __s29local0.lastIndex = __s6local0 - 1;
        var __s29local1 = __s29local0.exec(__s6param0);
        if (!__s29local1) {
          throw illegal("string");
        }
        __s6local0 = __s29local0.lastIndex;
        push(__s6local8);
        __s6local8 = null;
        return unescape(__s29local1[1]);
      }();
    }
    var __s25local0;
    var __s25local1;
    var __s25local2;
    var __s25local3;
    var __s25local4;
    do {
      if (__s6local0 === __s6local1) {
        return null;
      }
      for (__s25local0 = false; __s0local6.test(__s25local2 = charAt(__s6local0));) {
        if (__s25local2 === "\n") {
          ++__s6local2;
        }
        if (++__s6local0 === __s6local1) {
          return null;
        }
      }
      if (charAt(__s6local0) === "/") {
        if (++__s6local0 === __s6local1) {
          throw illegal("comment");
        }
        if (charAt(__s6local0) === "/") {
          if (__s6param1) {
            __s25local3 = __s6local0;
            __s25local4 = false;
            if (isDoubleSlashCommentLine(__s6local0)) {
              __s25local4 = true;
              do {
                if ((__s6local0 = findEndOfLine(__s6local0)) === __s6local1) {
                  break;
                }
                __s6local0++;
              } while (isDoubleSlashCommentLine(__s6local0));
            } else {
              __s6local0 = Math.min(__s6local1, findEndOfLine(__s6local0) + 1);
            }
            if (__s25local4) {
              setComment(__s25local3, __s6local0);
            }
            __s6local2++;
            __s25local0 = true;
          } else {
            for (__s25local4 = charAt(__s25local3 = __s6local0 + 1) === "/"; charAt(++__s6local0) !== "\n";) {
              if (__s6local0 === __s6local1) {
                return null;
              }
            }
            ++__s6local0;
            if (__s25local4) {
              setComment(__s25local3, __s6local0 - 1);
            }
            ++__s6local2;
            __s25local0 = true;
          }
        } else {
          if ((__s25local2 = charAt(__s6local0)) !== "*") {
            return "/";
          }
          __s25local3 = __s6local0 + 1;
          __s25local4 = __s6param1 || charAt(__s25local3) === "*";
          do {
            if (__s25local2 === "\n") {
              ++__s6local2;
            }
            if (++__s6local0 === __s6local1) {
              throw illegal("comment");
            }
            __s25local1 = __s25local2;
            __s25local2 = charAt(__s6local0);
          } while (__s25local1 !== "*" || __s25local2 !== "/");
          ++__s6local0;
          if (__s25local4) {
            setComment(__s25local3, __s6local0 - 2);
          }
          __s25local0 = true;
        }
      }
    } while (__s25local0);
    var __s25local5 = __s6local0;
    __s0local0.lastIndex = 0;
    if (!__s0local0.test(charAt(__s25local5++))) {
      while (__s25local5 < __s6local1 && !__s0local0.test(charAt(__s25local5))) {
        ++__s25local5;
      }
    }
    var __s25local6 = __s6param0.substring(__s6local0, __s6local0 = __s25local5);
    if (__s25local6 === "\"" || __s25local6 === "'") {
      __s6local8 = __s25local6;
    }
    return __s25local6;
  }
  function push(__s65param0) {
    __s6local7.push(__s65param0);
  }
  function peek() {
    if (!__s6local7.length) {
      var __s67local0 = next();
      if (__s67local0 === null) {
        return null;
      }
      push(__s67local0);
    }
    return __s6local7[0];
  }
  return Object.defineProperty({
    next: next,
    peek: peek,
    push: push,
    skip: function skip(__s71param0, __s71param1) {
      var __s71local0 = peek();
      if (__s71local0 === __s71param0) {
        next();
        return true;
      }
      if (!__s71param1) {
        throw illegal("token '" + __s71local0 + "', '" + __s71param0 + "' expected");
      }
      return false;
    },
    cmnt: function cmnt(__s75param0) {
      var __s75local0 = null;
      if (__s75param0 === undefined) {
        if (__s6local5 === __s6local2 - 1 && (__s6param1 || __s6local3 === "*" || __s6local6)) {
          __s75local0 = __s6local4;
        }
      } else {
        if (__s6local5 < __s75param0) {
          peek();
        }
        if (__s6local5 === __s75param0 && !__s6local6 && (!!__s6param1 || __s6local3 === "/")) {
          __s75local0 = __s6local4;
        }
      }
      return __s75local0;
    }
  }, "line", {
    get: function () {
      return __s6local2;
    }
  });
}
tokenize.unescape = unescape;
