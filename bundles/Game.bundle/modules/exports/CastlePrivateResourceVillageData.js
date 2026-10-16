Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_PrivateResourceVillageInfoVO = require("gge-module:export_PrivateResourceVillageInfoVO");
var __s0local0 = function (__s1param0) {
  function CastlePrivateResourceVillageData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parse(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateResourceVillageData, __s1param0);
  CastlePrivateResourceVillageData.prototype.reset = function () {};
  CastlePrivateResourceVillageData.prototype.parse = function (__s7param0) {
    this.privateVillages = new Map();
    var __s7local0 = __s7param0.privateVillages;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = new __dep_export_PrivateResourceVillageInfoVO.PrivateResourceVillageInfoVO();
          __s7local4.fillFromParamXML(__s7local3);
          this.privateVillages.set(__s7local4.villageID, __s7local4);
        }
      }
    }
  };
  CastlePrivateResourceVillageData.prototype.getVillageByID = function (__s13param0) {
    return this.privateVillages.get(__s13param0);
  };
  CastlePrivateResourceVillageData.prototype.getPrivateVillages = function (__s15param0, __s15param1) {
    var __s15local0 = [];
    if (this.privateVillages != null) {
      for (var __s15local1 = 0, __s15local2 = Array.from(this.privateVillages.values()); __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3.kingdomID == __s15param0 && __s15local3.type == __s15param1) {
          __s15local0.push(__s15local3);
        }
      }
    }
    __s15local0.sort(this.bindFunction(this.sortByVillageLevel));
    return __s15local0;
  };
  CastlePrivateResourceVillageData.prototype.sortByVillageLevel = function (__s21param0, __s21param1) {
    return __s21param0.villageLevel - __s21param1.villageLevel;
  };
  CastlePrivateResourceVillageData.prototype.getPrivateVillageInfo = function (__s23param0, __s23param1, __s23param2) {
    if (this.privateVillages != null) {
      for (var __s23local0 = 0, __s23local1 = Array.from(this.privateVillages.values()); __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined && __s23local2.kingdomID == __s23param0 && __s23local2.type == __s23param1 && __s23local2.villageLevel == __s23param2) {
          return __s23local2;
        }
      }
    }
    return null;
  };
  return CastlePrivateResourceVillageData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastlePrivateResourceVillageData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
