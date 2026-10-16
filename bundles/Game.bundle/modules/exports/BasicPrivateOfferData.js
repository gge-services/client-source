Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_C2SOfferDurationCheckVO = require("gge-module:export_C2SOfferDurationCheckVO");
var __dep_export_C2SOfferOfferPayVO = require("gge-module:export_C2SOfferOfferPayVO");
var __dep_export_C2SOfferQuestAcceptVO = require("gge-module:export_C2SOfferQuestAcceptVO");
var __dep_export_C2SOfferStatusCheck = require("gge-module:export_C2SOfferStatusCheck");
var __dep_export_ABTest_Refresh_Event = require("gge-module:export_ABTest_Refresh_Event");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_OfferDescriptionAdditionalDictionary = require("gge-module:export_OfferDescriptionAdditionalDictionary");
var __dep_export_OfferDescriptionDictionary = require("gge-module:export_OfferDescriptionDictionary");
var __dep_export_OfferDescriptionRewardDictionary = require("gge-module:export_OfferDescriptionRewardDictionary");
var __dep_export_OfferDescriptionAdditionals = require("gge-module:export_OfferDescriptionAdditionals");
var __dep_export_OfferDescriptionAutoAccept = require("gge-module:export_OfferDescriptionAutoAccept");
var __dep_export_OfferDescriptionCostC1 = require("gge-module:export_OfferDescriptionCostC1");
var __dep_export_OfferDescriptionCostC2 = require("gge-module:export_OfferDescriptionCostC2");
var __dep_export_OfferDescriptionEuroAmount = require("gge-module:export_OfferDescriptionEuroAmount");
var __dep_export_OfferDescriptionRewards = require("gge-module:export_OfferDescriptionRewards");
var __dep_export_OfferDescriptionVisuals = require("gge-module:export_OfferDescriptionVisuals");
var __dep_export_OfferDescriptionVisualDictionary = require("gge-module:export_OfferDescriptionVisualDictionary");
var __dep_export_OfferFailedVisualExecution = require("gge-module:export_OfferFailedVisualExecution");
var __dep_export_OfferQuestConditionDictionary = require("gge-module:export_OfferQuestConditionDictionary");
var __dep_export_OfferQuestConditionContainer = require("gge-module:export_OfferQuestConditionContainer");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function (__s1param0) {
  function BasicPrivateOfferData() {
    var __s3local0 = this;
    __s3local0.offerMultiRewardChoice = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicPrivateOfferData, __s1param0);
  BasicPrivateOfferData.prototype.reset = function () {
    if (this._activeOffers != null) {
      for (var __s5local0 = 0, __s5local1 = this._activeOffers; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          this.dispatchEvent(new __dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, __s5local2));
          __s5local2.dispose();
        }
      }
    }
    this._activeOffers = [];
    this._hiddenEvents = [];
    this._failedVisualExecutions = [];
    this._offerDescriptions = new __dep_export_OfferDescriptionDictionary.OfferDescriptionDictionary();
    this._offerQuestConditions = new __dep_export_OfferQuestConditionDictionary.OfferQuestConditionDictionary();
    this._offerDescriptionRewardParameter = new __dep_export_OfferDescriptionRewardDictionary.OfferDescriptionRewardDictionary();
    this._offerDescriptionVisualParameter = new __dep_export_OfferDescriptionVisualDictionary.OfferDescriptionVisualDictionary();
    this._offerDescriptionAdditionalParameter = new __dep_export_OfferDescriptionAdditionalDictionary.OfferDescriptionAdditionalDictionary();
    this.initOfferQuestConditions();
    this.initOfferDescriptions();
  };
  BasicPrivateOfferData.prototype.executeUpdate = function (__s11param0) {
    if (this._activeOffers != null) {
      for (var __s11local0 = 0, __s11local1 = this._activeOffers; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          if (!__s11local2.hasInfiniteTime && __s11local2.remainingSeconds <= 0 && __s11local2.secondsOverTime % 5 == 0) {
            this.sendCheckDuration(__s11local2.id);
          }
          if (__s11local2.statusEndTimeStamp <= 0 && __s11local2.shouldRequestStatusCheck) {
            this.sendCheckStatus(__s11local2.id);
            __s11local2.shouldRequestStatusCheck = false;
          }
        }
      }
    }
    if (this._failedVisualExecutions != null) {
      for (var __s11local3 = 0, __s11local4 = this._failedVisualExecutions.slice(); __s11local3 < __s11local4.length; __s11local3++) {
        var __s11local5 = __s11local4[__s11local3];
        if (__s11local5 !== undefined) {
          var __s11local6 = -1;
          if (__s11local5.tries > 5) {
            __dep_exact_9e901e8e2483a22f.warn("BasicPrivateOfferData: giving up on visual execution for offer " + (__s11local5.offerVO ? __s11local5.offerVO.id : "unknown") + " after " + __s11local5.tries + " tries. The offer will not be shown.");
            __s11local6 = __dep_exact_f855840627e6e145.int(this._failedVisualExecutions.indexOf(__s11local5));
          } else if (__s11local5.visualParameter.execute(__s11local5.offerVO)) {
            __s11local6 = __dep_exact_f855840627e6e145.int(this._failedVisualExecutions.indexOf(__s11local5));
          } else {
            __s11local5.tries = __s11local5.tries + 1;
          }
          if (__s11local6 > -1) {
            this._failedVisualExecutions.splice(__s11local6, 1);
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.onKingdomSwitched = function () {
    if (this._activeOffers != null) {
      for (var __s27local0 = 0, __s27local1 = this._activeOffers; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          this.checkVisualExecution(__s27local2);
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.sendCheckStatus = function (__s33param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOfferStatusCheck.C2SOfferStatusCheck(__s33param0));
  };
  BasicPrivateOfferData.prototype.destroy = function () {
    if (this._activeOffers != null) {
      for (var __s35local0 = 0, __s35local1 = this._activeOffers; __s35local0 < __s35local1.length; __s35local0++) {
        var __s35local2 = __s35local1[__s35local0];
        if (__s35local2 !== undefined) {
          this.dispatchEvent(new __dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, __s35local2));
          __s35local2.dispose();
        }
      }
    }
    this._offerDescriptions = null;
    this._offerQuestConditions = null;
    this._offerDescriptionRewardParameter = null;
    this._offerDescriptionVisualParameter = null;
    this._offerDescriptionAdditionalParameter = null;
    this._failedVisualExecutions = null;
    this._hiddenEvents = null;
    __s1param0.prototype.destroy.call(this);
  };
  BasicPrivateOfferData.prototype.initOfferDescriptions = function () {
    this.registerOfferDescription(new __dep_export_OfferDescriptionRewards.OfferDescriptionRewards());
    this.registerOfferDescription(new __dep_export_OfferDescriptionVisuals.OfferDescriptionVisuals());
    this.registerOfferDescription(new __dep_export_OfferDescriptionAdditionals.OfferDescriptionAdditionals());
    this.registerOfferDescription(new __dep_export_OfferDescriptionCostC1.OfferDescriptionCostC1());
    this.registerOfferDescription(new __dep_export_OfferDescriptionCostC2.OfferDescriptionCostC2());
    this.registerOfferDescription(new __dep_export_OfferDescriptionAutoAccept.OfferDescriptionAutoAccept());
    this.registerOfferDescription(new __dep_export_OfferDescriptionEuroAmount.OfferDescriptionEuroAmount());
  };
  BasicPrivateOfferData.prototype.initOfferQuestConditions = function () {
    this.registerOfferQuestCondition(new __dep_export_OfferQuestConditionContainer.OfferQuestConditionContainer());
  };
  BasicPrivateOfferData.prototype.registerOfferQuestCondition = function (__s45param0) {
    __s45param0.registerOfferCondition(this._offerQuestConditions);
  };
  BasicPrivateOfferData.prototype.registerOfferDescription = function (__s47param0) {
    __s47param0.registerOfferDescription(this._offerDescriptions);
  };
  BasicPrivateOfferData.prototype.registerOfferRewardParameter = function (__s49param0) {
    __s49param0.registerRewardParameter(this._offerDescriptionRewardParameter);
  };
  BasicPrivateOfferData.prototype.registerOfferVisualParameter = function (__s51param0) {
    __s51param0.registerVisualParameter(this._offerDescriptionVisualParameter);
  };
  BasicPrivateOfferData.prototype.registerOfferAdditionalParameter = function (__s53param0) {
    __s53param0.registerRewardParameter(this._offerDescriptionAdditionalParameter);
  };
  BasicPrivateOfferData.prototype.parse_POL = function (__s55param0) {
    for (var __s55local0 = 0; __s55local0 < __s55param0.length; ++__s55local0) {
      var __s55local1 = this.getOfferById(__s55param0[__s55local0].OID);
      if (__s55local1) {
        if (__s55local1.offerState == __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.PRECONDITION) {
          __s55local1.loadFromParamObject(__s55param0[__s55local0]);
        }
        if (this.isPrimeDayPrivateOfferSmsAndInvalid(__s55local1)) {
          continue;
        }
        if (__s55local1.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.getEnumByStateId(__s55param0[__s55local0].OS)) {
          __s55local1.updateDuration(__s55param0[__s55local0].RS == null ? -1 : parseInt(__s55param0[__s55local0].RS));
          __s55local1.parseQuestProgress(__s55param0[__s55local0].PC);
          this.dispatchEvent(new __dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, __s55local1));
        } else {
          __s55local1.changeState(__dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.getEnumByStateId(__s55param0[__s55local0].OS));
          __s55local1.updateDuration(__s55param0[__s55local0].RS == null ? -1 : parseInt(__s55param0[__s55local0].RS));
          __s55local1.parseQuestProgress(__s55param0[__s55local0].PC);
          this.dispatchEvent(new __dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, __s55local1));
        }
      } else {
        __s55local1 = this.createOfferFromParams(__s55param0[__s55local0]);
        if (this.isPrimeDayPrivateOfferSmsAndInvalid(__s55local1)) {
          continue;
        }
        this._activeOffers.push(__s55local1);
        this.updateHiddenEvents();
        this.dispatchEvent(new __dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, __s55local1));
      }
      if (__dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.isFinishedState(__s55local1.offerState)) {
        var __s55local2 = __dep_exact_f855840627e6e145.int(this._activeOffers.indexOf(__s55local1));
        if (__s55local2 > -1) {
          this._activeOffers.splice(__s55local2, 1);
          this.updateHiddenEvents();
          this.dispatchEvent(new __dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, __s55local1));
        }
      }
      this.checkVisualExecution(__s55local1);
      var __s55local3 = __dep_exact_81dacdf05bd32292.castAs(__s55local1.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_AB_TEST), "OfferDescriptionAdditionalABTestDependency");
      if (__s55local3) {
        __s55local3.satisfyDependency();
        this._abTestRefreshEvent ||= new __dep_export_ABTest_Refresh_Event.ABTest_Refresh_Event(__dep_export_ABTest_Refresh_Event.ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT, null);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(this._abTestRefreshEvent);
      }
    }
  };
  BasicPrivateOfferData.prototype.isPrimeDayPrivateOfferSmsAndInvalid = function (__s69param0) {
    return __s69param0.id == 1805 && __s69param0.premiumSmsVO == null;
  };
  BasicPrivateOfferData.prototype.checkVisualExecution = function (__s71param0) {
    var __s71local0 = __dep_exact_81dacdf05bd32292.castAs(__s71param0.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER), "OfferDescriptionVisuals");
    if (__s71local0) {
      for (var __s71local1 = 0, __s71local2 = Array.from(__s71local0.visuals.values()); __s71local1 < __s71local2.length; __s71local1++) {
        var __s71local3 = __s71local2[__s71local1];
        if (__s71local3 !== undefined && __s71local3.toExecuteInState(__s71param0.offerState)) {
          if (!__s71local3.execute(__s71param0)) {
            this._failedVisualExecutions.push(new __dep_export_OfferFailedVisualExecution.OfferFailedVisualExecution(1, __s71param0, __s71local3));
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.checkedBlockedEvents = function (__s78param0) {
    var __s78local0 = __dep_exact_81dacdf05bd32292.castAs(__s78param0.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_HIDE_EVENT), "OfferDescriptionVisualHideEvent");
    if (__s78local0) {
      var __s78local1 = __s78local0.eventIDs;
      var __s78local2 = __dep_export_CastleModel.CastleModel.specialEventData.activeEvents;
      if (__s78local1 != null) {
        for (var __s78local3 = 0, __s78local4 = __s78local1; __s78local3 < __s78local4.length; __s78local3++) {
          var __s78local5 = __s78local4[__s78local3];
          if (__s78local5 !== undefined && __s78local2 != null) {
            for (var __s78local6 = 0, __s78local7 = Array.from(__s78local2.values()); __s78local6 < __s78local7.length; __s78local6++) {
              var __s78local8 = __s78local7[__s78local6];
              if (__s78local8 !== undefined && __s78local8 && __s78local8.eventId == __s78local5) {
                if (__s78local8.openWithLogin) {
                  __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [__s78local8, false]);
                }
                __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, __s78local8));
                __dep_export_CastleModel.CastleModel.specialEventData.updateEvents();
              }
            }
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.parse_ODC = function (__s89param0) {
    if (__s89param0) {
      var __s89local0 = this.getOfferById(parseInt(__s89param0.OID));
      if (__s89local0) {
        var __s89local1 = __s89param0.RS == null ? -1 : parseInt(__s89param0.RS);
        __s89local0.updateDuration(__s89local1);
      }
    }
  };
  BasicPrivateOfferData.prototype.sendOfferQuestAccept = function (__s93param0, __s93param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOfferQuestAcceptVO.C2SOfferQuestAcceptVO(__s93param0, __s93param1));
  };
  BasicPrivateOfferData.prototype.sendOfferPay = function (__s95param0, __s95param1 = 0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOfferOfferPayVO.C2SOfferOfferPayVO(__s95param0, [__s95param1]));
    this.offerMultiRewardChoice.set(__s95param0, [__s95param1]);
  };
  BasicPrivateOfferData.prototype.sendOfferPayAll = function (__s97param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOfferOfferPayVO.C2SOfferOfferPayVO(__s97param0, BasicPrivateOfferData.BUY_ALL_IDS));
    this.offerMultiRewardChoice.set(__s97param0, BasicPrivateOfferData.BUY_ALL_IDS);
  };
  BasicPrivateOfferData.prototype.sendCheckDuration = function (__s99param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOfferDurationCheckVO.C2SOfferDurationCheckVO(__s99param0));
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionObject = function (__s101param0, __s101param1) {
    var __s101local0 = this._offerDescriptions.getEntry(__s101param0);
    if (__s101local0) {
      var __s101local1 = new __s101local0();
      __s101local1.parseFromObjectParam(__s101param1);
      return __s101local1;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createQuestCondition = function (__s104param0, __s104param1, __s104param2, __s104param3 = null) {
    var __s104local0 = this._offerQuestConditions.getEntry(__s104param0);
    if (__s104local0) {
      var __s104local1 = new __s104local0();
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s104local1, "OfferQuestConditionContainer")) {
        __s104local1.setLogic(__s104param3);
      }
      __s104local1.parseFromObjectParam(__s104param0, __s104param1, __s104param2);
      return __s104local1;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionRewardObject = function (__s108param0, __s108param1) {
    var __s108local0 = this._offerDescriptionRewardParameter.getEntry(__s108param0);
    if (__s108local0) {
      var __s108local1 = new __s108local0();
      __s108local1.parseFromObjectParam(__s108param1);
      return __s108local1;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionVisualObject = function (__s111param0, __s111param1) {
    var __s111local0 = this._offerDescriptionVisualParameter.getEntry(__s111param0);
    if (!__s111local0) {
      console.error("Unknown visualComponent name \"" + __s111param0 + "\" - skipping this visual.");
      return null;
    }
    var __s111local1 = new __s111local0();
    __s111local1.parseFromObjectParam(__s111param1);
    return __s111local1;
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionAdditionalObject = function (__s114param0, __s114param1) {
    var __s114local0 = this._offerDescriptionAdditionalParameter.getEntry(__s114param0);
    if (__s114local0) {
      var __s114local1 = new __s114local0();
      __s114local1.parseFromObjectParam(__s114param1);
      return __s114local1;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createOfferFromParams = function (__s117param0) {
    var __s117local0 = new __dep_export_PrivateOfferVO.PrivateOfferVO();
    __s117local0.loadFromParamObject(__s117param0);
    return __s117local0;
  };
  BasicPrivateOfferData.prototype.getOfferById = function (__s119param0) {
    if (this._activeOffers != null) {
      for (var __s119local0 = 0, __s119local1 = this._activeOffers; __s119local0 < __s119local1.length; __s119local0++) {
        var __s119local2 = __s119local1[__s119local0];
        if (__s119local2 !== undefined && __s119param0 == __s119local2.id) {
          return __s119local2;
        }
      }
    }
    return null;
  };
  BasicPrivateOfferData.prototype.getActivePrivateOffersByDescription = function (__s125param0) {
    var __s125local0 = [];
    if (this._activeOffers != null) {
      for (var __s125local1 = 0, __s125local2 = this._activeOffers; __s125local1 < __s125local2.length; __s125local1++) {
        var __s125local3 = __s125local2[__s125local1];
        if (__s125local3 !== undefined) {
          if (__s125local3.getDescriptionByName(__s125param0) && __s125local3.offerState == __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING) {
            __s125local0.push(__s125local3);
          }
        }
      }
    }
    return __s125local0;
  };
  BasicPrivateOfferData.prototype.getPrivateOffersWithVisualParamter = function (__s132param0) {
    var __s132local0 = [];
    if (this._activeOffers != null) {
      for (var __s132local1 = 0, __s132local2 = this._activeOffers; __s132local1 < __s132local2.length; __s132local1++) {
        var __s132local3 = __s132local2[__s132local1];
        if (__s132local3 !== undefined) {
          var __s132local4 = __dep_exact_81dacdf05bd32292.castAs(__s132local3.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER), "OfferDescriptionVisuals");
          if (__s132local4 && __s132local4.visuals.get(__s132param0) !== undefined) {
            __s132local0.push(__s132local3);
          }
        }
      }
    }
    return __s132local0;
  };
  BasicPrivateOfferData.prototype.updateHiddenEvents = function () {
    this._hiddenEvents = [];
    for (var __s139local0 = this._activeOffers.length, __s139local1 = 0; __s139local1 < __s139local0; ++__s139local1) {
      var __s139local2 = __dep_exact_81dacdf05bd32292.castAs(this._activeOffers[__s139local1].getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_HIDE_EVENT), "OfferDescriptionVisualHideEvent");
      if (__s139local2) {
        var __s139local3 = __s139local2.eventIDs;
        if (__s139local3 != null) {
          for (var __s139local4 = 0, __s139local5 = __s139local3; __s139local4 < __s139local5.length; __s139local4++) {
            var __s139local6 = __s139local5[__s139local4];
            if (__s139local6 !== undefined && this._hiddenEvents.indexOf(__s139local6) == -1) {
              this._hiddenEvents.push(__s139local6);
            }
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.getListOfHiddenEvents = function () {
    return this._hiddenEvents;
  };
  BasicPrivateOfferData.prototype.isHiddenEvent = function (__s150param0) {
    return this._hiddenEvents.indexOf(__s150param0) >= 0;
  };
  BasicPrivateOfferData.BUY_ALL_IDS = [0, 1, 2];
  return BasicPrivateOfferData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.BasicPrivateOfferData = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_PrivateOfferVO = require("gge-module:export_PrivateOfferVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IUpdatable");
