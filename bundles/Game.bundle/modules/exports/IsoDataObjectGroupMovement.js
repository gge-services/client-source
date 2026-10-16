Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoMovementSpawnProbability = require("gge-module:export_IsoMovementSpawnProbability");
var __dep_export_IsoMovementWaypointVO = require("gge-module:export_IsoMovementWaypointVO");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupMovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupMovement, __s1param0);
  IsoDataObjectGroupMovement.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this._workPlaces = new __dep_export_IsoMovementWorkPlaces.IsoMovementWorkPlaces(__s5param0);
  };
  IsoDataObjectGroupMovement.prototype.destroy = function () {
    this._waypoints = null;
    this._spawnProbability = null;
    this.workPlaces.destroy();
    __s1param0.prototype.destroy.call(this);
  };
  IsoDataObjectGroupMovement.prototype.initObjects = function () {
    this.resetList();
    this.updateInfos();
  };
  IsoDataObjectGroupMovement.prototype.updateInfos = function () {
    this.initWaypoints();
    this.initSpawnProbability();
    this.workPlaces.reinit();
  };
  IsoDataObjectGroupMovement.prototype.initWaypoints = function () {
    var __s13local0;
    this._waypoints = new Map();
    for (var __s13local1 = __dep_export_IsoObjectEnum.IsoObjectEnum.getGroupObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS), __s13local2 = 0; __s13local2 < __s13local1.length; __s13local2++) {
      __s13local0 = __s13local1[__s13local2];
      var __s13local3 = __dep_export_IsoHelper.IsoHelper.data.getMovementWaypointClasses(__s13local0);
      var __s13local4 = this.isoData.objects.provider;
      this._waypoints.set(__s13local0, new __dep_export_IsoMovementWaypointVO.IsoMovementWaypointVO(__s13local4.getObjectsByClasses(__s13local3.spawnBuildings), __s13local4.getObjectsByClasses(__s13local3.targetBuildings), __s13local4.getObjectsByClasses(__s13local3.visitBuildings)));
    }
  };
  IsoDataObjectGroupMovement.prototype.initSpawnProbability = function () {
    this._spawnProbability = new Map();
    if (this.waypoints != null) {
      for (var __s17local0 = 0, __s17local1 = Array.from(this.waypoints.values()); __s17local0 < __s17local1.length; __s17local0++) {
        var __s17local2 = __s17local1[__s17local0];
        __dep_exact_f855840627e6e145.int(__s17local2.spawnBuildings.length);
      }
    }
    for (var __s17local3 = __dep_export_IsoObjectEnum.IsoObjectEnum.getGroupObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS), __s17local4 = 0; __s17local4 < __s17local3.length; ++__s17local4) {
      this.spawnProbability.set(__s17local3[__s17local4], new __dep_export_IsoMovementSpawnProbability.IsoMovementSpawnProbability(1 / __s17local3.length * (__s17local4 + 0), 1 / __s17local3.length * (__s17local4 + 1)));
    }
  };
  IsoDataObjectGroupMovement.prototype.getWaypointsByType = function (__s24param0) {
    return this.waypoints.get(__s24param0);
  };
  IsoDataObjectGroupMovement.prototype.getPossibleMaxMovementAmount = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(__dep_export_IsoConst.IsoConst.MOVEMENTS_MAX_AMOUNT / __dep_export_IsoConst.IsoConst.MOVEMENTS_MAX_AMOUNT_ON_BUILDING_COUNT * this.isoData.objects.innerBuildings.list.length, __dep_export_IsoConst.IsoConst.MOVEMENTS_MAX_AMOUNT));
  };
  Object.defineProperty(IsoDataObjectGroupMovement.prototype, "waypoints", {
    get: function () {
      return this._waypoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupMovement.prototype, "spawnProbability", {
    get: function () {
      return this._spawnProbability;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupMovement.prototype, "workPlaces", {
    get: function () {
      return this._workPlaces;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupMovement;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupMovement = __s0local0;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoMovementWorkPlaces = require("gge-module:export_IsoMovementWorkPlaces");
