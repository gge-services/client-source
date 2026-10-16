Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_AModernPackageShopBuyElement = require("gge-module:export_AModernPackageShopBuyElement");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ModernPackageShopBuyElementCosts() {
    var __s3local0 = this;
    __s3local0._costs = new __dep_export_CollectableList.CollectableList();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementCosts, __s1param0);
  ModernPackageShopBuyElementCosts.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this._txtCost = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost"));
    this._txtCost.autoFitToBounds = true;
    this._txtCost.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    this.disp.mc_cost_1_0.mouseChildren = false;
    this.disp.mc_cost_2_0.mouseChildren = false;
    this.disp.mc_cost_2_1.mouseChildren = false;
  };
  ModernPackageShopBuyElementCosts.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUsersCurrencyChanged));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUsersCurrencyChanged));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onUsersCurrencyChanged));
  };
  ModernPackageShopBuyElementCosts.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUsersCurrencyChanged));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUsersCurrencyChanged));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onUsersCurrencyChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementCosts.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this._costs = this.getFinalCosts();
    this.updateCostFields();
  };
  ModernPackageShopBuyElementCosts.prototype.updateCostFields = function () {
    this.disp.mc_cost_1_0.visible = false;
    this.disp.mc_cost_2_0.visible = false;
    this.disp.mc_cost_2_1.visible = false;
    this.destroyCollectableRenderList();
    var __s13local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, ModernPackageShopBuyElementCosts.COST_ICON_DIMENSION);
    __s13local0.costTextfield.showAvailableStorage = true;
    this._txtCost.visible = this._costs.length == 1;
    for (var __s13local1 = 0; __s13local1 < this._costs.length; ++__s13local1) {
      var __s13local2 = this.getCostItemMcByIndex(__s13local1);
      __s13local2.visible = true;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s13local2), this._costs.getItemByIndex(__s13local1), __s13local0);
    }
    this.disp.mc_discount.visible = this.parentDialog.dialogProperties.eventPackageVO.c2Discount > 0;
    if (this.disp.mc_discount.visible) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.parentDialog.dialogProperties.eventPackageVO.c2Discount]));
    }
    this.updateCostIndicators();
  };
  ModernPackageShopBuyElementCosts.prototype.updateCostIndicators = function () {
    if (this.collectableRenderList != null) {
      for (var __s18local0 = 0, __s18local1 = this.collectableRenderList; __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        if (__s18local2 !== undefined) {
          __s18local2.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.COST_TEXTFIELD).update();
        }
      }
    }
  };
  ModernPackageShopBuyElementCosts.prototype.getCostItemMcByIndex = function (__s24param0) {
    return this.disp.getChildByName("mc_cost_" + this._costs.length + "_" + __s24param0);
  };
  ModernPackageShopBuyElementCosts.prototype.getFinalCosts = function () {
    var __s26local0 = this.parentDialog.dialogProperties.eventPackageVO.getCostList();
    var __s26local1 = this.parentDialog.getElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.AMOUNT);
    var __s26local2 = __dep_exact_f855840627e6e145.int(__s26local1 ? __s26local1.getSelectedPackageAmount() : 1);
    for (var __s26local3 = 0, __s26local4 = __s26local0.list; __s26local3 < __s26local4.length; __s26local3++) {
      var __s26local5 = __s26local4[__s26local3];
      if (__s26local5 !== undefined) {
        __s26local5.amount *= __s26local2;
      }
    }
    return __s26local0;
  };
  ModernPackageShopBuyElementCosts.prototype.getMaxBuyablePackages = function (__s31param0 = true) {
    this._costs = this.getFinalCosts();
    var __s31local0 = __dep_exact_f855840627e6e145.int(this._costs.length > 0 ? this.parentDialog.dialogProperties.eventPackageVO.maxBuyPerClick : 0);
    for (var __s31local1 = 0, __s31local2 = this._costs.list; __s31local1 < __s31local2.length; __s31local1++) {
      var __s31local3 = __s31local2[__s31local1];
      if (__s31local3 !== undefined) {
        var __s31local4 = __dep_exact_f855840627e6e145.int(__dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s31local3, true)));
        var __s31local5 = __dep_exact_f855840627e6e145.int(__s31local3.amount);
        if (__s31local5 > 0) {
          __s31local0 = __dep_exact_f855840627e6e145.int(Math.min(__s31local4 / __s31local5, __s31local0));
        }
      }
    }
    if (this.parentDialog.dialogProperties.eventPackageVO.isStockLimited) {
      __s31local0 = __dep_exact_f855840627e6e145.int(Math.min(__s31local0, this.parentDialog.dialogProperties.eventPackageVO.remainingStock));
    }
    var __s31local6 = this.getInventorySpaceLeft();
    if (!__s31param0 || __s31local6 < 0) {
      return __s31local0;
    } else {
      return __dep_exact_f855840627e6e145.int(Math.min(__s31local0, __s31local6));
    }
  };
  ModernPackageShopBuyElementCosts.prototype.getInventorySpaceLeft = function () {
    var __s40local0 = this.parentDialog.dialogProperties.eventPackageVO.reward;
    if (__s40local0.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT) {
      var __s40local1 = __s40local0.getSlotType();
      if (__s40local1 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL) {
        return __dep_exact_f855840627e6e145.int(Math.min(__dep_export_CastleModel.CastleModel.equipData.inventorySpace, __dep_export_CastleModel.CastleModel.gemData.inventorySpace));
      } else if (__s40local1 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM) {
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.inventorySpace);
      } else {
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.inventorySpace);
      }
    }
    if (__s40local0.itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && __s40local0.xmlCurrencyVO.softCap > 0) {
      var __s40local2 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s40local0.id);
      var __s40local3 = __s40local0.xmlCurrencyVO.softCap;
      var __s40local4 = Math.max(__s40local3 - __s40local2, 0);
      return Math.floor(__s40local4 / __s40local0.amount);
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s40local0, "ACollectableItemEquipmentVO")) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.inventorySpace);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s40local0, "ACollectableItemGemVO")) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.inventorySpace);
    } else {
      return -1;
    }
  };
  ModernPackageShopBuyElementCosts.prototype.onUsersCurrencyChanged = function (__s50param0 = null) {
    this.updateCostIndicators();
  };
  ModernPackageShopBuyElementCosts.__initialize_static_members = function () {
    ModernPackageShopBuyElementCosts.COST_ICON_DIMENSION = new __s0local0(42, 35);
  };
  return ModernPackageShopBuyElementCosts;
}(__dep_export_AModernPackageShopBuyElement.AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementCosts = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_ModernPackageShopBuyElementEnum = require("gge-module:export_ModernPackageShopBuyElementEnum");
__s0local1.__initialize_static_members();
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
