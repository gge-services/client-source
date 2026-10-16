Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __dep_class_PrivateOfferDataEvent = require("gge-module:class_PrivateOfferDataEvent");
var __dep_class_OfferDescriptionVisualQuestAcceptDialog = require("gge-module:class_OfferDescriptionVisualQuestAcceptDialog");
var __dep_class_OfferDescriptionVisualIsoObject = require("gge-module:class_OfferDescriptionVisualIsoObject");
var __dep_class_BasicOfferDescriptionVisualFactory = require("gge-module:class_BasicOfferDescriptionVisualFactory");
var __dep_class_BasicOfferRewardFactory = require("gge-module:class_BasicOfferRewardFactory");
var __dep_class_BasicOfferQuestConditionFactory = require("gge-module:class_BasicOfferQuestConditionFactory");
var __dep_class_BasicOfferDescriptionFactory = require("gge-module:class_BasicOfferDescriptionFactory");
var __dep_class_BasicPrivateOfferVOFactory = require("gge-module:class_BasicPrivateOfferVOFactory");
var __dep_class_BasicData = require("gge-module:class_BasicData");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = function (__s1param0) {
  function BasicPrivateOfferData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._activeOffers = [];
    __s3local0._failedVisualExecutions = [];
    __s3local0.initOfferFactory();
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicPrivateOfferData, __s1param0);
  BasicPrivateOfferData.prototype.initOfferFactory = function () {
    this._offerFactory = new __dep_class_BasicPrivateOfferVOFactory.BasicPrivateOfferVOFactory(this);
    this._offerDescriptionFactory = new __dep_class_BasicOfferDescriptionFactory.BasicOfferDescriptionFactory(this);
    this._offerQuestConditionFactory = new __dep_class_BasicOfferQuestConditionFactory.BasicOfferQuestConditionFactory(this);
    this._offerRewardFactory = new __dep_class_BasicOfferRewardFactory.BasicOfferRewardFactory(this);
    this._offerDescriptionVisualFactory = new __dep_class_BasicOfferDescriptionVisualFactory.BasicOfferDescriptionVisualFactory(this);
  };
  BasicPrivateOfferData.prototype.executeUpdate = function (__s7param0) {
    if (this._activeOffers.length > 0) {
      for (var __s7local0 = 0, __s7local1 = this._activeOffers; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (!__s7local2.hasInfiniteTime && !__s7local2.hasRequestedNewTime && __s7local2.remainingSeconds <= 0 && __s7local2.secondsOverTime % 5 == 0) {
          this.sendCheckDuration(__s7local2.id);
          __s7local2.hasRequestedNewTime = true;
        }
      }
    }
    if (this._failedVisualExecutions.length > 0) {
      var __s7local3 = -1;
      for (var __s7local4 = 0, __s7local5 = this._failedVisualExecutions; __s7local4 < __s7local5.length; __s7local4++) {
        var __s7local6 = __s7local5[__s7local4];
        if (__s7local6.tries > 5) {
          __s7local3 = this._failedVisualExecutions.indexOf(__s7local6);
        } else if (__s7local6.visualParameter.execute(__s7local6.offerVO)) {
          this._failedVisualExecutions.splice(this._failedVisualExecutions.indexOf(__s7local6), 1);
        } else {
          __s7local6.tries = __s7local6.tries + 1;
        }
      }
      if (__s7local3 > -1) {
        this._failedVisualExecutions.splice(__s7local3, 1);
      }
    }
  };
  BasicPrivateOfferData.prototype.onStartCycleReady = function () {
    if (this._activeOffers.length > 0) {
      var __s20local0 = function (__s23param0) {
        var __s23local0 = __s23param0.getDescriptionByName(__dep_class_Constants_Offer.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
        if (__s23local0) {
          __s23local0.visuals.forEach(function (__s26param0, __s26param1, __s26param2) {
            if (__s26param0 instanceof __dep_class_OfferDescriptionVisualIsoObject.OfferDescriptionVisualIsoObject) {
              __dep_exact_39c566239c224ca4.info("got a " + __s26param0.name + " here");
            } else if (__s26param0 instanceof __dep_class_OfferDescriptionVisualQuestAcceptDialog.OfferDescriptionVisualQuestAcceptDialog && __s26param0.autoShow) {
              __s26param0.execute(__s23param0);
            }
          });
        }
      };
      for (var __s20local1 = 0, __s20local2 = this._activeOffers; __s20local1 < __s20local2.length; __s20local1++) {
        __s20local0(__s20local2[__s20local1]);
      }
    }
  };
  BasicPrivateOfferData.prototype.destroy = function () {
    for (var __s32local0 = 0, __s32local1 = this._activeOffers; __s32local0 < __s32local1.length; __s32local0++) {
      var __s32local2 = __s32local1[__s32local0];
      this.dispatchEvent(new __dep_class_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_class_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, __s32local2));
      __s32local2.dispose();
    }
    this._failedVisualExecutions = null;
    this._offerFactory.dispose();
    this._offerDescriptionFactory.dispose();
    this._offerQuestConditionFactory.dispose();
    this._offerRewardFactory.dispose();
    this._offerDescriptionVisualFactory.dispose();
    __s1param0.prototype.destroy.call(this);
  };
  BasicPrivateOfferData.prototype.offerFinished = function (__s36param0, __s36param1) {
    var __s36local0 = this.getOfferById(__s36param0);
    if (__s36local0 && (__s36local0.changeState(__dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.getEnumByServerEventID(__s36param1)), this.checkVisualExecution(__s36local0), __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.isFinishedState(__s36local0.offerState))) {
      var __s36local1 = this._activeOffers.indexOf(__s36local0);
      if (__s36local1 > -1) {
        this.offerFinishedHook(__s36local0);
        this._activeOffers.splice(__s36local1, 1);
        this.dispatchEvent(new __dep_class_PrivateOfferDataEvent.PrivateOfferDataEvent(__dep_class_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, __s36local0));
      }
    }
  };
  BasicPrivateOfferData.prototype.offerFinishedHook = function (__s40param0) {};
  BasicPrivateOfferData.prototype.checkVisualExecution = function (__s42param0) {
    var __s42local0 = __s42param0.getDescriptionByName(__dep_class_Constants_Offer.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
    if (__s42local0) {
      __s42local0.visuals.forEach(function (__s45param0, __s45param1, __s45param2) {
        if (__s45param0.toExecuteInState(__s42param0.offerState) && __s45param0.execute(__s42param0)) {
          __dep_class_CommandController.CommandController.instance.executeCommand(__s45param0.getCommandName(), __s42param0);
        }
      });
    }
  };
  BasicPrivateOfferData.prototype.sendOfferQuestAccept = function (__s48param0, __s48param1) {};
  BasicPrivateOfferData.prototype.sendOfferPay = function (__s50param0, __s50param1) {};
  BasicPrivateOfferData.prototype.sendCheckDuration = function (__s52param0) {};
  BasicPrivateOfferData.prototype.createOfferDescriptionObject = function (__s54param0, __s54param1) {
    if (__s54param0) {
      return this._offerDescriptionFactory.createOfferDescriptionObject(__s54param0, __s54param1);
    } else {
      return null;
    }
  };
  BasicPrivateOfferData.prototype.createQuestCondition = function (__s58param0, __s58param1) {
    if (__s58param0) {
      return this._offerQuestConditionFactory.createOfferQuestCondition(__s58param0, __s58param1);
    } else {
      return null;
    }
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionRewardObject = function (__s62param0, __s62param1) {
    return this._offerRewardFactory.createOfferRewardObject(__s62param0, __s62param1);
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionVisualObject = function (__s64param0, __s64param1) {
    return this._offerDescriptionVisualFactory.createOfferDescriptionVisualObject(__s64param0, __s64param1);
  };
  BasicPrivateOfferData.prototype.getOfferById = function (__s66param0) {
    for (var __s66local0 = 0, __s66local1 = this._activeOffers; __s66local0 < __s66local1.length; __s66local0++) {
      var __s66local2 = __s66local1[__s66local0];
      if (__s66param0 == __s66local2.id) {
        return __s66local2;
      }
    }
    return null;
  };
  BasicPrivateOfferData.prototype.getPrivateOffersWithVisualParamter = function (__s71param0) {
    var __s71local0 = [];
    for (var __s71local1 = 0, __s71local2 = this._activeOffers; __s71local1 < __s71local2.length; __s71local1++) {
      var __s71local3 = __s71local2[__s71local1];
      var __s71local4 = __s71local3.getDescriptionByName(__dep_class_Constants_Offer.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
      if (__s71local4 && __s71local4.visuals[__s71param0] !== undefined) {
        __s71local0.push(__s71local3);
      }
    }
    return __s71local0;
  };
  BasicPrivateOfferData.prototype.traceAllDefinitions = function () {};
  BasicPrivateOfferData.prototype.createQuestConditionContainer = function (__s78param0, __s78param1 = null) {
    var __s78local0 = this._offerQuestConditionFactory.createOfferQuestContainer(__s78param0);
    if (__s78local0) {
      __s78local0.setLogic(__s78param1);
    }
    return __s78local0;
  };
  return BasicPrivateOfferData;
}(__dep_class_BasicData.BasicData);
exports.BasicPrivateOfferData = __s0local0;
