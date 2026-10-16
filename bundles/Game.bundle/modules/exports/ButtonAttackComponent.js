Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function ButtonAttackComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._isListeningToTimer = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAttackComponent, __s1param0);
  Object.defineProperty(ButtonAttackComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackComponent.prototype.initAsRingmenuButton = function () {
    this.initAttackButton(false);
  };
  Object.defineProperty(ButtonAttackComponent.prototype, "isBasicallyVisible", {
    get: function () {
      var __s9local0 = this._worldMapObjectVO.canBeConquered();
      var __s9local1 = this._worldMapObjectVO.isOwnMapobject;
      var __s9local2 = __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo);
      var __s9local3 = !__s9local1 && !__s9local2 && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID) == __dep_exact_26a421b704832cff_2.AllianceConst.DIPLOMACY_REAL_ALLIED;
      return !__s9local0 && !__s9local1 && !__s9local2 && !__s9local3 || (__s9local1 || __s9local2) && this._worldMapObjectVO.isUnderConquerControl && !__s9local3;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackComponent.prototype.initAttackButton = function (__s11param0) {
    var __s11local0;
    if ((this._button.disp.toolTipText = null, this._button.toolTipText = null, this._button.visible = this.isBasicallyVisible, this._button.enableButton = this._worldMapObjectVO.canBeAttacked(), __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "SamuraiCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "DaimyoCastleMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "DaimyoTownshipMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "NomadKhanCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "NomadCampMapObjectVO")) && (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "RedAlienInvasionMapobjectVO") && (__s11local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)), __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "AlienInvasionMapobjectVO") && (__s11local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)), (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "NomadCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "NomadKhanCampMapObjectVO")) && (__s11local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)), (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "SamuraiCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "DaimyoCastleMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "DaimyoTownshipMapObjectVO")) && (__s11local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION)), __s11local0.needToOpenDifficultyDialog())) {
      __s11local0.openDialog();
      return;
    }
    if (__s11param0 && this._button.enabled) {
      this._button.disp.toolTipText = "ringmenu_military_menu_attack";
    } else {
      this._button.disp.toolTipText = null;
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "CastleMapobjectVO")) {
      this.initNormalCastleHandling();
      this._button.visible = this._button.visible;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "DungeonMapobjectVO")) {
      this.initDungeonHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "ABGResourceTowerMapobjectVO")) {
      this.initResourceTowerHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "NomadCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "NomadKhanCampMapObjectVO")) {
      this.initNomadCampHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "BossdungeonMapobjectVO")) {
      this.initBossDungeonHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO")) {
      this.initAlienInvasionHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "SamuraiCampMapObjectVO")) {
      this.initSamuraiInvasionHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "OutpostMapobjectVO")) {
      this.initOutpostHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO")) {
      this.initFactionHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInvasionCampMapObjectVO")) {
      this.initFactionInvasionHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      this.initABGTowerHandling();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "WolfkingCastleMapObjectVO")) {
      this.initWolfkingHandling();
    }
    if (this._button.enabled == 0 && !this._isListeningToTimer) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
      this._isListeningToTimer = true;
    }
    this._button.visible &&= !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "VillageMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionVillageMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "KingstowerMapobjectVO");
  };
  ButtonAttackComponent.prototype.initSamuraiInvasionHandling = function () {
    this._button.enableButton = true;
  };
  ButtonAttackComponent.prototype.destroy = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
    __s1param0.prototype.destroy.call(this);
  };
  ButtonAttackComponent.prototype.onUpdateTime = function (__s33param0) {
    this.initAttackButton(true);
    if (this._button.enabled) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
      this._isListeningToTimer = false;
      if (this.layoutManager.tooltipManager.target == this._button.disp) {
        this.layoutManager.tooltipManager.hide();
      }
    }
  };
  ButtonAttackComponent.prototype.initFactionHandling = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttacked();
    this._button.enableButton = true;
    if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
      var __s37local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
      this._button.visible = this._worldMapObjectVO.ownerInfo.factionID != __s37local0.ownFaction;
      this._button.enableButton = this._worldMapObjectVO.canBeAttacked();
      if (!this._button.enabled) {
        if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAPITAL || this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_TOWER) {
          this._button.toolTipText = "dialog_factionEvent_blockedByTower";
        } else if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
          this._button.toolTipText = "dialog_factionEvent_villageBlockedByTower";
        }
      }
    }
    if (this._button.visible && this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      var __s37local1 = "";
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionTowerMapobjectVO")) {
        __s37local1 = "faction_tower_cooldown";
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionVillageMapobjectVO")) {
        __s37local1 = "faction_village_cooldown";
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
        __s37local1 = "faction_camp_cooldown";
      }
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: __s37local1,
        p: [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT)]
      };
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
      if (this._button.visible && this._worldMapObjectVO.ownerInfo.isFactionProtected && !this._worldMapObjectVO.ownerInfo.isOwnOwnerInfo) {
        this._button.enableButton = false;
        var __s37local2 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
        this._button.toolTipText = {
          t: "playerHasNoobProtection",
          p: [__s37local2]
        };
      }
      if (this._button.visible && this._worldMapObjectVO.ownerInfo.isNoobProtected) {
        this._button.enableButton = false;
        var __s37local3 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingNoobTime);
        this._button.toolTipText = {
          t: "playerHasNoobProtection",
          p: [__s37local3]
        };
      }
    }
    if (this._button.visible && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    }
  };
  ButtonAttackComponent.prototype.initFactionInvasionHandling = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttacked();
    this._button.enableButton = true;
    if (this._button.visible && this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: "faction_camp_cooldown",
        p: [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT)]
      };
    }
  };
  ButtonAttackComponent.prototype.initNomadCampHandling = function () {
    this._button.enableButton = true;
  };
  ButtonAttackComponent.prototype.initAlienInvasionHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = false;
      var __s56local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "nomadHasCooldown",
        p: [__s56local0]
      };
    } else if (this._worldMapObjectVO.canBeAttackedButHasPeacemode()) {
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: ["-"]
      };
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initABGTowerHandling = function () {
    var __s61local0 = this._worldMapObjectVO;
    if (!__s61local0.isAttackable && __s61local0.connections.length > __s61local0.defeatedConnections) {
      this._button.enableButton = false;
      this._button.disp.toolTipText = {
        t: "ringmenu_allianceTower_waitPvPAttack_tooltip",
        p: []
      };
    } else if (__s61local0.isAttackable || __s61local0.connections.length != __s61local0.defeatedConnections) {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    } else {
      this._button.enableButton = false;
      this._button.disp.toolTipText = {
        t: "ringmenu_allianceTower_drained_tooltip",
        p: []
      };
    }
  };
  ButtonAttackComponent.prototype.initBossDungeonHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = false;
      var __s66local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "bossDungeon_attackable_in",
        p: [__s66local0]
      };
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initDungeonHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      var __s70local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "DungeonIsleMapobjectVO")) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "eiland_dungeon_cooldownLocal_tooltip",
          p: [__s70local0]
        };
        this.layoutManager.tooltipManager.updateText(this._button.toolTipText, this._button.disp);
      } else {
        this._button.enableButton = true;
      }
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initResourceTowerHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = true;
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initNormalCastleHandling = function (__s80param0 = true) {
    if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo)) {
      this._button.toolTipText = "dialog_alliance_canAttackBuddy";
      this._button.enableButton = false;
    } else if (__s80param0 && this._worldMapObjectVO.ownerInfo.remainingNoobTime > 0) {
      var __s80local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingNoobTime);
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s80local0]
      };
      this._button.enableButton = false;
    } else if (__s80param0 && this._worldMapObjectVO.ownerInfo.remainingPeaceTime > 0) {
      var __s80local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingPeaceTime);
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s80local1]
      };
      this._button.enableButton = false;
    } else if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == __dep_exact_26a421b704832cff_2.AllianceConst.DIPLOMACY_REAL_ALLIED && __dep_export_CastleModel.CastleModel.userData.allianceID != -1) {
      this._button.toolTipText = "cantAttackAlliedPlayer";
      this._button.enableButton = false;
    } else if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      var __s80local2 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "castleHasCooldown",
        p: [__s80local2]
      };
      this._button.enableButton = false;
    } else if (this._worldMapObjectVO.kingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && this._worldMapObjectVO.ownerInfo.remainingRelocateDuration > 0) {
      var __s80local3 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.ownerInfo.remainingRelocateDuration * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "relocate_attackprotection",
        p: [__s80local3]
      };
      this._button.enableButton = false;
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initOutpostHandling = function () {
    var __s89local0 = this._worldMapObjectVO;
    var __s89local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(__s89local0.ownerInfo.allianceID)) == __dep_exact_26a421b704832cff_2.AllianceConst.DIPLOMACY_REAL_ALLIED && !__s89local0.isUnderConquerControl && (__s89local0.isConqueredByMe || __s89local0.isConqueredByAllianceMember);
    var __s89local2 = -1;
    if (this._worldMapObjectVO.controllerWorldMapOwnerInfoVO) {
      __s89local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.controllerWorldMapOwnerInfoVO.allianceID));
    }
    if (__s89local2 == __dep_exact_26a421b704832cff_2.AllianceConst.DIPLOMACY_REAL_ALLIED && __dep_export_CastleModel.CastleModel.userData.allianceID != -1) {
      this._button.toolTipText = "cantAttackAlliedPlayer";
      this._button.enableButton = false;
    } else if (__s89local1) {
      this._button.enableButton = false;
      this._button.toolTipText = "cantAttackAlliedPlayer";
    } else if (!__s89local0.ignoresPeaceMode && __s89local0.canBeAttackedButHasPeacemode()) {
      if (__s89local0.ownerInfo.remainingPeaceTime > 1 && !__s89local0.ownerInfo.isOwnOwnerInfo && !__s89local0.isUnderConquerControl) {
        this._button.enableButton = false;
        var __s89local3 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__s89local0.ownerInfo.remainingPeaceTime);
        this._button.toolTipText = {
          t: "playerHasNoobProtection",
          p: [__s89local3]
        };
      } else if (__s89local0.remainingCooldownTimeInSeconds > 1) {
        this._button.enableButton = false;
        var __s89local4 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(__s89local0.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
        var __s89local5 = {
          t: "outpostHasCooldown"
        };
        __s89local5.p = [__s89local4];
        this._button.toolTipText = __s89local5;
      }
    } else if (__s89local0.remainingCooldownTimeInSeconds > 0 && !__s89local0.ownerInfo.isOwnOwnerInfo) {
      this._button.enableButton = false;
      var __s89local6 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(__s89local0.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      var __s89local7 = null;
      (__s89local7 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s89local0, "CapitalMapobjectVO") ? {
        t: "capitalHasCooldown"
      } : __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s89local0, "MetropolMapobjectVO") ? {
        t: __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("metropolHasCooldown")
      } : {
        t: "outpostHasCooldown"
      }).p = [__s89local6];
      this._button.toolTipText = __s89local7;
    }
  };
  ButtonAttackComponent.prototype.initWolfkingHandling = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttacked();
    this._button.enableButton = __dep_export_CastleModel.CastleModel.generalsIntroductionData.canAttackWolfking();
  };
  ButtonAttackComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, this._worldMapObjectVO.attackType, null);
  };
  Object.defineProperty(ButtonAttackComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_attack";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAttackComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAttackComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
