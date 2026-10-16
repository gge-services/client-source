Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = function (__s1param0) {
  function CollectableInfiniteScrollItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableInfiniteScrollItem, __s1param0);
  CollectableInfiniteScrollItem.prototype.initLoaded = function () {};
  CollectableInfiniteScrollItem.prototype.collectableScrollItemVO = function (__s7param0) {
    if (__s7param0 + 1 > this.data.length) {
      return null;
    } else {
      return this.data[__s7param0];
    }
  };
  CollectableInfiniteScrollItem.prototype.fill = function () {
    for (var __s11local0 = 0; __s11local0 < 5; __s11local0++) {
      this.fillItem(this.getItemMc()["item" + __s11local0], this.collectableScrollItemVO(__s11local0));
    }
  };
  CollectableInfiniteScrollItem.prototype.fillItem = function (__s15param0, __s15param1) {
    if (__s15param1) {
      __s15param0.visible = true;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips(__s15param0.mc_item).addInfoBtn(__s15param0.btn_info), __s15param1.collectable, __s15param1.collectableRenderOptions);
      var __s15local0 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().getTextField(__s15param0.mc_item.txt_text);
      __s15local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      __s15local0.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      __s15local0.wordwrap = false;
      if (__s15param1.collectable.itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY) {
        var __s15local1 = __s15param1.collectable;
        if (__s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN && __s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT && __s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MINUTE_SKIP_10_MIN && __s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MINUTE_SKIP_30_MIN && __s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MINUTE_SKIP_60_MIN && __s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MINUTE_SKIP_5_H && __s15local1.id != __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MINUTE_SKIP_24_H) {
          return;
        }
        if (__s15local1.xmlCurrencyVO.softCap <= 0) {
          return;
        }
        __s15local0.wordwrap = true;
        __s15local0.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s15local1.amount, {
          compactThreshold: 10000000,
          compactFractionalDigits: 0
        }), new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s15local1.xmlCurrencyVO.softCap, {
          compactThreshold: 10000000,
          compactFractionalDigits: 0
        })]);
        if (__s15local1.amount >= __s15local1.xmlCurrencyVO.softCap) {
          __s15local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        }
      }
    } else {
      __s15param0.visible = false;
    }
  };
  CollectableInfiniteScrollItem.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
  };
  return CollectableInfiniteScrollItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CollectableInfiniteScrollItem = __s0local0;
