Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopResourceTipEnum(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0.type.name + "_" + __s3param0.id, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._worldmapObjectFrame = 0;
    __s3local0._typeVO = __s3param0;
    __s3local0._titleTextId = __s3param1;
    __s3local0._descTextId = __s3param2;
    __s3local0._worldmapObjectFrame = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopResourceTipEnum, __s1param0);
  ModernPackageShopResourceTipEnum.getTypeByVO = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(ModernPackageShopResourceTipEnum); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2.typeVO.isSameAs(__s5param0)) {
        return __s5local2;
      }
    }
    return ModernPackageShopResourceTipEnum.NONE;
  };
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "typeVO", {
    get: function () {
      return this._typeVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "titleTextId", {
    get: function () {
      return this._titleTextId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "descTextId", {
    get: function () {
      return this._descTextId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipEnum.prototype, "worldmapObjectFrame", {
    get: function () {
      return this._worldmapObjectFrame;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopResourceTipEnum.__initialize_static_members = function () {
    ModernPackageShopResourceTipEnum.NONE = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(), "", "", 1);
    ModernPackageShopResourceTipEnum.AQUAMARINE = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE), "dialog_eiland_aquamarinShop_noAquamarin_header", "dialog_eiland_aquamarinShop_noAquamarin_description", 4);
    ModernPackageShopResourceTipEnum.KHAN_TABLET = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET), "dialog_nomadInvasion_tip_title", "dialog_nomadInvasion_tip_description", 1);
    ModernPackageShopResourceTipEnum.SKULL_RELIC = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SKULL_RELIC), "dialog_thornking_tip_title", "dialog_thornking_tip_description", 2);
    ModernPackageShopResourceTipEnum.PEARL_RELIC = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEARL_RELIC), "dialog_seaqueen_tip_title", "dialog_seaqueen_tip_description", 3);
    ModernPackageShopResourceTipEnum.GREEN_SKULL_RELIC = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GREEN_SKULL_RELIC), "dialog_thornking_tip_greenSkull_title", "dialog_thornking_tip_greenSkull_description", 2);
    ModernPackageShopResourceTipEnum.SAMURAI_TOKEN = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN), "dialog_samuraiShop_tip_title", "dialog_samuraiShop_tip_description", 6);
    ModernPackageShopResourceTipEnum.SILVER_RUNE = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SILVER_RUNE), "dialog_underworld_tip_title_dummy", "dialog_underworld_tip_description", 7);
    ModernPackageShopResourceTipEnum.GOLD_RUNE = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GOLD_RUNE), "dialog_underworld_tip_gold_title", "dialog_underworld_tip2_description", 8);
    ModernPackageShopResourceTipEnum.KHAN_MEDAL = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_MEDAL), "dialog_notEnoughCurrency_title", "dialog_notEnoughCurrency_desc_khanMedals", 10);
    ModernPackageShopResourceTipEnum.SAMURAI_MEDAL = new ModernPackageShopResourceTipEnum(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_MEDAL), "dialog_notEnoughCurrency_title", "dialog_notEnoughCurrency_samuraiMedal_desc", 5);
  };
  return ModernPackageShopResourceTipEnum;
}(__dep_export_CastleEnum.CastleEnum);
exports.ModernPackageShopResourceTipEnum = __s0local0;
__s0local0.__initialize_static_members();
