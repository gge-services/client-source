Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleAdvancedTroopSelectionEvent = require("gge-module:export_CastleAdvancedTroopSelectionEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AdvancedTroopSelectionDefaultStrategy = require("gge-module:export_AdvancedTroopSelectionDefaultStrategy");
var __dep_export_AdvancedTroopSelectionDefenceStrategy = require("gge-module:export_AdvancedTroopSelectionDefenceStrategy");
var __dep_export_AdvancedTroopSelectionToolStrategy = require("gge-module:export_AdvancedTroopSelectionToolStrategy");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedTroopSelectionComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._currentFightDialogType = 0;
    __s3local0._currentFlank = 0;
    __s3local0.originalY = 0;
    __s3local0.originalHeight = 0;
    __s3local0.offsetPerItem = 26.5;
    __s3local0._disp = __s3param0;
    __s3local0.originalY = __s3param0.y;
    __s3local0.originalHeight = __s3param0.bg.height;
    __s3local0._mergedInventory = [];
    __s3local0._unitScrollList = new __dep_export_CastleAdvancedTroopSelectionItemScrollList.CastleAdvancedTroopSelectionItemScrollList(__s3local0._disp.mc_itemContainerUnits, __s3local0._disp);
    __s3local0._toolScrollList = new __dep_export_CastleAdvancedTroopSelectionItemScrollList.CastleAdvancedTroopSelectionItemScrollList(__s3local0._disp.mc_itemContainerTools, __s3local0._disp);
    __s3local0._unitScrollList.scrollItemClass = __s3local0.unitScrollItemClass;
    __s3local0._toolScrollList.scrollItemClass = __s3local0.toolScrollItemClass;
    __s3local0._unitScrollList.componentDisp.visible = false;
    __s3local0._toolScrollList.componentDisp.visible = false;
    __s3local0._disp.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._disp.btn_ok);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedTroopSelectionComponent, __s1param0);
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "unitScrollItemClass", {
    get: function () {
      return __dep_export_CastleAdvancedUnitSelectionScrollItem.CastleAdvancedUnitSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "toolScrollItemClass", {
    get: function () {
      return __dep_export_CastleAdvancedToolsSelectionScrollItem.CastleAdvancedToolsSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedTroopSelectionComponent.prototype.showToolList = function (__s9param0, __s9param1, __s9param2, __s9param3, __s9param4 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s9param5 = null) {
    this.show(__s9param0, __s9param1, __s9param2, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, __s9param3, __s9param4, __s9param5);
  };
  CastleAdvancedTroopSelectionComponent.prototype.showUnitList = function (__s11param0, __s11param1, __s11param2, __s11param3, __s11param4 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s11param5 = null) {
    this.show(__s11param0, __s11param1, null, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, __s11param3, __s11param4, __s11param5);
  };
  CastleAdvancedTroopSelectionComponent.prototype.show = function (__s13param0, __s13param1, __s13param2, __s13param3, __s13param4, __s13param5 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s13param6 = null) {
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.disp.visible && this.currentList ? this.currentList.currentStartIndex : 0);
    this._disp.visible = true;
    this._originalInventory = __s13param0;
    this._fightItemContainer = __s13param1;
    this._sourceArea = __s13param2;
    this._currentUnitCategory = __s13param3;
    this._parentFightDialog = __s13param4;
    this._currentFightDialogType = this.getFightDialogType();
    this._currentFlank = __s13param5;
    this._selectionStrategy = this.getCurrentStrategy();
    this.showGlow();
    this.resetLists();
    this.updateMergedInventory();
    this.sortInventory();
    if (__s13param6 && __s13param6.unitVO) {
      __s13local0 = this._mergedInventory.findIndex(function (__s16param0) {
        return __s16param0.wodId == __s13param6.unitVO.wodId;
      });
    }
    this.showCurrentList(__s13local0);
    this.adjustListHeight();
  };
  CastleAdvancedTroopSelectionComponent.prototype.getFightDialogType = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleAttackDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_ATTACK;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleDefenceDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleTroopSupportDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_STATION;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleSupportDefenceDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT;
    } else {
      return 0;
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.showGlow = function () {
    var __s25local0 = 3;
    if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
      switch (this._currentFlank) {
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
          __s25local0 = 3;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
          __s25local0 = 2;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
          __s25local0 = 1;
      }
    } else if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      switch (this._currentFlank) {
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
          __s25local0 = 1;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
          __s25local0 = 2;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
          __s25local0 = 1;
      }
    }
    this._disp.bg.gotoAndStop(__s25local0);
  };
  CastleAdvancedTroopSelectionComponent.prototype.updateMergedInventory = function () {
    this._mergedInventory = [];
    for (var __s31local0 = 0; __s31local0 < this._originalInventory.length; __s31local0++) {
      var __s31local1 = this._originalInventory[__s31local0];
      var __s31local2 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s31local1.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
      __s31local2.inventoryAmount = __s31local1.inventoryAmount;
      this._mergedInventory.push(__s31local2);
    }
    for (var __s31local3 = 0, __s31local4 = this._fightItemContainer.items; __s31local3 < __s31local4.length; __s31local3++) {
      var __s31local5 = __s31local4[__s31local3];
      if (__s31local5 !== undefined && __s31local5.unitVO) {
        this.addUnit(__s31local5.getWodId(), __s31local5.getAmount());
      }
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.addUnit = function (__s38param0, __s38param1) {
    var __s38local0 = true;
    if (this._mergedInventory != null) {
      for (var __s38local1 = 0, __s38local2 = this._mergedInventory; __s38local1 < __s38local2.length; __s38local1++) {
        var __s38local3 = __s38local2[__s38local1];
        if (__s38local3 !== undefined && __s38local3.wodId == __s38param0) {
          __s38local3.inventoryAmount += __s38param1;
          __s38local0 = false;
          break;
        }
      }
    }
    if (__s38local0) {
      var __s38local4 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s38param0, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
      __s38local4.inventoryAmount = __s38param1;
      this._mergedInventory.push(__s38local4);
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.addToMergedInventory = function (__s45param0, __s45param1) {
    this.addUnit(__s45param0, __s45param1);
    this.resetLists();
    this.showCurrentList(this.currentList.currentStartIndex);
  };
  CastleAdvancedTroopSelectionComponent.prototype.sortInventory = function () {
    if (this._mergedInventory.length != 0) {
      if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
      } else {
        switch (this._currentFightDialogType) {
          case CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
            this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitAttackPower);
            break;
          case CastleAdvancedTroopSelectionComponent.TYPE_STATION:
            this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitPower);
            break;
          case CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
            this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitDefencePower);
        }
      }
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.resetLists = function () {
    this._unitScrollList.componentDisp.visible = false;
    this._toolScrollList.componentDisp.visible = false;
    this._unitScrollList.clear();
    this._toolScrollList.clear();
    this._unitScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._toolScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._unitScrollList.removeEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this._toolScrollList.removeEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.showCurrentList = function (__s55param0 = 0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.currentHeader));
    this.currentList.componentDisp.visible = true;
    var __s55local0 = 0;
    if (this._mergedInventory != null) {
      for (var __s55local1 = 0, __s55local2 = this._mergedInventory; __s55local1 < __s55local2.length; __s55local1++) {
        var __s55local3 = __s55local2[__s55local1];
        if (__s55local3 !== undefined) {
          __s55local0 = __dep_exact_f855840627e6e145.int(this._fightItemContainer.getTotalAmountOfUntit(__s55local3));
          var __s55local4 = this.getPossibleSlots(__s55local3);
          var __s55local5 = __dep_exact_f855840627e6e145.int(Math.min(this.getMaximumSpace(__s55local3), this._fightItemContainer.freeItems, this.getFreeSpaceFromPossibleSlots(__s55local3, __s55local4)));
          this.currentList.pushContent(new __dep_export_CastleAdvancedTroopSelectionScrollItemVO.CastleAdvancedTroopSelectionScrollItemVO(__s55local3, __s55local0, this._sourceArea, this._currentFightDialogType, __s55local4, __s55local5));
        }
      }
    }
    this.currentList.initList(__s55param0);
    this.currentList.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.addEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.getPossibleSlots = function (__s61param0) {
    var __s61local0 = this.currentCapPerSlot;
    var __s61local1 = [];
    var __s61local2 = [];
    var __s61local3 = this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE && (this._fightItemContainer.getTotalAmountOfUntit(__s61param0) > 0 || this._fightItemContainer.hasFreeSlotsForUnit(__s61param0));
    for (var __s61local4 = 0; __s61local4 < this._fightItemContainer.items.length; __s61local4++) {
      var __s61local5 = this._fightItemContainer.items[__s61local4];
      if (__s61param0.isToolForSlotType(__s61local5.slotType) && __s61local5.isUnlocked()) {
        if (__s61local5.isFree() || __s61local5.getWodId() == __s61param0.wodId) {
          __s61local2.push(__s61local5);
        } else if (!__s61local3) {
          var __s61local6 = false;
          var __s61local7 = __dep_exact_f855840627e6e145.int(this._fightItemContainer.getTotalAmountOfUntit(__s61local5.unitVO));
          var __s61local8 = 0;
          for (var __s61local9 = 0; __s61local9 < __s61local1.length; __s61local9++) {
            var __s61local10 = __s61local1[__s61local9];
            if (__s61local5.getWodId() == __s61local10.getWodId() && __s61local7 <= ++__s61local8 * __s61local0) {
              __s61local6 = true;
              __s61local8 = 0;
              break;
            }
          }
          if (__s61local6) {
            __s61local2.push(__s61local5);
          }
          __s61local1.push(__s61local5);
        }
      }
    }
    return __s61local2;
  };
  CastleAdvancedTroopSelectionComponent.prototype.getMaximumSpace = function (__s72param0) {
    var __s72local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s72param0, "ToolUnitVO")) {
      var __s72local1 = __s72param0;
      if (__s72local1.hasLimitedAmountPerWave && this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
        __s72local0 = __dep_exact_f855840627e6e145.int(this._parentFightDialog.isMaxAmountPerWaveReached(__s72local1) ? 0 : __s72local1.amountPerWave);
      }
    }
    return Math.min(this._fightItemContainer.freeItems, __s72local0);
  };
  CastleAdvancedTroopSelectionComponent.prototype.getFreeSpaceFromPossibleSlots = function (__s76param0, __s76param1) {
    var __s76local0 = 0;
    var __s76local1 = this.currentCapPerSlot;
    if (__s76local1 == Number.MAX_VALUE) {
      return __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    }
    if (__s76param1 != null) {
      for (var __s76local2 = 0, __s76local3 = __s76param1; __s76local2 < __s76local3.length; __s76local2++) {
        var __s76local4 = __s76local3[__s76local2];
        if (__s76local4 !== undefined) {
          if (__s76local4.getWodId() == __s76param0.wodId) {
            __s76local0 += __s76local1 - __s76local4.getAmount();
          } else {
            __s76local0 += __s76local1;
            if (!__s76local4.isFree() && this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
              break;
            }
          }
        }
      }
    }
    return __s76local0;
  };
  CastleAdvancedTroopSelectionComponent.prototype.adjustListHeight = function () {
    if (this.isScaleAble()) {
      var __s86local0 = __dep_exact_f855840627e6e145.int(Math.max(0, this.currentList.itemsVisibleAtOnce - Math.max(this.currentList.voList.length, CastleAdvancedTroopSelectionComponent.MIN_LISTITEMS)));
      this._disp.y = this.originalY + __s86local0 * this.offsetPerItem;
      this._disp.bg.height = this.originalHeight - __s86local0 * this.offsetPerItem;
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        this._disp.scaleX = this._disp.scaleY = 1.7;
        this._disp.y += 40;
      }
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.onScrollItemClick = function (__s90param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s90param0.target)) {
      switch (__s90param0.originTarget) {
        case __s90param0.scrollItem.disp.mc_selection.btn_remove:
          var __s90local0 = __s90param0.scrollItem.troopSelectionScrollItemVO;
          this._selectionStrategy.changeAmount(__s90local0.unitVO, 0, this._fightItemContainer, __s90local0.possibleSlots, this._parentFightDialog.bindFunction(this._parentFightDialog.changeItemAmount));
          this.updateLimits();
          break;
        case __s90param0.scrollItem.disp.btn_instantBuy:
          this._parentFightDialog.showInstantBuyDialog(__s90param0.scrollItem.troopSelectionScrollItemVO.unitVO);
      }
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.onUnitSelectionChanged = function (__s94param0) {
    var __s94local0 = __s94param0.scrollItem.troopSelectionScrollItemVO;
    this._selectionStrategy.changeAmount(__s94local0.unitVO, __s94local0.selectedAmount, this._fightItemContainer, __s94local0.possibleSlots, this._parentFightDialog.bindFunction(this._parentFightDialog.changeItemAmount));
    this.updateLimits();
  };
  CastleAdvancedTroopSelectionComponent.prototype.updateLimits = function () {
    for (var __s96local0 = 0, __s96local1 = this.currentList.voList; __s96local0 < __s96local1.length; __s96local0++) {
      var __s96local2 = __s96local1[__s96local0];
      if (__s96local2 !== undefined) {
        __s96local2.possibleSlots = this.getPossibleSlots(__s96local2.unitVO);
        var __s96local3 = __dep_exact_f855840627e6e145.int(Math.min(this.getMaximumSpace(__s96local2.unitVO), this.getFreeSpaceFromPossibleSlots(__s96local2.unitVO, __s96local2.possibleSlots)));
        __s96local2.freeUnitSpace = __s96local3;
      }
    }
    this.currentList.removeEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this.currentList.updateLimits();
    this.currentList.addEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.hide = function () {
    this._disp.visible = false;
    this.currentList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.removeEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.getCurrentStrategy = function () {
    if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      return new __dep_export_AdvancedTroopSelectionDefenceStrategy.AdvancedTroopSelectionDefenceStrategy();
    } else if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      return new __dep_export_AdvancedTroopSelectionToolStrategy.AdvancedTroopSelectionToolStrategy();
    } else {
      return new __dep_export_AdvancedTroopSelectionDefaultStrategy.AdvancedTroopSelectionDefaultStrategy();
    }
  };
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentList", {
    get: function () {
      if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
        return this._unitScrollList;
      } else {
        return this._toolScrollList;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentHeader", {
    get: function () {
      if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
        return "dialog_attack_placeUnits";
      } else {
        return "dialog_attack_placeTools";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentCapPerSlot", {
    get: function () {
      if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
        return __dep_exact_26a421b704832cff.DefenseConst.MAX_SLOTSIZE;
      } else if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        return __dep_exact_26a421b704832cff.TravelConst.MAX_TOOLS_PER_SLOT;
      } else {
        return Number.MAX_VALUE;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedTroopSelectionComponent.prototype.isScaleAble = function () {
    return true;
  };
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentUnitCategory", {
    get: function () {
      return this._currentUnitCategory;
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedTroopSelectionComponent.prototype.isListEmpty = function () {
    return !!this.currentList && this.currentList.voList.length == 0;
  };
  CastleAdvancedTroopSelectionComponent.TYPE_ATTACK = 0;
  CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE = 1;
  CastleAdvancedTroopSelectionComponent.TYPE_STATION = 2;
  CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT = 3;
  CastleAdvancedTroopSelectionComponent.MIN_LISTITEMS = 3;
  return CastleAdvancedTroopSelectionComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleAdvancedTroopSelectionComponent = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleAdvancedToolsSelectionScrollItem = require("gge-module:export_CastleAdvancedToolsSelectionScrollItem");
var __dep_export_CastleAdvancedTroopSelectionItemScrollList = require("gge-module:export_CastleAdvancedTroopSelectionItemScrollList");
var __dep_export_CastleAdvancedTroopSelectionScrollItemVO = require("gge-module:export_CastleAdvancedTroopSelectionScrollItemVO");
var __dep_export_CastleAdvancedUnitSelectionScrollItem = require("gge-module:export_CastleAdvancedUnitSelectionScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
