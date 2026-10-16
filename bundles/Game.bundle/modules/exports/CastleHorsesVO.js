Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleHorsesVO() {
    this._horses = [];
  }
  CastleHorsesVO.prototype.parseParamObject = function (__s5param0) {
    this._horses = [];
    var __s5local0 = __s5param0;
    if (__s5local0 && !(__s5local0.length <= 0)) {
      var __s5local1;
      var __s5local2;
      for (var __s5local3 = 0, __s5local4 = __s5local0; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined && (__s5local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local5, __dep_export_CastleWodData.CastleWodData.TYPE_HORSE)) && __dep_exact_81dacdf05bd32292.instanceOfClass(__s5local1, "HorseTravelboosterVO")) {
          if ((__s5local2 = __s5local1).isInstantSpyHorse) {
            this._horses.push(__s5local2.createNonPegasusDuplicate());
            this._horses.push(__s5local2);
          } else {
            this._horses.push(__s5local2);
          }
        }
      }
      this._horses.sort(__dep_export_ClientConstSort.ClientConstSort.sortVisualVOByWodId);
    }
  };
  Object.defineProperty(CastleHorsesVO.prototype, "horses", {
    get: function () {
      return this._horses;
    },
    enumerable: true,
    configurable: true
  });
  CastleHorsesVO.prototype.getHorseByWodID = function (__s15param0) {
    if (this._horses != null) {
      for (var __s15local0 = 0, __s15local1 = this._horses; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined && __s15local2.wodId == __s15param0) {
          return __s15local2;
        }
      }
    }
    return null;
  };
  return CastleHorsesVO;
}();
exports.CastleHorsesVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
