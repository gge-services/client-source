module.exports = fetch;
var __dep_exact_877cd94d7bdbb5d0 = require("gge-module:exact_877cd94d7bdbb5d0");
var __s0local0 = require("gge-module:exact_3b5b35a45529e710")("fs");
function fetch(__s1param0, __s1param1, __s1param2) {
  if (typeof __s1param1 == "function") {
    __s1param2 = __s1param1;
    __s1param1 = {};
  } else {
    __s1param1 ||= {};
  }
  if (__s1param2) {
    if (!__s1param1.xhr && __s0local0 && __s0local0.readFile) {
      return __s0local0.readFile(__s1param0, function fetchReadFileCallback(__s7param0, __s7param1) {
        if (__s7param0 && typeof XMLHttpRequest != "undefined") {
          return fetch.xhr(__s1param0, __s1param1, __s1param2);
        } else if (__s7param0) {
          return __s1param2(__s7param0);
        } else {
          return __s1param2(null, __s1param1.binary ? __s7param1 : __s7param1.toString("utf8"));
        }
      });
    } else {
      return fetch.xhr(__s1param0, __s1param1, __s1param2);
    }
  } else {
    return __dep_exact_877cd94d7bdbb5d0(fetch, this, __s1param0, __s1param1);
  }
}
fetch.xhr = function fetch_xhr(__s14param0, __s14param1, __s14param2) {
  var __s14local0 = new XMLHttpRequest();
  __s14local0.onreadystatechange = function fetchOnReadyStateChange() {
    if (__s14local0.readyState === 4) {
      if (__s14local0.status !== 0 && __s14local0.status !== 200) {
        return __s14param2(Error("status " + __s14local0.status));
      }
      if (__s14param1.binary) {
        var __s16local0 = __s14local0.response;
        if (!__s16local0) {
          __s16local0 = [];
          for (var __s16local1 = 0; __s16local1 < __s14local0.responseText.length; ++__s16local1) {
            __s16local0.push(__s14local0.responseText.charCodeAt(__s16local1) & 255);
          }
        }
        return __s14param2(null, typeof Uint8Array != "undefined" ? new Uint8Array(__s16local0) : __s16local0);
      }
      return __s14param2(null, __s14local0.responseText);
    }
  };
  if (__s14param1.binary) {
    if ("overrideMimeType" in __s14local0) {
      __s14local0.overrideMimeType("text/plain; charset=x-user-defined");
    }
    __s14local0.responseType = "arraybuffer";
  }
  __s14local0.open("GET", __s14param0);
  __s14local0.send();
};
