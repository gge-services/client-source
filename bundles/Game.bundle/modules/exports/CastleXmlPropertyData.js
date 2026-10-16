Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleXmlPropertyVO = require("gge-module:export_CastleXmlPropertyVO");
var __s0local0 = function (__s1param0) {
  function CastleXmlPropertyData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._propertyDic = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleXmlPropertyData, __s1param0);
  CastleXmlPropertyData.prototype.parseXML = function (__s5param0) {
    this._propertyDic = new Map();
    var __s5local0 = __s5param0.properties;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_CastleXmlPropertyVO.CastleXmlPropertyVO();
          __s5local4.fillByXmlNode(__s5local3);
          this._propertyDic.set(__s5local4.id, __s5local4);
        }
      }
    }
  };
  CastleXmlPropertyData.prototype.getPropertyById = function (__s11param0) {
    return this.propertyDic.get(__s11param0);
  };
  CastleXmlPropertyData.prototype.getValueById = function (__s13param0) {
    var __s13local0 = this.getPropertyById(__s13param0);
    if (__s13local0) {
      return __s13local0.value;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleXmlPropertyData.prototype, "propertyDic", {
    get: function () {
      return this._propertyDic;
    },
    enumerable: true,
    configurable: true
  });
  return CastleXmlPropertyData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleXmlPropertyData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
