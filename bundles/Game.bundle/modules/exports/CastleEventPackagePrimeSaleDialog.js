Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_C2SJoinCampVO = require("gge-module:export_C2SJoinCampVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketPlaceDialogProperties = require("gge-module:export_CastlePremiumMarketPlaceDialogProperties");
var __dep_export_CastleAbstractPrimeSaleDialog = require("gge-module:export_CastleAbstractPrimeSaleDialog");
var __dep_export_CastlePrimeSaleQuantityComponent = require("gge-module:export_CastlePrimeSaleQuantityComponent");
var __dep_export_CastlePrimeSaleScrollItemVO = require("gge-module:export_CastlePrimeSaleScrollItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleEventPackagePrimeSaleDialog() {
    var __s3local0 = this;
    __s3local0.showAblePackages = [];
    __s3local0._packageTypeID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEventPackagePrimeSaleDialog, __s1param0);
  CastleEventPackagePrimeSaleDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._quantityComponent = new __dep_export_CastlePrimeSaleQuantityComponent.CastlePrimeSaleQuantityComponent(this.dialogDisp.mc_package_container.mc_quantity);
    this.dialogDisp.mc_time.y += CastleEventPackagePrimeSaleDialog.TIME_COMPONENT_OFFSET;
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "merchantEvent", {
    get: function () {
      var __s7local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventBySoldPackage(this.showAblePackages[0]), "BuyPackagesEventVO");
      if (__s7local0 && __dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(__s7local0.eventId)) {
        __s7local0 = null;
      }
      return __s7local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "isDiscountedPackageAvailable", {
    get: function () {
      return !!this.merchantEvent || !!this.vipPackages;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.onErrorNoMerchantActive = function () {
    this.hide();
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("Could not find merchant for packageIDs " + this.showAblePackages[0])));
  };
  CastleEventPackagePrimeSaleDialog.prototype.getCharacterName = function () {
    if (this.merchantEvent) {
      return this.merchantEvent.eventFullsizeCharacterName;
    } else if (this.vipPackages) {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SWEET_PRINCESS;
    } else {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_HERALD;
    }
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "saveRubiesTextID", {
    get: function () {
      if (this.merchantEvent) {
        if (this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST) {
          return "dialog_primesale_savePercentage";
        } else {
          return this.merchantEvent.primesaleSaveRubiesTextID;
        }
      } else {
        return "dialog_privateOffer_whaleChest_rubySave";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "descriptionTextID", {
    get: function () {
      switch (this._packageTypeID) {
        case CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST:
        case CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT:
          return this.merchantEvent.primesaleDescriptionTextID;
        case CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE:
          return "dialog_primeday_primesale_vipPackages_description";
        case CastleEventPackagePrimeSaleDialog.TYPE_VIP_POINTS:
          return "dialog_primeday_primesale_vipPoints_description";
        case CastleEventPackagePrimeSaleDialog.TYPE_VIP_TIME:
          return "dialog_primeday_primesale_vipTime_description";
      }
      return "limitedOffer";
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.showLoaded = function (__s28param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s28param0);
    if (this.dialogProperties.eventVO.canShowDialog()) {
      this.determineDisplayPackageType();
      this.dialogDisp.mc_limited_offer.gotoAndStop(2);
      this.dialogDisp.mc_limited_offer.txt_limited_offer.width = 264;
      this.itxt_percentOff = this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, []));
      this.itxt_oldCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
      this.itxt_newCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
      this.itxt_discountedPackageName = this.textFieldManager.registerTextField(this.dialogDisp.mc_package_container.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this.itxt_limitedOffer = this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this.itxt_discountedPackageName.verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
      this.dialogDisp.mc_package_container.mc_package.mouseChildren = false;
      this.itxt_limitedOffer.textContentVO.textId = this.saveRubiesTextID;
      var __s28local0 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.showAblePackages[0]);
      this.setButtonCentered(this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE || this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST);
      this.dialogDisp.mc_package_container.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
      this.dialogDisp.prime_sale_list.visible = this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
      this.showCostsAndDiscounts(__s28local0);
      this.showPackage(__s28local0);
      this.dialogDisp.mc_costs.mouseChildren = false;
      this.dialogDisp.mc_costs.toolTipText = "dialog_privateOffer_whaleChest_newPrice";
      this.dialogDisp.mc_old_costs.mouseChildren = false;
      this.dialogDisp.mc_old_costs.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_saveCosts", [this.dialogProperties.eventVO.discount]);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.descriptionTextID));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_specialOfferDeco_title"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_questInfo_showMe"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_show_me.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_questInfo_showMe"));
    } else {
      this.hide();
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.hideLoaded = function (__s32param0 = null) {
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    if (this.sliderList) {
      this.sliderList.remove();
      this.sliderList.clear();
    }
    __s1param0.prototype.hideLoaded.call(this, __s32param0);
  };
  CastleEventPackagePrimeSaleDialog.prototype.getRemainingTime = function () {
    return __dep_exact_f855840627e6e145.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  CastleEventPackagePrimeSaleDialog.prototype.timeToString = function (__s38param0) {
    return new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_primeday_specialoffer_endTimer", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s38param0)]);
  };
  CastleEventPackagePrimeSaleDialog.prototype.showCostsAndDiscounts = function (__s40param0) {
    var __s40local0;
    __s40local0 = this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE ? new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.dialogProperties.eventVO.discount)]) : this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.dialogProperties.eventVO.discount) : new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s40param0.basicPriceC2 - __s40param0.priceC2);
    this.itxt_oldCosts.textContentVO.numberValue = __s40param0.basicPriceC2;
    this.itxt_newCosts.textContentVO.numberValue = __s40param0.priceC2;
    this.itxt_limitedOffer.textContentVO.textReplacements = [__s40local0];
    this.itxt_percentOff.textContentVO.textReplacements = [this.dialogProperties.eventVO.discount];
    this.dialogDisp.mc_cross.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.mc_old_costs.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.mc_costs.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.btn_ok.visible = this._packageTypeID != CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.dialogDisp.btn_show_me.visible = this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
    this.setButtonCentered(this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE || this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST);
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "vipPackages", {
    get: function () {
      return this.getEventPackageVOs(__dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP);
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.getEventPackageVOs = function (__s44param0 = null) {
    var __s44local0 = [];
    if (this.showAblePackages != null) {
      for (var __s44local1 = 0, __s44local2 = this.showAblePackages; __s44local1 < __s44local2.length; __s44local1++) {
        var __s44local3 = __s44local2[__s44local1];
        if (__s44local3 !== undefined) {
          var __s44local4 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s44local3);
          if (__s44local4) {
            if (__s44param0 == null || __s44local4.packageType == __s44param0) {
              __s44local0.push(__s44local4);
            }
          }
        }
      }
    }
    if (__s44local0.length > 0) {
      return __s44local0;
    } else {
      return null;
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.onRemoveSpecialEvent = function (__s54param0) {
    if (this.dialogProperties.eventVO && __s54param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
    if (!this.isDiscountedPackageAvailable) {
      this.hide();
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.showEventPackageList = function () {
    if (this.sliderList) {
      this.sliderList.resetItems();
    }
    this.sliderList = new __dep_export_SimpleScrollItemList.SimpleScrollItemList(this.dialogDisp.prime_sale_list, null, 1);
    this.sliderList.scrollItemClass = __dep_export_CastlePrimeSaleScrollItem.CastlePrimeSaleScrollItem;
    for (var __s58local0 = 0; __s58local0 < this.showAblePackages.length; __s58local0++) {
      var __s58local1 = new __dep_export_CastlePrimeSaleScrollItemVO.CastlePrimeSaleScrollItemVO(this.showAblePackages[__s58local0], this.dialogProperties.eventVO.discount);
      this.sliderList.pushContent(__s58local1);
    }
    this.sliderList.initList();
  };
  CastleEventPackagePrimeSaleDialog.prototype.showPackage = function (__s63param0) {
    this._eventPackageVO = __s63param0;
    if (this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE) {
      this.showVIPPackage();
    } else if (this._packageTypeID == CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST) {
      this.showEventPackageList();
    } else {
      this.showEventPackage();
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.showEventPackage = function () {
    this.dialogDisp.mc_package_container.gotoAndStop(1);
    var __s68local0 = this.dialogDisp.mc_package_container.mc_package;
    var __s68local1 = new __s0local0(__s68local0.width, __s68local0.height);
    var __s68local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s68local0);
    __s68local2.addIconMc(__s68local0.mc_icon);
    __s68local2.addInfoBtn(this.dialogDisp.mc_package_container.btn_info);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    this.rewardRenderer = new __dep_export_CollectableRenderer.CollectableRenderer(__s68local2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, __s68local1));
    this.rewardRenderer.updateWithNewVO(this._eventPackageVO.reward);
    this.itxt_discountedPackageName.textContentVO.textId = this._eventPackageVO.nameTextID;
    this.itxt_discountedPackageName.textContentVO.textReplacements = this._eventPackageVO.nameParams;
    this._quantityComponent.update(this._eventPackageVO);
  };
  CastleEventPackagePrimeSaleDialog.prototype.showVIPPackage = function () {
    this.dialogDisp.mc_package_container.gotoAndStop(2);
    var __s71local0 = this.dialogDisp.mc_package_container.mc_package;
    var __s71local1 = this.dialogDisp.mc_package_container.mc_package2;
    this.dialogDisp.mc_package_container.btn_info.visible = false;
    var __s71local2 = new Library.CastleInterfaceElements_Icons.Icon_VipPoints_Big();
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.scaleToFit(__s71local2, 65, 50);
    var __s71local3 = new Library.CastleInterfaceElements_Icons.Icon_VipTime();
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.scaleToFit(__s71local3, 75, 70);
    __s71local3.y = 7;
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s71local0.mc_icon);
    __s71local0.mc_icon.addChild(__s71local2);
    __s71local0.mouseChildren = false;
    __s71local0.toolTipText = "dialog_VipScreen_premiumPoints_v2";
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s71local1.mc_icon);
    __s71local1.mc_icon.addChild(__s71local3);
    __s71local1.mouseChildren = false;
    __s71local1.toolTipText = "dialog_VipScreen_vipTime";
    this.itxt_discountedPackageName.textContentVO.textId = "dialog_primeday_primesale_vipPackages_packageHeader";
  };
  CastleEventPackagePrimeSaleDialog.prototype.determineDisplayPackageType = function () {
    this.showAblePackages = this.dialogProperties.eventVO.showAblePackageIDs;
    var __s73local0 = this.getEventPackageVOs();
    if (__s73local0 && __s73local0[0].packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP) {
      if (__s73local0.length > 1) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE;
      } else if (__s73local0[0].reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_VIP_POINTS;
      } else if (__s73local0[0].reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_TIME) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_VIP_TIME;
      }
    } else if (this.merchantEvent) {
      if (this.showAblePackages.length > 1) {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST;
      } else {
        this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT;
      }
    } else {
      this._packageTypeID = CastleEventPackagePrimeSaleDialog.TYPE_NONE;
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.onOkButton = function () {
    if (this.merchantEvent) {
      this.handleMerchantShowMe();
    } else if (this.vipPackages) {
      CastleEventPackagePrimeSaleDialog.handleVIPShowMe();
    } else {
      this.onErrorNoMerchantActive();
    }
    this.hide();
  };
  CastleEventPackagePrimeSaleDialog.handleVIPShowMe = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog, new __dep_export_CastlePremiumMarketPlaceDialogProperties.CastlePremiumMarketPlaceDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP));
  };
  CastleEventPackagePrimeSaleDialog.prototype.handleMerchantShowMe = function () {
    var __s90local0;
    var __s90local1 = this.merchantEvent;
    var __s90local2 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && !!__s90local1 && __s90local1.allowedAreaTypes.indexOf(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType) != -1;
    var __s90local3 = false;
    var __s90local4 = true;
    if (!!__s90local1 && __s90local1.kingdomIDs.indexOf(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) != -1) {
      if (__s90local2) {
        if (this.layoutManager.isOnMap) {
          __s90local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
        } else {
          __s90local4 = false;
        }
      } else if (__s90local1.allowedAreaTypes[0] == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP) {
        __s90local3 = true;
      } else {
        __s90local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      }
    } else {
      __s90local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s90local1.kingdomIDs[0]);
    }
    if (__s90local4) {
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToMerchantLocation));
      if (__s90local3 && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
        if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.isLocked) {
          __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.openDialog();
        } else {
          if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID)) {
            return;
          }
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCampVO.C2SJoinCampVO(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
        }
      } else {
        if (!__s90local0) {
          return;
        }
        if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s90local0.kingdomID)) {
          return;
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s90local0.objectId, __s90local0.kingdomID));
      }
    } else {
      __s90local1.openMerchantDialog(true, this.showAblePackages[0]);
    }
  };
  CastleEventPackagePrimeSaleDialog.prototype.onSwitchedToMerchantLocation = function (__s108param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToMerchantLocation));
    this.merchantEvent.openMerchantDialog(true, this.showAblePackages[0]);
  };
  Object.defineProperty(CastleEventPackagePrimeSaleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackagePrimeSaleDialog.prototype.isEvent = function () {
    return true;
  };
  CastleEventPackagePrimeSaleDialog.NAME = "CastleEventPackagePrimeSalesDialogExternal";
  CastleEventPackagePrimeSaleDialog.TIME_COMPONENT_OFFSET = 15;
  CastleEventPackagePrimeSaleDialog.TYPE_NONE = -1;
  CastleEventPackagePrimeSaleDialog.TYPE_VIP_TIME = 0;
  CastleEventPackagePrimeSaleDialog.TYPE_VIP_POINTS = 1;
  CastleEventPackagePrimeSaleDialog.TYPE_VIP_PACKAGE = 2;
  CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT = 3;
  CastleEventPackagePrimeSaleDialog.TYPE_MERCHANT_LIST = 4;
  return CastleEventPackagePrimeSaleDialog;
}(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog);
exports.CastleEventPackagePrimeSaleDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_SimpleScrollItemList = require("gge-module:export_SimpleScrollItemList");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastlePremiumMarketPlaceDialog = require("gge-module:export_CastlePremiumMarketPlaceDialog");
var __dep_export_CastlePrimeSaleScrollItem = require("gge-module:export_CastlePrimeSaleScrollItem");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
