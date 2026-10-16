Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function FactionVillageInfoVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._towerID = 0;
    __s3local0._canBeAttacked = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._towerID = __s3param0;
    __s3local0.absAreaPos = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionVillageInfoVO, __s1param0);
  Object.defineProperty(FactionVillageInfoVO.prototype, "canBeAttacked", {
    get: function () {
      return this._canBeAttacked;
    },
    set: function (__s7param0) {
      this._canBeAttacked = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageInfoVO.prototype, "towerID", {
    get: function () {
      return this._towerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageInfoVO.prototype, "realPosition", {
    set: function (__s11param0) {
      this._realPosition = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  return FactionVillageInfoVO;
}(require("gge-module:export_MinWorldMapCastleInfoVO").MinWorldMapCastleInfoVO);
exports.FactionVillageInfoVO = __s0local0;
