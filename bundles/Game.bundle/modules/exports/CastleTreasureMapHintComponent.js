Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastleTreasureMapHintComponent() {}
  CastleTreasureMapHintComponent.prototype.initComponent = function (__s5param0, __s5param1, __s5param2) {
    this._mapItems = __s5param1;
    if (__s5param2.parent) {
      this._mapLayer = __s5param2.parent;
    } else {
      this._mapLayer = __s5param2;
    }
  };
  CastleTreasureMapHintComponent.prototype.updateComponent = function (__s9param0) {
    var __s9local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().highestShownDialog;
    if (__dep_export_CastleModel.CastleModel.treasureHuntData.currentMapID == __dep_exact_26a421b704832cff.TreasureMapsConst.FIRST_MAP_ID && __s9param0.hasAllPieces && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9local0, "CastleTreasureMapDialog")) {
      __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
      var __s9local1 = __s9param0.treasureMovementsVOs;
      for (var __s9local2 = 0; __s9local2 < this._mapItems.length; __s9local2++) {
        this._mapItems[__s9local2].updateVO(__s9param0.tMapNodeVOs[__s9local2]);
        if (this._mapItems[__s9local2].tMapNodeVO.orUnlockIDs[0] == 0 && !this._mapItems[__s9local2].tMapNodeVO.isStartNode && !this._mapItems[__s9local2].tMapNodeVO.isDefeated && !__s9local1) {
          __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.replace(this._mapItems[__s9local2].disp, false, false);
        }
      }
    }
  };
  CastleTreasureMapHintComponent.prototype.destroy = function () {
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
    this._mapItems = null;
    this._mapLayer = null;
  };
  return CastleTreasureMapHintComponent;
}();
exports.CastleTreasureMapHintComponent = __s0local0;
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureUpdateComponent");
