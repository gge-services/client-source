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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_C2SBuyEventPackageVO = require("gge-module:export_C2SBuyEventPackageVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_IncomingEquippableScrollItem = require("gge-module:export_IncomingEquippableScrollItem");
var __dep_export_IncomingEquippableScrollItemVO = require("gge-module:export_IncomingEquippableScrollItemVO");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleEquipmentMerchantEventIncomingDialog() {
    return __s1param0.call(this, CastleEquipmentMerchantEventIncomingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentMerchantEventIncomingDialog, __s1param0);
  CastleEquipmentMerchantEventIncomingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.panel_buyAgain.btn_buyAgain]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentMerchantEventIncoming_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentMerchantEventIncoming_desc"));
    this.itxt_buyAgainButtonText = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.btn_buyAgain.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentMerchantEventBuyAgain_button"));
    this.itxt_offerText = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.txt_offer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_originalPrice = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.mc_originalPrice.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_newPrice = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.mc_newPrice.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_priceReduction = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.txt_priceReduction, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.dialogDisp.panel_buyAgain.mc_newPrice.mouseChildren = false;
    this.dialogDisp.panel_buyAgain.mc_originalPrice.mouseChildren = false;
    this.dialogDisp.panel_buyAgain.mc_newPrice.toolTipText = "dialog_privateOffer_whaleChest_newPrice";
    this.dialogDisp.panel_buyAgain.mc_originalPrice.toolTipText = "dialog_privateOffer_whaleChest_oldPrice";
    this.dialogDisp.mc_itemContainer.btn_down.actLikeButton = true;
    this.dialogDisp.mc_itemContainer.btn_up.actLikeButton = true;
    this.dialogDisp.mc_itemContainer.btn_down.mouseChildren = false;
    this.dialogDisp.mc_itemContainer.btn_up.mouseChildren = false;
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    var __s7local0 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.packageID);
    this.renderPackage(__s7local0);
    this.renderList();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.panel_buyAgain.btn_buyAgain, false);
    var __s7local1 = new __dep_exact_81dacdf05bd32292_1.Timer(CastleEquipmentMerchantEventIncomingDialog.MINIMUM_ENABLE_INTERVAL, 1);
    __s7local1.addEventListener(__s0local0.TIMER, this.bindFunction(this.enableBuyButton));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeUserCurrency));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __s7local1.start();
    this.updateBuyAgainPanel(__s7local0);
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.onChangeUserCurrency = function (__s9param0) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.packageID);
    this.itxt_newPrice.color = __s9local0.priceC2WithRebuyReduction > __dep_export_CastleModel.CastleModel.currencyData.c2Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.enableBuyButton = function (__s11param0) {
    __s11param0.currentTarget.removeEventListener(__s0local0.TIMER, this.bindFunction(this.enableBuyButton));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.panel_buyAgain.btn_buyAgain, true);
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.updateBuyAgainPanel = function (__s13param0) {
    if (__s13param0.isReducedPriceC2WhenBoughtAgain) {
      this.dialogDisp.panel_buyAgain.visible = true;
      this.dialogDisp.background.scaleY = 1;
      this.itxt_originalPrice.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13param0.basicPriceC2);
      this.itxt_newPrice.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13param0.priceC2WithRebuyReduction);
      this.itxt_newPrice.color = __s13param0.priceC2WithRebuyReduction > __dep_export_CastleModel.CastleModel.currencyData.c2Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      var __s13local0 = Math.floor(__s13param0.maxPriceReductionC2WithRebuyReduction * 100 + 0.000001);
      this.itxt_priceReduction.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PERCENTAGE, [-__s13local0]);
      this.itxt_offerText.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentMerchantEventBuyAgain_desc", [__s13local0]);
    } else {
      this.dialogDisp.panel_buyAgain.visible = false;
      this.dialogDisp.background.scaleY = 0.65;
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.renderPackage = function (__s17param0) {
    var __s17local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_packageHolder);
    __s17local0.addIconMc(this.dialogDisp.mc_packageHolder.mc_icon);
    var __s17local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, __dep_export_ClientConstPackages.ClientConstPackages.ICON_SIZE_EQUIPMENT_MERCHANT_EVENT_INCOMING);
    __s17local1.tooltip.showEquipmentCountdown = false;
    var __s17local2 = new __dep_export_CollectableRenderer.CollectableRenderer(__s17local0, __s17local1);
    __s17local2.updateWithNewVO(__s17param0.reward);
    this.collectableRenderList.push(__s17local2);
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.renderList = function () {
    if (this._equipmentList) {
      this._equipmentList.clear();
    }
    this._equipmentList = new __dep_exact_9e901e8e2483a22f_2.ItemScrollList(this.dialogDisp.mc_itemContainer);
    this._equipmentList.scrollItemClass = __dep_export_IncomingEquippableScrollItem.IncomingEquippableScrollItem;
    this._equipmentList.scrollStep = 5;
    this._equipmentList.hideButtons = true;
    for (var __s19local0 = this.sortedInventory, __s19local1 = 0; __s19local1 < __s19local0.length; __s19local1++) {
      var __s19local2 = new __dep_export_IncomingEquippableScrollItemVO.IncomingEquippableScrollItemVO();
      __s19local2.equippableVO = __s19local0[__s19local1];
      this._equipmentList.pushContent(__s19local2);
    }
    this._equipmentList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, CastleEquipmentMerchantEventIncomingDialog.onRollOverItem);
    this._equipmentList.initList();
  };
  CastleEquipmentMerchantEventIncomingDialog.onRollOverItem = function (__s24param0) {
    var __s24local0 = __s24param0.scrollItem;
    if (__s24local0 && __s24local0.scrollItemVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s24local0.disp, __s24local0.scrollItemVO.equippableVO);
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.panel_buyAgain.btn_buyAgain:
          this.hide();
          this.buyAgainDelayed();
      }
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.buyAgainDelayed = function () {
    var __s31local0 = new __dep_exact_81dacdf05bd32292_1.Timer(CastleEquipmentMerchantEventIncomingDialog.MINIMUM_WAIT_TIME, 1);
    __s31local0.addEventListener(__s0local0.TIMER, this.bindFunction(this.buyAgain));
    __s31local0.start();
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.buyAgain = function (__s33param0) {
    __s33param0.currentTarget.removeEventListener(__s0local0.TIMER, this.bindFunction(this.buyAgain));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyEventPackageVO.C2SBuyEventPackageVO(this.dialogProperties.packageID, this.dialogProperties.fromBuyType, this.dialogProperties.fromEventID, 1, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, -1, -1, true));
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.hideLoaded = function (__s35param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s35param0);
    this._equipmentList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, CastleEquipmentMerchantEventIncomingDialog.onRollOverItem);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeUserCurrency));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this._equipmentList.clear();
  };
  Object.defineProperty(CastleEquipmentMerchantEventIncomingDialog.prototype, "sortedInventory", {
    get: function () {
      __dep_exact_9e901e8e2483a22f.VectorSortHelper.sort(this.dialogProperties.inventory, CastleEquipmentMerchantEventIncomingDialog.sort);
      return this.dialogProperties.inventory;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventIncomingDialog.sort = function (__s39param0, __s39param1) {
    if (__s39param0 instanceof __dep_export_BasicEquipmentVO.BasicEquipmentVO && __s39param1 instanceof __dep_export_BasicEquipmentVO.BasicEquipmentVO) {
      return CastleEquipmentMerchantEventIncomingDialog.sortRarity(__s39param0, __s39param1);
    } else if (__s39param0 instanceof __dep_export_BasicEquipmentVO.BasicEquipmentVO) {
      return -1;
    } else if (__s39param1 instanceof __dep_export_BasicEquipmentVO.BasicEquipmentVO) {
      return 1;
    } else {
      return CastleEquipmentMerchantEventIncomingDialog.sortLevel(__s39param0, __s39param1);
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.sortLevel = function (__s45param0, __s45param1) {
    if (__s45param0.level > __s45param1.level) {
      return -1;
    } else if (__s45param0.level < __s45param1.level) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.sortRarity = function (__s50param0, __s50param1) {
    if (__s50param0.rareID == 0) {
      return -1;
    } else if (__s50param1.rareID == 0) {
      return 1;
    } else if (__s50param0.rareID > __s50param1.rareID) {
      return -1;
    } else if (__s50param0.rareID < __s50param1.rareID) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.onSpecialEventRemoved = function (__s57param0) {
    if (__s57param0.specialEventVO instanceof __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO && __s57param0.specialEventVO.packageIDs.indexOf(this.dialogProperties.packageID) > -1) {
      this.hide();
    }
    if (__s57param0.specialEventVO.eventId == this.dialogProperties.fromEventID) {
      this.hide();
    }
  };
  Object.defineProperty(CastleEquipmentMerchantEventIncomingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventIncomingDialog.NAME = "CastleEquipmentMerchantEventIncoming";
  CastleEquipmentMerchantEventIncomingDialog.MINIMUM_ENABLE_INTERVAL = 500;
  CastleEquipmentMerchantEventIncomingDialog.MINIMUM_WAIT_TIME = 300;
  return CastleEquipmentMerchantEventIncomingDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEquipmentMerchantEventIncomingDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
