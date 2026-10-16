Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectUpdateInfoModel(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._objectId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._objectId = __s3param1;
    __s3local0._serverObject = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectUpdateInfoModel, __s1param0);
  IsoCommandObjectUpdateInfoModel.prototype.execute = function () {
    var __s5local0 = false;
    for (var __s5local1 = 0, __s5local2 = Array.from(this.isoData.objects.groups.values()); __s5local1 < __s5local2.length; __s5local1++) {
      var __s5local3 = __s5local2[__s5local1];
      if (__s5local3 !== undefined && __s5local3.containsObjectById(this.objectId)) {
        if (__s5local3.groupType == __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS) {
          this.isoData.grid.removeBuildingById(this.objectId);
        }
        var __s5local4 = __s5local3.updateObjectByServer(this.objectId, this.serverObject);
        this.updateOnGrid(__s5local4, __s5local3.groupType);
        __s5local0 = true;
        __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_UPDATED, [__s5local4]));
        __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, [__s5local4]));
        break;
      }
    }
    if (!__s5local0) {
      __dep_exact_9e901e8e2483a22f.debug("Warning: Object with ID '" + this.objectId + "' was not found in any list.");
    }
  };
  IsoCommandObjectUpdateInfoModel.prototype.updateOnGrid = function (__s12param0, __s12param1) {
    switch (__s12param1) {
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.GROUNDS:
        this.isoData.grid.updateCompleteMap();
        break;
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE:
        this.isoData.grid.updateDefence();
        break;
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS:
        this.handleInnerBuildingUpdateOnGrid(__s12param0);
        break;
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.FIXED_POSITIONS:
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.SURROUNDINGS:
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EVENT_BUILDINGS:
        this.isoData.grid.updateOuterMap();
    }
  };
  IsoCommandObjectUpdateInfoModel.prototype.handleInnerBuildingUpdateOnGrid = function (__s15param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0, "ABasicBuildingVO")) {
      switch (__s15param0.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
          break;
        default:
          this.isoData.grid.addBuilding(__s15param0);
      }
    }
  };
  Object.defineProperty(IsoCommandObjectUpdateInfoModel.prototype, "serverObject", {
    get: function () {
      return this._serverObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandObjectUpdateInfoModel.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandObjectUpdateInfoModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectUpdateInfoModel = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
