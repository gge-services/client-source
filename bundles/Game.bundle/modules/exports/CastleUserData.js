Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_7 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_8 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_9 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_10 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_11 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SUserAttackProtectionVO = require("gge-module:export_C2SUserAttackProtectionVO");
var __dep_export_OpenGateEvent = require("gge-module:export_OpenGateEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_CastleNameCastleDialogProperties = require("gge-module:export_CastleNameCastleDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleOwnSplitRunData = require("gge-module:export_CastleOwnSplitRunData");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_AttackCounterVO = require("gge-module:export_AttackCounterVO");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_export_CastleBookmarkHelper = require("gge-module:export_CastleBookmarkHelper");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __s0local0 = function (__s1param0) {
  function CastleUserData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._nextUpdateInterval = 0;
    __s3local0._updateInterval = 1000;
    __s3local0.firstLogin = false;
    __s3local0._hasValidatedEmail = false;
    __s3local0._hasSentMailVerification = false;
    __s3local0.currency = new Map();
    __s3local0._userXP = 0;
    __s3local0._userXPcurrentLevel = 0;
    __s3local0._userXPtoNextLevel = 0;
    __s3local0._userHonor = 0;
    __s3local0._userRanking = 0;
    __s3local0._userLegendLevel = 0;
    __s3local0._allianceID = 0;
    __s3local0._allianceRank = 0;
    __s3local0._allianceCurrentFame = 0;
    __s3local0._isSearchingAlliance = false;
    __s3local0._isPayUser = false;
    __s3local0._paymentDoppler = 0;
    __s3local0._isCheater = false;
    __s3local0._noobProtected = false;
    __s3local0._noobProtectionRemainingTime = 0;
    __s3local0._peaceProtectionRemainingStatusTime = 0;
    __s3local0._noobTimeOffset = 0;
    __s3local0._peaceStatusTimeOffset = 0;
    __s3local0._peaceModeStatus = 0;
    __s3local0._lifeTimeSpent = 0;
    __s3local0.blockDialogs = false;
    __s3local0.joinCastleCount = 0;
    __s3local0._mayChangeCrest = false;
    __s3local0._hasPremiumFlag = false;
    __s3local0._relocationCount = 0;
    __s3local0._relocationDurationEndTime = 0;
    __s3local0._relocationCooldownEndTime = 0;
    __s3local0._destinationX = 0;
    __s3local0._destinationY = 0;
    __s3local0._aquaPoints = -1;
    __s3local0._noobProtectedPerKingdom = new Map();
    __s3local0._selectedHeroID = 801;
    __s3local0._levelUpInSession = false;
    __s3local0._facebookCookie = "";
    __s3local0._facebookEmail = "";
    __s3local0._isConnectedToFacebook = false;
    __s3local0._isPlayerNameTemporary = false;
    __s3local0._isPasswordTemporary = false;
    __s3local0._isEmailTemporary = false;
    __s3local0._persistentLogin = false;
    __s3local0._acceptedTermsAndConditions = false;
    __s3local0._connectToTempServer = false;
    __s3local0._connectToABGServer = false;
    __s3local0._apiTokenExpirationSeconds = 0;
    __s3local0._foodFrozen = false;
    __s3local0._newCapTooNotifications = 0;
    __s3local0.toShowDialogsAfterJAA = [];
    __s3local0._kingstowerList = new __dep_export_CastleKingstowerList.CastleKingstowerList();
    __s3local0._monumentList = new __dep_export_CastleMonumentList.CastleMonumentList();
    __s3local0._laboratoryList = new __dep_export_CastleLaboratoryList.CastleLaboratoryList();
    __s3local0.splitRunData = new __dep_export_CastleOwnSplitRunData.CastleOwnSplitRunData(__s3local0);
    __s3local0.attackCounter = new __dep_export_AttackCounterVO.AttackCounterVO();
    __s3local0._globalConstructionItemEffects = new Map();
    __s3local0._globalConstructionItemBoni = new Map();
    if (__dep_export_CastleModel.CastleModel.userData) {
      __s3local0.connectToTempServer = __dep_export_CastleModel.CastleModel.userData.connectToTempServer;
      __s3local0.specialServerLoginToken = __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken;
    }
    __s3local0.onAPITokenRequestSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUserData, __s1param0);
  CastleUserData.prototype.parse_GPI = function (__s6param0) {
    this.userID = __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.USER_ID];
    this.playerID = __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.TARGET_PLAYER_ID];
    this.userName = __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.PLAYER_NAME];
    this.email = __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.EMAIL_2] != "-1" ? __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.EMAIL_2] : "";
    this._hasValidatedEmail = __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.HAS_CONFIRMED_EMAIL] == 1;
    this._isEmailTemporary = !this.hasValidatedEmail;
    this._isCheater = __s6param0[__dep_exact_26a421b704832cff_1.CommKeys.ADMIN_SECURITY_LEVEL] > 0;
    this._acceptedTermsAndConditions = __s6param0.CTAC > 0;
    if (this._acceptedTermsAndConditions == 0 && this.env.useexternallinks) {
      __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleAcceptGDPRDialog.CastleAcceptGDPRDialog, null, true, Number.MAX_VALUE);
    }
    this.controller.dispatchEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.GPI_UPDATE);
  };
  CastleUserData.prototype.parse_LTS = function (__s9param0) {
    if (__s9param0) {
      this._lifeTimeSpent = __dep_exact_f855840627e6e145.int(__s9param0.LTS);
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT));
    }
  };
  CastleUserData.prototype.parse_GHO = function (__s12param0) {
    if (__s12param0) {
      this._userHonor = __dep_exact_f855840627e6e145.int(__s12param0.H);
      this._userRanking = __dep_exact_f855840627e6e145.int(__s12param0.RP);
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USERDATA));
    }
  };
  CastleUserData.prototype.parse_GAL = function (__s15param0) {
    if (__s15param0) {
      this._allianceID = __dep_exact_f855840627e6e145.int(__s15param0.AID);
      this._allianceRank = __dep_exact_f855840627e6e145.int(__s15param0.R);
      this._allianceName = __s15param0.AN ? __s15param0.AN : "";
      this._allianceCurrentFame = __dep_exact_f855840627e6e145.int(__s15param0.ACF);
      this._isSearchingAlliance = parseInt(__s15param0.SA) == 1;
      __dep_export_CastleModel.CastleModel.armyData.checkAllAttackMovements();
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT) && __dep_export_Iso.Iso.controller.dataUpdater) {
        __dep_export_Iso.Iso.controller.dataUpdater.updateEventBuildings();
      }
      if (this._allianceID < 0) {
        __dep_export_CastleModel.CastleModel.chatData.resetHistory();
        __dep_export_CastleModel.CastleModel.allianceData.resetMyAlliance();
      }
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED));
    }
  };
  CastleUserData.prototype.parse_GEM = function (__s20param0) {
    if (__s20param0) {
      this._mayChangeCrest = __s20param0.MCE == 1;
      this._playerCrest = new __dep_export_CrestVO.CrestVO();
      this._playerCrest.loadFromParamObject(__s20param0);
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR));
    }
  };
  CastleUserData.prototype.parse_GXP = function (__s23param0) {
    if (__s23param0) {
      var __s23local0 = this._userXP;
      this._userXP = __dep_exact_f855840627e6e145.int(__s23param0.XP);
      this.userLevel = __s23param0.LVL;
      this.userLegendLevel = this.userLevel >= __dep_exact_26a421b704832cff_4.PlayerConst.LEVEL_CAP ? __dep_exact_26a421b704832cff_4.PlayerConst.getLegendLevelFromXP(this._userXP) : 0;
      if (this.userLegendLevel > 0) {
        this._userXPcurrentLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_4.PlayerConst.getXPFromLegendLevel(this.userLegendLevel));
        this._userXPtoNextLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_4.PlayerConst.getXPFromLegendLevel(this.userLegendLevel + 1));
      } else {
        this._userXPcurrentLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_4.PlayerConst.getXPFromLevel(this.userLevel));
        this._userXPtoNextLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_4.PlayerConst.getXPFromLevel(this.userLevel + 1));
      }
      this.controller.dispatchEvent(new __dep_export_CastleXPChangedEvent.CastleXPChangedEvent(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, __s23local0));
    }
  };
  CastleUserData.prototype.parse_GAP = function (__s28param0) {
    if (__s28param0) {
      __dep_export_CastleModel.CastleModel.userData.aquaPoints = __s28param0.P;
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints = __s28param0.A;
      }
      if (__dep_export_Iso.Iso.controller.dataUpdater && __s28param0.O > 0) {
        __dep_export_Iso.Iso.controller.dataUpdater.spawnAquaPointsEffect(__s28param0.O, __s28param0.DP);
      }
    }
  };
  CastleUserData.prototype.parse_GCL = function (__s33param0) {
    var __s33local0;
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
      __s33local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
    }
    this._castleList = new __dep_export_CastleListVO.CastleListVO();
    this._castleList.ownerID = __dep_exact_f855840627e6e145.int(this.playerID);
    if (__s33param0) {
      this._castleList.parseCastleList(__s33param0, __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID));
      if (__s33local0 && this.getOwnMapObjects(__s33local0.areaType, __s33local0.kingdomID).length == 0) {
        __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID));
      }
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST));
    }
  };
  CastleUserData.prototype.parse_MIR = function (__s38param0) {
    if (__s38param0.gcl) {
      __dep_export_CastleModel.CastleModel.userData.parse_GCL(__s38param0.gcl);
    }
    if (__s38param0.gkl) {
      __dep_export_CastleModel.CastleModel.userData.kingstowerList.parseGKL(__s38param0.gkl);
    }
    if (__s38param0.gml) {
      __dep_export_CastleModel.CastleModel.userData.monumentList.parseGML(__s38param0.gml);
    }
    if (__s38param0.gll) {
      __dep_export_CastleModel.CastleModel.userData.laboratoryList.parseGLL(__s38param0.gll);
    }
  };
  CastleUserData.prototype.parse_MIR_openDialog = function (__s44param0) {
    var __s44local0 = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s44param0.CID, __s44param0.KID);
    if (!__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isIngameState) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().blockDialogs = true;
    }
    if (__s44local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameCastleDialog.CastleNameCastleDialog, new __dep_export_CastleNameCastleDialogProperties.CastleNameCastleDialogProperties(__s44local0, __s44param0.KID, __s44param0.CID), false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  CastleUserData.prototype.parse_UPI = function (__s48param0) {
    if (__s48param0) {
      this._isPayUser = __s48param0.PU == 1;
      this._paymentDoppler = __dep_exact_f855840627e6e145.int(__s48param0.DC);
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_PAYUSER_INFO));
    }
  };
  CastleUserData.prototype.parse_GPF = function (__s51param0) {
    if (__s51param0) {
      this._hasPremiumFlag = __s51param0.PF == 1 || __s51param0.PF == 1;
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PREMIUM_FLAG_CHANGED));
    }
  };
  CastleUserData.prototype.parse_KGV = function (__s54param0) {
    if (__s54param0) {
      this._villageList = new __dep_export_CastleDetailedVillageList.CastleDetailedVillageList();
      this._villageList.parseKGV(__s54param0);
      __dep_export_CastleModel.CastleModel.kingdomData.dispatchEvent(new __dep_export_CastleKingdomEvent.CastleKingdomEvent(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this._villageList));
    }
  };
  CastleUserData.prototype.getCastleListWithLandmarks = function (__s57param0) {
    var __s57local0;
    if (__s57param0 === undefined) {
      __s57param0 = true;
    }
    (__s57local0 = (__s57local0 = (__s57local0 = (__s57local0 = __s57param0 ? this._castleList.listOfCastlesWithoutEventCamps : this._castleList.list).concat(this._kingstowerList.completeList)).concat(this._monumentList.completeList)).concat(this._laboratoryList.completeList)).sort(__dep_export_ClientConstSort.ClientConstSort.sortByKingdomId);
    return __s57local0;
  };
  CastleUserData.prototype.getCastleList = function (__s60param0) {
    var __s60local0;
    if (__s60param0 === undefined) {
      __s60param0 = true;
    }
    (__s60local0 = __s60param0 ? this._castleList.listOfCastlesWithoutEventCamps : this._castleList.list).sort(__dep_export_ClientConstSort.ClientConstSort.sortByKingdomId);
    return __s60local0;
  };
  Object.defineProperty(CastleUserData.prototype, "allianceCurrentFame", {
    get: function () {
      return this._allianceCurrentFame;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.userValidatedEmail = function () {
    this._hasValidatedEmail = true;
    this._isEmailTemporary = false;
    this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.VALIDATED_EMAIL));
    this.controller.dispatchEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.GPI_UPDATE);
  };
  CastleUserData.prototype.parse_MOS = function (__s67param0) {
    if (__s67param0) {
      var __s67local0 = this.getOwnCastle(__s67param0.CID, __s67param0.KID);
      __s67local0.remainingOpenGateTime = __dep_exact_f855840627e6e145.int(__s67param0.RPT);
      if (__s67local0.remainingOpenGateTime > 0) {
        __s67local0.openGateCounter++;
        this.controller.dispatchEvent(new __dep_export_OpenGateEvent.OpenGateEvent(__dep_export_OpenGateEvent.OpenGateEvent.OPEN_GATE_CHANGED));
      } else {
        this.controller.dispatchEvent(new __dep_export_OpenGateEvent.OpenGateEvent(__dep_export_OpenGateEvent.OpenGateEvent.OPEN_GATE_FINISHED));
      }
      __dep_export_CastleModel.CastleModel.boostData.dispatchEvent(new __dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
    }
  };
  CastleUserData.prototype.parse_MAS = function (__s72param0) {
    if (__s72param0) {
      var __s72local0 = this.getOwnCastle(__s72param0.CID, __s72param0.KID);
      __s72local0.remainingAbandonOutpostTime = __dep_exact_f855840627e6e145.int(__s72param0.AOT);
      __s72local0.remainingCancelAbandonOutpostTime = __dep_exact_f855840627e6e145.int(__s72param0.CAT);
    }
  };
  CastleUserData.prototype.parse_MAC = function (__s75param0) {
    if (__s75param0) {
      var __s75local0 = this.getOwnCastle(__s75param0.CID, __s75param0.KID);
      __s75local0.remainingAbandonOutpostTime = -1;
      __s75local0.remainingCancelAbandonOutpostTime = -1;
    }
  };
  CastleUserData.prototype.parse_UAP = function (__s78param0) {
    if (__s78param0) {
      this._noobProtectedPerKingdom.set(__s78param0.KID, __dep_exact_f855840627e6e145.int(__s78param0.NS) > 0);
      var __s78local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (__s78param0.KID == __s78local0) {
        var __s78local1 = __dep_exact_f855840627e6e145.int(__s78param0.NS);
        if (__s78local1 > 0) {
          this._noobProtected = true;
          this._noobProtectionRemainingTime = __s78local1;
          this._noobTimeOffset = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000);
          this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOB_PROTECTION));
        } else {
          if (this._noobProtected) {
            this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOBTIME_FINISHED));
          }
          this._noobProtected = false;
          this._noobProtectionRemainingTime = 0;
        }
        if (__s78param0.KID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
          var __s78local2 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
          if (__s78local2) {
            __s78local2.parse_uap(__s78param0);
          }
        } else {
          this._peaceModeStatus = __dep_exact_f855840627e6e145.int(__s78param0.PMS);
          var __s78local3 = __dep_exact_f855840627e6e145.int(__s78param0.PMT);
          if (__s78local3 > 0 && this._peaceModeStatus != CastleUserData.PEACEMODE_STATUS_OFF) {
            this._peaceProtectionRemainingStatusTime = __s78local3;
            this._peaceStatusTimeOffset = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000);
            this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION));
          } else {
            this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACETIME_FINISHED));
          }
          this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ATTACKPROTECTION_UPDATED));
          __dep_export_CastleModel.CastleModel.boostData.dispatchEvent(new __dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
        }
      }
    }
  };
  CastleUserData.prototype.parse_GRI = function (__s90param0) {
    if (__s90param0) {
      this._relocationCount = __dep_exact_f855840627e6e145.int(__s90param0.RLC);
      this._relocationDurationEndTime = __dep_exact_f855840627e6e145.int(__s90param0.JM == 0 ? Math.max(0, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s90param0.RD * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC) : -1);
      this._relocationCooldownEndTime = __dep_exact_f855840627e6e145.int(Math.max(0, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s90param0.RMC * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC));
      this._destinationX = __dep_exact_f855840627e6e145.int(__s90param0.DX);
      this._destinationY = __dep_exact_f855840627e6e145.int(__s90param0.DY);
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.RELOCATE_INFO_UPDATED));
    }
  };
  CastleUserData.prototype.parse_LEVEL_UP = function (__s93param0, __s93param1 = false) {
    if (__s93param1) {
      this.userLegendLevel = __s93param0;
      this.userLevel = __dep_exact_26a421b704832cff_4.PlayerConst.LEVEL_CAP;
    } else {
      var __s93local0 = __dep_exact_f855840627e6e145.int(this.userLevel);
      this.userLevel = __s93param0;
      if (__s93local0 != this.userLevel) {
        __dep_export_CastleModel.CastleModel.specialEventData.updateEvents();
      }
    }
    this._levelUpInSession = true;
    this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP));
  };
  CastleUserData.prototype.parse_SCD = function (__s98param0) {
    this._isPlayerNameTemporary = __s98param0[__dep_exact_26a421b704832cff_1.CommKeys.IS_PLAYER_NAME_TEMPORARY];
    this._isPasswordTemporary = __s98param0[__dep_exact_26a421b704832cff_1.CommKeys.IS_PASSWORD_TEMPORARY];
    this._isEmailTemporary = __s98param0[__dep_exact_26a421b704832cff_1.CommKeys.IS_EMAIL_TEMPORARY];
  };
  CastleUserData.prototype.parse_FCS = function (__s100param0) {
    var __s100local0 = __s100param0[__dep_exact_26a421b704832cff_1.CommKeys.IS_CONNECTED_TO_FACEBOOK];
    this._isConnectedToFacebook = __s100local0;
    if (!__s100local0) {
      this.resetFacebookData();
    }
  };
  CastleUserData.prototype.parse_DTS = function (__s103param0) {
    if (__s103param0) {
      this._foodFrozen = __s103param0[__dep_exact_26a421b704832cff_1.CommKeys.DOWNTIME_STATUS] == 1;
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED));
    }
  };
  Object.defineProperty(CastleUserData.prototype, "userLevel", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_2.BasicUserData.prototype, "userLevel").get.call(this);
    },
    set: function (__s108param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_2.BasicUserData.prototype, "userLevel").set.call(this, __s108param0);
      __dep_exact_9e901e8e2483a22f_6.PerformanceMonitoringService.getInstance().externalLogCommand.userLevel = this.userLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userLegendLevel", {
    get: function () {
      return this._userLegendLevel;
    },
    set: function (__s112param0) {
      this._userLegendLevel = __s112param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.executeUpdate = function (__s114param0) {
    if (this._noobProtected && this.getRemainingNoobTime() <= 0) {
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOBTIME_FINISHED));
      this._noobProtected = false;
    }
    if (!(this.getRemainingPeaceStatusTime() > 0) || this._peaceModeStatus == CastleUserData.PEACEMODE_STATUS_OFF) {
      switch (this._peaceModeStatus) {
        case CastleUserData.PEACEMODE_STATUS_PRETIME:
        case CastleUserData.PEACEMODE_STATUS_PEACETIME:
        case CastleUserData.PEACEMODE_STATUS_POSTTIME:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUserAttackProtectionVO.C2SUserAttackProtectionVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID));
      }
    }
  };
  CastleUserData.prototype.getRemainingNoobTime = function () {
    return __dep_exact_f855840627e6e145.int(this._noobProtectionRemainingTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 - this._noobTimeOffset));
  };
  CastleUserData.prototype.isInNormalNoobProtection = function () {
    return this.getRemainingNoobTime() > 0 && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_10.WorldIsland.KINGDOM_ID;
  };
  CastleUserData.prototype.getRemainingPeaceStatusTime = function () {
    return __dep_exact_f855840627e6e145.int(this._peaceProtectionRemainingStatusTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 - this._peaceStatusTimeOffset));
  };
  CastleUserData.prototype.getOwnCastle = function (__s125param0, __s125param1 = -1) {
    if (__s125param1 == -1) {
      __s125param1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    }
    for (var __s125local0 = 0, __s125local1 = this._castleList.list; __s125local0 < __s125local1.length; __s125local0++) {
      var __s125local2 = __s125local1[__s125local0];
      if (__s125local2 !== undefined && __s125local2.equalsOtherWMO(__s125param0, __s125param1)) {
        return __s125local2;
      }
    }
    if (this._villageList && this.isVillageKingdom(__s125param1)) {
      for (var __s125local3 = 0, __s125local4 = this._villageList.completeList; __s125local3 < __s125local4.length; __s125local3++) {
        var __s125local5 = __s125local4[__s125local3];
        if (__s125local5 !== undefined && __s125local5.villageMapObjectVO.equalsOtherWMO(__s125param0, __s125param1)) {
          return __s125local5.villageMapObjectVO;
        }
      }
    }
    if (this._kingstowerList && this._kingstowerList.completeList && __s125param1 == __dep_exact_26a421b704832cff_7.WorldClassic.KINGDOM_ID) {
      for (var __s125local6 = 0, __s125local7 = this._kingstowerList.completeList; __s125local6 < __s125local7.length; __s125local6++) {
        var __s125local8 = __s125local7[__s125local6];
        if (__s125local8 !== undefined && __s125local8.equalsOtherWMO(__s125param0, __s125param1)) {
          return __s125local8;
        }
      }
    }
    if (this._monumentList && this._monumentList.completeList && __s125param1 == __dep_exact_26a421b704832cff_7.WorldClassic.KINGDOM_ID) {
      for (var __s125local9 = 0, __s125local10 = this._monumentList.completeList; __s125local9 < __s125local10.length; __s125local9++) {
        var __s125local11 = __s125local10[__s125local9];
        if (__s125local11 !== undefined && __s125local11.equalsOtherWMO(__s125param0, __s125param1)) {
          return __s125local11;
        }
      }
    }
    if (this._laboratoryList && this._laboratoryList.completeList) {
      for (var __s125local12 = 0, __s125local13 = this._laboratoryList.completeList; __s125local12 < __s125local13.length; __s125local12++) {
        var __s125local14 = __s125local13[__s125local12];
        if (__s125local14 !== undefined && __s125local14.equalsOtherWMO(__s125param0, __s125param1)) {
          return __s125local14;
        }
      }
    }
    return null;
  };
  CastleUserData.prototype.isVillageKingdom = function (__s147param0) {
    return __s147param0 == __dep_exact_26a421b704832cff_7.WorldClassic.KINGDOM_ID || __s147param0 == __dep_exact_26a421b704832cff_8.WorldDessert.KINGDOM_ID || __s147param0 == __dep_exact_26a421b704832cff_9.WorldIce.KINGDOM_ID || __s147param0 == __dep_exact_26a421b704832cff_11.WorldVolcano.KINGDOM_ID || __s147param0 == __dep_exact_26a421b704832cff_10.WorldIsland.KINGDOM_ID;
  };
  Object.defineProperty(CastleUserData.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXP", {
    get: function () {
      return this._userXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXPcurrentLevel", {
    get: function () {
      return this._userXPcurrentLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXPtoNextLevel", {
    get: function () {
      return this._userXPtoNextLevel - this._userXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXPcurrentLevelRange", {
    get: function () {
      return this._userXPtoNextLevel - this._userXPcurrentLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "xpPercentToNextLevel", {
    get: function () {
      return 1 - this.userXPtoNextLevel / this.userXPcurrentLevelRange;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "playerCrest", {
    get: function () {
      if (this.userLevel < 1 || this._playerCrest && this._playerCrest.isBlack) {
        return __dep_export_ClientConstCrest.ClientConstCrest.tutorialCrestVO;
      } else {
        return this._playerCrest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "castleList", {
    get: function () {
      return this._castleList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "noobProtected", {
    get: function () {
      return this._noobProtected;
    },
    set: function (__s169param0) {
      this._noobProtected = __s169param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasValidatedEmail", {
    get: function () {
      return this._hasValidatedEmail;
    },
    set: function (__s173param0) {
      this._hasValidatedEmail = __s173param0;
      if (__s173param0) {
        this._isEmailTemporary = false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userHonor", {
    get: function () {
      return this._userHonor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "allianceID", {
    get: function () {
      return this._allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    set: function (__s182param0) {
      this._allianceRank = __s182param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isLeader", {
    get: function () {
      return this.allianceRank == __dep_exact_26a421b704832cff.AllianceConst.RANK_LEADER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "allianceName", {
    get: function () {
      if (this.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceName;
      } else {
        return this._allianceName;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isInAlliance", {
    get: function () {
      return this._allianceID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    set: function (__s194param0) {
      this._playerID = __s194param0;
      __dep_export_CastleModel.CastleModel.localData.savePlayerID(__s194param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isAllianceLeader", {
    get: function () {
      var __s196local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
      return !!__s196local0 && !!__s196local0.allianceLeader && __s196local0.allianceLeader.playerID == this.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "canInviteToAlliance", {
    get: function () {
      return this.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.hasRight(this._allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_INVITE);
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.canWriteMessageTo = function (__s200param0) {
    return !!__s200param0 && __s200param0.playerLevel >= __dep_exact_26a421b704832cff_6.TutorialConst.LAST_TUTORIAL_STEP_LEVEL && this.userLevel >= __dep_exact_26a421b704832cff_6.TutorialConst.LAST_TUTORIAL_STEP_LEVEL;
  };
  CastleUserData.prototype.getMessageTooltip = function (__s202param0) {
    if (this.canWriteMessageTo(__s202param0)) {
      return "dialog_inbox_writeNewMessage";
    } else if (this.userLevel >= __dep_exact_26a421b704832cff_6.TutorialConst.LAST_TUTORIAL_STEP_LEVEL) {
      return "player_notReceiveMessages";
    } else {
      return __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    }
  };
  CastleUserData.prototype.canTradeResourcesTo = function (__s207param0) {
    return !__s207param0.isRuin && !(this.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TRADE) && !(__s207param0.playerLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS) && __s207param0.playerID != this.playerID;
  };
  CastleUserData.prototype.getTradeResourceTooltip = function (__s209param0) {
    if (__s209param0.isRuin) {
      return "isRuin";
    } else if (this.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TRADE) {
      return __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TRADE;
    } else if (__s209param0.playerLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS) {
      return "needLevel_resourceTransport" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS;
    } else {
      return "ringmenu_trade_menu";
    }
  };
  CastleUserData.prototype.canSetBookmark = function (__s215param0) {
    var __s215local0 = __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForPlayer(__s215param0);
    var __s215local1 = __dep_export_CastleModel.CastleModel.bookmarkData.isPlayerListFull;
    var __s215local2 = this.isInAlliance;
    var __s215local3 = __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForAlliance(__s215param0);
    var __s215local4 = __dep_export_CastleModel.CastleModel.bookmarkData.isAllianceListFull;
    var __s215local5 = __dep_export_CastleModel.CastleModel.bookmarkData.getBookmarkForWMO(__s215param0, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.getPlayerTypes()) != null;
    return !!__s215local0 && !__s215local1 && !__s215local5 || !!__s215local3 && !!__s215local2 && !__s215local4;
  };
  CastleUserData.prototype.getSetBookmarkTooltip = function (__s217param0) {
    var __s217local0 = __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForPlayer(__s217param0);
    var __s217local1 = __dep_export_CastleModel.CastleModel.bookmarkData.isPlayerListFull;
    var __s217local2 = this.isInAlliance;
    var __s217local3 = __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForAlliance(__s217param0);
    var __s217local4 = __dep_export_CastleModel.CastleModel.bookmarkData.isAllianceListFull;
    var __s217local5 = __dep_export_CastleModel.CastleModel.bookmarkData.getBookmarkForWMO(__s217param0, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.getPlayerTypes()) != null;
    var __s217local6 = __s217local0 && !__s217local1 && !__s217local5;
    var __s217local7 = __s217local3 && __s217local2 && !__s217local4;
    return this.getSetBookmarkTooltipInner(__s217local6, __s217local7, __s217local5, __s217local4, __s217local1, true);
  };
  CastleUserData.prototype.getSetBookmarkTooltipInner = function (__s219param0, __s219param1, __s219param2, __s219param3, __s219param4, __s219param5) {
    if (__s219param0) {
      if (__s219param5) {
        return "ringmenu_markLocation";
      } else {
        return "";
      }
    } else if (__s219param1) {
      if (__s219param5) {
        return "ringmenu_markLocation";
      } else {
        return "";
      }
    } else if (__s219param2) {
      return "Bookmarks_Menu_changeName_tooltip";
    } else if (__s219param3 || __s219param4) {
      return "Bookmarks_markLocation_listFull_tooltip";
    } else {
      return "Bookmarks_markLocation_notBookmarkable_tooltip";
    }
  };
  Object.defineProperty(CastleUserData.prototype, "isPayUser", {
    get: function () {
      return this._isPayUser;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isCheater", {
    get: function () {
      return this._isCheater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userCanOpenDefenceScreen", {
    get: function () {
      return this.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.isUserInMyAlliance = function (__s236param0) {
    return !!__s236param0 && __s236param0.isInAlliance && __s236param0.allianceID == this._allianceID;
  };
  CastleUserData.prototype.isUserInMyAllianceAndCheckFactionKingdom = function (__s238param0) {
    if (!__s238param0 || !__s238param0.movementOwnerInfo) {
      return false;
    }
    if (__s238param0.kingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
      var __s238local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (__s238local0) {
        return __s238param0.movementOwnerInfo.factionID == __s238local0.ownFaction;
      }
    }
    return this.isUserInMyAlliance(__s238param0.movementOwnerInfo);
  };
  Object.defineProperty(CastleUserData.prototype, "peaceModeStatus", {
    get: function () {
      return this._peaceModeStatus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isInPeaceMode", {
    get: function () {
      return this.peaceModeStatus == CastleUserData.PEACEMODE_STATUS_PEACETIME || this.peaceModeStatus == CastleUserData.PEACEMODE_STATUS_PRETIME;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.hasOutpostsInKingdom = function (__s247param0) {
    return this._castleList.getFilteredList(__s247param0).length > 1;
  };
  Object.defineProperty(CastleUserData.prototype, "hasMetropol", {
    get: function () {
      return this._castleList.getMetropol() != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasCapital", {
    get: function () {
      return this._castleList.getCapital() != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "mayChangeCrest", {
    get: function () {
      return this._mayChangeCrest;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.hasLevelFor = function (__s255param0) {
    return this.userLevel >= __s255param0;
  };
  Object.defineProperty(CastleUserData.prototype, "isSearchingAlliance", {
    get: function () {
      return this._isSearchingAlliance;
    },
    set: function (__s259param0) {
      this._isSearchingAlliance = __s259param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "paymentDopplerCount", {
    get: function () {
      return this._paymentDoppler;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasPaymentDoppler", {
    get: function () {
      return this._paymentDoppler > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasPremiumFlag", {
    get: function () {
      return this._hasPremiumFlag;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.update = function (__s267param0) {
    if (__s267param0 > this._nextUpdateInterval) {
      this._nextUpdateInterval = __s267param0 + this._updateInterval;
      this.executeUpdate(__s267param0);
    }
  };
  Object.defineProperty(CastleUserData.prototype, "villageList", {
    get: function () {
      return this._villageList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "relocationCount", {
    get: function () {
      return this._relocationCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "nextRelocationDuration", {
    get: function () {
      return __dep_exact_26a421b704832cff_5.RelocationConst.RELOCATION_DURATION[this._relocationCount == 0 ? 0 : 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "remainingRelocationCooldown", {
    get: function () {
      return Math.max(0, (this._relocationCooldownEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "remainingRelocationDuration", {
    get: function () {
      return Math.max(0, (this._relocationDurationEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasAlternativeQuestGiver", {
    get: function () {
      var __s280local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_1.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
      var __s280local1 = this.env.networkId == 1;
      var __s280local2 = __s280local0 == 1 || __s280local0 == 2 || __s280local0 == 3 || this.env.isTest;
      var __s280local3 = this.playerID % 2 == 0;
      var __s280local4 = false;
      switch (__s280local0) {
        case 1:
          if (this.playerID > 1686000) {
            __s280local4 = true;
          }
          break;
        case 2:
          if (this.playerID > 1188000) {
            __s280local4 = true;
          }
          break;
        case 3:
          if (this.playerID > 1929000) {
            __s280local4 = true;
          }
      }
      if (this.env.isTest) {
        __s280local4 = true;
      }
      return __s280local1 && __s280local2 && __s280local3 && __s280local4;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.sendInviterCodeToServer = function () {
    if (this.env.inviterCode) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_7.SetInviteCodeEvent.INVITE_CODE_SET, this.bindFunction(this.onInviteCodeSet));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_7.SetInviteCodeEvent.SET_INVITE_CODE_FAILED, this.bindFunction(this.onInviteCodeSet));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_exact_9e901e8e2483a22f_4.CoreC2SSetInviteCodeVO(this.env.inviterCode, this.env.invite_refer_method));
    }
  };
  CastleUserData.prototype.onInviteCodeSet = function (__s290param0) {
    if (__s290param0.type == __dep_exact_9e901e8e2483a22f_7.SetInviteCodeEvent.INVITE_CODE_SET) {
      __dep_exact_9e901e8e2483a22f_8.debug("invite code correctly set! yeay!");
    } else {
      __dep_exact_9e901e8e2483a22f_9.error("invite code failed");
      switch (__s290param0.statusId) {
        case __dep_exact_e9ed30ab7bbf7f50.CoreErrorIdConstants.FRIENDINVITE_WRONG_ZONE_ERROR:
          var __s290local0;
          var __s290local1 = this.env.inviterCode ? parseInt(this.env.inviterCode.split("-")[0], 36) : -1;
          if (__s290local1 >= 0) {
            var __s290local2 = __dep_exact_9e901e8e2483a22f_1.BasicModel.instanceProxy.instanceMap;
            if (__s290local2 != null) {
              for (var __s290local3 = 0, __s290local4 = __s290local2; __s290local3 < __s290local4.length; __s290local3++) {
                var __s290local5 = __s290local4[__s290local3];
                if (__s290local5 !== undefined && __s290local5.zoneId == __s290local1) {
                  __s290local0 = __s290local5;
                  break;
                }
              }
            }
            if (__s290local5) {
              __dep_exact_9e901e8e2483a22f_9.error("you should be connecting to zone " + __s290local1 + " (" + __dep_exact_92d05af59ee2ff30.Localize.text(__s290local0.instanceLocaId) + ")");
            } else {
              __dep_exact_9e901e8e2483a22f_9.error("can't find correct instance");
            }
          }
          break;
        case __dep_exact_e9ed30ab7bbf7f50.CoreErrorIdConstants.FRIENDINVITE_UNKNOWN_INVITER_ERROR:
          __dep_exact_9e901e8e2483a22f_9.error("could not find the user who invited you");
      }
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_7.SetInviteCodeEvent.INVITE_CODE_SET, this.bindFunction(this.onInviteCodeSet));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_7.SetInviteCodeEvent.SET_INVITE_CODE_FAILED, this.bindFunction(this.onInviteCodeSet));
  };
  Object.defineProperty(CastleUserData.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_5.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "kingstowerList", {
    get: function () {
      return this._kingstowerList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "monumentList", {
    get: function () {
      return this._monumentList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "laboratoryList", {
    get: function () {
      return this._laboratoryList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasSentMailVerification", {
    get: function () {
      return this._hasSentMailVerification;
    },
    set: function (__s312param0) {
      this._hasSentMailVerification = __s312param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "aquaPoints", {
    get: function () {
      return this._aquaPoints;
    },
    set: function (__s316param0) {
      this._aquaPoints = __s316param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.isNoobProtectedInKingdom = function (__s318param0) {
    return !!this._noobProtectedPerKingdom.get(__s318param0) && !!this._noobProtectedPerKingdom.get(__s318param0);
  };
  Object.defineProperty(CastleUserData.prototype, "isLegend", {
    get: function () {
      return this._userLegendLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "lifeTimeSpent", {
    get: function () {
      return this._lifeTimeSpent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "levelUpInSession", {
    get: function () {
      return this._levelUpInSession;
    },
    set: function (__s326param0) {
      this._levelUpInSession = __s326param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "selectedHeroID", {
    get: function () {
      return this._selectedHeroID;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.parse_HDC = function (__s330param0) {
    if (__s330param0.HID == -1) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChooseHeroDialog.CastleChooseHeroDialog, null, true);
    } else if (__s330param0.HID > 0) {
      this._selectedHeroID = __dep_exact_f855840627e6e145.int(__s330param0.HID);
      __dep_export_ClientConstCharacter.ClientConstCharacter.updateHeroQuestCharacter();
    }
  };
  CastleUserData.prototype.parse_CH = function (__s334param0) {
    this._selectedHeroID = __dep_exact_f855840627e6e145.int(__s334param0.HID);
  };
  Object.defineProperty(CastleUserData.prototype, "level", {
    get: function () {
      return this.userLevel + this.userLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.getOwnMapObjects = function (__s338param0 = -1, __s338param1 = -1) {
    var __s338local0 = [];
    var __s338local1 = function (__s340param0) {
      var __s340local0 = [];
      for (var __s340local1 = 1; __s340local1 < arguments.length; __s340local1++) {
        __s340local0[__s340local1 - 1] = arguments[__s340local1];
      }
      if ((__s338param1 == -1 || __s340param0.kingdomID == __s338param1) && (__s338param0 == -1 || __s340param0.areaType == __s338param0)) {
        __s338local0.push(__s340param0);
      }
    };
    for (var __s338local2 = 0, __s338local3 = this.villageList.getSortedVillageListByKingdomID(__s338param1); __s338local2 < __s338local3.length; __s338local2++) {
      var __s338local4 = __s338local3[__s338local2];
      __s338local0.push(__s338local4.villageMapObjectVO);
    }
    this.kingstowerList.completeList.forEach(__s338local1);
    this.monumentList.completeList.forEach(__s338local1);
    this.laboratoryList.completeList.forEach(__s338local1);
    this.castleList.getFilteredList().forEach(__s338local1);
    return __s338local0;
  };
  Object.defineProperty(CastleUserData.prototype, "isConnectedToFacebook", {
    get: function () {
      return this._isConnectedToFacebook;
    },
    set: function (__s349param0) {
      this._isConnectedToFacebook = __s349param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isPlayerNameTemporary", {
    get: function () {
      return this._isPlayerNameTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isPasswordTemporary", {
    get: function () {
      return this._isPasswordTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isEmailTemporary", {
    get: function () {
      return this._isEmailTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "facebookEmail", {
    get: function () {
      return this._facebookEmail;
    },
    set: function (__s359param0) {
      this._facebookEmail = __s359param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasEmail", {
    get: function () {
      return !this._isEmailTemporary && !!this.email && this.email.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.resetFacebookData = function () {
    this._isConnectedToFacebook = false;
    this._facebookEmail = "";
    __dep_export_CastleModel.CastleModel.localData.saveFacebookID("");
  };
  CastleUserData.prototype.setGlobalConstructionItemEffects = function (__s365param0, __s365param1) {
    if (__s365param0 && __s365param0.effects && __s365param0.effects.some(function (__s367param0) {
      return __s367param0.type.isGlobal;
    })) {
      this._globalConstructionItemEffects.set(__s365param1, __s365param0.effects.filter(function (__s370param0) {
        return __s370param0.type.isGlobal;
      }));
    }
  };
  CastleUserData.prototype.getGlobalConstructionItemEffectByType = function (__s372param0) {
    var __s372local0 = 0;
    if (this._globalConstructionItemEffects) {
      Array.from(this._globalConstructionItemEffects.values()).forEach(function (__s375param0) {
        __s375param0.forEach(function (__s377param0) {
          if (__s377param0.type == __s372param0) {
            __s372local0 += __s377param0.value;
          }
        });
      });
    }
    return __s372local0;
  };
  CastleUserData.prototype.removeGlobalConstructionItemEffect = function (__s380param0) {
    if (this._globalConstructionItemEffects.get(__s380param0)) {
      this._globalConstructionItemEffects.delete(__s380param0);
    }
  };
  CastleUserData.prototype.setGlobalConstructionItemBoni = function (__s383param0, __s383param1) {
    if (__s383param0) {
      __s383param0.boni;
    }
  };
  CastleUserData.prototype.getGlobalConstructionItemEffectsByType = function (__s386param0, __s386param1 = null) {
    __s386param1 = __s386param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    if (this._globalConstructionItemBoni != null) {
      Array.from(this._globalConstructionItemBoni.values()).forEach(function (__s389param0) {
        __s389param0.forEach(function (__s391param0) {
          if (__s391param0.matchesConditions(__s386param0, __s386param1.areaType, __s386param1.spaceId, __s386param1.wodId, __s386param1.otherPlayer)) {
            __s389param0.push(__s391param0);
          }
        });
      });
    }
    return [];
  };
  CastleUserData.prototype.getGlobalConstructionItemEffectValue = function (__s394param0, __s394param1 = -1, __s394param2 = -1, __s394param3 = -1) {
    var __s394local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getGlobalConstructionItemEffectsByType(__s394param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s394param2, __s394param3, __s394param1)));
    return __s394local0 || new __s394param0.valueClass();
  };
  CastleUserData.prototype.removeGlobalConstructionItemBonus = function (__s396param0) {
    if (this._globalConstructionItemBoni.get(__s396param0)) {
      this._globalConstructionItemBoni.delete(__s396param0);
    }
  };
  Object.defineProperty(CastleUserData.prototype, "persistentLogin", {
    get: function () {
      return this._persistentLogin;
    },
    set: function (__s401param0) {
      this._persistentLogin = __s401param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.reset = function () {
    this._noobProtected = false;
    this._noobProtectionRemainingTime = 0;
    this._peaceProtectionRemainingStatusTime = 0;
    this._noobTimeOffset = 0;
    this._peaceStatusTimeOffset = 0;
    this._peaceModeStatus = 0;
    this._aquaPoints = -1;
    this._kingstowerList = new __dep_export_CastleKingstowerList.CastleKingstowerList();
    this._monumentList = new __dep_export_CastleMonumentList.CastleMonumentList();
    this._laboratoryList = new __dep_export_CastleLaboratoryList.CastleLaboratoryList();
    this.splitRunData = new __dep_export_CastleOwnSplitRunData.CastleOwnSplitRunData(this);
    this._globalConstructionItemEffects = new Map();
  };
  CastleUserData.prototype.parse_ATO = function (__s405param0) {
    this._apiToken = __s405param0.ABT;
    this._apiTokenExpirationSeconds = __dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 + (__s405param0.ES || 0);
    this._apiTokenV2 = __s405param0.ABTV2;
    this._zoneId = __s405param0.ZNID;
    if (this._apiToken && this._apiTokenV2 && this._apiTokenExpirationSeconds > 0 && this.onAPITokenRequestSignal && this._restRequestMethod) {
      this.onAPITokenRequestSignal.dispatch(this._restRequestMethod);
      this._restRequestMethod = null;
    }
  };
  Object.defineProperty(CastleUserData.prototype, "isApiTokenExpired", {
    get: function () {
      return !this._apiToken || !this._apiTokenV2 || __dep_exact_f855840627e6e145.int(this._apiTokenExpirationSeconds - __dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000) <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "apiToken", {
    get: function () {
      return this._apiToken;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "apiTokenV2", {
    get: function () {
      return this._apiTokenV2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "zoneId", {
    get: function () {
      return this._zoneId;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.checkAndRequestApiTokenForRequestMethod = function (__s416param0, __s416param1) {
    var __s416local0 = false;
    if (this.isApiTokenExpired) {
      if (!this._restRequestMethod && (!!__s416param1 && (!this._apiToken || !!this.isApiTokenExpired) || !__s416param1 && (!this._apiTokenV2 || !!this.isApiTokenExpired))) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetApiToken.C2SSetApiToken());
        this._restRequestMethod = __s416param0;
        __s416local0 = false;
      }
    } else {
      __s416local0 = true;
    }
    return __s416local0;
  };
  CastleUserData.prototype.resetApiToken = function () {
    this._apiToken = null;
    this._apiTokenV2 = null;
    this._restRequestMethod = null;
    this._apiTokenExpirationSeconds = 0;
  };
  Object.defineProperty(CastleUserData.prototype, "connectToSpecialServer", {
    get: function () {
      return this._connectToABGServer || this._connectToTempServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "connectToTempServer", {
    get: function () {
      return this._connectToTempServer;
    },
    set: function (__s427param0) {
      this._connectToTempServer = __s427param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "connectToABGServer", {
    get: function () {
      return this._connectToABGServer;
    },
    set: function (__s431param0) {
      this._connectToABGServer = __s431param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.resetConnectToFlags = function () {
    this._connectToABGServer = false;
    this._connectToTempServer = false;
  };
  Object.defineProperty(CastleUserData.prototype, "foodFrozen", {
    get: function () {
      return this._foodFrozen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userName", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_2.BasicUserData.prototype, "userName").get.call(this);
    },
    set: function (__s439param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_2.BasicUserData.prototype, "userName").set.call(this, __s439param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "currentIslandRank", {
    get: function () {
      return this._currentIslandRank;
    },
    set: function (__s443param0) {
      this._currentIslandRank = __s443param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "newCapTooNotifications", {
    get: function () {
      return this._newCapTooNotifications;
    },
    set: function (__s447param0) {
      this._newCapTooNotifications = __s447param0;
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hideCapToolNotifications", {
    get: function () {
      return this._hideCapToolNotifications;
    },
    set: function (__s451param0) {
      this._hideCapToolNotifications = __s451param0;
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED));
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.parse_FTF = function (__s453param0) {
    this._enableIGSRedirect = __s453param0.ESHS == 1;
    this._disableRubyShop = __s453param0.DRS == 1;
    this._enableNewsHub = __s453param0.ENH == 1;
    this._enableFreeBaronAdvisor = __s453param0.EFBA == 1;
    this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.FEATURE_FLAGS_UPDATED));
  };
  Object.defineProperty(CastleUserData.prototype, "enableIGSRedirect", {
    get: function () {
      return this._enableIGSRedirect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "enableNewsHub", {
    get: function () {
      return this._enableNewsHub;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "disableRubyShop", {
    get: function () {
      return this._disableRubyShop;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "enableFreeBaronAdvisor", {
    get: function () {
      return this._enableFreeBaronAdvisor;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.CALLER_METHOD_GET = "CALLER_METHOD_GET";
  CastleUserData.CALLER_METHOD_PUT = "CALLER_METHOD_PUT";
  CastleUserData.CALLER_METHOD_POST = "CALLER_METHOD_POST";
  CastleUserData.CALLER_METHOD_DELETE = "CALLER_METHOD_DELETE";
  CastleUserData.PEACEMODE_STATUS_OFF = -1;
  CastleUserData.PEACEMODE_STATUS_PRETIME = 0;
  CastleUserData.PEACEMODE_STATUS_PEACETIME = 1;
  CastleUserData.PEACEMODE_STATUS_POSTTIME = 2;
  return CastleUserData;
}(__dep_exact_9e901e8e2483a22f_2.BasicUserData);
exports.CastleUserData = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleChooseHeroDialog = require("gge-module:export_CastleChooseHeroDialog");
var __dep_export_CastleNameCastleDialog = require("gge-module:export_CastleNameCastleDialog");
var __dep_export_CastleAcceptGDPRDialog = require("gge-module:export_CastleAcceptGDPRDialog");
var __dep_export_CastleDetailedVillageList = require("gge-module:export_CastleDetailedVillageList");
var __dep_export_CastleKingstowerList = require("gge-module:export_CastleKingstowerList");
var __dep_export_CastleLaboratoryList = require("gge-module:export_CastleLaboratoryList");
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_CastleMonumentList = require("gge-module:export_CastleMonumentList");
var __dep_export_C2SSetApiToken = require("gge-module:export_C2SSetApiToken");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IUpdatable", "IPlayer", "ICastleBasicData");
