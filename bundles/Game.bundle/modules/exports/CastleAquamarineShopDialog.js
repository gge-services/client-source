Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSpecialCurrencyMerchantDialog = require("gge-module:export_CastleSpecialCurrencyMerchantDialog");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleAquamarineShopDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAquamarineShopDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAquamarineShopDialog, __s1param0);
  CastleAquamarineShopDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
  };
  CastleAquamarineShopDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
  };
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_eiland_aquamarinShop_copy";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "descriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_eiland_aquamarinShop_description";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "detailedDescriptionText").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "userSpecialCurrencies", {
    get: function () {
      var __s17local0 = [];
      __s17local0.push(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE));
      return __s17local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_AquamarineShopScrollItem.AquamarineShopScrollItem;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAquamarineShopDialog.prototype, "isEvent", {
    get: function () {
      return false;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "isEvent").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAquamarineShopDialog.prototype.onUserResourcesChange = function (__s27param0) {
    this.setCurrencyDisplay();
  };
  CastleAquamarineShopDialog.prototype.getItemListVOs = function () {
    var __s29local0 = [];
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      var __s29local1 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.slumVOs[0];
      if (__s29local1.level > 0) {
        for (var __s29local2 = 0, __s29local3 = __s29local1.packages; __s29local2 < __s29local3.length; __s29local2++) {
          var __s29local4 = __s29local3[__s29local2];
          if (__s29local4 !== undefined && __s29local4.isVisible(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType)) {
            var __s29local5 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
            __s29local5.eventPackageVO = __s29local4;
            __s29local5.specialEventVO = this.dialogProperties.buyPackageEventVO;
            __s29local0.push(__s29local5);
          }
        }
      }
    }
    return __s29local0;
  };
  CastleAquamarineShopDialog.__initialize_static_members = function () {
    CastleAquamarineShopDialog.NAME = "CastleAquamarinShopExternal";
  };
  return CastleAquamarineShopDialog;
}(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog);
exports.CastleAquamarineShopDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_AquamarineShopScrollItem = require("gge-module:export_AquamarineShopScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
