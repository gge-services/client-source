Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GotoMainCastleUniqueBuildingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GotoMainCastleUniqueBuildingCommand, __s1param0);
  GotoMainCastleUniqueBuildingCommand.prototype.execute = function (__s5param0 = null) {
    this.buildingType = __s5param0[0];
    var __s5local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    if (this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.equalsOtherWMO(__s5local0.objectId, __s5local0.kingdomID)) {
      this.showBuilding();
    } else {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s5local0);
      GotoMainCastleUniqueBuildingCommand.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.oJAAArrived));
    }
  };
  GotoMainCastleUniqueBuildingCommand.prototype.oJAAArrived = function (__s9param0) {
    GotoMainCastleUniqueBuildingCommand.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.oJAAArrived));
    this.showBuilding();
  };
  GotoMainCastleUniqueBuildingCommand.prototype.showBuilding = function () {
    var __s11local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByType(this.buildingType), "ABasicBuildingVE");
    if (__s11local0) {
      __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s11local0.vo.pos);
      __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s11local0);
    } else {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s11local1 = this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
      var __s11local2 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
      if (__s11local2 != null) {
        for (var __s11local3 = 0, __s11local4 = Array.from(__s11local2.values()); __s11local3 < __s11local4.length; __s11local3++) {
          var __s11local5 = __s11local4[__s11local3];
          if (__s11local5 !== undefined && __s11local5 instanceof __dep_export_ABasicBuildingVO.ABasicBuildingVO && __s11local5 instanceof this.buildingType.dataClass && __s11local5.level == 1) {
            __s11local1.centerAndHighlightBuildingInShop(__s11local5);
            break;
          }
        }
      }
    }
  };
  Object.defineProperty(GotoMainCastleUniqueBuildingCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GotoMainCastleUniqueBuildingCommand, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return GotoMainCastleUniqueBuildingCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.GotoMainCastleUniqueBuildingCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_ABasicBuildingVO = require("gge-module:export_ABasicBuildingVO");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
