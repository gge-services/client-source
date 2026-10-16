Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleBreweryData = require("gge-module:export_CastleBreweryData");
var __dep_export_C2SGetAreaBuildingProductionVO = require("gge-module:export_C2SGetAreaBuildingProductionVO");
var __dep_export_ResourceComponentWithStorageBar = require("gge-module:export_ResourceComponentWithStorageBar");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBreweryDialog = require("gge-module:export_CastleBreweryDialog");
var __s0local0 = function (__s1param0) {
  function CastleBreweryShortageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBreweryShortageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBreweryShortageDialog, __s1param0);
  CastleBreweryShortageDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_trader, this.dialogDisp.btn_brewery, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_insufficientResources_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("currentStock_01"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("productionLimit"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_relicBrewery_insufficientResources_copy", [this.infoProperties.messageVO.areaName]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_resourceWait_traderSpeechBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_trader.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_resourceWait_toTraderButton_short")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_brewery.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_insufficientResources_toBreweryButton")));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_trader, !!this.traderVO);
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedListData));
    this.controller.addEventListener(__dep_export_CastleBreweryData.CastleBreweryData.ON_BREWERY_INFO_EXTERN, this.bindFunction(this.onBreweryData));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO(0));
    __dep_export_CastleModel.CastleModel.breweryData.waitForExternalCommand = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAreaBuildingProductionVO.C2SGetAreaBuildingProductionVO(this.infoProperties.messageVO.kingdomID, this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.wodID, this.infoProperties.messageVO.objectID));
  };
  CastleBreweryShortageDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s7param0);
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedListData));
    this.controller.removeEventListener(__dep_export_CastleBreweryData.CastleBreweryData.ON_BREWERY_INFO_EXTERN, this.bindFunction(this.onBreweryData));
  };
  CastleBreweryShortageDialog.prototype.onDetailedListData = function (__s9param0 = null) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID);
    if (__s9local0) {
      var __s9local1 = new __dep_export_ResourceComponentWithStorageBar.ResourceComponentWithStorageBar(this.dialogDisp.res_food, __dep_export_CollectableEnum.CollectableEnum.FOOD);
      __s9local1.setValue(__s9local0.getResource(__dep_export_CollectableEnum.CollectableEnum.FOOD), __s9local0.getMaxStorageSpace(__dep_export_CollectableEnum.CollectableEnum.FOOD));
      __s9local1.disp.doCache();
      this.dialogDisp.res_food.toolTipText = null;
      this.dialogDisp.res_food.mouseChildren = true;
      this.dialogDisp.res_food.mc_stock_food.toolTipText = "food";
      var __s9local2 = new __dep_export_ResourceComponentWithStorageBar.ResourceComponentWithStorageBar(this.dialogDisp.res_honey, __dep_export_CollectableEnum.CollectableEnum.HONEY);
      __s9local2.setValue(__s9local0.getResource(__dep_export_CollectableEnum.CollectableEnum.HONEY), __s9local0.getMaxStorageSpace(__dep_export_CollectableEnum.CollectableEnum.HONEY));
      __s9local2.disp.doCache();
      this.dialogDisp.res_honey.toolTipText = null;
      this.dialogDisp.res_honey.mouseChildren = true;
      this.dialogDisp.res_honey.mc_stock_honey.toolTipText = "honey";
    } else {
      this.hide();
    }
  };
  CastleBreweryShortageDialog.prototype.onBreweryData = function (__s13param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limit_food, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.breweryData.ex_stopAtFoodAmount));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limit_honey, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.breweryData.ex_stopAtHoneyAmount));
    this.dialogDisp.mc_limit_food.toolTipText = "food";
    this.dialogDisp.mc_limit_honey.toolTipText = "honey";
  };
  CastleBreweryShortageDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_trader:
          this.hide();
          this.joinCastle(this.bindFunction(this.onJAATrader));
          break;
        case this.dialogDisp.btn_brewery:
          this.hide();
          this.joinCastle(this.bindFunction(this.onJAABrewery));
      }
    }
  };
  CastleBreweryShortageDialog.prototype.joinCastle = function (__s19param0) {
    if (this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == this.infoProperties.messageVO.kingdomID && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId == this.infoProperties.messageVO.areaID) {
      __s19param0();
    } else {
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, __s19param0);
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID));
    }
  };
  CastleBreweryShortageDialog.prototype.onJAABrewery = function (__s24param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAABrewery));
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleBreweryDialog.CastleBreweryDialog);
  };
  CastleBreweryShortageDialog.prototype.onJAATrader = function (__s26param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAATrader));
    this.traderVO.openDialog(true);
  };
  Object.defineProperty(CastleBreweryShortageDialog.prototype, "traderVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryShortageDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryShortageDialog.NAME = "CastleBreweryOutOfHoney";
  return CastleBreweryShortageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBreweryShortageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
