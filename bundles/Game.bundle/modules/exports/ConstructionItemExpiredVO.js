Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ConstructionItemExpiredVO() {}
  ConstructionItemExpiredVO.prototype.parseParams = function (__s5param0) {
    this._constructionItemVO = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(__s5param0.CID).clone();
    this._buildingVO = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s5param0.B);
    this._objectID = __s5param0.OID;
    this._constructionItemVO.setRemainingTime(-1);
  };
  Object.defineProperty(ConstructionItemExpiredVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemExpiredVO.prototype, "constructionItemVO", {
    get: function () {
      return this._constructionItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemExpiredVO.prototype, "objectID", {
    get: function () {
      return this._objectID;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemExpiredVO;
}();
exports.ConstructionItemExpiredVO = __s0local0;
