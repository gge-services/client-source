Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetGemInventory = require("gge-module:export_C2SGetGemInventory");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExtractGemsDialogProperties = require("gge-module:export_CastleExtractGemsDialogProperties");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_CraftingDialogClickHandler = require("gge-module:export_CraftingDialogClickHandler");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExtractGemsDialog = require("gge-module:export_CastleExtractGemsDialog");
var __dep_export_FillCraftingEquipmentStrategy = require("gge-module:export_FillCraftingEquipmentStrategy");
var __dep_export_EquipmentDragMovement = require("gge-module:export_EquipmentDragMovement");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleCraftingSublayer = require("gge-module:export_CastleCraftingSublayer");
var __s0local0 = function (__s1param0) {
  function CraftingEquipmentClickHandler(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._chosenCraftingClassCategory = CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).sublayer = __s3param1;
    __s3local0.autofillStrategy = CraftingEquipmentClickHandler.FILL_STRATEGY;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingEquipmentClickHandler, __s1param0);
  CraftingEquipmentClickHandler.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_CRAFTED, this.bindFunction(this.onEquipmentCrafted));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED, this.bindFunction(this.onCraftingFailed));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.setStorageWarning();
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(1);
    this.craftingDialog.gemFilterPanel.hide();
  };
  CraftingEquipmentClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_CRAFTED, this.bindFunction(this.onEquipmentCrafted));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED, this.bindFunction(this.onCraftingFailed));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  CraftingEquipmentClickHandler.prototype.onInventorySpaceChanged = function (__s9param0) {
    this.setStorageWarning();
  };
  CraftingEquipmentClickHandler.prototype.setStorageWarning = function () {
    this.craftingDialog.itxt_storage.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace];
    this.craftingDialog.itxt_storage.color = __dep_export_CastleModel.CastleModel.equipData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryEntryClick = function (__s13param0) {
    if (!this._isLocked && !__s13param0.scrollItem.scrollItemVO.locked) {
      var __s13local0 = __s13param0.scrollItem.scrollItemVO.equipmentVO;
      if (this.dragMovement) {
        if (__s13param0.scrollItem.scrollItemVO) {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startEquipDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s13local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startEquipDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s13local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryEntryTouchDragStart = function (__s20param0) {
    if (!this._isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.originEvent.target)) {
      var __s20local0 = __s20param0.scrollItem.scrollItemVO && __s20param0.scrollItem.scrollItemVO.equipmentVO;
      if (__s20local0 && !this.dragMovement) {
        this.startEquipDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s20local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (__s24param0) {
    if (this.dragMovement) {
      if (__s24param0.originEvent) {
        var __s24local0 = __s24param0.originEvent.target.stage.getObjectUnderPoint(__s24param0.originEvent.rawX, __s24param0.originEvent.rawY, 0);
        var __s24local1 = __s24local0.parent && __s24local0.parent.parent;
        if (__s24local1) {
          switch (__s24local1) {
            case this.sublayerDisp.slot0:
            case this.sublayerDisp.slot1:
            case this.sublayerDisp.slot2:
            case this.sublayerDisp.slot3:
            case this.sublayerDisp.slot4:
            case this.sublayerDisp.slot5:
              this.handleSlotClick(__s24local1);
          }
        }
      }
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryClick = function (__s30param0) {
    if (!this._isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      __s1param0.prototype.handleInventoryClick.call(this, __s30param0);
      if (this.dragMovement && __s30param0.target.parent == this.craftingDisp.mc_equipmentList && instanceOf(__s30param0.target, "Bitmap")) {
        this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleDialogClick = function (__s34param0) {
    if (!this._isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      __s1param0.prototype.handleDialogClick.call(this, __s34param0);
      switch (__s34param0.target) {
        case this.inventoryDisp.tab0:
        case this.inventoryDisp.tab1:
        case this.inventoryDisp.tab2:
        case this.inventoryDisp.tab3:
          this.greyOutNonUsableEquipments();
          break;
        case this.sublayerDisp.slot0:
        case this.sublayerDisp.slot1:
        case this.sublayerDisp.slot2:
        case this.sublayerDisp.slot3:
        case this.sublayerDisp.slot4:
        case this.sublayerDisp.slot5:
          this.handleSlotClick(__s34param0.target);
          break;
        case this.sublayerDisp.btn_craft:
          if (this.equipmentHasGems()) {
            this.extractGems();
          } else {
            this.craftEquipment(false);
          }
          break;
        case this.craftingDisp.btn_autofill:
          if (this.dragMovement) {
            this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
          }
          this.autofillStrategy.fillCraftingSlots(this.sublayer.allSlotsOnScreen, this.sublayer.resultSlot, this._inventory.currentFilter);
          this.updateDialog();
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.extractGems = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleExtractGemsDialog.CastleExtractGemsDialog, new __dep_export_CastleExtractGemsDialogProperties.CastleExtractGemsDialogProperties(this.getEmbeddedGems(), this.getFinalCostC1(), this.bindFunction(this.craftEquipment)));
  };
  CraftingEquipmentClickHandler.prototype.equipmentHasGems = function () {
    var __s43local0 = __dep_export_CastleModel.CastleModel.equipData.craftingInventory;
    if (__s43local0 != null) {
      for (var __s43local1 = 0, __s43local2 = __s43local0; __s43local1 < __s43local2.length; __s43local1++) {
        var __s43local3 = __s43local2[__s43local1];
        if (__s43local3 !== undefined && __s43local3.gemVO) {
          return true;
        }
      }
    }
    return false;
  };
  CraftingEquipmentClickHandler.prototype.getEmbeddedGems = function () {
    var __s49local0 = __dep_export_CastleModel.CastleModel.equipData.craftingInventory;
    var __s49local1 = [];
    if (__s49local0 != null) {
      for (var __s49local2 = 0, __s49local3 = __s49local0; __s49local2 < __s49local3.length; __s49local2++) {
        var __s49local4 = __s49local3[__s49local2];
        if (__s49local4 !== undefined && __s49local4.gemVO) {
          __s49local1.push(__s49local4.gemVO);
        }
      }
    }
    return __s49local1;
  };
  CraftingEquipmentClickHandler.prototype.handleSlotClick = function (__s55param0) {
    if (!__s55param0.mc_lock.visible) {
      if (this.dragMovement) {
        if (this.isEmptySlot(__s55param0)) {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING), __s55param0);
        } else {
          var __s55local0 = new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s55param0.slotVO.equipmentVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING));
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING), __s55param0);
          this.startEquipDrag(__s55local0);
          this.highlightSlot(__s55param0);
        }
      } else if (!this.isEmptySlot(__s55param0)) {
        this.startEquipDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s55param0.slotVO.equipmentVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING), __s55param0));
        this.highlightSlot(__s55param0);
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleDialogMouseOver = function (__s62param0) {
    if (__s62param0.target != this.sublayerDisp.slot6) {
      switch (__s62param0.target) {
        case this.sublayerDisp.slot0:
        case this.sublayerDisp.slot1:
        case this.sublayerDisp.slot2:
        case this.sublayerDisp.slot3:
        case this.sublayerDisp.slot4:
        case this.sublayerDisp.slot5:
          this.showSlotToolTip(__s62param0);
          if (this.dragMovement) {
            this.highlightSlot(__s62param0.target);
          }
          break;
        default:
          if (this.dragMovement) {
            this.disableHighlightedSlot();
          }
      }
    } else {
      this.disableHighlightedSlot();
    }
  };
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "dragMovementIsRelic", {
    get: function () {
      return !!this.dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedEquipmentVO, "RelicEquipmentVO");
    },
    enumerable: true,
    configurable: true
  });
  CraftingEquipmentClickHandler.prototype.disableHighlightedSlot = function () {
    if (this._highlightedSlot) {
      this._highlightedSlot.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      this._highlightedSlot = null;
    }
  };
  CraftingEquipmentClickHandler.prototype.highlightSlot = function (__s74param0) {
    if (this._highlightedSlot) {
      this.disableHighlightedSlot();
    }
    if (!__s74param0.mc_lock.visible) {
      this._highlightedSlot = __s74param0;
      __s74param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.setColor(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_CRAFT_EQUIPMENT_HIGHLIGHT_SLOT, this.getHighlightColorForRarity(this.dragMovement.draggedEquipmentVO.rarity)), false, 1);
    }
  };
  CraftingEquipmentClickHandler.prototype.getHighlightColorForRarity = function (__s78param0) {
    switch (__s78param0) {
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_COMMON:
        return 13421772;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RARE:
        return 10151967;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_EPIC:
        return 13010425;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_LEGENDARY:
        return 15559700;
      default:
        return 13421772;
    }
  };
  CraftingEquipmentClickHandler.prototype.showSlotToolTip = function (__s81param0) {
    var __s81local0 = __s81param0.target.slotVO.equipmentVO;
    if (__s81local0 && !this._isLocked) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s81param0.target, __s81local0);
    }
    if (this.dragMovementIsRelic) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.show("dialog_equipment_forge_relicItem_forgeBlocked_tooltip", __s81param0.target);
    }
  };
  CraftingEquipmentClickHandler.prototype.startEquipDrag = function (__s85param0) {
    this.dragMovement = __s85param0;
    this.dragMovement.startDrag();
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  CraftingEquipmentClickHandler.prototype.endDrag = function (__s87param0, __s87param1 = null) {
    if (this.dragMovement) {
      if (__s87param1) {
        __s87param1.slotVO.equipmentVO = this.dragMovement.draggedEquipmentVO;
      }
      this.dragMovement.stopDrag(__s87param0, __s87param1);
      this.dragMovement = null;
      this.updateDialog();
      this.disableHighlightedSlot();
      this.tabChangeAllowed = true;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateDialog = function () {
    this._chosenCraftingClassCategory = this.getCraftingClassCategory();
    this._inventory.update();
    this.updateCraftButton();
    this.updateResultSlot();
    this.updateSlotLocks();
    this.updateSlotBorder();
    this.greyOutNonUsableEquipments();
    this.updateCenterSlotTooltip();
    this.updateAutofillButton();
    this.sublayer.clearCenterSlot();
  };
  CraftingEquipmentClickHandler.prototype.updateAutofillButton = function () {
    if (this.equipmentsToBeCrafted.length == 6 || this.equipmentsToBeCrafted.length == 3 && this._chosenCraftingClassCategory == __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_LEGENDARY) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
      this.craftingDisp.btn_autofill.toolTipText = "dialog_equipment_craftingSmithy_slotFull_tt";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
      this.craftingDisp.btn_autofill.toolTipText = null;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateCenterSlotTooltip = function () {
    var __s97local0 = "dialog_equipment_craftEquipment_middleSlot";
    if (this.dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedEquipmentVO, "RelicEquipmentVO")) {
      __s97local0 = "dialog_equipment_forge_relicItem_forgeBlocked_tooltip";
    } else if (this._chosenCraftingClassCategory == CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN || this.equipmentsToBeCrafted.length != 3 && this.equipmentsToBeCrafted.length != 6) {
      __s97local0 += "Empty_tooltip";
    } else if (this.equipmentsToBeCrafted.length == 3) {
      __s97local0 += this._chosenCraftingClassCategory + "_tooltip";
    } else {
      __s97local0 += this.getUpgradedCraftingClass() + "_tooltip";
    }
    this.sublayer.resultSlot.toolTipText = __s97local0;
  };
  CraftingEquipmentClickHandler.prototype.getUpgradedCraftingClass = function () {
    switch (this._chosenCraftingClassCategory) {
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_COMMON:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RARE;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RARE:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_EPIC;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_EPIC:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_LEGENDARY;
      default:
        return this._chosenCraftingClassCategory;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateCraftButton = function () {
    if (!this._isLocked) {
      var __s106local0 = 0;
      if (this.isWaitingForServerMessage || this.equipmentsToBeCrafted.length != 3 && this.equipmentsToBeCrafted.length != 6) {
        this.sublayerDisp.btn_craft.toolTipText = "dialog_equipmentCrafting_cantCraft";
        this.craftButtonEnabled = false;
        __s106local0 = 0;
      } else {
        this.sublayerDisp.btn_craft.toolTipText = "dialog_equipmentCrafting_craft";
        this.craftButtonEnabled = true;
        __s106local0 = this.getFinalCostC1();
      }
      this.sublayer.price = __s106local0;
    }
  };
  CraftingEquipmentClickHandler.prototype.getFinalCostC1 = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.EquipmentConst.getPriceForCrafting(this.equipmentsToBeCrafted.length, this.getCraftingClassID(), 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FORGE_COST_BOOST).strength / 100)));
  };
  CraftingEquipmentClickHandler.prototype.getCraftingClassID = function () {
    if (this.equipmentsToBeCrafted.length > 0) {
      return this.equipmentsToBeCrafted[0].rareID;
    } else {
      return -1;
    }
  };
  CraftingEquipmentClickHandler.prototype.getCurrentSlotBorderFrame = function () {
    return __dep_exact_f855840627e6e145.int(this.equipmentsToBeCrafted.length > 0 ? this.equipmentsToBeCrafted[0].visualRareID : 1);
  };
  CraftingEquipmentClickHandler.prototype.isEmptySlot = function (__s119param0) {
    return __s119param0.slotVO.equipmentVO == null;
  };
  CraftingEquipmentClickHandler.prototype.updateResultSlot = function () {
    if (this.equipmentsToBeCrafted.length < 3) {
      this.sublayerDisp.slot6.mc_bg.gotoAndStop(1);
    } else if (this.equipmentsToBeCrafted.length == 6) {
      this.sublayerDisp.slot6.mc_bg.gotoAndStop(this.equipmentsToBeCrafted[0].visualRareID + 1);
    } else if (this.equipmentsToBeCrafted.length >= 3) {
      this.sublayerDisp.slot6.mc_bg.gotoAndStop(this.equipmentsToBeCrafted[0].visualRareID);
    }
  };
  CraftingEquipmentClickHandler.prototype.greyOutNonUsableEquipments = function () {
    if (this._chosenCraftingClassCategory != CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN) {
      this._inventory.forEachItemVO(this.bindFunction(this.greyOut));
      this._inventory.redraw();
    }
  };
  CraftingEquipmentClickHandler.prototype.greyOut = function (__s129param0) {
    var __s129local0 = [];
    for (var __s129local1 = 1; __s129local1 < arguments.length; __s129local1++) {
      __s129local0[__s129local1 - 1] = arguments[__s129local1];
    }
    if (__s129param0.equipmentVO.rarity != this._chosenCraftingClassCategory) {
      __s129param0.locked = true;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateSlotLocks = function () {
    var __s134local0 = this.sublayer.allSlotsOnScreen;
    var __s134local1 = false;
    var __s134local2 = false;
    this.sublayer.resultSlot.mc_lock.visible = this.dragMovement;
    if (this.equipmentsToBeCrafted.length > 0) {
      __s134local1 = this.equipmentsToBeCrafted[0].isUseableForTripleCraft;
      __s134local2 = this.equipmentsToBeCrafted[0].isUseableForSextupleCraft;
    } else if (this.dragMovement) {
      __s134local1 = this.dragMovement.draggedEquipmentVO.isUseableForTripleCraft;
      __s134local2 = this.dragMovement.draggedEquipmentVO.isUseableForSextupleCraft;
    } else {
      __s134local1 = true;
      __s134local2 = true;
    }
    __s134local0[0].mc_lock.visible = !__s134local1;
    __s134local0[1].mc_lock.visible = !__s134local1;
    __s134local0[2].mc_lock.visible = !__s134local1;
    __s134local0[3].mc_lock.visible = !__s134local2;
    __s134local0[4].mc_lock.visible = !__s134local2;
    __s134local0[5].mc_lock.visible = !__s134local2;
    if (__s134local0 != null) {
      for (var __s134local3 = 0, __s134local4 = __s134local0; __s134local3 < __s134local4.length; __s134local3++) {
        var __s134local5 = __s134local4[__s134local3];
        if (__s134local5 !== undefined) {
          __s134local5.toolTipText = __s134local5.mc_lock.visible || __s134local5.slotVO.equipmentVO ? null : "dialog_equipment_craftEquipment_insertEquipment_tooltip";
        }
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.updateSlotBorder = function () {
    var __s143local0 = this.getCurrentSlotBorderFrame();
    var __s143local1 = this.sublayer.allSlotsOnScreen;
    if (__s143local1 != null) {
      for (var __s143local2 = 0, __s143local3 = __s143local1; __s143local2 < __s143local3.length; __s143local2++) {
        var __s143local4 = __s143local3[__s143local2];
        if (__s143local4 !== undefined) {
          __s143local4.mc_bg.gotoAndStop(__s143local0);
        }
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.hideDialog = function () {
    this.resetCrafting();
    __s1param0.prototype.hideDialog.call(this);
  };
  CraftingEquipmentClickHandler.prototype.craftEquipment = function (__s151param0) {
    this.lockDialog();
    this.isWaitingForServerMessage = true;
    this.craftButtonEnabled = false;
    this._craftingStarted = true;
    __dep_export_CastleModel.CastleModel.equipData.craftEquipment(__s151param0);
  };
  CraftingEquipmentClickHandler.prototype.resetCrafting = function () {
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    __dep_export_CastleModel.CastleModel.equipData.returnCraftingToInventory();
    this.clearCraftingSlots();
    this.unLockDialog();
    this._inventory.update();
  };
  CraftingEquipmentClickHandler.prototype.clearCraftingSlots = function () {
    for (var __s155local0 = 0, __s155local1 = this.sublayer.allSlotsOnScreen; __s155local0 < __s155local1.length; __s155local0++) {
      var __s155local2 = __s155local1[__s155local0];
      if (__s155local2 !== undefined) {
        __s155local2.equipmentVO = null;
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s155local2.mc_equipmentHolder);
      }
    }
    this._chosenCraftingClassCategory = CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN;
    this.updateSlotBorder();
    this.greyOutNonUsableEquipments();
  };
  CraftingEquipmentClickHandler.prototype.onCraftingFailed = function (__s160param0) {
    this._isLocked = false;
    this._craftingStarted = false;
    this.isWaitingForServerMessage = false;
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
    this.unLockItemList();
    this.updateCraftButton();
    this.craftButtonEnabled = true;
    this.backToEquipButtonEnabled = true;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_help, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_close, true);
  };
  CraftingEquipmentClickHandler.prototype.onEquipmentCrafted = function (__s162param0) {
    this.isWaitingForServerMessage = false;
    this._craftingStarted = false;
    this._newEquipmentVO = __s162param0.equipmentInventory[0];
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGemInventory.C2SGetGemInventory());
    this.sublayer.startCraftAnimation(this.bindFunction(this.onAnimationFinished), this._newEquipmentVO, null);
  };
  CraftingEquipmentClickHandler.prototype.onAnimationFinished = function () {
    this.backToEquipButtonEnabled = true;
    this.sublayer.resetVEs();
    this.switchToNewEquipmentTab();
    var __s164local0 = this._newEquipmentVO;
    this._inventory.update();
    var __s164local1 = this.scrollToNewEquipment(__s164local0);
    this.clearResultSlot();
    if (__s164local1) {
      this.sublayer.startNewItemAnimation(this.bindFunction(this.unLockDialog), __s164local1);
    }
  };
  CraftingEquipmentClickHandler.prototype.clearResultSlot = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_animation);
  };
  CraftingEquipmentClickHandler.prototype.unLockDialog = function () {
    this._isLocked = false;
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
    this.unLockItemList();
    this.clearCraftingSlots();
    this.updateCraftButton();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_help, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_close, true);
    this.updateAutofillButton();
  };
  CraftingEquipmentClickHandler.prototype.lockDialog = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = true;
    this._isLocked = true;
    this.lockItemList();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
  };
  CraftingEquipmentClickHandler.prototype.getCraftingClassCategory = function () {
    if (this.equipmentsToBeCrafted.length > 0) {
      return this.equipmentsToBeCrafted[0].rarity;
    } else {
      return CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN;
    }
  };
  CraftingEquipmentClickHandler.prototype.scrollToNewEquipment = function (__s177param0) {
    return this._inventory.scrollToItem(__s177param0);
  };
  CraftingEquipmentClickHandler.prototype.switchToNewEquipmentTab = function () {
    var __s179local0 = __dep_exact_f855840627e6e145.int(this._inventory.currentFilterIndex);
    if (__s179local0 == __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GENERAL && this._newEquipmentVO.lordType == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON) {
      this._inventory.currentFilterIndex = __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_BARON;
    } else if (__s179local0 == __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_BARON && this._newEquipmentVO.lordType == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
      this._inventory.currentFilterIndex = __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GENERAL;
    }
  };
  CraftingEquipmentClickHandler.prototype.lockItemList = function () {
    this._inventory.lockList();
  };
  CraftingEquipmentClickHandler.prototype.unLockItemList = function () {
    this._inventory.unlockList();
  };
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "sublayerDisp", {
    get: function () {
      return this.sublayer.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "craftButtonEnabled", {
    set: function (__s189param0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_craft, __s189param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "backToEquipButtonEnabled", {
    set: function (__s191param0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, __s191param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "helpTextId", {
    get: function () {
      return "help_equipmentCrafting";
    },
    set: function (__s195param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CraftingDialogClickHandler.CraftingDialogClickHandler.prototype, "helpTextId").set.call(this, __s195param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "equipmentsToBeCrafted", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.equipData.craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (__s201param0) {
      this._dragMovement = __s201param0;
    },
    enumerable: true,
    configurable: true
  });
  CraftingEquipmentClickHandler.__initialize_static_members = function () {
    CraftingEquipmentClickHandler.FILL_STRATEGY = new __dep_export_FillCraftingEquipmentStrategy.FillCraftingEquipmentStrategy();
  };
  CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN = "";
  return CraftingEquipmentClickHandler;
}(__dep_export_CraftingDialogClickHandler.CraftingDialogClickHandler);
exports.CraftingEquipmentClickHandler = __s0local0;
__s0local0.__initialize_static_members();
