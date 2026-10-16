Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function IsoKeyWordCheats() {}
  IsoKeyWordCheats.onCheatET = function () {
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && __dep_export_Iso.Iso.data.areaData.isMyHomeCastle) {
      var __s5local0 = new __dep_export_IsoGeneratorMovements.IsoGeneratorMovements(__dep_export_Iso.Iso.data);
      for (var __s5local1 = 0; __s5local1 < 40; ++__s5local1) {
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageMovementSpawn.IsoCommandPackageMovementSpawn(__s5local0.createEggMovement()));
      }
      __dep_export_Iso.Iso.controller.processor.executeQueue();
    }
  };
  IsoKeyWordCheats.onCheatFarhat = function () {
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && __dep_export_Iso.Iso.data.areaData.isMyHomeCastle) {
      for (var __s10local0 = __dep_export_Iso.Iso.data.grid.origins.getOriginRect(), __s10local1 = new __dep_export_IsoGeneratorMovements.IsoGeneratorMovements(__dep_export_Iso.Iso.data), __s10local2 = __dep_exact_f855840627e6e145.int(__s10local0.top); __s10local2 < __s10local0.bottom; __s10local2 += 2) {
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageMovementSpawn.IsoCommandPackageMovementSpawn(__s10local1.createShowUpMovement(new __s0local0(__s10local0.right + 7, __s10local2), 3)));
      }
      for (var __s10local3 = __dep_exact_f855840627e6e145.int(__s10local0.left); __s10local3 < __s10local0.right; __s10local3 += 2) {
        __dep_export_Iso.Iso.controller.processor.addPackageToQueue(new __dep_export_IsoCommandPackageMovementSpawn.IsoCommandPackageMovementSpawn(__s10local1.createShowUpMovement(new __s0local0(__s10local3, __s10local0.bottom + 7), 2)));
      }
      __dep_export_Iso.Iso.controller.processor.executeQueue();
    }
  };
  IsoKeyWordCheats.onCheatDebugCross = function () {
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen) {
      __dep_export_Iso.Iso.renderer.settings.isDebugCrossVisible = !__dep_export_Iso.Iso.renderer.settings.isDebugCrossVisible;
      __dep_export_Iso.Iso.renderer.objects.render();
    }
  };
  IsoKeyWordCheats.onCheatDebugPos = function () {
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen) {
      __dep_export_Iso.Iso.renderer.settings.isDebugPosVisible = !__dep_export_Iso.Iso.renderer.settings.isDebugPosVisible;
      __dep_export_Iso.Iso.renderer.mouse.updateFloorCursor();
    }
  };
  IsoKeyWordCheats.onCheatFps = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().toggleFPSvisibility();
  };
  IsoKeyWordCheats.onCheatZSort = function () {
    __dep_export_Iso.Iso.renderer.settings.isZSortChildIndexVisible = !__dep_export_Iso.Iso.renderer.settings.isZSortChildIndexVisible;
    if (__dep_export_Iso.Iso.renderer.settings.isZSortChildIndexVisible) {
      __dep_export_IsoHelper.IsoHelper.zSort.showChildIndices();
    } else {
      __dep_export_Iso.Iso.renderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.DEBUG_Z_SORT).removeChildren();
    }
  };
  return IsoKeyWordCheats;
}();
exports.IsoKeyWordCheats = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoGeneratorMovements = require("gge-module:export_IsoGeneratorMovements");
var __dep_export_IsoCommandPackageMovementSpawn = require("gge-module:export_IsoCommandPackageMovementSpawn");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
