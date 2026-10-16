var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
module.exports = __dep_exact_6ce7d38fc7165545.isStandardBrowserEnv() ? function standardBrowserEnv() {
  var __s1local0;
  var __s1local1 = /(msie|trident)/i.test(navigator.userAgent);
  var __s1local2 = document.createElement("a");
  function resolveURL(__s3param0) {
    var __s3local0 = __s3param0;
    if (__s1local1) {
      __s1local2.setAttribute("href", __s3local0);
      __s3local0 = __s1local2.href;
    }
    __s1local2.setAttribute("href", __s3local0);
    return {
      href: __s1local2.href,
      protocol: __s1local2.protocol ? __s1local2.protocol.replace(/:$/, "") : "",
      host: __s1local2.host,
      search: __s1local2.search ? __s1local2.search.replace(/^\?/, "") : "",
      hash: __s1local2.hash ? __s1local2.hash.replace(/^#/, "") : "",
      hostname: __s1local2.hostname,
      port: __s1local2.port,
      pathname: __s1local2.pathname.charAt(0) === "/" ? __s1local2.pathname : "/" + __s1local2.pathname
    };
  }
  __s1local0 = resolveURL(window.location.href);
  return function isURLSameOrigin(__s6param0) {
    var __s6local0 = __dep_exact_6ce7d38fc7165545.isString(__s6param0) ? resolveURL(__s6param0) : __s6param0;
    return __s6local0.protocol === __s1local0.protocol && __s6local0.host === __s1local0.host;
  };
}() : function isURLSameOrigin() {
  return true;
};
