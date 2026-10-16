Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_VerticalSliderStrategy = require("gge-module:export_VerticalSliderStrategy");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_PrivateResourceVillageShopItemVO = require("gge-module:export_PrivateResourceVillageShopItemVO");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageShopDialog() {
    return __s1param0.call(this, PrivateResourceVillageShopDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageShopDialog, __s1param0);
  PrivateResourceVillageShopDialog.prototype.onKingdomChange = function () {
    this.onVillageTypeChange();
  };
  PrivateResourceVillageShopDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s7param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this.filterComponent = new __dep_export_ResourceVillageFilterComponent.ResourceVillageFilterComponent(this.dialogDisp);
    this.filterComponent.kingdomChangeSignal.add(this.bindFunction(this.onKingdomChange));
    this.filterComponent.villageTypeChangeSignal.add(this.bindFunction(this.onVillageTypeChange));
  };
  PrivateResourceVillageShopDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.filterComponent.onHide();
  };
  PrivateResourceVillageShopDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.filterComponent.onShow();
    this.filterComponent.setVillageType(this.dialogProperties.villageType);
  };
  PrivateResourceVillageShopDialog.prototype.onVillageTypeChange = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.privateResourceVillageData.getPrivateVillages(this.filterComponent.currentKingdomID, this.filterComponent.currentVillageType);
    var __s13local1 = Math.ceil(__s13local0.length / __dep_export_PrivateResourceVillageShopItem.PrivateResourceVillageShopItem.NUM_ITEMS_PER_PAGE);
    var __s13local2 = new __dep_export_BasicSliderVO.BasicSliderVO(this.dialogDisp.mc_villages.mc_sliderLine, this.dialogDisp.mc_villages.btn_slider, __s13local1);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_villages.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_villages.btn_down);
    this.removePackageScrollList();
    this.itemsList = new __dep_export_SliderItemScrollList.SliderItemScrollList(this.dialogDisp.mc_villages, this.dialogDisp, __s13local2, new __dep_export_VerticalSliderStrategy.VerticalSliderStrategy());
    this.itemsList.scrollStep = __dep_export_PrivateResourceVillageShopItem.PrivateResourceVillageShopItem.NUM_ITEMS_PER_PAGE;
    this.itemsList.scrollItemClass = __dep_export_PrivateResourceVillageShopItem.PrivateResourceVillageShopItem;
    var __s13local3 = __dep_export_CastleModel.CastleModel.userData.villageList.getCountByRessourceType(this.filterComponent.currentKingdomID, __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(this.filterComponent.currentVillageType)) < __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.filterComponent.currentKingdomID).getVillageCapByType(this.filterComponent.currentVillageType);
    if (__s13local0 != null) {
      for (var __s13local4 = 0, __s13local5 = __s13local0; __s13local4 < __s13local5.length; __s13local4++) {
        var __s13local6 = __s13local5[__s13local4];
        if (__s13local6 !== undefined) {
          this.itemsList.pushContent(new __dep_export_PrivateResourceVillageShopItemVO.PrivateResourceVillageShopItemVO(__s13local6, __s13local3));
        }
      }
    }
    this.itemsList.initList(0, false);
  };
  PrivateResourceVillageShopDialog.prototype.removePackageScrollList = function () {
    if (this.itemsList) {
      this.itemsList.remove();
      this.itemsList.clear();
      this.itemsList = null;
    }
  };
  PrivateResourceVillageShopDialog.prototype.onClick = function (__s22param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
      switch (__s22param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_privateResourceVillages_shop_help"));
      }
    }
  };
  Object.defineProperty(PrivateResourceVillageShopDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  PrivateResourceVillageShopDialog.ASSET_NAME = "PrivateResourceVillageShopDialog";
  return PrivateResourceVillageShopDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.PrivateResourceVillageShopDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __dep_export_PrivateResourceVillageShopItem = require("gge-module:export_PrivateResourceVillageShopItem");
var __dep_export_ResourceVillageFilterComponent = require("gge-module:export_ResourceVillageFilterComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
