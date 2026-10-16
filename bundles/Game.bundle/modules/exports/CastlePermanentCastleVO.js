Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastlePermanentCastleVO() {
    this._areaId = -1;
    this._kingdomId = -1;
    this._horsesVO = new __dep_export_CastleHorsesVO.CastleHorsesVO();
    this._unitsVO = new __dep_export_CastleUnitsVO.CastleUnitsVO();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  }
  CastlePermanentCastleVO.prototype.destroy = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  CastlePermanentCastleVO.prototype.parseParamObject = function (__s7param0) {
    this._areaId = __dep_exact_f855840627e6e145.int(__s7param0.AID);
    this._kingdomId = __dep_exact_f855840627e6e145.int(__s7param0.KID);
    this._unitsVO.parseParamObject(__s7param0.U);
    this._horsesVO.parseParamObject(__s7param0.UH);
  };
  CastlePermanentCastleVO.prototype.onRefreshSpecialEvents = function (__s9param0) {
    this._unitsVO.onSpecialEventUpdated();
  };
  CastlePermanentCastleVO.prototype.onRemoveSpecialEvent = function (__s11param0) {
    this._unitsVO.onSpecialEventUpdated();
  };
  Object.defineProperty(CastlePermanentCastleVO.prototype, "horsesVO", {
    get: function () {
      return this._horsesVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePermanentCastleVO.prototype, "unitsVO", {
    get: function () {
      return this._unitsVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePermanentCastleVO.prototype, "areaId", {
    get: function () {
      return this._areaId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePermanentCastleVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePermanentCastleVO;
}();
exports.CastlePermanentCastleVO = __s0local0;
var __dep_export_CastleHorsesVO = require("gge-module:export_CastleHorsesVO");
var __dep_export_CastleUnitsVO = require("gge-module:export_CastleUnitsVO");
