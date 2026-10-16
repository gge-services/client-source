var __dep_exact_b2377fdcaf160d8b = require("gge-module:exact_b2377fdcaf160d8b");
var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
var __dep_exact_73e55f958654c1c1 = require("gge-module:exact_73e55f958654c1c1");
var __s0local0 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(__s1param0, __s1param1) {
  if (!__dep_exact_6ce7d38fc7165545.isUndefined(__s1param0) && __dep_exact_6ce7d38fc7165545.isUndefined(__s1param0["Content-Type"])) {
    __s1param0["Content-Type"] = __s1param1;
  }
}
var __s0local1 = {
  adapter: function getDefaultAdapter() {
    var __s4local0;
    if (typeof XMLHttpRequest != "undefined") {
      __s4local0 = require("gge-module:exact_9d5a688fb88de399");
    } else if (__dep_exact_b2377fdcaf160d8b !== undefined && Object.prototype.toString.call(__dep_exact_b2377fdcaf160d8b) === "[object process]") {
      __s4local0 = require("gge-module:exact_9d5a688fb88de399");
    }
    return __s4local0;
  }(),
  transformRequest: [function transformRequest(__s8param0, __s8param1) {
    __dep_exact_73e55f958654c1c1(__s8param1, "Accept");
    __dep_exact_73e55f958654c1c1(__s8param1, "Content-Type");
    if (__dep_exact_6ce7d38fc7165545.isFormData(__s8param0) || __dep_exact_6ce7d38fc7165545.isArrayBuffer(__s8param0) || __dep_exact_6ce7d38fc7165545.isBuffer(__s8param0) || __dep_exact_6ce7d38fc7165545.isStream(__s8param0) || __dep_exact_6ce7d38fc7165545.isFile(__s8param0) || __dep_exact_6ce7d38fc7165545.isBlob(__s8param0)) {
      return __s8param0;
    } else if (__dep_exact_6ce7d38fc7165545.isArrayBufferView(__s8param0)) {
      return __s8param0.buffer;
    } else if (__dep_exact_6ce7d38fc7165545.isURLSearchParams(__s8param0)) {
      setContentTypeIfUnset(__s8param1, "application/x-www-form-urlencoded;charset=utf-8");
      return __s8param0.toString();
    } else if (__dep_exact_6ce7d38fc7165545.isObject(__s8param0)) {
      setContentTypeIfUnset(__s8param1, "application/json;charset=utf-8");
      return JSON.stringify(__s8param0);
    } else {
      return __s8param0;
    }
  }],
  transformResponse: [function transformResponse(__s15param0) {
    if (typeof __s15param0 == "string") {
      try {
        __s15param0 = JSON.parse(__s15param0);
      } catch (__s19local0) {}
    }
    return __s15param0;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(__s21param0) {
    return __s21param0 >= 200 && __s21param0 < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
__dep_exact_6ce7d38fc7165545.forEach(["delete", "get", "head"], function forEachMethodNoData(__s23param0) {
  __s0local1.headers[__s23param0] = {};
});
__dep_exact_6ce7d38fc7165545.forEach(["post", "put", "patch"], function forEachMethodWithData(__s25param0) {
  __s0local1.headers[__s25param0] = __dep_exact_6ce7d38fc7165545.merge(__s0local0);
});
module.exports = __s0local1;
