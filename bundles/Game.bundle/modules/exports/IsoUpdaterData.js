Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_GFXEvent = require("gge-module:export_GFXEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoUpdaterData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isoData = __s3param0;
    __s3local0._movementUpdater = new __dep_export_IsoUpdaterMovement.IsoUpdaterMovement(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoUpdaterData, __s1param0);
  IsoUpdaterData.prototype.init = function () {
    this.removeEventListener();
    this.addEventListener();
  };
  IsoUpdaterData.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeEventListener();
  };
  IsoUpdaterData.prototype.addEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
    __dep_export_CastleModel.CastleModel.gfxData.addEventListener(__dep_export_GFXEvent.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
  };
  IsoUpdaterData.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
    __dep_export_CastleModel.CastleModel.gfxData.removeEventListener(__dep_export_GFXEvent.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
  };
  IsoUpdaterData.prototype.updateMultipleObjectInfos = function (__s13param0) {
    if (__s13param0) {
      if (__s13param0 != null) {
        for (var __s13local0 = 0, __s13local1 = __s13param0; __s13local0 < __s13local1.length; __s13local0++) {
          var __s13local2 = __s13local1[__s13local0];
          if (__s13local2 !== undefined) {
            __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectUpdateInfo.IsoCommandPackageObjectUpdateInfo(this.isoData, __s13local2));
          }
        }
      }
      __dep_export_Iso.Iso.controller.processor.executeQueue();
    }
  };
  IsoUpdaterData.prototype.updateObjectInfo = function (__s20param0) {
    if (__s20param0) {
      var __s20local0 = new __dep_export_IsoCommandPackageObjectUpdateInfo.IsoCommandPackageObjectUpdateInfo(this.isoData, __s20param0);
      __dep_export_Iso.Iso.controller.processor.addPackageToQueue(__s20local0);
      var __s20local1 = !!__s20local0.vo && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s20local0.vo, "CastleGroundVO");
      if (__s20local1) {
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.GROUNDS));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EXPANSIONS));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.SURROUNDINGS));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EVENT_BUILDINGS));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.FIXED_POSITIONS));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.JUDGEMENTS));
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.TREASURE_CHESTS));
      }
      __dep_export_Iso.Iso.controller.processor.executeQueue();
      if (__s20local1 && __dep_export_Iso.Iso.renderer) {
        __dep_export_Iso.Iso.renderer.camera.onExpansion();
      }
    }
  };
  IsoUpdaterData.prototype.removeObjectByObjectId = function (__s25param0) {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectRemoveById.IsoCommandPackageObjectRemoveById(this.isoData, __s25param0));
  };
  IsoUpdaterData.prototype.removeObjectByVO = function (__s27param0) {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectRemoveByVO.IsoCommandPackageObjectRemoveByVO(__s27param0));
  };
  IsoUpdaterData.prototype.update = function (__s29param0) {
    for (var __s29local0 = 0, __s29local1 = this.isoData.objects.getCompleteObjectsList(); __s29local0 < __s29local1.length; __s29local0++) {
      __s29local1[__s29local0].update(__s29param0);
    }
  };
  IsoUpdaterData.prototype.updateEventBuildings = function () {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EVENT_BUILDINGS));
  };
  IsoUpdaterData.prototype.updateSurroundings = function () {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.SURROUNDINGS));
  };
  IsoUpdaterData.prototype.updateSlumBuildings = function () {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageUpdateSlums.IsoCommandPackageUpdateSlums(this.isoData));
  };
  IsoUpdaterData.prototype.updateRubyWishWell = function () {
    this.isoData.objects.fixedPositions.checkAndCreateWishWell();
  };
  IsoUpdaterData.prototype.initObjects = function (__s41param0) {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(this.isoData, __s41param0));
  };
  IsoUpdaterData.prototype.changePosition = function (__s43param0, __s43param1) {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectChangePos.IsoCommandPackageObjectChangePos(__s43param0, __s43param1));
  };
  IsoUpdaterData.prototype.removeAllMovements = function () {
    for (var __s45local0 = 0, __s45local1 = this.isoData.objects.movements.list; __s45local0 < __s45local1.length; __s45local0++) {
      var __s45local2 = __s45local1[__s45local0];
      if (__s45local2 !== undefined) {
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageObjectRemoveByVO.IsoCommandPackageObjectRemoveByVO(__s45local2));
      }
    }
    __dep_export_Iso.Iso.controller.processor.executeQueue();
  };
  IsoUpdaterData.prototype.triggerObjectsUpdate = function (__s50param0) {
    __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectsTriggerUpdate.IsoCommandPackageObjectsTriggerUpdate(this.isoData, __s50param0));
  };
  IsoUpdaterData.prototype.spawnAquaPointsEffect = function (__s52param0, __s52param1) {
    if (this.isoData.areaData.areaInfo.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      var __s52local0 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s52param0);
      if (__s52local0) {
        var __s52local1 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(__s52local0.getLocalDispPosTopCenter(), __s52local0.uiDisp, __dep_export_Iso.Iso.renderer.layers.transformLayer);
        this.spawnGainFadeEffect(__s52local1, Library.CastleInterfaceElements_Icons.Icon_islandAlliancePoints_Big, [__s52param1]);
      }
    }
  };
  IsoUpdaterData.prototype.spawnCollectableFadeEffect = function (__s56param0, __s56param1) {
    var __s56local0 = new __dep_export_IsoCollectableFadeEffectVE.IsoCollectableFadeEffectVE(__s56param1, __s56param0);
    __s56local0.init(null);
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandSpawnEffect.IsoCommandSpawnEffect(__s56local0));
  };
  IsoUpdaterData.prototype.spawnGainFadeEffect = function (__s58param0, __s58param1, __s58param2, __s58param3 = null) {
    var __s58local0 = new __dep_export_IsoGainFadeEffectVE.IsoGainFadeEffectVE(__s58param0, __s58param1, __s58param2, __s58param3);
    __s58local0.init(null);
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandSpawnEffect.IsoCommandSpawnEffect(__s58local0));
  };
  IsoUpdaterData.prototype.parseGCA = function (__s60param0) {
    var __s60local0;
    var __s60local1;
    var __s60local2;
    for (var __s60local3 = 0, __s60local4 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum); __s60local3 < __s60local4.length; __s60local3++) {
      __s60local1 = __s60local4[__s60local3];
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s60local1, "IsoObjectGroupEnum")) {
        __s60local2 = __s60local1;
        if (__s60local0 = this.isoData.objects.getGroupByType(__s60local2)) {
          __s60local0.destroy();
          __s60local0.parseGCA(__s60param0);
          __s60local0.initObjects();
        }
      }
    }
    this.isoData.objects.invalidateCompleteObjectsList();
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandGridUpdate.IsoCommandGridUpdate(this.isoData));
  };
  IsoUpdaterData.prototype.onLevelUp = function (__s66param0) {
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.areaInfo) {
      this.updateRubyWishWell();
      this.updateEventBuildings();
      this.updateSurroundings();
    }
  };
  IsoUpdaterData.prototype.onRefreshSpecialEvent = function (__s69param0) {
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.areaInfo) {
      this.updateEventBuildings();
    }
  };
  IsoUpdaterData.prototype.onRemoveSpecialEvent = function (__s72param0) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s72param0.specialEventVO, "ASeasonEventVO") && this.isoData.areaData.isSeasonCamp) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s72param0.specialEventVO, "EventSkinEventVO")) {
      this.updateSurroundings();
    }
  };
  IsoUpdaterData.prototype.onIsoObjectMoved = function (__s76param0, __s76param1, __s76param2) {
    this.changePosition(__s76param0, __s76param1);
    __dep_export_Iso.Iso.controller.server.moveObject(__s76param0.objectId, __s76param1, __s76param2, __s76param0.isInBuildingDistrict);
  };
  IsoUpdaterData.prototype.onRenderStrategyChanged = function (__s78param0) {
    var __s78local0 = __dep_export_Iso.Iso.renderer.strategies;
    if (__s78local0.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      this.removeAllMovements();
    } else if (__s78local0.prevStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && __s78local0.currentStrategy.isInNormalMode) {
      this.movementUpdater.spawnMaxMovements(true);
    }
  };
  IsoUpdaterData.prototype.onGainedBuildingPoints = function (__s82param0, __s82param1, __s82param2) {
    var __s82local0 = this;
    if (__s82param2 === undefined) {
      __s82param2 = true;
    }
    var __s82local1 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s82param0), "ABasicBuildingVE");
    if (__s82local1) {
      var __s82local2;
      __s82local2 = __s82param2 || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s82local1.buildingVO, "BasicMoatVO") ? __dep_exact_f855840627e6e145.int(__s82local1.buildingVO.getDeltaMightValue()) : __dep_exact_f855840627e6e145.int(__s82local1.buildingVO.mightValue);
      var __s82local3 = [];
      if (__s82param1 > 0) {
        if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
          __s82local3.push([Library.CastleInterfaceElements_Icons.Icon_XP_Legend_Big, [__s82param1]]);
        } else {
          __s82local3.push([Library.CastleInterfaceElements_Icons.Icon_XP_Big, [__s82param1]]);
        }
      }
      if (__s82local2 > 0) {
        __s82local3.push([Library.CastleInterfaceElements_Icons.Icon_Might_Big, [__s82local2]]);
      }
      var __s82local4 = __s82local1.buildingVO;
      if (__s82local4 instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO && __s82local4.allBuildingEffects.length > 0) {
        __s82local4.allBuildingEffects.forEach(function (__s91param0) {
          __s82local3.push([__s91param0.effect.effectType.type.simpleEffectIconClass, __s91param0.effectValue.textReplacements, __s91param0.effect.effectType.type.simpleValueTextID]);
        });
      }
      var __s82local5 = __s82local3.length % 2 != 0;
      var __s82local6 = 0;
      var __s82local7 = 0;
      __s82local3.forEach(function (__s93param0, __s93param1) {
        var __s93local0 = __s93param1 % 2 != 0;
        __s82local7 = __s82local5 && __s93param1 == __s82local3.length - 1 ? 70 : __s93local0 ? 210 : -70;
        __s82local6 = Math.floor(__s93param1 / 2) * 100;
        var __s93local1 = __s82local1.getGlobalDispPosTopCenter().add(new __s0local0(__s82local7, __s82local6));
        __s82local0.spawnGainFadeEffect(__s93local1, __s93param0[0], __s93param0[1], __s93param0[2]);
      });
    }
  };
  IsoUpdaterData.prototype.onAnimationOptionChanged = function (__s95param0) {
    this.movementUpdater.spawnMaxMovements(true);
  };
  Object.defineProperty(IsoUpdaterData.prototype, "isoData", {
    get: function () {
      return __dep_export_Iso.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterData.prototype, "movementUpdater", {
    get: function () {
      return this._movementUpdater;
    },
    enumerable: true,
    configurable: true
  });
  IsoUpdaterData.prototype.onMyAllianceUpdate = function (__s101param0) {
    this.updateSurroundings();
  };
  return IsoUpdaterData;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoUpdaterData = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoCollectableFadeEffectVE = require("gge-module:export_IsoCollectableFadeEffectVE");
var __dep_export_IsoGainFadeEffectVE = require("gge-module:export_IsoGainFadeEffectVE");
var __dep_export_IsoCommandGridUpdate = require("gge-module:export_IsoCommandGridUpdate");
var __dep_export_IsoCommandSpawnEffect = require("gge-module:export_IsoCommandSpawnEffect");
var __dep_export_IsoCommandPackageObjectChangePos = require("gge-module:export_IsoCommandPackageObjectChangePos");
var __dep_export_IsoCommandPackageObjectRemoveById = require("gge-module:export_IsoCommandPackageObjectRemoveById");
var __dep_export_IsoCommandPackageObjectRemoveByVO = require("gge-module:export_IsoCommandPackageObjectRemoveByVO");
var __dep_export_IsoCommandPackageObjectsInit = require("gge-module:export_IsoCommandPackageObjectsInit");
var __dep_export_IsoCommandPackageObjectsTriggerUpdate = require("gge-module:export_IsoCommandPackageObjectsTriggerUpdate");
var __dep_export_IsoCommandPackageObjectUpdateInfo = require("gge-module:export_IsoCommandPackageObjectUpdateInfo");
var __dep_export_IsoCommandPackageUpdateSlums = require("gge-module:export_IsoCommandPackageUpdateSlums");
var __dep_export_IsoUpdaterMovement = require("gge-module:export_IsoUpdaterMovement");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
