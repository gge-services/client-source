Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AllianceDivisionContributionsEvent(__s3param0, __s3param1, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0._contributionVOs = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceDivisionContributionsEvent, __s1param0);
  Object.defineProperty(AllianceDivisionContributionsEvent.prototype, "contributionVOs", {
    get: function () {
      return this._contributionVOs;
    },
    enumerable: true,
    configurable: true
  });
  AllianceDivisionContributionsEvent.ALLIANCE_CONTRIBUTIONS_RECEIVED = "ALLIANCE_CONTRIBUTIONS_RECEIVED";
  return AllianceDivisionContributionsEvent;
}(createjs.Event);
exports.AllianceDivisionContributionsEvent = __s0local0;
