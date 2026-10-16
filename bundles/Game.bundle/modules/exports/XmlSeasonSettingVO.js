Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSeasonSettingVO() {
    this.settingID = 0;
    this.seasonPassEventEndPrice = 0;
    this.seasonPassFullDiscount = 0;
    this.seasonPassSingleDiscount = 0;
  }
  XmlSeasonSettingVO.prototype.parseXml = function (__s5param0) {
    this.settingID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("settingID", __s5param0, -1));
    this.seasonPassPromotionPrice = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("seasonPassPromotionPrice", __s5param0));
    this.seasonPassEventEndPrice = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("seasonPassEventEndPrice", __s5param0));
    this.seasonPassFullDiscount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("seasonPassFullDiscount", __s5param0));
    this.seasonPassSingleDiscount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("seasonPassSingleDiscount", __s5param0));
  };
  Object.defineProperty(XmlSeasonSettingVO.prototype, "seasonPassEventSalePrice", {
    get: function () {
      return Math.ceil(this.seasonPassEventEndPrice * (1 - this.seasonPassSingleDiscount / 100));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonSettingVO.prototype, "seasonPassPromotionSalePrice", {
    get: function () {
      return Math.ceil(this.seasonPassPromotionPrice * (1 - this.seasonPassSingleDiscount / 100));
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonSettingVO;
}();
exports.XmlSeasonSettingVO = __s0local0;
