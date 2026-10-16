Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupInnerBuilding() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupInnerBuilding, __s1param0);
  IsoDataObjectGroupInnerBuilding.prototype.checkProductionTip = function (__s5param0) {
    if (this.isoData.areaData.isMyHomeCastle && __dep_export_ClientConstUtils.ClientConstUtils.isObjectClassOf(__s5param0, [__dep_export_FarmBuildingVO.FarmBuildingVO, __dep_export_QuarryBuildingVO.QuarryBuildingVO, __dep_export_WoodcutterBuildingVO.WoodcutterBuildingVO])) {
      var __s5local0 = this.isoData.areaData.storage;
      if (__s5local0) {
        var __s5local1;
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "FarmBuildingVO")) {
          __s5local1 = __dep_export_CollectableEnum.CollectableEnum.FOOD;
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "QuarryBuildingVO")) {
          __s5local1 = __dep_export_CollectableEnum.CollectableEnum.STONE;
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "WoodcutterBuildingVO")) {
          __s5local1 = __dep_export_CollectableEnum.CollectableEnum.WOOD;
        }
        var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0.getItem(__s5local1).fieldEfficiency);
        if (__s5param0.level == 1) {
          var __s5local3 = __dep_exact_f855840627e6e145.int(this.isoData.objects.provider.getObjectAmountByType(__s5param0.objectType));
          if (__s5local3 == __s5local2 + 1 || __s5local3 == __s5local2 + 2) {
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.TIP_EFFICIENCY]);
          }
        }
      }
    }
  };
  IsoDataObjectGroupInnerBuilding.prototype.addObject = function (__s14param0) {
    __s1param0.prototype.addObject.call(this, __s14param0);
    this.checkProductionTip(__s14param0);
  };
  IsoDataObjectGroupInnerBuilding.prototype.updateObjectByServer = function (__s16param0, __s16param1) {
    if (this.list != null) {
      for (var __s16local0 = 0, __s16local1 = this.list; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined && __s16local2.objectId == __s16param0) {
          __dep_export_IsoHelper.IsoHelper.data.updateIsoObjectByServer(__s16local2, __s16param1);
          var __s16local3 = __s16local2;
          switch (__s16local3.buildingState) {
            case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
            case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
              this.isoData.updater.removeObjectByObjectId(__s16local3.objectId);
          }
          return __s16local2;
        }
      }
    }
    return null;
  };
  IsoDataObjectGroupInnerBuilding.prototype.parseGCA = function (__s23param0) {
    var __s23local0 = __s23param0.BD;
    if (__s23local0) {
      for (var __s23local1 = 0, __s23local2 = __s23local0; __s23local1 < __s23local2.length; __s23local1++) {
        var __s23local3 = __s23local2[__s23local1];
        if (__s23local3 !== undefined) {
          var __s23local4 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s23local3, this.isoData);
          if (__s23local4) {
            this.list.push(__s23local4);
          }
        }
      }
    }
  };
  return IsoDataObjectGroupInnerBuilding;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupInnerBuilding = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_FarmBuildingVO = require("gge-module:export_FarmBuildingVO");
var __dep_export_QuarryBuildingVO = require("gge-module:export_QuarryBuildingVO");
var __dep_export_WoodcutterBuildingVO = require("gge-module:export_WoodcutterBuildingVO");
