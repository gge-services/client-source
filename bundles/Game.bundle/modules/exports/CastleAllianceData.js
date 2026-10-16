Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SChangeAllianceLanguageVO = require("gge-module:export_C2SChangeAllianceLanguageVO");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceApplicationListItemVO = require("gge-module:export_AllianceApplicationListItemVO");
var __dep_export_AllianceFundsDonatableVO = require("gge-module:export_AllianceFundsDonatableVO");
var __dep_export_AllianceInfoVO = require("gge-module:export_AllianceInfoVO");
var __dep_export_SearchListAllianceItemVO = require("gge-module:export_SearchListAllianceItemVO");
var __dep_export_SearchMemberListItemVO = require("gge-module:export_SearchMemberListItemVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceData(__s3param0) {
    var __s3local0 = this;
    __s3local0._refreshTime = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._allianceInfo = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceData, __s1param0);
  CastleAllianceData.prototype.parseXML = function (__s5param0) {
    var __s5local0 = __s5param0.alliancerankrights;
    this._rankRights = new Map();
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          this._rankRights.set(parseInt(__s5local3.rankRightID || "").toString(), parseInt(__s5local3.neededMemberRank || ""));
        }
      }
    }
    var __s5local4 = __s5param0.allianceranks;
    this._allianceRanks = new Map();
    if (__s5local4 != null) {
      for (var __s5local5 = 0, __s5local6 = __s5local4; __s5local5 < __s5local6.length; __s5local5++) {
        var __s5local7 = __s5local6[__s5local5];
        if (__s5local7 !== undefined) {
          this._allianceRanks.set(parseInt(__s5local7.rankID || "").toString(), parseInt(__s5local7.rerankRight || ""));
        }
      }
    }
    var __s5local8 = __s5param0.allianceFundsDonatables;
    this._allianceFundsDonateble = new Map();
    if (__s5local8 != null) {
      for (var __s5local9 = 0, __s5local10 = __s5local8; __s5local9 < __s5local10.length; __s5local9++) {
        var __s5local11 = __s5local10[__s5local9];
        if (__s5local11 !== undefined) {
          var __s5local12 = new __dep_export_AllianceFundsDonatableVO.AllianceFundsDonatableVO();
          __s5local12.fillFromXML(__s5local11);
          this._allianceFundsDonateble.set(__s5local12.id, __s5local12);
        }
      }
    }
  };
  CastleAllianceData.prototype.mayRerank = function (__s19param0, __s19param1) {
    var __s19local0 = -1;
    if (this._allianceRanks.has(__s19param1.toString())) {
      __s19local0 = __dep_exact_f855840627e6e145.int(this._allianceRanks.get(__s19param1.toString()));
    }
    return this.hasRight(__s19param0, __s19local0);
  };
  CastleAllianceData.prototype.hasRight = function (__s22param0, __s22param1) {
    return !!this._rankRights.has(__s22param1.toString()) && this._rankRights.get(__s22param1.toString()) >= __s22param0;
  };
  CastleAllianceData.prototype.parse_AIN = function (__s24param0) {
    if (__s24param0) {
      this.parseAllianceInfo(__s24param0.A);
    }
  };
  CastleAllianceData.prototype.parse_ABL = function (__s27param0) {
    if (__s27param0) {
      this.myAllianceVO.parseABL(__s27param0);
      __dep_export_CastleModel.CastleModel.allianceData.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, null));
      __dep_export_CastleModel.CastleModel.allianceData.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.myAllianceVO));
    }
  };
  CastleAllianceData.prototype.parse_BAI = function (__s30param0) {
    if (__s30param0) {
      var __s30local0 = this.parseAllianceInfo(__s30param0.A);
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_INVITATION, __s30local0));
    }
  };
  CastleAllianceData.prototype.parse_ALL = function (__s33param0) {
    if (__s33param0) {
      var __s33local0 = this.getAllianceInfoVOByID(__s33param0.AID);
      __s33local0.parseActionList(__s33param0.AL);
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, __s33local0));
    }
  };
  CastleAllianceData.prototype.onAllianceDataRefreshTimer = function (__s36param0) {
    if (this._refreshTime > 0 && (this._refreshTime--, this._refreshTime <= 0)) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onAllianceDataRefreshTimer));
      var __s36local0 = this.myAllianceVO;
      if (__s36local0) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__s36local0.allianceId));
      }
    }
  };
  CastleAllianceData.prototype.parse_SAL = function (__s40param0) {
    if (__s40param0) {
      var __s40local0 = [];
      for (var __s40local1 = 0, __s40local2 = __s40param0.AL; __s40local1 < __s40local2.length; __s40local1++) {
        var __s40local3 = __s40local2[__s40local1];
        if (__s40local3 !== undefined) {
          var __s40local4 = new __dep_export_SearchListAllianceItemVO.SearchListAllianceItemVO();
          __s40local4.parseItem(__s40local3);
          __s40local0.push(__s40local4);
        }
      }
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_SEARCH_ALLIANCE_LIST_UPDATED, this.myAllianceVO, [__s40local0]));
    }
  };
  CastleAllianceData.prototype.parse_SML = function (__s46param0) {
    if (__s46param0) {
      var __s46local0 = [];
      for (var __s46local1 = 0, __s46local2 = __s46param0.PL; __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined) {
          var __s46local4 = new __dep_export_SearchMemberListItemVO.SearchMemberListItemVO();
          __s46local4.parseItem(__s46local3);
          __s46local0.push(__s46local4);
        }
      }
      __dep_exact_9e901e8e2483a22f_1.VectorSortHelper.sort(__s46local0, this.bindFunction(this.sortByDistance));
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_SEARCH_MEMBER_LIST_UPDATED, this.myAllianceVO, [__s46local0]));
    }
  };
  CastleAllianceData.prototype.parse_AEE = function (__s52param0) {
    this.parseAllianceCrestForAlliance(this._myAllianceVO, __s52param0);
    this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this._myAllianceVO));
  };
  CastleAllianceData.prototype.parseAllianceCrestForAlliance = function (__s54param0, __s54param1) {
    __s54param0.parseFallbackCrest(__s54param1.ACFB);
    __s54param0.allianceCrestVO.fillWithData(__s54param1.ACCA);
  };
  CastleAllianceData.prototype.parse_AAL = function (__s56param0) {
    if (__s56param0) {
      var __s56local0 = [];
      for (var __s56local1 = 0, __s56local2 = __s56param0.AL; __s56local1 < __s56local2.length; __s56local1++) {
        var __s56local3 = __s56local2[__s56local1];
        if (__s56local3 !== undefined) {
          var __s56local4 = new __dep_export_AllianceApplicationListItemVO.AllianceApplicationListItemVO();
          __s56local4.parseItem(__s56local3);
          __s56local0.push(__s56local4);
        }
      }
      __dep_exact_9e901e8e2483a22f_1.VectorSortHelper.sort(__s56local0, this.bindFunction(this.sortByDistance));
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.myAllianceVO, [__s56local0]));
    }
  };
  CastleAllianceData.prototype.parseSLL = function (__s62param0) {
    this.myAllianceVO.landmarksList.parseSLL(__s62param0);
  };
  CastleAllianceData.prototype.sortByDistance = function (__s64param0, __s64param1) {
    if (__s64param0.distance < __s64param1.distance) {
      return -1;
    } else if (__s64param0.distance > __s64param1.distance) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleAllianceData.prototype.parseAllianceInfoArray = function (__s69param0) {
    if (__s69param0 && __s69param0.length != 0 && __s69param0 != null) {
      for (var __s69local0 = 0, __s69local1 = __s69param0; __s69local0 < __s69local1.length; __s69local0++) {
        var __s69local2 = __s69local1[__s69local0];
        if (__s69local2 !== undefined) {
          this.parseAllianceInfo(__s69local2);
        }
      }
    }
  };
  CastleAllianceData.prototype.parseAllianceInfo = function (__s75param0) {
    if (!__s75param0 || __s75param0.AID == null) {
      return null;
    }
    var __s75local0 = __dep_exact_f855840627e6e145.int(__s75param0.AID);
    var __s75local1 = this.getAllianceInfoVOByID(__s75local0);
    if (!__s75local1) {
      __s75local1 = new __dep_export_AllianceInfoVO.AllianceInfoVO();
      this._allianceInfo.set(__s75local0, __s75local1);
    }
    __s75local1.fillFromParamObject(__s75param0);
    this._allianceInfo.set(__s75local1.allianceId, __s75local1);
    if (__s75param0.aee) {
      this.parseAllianceCrestForAlliance(__s75local1, __s75param0.aee);
    }
    var __s75local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.allianceID);
    if (__s75local1.allianceId == __s75local2) {
      this._myAllianceVO = __s75local1;
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, __s75local1));
    } else {
      this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, __s75local1));
    }
    if (__s75param0.RT > 0) {
      this._refreshTime = __dep_exact_f855840627e6e145.int(__s75param0.RT);
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onAllianceDataRefreshTimer));
    }
    return __s75local1;
  };
  CastleAllianceData.prototype.getAllianceInfoVOByID = function (__s83param0) {
    return this._allianceInfo.get(__s83param0);
  };
  CastleAllianceData.prototype.hasReachedMightPointThreshold = function (__s85param0) {
    return !!this.myAllianceVO && this._myAllianceVO.allianceMightPointsHighestReached >= __s85param0;
  };
  CastleAllianceData.prototype.getStatusByAlliance = function (__s87param0) {
    if (this.myAllianceVO) {
      return this._myAllianceVO.getStatusByAlliance(__s87param0);
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL);
    }
  };
  Object.defineProperty(CastleAllianceData.prototype, "myAllianceVO", {
    get: function () {
      if (!this._myAllianceVO && __dep_export_CastleModel.CastleModel.userData.isInAlliance) {
        this._myAllianceVO = this.getAllianceInfoVOByID(__dep_export_CastleModel.CastleModel.userData.allianceID);
      }
      return this._myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceData.prototype, "userCanDonateToAlliance", {
    get: function () {
      return !!__dep_exact_26a421b704832cff.AllianceConst.mayDonateC2(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.isPayUser);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceData.prototype, "allyForgeLevel", {
    get: function () {
      return this._myAllianceVO.getBoostLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceData.getTextIDForRank = function (__s98param0) {
    if (__s98param0 >= 0 && __s98param0 <= CastleAllianceData.TEXT_IDS_FOR_RANK_IDS.length) {
      return __dep_exact_f855840627e6e145.int(CastleAllianceData.TEXT_IDS_FOR_RANK_IDS[__s98param0]);
    } else {
      return -1;
    }
  };
  CastleAllianceData.prototype.resetMyAlliance = function () {
    this._myAllianceVO = null;
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.cleanRequests();
    this.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, null));
  };
  CastleAllianceData.prototype.reset = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onAllianceDataRefreshTimer));
  };
  CastleAllianceData.prototype.validateAllianceLanguage = function () {
    if (!__dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.userData.isAllianceLeader && !this.myAllianceVO.allianceLanguage) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangeAllianceLanguageVO.C2SChangeAllianceLanguageVO(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.currentCountryLanguageCode));
    }
  };
  Object.defineProperty(CastleAllianceData.prototype, "allianceFundsDonateble", {
    get: function () {
      return this._allianceFundsDonateble;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceData.__initialize_static_members = function () {
    var __s111local0;
    (__s111local0 = [])[__dep_exact_26a421b704832cff.AllianceConst.RANK_LEADER] = 0;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_COLEADER] = 4;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_MARSHAL] = 5;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_TREASURER] = 6;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_DIPLOMAT] = 7;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_RECRUITER] = 8;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_APPLICANT] = 9;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_GENERAL] = 1;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_SERGEANT] = 2;
    __s111local0[__dep_exact_26a421b704832cff.AllianceConst.RANK_MEMBER] = 3;
    CastleAllianceData.TEXT_IDS_FOR_RANK_IDS = __s111local0;
  };
  return CastleAllianceData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleAllianceData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
__s0local0.__initialize_static_members();
