Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInfoDialogProperties(__s3param0, __s3param1 = "", __s3param2 = -1, __s3param3 = 1, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0.allianceID = 0;
    __s3local0.statusID = 0;
    __s3local0.statusConfirmed = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).allianceID = __s3param0;
    __s3local0.allianceName = __s3param1;
    __s3local0.statusID = __s3param2;
    __s3local0.statusConfirmed = __s3param3 == 1;
    __s3local0.startCat = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialogProperties, __s1param0);
  return CastleAllianceInfoDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleAllianceInfoDialogProperties = __s0local0;
