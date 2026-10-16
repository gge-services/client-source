Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SKingdomGetVillageListVO = require("gge-module:export_C2SKingdomGetVillageListVO");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_PrivateResourceVillageShopDialogProperties = require("gge-module:export_PrivateResourceVillageShopDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleResourceVillageOverviewDialog() {
    return __s1param0.call(this, CastleResourceVillageOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceVillageOverviewDialog, __s1param0);
  CastleResourceVillageOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateResourceVillages_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_shop.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateResourceVillages_shopButton"));
    this.filterComponent = new __dep_export_ResourceVillageFilterComponent.ResourceVillageFilterComponent(this.dialogDisp);
    this.listComponent = new __dep_export_SliderItemScrollList.SliderItemScrollList(this.dialogDisp, this.dialogDisp);
    this.listComponent.scrollItemClass = __dep_export_CastleResourceVillageListItem.CastleResourceVillageListItem;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_shop, this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleResourceVillageOverviewDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.filterComponent.onShow();
    this.filterComponent.kingdomChangeSignal.add(this.bindFunction(this.onKingdomChange));
    this.filterComponent.villageTypeChangeSignal.add(this.bindFunction(this.onVillageTypeChange));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomGetVillageListVO.C2SKingdomGetVillageListVO());
    this.isWaitingForServerMessage = true;
    this.dialogDisp.visible = false;
  };
  CastleResourceVillageOverviewDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.filterComponent.onHide();
    this.filterComponent.kingdomChangeSignal.remove(this.bindFunction(this.onKingdomChange));
    this.filterComponent.villageTypeChangeSignal.remove(this.bindFunction(this.onVillageTypeChange));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
  };
  CastleResourceVillageOverviewDialog.prototype.onDataUpdated = function (__s11param0) {
    this.isWaitingForServerMessage = false;
    this._villageList = __s11param0.params;
    this.fillList(this.listComponent.currentStartIndex);
    this.dialogDisp.visible = true;
  };
  CastleResourceVillageOverviewDialog.prototype.onKingdomChange = function () {
    this.fillList();
  };
  CastleResourceVillageOverviewDialog.prototype.onVillageTypeChange = function () {
    this.fillList();
  };
  CastleResourceVillageOverviewDialog.prototype.fillList = function (__s17param0 = 0) {
    this.listComponent.clear();
    if (!this.isWaitingForServerMessage) {
      var __s17local0 = this._villageList.getSortedVillageListByKingdomID(this.filterComponent.currentKingdomID);
      if ((__s17local0 = __s17local0.filter(this.bindFunction(this.filterByType))) != null) {
        for (var __s17local1 = 0, __s17local2 = __s17local0; __s17local1 < __s17local2.length; __s17local1++) {
          var __s17local3 = __s17local2[__s17local1];
          if (__s17local3 !== undefined) {
            var __s17local4 = new __dep_export_CastleResourceVillageListItemVO.CastleResourceVillageListItemVO(__s17local3.villageMapObjectVO, __s17local3.unitInventory.getUnits(null));
            this.listComponent.pushContent(__s17local4);
          }
        }
      }
      var __s17local5 = this._villageList.getPrivateVillageList(this.filterComponent.currentKingdomID, this.filterComponent.currentVillageType);
      if (__s17local5 != null) {
        for (var __s17local6 = 0, __s17local7 = __s17local5; __s17local6 < __s17local7.length; __s17local6++) {
          var __s17local8 = __s17local7[__s17local6];
          if (__s17local8 !== undefined) {
            var __s17local9 = new __dep_export_CastleResourceVillageListItemVO.CastleResourceVillageListItemVO(null, null, __s17local8);
            this.listComponent.pushContent(__s17local9);
          }
        }
      }
      this.listComponent.initList(__s17param0);
    }
  };
  CastleResourceVillageOverviewDialog.prototype.onClick = function (__s28param0) {
    __s1param0.prototype.onClick.call(this, __s28param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target)) {
      switch (__s28param0.target) {
        case this.dialogDisp.btn_shop:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_PrivateResourceVillageShopDialog.PrivateResourceVillageShopDialog, new __dep_export_PrivateResourceVillageShopDialogProperties.PrivateResourceVillageShopDialogProperties(this.filterComponent.currentVillageType));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_privateResourceVillages_help"));
      }
    }
  };
  CastleResourceVillageOverviewDialog.prototype.filterByType = function (__s32param0) {
    var __s32local0 = [];
    for (var __s32local1 = 1; __s32local1 < arguments.length; __s32local1++) {
      __s32local0[__s32local1 - 1] = arguments[__s32local1];
    }
    return __s32param0.villageMapObjectVO.villageType == this.filterComponent.currentVillageType;
  };
  CastleResourceVillageOverviewDialog.NAME = "CastleResourceVillageOverview";
  return CastleResourceVillageOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResourceVillageOverviewDialog = __s0local0;
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __dep_export_CastleResourceVillageListItem = require("gge-module:export_CastleResourceVillageListItem");
var __dep_export_CastleResourceVillageListItemVO = require("gge-module:export_CastleResourceVillageListItemVO");
var __dep_export_PrivateResourceVillageShopDialog = require("gge-module:export_PrivateResourceVillageShopDialog");
var __dep_export_ResourceVillageFilterComponent = require("gge-module:export_ResourceVillageFilterComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
