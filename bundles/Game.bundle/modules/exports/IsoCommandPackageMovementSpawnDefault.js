Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageMovementSpawnDefault(__s3param0, __s3param1, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0._spawnOnRandomPathNode = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._isoData = __s3param0;
    __s3local0._movementType = __s3param1;
    __s3local0._spawnOnRandomPathNode = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageMovementSpawnDefault, __s1param0);
  IsoCommandPackageMovementSpawnDefault.prototype.createCommandList = function () {
    var __s5local0 = this.createRandomMovement();
    if (!__s5local0) {
      return null;
    }
    var __s5local1 = [];
    __s5local1.push(new __dep_export_IsoCommandObjectAddModel.IsoCommandObjectAddModel(__s5local0.isoData, __s5local0), new __dep_export_IsoCommandObjectAddView.IsoCommandObjectAddView(__s5local0), new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(__s5local0));
    return __s5local1;
  };
  IsoCommandPackageMovementSpawnDefault.prototype.createRandomMovement = function () {
    var __s8local0;
    var __s8local1 = new __dep_export_IsoGeneratorMovements.IsoGeneratorMovements(this.isoData);
    if (!(__s8local0 = this.willSpawnAsOuterMovement() ? __s8local1.createOuterMovementVO(this.movementType) : __s8local1.createInnerMovementVO(this.movementType))) {
      return null;
    }
    if (this.spawnOnRandomPathNode && __dep_exact_81dacdf05bd32292.instanceOfClass(__s8local0.currentAction, "IsoMovementActionWalk")) {
      var __s8local2 = __s8local0.currentAction;
      __s8local2.setPathNodeProgress(__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, __s8local2.currentPath.length - 1));
    }
    __s8local1.addResourceItemToMovement(__s8local0);
    return __s8local0;
  };
  IsoCommandPackageMovementSpawnDefault.prototype.willSpawnAsOuterMovement = function () {
    switch (this.movementType) {
      case __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_WOOD_CUTTER:
      case __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER:
      case __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER:
        break;
      default:
        return false;
    }
    return !this.isoData.areaData.isSeasonCamp && !!this.isoData.objects.movements.workPlaces.hasFreeSlot(this.movementType) && __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, 100) <= __dep_export_IsoConst.IsoConst.MOVEMENTS_OUTER_PROBABILITY;
  };
  Object.defineProperty(IsoCommandPackageMovementSpawnDefault.prototype, "spawnOnRandomPathNode", {
    get: function () {
      return this._spawnOnRandomPathNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageMovementSpawnDefault.prototype, "movementType", {
    get: function () {
      return this._movementType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageMovementSpawnDefault.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageMovementSpawnDefault;
}(require("gge-module:export_AIsoCommandPackage").AIsoCommandPackage);
exports.IsoCommandPackageMovementSpawnDefault = __s0local0;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IsoGeneratorMovements = require("gge-module:export_IsoGeneratorMovements");
var __dep_export_IsoCommandObjectAddModel = require("gge-module:export_IsoCommandObjectAddModel");
var __dep_export_IsoCommandObjectAddView = require("gge-module:export_IsoCommandObjectAddView");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
