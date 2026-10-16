Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function LanguageDataEvent(__s3param0, __s3param1 = "", __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.selectedLanguage = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LanguageDataEvent, __s1param0);
  LanguageDataEvent.XML_LOAD_COMPLETE = "xml_load_complete";
  LanguageDataEvent.FONT_LOAD_COMPLETE = "font_load_complete";
  LanguageDataEvent.SELECT_LANGUAGE_COMPLETE = "selectlanguage_complete";
  LanguageDataEvent.FONT_LOAD_START = "font_load_start";
  LanguageDataEvent.LANGUAGE_GENERIC_ERROR = "soemthing_wrong_happened_while_loading_parsing_language_json";
  return LanguageDataEvent;
}(createjs.Event);
exports.LanguageDataEvent = __s0local0;
