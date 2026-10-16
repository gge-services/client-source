Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_6fd0a7f85c69b366718f0fa2 = require("gge-module:opaque_6fd0a7f85c69b366718f0fa2");
var __dep_opaque_9e901e8e2483a22f7a07841d = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_export_CastleEnvironmentGlobals = require("gge-module:export_CastleEnvironmentGlobals");
var __dep_export_RelativePathEnvironment = require("gge-module:export_RelativePathEnvironment");
var __dep_export_wrapper = require("gge-module:export_wrapper");
var __dep_export_appVersion = require("gge-module:export_appVersion");
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
__dep_export_wrapper.wrapper(__dep_export_appVersion.appVersion);
var __s0local0 = function (__s1param0) {
  function CastleCacheBreakerSwf() {
    CONSTRUCTOR_HACK;
    __dep_opaque_9e901e8e2483a22f7a07841d.EnvGlobalsHandler.setEnvGlobalsClass(new __dep_export_CastleEnvironmentGlobals.CastleEnvironmentGlobals());
    return __s1param0.call(this) || this;
  }
  __dep_opaque_6fd0a7f85c69b366718f0fa2.__extends(CastleCacheBreakerSwf, __s1param0);
  Object.defineProperty(CastleCacheBreakerSwf.prototype, "customEnvironments", {
    get: function () {
      var __s5local0 = [];
      __s5local0.push(__dep_export_RelativePathEnvironment.RelativePathEnvironment);
      return __s5local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCacheBreakerSwf.prototype, "ignoreSavedZoneId", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  CastleCacheBreakerSwf.prototype.loadGame = function () {
    if (__dep_opaque_9e901e8e2483a22f7a07841d.BasicModel.branchesModel) {
      var __s9local0 = "/" + __dep_opaque_9e901e8e2483a22f7a07841d.BasicModel.branchesModel.currentBranch.id + "/index.html";
      if (!this.env.isTest && !window.location.pathname.includes(__s9local0)) {
        var __s9local1 = window.location.href.replace(/\/[a-zA-Z0-9_]+\/index\.html/, __s9local0);
        document.location.assign(__s9local1);
        return;
      }
    }
    __s1param0.prototype.loadGame.call(this);
    window.Helpshift("hide");
  };
  return CastleCacheBreakerSwf;
}(__dep_opaque_9e901e8e2483a22f7a07841d.BasicCacheBreakerSwf);
exports.CastleCacheBreakerSwf = __s0local0;
window.setLoadingScreenProgress(30);
var __s0local1 = 60;
window.fakeLoadingTimer = setInterval(function () {
  if (__s0local1 >= 30) {
    window.setLoadingScreenProgress(100 - __s0local1);
    __s0local1 -= 5 + Math.random() * 5 >> 0;
  }
}, 1000);
var __s0local2 = document.getElementById("startScreenVideo");
if (__dep_export_StartscreenHelper.StartscreenHelper.hasBackgroundAnimation()) {
  __dep_export_StartscreenHelper.StartscreenHelper.updateBackgroundAnimation();
} else {
  __s0local2.remove();
  document.getElementById("edgeStartscreenVideoReplacement").style.backgroundImage = "url(ModernStartscreenAnimation_large.jpg)";
}
new __s0local0();
