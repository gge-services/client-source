Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastlePermanentCastleData() {
    var __s3local0 = this;
    __s3local0._castles = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePermanentCastleData, __s1param0);
  CastlePermanentCastleData.prototype.parseGPC = function (__s5param0) {
    if (__s5param0) {
      var __s5local0;
      var __s5local1;
      for (var __s5local2 = __s5param0.A, __s5local3 = 0, __s5local4 = 0, __s5local5 = 0; __s5local5 < __s5local2.length; ++__s5local5) {
        __s5local1 = __s5local2[__s5local5];
        __s5local3 = __dep_exact_f855840627e6e145.int(__s5local1.AID);
        __s5local4 = __dep_exact_f855840627e6e145.int(__s5local1.KID);
        __s5local0 = this.getDicKey(__s5local3, __s5local4);
        if (!this._castles.get(__s5local0)) {
          this._castles.set(__s5local0, new __dep_export_CastlePermanentCastleVO.CastlePermanentCastleVO());
        }
        this._castles.get(__s5local0).parseParamObject(__s5local1);
      }
    }
  };
  CastlePermanentCastleData.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this._castles != null) {
      for (var __s11local0 = 0, __s11local1 = Array.from(this._castles.values()); __s11local0 < __s11local1.length; __s11local0++) {
        __s11local1[__s11local0].destroy();
      }
    }
    this._castles = new Map();
  };
  CastlePermanentCastleData.prototype.getUnitBaseLocation = function (__s16param0) {
    if (!__dep_export_CastleModel.CastleModel.userData.castleList) {
      return null;
    }
    var __s16local0;
    switch (__s16param0.unitBaseLocation) {
      case __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.HOME_CASTLE:
        __s16local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
        break;
      case __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.KINGDOM_CASTLE:
        __s16local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s16param0.kingdomID);
        break;
      case __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.CONTROLLER:
        __s16local0 = __s16param0.isUnderConquerControl ? __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s16param0.kingdomID) : __s16param0;
    }
    return this._castles.get(this.getDicKey(__s16local0.objectId, __s16local0.kingdomID));
  };
  CastlePermanentCastleData.prototype.getCurrentCastle = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo : null;
    if (__s20local0) {
      return this._castles.get(this.getDicKey(__s20local0.objectId, __s20local0.kingdomID));
    } else {
      return null;
    }
  };
  CastlePermanentCastleData.prototype.getCastleByWorldAreaId = function (__s24param0, __s24param1) {
    return this._castles.get(this.getDicKey(__s24param0, __s24param1));
  };
  CastlePermanentCastleData.prototype.getCastleByAreaInfo = function (__s26param0) {
    return this._castles.get(this.getDicKey(__s26param0.objectId, __s26param0.kingdomID));
  };
  CastlePermanentCastleData.prototype.getDicKey = function (__s28param0, __s28param1) {
    return __s28param1 + "-" + __s28param0;
  };
  return CastlePermanentCastleData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastlePermanentCastleData = __s0local0;
var __dep_export_CastlePermanentCastleVO = require("gge-module:export_CastlePermanentCastleVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
