Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLanguage = require("gge-module:export_ClientConstLanguage");
var __s0local0 = function () {
  function TextHelper() {}
  TextHelper.toUpperCaseLocaSafe = function (__s5param0) {
    var __s5local0 = __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    if (__s5local0 == __dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_GREECE || __s5local0 == __dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_GREECE2 || __s5local0 == __dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_TURKEY) {
      return __s5param0;
    } else {
      return (__s5param0 = (__s5param0 = (__s5param0 = (__s5param0 = (__s5param0 = (__s5param0 = __s5param0.replace(/&quot;/g, "\"")).replace(/&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&apos;/g, "'")).replace(/&nbsp;/g, "\xA0")).toUpperCase();
    }
  };
  TextHelper.toUpperCaseLocaSafeTextId = function (__s9param0, __s9param1 = null) {
    return TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(__s9param0, __s9param1));
  };
  TextHelper.getExistingTextID = function (__s11param0, __s11param1) {
    if (__dep_exact_92d05af59ee2ff30.Localize.text(__s11param0) != __s11param0) {
      return __s11param0;
    } else {
      return __s11param1;
    }
  };
  return TextHelper;
}();
exports.TextHelper = __s0local0;
