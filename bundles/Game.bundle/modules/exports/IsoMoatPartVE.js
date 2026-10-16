Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Container;
var __s0local1 = function () {
  function IsoMoatPartVE(__s3param0, __s3param1, __s3param2) {
    this._parentVE = __s3param0;
    this._partType = __s3param1;
    this._rawPosition = __s3param2;
  }
  IsoMoatPartVE.prototype.createDisp = function () {
    this._disp = null;
    if (this.canBeShown) {
      this._disp = new __s0local0();
      this._dispComponent = new __dep_export_DispCreatorComponent.DispCreatorComponent();
      this._dispComponent.cacheBehaviour = new __dep_export_IsoDispCreatorCacheBehaviour.IsoDispCreatorCacheBehaviour();
      this._dispComponent.init(this._disp);
      this._dispComponent.switchCreationState(true);
      this._dispComponent.addClip(this.parentVE.loadSubDispClip(this.assetClipName));
      if (this.hasDetailClip) {
        this._dispComponent.addClip(this.parentVE.loadSubDispClip(this.detailClipName));
      }
      this._dispComponent.onLoadedSignal.addOnce(this.bindFunction(this.onAllDispClipsLoaded));
      this._dispComponent.switchCreationState(false);
      var __s5local0 = this.screenPos;
      this._disp.x = __s5local0.x;
      this._disp.y = __s5local0.y;
      if (this.partType == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.WALL && (this.rawPosition.rot == 1 || this.rawPosition.rot == 2)) {
        this.disp.x += __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x;
      }
      return this._disp;
    }
    return null;
  };
  IsoMoatPartVE.prototype.destroy = function () {
    if (this._disp) {
      this._dispComponent.destroy();
      this._disp.removeChildren();
      this._disp = null;
    }
  };
  IsoMoatPartVE.prototype.updateRotation = function () {
    if (this.partType == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.WALL && this.disp) {
      this.disp.scaleX = this.rawPosition.rot == 1 || this.rawPosition.rot == 2 ? -1 : 1;
    }
  };
  IsoMoatPartVE.prototype.onAllDispClipsLoaded = function () {};
  Object.defineProperty(IsoMoatPartVE.prototype, "assetClipName", {
    get: function () {
      var __s18local0 = this.parentVE.assetNamePrefix + "_" + this.moatVO.group;
      var __s18local1 = this.moatVO.visualType;
      switch (this.moatVO.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
          __s18local1 = "Level1";
      }
      if (this.partType == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.GATE) {
        return __s18local0 + "_Bridge_" + __s18local1 + "_" + this.kingdomName;
      } else if (this.partType == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.INNER_CORNER || this.partType == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.OUTER_CORNER) {
        return __s18local0 + "_Corner" + this.getCornerNumber() + "_" + __s18local1 + "_" + this.kingdomName;
      } else {
        return __s18local0 + "_Part" + this.getWallVariationNumber() + "_Dir" + (this.rawPosition.rot == 3 || this.rawPosition.rot == 2 ? 2 : 1) + "_" + __s18local1 + "_" + this.kingdomName;
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoMoatPartVE.prototype.getCornerNumber = function () {
    if (this.partType == __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.INNER_CORNER) {
      switch (this.rawPosition.rot) {
        case 0:
          return 1;
        case 1:
          return 4;
        case 2:
          return 5;
        case 3:
          return 6;
      }
    } else {
      switch (this.rawPosition.rot) {
        case 0:
          return 0;
        case 1:
          return 3;
        case 2:
          return 2;
        case 3:
          return 7;
      }
    }
    return 0;
  };
  Object.defineProperty(IsoMoatPartVE.prototype, "canBeShown", {
    get: function () {
      if (this.parentVE.isoRenderer.isoData.areaData.isSeasonCamp) {
        return true;
      }
      switch (this.partType) {
        case __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.OUTER_CORNER:
        case __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.INNER_CORNER:
          return this.rawPosition.rot != 3;
        case __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.GATE:
          return true;
        case __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.WALL:
          return this.rawPosition.rot == 0 || this.rawPosition.rot == 1;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "screenPos", {
    get: function () {
      return this.parentVE.isoRenderer.camera.getScreenPosByGridPos(this.rawPosition.pos);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "detailClipName", {
    get: function () {
      switch (this.moatVO.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
          return "Buildinglot_" + this.moatVO.group + "_Part_Detail" + this.getDetailVariationNumber() + "_Dir1_" + this.kingdomName;
        default:
          return this.moatVO.name + "_" + this.moatVO.group + "_" + this.moatVO.visualType + "_Detail" + this.getDetailVariationNumber() + "_Dir1_" + this.kingdomName;
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoMoatPartVE.prototype.getWallVariationNumber = function () {
    return __dep_exact_f855840627e6e145.int(new __dep_exact_9e901e8e2483a22f.SimpleRandom(this.moatVO.isoData.areaData.areaInfo.objectId + this.rawPosition.pos.x + this.rawPosition.pos.y).nextInt(2));
  };
  IsoMoatPartVE.prototype.getDetailVariationNumber = function () {
    return __dep_exact_f855840627e6e145.int(new __dep_exact_9e901e8e2483a22f.SimpleRandom(this.moatVO.isoData.areaData.areaInfo.objectId + this.rawPosition.pos.x + this.rawPosition.pos.y).nextInt(10));
  };
  Object.defineProperty(IsoMoatPartVE.prototype, "hasDetailClip", {
    get: function () {
      if (this.partType != __dep_export_IsoMoatPartEnum.IsoMoatPartEnum.WALL) {
        return false;
      }
      var __s43local0 = this.getDetailVariationNumber();
      return __s43local0 >= 0 && __s43local0 <= 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "kingdomName", {
    get: function () {
      return this._parentVE.kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "moatVO", {
    get: function () {
      return this.parentVE.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "parentVE", {
    get: function () {
      return this._parentVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "dispComponent", {
    get: function () {
      return this._dispComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "partType", {
    get: function () {
      return this._partType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "rawPosition", {
    get: function () {
      return this._rawPosition;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMoatPartVE;
}();
exports.IsoMoatPartVE = __s0local1;
var __dep_export_IsoDispCreatorCacheBehaviour = require("gge-module:export_IsoDispCreatorCacheBehaviour");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoMoatPartEnum = require("gge-module:export_IsoMoatPartEnum");
