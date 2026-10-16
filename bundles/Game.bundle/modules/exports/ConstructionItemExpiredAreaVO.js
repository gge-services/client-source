Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ConstructionItemExpiredVO = require("gge-module:export_ConstructionItemExpiredVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ConstructionItemExpiredAreaVO() {
    this._expiredCIs = [];
  }
  ConstructionItemExpiredAreaVO.prototype.parseParams = function (__s5param0) {
    this._areaID = __s5param0.AID;
    this._kingdomID = __s5param0.KID;
    this._castleWMO = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(this._areaID, this._kingdomID);
    this._expiredCIs = [];
    for (var __s5local0 = 0; __s5local0 < __s5param0.CIL.length; __s5local0++) {
      var __s5local1 = new __dep_export_ConstructionItemExpiredVO.ConstructionItemExpiredVO();
      __s5local1.parseParams(__s5param0.CIL[__s5local0]);
      this._expiredCIs.push(__s5local1);
    }
  };
  ConstructionItemExpiredAreaVO.prototype.hasBuildingExpired = function (__s9param0) {
    for (var __s9local0 = 0; __s9local0 < this._expiredCIs.length; __s9local0++) {
      if (this._expiredCIs[__s9local0].objectID == __s9param0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(ConstructionItemExpiredAreaVO.prototype, "castleWMO", {
    get: function () {
      return this._castleWMO;
    },
    set: function (__s16param0) {
      this._castleWMO = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemExpiredAreaVO.prototype, "expiredCIs", {
    get: function () {
      return this._expiredCIs;
    },
    set: function (__s20param0) {
      this._expiredCIs = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemExpiredAreaVO;
}();
exports.ConstructionItemExpiredAreaVO = __s0local0;
