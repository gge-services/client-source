Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function OfferDescriptionRewards() {
    this._rewards = new Map();
  }
  Object.defineProperty(OfferDescriptionRewards.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.REWARD_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewards.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionRewards.prototype.parseFromObjectParam = function (__s9param0) {
    for (var __s9local0 = 0; __s9local0 < __s9param0.length; ++__s9local0) {
      this._rewards.set(__s9param0[__s9local0].name, __dep_export_CastleModel.CastleModel.privateOfferData.createOfferDescriptionRewardObject(__s9param0[__s9local0].name, __s9param0[__s9local0].params));
    }
  };
  OfferDescriptionRewards.prototype.toString = function () {
    var __s13local0 = "Reward Descriptions";
    if (this._rewards != null) {
      for (var __s13local1 = 0, __s13local2 = Array.from(this._rewards.keys()); __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined) {
          __s13local0 += "\n   " + __s13local3 + " --> " + this._rewards.get(__s13local3);
        }
      }
    }
    return __s13local0;
  };
  Object.defineProperty(OfferDescriptionRewards.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionRewards;
}();
exports.OfferDescriptionRewards = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
