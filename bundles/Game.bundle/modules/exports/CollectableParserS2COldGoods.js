Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function () {
  function CollectableParserS2COldGoods() {}
  Object.defineProperty(CollectableParserS2COldGoods, "OLD_STYLE_GOODS_ORDER", {
    get: function () {
      if (this._OLD_STYLE_GOODS_ORDER == undefined) {
        this._OLD_STYLE_GOODS_ORDER = [__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_export_CollectableEnum.CollectableEnum.C1, __dep_export_CollectableEnum.CollectableEnum.C2, __dep_export_CollectableEnum.CollectableEnum.COAL, __dep_export_CollectableEnum.CollectableEnum.OIL, __dep_export_CollectableEnum.CollectableEnum.GLASS, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SKULL_RELIC, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEARL_RELIC, __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE, __dep_export_CollectableEnum.CollectableEnum.IRON, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SILVER_RUNE, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GOLD_RUNE, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GREEN_SKULL_RELIC, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_ROYAL_CAPITAL_TOKEN, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_APPRENTICE_TOKEN];
      }
      return this._OLD_STYLE_GOODS_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  CollectableParserS2COldGoods.prototype.createList = function (__s8param0) {
    var __s8local0 = new __dep_export_CollectableList.CollectableList();
    CollectableParserS2COldGoods.createByParamListOldGoods(__s8local0, __s8param0);
    return __s8local0;
  };
  CollectableParserS2COldGoods.createByParamListOldGoods = function (__s10param0, __s10param1) {
    for (var __s10local0 = __s10param1, __s10local1 = 0; __s10local1 < __s10local0.length; ++__s10local1) {
      var __s10local2 = __dep_exact_f855840627e6e145.int(__s10local0[__s10local1]);
      var __s10local3 = CollectableParserS2COldGoods.OLD_STYLE_GOODS_ORDER[__s10local1];
      if (__s10local2 != 0) {
        if (typeof __s10local3 == "number") {
          __s10param0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s10local2, __s10local3));
        } else {
          __s10param0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s10local3, __s10local2));
        }
      }
    }
  };
  return CollectableParserS2COldGoods;
}();
exports.CollectableParserS2COldGoods = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
