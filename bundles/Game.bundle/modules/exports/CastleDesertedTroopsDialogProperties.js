Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleDesertedTroopsDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.messageVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDesertedTroopsDialogProperties, __s1param0);
  Object.defineProperty(CastleDesertedTroopsDialogProperties.prototype, "isCamp", {
    get: function () {
      return this.messageVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP || this.messageVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDesertedTroopsDialogProperties.prototype, "isHospitalEnabled", {
    get: function () {
      return this.messageVO.areaID != -1 && this.messageVO.kingdomID != -1 && this.messageVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDesertedTroopsDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleDesertedTroopsDialogProperties = __s0local0;
