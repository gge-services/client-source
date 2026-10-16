Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function GDPRLinkComponent(__s3param0, __s3param1, __s3param2) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GDPRLinkComponent, __s1param0);
  GDPRLinkComponent.prototype.onClick = function (__s5param0, __s5param1) {
    if (__dep_exact_9e901e8e2483a22f_1.EnvironmentProvider.instance.current.data.languageCode == "ar") {
      var __s5local0 = __s5param1 && __s5param1.indexOf("term") != -1 ? __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlAGB : __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlPolicy;
      var __s5local1 = new __dep_exact_81dacdf05bd32292.URLRequest(__s5local0);
      __dep_exact_81dacdf05bd32292_1.navigateToURL(__s5local1, "goodgamestudios");
    } else {
      __s1param0.prototype.onClick.call(this, __s5param0, __s5param1);
    }
  };
  return GDPRLinkComponent;
}(require("gge-module:export_DarkDialogLinkComponent").DarkDialogLinkComponent);
exports.GDPRLinkComponent = __s0local0;
