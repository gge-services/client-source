Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_C2SBuyEventPackageVO = require("gge-module:export_C2SBuyEventPackageVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementBottomMenu() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementBottomMenu, __s1param0);
  ModernPackageShopBuyElementBottomMenu.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.btn_cancel, this.disp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  ModernPackageShopBuyElementBottomMenu.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this.updateBuyButton();
  };
  ModernPackageShopBuyElementBottomMenu.prototype.updateBuyButton = function () {
    var __s9local0 = this.parentDialog.dialogProperties.eventPackageVO;
    if (__s9local0.isAvailable()) {
      var __s9local1 = this.parentDialog.getElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COSTS);
      if (__s9local1 && __s9local1.getMaxBuyablePackages() <= 0 && __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_BASIC_CURRENCY.indexOf(this.packageVO.price.itemType) < 0) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_ok, false);
        if (__s9local1.getMaxBuyablePackages(false) <= 0) {
          this.disp.btn_ok.toolTipText = "dialog_notEnoughCurrency_title";
        } else if (__s9local1.getInventorySpaceLeft() <= 0) {
          this.disp.btn_ok.toolTipText = "errorCode_152";
        }
      } else {
        __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_ok, true);
        this.disp.btn_ok.toolTipText = null;
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_ok, false);
      if (__s9local0.isStockLimited) {
        if (__s9local0.isNotRebuyable) {
          this.disp.btn_ok.toolTipText = "dialog_shop_soldOut";
        } else {
          this.disp.btn_ok.toolTipText = "dialog_merchant_outOfStock_tooltip";
        }
      }
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.handleNoSpaceLeft = function () {
    var __s20local0;
    var __s20local1 = 0;
    if (this.packageVO.isGiftPackage) {
      __s20local0 = "alert_giftInventoryFull";
    } else if (this.packageVO.fillUpResourceStorage) {
      __s20local0 = "dialog_storage_already_full";
    } else if (this.packageVO.isBannerPackage) {
      __s20local0 = "dialog_storageFull";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM) {
      __s20local0 = (__s20local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_gems" : __s20local1 == 1 ? "dialog_inventoryFull_gems_singular" : "dialog_inventoryFull_gems";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM) {
      __s20local0 = (__s20local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_equipment" : __s20local1 == 1 ? "dialog_inventoryFull_equipment_singular" : "dialog_inventoryFull_equipment";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER) {
      __s20local0 = "alert_no_free_unitSpace";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES) {
      var __s20local2;
      __s20local0 = "dialog_storageFull";
      if (this.packageVO.rewards.length == 1) {
        __s20local2 = this.packageVO.rewards.getItemByIndex(0).itemType;
        __s20local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s20local2).freeSpace);
      }
      if (__s20local1 > 0) {
        __s20local0 += "_" + __s20local2.name;
      }
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      __s20local0 = "alert_ci_inventoryFull_copy";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP) {
      __s20local0 = this.packageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS ? "dialog_buyVipPoints_maxAmountTotal_v2" : "dialog_buyVipTime_maxAmount";
    }
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout", []), __dep_exact_92d05af59ee2ff30.Localize.text(__s20local0, [__s20local1])), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getBuyType = function () {
    if (this.dialogProperties.buyType >= 0) {
      return __dep_exact_f855840627e6e145.int(this.dialogProperties.buyType);
    } else if (this.dialogProperties.privateOfferVO) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.PackageConst.BUY_TYPE_PRIVATE_OFFER);
    } else if (this.dialogProperties.specialEventVO) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.specialEventVO, "BuyPackagesEventVO")) {
        return __dep_exact_f855840627e6e145.int(this.dialogProperties.specialEventVO.buyType);
      } else {
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.PackageConst.BUY_TYPE_EVENT);
      }
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.PackageConst.BUY_TYPE_SLUM);
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getBuyTypeId = function () {
    if (this.dialogProperties.buyTypeId >= 0) {
      return __dep_exact_f855840627e6e145.int(this.dialogProperties.buyTypeId);
    }
    switch (this.getBuyType()) {
      case __dep_exact_26a421b704832cff_1.PackageConst.BUY_TYPE_EVENT:
        return __dep_exact_f855840627e6e145.int(this.dialogProperties.specialEventVO.eventId);
      case __dep_exact_26a421b704832cff_1.PackageConst.BUY_TYPE_PRIVATE_OFFER:
        return __dep_exact_f855840627e6e145.int(this.dialogProperties.privateOfferVO.id);
      case __dep_exact_26a421b704832cff_1.PackageConst.BUY_TYPE_CRUSADEMAP:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID);
      default:
        return -1;
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementBottomMenu.prototype, "physicalPackageLimit", {
    get: function () {
      return Math.min(this.packageVO.remainingStock, this.getPhysicalPackageLimitByType());
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitByType = function () {
    switch (this.packageVO.packageType) {
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_DECO:
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUILDING:
        return this.packageVO.remainingStock;
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.inventorySpace);
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM:
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.inventorySpace);
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_PLAGUEMONK:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SpyConst.MAX_OWNABLE_PLAGUEMONKS - __dep_export_CastleModel.CastleModel.spyData.totalPlagueMonks);
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES:
        return this.getPhysicalPackageLimitResources();
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP:
        return this.getPhysicalPackageLimitVIP();
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER:
        return this.getPhysicalPackageLimitSoldier();
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.constructionItemData.inventorySpaceLeft);
    }
    return this.packageVO.maxBuyPerClick;
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitSoldier = function () {
    var __s50local0;
    var __s50local1 = 0;
    for (var __s50local2 = 0, __s50local3 = this.packageVO.rewards.list; __s50local2 < __s50local3.length; __s50local2++) {
      __s50local0 = __s50local3[__s50local2];
      __s50local1 += __dep_exact_f855840627e6e145.int(__s50local0.amount);
    }
    if (__dep_export_CastleComponent.CastleComponent.layoutManager.isInTreasureCamp) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getRemainingSoldierCapacity()) / __s50local1;
    } else {
      return this.packageVO.maxBuyPerClick;
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitVIP = function () {
    if (this.packageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.maxPointPackagesBuyable(this.packageVO.reward.amount));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.maxTimePackagesBuyable(this.packageVO.reward.duration));
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.getPhysicalPackageLimitResources = function () {
    if (this.packageVO.fillAllStorages) {
      return 1;
    }
    if (this.packageVO.ignoreResourceStorageCapacity) {
      return this.packageVO.maxBuyPerClick;
    }
    var __s60local0;
    if (this.packageVO.fillUpResourceStorage) {
      for (var __s60local1 = 0, __s60local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s60local1 < __s60local2.length; __s60local1++) {
        __s60local0 = __s60local2[__s60local1];
        if (this.packageVO.getAmount(__s60local0) > 0 && !__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s60local0).isFull) {
          return 1;
        }
      }
      return 0;
    }
    var __s60local3 = this.packageVO.maxBuyPerClick;
    for (var __s60local4 = 0, __s60local5 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s60local4 < __s60local5.length; __s60local4++) {
      __s60local0 = __s60local5[__s60local4];
      var __s60local6 = __dep_exact_f855840627e6e145.int(this.packageVO.getAmount(__s60local0));
      if (__s60local6 > 0) {
        __s60local3 = __dep_exact_f855840627e6e145.int(Math.min(__s60local3, __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s60local0).freeSpace / __s60local6));
      }
    }
    return __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(this.packageVO.remainingStock, __s60local3)));
  };
  ModernPackageShopBuyElementBottomMenu.prototype.onClick = function (__s71param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s71param0.target)) {
      __s1param0.prototype.onClick.call(this, __s71param0);
      switch (__s71param0.target) {
        case this.disp.btn_cancel:
          this.parentDialog.hide();
          break;
        case this.disp.btn_ok:
          this.onOfferAccepted();
      }
    }
  };
  ModernPackageShopBuyElementBottomMenu.prototype.onOfferAccepted = function () {
    var __s75local0 = this.parentDialog.getElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COSTS);
    var __s75local1 = !__s75local0 || __s75local0.getMaxBuyablePackages() > 0;
    var __s75local2 = this.parentDialog.getElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.AMOUNT);
    var __s75local3 = __dep_exact_f855840627e6e145.int(__s75local2 ? __s75local2.getSelectedPackageAmount() : 1);
    var __s75local4 = __dep_export_CastleEquipmentInventoryFullDialog.CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.eventPackageVO, true);
    var __s75local5 = __dep_export_CastleEquipmentInventoryFullDialog.CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.eventPackageVO, false);
    if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUNDLE && (__s75local4 > 0 || __s75local5 > 0)) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentInventoryFullDialog.CastleEquipmentInventoryFullDialog, new __dep_export_CastleEquipmentInventoryFullDialogProperties.CastleEquipmentInventoryFullDialogProperties(this.dialogProperties.eventPackageVO));
    } else if ((__s75local1 || __s75local0 && __s75local0.getMaxBuyablePackages() == 0) && this.physicalPackageLimit < Math.max(__s75local3, 1)) {
      this.handleNoSpaceLeft();
    } else {
      var __s75local6 = -1;
      if (this.packageVO.hasCustomPrice) {
        __s75local6 = this.packageVO.price.amount * __s75local3;
      }
      var __s75local7 = -1;
      var __s75local8 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (this.packageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.BUILDING) {
        __s75local7 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __s75local8) != null ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s75local8).objectId);
      }
      if (this.packageVO instanceof __dep_export_PrivateBestsellerShopPackageVO.PrivateBestsellerShopPackageVO) {
        if (__s75local1 || this.packageVO.price.itemType != __dep_export_CollectableEnum.CollectableEnum.C1) {
          if (__s75local1 || this.packageVO.price.itemType != __dep_export_CollectableEnum.CollectableEnum.C2) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyBestsellerOfferVO.C2SBuyBestsellerOfferVO(this.dialogProperties.privateOfferVO.id, __s75local3, this.packageVO.parentOfferID));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
          }
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
        }
      } else {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyEventPackageVO.C2SBuyEventPackageVO(this.packageVO.packageID, this.getBuyType(), this.getBuyTypeId(), __s75local3, __s75local8, __s75local7, __s75local6));
      }
      this.parentDialog.hide();
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementBottomMenu.prototype, "packageVO", {
    get: function () {
      return this.parentDialog.dialogProperties.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopBuyElementBottomMenu.prototype, "dialogProperties", {
    get: function () {
      return this.parentDialog.dialogProperties;
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopBuyElementBottomMenu;
}(require("gge-module:export_AModernPackageShopBuyElement").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementBottomMenu = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_ModernPackageShopBuyElementEnum = require("gge-module:export_ModernPackageShopBuyElementEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_PrivateBestsellerShopPackageVO = require("gge-module:export_PrivateBestsellerShopPackageVO");
var __dep_export_C2SBuyBestsellerOfferVO = require("gge-module:export_C2SBuyBestsellerOfferVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleEquipmentInventoryFullDialog = require("gge-module:export_CastleEquipmentInventoryFullDialog");
var __dep_export_CastleEquipmentInventoryFullDialogProperties = require("gge-module:export_CastleEquipmentInventoryFullDialogProperties");
