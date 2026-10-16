Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_9e901e8e2483a22f7a07841d = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_1 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_2 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_08cd54218d41be91e4aee873 = require("gge-module:opaque_08cd54218d41be91e4aee873");
var __s0local0 = false;
function __s0local1(__s1param0) {
  if (__s1param0 === "production") {
    Object.defineProperty(window, "console", {
      value: console,
      writable: false,
      configurable: false
    });
    var __s1local0;
    var __s1local1 = {
      set: function (__s4param0) {
        __s1local0 = __s4param0;
      },
      get: function () {
        if (!__s0local0) {
          console.clear();
          console.log("%cStop!", "font: 4em sans-serif; color: white; background-color: red;");
          console.log("%cThis is a browser feature intended for developers.", "font: 2em sans-serif");
          console.log("%cIf someone told you to copy-paste something here to enable a GGS feature or 'hack' someone's account, it is a scam and will give them access to your account.", "font: 2em sans-serif");
          __s0local0 = true;
        }
        return __s1local0;
      }
    };
    Object.defineProperty(console, "_commandLineAPI", __s1local1);
    Object.defineProperty(console, "__commandLineAPI", __s1local1);
    if (console._commandLineAPI) {
      console._commandLineAPI();
    }
    if (console.__commandLineAPI) {
      console.__commandLineAPI();
    }
  }
}
exports.wrapper = function (__s11param0) {
  var __s11local0 = window.location.hostname.search("localhost") !== -1 || window.location.hostname.search("127.0.0.1") !== -1 ? "development" : window.location.hostname.search("test") === -1 ? "production" : window.location.pathname.split("/")[1] || "unknown";
  __s0local1(__s11local0);
  (function (__s13param0) {
    if (__s13param0 === "production") {
      ["log", "debug", "info", "warn", "error"].forEach(function (__s16param0) {
        console[__s16param0] = function () {};
      });
    }
  })(__s11local0);
  (function (__s20param0, __s20param1) {
    window.bugsnagClient = __dep_opaque_08cd54218d41be91e4aee873.default({
      apiKey: "8df757b7a283ecd9fe3c3b47fa5ffdf9",
      appVersion: __s20param0,
      collectUserIp: false,
      notifyReleaseStages: ["development", "qa", "preproduction", "production"],
      releaseStage: __s20param1,
      beforeSend: function (__s22param0) {
        if (__s22param0.errorMessage && __s22param0.errorMessage.indexOf("reCAPTCHA Timeout") !== -1) {
          __s22param0.ignore();
        } else if (__s22param0.errorClass === "SyntaxError" && __s22param0.errorMessage && (__s22param0.errorMessage.indexOf("An invalid or illegal string was specified") !== -1 || __s22param0.errorMessage.indexOf("Invalid target origin") !== -1 || __s22param0.errorMessage.indexOf("The string did not match the expected pattern") !== -1) && __s22param0.stacktrace && __s22param0.stacktrace.some(function (__s25param0) {
          return __s25param0 && __s25param0.file && __s25param0.file.indexOf("gstatic.com/recaptcha") !== -1;
        })) {
          __s22param0.ignore();
        } else {
          var __s22local0 = "no_tracking_info_available";
          try {
            __s22local0 = __dep_opaque_9e901e8e2483a22f7a07841d_1.TrackingCache.getInstance().getEvent(__dep_opaque_9e901e8e2483a22f7a07841d_2.TrackingEventIds.CLIENT_FUNNEL).gamestate_name || "unknown";
          } catch (__s30local0) {}
          var __s22local1 = __dep_opaque_9e901e8e2483a22f7a07841d.EnvGlobalsHandler.globals.lastShownDialog;
          var __s22local2 = __dep_opaque_9e901e8e2483a22f7a07841d.EnvGlobalsHandler.globals.lastUsedCommandName;
          var __s22local3 = __dep_opaque_9e901e8e2483a22f7a07841d.EnvGlobalsHandler.globals.lastExternalClip;
          __s22param0.metaData = {
            gameplay: {
              last_funnel_step: __s22local0,
              lastShownDialog: __s22local1,
              lastUsedCommandName: __s22local2,
              lastExternalClip: __s22local3
            }
          };
        }
      }
    });
  })(__s11param0, __s11local0);
  (function (__s32param0) {
    if (__s32param0.StyleMedia) {
      if (__s32param0.location.href.indexOf("debugedge") != -1) {
        console.log("Edge logging enabled");
        return;
      }
      if (typeof __s32param0.console == "object" || typeof __s32param0.console.log == "function") {
        console.log("logging disabled by default for Edge as with the certain dev setups and console closed it fails, to enable logging add \"debugedge\" to the querystring load the page (it will fail) open the console and reload, with the console object now created it will work");
        var __s32local0 = function noop() {};
        var __s32local1 = ["show", "hide", "clear", "log", "debug", "dir", "info", "warn", "error"];
        for (var __s32local2 = __s32local1.length; __s32local2--;) {
          console[__s32local1[__s32local2]] = __s32local0;
        }
      }
    }
  })(window);
  console.log("Initialize PageIntegration cross-communication registering MessageHandler with allowed domains");
  window.messageHandler = new window.MessageHandler(new window.EventHandler(), "*", window.parent, window.location != window.parent.location ? document.referrer : document.location.href);
  window.messageHandler.register();
};
