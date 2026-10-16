Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SCollectMineResources = require("gge-module:export_C2SCollectMineResources");
var __dep_export_MineStateUpdateEvent = require("gge-module:export_MineStateUpdateEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function AMineBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AMineBuildingVE, __s1param0);
  AMineBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.mineData.addEventListener(__dep_export_MineStateUpdateEvent.MineStateUpdateEvent.STATE_UPDATE, this.bindFunction(this.onMineStatusUpdated));
  };
  AMineBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.mineData.removeEventListener(__dep_export_MineStateUpdateEvent.MineStateUpdateEvent.STATE_UPDATE, this.bindFunction(this.onMineStatusUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  AMineBuildingVE.prototype.createStatusIcons = function () {
    if (this.buildingVO.buildingState.isUnderConstruction) {
      __s1param0.prototype.createStatusIcons.call(this);
    } else if (this.mineBuildingVO.isFull) {
      this.statusIcons.addIcon(this.statusIconFull);
    }
  };
  Object.defineProperty(AMineBuildingVE.prototype, "statusIconFull", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AMineBuildingVE.prototype.onMouseClick = function () {
    if (this.mineBuildingVO.canBeCollected) {
      var __s15local0 = {
        OID: this.vo.objectId
      };
      __dep_export_CastleModel.CastleModel.mineData.collectMine(this.vo.objectId);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCollectMineResources.C2SCollectMineResources(__s15local0));
    }
  };
  AMineBuildingVE.prototype.onMineStatusUpdated = function (__s18param0) {
    if (this.mineBuildingVO.mineStateChanged() && this.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED) {
      this.updateDisp();
    }
    if (this.mineBuildingVO.canBeCollected && this.hasRingMenu) {
      this.isoRenderer.mouse.deselectTarget();
    }
  };
  AMineBuildingVE.prototype.onHoverTarget = function () {
    if (!!this.mineBuildingVO.isCharging && !this.buildingVO.buildingState.isInProgress && !this.buildingVO.buildingState.isUnderConstruction) {
      this.statusIcons.removeAllIcons();
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PROGRESS_BAR_MINE);
    }
  };
  AMineBuildingVE.prototype.onUnHoverTarget = function () {
    this.updateStatusIcon();
  };
  Object.defineProperty(AMineBuildingVE.prototype, "mineBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AMineBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.AMineBuildingVE = __s0local0;
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
