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
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AdvancedTroopSelectionDefaultStrategy = require("gge-module:export_AdvancedTroopSelectionDefaultStrategy");
var __dep_export_AdvancedTroopSelectionDefenceStrategy = require("gge-module:export_AdvancedTroopSelectionDefenceStrategy");
var __dep_export_AdvancedTroopSelectionToolStrategy = require("gge-module:export_AdvancedTroopSelectionToolStrategy");
var __dep_export_CastleAdvancedToolsSelectionScrollItem = require("gge-module:export_CastleAdvancedToolsSelectionScrollItem");
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_CastleAdvancedTroopSelectionScrollItemVO = require("gge-module:export_CastleAdvancedTroopSelectionScrollItemVO");
var __dep_export_CastleAdvancedUnitSelectionScrollItem = require("gge-module:export_CastleAdvancedUnitSelectionScrollItem");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialog = require("gge-module:export_AttackDialog");
var __dep_export_AttackDialogWaveHandlerSoldierPickInfiniteItem = require("gge-module:export_AttackDialogWaveHandlerSoldierPickInfiniteItem");
var __dep_export_AttackDialogWaveHandlerToolPickInfiniteItem = require("gge-module:export_AttackDialogWaveHandlerToolPickInfiniteItem");
var __dep_export_CastleAdvancedTroopSelectionInfiniteEvent = require("gge-module:export_CastleAdvancedTroopSelectionInfiniteEvent");
var __dep_export_CastleAdvancedTroopSelectionItemInfiniteScrollList = require("gge-module:export_CastleAdvancedTroopSelectionItemInfiniteScrollList");
var __s0local0 = function (__s1param0) {
  function AAdvancedTroopSelectionComponent(__s3param0) {
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
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AttackDialogWaveHandlerSoldierPickInfiniteItem.AttackDialogWaveHandlerSoldierPickInfiniteItem, "Attack_list_item_selection_unit", __dep_export_AttackDialog.AttackDialog.NAME);
    __s3local1.itemPaddingY = -2;
    __s3local1.useSmoothScroll = true;
    __s3local0._unitScrollList = new __dep_export_CastleAdvancedTroopSelectionItemInfiniteScrollList.CastleAdvancedTroopSelectionItemInfiniteScrollList(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0._disp.mc_itemContainerUnits).addMaskMc(__s3local0._disp.mc_itemContainerUnits.mc_mask).addItemContainerMc(__s3local0._disp.mc_itemContainerUnits.mc_items).addSliderMc(__s3local0._disp.mc_itemContainerUnits.mc_slider), __s3local1);
    var __s3local2 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AttackDialogWaveHandlerToolPickInfiniteItem.AttackDialogWaveHandlerToolPickInfiniteItem, "Attack_list_item_selection_tool", __dep_export_AttackDialog.AttackDialog.NAME);
    __s3local2.itemPaddingY = -2;
    __s3local2.useSmoothScroll = true;
    __s3local0._toolScrollList = new __dep_export_CastleAdvancedTroopSelectionItemInfiniteScrollList.CastleAdvancedTroopSelectionItemInfiniteScrollList(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0._disp.mc_itemContainerTools).addMaskMc(__s3local0._disp.mc_itemContainerTools.mc_mask).addItemContainerMc(__s3local0._disp.mc_itemContainerTools.mc_items).addSliderMc(__s3local0._disp.mc_itemContainerTools.mc_slider), __s3local2);
    __s3local0._disp.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._disp.btn_ok);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAdvancedTroopSelectionComponent, __s1param0);
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "unitScrollItemClass", {
    get: function () {
      return __dep_export_CastleAdvancedUnitSelectionScrollItem.CastleAdvancedUnitSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "toolScrollItemClass", {
    get: function () {
      return __dep_export_CastleAdvancedToolsSelectionScrollItem.CastleAdvancedToolsSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  AAdvancedTroopSelectionComponent.prototype.showToolList = function (__s9param0, __s9param1, __s9param2, __s9param3, __s9param4 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s9param5 = null) {
    this.show(__s9param0, __s9param1, __s9param2, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, __s9param3, __s9param4, __s9param5);
  };
  AAdvancedTroopSelectionComponent.prototype.showUnitList = function (__s11param0, __s11param1, __s11param2, __s11param3, __s11param4 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s11param5 = null) {
    this.show(__s11param0, __s11param1, null, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, __s11param3, __s11param4, __s11param5);
  };
  AAdvancedTroopSelectionComponent.prototype.show = function (__s13param0, __s13param1, __s13param2, __s13param3, __s13param4, __s13param5 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s13param6 = null) {
    this._disp.visible = true;
    this._originalInventory = __s13param0;
    this._fightItemContainer = __s13param1;
    this._sourceArea = __s13param2;
    this._currentUnitCategory = __s13param3;
    this._parentFightDialog = __s13param4;
    this._currentFightDialogType = this.getFightDialogType();
    this._currentFlank = __s13param5;
    this._selectionStrategy = this.getCurrentStrategy();
    var __s13local0 = this.getStartScrollValue();
    this.showGlow();
    this.resetLists();
    this.updateMergedInventory();
    this.sortInventory();
    var __s13local1 = 0;
    if (__s13param6 && __s13param6.unitVO) {
      __s13local1 = this._mergedInventory.findIndex(function (__s16param0) {
        return __s16param0.wodId == __s13param6.unitVO.wodId;
      });
    }
    this.showCurrentList(__s13local1, __s13local0);
  };
  AAdvancedTroopSelectionComponent.prototype.getStartScrollValue = function () {
    return __dep_exact_f855840627e6e145.int(this.disp.visible && this.currentList ? this.currentList.scrollComponent.currentValue : -1);
  };
  AAdvancedTroopSelectionComponent.prototype.getFightDialogType = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleAttackDialog")) {
      return __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleDefenceDialog")) {
      return __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleTroopSupportDialog")) {
      return __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_STATION;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._parentFightDialog, "CastleSupportDefenceDialog")) {
      return __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT;
    } else {
      return 0;
    }
  };
  AAdvancedTroopSelectionComponent.prototype.showGlow = function () {
    var __s27local0 = 3;
    if (this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
      switch (this._currentFlank) {
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
          __s27local0 = 3;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
          __s27local0 = 2;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
          __s27local0 = 1;
      }
    } else if (this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      switch (this._currentFlank) {
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
          __s27local0 = 1;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
          __s27local0 = 2;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
          __s27local0 = 1;
      }
    }
    this._disp.bg.gotoAndStop(__s27local0);
  };
  AAdvancedTroopSelectionComponent.prototype.updateMergedInventory = function () {
    this._mergedInventory = [];
    for (var __s33local0 = 0; __s33local0 < this._originalInventory.length; __s33local0++) {
      var __s33local1 = this._originalInventory[__s33local0];
      var __s33local2 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s33local1.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
      __s33local2.inventoryAmount = __s33local1.inventoryAmount;
      this._mergedInventory.push(__s33local2);
    }
    for (var __s33local3 = 0, __s33local4 = this._fightItemContainer.items; __s33local3 < __s33local4.length; __s33local3++) {
      var __s33local5 = __s33local4[__s33local3];
      if (__s33local5 !== undefined && __s33local5.unitVO) {
        this.addUnit(__s33local5.getWodId(), __s33local5.getAmount());
      }
    }
  };
  AAdvancedTroopSelectionComponent.prototype.addUnit = function (__s40param0, __s40param1) {
    var __s40local0 = true;
    if (this._mergedInventory != null) {
      for (var __s40local1 = 0, __s40local2 = this._mergedInventory; __s40local1 < __s40local2.length; __s40local1++) {
        var __s40local3 = __s40local2[__s40local1];
        if (__s40local3 !== undefined && __s40local3.wodId == __s40param0) {
          __s40local3.inventoryAmount += __s40param1;
          __s40local0 = false;
          break;
        }
      }
    }
    if (__s40local0) {
      var __s40local4 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s40param0, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
      __s40local4.inventoryAmount = __s40param1;
      this._mergedInventory.push(__s40local4);
    }
  };
  AAdvancedTroopSelectionComponent.prototype.addToMergedInventory = function (__s47param0, __s47param1) {
    this.addUnit(__s47param0, __s47param1);
    this.resetLists();
    this.showCurrentList(-1, this.currentList.scrollComponent.currentValue);
  };
  AAdvancedTroopSelectionComponent.prototype.sortInventory = function () {
    if (this._mergedInventory.length != 0) {
      if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
      } else {
        switch (this._currentFightDialogType) {
          case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
            this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitAttackPower);
            break;
          case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_STATION:
            this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitPower);
            break;
          case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
            this._mergedInventory.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitDefencePower);
        }
      }
    }
  };
  AAdvancedTroopSelectionComponent.prototype.resetLists = function () {
    this._unitScrollList.setVisibility(false);
    this._toolScrollList.setVisibility(false);
    this._unitScrollList.onHide();
    this._toolScrollList.onHide();
    this._unitScrollList.dispatcher.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._toolScrollList.dispatcher.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._unitScrollList.dispatcher.removeEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this._toolScrollList.dispatcher.removeEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.showCurrentList = function (__s57param0 = 0, __s57param1 = -1) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.currentHeader));
    this.currentList.setVisibility(true);
    var __s57local0 = 0;
    var __s57local1 = [];
    if (this._mergedInventory != null) {
      for (var __s57local2 = 0, __s57local3 = this._mergedInventory; __s57local2 < __s57local3.length; __s57local2++) {
        var __s57local4 = __s57local3[__s57local2];
        if (__s57local4 !== undefined) {
          __s57local0 = __dep_exact_f855840627e6e145.int(this._fightItemContainer.getTotalAmountOfUntit(__s57local4));
          var __s57local5 = this.getPossibleSlots(__s57local4);
          var __s57local6 = __dep_exact_f855840627e6e145.int(Math.min(this.getMaximumSpace(__s57local4), this._fightItemContainer.freeItems, this.getFreeSpaceFromPossibleSlots(__s57local4, __s57local5)));
          __s57local1.push(new __dep_export_CastleAdvancedTroopSelectionScrollItemVO.CastleAdvancedTroopSelectionScrollItemVO(__s57local4, __s57local0, this._sourceArea, this._currentFightDialogType, __s57local5, __s57local6));
        }
      }
    }
    this.currentList.onHide();
    this.currentList.onShow();
    this.currentList.updateWithNewData(__s57local1, __s57param0 == 0 && __s57param1 == -1);
    if (__s57param0 > 0) {
      this.currentList.instantTweenFlag = true;
      this.currentList.scrollToData(__s57param0);
    } else if (__s57param1 > -1) {
      this.currentList.instantTweenFlag = true;
      this.currentList.scrollComponent.scrollToValue(__s57param1);
    }
    this.currentList.dispatcher.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.dispatcher.addEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.getPossibleSlots = function (__s65param0) {
    var __s65local0 = this.currentCapPerSlot;
    var __s65local1 = [];
    var __s65local2 = [];
    var __s65local3 = this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE && (this._fightItemContainer.getTotalAmountOfUntit(__s65param0) > 0 || this._fightItemContainer.hasFreeSlotsForUnit(__s65param0));
    for (var __s65local4 = 0; __s65local4 < this._fightItemContainer.items.length; __s65local4++) {
      var __s65local5 = this._fightItemContainer.items[__s65local4];
      if (__s65param0.isToolForSlotType(__s65local5.slotType) && __s65local5.isUnlocked()) {
        if (__s65local5.isFree() || __s65local5.getWodId() == __s65param0.wodId) {
          __s65local2.push(__s65local5);
        } else if (!__s65local3) {
          var __s65local6 = false;
          var __s65local7 = __dep_exact_f855840627e6e145.int(this._fightItemContainer.getTotalAmountOfUntit(__s65local5.unitVO));
          var __s65local8 = 0;
          for (var __s65local9 = 0; __s65local9 < __s65local1.length; __s65local9++) {
            var __s65local10 = __s65local1[__s65local9];
            if (__s65local5.getWodId() == __s65local10.getWodId() && __s65local7 <= ++__s65local8 * __s65local0) {
              __s65local6 = true;
              __s65local8 = 0;
              break;
            }
          }
          if (__s65local6) {
            __s65local2.push(__s65local5);
          }
          __s65local1.push(__s65local5);
        }
      }
    }
    return __s65local2;
  };
  AAdvancedTroopSelectionComponent.prototype.getMaximumSpace = function (__s76param0) {
    var __s76local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s76param0, "ToolUnitVO")) {
      var __s76local1 = __s76param0;
      if (__s76local1.hasLimitedAmountPerWave && this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
        __s76local0 = __dep_exact_f855840627e6e145.int(this._parentFightDialog.isMaxAmountPerWaveReached(__s76local1) ? 0 : __s76local1.amountPerWave);
      }
    }
    return Math.min(this._fightItemContainer.freeItems, __s76local0);
  };
  AAdvancedTroopSelectionComponent.prototype.getFreeSpaceFromPossibleSlots = function (__s80param0, __s80param1) {
    var __s80local0 = 0;
    var __s80local1 = this.currentCapPerSlot;
    if (__s80local1 == Number.MAX_VALUE) {
      return __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    }
    if (__s80param1 != null) {
      for (var __s80local2 = 0, __s80local3 = __s80param1; __s80local2 < __s80local3.length; __s80local2++) {
        var __s80local4 = __s80local3[__s80local2];
        if (__s80local4 !== undefined) {
          if (__s80local4.getWodId() == __s80param0.wodId) {
            __s80local0 += __s80local1 - __s80local4.getAmount();
          } else {
            __s80local0 += __s80local1;
            if (!__s80local4.isFree() && this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
              break;
            }
          }
        }
      }
    }
    return __s80local0;
  };
  AAdvancedTroopSelectionComponent.prototype.onScrollItemClick = function (__s90param0) {
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
  AAdvancedTroopSelectionComponent.prototype.onUnitSelectionChanged = function (__s94param0) {
    var __s94local0 = __s94param0.scrollItem.troopSelectionScrollItemVO;
    this._selectionStrategy.changeAmount(__s94local0.unitVO, __s94local0.selectedAmount, this._fightItemContainer, __s94local0.possibleSlots, this._parentFightDialog.bindFunction(this._parentFightDialog.changeItemAmount));
    this.updateLimits();
  };
  AAdvancedTroopSelectionComponent.prototype.updateLimits = function () {
    for (var __s96local0 = 0, __s96local1 = this.currentList.dataList; __s96local0 < __s96local1.length; __s96local0++) {
      var __s96local2 = __s96local1[__s96local0];
      if (__s96local2 !== undefined) {
        __s96local2.possibleSlots = this.getPossibleSlots(__s96local2.unitVO);
        var __s96local3 = __dep_exact_f855840627e6e145.int(Math.min(this.getMaximumSpace(__s96local2.unitVO), this.getFreeSpaceFromPossibleSlots(__s96local2.unitVO, __s96local2.possibleSlots)));
        __s96local2.freeUnitSpace = __s96local3;
      }
    }
    this.currentList.dispatcher.removeEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this.currentList.updateLimits();
    this.currentList.dispatcher.addEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.hide = function () {
    this._disp.visible = false;
    this.currentList.dispatcher.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.dispatcher.removeEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.getCurrentStrategy = function () {
    if (this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      return new __dep_export_AdvancedTroopSelectionDefenceStrategy.AdvancedTroopSelectionDefenceStrategy();
    } else if (this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      return new __dep_export_AdvancedTroopSelectionToolStrategy.AdvancedTroopSelectionToolStrategy();
    } else {
      return new __dep_export_AdvancedTroopSelectionDefaultStrategy.AdvancedTroopSelectionDefaultStrategy();
    }
  };
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentList", {
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
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentHeader", {
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
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentCapPerSlot", {
    get: function () {
      if (this._currentFightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
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
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentUnitCategory", {
    get: function () {
      return this._currentUnitCategory;
    },
    enumerable: true,
    configurable: true
  });
  AAdvancedTroopSelectionComponent.prototype.isListEmpty = function () {
    return !!this.currentList && this.currentList.dataList.length == 0;
  };
  AAdvancedTroopSelectionComponent.TYPE_ATTACK = 0;
  AAdvancedTroopSelectionComponent.TYPE_DEFENCE = 1;
  AAdvancedTroopSelectionComponent.TYPE_STATION = 2;
  AAdvancedTroopSelectionComponent.TYPE_SUPPORT = 3;
  return AAdvancedTroopSelectionComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.AAdvancedTroopSelectionComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
