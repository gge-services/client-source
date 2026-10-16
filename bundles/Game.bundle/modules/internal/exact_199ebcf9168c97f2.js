var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
var __dep_exact_8e437d32c3252898 = require("gge-module:exact_8e437d32c3252898");
var __dep_exact_a40acf5af8b5b22e = require("gge-module:exact_a40acf5af8b5b22e");
var __dep_exact_45e5b8490c4eebaf = require("gge-module:exact_45e5b8490c4eebaf");
function throwIfCancellationRequested(__s1param0) {
  if (__s1param0.cancelToken) {
    __s1param0.cancelToken.throwIfRequested();
  }
}
module.exports = function dispatchRequest(__s4param0) {
  throwIfCancellationRequested(__s4param0);
  __s4param0.headers = __s4param0.headers || {};
  __s4param0.data = __dep_exact_8e437d32c3252898(__s4param0.data, __s4param0.headers, __s4param0.transformRequest);
  __s4param0.headers = __dep_exact_6ce7d38fc7165545.merge(__s4param0.headers.common || {}, __s4param0.headers[__s4param0.method] || {}, __s4param0.headers);
  __dep_exact_6ce7d38fc7165545.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(__s6param0) {
    delete __s4param0.headers[__s6param0];
  });
  return (__s4param0.adapter || __dep_exact_45e5b8490c4eebaf.adapter)(__s4param0).then(function onAdapterResolution(__s8param0) {
    throwIfCancellationRequested(__s4param0);
    __s8param0.data = __dep_exact_8e437d32c3252898(__s8param0.data, __s8param0.headers, __s4param0.transformResponse);
    return __s8param0;
  }, function onAdapterRejection(__s10param0) {
    if (!__dep_exact_a40acf5af8b5b22e(__s10param0)) {
      throwIfCancellationRequested(__s4param0);
      if (__s10param0 && __s10param0.response) {
        __s10param0.response.data = __dep_exact_8e437d32c3252898(__s10param0.response.data, __s10param0.response.headers, __s4param0.transformResponse);
      }
    }
    return Promise.reject(__s10param0);
  });
};
