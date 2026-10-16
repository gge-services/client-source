var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
var __s0local0 = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function parseHeaders(__s1param0) {
  var __s1local0;
  var __s1local1;
  var __s1local2;
  var __s1local3 = {};
  if (__s1param0) {
    __dep_exact_6ce7d38fc7165545.forEach(__s1param0.split("\n"), function parser(__s4param0) {
      __s1local2 = __s4param0.indexOf(":");
      __s1local0 = __dep_exact_6ce7d38fc7165545.trim(__s4param0.substr(0, __s1local2)).toLowerCase();
      __s1local1 = __dep_exact_6ce7d38fc7165545.trim(__s4param0.substr(__s1local2 + 1));
      if (__s1local0) {
        if (__s1local3[__s1local0] && __s0local0.indexOf(__s1local0) >= 0) {
          return;
        }
        __s1local3[__s1local0] = __s1local0 === "set-cookie" ? (__s1local3[__s1local0] ? __s1local3[__s1local0] : []).concat([__s1local1]) : __s1local3[__s1local0] ? __s1local3[__s1local0] + ", " + __s1local1 : __s1local1;
      }
    });
    return __s1local3;
  } else {
    return __s1local3;
  }
};
