Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableRenderHelper() {}
  CollectableRenderHelper.displaySingleItem = function (__s5param0, __s5param1, __s5param2, __s5param3 = null, __s5param4 = null) {
    var __s5local0 = new __dep_export_CollectableRenderer.CollectableRenderer(__s5param0, __s5param2);
    __s5local0.changeItemVO(__s5param1);
    if (__s5param3) {
      __s5param3(__s5local0);
    }
    __s5local0.update();
    if (__s5param4) {
      if (__s5local0.isFinishedRendering) {
        __s5param4(__s5local0);
      } else {
        __s5local0.onIconLoadedSignal.addOnce(__s5param4);
      }
    }
    return __s5local0;
  };
  CollectableRenderHelper.displaySingleItemAndAddToRenderList = function (__s11param0, __s11param1, __s11param2, __s11param3, __s11param4 = null, __s11param5 = null) {
    var __s11local0 = CollectableRenderHelper.displaySingleItem(__s11param1, __s11param2, __s11param3, __s11param4, __s11param5);
    if (__s11param0) {
      __s11param0.collectableRenderList.push(__s11local0);
    }
    return __s11local0;
  };
  CollectableRenderHelper.displaySingleItemComplete = function (__s14param0, __s14param1, __s14param2, __s14param3, __s14param4 = null, __s14param5 = null) {
    if (__s14param0) {
      __s14param0.destroyCollectableRenderList();
    }
    return CollectableRenderHelper.displaySingleItemAndAddToRenderList(__s14param0, __s14param1, __s14param2, __s14param3, __s14param4, __s14param5);
  };
  CollectableRenderHelper.displayMultipleItems = function (__s17param0, __s17param1, __s17param2, __s17param3 = null, __s17param4 = null) {
    var __s17local0;
    var __s17local1 = [];
    for (var __s17local2 = 0; __s17local2 < __s17param0.items.length; ++__s17local2) {
      __s17local0 = CollectableRenderHelper.displaySingleItem(__s17param0.items[__s17local2], __s17param1 ? __s17param1.getItemByIndexSave(__s17local2) : null, __s17param2, __s17param3, __s17param4);
      __s17local1.push(__s17local0);
    }
    return __s17local1;
  };
  CollectableRenderHelper.displayMultipleItemsAndAddToRenderList = function (__s21param0, __s21param1, __s21param2, __s21param3, __s21param4 = null, __s21param5 = null) {
    var __s21local0 = CollectableRenderHelper.displayMultipleItems(__s21param1, __s21param2, __s21param3, __s21param4, __s21param5);
    if (__s21param0) {
      for (var __s21local1 = 0; __s21local1 < __s21local0.length; ++__s21local1) {
        __s21param0.collectableRenderList.push(__s21local0[__s21local1]);
      }
    }
    return __s21local0;
  };
  CollectableRenderHelper.displayMultipleItemsComplete = function (__s26param0, __s26param1, __s26param2, __s26param3, __s26param4 = null, __s26param5 = null) {
    if (__s26param0) {
      __s26param0.destroyCollectableRenderList();
    }
    return CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(__s26param0, __s26param1, __s26param2, __s26param3, __s26param4, __s26param5);
  };
  CollectableRenderHelper.createCollectableLevelIndicatorVO = function (__s29param0, __s29param1, __s29param2 = null) {
    var __s29local0;
    var __s29local1 = null;
    var __s29local2 = 0;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s29param0, "CollectableItemBuildingVO")) {
      var __s29local3 = __s29param0.buildingVO;
      if (__s29local3.buildingGroundType != __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
        __s29local2 = __s29local3.level;
        __s29local0 = __dep_export_CollectableRendererLevelIndicatorMC.CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_BUILDING;
      }
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s29param0, "CollectableItemUnitVO")) {
      __s29local2 = __s29param0.unitVO.level;
      __s29local0 = __dep_export_CollectableRendererLevelIndicatorMC.CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_UNIT;
    }
    if (__s29local2 > 0 && __s29local0) {
      __s29local1 = new __dep_export_CollectableLevelIndicatorVO.CollectableLevelIndicatorVO(__s29local0, __s29local2, __s29param1, __s29param2);
    }
    return __s29local1;
  };
  return CollectableRenderHelper;
}();
exports.CollectableRenderHelper = __s0local0;
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CollectableLevelIndicatorVO = require("gge-module:export_CollectableLevelIndicatorVO");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRendererLevelIndicatorMC = require("gge-module:export_CollectableRendererLevelIndicatorMC");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
