Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_CastleEventBuildingPanelProperties = require("gge-module:export_CastleEventBuildingPanelProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastlePrivateOfferCoinmineDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferCoinmineDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferCoinmineDialog, __s1param0);
  Object.defineProperty(CastlePrivateOfferCoinmineDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferCoinmineDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_build, this.dialogDisp.btn_close, this.dialogDisp.mc_progress.btn_payment]);
    this.mc_tooltip = new Library.CastleInterfaceElements.DecoShopPanel_BuildingTooltip();
  };
  CastlePrivateOfferCoinmineDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    var __s9local0 = this.dialogProperties.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID).ID;
    var __s9local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s9local0, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    var __s9local2 = __s9local1.mineTypeId;
    var __s9local3 = __dep_export_CastleModel.CastleModel.mineData.getMineVOByObjectID(__s9local2);
    var __s9local4 = __s9local3.totalAmount;
    var __s9local5 = __s9local3.totalLootableAmount;
    var __s9local6 = __s9local3.waitingTime;
    var __s9local7 = __dep_exact_f855840627e6e145.int(__s9local3.amountPerCollect);
    var __s9local8 = __s9local5 * __s9local6;
    var __s9local9 = __dep_exact_f855840627e6e145.int(__s9local8 / 60 / 60 / 24);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_short_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("alert_goldmine_bonustext", [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local9), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local4)]));
    this.dialogDisp.mc_progress.btn_payment.toolTipText = "add_gold";
    this.dialogDisp.mc_progress.mc_progbarcontainer.toolTipText = "panel_quest_progress";
    this.dialogDisp.mc_progress.mc_progbarcontainer.mouseChildren = false;
    this.dialogDisp.mc_progress.icon_ruby.toolTipText = "gold";
    var __s9local10 = __dep_exact_92d05af59ee2ff30_2.Localize.number(__s9local1.decoPoints);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_publicOrder.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s9local10));
    this.dialogDisp.mc_publicOrder.mouseChildren = false;
    this.dialogDisp.mc_publicOrder.toolTipText = "dialog_buildingInfo_publicOrder";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remaning_time, new __dep_exact_92d05af59ee2ff30_2.TextVO("")).textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    if (this.dialogProperties.offerVO.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING || this.dialogProperties.offerVO.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY) {
      this.setBuildAbleState();
    } else {
      this.setOfferProgressState(__s9local9, __s9local7);
    }
    this.onUpdateEventTime(null);
    this.dialogDisp.icon_mine.mouseChildren = false;
  };
  CastlePrivateOfferCoinmineDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
  };
  CastlePrivateOfferCoinmineDialog.prototype.showToolTip = function () {
    var __s15local0 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    var __s15local1 = __dep_exact_f855840627e6e145.int(__s15local0.dialogCustomization.BID);
    var __s15local2 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s15local1, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(this.dialogDisp.icon_mine, __s15local2);
  };
  CastlePrivateOfferCoinmineDialog.prototype.hideLoaded = function (__s17param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferCoinmineDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
  };
  CastlePrivateOfferCoinmineDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __s1param0.prototype.removeEventListenerOnHide.call(this);
  };
  CastlePrivateOfferCoinmineDialog.prototype.onOfferUpdated = function (__s23param0) {
    if (__s23param0.offerVO.id == this.dialogProperties.offerVO.id) {
      if (this.dialogProperties.offerVO.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING || this.dialogProperties.offerVO.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY) {
        this.setBuildAbleState();
      } else {
        this.setProgress();
      }
    }
  };
  CastlePrivateOfferCoinmineDialog.prototype.setOfferProgressState = function (__s28param0, __s28param1) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_coinmine_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_condition, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_coinmine_desc_detail", [__s28param0, __s28param1]));
    this.setProgress();
  };
  CastlePrivateOfferCoinmineDialog.prototype.setBuildAbleState = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_coinmine_desc_bought")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_condition, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_coinmine_desc_bought_detail"));
    this.setBuildBtn();
    this.dialogDisp.btn_build.toolTipText = "build";
  };
  CastlePrivateOfferCoinmineDialog.prototype.setProgress = function () {
    var __s32local0 = this.dialogProperties.offerVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE);
    var __s32local1 = __s32local0.conditionTextReplacements[0];
    var __s32local2 = __s32local0.conditionTextReplacements[1];
    this.dialogDisp.mc_progress.visible = true;
    this.dialogDisp.btn_build.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s32local1), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s32local2)])).autoFitToBounds;
    this.dialogDisp.mc_progress.mc_progbarcontainer.progress_bar.scaleX = __s32local1 / __s32local2;
  };
  CastlePrivateOfferCoinmineDialog.prototype.setBuildBtn = function () {
    this.dialogDisp.mc_progress.visible = false;
    this.dialogDisp.btn_build.visible = true;
  };
  CastlePrivateOfferCoinmineDialog.prototype.onClick = function (__s36param0) {
    __s1param0.prototype.onClick.call(this, __s36param0);
    switch (__s36param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_progress.btn_payment:
        __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_COINMINE, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PRIVATE_OFFER_COINMINE);
        break;
      case this.dialogDisp.btn_build:
        this.onBuildingBuy();
        this.hide();
    }
  };
  CastlePrivateOfferCoinmineDialog.prototype.onMouseOver = function (__s39param0) {
    __s1param0.prototype.onMouseOver.call(this, __s39param0);
    if (__s39param0.target instanceof __s0local0) {
      this.mc_tooltip.visible = __s39param0.target == this.dialogDisp.icon_mine || __s39param0.target == this.dialogDisp.mc_tooltip;
      if (__s39param0.target == this.dialogDisp.icon_mine || __s39param0.target == this.dialogDisp.mc_tooltip) {
        this.showToolTip();
      } else {
        __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
      }
    }
  };
  CastlePrivateOfferCoinmineDialog.prototype.onMouseOut = function (__s44param0) {
    __s1param0.prototype.onMouseOut.call(this, __s44param0);
    this.mc_tooltip.visible = false;
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferCoinmineDialog.prototype.onBuildingBuy = function () {
    var __s46local0 = this.dialogProperties.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID);
    this.layoutManager.showEventBuildingPanel(new __dep_export_CastleEventBuildingPanelProperties.CastleEventBuildingPanelProperties(__s46local0.ID, this.dialogProperties.offerVO));
  };
  CastlePrivateOfferCoinmineDialog.prototype.onUpdateEventTime = function (__s48param0) {
    var __s48local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.remainingSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remaning_time, __s48local0, null, null, true);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, __s48local0);
  };
  CastlePrivateOfferCoinmineDialog.prototype.onOfferRemoved = function (__s50param0) {
    if (__s50param0.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivateOfferCoinmineDialog.__initialize_static_members = function () {
    CastlePrivateOfferCoinmineDialog.NAME = "CastlePrivateOfferCoinmine";
  };
  return CastlePrivateOfferCoinmineDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivateOfferCoinmineDialog = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
