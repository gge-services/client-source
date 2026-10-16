Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __s0local0 = function () {
  function FillCraftingEquipmentStrategy() {}
  FillCraftingEquipmentStrategy.prototype.fillCraftingSlots = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = __s5param2.filteredInventory;
    var __s5local1 = [];
    var __s5local2 = 0;
    var __s5local3 = 0;
    for (var __s5local4 = 0; __s5local4 < __s5param0.length; __s5local4++) {
      var __s5local5 = __s5param0[__s5local4].slotVO;
      if (__s5local5.equipmentVO != null) {
        __s5local2 = __dep_exact_f855840627e6e145.int(__s5local5.equipmentVO.rareID);
        __s5local3++;
      } else if (__s5local2 != __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY || __s5local1.length + __s5local3 < __dep_exact_26a421b704832cff.EquipmentConst.NORMAL_CRAFT_COUNT) {
        __s5local1.push(__s5param0[__s5local4]);
      }
    }
    this.fillFreeSlots(__s5local1, __s5local0, __s5local2);
  };
  FillCraftingEquipmentStrategy.prototype.fillFreeSlots = function (__s11param0, __s11param1, __s11param2, __s11param3 = false) {
    if (__s11param2 == 0) {
      this.fillFreeSlots(__s11param0, __s11param1, ++__s11param2, true);
    } else if (!this.tryFillingWithRarity(__s11param0, __s11param1, __s11param2)) {
      if (__s11param3 && __s11param2 < __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY) {
        this.fillFreeSlots(__s11param0, __s11param1, ++__s11param2, true);
      } else {
        this.showError();
      }
    }
  };
  FillCraftingEquipmentStrategy.prototype.tryFillingWithRarity = function (__s17param0, __s17param1, __s17param2) {
    if (__s17param2 == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY && __s17param0.length > __dep_exact_26a421b704832cff.EquipmentConst.NORMAL_CRAFT_COUNT) {
      __s17param0.splice(__dep_exact_26a421b704832cff.EquipmentConst.NORMAL_CRAFT_COUNT, __s17param0.length - __dep_exact_26a421b704832cff.EquipmentConst.NORMAL_CRAFT_COUNT);
    }
    var __s17local0 = __s17param1.filter(this.getFilterByRareID(__s17param2));
    if (__s17local0.length >= __s17param0.length) {
      for (var __s17local1 = 0; __s17local1 < __s17param0.length; __s17local1++) {
        this.fillSlot(__s17param0[__s17local1], __s17local0[__s17local0.length - (1 + __s17local1)]);
      }
      return true;
    }
    if (__s17local0.length >= __s17param0.length - __dep_exact_26a421b704832cff.EquipmentConst.NORMAL_CRAFT_COUNT && __s17param2 != __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY) {
      for (var __s17local2 = 0; __s17local2 < __s17param0.length - __dep_exact_26a421b704832cff.EquipmentConst.NORMAL_CRAFT_COUNT; __s17local2++) {
        this.fillSlot(__s17param0[__s17local2], __s17local0[__s17local0.length - (1 + __s17local2)]);
      }
      return true;
    }
    return false;
  };
  FillCraftingEquipmentStrategy.prototype.fillSlot = function (__s26param0, __s26param1) {
    __s26param0.slotVO.equipmentVO = __s26param1;
    __s26param0.mc_itemHolder.addChild(__dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s26param1, null, FillCraftingEquipmentStrategy.MAX_WIDTH, FillCraftingEquipmentStrategy.MAX_HEIGHT, null, true, false, false, true, true));
    __dep_export_CastleModel.CastleModel.equipData.moveItem(__s26param1, __dep_export_CastleModel.CastleModel.equipData.playerInventory, __dep_export_CastleModel.CastleModel.equipData.craftingInventory);
  };
  FillCraftingEquipmentStrategy.prototype.getFilterByRareID = function (__s28param0) {
    return function (__s30param0) {
      var __s30local0 = [];
      for (var __s30local1 = 1; __s30local1 < arguments.length; __s30local1++) {
        __s30local0[__s30local1 - 1] = arguments[__s30local1];
      }
      return __s30param0.rareID == __s28param0 && !__s30param0.isFavorite;
    };
  };
  FillCraftingEquipmentStrategy.prototype.showError = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_equipmentCrafting_autofillError")));
  };
  FillCraftingEquipmentStrategy.__initialize_static_members = function () {
    FillCraftingEquipmentStrategy.MAX_WIDTH = 57;
    FillCraftingEquipmentStrategy.MAX_HEIGHT = 57;
  };
  return FillCraftingEquipmentStrategy;
}();
exports.FillCraftingEquipmentStrategy = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillCraftingStrategy");
__s0local0.__initialize_static_members();
