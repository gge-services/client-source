Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBaseTreasureMapRenderer = require("gge-module:export_CastleBaseTreasureMapRenderer");
var __dep_export_CastleTreasureMapRouteManager = require("gge-module:export_CastleTreasureMapRouteManager");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapRenderer() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapRenderer, __s1param0);
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "movementCreator", {
    get: function () {
      return new __dep_export_CastleTreasureMovementCreator.CastleTreasureMovementCreator();
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "movementCreator").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "mapItemCreator", {
    get: function () {
      return new __dep_export_CastleTreasureMapItemCreator.CastleTreasureMapItemCreator();
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "mapItemCreator").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "routeManager", {
    get: function () {
      return new __dep_export_CastleTreasureMapRouteManager.CastleTreasureMapRouteManager();
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "routeManager").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "treasureMapVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer.prototype, "treasureMapVO").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapRenderer.prototype, "treasureUpdateComponents", {
    get: function () {
      return [new __dep_export_CastleTreasureMapHintComponent.CastleTreasureMapHintComponent()];
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureMapRenderer;
}(__dep_export_CastleBaseTreasureMapRenderer.CastleBaseTreasureMapRenderer);
exports.CastleTreasureMapRenderer = __s0local0;
var __dep_export_CastleTreasureMapHintComponent = require("gge-module:export_CastleTreasureMapHintComponent");
var __dep_export_CastleTreasureMapItemCreator = require("gge-module:export_CastleTreasureMapItemCreator");
var __dep_export_CastleTreasureMovementCreator = require("gge-module:export_CastleTreasureMovementCreator");
