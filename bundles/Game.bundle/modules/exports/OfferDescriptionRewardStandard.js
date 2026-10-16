Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionRewardStandard() {}
  Object.defineProperty(OfferDescriptionRewardStandard.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_REWARD_EMPIRE_STANDARD;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewardStandard.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionRewardStandard.prototype.parseFromObjectParam = function (__s9param0) {
    this._rewardList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamObject.createList(__s9param0);
    this._overload = __s9param0.OL == 1;
  };
  OfferDescriptionRewardStandard.prototype.getRewardsList = function () {
    return this._rewardList;
  };
  OfferDescriptionRewardStandard.prototype.getOverload = function () {
    return this._overload;
  };
  return OfferDescriptionRewardStandard;
}();
exports.OfferDescriptionRewardStandard = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionRewardParameter");
