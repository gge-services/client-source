Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function PrivateOfferStateEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._stateId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._stateId = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateOfferStateEnum, __s1param0);
  PrivateOfferStateEnum.getEnumByStateId = function (__s5param0) {
    return this.getByProperty(PrivateOfferStateEnum, "stateId", __s5param0, null);
  };
  PrivateOfferStateEnum.isFinishedState = function (__s7param0) {
    return !__s7param0 || PrivateOfferStateEnum.isFailedState(__s7param0) || __s7param0 === PrivateOfferStateEnum.OFFER_SUCCEEDED || __s7param0 === PrivateOfferStateEnum.ITERATION_SUCCEEDED;
  };
  PrivateOfferStateEnum.isFailedState = function (__s9param0) {
    switch (__s9param0) {
      case PrivateOfferStateEnum.PRECONDITION_FAILED:
      case PrivateOfferStateEnum.QUEST_REJECTED:
      case PrivateOfferStateEnum.QUEST_FAILED:
      case PrivateOfferStateEnum.QUEST_EXPIRED:
      case PrivateOfferStateEnum.OFFER_REJECTED:
      case PrivateOfferStateEnum.OFFER_FAILED:
      case PrivateOfferStateEnum.OFFER_EXPIRED:
      case PrivateOfferStateEnum.CANCELED_BY_ABTEST:
      case PrivateOfferStateEnum.OFFER_CANCELED:
      case PrivateOfferStateEnum.ITERATION_FAILED:
        return true;
      default:
        return false;
    }
  };
  PrivateOfferStateEnum.isVisualFailedState = function (__s12param0) {
    switch (__s12param0) {
      case PrivateOfferStateEnum.QUEST_REJECTED:
      case PrivateOfferStateEnum.QUEST_FAILED:
      case PrivateOfferStateEnum.QUEST_EXPIRED:
      case PrivateOfferStateEnum.OFFER_REJECTED:
      case PrivateOfferStateEnum.OFFER_FAILED:
      case PrivateOfferStateEnum.OFFER_CANCELED:
        return true;
      default:
        return false;
    }
  };
  Object.defineProperty(PrivateOfferStateEnum.prototype, "stateId", {
    get: function () {
      return this._stateId;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferStateEnum.__initialize_static_members = function () {
    PrivateOfferStateEnum.PRECONDITION = new PrivateOfferStateEnum("precondition", 10);
    PrivateOfferStateEnum.PRECONDITION_FAILED = new PrivateOfferStateEnum("preconditionFailed", 410);
    PrivateOfferStateEnum.QUEST_PENDING = new PrivateOfferStateEnum("questPending", 21);
    PrivateOfferStateEnum.QUEST_STARTED = new PrivateOfferStateEnum("questStarted", 22);
    PrivateOfferStateEnum.OFFER_READY = new PrivateOfferStateEnum("offerReady", 40);
    PrivateOfferStateEnum.OFFER_PENDING = new PrivateOfferStateEnum("offerPending", 41);
    PrivateOfferStateEnum.QUEST_REJECTED = new PrivateOfferStateEnum("questRejected", 421);
    PrivateOfferStateEnum.QUEST_FAILED = new PrivateOfferStateEnum("questFailed", 422);
    PrivateOfferStateEnum.QUEST_EXPIRED = new PrivateOfferStateEnum("questExpired", 423);
    PrivateOfferStateEnum.OFFER_REJECTED = new PrivateOfferStateEnum("offerRejected", 441);
    PrivateOfferStateEnum.OFFER_FAILED = new PrivateOfferStateEnum("offerFailed", 442);
    PrivateOfferStateEnum.OFFER_EXPIRED = new PrivateOfferStateEnum("offerExpired", 443);
    PrivateOfferStateEnum.OFFER_ACCEPTED = new PrivateOfferStateEnum("offerAccepted", 240);
    PrivateOfferStateEnum.OFFER_SUCCEEDED = new PrivateOfferStateEnum("offerSucceeded", 200);
    PrivateOfferStateEnum.OFFER_CANCELED = new PrivateOfferStateEnum("offerCanceled", 400);
    PrivateOfferStateEnum.CANCELED_BY_ABTEST = new PrivateOfferStateEnum("canceledByABTest", 401);
    PrivateOfferStateEnum.ITERATION_SUCCEEDED = new PrivateOfferStateEnum("iterationSucceeded", 50);
    PrivateOfferStateEnum.ITERATION_FAILED = new PrivateOfferStateEnum("iterationFailed", 51);
    PrivateOfferStateEnum.REWARD_FAILED = new PrivateOfferStateEnum("rewardFailed", 444);
  };
  return PrivateOfferStateEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.PrivateOfferStateEnum = __s0local0;
__s0local0.__initialize_static_members();
