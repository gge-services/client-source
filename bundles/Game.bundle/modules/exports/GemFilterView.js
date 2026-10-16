Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GemScrollItemVO = require("gge-module:export_GemScrollItemVO");
var __dep_export_AEquipableFilterView = require("gge-module:export_AEquipableFilterView");
var __s0local0 = function (__s1param0) {
  function GemFilterView(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, "", __s3param0, __s3param1) || this;
    __s3local0._gemFilterPanel = __s3param2;
    __s3local0._filteredInventory = __s3local0.getFilteredInventory();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GemFilterView, __s1param0);
  Object.defineProperty(GemFilterView.prototype, "tabToolTip", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff.GemConst.MIN_PLAYER_LEVEL_FOR_GEM_DROP) {
        return {
          t: "dialog_gemsLocked_tooltip",
          p: [__dep_exact_26a421b704832cff.GemConst.MIN_PLAYER_LEVEL_FOR_GEM_DROP]
        };
      } else {
        return "dialog_gems_tooltip";
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEquipableFilterView.AEquipableFilterView.prototype, "tabToolTip").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  GemFilterView.prototype.fillScrollListData = function (__s11param0) {
    __s11param0.scrollItemClass = __dep_export_GemScrollItem.GemScrollItem;
    this.populateScrollList(__s11param0);
  };
  GemFilterView.prototype.triggerLightUpdate = function () {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  GemFilterView.prototype.populateScrollList = function (__s15param0) {
    for (var __s15local0 = 0; __s15local0 < this._filteredInventory.length; __s15local0++) {
      var __s15local1 = new __dep_export_GemScrollItemVO.GemScrollItemVO();
      __s15local1.gemVO = this._filteredInventory[__s15local0];
      if (__s15param0) {
        __s15param0.pushContent(__s15local1);
      }
    }
  };
  GemFilterView.prototype.getFilteredInventory = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.gemData.playerInventory.filter(this.bindFunction(this.filter)).concat(__dep_export_CastleModel.CastleModel.gemData.relicGemsInventory);
    this.sortInventory(__s20local0);
    if (this._gemFilterPanel) {
      return this._gemFilterPanel.filter(__s20local0);
    } else {
      return __s20local0;
    }
  };
  GemFilterView.prototype.sortInventory = function (__s24param0) {
    __dep_exact_9e901e8e2483a22f.VectorSortHelper.sort(__s24param0, __dep_export_ClientConstSort.ClientConstSort.sortGemsForCrafting);
  };
  GemFilterView.prototype.addListeners = function () {
    __s1param0.prototype.addListeners.call(this);
    __dep_export_CastleModel.CastleModel.gemData.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdated));
    if (this._gemFilterPanel) {
      this._gemFilterPanel.changed.add(this.bindFunction(this.onGemFilterChanged));
      this._gemFilterPanel.changed.dispatch();
    }
  };
  GemFilterView.prototype.removeListeners = function () {
    __s1param0.prototype.removeListeners.call(this);
    __dep_export_CastleModel.CastleModel.gemData.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdated));
    if (this._gemFilterPanel) {
      this._gemFilterPanel.changed.remove(this.bindFunction(this.onGemFilterChanged));
    }
  };
  GemFilterView.prototype.onInventoryUpdated = function (__s32param0) {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  Object.defineProperty(GemFilterView.prototype, "slotClass", {
    get: function () {
      return __dep_exact_81dacdf05bd32292.getDefinitionByName("CastleEquipment_Item_Z");
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEquipableFilterView.AEquipableFilterView.prototype, "slotClass").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  GemFilterView.prototype.matches = function (__s38param0, __s38param1) {
    return __s38param0.gemVO == __s38param1;
  };
  Object.defineProperty(GemFilterView.prototype, "isTabActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff.GemConst.MIN_PLAYER_LEVEL_FOR_GEM_DROP;
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEquipableFilterView.AEquipableFilterView.prototype, "isTabActive").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemFilterView.prototype, "filteredInventory", {
    get: function () {
      return this._filteredInventory;
    },
    enumerable: true,
    configurable: true
  });
  GemFilterView.prototype.onGemFilterChanged = function () {
    if (this._gemFilterPanel) {
      if (__dep_export_CastleModel.CastleModel.gemData.playerInventory.concat(__dep_export_CastleModel.CastleModel.gemData.relicGemsInventory).filter(this.bindFunction(this.filter)).length > 0 && this.getFilteredInventory().length == 0) {
        this._gemFilterPanel.showEmptyFilterMC();
      } else {
        this._gemFilterPanel.hideEmptyFilterMC();
      }
    }
  };
  return GemFilterView;
}(__dep_export_AEquipableFilterView.AEquipableFilterView);
exports.GemFilterView = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_GemScrollItem = require("gge-module:export_GemScrollItem");
