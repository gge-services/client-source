var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
var __dep_exact_799aeda364fc1163 = require("gge-module:exact_799aeda364fc1163");
var __dep_class_InterceptorManager = require("gge-module:class_InterceptorManager");
var __dep_exact_199ebcf9168c97f2 = require("gge-module:exact_199ebcf9168c97f2");
var __dep_exact_6b2a0d86639e35c8 = require("gge-module:exact_6b2a0d86639e35c8");
function Axios(__s1param0) {
  this.defaults = __s1param0;
  this.interceptors = {
    request: new __dep_class_InterceptorManager(),
    response: new __dep_class_InterceptorManager()
  };
}
Axios.prototype.request = function request(__s3param0) {
  if (typeof __s3param0 == "string") {
    (__s3param0 = arguments[1] || {}).url = arguments[0];
  } else {
    __s3param0 = __s3param0 || {};
  }
  if ((__s3param0 = __dep_exact_6b2a0d86639e35c8(this.defaults, __s3param0)).method) {
    __s3param0.method = __s3param0.method.toLowerCase();
  } else if (this.defaults.method) {
    __s3param0.method = this.defaults.method.toLowerCase();
  } else {
    __s3param0.method = "get";
  }
  var __s3local0 = [__dep_exact_199ebcf9168c97f2, undefined];
  var __s3local1 = Promise.resolve(__s3param0);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(__s10param0) {
    __s3local0.unshift(__s10param0.fulfilled, __s10param0.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(__s12param0) {
    __s3local0.push(__s12param0.fulfilled, __s12param0.rejected);
  });
  while (__s3local0.length) {
    __s3local1 = __s3local1.then(__s3local0.shift(), __s3local0.shift());
  }
  return __s3local1;
};
Axios.prototype.getUri = function getUri(__s16param0) {
  __s16param0 = __dep_exact_6b2a0d86639e35c8(this.defaults, __s16param0);
  return __dep_exact_799aeda364fc1163(__s16param0.url, __s16param0.params, __s16param0.paramsSerializer).replace(/^\?/, "");
};
__dep_exact_6ce7d38fc7165545.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(__s18param0) {
  Axios.prototype[__s18param0] = function (__s20param0, __s20param1) {
    return this.request(__dep_exact_6b2a0d86639e35c8(__s20param1 || {}, {
      method: __s18param0,
      url: __s20param0,
      data: (__s20param1 || {}).data
    }));
  };
});
__dep_exact_6ce7d38fc7165545.forEach(["post", "put", "patch"], function forEachMethodWithData(__s22param0) {
  Axios.prototype[__s22param0] = function (__s24param0, __s24param1, __s24param2) {
    return this.request(__dep_exact_6b2a0d86639e35c8(__s24param2 || {}, {
      method: __s22param0,
      url: __s24param0,
      data: __s24param1
    }));
  };
});
module.exports = Axios;
