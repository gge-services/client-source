var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
function encode(__s1param0) {
  return encodeURIComponent(__s1param0).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
module.exports = function buildURL(__s3param0, __s3param1, __s3param2) {
  if (!__s3param1) {
    return __s3param0;
  }
  var __s3local0;
  if (__s3param2) {
    __s3local0 = __s3param2(__s3param1);
  } else if (__dep_exact_6ce7d38fc7165545.isURLSearchParams(__s3param1)) {
    __s3local0 = __s3param1.toString();
  } else {
    var __s3local1 = [];
    __dep_exact_6ce7d38fc7165545.forEach(__s3param1, function serialize(__s9param0, __s9param1) {
      if (__s9param0 !== null && __s9param0 !== undefined) {
        if (__dep_exact_6ce7d38fc7165545.isArray(__s9param0)) {
          __s9param1 += "[]";
        } else {
          __s9param0 = [__s9param0];
        }
        __dep_exact_6ce7d38fc7165545.forEach(__s9param0, function parseValue(__s14param0) {
          if (__dep_exact_6ce7d38fc7165545.isDate(__s14param0)) {
            __s14param0 = __s14param0.toISOString();
          } else if (__dep_exact_6ce7d38fc7165545.isObject(__s14param0)) {
            __s14param0 = JSON.stringify(__s14param0);
          }
          __s3local1.push(encode(__s9param1) + "=" + encode(__s14param0));
        });
      }
    });
    __s3local0 = __s3local1.join("&");
  }
  if (__s3local0) {
    var __s3local2 = __s3param0.indexOf("#");
    if (__s3local2 !== -1) {
      __s3param0 = __s3param0.slice(0, __s3local2);
    }
    __s3param0 += (__s3param0.indexOf("?") === -1 ? "?" : "&") + __s3local0;
  }
  return __s3param0;
};
