Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __s0local0 = function (__s1param0) {
  function CastleXmlData() {
    var __s3local0 = this;
    __s3local0._nodes = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleXmlData, __s1param0);
  CastleXmlData.prototype.parseXML = function (__s5param0) {
    var __s5local0 = new Map();
    var __s5local1 = this.getXmlList(__s5param0);
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          var __s5local5 = this.getNewNode();
          __s5local5.parseXML(__s5local4);
          __s5local0.set(__s5local5.getId(), __s5local5);
        }
      }
    }
    this._nodes = __s5local0;
  };
  CastleXmlData.prototype.getXmlList = function (__s11param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleXmlData.prototype.getNewNode = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleXmlData.prototype.getNode = function (__s15param0) {
    return this._nodes.get(__s15param0);
  };
  return CastleXmlData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleXmlData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
