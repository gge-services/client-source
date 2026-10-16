Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __s0local0 = function (__s1param0) {
  function ABGTowerConnectionVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._status = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGTowerConnectionVO, __s1param0);
  ABGTowerConnectionVO.prototype.fillFromConnectionValues = function (__s5param0) {
    this.absAreaPos.x = __s5param0[0];
    this.absAreaPos.y = __s5param0[1];
    this._playerName = __s5param0[2];
    this._status = __dep_exact_f855840627e6e145.int(__s5param0[3]);
    this.useSpecialConnectionLineColor = true;
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      this.specialConnectionLineColor = this.status == 1 ? __dep_export_ClientConstColor.ClientConstColor.COLORBLIND_RED : __dep_export_ClientConstColor.ClientConstColor.COLORBLIND_GREEN;
    } else {
      this.specialConnectionLineColor = this.status == 1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED : __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN;
    }
    this.kingdomId = __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID;
  };
  Object.defineProperty(ABGTowerConnectionVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGTowerConnectionVO.prototype, "status", {
    get: function () {
      return this._status;
    },
    enumerable: true,
    configurable: true
  });
  return ABGTowerConnectionVO;
}(require("gge-module:export_MinWorldMapCastleInfoVO").MinWorldMapCastleInfoVO);
exports.ABGTowerConnectionVO = __s0local0;
