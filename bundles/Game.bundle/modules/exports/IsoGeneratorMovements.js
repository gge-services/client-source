Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function IsoGeneratorMovements(__s3param0) {
    this._isoData = __s3param0;
  }
  IsoGeneratorMovements.prototype.createOuterMovementVO = function (__s5param0) {
    this._movementType = __s5param0;
    var __s5local0 = __s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER || __s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER;
    var __s5local1 = this.getPossibleSpawnPoints(this.destWaypoints.spawnBuildings);
    if (__s5local1.length <= 0) {
      return null;
    }
    var __s5local2;
    var __s5local3 = this.getRandomPosFromList(__s5local1);
    var __s5local4 = this.isoData.objects.defences.gate;
    var __s5local5 = __s5local4.innerSpawnPoint;
    var __s5local6 = __s5local4.outerSpawnPoint;
    __s5local5 = this.addPosOfVOToPos(__s5local5, __s5local4);
    __s5local6 = this.addPosOfVOToPos(__s5local6, __s5local4);
    var __s5local7;
    var __s5local8;
    var __s5local9 = __dep_exact_f855840627e6e145.int(this.isoData.objects.movements.workPlaces.getIndexOfFreeSlot(__s5param0));
    if (__s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_WOOD_CUTTER) {
      __s5local8 = __s5local7 = (__s5local2 = this.isoData.objects.surroundings.getWoodField()).spawnPoints[__s5local9];
    } else if (__s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER || __s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER) {
      var __s5local10 = __dep_exact_f855840627e6e145.int(__s5local9 / 2);
      __s5local7 = (__s5local2 = __s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER ? this.isoData.objects.surroundings.getStoneField() : this.isoData.objects.surroundings.getFoodField()).getWorkPointsByIndex(__s5local10)[__dep_exact_f855840627e6e145.int(__s5local9 % 2)];
      __s5local8 = __s5local2.spawnPoints[__s5local10];
    }
    __s5local7 = this.addPosOfVOToPos(__s5local7, __s5local2);
    __s5local8 = this.addPosOfVOToPos(__s5local8, __s5local2);
    var __s5local11 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByType(__s5param0, this.isoData);
    var __s5local12 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(7, 15) * 1000;
    var __s5local13 = [];
    __s5local13.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s5local3, __s5local5, true, true));
    __s5local13.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s5local6, __s5local8, true, false));
    if (__s5local0) {
      __s5local13.push(new __dep_export_IsoMovementActionStand.IsoMovementActionStand(__s5local8, 1000, __s5param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER ? 1 : 0, false, true));
    }
    __s5local13.push(new __dep_export_IsoMovementActionWork.IsoMovementActionWork(__s5local7, __s5local12, __s5local0, __s5local0));
    __s5local13.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s5local8, __s5local6, __s5local0, true));
    __s5local13.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s5local5, __s5local3, true, true));
    this.isoData.objects.movements.workPlaces.markWorkPlace(__s5param0, __s5local9, true);
    __s5local11.startWithNewActionList(__s5local13, __s5local9);
    return __s5local11;
  };
  IsoGeneratorMovements.prototype.createInnerMovementVO = function (__s11param0) {
    this._movementType = __s11param0;
    if (!this.destWaypoints || !(this.destWaypoints.spawnBuildings.length > 0) || !(this.destWaypoints.targetBuildings.length > 0)) {
      return null;
    }
    var __s11local0 = this.getPossibleSpawnPoints(this.destWaypoints.spawnBuildings);
    if (__s11local0.length <= 0) {
      return null;
    }
    var __s11local1 = this.getRandomPosFromList(__s11local0);
    var __s11local2 = this.getPossibleSpawnPoints(this.destWaypoints.targetBuildings);
    this.removePosFromList(__s11local2, __s11local1);
    if (__s11local2.length <= 0) {
      return null;
    }
    var __s11local3 = this.getRandomPosFromList(__s11local2);
    var __s11local4 = [];
    if (__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(1, 100) <= __dep_export_IsoConst.IsoConst.MOVEMENTS_VISIT_PROBABILITY) {
      var __s11local5 = this.getPossibleVisitPoints(this.destWaypoints.visitBuildings);
      var __s11local6 = __dep_exact_f855840627e6e145.int(Math.min(__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(1, 2), __s11local5.length));
      this.removePosFromList(__s11local5, __s11local1);
      this.removePosFromList(__s11local5, __s11local3);
      for (var __s11local7 = 0; __s11local7 < __s11local6; ++__s11local7) {
        var __s11local8 = __s11local5[__dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, __s11local5.length - 1))];
        __s11local4.push(__s11local8);
        this.removePosFromList(__s11local5, __s11local8);
      }
    }
    var __s11local9 = [];
    if (__s11local4.length > 0) {
      var __s11local10 = __s11local1;
      for (__s11local7 = 0; __s11local7 < __s11local4.length; ++__s11local7) {
        var __s11local11 = __s11local4[__s11local7];
        __s11local9.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s11local10, __s11local11, __s11local7 == 0, false));
        var __s11local12 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, 1) == 1;
        __s11local9.push(new __dep_export_IsoMovementActionStand.IsoMovementActionStand(__s11local11, __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(750, 3000), __s11local12 ? 2 : 3));
        __s11local9.push(new __dep_export_IsoMovementActionStand.IsoMovementActionStand(__s11local11, __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(750, 3000), __s11local12 ? 3 : 2));
        __s11local10 = __s11local11;
      }
      __s11local9.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s11local10, __s11local3, false, true));
    } else {
      __s11local9.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s11local1, __s11local3, true, true));
    }
    var __s11local13 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByType(__s11param0, this.isoData);
    __s11local13.startWithNewActionList(__s11local9);
    return __s11local13;
  };
  IsoGeneratorMovements.prototype.createEggMovement = function () {
    var __s23local0 = __dep_export_IsoObjectEnum.IsoObjectEnum.getGroupObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS);
    this._movementType = __s23local0[__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, __s23local0.length - 2)];
    var __s23local1 = this.getPossibleSpawnPoints(this.destWaypoints.spawnBuildings);
    if (__s23local1.length <= 0) {
      return null;
    }
    var __s23local2 = this.getRandomPosFromList(__s23local1);
    var __s23local3 = this.isoData.objects.defences.gate;
    var __s23local4 = __s23local3.innerSpawnPoint;
    var __s23local5 = __s23local3.outerSpawnPoint;
    __s23local4 = this.addPosOfVOToPos(__s23local4, __s23local3);
    __s23local5 = this.addPosOfVOToPos(__s23local5, __s23local3);
    var __s23local6 = this.isoData.grid.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER);
    var __s23local7 = new __s0local0(__s23local6.x, __s23local6.y).add(new __s0local0(-17, -34));
    var __s23local8 = new this.movementType.dataClass();
    __s23local8.init(this.isoData);
    var __s23local9 = [];
    __s23local9.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s23local2, __s23local4, true, true));
    __s23local9.push(new __dep_export_IsoMovementActionWalk.IsoMovementActionWalk(__s23local5, __s23local7, true, true));
    __s23local8.startWithNewActionList(__s23local9);
    return __s23local8;
  };
  IsoGeneratorMovements.prototype.createShowUpMovement = function (__s26param0, __s26param1) {
    this._movementType = __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARHAT;
    var __s26local0 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByType(this.movementType, this.isoData);
    var __s26local1 = [];
    __s26local1.push(new __dep_export_IsoMovementActionStand.IsoMovementActionStand(__s26param0, 10000, __s26param1, true, true));
    __s26local0.startWithNewActionList(__s26local1);
    return __s26local0;
  };
  IsoGeneratorMovements.prototype.addResourceItemToMovement = function (__s28param0) {
    if (this.isoData.areaData.isMyArea && !this.isoData.areaData.isUnderConquerProcess && !__dep_export_CastleModel.CastleModel.resourcePoolData.ownerMovementVO) {
      var __s28local0 = __dep_export_CastleModel.CastleModel.resourcePoolData.resourceItem;
      if (__s28local0 && __dep_export_CastleModel.CastleModel.resourcePoolData.canMovementTypeCarryResourceType(this.movementType, __s28local0.itemType)) {
        __dep_export_CastleModel.CastleModel.resourcePoolData.registerNewMovementAsOwner(__s28param0);
      }
    }
  };
  IsoGeneratorMovements.prototype.removePosFromList = function (__s32param0, __s32param1) {
    var __s32local0 = -1;
    for (var __s32local1 = 0; __s32local1 < __s32param0.length; ++__s32local1) {
      var __s32local2 = __s32param0[__s32local1];
      if (__s32local2.x == __s32param1.x && __s32local2.y == __s32param1.y) {
        __s32local0 = __s32local1;
        break;
      }
    }
    if (__s32local0 >= 0) {
      __s32param0.splice(__s32local0, 1);
    }
  };
  IsoGeneratorMovements.prototype.getPossibleSpawnPoints = function (__s38param0) {
    var __s38local0 = [];
    if (__s38param0 != null) {
      for (var __s38local1 = 0, __s38local2 = __s38param0; __s38local1 < __s38local2.length; __s38local1++) {
        var __s38local3 = __s38local2[__s38local1];
        if (__s38local3 !== undefined) {
          for (var __s38local4 = 0, __s38local5 = __s38local3.spawnPoints; __s38local4 < __s38local5.length; __s38local4++) {
            var __s38local6 = __s38local5[__s38local4];
            if (__s38local6 !== undefined) {
              __s38local0.push(new __s0local0(__s38local3.x + __s38local6.x, __s38local3.y + __s38local6.y));
            }
          }
        }
      }
    }
    return __s38local0;
  };
  IsoGeneratorMovements.prototype.getPossibleVisitPoints = function (__s47param0) {
    var __s47local0 = [];
    if (__s47param0 != null) {
      for (var __s47local1 = 0, __s47local2 = __s47param0; __s47local1 < __s47local2.length; __s47local1++) {
        var __s47local3 = __s47local2[__s47local1];
        if (__s47local3 !== undefined && __s47local3.spawnPoints.length <= 0) {
          __s47local0.push(new __s0local0(__s47local3.x2, __s47local3.y2));
        }
      }
    }
    return __s47local0;
  };
  IsoGeneratorMovements.prototype.getRandomPosFromList = function (__s53param0) {
    return __s53param0[__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, __s53param0.length - 1)];
  };
  IsoGeneratorMovements.prototype.addPosOfVOToPos = function (__s55param0, __s55param1) {
    return new __s0local0(__s55param0.x + __s55param1.x, __s55param0.y + __s55param1.y);
  };
  Object.defineProperty(IsoGeneratorMovements.prototype, "destWaypoints", {
    get: function () {
      return this.isoData.objects.movements.getWaypointsByType(this.movementType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorMovements.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorMovements.prototype, "movementType", {
    get: function () {
      return this._movementType;
    },
    enumerable: true,
    configurable: true
  });
  return IsoGeneratorMovements;
}();
exports.IsoGeneratorMovements = __s0local1;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoMovementActionStand = require("gge-module:export_IsoMovementActionStand");
var __dep_export_IsoMovementActionWalk = require("gge-module:export_IsoMovementActionWalk");
var __dep_export_IsoMovementActionWork = require("gge-module:export_IsoMovementActionWork");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
