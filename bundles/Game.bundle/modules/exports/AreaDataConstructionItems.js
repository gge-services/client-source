Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function AreaDataConstructionItems() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataConstructionItems, __s1param0);
  AreaDataConstructionItems.prototype.updateConstructionItems = function (__s5param0) {
    if (__s5param0) {
      this._constructionItemParams = __s5param0;
      for (var __s5local0 = 0, __s5local1 = this.areaData.isoData.objects.innerBuildings.list; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __dep_export_Iso.Iso.controller.processor.addCommandToQueue(new __dep_export_IsoCommandObjectUpdateConstructionItems.IsoCommandObjectUpdateConstructionItems(__s5local2.isoData, __s5local2));
        }
      }
      __dep_export_Iso.Iso.controller.processor.executeQueue();
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED));
    }
  };
  AreaDataConstructionItems.prototype.getConstructionItemEffectValue = function (__s11param0) {
    var __s11local0 = 0;
    var __s11local1 = this.areaData.isoData.objects.getCompleteObjectsList();
    if (__s11local1 != null) {
      for (var __s11local2 = 0, __s11local3 = __s11local1; __s11local2 < __s11local3.length; __s11local2++) {
        var __s11local4 = __s11local3[__s11local2];
        if (__s11local4 !== undefined) {
          var __s11local5 = __s11local4;
          if (__s11local5 && __s11local5.hasConstructionItemSlots) {
            __s11local0 += __dep_exact_f855840627e6e145.int(__s11local5.getConstructionItemEffectValue(__s11param0));
          }
        }
      }
    }
    return __s11local0;
  };
  AreaDataConstructionItems.prototype.getEffectValue = function (__s18param0, __s18param1) {
    __s18param1 = __s18param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s18local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(__s18param0, __s18param1));
    return __s18local0 || new __s18param0.valueClass();
  };
  AreaDataConstructionItems.prototype.getBonusVOsByType = function (__s20param0, __s20param1) {
    __s20param1 = __s20param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s20local0 = [];
    var __s20local1 = this.areaData.isoData.objects.getCompleteObjectsList();
    if (__s20local1 != null) {
      for (var __s20local2 = 0, __s20local3 = __s20local1; __s20local2 < __s20local3.length; __s20local2++) {
        var __s20local4 = __s20local3[__s20local2];
        if (__s20local4 !== undefined) {
          var __s20local5 = __s20local4;
          if (__s20local5 && (__s20local5.hasConstructionItemSlots || __s20local5.hasModernEffects)) {
            __s20local0 = __s20local0.concat(__s20local5.getBonusVOsByTypeFromConstructionItemsOnly(__s20param0, __s20param1));
          }
        }
      }
    }
    return __s20local0;
  };
  AreaDataConstructionItems.prototype.getConstructionItemGroupEffectAmount = function (__s27param0) {
    var __s27local0 = 0;
    var __s27local1 = this.areaData.isoData.objects.getCompleteObjectsList();
    if (__s27local1 != null) {
      for (var __s27local2 = 0, __s27local3 = __s27local1; __s27local2 < __s27local3.length; __s27local2++) {
        var __s27local4 = __s27local3[__s27local2];
        if (__s27local4 !== undefined) {
          var __s27local5 = __s27local4;
          if (__s27local5 && __s27local5.hasConstructionItemSlots) {
            __s27local0 += __s27local5.getConstructionItemGroupEffectsAmount(__s27param0);
          }
        }
      }
    }
    return __s27local0;
  };
  Object.defineProperty(AreaDataConstructionItems.prototype, "constructionItemParams", {
    get: function () {
      return this._constructionItemParams;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionItems.prototype, "ignoreCap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataConstructionItems;
}(require("gge-module:export_AAreaDataComponent").AAreaDataComponent);
exports.AreaDataConstructionItems = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_IsoCommandObjectUpdateConstructionItems = require("gge-module:export_IsoCommandObjectUpdateConstructionItems");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent", "IEffectSource");
