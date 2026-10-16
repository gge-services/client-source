Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SUpdateRecruitmentLoopVO = require("gge-module:export_C2SUpdateRecruitmentLoopVO");
var __dep_export_AutoRecruitmentEvent = require("gge-module:export_AutoRecruitmentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AutoRecruitmentPriceEnum = require("gge-module:export_AutoRecruitmentPriceEnum");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ComboboxItemRendererAutoRecruitment = require("gge-module:export_ComboboxItemRendererAutoRecruitment");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_AutoRecruitmentHelper = require("gge-module:export_AutoRecruitmentHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AAutoRecruitmentPurchaseDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._waitingForServerConfirm = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AAutoRecruitmentPurchaseDialog.ASSET_URL)) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAutoRecruitmentPurchaseDialog, __s1param0);
  AAutoRecruitmentPurchaseDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this._infoTextScrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.mc_info.txt_value, this.dialogDisp.mc_info.mc_slider.btn_up, this.dialogDisp.mc_info.mc_slider.btn_down, this.dialogDisp.mc_info.mc_slider.btn_slider, this.dialogDisp.mc_info.mc_slider.mc_sliderline, [this.dialogDisp.mc_info.mc_slider]));
    this._infoTextScrollComponent.hideArrowsOnScrollToEdges = true;
    this._infoTextScrollComponent.invisibleOnFit = true;
    this._loopSelector = new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.mc_selectLoops, "", 1, 18, 19, 188, 0, new __dep_export_ComboboxItemRendererAutoRecruitment.ComboboxItemRendererAutoRecruitment());
    this._costComponent = new __dep_export_AutoRecruitmentCostComponent.AutoRecruitmentCostComponent(this.dialogDisp.mc_costs);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_purchaseLoop_costs_looping")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_loop.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_purchaseLoop_costs_looping")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_double.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_purchaseLoop_costs_doubling")).autoFitToBounds = true;
  };
  AAutoRecruitmentPurchaseDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._loopSelector.userClickItemSignal.add(this.bindFunction(this.onLoopSelected));
    this._infoTextScrollComponent.onShow();
    this.controller.addEventListener(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_PURCHASE_CONFIRM, this.bindFunction(this.onServerConfirmed));
    this.controller.addEventListener(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_PURCHASE_DENY, this.bindFunction(this.onServerDenied));
    this.updateLoopSelector();
    this.updateRecruitTime();
    this.updateCosts();
  };
  AAutoRecruitmentPurchaseDialog.prototype.hide = function () {
    this._loopSelector.userClickItemSignal.remove(this.bindFunction(this.onLoopSelected));
    this._infoTextScrollComponent.onHide();
    this.controller.removeEventListener(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_PURCHASE_CONFIRM, this.bindFunction(this.onServerConfirmed));
    this.controller.removeEventListener(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_PURCHASE_DENY, this.bindFunction(this.onServerDenied));
    __s1param0.prototype.hide.call(this);
  };
  AAutoRecruitmentPurchaseDialog.prototype.updateLoopSelector = function () {
    this._loopSelector.clearItems();
    var __s11local0;
    var __s11local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.autoRecruitPriceData.getMaxLoopsByType(this.dialogProperties.costs.priceType));
    for (var __s11local2 = __dep_exact_f855840627e6e145.int(__s11local1 - this.dialogProperties.currentLoopCount), __s11local3 = 1; __s11local3 <= __s11local2; ++__s11local3) {
      (__s11local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s11local3 == 1 ? "dialog_purchaseLoop_loops_singular" : "dialog_purchaseLoop_loops_plural", [__s11local3]);
      this._loopSelector.addItem(__s11local0);
    }
    this._loopSelector.selectItemIndex(0);
  };
  AAutoRecruitmentPurchaseDialog.prototype.updateCosts = function () {
    this._costComponent.updateWithNewCosts(this.getCurrentCosts());
  };
  AAutoRecruitmentPurchaseDialog.prototype.updateRecruitTime = function () {
    var __s17local0 = __dep_exact_f855840627e6e145.int(this.getDurationOfLoops(this.selectedLoopCount, this.dialogProperties.currentRecruitTime));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s17local0)));
  };
  Object.defineProperty(AAutoRecruitmentPurchaseDialog.prototype, "selectedLoopCount", {
    get: function () {
      return this._loopSelector.selectedId + 1;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentPurchaseDialog.prototype.getDurationOfLoops = function (__s21param0, __s21param1) {
    var __s21local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.festivalVO.remainingTimeInSeconds);
    var __s21local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR).remainingTimeInSeconds);
    var __s21local2 = __dep_export_CastleModel.CastleModel.boostData.festivalVO.boostAmount;
    var __s21local3 = __s21local1 > 0 ? __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR).bonusValue : 0;
    var __s21local4 = 0;
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
      var __s21local5 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (__s21local5 && __s21local5.remainingFactionProtectionTimeInSeconds > 0 && __s21local5.factionProtectionStatus != __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN) {
        __s21local4 = __dep_exact_f855840627e6e145.int(__s21local5.remainingFactionProtectionTimeInSeconds);
      }
    } else if (__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime() > 0 && __dep_export_CastleModel.CastleModel.userData.peaceModeStatus != __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_POSTTIME) {
      __s21local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
    }
    var __s21local6 = __s21param1;
    for (var __s21local7 = 0; __s21local7 < __s21param0; ++__s21local7) {
      var __s21local8 = __s21local4 > 0 && __s21local4 > __s21local6;
      var __s21local9 = 0;
      __s21local9 += __s21local0 > 0 && __s21local0 > __s21local6 ? 0 : __s21local2;
      __s21local9 += __s21local1 > 0 && __s21local1 > __s21local6 ? 0 : __s21local3;
      __s21local6 += __dep_exact_f855840627e6e145.int(this.dialogProperties.getTotalRecruitTime(__s21local8, __s21local9));
    }
    return __s21local6;
  };
  AAutoRecruitmentPurchaseDialog.prototype.getCurrentCosts = function () {
    function getFinalCostItem(__s30param0) {
      var __s30local0 = __s30param0.clone();
      __s30local0.amount = __dep_exact_f855840627e6e145.int(__s30local0.amount * this.selectedLoopCount);
      return __s30local0;
    }
    var __s28local0 = new __dep_export_AutoRecruitmentCosts.AutoRecruitmentCosts();
    __s28local0.priceType = __dep_export_AutoRecruitmentPriceEnum.AutoRecruitmentPriceEnum.getTypeByListId(this.dialogProperties.listId);
    for (var __s28local1 = 0; __s28local1 < this.dialogProperties.costs.costs.length; ++__s28local1) {
      __s28local0.costs.addItem(getFinalCostItem(this.dialogProperties.costs.costs.getItemByIndex(__s28local1)));
    }
    __s28local0.loopFee = __dep_export_CastleModel.CastleModel.autoRecruitPriceData.getCosts(__s28local0.priceType, this.dialogProperties.currentLoopCount + 1, this.dialogProperties.currentLoopCount + this.selectedLoopCount).clone();
    __s28local0.duplicatingCosts = getFinalCostItem(this.dialogProperties.costs.duplicatingCosts);
    return __s28local0;
  };
  AAutoRecruitmentPurchaseDialog.prototype.onClick = function (__s34param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      switch (__s34param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
      }
    }
  };
  AAutoRecruitmentPurchaseDialog.prototype.onOkButton = function () {
    if (!this._waitingForServerConfirm) {
      if (__dep_export_AutoRecruitmentHelper.AutoRecruitmentHelper.isEventKingdom(this.dialogProperties.currentKingdomId) && __dep_export_AutoRecruitmentHelper.AutoRecruitmentHelper.getRemainingEventKingdomTime(this.dialogProperties.currentKingdomId) < this.getDurationOfLoops(this.dialogProperties.currentLoopCount + this.selectedLoopCount, this.dialogProperties.currentRecruitTime)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_warning"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_purchaseLoop_eventEnd"), this.bindFunction(this.onConfirmEventWarning)));
      } else {
        this.sendConfirmToServer();
      }
    }
  };
  AAutoRecruitmentPurchaseDialog.prototype.onConfirmEventWarning = function (__s43param0 = null) {
    this.sendConfirmToServer();
  };
  AAutoRecruitmentPurchaseDialog.prototype.sendConfirmToServer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUpdateRecruitmentLoopVO.C2SUpdateRecruitmentLoopVO(this.dialogProperties.listId, this.dialogProperties.recruitmentSnapshot, this.selectedLoopCount));
    this._waitingForServerConfirm = true;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
  };
  AAutoRecruitmentPurchaseDialog.prototype.onServerConfirmed = function (__s47param0) {
    this._waitingForServerConfirm = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.hide();
  };
  AAutoRecruitmentPurchaseDialog.prototype.onServerDenied = function (__s49param0) {
    this._waitingForServerConfirm = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  AAutoRecruitmentPurchaseDialog.prototype.onLoopSelected = function (__s51param0) {
    this.updateCosts();
    this.updateRecruitTime();
  };
  Object.defineProperty(AAutoRecruitmentPurchaseDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentPurchaseDialog.__initialize_static_members = function () {
    AAutoRecruitmentPurchaseDialog.ASSET_URL = "AutoRecruitmentPurchase";
  };
  return AAutoRecruitmentPurchaseDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AAutoRecruitmentPurchaseDialog = __s0local0;
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_AutoRecruitmentCostComponent = require("gge-module:export_AutoRecruitmentCostComponent");
var __dep_export_AutoRecruitmentCosts = require("gge-module:export_AutoRecruitmentCosts");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
