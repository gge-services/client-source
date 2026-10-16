Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function IsoUpdaterMovement(__s3param0) {
    var __s3local0 = this;
    __s3local0._lastMovementSpawn = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._isoData = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoUpdaterMovement, __s1param0);
  IsoUpdaterMovement.prototype.update = function (__s5param0) {
    if (__s5param0 >= this._lastMovementSpawn + __dep_export_IsoConst.IsoConst.MOVEMENTS_SPAWN_INTERVAL && __dep_export_IsoConst.IsoConst.MOVEMENTS_ACTIVATED) {
      this.spawnRandomMovement();
      this._lastMovementSpawn = __s5param0;
    }
  };
  IsoUpdaterMovement.prototype.spawnMovement = function (__s8param0, __s8param1 = false) {
    if (this.canGenerallySpawnMovement) {
      __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageMovementSpawnDefault.IsoCommandPackageMovementSpawnDefault(this.isoData, __s8param0, __s8param1));
    }
  };
  IsoUpdaterMovement.prototype.spawnRandomMovement = function (__s11param0) {
    var __s11local0;
    if (__s11param0 === undefined) {
      __s11param0 = false;
    }
    if (this.canGenerallySpawnMovement) {
      if (__dep_export_CastleModel.CastleModel.resourcePoolData.resourceItem && !__dep_export_CastleModel.CastleModel.resourcePoolData.ownerMovementVO) {
        __s11local0 = __dep_export_CastleModel.CastleModel.resourcePoolData.getRelevantMovementTypeByResourceType(__dep_export_CastleModel.CastleModel.resourcePoolData.resourceItem.itemType);
      } else if (__dep_export_IsoHelper.IsoHelper.view.areAnimationsActive) {
        __s11local0 = this.getRandomMovementType();
      }
      if (__s11local0) {
        this.spawnMovement(__s11local0, __s11param0);
      }
    }
  };
  IsoUpdaterMovement.prototype.spawnMaxMovements = function (__s18param0 = false) {
    if (this.canGenerallySpawnMovement && __dep_export_IsoHelper.IsoHelper.view.areAnimationsActive) {
      for (var __s18local0 = __dep_exact_f855840627e6e145.int(this.isoData.objects.movements.list.length), __s18local1 = this.movementData.getPossibleMaxMovementAmount(); __s18local0 < __s18local1; ++__s18local0) {
        var __s18local2 = this.getRandomMovementType();
        if (!__s18local2) {
          return;
        }
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageMovementSpawnDefault.IsoCommandPackageMovementSpawnDefault(this.isoData, __s18local2, __s18param0));
      }
      __dep_export_Iso.Iso.controller.processor.executeQueue();
    }
  };
  IsoUpdaterMovement.prototype.despawnAllMovements = function () {
    this.isoData.updater.initObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS);
  };
  IsoUpdaterMovement.prototype.getRandomMovementType = function () {
    var __s26local0 = Math.random();
    for (var __s26local1 = 0, __s26local2 = Array.from(this.movementData.spawnProbability.keys()); __s26local1 < __s26local2.length; __s26local1++) {
      var __s26local3 = __s26local2[__s26local1];
      if (__s26local3 !== undefined) {
        if (this.movementData.spawnProbability.get(__s26local3).isInInterval(__s26local0)) {
          return __s26local3;
        }
      }
    }
    return null;
  };
  Object.defineProperty(IsoUpdaterMovement.prototype, "canGenerallySpawnMovement", {
    get: function () {
      return __dep_export_IsoConst.IsoConst.MOVEMENTS_ACTIVATED && this.isoData == __dep_export_Iso.Iso.data && __dep_export_Iso.Iso.renderer.isReady && this.isoData.areaData.areaInfo.isOwnMapobject && this.currentMovementAmount < this.movementData.getPossibleMaxMovementAmount() && __dep_export_Iso.Iso.renderer.strategies.currentStrategy.isInNormalMode && !__dep_export_Iso.Iso.renderer.mouse.isWorldDragging;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterMovement.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterMovement.prototype, "movementData", {
    get: function () {
      return this.isoData.objects.movements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterMovement.prototype, "currentMovementAmount", {
    get: function () {
      return this.movementData.list.length;
    },
    enumerable: true,
    configurable: true
  });
  return IsoUpdaterMovement;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.IsoUpdaterMovement = __s0local0;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoCommandPackageMovementSpawnDefault = require("gge-module:export_IsoCommandPackageMovementSpawnDefault");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
