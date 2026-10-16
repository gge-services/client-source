Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleEquipmentSellDialogProperties = require("gge-module:export_CastleEquipmentSellDialogProperties");
var __dep_export_CastleRenameLordDialogProperties = require("gge-module:export_CastleRenameLordDialogProperties");
var __dep_export_CastleSocketDialogProperties = require("gge-module:export_CastleSocketDialogProperties");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_AEquipableClickHandler = require("gge-module:export_AEquipableClickHandler");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleEquipmentSellDialog = require("gge-module:export_CastleEquipmentSellDialog");
var __dep_export_CastleExtractSocketDialog = require("gge-module:export_CastleExtractSocketDialog");
var __dep_export_CastleRenameLordDialog = require("gge-module:export_CastleRenameLordDialog");
var __dep_export_CastleSellEmbeddedEquipmentDialog = require("gge-module:export_CastleSellEmbeddedEquipmentDialog");
var __s0local0 = function (__s1param0) {
  function EquipmentDialogClickHandler(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).equipmentScreen = __s3param0;
    __s3local0.tabChangeAllowed = true;
    __s3local0._canDrag = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentDialogClickHandler, __s1param0);
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "canDrag", {
    set: function (__s5param0) {
      this._canDrag = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDialogClickHandler.prototype.handleDialogClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target) && !this.dialogDisp.mc_listContainer.contains(__s7param0.target)) {
      if (this.tabChangeAllowed) {
        switch (__s7param0.target) {
          case this.dialogDisp.mc_lordName.btn_rename:
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRenameLordDialog.CastleRenameLordDialog, new __dep_export_CastleRenameLordDialogProperties.CastleRenameLordDialogProperties(this.equipmentScreen.currentLord));
            break;
          case this.inventoryDisp.tab0:
          case this.inventoryDisp.tab1:
          case this.inventoryDisp.tab2:
          case this.inventoryDisp.tab3:
          case this.inventoryDisp.tab4:
          case this.inventoryDisp.tab5:
          case this.inventoryDisp.tab6:
            var __s7local0 = __s7param0.target.name;
            var __s7local1 = parseInt(__s7local0.charAt(__s7local0.length - 1));
            this._inventory.currentFilterIndex = __s7local1;
            this.equipmentScreen.lastFilter = this._inventory.currentFilterIndex;
            if (this.equipmentScreen.isFavoriteMode) {
              this._inventory.forEachItemVE(this.bindFunction(this.enableInventoryFavoriteIcons));
            }
            break;
          case this.inventoryDisp.btn_addStorage:
            this.gotoIsoBuildArmory();
        }
      }
      if (__s7param0.target == this.dialogDisp.saleSlot && this._dragMovement && !this.dialogDisp.saleSlot.itemInvalidSymbol.visible == 1) {
        this.sellItem();
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0.target, "EquipmentGemSocket")) {
        this.extractItem(__s7param0.target);
      }
    }
  };
  EquipmentDialogClickHandler.prototype.enableInventoryFavoriteIcons = function (__s15param0) {
    var __s15local0 = [];
    for (var __s15local1 = 1; __s15local1 < arguments.length; __s15local1++) {
      __s15local0[__s15local1 - 1] = arguments[__s15local1];
    }
    __s15param0.toggleOpenMarkAsFavorite(this.equipmentScreen.isFavoriteMode);
  };
  EquipmentDialogClickHandler.prototype.gotoIsoBuildArmory = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.GOTO_MAIN_CASTLE_UNIQUE_BUILDING, [__dep_export_IsoObjectEnum.IsoObjectEnum.ARMORY]);
  };
  EquipmentDialogClickHandler.prototype.extractItem = function (__s21param0) {
    if (this.equipmentScreen.currentLord.isAvailableForEquip) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleExtractSocketDialog.CastleExtractSocketDialog, new __dep_export_CastleSocketDialogProperties.CastleSocketDialogProperties(__s21param0.equipmentVO.gemVO, null, __s21param0.equipmentVO, this.equipmentScreen.currentLord.id, null, null));
    }
  };
  EquipmentDialogClickHandler.prototype.sellItem = function () {
    this.clearDrag();
    var __s24local0 = __dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "BasicEquipmentVO") && this._dragMovement.draggedEquipableVO.gemVO) {
      __s24local0 = __dep_export_CastleSellEmbeddedEquipmentDialog.CastleSellEmbeddedEquipmentDialog;
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s24local0, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(this._dragMovement.draggedEquipableVO, this.bindFunction(this.confirmSellCallback), this.bindFunction(this.cancelDragMovement)));
  };
  EquipmentDialogClickHandler.prototype.clearDrag = function () {
    this.layoutManager.nativeCursor.stopAllDrag();
  };
  EquipmentDialogClickHandler.prototype.confirmSellCallback = function (__s29param0 = false) {};
  EquipmentDialogClickHandler.prototype.handleInventoryClick = function (__s31param0) {};
  EquipmentDialogClickHandler.prototype.changeSaleSlotAppearance = function () {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      this.dialogDisp.saleSlot.toolTipText = "dialog_equipmentSale_desc";
      this.dialogDisp.saleSlot.itemInvalidSymbol.visible = true;
    } else {
      this._dragMovement;
      this.dialogDisp.saleSlot.toolTipText = "dialog_equipmentSale_desc";
      this.dialogDisp.saleSlot.itemInvalidSymbol.visible = false;
    }
  };
  EquipmentDialogClickHandler.prototype.handleDialogMouseOver = function (__s37param0) {
    switch (__s37param0.target.parent) {
      case this.dialogDisp.slot0:
      case this.dialogDisp.slot1:
      case this.dialogDisp.slot2:
      case this.dialogDisp.slot3:
      case this.dialogDisp.slot4:
      case this.dialogDisp.slot5:
        this.handleSlotMouseOver(__s37param0);
    }
    this.dialogDisp.saleSlot.mc_highlight.visible = __s37param0.target == this.dialogDisp.saleSlot && this._dragMovement;
  };
  EquipmentDialogClickHandler.prototype.handleSlotMouseOver = function (__s40param0) {
    var __s40local0 = __s40param0.target.parent.slotVO.equipmentVO;
    var __s40local1 = this._dragMovement ? this._dragMovement.draggedEquipableVO : null;
    if (__s40local1) {
      if (this.isDragActionRelicAllowed && this.gemInsertAllowed(__s40local0)) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s40local1, "CastleGemVO") && __s40local0 && __s40local0.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO) {
          this.showTextTooltip("dialog_gems_noGemInsert_hero_tooltip", __s40param0.target.parent.mc_bg);
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s40local1, "CastleGemVO") && __s40local0 && __s40local0.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN && !__s40local0.isPermanent) {
          this.showTextTooltip("dialog_gems_noGemInsert_tempEquipment_tooltip", __s40param0.target.parent.mc_bg);
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s40local1, "CastleGemVO") && __s40local0 && __s40local0.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN && !__s40local0.canSlotGem) {
          this.showTextTooltip("dialog_gems_noGemInsert_look_tooltip", __s40param0.target.parent.mc_bg);
        }
      } else {
        var __s40local2 = this.equipmentScreen.currentLord.isBaron ? "baron" : "general";
        var __s40local3 = this.lordUsesRelics;
        var __s40local4 = this.movementIsRelic;
        var __s40local5 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s40local1, "CastleGemVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s40local1, "RelicGemVO");
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s40local1, "BasicEquipmentVO") && __s40local1.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
          this.showTextTooltip("dialog_equipment_appearanceItem_nonRelicGem_mixingBlocked_" + __s40local2 + "_tooltip", __s40param0.target.parent.mc_bg);
        } else if (__s40local0) {
          if (__s40local5) {
            if (__s40local0.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
              if (__s40local4) {
                this.showTextTooltip("dialog_equipment_relicGem_nonRelicItem_insertBlocked_tooltip", __s40param0.target.parent.mc_bg);
              } else {
                this.showTextTooltip("dialog_equipment_nonRelicGem_appearanceItemAndRelicMix_blocked", __s40param0.target.parent.mc_bg);
              }
            } else if (__s40local3 && !__s40local4) {
              this.showTextTooltip("dialog_equipment_nonRelicGem_relicItem_insertBlocked_tooltip", __s40param0.target.parent.mc_bg);
            } else if (!__s40local3 && __s40local4) {
              this.showTextTooltip("dialog_equipment_relicGem_nonRelicItem_insertBlocked_tooltip", __s40param0.target.parent.mc_bg);
            }
          } else if (__s40local3 && !__s40local4 || !__s40local3 && __s40local4) {
            this.showTextTooltip("dialog_equipment_relicItem_nonRelicItem_mixingBlocked_" + __s40local2 + "_tooltip", __s40param0.target.parent.mc_bg);
          }
        } else {
          this.showTextTooltip("dialog_equipment_relicItem_nonRelicItem_mixingBlocked_" + __s40local2 + "_tooltip", __s40param0.target.parent.mc_bg);
        }
      }
    } else if (__s40local0) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s40param0.target, __s40local0, this.equipmentScreen.currentLord);
    }
  };
  EquipmentDialogClickHandler.prototype.gemInsertAllowed = function (__s59param0) {
    if (this._dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(__s59param0, "BasicEquipmentVO") && __s59param0.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s59param0, "RelicEquipmentVO")) {
        return false;
      }
      if (!__dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s59param0, "RelicEquipmentVO")) {
        return false;
      }
    }
    return true;
  };
  EquipmentDialogClickHandler.prototype.showTextTooltip = function (__s64param0, __s64param1) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.show(__s64param0, __s64param1);
  };
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragActionRelicAllowed", {
    get: function () {
      if (!this._dragMovement) {
        return true;
      }
      if (this.isDragItemASkinItem) {
        if (!this._dragMovement.draggedEquipableVO.gemVO) {
          return true;
        }
        if (this.lordUsesRelics) {
          return false;
        }
      }
      return !!this.isDragItemAnEquipmentButNoSkin && !!this.isLordEquippedOnlySkinItemWithoutGem || !this.lordHasEquipment || this.lordUsesRelics && this.movementIsRelic || !this.lordUsesRelics && !this.movementIsRelic;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragItemAnEquipmentButNoSkin", {
    get: function () {
      return this.isDragItemAnEquipmentItem && this._dragMovement.draggedEquipableVO.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragItemASkinItem", {
    get: function () {
      return this.isDragItemAnEquipmentItem && this._dragMovement.draggedEquipableVO.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragItemAnEquipmentItem", {
    get: function () {
      return !!this._dragMovement.draggedEquipableVO && __dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "BasicEquipmentVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isLordEquippedOnlySkinItemWithoutGem", {
    get: function () {
      var __s78local0 = false;
      var __s78local1 = false;
      for (var __s78local2 in this.equipmentScreen.allSlotsOnScreen) {
        var __s78local3 = this.equipmentScreen.allSlotsOnScreen[__s78local2];
        if (__s78local3 !== undefined) {
          var __s78local4 = __s78local3.slotVO;
          if (__s78local4.equipmentVO && __s78local4.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
            __s78local1 = true;
          }
          if (__s78local4.equipmentVO && __s78local4.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN && !__s78local4.equipmentVO.gemVO) {
            __s78local0 = true;
          }
        }
      }
      return !__s78local1 && __s78local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "movementIsRelic", {
    get: function () {
      return !!this._dragMovement.draggedEquipableVO && (__dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicEquipmentVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO"));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "lordUsesRelics", {
    get: function () {
      for (var __s87local0 in this.equipmentScreen.allSlotsOnScreen) {
        var __s87local1 = this.equipmentScreen.allSlotsOnScreen[__s87local0];
        if (__s87local1 !== undefined) {
          var __s87local2 = __s87local1.slotVO;
          if (__s87local2.equipmentVO && __dep_exact_81dacdf05bd32292.instanceOfClass(__s87local2.equipmentVO, "RelicEquipmentVO")) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "lordHasEquipment", {
    get: function () {
      for (var __s93local0 in this.equipmentScreen.allSlotsOnScreen) {
        var __s93local1 = this.equipmentScreen.allSlotsOnScreen[__s93local0];
        if (__s93local1 !== undefined) {
          if (__s93local1.slotVO.equipmentVO) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDialogClickHandler.prototype.handleDialogMouseOut = function (__s99param0) {
    switch (__s99param0.target.parent) {
      case this.dialogDisp.slot0:
      case this.dialogDisp.slot1:
      case this.dialogDisp.slot2:
      case this.dialogDisp.slot3:
      case this.dialogDisp.slot4:
      case this.dialogDisp.slot5:
        this.handleSlotMouseOut(__s99param0);
        return;
    }
  };
  EquipmentDialogClickHandler.prototype.handleSlotMouseOut = function (__s102param0) {};
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "dialogDisp", {
    get: function () {
      return this.equipmentScreen.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "tabChangeAllowed", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AEquipableClickHandler.AEquipableClickHandler.prototype, "tabChangeAllowed").get.call(this);
    },
    set: function (__s108param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEquipableClickHandler.AEquipableClickHandler.prototype, "tabChangeAllowed").set.call(this, __s108param0);
      if (this.dialogDisp.mc_lordStatsEffects.effectList.mc_lordStats.mc_decoStats.currentFrame == 1) {
        this.dialogDisp.mc_lordStatsEffects.effectList.mc_lordStats.mc_decoStats.mc_CastleHolder.mouseChildren = __s108param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDialogClickHandler.prototype.updateSlotTooltip = function () {
    this.dialogDisp.slot0.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot0) ? "equipment_slotType_helmet" : "";
    this.dialogDisp.slot1.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot1) ? "equipment_slotType_armor" : "";
    this.dialogDisp.slot2.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot2) ? "equipment_slotType_weapon" : "";
    this.dialogDisp.slot3.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot3) ? "equipment_slotType_artifact" : "";
    this.dialogDisp.slot4.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot4) ? "equipment_slotType_skin" : "";
    this.dialogDisp.slot5.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot5) ? "equipment_slotType_hero" : "";
  };
  EquipmentDialogClickHandler.prototype.updateSlotMouseChildren = function () {
    for (var __s113local0 in this.equipmentScreen.allSlotsOnScreen) {
      var __s113local1 = this.equipmentScreen.allSlotsOnScreen[__s113local0];
      if (__s113local1 !== undefined) {
        __s113local1.mc_itemHolder.mouseEnabled = !this._dragMovement;
      }
    }
  };
  EquipmentDialogClickHandler.prototype.isEmptySlot = function (__s118param0) {
    return __s118param0.slotVO.equipmentVO == null;
  };
  EquipmentDialogClickHandler.prototype.endDrag = function (__s120param0, __s120param1 = null) {
    if (this._dragMovement) {
      this._dragMovement.stopDrag(__s120param0, __s120param1);
      this._dragMovement = null;
      this.updateDialog();
      this.tabChangeAllowed = true;
    }
  };
  EquipmentDialogClickHandler.prototype.cancelDragMovement = function () {
    if (this._dragMovement) {
      if (this._dragMovement.sourceSlotMC && this._dragMovement.sourceLocation.lordID != -1) {
        var __s123local0 = this._dragMovement.sourceLocation.lordID == this.equipmentScreen.currentLord.id ? this._dragMovement.sourceSlotMC : null;
        this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(this._dragMovement.sourceLocation.locationType, this._dragMovement.sourceLocation.lordID), __s123local0);
      } else {
        this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  EquipmentDialogClickHandler.prototype.updateDialog = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  EquipmentDialogClickHandler.prototype.setAddStorageBtn = function () {
    var __s130local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.ARMORY_BUILDING_WOD_LEVEL1).requiredLevel);
    var __s130local1 = __dep_export_CastleModel.CastleModel.userData.level >= __s130local0;
    this.dialogDisp.mc_equipmentList.btn_addStorage.visible = __s130local1;
    if (__s130local1) {
      var __s130local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.wodData.getHighestUpgradeForBuilding(__dep_export_ClientConstCastle.ClientConstCastle.ARMORY_BUILDING_WOD_LEVEL1).addEquipmentStorageCapacity);
      var __s130local3 = __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace == __dep_exact_26a421b704832cff.EquipmentConst.EQUIPMENT_SIZE_NORMAL + __s130local2;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.btn_addStorage, !__s130local3);
      this.dialogDisp.mc_equipmentList.btn_addStorage.toolTipText = __s130local3 ? "addEquipmentStorageCapacity_maxReached_tt" : "addEquipmentStorageCapacity_tt";
    }
  };
  return EquipmentDialogClickHandler;
}(__dep_export_AEquipableClickHandler.AEquipableClickHandler);
exports.EquipmentDialogClickHandler = __s0local0;
