Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceQuestTicketComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._eventID = 0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0._itxt_attempts = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_attempts, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, __dep_export_CastleModel.CastleModel.allianceQuestData.getMaxAttempts()]));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceQuestTicketComponent, __s1param0);
  AllianceQuestTicketComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, this.eventPackageVO && this.eventPackageVO.remainingStock > 0);
    this.onCurrenciesUpdated();
  };
  AllianceQuestTicketComponent.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.disp.btn_buy:
          this.openBuyDialog();
      }
    }
  };
  AllianceQuestTicketComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  AllianceQuestTicketComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  AllianceQuestTicketComponent.prototype.onCurrenciesUpdated = function (__s15param0 = null) {
    var __s15local0 = this.questTicketsAmount;
    this._itxt_attempts.textContentVO.textReplacements = [__s15local0, __dep_export_CastleModel.CastleModel.allianceQuestData.getMaxAttempts()];
    this._itxt_attempts.color = __s15local0 > 0 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT : __dep_export_ClientConstColor.ClientConstColor.MODERN_RED;
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.disp.btn_buy)) {
      this.disp.btn_buy.toolTipText = __s15local0 == 0 ? this.eventVO.getEventSpecificTextID("popup_ame_quest_ticket_counter_tooltip") : null;
    } else {
      this.disp.btn_buy.toolTipText = "popup_ame_quest_ticket_counter_limit_tooltip";
    }
    var __s15local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.icon_questTicket).addIconMc(this.disp.icon_questTicket);
    var __s15local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(25, 30));
    __s15local2.tooltip.useAmount = false;
    var __s15local3 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, this.eventVO.ticketCurrencyID);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s15local1, __s15local3, __s15local2);
  };
  AllianceQuestTicketComponent.prototype.openBuyDialog = function () {
    var __s19local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s19local0.eventPackageVO = this.eventPackageVO;
    __s19local0.specialEventVO = this.eventVO;
    __s19local0.buyType = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_EVENT);
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s19local0);
  };
  Object.defineProperty(AllianceQuestTicketComponent.prototype, "questTicketsAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.ticketCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestTicketComponent.prototype, "eventPackageVO", {
    get: function () {
      return this.eventVO.eventPackagesVO.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, 0)[0];
    },
    enumerable: true,
    configurable: true
  });
  AllianceQuestTicketComponent.prototype.setEventID = function (__s25param0) {
    this._eventID = __s25param0;
  };
  Object.defineProperty(AllianceQuestTicketComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceQuestTicketComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AllianceQuestTicketComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
