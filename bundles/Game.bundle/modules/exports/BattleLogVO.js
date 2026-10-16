Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstXmlProperties = require("gge-module:export_ClientConstXmlProperties");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentFactory = require("gge-module:export_CastleEquipmentFactory");
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
var __dep_export_LordFactory = require("gge-module:export_LordFactory");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_BattleLogAbilityVO = require("gge-module:export_BattleLogAbilityVO");
var __dep_export_DetailedBattleWaveVO = require("gge-module:export_DetailedBattleWaveVO");
var __dep_export_LogUnitVO = require("gge-module:export_LogUnitVO");
var __dep_export_FlankInfoVO = require("gge-module:export_FlankInfoVO");
var __dep_export_MediumBattleWaveVO = require("gge-module:export_MediumBattleWaveVO");
var __dep_export_BattleParticipantVO = require("gge-module:export_BattleParticipantVO");
var __s0local0 = function () {
  function BattleLogVO() {
    this._currentMessageID = 0;
    this._messageIDs = [];
    this._logID = 0;
    this._logType = 0;
    this._defenderWon = false;
    this._honor = 0;
    this._survivalRate = 0;
    this._attackerHadHospital = false;
    this._isAttackerHospitalFull = false;
    this._attackerHomeCastleId = 0;
    this._defenderHomeCastleId = 0;
    this._defenderHadHospital = false;
    this._isDefenderHospitalFull = false;
    this._attackerHasOnlyAuxiliaries = false;
    this._defenderHasOnlyAuxiliaries = false;
    this._supporterWoundedUnitCount = 0;
    this._metaData = new Map();
    this._disableJump = false;
    this._attackerTroopcountInKeep = 0;
    this._attackerTroopLostInKeep = 0;
    this._defenderTroopcountInKeep = 0;
    this._defenderTroopLostInKeep = 0;
    this._attackerLegendSkillIds = [];
    this._defenderLegendSkillIds = [];
    this._hasDefenderInfos = false;
    this._hasMiddleInfo = false;
    this._hasDetailedInfo = false;
    this._supportToolsAttacker = [];
    this._supportToolsDefender = [];
    this._reinforcementUnits = [];
    this._ragePoints = -1;
    this.attackerAllianceSubscribers = 0;
    this.attackerHadPlayerSubscription = false;
    this.defenderAllianceSubscribers = 0;
    this.defenderHadPlayerSubscription = false;
    this.oldChargePoints = 0;
    this.newChargePoints = 0;
    this.newChargeRank = 0;
    this.oldChargeRank = 0;
    this.defender_oldChargePoints = 0;
    this.defender_newChargePoints = 0;
    this.defender_newChargeRank = 0;
    this.defender_oldChargeRank = 0;
    this.defenderUsedSupportTools = false;
    this._attackerAbilities = [];
    this._defenderAbilities = [];
    this._autoSkipType = 0;
    this._advisorType = 0;
    this._advisorMovementCount = 0;
    this._advisorMovementNumber = 0;
  }
  BattleLogVO.prototype.fillFromParamObject = function (__s5param0) {
    var __s5local0 = this;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.AI.AT);
    if (__s5param0.SSID) {
      __s5param0.AI.SSID = __s5param0.SSID;
    }
    if (__s5param0.DAR) {
      __s5param0.AI.DAR = __s5param0.DAR;
    }
    if (__s5local1 == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      __s5param0.AI.AID = __s5param0.AID;
      __s5param0.AI.N = __s5param0.N;
      __s5param0.AI.ACVC = __s5param0.ACVC;
      __s5param0.AI.E = __s5param0.E;
    }
    this.attackerAllianceSubscribers = __dep_exact_f855840627e6e145.int(__s5param0.AAS);
    this.attackerHadPlayerSubscription = __s5param0.AHP == 1;
    this.defenderAllianceSubscribers = __dep_exact_f855840627e6e145.int(__s5param0.DAS);
    this.defenderHadPlayerSubscription = __s5param0.DHP == 1;
    this.oldChargePoints = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.CPO, 0));
    this.oldChargeRank = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.CRO, 0));
    this.newChargePoints = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.CPN, 0));
    this.newChargeRank = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.CRN, 0));
    this.defender_oldChargePoints = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.DCPO, 0));
    this.defender_oldChargeRank = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.DCRO, 0));
    this.defender_newChargePoints = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.DCPN, 0));
    this.defender_newChargeRank = __dep_exact_f855840627e6e145.int(Math.max(__s5param0.DCRN, 0));
    this._mapobjectVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea([__s5local1], false);
    this._mapobjectVO.parseAreaInfoBattleLog(__s5param0.AI);
    this._currentMessageID = __s5param0.MID;
    this._messageIDs.push(this._currentMessageID);
    this._logID = __dep_exact_f855840627e6e145.int(__s5param0.LID);
    this._logType = __dep_exact_f855840627e6e145.int(__s5param0.MT);
    this._defenderWon = !!__s5param0.DW;
    this.addMetadataFromMessage(this._currentMessageID, __s5param0.MS);
    this.loadFromParamArrayPBI(__s5param0.PBI);
    for (var __s5local2 = 0; __s5local2 < this._playerBattleInfo.length; __s5local2++) {
      var __s5local3 = this._playerBattleInfo[__s5local2];
      if (__s5local3.ownerInfoVO.playerID == __s5param0.AI.DP) {
        this._mapobjectVO.ownerInfo = __s5local3.ownerInfoVO;
      }
    }
    this.parseFactionFromPI(__s5param0.PI);
    this._honor = __dep_exact_f855840627e6e145.int(__s5param0.H);
    this._survivalRate = __dep_exact_f855840627e6e145.int(__s5param0.SR);
    var __s5local4 = __dep_exact_f855840627e6e145.int(__s5param0.AI.NID);
    if (__s5local4 > 0) {
      var __s5local5 = this._mapobjectVO;
      __s5local5.tmapID = __dep_exact_f855840627e6e145.int(__s5param0.AI.MID ? __s5param0.AI.MID : this.metaData_optionalTMapID);
      __s5local5.tMapNode = __dep_export_CastleModel.CastleModel.treasureMapData.createTreasureMapNode(__s5local5.tmapID, __s5local4);
    }
    if (__s5param0.EQF) {
      this._equipmentVO = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s5param0.EQF);
    }
    if (__s5param0.GF) {
      this._gemVO = __dep_export_CastleModel.CastleModel.gemData.getGemVO(__s5param0.GF);
    }
    if (__s5param0.MSF) {
      var __s5local6 = __dep_exact_f855840627e6e145.int(__s5param0.MSF < __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] ? __s5param0.MSF + __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] : __s5param0.MSF);
      this._minuteSkipVO = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __s5local6);
    }
    if (__s5param0.RP) {
      this._ragePoints = parseInt(__s5param0.RP);
    }
    if (__s5param0.DJ) {
      this._disableJump = true;
    }
    if (__s5param0.PS) {
      var __s5local7 = new Date();
      __s5local7.setTime(__s5local7.getTime() - __s5param0.PS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      this._battleTimestamp = __s5local7;
    }
    this._attackerHomeCastleId = parseInt(__s5param0.AHC);
    this._attackerHadHospital = parseInt(__s5param0.AHH) == 1;
    this._isAttackerHospitalFull = parseInt(__s5param0.AHF) == 1;
    this._defenderHomeCastleId = parseInt(__s5param0.DHC);
    this._defenderHadHospital = parseInt(__s5param0.DHH) == 1;
    this._isDefenderHospitalFull = parseInt(__s5param0.DHF) == 1;
    this._attackerHasOnlyAuxiliaries = parseInt(__s5param0.AUA) == 1;
    this._defenderHasOnlyAuxiliaries = parseInt(__s5param0.DUA) == 1;
    this.updateSupporterWoundedUnitCount(__s5param0.WSU);
    if (__s5param0[__dep_exact_26a421b704832cff_4.CommKeys.ATTACKER_LORD_INFO]) {
      this._commanderVO = __dep_export_LordFactory.LordFactory.createLord(__s5param0[__dep_exact_26a421b704832cff_4.CommKeys.ATTACKER_LORD_INFO], true);
    }
    if (__s5param0[__dep_exact_26a421b704832cff_4.CommKeys.DEFENDER_BARON_INFO]) {
      this._baronVO = __dep_export_LordFactory.LordFactory.createLord(__s5param0[__dep_exact_26a421b704832cff_4.CommKeys.DEFENDER_BARON_INFO], true);
    }
    this._autoSkipCosts = [new __dep_export_CollectableList.CollectableList(), new __dep_export_CollectableList.CollectableList()];
    if (__s5param0.ASMS) {
      __s5param0.ASMS.forEach(function (__s23param0) {
        var __s23local0 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__s23param0[0], __s23param0[1]);
        if (__s23local0.amount > 0) {
          __s5local0._autoSkipCosts[0].addItem(__s23local0);
        } else {
          __s5local0._autoSkipCosts[1].addItem(__s23local0);
        }
        __s23local0.amount = Math.abs(__s23local0.amount);
      });
    }
    if (__s5param0.ASC && __s5param0.ASC > 0) {
      var __s5local8 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s5param0.ASC);
      this._autoSkipCosts[0].addItem(__s5local8);
    }
    this._autoSkipType = __s5param0.ASCT;
    if (__s5param0.AAT) {
      this._advisorType = __s5param0.AAT;
    }
    if (__s5param0.AAC) {
      this._advisorMovementCount = __s5param0.AAC;
    }
    if (__s5param0.AAN) {
      this._advisorMovementNumber = __s5param0.AAN;
    }
  };
  BattleLogVO.prototype.loadFromParamArrayPBI = function (__s31param0) {
    this._playerBattleWinnerInfo = [];
    this._playerBattleLoserInfo = [];
    this._playerBattleInfo = [];
    for (var __s31local0 = 0; __s31local0 < __s31param0.length; __s31local0++) {
      var __s31local1 = __s31param0[__s31local0];
      var __s31local2 = new __dep_export_BattleParticipantVO.BattleParticipantVO();
      var __s31local3 = __dep_exact_f855840627e6e145.int(__s31local1[0] == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP && this.isForwardedBattleLog ? __dep_export_CastleModel.CastleModel.messageData.getMessageVOById(this._currentMessageID).playerID : __s31local1[0]);
      if (__s31local3 <= 0 && (this._mapobjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER || this._mapobjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER)) {
        __s31local2.ownerInfoVO = this._mapobjectVO.ownerInfo;
        __s31local2.ownerIsAlliance = this._mapobjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER;
      } else {
        __s31local2.ownerInfoVO = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s31local3);
      }
      if (!__s31local2.ownerInfoVO) {
        return;
      }
      __s31local2.playerID = __dep_exact_f855840627e6e145.int(__s31local2.ownerInfoVO.playerID);
      if (__dep_export_PlayerHelper.PlayerHelper.isDungeonPlayer(__s31local2.ownerInfoVO.playerID) && this._logType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.isForwardedBattleLog) {
        if (__dep_export_TMapHelper.TMapHelper.isThornKingMap(this.metaData_optionalTMapID)) {
          __s31local2.ownerInfoVO = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateEventOwner(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_THORNKING);
        } else if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this.metaData_optionalTMapID)) {
          __s31local2.ownerInfoVO = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateEventOwner(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN);
        } else if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(this.metaData_optionalTMapID)) {
          __s31local2.ownerInfoVO = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateEventOwner(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD);
        }
      }
      __s31local2.front = __dep_exact_f855840627e6e145.int(__s31local1[1]);
      __s31local2.startArmySize = __dep_exact_f855840627e6e145.int(__s31local1[2]);
      __s31local2.lostUnits = __dep_exact_f855840627e6e145.int(__s31local1[3]);
      __s31local2.lootGoods = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s31local1[4]);
      __s31local2.famePoints = __dep_exact_f855840627e6e145.int(__s31local1[5]);
      __s31local2.xp = __dep_exact_f855840627e6e145.int(__s31local1[6]);
      var __s31local4 = __dep_exact_f855840627e6e145.int(__s31local1[7]);
      __s31local2.kingstowerBonus = __s31local4 || 0;
      __s31local2.factionPoints = __dep_exact_f855840627e6e145.int(__s31local1[8]);
      var __s31local5 = __dep_exact_f855840627e6e145.int(__s31local1[9]);
      __s31local2.highestFameTitleBonus = __s31local5 || 0;
      __s31local2.woundedUnits = __dep_exact_f855840627e6e145.int(__s31local1[10]);
      __s31local2.moralBoost = __dep_exact_f855840627e6e145.int(__s31local1[11]);
      __s31local2.capitalTokens = __dep_exact_f855840627e6e145.int(__s31local1[12]);
      if (__s31local1[13]) {
        __s31local2.reputationPointsBlue = __dep_exact_f855840627e6e145.int(__s31local1[13][__dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION]);
        __s31local2.reputationPointsRed = __dep_exact_f855840627e6e145.int(__s31local1[13][__dep_exact_26a421b704832cff_1.FactionConst.RED_FACTION]);
      }
      this._playerBattleInfo.push(__s31local2);
      if (this._defenderWon && __s31local2.front == 1 || !this._defenderWon && __s31local2.front == 0) {
        this._playerBattleWinnerInfo.push(__s31local2);
      } else {
        this._playerBattleLoserInfo.push(__s31local2);
      }
    }
  };
  BattleLogVO.prototype.parseFactionFromPI = function (__s45param0) {
    for (var __s45local0 = 0; __s45local0 < __s45param0.length; ++__s45local0) {
      for (var __s45local1 = 0; __s45local1 < this._playerBattleInfo.length; ++__s45local1) {
        if (this._playerBattleInfo[__s45local1].ownerInfoVO.playerID == __s45param0[__s45local0].OID) {
          this._playerBattleInfo[__s45local1].ownerInfoVO.factionID = __s45param0[__s45local0].FN.FID;
        }
      }
    }
  };
  BattleLogVO.prototype.updateSupporterWoundedUnitCount = function (__s52param0) {
    this._supporterWoundedUnitCount = -1;
    if (__s52param0) {
      for (var __s52local0 = 0; __s52local0 < __s52param0.length; __s52local0++) {
        if (__s52param0[__s52local0][0] == __dep_export_CastleModel.CastleModel.userData.playerID) {
          this._supporterWoundedUnitCount = __dep_exact_f855840627e6e145.int(__s52param0[__s52local0][1]);
          break;
        }
      }
    }
  };
  BattleLogVO.prototype.addMetadataFromMessage = function (__s58param0, __s58param1) {
    this._metaData.set(__s58param0, __s58param1.split("+"));
  };
  BattleLogVO.prototype.parseDetails = function (__s60param0) {
    this.parseYardDetailed(__s60param0.Y);
    this.parseWavesDetails(__s60param0.W, __s60param0.PW, __s60param0.EW);
    this.parseReinforcementDetails(__s60param0.RW || []);
    this._hasDetailedInfo = true;
  };
  BattleLogVO.prototype.parseWavesDetails = function (__s62param0, __s62param1, __s62param2) {
    this._detailedBattleWaves = [];
    if (__s62param1) {
      this._detailedPreCombatWave = new __dep_export_DetailedBattleWaveVO.DetailedBattleWaveVO(__s62param1);
      this._detailedPreCombatWave.isPreOrPostWave = true;
      this._detailedBattleWaves.push(this._detailedPreCombatWave);
    }
    for (var __s62local0 = 0; __s62local0 < __s62param0.length; __s62local0++) {
      this._detailedBattleWaves.push(new __dep_export_DetailedBattleWaveVO.DetailedBattleWaveVO(__s62param0[__s62local0]));
    }
    if (__s62param2) {
      this._detailedPostCombatWave = new __dep_export_DetailedBattleWaveVO.DetailedBattleWaveVO(__s62param2);
      this._detailedPostCombatWave.isPreOrPostWave = true;
      this._detailedBattleWaves.push(this._detailedPostCombatWave);
    }
    this._detailedSummaryWave = new __dep_export_DetailedBattleWaveVO.DetailedBattleWaveVO(null, this._detailedBattleWaves, true);
  };
  BattleLogVO.prototype.parseYardDetailed = function (__s68param0) {
    this._detailedCourtyardAttacker = [];
    this._detailedCourtyardDefender = [];
    if (__s68param0) {
      var __s68local0;
      var __s68local1 = 0;
      if (__s68param0.length > BattleLogVO.ATTACKER) {
        var __s68local2 = __s68param0[BattleLogVO.ATTACKER];
        for (__s68local1 = 1; __s68local1 < __s68local2.length; __s68local1++) {
          __s68local0 = new __dep_export_LogUnitVO.LogUnitVO(__s68local2[__s68local1]);
          this._detailedCourtyardAttacker.push(__s68local0);
        }
      }
      if (__s68param0.length > BattleLogVO.DEFENDER) {
        var __s68local3 = __s68param0[BattleLogVO.DEFENDER];
        for (__s68local1 = 1; __s68local1 < __s68local3.length; __s68local1++) {
          __s68local0 = new __dep_export_LogUnitVO.LogUnitVO(__s68local3[__s68local1]);
          this._detailedCourtyardDefender.push(__s68local0);
        }
      }
      this._detailedCourtyardAttacker.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
      this._detailedCourtyardDefender.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    }
  };
  BattleLogVO.prototype.parseSupportTools = function (__s77param0) {
    this._supportToolsAttacker = [];
    this._supportToolsDefender = [];
    if (__s77param0) {
      var __s77local0;
      var __s77local1 = 0;
      if (__s77param0.length > BattleLogVO.ATTACKER) {
        var __s77local2 = __s77param0[BattleLogVO.ATTACKER];
        for (__s77local1 = 1; __s77local1 < __s77local2.length; __s77local1++) {
          __s77local0 = new __dep_export_LogUnitVO.LogUnitVO(__s77local2[__s77local1]);
          this._supportToolsAttacker.push(__s77local0);
        }
      }
      if (__s77param0.length > BattleLogVO.DEFENDER) {
        var __s77local3 = __s77param0[BattleLogVO.DEFENDER];
        for (__s77local1 = 1; __s77local1 < __s77local3.length; __s77local1++) {
          __s77local0 = new __dep_export_LogUnitVO.LogUnitVO(__s77local3[__s77local1]);
          this._supportToolsDefender.push(__s77local0);
        }
      }
      this._supportToolsAttacker.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
      this._supportToolsDefender.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    }
  };
  BattleLogVO.prototype.parseReinforcementDetails = function (__s86param0) {
    this._reinforcementUnits = [];
    for (var __s86local0 = 0, __s86local1 = __s86param0; __s86local0 < __s86local1.length; __s86local0++) {
      var __s86local2 = __s86local1[__s86local0];
      this._reinforcementUnits.push(new __dep_export_LogUnitVO.LogUnitVO(__s86local2));
    }
  };
  BattleLogVO.prototype.parseMiddle = function (__s90param0) {
    var __s90local0 = this;
    this.parseYard(__s90param0.Y);
    this.parseWaves(__s90param0.W, __s90param0.PW);
    this.parseSupportTools(__s90param0.SD);
    this.parseReinforcementWave(__s90param0.RW || [0, 0, 0]);
    if (__s90param0.AL) {
      this._commanderVO = __dep_export_LordFactory.LordFactory.createLord(__s90param0.AL, true);
    }
    if (__s90param0.DJ) {
      this._disableJump = true;
    }
    if (__s90param0.DB) {
      this._baronVO = __dep_export_LordFactory.LordFactory.createLord(__s90param0.DB, true);
    }
    if (__s90param0.PS) {
      var __s90local1 = new Date();
      __s90local1.setTime(__s90local1.getTime() - __s90param0.PS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      this._battleTimestamp = __s90local1;
    }
    if (__s90param0.DGT) {
      this._defenderTriggeredGems = __s90param0.DGT;
    }
    if (__s90param0.AGT) {
      this._attackerTriggeredGems = __s90param0.AGT;
    }
    if (__s90param0.DLS) {
      this._defenderLegendSkillIds = __s90param0.DLS;
    }
    if (__s90param0.ALS) {
      this._attackerLegendSkillIds = __s90param0.ALS;
    }
    this.defenderUsedSupportTools = !!__s90param0.DUST && __s90param0.DUST;
    if (__s90param0.AA) {
      __s90param0.AA.forEach(function (__s101param0) {
        return __s90local0._attackerAbilities.push(new __dep_export_BattleLogAbilityVO.BattleLogAbilityVO(__s101param0));
      });
    }
    if (__s90param0.DA) {
      __s90param0.DA.forEach(function (__s104param0) {
        return __s90local0._defenderAbilities.push(new __dep_export_BattleLogAbilityVO.BattleLogAbilityVO(__s104param0));
      });
    }
    this._hasMiddleInfo = true;
  };
  BattleLogVO.prototype.parseYard = function (__s106param0) {
    if (__s106param0 && __s106param0.length) {
      var __s106local0 = __s106param0[BattleLogVO.ATTACKER];
      this._attackerTroopcountInKeep = __dep_exact_f855840627e6e145.int(__s106local0[BattleLogVO.KEEP_TROOP_COUNT]);
      this._attackerTroopLostInKeep = __dep_exact_f855840627e6e145.int(__s106local0[BattleLogVO.KEEP_TROOP_LOST]);
      var __s106local1 = __s106param0[BattleLogVO.DEFENDER];
      if (__s106local1 && __s106local1.length > BattleLogVO.KEEP_TROOP_LOST) {
        this._defenderTroopcountInKeep = __dep_exact_f855840627e6e145.int(__s106local1[BattleLogVO.KEEP_TROOP_COUNT]);
        this._defenderTroopLostInKeep = __dep_exact_f855840627e6e145.int(__s106local1[BattleLogVO.KEEP_TROOP_LOST]);
        this._hasDefenderInfos = true;
      }
    }
  };
  BattleLogVO.prototype.parseWaves = function (__s110param0, __s110param1) {
    this._mediumBattleWaves = [];
    for (var __s110local0 = 0; __s110local0 < __s110param0.length; __s110local0++) {
      var __s110local1 = new __dep_export_MediumBattleWaveVO.MediumBattleWaveVO(__s110param0[__s110local0]);
      this._mediumBattleWaves.push(__s110local1);
    }
    if (__s110param1) {
      this._mediumPreCombatWave = new __dep_export_MediumBattleWaveVO.MediumBattleWaveVO(__s110param1);
      this._mediumPreCombatWave.isPreOrPostWave = true;
      this._mediumSummaryWave = new __dep_export_MediumBattleWaveVO.MediumBattleWaveVO(null, [this._mediumPreCombatWave].concat(this._mediumBattleWaves));
    } else {
      this._mediumSummaryWave = new __dep_export_MediumBattleWaveVO.MediumBattleWaveVO(null, this._mediumBattleWaves);
    }
  };
  BattleLogVO.prototype.parseReinforcementWave = function (__s116param0) {
    this._reinforcementWaveInfo = new __dep_export_FlankInfoVO.FlankInfoVO(__s116param0);
  };
  BattleLogVO.prototype.hasWonState = function (__s118param0) {
    return this._defenderWon && __s118param0.front == 1 || !this._defenderWon && __s118param0.front == 0;
  };
  BattleLogVO.prototype.isDefender = function (__s120param0) {
    return __s120param0.front == 1;
  };
  BattleLogVO.prototype.hadHospital = function (__s122param0) {
    if (this.isDefender(__s122param0)) {
      return this.defenderHadHospital;
    } else {
      return this.attackerHadHospital;
    }
  };
  BattleLogVO.prototype.isHospitalFull = function (__s126param0) {
    if (this.isDefender(__s126param0)) {
      return this.isDefenderHospitalFull;
    } else {
      return this.isAttackerHospitalFull;
    }
  };
  BattleLogVO.prototype.getOwnBattleInfo = function () {
    var __s130local0 = 0;
    var __s130local1 = 0;
    for (__s130local0 = 0; __s130local0 < this._playerBattleInfo.length; __s130local0++) {
      if (this._playerBattleInfo[__s130local0].playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
        return this._playerBattleInfo[__s130local0];
      }
    }
    if (this._logType != __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG || this.metaData_battleResultSubtype != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED && this.metaData_battleResultSubtype != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
      if (this._logType != __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG || this.metaData_battleResultSubtype != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS && this.metaData_battleResultSubtype != __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_FAILED) {
        if (this._logType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.isForwardedBattleLog) {
          for (__s130local0 = 0; __s130local0 < this._playerBattleInfo.length; __s130local0++) {
            if (this._playerBattleInfo[__s130local0].playerID == __dep_export_CastleModel.CastleModel.messageData.getMessageVOById(this._currentMessageID).playerID) {
              return this._playerBattleInfo[__s130local0];
            }
          }
          if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
            for (__s130local0 = 0; __s130local0 < this._playerBattleInfo.length; __s130local0++) {
              if (this._playerBattleInfo[__s130local0].ownerInfoVO.allianceID == __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId) {
                return this._playerBattleInfo[__s130local0];
              }
            }
          }
          return this._playerBattleInfo[0];
        }
      } else {
        for (__s130local1 = 0; __s130local1 < this._playerBattleInfo.length; __s130local1++) {
          if (this._playerBattleInfo[__s130local1].front == 0) {
            return this._playerBattleInfo[__s130local1];
          }
        }
      }
    } else {
      for (__s130local1 = 0; __s130local1 < this._playerBattleInfo.length; __s130local1++) {
        if (this._playerBattleInfo[__s130local1].front == 1) {
          return this._playerBattleInfo[__s130local1];
        }
      }
    }
    return this._playerBattleInfo[0];
  };
  BattleLogVO.prototype.getOpponentInfo = function () {
    for (var __s153local0 = 0; __s153local0 < this._playerBattleInfo.length; __s153local0++) {
      if (this.getOwnBattleInfo() && this._playerBattleInfo[__s153local0].playerID != this.getOwnBattleInfo().playerID) {
        return this._playerBattleInfo[__s153local0];
      }
    }
    return null;
  };
  Object.defineProperty(BattleLogVO.prototype, "isOutpostSiegeLog", {
    get: function () {
      return this._logType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_OUTPOST && this.metaData_AttackType == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_CONQUER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isSupportLog", {
    get: function () {
      for (var __s160local0 = 0; __s160local0 < this._playerBattleInfo.length; __s160local0++) {
        if (this._playerBattleInfo[__s160local0].playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
          return false;
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isLandmarkBattleLog", {
    get: function () {
      return this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGS_TOWER || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_VILLAGE || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ISLE_RESOURCE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isFactionBattleLog", {
    get: function () {
      return this._logType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG && (this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAPITAL || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_TOWER || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_VILLAGE || this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP) || this._mapobjectVO.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isFactionInvasionBattleLog", {
    get: function () {
      return this._logType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.metaData_areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP && this._mapobjectVO.kingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  BattleLogVO.prototype.getOwnUnitSurvivalRatio = function () {
    var __s171local0 = this.getOwnBattleInfo();
    return ((__s171local0.startArmySize <= 0 ? 0 : Math.abs(__s171local0.lostUnits) / __s171local0.startArmySize) - 1) * -1;
  };
  BattleLogVO.prototype.getOpponentUnitSurvivalRatio = function () {
    var __s173local0 = this.getOpponentInfo();
    return ((__s173local0.startArmySize <= 0 ? 0 : Math.abs(__s173local0.lostUnits) / __s173local0.startArmySize) - 1) * -1;
  };
  BattleLogVO.prototype.getOwnBattleResultTitle = function () {
    var __s175local0 = __dep_exact_f855840627e6e145.int(this.getOwnUnitSurvivalRatio() * 100);
    var __s175local1 = __dep_exact_f855840627e6e145.int(this.getOpponentUnitSurvivalRatio() * 100);
    var __s175local2 = "";
    switch (this.metaData_battleResultSubtype) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
        __s175local2 = __s175local0 >= __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_BATTLE_REPORT_LARGE_NORMAL_WIN) ? "dialog_battleLog_victoryHeader_glorious" : __s175local0 >= __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_BATTLE_REPORT_NORMAL_CLOSE_WIN) ? "dialog_battleLog_victory" : "dialog_battleLog_victoryHeader_close";
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_FAILED:
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED:
        __s175local2 = __s175local1 >= __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_BATTLE_REPORT_NORMAL_CLOSE_LOSS) ? "dialog_battleLog_defeat" : "dialog_battleLog_defeatHeader_close";
    }
    return __s175local2;
  };
  Object.defineProperty(BattleLogVO.prototype, "isForwardedBattleLog", {
    get: function () {
      var __s178local0 = __dep_export_CastleModel.CastleModel.messageData.getMessageVOById(this._currentMessageID);
      return __s178local0 && __s178local0.forwarded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "hasDefenderInfos", {
    get: function () {
      return this._hasDefenderInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedBattleWaves", {
    get: function () {
      return this._detailedBattleWaves;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "hasDetailedInfo", {
    get: function () {
      return this._hasDetailedInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "hasMiddleInfo", {
    get: function () {
      return this._hasMiddleInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "minuteSkipVO", {
    get: function () {
      return this._minuteSkipVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "commanderVO", {
    get: function () {
      return this._commanderVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "baronVO", {
    get: function () {
      return this._baronVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isBaronRaidBoss", {
    get: function () {
      return this.baronVO && this.baronVO.assignedGeneralVO && !!__dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(this.baronVO.assignedGeneralVO.generalID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "mapobjectVO", {
    get: function () {
      return this._mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_areaType", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this._metaData.get(this._currentMessageID)[0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_AttackType", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this._metaData.get(this._currentMessageID)[1]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_battleResultSubtype", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this._metaData.get(this._currentMessageID)[2]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_optionalTMapID", {
    get: function () {
      if (this._metaData.get(this._currentMessageID).length > 3) {
        return __dep_exact_f855840627e6e145.int(this._metaData.get(this._currentMessageID)[3]);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_optionalTMapAreaType", {
    get: function () {
      if (this._metaData.get(this._currentMessageID).length > 4) {
        return this._metaData.get(this._currentMessageID)[4];
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "battleTimestamp", {
    get: function () {
      return this._battleTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderLegendSkillIds", {
    get: function () {
      return this._defenderLegendSkillIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerLegendSkillIds", {
    get: function () {
      return this._attackerLegendSkillIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderTriggeredGems", {
    get: function () {
      return this._defenderTriggeredGems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerTriggeredGems", {
    get: function () {
      return this._attackerTriggeredGems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "disableJump", {
    get: function () {
      return this._disableJump;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isAttackerHospitalFull", {
    get: function () {
      return this._isAttackerHospitalFull;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerHadHospital", {
    get: function () {
      return this._attackerHadHospital;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerHomeCastleId", {
    get: function () {
      return this._attackerHomeCastleId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderHomeCastleId", {
    get: function () {
      return this._defenderHomeCastleId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderHadHospital", {
    get: function () {
      return this._defenderHadHospital;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isDefenderHospitalFull", {
    get: function () {
      return this._isDefenderHospitalFull;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "supporterWoundedUnitCount", {
    get: function () {
      return this._supporterWoundedUnitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "survivalRate", {
    get: function () {
      return this._survivalRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedCourtyardAttacker", {
    get: function () {
      return this._detailedCourtyardAttacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedCourtyardDefender", {
    get: function () {
      return this._detailedCourtyardDefender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "supportToolsAttacker", {
    get: function () {
      return this._supportToolsAttacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "supportToolsDefender", {
    get: function () {
      return this._supportToolsDefender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerTroopcountInKeep", {
    get: function () {
      return this._attackerTroopcountInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerTroopLostInKeep", {
    get: function () {
      return this._attackerTroopLostInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderTroopcountInKeep", {
    get: function () {
      return this._defenderTroopcountInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderTroopLostInKeep", {
    get: function () {
      return this._defenderTroopLostInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "messageIDs", {
    get: function () {
      return this._messageIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "currentMessageID", {
    set: function (__s262param0) {
      this._currentMessageID = __s262param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "logID", {
    get: function () {
      return this._logID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "logType", {
    get: function () {
      return this._logType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderWon", {
    get: function () {
      return this._defenderWon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "honor", {
    get: function () {
      return this._honor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "playerBattleWinnerInfo", {
    get: function () {
      return this._playerBattleWinnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerBattleInfo", {
    get: function () {
      return this._playerBattleInfo[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderBattleInfo", {
    get: function () {
      return this._playerBattleInfo[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "playerBattleLoserInfo", {
    get: function () {
      return this._playerBattleLoserInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedSummaryWave", {
    get: function () {
      return this._detailedSummaryWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedPreCombatWave", {
    get: function () {
      return this._detailedPreCombatWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedPostCombatWave", {
    get: function () {
      return this._detailedPostCombatWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "mediumSummaryWave", {
    get: function () {
      return this._mediumSummaryWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "mediumBattleWaves", {
    get: function () {
      return this._mediumBattleWaves;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerHasOnlyAuxiliaries", {
    get: function () {
      return this._attackerHasOnlyAuxiliaries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderHasOnlyAuxiliaries", {
    get: function () {
      return this._defenderHasOnlyAuxiliaries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "ragePoints", {
    get: function () {
      return this._ragePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "reinforcementWaveInfo", {
    get: function () {
      return this._reinforcementWaveInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "reinforcementUnits", {
    get: function () {
      return this._reinforcementUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "reinforcementWaveIndex", {
    get: function () {
      return this.mediumBattleWaves.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "lastWaveIndex", {
    get: function () {
      if (this.hasReinforcementWave()) {
        return this.reinforcementWaveIndex;
      } else {
        return this.reinforcementWaveIndex - 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  BattleLogVO.prototype.hasReinforcementWave = function () {
    return this._reinforcementWaveInfo.soldierAmount > 0;
  };
  Object.defineProperty(BattleLogVO.prototype, "defenderAbilities", {
    get: function () {
      return this._defenderAbilities;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerAbilities", {
    get: function () {
      return this._attackerAbilities;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerGotThroughWall", {
    get: function () {
      return this.mediumBattleWaves.some(function (__s314param0) {
        return __s314param0.gotThroughWall;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "autoSkipCosts", {
    get: function () {
      return this._autoSkipCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "autoSkipType", {
    get: function () {
      return this._autoSkipType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "advisorMovementCount", {
    get: function () {
      return this._advisorMovementCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "advisorMovementNumber", {
    get: function () {
      return this._advisorMovementNumber;
    },
    enumerable: true,
    configurable: true
  });
  BattleLogVO.ATTACKER = 0;
  BattleLogVO.DEFENDER = 1;
  BattleLogVO.KEEP_TROOP_COUNT = 1;
  BattleLogVO.KEEP_TROOP_LOST = 2;
  return BattleLogVO;
}();
exports.BattleLogVO = __s0local0;
