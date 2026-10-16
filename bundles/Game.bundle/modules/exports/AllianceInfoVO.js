Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleFameDataEvent = require("gge-module:export_CastleFameDataEvent");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_PeaceOfferVO = require("gge-module:export_PeaceOfferVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_BuffVO = require("gge-module:export_BuffVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AdditionalMemberInfoVO = require("gge-module:export_AdditionalMemberInfoVO");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __dep_export_OtherAllianceStatusListItemVO = require("gge-module:export_OtherAllianceStatusListItemVO");
var __s0local0 = function () {
  function AllianceInfoVO() {
    this._mightPoints = 0;
    this._allianceId = 0;
    this._externalMemberLevel = 0;
    this._allianceStatusToOwnAlliance = 0;
    this._allianceFamePoints = 0;
    this._allianceFamePointsHighestReached = 0;
    this._canInvitedForHardPact = false;
    this._canInvitedForSoftPact = false;
    this._isSearchingMembers = false;
    this._isAcceptingMembers = false;
    this._isInPeaceNegociations = false;
    this._autoWarOn = false;
    this._aquaPoints = NaN;
    this._applicationAmount = 12;
    this.isAbleToForge = false;
    this.isInventoryFull = false;
    this._freeRenames = 0;
    this._isKingAlliance = false;
    this._allianceMightPointsHighestReached = 0;
    this.allianceForgeRelicUsagesSoft = 0;
    this.allianceForgeRelicUsagesHard = 0;
    this._allianceLanguage = "";
    this._crestLayoutEndTimeStamps = new Map();
    this._landmarksList = new __dep_export_AllianceLandmarksList.AllianceLandmarksList();
    this._allianceCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
  }
  AllianceInfoVO.prototype.fillFromParamObject = function (__s5param0) {
    this._allianceId = parseInt(__s5param0.AID);
    this._allianceName = __s5param0.N;
    this._allianceDescription = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.D);
    this.parseMemberList(__s5param0.M);
    this._externalMemberLevel = parseInt(__s5param0.ML);
    this._allianceStatusToOwnAlliance = parseInt(__s5param0.DOA);
    this._mightPoints = parseInt(__s5param0.MP);
    this._isSearchingMembers = __s5param0.IS;
    this._isAcceptingMembers = !!__s5param0.IA;
    this._allianceMightPointsHighestReached = parseInt(__s5param0.HAMP);
    this._allianceFamePointsHighestReached = parseInt(__s5param0.HF);
    if (__s5param0.AA != null) {
      this._applicationAmount = parseInt(__s5param0.AA);
    }
    if (__s5param0.AW != null) {
      this._autoWarOn = __s5param0.AW == 1;
    }
    this._anouncement = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.A);
    if (this._anouncement == "") {
      this._anouncement = " ";
    }
    if (__s5param0.AP != null) {
      this._aquaPoints = __s5param0.AP;
    }
    this.parseStorageFromServer(__s5param0.STO);
    this.parseAMI(__s5param0.AMI);
    this._landmarksList.parseCompleteLandmarksList(__s5param0);
    this.parseStatusList(__s5param0.ADL);
    this.parseBuffList(__s5param0.ABL);
    this._allianceFamePoints = __dep_exact_f855840627e6e145.int(__s5param0.CF);
    this._freeRenames = __dep_exact_f855840627e6e145.int(__s5param0.FR);
    this._canInvitedForHardPact = __s5param0.HP == 1;
    this._canInvitedForSoftPact = __s5param0.SP == 1;
    if (__s5param0.MF != null && __s5param0.IF != null) {
      this.isAbleToForge = __s5param0.MF == 1;
      this.isInventoryFull = __s5param0.IF == 1;
      this.allianceForgeRelicUsagesSoft = __dep_exact_f855840627e6e145.int(__s5param0.SRFU);
      this.allianceForgeRelicUsagesHard = __dep_exact_f855840627e6e145.int(__s5param0.HRFU);
      __dep_export_CastleModel.CastleModel.allianceData.dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.FORGE_DATA_RECEIVED));
    }
    if (__s5param0.PO != null) {
      this._isInPeaceNegociations = true;
      var __s5local0 = __s5param0.PO.T < 0;
      var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0 ? __s5param0.PO.T * -1 : __s5param0.PO.T);
      this._peaceOfferVO = new __dep_export_PeaceOfferVO.PeaceOfferVO(this.allianceId, this.allianceName, __s5local1, __s5local0, __s5param0.PO.TS);
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferCastleTimer));
    } else {
      this._isInPeaceNegociations = false;
    }
    this._isKingAlliance = __s5param0.KA == 1;
    this._allianceLanguage = __s5param0.ALL;
    if (__s5param0.ACLS) {
      this._crestLayoutEndTimeStamps.clear();
      for (var __s5local2 = 0, __s5local3 = __s5param0.ACLS; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        var __s5local5 = __s5local4.ACLI;
        var __s5local6 = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5local4.ACLET * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
        this._crestLayoutEndTimeStamps.set(__s5local5, {
          endTime: __s5local6,
          active: __s5local4.ACIA == 1,
          colors: __s5local4.ACLCS
        });
      }
    }
  };
  AllianceInfoVO.prototype.parseStorageFromServer = function (__s17param0) {
    var __s17local0;
    var __s17local1 = this;
    if (__s17param0 && (this._storage = new __dep_export_CollectableList.CollectableList(), Array.from(__dep_export_CastleModel.CastleModel.allianceData.allianceFundsDonateble.values()).forEach(function (__s19param0) {
      var __s19local0 = __s19param0.createCollectableItemVO();
      var __s19local1 = __dep_export_CollectableHelper.CollectableHelper.getServerKeyByCollectable(__s19local0);
      __s19local0.amount = __s17param0[__s19local1] || 0;
      __s17local1._storage.addItem(__s19local0);
    }), __dep_export_ABGHelper.ABGHelper.isOnABGServer)) {
      if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
        (__s17local0 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.allianceCurrencyID)).amount = __s17param0[__s17local0.xmlCurrencyVO.jsonKey] || 0;
        this._storage.addItem(__s17local0);
        if (__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.malusCurrencyID > 0) {
          var __s17local2 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.malusCurrencyID);
          __s17local2.amount = __s17param0[__s17local2.xmlCurrencyVO.jsonKey] || 0;
          this._storage.addItem(__s17local2);
        }
      } else if (__s17param0.AIN) {
        (__s17local0 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_ALLIANCE_INFLUENCE)).amount = __s17param0[__s17local0.xmlCurrencyVO.jsonKey] || 0;
        this._storage.addItem(__s17local0);
      }
    }
  };
  AllianceInfoVO.prototype.parseAMI = function (__s25param0) {
    this._additionalMemberInfos = new Map();
    if (__s25param0) {
      for (var __s25local0 = 0; __s25local0 < __s25param0.length; __s25local0++) {
        var __s25local1 = new __dep_export_AdditionalMemberInfoVO.AdditionalMemberInfoVO();
        __s25local1.parseAMI(__s25param0[__s25local0]);
        this._additionalMemberInfos.set(__s25local1.playerId, __s25local1);
      }
    }
  };
  AllianceInfoVO.prototype.parseAFA = function (__s30param0) {
    this._allianceFamePoints = __dep_exact_f855840627e6e145.int(__s30param0.CF);
    this._allianceFamePointsHighestReached = __dep_exact_f855840627e6e145.int(__s30param0.HF);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleFameDataEvent.CastleFameDataEvent(__dep_export_CastleFameDataEvent.CastleFameDataEvent.UPDATE_DATA_ALLY_FAME));
  };
  AllianceInfoVO.prototype.updateAllyFame = function (__s32param0, __s32param1) {
    this._allianceFamePoints = __dep_exact_f855840627e6e145.int(__s32param0);
    this._allianceFamePointsHighestReached = __dep_exact_f855840627e6e145.int(__s32param1);
  };
  AllianceInfoVO.prototype.parseABL = function (__s34param0) {
    if (__s34param0) {
      this.parseBuffList(__s34param0.ABL ? __s34param0.ABL : __s34param0);
    }
  };
  AllianceInfoVO.prototype.parseBuffList = function (__s37param0) {
    this._allianceBuffs = new Map();
    if (__s37param0) {
      for (var __s37local0 = 0; __s37local0 < __s37param0.length; __s37local0++) {
        var __s37local1 = __s37param0[__s37local0].BT;
        var __s37local2 = __s37param0[__s37local0].CD;
        var __s37local3 = __s37param0[__s37local0].L;
        var __s37local4 = -1;
        if (__s37local2 != -1) {
          __s37local4 = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 + __s37local2);
        }
        this._allianceBuffs.set(__s37local1, new __dep_export_BuffVO.BuffVO(__s37local3, __s37local4));
      }
    }
  };
  AllianceInfoVO.prototype.hasBoughtBuff = function (__s43param0) {
    return this._allianceBuffs.get(__s43param0).level > 0;
  };
  AllianceInfoVO.prototype.hasBuffSeries = function (__s45param0) {
    return this._allianceBuffs != null && this._allianceBuffs.get(__s45param0) != undefined;
  };
  AllianceInfoVO.prototype.parseActionList = function (__s47param0) {
    this._actionList = [];
    for (var __s47local0 = 0; __s47local0 < __s47param0.length; __s47local0++) {
      var __s47local1 = new __dep_export_AllianceActionListItemVO.AllianceActionListItemVO();
      __s47local1.parseActionListItem(__s47param0[__s47local0]);
      this._actionList.push(__s47local1);
    }
    this._actionList.reverse();
  };
  AllianceInfoVO.prototype.parseMemberList = function (__s51param0) {
    this._memberList = [];
    var __s51local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    for (var __s51local1 = 0; __s51local1 < __s51param0.length; __s51local1++) {
      this._memberList.push(__dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s51param0[__s51local1], __s51local0));
    }
    this._memberList.sort(this.bindFunction(this.sortOnRank));
  };
  AllianceInfoVO.prototype.parseStatusList = function (__s55param0) {
    this._otherAllianceStatusList = [];
    if (__s55param0) {
      for (var __s55local0 = 0; __s55local0 < __s55param0.length; __s55local0++) {
        var __s55local1 = __dep_exact_f855840627e6e145.int(__s55param0[__s55local0].AID);
        var __s55local2 = __s55param0[__s55local0].AN;
        var __s55local3 = __dep_exact_f855840627e6e145.int(__s55param0[__s55local0].AS);
        var __s55local4 = __dep_exact_f855840627e6e145.int(__s55param0[__s55local0].AC);
        this._otherAllianceStatusList.push(new __dep_export_OtherAllianceStatusListItemVO.OtherAllianceStatusListItemVO(__s55local1, __s55local2, __s55local3, __s55local4));
      }
    }
  };
  AllianceInfoVO.prototype.sortOnRank = function (__s60param0, __s60param1) {
    if (__s60param0.allianceRank > __s60param1.allianceRank) {
      return 1;
    } else if (__s60param0.allianceRank < __s60param1.allianceRank) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceInfoVO.prototype.getAdditionalMemberInfos = function (__s65param0) {
    return this._additionalMemberInfos.get(__s65param0);
  };
  AllianceInfoVO.prototype.getOnlineUserList = function () {
    var __s67local0;
    var __s67local1 = [];
    if (this._memberList != null) {
      for (var __s67local2 = 0, __s67local3 = this._memberList; __s67local2 < __s67local3.length; __s67local2++) {
        var __s67local4 = __s67local3[__s67local2];
        if (__s67local4 !== undefined && (__s67local0 = this.getAdditionalMemberInfos(__s67local4.playerID)) && __s67local0.loginActivity == __dep_exact_26a421b704832cff.AllianceConst.ONLINESTATE_ONLINE) {
          __s67local1.push(__s67local4);
        }
      }
    }
    __s67local1.sort(this.bindFunction(this.sortOnRank));
    return __s67local1;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceLeader", {
    get: function () {
      if (this._memberList != null) {
        for (var __s73local0 = 0, __s73local1 = this._memberList; __s73local0 < __s73local1.length; __s73local0++) {
          var __s73local2 = __s73local1[__s73local0];
          if (__s73local2 !== undefined && __s73local2.allianceRank == 0) {
            return __s73local2;
          }
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceHonor", {
    get: function () {
      var __s79local0 = 0;
      for (var __s79local1 = 0; __s79local1 < this._memberList.length; __s79local1++) {
        __s79local0 += __dep_exact_f855840627e6e145.int(this._memberList[__s79local1].honor);
      }
      return __s79local0 / this._memberList.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceId", {
    get: function () {
      return this._allianceId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceName", {
    get: function () {
      return this._allianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceNameWithFameLevel", {
    get: function () {
      if (this._allianceName.length > 0) {
        return this._allianceName + " {" + this.allianceFameLevel + "}";
      } else {
        return this._allianceName;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "anouncement", {
    get: function () {
      return this._anouncement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberAmount", {
    get: function () {
      return this._memberList.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberMax", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_ABGHelper.ABGHelper.abgEvent) {
        return __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.maxAllianceSize;
      } else {
        return __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS, this.memberLevel).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEMBER).strength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberList", {
    get: function () {
      return this._memberList;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getBoostLevel = function (__s101param0) {
    return __dep_exact_f855840627e6e145.int(this._allianceBuffs.get(__s101param0).level);
  };
  AllianceInfoVO.prototype.getBoostDuration = function (__s103param0, __s103param1) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getBuffDuration(__s103param0, __s103param1));
  };
  AllianceInfoVO.prototype.getRemainingBoostDuration = function (__s105param0) {
    return __dep_exact_f855840627e6e145.int(this._allianceBuffs.get(__s105param0).remainingDuration);
  };
  AllianceInfoVO.prototype.getBoostMaxLevel = function (__s107param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.maxLevelOfBuff(__s107param0));
  };
  AllianceInfoVO.prototype.isBoostUpgradeable = function (__s109param0) {
    return !!__dep_export_CastleModel.CastleModel.allianceBuffData && !!this._allianceBuffs && __dep_export_CastleModel.CastleModel.allianceBuffData.isUpgradeAble(__s109param0, this._allianceBuffs.get(__s109param0).level);
  };
  AllianceInfoVO.prototype.canTemporaryBoostBeActivated = function (__s111param0) {
    var __s111local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getRequiredBuffID(__s111param0, this._allianceBuffs.get(__s111param0).level + 1));
    if (__s111local0 == -1) {
      return true;
    }
    var __s111local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getBuffLevelByBuffID(__s111local0));
    var __s111local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getBuffSeriesIDByBuffID(__s111local0));
    return this._allianceBuffs.get(__s111local2).level >= __s111local1;
  };
  AllianceInfoVO.prototype.isBoosterTemporary = function (__s114param0) {
    return __dep_export_CastleModel.CastleModel.allianceBuffData.isTemporaryBuff(__s114param0, this._allianceBuffs.get(__s114param0).level + 1);
  };
  AllianceInfoVO.prototype.isTemporaryBoosterActive = function (__s116param0) {
    return !!this._allianceBuffs.get(__s116param0).isTemporary && this._allianceBuffs.get(__s116param0).remainingDuration > 0;
  };
  AllianceInfoVO.prototype.onPeaceOfferCastleTimer = function (__s118param0) {
    if (this.peaceOfferVO) {
      this.peaceOfferVO.remainingTimeInSeconds--;
      if (this.peaceOfferVO.remainingTimeInSeconds <= 0) {
        __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferCastleTimer));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(this._allianceId));
      }
    }
  };
  AllianceInfoVO.prototype.getUpgradeCosts = function (__s122param0) {
    if (this.isBoostUpgradeable(__s122param0)) {
      return __dep_export_CastleModel.CastleModel.allianceBuffData.getCosts(__s122param0, this._allianceBuffs.get(__s122param0).level + 1);
    } else if (this.isBoosterTemporary) {
      return __dep_export_CastleModel.CastleModel.allianceBuffData.getCosts(__s122param0, this._allianceBuffs.get(__s122param0).level);
    } else {
      return null;
    }
  };
  Object.defineProperty(AllianceInfoVO.prototype, "additionalMemberForNextLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS, this.memberLevel + 1).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEMBER).strength - this.memberMax;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getCurrentBoostValue = function (__s129param0, __s129param1) {
    return this.getBoostValue(__s129param0, this._allianceBuffs.get(__s129param0).level, __s129param1);
  };
  AllianceInfoVO.prototype.getUpgradeBoostValue = function (__s131param0, __s131param1) {
    if (this.isBoostUpgradeable(__s131param0)) {
      return __dep_exact_f855840627e6e145.int(this.getBoostValue(__s131param0, this._allianceBuffs.get(__s131param0).level + 1, __s131param1));
    } else {
      return __dep_exact_f855840627e6e145.int(this.getBoostValue(__s131param0, this._allianceBuffs.get(__s131param0).level, __s131param1));
    }
  };
  AllianceInfoVO.prototype.getBoostValue = function (__s135param0, __s135param1, __s135param2) {
    var __s135local0 = 0;
    var __s135local1 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__s135param0, __s135param1);
    if (__s135local1) {
      var __s135local2 = __s135local1.getBonusVOByEffectType(__s135param2);
      if (__s135local2) {
        __s135local0 = __dep_exact_f855840627e6e145.int(__s135local2.strength);
      }
    }
    return __s135local0;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceDescription", {
    get: function () {
      return this._allianceDescription;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "actionList", {
    get: function () {
      return this._actionList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "statusList", {
    get: function () {
      return this._otherAllianceStatusList;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getStatusListByStatus = function (__s145param0) {
    var __s145local0 = [];
    if (this._otherAllianceStatusList != null) {
      for (var __s145local1 = 0, __s145local2 = this._otherAllianceStatusList; __s145local1 < __s145local2.length; __s145local1++) {
        var __s145local3 = __s145local2[__s145local1];
        if (__s145local3 !== undefined && __s145local3.allianceStatus == __s145param0) {
          __s145local0.push(__s145local3);
        }
      }
    }
    return __s145local0;
  };
  AllianceInfoVO.prototype.getStatusByAlliance = function (__s151param0) {
    if (this._otherAllianceStatusList != null) {
      for (var __s151local0 = 0, __s151local1 = this._otherAllianceStatusList; __s151local0 < __s151local1.length; __s151local0++) {
        var __s151local2 = __s151local1[__s151local0];
        if (__s151local2 !== undefined && __s151local2.allianceID == __s151param0 && __s151local2.allianceStatusConfirmed == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_CONFIRMED) {
          return __s151local2.allianceStatus;
        }
      }
    }
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL);
  };
  AllianceInfoVO.prototype.getTestlist = function (__s157param0) {
    var __s157local0 = [];
    for (var __s157local1 = 0; __s157local1 < 20; __s157local1++) {
      __s157local0.push(new __dep_export_OtherAllianceStatusListItemVO.OtherAllianceStatusListItemVO(__s157local1, "Alli " + __s157local1, __s157param0, __dep_exact_9e901e8e2483a22f_1.Random.boolean() ? __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REQUEST : __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_CONFIRMED));
    }
    return __s157local0;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceStatusToOwnAlliance", {
    get: function () {
      return this._allianceStatusToOwnAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceRequestAvailable", {
    get: function () {
      if (this._otherAllianceStatusList != null) {
        for (var __s163local0 = 0, __s163local1 = this._otherAllianceStatusList; __s163local0 < __s163local1.length; __s163local0++) {
          var __s163local2 = __s163local1[__s163local0];
          if (__s163local2 !== undefined && __s163local2.allianceStatusConfirmed == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REQUEST) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePoints", {
    get: function () {
      return Math.min(this._allianceFamePoints, __dep_exact_26a421b704832cff.AllianceConst.FAME_CAP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFameLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(this.allianceFamePoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "highestReachedFameLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(this.allianceFamePointsHighestReached);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePointsNeedForNextLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceFameData.getFamePointsForLevel(this.allianceFameLevel + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePointsNeedForThisLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceFameData.getFamePointsForLevel(this.allianceFameLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePercentActFameLevel", {
    get: function () {
      return (this.allianceFamePoints - this.allianceFamePointsNeedForThisLevel) / (this.allianceFamePointsNeedForNextLevel - this.allianceFamePointsNeedForThisLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePointsHighestReached", {
    get: function () {
      return this._allianceFamePointsHighestReached;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceNextFameLevelVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceFameData.getFameVOByLevel(this.allianceFameLevel + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceCurrentFameLevelVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceFameData.getFameVOByLevel(this.allianceFameLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "canInvitedForHardPact", {
    get: function () {
      return this._canInvitedForHardPact;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "canInvitedForSoftPact", {
    get: function () {
      return this._canInvitedForSoftPact;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isSearchingMembers", {
    get: function () {
      return this._isSearchingMembers;
    },
    set: function (__s193param0) {
      this._isSearchingMembers = __s193param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isAcceptingMembers", {
    get: function () {
      return this._isAcceptingMembers;
    },
    set: function (__s197param0) {
      this._isAcceptingMembers = __s197param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "applicationAmount", {
    get: function () {
      return this._applicationAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "hasFameLevelCapReached", {
    get: function () {
      return this.allianceFameLevel >= __dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(__dep_exact_26a421b704832cff.AllianceConst.FAME_CAP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "landmarksList", {
    get: function () {
      return this._landmarksList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "freeRenames", {
    get: function () {
      return this._freeRenames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "aquaPoints", {
    get: function () {
      return this._aquaPoints;
    },
    set: function (__s209param0) {
      this._aquaPoints = __s209param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isInPeaceNegociations", {
    get: function () {
      return this._isInPeaceNegociations;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "peaceOfferVO", {
    get: function () {
      return this._peaceOfferVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "storage", {
    get: function () {
      return this._storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "autoWarOn", {
    get: function () {
      return this._autoWarOn;
    },
    set: function (__s219param0) {
      this._autoWarOn = __s219param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "mightPoints", {
    get: function () {
      return this._mightPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceMightPointsHighestReached", {
    get: function () {
      return this._allianceMightPointsHighestReached;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceCrestVO", {
    get: function () {
      return this._allianceCrestVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberLevel", {
    get: function () {
      if (this._allianceBuffs.get(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS) !== undefined) {
        return this._allianceBuffs.get(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS).level;
      } else {
        return this._externalMemberLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getTotalAllianceBuffEffectValue = function (__s231param0, __s231param1 = -1, __s231param2 = -1, __s231param3 = -1, __s231param4 = null) {
    var __s231local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getTotalAllianceBuffEffectsByType(__s231param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s231param1, __s231param2, __s231param3, __s231param4)), true);
    return __s231local0 || new __s231param0.valueClass();
  };
  AllianceInfoVO.prototype.getTotalAllianceBuffEffectsByType = function (__s233param0, __s233param1 = null) {
    __s233param1 = __s233param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s233local0 = [];
    if (this._allianceBuffs != null) {
      for (var __s233local1 = 0, __s233local2 = Array.from(this._allianceBuffs.keys()); __s233local1 < __s233local2.length; __s233local1++) {
        var __s233local3 = __s233local2[__s233local1];
        if (__s233local3 !== undefined) {
          var __s233local4 = this._allianceBuffs.get(__s233local3);
          var __s233local5 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__s233local3, __s233local4.level);
          if (__s233local5) {
            __s233local0 = __s233local0.concat(__s233local5.getBonusVOsByType(__s233param0, __s233param1));
          }
        }
      }
    }
    return __s233local0;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceLanguage", {
    get: function () {
      return this._allianceLanguage;
    },
    set: function (__s242param0) {
      this._allianceLanguage = __s242param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "currentIslandRank", {
    get: function () {
      return this._currentIslandRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isIslandKing", {
    get: function () {
      return this._isIslandKing;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceEnteredIslands", {
    get: function () {
      return this._allianceEnteredIslands;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.parse_SII = function (__s250param0) {
    this._currentIslandRank = __s250param0.AR;
    this._isIslandKing = __s250param0.KA == 1;
    this._allianceEnteredIslands = __s250param0.AE == 1;
  };
  AllianceInfoVO.prototype.getEndTimeStampForLayout = function (__s252param0) {
    if (this._crestLayoutEndTimeStamps.get(__s252param0)) {
      return this._crestLayoutEndTimeStamps.get(__s252param0).endTime;
    } else {
      return -1;
    }
  };
  AllianceInfoVO.prototype.getRemainingSecondsForLayout = function (__s256param0) {
    var __s256local0 = this.getEndTimeStampForLayout(__s256param0);
    if (__s256local0 > 0) {
      return (__s256local0 - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    } else {
      return -1;
    }
  };
  AllianceInfoVO.prototype.isLayoutActive = function (__s260param0) {
    return !!this._crestLayoutEndTimeStamps.has(__s260param0) && this._crestLayoutEndTimeStamps.get(__s260param0).active;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "fallbackCrestVO", {
    get: function () {
      return this._fallbackCrestVO;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.parseFallbackCrest = function (__s264param0) {
    this._fallbackCrestVO = null;
    if (__s264param0 && __s264param0.ACLI && __s264param0.ACCS) {
      this._fallbackCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
      this._fallbackCrestVO.fillWithData(__s264param0);
    }
  };
  AllianceInfoVO.prototype.getEffectStrengthByType = function (__s267param0, __s267param1 = -1, __s267param2 = -1, __s267param3 = -1, __s267param4 = null) {
    var __s267local0 = this.getTotalAllianceBuffEffectValue(__s267param0, __s267param1, __s267param2, __s267param3, __s267param4);
    if (__s267local0) {
      return __s267local0.strength;
    } else {
      return 0;
    }
  };
  AllianceInfoVO.prototype.getLayoutEffectStrengthByType = function (__s271param0, __s271param1 = -1, __s271param2 = -1, __s271param3 = -1, __s271param4 = null) {
    var __s271local0 = this.getLayoutEffectsByType(__s271param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s271param1, __s271param2, __s271param3, __s271param4));
    var __s271local1 = __s271local0 && __s271local0.length > 0 ? __s271local0[0] : null;
    if (__s271local1) {
      return __s271local1.strength;
    } else {
      return 0;
    }
  };
  AllianceInfoVO.prototype.getLayoutEffectsByType = function (__s275param0, __s275param1 = null) {
    if (!this._allianceCrestVO || !this._allianceCrestVO.layoutVO) {
      return [];
    }
    __s275param1 = __s275param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s275local0 = this._allianceCrestVO.layoutVO.effects;
    if (__s275local0 && __s275local0.length != 0) {
      return __s275local0 = __s275local0.filter(function (__s279param0) {
        return __s279param0.matchesConditions(__s275param0, __s275param1.areaType, __s275param1.spaceId, __s275param1.wodId, __s275param1.otherPlayer);
      });
    } else {
      return [];
    }
  };
  AllianceInfoVO.prototype.numberOfActiveTemporaryLayouts = function () {
    var __s282local0 = 0;
    for (var __s282local1 = 0, __s282local2 = Array.from(this._crestLayoutEndTimeStamps.keys()); __s282local1 < __s282local2.length; __s282local1++) {
      var __s282local3 = __s282local2[__s282local1];
      if (this.getRemainingSecondsForLayout(__s282local3) > 0) {
        __s282local0++;
      }
    }
    return __s282local0;
  };
  AllianceInfoVO.DIPLOMACY_IN_WAR = 0;
  AllianceInfoVO.DIPLOMACY_NEUTRAL = 1;
  AllianceInfoVO.DIPLOMACY_SOFT_ALLIED = 2;
  AllianceInfoVO.DIPLOMACY_REAL_ALLIED = 3;
  return AllianceInfoVO;
}();
exports.AllianceInfoVO = __s0local0;
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_AllianceActionListItemVO = require("gge-module:export_AllianceActionListItemVO");
var __dep_export_AllianceLandmarksList = require("gge-module:export_AllianceLandmarksList");
