Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ConstructionItemDisassemblingTombolaVO() {}
  ConstructionItemDisassemblingTombolaVO.prototype.parseXML = function (__s5param0 = null) {
    this._tombolaID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tombolaID", __s5param0, "0"));
    this._shares = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shares", __s5param0, "0"));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "0"));
  };
  Object.defineProperty(ConstructionItemDisassemblingTombolaVO.prototype, "tombolaID", {
    get: function () {
      return this._tombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemDisassemblingTombolaVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemDisassemblingTombolaVO.prototype, "rewards", {
    get: function () {
      this._rewards ||= __dep_export_CastleModel.CastleModel.rewardData.getListById(this._rewardID);
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemDisassemblingTombolaVO;
}();
exports.ConstructionItemDisassemblingTombolaVO = __s0local0;
