Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SConstructionItemInventorySpaceLeftVO = require("gge-module:export_C2SConstructionItemInventorySpaceLeftVO");
var __dep_export_CastleConstructionItemsEvent = require("gge-module:export_CastleConstructionItemsEvent");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextPicker = require("gge-module:export_TextPicker");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_AMerchantBuyDialog = require("gge-module:export_AMerchantBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastleGenericSliderBuyDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericSliderBuyDialog, __s1param0);
  CastleGenericSliderBuyDialog.prototype.initBasicButtons = function (__s5param0) {
    __s5param0 = __s5param0.concat([this.dialogDisp.mc_picker.btn_left, this.dialogDisp.mc_picker.btn_right, this.dialogDisp.mc_slider.btn_slider]);
    __s1param0.prototype.initBasicButtons.call(this, __s5param0);
  };
  CastleGenericSliderBuyDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    var __s7local0 = this.getMaxBuyablePackages();
    this.amountPicker = new __dep_export_TextPicker.TextPicker(this.dialogDisp.mc_picker);
    this.amountPicker.setNumItems(Math.max(__s7local0, 1));
    this.sliderData = new __dep_export_BasicSliderVO.BasicSliderVO(this.dialogDisp.mc_slider.sliderBar, this.dialogDisp.mc_slider.btn_slider, __s7local0 - 1, 0, this.dialogDisp);
    this.amountSlider = new __dep_export_ScrollComponent.ScrollComponent(this.sliderData, __dep_export_ScrollComponent.ScrollComponent.HORIZONTAL_SLIDER);
    this.amountPicker.itxt_pick.autoFitToBounds = true;
    this.dialogDisp.mc_slider.visible = this.dialogDisp.mc_picker.visible = this.dialogProperties.eventPackageVO.mayBeBoughtInBulk;
    var __s7local1 = this.dialogProperties.eventPackageVO.reward;
    if (__s7local1.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_TIME) {
      this.amountPicker.amountFactor = __s7local1.duration / __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY;
    } else {
      this.amountPicker.amountFactor = __s7local1.amount;
    }
    this.resetSlider();
  };
  CastleGenericSliderBuyDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.amountSlider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onChangeSliderAmount));
    this.dialogDisp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangePackageAmount));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.resetSlider));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.resetSlider));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.resetSlider));
    if (this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.resetSlider));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SConstructionItemInventorySpaceLeftVO.C2SConstructionItemInventorySpaceLeftVO());
    }
  };
  CastleGenericSliderBuyDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.amountSlider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onChangeSliderAmount));
    this.dialogDisp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangePackageAmount));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.resetSlider));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.resetSlider));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.resetSlider));
    if (this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.resetSlider));
    }
  };
  CastleGenericSliderBuyDialog.prototype.resetSlider = function (__s21param0 = null) {
    var __s21local0 = this.getMaxBuyablePackages();
    var __s21local1 = __dep_exact_f855840627e6e145.int(this.amountPicker.selectedValue);
    var __s21local2 = __s21local1 + 1 > __s21local0 ? __s21local0 - 1 : __s21local1;
    this.amountPicker.setNumItems(Math.max(__s21local0, 1));
    this.sliderData.maxValue = __s21local0 - 1;
    this.amountPicker.setSelectedValueWithoutLoop(__s21local2);
    this.amountSlider.setSelectedIndex(__s21local2);
  };
  CastleGenericSliderBuyDialog.prototype.setAmountTextColor = function (__s23param0) {
    this.amountPicker.itxt_pick.color = __s23param0;
  };
  CastleGenericSliderBuyDialog.prototype.hideLoaded = function (__s25param0 = null) {
    if (this.amountPicker) {
      this.amountPicker.dispose();
    }
    if (this.amountSlider) {
      this.amountSlider.dispose();
    }
    __s1param0.prototype.hideLoaded.call(this, __s25param0);
  };
  CastleGenericSliderBuyDialog.prototype.onChangeSliderAmount = function (__s29param0 = null) {
    this.amountPicker.setSelectedValueWithoutLoop(this.amountSlider.selectedIndex);
  };
  CastleGenericSliderBuyDialog.prototype.getMaxBuyablePackages = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(this.currencyAvailable / this.packagePrice, this.physicalPackageLimit));
  };
  Object.defineProperty(CastleGenericSliderBuyDialog.prototype, "selectedPackagesAmount", {
    get: function () {
      if (this.amountPicker && this.dialogDisp.mc_slider.visible) {
        return this.amountPicker.selectedValue + 1;
      } else {
        return 1;
      }
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantBuyDialog.AMerchantBuyDialog.prototype, "selectedPackagesAmount").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericSliderBuyDialog.prototype.onChangePackageAmount = function (__s39param0 = null) {
    this.amountSlider.setSelectedIndex(this.amountPicker.selectedValue);
    this.handleCost();
  };
  return CastleGenericSliderBuyDialog;
}(__dep_export_AMerchantBuyDialog.AMerchantBuyDialog);
exports.CastleGenericSliderBuyDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
