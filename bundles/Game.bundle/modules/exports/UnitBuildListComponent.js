Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SMoveUnitPackageVO = require("gge-module:export_C2SMoveUnitPackageVO");
var __dep_export_C2SUnlockPackageSlotVO = require("gge-module:export_C2SUnlockPackageSlotVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_BasicBuildListComponent = require("gge-module:export_BasicBuildListComponent");
var __dep_export_CastleCostInfoDialogProperties = require("gge-module:export_CastleCostInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function UnitBuildListComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.previousLastUsedSlot = -1;
    __s3local0._preventNextDynamicPreselection = false;
    __s3local0._activeSlotIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, 5) || this).category = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitBuildListComponent, __s1param0);
  UnitBuildListComponent.prototype.createBuildListItem = function () {
    return new __dep_export_UnitBuildListItem.UnitBuildListItem(new Library.CastleInterfaceElements.RecruitListItem());
  };
  UnitBuildListComponent.prototype.initBuildListItem = function (__s7param0) {
    __s1param0.prototype.initBuildListItem.call(this, __s7param0);
    __s7param0.initItem();
  };
  UnitBuildListComponent.prototype.setCategory = function (__s9param0) {
    this.category = __s9param0;
  };
  UnitBuildListComponent.prototype.getCategory = function () {
    return this.category;
  };
  UnitBuildListComponent.prototype.isCategorySoldier = function () {
    return this.category == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS || this.category == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
  };
  UnitBuildListComponent.prototype.setItemTooltip = function (__s15param0) {
    __s15param0.disp.toolTipText = null;
    if (__s15param0.slotVO.isLocked) {
      if (__s15param0.isAvailable) {
        __s15param0.disp.toolTipText = this.isCategorySoldier() ? "dialog_recuit_recruitSlot" : "dialog_recuit_productionSlot";
      } else {
        __s15param0.disp.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
      }
    } else if (__s15param0.slotVO.isFree) {
      if (__s15param0.slotVO.isAlwaysUnlocked) {
        __s15param0.disp.toolTipText = "recruitSlot_available";
      } else {
        __s15param0.disp.toolTipText = "remaining_renttime_slot" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s15param0.slotVO.remainingUnlockTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)].toString();
      }
    } else if (__s15param0.slotVO.isCurrentlyRecruiting) {
      var __s15local0 = this.isCategorySoldier() ? "recruitSlot_occupied" : "productionSlot_occupied";
      __s15param0.disp.toolTipText = {
        t: __s15local0,
        p: [__dep_exact_92d05af59ee2ff30.Localize.text(__s15param0.slotVO.unitVO.type + "_name")]
      };
    } else {
      var __s15local1 = this.isCategorySoldier() ? "recruitSlot_occupied_queue" : "productionSlot_occupied_queue";
      __s15param0.disp.toolTipText = {
        t: __s15local1,
        p: [__dep_exact_92d05af59ee2ff30.Localize.text(__s15param0.slotVO.unitVO.type + "_name")]
      };
    }
  };
  UnitBuildListComponent.prototype.onItemClick = function (__s25param0) {
    var __s25local0 = __s25param0.target.bItem;
    if (!__s25local0.isLocked && !__s25local0.isFree) {
      this.selectedSlot = __s25local0.slotVO.pos;
      this._preventNextDynamicPreselection = false;
    }
    __s1param0.prototype.onItemClick.call(this, __s25param0);
  };
  UnitBuildListComponent.prototype.onItemMouseUp = function (__s28param0) {
    if (!!this._selectedDragItem && !this._selectedDragItem.isLocked && !this._selectedDragItem.isFree) {
      this.selectedSlot = this._selectedDragItem.slotVO.pos;
      this._preventNextDynamicPreselection = false;
    }
    __s1param0.prototype.onItemMouseUp.call(this, __s28param0);
  };
  UnitBuildListComponent.prototype.onItemLockedClick = function (__s31param0) {
    if (__dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_UNLOCK_RECRUIT_SLOT)) {
      var __s31local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_DURATION);
      var __s31local1 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s31local0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
      var __s31local2 = this.isCategorySoldier() ? "dialog_buyslotUnit_copy" : "dialog_buyslotTool_copy";
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuySlotDialog.CastleBuySlotDialog, new __dep_export_CastleCostInfoDialogProperties.CastleCostInfoDialogProperties(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.buySlot), __dep_exact_92d05af59ee2ff30.Localize.text(__s31local2), __s31local1, __dep_exact_92d05af59ee2ff30.Localize.text("help_recuit_slot")));
    }
  };
  UnitBuildListComponent.prototype.buySlot = function (__s34param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockPackageSlotVO.C2SUnlockPackageSlotVO(this.unitPackageList.listId));
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "unitPackageList", {
    get: function () {
      return this._buildlist;
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListComponent.prototype.isUnitPackageListLoaded = function () {
    return !!this.unitPackageList;
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "isItemDraggable", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicBuildListComponent.BasicBuildListComponent.prototype, "isItemDraggable").get.call(this);
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicBuildListComponent.BasicBuildListComponent.prototype, "isItemDraggable").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListComponent.prototype.requestMoveFromServer = function (__s44param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMoveUnitPackageVO.C2SMoveUnitPackageVO(this.unitPackageList.listId, __s44param0.oldPos, __s44param0.pos));
  };
  UnitBuildListComponent.prototype.onMouseOverItem = function (__s46param0) {
    this.setItemTooltip(__s46param0.target.bItem);
    __s1param0.prototype.onMouseOverItem.call(this, __s46param0);
  };
  UnitBuildListComponent.prototype.isCurrentBuildingUnit = function (__s48param0) {
    if (!this._items) {
      return false;
    }
    for (var __s48local0 = 0; __s48local0 < this._items.length; ++__s48local0) {
      if (this._items[__s48local0] && !this._items[__s48local0].isLocked && this._items[__s48local0].unitPackageSlotVO && this._items[__s48local0].unitPackageSlotVO.wodId == __s48param0 && this._items[__s48local0].unitPackageSlotVO.remainingTimeInSeconds > 0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "lastUsedSlotIndex", {
    get: function () {
      return this._buildlist.slotsInUse - 1;
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListComponent.prototype.fillItems = function (__s56param0, __s56param1 = 0) {
    __s1param0.prototype.fillItems.call(this, __s56param0, __s56param1);
    if (this.lastUsedSlotIndex > 0) {
      var __s56local0 = this.lastUsedSlotIndex - this.previousLastUsedSlot;
      if (__s56local0 > 0 || this.selectedSlot == -1) {
        this.selectedSlot = this.lastUsedSlotIndex;
      } else if (!this._preventNextDynamicPreselection) {
        this.selectedSlot = Math.max(this.selectedSlot + __s56local0, 0);
      }
    } else {
      this.selectedSlot = this.lastUsedSlotIndex;
    }
    this.previousLastUsedSlot = __dep_exact_f855840627e6e145.int(this._buildlist ? this.lastUsedSlotIndex : -1);
    this._preventNextDynamicPreselection = false;
  };
  UnitBuildListComponent.prototype.preventNextDynamicPreselection = function () {
    this._preventNextDynamicPreselection = true;
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "activeSlotIndex", {
    set: function (__s64param0) {
      if (this._items) {
        this._activeSlotIndex = __s64param0;
        for (var __s64local0 = 0; __s64local0 < this._items.length; __s64local0++) {
          this._items[__s64local0].setIcons();
        }
        this.selectedSlot = this._activeSlotIndex;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListComponent.prototype, "freeSlots", {
    get: function () {
      return this.unitPackageList.numFreeSlots;
    },
    enumerable: true,
    configurable: true
  });
  return UnitBuildListComponent;
}(__dep_export_BasicBuildListComponent.BasicBuildListComponent);
exports.UnitBuildListComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuySlotDialog = require("gge-module:export_CastleBuySlotDialog");
var __dep_export_UnitBuildListItem = require("gge-module:export_UnitBuildListItem");
