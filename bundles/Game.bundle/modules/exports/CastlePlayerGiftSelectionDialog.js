Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_PlayerGiftEvent = require("gge-module:export_PlayerGiftEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PlayerGiftSelectionScrollItemVO = require("gge-module:export_PlayerGiftSelectionScrollItemVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_PackageTabComponent = require("gge-module:export_PackageTabComponent");
var __s0local0 = function (__s1param0) {
  function CastlePlayerGiftSelectionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlayerGiftSelectionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerGiftSelectionDialog, __s1param0);
  CastlePlayerGiftSelectionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.tabs = new __dep_export_PackageTabComponent.PackageTabComponent(this.dialogDisp, this.bindFunction(this.onFilterChanged));
    this.tabs.addTab(this.dialogDisp.tabAll, "dialog_giftTrader_allGifts_tooltip", function (__s7param0) {
      return true;
    });
    this.tabs.addTab(this.dialogDisp.tabRes, "dialog_giftTrader_resources_tooltip", function (__s9param0) {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0.reward, "ACollectableItemResourceVO");
    });
    this.tabs.addTab(this.dialogDisp.tabGold, "dialog_giftTrader_coins_tooltip", function (__s11param0) {
      return __s11param0.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.C1;
    });
    this.tabs.addTab(this.dialogDisp.tabTool, "dialog_giftTrader_toolsAndUnits_tooltip", function (__s13param0) {
      return __s13param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_TOOL || __s13param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER;
    });
    this.tabs.addTab(this.dialogDisp.tabEquipment, "dialog_giftTrader_equipment_tooltip", function (__s15param0) {
      return __s15param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || __s15param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM || __s15param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO;
    });
    this.tabs.init();
  };
  CastlePlayerGiftSelectionDialog.prototype.showLoaded = function (__s17param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s17param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.itemList.btn_up, this.dialogDisp.itemList.btn_down, this.dialogDisp.btn_help]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_giftTrader_sendGift_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.noGifts.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("giftTrader_noGifts"));
    this.updateGiftPackageAmount(__dep_export_CastleModel.CastleModel.playerGiftData.giftPackagesInInventoryAmount);
    this.dialogDisp.package_counter.mouseChildren = false;
    this.tabs.show();
    __dep_export_CastleModel.CastleModel.playerGiftData.receivingPlayerID = this.playerGiftSelectionProperties.playerID;
    __dep_export_CastleModel.CastleModel.playerGiftData.addEventListener(__dep_export_PlayerGiftEvent.PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED, this.bindFunction(this.onGiftListUpdate));
  };
  CastlePlayerGiftSelectionDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s19param0);
    this.tabs.hide();
    if (this.packageScrollList) {
      this.packageScrollList.remove();
      this.packageScrollList.clear();
      this.packageScrollList = null;
    }
    __dep_export_CastleModel.CastleModel.playerGiftData.removeEventListener(__dep_export_PlayerGiftEvent.PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED, this.bindFunction(this.onGiftListUpdate));
  };
  CastlePlayerGiftSelectionDialog.prototype.updateGiftPackageAmount = function (__s22param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.package_counter.txt_giftAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s22param0, __dep_exact_26a421b704832cff.PackageConst.MAX_PLAYER_GIFT_STORAGE]));
  };
  CastlePlayerGiftSelectionDialog.prototype.onGiftListUpdate = function (__s24param0) {
    this.updateGiftPackageAmount(__dep_export_CastleModel.CastleModel.playerGiftData.giftPackagesInInventoryAmount);
    this.initScrollList(this.packageScrollList.currentStartIndex);
    this.updateListVisibility();
  };
  CastlePlayerGiftSelectionDialog.prototype.onHelpButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_giftTrader_category"));
  };
  CastlePlayerGiftSelectionDialog.prototype.fillScrollList = function () {
    for (var __s28local0 = 0, __s28local1 = __dep_export_CastleModel.CastleModel.playerGiftData.giftEventPackageVOs; __s28local0 < __s28local1.length; __s28local0++) {
      var __s28local2 = __s28local1[__s28local0];
      if (__s28local2 !== undefined && this.tabs.isPackageInCurrentTab(__s28local2)) {
        var __s28local3 = new __dep_export_PlayerGiftSelectionScrollItemVO.PlayerGiftSelectionScrollItemVO();
        if (__dep_exact_f855840627e6e145.int(CastlePlayerGiftSelectionDialog.getMaxSelectableAmount(__s28local2)) <= 0) {
          continue;
        }
        __s28local3.eventPackageVO = __s28local2;
        __s28local3.amount = __dep_exact_f855840627e6e145.int(CastlePlayerGiftSelectionDialog.getMaxSelectableAmount(__s28local2));
        this.packageScrollList.pushContent(__s28local3);
      }
    }
  };
  CastlePlayerGiftSelectionDialog.getMaxSelectableAmount = function (__s34param0) {
    return __dep_export_CastleModel.CastleModel.playerGiftData.getGiftVOByEventPackageVO(__s34param0).amount;
  };
  CastlePlayerGiftSelectionDialog.prototype.onFilterChanged = function () {
    this.initScrollList(0);
    this.updateListVisibility();
    this.updateGiftPackageAmount(this.countFilteredPackages());
    this.dialogDisp.package_counter.toolTipText = this.tabs.isFilterReset ? "giftTrader_giftCount_all_tooltip" : "giftTrader_giftCount_allCategory_tooltip";
  };
  CastlePlayerGiftSelectionDialog.prototype.updateListVisibility = function () {
    this.dialogDisp.itemList.visible = __dep_export_CastleModel.CastleModel.playerGiftData.playerGifts.length > 0;
    this.dialogDisp.noGifts.visible = !this.dialogDisp.itemList.visible;
  };
  Object.defineProperty(CastlePlayerGiftSelectionDialog.prototype, "playerGiftSelectionProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSelectionDialog.prototype.onClick = function (__s42param0) {
    __s1param0.prototype.onClick.call(this, __s42param0);
    switch (__s42param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.onHelpButton();
    }
  };
  CastlePlayerGiftSelectionDialog.prototype.countFilteredPackages = function () {
    var __s45local0 = 0;
    for (var __s45local1 = 0, __s45local2 = __dep_export_CastleModel.CastleModel.playerGiftData.giftEventPackageVOs; __s45local1 < __s45local2.length; __s45local1++) {
      var __s45local3 = __s45local2[__s45local1];
      if (__s45local3 !== undefined && this.tabs.isPackageInCurrentTab(__s45local3)) {
        __s45local0 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.playerGiftData.getGiftVOByEventPackageVO(__s45local3).amount);
      }
    }
    return __s45local0;
  };
  CastlePlayerGiftSelectionDialog.prototype.initScrollList = function (__s50param0) {
    if (this.packageScrollList) {
      this.packageScrollList.remove();
      this.packageScrollList.clear();
      this.packageScrollList = null;
    }
    this.packageScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp.itemList);
    this.packageScrollList.scrollItemClass = __dep_export_CastlePlayerGiftSelectionScrollItem.CastlePlayerGiftSelectionScrollItem;
    this.packageScrollList.scrollStep = __dep_export_ClientConstPackages.ClientConstPackages.SCROLL_STEP;
    this.fillScrollList();
    this.packageScrollList.hideButtons = true;
    this.packageScrollList.initList(__s50param0, true);
  };
  CastlePlayerGiftSelectionDialog.__initialize_static_members = function () {
    CastlePlayerGiftSelectionDialog.NAME = "CastlePlayerGiftSelection";
  };
  return CastlePlayerGiftSelectionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePlayerGiftSelectionDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerGiftSelectionScrollItem = require("gge-module:export_CastlePlayerGiftSelectionScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
