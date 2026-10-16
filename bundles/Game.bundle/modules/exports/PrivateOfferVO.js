Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PrivateOfferVO() {
    this._id = 0;
    this._endTimestamp = 0;
    this._statusEndTimeStamp = 0;
    this._hasInfiniteTime = false;
    this._descriptions = [];
    this._shouldRequestStatusCheck = false;
    this._isTimeDisplayedInPercentage = false;
    this._isInvitationOffer = false;
    this._startTimestamp = 0;
    this._duration = 0;
    this._isOneTimeOffer = false;
  }
  PrivateOfferVO.prototype.dispose = function () {
    this._id = -1;
    this._questConditions = null;
    this._descriptions = null;
    this._offerState = null;
  };
  PrivateOfferVO.prototype.loadFromParamObject = function (__s7param0) {
    var __s7local0;
    var __s7local1;
    var __s7local2;
    this._id = parseInt(__s7param0.OID);
    this._offerState = __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.getEnumByStateId(parseInt(__s7param0.OS));
    this._descriptions = [];
    this._isTimeDisplayedInPercentage = false;
    if (__s7param0.RS) {
      this._endTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + parseInt(__s7param0.RS) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._hasInfiniteTime = false;
    } else {
      this._endTimestamp = -1;
      this._hasInfiniteTime = true;
    }
    if (__s7param0.D) {
      this._duration = parseInt(__s7param0.D);
    }
    this._startTimestamp = -1;
    this._statusEndTimeStamp = 1;
    this._shouldRequestStatusCheck = false;
    if (__s7param0.SNC) {
      this._statusEndTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + parseInt(__s7param0.SNC) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._shouldRequestStatusCheck = this._statusEndTimeStamp > 0;
    }
    if (__s7param0.OD) {
      for (var __s7local3 = 0; __s7local3 < __s7param0.OD.length; ++__s7local3) {
        __s7local2 = new Map();
        for (__s7local0 in __s7param0.OD[__s7local3]) {
          __s7local1 = __s7param0.OD[__s7local3][__s7local0];
          var __s7local4 = __dep_export_CastleModel.CastleModel.privateOfferData.createOfferDescriptionObject(__s7local0, __s7local1);
          if (__s7local4) {
            __s7local2.set(__s7local0, __s7local4);
          }
        }
        this._descriptions.push(__s7local2);
      }
    }
    if (__s7param0.QD) {
      this._questConditions = __dep_export_CastleModel.CastleModel.privateOfferData.createQuestCondition(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_CONTAINER, __s7param0.QD, __s7param0.QD.publicID, __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.getConditionLogicByName(__s7param0.QD.logic));
    }
    this.parseQuestProgress(__s7param0.PC);
    if (__s7param0.SMS) {
      this._premiumSmsVO = new __dep_export_PremiumSmsVO.PremiumSmsVO();
      this._premiumSmsVO.loadFromParamObject(__s7param0.SMS);
    }
    this.checkTimelessData();
    this.checkOneTimeOffer();
    this.checkInvitationData();
  };
  PrivateOfferVO.prototype.checkOneTimeOffer = function () {
    var __s21local0 = __dep_exact_81dacdf05bd32292.castAs(this.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_IS_ONE_TIME_OFFER), "OfferDescriptionAdditionalIsOneTimeOffer");
    if (__s21local0) {
      this._isOneTimeOffer = __s21local0.isOneTimeOffer;
    }
  };
  PrivateOfferVO.prototype.checkTimelessData = function () {
    var __s24local0 = __dep_exact_81dacdf05bd32292.castAs(this.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_IS_TIMELESS), "OfferDescriptionAdditionalIsTimeless");
    if (__s24local0 && __s24local0.isTimeless) {
      this._startTimestamp = __dep_exact_f855840627e6e145.int(this._endTimestamp - (isNaN(this._duration) ? __s24local0.totalSeconds : this._duration) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      this._isTimeDisplayedInPercentage = true;
    }
  };
  PrivateOfferVO.prototype.checkInvitationData = function () {
    var __s27local0 = __dep_exact_81dacdf05bd32292.castAs(this.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_IS_INVITATION), "OfferDescriptionAdditionalIsInviteeConversionOffer");
    if (__s27local0 && __s27local0.isInvitation) {
      this._isInvitationOffer = true;
    }
  };
  Object.defineProperty(PrivateOfferVO.prototype, "remainingSeconds", {
    get: function () {
      return Math.max(0, (this._endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "secondsOverTime", {
    get: function () {
      return (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._endTimestamp) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "hasInfiniteTime", {
    get: function () {
      return this._hasInfiniteTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "offerState", {
    get: function () {
      return this._offerState;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.prototype.changeState = function (__s40param0) {
    this._offerState = __s40param0;
  };
  Object.defineProperty(PrivateOfferVO.prototype, "premiumSmsVO", {
    get: function () {
      return this._premiumSmsVO;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.prototype.updateDuration = function (__s44param0) {
    if (__s44param0 != -1) {
      this._endTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s44param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      this._hasInfiniteTime = false;
    } else {
      this._endTimestamp = -1;
      this._hasInfiniteTime = true;
    }
  };
  PrivateOfferVO.prototype.parseQuestProgress = function (__s48param0) {
    if (__s48param0) {
      for (var __s48local0 = 0; __s48local0 < __s48param0.length; ++__s48local0) {
        var __s48local1 = this.getQuestConditionByPublicId(__s48param0[__s48local0].name);
        if (__s48local1) {
          __s48local1.parseProgress(__s48param0[__s48local0].params);
        } else {
          __dep_exact_9e901e8e2483a22f_1.info("Questcondtion with publicID: " + __s48param0[__s48local0].name + " not found!");
        }
      }
    }
  };
  PrivateOfferVO.prototype.getOfferDescriptionByIndex = function (__s55param0) {
    if (this._descriptions && __s55param0 < this._descriptions.length && this._descriptions[__s55param0]) {
      return this._descriptions[__s55param0];
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getDescriptionByName = function (__s59param0, __s59param1 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var __s59local0 = this.getOfferDescriptionByIndex(__s59param1);
    if (__s59local0) {
      return __s59local0.get(__s59param0);
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getVisualComponentByName = function (__s63param0, __s63param1 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var __s63local0 = this.getOfferDescriptionByIndex(__s63param1);
    if (!__s63local0) {
      return null;
    }
    var __s63local1 = __dep_exact_81dacdf05bd32292.castAs(__s63local0.get(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER), "OfferDescriptionVisuals");
    if (__s63local1 && __s63local1.visuals.get(__s63param0)) {
      return __s63local1.visuals.get(__s63param0);
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getRewardComponentByName = function (__s68param0, __s68param1 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var __s68local0 = this.getOfferDescriptionByIndex(__s68param1);
    if (!__s68local0) {
      return null;
    }
    var __s68local1 = __dep_exact_81dacdf05bd32292.castAs(__s68local0.get(__dep_export_ClientConstOffer.ClientConstOffer.REWARD_COMPONENT_CONTAINER), "OfferDescriptionRewards");
    if (__s68local1 && __s68local1.rewards.get(__s68param0)) {
      return __s68local1.rewards.get(__s68param0);
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getAdditionalComponentByName = function (__s73param0, __s73param1 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var __s73local0 = this.getOfferDescriptionByIndex(__s73param1);
    if (!__s73local0) {
      return null;
    }
    var __s73local1 = __dep_exact_81dacdf05bd32292.castAs(__s73local0.get(__dep_export_ClientConstOffer.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER), "OfferDescriptionAdditionals");
    if (__s73local1) {
      var __s73local2 = __s73local1.additionals.get(__s73param0);
      if (__s73local2) {
        return __s73local2;
      }
    }
    return null;
  };
  PrivateOfferVO.prototype.getTotalRewardListFromOfferVO = function (__s78param0 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var __s78local0 = this.getOfferDescriptionByIndex(__s78param0);
    var __s78local1 = new __dep_export_CollectableList.CollectableList();
    if (__s78local0) {
      var __s78local2 = __s78local0.get(__dep_export_ClientConstOffer.ClientConstOffer.REWARD_COMPONENT_CONTAINER).rewards;
      if (__s78local2 != null) {
        for (var __s78local3 = 0, __s78local4 = Array.from(__s78local2.values()); __s78local3 < __s78local4.length; __s78local3++) {
          var __s78local5 = __s78local4[__s78local3];
          if (__s78local5 !== undefined) {
            __s78local1.addList(__s78local5.getRewardsList());
          }
        }
      }
    }
    return __s78local1;
  };
  PrivateOfferVO.prototype.getCostsForOfferAcception = function (__s85param0 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var __s85local0 = this.getOfferDescriptionByIndex(__s85param0);
    var __s85local1 = 0;
    var __s85local2 = 0;
    if (__s85local0) {
      if (__s85local0.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_C1) !== undefined) {
        __s85local1 = __dep_exact_f855840627e6e145.int(__s85local0.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_C1).costC1);
      }
      if (__s85local0.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_C2) !== undefined) {
        __s85local2 = __dep_exact_f855840627e6e145.int(__s85local0.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_C2).costC2);
      }
    }
    return __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s85local1), new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s85local2));
  };
  PrivateOfferVO.prototype.getQuestConditions = function () {
    return this._questConditions.questConditions;
  };
  PrivateOfferVO.prototype.allQuestConditionsPassed = function () {
    return this._questConditions.conditionPassed;
  };
  PrivateOfferVO.prototype.getQuestConditionByName = function (__s94param0, __s94param1 = true) {
    var __s94local0;
    for (var __s94local1 = this._questConditions; __s94local1 != null;) {
      if ((__s94local0 = __s94local1.questConditions.get(__s94param0)) || !__s94param1) {
        return __s94local0;
      }
      __s94local1 = __s94local1.questConditions.get(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_CONTAINER);
    }
    return null;
  };
  PrivateOfferVO.prototype.getQuestConditionByPublicId = function (__s99param0, __s99param1 = true) {
    for (var __s99local0 = this._questConditions; __s99local0 != null;) {
      for (var __s99local1 = 0, __s99local2 = Array.from(__s99local0.questConditions.values()); __s99local1 < __s99local2.length; __s99local1++) {
        var __s99local3 = __s99local2[__s99local1];
        if (__s99local3 !== undefined && __s99local3.publicID == __s99param0) {
          return __s99local3;
        }
      }
      __s99local0 = __s99param1 ? __s99local0.questConditions.get(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_CONTAINER) : null;
    }
    return null;
  };
  PrivateOfferVO.prototype.hasAutoAccept = function (__s106param0 = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    return this.getOfferDescriptionByIndex(__s106param0).get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_AUTO_ACCEPT) !== undefined && !!this.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_AUTO_ACCEPT).autoAccept;
  };
  PrivateOfferVO.prototype.amountOfDescriptions = function () {
    return __dep_exact_f855840627e6e145.int(this._descriptions.length);
  };
  Object.defineProperty(PrivateOfferVO.prototype, "descriptions", {
    get: function () {
      return this._descriptions;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.prototype.getPopupType = function () {
    var __s112local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_DEFAULT);
    if (this.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE) || this.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP) || this.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE)) {
      __s112local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_SALE);
    } else {
      var __s112local1 = __dep_exact_81dacdf05bd32292.castAs(this.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG), "OfferDescriptionVisualQuestDialog");
      if (__s112local1 && __s112local1.dialogName == __dep_export_CastlePrimeDayPODialog.CastlePrimeDayPODialog.NAME) {
        __s112local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY);
      }
    }
    return __s112local0;
  };
  PrivateOfferVO.prototype.traceOffer = function () {
    var __s117local0 = this.getOfferDescriptionByIndex(PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX);
    __dep_exact_9e901e8e2483a22f.debug("---- PrivateOffer ----");
    __dep_exact_9e901e8e2483a22f.debug("OfferID: " + this._id);
    __dep_exact_9e901e8e2483a22f.debug("EndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    __dep_exact_9e901e8e2483a22f.debug("OfferState: " + this._offerState.toString() + " - " + this._offerState.stateId);
    __dep_exact_9e901e8e2483a22f.debug("OfferDescription --->");
    if (__s117local0 != null) {
      for (var __s117local1 = 0, __s117local2 = Array.from(__s117local0.keys()); __s117local1 < __s117local2.length; __s117local1++) {
        var __s117local3 = __s117local2[__s117local1];
        if (__s117local3 !== undefined) {
          var __s117local4 = __s117local0.get(__s117local3);
          __dep_exact_9e901e8e2483a22f.debug("   " + __s117local3 + " --> " + __s117local4);
        }
      }
    }
    __dep_exact_9e901e8e2483a22f.debug("---- PrivateOfferEnd ----");
  };
  PrivateOfferVO.prototype.toString = function () {
    var __s123local0 = this.getOfferDescriptionByIndex(PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX);
    var __s123local1 = "---- PrivateOffer ----";
    __s123local1 += "\nOfferID: " + this._id;
    __s123local1 += "\nEndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    __s123local1 += "\nOfferState: " + (this._offerState ? this._offerState.toString() : "") + " - " + (this._offerState ? this._offerState.stateId : "");
    if (this._questConditions) {
      __s123local1 += "\nQuestConditions --->" + this._questConditions.toString();
    }
    __dep_exact_9e901e8e2483a22f.debug("OfferDescription --->");
    if (__s123local0 != null) {
      for (var __s123local2 = 0, __s123local3 = Array.from(__s123local0.keys()); __s123local2 < __s123local3.length; __s123local2++) {
        var __s123local4 = __s123local3[__s123local2];
        if (__s123local4 !== undefined) {
          __s123local1 += "\n   " + __s123local4 + " --> " + __s123local0.get(__s123local4);
        }
      }
    }
    return __s123local1 += "---- PrivateOfferEnd ----";
  };
  Object.defineProperty(PrivateOfferVO.prototype, "statusEndTimeStamp", {
    get: function () {
      return Math.max(0, (this._statusEndTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "shouldRequestStatusCheck", {
    get: function () {
      return this._shouldRequestStatusCheck;
    },
    set: function (__s134param0) {
      this._shouldRequestStatusCheck = __s134param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "isTimeDisplayedInPercentage", {
    get: function () {
      return this._isTimeDisplayedInPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "startTimestamp", {
    get: function () {
      return this._startTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "isOneTimeOffer", {
    get: function () {
      return this._isOneTimeOffer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "isInvitationOffer", {
    get: function () {
      return this._isInvitationOffer;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.__initialize_static_members = function () {
    PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX = 0;
    PrivateOfferVO.ADDITIONAL_COMPONENTS = "additionalComponents";
  };
  return PrivateOfferVO;
}();
exports.PrivateOfferVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CastlePrimeDayPODialog = require("gge-module:export_CastlePrimeDayPODialog");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_OfferQuestConditionLogicEnum = require("gge-module:export_OfferQuestConditionLogicEnum");
var __dep_export_PremiumSmsVO = require("gge-module:export_PremiumSmsVO");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
__s0local0.__initialize_static_members();
