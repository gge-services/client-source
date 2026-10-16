Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function CountrySelectComponentEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.selectedCountry = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CountrySelectComponentEvent, __s1param0);
  CountrySelectComponentEvent.COUNTRY_VIEW_OPENED = "countryViewOpened";
  CountrySelectComponentEvent.COUNTRY_VIEW_CLOSED = "countryViewClosed";
  CountrySelectComponentEvent.COUNTRY_CHANGED = "countryChanged";
  return CountrySelectComponentEvent;
}(createjs.Event);
exports.CountrySelectComponentEvent = __s0local0;
