Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CollectorEventDialog() {
    return __s1param0.call(this, CollectorEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectorEventDialog, __s1param0);
  CollectorEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_shop]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(CollectorEventDialog.TAB_MAIN, new __dep_export_CollectEventDialogMain.CollectEventDialogMain(this.dialogDisp.sublayer_overview));
    this._subLayer.set(CollectorEventDialog.TAB_SHOP, new __dep_export_CollectEventDailogShop.CollectEventDailogShop(this.dialogDisp.tab_activityShop));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_timer")));
    this.dialogDisp.btn_tab_main.toolTipText = "";
    this.dialogDisp.btn_tab_shop.toolTipText = "";
  };
  CollectorEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    this.changeCategory(this.collectorEventVO ? CollectorEventDialog.TAB_MAIN : CollectorEventDialog.TAB_SHOP);
    this.updateRemainingEventTime();
  };
  CollectorEventDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    __s1param0.prototype.hide.call(this);
  };
  CollectorEventDialog.prototype.changeCategory = function (__s11param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_main, !!this.collectorEventVO);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_shop, !!this.collectorShopEventVO && this.collectorShopEventVO.kingdomIDs.indexOf(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) != -1);
    if (this._currentCategory != __s11param0) {
      __s1param0.prototype.changeCategory.call(this, __s11param0);
      this.showSublayer(this._subLayer.get(__s11param0), []);
      this.updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == CollectorEventDialog.TAB_MAIN, false);
      this.updateButton(this.dialogDisp.btn_tab_shop, this._currentCategory == CollectorEventDialog.TAB_SHOP, true);
      this.updateRemainingEventTime();
    }
  };
  CollectorEventDialog.prototype.updateButton = function (__s14param0, __s14param1, __s14param2) {
    __s14param0.gotoAndStop(__s14param1 ? 2 : 1);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s14param0.mc_icon);
    if (__s14param2) {
      var __s14local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
      __s14local0.addIconMc(__s14param0.mc_icon);
      var __s14local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(60, 60));
      var __s14local2 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.collectorOptionInfo.collectorCurrencyID);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s14local0, __s14local2, __s14local1);
    } else {
      var __s14local3 = "CollectorIcon_" + this.collectorOptionInfo.collectorEventSkinName;
      var __s14local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s14local3, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s14local3));
      __s14local4.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(60, 60);
      __s14param0.mc_icon.addChild(__s14local4);
    }
  };
  CollectorEventDialog.prototype.updateRemainingEventTime = function () {
    if (this.collectorEventVO || this.collectorShopEventVO && this.collectorShopEventVO.kingdomIDs.indexOf(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) != -1) {
      var __s18local0 = __dep_exact_f855840627e6e145.int(this.collectorEventVO ? this.collectorEventVO.remainingEventTimeInSeconds : this.collectorShopEventVO.remainingEventTimeInSeconds);
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time_copy, __s18local0);
    } else {
      this.hide();
    }
  };
  CollectorEventDialog.prototype.onClick = function (__s22param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
      switch (__s22param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.changeCategory(CollectorEventDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_shop:
          this.changeCategory(CollectorEventDialog.TAB_SHOP);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_collector_overview_help_desc_" + this.skinName));
      }
    }
  };
  CollectorEventDialog.prototype.serverMessageArrived = function (__s26param0) {
    this.isWaitingForServerMessage = false;
    if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR) || this._currentCategory != CollectorEventDialog.TAB_MAIN) {
      if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP) || this._currentCategory != CollectorEventDialog.TAB_SHOP) {
        this.updateRemainingEventTime();
        return;
      } else if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR)) {
        this.changeCategory(CollectorEventDialog.TAB_MAIN);
        return;
      } else {
        this.hide();
        return;
      }
    } else if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP)) {
      this.changeCategory(CollectorEventDialog.TAB_SHOP);
      return;
    } else {
      this.hide();
      return;
    }
  };
  CollectorEventDialog.prototype.onTickEvent = function (__s34param0) {
    this.updateRemainingEventTime();
  };
  Object.defineProperty(CollectorEventDialog.prototype, "collectorOptionInfo", {
    get: function () {
      if (this.collectorEventVO != null) {
        return this.collectorEventVO.collectInfoVO;
      } else {
        return this.collectorShopEventVO.collectInfoVO;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventDialog.prototype, "skinName", {
    get: function () {
      return (this.collectorEventVO || this.collectorShopEventVO).collectInfoVO.collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventDialog.prototype, "collectorEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventDialog.prototype, "collectorShopEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventDialog.NAME = "CollectorEvent_2";
  CollectorEventDialog.TAB_MAIN = "tab_main";
  CollectorEventDialog.TAB_SHOP = "tab_sop";
  return CollectorEventDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.CollectorEventDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CollectEventDailogShop = require("gge-module:export_CollectEventDailogShop");
var __dep_export_CollectEventDialogMain = require("gge-module:export_CollectEventDialogMain");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
