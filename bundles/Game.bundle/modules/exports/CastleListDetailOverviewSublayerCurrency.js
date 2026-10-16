Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleListDetailOverviewDialog = require("gge-module:export_CastleListDetailOverviewDialog");
var __dep_export_CollectableInfiniteScrollItem = require("gge-module:export_CollectableInfiniteScrollItem");
var __dep_export_CollectableScrollItemVO = require("gge-module:export_CollectableScrollItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleListDetailOverviewSublayerCurrency(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.mc_list.mc_slider.btn_up, __s3local0.subLayerDisp.mc_list.mc_slider.btn_down, __s3local0.subLayerDisp.mc_list.mc_slider.btn_slider]);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_listOverview_tabCurrency_desc"));
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CollectableInfiniteScrollItem.CollectableInfiniteScrollItem, "CastleListDetailOverviewCurrencyItemGroupScrollItem", __dep_export_CastleListDetailOverviewDialog.CastleListDetailOverviewDialog.NAME);
    __s3local1.itemPaddingY = 4;
    __s3local1.useSmoothScroll = true;
    __s3local0._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addSliderMc(__s3local0.subLayerDisp.mc_list.mc_slider), __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewSublayerCurrency, __s1param0);
  CastleListDetailOverviewSublayerCurrency.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    if (__s5param0[0]) {
      this._list.scrollComponent.currentValue;
      this._list.updateWithNewData(this.getListData());
      this._list.onShow();
      this._list.scrollToData(0);
      this._list.scrollComponent.onScrollSignal.add(this.bindFunction(__dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips));
    }
  };
  CastleListDetailOverviewSublayerCurrency.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._list.scrollComponent.onScrollSignal.remove(this.bindFunction(__dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips));
  };
  CastleListDetailOverviewSublayerCurrency.prototype.getListData = function () {
    var __s10local0 = [];
    var __s10local1 = 0;
    var __s10local2 = 0;
    var __s10local3 = __dep_export_CastleModel.CastleModel.currencyData.getCurrenciesByIdRanges([__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_EVENT_CURRENCIES), __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP), __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_CI_BOOSTER), __dep_export_CastleModel.CastleModel.currencyData.getGeneralItemsIdRange(), __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_CRAFTING_CURRENCIES)]);
    if (__s10local3 != null) {
      for (var __s10local4 = 0, __s10local5 = __s10local3; __s10local4 < __s10local5.length; __s10local4++) {
        var __s10local6 = __s10local5[__s10local4];
        if (__s10local6 !== undefined && __s10local6.amount > 0 && !__s10local6.xmlCurrencyVO.isHidden) {
          if (__s10local6.xmlCurrencyVO && __s10local6.xmlCurrencyVO.id == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_TONIC) {
            (__s10local6 = __s10local6.clone()).amount = 0;
          }
          if (__s10local2 >= 5) {
            __s10local2 = 0;
            __s10local1++;
          }
          if (__s10local0.length < __s10local1 + 1) {
            __s10local0.push([]);
          }
          __s10local0[__s10local1].push(new __dep_export_CollectableScrollItemVO.CollectableScrollItemVO(__s10local6, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(68, 54))));
          __s10local2++;
        }
      }
      return __s10local0;
    }
  };
  return CastleListDetailOverviewSublayerCurrency;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleListDetailOverviewSublayerCurrency = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
