Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_84d43d9c404bd4d8_1 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SCancelHospitalSlot = require("gge-module:export_C2SCancelHospitalSlot");
var __dep_export_C2SSkipHospitalSlot = require("gge-module:export_C2SSkipHospitalSlot");
var __dep_export_C2SShowPackageListVO = require("gge-module:export_C2SShowPackageListVO");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_BasicBuildListEvent = require("gge-module:export_BasicBuildListEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHelpRequestHealParamsVO = require("gge-module:export_AllianceHelpRequestHealParamsVO");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_CastleAllianceHelpRequestButtonComponent = require("gge-module:export_CastleAllianceHelpRequestButtonComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTimedYesNoDialogProperties = require("gge-module:export_CastleTimedYesNoDialogProperties");
var __dep_export_CastleHospitalReviveAllDialogProperties = require("gge-module:export_CastleHospitalReviveAllDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleRecruitDialogHospital(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.waitingForHFL = false;
    __s3local0.initButtons();
    __s3local0._reviveListComponent = new __dep_export_UnitReviveListComponent.UnitReviveListComponent(__s3local0.hospitalDialog.mc_buildList, __dep_export_BasicBuildListComponent.BasicBuildListComponent.ALIGN_HORIZONTAL);
    __s3local0._inventoryListComponent = new __dep_export_HospitalInventoryListComponent.HospitalInventoryListComponent(__s3local0.hospitalDialog.itemSelection, __s3local0.bindFunction(__s3local0.onSelectUnit));
    __s3local0._allianceHelpRequestBtnComponent = new __dep_export_CastleAllianceHelpRequestButtonComponent.CastleAllianceHelpRequestButtonComponent(__s3local0.hospitalDialog.btn_alliance_help_request);
    __s3local0._allianceHelpRequestBtnComponent.hide();
    __s3local0.textFieldManager.registerTextField(__s3local0.hospitalDialog.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_title"));
    __s3local0.textFieldManager.registerTextField(__s3local0.hospitalDialog.btn_deleteAll.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_deleteAllButton"));
    __s3local0.textFieldManager.registerTextField(__s3local0.hospitalDialog.mc_rubyBlockOverlay.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_rubyUnitsFilter_desc")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
    __s3local0.textFieldManager.registerTextField(__s3local0.hospitalDialog.btn_revive_all.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_reviveAllButton")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.hospitalDialog.btn_filter_melee.toolTipText = "dialog_hospital_filterMelee_tooltip";
    __s3local0.hospitalDialog.btn_filter_range.toolTipText = "dialog_hospital_filterRange_tooltip";
    __s3local0.hospitalDialog.btn_filter_mead_melee.toolTipText = "dialog_hospital_filterMeleeMeadUnits_tooltip";
    __s3local0.hospitalDialog.btn_filter_mead_range.toolTipText = "dialog_hospital_filterRangedMeadUnits_tooltip";
    __s3local0.hospitalDialog.btn_filter_ruby.toolTipText = "dialog_hospital_filterRubyUnits_tooltip";
    __s3local0.hospitalDialog.btn_filter_all.toolTipText = "dialog_hospital_filterAll_tooltip";
    __s3local0.hospitalDialog.btn_filter_special.toolTipText = "dialog_hospital_filterSpecial_tooltip";
    __s3local0.hospitalDialog.btn_cancel.toolTipText = "dialog_recruit_abort";
    __s3local0.hospitalDialog.btn_rubyFilter_active.toolTipText = "dialog_hospital_rubyUnitsFilter_button_filterActive_tooltip";
    __s3local0.hospitalDialog.btn_rubyFilter_inactive.toolTipText = "dialog_hospital_rubyUnitsFilter_button_filterInactive_tooltip";
    __s3local0.hospitalDialog.mc_hospitalCapacity.toolTipText = "hospital_info_capacity";
    __s3local0.hospitalDialog.mc_hospitalCapacity.mouseChildren = false;
    __s3local0.hospitalDialog.btn_revive_all.mc_discount.visible = false;
    __s3local0.unitRecruitmentControls = new __dep_export_CastleRecruitSelectedUnitComponent.CastleRecruitSelectedUnitComponent(__s3local0.hospitalDialog.unitRecruitmentControls);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitDialogHospital, __s1param0);
  CastleRecruitDialogHospital.prototype.initButtons = function () {
    var __s5local0 = new Array();
    __s5local0.push(this.hospitalDialog.btn_alliance_help_request);
    __s5local0.push(this.hospitalDialog.btn_revive_all);
    __s5local0.push(this.hospitalDialog.btn_skip);
    __s5local0.push(this.hospitalDialog.btn_cancel);
    this.initBasicButtons(__s5local0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.hospitalDialog.btn_filter_melee, this.hospitalDialog.btn_filter_range, this.hospitalDialog.btn_filter_mead_melee, this.hospitalDialog.btn_filter_mead_range, this.hospitalDialog.btn_filter_ruby, this.hospitalDialog.btn_filter_all, this.hospitalDialog.btn_filter_special], __dep_exact_84d43d9c404bd4d8_1.TwoStateIconZoomButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox], __dep_exact_84d43d9c404bd4d8_2.TwoStateButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.hospitalDialog.btn_deleteAll, this.hospitalDialog.btn_rubyFilter_active, this.hospitalDialog.btn_rubyFilter_inactive], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleRecruitDialogHospital.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._inventoryListComponent.destroy();
  };
  Object.defineProperty(CastleRecruitDialogHospital.prototype, "hospitalDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogHospital.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this.capacityTextfield = this.textFieldManager.registerTextField(this.hospitalDialog.mc_hospitalCapacity.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.progressTextfield = this.textFieldManager.registerTextField(this.hospitalDialog.unitProgress.txt_progress, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.reviveAllDiscountTextField = this.textFieldManager.registerTextField(this.hospitalDialog.btn_revive_all.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondIntervalTick));
    this._reviveListComponent.addEventListener(__dep_export_BasicBuildListEvent.BasicBuildListEvent.SELECTED_ITEM, this.bindFunction(this.onSelectReviveListItem));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onRequestComplete));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestComplete));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.NEW_EILAND_TITLE, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(__dep_export_CastleHospitalEvent.CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED, this.bindFunction(this.onHospitalFlagsReceived));
    this._inventoryListComponent.pageChangedSignal.add(this.bindFunction(this.onInventoryUpdated));
    this.hideItemProgressInfo();
    this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_ALL;
    this.onCastleDataUpdated();
    this.onInventoryUpdated();
    this.onPackageListUpdated();
    this.onEventUpdated();
    this._reviveListComponent.selectedSlot = 0;
    this._inventoryListComponent.show();
    if (this.lastBasicUnitVOSelected) {
      this.openSelectUnitComponent(this.lastBasicUnitVOSelected);
    } else {
      this.unitRecruitmentControls.hide();
      this.setUnitSelectorVisible(false);
    }
    this.hospitalDialog.mc_rubyBlockOverlay.visible = false;
    this.hospitalDialog.btn_rubyFilter_active.visible = false;
    this.hospitalDialog.btn_rubyFilter_inactive.visible = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SHospitalFlagsVO.C2SHospitalFlagsVO(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId));
    this.waitingForHFL = true;
  };
  CastleRecruitDialogHospital.prototype.onEventUpdated = function (__s15param0 = null) {
    var __s15local0 = CastleRecruitDialogHospital.getHealAllDiscount();
    if (__s15local0 > 0) {
      this.hospitalDialog.btn_revive_all.mc_discount.visible = true;
      this.reviveAllDiscountTextField.textContentVO.textReplacements = [__s15local0];
    } else {
      this.hospitalDialog.btn_revive_all.mc_discount.visible = false;
    }
  };
  CastleRecruitDialogHospital.getHealAllDiscount = function () {
    var __s19local0;
    __s19local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_PRIME_SALES_REVIVE_ALL);
    return __dep_exact_f855840627e6e145.int(__s19local0 ? __s19local0.discount : 0);
  };
  CastleRecruitDialogHospital.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._reviveListComponent.selectedSlot > 0) {
      this._reviveListComponent.selectedSlot = 0;
    }
    this._reviveListComponent.clearItems();
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondIntervalTick));
    this._reviveListComponent.removeEventListener(__dep_export_BasicBuildListEvent.BasicBuildListEvent.SELECTED_ITEM, this.bindFunction(this.onSelectReviveListItem));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onRequestComplete));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestComplete));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.NEW_EILAND_TITLE, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(__dep_export_CastleHospitalEvent.CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED, this.bindFunction(this.onHospitalFlagsReceived));
    this._inventoryListComponent.pageChangedSignal.remove(this.bindFunction(this.onInventoryUpdated));
    this.unitRecruitmentControls.dispose();
  };
  CastleRecruitDialogHospital.prototype.onRequestComplete = function (__s24param0) {
    if (__s24param0.requestVO && __s24param0.requestVO.requestTypeId == __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(__dep_export_CastleModel.CastleModel.militaryData.getListIdByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL)));
    }
  };
  CastleRecruitDialogHospital.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(this.hospitalDialog.txt_title.text, __dep_exact_92d05af59ee2ff30.Localize.text("help_hospital"));
  };
  Object.defineProperty(CastleRecruitDialogHospital.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (__s31param0) {
      if (__s31param0 != this._currentFilter) {
        this._currentFilter = __s31param0;
        this._inventoryListComponent.currentPage = 0;
        this.initFilterButtons();
        this.fillShopItems();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogHospital.prototype.onClick = function (__s34param0) {
    __s1param0.prototype.onClick.call(this, __s34param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      switch (__s34param0.target) {
        case this.hospitalDialog.btn_skip:
          this.skipCurrentSlot();
          break;
        case this.hospitalDialog.btn_filter_melee:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE;
          break;
        case this.hospitalDialog.btn_filter_range:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE;
          break;
        case this.hospitalDialog.btn_filter_mead_melee:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD;
          break;
        case this.hospitalDialog.btn_filter_mead_range:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD;
          break;
        case this.hospitalDialog.btn_filter_ruby:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY;
          break;
        case this.hospitalDialog.btn_filter_all:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_ALL;
          break;
        case this.hospitalDialog.btn_filter_special:
          this.currentFilter = CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL;
          break;
        case this.hospitalDialog.btn_cancel:
          this.cancelCurrentSlot();
          break;
        case this.hospitalDialog.btn_revive_all:
          this.openReviveAllDialog();
          break;
        case this.hospitalDialog.btn_deleteAll:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("dialog_hospital_deleteAll_header", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_hospital_deleteAll_copy", [this.getFilteredUnitAmount()]), this.bindFunction(this.onConfirmDeleteAll)));
          break;
        case this.hospitalDialog.btn_rubyFilter_active:
        case this.hospitalDialog.btn_rubyFilter_inactive:
          this.hospitalDialog.mc_rubyBlockOverlay.visible = !this.hospitalDialog.mc_rubyBlockOverlay.visible;
          break;
        case this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox:
          this.toggleRubyBlock();
      }
    }
  };
  CastleRecruitDialogHospital.prototype.getFilteredUnitAmount = function () {
    var __s38local0 = 0;
    for (var __s38local1 = this.getFilteredSoldierInventory(), __s38local2 = 0; __s38local2 < __s38local1.length; __s38local2++) {
      __s38local0 += __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getUnitCountByWodId(__s38local1[__s38local2].wodId);
    }
    return __s38local0;
  };
  CastleRecruitDialogHospital.prototype.onConfirmDeleteAll = function (__s42param0 = null) {
    var __s42local0 = [];
    for (var __s42local1 = this.getFilteredSoldierInventory(), __s42local2 = 0; __s42local2 < __s42local1.length; __s42local2++) {
      __s42local0.push({
        U: __s42local1[__s42local2].wodId,
        A: __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getUnitCountByWodId(__s42local1[__s42local2].wodId)
      });
    }
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDismissManyHospitalUnits.C2SDismissManyHospitalUnits(__s42local0));
  };
  CastleRecruitDialogHospital.prototype.skipCurrentSlot = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.hospitalDialog.btn_skip, false);
    this._allianceHelpRequestBtnComponent.hide();
    this.controller.addEventListener(__dep_export_HSSCommand.HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, this.bindFunction(this.onSkipHospitalSlotSkipFailed));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkipHospitalSlot.C2SSkipHospitalSlot(this._reviveListComponent.selectedItem.slotVO.pos));
    this._reviveListComponent.preventNextDynamicPreselection();
  };
  CastleRecruitDialogHospital.prototype.onSkipHospitalSlotSkipFailed = function (__s48param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.hospitalDialog.btn_skip, true);
    this.updateAllianceHelpButton();
    this.controller.removeEventListener(__dep_export_HSSCommand.HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, this.bindFunction(this.onSkipHospitalSlotSkipFailed));
  };
  CastleRecruitDialogHospital.prototype.cancelCurrentSlot = function () {
    var __s50local0 = require("gge-module:export_CastleTimedYesNoDialog").CastleTimedYesNoDialog;
    var __s50local1 = this._reviveListComponent.selectedItem.unitPackageSlotVO.isFirst ? __s50local0 : __dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s50local1, new __dep_export_CastleTimedYesNoDialogProperties.CastleTimedYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_hospital_cancelHealing_title"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_hospital_cancelHealing_desc"), "countdown_restTime", this._reviveListComponent.selectedItem.unitPackageSlotVO.remainingTimeInSeconds, false, this.bindFunction(this.onCurrentSlotCancelled)));
  };
  CastleRecruitDialogHospital.prototype.onCurrentSlotCancelled = function (__s52param0 = null) {
    if (this._reviveListComponent && this._reviveListComponent.selectedItem && this._reviveListComponent.selectedItem.slotVO) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCancelHospitalSlot.C2SCancelHospitalSlot(this._reviveListComponent.selectedItem.slotVO.pos));
      this._reviveListComponent.preventNextDynamicPreselection();
    }
  };
  CastleRecruitDialogHospital.prototype.openReviveAllDialog = function () {
    var __s55local0 = 0;
    var __s55local1 = 0;
    var __s55local2 = 0;
    var __s55local3 = 0;
    for (var __s55local4 = __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getUnits(null), __s55local5 = 0; __s55local5 < __s55local4.length; ++__s55local5) {
      var __s55local6 = __s55local4[__s55local5];
      __s55local1 += __dep_exact_f855840627e6e145.int(__s55local6.inventoryAmount * __s55local6.foodSupply);
      __s55local2 += __dep_exact_f855840627e6e145.int(__s55local6.inventoryAmount * __s55local6.meadSupply);
      __s55local3 += __dep_exact_f855840627e6e145.int(__s55local6.inventoryAmount * __s55local6.beefSupply);
      __s55local0 += __dep_exact_f855840627e6e145.int(__s55local6.inventoryAmount * __s55local6.reviveAllCostC2);
    }
    __s55local0 = Math.ceil(__s55local0 * (100 - CastleRecruitDialogHospital.getHealAllDiscount()) / 100);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHospitalReviveAllDialog.CastleHospitalReviveAllDialog, new __dep_export_CastleHospitalReviveAllDialogProperties.CastleHospitalReviveAllDialogProperties(__s55local0, __s55local1, __s55local2, __s55local3, CastleRecruitDialogHospital.getHealAllDiscount()));
  };
  CastleRecruitDialogHospital.prototype.onSelectReviveListItem = function (__s59param0) {
    this.updateSkipButton();
    this.updateAllianceHelpButton();
    this.updateProgress();
  };
  CastleRecruitDialogHospital.prototype.onTimerSecondIntervalTick = function (__s61param0 = null) {
    this.updateProgress();
    this.updateSkipButton(false);
  };
  CastleRecruitDialogHospital.prototype.onInventoryUpdated = function (__s63param0 = null) {
    this.fillShopItems();
    if (this.lastBasicUnitVOSelected) {
      var __s63local0 = null;
      for (var __s63local1 = __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getSoldiers(), __s63local2 = 0; __s63local2 < __s63local1.length; __s63local2++) {
        if (this.lastBasicUnitVOSelected.wodId == __s63local1[__s63local2].wodId) {
          __s63local0 = __s63local1[__s63local2];
        }
      }
      this.openSelectUnitComponent(__s63local0);
    }
    this.updateOccupancy();
    this.updateReviveAllButton();
  };
  CastleRecruitDialogHospital.prototype.onCastleDataUpdated = function (__s69param0 = null) {
    this.updateOccupancy();
  };
  CastleRecruitDialogHospital.prototype.updateReviveAllButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.hospitalDialog.btn_revive_all, __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getUnitCount(null) > 0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.hospitalDialog.btn_revive_all)) {
      this.hospitalDialog.btn_revive_all.toolTipText = null;
    } else {
      this.hospitalDialog.btn_revive_all.toolTipText = "dialog_hospital_reviveAllButton_inactive_tooltip";
    }
  };
  CastleRecruitDialogHospital.prototype.onPackageListUpdated = function (__s75param0 = null) {
    var __s75local0 = __dep_export_CastleModel.CastleModel.militaryData.getPackageListById(__dep_exact_26a421b704832cff_3.UnitProductionConst.HOSPITAL_LIST);
    this._reviveListComponent.fillItems(__s75local0);
    if (this._reviveListComponent.selectedItem && this._reviveListComponent.selectedItem.slotVO.pos == this._reviveListComponent.selectedSlot) {
      this.updateSkipButton();
    }
    this.updateAllianceHelpButton();
    this.updateProgress();
    this.unitRecruitmentControls.freeSlots = __s75local0.numFreeSlots + __s75local0.lockedSlots;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.hospitalDialog.btn_cancel, true);
  };
  CastleRecruitDialogHospital.prototype.fillShopItems = function () {
    var __s78local0 = this.getFilteredSoldierInventory();
    __s78local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    this._inventoryListComponent.changeUnitInventory(__s78local0);
    if (__s78local0.length == 0) {
      var __s78local1;
      this.hospitalDialog.itemSelection.hospitalInventory_overlay.visible = true;
      switch (this._currentFilter) {
        case CastleRecruitDialogHospital.FILTER_SOLDIER_ALL:
          __s78local1 = "dialog_hospital_filterAll_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE:
          __s78local1 = "dialog_hospital_filterMelee_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD:
          __s78local1 = "dialog_hospital_filterMeleeMeadUnits_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE:
          __s78local1 = "dialog_hospital_filterRange_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD:
          __s78local1 = "dialog_hospital_filterRangedMeadUnits_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY:
          __s78local1 = "dialog_hospital_filterRubyUnits_empty";
          break;
        case CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL:
          __s78local1 = "dialog_hospital_filterSpecial_empty";
          break;
        default:
          __s78local1 = "dialog_hospital_filterAll_empty";
      }
      this.textFieldManager.registerTextField(this.hospitalDialog.itemSelection.hospitalInventory_overlay.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s78local1));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.hospitalDialog.btn_deleteAll, false);
      this.hospitalDialog.btn_deleteAll.toolTipText = "dialog_hospital_reviveAllButton_inactive_tooltip";
    } else {
      this.hospitalDialog.itemSelection.hospitalInventory_overlay.visible = false;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.hospitalDialog.btn_deleteAll, true);
      this.hospitalDialog.btn_deleteAll.toolTipText = null;
    }
    this.openSelectUnitComponent(this.lastBasicUnitVOSelected);
  };
  CastleRecruitDialogHospital.prototype.getFilteredSoldierInventory = function (__s83param0 = null) {
    var __s83local0;
    var __s83local1;
    var __s83local2 = __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory;
    var __s83local3 = 0;
    var __s83local4 = __s83param0 || this._currentFilter;
    switch (__s83local4) {
      case CastleRecruitDialogHospital.FILTER_SOLDIER_ALL:
      case CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY:
        __s83local0 = __s83local2.getUnits(null);
        break;
      case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE:
      case CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD:
        __s83local0 = __s83local2.getUnitsByType(CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE);
        break;
      case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE:
      case CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD:
        __s83local0 = __s83local2.getUnitsByType(CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE);
        break;
      case CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL:
        __s83local0 = __s83local2.getEventUnits();
    }
    if (__s83local4 == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE || __s83local4 == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE) {
      for (__s83local1 = []; __s83local3 < __s83local0.length; __s83local3++) {
        if (__s83local0[__s83local3].foodSupply > 0) {
          __s83local1.push(__s83local0[__s83local3]);
        }
      }
    }
    if (__s83local4 == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD || __s83local4 == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD) {
      for (__s83local1 = []; __s83local3 < __s83local0.length; __s83local3++) {
        if (__s83local0[__s83local3].meadSupply > 0 || __s83local0[__s83local3].beefSupply > 0) {
          __s83local1.push(__s83local0[__s83local3]);
        }
      }
    }
    if (__s83local4 == CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY) {
      for (__s83local1 = []; __s83local3 < __s83local0.length; __s83local3++) {
        if (__s83local0[__s83local3].healingCostC2 > 0) {
          __s83local1.push(__s83local0[__s83local3]);
        }
      }
    }
    return __s83local1 || __s83local0;
  };
  CastleRecruitDialogHospital.prototype.showItemProgressInfo = function () {
    var __s98local0 = this._reviveListComponent.selectedItem.unitPackageSlotVO;
    this.hospitalDialog.unitProgress.visible = true;
    this.hospitalDialog.btn_skip.visible = true;
    this.hospitalDialog.unitProgress.progressBarStatus.scaleX = __s98local0.healingReadyInPercent;
    this.hospitalDialog.btn_cancel.visible = true;
    this.progressTextfield.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__s98local0.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    var __s98local1 = __s98local0.unitVO.healingCostC2 > 0;
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.progressTextfield, __s98local1 ? __s98local0.unitVO.isSubscriptionHealingPremiumActive : __s98local0.unitVO.isSubscriptionHealingNonPremiumActive, 0, null, false);
  };
  CastleRecruitDialogHospital.prototype.updateAllianceHelpButton = function () {
    var __s100local0 = __dep_exact_81dacdf05bd32292.castAs(this._reviveListComponent.selectedItem, "UnitReviveListItem");
    if (__s100local0) {
      var __s100local1 = __dep_exact_81dacdf05bd32292.castAs(__s100local0.unitPackageSlotVO, "UnitHealPackageSlotVO");
      if (__s100local1 && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s100local1.unitVO, "SoldierUnitVO") && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp) {
        var __s100local2 = __dep_export_CastleModel.CastleModel.militaryData.getPackageListById(__dep_exact_26a421b704832cff_3.UnitProductionConst.HOSPITAL_LIST);
        var __s100local3 = __dep_exact_f855840627e6e145.int(__s100local2.listId);
        var __s100local4 = new __dep_export_AllianceHelpRequestHealParamsVO.AllianceHelpRequestHealParamsVO(__s100local1.recruitmentID, __s100local3, __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId);
        this._allianceHelpRequestBtnComponent.setParams(__s100local3, __s100local4, __s100local1.healTimeReduction > 0);
        this._allianceHelpRequestBtnComponent.show();
        return;
      }
    }
    this._allianceHelpRequestBtnComponent.hide();
  };
  CastleRecruitDialogHospital.prototype.updateSkipButton = function (__s104param0 = true) {
    var __s104local0 = __dep_exact_81dacdf05bd32292.castAs(this._reviveListComponent.selectedItem, "UnitReviveListItem");
    if (__s104local0) {
      var __s104local1 = __s104local0.unitPackageSlotVO;
      if (__s104local1) {
        var __s104local2 = __s104local1.unitVO;
        if (__s104local2) {
          if (__s104param0) {
            __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.hospitalDialog.btn_skip, true, __dep_exact_84d43d9c404bd4d8.BasicButton.DEFAULT_DELAY_TIME);
          }
          this.updateSkipTooltip(__s104local0, __s104local2, __s104local1);
        }
      }
    }
  };
  CastleRecruitDialogHospital.prototype.updateSkipTooltip = function (__s110param0, __s110param1, __s110param2) {
    var __s110local0 = __s110param2.amount;
    var __s110local1 = __s110param0.unitPackageSlotVO.remainingTimeInSeconds / __s110param2.healingTime;
    var __s110local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.ConstructionConst.getSkipCostForUnits(__s110param1.healingSkipCost * __s110local0, __s110local1));
    this.hospitalDialog.btn_skip.toolTipText = {
      t: "dialog_hospital_skipButton_tooltip",
      p: [__s110local2]
    };
  };
  CastleRecruitDialogHospital.prototype.hideItemProgressInfo = function () {
    this._allianceHelpRequestBtnComponent.hide();
    this.hospitalDialog.unitProgress.visible = false;
    this.hospitalDialog.btn_skip.visible = false;
    this.hospitalDialog.btn_cancel.visible = false;
  };
  CastleRecruitDialogHospital.prototype.initFilterButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_melee, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_range, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_mead_melee, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_mead_range, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_ruby, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_all, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_ALL);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.btn_filter_special, this._currentFilter == CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL);
    this.hospitalDialog.btn_filter_mead_melee.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.hospitalDialog.btn_filter_mead_range.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
  };
  CastleRecruitDialogHospital.prototype.updateProgress = function () {
    var __s116local0 = __dep_exact_81dacdf05bd32292.castAs(this._reviveListComponent.selectedItem, "UnitReviveListItem");
    if (__s116local0 && __s116local0.unitPackageSlotVO && __s116local0.unitPackageSlotVO.unitVO) {
      this.showItemProgressInfo();
    } else {
      this.hideItemProgressInfo();
    }
  };
  CastleRecruitDialogHospital.prototype.updateOccupancy = function () {
    var __s120local0;
    var __s120local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getUnitCount(null));
    var __s120local2 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
    if (__s120local0 = __s120local2 && __s120local2.isFactionCamp ? __dep_export_Iso.Iso.data ? __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_HOSPITAL) : null : __dep_export_Iso.Iso.data ? __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.HOSPITAL) : null) {
      var __s120local3 = this.getHospitalCapacity(__s120local0);
      var __s120local4 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s120local1 / __s120local3, 0, 1);
      this.capacityTextfield.textContentVO.textReplacements = [__s120local1, __s120local3];
      this.hospitalDialog.mc_hospitalCapacity.bar.scaleX = __s120local4;
    }
  };
  CastleRecruitDialogHospital.prototype.getHospitalCapacity = function (__s123param0) {
    var __s123local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId).strength);
    var __s123local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleMapObjectVO(__dep_export_Iso.Iso.data.areaData.areaInfo);
    var __s123local2 = __dep_exact_f855840627e6e145.int(__s123local1 ? __s123local1.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS) : 0);
    var __s123local3 = __dep_export_CastleModel.CastleModel.areaData.activeArea.constructionItems.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.HOSPITALCAPACITY);
    return __s123param0.baseHospitalCapacity + __s123local3 + __s123local0 + __s123local2;
  };
  CastleRecruitDialogHospital.prototype.onSelectUnit = function (__s125param0) {
    this.openSelectUnitComponent(__s125param0);
    this.hospitalDialog.mc_rubyBlockOverlay.visible = false;
  };
  CastleRecruitDialogHospital.prototype.openSelectUnitComponent = function (__s127param0, __s127param1 = true) {
    this.lastBasicUnitVOSelected = __s127param0;
    if (__s127param0 && this.selectUnitInStorePage(__s127param0)) {
      var __s127local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS).strength);
      var __s127local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS);
      var __s127local2 = __dep_exact_f855840627e6e145.int(__s127local1 ? __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_SLOT_BONUS) : 0);
      var __s127local3 = __dep_exact_f855840627e6e145.int(Math.min(__s127param0.inventoryAmount, CastleRecruitDialogHospital.BASIC_HEALINGLIMIT + __s127local0 + __s127local2));
      this.unitRecruitmentControls.initWithProp(new __dep_export_CastleRecruitSelectUnitsDialogProperties.CastleRecruitSelectUnitsDialogProperties(__s127param0, __s127local3, null, __s127param1, true));
    } else {
      this.unitRecruitmentControls.hide();
    }
  };
  CastleRecruitDialogHospital.prototype.selectUnitInStorePage = function (__s131param0) {
    var __s131local0 = -1;
    var __s131local1 = this._inventoryListComponent.currentPage * CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE;
    for (var __s131local2 = Math.min(__s131local1 + CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE - 1, this._inventoryListComponent.unitInventory.length), __s131local3 = __s131local1; __s131local3 <= __s131local2; __s131local3++) {
      var __s131local4 = this._inventoryListComponent.unitInventory[__s131local3];
      if (__s131local4 && __s131local4.wodId == __s131param0.wodId) {
        __s131local0 = __s131local3 % CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE;
      }
    }
    if (__s131local0 > -1) {
      this.hospitalDialog.itemSelection.unitSelector.x = this.hospitalDialog.itemSelection["i" + __s131local0].x - 2;
      this.setUnitSelectorVisible(true);
      return true;
    } else {
      this.setUnitSelectorVisible(false);
      return false;
    }
  };
  CastleRecruitDialogHospital.prototype.setUnitSelectorVisible = function (__s138param0) {
    this.hospitalDialog.itemSelection.unitSelector.visible = __s138param0;
  };
  CastleRecruitDialogHospital.prototype.toggleRubyBlock = function () {
    if (!this.waitingForHFL) {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox, !this.hospitalFlags.hasRubyFilter);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SHospitalFlagsVO.C2SHospitalFlagsVO(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, this.hospitalFlags.hasRubyFilter ? 0 : 1));
      this.waitingForHFL = true;
    }
  };
  CastleRecruitDialogHospital.prototype.onHospitalFlagsReceived = function (__s143param0) {
    if (__s143param0.hospitalFlags.isCurrentCastle()) {
      this.waitingForHFL = false;
      this.hospitalFlags = __s143param0.hospitalFlags;
      this.hospitalDialog.btn_rubyFilter_active.visible = this.hospitalFlags.hasRubyFilter;
      this.hospitalDialog.btn_rubyFilter_inactive.visible = !this.hospitalFlags.hasRubyFilter;
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.hospitalDialog.mc_rubyBlockOverlay.btn_checkbox, this.hospitalFlags.hasRubyFilter == 1);
    }
  };
  CastleRecruitDialogHospital.__initialize_static_members = function () {
    CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogHospital.FILTER_SOLDIER_MELEE_MEAD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogHospital.FILTER_SOLDIER_RANGE_MEAD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogHospital.FILTER_SOLDIER_SPECIAL = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_EVENTUNIT;
  };
  CastleRecruitDialogHospital.FILTER_SOLDIER_RUBY = "ruby";
  CastleRecruitDialogHospital.FILTER_SOLDIER_ALL = "allUnits";
  CastleRecruitDialogHospital.SHOP_ITEMS_PER_PAGE = 5;
  CastleRecruitDialogHospital.BASIC_HEALINGLIMIT = 5;
  return CastleRecruitDialogHospital;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleRecruitDialogHospital = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_HSSCommand = require("gge-module:export_HSSCommand");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_BasicBuildListComponent = require("gge-module:export_BasicBuildListComponent");
var __dep_export_CastleLargeYesNoDialog = require("gge-module:export_CastleLargeYesNoDialog");
var __dep_export_CastleHospitalReviveAllDialog = require("gge-module:export_CastleHospitalReviveAllDialog");
var __dep_export_HospitalInventoryListComponent = require("gge-module:export_HospitalInventoryListComponent");
var __dep_export_UnitReviveListComponent = require("gge-module:export_UnitReviveListComponent");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_C2SDismissManyHospitalUnits = require("gge-module:export_C2SDismissManyHospitalUnits");
var __dep_export_CastleRecruitSelectedUnitComponent = require("gge-module:export_CastleRecruitSelectedUnitComponent");
var __dep_export_CastleRecruitSelectUnitsDialogProperties = require("gge-module:export_CastleRecruitSelectUnitsDialogProperties");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_exact_84d43d9c404bd4d8_2 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_export_CastleHospitalEvent = require("gge-module:export_CastleHospitalEvent");
var __dep_export_C2SHospitalFlagsVO = require("gge-module:export_C2SHospitalFlagsVO");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
