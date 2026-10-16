Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_IdentityManagementConstants = require("gge-module:class_IdentityManagementConstants");
var __s0local0 = function (__s1param0) {
  function IdentityManagementLicenseEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0.initialAgeRatingTextId = __dep_class_IdentityManagementConstants.IdentityManagementConstants.TEXT_ID_INITIAL_AGE_RATING_INFO;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(IdentityManagementLicenseEvent, __s1param0);
  IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT = "showLicenseInitialAgeRatingText";
  IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS = "showLicenseLogos";
  IdentityManagementLicenseEvent.HIDE_LICENSE = "hideLicense";
  IdentityManagementLicenseEvent.HIDE_NICE_ID_DIALOG = "hideNiceIDDialog";
  return IdentityManagementLicenseEvent;
}(createjs.Event);
exports.IdentityManagementLicenseEvent = __s0local0;
