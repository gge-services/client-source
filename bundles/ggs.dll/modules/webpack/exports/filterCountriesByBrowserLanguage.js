Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCountriesByCountryCode = function (__s1param0, __s1param1) {
  return __s1param0.filter(function (__s3param0) {
    return __s3param0.ggsCountryCode.toLowerCase() === __s1param1.toLowerCase();
  });
};
exports.filterCountriesByGeoIpCode = function (__s5param0, __s5param1) {
  return __s5param0.filter(function (__s7param0) {
    return __s7param0.geoIpCodes.map(function (__s9param0) {
      return __s9param0.toLocaleLowerCase();
    }).includes(__s5param1.toLocaleLowerCase());
  });
};
exports.filterCountriesByBrowserLanguage = function (__s11param0, __s11param1) {
  return __s11param0.filter(function (__s13param0) {
    return __s13param0.browserLanguageCodes.map(function (__s15param0) {
      return __s15param0.toLocaleLowerCase();
    }).includes(__s11param1.toLocaleLowerCase());
  });
};
exports.filterCountriesByTimezone = function (__s17param0, __s17param1) {
  return __s17param0.filter(function (__s19param0) {
    return __s19param0.isUTCTimezoneInRange(__s17param1);
  });
};
