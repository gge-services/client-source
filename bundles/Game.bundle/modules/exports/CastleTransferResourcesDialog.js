Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetCastleResourcesVO = require("gge-module:export_C2SGetCastleResourcesVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function CastleTransferResourcesDialog() {
    return __s1param0.call(this, CastleTransferResourcesDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTransferResourcesDialog, __s1param0);
  CastleTransferResourcesDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._castleSelector = new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.castleSelector);
    this.dialogDisp.mc_infoTime.toolTipText = "travelTime";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_season_sendRes_title"));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancle]);
  };
  CastleTransferResourcesDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.mc_infoTime.visible = this.dialogProperties.travelTime > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_infoTime.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getTimeToString(this.dialogProperties.travelTime, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.infoText));
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __dep_export_CastleModel.CastleModel.userData.castleList, null, this.dialogProperties.exceptingKingdomIDs);
    this.dialogDisp.tradeComponent.visible = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
    this.onSelectCastle(null);
  };
  CastleTransferResourcesDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleTransferResourcesDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.removeEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleTransferResourcesDialog.prototype.onEilandReset = function (__s13param0) {
    this.hide();
  };
  CastleTransferResourcesDialog.prototype.onDataUpdated = function (__s15param0) {
    this.initSelectors();
  };
  CastleTransferResourcesDialog.prototype.onChangeResources = function (__s17param0 = null) {
    this._castleRessourcesVO = __s17param0.params[0];
    if (this._castleRessourcesVO && this._castleRessourcesVO.castleID == this._castleSelector.selectedCastleVO.objectId && this._castleRessourcesVO.kingdomID == this._castleSelector.selectedCastleVO.kingdomID) {
      this.initSelectors();
    }
  };
  CastleTransferResourcesDialog.prototype.initSelectors = function () {
    var __s20local0;
    if (this._tradeComponent) {
      __s20local0 = this._tradeComponent.selectedIndices;
      this._tradeComponent.hide();
    }
    if (this._castleRessourcesVO && this.sourceDetailedCastleVO && this.dialogProperties.targetInitialized) {
      this.dialogDisp.tradeComponent.visible = true;
      var __s20local1 = new __dep_export_CastleSendGoodsKingdomVO.CastleSendGoodsKingdomVO(this.sourceDetailedCastleVO.getResourcesAsCollectableList(), this.dialogProperties.travelTaxRate, this.dialogProperties.targetResources, this.dialogProperties.resourceStorageCapacity, this.dialogProperties.isSubscriptionBuffed);
      this._tradeComponent = new __dep_export_CastleSendGoodsComponent.CastleSendGoodsComponent(this.dialogDisp.tradeComponent, __s20local1, null, this.dialogProperties.hideTabs);
      if (__s20local0 && __s20local0.length > 0) {
        this._tradeComponent.selectedIndices = __s20local0;
      }
    }
  };
  CastleTransferResourcesDialog.prototype.onSelectCastle = function (__s25param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
  };
  CastleTransferResourcesDialog.prototype.onClick = function (__s27param0) {
    switch (__s27param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOk();
    }
  };
  CastleTransferResourcesDialog.prototype.onOk = function () {
    if (this._tradeComponent) {
      if (this._tradeComponent.getSelectedSum() > 0) {
        if (this.dialogProperties.hasInsufficientTime) {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_season_sendRes_info_insufficentTime"), this.bindFunction(this.sendResources), this.bindFunction(this.dontSendResources)));
        } else {
          this.sendResources();
        }
      } else {
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_sendGoods_noGoods")));
      }
    } else {
      this.hide();
    }
  };
  CastleTransferResourcesDialog.prototype.sendResources = function (__s38param0 = null) {
    var __s38local0 = this._castleSelector.selectedCastleVO;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getSendResourcesCommand(__s38local0.objectId, __s38local0.kingdomID, this.createC2SRewardList()));
    this.hide();
  };
  CastleTransferResourcesDialog.prototype.dontSendResources = function (__s40param0 = null) {
    this.hide();
  };
  CastleTransferResourcesDialog.prototype.createC2SRewardList = function () {
    return __dep_export_CollectableManager.CollectableManager.parser.c2SCosts.createCostsListForServer(__dep_export_CollectableManager.CollectableManager.parser.createGoodsListSavefromList(this._tradeComponent.rewardList()));
  };
  CastleTransferResourcesDialog.prototype.hideLoaded = function (__s44param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s44param0);
    if (this._tradeComponent) {
      this._tradeComponent.hide();
    }
    this._castleRessourcesVO = null;
    this._castleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
  };
  Object.defineProperty(CastleTransferResourcesDialog.prototype, "sourceDetailedCastleVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResourcesDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResourcesDialog.__initialize_static_members = function () {
    CastleTransferResourcesDialog.NAME = "CastleTransferResources_R2";
  };
  return CastleTransferResourcesDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTransferResourcesDialog = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleSendGoodsKingdomVO = require("gge-module:export_CastleSendGoodsKingdomVO");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_CastleSendGoodsComponent = require("gge-module:export_CastleSendGoodsComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog = require("gge-module:export_CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
