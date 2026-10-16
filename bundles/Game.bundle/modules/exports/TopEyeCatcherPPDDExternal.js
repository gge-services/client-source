Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function TopEyeCatcherPPDDExternal(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, TopEyeCatcherPPDDExternal.getAssetName(__s3param1)) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TopEyeCatcherPPDDExternal, __s1param0);
  Object.defineProperty(TopEyeCatcherPPDDExternal, "languageCode", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    },
    enumerable: true,
    configurable: true
  });
  TopEyeCatcherPPDDExternal.getAssetName = function (__s7param0) {
    var __s7local0 = "en";
    var __s7local1 = "PivatePrimeDayDynamicDialog_TopEyeCatcher_" + __s7param0 + "_";
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local1 + TopEyeCatcherPPDDExternal.languageCode)) {
      __s7local0 = TopEyeCatcherPPDDExternal.languageCode;
    }
    return "PivatePrimeDayDynamicDialog_TopEyeCatcher_" + __s7param0 + "_" + __s7local0;
  };
  return TopEyeCatcherPPDDExternal;
}(require("gge-module:export_PPDDExternalPart").PPDDExternalPart);
exports.TopEyeCatcherPPDDExternal = __s0local0;
