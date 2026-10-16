Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CountryDetectionVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8) {
    this.browserLanguage = __s3param0;
    this.timezoneOffset = __s3param1;
    this.countryCodeFromNetworkCookie = __s3param2;
    this.countryCodeFromQueryString = __s3param3;
    this.countryByPresetInstance = __s3param4;
    this.zoneIdFromFriendInviteCode = __s3param5;
    this.countryByDefaultInstance = __s3param6;
    this.fakeGeoIpResponse = __s3param7;
    this.alsoDetectUnavailableCountries = __s3param8;
  }
  CountryDetectionVO.prototype.toString = function () {
    return ["browserLanguage: " + this.browserLanguage, "timezoneOffset: " + this.timezoneOffset, "countryCodeFromNetworkCookie: " + this.countryCodeFromNetworkCookie, "countryCodeFromQueryString: " + this.countryCodeFromQueryString, "countryByInstance: " + this.countryByPresetInstance, "zoneIdFromFriendInviteCode: " + this.zoneIdFromFriendInviteCode, "countryByDefaultInstance: " + this.countryByDefaultInstance, "fakeGeoIpResponse: " + this.fakeGeoIpResponse, "alsoDetectUnavailableCountries: " + this.alsoDetectUnavailableCountries].join(", ");
  };
  return CountryDetectionVO;
}();
exports.CountryDetectionVO = __s0local0;
