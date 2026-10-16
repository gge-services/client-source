Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_9e901e8e2483a22f7a07841d = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_1 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_81dacdf05bd322922517ac3a = require("gge-module:opaque_81dacdf05bd322922517ac3a");
var __s0local0 = function () {
  function StartscreenHelper() {}
  StartscreenHelper.usesModernStartscreen = function (__s5param0 = -1) {
    var __s5local0 = __s5param0 > -1 ? __s5param0 : __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    var __s5local1 = __dep_opaque_9e901e8e2483a22f7a07841d.EnvGlobalsHandler.globals.loginIsKeyBased || __dep_opaque_9e901e8e2483a22f7a07841d.EnvGlobalsHandler.globals.isFacebook;
    var __s5local2 = StartscreenHelper.STARTSCREEN_ZONE_IDS.length == 0 || StartscreenHelper.STARTSCREEN_ZONE_IDS.indexOf(__s5local0) > -1;
    return !__s5local1 && __s5local2;
  };
  StartscreenHelper.updateBackgroundAnimation = function (__s7param0 = false) {
    var __s7local0 = document.getElementById("startScreenVideo");
    if (__s7local0) {
      var __s7local1;
      var __s7local2 = document.documentElement.clientWidth;
      var __s7local3 = document.documentElement.clientHeight;
      if (__s7local2 <= 1024 && __s7local3 <= 900) {
        __s7local1 = "ModernStartscreenAnimation_small.mp4";
        __s7local0.style.width = "1024px";
        __s7local0.style.height = "900px";
        __s7local0.style.left = "calc(50% - 512px)";
      } else if (__s7local2 <= 1366 && __s7local3 <= 910) {
        __s7local1 = "ModernStartscreenAnimation_medium.mp4";
        __s7local0.style.width = "1366px";
        __s7local0.style.height = "910px";
        __s7local0.style.left = "calc(50% - 683px)";
      } else {
        __s7local1 = "ModernStartscreenAnimation_large.mp4";
        __s7local0.style.width = "1920px";
        __s7local0.style.height = "1080px";
        __s7local0.style.left = "calc(50% - 960px)";
      }
      if (__s7local0.src.indexOf(__s7local1) == -1) {
        __s7local0.src = __s7local1;
      }
      if (__s7param0) {
        var __s7local4 = __s7local0.play();
        if (__s7local4 && __s7local4.then) {
          __s7local4.then(function () {}, function (__s18param0) {});
        }
      }
    }
  };
  StartscreenHelper.hasBackgroundAnimation = function () {
    return !__dep_opaque_81dacdf05bd322922517ac3a.currentBrowserInfo.isIE;
  };
  StartscreenHelper.STARTSCREEN_ZONE_IDS = [];
  return StartscreenHelper;
}();
exports.StartscreenHelper = __s0local0;
