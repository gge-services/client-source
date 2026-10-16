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
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_C2SShowMeUpgradeBuildingsVO = require("gge-module:export_C2SShowMeUpgradeBuildingsVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleShowUpgradableBuildingsEvent = require("gge-module:export_CastleShowUpgradableBuildingsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAbstractPrimeSaleDialog = require("gge-module:export_CastleAbstractPrimeSaleDialog");
var __s0local0 = function (__s1param0) {
  function CastlePrimeSaleDialog() {
    var __s3local0 = this;
    __s3local0.kingdomSortOrder = [];
    __s3local0.mainCastles = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeSaleDialog, __s1param0);
  CastlePrimeSaleDialog.prototype.initSortArrays = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    this.mainCastles = [];
    this.kingdomSortOrder = [];
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID)) {
      this.mainCastles.push(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(__dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID);
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID)) {
      this.mainCastles.push(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(__dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID);
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID)) {
      this.mainCastles.push(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID);
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID)) {
      this.mainCastles.push(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID).objectId);
      this.kingdomSortOrder.push(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    }
    if (__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s5local0)) {
      this.mainCastles.push(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s5local0).objectId);
    }
    this.kingdomSortOrder.push(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID);
    if (__s5local0 != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      this.kingdomSortOrder.push(__s5local0);
    }
  };
  CastlePrimeSaleDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    this.initSortArrays();
    this._discountedItem = this.primeSaleComponent.buildingVO;
    var __s13local0 = this.isPrimeSaleUpgradeComponent ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.primeSaleComponent.discount]) : __dep_exact_92d05af59ee2ff30.Localize.integer(this._discountedItem.basicCostC2 - this.primeSaleComponent.finalePriceC2);
    var __s13local1 = this.isPrimeSaleUpgradeComponent ? "dialog_primeday_primesale_allLevels" : "building_level";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastlePrimeSaleDialog.DIALOG_COPY));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastlePrimeSaleDialog.DIALOG_TITLE));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastlePrimeSaleDialog.DIALOG_OK_BUTTON_TEXT));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastlePrimeSaleDialog.LIMITED_OFFER, [new __dep_exact_92d05af59ee2ff30_3.TextVO(__s13local0)]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.primeSaleComponent.discount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.primeSaleComponent.finalePriceC2));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this._discountedItem.costC2));
    var __s13local2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingClip.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this._discountedItem.getNameString()));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingClip.txt_level, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s13local1, [this._discountedItem.level]));
    if (this.primeSaleComponent.buildingVO.buildingGroundType == __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
      this.dialogDisp.mc_buildingClip.txt_level.visible = false;
      __s13local2.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this._discountedItem.name.toLowerCase() + "_" + this._discountedItem.type.toLowerCase() + "_name");
    } else {
      this.dialogDisp.mc_buildingClip.txt_level.visible = true;
    }
    this.dialogDisp.mc_buildingClip.visible = true;
    this.showBuilding();
    this.setButtonCentered(this.isPrimeSaleUpgradeComponent);
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = __dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog.SPECIAL_PRICE;
    this.dialogDisp.mc_old_costs.mouseChildren = false;
    this.dialogDisp.mc_old_costs.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog.SAVE_COSTS, [this.primeSaleComponent.discount]);
  };
  CastlePrimeSaleDialog.prototype.onRemoveSpecialEvent = function (__s17param0) {
    if (this.dialogProperties && this.dialogProperties.eventVO && __s17param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastlePrimeSaleDialog.prototype.onRemoveOffer = function (__s20param0) {
    if (this.isPrivateOffer_0 && __s20param0.offerVO == this.dialogPropertiesPrivateOffer.offerVO) {
      this.hide();
    }
  };
  CastlePrimeSaleDialog.prototype.showBuilding = function () {
    var __s23local0 = this.dialogDisp.mc_buildingClip.mc_holderclip;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s23local0);
    var __s23local1 = "";
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this._discountedItem, "FactionPMoatMoatVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(this._discountedItem, "FactionMoatMoatVO")) {
      __s23local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID).kingdomName;
    } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this._discountedItem, "PremiumMoatVO") && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __s23local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID).kingdomName;
    }
    if (this.isPrimeSaleUpgradeComponent) {
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(this.primeSaleComponent.highestLevelOfBuilding(), __s23local0, 180, 85, __s23local1);
    } else {
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(this._discountedItem, __s23local0, 180, 85, __s23local1);
    }
    __s23local0.mouseChildren = false;
  };
  CastlePrimeSaleDialog.prototype.centerAndHighlightBuildingInShop = function () {
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    var __s29local0 = __dep_exact_81dacdf05bd32292.castAs(this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel), "CastleDecoShopPanel");
    if (__s29local0) {
      if (!__s29local0.centerAndHighlightBuildingInShop(this.primeSaleComponent.buildingVO.getLowestDowngradeVO())) {
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  CastlePrimeSaleDialog.prototype.centerAndShowRingMenuOnBuilding = function (__s33param0) {
    var __s33local0 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s33param0);
    if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s33local0, "BasicMoatVE") && !__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s33local0, "PremiumMoatVE") && !__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s33local0, "FactionMoatMoatVE") && !__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s33local0, "FactionPMoatMoatVE")) {
      __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s33local0.vo.pos);
    }
    __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s33local0);
  };
  CastlePrimeSaleDialog.prototype.onServerMessageArrived = function (__s36param0) {
    var __s36local0 = this;
    if (__s36param0 === undefined) {
      __s36param0 = -1;
    }
    return function (__s39param0 = null) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, __s36local0.jaaArrivedCallback);
      __s36local0.jaaArrivedCallback = null;
      if (__s36param0 > 0) {
        __s36local0.centerAndShowRingMenuOnBuilding(__s36param0);
      } else {
        __s36local0.centerAndHighlightBuildingInShop();
      }
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
    };
  };
  CastlePrimeSaleDialog.prototype.onOkButton = function () {
    this.controller.addEventListener(__dep_export_CastleShowUpgradableBuildingsEvent.CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED, this.bindFunction(this.onShowmeUpgradeDataReceived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowMeUpgradeBuildingsVO.C2SShowMeUpgradeBuildingsVO(this.primeSaleComponent.wodID, this.isPrimeSaleUpgradeComponent));
  };
  CastlePrimeSaleDialog.prototype.onShowmeUpgradeDataReceived = function (__s45param0) {
    if (__s45param0.paramObj.WOD == this.primeSaleComponent.wodID) {
      this.controller.removeEventListener(__dep_export_CastleShowUpgradableBuildingsEvent.CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED, this.bindFunction(this.onShowmeUpgradeDataReceived));
      var __s45local0 = __s45param0.paramObj.UD;
      var __s45local1 = 0;
      if (__s45local0.length < 1) {
        var __s45local2 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.primeSaleComponent.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING), "ABasicBuildingVO");
        if (__s45local2) {
          var __s45local3 = false;
          for (var __s45local4 = 0, __s45local5 = __s45local2.onlyInKingdomIds; __s45local4 < __s45local5.length; __s45local4++) {
            var __s45local6 = __s45local5[__s45local4];
            if (__s45local6 !== undefined) {
              __s45local3 = __s45local3 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s45local6);
            }
          }
          if (!__s45local3) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_kingdom_notEntered")));
            this.hide();
            return;
          }
        }
        if (__s45param0.paramObj.BE) {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_buildingExists")));
        } else {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningLevel")));
        }
        this.hide();
      } else {
        __s45local0.sort(this.bindFunction(this.sortPossibleBuildingArray));
        for (var __s45local7 = 0; __s45local7 < __s45local0.length; __s45local7++) {
          var __s45local8 = __s45local0[__s45local7];
          if (__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId == __s45local8[1]) {
            __s45local1 = __s45local7;
          }
        }
        var __s45local9 = isNaN(__s45local1) ? __s45local0[0] : __s45local0[__s45local1];
        this.goToCastleAndObject(__s45local9);
      }
    }
  };
  CastlePrimeSaleDialog.prototype.goToCastleAndObject = function (__s60param0) {
    var __s60local0 = __dep_exact_f855840627e6e145.int(__s60param0.length > 2 ? __s60param0[2] : -1);
    if (__s60param0[1] == __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId && this.layoutManager.isInMyCastle) {
      this.onServerMessageArrived(__s60local0)();
    } else {
      if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s60param0[0])) {
        return;
      }
      this.jaaArrivedCallback = this.onServerMessageArrived(__s60local0);
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.jaaArrivedCallback);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s60param0[1], __s60param0[0]));
    }
  };
  CastlePrimeSaleDialog.prototype.sortPossibleBuildingArray = function (__s65param0, __s65param1) {
    if (this.mainCastles.indexOf(__s65param0[1]) > this.mainCastles.indexOf(__s65param1[1])) {
      return -1;
    } else if (this.mainCastles.indexOf(__s65param0[1]) < this.mainCastles.indexOf(__s65param1[1])) {
      return 1;
    } else if (this.kingdomSortOrder.indexOf(__s65param0[0]) > this.kingdomSortOrder.indexOf(__s65param1[0])) {
      return -1;
    } else if (this.kingdomSortOrder.indexOf(__s65param0[0]) < this.kingdomSortOrder.indexOf(__s65param1[0])) {
      return 1;
    } else {
      return 0;
    }
  };
  CastlePrimeSaleDialog.prototype.getRemainingTime = function () {
    if (this.isPrivateOffer_0) {
      return __dep_exact_f855840627e6e145.int(this.properties.offerVO.remainingSeconds);
    } else {
      return __dep_exact_f855840627e6e145.int(this.properties.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastlePrimeSaleDialog.prototype.timeToString = function (__s76param0) {
    return new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text(CastlePrimeSaleDialog.SPECIAL_OFFER_TIMER, [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s76param0)]));
  };
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "primeSaleComponent", {
    get: function () {
      if (this.isPrivateOffer_0) {
        var __s78local0 = __dep_exact_81dacdf05bd32292.castAs(this.dialogPropertiesPrivateOffer.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
        var __s78local1 = __dep_exact_81dacdf05bd32292.castAs(this.dialogPropertiesPrivateOffer.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
        if (__s78local0) {
          return __s78local0.primeSaleComponent;
        } else if (__s78local1) {
          return __s78local1.primeSaleComponent;
        } else {
          __dep_exact_9e901e8e2483a22f_3.error("no primeSaleParameter found: " + this.dialogPropertiesPrivateOffer.offerVO);
          return null;
        }
      }
      return this.dialogProperties.eventVO.primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "isPrivateOffer_0", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "dialogPropertiesPrivateOffer", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleDialog.prototype, "isPrimeSaleUpgradeComponent", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.primeSaleComponent, "PrimeSaleUpgradeComponent");
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeSaleDialog.prototype.isOffer = function () {
    return true;
  };
  CastlePrimeSaleDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleDialog.prototype.onCloseButton = function () {
    if (this.jaaArrivedCallback) {
      this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.jaaArrivedCallback);
      this.jaaArrivedCallback = null;
    }
  };
  CastlePrimeSaleDialog.NAME = "CastlePrimeSalesDialogExternal";
  CastlePrimeSaleDialog.DIALOG_TITLE = "dialog_specialOfferDeco_title";
  CastlePrimeSaleDialog.DIALOG_COPY = "dialog_primeday_primesale_description";
  CastlePrimeSaleDialog.DIALOG_OK_BUTTON_TEXT = "dialog_questInfo_showMe";
  CastlePrimeSaleDialog.SPECIAL_OFFER_TIMER = "dialog_primeday_specialoffer_endTimer";
  CastlePrimeSaleDialog.LIMITED_OFFER = "dialog_privateOffer_whaleChest_rubySave";
  return CastlePrimeSaleDialog;
}(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleDialog = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
