Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleRessourcesBoostDialogProperties = require("gge-module:export_CastleRessourcesBoostDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardPayYesNoDialogProperties = require("gge-module:export_CastleStandardPayYesNoDialogProperties");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleResourceWaitDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleResourceWaitDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceWaitDialog, __s1param0);
  CastleResourceWaitDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = [this.dialogDisp.btn_close, this.dialogDisp.mc_bottom.btn_ok, this.dialogDisp.mc_bottom.btn_boost, this.dialogDisp.mc_bottom.btn_to_trader, this.dialogDisp.mc_bottom.btn_skip_rubies];
    this.resourceWaitComponents = [];
    for (var __s5local1 = 0; __s5local1 < __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.length; __s5local1++) {
      var __s5local2 = this.dialogDisp["mc_info" + __s5local1];
      if (!__s5local2) {
        break;
      }
      __s5local0.push(__s5local2.btn_skip_production);
      this.resourceWaitComponents.push(new __dep_export_ResourceWaitComponent.ResourceWaitComponent(__s5local2));
    }
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_alert_information"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_youNeed, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_resourceWait_youNeed"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom.speechbubble.merchant_txt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_resourceWait_traderSpeechBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom.btn_to_trader.txt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_resourceWait_toTraderButton")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom.btn_skip_rubies.txt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_resourceWait_buildForRubiesButton")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, this.dialogDisp.mc_charPlaceHolder, 176, 149);
    this.dialogDisp.mc_bottom.btn_boost.toolTipText = "boostResources";
    this.dialogDisp.mc_bottom.btn_boost.mc_discount.visible = __dep_export_CastleModel.CastleModel.boosterSaleData.hideDiscount();
    this.initBasicButtons(__s5local0);
  };
  CastleResourceWaitDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferChanged));
  };
  CastleResourceWaitDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferChanged));
    this.hideResourceDisplays();
  };
  CastleResourceWaitDialog.prototype.applyPropertiesLoaded = function (__s14param0 = null) {
    this.updateResourceMerchant();
    this.updateResourceDisplays();
    this.updateDialogSize();
    this.itxt_description.textContentVO.textId = this.dialogProperties.descriptionTextId;
  };
  CastleResourceWaitDialog.prototype.onEventChanged = function (__s16param0) {
    if (__s16param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT || __s16param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT_FACTION) {
      this.updateResourceMerchant();
      this.updateDialogSize();
    }
  };
  CastleResourceWaitDialog.prototype.onOfferChanged = function (__s19param0) {
    this.updateResourceMerchant();
    this.updateDialogSize();
  };
  CastleResourceWaitDialog.prototype.updateDialogSize = function () {
    var __s21local0 = __dep_exact_f855840627e6e145.int(Math.max(0, this.resourceWaitComponents.length - this.dialogProperties.getNumberOfMissingResources())) * 37.5 + (this.merchantActiveAndSellsAllNecessaryResources ? 0 : 90);
    this.dialogDisp.bg.height = 605 - __s21local0;
    this.dialogDisp.mc_bottom.y = 255 - __s21local0;
    this.dialogDisp.y = __s21local0;
    this.updatePosition();
  };
  CastleResourceWaitDialog.prototype.updateResourceMerchant = function () {
    var __s23local0 = this.merchantActiveAndSellsAllNecessaryResources;
    this.dialogDisp.mc_bottom.btn_ok.visible = !__s23local0;
    this.dialogDisp.mc_bottom.btn_boost.visible = !__s23local0 && this.dialogProperties.hasAnyProduction && CastleResourceWaitDialog.isOverseersEnabled;
    this.dialogDisp.mc_bottom.speechbubble.visible = __s23local0;
    this.dialogDisp.mc_bottom.mc_char.visible = __s23local0;
    this.dialogDisp.mc_bottom.btn_to_trader.visible = __s23local0;
    this.dialogDisp.mc_bottom.btn_skip_rubies.visible = __s23local0 && this.dialogProperties.isSkippableWithRubies;
    if (__s23local0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_bottom.btn_skip_rubies, this.hasStorageForDirectPay());
      this.dialogDisp.mc_bottom.btn_skip_rubies.toolTipText = this.hasStorageForDirectPay() ? null : "dialog_storageFull";
    }
  };
  CastleResourceWaitDialog.prototype.updateResourceDisplays = function () {
    var __s26local0 = 0;
    for (var __s26local1 = 0, __s26local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s26local1 < __s26local2.length; __s26local1++) {
      var __s26local3 = __s26local2[__s26local1];
      if (__s26local3 !== undefined) {
        var __s26local4 = __dep_exact_f855840627e6e145.int(this.dialogProperties.getMissing(__s26local3));
        if (__s26local4 > 0) {
          this.resourceWaitComponents[__s26local0].setResource(__s26local3, __s26local4, this.dialogProperties.getProduction(__s26local3), CastleResourceWaitDialog.isOverseersEnabled);
          __s26local0++;
        }
      }
    }
    this.hideResourceDisplays(__s26local0);
  };
  CastleResourceWaitDialog.prototype.hideResourceDisplays = function (__s32param0 = 0) {
    for (var __s32local0 = __s32param0; __s32local0 < this.resourceWaitComponents.length; ++__s32local0) {
      this.resourceWaitComponents[__s32local0].setResource(null, 0, 0, false);
    }
  };
  CastleResourceWaitDialog.prototype.hasStorageForDirectPay = function () {
    for (var __s36local0 = 0, __s36local1 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s36local0 < __s36local1.length; __s36local0++) {
      var __s36local2 = __s36local1[__s36local0];
      if (__s36local2 !== undefined && __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s36local2).maxAmount < this.dialogProperties.getMissing(__s36local2)) {
        return false;
      }
    }
    return true;
  };
  Object.defineProperty(CastleResourceWaitDialog.prototype, "merchantActiveAndSellsAllNecessaryResources", {
    get: function () {
      return CastleResourceWaitDialog.isMerchantActive && this.merchantSellsAllNecessaryResources();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "isOverseersEnabled", {
    get: function () {
      return !__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInEventState && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "isMerchantActive", {
    get: function () {
      return CastleResourceWaitDialog.merchantEventVO != null || CastleResourceWaitDialog.privateOfferMerchantVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "merchantEventVO", {
    get: function () {
      var __s47local0;
      if ((__s47local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInEventState || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID ? __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT_FACTION) : __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT)) && __s47local0.isBuildingVisibleInArea(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.mapID)) {
        return __s47local0;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialog, "privateOfferMerchantVO", {
    get: function () {
      var __s51local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.privateOfferData.getPrivateOfferMerchantID());
      if (__s51local0 != -1) {
        var __s51local1 = __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(__s51local0);
        var __s51local2 = __s51local1.getDescriptionByName("visualComponents").visuals.get("isoObject");
        if (__s51local2.isVisible && __s51local2.isIsoObjectVisibleByArea(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType)) {
          return __s51local1;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialog.prototype.merchantSellsAllNecessaryResources = function () {
    var __s55local0 = CastleResourceWaitDialog.getMerchantPackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    if (!__s55local0) {
      return false;
    }
    for (var __s55local1 = 0, __s55local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s55local1 < __s55local2.length; __s55local1++) {
      var __s55local3 = __s55local2[__s55local1];
      if (__s55local3 !== undefined && this.dialogProperties.getMissing(__s55local3) > 0) {
        var __s55local4 = false;
        if (__s55local0 != null) {
          for (var __s55local5 = 0, __s55local6 = __s55local0; __s55local5 < __s55local6.length; __s55local5++) {
            var __s55local7 = __s55local6[__s55local5];
            if (__s55local7 !== undefined && __s55local7.getAmount(__s55local3) > 0) {
              __s55local4 = true;
              break;
            }
          }
        }
        if (!__s55local4) {
          return false;
        }
      }
    }
    return true;
  };
  CastleResourceWaitDialog.getMerchantPackages = function (__s66param0, __s66param1, __s66param2) {
    var __s66local0 = CastleResourceWaitDialog.privateOfferMerchantVO;
    if (__s66local0) {
      return __s66local0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PACKAGE_IDS).getVisiblePackages(__s66param0, __s66param1, __s66param2);
    }
    var __s66local1 = CastleResourceWaitDialog.merchantEventVO;
    if (__s66local1) {
      return __s66local1.getVisiblePackages(__s66param0, __s66param1, __s66param2);
    } else {
      return null;
    }
  };
  CastleResourceWaitDialog.prototype.onClick = function (__s71param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s71param0.target)) {
      __s1param0.prototype.onClick.call(this, __s71param0);
      for (var __s71local0 = 0; __s71local0 < this.resourceWaitComponents.length; ++__s71local0) {
        if (__s71param0.target == this.dialogDisp["mc_info" + __s71local0].btn_skip_production) {
          this.resourceWaitComponents[__s71local0].onClickSkipProduction();
          this.hide();
          return;
        }
      }
      switch (__s71param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.mc_bottom.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.mc_bottom.btn_boost:
          this.hide();
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceBoostDialog.CastleResourceBoostDialog, new __dep_export_CastleRessourcesBoostDialogProperties.CastleRessourcesBoostDialogProperties());
          break;
        case this.dialogDisp.mc_bottom.btn_to_trader:
          if (CastleResourceWaitDialog.privateOfferMerchantVO) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceMerchantEventDialog.CastleResourceMerchantEventDialog, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(CastleResourceWaitDialog.privateOfferMerchantVO));
          } else if (CastleResourceWaitDialog.merchantEventVO) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceMerchantEventDialog.CastleResourceMerchantEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(CastleResourceWaitDialog.merchantEventVO));
          }
          this.hide();
          break;
        case this.dialogDisp.mc_bottom.btn_skip_rubies:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardPayYesNoDialog.CastleStandardPayYesNoDialog, new __dep_export_CastleStandardPayYesNoDialogProperties.CastleStandardPayYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_resourceWait_buildForRubiesPopup"), this.bindFunction(this.skipForRubies), null, null, "CharMerchant", this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.WOOD), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.STONE), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.FOOD), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.COAL), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.OIL), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.GLASS), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.IRON)));
      }
    }
  };
  CastleResourceWaitDialog.prototype.skipForRubies = function (__s80param0 = null) {
    if (this.dialogProperties.skipCommand) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.skipCommand);
    }
    if (__dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.ResourceConst.getC2PriceForResources([this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.WOOD), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.STONE), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.FOOD), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.COAL), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.OIL), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.GLASS), this.dialogProperties.getMissing(__dep_export_CollectableEnum.CollectableEnum.IRON)])) <= __dep_export_CastleModel.CastleModel.currencyData.c2Amount) {
      this.hide();
    }
  };
  CastleResourceWaitDialog.prototype.onMouseOver = function (__s84param0) {
    __s1param0.prototype.onMouseOver.call(this, __s84param0);
    this.onMouseInOrOut(__s84param0, true);
  };
  CastleResourceWaitDialog.prototype.onMouseOut = function (__s86param0) {
    __s1param0.prototype.onMouseOut.call(this, __s86param0);
    this.onMouseInOrOut(__s86param0, false);
  };
  CastleResourceWaitDialog.prototype.onMouseInOrOut = function (__s88param0, __s88param1) {
    for (var __s88local0 = 0; __s88local0 < this.resourceWaitComponents.length; ++__s88local0) {
      if (__s88param0.target == this.dialogDisp["mc_info" + __s88local0].btn_skip_production) {
        this.resourceWaitComponents[__s88local0].setBoosted(__s88param1);
      }
    }
    if (__s88param0.target == this.dialogDisp.mc_bottom.btn_boost) {
      this.setAllBoosted(__s88param1);
    }
  };
  CastleResourceWaitDialog.prototype.setAllBoosted = function (__s94param0) {
    for (var __s94local0 = 0; __s94local0 < this.resourceWaitComponents.length; ++__s94local0) {
      this.resourceWaitComponents[__s94local0].setBoosted(__s94param0);
    }
  };
  Object.defineProperty(CastleResourceWaitDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialog.__initialize_static_members = function () {
    CastleResourceWaitDialog.NAME = "CastleResourceWait";
  };
  return CastleResourceWaitDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResourceWaitDialog = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ResourceWaitComponent = require("gge-module:export_ResourceWaitComponent");
var __dep_export_CastleResourceBoostDialog = require("gge-module:export_CastleResourceBoostDialog");
var __dep_export_CastleStandardPayYesNoDialog = require("gge-module:export_CastleStandardPayYesNoDialog");
var __dep_export_CastleResourceMerchantEventDialog = require("gge-module:export_CastleResourceMerchantEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
