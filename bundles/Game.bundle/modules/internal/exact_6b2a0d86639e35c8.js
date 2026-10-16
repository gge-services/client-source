var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
module.exports = function mergeConfig(__s1param0, __s1param1) {
  __s1param1 = __s1param1 || {};
  var __s1local0 = {};
  var __s1local1 = ["url", "method", "data"];
  var __s1local2 = ["headers", "auth", "proxy", "params"];
  var __s1local3 = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"];
  var __s1local4 = ["validateStatus"];
  function getMergedValue(__s3param0, __s3param1) {
    if (__dep_exact_6ce7d38fc7165545.isPlainObject(__s3param0) && __dep_exact_6ce7d38fc7165545.isPlainObject(__s3param1)) {
      return __dep_exact_6ce7d38fc7165545.merge(__s3param0, __s3param1);
    } else if (__dep_exact_6ce7d38fc7165545.isPlainObject(__s3param1)) {
      return __dep_exact_6ce7d38fc7165545.merge({}, __s3param1);
    } else if (__dep_exact_6ce7d38fc7165545.isArray(__s3param1)) {
      return __s3param1.slice();
    } else {
      return __s3param1;
    }
  }
  function mergeDeepProperties(__s9param0) {
    if (__dep_exact_6ce7d38fc7165545.isUndefined(__s1param1[__s9param0])) {
      if (!__dep_exact_6ce7d38fc7165545.isUndefined(__s1param0[__s9param0])) {
        __s1local0[__s9param0] = getMergedValue(undefined, __s1param0[__s9param0]);
      }
    } else {
      __s1local0[__s9param0] = getMergedValue(__s1param0[__s9param0], __s1param1[__s9param0]);
    }
  }
  __dep_exact_6ce7d38fc7165545.forEach(__s1local1, function valueFromConfig2(__s14param0) {
    if (!__dep_exact_6ce7d38fc7165545.isUndefined(__s1param1[__s14param0])) {
      __s1local0[__s14param0] = getMergedValue(undefined, __s1param1[__s14param0]);
    }
  });
  __dep_exact_6ce7d38fc7165545.forEach(__s1local2, mergeDeepProperties);
  __dep_exact_6ce7d38fc7165545.forEach(__s1local3, function defaultToConfig2(__s17param0) {
    if (__dep_exact_6ce7d38fc7165545.isUndefined(__s1param1[__s17param0])) {
      if (!__dep_exact_6ce7d38fc7165545.isUndefined(__s1param0[__s17param0])) {
        __s1local0[__s17param0] = getMergedValue(undefined, __s1param0[__s17param0]);
      }
    } else {
      __s1local0[__s17param0] = getMergedValue(undefined, __s1param1[__s17param0]);
    }
  });
  __dep_exact_6ce7d38fc7165545.forEach(__s1local4, function merge(__s22param0) {
    if (__s22param0 in __s1param1) {
      __s1local0[__s22param0] = getMergedValue(__s1param0[__s22param0], __s1param1[__s22param0]);
    } else if (__s22param0 in __s1param0) {
      __s1local0[__s22param0] = getMergedValue(undefined, __s1param0[__s22param0]);
    }
  });
  var __s1local5 = __s1local1.concat(__s1local2).concat(__s1local3).concat(__s1local4);
  var __s1local6 = Object.keys(__s1param0).concat(Object.keys(__s1param1)).filter(function filterAxiosKeys(__s26param0) {
    return __s1local5.indexOf(__s26param0) === -1;
  });
  __dep_exact_6ce7d38fc7165545.forEach(__s1local6, mergeDeepProperties);
  return __s1local0;
};
