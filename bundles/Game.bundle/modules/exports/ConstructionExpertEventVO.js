Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleConstructionExpertEventDialogProperties = require("gge-module:export_CastleConstructionExpertEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function ConstructionExpertEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionExpertEventVO, __s1param0);
  Object.defineProperty(ConstructionExpertEventVO.prototype, "buildingList", {
    get: function () {
      var __s5local0 = [];
      for (var __s5local1 = 0, __s5local2 = Array.from(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).values()); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && (__s5local3.group == __dep_export_ClientConstCastle.ClientConstCastle.GROUP_BUILDING || __s5local3.group == __dep_export_ClientConstCastle.ClientConstCastle.GROUP_DEFENCE || __s5local3.group == __dep_export_ClientConstCastle.ClientConstCastle.GROUP_MOAT) && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local3, "AEffectBuildingVO")) {
          var __s5local4 = __s5local3;
          var __s5local5 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __s5local4.requiredLevel;
          var __s5local6 = __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __s5local4.requiredLegendLevel;
          if (__s5local4.needConstructionExpert && __s5local5 && __s5local6) {
            __s5local0.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local3.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
          }
        }
      }
      return __s5local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionExpertEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ConstructionExpertEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionExpertEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_EventArchitekt";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionExpertEventVO.prototype.openDialog = function (__s19param0 = true) {
    this.executeOpenDialog(__s19param0, __dep_export_CastleConstructionExpertEventDialog.CastleConstructionExpertEventDialog, new __dep_export_CastleConstructionExpertEventDialogProperties.CastleConstructionExpertEventDialogProperties(this));
  };
  ConstructionExpertEventVO.__initialize_static_members = function () {
    ConstructionExpertEventVO.EVENT_BUILDING_WOD = 288;
  };
  return ConstructionExpertEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.ConstructionExpertEventVO = __s0local0;
var __dep_export_CastleConstructionExpertEventDialog = require("gge-module:export_CastleConstructionExpertEventDialog");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
