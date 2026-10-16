Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SEnchantEquipmentEvent = require("gge-module:export_C2SEnchantEquipmentEvent");
var __dep_export_C2SGetEquipmentInventory = require("gge-module:export_C2SGetEquipmentInventory");
var __dep_export_C2SGetLordsInfoVO = require("gge-module:export_C2SGetLordsInfoVO");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleEquipmentSlotVO = require("gge-module:export_CastleEquipmentSlotVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_ACastleBasicEquipmentDialog = require("gge-module:export_ACastleBasicEquipmentDialog");
var __dep_export_EquipmentScrollItemVO = require("gge-module:export_EquipmentScrollItemVO");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleEquipmentEnchanterDialog() {
    var __s3local0 = this;
    __s3local0.mouseIsPlaying = false;
    __s3local0._comesFromInventory = false;
    __s3local0.mouseOverPayC2 = false;
    __s3local0.mouseOverPayC1 = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleEquipmentEnchanterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentEnchanterDialog, __s1param0);
  CastleEquipmentEnchanterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payC1, this.dialogDisp.btn_payC2, this.dialogDisp.btn_general, this.dialogDisp.btn_baron, this.dialogDisp.btn_all, this.dialogDisp.mc_equipmentList.btn_up, this.dialogDisp.mc_equipmentList.btn_down, this.dialogDisp.btn_help]);
    for (var __s5local0 = 0; __s5local0 < CastleEquipmentEnchanterDialog.ITEMS_PER_PAGE; __s5local0++) {
      var __s5local1 = this.dialogDisp.mc_equipmentList["item" + __s5local0];
      if (__s5local1) {
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s5local1);
      }
    }
    this.dialogDisp.btn_general.toolTipText = "dialog_equipmentEnchanterEvent_generalItems";
    this.dialogDisp.btn_baron.toolTipText = "dialog_equipmentEnchanterEvent_baronItems";
    this.dialogDisp.btn_all.toolTipText = "dialog_equipmentEnchanterEvent_inventoryItems";
    this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_pay";
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_itemTarget.mouseChildren = false;
    this.dialogDisp.mc_text_Success.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    this.dialogDisp.mc_text_Failed.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    this.dialogDisp.mc_equipmentList.tickEnabled = this.dialogDisp.mc_equipmentList.tickChildren = false;
  };
  CastleEquipmentEnchanterDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentEnchanterEvent_title"));
    this.itxt_failMessage = this.textFieldManager.registerTextField(this.dialogDisp.mc_text_Failed.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentEnchanterEvent_miss"));
    this.itxt_successMessage = this.textFieldManager.registerTextField(this.dialogDisp.mc_text_Success.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentEnchanterEvent_success"));
    this.i_howMany_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_howMany.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.i_succRate_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_successRate.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_costs_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.i_eqList_txt_emptyEquipList = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.txt_emptyEquipList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentEnchanterEvent_noItemInList_all"));
    this.itxt_emptyBoniList = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_GENERAL;
    this.initSlots();
    this.updateEffectList();
    this.getEquipmentInventory();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.layoutManager.uiStage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.playMouse));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemoved));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.bindFunction(this.onEquipmentEnchanted));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, this.bindFunction(this.onEquipmentEnchantingFailed));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID, this.bindFunction(this.onEquipmentEnchantingInvalid));
    this.disp.addEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOutCheck));
    this.dialogDisp.mc_itemTarget.mc_bg.gotoAndStop(1);
    this.dialogDisp.mc_itemTarget.toolTipText = CastleEquipmentEnchanterDialog.TARGET_TOOLTIP_ID;
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_animationFailed.gotoAndStop(1);
    this.dialogDisp.mc_text_Failed.visible = false;
    this.dialogDisp.mc_animationSuccess.visible = false;
    this.dialogDisp.mc_animationSuccess.gotoAndPlay(1);
    this.dialogDisp.mc_text_Success.visible = false;
    this.updatePrimeSaleInfo();
  };
  CastleEquipmentEnchanterDialog.prototype.updatePrimeSaleInfo = function () {
    this._primeSaleEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_PRIME_SALES_TECHNICUS);
    if (this._primeSaleEventVO) {
      this.dialogDisp.mc_discount_stamp.visible = true;
      this.dialogDisp.mc_ruby_button_tooltip.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_discount_stamp.txt_discount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this._primeSaleEventVO.discount * -1));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_ruby_button_tooltip.txt_tooltip, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentEnchanterEvent_primeSale_info"));
    } else {
      this.dialogDisp.mc_discount_stamp.visible = false;
      this.dialogDisp.mc_ruby_button_tooltip.visible = false;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMouseOutCheck = function (__s16param0) {
    if ((__s16param0.stageX <= 0 || __s16param0.stageX >= this.disp.stage.stageWidth || __s16param0.stageY <= 0 || __s16param0.stageY >= this.disp.stage.stageHeight) && this._selectedDragEquipment) {
      if (this._comesFromInventory) {
        this.dropItemOnList();
      } else {
        this.dropItemOnEmtpySlot();
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEquipmentEnchantingInvalid = function (__s21param0) {
    this.dialogDisp.mc_animationSuccess.visible = false;
    this.dialogDisp.mc_animationSuccess.gotoAndStop(1);
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_animationFailed.gotoAndStop(1);
    this.unLockDialog();
  };
  CastleEquipmentEnchanterDialog.prototype.onRefreshEvent = function (__s23param0) {
    this.updatePrimeSaleInfo();
    this.updateEffectList();
  };
  CastleEquipmentEnchanterDialog.prototype.onRemoveEvent = function (__s25param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25param0.specialEventVO, "EquipmentEnhancerEventVO")) {
      this.hide();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25param0.specialEventVO, "EquipmentEnhancerPrimeSaleEventVO")) {
      this.updatePrimeSaleInfo();
      this.updateEffectList();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEquipmentEnchantingFailed = function (__s29param0) {
    this.dialogDisp.mc_animationSuccess.visible = false;
    this.dialogDisp.mc_animationSuccess.gotoAndStop(1);
    this.dialogDisp.mc_animationFailed.visible = true;
    this.dialogDisp.mc_animationFailed.gotoAndPlay(2);
    this.unLockDialog();
    this.dialogDisp.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_text_Failed, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeInNowFadeOut),
      onCompleteParams: [this.dialogDisp.mc_text_Failed]
    });
    this.dialogDisp.mc_text_Failed.visible = true;
    this.dialogDisp.mc_text_Failed.updateCacheIfCached();
  };
  CastleEquipmentEnchanterDialog.prototype.onCompleteFadeInNowFadeOut = function (__s31param0) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s31param0, 1, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.onCompleteFadeOut,
      onCompleteParams: [__s31param0]
    });
  };
  CastleEquipmentEnchanterDialog.prototype.onCompleteFadeOut = function (__s33param0) {
    __s33param0.visible = false;
  };
  CastleEquipmentEnchanterDialog.prototype.lockDialog = function () {
    __s1param0.prototype.lockDialog.call(this);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
    this.dialogDisp.btn_payC1.toolTipText = null;
    this.dialogDisp.btn_payC2.toolTipText = null;
  };
  CastleEquipmentEnchanterDialog.prototype.unLockDialog = function () {
    __s1param0.prototype.unLockDialog.call(this);
    this.updateEffectList();
    if (this.mouseOverPayC1) {
      this.layoutManager.tooltipManager.show(this.dialogDisp.btn_payC1.toolTipText, this.dialogDisp.btn_payC1);
    }
    if (this.mouseOverPayC2) {
      if (this.dialogDisp.btn_payC2.enabled) {
        this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
        this.i_succRate_txt_value.textContentVO.textReplacements = [100];
        this.i_succRate_txt_value.color = 34816;
      }
      this.layoutManager.tooltipManager.show(this.dialogDisp.btn_payC2.toolTipText, this.dialogDisp.btn_payC2);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEnterFrame = function (__s42param0) {
    if (this.dialogDisp.mc_animationFailed.currentFrame == 0 && this.dialogDisp.mc_animationSuccess.currentFrame == 0) {
      this.dialogDisp.mc_animationFailed.visible = false;
      this.dialogDisp.mc_animationSuccess.visible = false;
      this.dialogDisp.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      this.unLockDialog();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEquipmentEnchanted = function (__s45param0) {
    var __s45local0 = this.getLordByItem(this.dialogDisp.mc_itemTarget.slotVO.equipmentVO);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s45param0.equipmentInventory[0], this.dialogDisp.mc_itemTarget.mc_equipmentHolder, CastleEquipmentEnchanterDialog.MAX_WIDTH, CastleEquipmentEnchanterDialog.MAX_HEIGHT, null, true, false, false, true, true);
    this.dialogDisp.mc_itemTarget.slotVO.equipmentVO = __s45param0.equipmentInventory[0];
    if (__s45local0) {
      __s45local0.setEquipment(__s45param0.equipmentInventory[0]);
    }
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_animationFailed.gotoAndStop(1);
    this.dialogDisp.mc_animationSuccess.visible = true;
    this.dialogDisp.mc_animationSuccess.gotoAndPlay(2);
    this.unLockDialog();
    this.dialogDisp.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_text_Success, 1, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeInNowFadeOut),
      onCompleteParams: [this.dialogDisp.mc_text_Success]
    });
    this.dialogDisp.mc_text_Success.visible = true;
    this.dialogDisp.mc_text_Success.updateCacheIfCached();
  };
  CastleEquipmentEnchanterDialog.prototype.playMouse = function (__s48param0) {
    if (this.mouseIsPlaying) {
      if (this.dialogDisp.mc_wheel.currentFrame == 0) {
        this.mouseIsPlaying = false;
      }
    } else {
      this.dialogDisp.mc_wheel.play();
      this.dialogDisp.mc_mouse.play();
      this.mouseIsPlaying = true;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMovementRemoved = function (__s53param0) {
    this.updateFilteredInventory();
  };
  CastleEquipmentEnchanterDialog.prototype.getEquipmentInventory = function () {
    __dep_export_CastleModel.CastleModel.lordData.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLordsInfoVO.C2SGetLordsInfoVO());
    this.lockDialog();
  };
  CastleEquipmentEnchanterDialog.prototype.onLordsUpdated = function (__s57param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetEquipmentInventory.C2SGetEquipmentInventory());
  };
  CastleEquipmentEnchanterDialog.prototype.onInventoryUpdated = function (__s59param0) {
    this.unLockDialog();
    var __s59local0 = __dep_export_CastleModel.CastleModel.equipData.playerInventory;
    this._equipmentInventory = __s59local0.concat([]);
    this.updateFilteredInventory();
  };
  CastleEquipmentEnchanterDialog.prototype.initScrollList = function () {
    __s1param0.prototype.initScrollList.call(this);
    this.checkCraftingCategoryAndLockItems();
  };
  Object.defineProperty(CastleEquipmentEnchanterDialog.prototype, "favIconByEQRenderer", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnchanterDialog.prototype.updateFilteredInventory = function () {
    this._filteredInventory = this.equipmentInventory;
    this.initScrollList();
    this.checkCraftingCategoryAndLockItems();
    this.i_eqList_txt_emptyEquipList = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.txt_emptyEquipList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentEnchanterEvent_noItemInList_all"));
    this.i_eqList_txt_emptyEquipList.visible = true;
    if (this._filteredInventory.length == 0) {
      switch (this._currentLordFilter) {
        case CastleEquipmentEnchanterDialog.FILTER_ALL:
          this.i_eqList_txt_emptyEquipList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInList_all";
          break;
        case CastleEquipmentEnchanterDialog.FILTER_BARON:
          this.i_eqList_txt_emptyEquipList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInList_baron";
          break;
        case CastleEquipmentEnchanterDialog.FILTER_GENERAL:
          this.i_eqList_txt_emptyEquipList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInList_general";
      }
    } else {
      this.i_eqList_txt_emptyEquipList.visible = false;
      this.i_eqList_txt_emptyEquipList.clearText();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.isValidForEnchanter = function (__s70param0) {
    return !!__s70param0 && !!__s70param0.isEnchantable && !(__s70param0 instanceof __dep_export_RelicEquipmentVO.RelicEquipmentVO) && __s70param0.hasEnchantmentUpgradePath;
  };
  Object.defineProperty(CastleEquipmentEnchanterDialog.prototype, "equipmentInventory", {
    get: function () {
      var __s72local0 = [];
      if (this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_ALL) {
        __s72local0 = [];
        if (this._equipmentInventory != null) {
          for (var __s72local1 = 0, __s72local2 = this._equipmentInventory; __s72local1 < __s72local2.length; __s72local1++) {
            var __s72local3 = __s72local2[__s72local1];
            if (__s72local3 !== undefined && this.isValidForEnchanter(__s72local3)) {
              __s72local0.push(__s72local3);
            }
          }
        }
        this._equipmentInventory = __s72local0;
      } else if (this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_BARON) {
        for (var __s72local4 = 0, __s72local5 = __dep_export_CastleModel.CastleModel.lordData.barons; __s72local4 < __s72local5.length; __s72local4++) {
          var __s72local6 = __s72local5[__s72local4];
          if (__s72local6 !== undefined) {
            for (var __s72local7 in __s72local6.equipmentSlots) {
              var __s72local8 = __s72local6.equipmentSlots[__s72local7];
              if (__s72local8 !== undefined && this.isValidForEnchanter(__s72local8.equipmentVO)) {
                __s72local0.push(__s72local8.equipmentVO);
              }
            }
          }
        }
      } else if (this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_GENERAL) {
        for (var __s72local9 = 0, __s72local10 = __dep_export_CastleModel.CastleModel.lordData.commanders; __s72local9 < __s72local10.length; __s72local9++) {
          var __s72local11 = __s72local10[__s72local9];
          if (__s72local11 !== undefined) {
            for (var __s72local12 in __s72local11.equipmentSlots) {
              var __s72local13 = __s72local11.equipmentSlots[__s72local12];
              if (__s72local13 !== undefined && this.isValidForEnchanter(__s72local13.equipmentVO)) {
                __s72local0.push(__s72local13.equipmentVO);
              }
            }
          }
        }
      }
      for (var __s72local14 = 0; __s72local14 < __s72local0.length; __s72local14++) {
        if (this.dialogDisp.mc_itemTarget.slotVO && this.dialogDisp.mc_itemTarget.slotVO.equipmentVO && this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.id == __s72local0[__s72local14].id) {
          __s72local0.splice(__s72local14, 1);
          break;
        }
      }
      __s72local0.sort(this.bindFunction(this.onSortEquipmentItems));
      return __s72local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnchanterDialog.prototype.onSortEquipmentItems = function (__s96param0, __s96param1) {
    var __s96local0 = __s96param0.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s96param0.visualRareID);
    var __s96local1 = __s96param1.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s96param1.visualRareID);
    if (__s96local0 != __s96local1) {
      if (__s96local0) {
        return 1;
      }
      if (__s96local1) {
        return -1;
      }
    }
    var __s96local2 = this.getLordByItem(__s96param0);
    var __s96local3 = this.getLordByItem(__s96param1);
    var __s96local4 = !!__s96local2 && !__s96local2.isAvailableForEquip;
    var __s96local5 = !!__s96local3 && !__s96local3.isAvailableForEquip;
    if (__s96local4 != __s96local4) {
      if (__s96local4) {
        return 1;
      }
      if (__s96local5) {
        return -1;
      }
    }
    if (__s96param0.rareID != __s96param1.rareID) {
      if (__s96param0.rareID == 0) {
        return -1;
      }
      if (__s96param1.rareID == 0) {
        return 1;
      }
      if (__s96param0.rareID < __s96param1.rareID) {
        return 1;
      }
      if (__s96param0.rareID > __s96param1.rareID) {
        return -1;
      }
    }
    if (__s96param0.id < __s96param1.id) {
      return 1;
    } else if (__s96param0.id > __s96param1.id) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.getLordByItem = function (__s112param0) {
    for (var __s112local0 = 0, __s112local1 = __dep_export_CastleModel.CastleModel.lordData.barons; __s112local0 < __s112local1.length; __s112local0++) {
      var __s112local2 = __s112local1[__s112local0];
      if (__s112local2 !== undefined && (__s112local2.helmetSlotVO.equipmentVO && __s112local2.helmetSlotVO.equipmentVO.id == __s112param0.id || __s112local2.armorSlotVO.equipmentVO && __s112local2.armorSlotVO.equipmentVO.id == __s112param0.id || __s112local2.artifactSlotVO.equipmentVO && __s112local2.artifactSlotVO.equipmentVO.id == __s112param0.id || __s112local2.weaponSlotVO.equipmentVO && __s112local2.weaponSlotVO.equipmentVO.id == __s112param0.id)) {
        return __s112local2;
      }
    }
    for (var __s112local3 = 0, __s112local4 = __dep_export_CastleModel.CastleModel.lordData.commanders; __s112local3 < __s112local4.length; __s112local3++) {
      var __s112local5 = __s112local4[__s112local3];
      if (__s112local5 !== undefined && (__s112local5.helmetSlotVO.equipmentVO && __s112local5.helmetSlotVO.equipmentVO.id == __s112param0.id || __s112local5.armorSlotVO.equipmentVO && __s112local5.armorSlotVO.equipmentVO.id == __s112param0.id || __s112local5.artifactSlotVO.equipmentVO && __s112local5.artifactSlotVO.equipmentVO.id == __s112param0.id || __s112local5.weaponSlotVO.equipmentVO && __s112local5.weaponSlotVO.equipmentVO.id == __s112param0.id)) {
        return __s112local5;
      }
    }
    return null;
  };
  CastleEquipmentEnchanterDialog.prototype.initSlots = function (__s120param0 = true) {
    var __s120local0 = this.dialogDisp.mc_itemTarget;
    if (__s120param0) {
      this.clearSlot();
    }
    __s120local0.slotVO = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL);
    __s120local0.mc_bg.mc_lock.visible = false;
    __s120local0.mc_deco.gotoAndStop(1);
  };
  CastleEquipmentEnchanterDialog.prototype.clearSlot = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_itemTarget.mc_equipmentHolder);
    this.dialogDisp.mc_itemTarget.toolTipText = CastleEquipmentEnchanterDialog.TARGET_TOOLTIP_ID;
    this.dialogDisp.mc_itemTarget.actLikeButton = false;
  };
  CastleEquipmentEnchanterDialog.prototype.onClick = function (__s125param0) {
    __s1param0.prototype.onClick.call(this, __s125param0);
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s125param0.target) && !this._selectedDragEquipment) {
      switch (__s125param0.target) {
        case this.dialogDisp.btn_general:
          this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_GENERAL;
          this._currentListPage = 0;
          this.initScrollList();
          break;
        case this.dialogDisp.btn_baron:
          this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_BARON;
          this._currentListPage = 0;
          this.initScrollList();
          break;
        case this.dialogDisp.btn_all:
          this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_ALL;
          this._currentListPage = 0;
          this.initScrollList();
          break;
        case this.dialogDisp.btn_payC1:
          this.lockDialog();
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEnchantEquipmentEvent.C2SEnchantEquipmentEvent(0, this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.id));
          break;
        case this.dialogDisp.btn_payC2:
          this.lockDialog();
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEnchantEquipmentEvent.C2SEnchantEquipmentEvent(1, this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.id));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_equipmentList.btn_up:
        case this.dialogDisp.mc_equipmentList.btn_down:
          this.checkCraftingCategoryAndLockItems();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_enchanter"));
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.removeFromInventory = function (__s129param0) {
    for (var __s129local0 = 0; __s129local0 < this._filteredInventory.length; __s129local0++) {
      if (this._filteredInventory[__s129local0].id == __s129param0.id) {
        this._filteredInventory.splice(__s129local0, 1);
        return;
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onScrollItemClick = function (__s134param0) {
    if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s134param0.scrollItem, "EquipmentScrollItem") || !__s134param0.scrollItem.locked) {
      this._itemScrollList.setActiveItemVO(__s134param0.scrollItem.scrollItemVO.id, true);
      var __s134local0 = __s134param0.scrollItem.equipmentScrollItemVO;
      if (this._selectedDragEquipment) {
        this.dropItemOnList();
      } else {
        this.addDragItem(__s134local0.equipmentVO, true);
        if (this._currentLordFilter == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON || this._currentLordFilter == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
          this.removeFromInventory(__s134local0.equipmentVO);
          this.initScrollList();
          this.checkCraftingCategoryAndLockItems();
        } else {
          this.removeFromInventory(__s134local0.equipmentVO);
          this.updateFilteredInventory();
        }
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.dropItemOnList = function () {
    if (!this.getLordByItem(this._selectedDragEquipment) && this._equipmentInventory.indexOf(this._selectedDragEquipment) == -1) {
      this._equipmentInventory.push(this._selectedDragEquipment);
    }
    this.updateFilteredInventory();
    this.removeDragItem();
  };
  CastleEquipmentEnchanterDialog.prototype.onScrollListScroll = function (__s144param0) {
    this.checkCraftingCategoryAndLockItems();
  };
  CastleEquipmentEnchanterDialog.prototype.checkCraftingCategoryAndLockItems = function () {
    for (var __s146local0 = 0, __s146local1 = this._itemScrollList.veList; __s146local0 < __s146local1.length; __s146local0++) {
      var __s146local2 = __s146local1[__s146local0];
      if (__s146local2 !== undefined) {
        var __s146local3 = __s146local2.equipmentScrollItemVO ? __s146local2.equipmentScrollItemVO.equipmentVO : null;
        if (__s146local3) {
          var __s146local4 = this.getLordByItem(__s146local3);
          var __s146local5 = __s146local4 != null && !__s146local4.isAvailableForEquip;
          var __s146local6 = __s146local3.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s146local3.visualRareID);
          __s146local2.lordAway = __s146local5;
          if (__s146local6) {
            __s146local2.locked = __s146local6;
          }
        }
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMouseDown = function (__s153param0) {
    if (!this.isLocked) {
      var __s153local0;
      var __s153local1 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s153param0.target);
      if (__s153local1) {
        if (this._selectedDragEquipment) {
          if (this.targetIsEnchantSlot(__s153local1)) {
            if ((__s153local0 = __s153local1.slotVO).equipmentVO) {
              if (__s153local0.equipmentVO) {
                __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s153local1.mc_equipmentHolder);
                this.fillSlotContainer(this._selectedDragEquipment, __s153local1);
                var __s153local2 = __s153local0.equipmentVO;
                __s153local0.equipmentVO = this._selectedDragEquipment;
                this.removeDragItem();
                this.addDragItem(__s153local2, true);
                this.updateEffectList();
                this.highlightSlot(__s153local1);
              }
            } else {
              this.dropItemOnEmtpySlot();
              this.disableHighlightedSlot();
            }
          } else if (__s153local1 == this.dialogDisp.mc_equipmentList) {
            var __s153local3 = new __dep_export_EquipmentScrollItemVO.EquipmentScrollItemVO();
            __s153local3.equipmentVO = this._selectedDragEquipment;
            if (!this.getLordByItem(__s153local3.equipmentVO)) {
              this._equipmentInventory.push(__s153local3.equipmentVO);
            }
            this.updateFilteredInventory();
            this.removeDragItem();
            this.updateEffectList();
          }
        } else if (this.targetIsItemSlot(__s153local1) && __s153local1.slotVO.equipmentVO) {
          __s153local0 = __s153local1.slotVO;
          this.addDragItem(__s153local0.equipmentVO, false);
          __s153local0.equipmentVO = null;
          this.clearSlot();
          __s153local1.mc_bg.gotoAndStop(1);
          this.updateEffectList();
          this.highlightSlot(__s153local1);
        }
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.targetIsEnchantSlot = function (__s165param0) {
    return __s165param0 == this.dialogDisp.mc_itemTarget;
  };
  CastleEquipmentEnchanterDialog.prototype.targetIsItemSlot = function (__s167param0) {
    var __s167local0 = __s167param0;
    var __s167local1 = this.targetIsEnchantSlot(__s167param0);
    var __s167local2 = !!__s167local0 && !!__s167local0.slotVO && __s167local0.parent == this.dialogDisp.mc_equipmentList && __s167local0.name.indexOf("item") != -1;
    return __s167local1 || __s167local2;
  };
  CastleEquipmentEnchanterDialog.prototype.dropItemOnEmtpySlot = function () {
    this.fillSlotContainer(this._selectedDragEquipment, this.dialogDisp.mc_itemTarget);
    this.dialogDisp.mc_itemTarget.slotVO.equipmentVO = this._selectedDragEquipment;
    this.removeDragItem();
    this.updateEffectList();
  };
  CastleEquipmentEnchanterDialog.prototype.fillSlotContainer = function (__s171param0, __s171param1) {
    __s171param1 = this.dialogDisp.mc_itemTarget;
    if (__s171param0) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s171param0, __s171param1.mc_equipmentHolder, CastleEquipmentEnchanterDialog.MAX_WIDTH, CastleEquipmentEnchanterDialog.MAX_HEIGHT, null, true, false, false, true, true);
      var __s171local0 = __dep_exact_f855840627e6e145.int(__s171param0.visualRareID);
      if (__s171local0 == 0) {
        __s171local0 = 5;
      }
      this.dialogDisp.mc_itemTarget.mc_bg.gotoAndStop(__s171local0);
      this.dialogDisp.mc_itemTarget.toolTipText = "";
      __s171param1.actLikeButton = true;
    } else {
      this.clearSlot();
      __s171param1.mc_bg.gotoAndStop(1);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.addDragItem = function (__s176param0, __s176param1) {
    this._comesFromInventory = __s176param1;
    this._selectedDragEquipment = __s176param0;
    this._selectedItemMc = __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this._selectedDragEquipment, null, CastleEquipmentEnchanterDialog.MAX_WIDTH, CastleEquipmentEnchanterDialog.MAX_HEIGHT, null, true, false, false, true, true);
    this.layoutManager.nativeCursor.startDrag(this._selectedItemMc);
  };
  CastleEquipmentEnchanterDialog.prototype.removeDragItem = function () {
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
      this._selectedItemMc = null;
      this._selectedDragEquipment = null;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.updateEffectList = function () {
    var __s181local0 = this.dialogDisp.mc_itemTarget.slotVO.equipmentVO;
    this.itxt_emptyBoniList = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.itxt_emptyBoniList.visible = false;
    for (var __s181local1 = 0; __s181local1 < 4; __s181local1++) {
      var __s181local2 = this.dialogDisp["mc_statchange" + __s181local1];
      __s181local2.visible = __s181local0 && __s181local1 < __s181local0.boni.length && __s181local0 && __s181local0.enchantmentLevel < __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s181local0.visualRareID);
      if (__s181local2.visible) {
        var __s181local3 = __s181local0.boni[__s181local1];
        var __s181local4 = __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEnchantmentFactor(__s181local3.id, __s181local1 == 0);
        var __s181local5 = __s181local3.strength;
        if (__dep_exact_26a421b704832cff.EquipmentConst.isValidForEnchanting(__s181local0.rareID, __s181local0.enchantmentLevel)) {
          __s181local5 += __s181local4;
        }
        __s181local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s181local5, 1);
        var __s181local6 = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(Math.abs(__s181local4), false, 1);
        var __s181local7 = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s181local3.strength, false, 1);
        var __s181local8 = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s181local5, false, 1);
        this.textFieldManager.registerTextField(__s181local2.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_short_" + __s181local3.effect.name), [__s181local6]));
        this.textFieldManager.registerTextField(__s181local2.mc_before.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s181local7])).autoFitToBounds = true;
        var __s181local9 = this.textFieldManager.registerTextField(__s181local2.mc_after.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s181local8]));
        __s181local9.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN;
        __s181local9.autoFitToBounds = true;
        __s181local2.mc_before.toolTipText = "before";
        __s181local2.mc_before.mouseChildren = false;
        __s181local2.mc_after.toolTipText = "after";
        __s181local2.mc_after.mouseChildren = false;
        __s181local2.mc_after.txt_value.textColor = 34816;
      }
    }
    if (__s181local0) {
      this.activateInfoMcs();
      if (this.i_costs_txt_value.textContentVO) {
        this.i_costs_txt_value.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.EquipmentConst.getC1PriceForEnchanting(__s181local0.enchantmentLevel + 1));
        this.i_costs_txt_value.color = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.EquipmentConst.getC1PriceForEnchanting(__s181local0.enchantmentLevel + 1)) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      }
      if (this.i_howMany_txt_value.textContentVO) {
        this.i_howMany_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
        this.i_howMany_txt_value.textContentVO.textReplacements = [__s181local0.enchantmentLevel, __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s181local0.visualRareID)];
      }
      if (this.i_succRate_txt_value.textContentVO) {
        this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
        this.i_succRate_txt_value.textContentVO.textReplacements = [__dep_exact_26a421b704832cff.EquipmentConst.getEnchantingChance(__s181local0.enchantmentLevel + 1)];
      }
      this.dialogDisp.mc_howMany.toolTipText = {
        t: "dialog_equipmentEnchanterEvent_count",
        p: [__s181local0.enchantmentLevel, __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s181local0.visualRareID)]
      };
      this.dialogDisp.btn_payC2.toolTipText = {
        t: "dialog_equipmentEnchanterEvent_pay",
        p: [__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.EquipmentConst.getC2PriceForEnchanting(__s181local0.enchantmentLevel + 1)) * this.getPrimeSaleDiscount())]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, true);
      this.dialogDisp.btn_payC1.toolTipText = "dialog_equipmentEnchanterEvent_craft";
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_chance";
      this.dialogDisp.mc_costs.toolTipText = "dialog_equipmentEnchanterEvent_coins";
    } else {
      this.dialogDisp.mc_howMany.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.dialogDisp.mc_costs.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
      this.dialogDisp.btn_payC1.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.i_howMany_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.i_howMany_txt_value.textContentVO.textReplacements = [0, 0];
      this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
      this.i_costs_txt_value.textContentVO.numberValue = 0;
      this.i_costs_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.deactivateInfoMcs();
    }
    if (__s181local0 && __s181local0.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s181local0.visualRareID)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, false);
      this.dialogDisp.btn_payC1.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.mc_howMany.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.mc_costs.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.i_costs_txt_value.textContentVO.numberValue = 0;
      this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
    } else if (__s181local0 && __s181local0.enchantmentLevel == 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
      this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_firstEnchanted_norubin";
    } else if (__s181local0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, true);
      this.dialogDisp.btn_payC2.toolTipText = {
        t: "dialog_equipmentEnchanterEvent_pay",
        p: [__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.EquipmentConst.getC2PriceForEnchanting(__s181local0.enchantmentLevel + 1)) * this.getPrimeSaleDiscount())]
      };
    }
    this.itxt_emptyBoniList.clearText();
    if (__s181local0) {
      if (__s181local0 && __s181local0.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s181local0.visualRareID)) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("")).visible = true;
        this.itxt_emptyBoniList.textContentVO.textId = "dialog_equipmentEnchanterEvent_maxEnchanted";
      }
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("")).visible = true;
      this.itxt_emptyBoniList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInSlot";
    }
  };
  CastleEquipmentEnchanterDialog.prototype.getPrimeSaleDiscount = function () {
    var __s198local0 = 1;
    if (this._primeSaleEventVO) {
      __s198local0 -= this._primeSaleEventVO.discount / 100;
    }
    return __s198local0;
  };
  CastleEquipmentEnchanterDialog.prototype.deactivateInfoMcs = function () {
    var __s201local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s201local0.desaturate();
    this.dialogDisp.mc_howMany.useFilters([__s201local0.filter]);
    this.dialogDisp.mc_successRate.useFilters([__s201local0.filter]);
    this.dialogDisp.mc_costs.useFilters([__s201local0.filter]);
  };
  CastleEquipmentEnchanterDialog.prototype.activateInfoMcs = function () {
    this.dialogDisp.mc_howMany.useFilters([]);
    this.dialogDisp.mc_successRate.useFilters([]);
    this.dialogDisp.mc_costs.useFilters([]);
  };
  Object.defineProperty(CastleEquipmentEnchanterDialog.prototype, "currentLordFilter", {
    set: function (__s205param0) {
      this._currentLordFilter = __s205param0;
      this.dialogDisp.btn_general.gotoAndStop(this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_GENERAL ? 2 : 1);
      this.dialogDisp.btn_baron.gotoAndStop(this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_BARON ? 2 : 1);
      this.dialogDisp.btn_all.gotoAndStop(this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_ALL ? 2 : 1);
      this.updateFilteredInventory();
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnchanterDialog.prototype.onMouseOver = function (__s207param0) {
    __s1param0.prototype.onMouseOver.call(this, __s207param0);
    var __s207local0 = this.dialogDisp.mc_itemTarget.slotVO.equipmentVO;
    if (__s207param0.target == this.dialogDisp.btn_payC2 && __s207param0.target.enabled && __s207local0.enchantmentLevel < __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s207local0.visualRareID)) {
      this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [100];
      this.dialogDisp.mc_successRate.txt_value.textColor = 34816;
      this.mouseOverPayC2 = true;
    }
    if (__s207param0.target == this.dialogDisp.btn_payC1 && __s207param0.target.enabled) {
      this.mouseOverPayC1 = true;
    }
    if (__s207param0.target == this.dialogDisp.mc_itemTarget) {
      if (__s207param0.target.slotVO.equipmentVO) {
        __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s207param0.target, __s207param0.target.slotVO.equipmentVO);
      }
      if (this._selectedDragEquipment) {
        this.highlightSlot(this.dialogDisp.mc_itemTarget);
      }
    } else {
      this.disableHighlightedSlot();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.disableHighlightedSlot = function () {
    if (this._highlightedSlot) {
      this._highlightedSlot.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      this._highlightedSlot = null;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.highlightSlot = function (__s218param0) {
    if (this._highlightedSlot) {
      this.disableHighlightedSlot();
    }
    if (!__s218param0.mc_bg.mc_lock.visible) {
      this._highlightedSlot = __s218param0;
      __s218param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.setColor(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_EQUIPMENT_ENCHANTER_HIGHLIGHT_SLOT, this.getHighlightColorForRarity(this._selectedDragEquipment.rarity)), false, 1);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.getHighlightColorForRarity = function (__s222param0) {
    switch (__s222param0) {
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_COMMON:
        return 13421772;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RARE:
        return 10151967;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_EPIC:
        return 13010425;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_LEGENDARY:
        return 15559700;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_UNIQUE:
        return __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      default:
        return 13421772;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMouseOut = function (__s225param0) {
    __s1param0.prototype.onMouseOut.call(this, __s225param0);
    this.i_succRate_txt_value.color &&= __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    if (__s225param0.target == this.dialogDisp.btn_payC2) {
      this.mouseOverPayC2 = false;
    }
    if (__s225param0.target == this.dialogDisp.btn_payC1) {
      this.mouseOverPayC1 = false;
    }
    if (this.dialogDisp.mc_itemTarget.slotVO.equipmentVO && this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.rareID)) {
      this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
    } else if (this.dialogDisp.mc_itemTarget.slotVO.equipmentVO) {
      this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [__dep_exact_26a421b704832cff.EquipmentConst.getEnchantingChance(this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.enchantmentLevel + 1)];
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_chance";
    } else {
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.i_succRate_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onScrollItemRollover = function (__s232param0) {
    var __s232local0 = __s232param0.scrollItem.scrollItemVO;
    var __s232local1 = this.getLordByItem(__s232local0.equipmentVO);
    if (!!__s232local0.equipmentVO && !this._selectedDragEquipment && (!__s232local1 || !!__s232local1.isAvailableForEquip)) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s232param0.originTarget, __s232local0.equipmentVO);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.hideLoaded = function (__s235param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.bindFunction(this.onEquipmentEnchanted));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, this.bindFunction(this.onEquipmentEnchantingFailed));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID, this.bindFunction(this.onEquipmentEnchantingInvalid));
    this.layoutManager.uiStage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.playMouse));
    this.disp.removeEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOutCheck));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.lordData.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.removeDragItem();
    __s1param0.prototype.hideLoaded.call(this, __s235param0);
  };
  CastleEquipmentEnchanterDialog.NAME = "CastleEquipmentEnchanter";
  CastleEquipmentEnchanterDialog.TARGET_TOOLTIP_ID = "dialog_equipmentEnchanterEvent_place";
  CastleEquipmentEnchanterDialog.MAX_WIDTH = 55;
  CastleEquipmentEnchanterDialog.MAX_HEIGHT = 55;
  CastleEquipmentEnchanterDialog.ITEMS_PER_PAGE = 14;
  CastleEquipmentEnchanterDialog.FILTER_BARON = "Baron";
  CastleEquipmentEnchanterDialog.FILTER_GENERAL = "General";
  CastleEquipmentEnchanterDialog.FILTER_ALL = "all";
  return CastleEquipmentEnchanterDialog;
}(__dep_export_ACastleBasicEquipmentDialog.ACastleBasicEquipmentDialog);
exports.CastleEquipmentEnchanterDialog = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RelicEquipmentVO = require("gge-module:export_RelicEquipmentVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
