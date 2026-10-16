Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_C2SGetPackageBuyCountVO = require("gge-module:export_C2SGetPackageBuyCountVO");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function BuyEventPackagesComponent() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.startIndex = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuyEventPackagesComponent, __s1param0);
  BuyEventPackagesComponent.prototype.init = function (__s5param0, __s5param1, __s5param2 = null) {
    this.scrollItemClass = __s5param0;
    this.itemList = __s5param1;
    this.dialogDisp = __s5param2;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s5param1.btn_up, __s5param1.btn_down]);
  };
  BuyEventPackagesComponent.prototype.show = function (__s7param0, __s7param1 = -1) {
    this.itemListVOsFunction = __s7param0;
    this.startIndex = this.getIndexOfPackage(__s7param1);
    this.itemList.visible = false;
    this.removePackageScrollList();
    this.createPackageScrollList();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    BuyEventPackagesComponent.requestPackageBuyCountUpdate();
  };
  BuyEventPackagesComponent.prototype.createPackageScrollList = function () {
    this.packageScrollList = new __dep_export_SliderItemScrollList.SliderItemScrollList(this.itemList, this.dialogDisp);
    this.packageScrollList.scrollItemClass = this.scrollItemClass;
    this.packageScrollList.scrollStep = __dep_export_ClientConstPackages.ClientConstPackages.SCROLL_STEP;
    this.packageScrollList.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  BuyEventPackagesComponent.prototype.removePackageScrollList = function () {
    if (this.packageScrollList) {
      this.packageScrollList.remove();
      this.packageScrollList.clear();
      this.packageScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
      this.packageScrollList = null;
    }
  };
  BuyEventPackagesComponent.prototype.hide = function () {
    this.removePackageScrollList();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  BuyEventPackagesComponent.prototype.update = function (__s16param0 = -1) {
    if (this.packageScrollList) {
      if (__s16param0 < 0) {
        __s16param0 = __dep_exact_f855840627e6e145.int(this.packageScrollList.currentStartIndex);
      }
      this.packageScrollList.clear();
      this.fillScrollList(this.itemListVOsFunction());
      this.packageScrollList.hideButtons = true;
      this.packageScrollList.initList(__s16param0, true);
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.dialogDisp);
    }
  };
  BuyEventPackagesComponent.prototype.fillScrollList = function (__s20param0) {
    if (__s20param0 != null) {
      for (var __s20local0 = 0, __s20local1 = __s20param0; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined) {
          this.packageScrollList.pushContent(__s20local2);
        }
      }
    }
  };
  BuyEventPackagesComponent.requestPackageBuyCountUpdate = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPackageBuyCountVO.C2SGetPackageBuyCountVO(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID));
    }
  };
  BuyEventPackagesComponent.prototype.onPackageInfoArrived = function (__s29param0) {
    this.itemList.visible = true;
    if (this.startIndex > -1) {
      var __s29local0 = this.itemListVOsFunction();
      this.startIndex = __dep_exact_f855840627e6e145.int(__dep_export_CastleMathHelper.CastleMathHelper.clamp(this.startIndex, 0, __s29local0.length - this.packageScrollList.itemsVisibleAtOnce));
      this.startIndex = this.startIndex % 2 ? this.startIndex - 1 : this.startIndex;
    }
    this.update(this.startIndex);
    this.startIndex = -1;
  };
  BuyEventPackagesComponent.prototype.onLevelUp = function (__s32param0) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onUserResourcesChange = function (__s34param0) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onUserCurrencyChange = function (__s36param0) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onSpecialUserCurrencyUpdate = function (__s38param0) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onUserLifetimeSpentChanged = function (__s40param0) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onSpecialEventRemoved = function (__s42param0) {
    if (__s42param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.update();
    }
  };
  BuyEventPackagesComponent.prototype.onSpecialEventUpdated = function (__s45param0) {
    if (__s45param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.update();
    }
  };
  BuyEventPackagesComponent.prototype.onScroll = function (__s48param0) {
    this.dispatchEvent(__s48param0.clone());
  };
  Object.defineProperty(BuyEventPackagesComponent.prototype, "currentStartIndex", {
    get: function () {
      if (this.packageScrollList) {
        return this.packageScrollList.currentStartIndex;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BuyEventPackagesComponent.prototype.getIndexOfPackage = function (__s54param0) {
    if (__s54param0 >= 0) {
      for (var __s54local0 = this.itemListVOsFunction(), __s54local1 = 0; __s54local1 < __s54local0.length; ++__s54local1) {
        var __s54local2 = __dep_exact_81dacdf05bd32292.castAs(__s54local0[__s54local1], "MerchantScrollItemVO");
        if (__s54local2 && __s54local2.eventPackageVO.packageID == __s54param0) {
          return __s54local1;
        }
      }
    }
    return 0;
  };
  return BuyEventPackagesComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.BuyEventPackagesComponent = __s0local0;
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
