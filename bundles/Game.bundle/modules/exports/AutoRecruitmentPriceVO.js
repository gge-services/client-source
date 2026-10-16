Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AutoRecruitmentPriceVO() {
    this._id = 0;
    this._loop = 0;
  }
  AutoRecruitmentPriceVO.prototype.fillByXmlNode = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("autoRecruitmentPriceID", __s5param0, "-1", true));
    this._loop = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("loop", __s5param0, "-1", true));
    this._priceType = __dep_export_AutoRecruitmentPriceEnum.AutoRecruitmentPriceEnum.getTypeByName(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("type", __s5param0, "", false));
    this._costs = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("costC2", __s5param0, "0", false)));
  };
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "loop", {
    get: function () {
      return this._loop;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "priceType", {
    get: function () {
      return this._priceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPriceVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentPriceVO;
}();
exports.AutoRecruitmentPriceVO = __s0local0;
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_AutoRecruitmentPriceEnum = require("gge-module:export_AutoRecruitmentPriceEnum");
