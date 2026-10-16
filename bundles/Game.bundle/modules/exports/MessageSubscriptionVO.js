Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ModernGenericRewardDialog = require("gge-module:export_ModernGenericRewardDialog");
var __dep_export_ModernGenericRewardDialogProperties = require("gge-module:export_ModernGenericRewardDialogProperties");
var __dep_export_SubscriptionConfirmationDialog = require("gge-module:export_SubscriptionConfirmationDialog");
var __dep_export_SubscriptionExpiredDialog = require("gge-module:export_SubscriptionExpiredDialog");
var __dep_export_SubscriptionMessageDialogProperties = require("gge-module:export_SubscriptionMessageDialogProperties");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageSubscriptionVO() {
    var __s3local0 = this;
    __s3local0._subType = -1;
    __s3local0._subscriptionTypeId = -1;
    __s3local0._allianceSubscribersAtThatTime = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageSubscriptionVO, __s1param0);
  MessageSubscriptionVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("#");
    this._subType = __dep_exact_f855840627e6e145.int(__s5local0[0]);
    __s5local0 = __s5local0[1].split("+");
    this._subscriptionTypeId = __dep_exact_f855840627e6e145.int(__s5local0[0]);
    switch (this._subType) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_ENABLED:
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_EXPIRED:
        if (__s5local0.length > 1) {
          this._allianceSubscribersAtThatTime = __dep_exact_f855840627e6e145.int(__s5local0[1]);
        }
    }
  };
  MessageSubscriptionVO.prototype.parseSubject = function () {
    switch (this._subType) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_ENABLED:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_subscriptionConfirmation_header");
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_EXPIRED:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_subscriptionExpired_header");
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_REWARD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_subscription_monthlyGift_title");
    }
    return "";
  };
  MessageSubscriptionVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageSubscriptionVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subType) {
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_ENABLED:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_SubscriptionConfirmationDialog.SubscriptionConfirmationDialog, new __dep_export_SubscriptionMessageDialogProperties.SubscriptionMessageDialogProperties(this));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_EXPIRED:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_SubscriptionExpiredDialog.SubscriptionExpiredDialog, new __dep_export_SubscriptionMessageDialogProperties.SubscriptionMessageDialogProperties(this));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUBSCRIPTION_REWARD:
          var __s14local0 = __dep_export_CastleModel.CastleModel.subscriptionData.getSubscriptionRewardsByTypeID(this.subscriptionTypeId);
          var __s14local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_subscription_monthlyGift_singleSubscription_desc", [__dep_exact_92d05af59ee2ff30.Localize.text(this.getPackageType().nameTextId)]);
          var __s14local2 = new __dep_export_ModernGenericRewardDialogProperties.ModernGenericRewardDialogProperties("dialog_subscription_monthlyGift_title", __s14local1, __s14local0);
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_ModernGenericRewardDialog.ModernGenericRewardDialog, __s14local2);
      }
      return null;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageSubscriptionVO.prototype.getPackageType = function () {
    return __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.getTypeByServerId(this.subscriptionTypeId);
  };
  Object.defineProperty(MessageSubscriptionVO.prototype, "subscriptionTypeId", {
    get: function () {
      return this._subscriptionTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSubscriptionVO.prototype, "allianceSubscribersAtThatTime", {
    get: function () {
      return this._allianceSubscribersAtThatTime;
    },
    enumerable: true,
    configurable: true
  });
  return MessageSubscriptionVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageSubscriptionVO = __s0local0;
