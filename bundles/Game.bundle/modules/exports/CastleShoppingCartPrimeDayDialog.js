Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SSaveShoppingCartVO = require("gge-module:export_C2SSaveShoppingCartVO");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleShoppingCartPrimeDayEvent = require("gge-module:export_CastleShoppingCartPrimeDayEvent");
var __dep_export_CastleShoppingCartPrimeDayProgressBar = require("gge-module:export_CastleShoppingCartPrimeDayProgressBar");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDayDialog() {
    var __s3local0 = this;
    __s3local0.categories = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleShoppingCartPrimeDayDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDayDialog, __s1param0);
  CastleShoppingCartPrimeDayDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btnTrash, this.dialogDisp.btnRubies, this.dialogDisp.btnSave, this.dialogDisp.btnClose]);
    this.dialogDisp.btnRubies.toolTipText = "add_Gold";
    this.dialogDisp.btnTrash.toolTipText = "dialog_shoppingCartPrimeDay_clear";
    this.textHeader = this.textFieldManager.registerTextField(this.dialogDisp.header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("xPercent_Bonus"));
    this.textHeader.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.limitedTime, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("limitedOffer")).visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.subHeader, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_paymentTier_subtitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.pickYourRewards, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shoppingCartPrimeDay_pickRewards"));
    this.textDescription = this.textFieldManager.registerTextField(this.dialogDisp.description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shoppingCartPrimeDay_desc"));
    this.textTimesRemaining = this.textFieldManager.registerTextField(this.dialogDisp.countDown, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_specialoffer_charges"));
    this.textFieldManager.registerTextField(this.dialogDisp.btnRubies.text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_Gold"));
    this.textFieldManager.registerTextField(this.dialogDisp.btnSave.text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shoppingCartPrimeDay_save")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.progressBar = new __dep_export_CastleShoppingCartPrimeDayProgressBar.CastleShoppingCartPrimeDayProgressBar(this.dialogDisp.rubiesPaid, this.dialogDisp.progressBar);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnSave, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnRubies, false);
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig("StatusPopover"));
    this._popoverComponent.config.closeOnClick = true;
  };
  CastleShoppingCartPrimeDayDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.renderCollectables();
    this.updatePlaceholders();
    this.checkSaveButton(true);
    this._listModified = false;
    this._isClosedClicked = false;
    this._popoverComponent.onShow();
    if (this.getEventVO()) {
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, this.getEventVO().remainingEventTimeInSeconds);
    } else {
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG, this.bindFunction(this.updatePlaceholders));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this._popoverComponent.onSequenceCompleteSignal.add(this.bindFunction(this.onPopOverCompleted));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SSC_ARRIVED, this.bindFunction(this.onSSCArrived));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleShoppingCartPrimeDayDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG, this.bindFunction(this.updatePlaceholders));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this._popoverComponent.onSequenceCompleteSignal.remove(this.bindFunction(this.onPopOverCompleted));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SSC_ARRIVED, this.bindFunction(this.onSSCArrived));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    this.clearItems();
  };
  CastleShoppingCartPrimeDayDialog.prototype.onUpdateEventTime = function (__s15param0) {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, this.getEventVO().remainingEventTimeInSeconds);
  };
  CastleShoppingCartPrimeDayDialog.prototype.clearItems = function () {
    for (var __s17local0 = 0; __s17local0 < this.categories.length; __s17local0++) {
      this.categories[__s17local0].clear();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.onSoldOut = function (__s21param0) {
    this.hide();
  };
  CastleShoppingCartPrimeDayDialog.prototype.onEventRemoved = function (__s23param0) {
    if (__s23param0 && __s23param0.specialEventVO && __s23param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY) {
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.showPopOver = function () {
    if (!this._popoverComponent.isVisible) {
      var __s26local0 = this._popoverComponent.getAssetDisp();
      __s26local0.mc_icon.gotoAndStop(__dep_export_ClientConstFusion.ClientConstFusion.ACTION_POPOVER_FRAME_DUST);
      this.textFieldManager.registerTextField(__s26local0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("changesHaveBeenSaved")).autoFitToBounds = true;
      this._popoverComponent.startSequence();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.onPopOverCompleted = function () {
    this._listModified = false;
    this._popoverComponent.resetTimer();
    if (this._isClosedClicked) {
      this._isClosedClicked = false;
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.renderCollectables = function () {
    var __s32local0 = this.getEventVO();
    if (__s32local0) {
      this.categories = [];
      for (var __s32local1 = 0; __s32local1 < __dep_exact_26a421b704832cff_2.ShoppingCartConst.SHOPPING_CART_GROUP_SIZE; __s32local1++) {
        var __s32local2 = __s32local0.typeIds.slice(__s32local1 * __dep_exact_26a421b704832cff_2.ShoppingCartConst.OPTIONS_PER_GROUP, (__s32local1 + 1) * __dep_exact_26a421b704832cff_2.ShoppingCartConst.OPTIONS_PER_GROUP);
        var __s32local3 = [];
        if (__s32local0.shoppingCartOptionIds && __s32local0.shoppingCartOptionIds.length == __dep_exact_26a421b704832cff_2.ShoppingCartConst.SHOPPING_CART_SIZE) {
          __s32local3 = __s32local0.shoppingCartOptionIds.slice(__s32local1 * __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.optionCount, (__s32local1 + 1) * __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.optionCount);
        }
        var __s32local4 = CastleShoppingCartPrimeDayDialog.CATEGORIES[__s32local1];
        this.categories.push(new __dep_export_CastleShoppingCartPrimeDayCategory.CastleShoppingCartPrimeDayCategory(this.dialogDisp[__s32local4], __s32local1, __s32local2, __s32local3));
      }
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.updatePlaceholders = function (__s38param0 = null) {
    var __s38local0 = this.getEventVO();
    if (__s38local0) {
      this.progressBar.updatePlaceholders(__s38local0.c2Payed, __s38local0.c2Needed);
      this.textHeader.textContentVO.textReplacements = [__s38local0.averageBonus];
      this.textDescription.textContentVO.textReplacements = [__s38local0.c2Needed];
      this.textTimesRemaining.textContentVO.textReplacements = [__s38local0.timesBuyable];
    } else {
      this.hide();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
  };
  CastleShoppingCartPrimeDayDialog.prototype.onClick = function (__s44param0) {
    if (!!__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s44param0.target) && (!this._popoverComponent.isVisible || !this._isClosedClicked)) {
      var __s44local0;
      switch (__s44param0.target) {
        case this.dialogDisp.btnRubies:
          this.doSaveCurrentSelection();
          __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_UNKNOWN), __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_SHOPPING_CART_PRIME_DAY_DIALOG);
          break;
        case this.dialogDisp.btnTrash:
          for (var __s44local1 = __dep_exact_f855840627e6e145.int(this.categories.length - 1); __s44local1 >= 0; __s44local1--) {
            (__s44local0 = this.categories[__s44local1]).choosableGroup.reset();
            __s44local0.selectedGroup.clear();
          }
          this.checkSaveButton();
          break;
        case this.dialogDisp.btnSave:
          this.saveCurrentSelection();
          break;
        case this.dialogDisp.btnClose:
          this._isClosedClicked = true;
          var __s44local2 = this._listModified ? this._popoverComponent.config.waitDuration : 0;
          this.saveCurrentSelection();
          __dep_exact_608de47b6498f9b0.TweenMax.delayedCall(__s44local2, this.bindFunction(this.closeWithDelay));
          return;
      }
      for (var __s44local3 = __dep_exact_f855840627e6e145.int(this.categories.length - 1); __s44local3 >= 0; __s44local3--) {
        if ((__s44local0 = this.categories[__s44local3]).checkClick(__s44param0.target)) {
          this.checkSaveButton();
          break;
        }
      }
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.checkSaveButton = function (__s53param0 = false) {
    var __s53local0 = true;
    var __s53local1 = true;
    for (var __s53local2 = __dep_exact_f855840627e6e145.int(this.categories.length - 1); __s53local2 >= 0; __s53local2--) {
      var __s53local3 = this.categories[__s53local2];
      __s53local0 = __s53local0 && __s53local3.selectedGroup.full();
      __s53local1 = __s53local1 && __s53local3.selectedGroup.empty();
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnSave, !__s53param0 && __s53local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnRubies, __s53local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnTrash, !__s53local1);
    if (__s53local0) {
      this._listModified = true;
      this.dialogDisp.btnSave.toolTipText = __s53param0 ? "dialog_shoppingCartPrimeDay_save_tooltip" : "dialog_shoppingCartPrimeDay_save";
      this.dialogDisp.btnRubies.toolTipText = "add_Gold";
    } else {
      this.dialogDisp.btnSave.toolTipText = "dialog_shoppingCartPrimeDay_listNotFilled_save_tooltip";
      this.dialogDisp.btnRubies.toolTipText = "dialog_shoppingCartPrimeDay_listNotFilled_buy_tooltip";
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.closeWithDelay = function () {
    this.hide();
  };
  CastleShoppingCartPrimeDayDialog.prototype.saveCurrentSelection = function () {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btnSave) || this._listModified) {
      this.doSaveCurrentSelection();
    }
  };
  CastleShoppingCartPrimeDayDialog.prototype.doSaveCurrentSelection = function () {
    var __s64local0 = [];
    for (var __s64local1 = 0; __s64local1 < this.categories.length; __s64local1++) {
      var __s64local2 = this.categories[__s64local1];
      if (!__s64local2.selectedGroup.full()) {
        return;
      }
      var __s64local3 = __s64local2.selectedGroup.getSelectedOptions();
      __s64local0.push(__s64local3);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnSave, false);
    this.dialogDisp.btnSave.toolTipText = "dialog_shoppingCartPrimeDay_save_tooltip";
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSaveShoppingCartVO.C2SSaveShoppingCartVO(__s64local0));
    this.getEventVO().shoppingCartOptionsIdsByCategory = __s64local0;
  };
  CastleShoppingCartPrimeDayDialog.prototype.onSSCArrived = function (__s69param0) {
    if (__s69param0.params[0] == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      this.showPopOver();
    }
  };
  CastleShoppingCartPrimeDayDialog.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayDialog.NAME = "CastleShoppingCartPrimeDay_March2024";
    CastleShoppingCartPrimeDayDialog.CATEGORIES = ["red", "blue", "green"];
  };
  return CastleShoppingCartPrimeDayDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleShoppingCartPrimeDayDialog = __s0local0;
var __dep_export_CastleShoppingCartPrimeDayCategory = require("gge-module:export_CastleShoppingCartPrimeDayCategory");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
