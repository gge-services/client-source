Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function () {
  function ClientConstLanguage() {}
  ClientConstLanguage.isLanguageInLatinLetters = function (__s5param0) {
    switch (__s5param0) {
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_ARABIC:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_CHINESE_SIMPLE:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_CHINESE_TRADITIONAL:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_JAPANESE:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_KOREAN:
        return false;
    }
    return true;
  };
  ClientConstLanguage.COUNTRY_GERMANY = "de";
  ClientConstLanguage.COUNTRY_FRANCE = "fr";
  ClientConstLanguage.COUNTRY_PORTUGAL = "pt";
  ClientConstLanguage.COUNTRY_ITALY = "it";
  ClientConstLanguage.COUNTRY_GREECE = "gr";
  ClientConstLanguage.COUNTRY_GREECE2 = "el";
  ClientConstLanguage.COUNTRY_FINNLAND = "fi";
  ClientConstLanguage.COUNTRY_NETHERLANDS = "nl";
  ClientConstLanguage.COUNTRY_SLOVAKIA = "sk";
  ClientConstLanguage.COUNTRY_ENGLAND = "gb";
  ClientConstLanguage.COUNTRY_USA = "us";
  ClientConstLanguage.COUNTRY_CZECHIA = "cz";
  ClientConstLanguage.COUNTRY_POLAND = "pl";
  ClientConstLanguage.COUNTRY_BRASIL = "br";
  ClientConstLanguage.COUNTRY_HUNGARY = "hu";
  ClientConstLanguage.COUNTRY_ROMANIA = "ro";
  ClientConstLanguage.COUNTRY_DENMARK = "dk";
  ClientConstLanguage.COUNTRY_SWEDEN = "se";
  ClientConstLanguage.COUNTRY_TURKEY = "tr";
  ClientConstLanguage.COUNTRY_RUSSIA = "ru";
  ClientConstLanguage.COUNTRY_JAPAN = "jp";
  return ClientConstLanguage;
}();
exports.ClientConstLanguage = __s0local0;
