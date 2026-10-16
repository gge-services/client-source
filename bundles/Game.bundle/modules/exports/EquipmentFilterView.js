Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_EquipmentScrollItem = require("gge-module:export_EquipmentScrollItem");
var __dep_export_EquipmentScrollItemVO = require("gge-module:export_EquipmentScrollItemVO");
var __dep_export_AEquipableFilterView = require("gge-module:export_AEquipableFilterView");
var __s0local0 = function (__s1param0) {
  function EquipmentFilterView(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._eqFilterPanel = __s3param3;
    __s3local0._filteredInventory = __s3local0.getFilteredInventory();
    __s3local0._getCurrentLordCallback = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentFilterView, __s1param0);
  EquipmentFilterView.prototype.fillScrollListData = function (__s5param0) {
    __s5param0.scrollItemClass = __dep_export_EquipmentScrollItem.EquipmentScrollItem;
    this.populateScrollList(__s5param0);
  };
  EquipmentFilterView.prototype.triggerLightUpdate = function () {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  EquipmentFilterView.prototype.populateScrollList = function (__s9param0) {
    for (var __s9local0 = 0; __s9local0 < this._filteredInventory.length; __s9local0++) {
      var __s9local1 = new __dep_export_EquipmentScrollItemVO.EquipmentScrollItemVO();
      __s9local1.equipmentVO = this._filteredInventory[__s9local0];
      __s9local1.getCurrentLordCallback = this._getCurrentLordCallback;
      if (__s9param0) {
        __s9param0.pushContent(__s9local1);
      }
    }
  };
  EquipmentFilterView.prototype.getFilteredInventory = function () {
    var __s14local0 = __dep_export_CastleModel.CastleModel.equipData.playerInventory.filter(this.bindFunction(this.applyFilterAndExcludeHidden));
    this.sortInventory(__s14local0);
    if (this._eqFilterPanel) {
      return this._eqFilterPanel.filter(__s14local0);
    } else {
      return __s14local0;
    }
  };
  EquipmentFilterView.prototype.applyFilterAndExcludeHidden = function (__s18param0) {
    var __s18local0 = [];
    for (var __s18local1 = 1; __s18local1 < arguments.length; __s18local1++) {
      __s18local0[__s18local1 - 1] = arguments[__s18local1];
    }
    return !!this.filter(__s18param0);
  };
  EquipmentFilterView.prototype.sortInventory = function (__s22param0) {
    __dep_exact_9e901e8e2483a22f.VectorSortHelper.sort(__s22param0, __dep_export_ClientConstSort.ClientConstSort.sortByRarityAndEnchantment);
  };
  EquipmentFilterView.prototype.addListeners = function () {
    __s1param0.prototype.addListeners.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    if (this._eqFilterPanel) {
      this._eqFilterPanel.changed.add(this.bindFunction(this.onEQFilterChanged));
      this._eqFilterPanel.changed.dispatch();
    }
  };
  EquipmentFilterView.prototype.removeListeners = function () {
    __s1param0.prototype.removeListeners.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    if (this._eqFilterPanel) {
      this._eqFilterPanel.changed.remove(this.bindFunction(this.onEQFilterChanged));
    }
  };
  EquipmentFilterView.prototype.onInventoryUpdated = function (__s30param0) {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  EquipmentFilterView.prototype.onCastleListUpdated = function (__s32param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
  };
  EquipmentFilterView.prototype.showToolTip = function (__s34param0, __s34param1) {
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s34param0, __s34param1.equipmentVO);
  };
  Object.defineProperty(EquipmentFilterView.prototype, "slotClass", {
    get: function () {
      return __dep_exact_81dacdf05bd32292.getDefinitionByName("CastleEquipment_Item_Z");
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEquipableFilterView.AEquipableFilterView.prototype, "slotClass").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentFilterView.prototype.matches = function (__s40param0, __s40param1) {
    return __s40param0.equipmentVO.id == __s40param1.id;
  };
  Object.defineProperty(EquipmentFilterView.prototype, "filteredInventory", {
    get: function () {
      return this._filteredInventory;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentFilterView.prototype.onEQFilterChanged = function () {
    if (this._eqFilterPanel) {
      if (__dep_export_CastleModel.CastleModel.equipData.playerInventory.filter(this.bindFunction(this.applyFilterAndExcludeHidden)).length > 0 && this.getFilteredInventory().length == 0) {
        this._eqFilterPanel.showEmptyFilterMC();
      } else {
        this._eqFilterPanel.hideEmptyFilterMC();
      }
    }
  };
  return EquipmentFilterView;
}(__dep_export_AEquipableFilterView.AEquipableFilterView);
exports.EquipmentFilterView = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
