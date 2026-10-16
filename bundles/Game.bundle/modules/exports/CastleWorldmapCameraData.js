Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleWorldmapCameraData() {
    var __s3local0 = this;
    __s3local0._savedMapZoom = NaN;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_SWITCHED, __s3local0.bindFunction(__s3local0.onKingdomSwitched));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapCameraData, __s1param0);
  CastleWorldmapCameraData.prototype.reset = function () {
    this._currentSelectedCastleInActionPanel = null;
    this._lastVisitedCastlePosition = null;
    this._savedMapPosition = null;
    this._savedMapZoom = 0;
  };
  CastleWorldmapCameraData.prototype.onKingdomSwitched = function (__s7param0) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    if (__dep_export_CastleModel.CastleModel.userData.castleList) {
      var __s7local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s7local0);
      if (!this.currentSelectedCastleInActionPanel || this.currentSelectedCastleInActionPanel.kingdomID != __s7local0) {
        this.currentSelectedCastleInActionPanel = __s7local1;
      }
      if (__s7local1) {
        this.savedMapPosition = __s7local1.absAreaPos;
      }
    }
  };
  CastleWorldmapCameraData.prototype.getInitialWorldMapPos = function () {
    var __s12local0;
    if (this._savedMapPosition) {
      __s12local0 = this._savedMapPosition;
      this._savedMapPosition = null;
    } else {
      __s12local0 = this._lastVisitedCastlePosition && this._lastVisitedCastlePosition.x > 0 && this._lastVisitedCastlePosition.y > 0 ? this._lastVisitedCastlePosition : __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID).absAreaPos;
    }
    return __s12local0;
  };
  CastleWorldmapCameraData.prototype.saveCameraPosition = function (__s16param0, __s16param1 = -1) {
    this._savedMapPosition = __s16param0;
    if (__s16param1 != -1) {
      this._savedMapZoom = __s16param1;
    }
  };
  Object.defineProperty(CastleWorldmapCameraData.prototype, "currentSelectedCastleInActionPanel", {
    get: function () {
      return this._currentSelectedCastleInActionPanel;
    },
    set: function (__s21param0) {
      if (__s21param0 != this._currentSelectedCastleInActionPanel) {
        this._currentSelectedCastleInActionPanel = __s21param0;
        this.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCameraData.prototype, "lastVisitedCastlePosition", {
    set: function (__s24param0) {
      this._lastVisitedCastlePosition = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCameraData.prototype, "savedMapPosition", {
    set: function (__s26param0) {
      this._savedMapPosition = __s26param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCameraData.prototype, "savedMapZoom", {
    get: function () {
      if (this._savedMapZoom) {
        return this._savedMapZoom;
      } else {
        return 1;
      }
    },
    set: function (__s32param0) {
      this._savedMapZoom = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleWorldmapCameraData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleWorldmapCameraData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
