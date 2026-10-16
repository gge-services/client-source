Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ShipSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ShipSurroundingsVE, __s1param0);
  ShipSurroundingsVE.prototype.addEventListener = function () {
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
    __s1param0.prototype.addEventListener.call(this);
  };
  ShipSurroundingsVE.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ShipSurroundingsVE.prototype.onRefreshTreasureMap = function (__s9param0) {
    if (__s9param0.treasureMapVO && __dep_export_TMapHelper.TMapHelper.isSeaQueenMap(__s9param0.treasureMapVO.mapID)) {
      var __s9local0 = "Level" + __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel);
      if (__s9local0 != this.vo.type) {
        this.vo.type = __s9local0;
        this.updateDisp();
      }
    }
  };
  ShipSurroundingsVE.prototype.onMouseClick = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_PORT_UPGRADE_DIALOG_COMMAND);
  };
  return ShipSurroundingsVE;
}(require("gge-module:export_ASurroundingBuildingVE").ASurroundingBuildingVE);
exports.ShipSurroundingsVE = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
