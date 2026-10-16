Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentDialogProperties(__s3param0, __s3param1 = -1, __s3param2 = false, __s3param3 = -1, __s3param4 = "") {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.selectedLordID = 0;
    __s3local0.showBarons = false;
    __s3local0.lordUsed = 0;
    __s3local0.selectedFilter = 0;
    __s3local0.tabState = "";
    __s3local0.showBarons = __s3param2;
    __s3local0.onCloseFunction = __s3param0;
    __s3local0.selectedLordID = __s3param1;
    __s3local0.tabState = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentDialogProperties, __s1param0);
  return CastleEquipmentDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleEquipmentDialogProperties = __s0local0;
