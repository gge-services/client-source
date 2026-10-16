Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoMoatPartEnum = require("gge-module:export_IsoMoatPartEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_ADefenceBuildingVE = require("gge-module:export_ADefenceBuildingVE");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function BasicMoatVE() {
    var __s3local0 = this;
    __s3local0._parts = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicMoatVE, __s1param0);
  BasicMoatVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.dispComponent.cacheDisp = false;
  };
  BasicMoatVE.prototype.onRenderStrategyChanged = function (__s7param0) {
    this.updateVisibility();
  };
  BasicMoatVE.prototype.createDisp = function () {
    this._kingdomName = this.vo.getAreaKingdomName();
    this._parts.length = 0;
    var __s9local0;
    var __s9local1 = new __s0local0();
    for (var __s9local2 = 0, __s9local3 = this.moatVO.positions.walls; __s9local2 < __s9local3.length; __s9local2++) {
      __s9local0 = __s9local3[__s9local2];
      this.addMoatPart(__s9local1, __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.WALL, __s9local0);
    }
    for (var __s9local4 = 0, __s9local5 = this.moatVO.positions.outerCorners; __s9local4 < __s9local5.length; __s9local4++) {
      __s9local0 = __s9local5[__s9local4];
      this.addMoatPart(__s9local1, __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.OUTER_CORNER, __s9local0);
    }
    for (var __s9local6 = 0, __s9local7 = this.moatVO.positions.innerCorners; __s9local6 < __s9local7.length; __s9local6++) {
      __s9local0 = __s9local7[__s9local6];
      this.addMoatPart(__s9local1, __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.INNER_CORNER, __s9local0);
    }
    this.addMoatPart(__s9local1, __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.GATE, this.moatVO.positions.gate);
    this.dispComponent.addDisp(__s9local1);
  };
  BasicMoatVE.prototype.addMoatPart = function (__s17param0, __s17param1, __s17param2) {
    var __s17local0 = new __dep_export_IsoMoatPartVE.IsoMoatPartVE(this, __s17param1, __s17param2);
    var __s17local1 = __s17local0.createDisp();
    if (__s17local1) {
      __s17param0.addChild(__s17local1);
      this._parts.push(__s17local0);
    }
    if (__s17param1 == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.GATE) {
      this._gateVE = __s17local0;
    }
  };
  BasicMoatVE.prototype.loadSubDispClip = function (__s21param0) {
    return this.loadExternalClip(__s21param0, null, this.getFlagClipColor(), null, false, null, false, 1, false, false, false);
  };
  BasicMoatVE.prototype.destroyDisp = function () {
    if (this._parts != null) {
      for (var __s23local0 = 0, __s23local1 = this._parts; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.destroy();
        }
      }
    }
    this._parts.length = 0;
    __s1param0.prototype.destroyDisp.call(this);
  };
  BasicMoatVE.prototype.updateVisibility = function () {
    this.elementContainer.visible = this.canBeShown();
  };
  BasicMoatVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    this.statusIcons.removeAllIcons();
  };
  BasicMoatVE.prototype.updateRotation = function () {
    if (this._parts != null) {
      for (var __s33local0 = 0, __s33local1 = this._parts; __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2 !== undefined) {
          __s33local2.updateRotation();
        }
      }
    }
  };
  BasicMoatVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.updateVisibility();
  };
  BasicMoatVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.MOAT;
  };
  BasicMoatVE.prototype.getScreenPos = function () {
    return new __s0local1();
  };
  BasicMoatVE.prototype.canBeShown = function () {
    return this.renderStrategy.currentStrategy.isInNormalMode || this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && !this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
  };
  Object.defineProperty(BasicMoatVE.prototype, "assetFileName", {
    get: function () {
      return this.assetNamePrefix + "_" + this.moatVO.group + "_" + this.kingdomName;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVE.prototype, "assetNamePrefix", {
    get: function () {
      switch (this.moatVO.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
          return "Buildinglot";
        default:
          return this.moatVO.name;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVE.prototype.addGlow = function () {
    if (this._gateVE) {
      var __s54local0 = this._gateVE.dispComponent.dispContainer;
      if (!!__s54local0 && (!__s54local0.filters || __s54local0.filters.length == 0)) {
        __s54local0.useFilters(__dep_export_IsoConst.IsoConst.VE_GLOW_FILTER_STANDARD, true);
        __s54local0._filterOffsetX = __s54local0._filterOffsetX / __s54local0._cacheScale;
        __s54local0._filterOffsetY = __s54local0._filterOffsetY / __s54local0._cacheScale;
      }
    }
  };
  BasicMoatVE.prototype.removeGlow = function () {
    if (this._gateVE && this._gateVE.dispComponent.dispContainer) {
      this._gateVE.dispComponent.dispContainer.useFilters([], true);
    }
  };
  Object.defineProperty(BasicMoatVE.prototype, "uiDisp", {
    get: function () {
      if (this._gateVE) {
        return this._gateVE.disp;
      } else {
        return null;
      }
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "uiDisp").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVE.prototype, "moatVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVE.prototype, "kingdomName", {
    get: function () {
      return this._kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVE.prototype.onCameraZoomChanged = function () {
    __s1param0.prototype.onCameraZoomChanged.call(this);
    for (var __s71local0 = 0, __s71local1 = this._parts; __s71local0 < __s71local1.length; __s71local0++) {
      __s71local1[__s71local0].dispComponent.updateCache();
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderStaticStage();
  };
  BasicMoatVE.prototype.needsReCache = function (__s75param0) {
    if (this._parts.length > 0) {
      var __s75local0 = this._parts[0].dispComponent.dispContainer;
      return __s75local0.children.length > 0 && __s75local0._cacheScale !== __s75param0;
    }
    return false;
  };
  Object.defineProperty(BasicMoatVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Moat;
    },
    enumerable: true,
    configurable: true
  });
  return BasicMoatVE;
}(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE);
exports.BasicMoatVE = __s0local2;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoMoatPartVE = require("gge-module:export_IsoMoatPartVE");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IIngameUICapable");
