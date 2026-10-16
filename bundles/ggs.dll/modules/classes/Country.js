Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Country(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8) {
    this.ggsCountryCode = __s3param0;
    this.ggsLanguageCode = __s3param1;
    this.browserLanguageCodes = __s3param2;
    this.geoIpCodes = __s3param3;
    this.flashRuntimeLanguageCodes = __s3param4;
    this.utcTimezoneMin = __s3param5;
    this.utcTimezoneMax = __s3param6;
    this.cdn = __s3param7;
    this.isDefault = __s3param8;
    this._flashLocaleId = "";
    this._useNonLatinCharset = false;
    if (this.ggsLanguageCode.toLowerCase() === "zh") {
      this._flashLocaleId = "zh-Hans-CN";
    } else {
      this._flashLocaleId = this.ggsLanguageCode.toLowerCase() + "-" + this.ggsCountryCode.toUpperCase();
    }
  }
  Country.prototype.isUTCTimezoneInRange = function (__s7param0) {
    return __s7param0 >= this.utcTimezoneMin && __s7param0 <= this.utcTimezoneMax;
  };
  Country.prototype.toString = function () {
    return "ggsCountryCode: '" + this.ggsCountryCode + "', ggsLangCode: '" + this.ggsLanguageCode + "', flashLangCodes: '" + this.flashRuntimeLanguageCodes + "', browserLangCodes: '" + this.browserLanguageCodes + "', geoIpCodes: '" + this.geoIpCodes + "', timeZoneOffset " + (isNaN(this.utcTimezoneMin) ? "NA" : "from " + this.utcTimezoneMin + " to " + this.utcTimezoneMax);
  };
  Object.defineProperty(Country.prototype, "useNonLatinCharset", {
    get: function () {
      return this._useNonLatinCharset;
    },
    set: function (__s13param0) {
      this._useNonLatinCharset = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Country.prototype, "isLanguageWrittenRightToLeft", {
    get: function () {
      return this.ggsLanguageCode === "ar";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Country.prototype, "flashLocaleId", {
    get: function () {
      return this._flashLocaleId;
    },
    enumerable: true,
    configurable: true
  });
  return Country;
}();
exports.Country = __s0local0;
