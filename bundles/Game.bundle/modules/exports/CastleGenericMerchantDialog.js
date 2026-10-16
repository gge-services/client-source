Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleGenericMerchantDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericMerchantDialog, __s1param0);
  CastleGenericMerchantDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.buyPackagesComponent = new __dep_export_BuyEventPackagesComponent.BuyEventPackagesComponent();
    this.buyPackagesComponent.init(this.merchantScrollItem, this.dialogDisp.itemList, this.dialogDisp);
  };
  CastleGenericMerchantDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.buyPackagesComponent.show(this.bindFunction(this.getItemListVOs), this.highlightPackageId);
    this.initBasicButtons([]);
  };
  CastleGenericMerchantDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleGenericMerchantDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleGenericMerchantDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    this.buyPackagesComponent.hide();
  };
  CastleGenericMerchantDialog.prototype.onSpecialEventRemoved = function (__s15param0) {
    if (this.dialogProperties && this.dialogProperties.buyPackageEventVO && __s15param0.specialEventVO.eventId == this.dialogProperties.buyPackageEventVO.eventId) {
      this.hide();
    }
  };
  CastleGenericMerchantDialog.prototype.onOfferRemoved = function (__s18param0) {
    if (this.isPrivateOffer && __s18param0.offerVO == this.dialogPropertiesPrivateOffer.offerVO) {
      this.hide();
    }
  };
  CastleGenericMerchantDialog.prototype.getItemListVOs = function () {
    var __s21local0 = this.packageContainer.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    this.sortPackagesByHighlightOrder(__s21local0);
    var __s21local1 = [];
    if (__s21local0 != null) {
      for (var __s21local2 = 0, __s21local3 = __s21local0; __s21local2 < __s21local3.length; __s21local2++) {
        var __s21local4 = __s21local3[__s21local2];
        if (__s21local4 !== undefined && __s21local4 && !__s21local4.isBannerPackage) {
          var __s21local5 = this.createScrollItem(__s21local4);
          if (__s21local5) {
            __s21local1.push(__s21local5);
          }
        }
      }
    }
    return __s21local1;
  };
  CastleGenericMerchantDialog.prototype.createScrollItem = function (__s28param0) {
    var __s28local0 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
    __s28local0.specialEventVO = this.dialogProperties ? this.dialogProperties.buyPackageEventVO : null;
    __s28local0.eventPackageVO = __s28param0;
    __s28local0.offerVO = this.dialogPropertiesPrivateOffer ? this.dialogPropertiesPrivateOffer.offerVO : null;
    return __s28local0;
  };
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "packageContainer", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogPropertiesPrivateOffer, "CastlePrivateOfferDialogProperties")) {
        return this.dialogPropertiesPrivateOffer.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PACKAGE_IDS);
      } else if (this.dialogProperties) {
        return this.dialogProperties.buyPackageEventVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "highlightPackageId", {
    get: function () {
      if (this.dialogProperties) {
        return this.dialogProperties.highlightPackageId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "merchantScrollItem", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericMerchantDialog.prototype.initBasicButtons = function (__s41param0) {
    __s41param0 = __s41param0.concat([this.dialogDisp.btn_close]);
    __s1param0.prototype.initBasicButtons.call(this, __s41param0);
  };
  CastleGenericMerchantDialog.prototype.onClick = function (__s43param0) {
    __s1param0.prototype.onClick.call(this, __s43param0);
    switch (__s43param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "isPrivateOffer", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "dialogPropertiesPrivateOffer", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericMerchantDialog.prototype.sortPackagesByHighlightOrder = function (__s52param0) {
    __dep_export_ClientConstSort.ClientConstSort.sortPackageListByHighlightOrder(__s52param0);
  };
  return CastleGenericMerchantDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleGenericMerchantDialog = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_BuyEventPackagesComponent = require("gge-module:export_BuyEventPackagesComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
