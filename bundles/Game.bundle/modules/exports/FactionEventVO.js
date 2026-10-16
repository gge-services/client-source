Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SUpdateFactionProtectionVO = require("gge-module:export_C2SUpdateFactionProtectionVO");
var __dep_export_CastleFactionBalanceEvent = require("gge-module:export_CastleFactionBalanceEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AdvisorActivationInfoVO = require("gge-module:export_AdvisorActivationInfoVO");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_FactionCapitalInfoVO = require("gge-module:export_FactionCapitalInfoVO");
var __dep_export_FactionTowerInfoVO = require("gge-module:export_FactionTowerInfoVO");
var __s0local0 = function (__s1param0) {
  function FactionEventVO() {
    var __s3local0 = this;
    __s3local0._gotSEI = false;
    __s3local0._unlocked = false;
    __s3local0._ownFactionID = 0;
    __s3local0._mapSeed = 0;
    __s3local0._mainCampID = 0;
    __s3local0._redFactionPoints = 0;
    __s3local0._blueFactionPoints = 0;
    __s3local0._factionProtectionEndtime = 0;
    __s3local0._factionProtectionStatus = 0;
    __s3local0._noobProtectionEndtime = 0;
    __s3local0._lastManStandingRedActive = false;
    __s3local0._lastManStandingBlueActive = false;
    __s3local0._capitalReachableBlue = false;
    __s3local0._capitalReachableRed = false;
    __s3local0._isActiveInEvent = false;
    __s3local0._factionBalanceRed = 0.5;
    __s3local0._bluePlayers = 0;
    __s3local0._redPlayers = 0;
    __s3local0._rewardSetId = 0;
    __s3local0._ownLeagueID = 0;
    __s3local0._attackableCamps = [];
    __s3local0._rwdIndx = 0;
    __s3local0._isAdvisorActive = false;
    __s3local0._isAdvisorActivationFree = false;
    __s3local0._advisorActivationCurrencyId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._gotSEI = false;
    __s3local0._lastManStandingBlueActive = false;
    __s3local0._lastManStandingRedActive = false;
    __s3local0._leaguetypes = new Map();
    __s3local0._towerInfos = new Map();
    __s3local0._capitalInfos = new Map();
    __s3local0._villageInfos = new Map();
    __s3local0._ownLeagueID = 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventVO, __s1param0);
  FactionEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    var __s5local0 = __s5param1.leaguetypeevents;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && parseInt(__s5local3.eventID || "") == __dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION) {
          var __s5local4 = parseInt(__s5local3.leaguetypeID || "");
          var __s5local5 = parseInt(__s5local3.subType || "");
          var __s5local6 = parseInt(__s5local3.rewardSetID || "");
          if (!__dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(this._leaguetypes, __s5local4)) {
            this._leaguetypes.set(__s5local4, new Map());
          }
          this._leaguetypes.get(__s5local4).set(__s5local6, new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__s5local5));
          this._leaguetypes.get(__s5local4).get(__s5local6).eventId = __dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION;
          this._leaguetypes.get(__s5local4).get(__s5local6).parseData(__s5param0, __s5param1, {
            LID: __s5local4,
            RIDX: this._rwdIndx,
            RSID: __s5local6
          });
        }
      }
    }
    this._isAdvisorActive = !!__s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED] && __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED];
    this._isAdvisorActivationFree = !!__s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_FREE] && __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_FREE];
    this._advisorActivationCurrencyId = __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] ? __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] : 0;
  };
  FactionEventVO.prototype.parseParamObject = function (__s12param0) {
    __s1param0.prototype.parseParamObject.call(this, __s12param0);
    this._gotSEI = true;
    this._rewardSetId = __dep_exact_f855840627e6e145.int(__s12param0.RSID);
    this._unlocked = Boolean(__s12param0.UL);
    this._mapSeed = __dep_exact_f855840627e6e145.int(__s12param0.MS);
    this._rwdIndx = __dep_exact_f855840627e6e145.int(__s12param0.RIDX);
    if (__s12param0.FN) {
      this.loadFactionDataFromParamObject(__s12param0);
    }
    if (__s12param0.LID) {
      this._ownLeagueID = __dep_exact_f855840627e6e145.int(__s12param0.LID);
    }
    if (__s12param0.AC) {
      this._attackableCamps = __s12param0.AC;
    }
  };
  FactionEventVO.prototype.loadFactionDataFromParamObject = function (__s17param0) {
    if (__s17param0) {
      this._ownFactionID = __dep_exact_f855840627e6e145.int(__s17param0.FN.FID);
      this._mainCampID = __dep_exact_f855840627e6e145.int(__s17param0.FN.MC);
      this._factionProtectionEndtime = __s17param0.FN.PMT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      this._factionProtectionStatus = __dep_exact_f855840627e6e145.int(__s17param0.FN.PMS);
      if (__s17param0.FN.NS) {
        this._noobProtectionEndtime = __s17param0.FN.NS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      }
      __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this));
    }
  };
  FactionEventVO.prototype.parse_uap = function (__s21param0) {
    if (__s21param0) {
      this._factionProtectionStatus = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s21param0.PMS));
      this._factionProtectionEndtime = __s21param0.PMT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      this._noobProtectionEndtime = __s21param0.NS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this));
    }
  };
  FactionEventVO.prototype.parse_FKI = function (__s24param0) {
    this._lastManStandingBlueActive = __s24param0.BFLMS == 1;
    this._lastManStandingRedActive = __s24param0.RFLMS == 1;
    this._isActiveInEvent = __s24param0.PA == 1;
    this._capitalReachableBlue = __s24param0.BCR == 1;
    this._capitalReachableRed = __s24param0.RCR == 1;
    if (__dep_export_Iso.Iso.data) {
      __dep_export_Iso.Iso.controller.dataUpdater.updateEventBuildings();
    }
    __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this));
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
      var __s24local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s24local0.x, __s24local0.y, __s24local0.x + __s24local0.width, __s24local0.y + __s24local0.height);
    }
  };
  FactionEventVO.prototype.parse_FGB = function (__s28param0) {
    this._redPlayers = Math.max(__s28param0.RP, 0);
    this._bluePlayers = Math.max(__s28param0.BP, 0);
    if (this._redPlayers + this._bluePlayers > 0) {
      this._factionBalanceRed = this._redPlayers / (this._redPlayers + this._bluePlayers);
    }
    __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleFactionBalanceEvent.CastleFactionBalanceEvent(__dep_export_CastleFactionBalanceEvent.CastleFactionBalanceEvent.FACTION_BALACE_UPDATED, this._bluePlayers, this._redPlayers));
  };
  FactionEventVO.prototype.parse_AFD = function (__s31param0) {
    if (__s31param0.AC) {
      this._attackableCamps = __s31param0.AC;
      __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this));
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "remainingNoobProtectionTimeInSeconds", {
    get: function () {
      return Math.max((this._noobProtectionEndtime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "remainingFactionProtectionTimeInSeconds", {
    get: function () {
      return Math.max((this._factionProtectionEndtime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "factionProtectionStatus", {
    get: function () {
      return this._factionProtectionStatus;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.parseFactionPointsFromParamObject = function (__s40param0) {
    this._redFactionPoints = __dep_exact_f855840627e6e145.int(__s40param0.RFP);
    this._blueFactionPoints = __dep_exact_f855840627e6e145.int(__s40param0.BFP);
    __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED, this));
  };
  Object.defineProperty(FactionEventVO.prototype, "isLocked", {
    get: function () {
      return !this._unlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "requiresAdditionalEventLib", {
    get: function () {
      return true;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "requiresAdditionalEventLib").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s50param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s50param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Faction";
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "mapSeed", {
    get: function () {
      return this._mapSeed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "ownFaction", {
    get: function () {
      return this._ownFactionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO, "BLUE_CREST_VO", {
    get: function () {
      var __s60local0 = new __dep_export_CrestVO.CrestVO();
      __s60local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 20615);
      __s60local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_FACTION_BLUE, 15132390);
      return __s60local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO, "RED_CREST_VO", {
    get: function () {
      var __s62local0 = new __dep_export_CrestVO.CrestVO();
      __s62local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 8852227);
      __s62local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_FACTION_RED, 14852110);
      return __s62local0;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.parseAdditionalXmlFromRoot = function (__s64param0) {
    var __s64local0 = __s64param0.specialcamps;
    this._distanceMap = new Map();
    var __s64local1 = 0;
    if (__s64local0 != null) {
      for (var __s64local2 = 0, __s64local3 = __s64local0; __s64local2 < __s64local3.length; __s64local2++) {
        var __s64local4 = __s64local3[__s64local2];
        if (__s64local4 !== undefined) {
          __s64local1 = parseInt(__s64local4.specialcampID || "");
          this._distanceMap.set(__s64local1, parseInt(__s64local4.distance || ""));
          if ((__s64local4.type || "") == "DUNGEON") {
            if (!this._towerInfos.get(__s64local1)) {
              this._towerInfos.set(__s64local1, new __dep_export_FactionTowerInfoVO.FactionTowerInfoVO().parseXML(__s64local4));
            }
          } else if ((__s64local4.type || "") == "CAPITAL") {
            if (!this._capitalInfos.get(__s64local1)) {
              this._capitalInfos.set(__s64local1, new __dep_export_FactionCapitalInfoVO.FactionCapitalInfoVO().parseXML(__s64local4));
            }
          }
        }
      }
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "mainCampID", {
    get: function () {
      return this._mainCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "redFactionPoints", {
    get: function () {
      return this._redFactionPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "blueFactionPoints", {
    get: function () {
      return this._blueFactionPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "percentRedFactionPoints", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.MathBase.clamp(this.redFactionPoints / (this.redFactionPoints + this.blueFactionPoints) * 100, 0, 100);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "percentBlueFactionPoints", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.MathBase.clamp(100 - this.percentRedFactionPoints, 0, 100);
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.update = function () {
    if (this.factionProtectionStatus != FactionEventVO.FACTION_PROTECTION_STATUS_OFF) {
      if (this.remainingFactionProtectionTimeInSeconds <= 0) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUpdateFactionProtectionVO.C2SUpdateFactionProtectionVO());
      } else {
        __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE, this));
      }
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "isActive", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isActive").get.call(this) && this._gotSEI && (!this.isOneLMSActive || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID));
    },
    set: function (__s91param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isActive").set.call(this, __s91param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "lastManStandingRedActive", {
    get: function () {
      return this._lastManStandingRedActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "lastManStandingBlueActive", {
    get: function () {
      return this._lastManStandingBlueActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "capitalReachableBlue", {
    get: function () {
      return this._capitalReachableBlue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "capitalReachableRed", {
    get: function () {
      return this._capitalReachableRed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "otherFactionKingPlayerId", {
    get: function () {
      if (this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.BLUE_FACTION) {
        return __dep_exact_26a421b704832cff_1.DungeonConst.RED_FACTION_KING;
      } else if (this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.RED_FACTION) {
        return __dep_exact_26a421b704832cff_1.DungeonConst.BLUE_FACTION_KING;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isOtherCapitalReachable", {
    get: function () {
      if (this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.BLUE_FACTION) {
        return this.capitalReachableRed;
      } else {
        return this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.RED_FACTION && this.capitalReachableBlue;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isSpectator", {
    get: function () {
      return this._unlocked && __dep_export_CastleModel.CastleModel.userData.getOwnMapObjects(-1, __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID).length == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isActiveInEvent", {
    get: function () {
      return this._isActiveInEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isOneLMSActive", {
    get: function () {
      return this._lastManStandingBlueActive || this._lastManStandingRedActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isMyFactionInLMS", {
    get: function () {
      if (this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.BLUE_FACTION) {
        return this.lastManStandingBlueActive;
      } else {
        return this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.RED_FACTION && this.lastManStandingRedActive;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isOtherFactionInLMS", {
    get: function () {
      if (this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.BLUE_FACTION) {
        return this.lastManStandingRedActive;
      } else {
        return this.ownFaction == __dep_exact_26a421b704832cff_3.FactionConst.RED_FACTION && this.lastManStandingBlueActive;
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.onDestroy = function () {
    if (this._gotSEI && __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID)) {
      __dep_export_CastleModel.CastleModel.specialEventData.parse_SDE({
        SD: [__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION]
      });
    }
    for (var __s124local0 = 0, __s124local1 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s124local0 < __s124local1.length; __s124local0++) {
      var __s124local2 = __s124local1[__s124local0];
      if (__s124local2 !== undefined && __s124local2.isMyMovement && __s124local2.kingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID && __s124local2.lordVO) {
        __dep_export_CastleModel.CastleModel.lordData.lockLord(__s124local2.lordVO.id);
      }
    }
    __dep_export_CastleModel.CastleModel.armyData.removeAllMovementsByKingdomID(__dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID);
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  Object.defineProperty(FactionEventVO.prototype, "factionBalanceRed", {
    get: function () {
      return this._factionBalanceRed;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.openDialog = function (__s133param0 = true) {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
  };
  Object.defineProperty(FactionEventVO.prototype, "distanceMap", {
    get: function () {
      return this._distanceMap;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.getOwnLeagueEventVO = function () {
    return this._leaguetypes.get(this._ownLeagueID).get(this._rewardSetId);
  };
  Object.defineProperty(FactionEventVO.prototype, "leaguetypes", {
    get: function () {
      return this._leaguetypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "ownLeagueID", {
    get: function () {
      return this._ownLeagueID;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.setRankAndPoints = function (__s143param0, __s143param1, __s143param2) {
    this.getOwnLeagueEventVO().setRankAndPoints([__s143param0[0]], [__s143param1[0]], null);
  };
  Object.defineProperty(FactionEventVO.prototype, "ownRank", {
    get: function () {
      return this.getOwnLeagueEventVO().ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "ownPoints", {
    get: function () {
      return this.getOwnLeagueEventVO().ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "towerInfos", {
    get: function () {
      return this._towerInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "capitalInfos", {
    get: function () {
      return this._capitalInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "villageInfos", {
    get: function () {
      return this._villageInfos;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.getTowerByID = function (__s155param0) {
    return this.towerInfos.get(__s155param0);
  };
  FactionEventVO.prototype.getTowersByLane = function (__s157param0) {
    var __s157local0 = [];
    if (this.towerInfos != null) {
      for (var __s157local1 = 0, __s157local2 = Array.from(this.towerInfos.values()); __s157local1 < __s157local2.length; __s157local1++) {
        var __s157local3 = __s157local2[__s157local1];
        if (__s157local3 !== undefined && __s157local3.laneID == __s157param0) {
          __s157local0.push(__s157local3);
        }
      }
    }
    __s157local0.sort(this.bindFunction(this.sortByTowerID));
    return __s157local0;
  };
  FactionEventVO.prototype.sortByTowerID = function (__s163param0, __s163param1) {
    return __s163param0.specialCampID - __s163param1.specialCampID;
  };
  FactionEventVO.prototype.getVillageByPosition = function (__s165param0) {
    return this.villageInfos.get(__s165param0.toString());
  };
  FactionEventVO.prototype.getVillagesByTower = function (__s167param0) {
    var __s167local0 = [];
    for (var __s167local1 = 0, __s167local2 = this.getTowerByID(__s167param0).villagePositions; __s167local1 < __s167local2.length; __s167local1++) {
      var __s167local3 = __s167local2[__s167local1];
      if (__s167local3 !== undefined) {
        __s167local0.push(this.getVillageByPosition(__s167local3));
      }
    }
    return __s167local0;
  };
  FactionEventVO.prototype.getTowerLanesByCapitalID = function (__s172param0) {
    var __s172local0 = [];
    for (var __s172local1 = 0, __s172local2 = this.getCapitalByID(__s172param0).towerLanes; __s172local1 < __s172local2.length; __s172local1++) {
      var __s172local3 = __s172local2[__s172local1];
      if (__s172local3 !== undefined) {
        __s172local0.push(this.getTowersByLane(__s172local3));
      }
    }
    return __s172local0;
  };
  FactionEventVO.prototype.getCapitalByLane = function (__s177param0) {
    if (this.capitalInfos != null) {
      for (var __s177local0 = 0, __s177local1 = Array.from(this.capitalInfos.values()); __s177local0 < __s177local1.length; __s177local0++) {
        var __s177local2 = __s177local1[__s177local0];
        if (__s177local2 !== undefined && __s177local2.belongsToLane(__s177param0)) {
          return __s177local2;
        }
      }
    }
    return null;
  };
  FactionEventVO.prototype.getCapitalByID = function (__s183param0) {
    return this._capitalInfos.get(__s183param0);
  };
  Object.defineProperty(FactionEventVO.prototype, "attackableCamps", {
    get: function () {
      return this._attackableCamps;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isInPreOrActivePeaceMode", {
    get: function () {
      return this.factionProtectionStatus == FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME || this.factionProtectionStatus == FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isAdvisorActive", {
    get: function () {
      return this._isAdvisorActive;
    },
    set: function (__s193param0) {
      this._isAdvisorActive = __s193param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "isAdvisorActivationFree", {
    get: function () {
      return this._isAdvisorActivationFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventVO.prototype, "advisorActivationCurrencyId", {
    get: function () {
      return this._advisorActivationCurrencyId;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.prototype.getAdvisorActivationInfo = function () {
    return new __dep_export_AdvisorActivationInfoVO.AdvisorActivationInfoVO(this._isAdvisorActive, this._isAdvisorActivationFree, this._advisorActivationCurrencyId);
  };
  Object.defineProperty(FactionEventVO.prototype, "advisorIconSubFrame", {
    get: function () {
      if (this._ownFactionID == __dep_exact_26a421b704832cff_3.FactionConst.RED_FACTION) {
        return 1;
      } else {
        return 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionEventVO.EVENT_BUILDING_WOD = 267;
  FactionEventVO.FACTION_PROTECTION_STATUS_OFF = -1;
  FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME = 0;
  FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE = 1;
  FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN = 2;
  return FactionEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.FactionEventVO = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreUpdatable", "IAdvisorEventVO");
