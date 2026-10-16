Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGemVO = require("gge-module:export_CastleGemVO");
var __s0local0 = function () {
  function FillCraftingGemStrategy() {}
  FillCraftingGemStrategy.prototype.fillCraftingSlots = function (__s5param0, __s5param1, __s5param2) {
    this.resultSlot = __s5param1;
    var __s5local0 = [];
    var __s5local1 = __s5param2.filteredInventory;
    var __s5local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL);
    for (var __s5local3 = 0; __s5local3 < __s5param0.length; __s5local3++) {
      if (__s5param0[__s5local3].gemVO) {
        if (__s5param0[__s5local3].gemVO.level < __s5local2) {
          __s5local2 = __dep_exact_f855840627e6e145.int(__s5param0[__s5local3].gemVO.level);
        }
      } else {
        __s5local0.push(__s5param0[__s5local3]);
      }
    }
    if (__s5param1.gemVO) {
      __s5local2 = __dep_exact_f855840627e6e145.int(__s5param1.gemVO.level);
      this.fillByResultSlot(__s5local0, __s5local1, __s5local2);
    } else {
      __s5local0.reverse();
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local1[__s5local1.length - 1], "CastleGemVO") && __s5local2 == __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL) {
        __s5local2 = __dep_exact_f855840627e6e145.int(__s5local1.length > 0 ? Math.min(__s5local1[__s5local1.length - 1].level, __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL - 1) : __dep_exact_26a421b704832cff.GemConst.MIN_GEM_LEVEL);
      }
      this.fillByCraftingSlots(__s5local0, __s5local1, __s5local2);
    }
  };
  FillCraftingGemStrategy.prototype.fillByResultSlot = function (__s15param0, __s15param1, __s15param2) {
    if (!this.tryFillingWithLevelRange(__s15param0, __s15param1, __s15param2, __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL)) {
      this.showError();
    }
  };
  FillCraftingGemStrategy.prototype.fillByCraftingSlots = function (__s18param0, __s18param1, __s18param2) {
    if (!this.tryFillingWithLevelRange(__s18param0, __s18param1, __s18param2, __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL)) {
      if (__s18param2 > __dep_exact_26a421b704832cff.GemConst.MIN_GEM_LEVEL) {
        this.fillByCraftingSlots(__s18param0, __s18param1, __s18param2 - 1);
      } else {
        this.showError();
      }
    }
  };
  FillCraftingGemStrategy.prototype.tryFillingWithLevelRange = function (__s23param0, __s23param1, __s23param2, __s23param3) {
    var __s23local0 = __s23param1.filter(this.getFilterByLevel(__s23param2, __s23param3));
    __s23local0.sort(this.bindFunction(this.sortByUpgradability));
    if (__s23local0.length >= __s23param0.length) {
      for (var __s23local1 = 0; __s23local1 < __s23param0.length; __s23local1++) {
        var __s23local2 = __s23local0[__s23local0.length - (__s23local1 + 1)];
        if (__s23param0[__s23local1] == this.resultSlot && (__s23local2.level > __s23param2 || !__s23local2.isUpgradable)) {
          return false;
        }
        this.fillSlot(__s23param0[__s23local1], __s23local2);
      }
      return true;
    }
    return false;
  };
  FillCraftingGemStrategy.prototype.sortByUpgradability = function (__s29param0, __s29param1) {
    if (__s29param0.level != __s29param1.level) {
      return __s29param1.level - __s29param0.level;
    } else if (__s29param0.isUpgradable && !__s29param1.isUpgradable) {
      return 1;
    } else if (!__s29param0.isUpgradable && __s29param1.isUpgradable) {
      return -1;
    } else {
      return 0;
    }
  };
  FillCraftingGemStrategy.prototype.getFilterByLevel = function (__s35param0, __s35param1) {
    return function (__s37param0) {
      var __s37local0 = [];
      for (var __s37local1 = 1; __s37local1 < arguments.length; __s37local1++) {
        __s37local0[__s37local1 - 1] = arguments[__s37local1];
      }
      var __s37local2 = __s37param0 instanceof __dep_export_CastleGemVO.CastleGemVO ? __s37param0 : null;
      return __s37local2 && __s37local2.level >= __s35param0 && __s37local2.level <= __s35param1 && !__s37local2.isUnique && !__s37local2.isFavorite;
    };
  };
  FillCraftingGemStrategy.prototype.fillSlot = function (__s41param0, __s41param1) {
    __s41param0.gemVO = __s41param1;
    __s41param0.mc_itemHolder.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(__s41param1, null, null, true));
    __s41param0.mc_itemHolder.scaleX = __s41param0.mc_itemHolder.scaleY = 1.1;
    if (__s41param0 == this.resultSlot) {
      __dep_export_CastleModel.CastleModel.gemData.moveItem(__s41param1, __dep_export_CastleModel.CastleModel.gemData.playerInventory, __dep_export_CastleModel.CastleModel.gemData.craftingCenterInventory);
    } else {
      __dep_export_CastleModel.CastleModel.gemData.moveItem(__s41param1, __dep_export_CastleModel.CastleModel.gemData.playerInventory, __dep_export_CastleModel.CastleModel.gemData.craftingInventory);
    }
  };
  FillCraftingGemStrategy.prototype.showError = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_gemCrafting_autofillError")));
  };
  return FillCraftingGemStrategy;
}();
exports.FillCraftingGemStrategy = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IFillCraftingStrategy");
