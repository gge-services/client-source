(function (__s1param0) {
  var __s1local0 = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&quot;": "\""
  };
  var __s1local1 = "@";
  var __s1local2 = "#";
  function removeSpaces(__s3param0) {
    return __s3param0 && __s3param0.replace(/^\s+|\s+$/g, "");
  }
  function unescapeXML(__s5param0) {
    return __s5param0.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g, function (__s7param0) {
      if (__s7param0[1] === "#") {
        var __s7local0 = __s7param0[2] === "x" ? parseInt(__s7param0.substr(3), 16) : parseInt(__s7param0.substr(2), 10);
        if (__s7local0 > -1) {
          return String.fromCharCode(__s7local0);
        }
      }
      return __s1local0[__s7param0] || __s7param0;
    });
  }
  function addObject(__s11param0, __s11param1, __s11param2) {
    if (__s11param2 !== undefined) {
      var __s11local0 = __s11param0[__s11param1];
      if (__s11local0 instanceof Array) {
        __s11local0.push(__s11param2);
      } else {
        __s11param0[__s11param1] = __s11param1 in __s11param0 ? [__s11local0, __s11param2] : __s11param2;
      }
    }
  }
  __s1param0.fromXML = function _fromXML(__s16param0, __s16param1) {
    return function toObject(__s18param0, __s18param1) {
      if (typeof __s18param0 == "string") {
        return __s18param0;
      }
      var __s18local0 = __s18param0.r;
      if (__s18local0) {
        return __s18local0;
      }
      var __s18local1 = function parseAttribute(__s22param0, __s22param1) {
        if (!__s22param0.t) {
          return;
        }
        var __s22local0;
        var __s22local1;
        var __s22local2 = __s22param0.t.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/);
        for (var __s22local3 = __s22local2.length, __s22local4 = 0; __s22local4 < __s22local3; __s22local4++) {
          var __s22local5 = removeSpaces(__s22local2[__s22local4]);
          if (__s22local5) {
            __s22local0 ||= {};
            var __s22local6 = __s22local5.indexOf("=");
            if (__s22local6 < 0) {
              __s22local5 = __s1local1 + __s22local5;
              __s22local1 = null;
            } else {
              __s22local1 = __s22local5.substr(__s22local6 + 1).replace(/^\s+/, "");
              __s22local5 = __s1local1 + __s22local5.substr(0, __s22local6).replace(/\s+$/, "");
              var __s22local7 = __s22local1[0];
              var __s22local8 = __s22local1[__s22local1.length - 1];
              if (__s22local7 === __s22local8 && (__s22local7 === "'" || __s22local7 === "\"")) {
                __s22local1 = __s22local1.substr(1, __s22local1.length - 2);
              }
              __s22local1 = unescapeXML(__s22local1);
            }
            if (__s22param1) {
              __s22local1 = __s22param1(__s22local5, __s22local1);
            }
            addObject(__s22local0, __s22local5, __s22local1);
          }
        }
        return __s22local0;
      }(__s18param0, __s18param1);
      var __s18local2;
      var __s18local3 = __s18param0.f;
      var __s18local4 = __s18local3.length;
      if (__s18local1 || __s18local4 > 1) {
        __s18local2 = __s18local1 || {};
        __s18local3.forEach(function (__s33param0) {
          if (typeof __s33param0 == "string") {
            addObject(__s18local2, __s1local2, __s33param0);
          } else {
            addObject(__s18local2, __s33param0.n, toObject(__s33param0, __s18param1));
          }
        });
      } else if (__s18local4) {
        var __s18local5 = __s18local3[0];
        __s18local2 = toObject(__s18local5, __s18param1);
        if (__s18local5.n) {
          var __s18local6 = {
            [__s18local5.n]: __s18local2
          };
          __s18local2 = __s18local6;
        }
      } else {
        __s18local2 = __s18param0.c ? null : "";
      }
      if (__s18param1) {
        __s18local2 = __s18param1(__s18param0.n || "", __s18local2);
      }
      return __s18local2;
    }(function parseXML(__s41param0) {
      var __s41local0 = String.prototype.split.call(__s41param0, /<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/);
      for (var __s41local1 = __s41local0.length, __s41local2 = {
          f: []
        }, __s41local3 = __s41local2, __s41local4 = [], __s41local5 = 0; __s41local5 < __s41local1;) {
        var __s41local6 = __s41local0[__s41local5++];
        if (__s41local6) {
          appendText(__s41local6);
        }
        var __s41local7 = __s41local0[__s41local5++];
        if (__s41local7) {
          parseNode(__s41local7);
        }
      }
      return __s41local2;
      function parseNode(__s47param0) {
        var __s47local0 = __s47param0.length;
        var __s47local1 = __s47param0[0];
        if (__s47local1 === "/") {
          var __s47local2 = __s47param0.replace(/^\/|[\s\/].*$/g, "").toLowerCase();
          while (__s41local4.length) {
            var __s47local3 = __s41local3.n && __s41local3.n.toLowerCase();
            __s41local3 = __s41local4.pop();
            if (__s47local3 === __s47local2) {
              break;
            }
          }
        } else if (__s47local1 === "?") {
          appendChild({
            n: "?",
            r: __s47param0.substr(1, __s47local0 - 2)
          });
        } else if (__s47local1 === "!") {
          if (__s47param0.substr(1, 7) === "[CDATA[" && __s47param0.substr(-2) === "]]") {
            appendText(__s47param0.substr(8, __s47local0 - 10));
          } else {
            appendChild({
              n: "!",
              r: __s47param0.substr(1)
            });
          }
        } else {
          var __s47local4 = function openTag(__s58param0) {
            var __s58local0 = {
              f: []
            };
            var __s58local1 = (__s58param0 = __s58param0.replace(/\s*\/?$/, "")).search(/[\s='"\/]/);
            if (__s58local1 < 0) {
              __s58local0.n = __s58param0;
            } else {
              __s58local0.n = __s58param0.substr(0, __s58local1);
              __s58local0.t = __s58param0.substr(__s58local1);
            }
            return __s58local0;
          }(__s47param0);
          appendChild(__s47local4);
          if (__s47param0[__s47local0 - 1] === "/") {
            __s47local4.c = 1;
          } else {
            __s41local4.push(__s41local3);
            __s41local3 = __s47local4;
          }
        }
      }
      function appendChild(__s64param0) {
        __s41local3.f.push(__s64param0);
      }
      function appendText(__s66param0) {
        if (__s66param0 = removeSpaces(__s66param0)) {
          appendChild(unescapeXML(__s66param0));
        }
      }
    }(__s16param0), __s16param1);
  };
})(typeof exports == "object" && exports || {});
