Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicCategoryVO() {
    this._id = 0;
    this._neededMinimum = 0;
  }
  XmlRelicCategoryVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._neededRatings = [];
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("neededRatings", __s5param0).split("#");
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = __s5local3.split(",");
          var __s5local5 = [];
          if (__s5local4 != null) {
            for (var __s5local6 = 0, __s5local7 = __s5local4; __s5local6 < __s5local7.length; __s5local6++) {
              var __s5local8 = __s5local7[__s5local6];
              if (__s5local8 !== undefined) {
                __s5local5.push(parseInt(__s5local8));
              }
            }
          }
          this._neededRatings.push(__s5local5);
        }
      }
    }
    this._neededMinimum = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("_neededMinimum", __s5param0));
  };
  Object.defineProperty(XmlRelicCategoryVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicCategoryVO.prototype, "neededRatings", {
    get: function () {
      return this._neededRatings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicCategoryVO.prototype, "neededMinimum", {
    get: function () {
      return this._neededMinimum;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicCategoryVO;
}();
exports.XmlRelicCategoryVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
