Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleSocketDialogProperties = require("gge-module:export_CastleSocketDialogProperties");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_EquipmentDialogClickHandler = require("gge-module:export_EquipmentDialogClickHandler");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNewSocketDialog = require("gge-module:export_CastleNewSocketDialog");
var __dep_export_CastleReplaceSocketDialog = require("gge-module:export_CastleReplaceSocketDialog");
var __dep_export_GemDragMovement = require("gge-module:export_GemDragMovement");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleEquipmentSublayer = require("gge-module:export_CastleEquipmentSublayer");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __s0local0 = function (__s1param0) {
  function EquipmentGemClickHandler(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentGemClickHandler, __s1param0);
  EquipmentGemClickHandler.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.setStorageWarning();
    this.setAddStorageBtn();
    this.equipmentScreen.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(2);
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.equipmentScreen.eqFilterPanel.hide();
  };
  EquipmentGemClickHandler.prototype.onInventorySpaceChanged = function (__s7param0) {
    this.setStorageWarning();
    this.setAddStorageBtn();
  };
  EquipmentGemClickHandler.prototype.setStorageWarning = function () {
    this.dialogDisp.mc_storageWarning.toolTipText = "allyforge_tooltip_inventoryFull_gems";
    this.dialogDisp.mc_storageWarning.visible = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull;
    this.equipmentScreen.itxt_storage.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace];
    this.equipmentScreen.itxt_storage.color = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_gemSpace_tooltip";
  };
  EquipmentGemClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  EquipmentGemClickHandler.prototype.updateInventory = function () {
    this._inventory.update();
  };
  EquipmentGemClickHandler.prototype.handleInventoryEntryClick = function (__s15param0) {
    if (this._canDrag) {
      var __s15local0 = __s15param0.scrollItem.scrollItemVO.gemVO;
      if (this.dragMovement) {
        if (__s15param0.scrollItem.scrollItemVO) {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s15local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s15local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  EquipmentGemClickHandler.prototype.handleInventoryEntryTouchDragStart = function (__s22param0) {
    var __s22local0 = __s22param0.scrollItem.scrollItemVO && __s22param0.scrollItem.scrollItemVO.gemVO;
    if (__s22local0 && !this.dragMovement) {
      this.startGemDrag(new __dep_export_GemDragMovement.GemDragMovement(__s22local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      this.checkForFittingSlots();
    }
  };
  EquipmentGemClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (__s25param0) {
    if (this.dragMovement) {
      if (__s25param0.originEvent) {
        var __s25local0 = __s25param0.originEvent.target.stage.getObjectUnderPoint(__s25param0.originEvent.rawX, __s25param0.originEvent.rawY, 0);
        if (__s25local0.parent === this.dialogDisp.saleSlot) {
          __s25param0.originEvent.target = __s25local0.parent;
          __s1param0.prototype.handleDialogClick.call(this, __s25param0.originEvent);
          return;
        }
        var __s25local1 = __s25local0.parent && __s25local0.parent.parent;
        if (__s25local1) {
          switch (__s25local1) {
            case this.dialogDisp.slot0:
            case this.dialogDisp.slot1:
            case this.dialogDisp.slot2:
            case this.dialogDisp.slot3:
            case this.dialogDisp.slot4:
            case this.dialogDisp.slot5:
              this.handleSlotClick(__s25local1);
          }
        }
      }
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentGemClickHandler.prototype.handleInventoryClick = function (__s32param0) {
    if (this.dragMovement && __s32param0.target.parent == this.dialogDisp.mc_equipmentList && instanceOf(__s32param0.target, "Bitmap")) {
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentGemClickHandler.prototype.handleDialogClick = function (__s35param0) {
    __s1param0.prototype.handleDialogClick.call(this, __s35param0);
    if (this.dragMovement) {
      this.checkForFittingSlots();
    }
    switch (__s35param0.target) {
      case this.dialogDisp.mc_equipmentList.tab0:
      case this.dialogDisp.mc_equipmentList.tab1:
      case this.dialogDisp.mc_equipmentList.tab2:
      case this.dialogDisp.mc_equipmentList.tab3:
      case this.dialogDisp.mc_equipmentList.tab4:
      case this.dialogDisp.mc_equipmentList.tab5:
      case this.dialogDisp.mc_equipmentList.tab6:
        this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s35param0.target, "EquipmentGemSocket") && this.hasMCParentOfSlot(__s35param0.target)) {
      this.handleSlotClick(this.hasMCParentOfSlot(__s35param0.target));
    }
  };
  EquipmentGemClickHandler.prototype.hasMCParentOfSlot = function (__s40param0) {
    if (!__s40param0 || !__s40param0.parent) {
      return null;
    }
    for (var __s40local0 = 0; __s40local0 < 6; __s40local0++) {
      if ((__s40param0.parent == this.dialogDisp["slot" + __s40local0] || __s40param0["slot" + __s40local0]) && __s40param0 != this.dialogDisp) {
        return this.dialogDisp["slot" + __s40local0];
      }
    }
    return this.hasMCParentOfSlot(__s40param0.parent);
  };
  EquipmentGemClickHandler.prototype.handleSlotClick = function (__s46param0) {
    if (this.equipmentScreen.currentLord.isAvailableForEquip) {
      if (this._canDrag) {
        if (!this.isEmptySlot(__s46param0)) {
          if (this.dragMovement && this.isDragActionRelicAllowed) {
            if (__s46param0.slotVO.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO && !!__s46param0.slotVO.equipmentVO.canSlotGem && (this.dragMovement.draggedGemVO.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL || this.dragMovement.draggedGemVO.slotType == __s46param0.slotVO.slotType) && (!__dep_exact_81dacdf05bd32292.instanceOfClass(this.dragMovement.draggedEquipableVO, "RelicGemVO") || !__s46param0.slotVO.equipmentVO || !!__dep_exact_81dacdf05bd32292.instanceOfClass(__s46param0.slotVO.equipmentVO, "RelicEquipmentVO"))) {
              this.lastAddedGemSlot = __s46param0;
              this.addGemToEquipment(this.dragMovement.draggedGemVO, __s46param0.slotVO, this.equipmentScreen.currentLord);
            }
          } else if (!this.dragMovement) {
            __dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot = __s46param0;
            this._inventory.currentFilterIndex = __dep_export_CastleEquipmentSublayer.CastleEquipmentSublayer.FILTER_MAP.get(__s46param0.slotVO.equipmentVO.slotType);
          }
        }
      } else {
        this.markAsFavorite(__s46param0);
      }
    }
  };
  EquipmentGemClickHandler.prototype.markAsFavorite = function (__s55param0) {
    if (__s55param0.slotVO.equipmentVO) {
      __s55param0.slotVO.equipmentVO.isFavorite = !__s55param0.slotVO.equipmentVO.isFavorite;
      __s55param0.favoriteDisp.disp.mc_star_active.visible = __s55param0.slotVO.equipmentVO.isFavorite;
      __s55param0.favoriteDisp.disp.mc_star_inactive.visible = !__s55param0.slotVO.equipmentVO.isFavorite;
      __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.gemItemUpdatedSignal.dispatch(__s55param0.slotVO.equipmentVO);
    }
  };
  EquipmentGemClickHandler.prototype.startGemDrag = function (__s58param0) {
    this.dragMovement = __s58param0;
    this.dragMovement.startDrag();
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  EquipmentGemClickHandler.prototype.endDrag = function (__s60param0, __s60param1 = null) {
    if (this.dragMovement) {
      this.lastDragMovement = this.dragMovement;
    }
    __s1param0.prototype.endDrag.call(this, __s60param0, __s60param1);
  };
  EquipmentGemClickHandler.prototype.addGemToEquipment = function (__s63param0, __s63param1, __s63param2) {
    this.clearDrag();
    if (__s63param1.equipmentVO.gemVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleReplaceSocketDialog.CastleReplaceSocketDialog, new __dep_export_CastleSocketDialogProperties.CastleSocketDialogProperties(__s63param0, __s63param1.equipmentVO.gemVO, __s63param1.equipmentVO, __s63param2.id, this.bindFunction(this.onInsertGemSuccess), this.bindFunction(this.onInsertGemAbort)));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewSocketDialog.CastleNewSocketDialog, new __dep_export_CastleSocketDialogProperties.CastleSocketDialogProperties(__s63param0, null, __s63param1.equipmentVO, __s63param2.id, this.bindFunction(this.onInsertGemSuccess), this.bindFunction(this.onInsertGemAbort)));
    }
  };
  EquipmentGemClickHandler.prototype.updateDialog = function () {
    this._inventory.update();
    this.checkForFittingSlots();
    this.updateSlotTooltip();
    this.updateSlotMouseChildren();
    this.setStorageWarning();
  };
  EquipmentGemClickHandler.prototype.checkForFittingSlots = function () {
    if (this.equipmentScreen.currentLord.isAvailableForEquip) {
      for (var __s69local0 in this.equipmentScreen.allSlotsOnScreen) {
        var __s69local1 = this.equipmentScreen.allSlotsOnScreen[__s69local0];
        if (__s69local1 !== undefined) {
          var __s69local2 = __s69local1.slotVO;
          if (this.dragMovement && this.dragMovement.draggedGemVO) {
            if (this.isDragActionRelicAllowed) {
              if (this._dragMovement && __dep_exact_81dacdf05bd32292.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO") && __s69local2.equipmentVO && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s69local2.equipmentVO, "RelicEquipmentVO")) {
                __s69local1.mc_lock.visible = true;
                __s69local1.mc_bgEmpty.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER;
              } else if (__s69local2.equipmentVO && __s69local2.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO && __s69local2.equipmentVO.canSlotGem && (this.dragMovement.draggedGemVO.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL || this.dragMovement.draggedGemVO.slotType == __s69local2.slotType)) {
                __s69local1.mc_lock.visible = false;
                __s69local1.mc_bg.allowFastGlow = false;
                __s69local1.mc_bg.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_ENABLED_GEM_SLOT, false, 1);
              } else {
                __s69local1.mc_lock.visible = __s69local2.isFree || !__s69local2.isFree && __s69local2.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO || !__s69local2.equipmentVO.canSlotGem;
                __s69local1.mc_bg.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
              }
            } else {
              __s69local1.mc_lock.visible = true;
              __s69local1.mc_bgEmpty.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER;
            }
          } else {
            __s69local1.mc_lock.visible = false;
            __s69local1.mc_bg.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
          }
        }
      }
    }
  };
  EquipmentGemClickHandler.prototype.hideDialog = function () {
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
  };
  EquipmentGemClickHandler.prototype.onInsertGemAbort = function () {
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
  };
  EquipmentGemClickHandler.prototype.onInsertGemSuccess = function () {
    this.lastAddedGemSlot.mc_anim.gotoAndPlay(2);
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT));
    __dep_export_CastleModel.CastleModel.equipData.handleGemInserted(this.lastDragMovement.draggedGemVO);
  };
  EquipmentGemClickHandler.prototype.confirmSellCallback = function (__s88param0 = false) {
    if (this.dragMovement) {
      __dep_export_CastleModel.CastleModel.gemData.sell(this.dragMovement.draggedGemVO);
    } else {
      __dep_export_CastleModel.CastleModel.gemData.sell(this.lastDragMovement.draggedGemVO);
    }
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SELL_SLOT));
  };
  Object.defineProperty(EquipmentGemClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (__s94param0) {
      this._dragMovement = __s94param0;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentGemClickHandler;
}(__dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler);
exports.EquipmentGemClickHandler = __s0local0;
