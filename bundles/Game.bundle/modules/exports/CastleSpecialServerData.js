Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function CastleSpecialServerData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._skins = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialServerData, __s1param0);
  CastleSpecialServerData.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.externalServerSkins; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skinID", __s5local2, "0", true));
        var __s5local4 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skin", __s5local2, "0", true);
        this._skins.set(__s5local3, __s5local4);
      }
    }
  };
  CastleSpecialServerData.prototype.getSkinNameByID = function (__s10param0) {
    return this._skins.get(__s10param0);
  };
  return CastleSpecialServerData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleSpecialServerData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
