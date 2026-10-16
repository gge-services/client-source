Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CollectEventDialogMainRewardItem = require("gge-module:export_CollectEventDialogMainRewardItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CollectEventDialogMain(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectEventDialogMain, __s1param0);
  CollectEventDialogMain.prototype.init = function () {
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CollectEventDialogMainRewardItem.CollectEventDialogMainRewardItem, "CollectorEvent_Main_Reward_Item", __dep_export_CollectorEventDialog.CollectorEventDialog.NAME);
    __s5local0.itemPaddingY = 10;
    __s5local0.useSmoothScroll = true;
    this._rewardScrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), __s5local0);
  };
  CollectEventDialogMain.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_action_collector_overview_header_" + this.eventSuffix)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewards, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_rewards_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("value_colon", [__dep_exact_92d05af59ee2ff30_2.Localize.text(this.eventCurrency.getNameTextId())]))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_daily, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_overview_daily_header_" + this.eventSuffix))).autoFitToBounds = true;
    this.displayCurrentCurrency();
    this.onSpecialCurrencyChange();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_collector_skin);
    var __s7local0 = "CollectorTeaserImage_small_" + this.eventSuffix;
    if (__dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local0)) {
      var __s7local1 = __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0);
      var __s7local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0, __s7local1);
      this.dialogDisp.mc_collector_skin.addChild(__s7local2);
    }
    this._rewardScrollList.onShow();
    this._rewardScrollList.updateWithNewData(this.getRewardData());
  };
  CollectEventDialogMain.prototype.getRewardData = function () {
    var __s10local0 = [];
    for (var __s10local1 = this.eventVO.collectInfoVO.rewards, __s10local2 = 0; __s10local2 < __s10local1.length; __s10local2++) {
      __s10local0.push(__s10local1[__s10local2]);
    }
    return __s10local0;
  };
  Object.defineProperty(CollectEventDialogMain.prototype, "eventCurrency", {
    get: function () {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.eventVO.collectInfoVO.collectorCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  CollectEventDialogMain.prototype.displayCurrentCurrency = function () {
    if (this.eventVO) {
      var __s16local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_currency).addIconMc(this.dialogDisp.mc_currency);
      var __s16local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(50, 50));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s16local0, this.eventCurrency, __s16local1);
      var __s16local2 = "CollectorIcon_" + this.eventVO.collectInfoVO.collectorEventSkinName;
      var __s16local3 = __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s16local2);
      var __s16local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s16local2, __s16local3, null, 0, false);
      __s16local4.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(50, 50);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_event);
      this.dialogDisp.mc_event.addChild(__s16local4);
    }
  };
  CollectEventDialogMain.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
  };
  CollectEventDialogMain.prototype.onSpecialCurrencyChange = function (__s21param0 = null) {
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_current_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.eventCurrencyAmount));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_daily_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.eventCurrencyAmount * (this.eventVO.collectInfoVO.dailyCurrencyIncrease / 100)));
    }
  };
  Object.defineProperty(CollectEventDialogMain.prototype, "eventCurrencyAmount", {
    get: function () {
      if (this.eventVO) {
        return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.collectInfoVO.collectorCurrencyID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMain.prototype, "eventVO", {
    get: function () {
      var __s28local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR), "CollectorEventEventVO");
      if (!__s28local0) {
        this.hide();
      }
      return __s28local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMain.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMain.prototype, "eventSuffix", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventDialogMain;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CollectEventDialogMain = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
var __dep_export_CollectorEventDialog = require("gge-module:export_CollectorEventDialog");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
