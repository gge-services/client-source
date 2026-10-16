Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DecoStorageTempDecoVO() {
    this._areaId = -1;
    this._kingdomId = -1;
    this._buildings = [];
  }
  DecoStorageTempDecoVO.prototype.parseServerObject = function (__s5param0) {
    this._areaId = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this._kingdomId = __dep_exact_f855840627e6e145.int(__s5param0.KID);
    this._buildings = [];
    for (var __s5local0 = 0, __s5local1 = __s5param0.A; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = __dep_exact_f855840627e6e145.int(__s5local2.WID);
        var __s5local4 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local3, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING), "ADecoBuildingVO");
        if (__s5local4) {
          __s5local4.parseServerInfoShort(__s5local2);
          __s5local4.updateData();
          this._buildings.push(__s5local4);
        } else {
          __dep_exact_9e901e8e2483a22f.error("DecoStorageTempDecoVO.parseServerObject(): Deco with wodId '" + __s5local3 + "' does not exist in xml.");
        }
      }
    }
  };
  Object.defineProperty(DecoStorageTempDecoVO.prototype, "areaId", {
    get: function () {
      return this._areaId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageTempDecoVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageTempDecoVO.prototype, "buildings", {
    get: function () {
      return this._buildings;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageTempDecoVO;
}();
exports.DecoStorageTempDecoVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
