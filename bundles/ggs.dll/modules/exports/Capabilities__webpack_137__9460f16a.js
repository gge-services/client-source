// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 137
// Export: Capabilities; preserved source: modules/webpack/classes/Capabilities.js
// Original canonical SHA-256: 95754f6fcd88c0ccfc191f33961db412277aa4a3ce2a5fb6173eea8879aba4a8
var __s0local2 = function () {
  function Capabilities() {}
  Object.defineProperty(Capabilities, "language", {
    get: function () {
      return Capabilities.$language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "isMobile", {
    get: function () {
      return Capabilities.$isMobile;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "os", {
    get: function () {
      return Capabilities.$os;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "runtimeType", {
    get: function () {
      return Capabilities.$runtimeType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "supportVersion", {
    get: function () {
      return Capabilities.$supportVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "engineVersion", {
    get: function () {
      return "5.0.15";
    },
    enumerable: true,
    configurable: true
  });
  Capabilities.$setNativeCapabilities = function (__s25param0) {
    var __s25local0 = __s25param0.split("-");
    if (__s25local0.length <= 4) {
      var __s25local1 = __s25local0[0];
      switch (__s25local1) {
        case "android":
          __s25local1 = "Android";
          break;
        case "ios":
          __s25local1 = "iOS";
      }
      Capabilities.$os = __s25local1;
      var __s25local2 = __s25local0[2].substring(1, __s25local0[2].length);
      Capabilities.$supportVersion = __s25local2;
    }
  };
  Object.defineProperty(Capabilities, "renderMode", {
    get: function () {
      return Capabilities.$renderMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "boundingClientWidth", {
    get: function () {
      return Capabilities.$boundingClientWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "boundingClientHeight", {
    get: function () {
      return Capabilities.$boundingClientHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "screenResolutionX", {
    get: function () {
      return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "screenResolutionY", {
    get: function () {
      return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "version", {
    get: function () {
      return navigator.userAgent;
    },
    enumerable: true,
    configurable: true
  });
  Capabilities.$language = "en-US";
  Capabilities.$os = __s0local1.UNKNOW;
  Capabilities.$runtimeType = __s0local0.UNKNOWN;
  Capabilities.$supportVersion = "Unknown";
  Capabilities.$renderMode = "Unknown";
  Capabilities.$boundingClientWidth = 0;
  Capabilities.$boundingClientHeight = 0;
  return Capabilities;
}();
exports.Capabilities = __s0local2;
__s0local2.$isMobile = function () {
  if (!window.navigator) {
    return true;
  }
  var __s41local0 = navigator.userAgent.toLowerCase();
  return __s41local0.includes("mobile") || __s41local0.includes("android");
}();
__s0local2.$runtimeType = window.navigator ? __s0local0.WEB : __s0local0.NATIVE;
__s0local2.$os = function () {
  var __s44local0 = navigator.userAgent.toLowerCase();
  if (__s0local2.$isMobile) {
    if (!__s44local0.includes("windows") && (__s44local0.includes("iphone") || __s44local0.includes("ipad") || __s44local0.includes("ipod"))) {
      return __s0local1.IOS;
    }
    if (__s44local0.includes("android") && __s44local0.includes("linux")) {
      return __s0local1.ANDROID;
    }
    if (__s44local0.includes("windows")) {
      return __s0local1.WINDOWS_PHONE;
    }
  } else {
    if (__s44local0.includes("windows nt")) {
      return __s0local1.WINDOWS_PC;
    }
    if (__s44local0.includes("mac os")) {
      return __s0local1.MAC_OS;
    }
    if (__s44local0.includes("linux")) {
      return __s0local1.LINUX;
    }
  }
  return __s0local1.UNKNOW;
}();
__s0local2.$language = typeof __dep_exact_7c2f3ca96c71fba4 == "function" ? __dep_exact_7c2f3ca96c71fba4() : __dep_exact_7c2f3ca96c71fba4;
