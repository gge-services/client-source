Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = new Map([["en_AU", "en-GB"], ["en_GB", "en-GB"], ["zh_CN_CN", "zh-Hans"], ["zh_TW_HK", "zh-Hant-HK"], ["zh_TW_TW", "zh-Hant"]]);
var __s0local1 = function () {
  function LanguageVO(__s3param0, __s3param1, __s3param2 = false, __s3param3 = 100000, __s3param4 = -1, __s3param5 = true, __s3param6 = true) {
    this.ggsCountryCode = __s3param0;
    this.ggsLanguageCode = __s3param1;
    this.neverUseAbbreviations = __s3param2;
    this.abbreviationThreshold = __s3param3;
    this.fractionalDigits = __s3param4;
    this.leadingZero = __s3param5;
    this.trailingZeros = __s3param6;
    var __s3local0 = this.ggsLanguageCode + "_" + this.ggsCountryCode.toUpperCase();
    this._locale = __s0local0.has(__s3local0) ? __s0local0.get(__s3local0) : this.ggsLanguageCode.replace(/_\w+/g, "");
  }
  Object.defineProperty(LanguageVO.prototype, "isLanguageWrittenRightToLeft", {
    get: function () {
      return this.ggsLanguageCode === "ar";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LanguageVO.prototype, "locale", {
    get: function () {
      return this._locale;
    },
    enumerable: true,
    configurable: true
  });
  return LanguageVO;
}();
exports.LanguageVO = __s0local1;
