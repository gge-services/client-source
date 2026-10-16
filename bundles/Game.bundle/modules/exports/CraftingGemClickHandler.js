Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGemLevelInfoVO = require("gge-module:export_CastleGemLevelInfoVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_CraftingDialogClickHandler = require("gge-module:export_CraftingDialogClickHandler");
var __s0local0 = function (__s1param0) {
  function CraftingGemClickHandler(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._minGemLevelForOuterSlots = CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN;
    __s3local0._maxGemLevelForCenterSlot = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL);
    __s3local0._resultIsDisplayed = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).sublayer = __s3param1;
    __s3local0.autofillStrategy = new __dep_export_FillCraftingGemStrategy.FillCraftingGemStrategy();
    __s3local0.updateCraftInfos();
    __s3local0.updateSlotBordersAndBars();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingGemClickHandler, __s1param0);
  CraftingGemClickHandler.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_CastleModel.CastleModel.gemData.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_SUCCESS, this.bindFunction(this.onGemCraftingSuccess));
    __dep_export_CastleModel.CastleModel.gemData.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_FAILURE, this.bindFunction(this.onGemCraftingFailure));
    __dep_export_CastleModel.CastleModel.gemData.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_SERVER_ERROR, this.bindFunction(this.onGemCraftingServerError));
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.setStorageWarning();
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(2);
    this.craftingDialog.eqFilterPanel.hide();
  };
  CraftingGemClickHandler.prototype.dispose = function () {
    __dep_export_CastleModel.CastleModel.gemData.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_SUCCESS, this.bindFunction(this.onGemCraftingSuccess));
    __dep_export_CastleModel.CastleModel.gemData.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_FAILURE, this.bindFunction(this.onGemCraftingFailure));
    __dep_export_CastleModel.CastleModel.gemData.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_SERVER_ERROR, this.bindFunction(this.onGemCraftingServerError));
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  CraftingGemClickHandler.prototype.onInventorySpaceChanged = function (__s9param0) {
    this.setStorageWarning();
  };
  CraftingGemClickHandler.prototype.setStorageWarning = function () {
    this.craftingDialog.itxt_storage.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace];
    this.craftingDialog.itxt_storage.color = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_gemSpace_tooltip";
  };
  CraftingGemClickHandler.prototype.handleInventoryClick = function (__s13param0) {
    if (!this._isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      __s1param0.prototype.handleInventoryClick.call(this, __s13param0);
      if (this.dragMovement && __s13param0.target.parent == this.craftingDisp.mc_equipmentList && instanceOf(__s13param0.target, "Bitmap")) {
        this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleInventoryEntryClick = function (__s17param0) {
    if (!this._isLocked && !__s17param0.scrollItem.scrollItemVO.locked) {
      var __s17local0 = __s17param0.scrollItem.scrollItemVO.gemVO;
      if (this.dragMovement) {
        if (__s17param0.scrollItem.scrollItemVO) {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s17local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s17local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleInventoryEntryTouchDragStart = function (__s24param0) {
    if (!this._isLocked && !__s24param0.scrollItem.scrollItemVO.locked) {
      var __s24local0 = __s24param0.scrollItem.scrollItemVO && __s24param0.scrollItem.scrollItemVO.gemVO;
      if (__s24local0 && !this.dragMovement) {
        this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s24local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (__s28param0) {
    if (this.dragMovement) {
      if (__s28param0.originEvent) {
        var __s28local0 = __s28param0.originEvent.target.stage.getObjectUnderPoint(__s28param0.originEvent.rawX, __s28param0.originEvent.rawY, 0).parent;
        if (__s28local0) {
          switch (__s28local0) {
            case this.sublayerDisp.slot0:
            case this.sublayerDisp.slot1:
            case this.sublayerDisp.slot2:
            case this.sublayerDisp.slot3:
            case this.sublayerDisp.slot4:
            case this.sublayerDisp.slot5:
              this.handleSlotClick(__s28local0);
          }
        }
      }
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  CraftingGemClickHandler.prototype.handleDialogClick = function (__s34param0) {
    if (!this._isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      __s1param0.prototype.handleDialogClick.call(this, __s34param0);
      switch (__s34param0.target) {
        case this.sublayerDisp.slot0:
        case this.sublayerDisp.slot1:
        case this.sublayerDisp.slot2:
        case this.sublayerDisp.slot3:
        case this.sublayerDisp.slot4:
        case this.sublayerDisp.slot5:
        case this.sublayerDisp.slot6:
          this.handleSlotClick(__s34param0.target);
          break;
        case this.sublayerDisp.btn_craft:
          this.craftGem(false);
          break;
        case this.sublayerDisp.btn_craftRubies:
          this.craftGem(true);
          break;
        case this.craftingDisp.btn_autofill:
          if (this.dragMovement) {
            this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
          }
          this.autofillStrategy.fillCraftingSlots(this.sublayer.allSlotsOnScreen, this.sublayer.resultSlot, this._inventory.currentFilter);
          this.updateDialog();
          break;
        case this.inventoryDisp.tab0:
        case this.inventoryDisp.tab1:
        case this.inventoryDisp.tab2:
        case this.inventoryDisp.tab3:
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleSlotClick = function (__s39param0) {
    if (!__s39param0.mc_lock.visible) {
      var __s39local0 = __s39param0 == this.sublayer.resultSlot ? __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING_CENTER : __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING;
      if (this.dragMovement) {
        if (this.isEmptySlot(__s39param0)) {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__s39local0), __s39param0);
        } else {
          var __s39local1 = new __dep_export_GemDragMovement.GemDragMovement(__s39param0.gemVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__s39local0));
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__s39local0), __s39param0);
          this.startGemDrag(__s39local1);
          this.highlightSlot(__s39param0);
        }
      } else if (!this.isEmptySlot(__s39param0)) {
        this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s39param0.gemVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__s39local0), __s39param0));
        this.highlightSlot(__s39param0);
      }
    }
  };
  CraftingGemClickHandler.prototype.handleDialogMouseOver = function (__s46param0) {
    var __s46local0 = __s46param0.target;
    switch (__s46local0) {
      case this.sublayerDisp.slot0:
      case this.sublayerDisp.slot1:
      case this.sublayerDisp.slot2:
      case this.sublayerDisp.slot3:
      case this.sublayerDisp.slot4:
      case this.sublayerDisp.slot5:
      case this.sublayerDisp.slot6:
        this.showGemTooltip(__s46local0);
        if (this.dragMovement) {
          this.highlightSlot(__s46local0);
        }
        break;
      case this.sublayerDisp.btn_craftRubies:
        this.mouseOverRubyCraft(__s46local0);
        break;
      default:
        this.mouseOverRubyCraft();
        if (this.dragMovement) {
          this.disableHighlightedSlot();
        }
    }
  };
  CraftingGemClickHandler.prototype.disableHighlightedSlot = function () {
    if (this._highlightedSlot) {
      this._highlightedSlot.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      this._highlightedSlot = null;
    }
  };
  CraftingGemClickHandler.prototype.highlightSlot = function (__s54param0) {
    if (this._highlightedSlot) {
      this.disableHighlightedSlot();
    }
    if (!__s54param0.mc_lock.visible) {
      this._highlightedSlot = __s54param0;
      __s54param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_CRAFTING_DRAGGED_MOUSE_OVER, false, 1);
    }
  };
  CraftingGemClickHandler.prototype.mouseOverRubyCraft = function (__s58param0 = null) {
    if (__s58param0) {
      if (this.craftingInventory.length == __dep_exact_26a421b704832cff.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
        this.sublayer.setUpgradeChance(100, __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN);
      }
    } else {
      var __s58local0 = this.centerGemLevelInfos;
      var __s58local1 = __dep_exact_f855840627e6e145.int(__s58local0 ? __s58local0.craftSuccessChance : 0);
      this.sublayer.setUpgradeChance(__s58local1, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    }
  };
  CraftingGemClickHandler.prototype.showGemTooltip = function (__s63param0) {
    if (__s63param0.gemVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s63param0, __s63param0.gemVO);
    }
  };
  CraftingGemClickHandler.prototype.startGemDrag = function (__s66param0) {
    this.dragMovement = __s66param0;
    this.dragMovement.startDrag();
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  CraftingGemClickHandler.prototype.endDrag = function (__s68param0, __s68param1 = null) {
    if (this.dragMovement) {
      this.dragMovement.stopDrag(__s68param0, __s68param1);
      this.dragMovement = null;
      this.updateDialog();
      this.disableHighlightedSlot();
      this.tabChangeAllowed = true;
    }
  };
  CraftingGemClickHandler.prototype.updateDialog = function () {
    this._inventory.update();
    this.updateGemLevelsRestraints();
    this.updateCraftInfos();
    this.updateSlotBordersAndBars();
    this.updateSlotLocks();
    this.updateInventoryGreyOuts();
  };
  CraftingGemClickHandler.prototype.updateGemLevelsRestraints = function () {
    this._minGemLevelForOuterSlots = __dep_exact_f855840627e6e145.int(this.centerGem ? this.centerGem.level : CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN);
    this._maxGemLevelForCenterSlot = CraftingGemClickHandler.DEFAULT_MAX_LEVEL_CENTER;
    if (this.craftingInventory != null) {
      for (var __s73local0 = 0, __s73local1 = this.craftingInventory; __s73local0 < __s73local1.length; __s73local0++) {
        var __s73local2 = __s73local1[__s73local0];
        if (__s73local2 !== undefined) {
          var __s73local3 = __s73local2;
          if (__s73local3 && __s73local3 instanceof __dep_export_CastleGemVO.CastleGemVO && __s73local3.level < this._maxGemLevelForCenterSlot) {
            this._maxGemLevelForCenterSlot = __s73local3.level;
          }
        }
      }
    }
  };
  CraftingGemClickHandler.prototype.updateCraftInfos = function () {
    this.sublayer.resetCostsAndChance(!this._resultIsDisplayed);
    var __s80local0;
    var __s80local1 = this.centerGem != null;
    var __s80local2 = __dep_exact_f855840627e6e145.int(this.craftingInventory.length);
    if (__s80local2 < __dep_exact_26a421b704832cff.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
      this.sublayer.setCraftButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
      this.sublayer.setCraftRubyButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
      this.craftingDisp.btn_autofill.toolTipText = null;
      if (__s80local1) {
        __s80local0 = this.centerGemLevelInfos;
        this.sublayer.setUpgradeChance(__s80local0.craftSuccessChance, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
        this.sublayer.upgradePrice = __s80local0.craftCostC1;
      }
    } else if (__s80local1 || __s80local2 != __dep_exact_26a421b704832cff.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
      if (__s80local1 && __s80local2 == __dep_exact_26a421b704832cff.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
        __s80local0 = this.centerGemLevelInfos;
        this.sublayer.setCraftButton(true, "dialog_gems_craftGems_readyUpgrade_tooltip");
        if (this.centerGem.levelInfos.craftSuccessChance == __dep_export_CastleGemLevelInfoVO.CastleGemLevelInfoVO.NO_CRAFT_FAIL_CHANCE) {
          this.sublayer.setCraftRubyButton(false, "dialog_gems_craftGems_firstEnchanted_norubin");
        } else {
          this.sublayer.setCraftRubyButton(true, {
            t: "dialog_gems_craftGems_premiumUpgrade_tooltip",
            p: [this.getCraftRubyCosts(__s80local0)]
          });
        }
        this.sublayer.setUpgradeChance(__s80local0.craftSuccessChance, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
        this.sublayer.upgradePrice = __s80local0.craftCostC1;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
        this.craftingDisp.btn_autofill.toolTipText = "dialog_equipment_craftingSmithy_slotFull_tt";
      }
    } else {
      this.sublayer.setCraftButton(false, "dialog_gems_craftGems_gemCentralSlot_tooltip");
      this.sublayer.setCraftRubyButton(false, "dialog_gems_craftGems_gemCentralSlot_tooltip");
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
      this.craftingDisp.btn_autofill.toolTipText = null;
    }
  };
  CraftingGemClickHandler.prototype.getCraftRubyCosts = function (__s89param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s89param0.craftCostC2));
  };
  Object.defineProperty(CraftingGemClickHandler.prototype, "centerGemLevelInfos", {
    get: function () {
      if (this.centerGem && __dep_exact_81dacdf05bd32292.instanceOfClass(this.centerGem, "CastleGemVO")) {
        return this.centerGem.levelInfos;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CraftingGemClickHandler.prototype.updateSlotLocks = function () {
    var __s95local0 = this.sublayer.allSlotsOnScreen;
    var __s95local1 = this.sublayer.resultSlot;
    if (__s95local0 != null) {
      for (var __s95local2 = 0, __s95local3 = __s95local0; __s95local2 < __s95local3.length; __s95local2++) {
        var __s95local4 = __s95local3[__s95local2];
        if (__s95local4 !== undefined) {
          if (this.dragMovement && (__dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && this.dragMovement.draggedGemVO.isUnique || __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "RelicGemVO"))) {
            this.lockSlot(__s95local4);
          } else {
            this.unlockSlot(__s95local4);
          }
        }
      }
    }
    if (this.dragMovement && (__dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && (this.dragMovement.draggedGemVO.upgradeId < 0 || this._maxGemLevelForCenterSlot < this.dragMovement.draggedGemVO.level) || __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "RelicGemVO"))) {
      this.lockSlot(__s95local1);
    } else {
      this.unlockSlot(__s95local1);
    }
    this.updateSlotToolTips(__s95local0, __s95local1);
  };
  CraftingGemClickHandler.prototype.unlockSlot = function (__s105param0) {
    var __s105local0 = [];
    for (var __s105local1 = 1; __s105local1 < arguments.length; __s105local1++) {
      __s105local0[__s105local1 - 1] = arguments[__s105local1];
    }
    __s105param0.mc_lock.visible = false;
  };
  CraftingGemClickHandler.prototype.lockSlot = function (__s109param0) {
    var __s109local0 = [];
    for (var __s109local1 = 1; __s109local1 < arguments.length; __s109local1++) {
      __s109local0[__s109local1 - 1] = arguments[__s109local1];
    }
    __s109param0.mc_lock.visible = true;
  };
  CraftingGemClickHandler.prototype.updateSlotToolTips = function (__s113param0, __s113param1) {
    var __s113local0;
    var __s113local1;
    if (this.dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "RelicGemVO")) {
      __s113local0 = "dialog_equipment_forge_relicItem_forgeBlocked_tooltip";
      __s113local1 = "dialog_equipment_forge_relicItem_forgeBlocked_tooltip";
    } else if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      __s113local0 = "";
      __s113local1 = {
        t: "dialog_gems_craftGems_insertLevelXGem_tooltip",
        p: [this._minGemLevelForOuterSlots]
      };
    } else if (this.dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && this.dragMovement.draggedGemVO.level >= this.dragMovement.draggedGemVO.maxLevel) {
      __s113local0 = {
        t: "dialog_gems_craftGems_insertLevelTenGem_tooltip",
        p: [Math.min(this._maxGemLevelForCenterSlot, __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL - 1)]
      };
      __s113local1 = "dialog_gems_craftGems_insertGem_destroy_tooltip";
    } else {
      __s113local0 = this.dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && this.dragMovement.draggedGemVO.upgradeId < 0 ? "dialog_gems_craftGems_insertLevelTenGem_tooltip" : "dialog_gems_craftGems_insertGem_tooltip";
      __s113local1 = "dialog_gems_craftGems_insertGem_destroy_tooltip";
    }
    if (__s113param0 != null) {
      for (var __s113local2 = 0, __s113local3 = __s113param0; __s113local2 < __s113local3.length; __s113local2++) {
        var __s113local4 = __s113local3[__s113local2];
        if (__s113local4 !== undefined) {
          if (__s113local4.gemVO) {
            __s113local4.toolTipText = "";
          } else {
            __s113local4.toolTipText = __s113local1;
          }
        }
      }
    }
    if (__s113param1.gemVO) {
      __s113param1.toolTipText = "";
    } else {
      __s113param1.toolTipText = __s113local0;
    }
  };
  CraftingGemClickHandler.prototype.updateInventoryGreyOuts = function () {
    if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      this.greyOutNonCraftablesByCenterSlot();
    } else {
      this.disableGreyOut();
    }
  };
  CraftingGemClickHandler.prototype.greyOutNonCraftablesByCenterSlot = function () {
    if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      this._inventory.forEachItemVO(this.bindFunction(this.greyOutByCenterSlot));
      this._inventory.redraw();
    }
  };
  CraftingGemClickHandler.prototype.greyOutByCenterSlot = function (__s134param0) {
    var __s134local0 = [];
    for (var __s134local1 = 1; __s134local1 < arguments.length; __s134local1++) {
      __s134local0[__s134local1 - 1] = arguments[__s134local1];
    }
    var __s134local2 = __s134param0.gemVO;
    if (__s134local2 && __s134local2 instanceof __dep_export_CastleGemVO.CastleGemVO && __s134local2.level < this._minGemLevelForOuterSlots) {
      __s134param0.locked = true;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s134param0.gemVO, "RelicGemVO")) {
      __s134param0.locked = true;
    }
  };
  CraftingGemClickHandler.prototype.disableGreyOut = function () {
    if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      this._inventory.forEachItemVO(this.bindFunction(this.enableScrollItem));
      this._inventory.redraw();
    }
  };
  CraftingGemClickHandler.prototype.enableScrollItem = function (__s143param0) {
    var __s143local0 = [];
    for (var __s143local1 = 1; __s143local1 < arguments.length; __s143local1++) {
      __s143local0[__s143local1 - 1] = arguments[__s143local1];
    }
    __s143param0.locked = false;
  };
  CraftingGemClickHandler.prototype.updateSlotBordersAndBars = function () {
    var __s147local0 = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.sublayerDisp.btn_craft);
    var __s147local1 = this.sublayer.allSlotsOnScreen;
    for (var __s147local2 = this.sublayer.allConnectionBarMCs, __s147local3 = 0; __s147local3 < __s147local2.length; __s147local3++) {
      var __s147local4 = __s147local2[__s147local3];
      var __s147local5 = __s147local1[__s147local3];
      this.setColor(__s147local0, __s147local5, __s147local4);
    }
    this.setColor(__s147local0, this.sublayer.resultSlot);
  };
  CraftingGemClickHandler.prototype.setColor = function (__s151param0, __s151param1, __s151param2 = null) {
    var __s151local0 = 0;
    __s151local0 = __s151param0 ? CraftingGemClickHandler.FRAME_CRAFTING_READY : __s151param1.gemVO ? CraftingGemClickHandler.FRAME_SLOTTED_SLOT : CraftingGemClickHandler.FRAME_EMPTY_SLOT;
    __s151param1.mc_bg.gotoAndStop(__s151local0);
    if (__s151param2) {
      __s151param2.gotoAndStop(__s151local0);
    }
  };
  CraftingGemClickHandler.prototype.craftGem = function (__s154param0) {
    this.lockDialog();
    this.isWaitingForServerMessage = true;
    __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().blockDialogs = true;
    __dep_export_CastleModel.CastleModel.gemData.craftGem(__s154param0);
  };
  CraftingGemClickHandler.prototype.onGemCraftingServerError = function (__s156param0) {
    this.unlockDialog();
    this._inventory.update();
  };
  CraftingGemClickHandler.prototype.onGemCraftingFailure = function (__s158param0) {
    this.sublayer.playFailAnimation(this.bindFunction(this.onFailAnimationFinished));
    this.setResultText("dialog_gems_craftGems_fail", __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR);
  };
  CraftingGemClickHandler.prototype.onGemCraftingSuccess = function (__s160param0) {
    this._newGem = __s160param0.gemInventory[0];
    this.sublayer.playSuccessAnimation(this.bindFunction(this.onSuccessAnimationFinished));
    this.setResultText("dialog_gems_craftGems_sucess", __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN);
  };
  CraftingGemClickHandler.prototype.setResultText = function (__s162param0, __s162param1) {
    this.sublayer.setUpgradeResult(__s162param0, __s162param1);
    this._resultIsDisplayed = true;
    window.setTimeout(this.bindFunction(this.removeResultText), 3000);
  };
  CraftingGemClickHandler.prototype.removeResultText = function () {
    this.sublayer.setUpgradeResult("", __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    this._resultIsDisplayed = false;
  };
  CraftingGemClickHandler.prototype.onFailAnimationFinished = function () {
    this.clearCraftingSlots(false);
    this.unlockDialog();
  };
  CraftingGemClickHandler.prototype.onSuccessAnimationFinished = function () {
    this.clearCraftingSlots(true);
    var __s168local0 = this._inventory.scrollToItem(this._newGem);
    this.sublayer.startNewItemAnimation(this.bindFunction(this.unlockDialog), __s168local0);
    this._newGem = null;
  };
  CraftingGemClickHandler.prototype.lockDialog = function () {
    this._isLocked = true;
    this._inventory.lockList();
    this.sublayer.setCraftButton(false, "");
    this.sublayer.setCraftRubyButton(false, "");
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_help, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_close, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
  };
  CraftingGemClickHandler.prototype.unlockDialog = function () {
    this._isLocked = false;
    this._inventory.unlockList();
    this.updateCraftInfos();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_help, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_close, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
    __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().blockDialogs = false;
  };
  CraftingGemClickHandler.prototype.isEmptySlot = function (__s174param0) {
    return __s174param0.gemVO == null;
  };
  Object.defineProperty(CraftingGemClickHandler.prototype, "helpTextId", {
    get: function () {
      return "help_craftGems";
    },
    set: function (__s178param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CraftingDialogClickHandler.CraftingDialogClickHandler.prototype, "helpTextId").set.call(this, __s178param0);
    },
    enumerable: true,
    configurable: true
  });
  CraftingGemClickHandler.prototype.hideDialog = function () {
    this.resetCrafting();
    __s1param0.prototype.hideDialog.call(this);
  };
  CraftingGemClickHandler.prototype.resetCrafting = function () {
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    __dep_export_CastleModel.CastleModel.gemData.returnCraftingToInventory();
    this.clearCraftingSlots(true);
    this.sublayer.clearAnimationFinishedCallbacks();
    this.unlockDialog();
  };
  CraftingGemClickHandler.prototype.clearCraftingSlots = function (__s184param0) {
    var __s184local0 = this.sublayer.resultSlot;
    for (var __s184local1 = 0, __s184local2 = this.sublayer.allSlotsOnScreen; __s184local1 < __s184local2.length; __s184local1++) {
      var __s184local3 = __s184local2[__s184local1];
      if (__s184local3 !== undefined && (__s184local3 != __s184local0 || __s184param0)) {
        __s184local3.gemVO = null;
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s184local3.mc_itemHolder);
      }
    }
    this._maxGemLevelForCenterSlot = CraftingGemClickHandler.DEFAULT_MAX_LEVEL_CENTER;
    this.updateDialog();
  };
  Object.defineProperty(CraftingGemClickHandler.prototype, "sublayerDisp", {
    get: function () {
      return this.sublayer.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingGemClickHandler.prototype, "centerGem", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.gemData.centerGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingGemClickHandler.prototype, "craftingInventory", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.gemData.craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingGemClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (__s197param0) {
      this._dragMovement = __s197param0;
    },
    enumerable: true,
    configurable: true
  });
  CraftingGemClickHandler.__initialize_static_members = function () {
    CraftingGemClickHandler.DEFAULT_MAX_LEVEL_CENTER = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL - 1);
  };
  CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN = 0;
  CraftingGemClickHandler.FRAME_EMPTY_SLOT = 1;
  CraftingGemClickHandler.FRAME_SLOTTED_SLOT = 2;
  CraftingGemClickHandler.FRAME_CRAFTING_READY = 3;
  return CraftingGemClickHandler;
}(__dep_export_CraftingDialogClickHandler.CraftingDialogClickHandler);
exports.CraftingGemClickHandler = __s0local0;
var __dep_export_CastleGemVO = require("gge-module:export_CastleGemVO");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_FillCraftingGemStrategy = require("gge-module:export_FillCraftingGemStrategy");
__s0local0.__initialize_static_members();
var __dep_export_GemDragMovement = require("gge-module:export_GemDragMovement");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
