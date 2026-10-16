Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function AllianceFundsDonatableVO() {}
  AllianceFundsDonatableVO.prototype.fillFromXML = function (__s5param0) {
    this._id = parseInt(__s5param0.allianceFundsDonatableID || "");
    this._resourceID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("resourceID", __s5param0, "-1"));
    this._currencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyID", __s5param0, "-1"));
    this._directlyByPlayer = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("directlyByPlayer", __s5param0, false);
  };
  Object.defineProperty(AllianceFundsDonatableVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFundsDonatableVO.prototype, "resourceID", {
    get: function () {
      return this._resourceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFundsDonatableVO.prototype, "currencyID", {
    get: function () {
      return this._currencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFundsDonatableVO.prototype, "directlyByPlayer", {
    get: function () {
      return this._directlyByPlayer;
    },
    enumerable: true,
    configurable: true
  });
  AllianceFundsDonatableVO.prototype.createCollectableItemVO = function () {
    if (this.resourceID > 0) {
      var __s15local0 = __dep_export_CastleModel.CastleModel.currencyData.getResourceXmlVO(this.resourceID);
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__s15local0.resourceEnum);
    }
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.currencyID);
  };
  return AllianceFundsDonatableVO;
}();
exports.AllianceFundsDonatableVO = __s0local0;
