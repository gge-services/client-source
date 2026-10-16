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
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_CastleEventBuildingPanelProperties = require("gge-module:export_CastleEventBuildingPanelProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastlePrivateOfferRubymineDialog() {
    return __s1param0.call(this, CastlePrivateOfferRubymineDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferRubymineDialog, __s1param0);
  Object.defineProperty(CastlePrivateOfferRubymineDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferRubymineDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_buy, this.dialogDisp.btn_close]);
    this.mc_tooltip = new Library.CastleInterfaceElements.DecoShopPanel_BuildingTooltip();
  };
  CastlePrivateOfferRubymineDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    var __s9local0 = this.dialogProperties.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID).ID;
    var __s9local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s9local0, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rubymine_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_shortDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rubymine_desc_detail"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_specialLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOffer_banner_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_publicOrder.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s9local1.decoPoints.toString()));
    this.dialogDisp.mc_publicOrder.mouseChildren = false;
    this.dialogDisp.mc_publicOrder.toolTipText = "dialog_buildingInfo_publicOrder";
    this.dialogDisp.btn_buy.toolTipText = "build";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_costs, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local1.costC2)).color = __s9local1.costC2 > __dep_export_CastleModel.CastleModel.currencyData.c2Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    var __s9local2 = __s9local1.mineTypeId;
    var __s9local3 = __dep_export_CastleModel.CastleModel.mineData.getMineVOByObjectID(__s9local2);
    var __s9local4 = __s9local3.totalAmount;
    var __s9local5 = __s9local3.totalLootableAmount * __s9local3.waitingTime;
    var __s9local6 = __dep_exact_f855840627e6e145.int(__s9local5 / 60 / 60 / 24);
    var __s9local7 = __dep_exact_9e901e8e2483a22f_1.MathBase.floor(__s9local4 / __s9local1.costC2, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("alert_rubymine_bonustext", [__s9local6, __s9local7]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO("")).textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    this.onUpdateEventTime(null);
    this.dialogDisp.icon_mine.mouseChildren = false;
  };
  CastlePrivateOfferRubymineDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.showToolTip();
  };
  CastlePrivateOfferRubymineDialog.prototype.showToolTip = function () {
    var __s13local0 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    var __s13local1 = __dep_exact_f855840627e6e145.int(__s13local0.dialogCustomization.BID);
    var __s13local2 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s13local1, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(this.dialogDisp.icon_mine, __s13local2);
  };
  CastlePrivateOfferRubymineDialog.prototype.hideLoaded = function (__s15param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferRubymineDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastlePrivateOfferRubymineDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __s1param0.prototype.removeEventListenerOnHide.call(this);
  };
  CastlePrivateOfferRubymineDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_buy:
        this.onBuildingBuy();
    }
  };
  CastlePrivateOfferRubymineDialog.prototype.onBuildingBuy = function () {
    var __s24local0 = this.dialogProperties.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID);
    this.layoutManager.showEventBuildingPanel(new __dep_export_CastleEventBuildingPanelProperties.CastleEventBuildingPanelProperties(__s24local0.ID, this.dialogProperties.offerVO));
  };
  CastlePrivateOfferRubymineDialog.prototype.onMouseOver = function (__s26param0) {
    __s1param0.prototype.onMouseOver.call(this, __s26param0);
    if (__s26param0.target instanceof __s0local0) {
      this.mc_tooltip.visible = __s26param0.target == this.dialogDisp.icon_mine || __s26param0.target == this.dialogDisp.mc_tooltip;
      if (__s26param0.target == this.dialogDisp.icon_mine || __s26param0.target == this.dialogDisp.mc_tooltip) {
        this.showToolTip();
      } else {
        __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
      }
    }
  };
  CastlePrivateOfferRubymineDialog.prototype.onMouseOut = function (__s31param0) {
    __s1param0.prototype.onMouseOut.call(this, __s31param0);
    this.mc_tooltip.visible = false;
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferRubymineDialog.prototype.onUpdateEventTime = function (__s33param0) {
    var __s33local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.remainingSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, __s33local0);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, __s33local0);
  };
  CastlePrivateOfferRubymineDialog.prototype.onOfferRemoved = function (__s35param0) {
    if (__s35param0.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivateOfferRubymineDialog.__initialize_static_members = function () {
    CastlePrivateOfferRubymineDialog.NAME = "CastlePrivateOfferRubymine";
  };
  return CastlePrivateOfferRubymineDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivateOfferRubymineDialog = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
