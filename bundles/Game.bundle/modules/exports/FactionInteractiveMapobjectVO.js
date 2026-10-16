Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function FactionInteractiveMapobjectVO() {
    var __s3local0 = this;
    __s3local0._isDestroyed = false;
    __s3local0._specialCampID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionInteractiveMapobjectVO, __s1param0);
  FactionInteractiveMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s5param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s5param0);
    if (__s5param0.SPC) {
      this._specialCampID = __dep_exact_f855840627e6e145.int(__s5param0.SPC);
    }
  };
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "hasNoCampsLeft", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "isDestroyed", {
    get: function () {
      return this._isDestroyed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "isMyFaction", {
    get: function () {
      var __s12local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      return !!__s12local0 && this.ownerInfo.factionID == __s12local0.ownFaction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "specialCampID", {
    get: function () {
      return this._specialCampID;
    },
    enumerable: true,
    configurable: true
  });
  return FactionInteractiveMapobjectVO;
}(require("gge-module:export_ContainerBuilderMapobjectVO").ContainerBuilderMapobjectVO);
exports.FactionInteractiveMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
