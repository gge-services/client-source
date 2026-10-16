Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function BasicPrivateOfferVO() {
    this._hasRequestedNewTime = false;
  }
  BasicPrivateOfferVO.prototype.dispose = function () {
    this._id = -1;
    this._questConditions.dispose();
    this._questConditions = null;
    this._description = null;
    this._offerState = null;
  };
  BasicPrivateOfferVO.prototype.loadFromParamObject = function (__s7param0, __s7param1, __s7param2 = -1, __s7param3 = true, __s7param4 = null, __s7param5 = null) {
    if (__s7param0 > 0) {
      this._id = __s7param0;
    }
    if (__s7param1) {
      this._offerState = __s7param1;
    }
    this._endTimestamp = __s7param2;
    this._hasInfiniteTime = __s7param3;
    this._description = __s7param4 || new Map();
    this._questConditions = __s7param5;
  };
  Object.defineProperty(BasicPrivateOfferVO.prototype, "remainingSeconds", {
    get: function () {
      return Math.max(0, (this._endTimestamp - Date.now()) * 0.001);
    },
    enumerable: true,
    configurable: true
  });
  BasicPrivateOfferVO.prototype.getRemainingTimeInMS = function () {
    return Math.max(0, this._endTimestamp - Date.now());
  };
  Object.defineProperty(BasicPrivateOfferVO.prototype, "secondsOverTime", {
    get: function () {
      return (Date.now() - this._endTimestamp) * 0.001;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPrivateOfferVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPrivateOfferVO.prototype, "hasInfiniteTime", {
    get: function () {
      return this._hasInfiniteTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPrivateOfferVO.prototype, "offerState", {
    get: function () {
      return this._offerState;
    },
    enumerable: true,
    configurable: true
  });
  BasicPrivateOfferVO.prototype.changeState = function (__s23param0) {
    this._offerState = __s23param0;
  };
  BasicPrivateOfferVO.prototype.updateDuration = function (__s25param0) {
    if (__s25param0 != -1) {
      this._endTimestamp = Date.now() + __s25param0 * 1000;
      this._hasInfiniteTime = false;
    } else {
      this._endTimestamp = -1;
      this._hasInfiniteTime = true;
    }
    this._hasRequestedNewTime = false;
  };
  BasicPrivateOfferVO.prototype.getDescriptionByName = function (__s29param0) {
    return this._description.get(__s29param0);
  };
  BasicPrivateOfferVO.prototype.hasDescription = function (__s31param0) {
    return this._description.get(__s31param0) !== undefined;
  };
  BasicPrivateOfferVO.prototype.getVisualComponentByName = function (__s33param0) {
    var __s33local0 = this._description.get(__dep_class_Constants_Offer.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
    if (__s33local0 && __s33local0.visuals[__s33param0]) {
      return __s33local0.visuals[__s33param0];
    } else {
      return null;
    }
  };
  BasicPrivateOfferVO.prototype.getRewardComponentByName = function (__s37param0) {
    var __s37local0 = this._description.get(__dep_class_Constants_Offer.Constants_Offer.REWARD_COMPONENT_CONTAINER);
    if (__s37local0 && __s37local0.rewards[__s37param0]) {
      return __s37local0.rewards[__s37param0];
    } else {
      return null;
    }
  };
  BasicPrivateOfferVO.prototype.getQuestConditions = function () {
    return this._questConditions.questConditions;
  };
  BasicPrivateOfferVO.prototype.allQuestConditionsPassed = function () {
    return this._questConditions.conditionPassed;
  };
  BasicPrivateOfferVO.prototype.getQuestConditionByName = function (__s45param0) {
    return this._questConditions.questConditions[__s45param0];
  };
  BasicPrivateOfferVO.prototype.hasAutoAccept = function () {
    return this._description.get(__dep_class_Constants_Offer.Constants_Offer.OFFER_AUTO_ACCEPT) !== undefined && this.getDescriptionByName(__dep_class_Constants_Offer.Constants_Offer.OFFER_AUTO_ACCEPT).autoAccept;
  };
  BasicPrivateOfferVO.prototype.tracefOffer = function () {
    __dep_exact_9036b0ddd67c3c6e.debug("---- PrivateOffer ----");
    __dep_exact_9036b0ddd67c3c6e.debug("OfferID: " + this._id);
    __dep_exact_9036b0ddd67c3c6e.debug("EndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - Date.now()) * 0.001);
    __dep_exact_9036b0ddd67c3c6e.debug("OfferState: " + this._offerState.toString());
    __dep_exact_9036b0ddd67c3c6e.debug("QuestConditions --->" + this._questConditions.toString());
    __dep_exact_9036b0ddd67c3c6e.debug("OfferDescription --->");
    for (var __s49local0 = 0, __s49local1 = Array.from(this._description.keys()); __s49local0 < __s49local1.length; __s49local0++) {
      var __s49local2 = __s49local1[__s49local0];
      var __s49local3 = this._description.get(__s49local2);
      __dep_exact_9036b0ddd67c3c6e.debug("   " + __s49local2 + " --> " + __s49local3);
    }
    __dep_exact_9036b0ddd67c3c6e.debug("---- PrivateOfferEnd ----");
  };
  BasicPrivateOfferVO.prototype.toString = function () {
    var __s53local0 = "---- PrivateOffer ----";
    __s53local0 += "\nOfferID: " + this._id;
    __s53local0 += "\nEndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - Date.now()) * 0.001;
    __s53local0 += "\nOfferState: " + this._offerState.toString();
    if (this._questConditions) {
      __s53local0 += "\nQuestConditions --->" + this._questConditions.toString();
    }
    __dep_exact_39c566239c224ca4.info("OfferDescription --->");
    for (var __s53local1 = 0, __s53local2 = Array.from(this._description.keys()); __s53local1 < __s53local2.length; __s53local1++) {
      var __s53local3 = __s53local2[__s53local1];
      __s53local0 += "\n   " + __s53local3 + " --> " + this._description.get(__s53local3);
    }
    return __s53local0 += "---- PrivateOfferEnd ----";
  };
  Object.defineProperty(BasicPrivateOfferVO.prototype, "hasRequestedNewTime", {
    get: function () {
      return this._hasRequestedNewTime;
    },
    set: function (__s60param0) {
      this._hasRequestedNewTime = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  return BasicPrivateOfferVO;
}();
exports.BasicPrivateOfferVO = __s0local0;
