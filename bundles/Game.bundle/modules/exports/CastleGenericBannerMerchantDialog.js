Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstMerchantEvent = require("gge-module:export_ClientConstMerchantEvent");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventPackageAssetHelper = require("gge-module:export_EventPackageAssetHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_PackageBannerObject = require("gge-module:export_PackageBannerObject");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleGenericBannerMerchantDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0.currentActiveBannerIndex = 0;
    __s3local0.lastUpdateInterval = 0;
    __s3local0.mouseOverPackageBanner = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericBannerMerchantDialog, __s1param0);
  CastleGenericBannerMerchantDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
  };
  CastleGenericBannerMerchantDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
  };
  CastleGenericBannerMerchantDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.mouseOverPackageBanner = false;
    this.resetBanner();
  };
  CastleGenericBannerMerchantDialog.prototype.destroy = function () {
    this.resetBanner();
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleGenericBannerMerchantDialog.prototype, "packageBannerClassName", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericBannerMerchantDialog, "bannerButtonClassName", {
    get: function () {
      return "BannerButton";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericBannerMerchantDialog.prototype.onMouseOver = function (__s17param0) {
    __s1param0.prototype.onMouseOver.call(this, __s17param0);
    if (__dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s17param0.target).indexOf(this.packageBannerClassName) >= 0) {
      this.mouseOverPackageBanner = true;
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onMouseOut = function (__s20param0) {
    __s1param0.prototype.onMouseOut.call(this, __s20param0);
    if (__dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s20param0.target).indexOf(this.packageBannerClassName) >= 0) {
      this.mouseOverPackageBanner = false;
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onPackageInfoArrived = function (__s23param0) {
    this.fillBanner();
  };
  CastleGenericBannerMerchantDialog.prototype.resetBanner = function () {
    var __s25local0 = 0;
    if (this.dialogDisp) {
      if (this.bannerLayer && this.bannerLayer.parent) {
        this.dialogDisp.bannerButtonContainer.removeChild(this.bannerLayer);
      }
      if (this.packageBanners) {
        for (__s25local0 = 0; __s25local0 < this.packageBanners.length; __s25local0++) {
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.packageBanners[__s25local0].packageBannerVE);
          this.dialogDisp.bannerContainer.removeChild(this.packageBanners[__s25local0].packageBannerVE);
          this.packageBanners[__s25local0].bannerButton.removeMouseEventListener();
          this.packageBanners[__s25local0].packageBannerVE.clipLoaded.remove(this.bindFunction(this.onPackageBannerObjectLoaded));
          if (this.packageBanners[__s25local0].bannerText) {
            this.textFieldManager.unregisterTextFieldByReference(this.packageBanners[__s25local0].bannerText);
          }
        }
        this.packageBanners = null;
      }
      this.dialogDisp.bannerBorder.visible = false;
      this.dialogDisp.bannerShadow.visible = false;
    }
    this.lastUpdateInterval = 0;
    this.currentActiveBannerIndex = -1;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onIntervalSecond));
  };
  CastleGenericBannerMerchantDialog.prototype.fillBanner = function () {
    this.resetBanner();
    this.packageBanners = [];
    this.bannerLayer = new __s0local0();
    this.dialogDisp.bannerButtonContainer.addChild(this.bannerLayer);
    var __s33local0 = this.packageContainer.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    this.sortPackagesByHighlightOrder(__s33local0);
    if (__s33local0 != null) {
      for (var __s33local1 = 0, __s33local2 = __s33local0; __s33local1 < __s33local2.length; __s33local1++) {
        var __s33local3 = __s33local2[__s33local1];
        if (__s33local3 !== undefined && __s33local3.isAvailable() && __s33local3.isBannerPackage) {
          var __s33local4 = new __dep_export_PackageBannerObject.PackageBannerObject();
          __s33local4.packageBannerVE = __dep_export_EventPackageAssetHelper.EventPackageAssetHelper.getBanner(__s33local3.packageID);
          __s33local4.packageBannerVO = __s33local3;
          var __s33local5 = __dep_exact_9e901e8e2483a22f.MovieClipHelper.getMovieClipByClassName(CastleGenericBannerMerchantDialog.bannerButtonClassName);
          __s33local4.bannerButton = new __dep_exact_84d43d9c404bd4d8.TwoStateButton(__s33local5);
          __s33local4.bannerButton.deselected();
          __s33local5.actLikeButton = true;
          __s33local5.index = this.packageBanners.length;
          this.bannerLayer.addChild(__s33local5);
          __s33local5.x = __s33local5.width / 2 + __dep_export_ClientConstMerchantEvent.ClientConstMerchantEvent.BANNER_BUTTON_SPACING * __s33local5.index + __s33local5.width * __s33local5.index;
          this.dialogDisp.bannerContainer.addChild(__s33local4.packageBannerVE);
          this.packageBanners.push(__s33local4);
          if (__s33local4.packageBannerVE.isLoaded) {
            this.onPackageBannerObjectLoaded(__s33local4.packageBannerVE);
            __s33local4.packageBannerVE.currentshownDisplayObject.mouseChildren = false;
            __s33local4.packageBannerVE.currentshownDisplayObject.actLikeButton = true;
          } else {
            __s33local4.packageBannerVE.clipLoaded.add(this.bindFunction(this.onPackageBannerObjectLoaded));
          }
          this.dialogDisp.bannerBorder.visible = true;
          this.dialogDisp.bannerShadow.visible = true;
        }
      }
    }
    this.bannerLayer.x = -this.bannerLayer.width / 2;
    if (this.packageBanners.length > 0) {
      this.setActiveBanner(0, true);
      if (this.packageBanners.length > 1) {
        __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onIntervalSecond));
      }
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onPackageBannerObjectLoaded = function (__s43param0) {
    var __s43local0 = __s43param0.currentshownDisplayObject.tfBanner;
    if (__s43local0) {
      var __s43local1 = this.getPackageBannerByVE(__s43param0);
      __s43local1.bannerText = this.textFieldManager.registerTextField(__s43local0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s43local1.packageBannerVO.nameTextID, __s43local1.packageBannerVO.nameParams));
      __s43local1.bannerText.autoFitToBounds = true;
    }
    __s43param0.currentshownDisplayObject.mouseChildren = false;
    __s43param0.currentshownDisplayObject.actLikeButton = true;
  };
  CastleGenericBannerMerchantDialog.prototype.setActiveBanner = function (__s46param0, __s46param1 = false) {
    if (__s46param0 == this.packageBanners.length) {
      __s46param0 = 0;
    }
    this.lastUpdateInterval = 0;
    if (this.currentActiveBannerIndex >= 0) {
      this.packageBanners[this.currentActiveBannerIndex].bannerButton.deselected();
    }
    this.packageBanners[__s46param0].bannerButton.selected();
    var __s46local0 = this.packageBanners[__s46param0].packageBannerVE;
    this.dialogDisp.bannerContainer.addChild(__s46local0);
    if (__s46param1) {
      __s46local0.alpha = 1;
    } else {
      __s46local0.alpha = 0;
      __dep_exact_608de47b6498f9b0.TweenMax.to(__s46local0, __dep_export_ClientConstMerchantEvent.ClientConstMerchantEvent.BANNER_FADING_TIME, {
        alpha: 1
      });
    }
    this.currentActiveBannerIndex = __s46param0;
  };
  CastleGenericBannerMerchantDialog.prototype.getPackageBannerByVE = function (__s52param0) {
    for (var __s52local0 = 0; __s52local0 < this.packageBanners.length; __s52local0++) {
      var __s52local1 = this.packageBanners[__s52local0];
      if (__s52local1.packageBannerVE == __s52param0 || __s52local1.packageBannerVE.currentshownDisplayObject == __s52param0) {
        return __s52local1;
      }
    }
    return null;
  };
  CastleGenericBannerMerchantDialog.prototype.onIntervalSecond = function (__s57param0) {
    this.lastUpdateInterval++;
    if (this.lastUpdateInterval % __dep_export_ClientConstMerchantEvent.ClientConstMerchantEvent.BANNER_SWITCH_INTERVAL == 0 && !this.mouseOverPackageBanner) {
      this.setActiveBanner(this.currentActiveBannerIndex + 1);
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onClick = function (__s60param0) {
    __s1param0.prototype.onClick.call(this, __s60param0);
    var __s60local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s60param0.target);
    if (__s60local0.indexOf(CastleGenericBannerMerchantDialog.bannerButtonClassName) >= 0) {
      if (this.packageBanners != null) {
        for (var __s60local1 = 0, __s60local2 = this.packageBanners; __s60local1 < __s60local2.length; __s60local1++) {
          var __s60local3 = __s60local2[__s60local1];
          if (__s60local3 !== undefined && __s60param0.target == __s60local3.bannerButton.disp) {
            if (!__s60local3.bannerButton.isSelected) {
              this.setActiveBanner(this.packageBanners.indexOf(__s60local3));
            }
          }
        }
      }
    } else if (__s60local0.indexOf(this.packageBannerClassName) >= 0) {
      var __s60local4 = this.getPackageBannerByVE(__s60param0.target).packageBannerVO;
      var __s60local5 = false;
      for (var __s60local6 = 0, __s60local7 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s60local6 < __s60local7.length; __s60local6++) {
        var __s60local8 = __s60local7[__s60local6];
        if (__s60local8 !== undefined && __s60local4.getAmount(__s60local8) > 0 && !__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s60local8).isFull) {
          __s60local5 = true;
          break;
        }
      }
      if (__s60local4.isAvailable() && (__s60local4.fillAllStorages || __s60local5)) {
        this.openPackageBuyDialog(__s60local4);
      } else {
        this.handleUnbuyableAmount();
      }
    }
  };
  CastleGenericBannerMerchantDialog.prototype.handleUnbuyableAmount = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleGenericBannerMerchantDialog.prototype.openPackageBuyDialog = function (__s76param0) {
    var __s76local0 = this.createScrollItem(__s76param0);
    var __s76local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s76local1.parseDataFromScrollItem(__s76local0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceMerchantEventBuyDialog.CastleResourceMerchantEventBuyDialog, __s76local1);
  };
  return CastleGenericBannerMerchantDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleGenericBannerMerchantDialog = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceMerchantEventBuyDialog = require("gge-module:export_CastleResourceMerchantEventBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
