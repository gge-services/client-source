Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetAllianceSubscriberCountEventVO = require("gge-module:export_C2SGetAllianceSubscriberCountEventVO");
var __dep_export_C2SGetAutoSellConditionsEventVO = require("gge-module:export_C2SGetAutoSellConditionsEventVO");
var __dep_export_C2SGetSubscriptionInfoEventVO = require("gge-module:export_C2SGetSubscriptionInfoEventVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleLoginEvent = require("gge-module:export_CastleLoginEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AutoSellVO = require("gge-module:export_AutoSellVO");
var __dep_export_AutoSpyVO = require("gge-module:export_AutoSpyVO");
var __dep_export_SubscriptionActivePackageVO = require("gge-module:export_SubscriptionActivePackageVO");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_export_XmlSubscriptionBuffVO = require("gge-module:export_XmlSubscriptionBuffVO");
var __s0local0 = function (__s1param0) {
  function SubscriptionData(__s3param0) {
    var __s3local0 = this;
    __s3local0._subscriptionBuffs = new Map();
    __s3local0._autoSpyAreaIds = [];
    __s3local0._autoSkipAreaIds = [];
    __s3local0._activePackages = [];
    __s3local0._allianceSubscriberCount = 0;
    __s3local0._autoSell = new __dep_export_AutoSellVO.AutoSellVO();
    __s3local0._autoSpy = new __dep_export_AutoSpyVO.AutoSpyVO();
    __s3local0._subscriptionTypeRewards = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._subscriptionBuffs = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s3param0, "subscriptionsBuffs", __dep_export_XmlSubscriptionBuffVO.XmlSubscriptionBuffVO);
    __s3local0._autoSpyAreaIds = [];
    for (var __s3local1 = 0, __s3local2 = __s3local0.getSubscriptionBuffByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUTO_SPY).boni[0].effect.areaTypes; __s3local1 < __s3local2.length; __s3local1++) {
      if ((__s3local5 = __s3local2[__s3local1]) !== undefined) {
        __s3local0._autoSpyAreaIds.push(__s3local5);
      }
    }
    __s3local0._autoSkipAreaIds = [];
    for (var __s3local3 = 0, __s3local4 = __s3local0.getSubscriptionBuffByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUTO_SKIP).boni[0].effect.areaTypes; __s3local3 < __s3local4.length; __s3local3++) {
      var __s3local5;
      if ((__s3local5 = __s3local4[__s3local3]) !== undefined) {
        __s3local0._autoSkipAreaIds.push(__s3local5);
      }
    }
    for (var __s3local6 = 0, __s3local7 = __s3param0.subscriptionsRewards; __s3local6 < __s3local7.length; __s3local6++) {
      var __s3local8 = __s3local7[__s3local6];
      if (__s3local8 !== undefined) {
        var __s3local9 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("subscriptionTypeID", __s3local8, "0", true));
        var __s3local10 = __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardIDs", __s3local8, "0", true)));
        if (__s3local0._subscriptionTypeRewards.get(__s3local9)) {
          __s3local0._subscriptionTypeRewards.get(__s3local9).addList(__s3local10);
        } else {
          __s3local0._subscriptionTypeRewards.set(__s3local9, __s3local10);
        }
      }
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLoginEvent.CastleLoginEvent.ON_GBD_ARRIVED, __s3local0.bindFunction(__s3local0.onGbdArrived));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SubscriptionData, __s1param0);
  SubscriptionData.prototype.reset = function () {
    this._activePackages = [];
    this._allianceSubscriberCount = 0;
  };
  SubscriptionData.prototype.destroy = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLoginEvent.CastleLoginEvent.ON_GBD_ARRIVED, this.bindFunction(this.onGbdArrived));
  };
  SubscriptionData.prototype.parseASG = function (__s20param0) {
    this.autoSell.parseASG(__s20param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SubscriptionEvent.SubscriptionEvent(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED));
  };
  SubscriptionData.prototype.requestASG = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAutoSellConditionsEventVO.C2SGetAutoSellConditionsEventVO());
  };
  SubscriptionData.prototype.requestSIE = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSubscriptionInfoEventVO.C2SGetSubscriptionInfoEventVO());
  };
  SubscriptionData.prototype.parseSIE = function (__s26param0) {
    this._activePackages = [];
    var __s26local0 = __s26param0.SP;
    if (__s26local0) {
      if (__s26local0 != null) {
        for (var __s26local1 = 0, __s26local2 = __s26local0; __s26local1 < __s26local2.length; __s26local1++) {
          var __s26local3 = __s26local2[__s26local1];
          if (__s26local3 !== undefined) {
            var __s26local4 = new __dep_export_SubscriptionActivePackageVO.SubscriptionActivePackageVO();
            __s26local4.parseServerObject(__s26local3);
            this._activePackages.push(__s26local4);
          }
        }
      }
      if (this.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUTO_SELL)) {
        this.requestASG();
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SubscriptionEvent.SubscriptionEvent(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED));
      if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isOnMap && __dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.updateAllObjects();
      }
    }
  };
  SubscriptionData.prototype.requestASC = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceSubscriberCountEventVO.C2SGetAllianceSubscriberCountEventVO());
  };
  SubscriptionData.prototype.parseASC = function (__s37param0) {
    this._allianceSubscriberCount = __dep_exact_f855840627e6e145.int(__s37param0.ASC);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SubscriptionEvent.SubscriptionEvent(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED));
  };
  SubscriptionData.prototype.isPackageActive = function (__s39param0) {
    if (this._activePackages != null) {
      for (var __s39local0 = 0, __s39local1 = this._activePackages; __s39local0 < __s39local1.length; __s39local0++) {
        var __s39local2 = __s39local1[__s39local0];
        if (__s39local2 !== undefined && __s39local2.type == __s39param0) {
          return __s39local2.isActive();
        }
      }
    }
    return false;
  };
  SubscriptionData.prototype.getSubscriptionEffectsByType = function (__s45param0, __s45param1 = null) {
    __s45param1 = __s45param1 ?? __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s45local0 = [];
    var __s45local1 = [];
    if (this._subscriptionBuffs != null) {
      for (var __s45local2 = 0, __s45local3 = Array.from(this._subscriptionBuffs.values()); __s45local2 < __s45local3.length; __s45local2++) {
        var __s45local4 = __s45local3[__s45local2];
        if (__s45local4 !== undefined && (this.isPackageActive(__s45local4.packageType) || __s45local4.packageType == __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE && this.allianceSubscriberCount >= __s45local4.requiredMembers)) {
          if (__s45local4.seriesId >= 0) {
            if (__s45local0.indexOf(__s45local4.seriesId) >= 0) {
              continue;
            }
            var __s45local5 = this.getHighestBuffVOBySeriesId(__s45local4.seriesId, this._allianceSubscriberCount);
            if (!__s45local5) {
              continue;
            }
            __s45local0.push(__s45local5.seriesId);
            for (var __s45local6 = 0, __s45local7 = __s45local5.boni; __s45local6 < __s45local7.length; __s45local6++) {
              var __s45local8 = __s45local7[__s45local6];
              if (__s45local8 !== undefined && __s45local8.matchesConditions(__s45param0, __s45param1.areaType, __s45param1.spaceId, __s45param1.wodId)) {
                __s45local1.push(__s45local8);
              }
            }
          } else {
            for (var __s45local9 = 0, __s45local10 = __s45local4.boni; __s45local9 < __s45local10.length; __s45local9++) {
              if ((__s45local8 = __s45local10[__s45local9]).matchesConditions(__s45param0, __s45param1.areaType, __s45param1.spaceId)) {
                __s45local1.push(__s45local8);
              }
            }
          }
        }
      }
    }
    return __s45local1;
  };
  SubscriptionData.prototype.getSubscriptionEffectValue = function (__s61param0, __s61param1 = -1, __s61param2 = -1, __s61param3 = -1) {
    var __s61local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getSubscriptionEffectsByType(__s61param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s61param2, __s61param3, __s61param1)), true);
    return __s61local0 || new __s61param0.valueClass();
  };
  SubscriptionData.prototype.getEffectValue = function (__s63param0, __s63param1 = -1, __s63param2 = -1) {
    var __s63local0 = __dep_exact_f855840627e6e145.int(__s63param1 < 0 ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : __s63param1);
    var __s63local1 = __dep_exact_f855840627e6e145.int(__s63param2 < 0 ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : __s63param2);
    return this.getSubscriptionEffectValue(__s63param0, -1, __s63local0, __s63local1).strength;
  };
  SubscriptionData.prototype.getHighestBuffVOBySeriesId = function (__s65param0, __s65param1) {
    var __s65local0;
    if (__s65param1 === undefined) {
      __s65param1 = -1;
    }
    if (this._subscriptionBuffs != null) {
      for (var __s65local1 = 0, __s65local2 = Array.from(this._subscriptionBuffs.values()); __s65local1 < __s65local2.length; __s65local1++) {
        var __s65local3 = __s65local2[__s65local1];
        if (__s65local3 !== undefined && __s65local3.seriesId == __s65param0 && (__s65param1 < 0 || __s65param1 >= __s65local3.requiredMembers)) {
          if (__s65local0) {
            if (__s65local3.requiredMembers > __s65local0.requiredMembers) {
              __s65local0 = __s65local3;
            }
          } else {
            __s65local0 = __s65local3;
          }
        }
      }
    }
    return __s65local0;
  };
  SubscriptionData.prototype.isEffectTypeActive = function (__s75param0) {
    if (this._subscriptionBuffs != null) {
      for (var __s75local0 = 0, __s75local1 = Array.from(this._subscriptionBuffs.values()); __s75local0 < __s75local1.length; __s75local0++) {
        var __s75local2 = __s75local1[__s75local0];
        if (__s75local2 !== undefined) {
          var __s75local3 = false;
          for (var __s75local4 = 0, __s75local5 = __s75local2.boni; __s75local4 < __s75local5.length; __s75local4++) {
            var __s75local6 = __s75local5[__s75local4];
            if (__s75local6 !== undefined && __s75local6.effect.effectType.type == __s75param0) {
              __s75local3 = true;
              break;
            }
          }
          if (__s75local3) {
            if (__s75local2.seriesId >= 0) {
              if (this._allianceSubscriberCount >= __s75local2.requiredMembers) {
                return true;
              }
            } else if (this.isPackageActive(__s75local2.packageType)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  SubscriptionData.prototype.getSubscriptionBuffByEffectType = function (__s88param0) {
    if (this._subscriptionBuffs != null) {
      for (var __s88local0 = 0, __s88local1 = Array.from(this._subscriptionBuffs.values()); __s88local0 < __s88local1.length; __s88local0++) {
        var __s88local2 = __s88local1[__s88local0];
        if (__s88local2 !== undefined) {
          for (var __s88local3 = 0, __s88local4 = __s88local2.boni; __s88local3 < __s88local4.length; __s88local3++) {
            var __s88local5 = __s88local4[__s88local3];
            if (__s88local5 !== undefined && __s88local5.effect.effectType.type == __s88param0) {
              return __s88local2;
            }
          }
        }
      }
    }
    return null;
  };
  SubscriptionData.prototype.isAutoSpyActiveForArea = function (__s97param0) {
    return this.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUTO_SPY) && this._autoSpyAreaIds.indexOf(__s97param0.areaType) >= 0;
  };
  SubscriptionData.prototype.isAutoSkipActiveForArea = function (__s99param0) {
    return this.isAutoSkipTarget(__s99param0) && this.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUTO_SKIP);
  };
  SubscriptionData.prototype.isAutoSkipTarget = function (__s101param0) {
    return this._autoSkipAreaIds.indexOf(__s101param0.areaType) > -1;
  };
  SubscriptionData.prototype.isAnyPackageActive = function () {
    if (this._activePackages != null) {
      for (var __s103local0 = 0, __s103local1 = this._activePackages; __s103local0 < __s103local1.length; __s103local0++) {
        var __s103local2 = __s103local1[__s103local0];
        if (__s103local2 !== undefined && __s103local2.isActive()) {
          return true;
        }
      }
    }
    return false;
  };
  SubscriptionData.prototype.getActivePackage = function (__s109param0) {
    if (this._activePackages != null) {
      for (var __s109local0 = 0, __s109local1 = this._activePackages; __s109local0 < __s109local1.length; __s109local0++) {
        var __s109local2 = __s109local1[__s109local0];
        if (__s109local2 !== undefined && __s109local2.type == __s109param0) {
          return __s109local2;
        }
      }
    }
    return null;
  };
  SubscriptionData.prototype.getPackageSeriesIds = function (__s115param0) {
    var __s115local0 = [];
    if (this._subscriptionBuffs != null) {
      for (var __s115local1 = 0, __s115local2 = Array.from(this._subscriptionBuffs.values()); __s115local1 < __s115local2.length; __s115local1++) {
        var __s115local3 = __s115local2[__s115local1];
        if (__s115local3 !== undefined && __s115local3.packageType == __s115param0 && __s115local3.seriesId >= 0 && __s115local0.indexOf(__s115local3.seriesId) < 0) {
          __s115local0.push(__s115local3.seriesId);
        }
      }
    }
    return __s115local0;
  };
  SubscriptionData.prototype.getPackageSeriesBuffs = function (__s121param0, __s121param1) {
    var __s121local0 = [];
    if (this._subscriptionBuffs != null) {
      for (var __s121local1 = 0, __s121local2 = Array.from(this._subscriptionBuffs.values()); __s121local1 < __s121local2.length; __s121local1++) {
        var __s121local3 = __s121local2[__s121local1];
        if (__s121local3 !== undefined && __s121local3.packageType == __s121param0 && __s121local3.seriesId >= 0 && __s121local3.seriesId == __s121param1) {
          __s121local0.push(__s121local3);
        }
      }
    }
    return __s121local0;
  };
  SubscriptionData.prototype.setText = function (__s127param0, __s127param1 = null, __s127param2 = null, __s127param3 = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT) {
    var __s127local0 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__s127param0);
    if (__s127param1) {
      __s127param1.color = __s127local0 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_SUBSCRIPTION : __s127param3;
    }
    if (__s127param2) {
      __s127param2.visible = __s127local0;
    }
    return __s127local0;
  };
  SubscriptionData.prototype.isFeatureEnabled = function () {
    return !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer;
  };
  SubscriptionData.prototype.onGbdArrived = function (__s133param0) {
    if (this.isFeatureEnabled()) {
      this.requestASC();
      this.requestSIE();
    }
  };
  Object.defineProperty(SubscriptionData.prototype, "autoSell", {
    get: function () {
      return this._autoSell;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionData.prototype, "autoSpy", {
    get: function () {
      return this._autoSpy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionData.prototype, "allianceSubscriberCount", {
    get: function () {
      return this._allianceSubscriberCount;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionData.prototype.getSubscriptionRewardsByTypeID = function (__s142param0) {
    if (this._subscriptionTypeRewards.get(__s142param0)) {
      return this._subscriptionTypeRewards.get(__s142param0);
    } else {
      return new __dep_export_CollectableList.CollectableList();
    }
  };
  return SubscriptionData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.SubscriptionData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
