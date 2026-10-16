Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTreasureHuntEvent = require("gge-module:export_CastleTreasureHuntEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTreasureHuntData() {
    var __s3local0 = this;
    __s3local0._currentMapID = CastleTreasureHuntData.NO_MORE_MAPS;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureHuntData, __s1param0);
  CastleTreasureHuntData.prototype.parse_THI = function (__s5param0) {
    if (__s5param0) {
      this._currentMapID = __dep_exact_f855840627e6e145.int(__s5param0.MID);
      this.dispatchEvent(new __dep_export_CastleTreasureHuntEvent.CastleTreasureHuntEvent(__dep_export_CastleTreasureHuntEvent.CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED));
    }
  };
  Object.defineProperty(CastleTreasureHuntData.prototype, "treasureHuntMapVO", {
    get: function () {
      if (this.hasMapsAvailable) {
        return __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this._currentMapID);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntData.prototype, "hasMapsAvailable", {
    get: function () {
      return this._currentMapID != CastleTreasureHuntData.NO_MORE_MAPS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntData.prototype, "currentMapID", {
    get: function () {
      return this._currentMapID;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureHuntData.NO_MORE_MAPS = -1;
  return CastleTreasureHuntData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleTreasureHuntData = __s0local0;
