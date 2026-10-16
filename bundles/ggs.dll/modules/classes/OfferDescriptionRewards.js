Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function OfferDescriptionRewards(__s3param0) {
    this._model = __s3param0;
  }
  Object.defineProperty(OfferDescriptionRewards.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.REWARD_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewards.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionRewards.prototype.parseFromObjectParam = function (__s9param0) {
    this.parseListOfRewards(__s9param0);
  };
  OfferDescriptionRewards.prototype.toString = function () {
    var __s11local0 = "Reward Descriptions";
    for (var __s11local1 = 0, __s11local2 = Array.from(this._rewards.keys()); __s11local1 < __s11local2.length; __s11local1++) {
      var __s11local3 = __s11local2[__s11local1];
      __s11local0 += "\n   " + __s11local3 + " --> " + this._rewards.get(__s11local3);
    }
    return __s11local0;
  };
  Object.defineProperty(OfferDescriptionRewards.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewards.prototype.parseListOfRewards = function (__s17param0) {
    this._rewards = new Map();
    for (var __s17local0 = 0; __s17local0 < __s17param0.length; ++__s17local0) {
      this._rewards.set(__s17param0[__s17local0].name, this._model.createOfferDescriptionRewardObject(__s17param0[__s17local0].name, __s17param0[__s17local0].params));
    }
  };
  OfferDescriptionRewards.prototype.dispose = function () {
    if (this._rewards) {
      for (var __s21local0 = 0, __s21local1 = Array.from(this._rewards.values()); __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (typeof __s21local2.dispose == "function") {
          __s21local2.dispose();
        }
      }
      this._rewards = null;
    }
    this._model = null;
  };
  return OfferDescriptionRewards;
}();
exports.OfferDescriptionRewards = __s0local0;
