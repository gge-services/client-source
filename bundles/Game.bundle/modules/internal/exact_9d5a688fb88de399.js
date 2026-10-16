var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
var __dep_exact_1749dc7ce836d087 = require("gge-module:exact_1749dc7ce836d087");
var __dep_exact_a99d9afcc49a5b55 = require("gge-module:exact_a99d9afcc49a5b55");
var __dep_exact_799aeda364fc1163 = require("gge-module:exact_799aeda364fc1163");
var __dep_exact_83cb582a685dc4db = require("gge-module:exact_83cb582a685dc4db");
var __dep_exact_29f6c6a6b3202935 = require("gge-module:exact_29f6c6a6b3202935");
var __dep_exact_2c41e3d9d5665fa3 = require("gge-module:exact_2c41e3d9d5665fa3");
var __dep_exact_765815e5f620481c = require("gge-module:exact_765815e5f620481c");
module.exports = function xhrAdapter(__s1param0) {
  return new Promise(function dispatchXhrRequest(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.data;
    var __s3local1 = __s1param0.headers;
    if (__dep_exact_6ce7d38fc7165545.isFormData(__s3local0)) {
      delete __s3local1["Content-Type"];
    }
    var __s3local2 = new XMLHttpRequest();
    if (__s1param0.auth) {
      var __s3local3 = __s1param0.auth.username || "";
      var __s3local4 = __s1param0.auth.password ? unescape(encodeURIComponent(__s1param0.auth.password)) : "";
      __s3local1.Authorization = "Basic " + btoa(__s3local3 + ":" + __s3local4);
    }
    var __s3local5 = __dep_exact_83cb582a685dc4db(__s1param0.baseURL, __s1param0.url);
    __s3local2.open(__s1param0.method.toUpperCase(), __dep_exact_799aeda364fc1163(__s3local5, __s1param0.params, __s1param0.paramsSerializer), true);
    __s3local2.timeout = __s1param0.timeout;
    __s3local2.onreadystatechange = function handleLoad() {
      if (__s3local2 && __s3local2.readyState === 4 && (__s3local2.status !== 0 || __s3local2.responseURL && __s3local2.responseURL.indexOf("file:") === 0)) {
        var __s7local0 = "getAllResponseHeaders" in __s3local2 ? __dep_exact_29f6c6a6b3202935(__s3local2.getAllResponseHeaders()) : null;
        var __s7local1 = {
          data: __s1param0.responseType && __s1param0.responseType !== "text" ? __s3local2.response : __s3local2.responseText,
          status: __s3local2.status,
          statusText: __s3local2.statusText,
          headers: __s7local0,
          config: __s1param0,
          request: __s3local2
        };
        __dep_exact_1749dc7ce836d087(__s3param0, __s3param1, __s7local1);
        __s3local2 = null;
      }
    };
    __s3local2.onabort = function handleAbort() {
      if (__s3local2) {
        __s3param1(__dep_exact_765815e5f620481c("Request aborted", __s1param0, "ECONNABORTED", __s3local2));
        __s3local2 = null;
      }
    };
    __s3local2.onerror = function handleError() {
      __s3param1(__dep_exact_765815e5f620481c("Network Error", __s1param0, null, __s3local2));
      __s3local2 = null;
    };
    __s3local2.ontimeout = function handleTimeout() {
      var __s15local0 = "timeout of " + __s1param0.timeout + "ms exceeded";
      if (__s1param0.timeoutErrorMessage) {
        __s15local0 = __s1param0.timeoutErrorMessage;
      }
      __s3param1(__dep_exact_765815e5f620481c(__s15local0, __s1param0, "ECONNABORTED", __s3local2));
      __s3local2 = null;
    };
    if (__dep_exact_6ce7d38fc7165545.isStandardBrowserEnv()) {
      var __s3local6 = (__s1param0.withCredentials || __dep_exact_2c41e3d9d5665fa3(__s3local5)) && __s1param0.xsrfCookieName ? __dep_exact_a99d9afcc49a5b55.read(__s1param0.xsrfCookieName) : undefined;
      if (__s3local6) {
        __s3local1[__s1param0.xsrfHeaderName] = __s3local6;
      }
    }
    if ("setRequestHeader" in __s3local2) {
      __dep_exact_6ce7d38fc7165545.forEach(__s3local1, function setRequestHeader(__s21param0, __s21param1) {
        if (__s3local0 === undefined && __s21param1.toLowerCase() === "content-type") {
          delete __s3local1[__s21param1];
        } else {
          __s3local2.setRequestHeader(__s21param1, __s21param0);
        }
      });
    }
    if (!__dep_exact_6ce7d38fc7165545.isUndefined(__s1param0.withCredentials)) {
      __s3local2.withCredentials = !!__s1param0.withCredentials;
    }
    if (__s1param0.responseType) {
      try {
        __s3local2.responseType = __s1param0.responseType;
      } catch (__s28local0) {
        if (__s1param0.responseType !== "json") {
          throw __s28local0;
        }
      }
    }
    if (typeof __s1param0.onDownloadProgress == "function") {
      __s3local2.addEventListener("progress", __s1param0.onDownloadProgress);
    }
    if (typeof __s1param0.onUploadProgress == "function" && __s3local2.upload) {
      __s3local2.upload.addEventListener("progress", __s1param0.onUploadProgress);
    }
    if (__s1param0.cancelToken) {
      __s1param0.cancelToken.promise.then(function onCanceled(__s34param0) {
        if (__s3local2) {
          __s3local2.abort();
          __s3param1(__s34param0);
          __s3local2 = null;
        }
      });
    }
    __s3local0 ||= null;
    __s3local2.send(__s3local0);
  });
};
