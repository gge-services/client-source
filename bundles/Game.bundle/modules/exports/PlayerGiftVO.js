Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PlayerGiftVO() {
    this._packageID = 0;
    this._amount = 0;
  }
  PlayerGiftVO.prototype.parseFromArray = function (__s5param0) {
    this._packageID = __dep_exact_f855840627e6e145.int(__s5param0[0]);
    this._amount = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    this._eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._packageID);
  };
  Object.defineProperty(PlayerGiftVO.prototype, "eventPackageVO", {
    get: function () {
      return this._eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftVO.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftVO.prototype, "packageID", {
    get: function () {
      return this._packageID;
    },
    enumerable: true,
    configurable: true
  });
  return PlayerGiftVO;
}();
exports.PlayerGiftVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
