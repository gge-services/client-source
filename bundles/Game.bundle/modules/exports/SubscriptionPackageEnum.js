Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function SubscriptionPackageEnum(__s3param0, __s3param1, __s3param2, __s3param3 = "") {
    var __s3local0 = this;
    __s3local0._serverId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._serverId = __s3param1;
    __s3local0._shopId = __s3param2;
    __s3local0._nameTextId = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SubscriptionPackageEnum, __s1param0);
  SubscriptionPackageEnum.getTypeByServerId = function (__s5param0) {
    return this.getByProperty(SubscriptionPackageEnum, "serverId", __s5param0, SubscriptionPackageEnum.UNKNOWN);
  };
  SubscriptionPackageEnum.getTypeByShopId = function (__s7param0) {
    return this.getByProperty(SubscriptionPackageEnum, "shopId", __s7param0, SubscriptionPackageEnum.UNKNOWN);
  };
  Object.defineProperty(SubscriptionPackageEnum.prototype, "serverId", {
    get: function () {
      return this._serverId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageEnum.prototype, "shopId", {
    get: function () {
      return this._shopId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageEnum.prototype, "nameTextId", {
    get: function () {
      return this._nameTextId;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionPackageEnum.__initialize_static_members = function () {
    SubscriptionPackageEnum.UNKNOWN = new SubscriptionPackageEnum("unknown", -1, "");
    SubscriptionPackageEnum.PLAYER = new SubscriptionPackageEnum("player", __dep_exact_26a421b704832cff.SubscriptionConst.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID, "individualSubscription", "dialog_subscriptionOverview_singleSub_1_title");
    SubscriptionPackageEnum.PREMIUM = new SubscriptionPackageEnum("premium", __dep_exact_26a421b704832cff.SubscriptionConst.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID, "premiumIndividualSubscription", "dialog_subscriptionOverview_singleSub_2_title");
    SubscriptionPackageEnum.ALLIANCE = new SubscriptionPackageEnum("alliance", __dep_exact_26a421b704832cff.SubscriptionConst.ALLIANCE_SUBSCRIPTION_PACKAGE_TYPE_ID, "allianceSubscription", "dialog_subscriptionOverview_allianceSub_1_title");
    SubscriptionPackageEnum.BARON_ADVISOR = new SubscriptionPackageEnum("baronAdvisor", __dep_exact_26a421b704832cff.SubscriptionConst.PLAYER_SUBSCRIPTION_BARON_ADVISOR_PACKAGE_TYPE_ID, "baronAdvisorSubscription", "title_advisor_baron");
  };
  return SubscriptionPackageEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.SubscriptionPackageEnum = __s0local0;
__s0local0.__initialize_static_members();
