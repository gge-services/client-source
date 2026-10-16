Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SEquipmentSpaceLeftVO = require("gge-module:export_C2SEquipmentSpaceLeftVO");
var __dep_export_C2SBuyEventPackageVO = require("gge-module:export_C2SBuyEventPackageVO");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AMerchantBuyDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0.tfCosts = null;
    __s3local0.COMPOSE_TEXT_ID = "lineBreak_TwoTexts";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AMerchantBuyDialog, __s1param0);
  AMerchantBuyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([]);
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.dialogTitle));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    if (this.dialogDisp.mc_discount) {
      this.tfDiscount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_priceReduction ? this.dialogDisp.mc_discount.txt_priceReduction : this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [0]));
    }
  };
  AMerchantBuyDialog.prototype.initBasicButtons = function (__s8param0) {
    __s8param0 = __s8param0.concat(this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_close);
    if (this.dialogDisp.btn_info) {
      __s8param0.push(this.dialogDisp.btn_info);
    }
    __s1param0.prototype.initBasicButtons.call(this, __s8param0);
  };
  AMerchantBuyDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    if (this.dialogDisp.mc_cost) {
      this.tfCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, true));
    }
    switch (this.packageVO.packageType) {
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM:
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM:
        this.onInventorySpaceData();
    }
    this.handleDescription();
    this.handleBuyButton();
    this.handleDiscount();
    this.handleCost();
    this.handleReward();
  };
  AMerchantBuyDialog.prototype.handleBuyButton = function () {
    if (this.packageVO.isAvailable()) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
      this.dialogDisp.btn_ok.toolTipText = null;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      if (this.packageVO.isStockLimited) {
        if (this.packageVO.isNotRebuyable) {
          this.dialogDisp.btn_ok.toolTipText = "dialog_shop_soldOut";
        } else {
          this.dialogDisp.btn_ok.toolTipText = "dialog_merchant_outOfStock_tooltip";
        }
      }
    }
  };
  AMerchantBuyDialog.prototype.handleDiscount = function () {
    if (this.dialogDisp.mc_discount) {
      var __s22local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageVO.packageID));
      if (__s22local0 > 0) {
        this.dialogDisp.mc_discount.visible = true;
        this.tfDiscount.textContentVO.textReplacements = [-__s22local0];
      } else {
        this.dialogDisp.mc_discount.visible = false;
      }
    }
  };
  AMerchantBuyDialog.prototype.handleDescription = function () {
    var __s27local0;
    if (this.packageVO.isStockLimited) {
      this.tfDesc.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.COMPOSE_TEXT_ID);
      if (this.packageVO.remainingStock > 1) {
        (__s27local0 = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("shop_limitedPackage_plural")).textReplacements = [this.packageVO.remainingStock];
      } else {
        __s27local0 = this.packageVO.remainingStock <= 0 ? "dialog_shop_soldOut" : "shop_limitedPackage_singular";
      }
      this.setDescriptionTextParams([new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.packageVO.descriptionTextID, this.packageVO.descriptionParams), __s27local0]);
    } else {
      this.tfDesc.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.packageVO.descriptionTextID, this.packageVO.descriptionParams);
    }
    this.tfDesc.autoFitToBounds = true;
  };
  AMerchantBuyDialog.prototype.setDescriptionText = function (__s33param0, __s33param1 = null) {
    this.tfDesc.textContentVO.textId = __s33param0;
    this.setDescriptionTextParams(__s33param1);
  };
  AMerchantBuyDialog.prototype.setDescriptionTextParams = function (__s35param0 = null) {
    this.tfDesc.textContentVO.textReplacements = __s35param0;
  };
  AMerchantBuyDialog.prototype.handleCost = function () {
    if (this.dialogDisp.mc_cost) {
      if (this.tfCosts && this.textFieldManager.isTextFieldRegistered(this.dialogDisp.mc_cost.txt_text)) {
        this.textFieldManager.unregisterTextField(this.dialogDisp.mc_cost.txt_text);
        this.tfCosts = null;
      }
      var __s37local0 = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_cost), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, this.costIconSize));
      __s37local0.updateWithNewVO(this.totalPrice);
      this.collectableRenderList.push(__s37local0);
      this.handleTextColor();
      if (this.packageVO.isStockLimited && this.packageVO.remainingStock <= 0) {
        this.dialogDisp.mc_cost.visible = false;
      }
    }
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "costIconSize", {
    get: function () {
      return __dep_export_ClientConstPackages.ClientConstPackages.ICON_SIZE_BUY_COST;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.handleReward = function () {
    var __s44local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, this.rewardIconSize);
    __s44local0.tooltip.showEquipmentCountdown = false;
    var __s44local1 = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_reward).addInfoBtn(this.dialogDisp.btn_info), __s44local0);
    __s44local1.updateWithNewVO(this.packageVO.reward);
    this.collectableRenderList.push(__s44local1);
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "rewardIconSize", {
    get: function () {
      return __dep_export_ClientConstPackages.ClientConstPackages.ICON_SIZE_BUY_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onPriceAffordabilityChanged));
    if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventorySpaceData));
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventorySpaceData));
    }
  };
  AMerchantBuyDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onPriceAffordabilityChanged));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onPriceAffordabilityChanged));
    if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventorySpaceData));
    }
    if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventorySpaceData));
    }
  };
  AMerchantBuyDialog.prototype.onEventsChange = function (__s56param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s56param0.specialEventVO, "EventPackagePrimeSaleEventVO") && __s56param0.specialEventVO.packageIDs.indexOf(this.packageVO.packageID) > -1) {
      this.hide();
    }
    if (this.dialogProperties.specialEventVO && __s56param0.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.hide();
    }
  };
  AMerchantBuyDialog.prototype.onPriceAffordabilityChanged = function (__s60param0) {
    this.handleTextColor();
  };
  AMerchantBuyDialog.prototype.onLevelUp = function (__s62param0) {
    if (__dep_export_CastleModel.CastleModel.userData.userLevel > this.packageVO.maxLevel) {
      this.hide();
    }
  };
  AMerchantBuyDialog.prototype.onInventorySpaceData = function (__s65param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEquipmentSpaceLeftVO.C2SEquipmentSpaceLeftVO());
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "dialogTitle", {
    get: function () {
      return __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantBuyDialog.prototype, "totalPrice", {
    get: function () {
      var __s69local0 = this.packageVO.price.clone();
      __s69local0.amount = __dep_exact_f855840627e6e145.int(this.packageVO.price.amount * this.selectedPackagesAmount);
      return __s69local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantBuyDialog.prototype, "packagePrice", {
    get: function () {
      return this.packageVO.price.amount;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.canAfford = function () {
    return this.currencyAvailable / (this.selectedPackagesAmount * this.packagePrice) >= 1;
  };
  AMerchantBuyDialog.prototype.handleTextColor = function () {
    this.setCostsTextColor(this.canAfford() ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR);
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "currencyAvailable", {
    get: function () {
      return __dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(this.packageVO.price));
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.setTitleTextColor = function (__s79param0) {
    this.tfTitle.color = __s79param0;
  };
  AMerchantBuyDialog.prototype.setCostsTextColor = function (__s81param0) {
    if (this.dialogDisp.mc_cost && this.textFieldManager.isTextFieldRegistered(this.dialogDisp.mc_cost.txt_text)) {
      this.textFieldManager.getTextField(this.dialogDisp.mc_cost.txt_text).color = __s81param0;
    }
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "selectedPackagesAmount", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.onClick = function (__s86param0) {
    __s1param0.prototype.onClick.call(this, __s86param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s86param0.target)) {
      switch (__s86param0.target) {
        case this.dialogDisp.btn_ok:
          this.onBtnOkClick();
          this.hide();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_info:
          this.onBtnInfoClick();
      }
    }
  };
  AMerchantBuyDialog.prototype.onBtnOkClick = function () {
    if (this.canAfford() && this.physicalPackageLimit < 1) {
      this.handleNoSpaceLeft();
    } else {
      var __s90local0 = -1;
      if (this.packageVO.hasCustomPrice) {
        __s90local0 = this.totalPrice.amount;
      }
      var __s90local1 = -1;
      var __s90local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (this.packageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.BUILDING) {
        __s90local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __s90local2) != null ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s90local2).objectId);
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyEventPackageVO.C2SBuyEventPackageVO(this.packageVO.packageID, this.getBuyType(), this.getBuyTypeId(), this.selectedPackagesAmount, __s90local2, __s90local1, __s90local0));
    }
  };
  AMerchantBuyDialog.prototype.getBuyType = function () {
    if (this.dialogProperties.buyType >= 0) {
      return __dep_exact_f855840627e6e145.int(this.dialogProperties.buyType);
    } else if (this.dialogProperties.privateOfferVO) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_PRIVATE_OFFER);
    } else if (this.dialogProperties.specialEventVO) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.specialEventVO, "BuyPackagesEventVO")) {
        return __dep_exact_f855840627e6e145.int(this.dialogProperties.specialEventVO.buyType);
      } else {
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_EVENT);
      }
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_SLUM);
    }
  };
  AMerchantBuyDialog.prototype.getBuyTypeId = function () {
    if (this.dialogProperties.buyTypeId >= 0) {
      return __dep_exact_f855840627e6e145.int(this.dialogProperties.buyTypeId);
    }
    switch (this.getBuyType()) {
      case __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_EVENT:
        return __dep_exact_f855840627e6e145.int(this.dialogProperties.specialEventVO.eventId);
      case __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_PRIVATE_OFFER:
        return __dep_exact_f855840627e6e145.int(this.dialogProperties.privateOfferVO.id);
      case __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_CRUSADEMAP:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID);
      default:
        return -1;
    }
  };
  Object.defineProperty(AMerchantBuyDialog.prototype, "physicalPackageLimit", {
    get: function () {
      return Math.min(this.packageVO.remainingStock, this.getPhysicalPackageLimitByType());
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitByType = function () {
    switch (this.packageVO.packageType) {
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_DECO:
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUILDING:
        return 1;
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.inventorySpace);
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.inventorySpace);
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_PLAGUEMONK:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.SpyConst.MAX_OWNABLE_PLAGUEMONKS - __dep_export_CastleModel.CastleModel.spyData.totalPlagueMonks);
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES:
        return this.getPhysicalPackageLimitResources();
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP:
        return this.getPhysicalPackageLimitVIP();
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER:
        return this.getPhysicalPackageLimitSoldier();
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BOOSTER:
        return 1;
      case __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.constructionItemData.inventorySpaceLeft);
    }
    return this.packageVO.maxBuyPerClick;
  };
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitSoldier = function () {
    var __s113local0;
    var __s113local1 = 0;
    for (var __s113local2 = 0, __s113local3 = this.packageVO.rewards.list; __s113local2 < __s113local3.length; __s113local2++) {
      __s113local0 = __s113local3[__s113local2];
      __s113local1 += __dep_exact_f855840627e6e145.int(__s113local0.amount);
    }
    if (this.layoutManager.isInTreasureCamp) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getRemainingSoldierCapacity()) / __s113local1;
    } else {
      return this.packageVO.maxBuyPerClick;
    }
  };
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitVIP = function () {
    if (this.packageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.maxPointPackagesBuyable(__dep_exact_f855840627e6e145.int(this.packageVO.reward.amount)));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.maxTimePackagesBuyable(this.packageVO.reward.duration));
    }
  };
  AMerchantBuyDialog.prototype.getPhysicalPackageLimitResources = function () {
    if (this.packageVO.fillAllStorages) {
      return 1;
    }
    if (this.packageVO.ignoreResourceStorageCapacity) {
      return this.packageVO.maxBuyPerClick;
    }
    var __s123local0;
    if (this.packageVO.fillUpResourceStorage) {
      for (var __s123local1 = 0, __s123local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s123local1 < __s123local2.length; __s123local1++) {
        __s123local0 = __s123local2[__s123local1];
        if (this.packageVO.getAmount(__s123local0) > 0 && !__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s123local0).isFull) {
          return 1;
        }
      }
      return 0;
    }
    var __s123local3 = this.packageVO.maxBuyPerClick;
    for (var __s123local4 = 0, __s123local5 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s123local4 < __s123local5.length; __s123local4++) {
      __s123local0 = __s123local5[__s123local4];
      var __s123local6 = __dep_exact_f855840627e6e145.int(this.packageVO.getAmount(__s123local0));
      if (__s123local6 > 0) {
        __s123local3 = __dep_exact_f855840627e6e145.int(Math.min(__s123local3, __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s123local0).freeSpace / __s123local6));
      }
    }
    return __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(this.packageVO.remainingStock, __s123local3)));
  };
  AMerchantBuyDialog.prototype.handleNoSpaceLeft = function () {
    var __s134local0;
    var __s134local1 = 0;
    if (this.packageVO.isGiftPackage) {
      __s134local0 = "alert_giftInventoryFull";
    } else if (this.packageVO.fillUpResourceStorage) {
      __s134local0 = "dialog_storage_already_full";
    } else if (this.packageVO.isBannerPackage) {
      __s134local0 = "dialog_storageFull";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM) {
      __s134local0 = (__s134local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_gems" : __s134local1 == 1 ? "dialog_inventoryFull_gems_singular" : "dialog_inventoryFull_gems";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      __s134local0 = (__s134local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.inventorySpace)) <= 0 ? "allyforge_tooltip_inventoryFull_equipment" : __s134local1 == 1 ? "dialog_inventoryFull_equipment_singular" : "dialog_inventoryFull_equipment";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER) {
      __s134local0 = "alert_no_free_unitSpace";
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES) {
      var __s134local2;
      __s134local0 = "dialog_storageFull";
      if (this.packageVO.rewards.length == 1) {
        __s134local2 = this.packageVO.rewards.getItemByIndex(0).itemType;
        __s134local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s134local2).freeSpace);
      }
      if (__s134local1 > 0) {
        __s134local0 += "_" + __s134local2.name;
      }
    } else if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      __s134local0 = "alert_ci_inventoryFull_copy";
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout", []), __dep_exact_92d05af59ee2ff30.Localize.text(__s134local0, [__s134local1])));
  };
  AMerchantBuyDialog.prototype.onBtnInfoClick = function () {};
  Object.defineProperty(AMerchantBuyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantBuyDialog.prototype, "packageVO", {
    get: function () {
      return this.dialogProperties.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantBuyDialog.prototype.destroy = function () {
    if (this.tfCosts) {
      this.textFieldManager.unregisterTextFieldByReference(this.tfCosts);
      this.tfCosts = null;
    }
    __s1param0.prototype.destroy.call(this);
  };
  return AMerchantBuyDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AMerchantBuyDialog = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
