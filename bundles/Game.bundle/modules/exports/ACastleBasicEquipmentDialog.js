Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_EquipmentScrollItem = require("gge-module:export_EquipmentScrollItem");
var __dep_export_EquipmentScrollItemVO = require("gge-module:export_EquipmentScrollItemVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function ACastleBasicEquipmentDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentListPage = 0;
    __s3local0._itemListLocked = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleBasicEquipmentDialog, __s1param0);
  ACastleBasicEquipmentDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this._currentListPage = 0;
  };
  ACastleBasicEquipmentDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._currentListPage = 0;
  };
  ACastleBasicEquipmentDialog.prototype.initScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.remove();
      for (var __s9local0 = 0, __s9local1 = this._itemScrollList.voList; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          this._itemScrollList.removeContent(__s9local2);
        }
      }
      this.removeItemListListener();
    }
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp.mc_equipmentList);
    this._itemScrollList.clear();
    this._itemScrollList.scrollItemClass = __dep_export_EquipmentScrollItem.EquipmentScrollItem;
    for (var __s9local3 = 0; __s9local3 < this._filteredInventory.length; __s9local3++) {
      var __s9local4 = new __dep_export_EquipmentScrollItemVO.EquipmentScrollItemVO();
      __s9local4.equipmentVO = this._filteredInventory[__s9local3];
      __s9local4.locked = __s9local4.equipmentVO.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s9local4.equipmentVO.visualRareID);
      __s9local4.favIconByEQRenderer = this.favIconByEQRenderer;
      this._itemScrollList.pushContent(__s9local4);
    }
    if (this._itemScrollList.voList && this._currentListPage * this._itemScrollList.itemsVisibleAtOnce >= this._itemScrollList.voList.length) {
      if (this._currentListPage > 0 && this._currentListPage * this._itemScrollList.itemsVisibleAtOnce % this._itemScrollList.voList.length == 0) {
        this._currentListPage--;
      } else {
        this._currentListPage = 0;
      }
    }
    this._itemScrollList.initList(this._currentListPage * this._itemScrollList.itemsVisibleAtOnce, true);
    this._itemScrollList.scrollStep = this._itemScrollList.itemsVisibleAtOnce;
    if (this._itemListLocked) {
      this._itemScrollList.lockList();
    } else {
      this._itemScrollList.unlockList();
    }
    this.addItemListListener();
  };
  Object.defineProperty(ACastleBasicEquipmentDialog.prototype, "favIconByEQRenderer", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBasicEquipmentDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    switch (__s24param0.target) {
      case this.dialogDisp.mc_equipmentList.btn_up:
        this._currentListPage--;
        break;
      case this.dialogDisp.mc_equipmentList.btn_down:
        this._currentListPage++;
    }
  };
  ACastleBasicEquipmentDialog.prototype.addItemListListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onScrollItemRollover));
      this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onScrollItemRollout));
      this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListScroll));
    }
  };
  ACastleBasicEquipmentDialog.prototype.removeItemListListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onScrollItemRollover));
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onScrollItemRollout));
      this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListScroll));
    }
  };
  ACastleBasicEquipmentDialog.prototype.onScrollListScroll = function (__s33param0) {};
  ACastleBasicEquipmentDialog.prototype.onScrollItemClick = function (__s35param0) {};
  ACastleBasicEquipmentDialog.prototype.onScrollItemRollover = function (__s37param0) {};
  ACastleBasicEquipmentDialog.prototype.onScrollItemRollout = function (__s39param0) {};
  ACastleBasicEquipmentDialog.prototype.getFilteredInventory = function (__s41param0, __s41param1) {
    this._currentSlotFilter = __s41param0;
    this._currentLordFilter = __s41param1;
    var __s41local0 = [];
    for (var __s41local1 = 0; __s41local1 < this._equipmentInventory.length; __s41local1++) {
      var __s41local2 = this._equipmentInventory[__s41local1];
      if (__s41param0 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL && __s41param1 == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_ALL) {
        __s41local0.push(__s41local2);
      } else if (__s41param0 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL && __s41local2.lordType == __s41param1) {
        __s41local0.push(__s41local2);
      } else if (__s41local2.slotType == __s41param0 && __s41param1 == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_ALL) {
        __s41local0.push(__s41local2);
      } else if (__s41local2.slotType == __s41param0 && __s41local2.lordType == __s41param1) {
        __s41local0.push(__s41local2);
      }
    }
    __dep_exact_9e901e8e2483a22f_2.VectorSortHelper.sort(__s41local0, this.bindFunction(this.sortFunction));
    return __s41local0;
  };
  ACastleBasicEquipmentDialog.prototype.sortFunction = function (__s49param0, __s49param1) {
    if (__s49param0.rareID == 0) {
      return -1;
    } else if (__s49param1.rareID == 0) {
      return 1;
    } else if (__s49param0.rareID > __s49param1.rareID) {
      return -1;
    } else if (__s49param0.rareID < __s49param1.rareID) {
      return 1;
    } else if (__s49param0.enchantmentLevel > __s49param1.enchantmentLevel) {
      return -1;
    } else if (__s49param0.enchantmentLevel < __s49param1.enchantmentLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  ACastleBasicEquipmentDialog.prototype.hideLoaded = function (__s58param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s58param0);
    this.removeItemListListener();
  };
  Object.defineProperty(ACastleBasicEquipmentDialog.prototype, "equipmentInventory", {
    get: function () {
      return this._equipmentInventory;
    },
    set: function (__s62param0) {
      this._equipmentInventory = __s62param0;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleBasicEquipmentDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ACastleBasicEquipmentDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
