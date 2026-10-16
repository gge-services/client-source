Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SActivateAttackAdvisorVO = require("gge-module:export_C2SActivateAttackAdvisorVO");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AdvisorAttackActivationComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._teaserSuffix = __s3param1;
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_costs, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("costs"));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.btn_premium.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_buyToken")));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.btn_free.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_freeToken")));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.btn_activate.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_activateAdvisor")));
    if (__s3local0.disp.txt_time) {
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("generic_timer"))).autoFitToBounds = true;
    }
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_premium, __s3local0.disp.btn_free, __s3local0.disp.btn_activate], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s3local1 = {
      page: "promos",
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_ADVISOR_ACTIVATION
    };
    var __s3local2 = {
      page: "eventoffers",
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_ADVISOR_ACTIVATION
    };
    __dep_export_CastleModel.CastleModel.userData.splitRunData.handleHCShopABTestPayload(__s3local1);
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(__s3local0.disp.btn_premium, "btn_webshop", __s3local2);
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(__s3local0.disp.btn_free, "btn_webshop", __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackActivationComponent, __s1param0);
  AdvisorAttackActivationComponent.prototype.show = function (__s6param0) {
    this._advisorType = __s6param0;
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.disp.mc_teaser);
    var __s6local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTeaserFileName(this._advisorType);
    var __s6local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s6local0 + this._teaserSuffix, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s6local0), null, 0, false);
    this.disp.mc_teaser.addChild(__s6local1);
    var __s6local2 = this.advisorActivationInfoVO;
    var __s6local3 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s6local2.advisorActivationCurrencyId);
    var __s6local4 = __s6local3 > 0;
    var __s6local5 = __s6local2.isAdvisorActivationFree || __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.isFreeBaronAdvisorTokenOffer(this._advisorType);
    var __s6local6 = !__s6local5 && !__s6local4;
    this.disp.btn_premium.visible = __s6local6;
    this.disp.btn_free.visible = !__s6local4 && __s6local5;
    this.disp.btn_activate.visible = __s6local4;
    if (this.disp.txt_title) {
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s6local6 ? "title_advisor_buyToken" : __s6local4 ? "title_advisor_activate" : "title_advisor_freeToken")));
    }
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.descriptionTextID));
    var __s6local7 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_currency).addIconMc(this.disp.mc_currency);
    var __s6local8 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
    __s6local8.tooltip.useAmount = false;
    var __s6local9 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__s6local2.advisorActivationCurrencyId, __s6local3);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s6local7, __s6local9, __s6local8);
    var __s6local10 = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_currency, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [1, __s6local3]));
    if (this._teaserSuffix == AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE_SMALL) {
      __s6local10.color = __s6local4 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      __s6local10.color = __s6local4 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT : "#F86D6D";
    }
    var __s6local11 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getEventVOByAdvisorType(this._advisorType) != null;
    if (this.disp.mc_time) {
      this.disp.mc_time.visible = __s6local11;
    }
    if (this.disp.txt_time) {
      this.disp.txt_time.visible = __s6local11;
    }
    if (this.disp.txt_time_copy) {
      this.disp.txt_time_copy.visible = __s6local11;
    }
    this.onShow();
  };
  Object.defineProperty(AdvisorAttackActivationComponent.prototype, "descriptionTextID", {
    get: function () {
      return "intro_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this._advisorType);
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackActivationComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AdvisorAttackActivationComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AdvisorAttackActivationComponent.prototype.onCurrenciesUpdated = function (__s20param0) {
    this.show(this._advisorType);
  };
  AdvisorAttackActivationComponent.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    switch (__s22param0.target) {
      case this.disp.btn_activate:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SActivateAttackAdvisorVO.C2SActivateAttackAdvisorVO(this._advisorType));
    }
  };
  AdvisorAttackActivationComponent.prototype.onTimerUpdate = function (__s25param0) {
    var __s25local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getEventVOByAdvisorType(this._advisorType);
    if (__s25local0) {
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_time_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s25local0.remainingEventTimeInSeconds)));
    }
  };
  Object.defineProperty(AdvisorAttackActivationComponent.prototype, "advisorActivationInfoVO", {
    get: function () {
      return __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorActivationInfo(this._advisorType);
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE = "_Activate";
  AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE_SMALL = "_ActivateSmall";
  return AdvisorAttackActivationComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AdvisorAttackActivationComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
