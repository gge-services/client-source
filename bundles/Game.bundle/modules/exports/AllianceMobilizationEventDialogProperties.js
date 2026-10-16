Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._startTab = __s3param0;
    __s3local0._eventID = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogProperties, __s1param0);
  Object.defineProperty(AllianceMobilizationEventDialogProperties.prototype, "startTab", {
    get: function () {
      return this._startTab;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventDialogProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceMobilizationEventDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.AllianceMobilizationEventDialogProperties = __s0local0;
