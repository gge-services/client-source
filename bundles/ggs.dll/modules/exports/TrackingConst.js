// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: TrackingConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local90 = function () {
  function TrackingConst() {}
  TrackingConst.wasAutofieldUsed = function (__s1772param0) {
    return (__s1772param0 & TrackingConst.TRACKING_AUTOFILL_USED) != 0;
  };
  TrackingConst.wasAutofieldToolsBefore = function (__s1774param0) {
    return (__s1774param0 & TrackingConst.TRACKING_AUTOFILL_TOOLS_BEFORE) != 0;
  };
  TrackingConst.wasAutofieldSoldiersBefore = function (__s1776param0) {
    return (__s1776param0 & TrackingConst.TRACKING_AUTOFILL_SOLDIERS_BEFORE) != 0;
  };
  TrackingConst.wasAutofieldModified = function (__s1778param0) {
    return (__s1778param0 & TrackingConst.TRACKING_AUTOFILL_MODIFIED) != 0;
  };
  return TrackingConst;
}();
__s0local90.TRACKING_ID_MOVEMENTS = 901;
__s0local90.TRACKING_AUTOFILL_USED = 1;
__s0local90.TRACKING_AUTOFILL_TOOLS_BEFORE = 2;
__s0local90.TRACKING_AUTOFILL_SOLDIERS_BEFORE = 4;
__s0local90.TRACKING_AUTOFILL_MODIFIED = 8;
exports.TrackingConst = __s0local90;
__s0local90.__class = "TrackingConst";
