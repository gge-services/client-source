Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = ["ar", "bg", "el", "ja", "ko", "ru", "zh_CN", "zh_TW"];
exports.fontConfigResolver = function () {
  var __s1local0 = __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode;
  if (!__s0local0.includes(__s1local0)) {
    __s1local0 = "en";
  }
  if (__s1local0.includes("_")) {
    __s1local0 = __s1local0.split("_")[0];
  }
  return {
    urls: ["./css/fonts_" + __s1local0 + ".css"],
    families: ["_BodyFont", "_HeaderFont"]
  };
};
