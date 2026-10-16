Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_EquipmentDialogClickHandler = require("gge-module:export_EquipmentDialogClickHandler");
var __dep_export_EquipmentDragMovement = require("gge-module:export_EquipmentDragMovement");
var __dep_export_CastleEquipmentSublayer = require("gge-module:export_CastleEquipmentSublayer");
var __s0local0 = createjs.Bitmap;
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __s0local1 = function (__s1param0) {
  function EquipmentEquipmentClickHandler(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentEquipmentClickHandler, __s1param0);
  EquipmentEquipmentClickHandler.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    if (__dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot && __dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot.slotVO.equipmentVO) {
      this.startDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot.slotVO.equipmentVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), __dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot));
      this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
      this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
      __dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot.mc_anim.gotoAndStop(1);
      __dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler.targetSlot = null;
    }
    this.setStorageWarning();
    this.setAddStorageBtn();
    this.equipmentScreen.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(1);
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.equipmentScreen.gemFilterPanel.hide();
  };
  EquipmentEquipmentClickHandler.prototype.onInventorySpaceChanged = function (__s8param0) {
    this.setStorageWarning();
    this.setAddStorageBtn();
  };
  EquipmentEquipmentClickHandler.prototype.updateInventory = function () {
    this._inventory.update();
  };
  EquipmentEquipmentClickHandler.prototype.setStorageWarning = function () {
    this.dialogDisp.mc_storageWarning.toolTipText = "dialog_equipment_storageWarning";
    this.dialogDisp.mc_storageWarning.visible = __dep_export_CastleModel.CastleModel.equipData.isInventoryFull;
    this.equipmentScreen.itxt_storage.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace];
    this.equipmentScreen.itxt_storage.color = __dep_export_CastleModel.CastleModel.equipData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryEntryClick = function (__s14param0) {
    if (this._canDrag) {
      var __s14local0 = __s14param0.scrollItem.scrollItemVO.equipmentVO;
      if (this.dragMovement) {
        if (__s14param0.scrollItem.scrollItemVO) {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s14local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s14local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryEntryTouchDragStart = function (__s21param0) {
    var __s21local0 = __s21param0.scrollItem.scrollItemVO && __s21param0.scrollItem.scrollItemVO.equipmentVO;
    if (__s21local0 && !this.dragMovement) {
      this.startDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s21local0, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY)));
      this.checkForFittingSlots();
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (__s24param0) {
    if (this.dragMovement) {
      if (__s24param0.originEvent) {
        var __s24local0 = __s24param0.originEvent.target.stage.getObjectUnderPoint(__s24param0.originEvent.rawX, __s24param0.originEvent.rawY, 0);
        if (__s24local0.parent === this.dialogDisp.saleSlot) {
          __s24param0.originEvent.target = __s24local0.parent;
          __s1param0.prototype.handleDialogClick.call(this, __s24param0.originEvent);
          return;
        }
        var __s24local1 = __s24local0.parent && __s24local0.parent.parent;
        if (__s24local1) {
          switch (__s24local1) {
            case this.dialogDisp.slot0:
            case this.dialogDisp.slot1:
            case this.dialogDisp.slot2:
            case this.dialogDisp.slot3:
            case this.dialogDisp.slot4:
            case this.dialogDisp.slot5:
              this.handleSlotClick(__s24local1);
          }
        }
      }
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryClick = function (__s31param0) {
    if (this.dragMovement && __s31param0.target.parent == this.dialogDisp.mc_equipmentList && __s31param0.target instanceof __s0local0) {
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleDialogClick = function (__s34param0) {
    __s1param0.prototype.handleDialogClick.call(this, __s34param0);
    if (this.dragMovement) {
      this.checkForFittingSlots();
    }
    switch (__s34param0.target) {
      case this.dialogDisp.mc_equipmentList.tab0:
      case this.dialogDisp.mc_equipmentList.tab1:
      case this.dialogDisp.mc_equipmentList.tab2:
      case this.dialogDisp.mc_equipmentList.tab3:
      case this.dialogDisp.mc_equipmentList.tab4:
      case this.dialogDisp.mc_equipmentList.tab5:
      case this.dialogDisp.mc_equipmentList.tab6:
        this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s34param0.target, "EquipmentGemSocket") && this.hasMCParentOfSlot(__s34param0.target)) {
      this.handleSlotClick(this.hasMCParentOfSlot(__s34param0.target));
    }
  };
  EquipmentEquipmentClickHandler.prototype.hasMCParentOfSlot = function (__s39param0) {
    if (!__s39param0 || !__s39param0.parent) {
      return null;
    }
    for (var __s39local0 = 0; __s39local0 < 6; __s39local0++) {
      if ((__s39param0.parent == this.dialogDisp["slot" + __s39local0] || __s39param0["slot" + __s39local0]) && __s39param0 != this.dialogDisp) {
        return this.dialogDisp["slot" + __s39local0];
      }
    }
    return this.hasMCParentOfSlot(__s39param0.parent);
  };
  EquipmentEquipmentClickHandler.prototype.handleSlotClick = function (__s45param0) {
    if (this.equipmentScreen.currentLord.isAvailableForEquip && !__dep_export_CastleModel.CastleModel.equipData.isEquiqInProgress) {
      if (this._canDrag) {
        if (this.dragMovement) {
          if (this.dragMovement.draggedEquipmentVO.slotType == __s45param0.slotVO.slotType && this.isDragActionRelicAllowed) {
            if (this.isEmptySlot(__s45param0)) {
              this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), __s45param0);
            } else {
              var __s45local0 = new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s45param0.slotVO.equipmentVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT, -1));
              this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), __s45param0);
              this.startDrag(__s45local0);
              this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
              this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
            }
          }
        } else if (__s45param0.slotVO.equipmentVO) {
          if (__s45param0.favoriteDisp) {
            __s45param0.favoriteDisp.disp.mc_star_small.visible = false;
          }
          this.startDrag(new __dep_export_EquipmentDragMovement.EquipmentDragMovement(__s45param0.slotVO.equipmentVO, new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), __s45param0));
          this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
          this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
        }
      } else {
        this.markAsFavorite(__s45param0);
      }
    }
  };
  EquipmentEquipmentClickHandler.prototype.markAsFavorite = function (__s56param0) {
    if (__s56param0.slotVO.equipmentVO) {
      __s56param0.slotVO.equipmentVO.isFavorite = !__s56param0.slotVO.equipmentVO.isFavorite;
      __s56param0.favoriteDisp.disp.mc_star_active.visible = __s56param0.slotVO.equipmentVO.isFavorite;
      __s56param0.favoriteDisp.disp.mc_star_inactive.visible = !__s56param0.slotVO.equipmentVO.isFavorite;
      __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.equipmentItemUpdatedSignal.dispatch(__s56param0.slotVO.equipmentVO);
    }
  };
  EquipmentEquipmentClickHandler.prototype.startDrag = function (__s59param0) {
    this.dragMovement = __s59param0;
    this.dragMovement.startDrag();
    if (__dep_exact_f855840627e6e145.int(__dep_export_CastleEquipmentSublayer.CastleEquipmentSublayer.FILTER_MAP.get(this.dragMovement.draggedEquipmentVO.slotType)) != this._inventory.currentFilterIndex) {
      this._inventory.currentFilterIndex = __dep_export_CastleEquipmentSublayer.CastleEquipmentSublayer.FILTER_MAP.get(this.dragMovement.draggedEquipmentVO.slotType);
    }
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  EquipmentEquipmentClickHandler.prototype.endDrag = function (__s62param0, __s62param1 = null) {
    if (this.dragMovement) {
      this.lastDragMovement = this.dragMovement;
    }
    __s1param0.prototype.endDrag.call(this, __s62param0, __s62param1);
  };
  EquipmentEquipmentClickHandler.prototype.onUnEquipSuccess = function (__s65param0) {
    this.checkForFittingSlots();
    this.equipmentScreen.updateCurrentLordPic();
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
  };
  EquipmentEquipmentClickHandler.prototype.onUnEquipFail = function (__s67param0) {
    if (this.dragMovement) {
      this.endDrag(this.dragMovement.sourceLocation, this.dragMovement.sourceSlotMC);
    }
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
  };
  EquipmentEquipmentClickHandler.prototype.confirmSellCallback = function (__s70param0 = false) {
    var __s70local0 = this.dragMovement ? this.dragMovement : this.lastDragMovement;
    if (__s70param0) {
      __dep_export_CastleModel.CastleModel.gemData.extractGem(__s70local0.draggedEquipmentVO, -1);
    } else {
      __dep_export_CastleModel.CastleModel.equipData.sell(__s70local0.draggedEquipmentVO, -1, -1);
    }
    this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SELL_SLOT));
  };
  EquipmentEquipmentClickHandler.prototype.updateDialog = function () {
    this.checkForFittingSlots();
    this.updateSlotBorder();
    this.updateSlotTooltip();
    this.updateSlotMouseChildren();
    this._inventory.update();
    this.equipmentScreen.lordEffectsComponent.update();
    this.setStorageWarning();
    this.equipmentScreen.updateCurrentLordPic();
  };
  Object.defineProperty(EquipmentEquipmentClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (__s78param0) {
      this._dragMovement = __s78param0;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentEquipmentClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  EquipmentEquipmentClickHandler.prototype.hideDialog = function () {
    if (this.dragMovement) {
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(this.dragMovement.sourceLocation.locationType, this.dragMovement.sourceLocation.lordID));
    }
  };
  EquipmentEquipmentClickHandler.prototype.onCastleListUpdated = function (__s85param0) {
    this.equipmentScreen.setCastleIcon();
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
  };
  EquipmentEquipmentClickHandler.prototype.updateSlotBorder = function () {
    var __s87local0 = this.equipmentScreen.allSlotsOnScreen;
    var __s87local1 = 0;
    if (__s87local0 != null) {
      for (var __s87local2 in __s87local0) {
        var __s87local3 = __s87local0[__s87local2];
        if (__s87local3 !== undefined) {
          if (__s87local3.slotVO.equipmentVO) {
            if ((__s87local1 = __dep_exact_f855840627e6e145.int(__s87local3.slotVO.equipmentVO.visualRareID)) == 0) {
              __s87local1 = 5;
            }
            __s87local3.mc_bg.gotoAndStop(__s87local1);
          } else {
            __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s87local3.mc_itemHolder);
            __s87local3.mc_bg.gotoAndStop(7);
          }
        }
      }
    }
  };
  EquipmentEquipmentClickHandler.prototype.checkForFittingSlots = function () {
    if (!this.equipmentScreen.currentLord || this.equipmentScreen.currentLord.isAvailableForEquip) {
      for (var __s96local0 in this.equipmentScreen.allSlotsOnScreen) {
        var __s96local1 = this.equipmentScreen.allSlotsOnScreen[__s96local0];
        if (__s96local1 !== undefined) {
          var __s96local2 = __s96local1.slotVO;
          if (this.dragMovement && this.dragMovement.draggedEquipmentVO) {
            if (this.isDragActionRelicAllowed) {
              if (this.dragMovement.draggedEquipmentVO.slotType == __s96local2.slotType) {
                __s96local1.mc_lock.visible = false;
                __s96local1.mc_bgEmpty.allowFastGlow = false;
                __s96local1.mc_bgEmpty.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_ENABLED_EQUIPMENT_SLOT, false, 1);
              } else {
                __s96local1.mc_lock.visible = !__s96local2.equipmentVO;
                __s96local1.mc_bgEmpty.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
              }
            } else {
              __s96local1.mc_lock.visible = true;
              __s96local1.mc_bgEmpty.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER;
            }
          } else {
            __s96local1.mc_lock.visible = false;
            __s96local1.mc_bgEmpty.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
          }
        }
      }
    } else {
      for (var __s96local0 in this.equipmentScreen.allSlotsOnScreen) {
        var __s96local3 = this.equipmentScreen.allSlotsOnScreen[__s96local0];
        if (__s96local3 !== undefined) {
          __s96local3.mc_lock.visible = false;
          __s96local3.mc_bgEmpty.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
        }
      }
    }
  };
  return EquipmentEquipmentClickHandler;
}(__dep_export_EquipmentDialogClickHandler.EquipmentDialogClickHandler);
exports.EquipmentEquipmentClickHandler = __s0local1;
