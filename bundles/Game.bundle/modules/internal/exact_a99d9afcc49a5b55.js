var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
module.exports = __dep_exact_6ce7d38fc7165545.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
      var __s3local0 = [];
      __s3local0.push(__s3param0 + "=" + encodeURIComponent(__s3param1));
      if (__dep_exact_6ce7d38fc7165545.isNumber(__s3param2)) {
        __s3local0.push("expires=" + new Date(__s3param2).toGMTString());
      }
      if (__dep_exact_6ce7d38fc7165545.isString(__s3param3)) {
        __s3local0.push("path=" + __s3param3);
      }
      if (__dep_exact_6ce7d38fc7165545.isString(__s3param4)) {
        __s3local0.push("domain=" + __s3param4);
      }
      if (__s3param5 === true) {
        __s3local0.push("secure");
      }
      document.cookie = __s3local0.join("; ");
    },
    read: function read(__s9param0) {
      var __s9local0 = document.cookie.match(new RegExp("(^|;\\s*)(" + __s9param0 + ")=([^;]*)"));
      if (__s9local0) {
        return decodeURIComponent(__s9local0[3]);
      } else {
        return null;
      }
    },
    remove: function remove(__s13param0) {
      this.write(__s13param0, "", Date.now() - 86400000);
    }
  };
}() : {
  write: function write() {},
  read: function read() {
    return null;
  },
  remove: function remove() {}
};
