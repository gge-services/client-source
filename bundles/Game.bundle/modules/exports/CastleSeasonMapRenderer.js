Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBaseTreasureMapRenderer = require("gge-module:export_CastleBaseTreasureMapRenderer");
var __dep_export_CastleSeasonAppearanceItemComponent = require("gge-module:export_CastleSeasonAppearanceItemComponent");
var __dep_export_SeaQueenMapRouteManager = require("gge-module:export_SeaQueenMapRouteManager");
var __s0local0 = function (__s1param0) {
  function CastleSeasonMapRenderer() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonMapRenderer, __s1param0);
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "mapItemCreator", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD)) {
        return new __dep_export_CastleUnderworldSeasonMapItemCreator.CastleUnderworldSeasonMapItemCreator();
      } else if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN)) {
        return new __dep_export_CastleSeaQueenSeasonMapItemCreator.CastleSeaQueenSeasonMapItemCreator();
      } else {
        return new __dep_export_CastleSeasonMapItemCreator.CastleSeasonMapItemCreator();
      }
    },
    set: function (__s10param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "mapItemCreator").set.call(this, __s10param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "movementCreator", {
    get: function () {
      return new __dep_export_CastleSeasonMovementCreator.CastleSeasonMovementCreator();
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "movementCreator").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "treasureMapVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
        return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      } else {
        return null;
      }
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "treasureMapVO").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "routeManager", {
    get: function () {
      return new __dep_export_SeaQueenMapRouteManager.SeaQueenMapRouteManager();
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "routeManager").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapRenderer.prototype, "treasureUpdateComponents", {
    get: function () {
      return [new __dep_export_CastleSeasonAppearanceItemComponent.CastleSeasonAppearanceItemComponent()];
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonMapRenderer.prototype.setMapItemsActivity = function () {
    if (this._mapItems != null) {
      for (var __s28local0 = 0, __s28local1 = this._mapItems; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined) {
          var __s28local3 = true;
          if (this._mapMovements != null) {
            for (var __s28local4 = 0, __s28local5 = this._mapMovements; __s28local4 < __s28local5.length; __s28local4++) {
              var __s28local6 = __s28local5[__s28local4];
              if (__s28local6 !== undefined && __s28local6.target == __s28local2.tMapNodeVO.pos && __s28local6.movementVO) {
                __s28local3 = false;
              }
            }
          }
          __s28local2.isActive = __s28local3;
        }
      }
    }
  };
  return CastleSeasonMapRenderer;
}(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer);
exports.CastleSeasonMapRenderer = __s0local0;
var __dep_export_CastleSeaQueenSeasonMapItemCreator = require("gge-module:export_CastleSeaQueenSeasonMapItemCreator");
var __dep_export_CastleSeasonMapItemCreator = require("gge-module:export_CastleSeasonMapItemCreator");
var __dep_export_CastleSeasonMovementCreator = require("gge-module:export_CastleSeasonMovementCreator");
var __dep_export_CastleUnderworldSeasonMapItemCreator = require("gge-module:export_CastleUnderworldSeasonMapItemCreator");
