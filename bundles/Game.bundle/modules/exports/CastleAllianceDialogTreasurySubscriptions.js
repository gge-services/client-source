Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogTreasurySubscriptions(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasurySubscriptions, __s1param0);
  CastleAllianceDialogTreasurySubscriptions.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.btn_subscription, this.disp.btn_info], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.disp.btn_info.visible = false;
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(this.disp.btn_subscription, "btn_webshop", {
      page: "subscriptions",
      route: "/offer/2",
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_ALLIANCE_SUBSCRIPTIONS_DIALOG
    });
    this.disp.btn_subscription.toolTipText = __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE.nameTextId;
    this.disp.btn_info.toolTipText = "dialog_alliance_treasury_subscription_subInfo_button_tooltip";
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onHide = function () {
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    if (this._items != null) {
      for (var __s23local0 = 0, __s23local1 = this._items; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.destroy();
        }
      }
    }
    this._items = [];
    var __s23local3 = this.getItemMc();
    __s23local3.removeChildren();
    var __s23local4 = __dep_export_CastleModel.CastleModel.subscriptionData.getPackageSeriesIds(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE);
    if (__s23local4 != null) {
      for (var __s23local5 = 0, __s23local6 = __s23local4; __s23local5 < __s23local6.length; __s23local5++) {
        var __s23local7 = __s23local6[__s23local5];
        if (__s23local7 !== undefined) {
          __s23local2 = new __dep_export_CastleAllianceDialogTreasurySubscriptionsItem.CastleAllianceDialogTreasurySubscriptionsItem(__s23local3, __s23local7);
          if (this.isShown) {
            __s23local2.onShow();
          }
          __s23local2.update();
          this._items.push(__s23local2);
        }
      }
    }
    var __s23local8 = 0;
    for (var __s23local9 = 0, __s23local10 = this._items; __s23local9 < __s23local10.length; __s23local9++) {
      (__s23local2 = __s23local10[__s23local9]).disp.y = __s23local8;
      __s23local8 += __s23local2.disp.height;
    }
    var __s23local11 = __dep_exact_f855840627e6e145.int(Math.max(0, __s23local3.height - CastleAllianceDialogTreasurySubscriptions.ITEM_MASK_HEIGHT));
    var __s23local12 = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, __s23local11, CastleAllianceDialogTreasurySubscriptions.ITEM_SCROLL_DELTA, CastleAllianceDialogTreasurySubscriptions.ITEM_SCROLL_DELTA);
    this._scrollComponent.setVisibility(__s23local11 > 0);
    this._scrollComponent.scrollToValue(__s23local12);
    this.updateSubscriberCount();
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.updateScrollPosition = function () {
    this.getItemMc().y = -this._scrollComponent.currentValue;
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.updateSubscriberCount = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_subscribers, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_treasury_subscription_subCounter_copy", [__dep_export_CastleModel.CastleModel.subscriptionData.allianceSubscriberCount, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.memberMax]));
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.updateItems = function () {
    if (this._items != null) {
      for (var __s40local0 = 0, __s40local1 = this._items; __s40local0 < __s40local1.length; __s40local0++) {
        var __s40local2 = __s40local1[__s40local0];
        if (__s40local2 !== undefined) {
          __s40local2.update();
        }
      }
    }
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.getItemMc = function () {
    return this.disp.mc_items.mc_transform;
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onClick = function (__s48param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s48param0.target)) {
      __s1param0.prototype.onClick.call(this, __s48param0);
    }
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onSubscriptionChanged = function (__s53param0) {
    this.updateItems();
    this.updateSubscriberCount();
  };
  CastleAllianceDialogTreasurySubscriptions.ITEM_MASK_HEIGHT = 299;
  CastleAllianceDialogTreasurySubscriptions.ITEM_SCROLL_DELTA = 80;
  return CastleAllianceDialogTreasurySubscriptions;
}(require("gge-module:export_ACastleAllianceDialogTreasurySublayer").ACastleAllianceDialogTreasurySublayer);
exports.CastleAllianceDialogTreasurySubscriptions = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CastleAllianceDialogTreasurySubscriptionsItem = require("gge-module:export_CastleAllianceDialogTreasurySubscriptionsItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
