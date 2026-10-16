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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_C2SAttackInfoBossDungeonVO = require("gge-module:export_C2SAttackInfoBossDungeonVO");
var __dep_export_C2SAttackInfoIslandVO = require("gge-module:export_C2SAttackInfoIslandVO");
var __dep_export_C2SAttackInfoLandmarkVO = require("gge-module:export_C2SAttackInfoLandmarkVO");
var __dep_export_C2SAttackInfoVillageVO = require("gge-module:export_C2SAttackInfoVillageVO");
var __dep_export_C2SGetAttackABGTowerInfosVO = require("gge-module:export_C2SGetAttackABGTowerInfosVO");
var __dep_export_C2SGetAttackCastleInfosVO = require("gge-module:export_C2SGetAttackCastleInfosVO");
var __dep_export_C2SGetAttackDungeonInfosVO = require("gge-module:export_C2SGetAttackDungeonInfosVO");
var __dep_export_C2SGetCollectorAttackInfoVO = require("gge-module:export_C2SGetCollectorAttackInfoVO");
var __dep_export_C2SGetConquerCapitalInfosVO = require("gge-module:export_C2SGetConquerCapitalInfosVO");
var __dep_export_C2SGetConquerMetropolInfosVO = require("gge-module:export_C2SGetConquerMetropolInfosVO");
var __dep_export_C2SGetConquerOutpostInfosVO = require("gge-module:export_C2SGetConquerOutpostInfosVO");
var __dep_export_C2SConquerInfoFactioncampVO = require("gge-module:export_C2SConquerInfoFactioncampVO");
var __dep_export_C2SGetSpyInfo = require("gge-module:export_C2SGetSpyInfo");
var __dep_export_C2SSupportDefenceInfoVO = require("gge-module:export_C2SSupportDefenceInfoVO");
var __dep_export_C2STroopSupportInfoVO = require("gge-module:export_C2STroopSupportInfoVO");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleCollectorEventDataEvent = require("gge-module:export_CastleCollectorEventDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_ComboboxItemRendererShort = require("gge-module:export_ComboboxItemRendererShort");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleSpyDialogProperties = require("gge-module:export_CastleSpyDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleStartAttackDialog() {
    return __s1param0.call(this, CastleStartAttackDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartAttackDialog, __s1param0);
  CastleStartAttackDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.spy_alert.spy_button]);
  };
  CastleStartAttackDialog.prototype.showSpyAlert = function () {
    return this.dialogProperties.worldmapObjectVO.canBeSpied && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SPY && this.dialogProperties.worldmapObjectVO.remainingSpyInfoTime <= 0 && this.actionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS && this.actionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE && !__dep_export_CastleModel.CastleModel.subscriptionData.isAutoSpyActiveForArea(this.dialogProperties.worldmapObjectVO);
  };
  CastleStartAttackDialog.prototype.initAttackInfo = function () {
    var __s9local0;
    var __s9local1;
    this.dialogDisp.mc_estimatedCapitalCoins.visible = false;
    this.dialogDisp.mc_estimatedCapitalCoins.mouseChildren = false;
    this.dialogDisp.attackInfo.mc_crest_alliance.visible = false;
    if (this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      __s9local0 = this.factionEventVO.ownFaction == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
      __s9local1 = this.dialogProperties.worldmapObjectVO.ownerInfo.factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
    } else {
      __s9local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest;
      __s9local1 = this.dialogProperties.worldmapObjectVO.ownerInfo.crest;
    }
    this.fillCastleList();
    this.fillUserCastle();
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.attackInfo.mc_crest0, __s9local0, null, true);
    this.drawEnemyCastle();
    if (this.dialogProperties.worldmapObjectVO.ownerInfo) {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.attackInfo.mc_crest1, __s9local1, null, true);
      this.dialogDisp.attackInfo.mc_crest1.visible = true;
      this.dialogDisp.attackInfo.mc_crestShadowEnemy.visible = true;
    } else {
      this.dialogDisp.attackInfo.mc_crest1.visible = false;
      this.dialogDisp.attackInfo.mc_crestShadowEnemy.visible = false;
    }
    this.itxt_distance.textContentVO.numberValue = __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this._castleList.selectedData, this.dialogProperties.worldmapObjectVO, true, this.actionType);
    if (this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) {
      this.renderCollectableIDAtCollectorMc(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_COLLECTOR).collectInfoVO.collectorCurrencyID);
      __dep_export_CastleModel.CastleModel.collectEventData.getPlayerCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID);
      __dep_export_CastleModel.CastleModel.collectEventData.addEventListener(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    } else if (this.isTempServerCollectorAttack) {
      this.renderCollectableIDAtCollectorMc(__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.currencyID);
      __dep_export_CastleModel.CastleModel.collectEventData.getTempserverCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID);
      __dep_export_CastleModel.CastleModel.collectEventData.addEventListener(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    } else if (this.isAllianceBattleGroundPlayerPointsAttack) {
      this.renderCollectableIDAtCollectorMc(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.currencyID);
      __dep_export_CastleModel.CastleModel.collectEventData.getABGCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID);
      __dep_export_CastleModel.CastleModel.collectEventData.addEventListener(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    } else if (this.isAllianceBattleGroundAlliancePointsAttack) {
      this.renderCollectableIDAtCollectorMc(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.currencyID);
      __dep_export_CastleModel.CastleModel.collectEventData.getABGAllianceCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.allianceID);
      __dep_export_CastleModel.CastleModel.collectEventData.addEventListener(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onAllianceCollecterData));
    }
  };
  CastleStartAttackDialog.prototype.renderCollectableIDAtCollectorMc = function (__s19param0) {
    this.dialogDisp.mc_estimatedCapitalCoins.visible = true;
    this.dialogDisp.mc_estimatedCapitalCoins.mc_icon.gotoAndStop(2);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_estimatedCapitalCoins.mc_icon.mc_placeholder);
    var __s19local0 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __s19param0);
    var __s19local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.mc_estimatedCapitalCoins.mc_icon.mc_placeholder);
    var __s19local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(30, 30));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s19local1, __s19local0, __s19local2);
    this.dialogDisp.mc_estimatedCapitalCoins.toolTipText = __s19local0.getTooltipTextId();
  };
  Object.defineProperty(CastleStartAttackDialog.prototype, "isAllianceBattleGroundAlliancePointsAttack", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CapitalMapobjectVO") && this.isActionTypeAnAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isAllianceBattleGroundPlayerPointsAttack", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO") && this.isActionTypeAnAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isAllianceBattleGroundTowerPlayerAttack", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.isOnABGAndTower && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO") && this.isActionTypeAnAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isTempServerCollectorAttack", {
    get: function () {
      return !!this.isActionTypeAnAttack && !!this.env.isOnTemporaryServer && !!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO") && this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_3.WorldClassic.KINGDOM_ID && !!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCollectorScoring;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartAttackDialog.prototype.onCollecterData = function (__s29param0) {
    if (this.dialogProperties.worldmapObjectVO.ownerInfo.playerID == __s29param0.playerID) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedCapitalCoins.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s29param0.collectCurrency));
      __dep_export_CastleModel.CastleModel.collectEventData.removeEventListener(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    }
  };
  CastleStartAttackDialog.prototype.onAllianceCollecterData = function (__s32param0) {
    if (this.dialogProperties.worldmapObjectVO.ownerInfo.allianceID == __s32param0.playerID) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedCapitalCoins.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s32param0.collectCurrency));
      __dep_export_CastleModel.CastleModel.collectEventData.removeEventListener(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onAllianceCollecterData));
    }
  };
  Object.defineProperty(CastleStartAttackDialog.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  CastleStartAttackDialog.prototype.initFameAndHonor = function () {
    var __s37local0 = this.isPvPAttack;
    __s37local0 = (__s37local0 = (__s37local0 = (__s37local0 = (__s37local0 = (__s37local0 = __s37local0 && !this.isTempServerCollectorAttack) && !this.isAllianceBattleGroundAlliancePointsAttack) && !this.isAllianceBattleGroundPlayerPointsAttack) && !this.isAllianceBattleGroundTowerPlayerAttack) && this.actionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "ABGAllianceTowerMapobjectVO");
    this.dialogDisp.mc_fameBonus.visible = this.dialogDisp.mc_estimatedHonor.visible = __s37local0;
    if (this.dialogDisp.mc_estimatedHonor.visible) {
      var __s37local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleFameHelper.CastleFameHelper.getEstimatedHonor(this.dialogProperties.worldmapObjectVO, this.actionType));
      var __s37local2 = __dep_export_CastleFameHelper.CastleFameHelper.canEarnOrLoseHonor(this.dialogProperties.worldmapObjectVO, this.actionType);
      this.setHonorBonus(__s37local1, __s37local2);
      var __s37local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleFameHelper.CastleFameHelper.getEstimatedFameBonus(this.dialogProperties.worldmapObjectVO, this.actionType));
      var __s37local4 = __dep_export_CastleFameHelper.CastleFameHelper.canEarnFame(this.dialogProperties.worldmapObjectVO, this.actionType);
      this.setFameBonus(__s37local3, __s37local4);
    }
  };
  CastleStartAttackDialog.prototype.setHonorBonus = function (__s40param0, __s40param1) {
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS) && __s40param1 && __s40param0 > 0) {
      __s40param0 = __dep_exact_f855840627e6e145.int(__s40param0 * (1 + __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS) / 100));
    }
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_honor_txt_value, __s40param1 && __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS), 20, new __s0local0(-10, 0));
    if (__s40param0 >= 0) {
      this.i_honor_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD;
    } else {
      this.i_honor_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
      this.i_honor_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.i_honor_txt_value.textContentVO.textReplacements = [Math.abs(__s40param0)];
    if (__s40param1) {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    } else {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_NO_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_fame_nohonor";
    }
  };
  CastleStartAttackDialog.prototype.setFameBonus = function (__s47param0, __s47param1) {
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS) && __s47param1) {
      __s47param0 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS));
    }
    this.i_fame_txt_value.textContentVO.textReplacements = [__s47param0];
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_fame_txt_value, __s47param1 && __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS), 20, new __s0local0(-10, 0));
    if (__s47param1) {
      this.dialogDisp.mc_fameBonus.icon_fame.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_FAME);
      this.dialogDisp.mc_fameBonus.toolTipText = {
        t: "dialog_fame_getfame",
        p: [__s47param0]
      };
    } else {
      this.dialogDisp.mc_fameBonus.icon_fame.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_NO_FAME);
      this.dialogDisp.mc_fameBonus.toolTipText = "dialog_fame_nofame";
    }
  };
  CastleStartAttackDialog.prototype.fillCastleList = function () {
    var __s52local0 = 0;
    this._castleList.clearItems();
    var __s52local1;
    var __s52local2 = __dep_exact_f855840627e6e145.int(this.dialogProperties.worldmapObjectVO.kingdomID);
    if (this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER && this.dialogProperties.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP || this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK || this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK || this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK) {
      (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s52local2).areaNameString;
      __s52local1.data = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s52local2);
      this._castleList.addItem(__s52local1);
    } else {
      var __s52local3;
      var __s52local4 = 0;
      __s52local0 = 0;
      if ((__s52local3 = this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID ? __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps : __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOutposts) != null) {
        for (var __s52local5 = 0, __s52local6 = __s52local3; __s52local5 < __s52local6.length; __s52local5++) {
          var __s52local7 = __s52local6[__s52local5];
          if (__s52local7 !== undefined && __s52local7.objectId != this.dialogProperties.worldmapObjectVO.objectId && __s52local7.kingdomID == __s52local2) {
            (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s52local7.areaNameString;
            __s52local1.data = __s52local7;
            this._castleList.addItem(__s52local1);
            if (__s52local7 == __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel) {
              __s52local0 = __s52local4;
            }
            ++__s52local4;
          }
        }
      }
      if (__dep_export_CastleModel.CastleModel.userData.villageList && (this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS || this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE)) {
        for (var __s52local8 = 0, __s52local9 = __dep_export_CastleModel.CastleModel.userData.villageList.getSortedVillageListByKingdomID(__s52local2); __s52local8 < __s52local9.length; __s52local8++) {
          var __s52local10 = __s52local9[__s52local8];
          var __s52local11 = __s52local10.villageMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_RESOURCE;
          var __s52local12 = __s52local10.villageMapObjectVO.objectId != this.dialogProperties.worldmapObjectVO.objectId;
          var __s52local13 = __s52local10.villageMapObjectVO.kingdomID == __s52local2;
          var __s52local14 = this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
          if ((!__s52local11 || __s52local14) && __s52local12 && __s52local13) {
            (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s52local10.villageMapObjectVO.areaNameString;
            __s52local1.data = __s52local10.villageMapObjectVO;
            this._castleList.addItem(__s52local1);
          }
        }
      }
      if (this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS || this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE) {
        if (__dep_export_CastleModel.CastleModel.userData.kingstowerList.completeList && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "KingstowerMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "UpgradableLandmarkMapobjectVO")) {
          for (var __s52local15 = 0, __s52local16 = __dep_export_CastleModel.CastleModel.userData.kingstowerList.completeList; __s52local15 < __s52local16.length; __s52local15++) {
            var __s52local17 = __s52local16[__s52local15];
            if (__s52local17 !== undefined && __s52local17.objectId != this.dialogProperties.worldmapObjectVO.objectId && __s52local17.kingdomID == __s52local2) {
              (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s52local17.areaNameString;
              __s52local1.data = __s52local17;
              this._castleList.addItem(__s52local1);
            }
          }
        }
        if (__dep_export_CastleModel.CastleModel.userData.monumentList.completeList && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "KingstowerMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "UpgradableLandmarkMapobjectVO")) {
          for (var __s52local18 = 0, __s52local19 = __dep_export_CastleModel.CastleModel.userData.monumentList.completeList; __s52local18 < __s52local19.length; __s52local18++) {
            var __s52local20 = __s52local19[__s52local18];
            if (__s52local20 !== undefined && __s52local20.objectId != this.dialogProperties.worldmapObjectVO.objectId && __s52local20.kingdomID == __s52local2) {
              (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s52local20.areaNameString;
              __s52local1.data = __s52local20;
              this._castleList.addItem(__s52local1);
            }
          }
        }
        if (__dep_export_CastleModel.CastleModel.userData.laboratoryList.completeList && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "KingstowerMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "UpgradableLandmarkMapobjectVO")) {
          for (var __s52local21 = 0, __s52local22 = __dep_export_CastleModel.CastleModel.userData.laboratoryList.completeList; __s52local21 < __s52local22.length; __s52local21++) {
            var __s52local23 = __s52local22[__s52local21];
            if (__s52local23 !== undefined && __s52local23.objectId != this.dialogProperties.worldmapObjectVO.objectId && __s52local23.kingdomID == __s52local2) {
              (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s52local23.areaNameString;
              __s52local1.data = __s52local23;
              this._castleList.addItem(__s52local1);
            }
          }
        }
      }
    }
    this._castleList.enabled = true;
    if (this._castleList.numItems == 0) {
      if (__dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(__s52local2)) {
        (__s52local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s52local2).areaNameString;
        __s52local1.data = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
        this._castleList.addItem(__s52local1);
      } else {
        this.hide();
      }
    } else if (this._castleList.numItems == 1) {
      this._castleList.enabled = false;
    }
    if (this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      var __s52local24;
      for (var __s52local25 = 0, __s52local26 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s52local25 < __s52local26.length; __s52local25++) {
        var __s52local27 = __s52local26[__s52local25];
        if (__s52local27 !== undefined && __s52local27.isMyMovement && __s52local27.targetArea.absAreaPos.equals(this.dialogProperties.worldmapObjectVO.absAreaPos)) {
          __s52local24 = __s52local27.sourceArea;
          break;
        }
      }
      if (__s52local24) {
        this._castleList.enabled = false;
        for (var __s52local28 = 0; __s52local28 < this._castleList.itemData.length; __s52local28++) {
          if (this._castleList.itemData[__s52local28].data.absAreaPos.equals(__s52local24.absAreaPos)) {
            this._castleList.selectItemIndex(__s52local28);
          }
        }
      } else {
        this._castleList.selectItemIndex(__s52local0);
      }
    } else {
      this._castleList.selectItemIndex(__s52local0);
    }
  };
  CastleStartAttackDialog.prototype.fillUserCastle = function (__s92param0 = null) {
    if (this._castleList.selectedData) {
      var __s92local0;
      var __s92local1 = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(this._castleList.selectedData.objectId, this._castleList.selectedData.kingdomID);
      __s92local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s92local1, "CapitalMapobjectVO") ? new __s0local0(90, 80) : new __s0local0(70, 60);
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.attackInfo.mc_holder0);
      this.dialogDisp.attackInfo.mc_holder0.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s92local1, __s92local0, true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
      this.itxt_distance.textContentVO.numberValue = __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this._castleList.selectedData, this.dialogProperties.worldmapObjectVO, true, this.actionType);
    }
  };
  CastleStartAttackDialog.prototype.changeCasteList = function (__s95param0 = null) {
    this.fillCastleList();
  };
  CastleStartAttackDialog.prototype.drawEnemyCastle = function () {
    var __s97local0;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.attackInfo.mc_holder1);
    __s97local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CapitalMapobjectVO") ? new __s0local0(90, 80) : new __s0local0(70, 60);
    this.dialogDisp.attackInfo.mc_holder1.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.worldmapObjectVO, __s97local0, true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    if (this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL) {
      this.dialogDisp.attackInfo.mc_holder1.getChildAt(0).x += 10;
    }
    this.i_castleName_txt.textContentVO.stringValue = this.dialogProperties.worldmapObjectVO.areaNameString;
    this.dialogDisp.attackInfo.mc_nameEnemy.mc_dove.visible = false;
    this.dialogDisp.attackInfo.mc_nameEnemy.mc_rank.visible = false;
    this.dialogDisp.attackInfo.mc_nameEnemy.mc_searchAlliance.visible = false;
  };
  CastleStartAttackDialog.prototype.showLoaded = function (__s100param0 = null) {
    if (this.dialogProperties.worldmapObjectVO) {
      this._castleList ||= new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.attackInfo.castleListCombobox, "", __dep_export_ComboboxComponent.ComboboxComponent.OPEN_DOWN, 40, 45, -1, 7, new __dep_export_ComboboxItemRendererShort.ComboboxItemRendererShort(), 15, true, false, 15);
      this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.txt_from, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_startAttack_from"));
      this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.txt_to, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_startAttack_to"));
      var __s100local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_supportDefence_title"));
      var __s100local1 = this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.mc_baron.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
      this.itxt_distance = this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.mc_distance.txt_distance, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0, true, 1));
      this.i_fame_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_fameBonus.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD));
      this.i_honor_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [0]));
      this.i_castleName_txt = this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.mc_nameEnemy.castleName_txt, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.worldmapObjectVO.areaNameString));
      this.dialogDisp.attackInfo.mc_distance.toolTipText = "distance";
      this.dialogDisp.mc_estimatedHonor.mouseChildren = false;
      this.dialogDisp.mc_fameBonus.mouseChildren = false;
      this.dialogDisp.spy_alert.visible = false;
      this.textFieldManager.registerTextField(this.dialogDisp.spy_alert.alert_message, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("spyWarning_warning"));
      this.textFieldManager.registerTextField(this.dialogDisp.spy_alert.spy_button.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("spyWarning_spyNow"));
      this.updateSpyAlert();
      __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, this.dialogDisp.mc_charPlaceHolder, 145, 189);
      this.dialogDisp.attackInfo.mc_baron.visible = (this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER || this.actionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK) && this.dialogProperties.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL && this.dialogProperties.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL && this.dialogProperties.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER && this.dialogProperties.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP;
      this.dialogDisp.attackInfo.mc_baron.toolTipText = "equipment_itemType_baron";
      switch (this.actionType) {
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
          __s100local0.textContentVO.textId = "dialog_sendTroups_title";
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
          __s100local0.textContentVO.textId = "dialog_supportDefence_title";
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK:
          __s100local0.textContentVO.textId = "ringmenu_conquer";
          __s100local1.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
          __s100local1.textContentVO.textReplacements = [String(__dep_export_CastleModel.CastleModel.lordData.numAvailableBarons), String(__dep_export_CastleModel.CastleModel.lordData.numAllBarons)];
          break;
        default:
          __s100local0.textContentVO.textId = "dialog_startAttack_title";
      }
      this.initFameAndHonor();
      this.initChargeAttackInfo();
      this.initAttackInfo();
      this.initABGAllianceTowerInfo();
      __s1param0.prototype.showLoaded.call(this, __s100param0);
      this._castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
      this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.changeCasteList));
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
      this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
    } else {
      this.hide();
    }
  };
  CastleStartAttackDialog.prototype.initABGAllianceTowerInfo = function () {
    this.dialogDisp.mc_abgAllianceTower_attackPlayer.visible = false;
    this.dialogDisp.mc_abgAllianceTower_attackTower.visible = false;
    this.dialogDisp.attackInfo.mc_crest_alliance.visible = true;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.attackInfo.mc_crest_alliance);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      this.dialogDisp.attackInfo.mc_crest1.visible = false;
      this.dialogDisp.mc_abgAllianceTower_attackTower.visible = true;
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.attackInfo.mc_crest_alliance, this.dialogProperties.worldmapObjectVO.ownerInfo.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.S, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
      var __s105local0 = this.dialogProperties.worldmapObjectVO;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_abgAllianceTower_attackTower.mc_points.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s105local0.currentTowerPoints));
      this.dialogDisp.mc_abgAllianceTower_attackTower.mc_points.toolTipText = "currency_name_Statuette";
      this.dialogDisp.mc_abgAllianceTower_attackTower.mc_points.mouseChildren = false;
      new __dep_export_ABGTowerConnectionsComponent.ABGTowerConnectionsComponent(this.dialogDisp.mc_abgAllianceTower_attackTower.mc_connections, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_DIALOG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SPACING_DIALOG).setConnections(__s105local0.connections);
    } else if (this.isAllianceBattleGroundTowerPlayerAttack) {
      this.dialogDisp.mc_abgAllianceTower_attackPlayer.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_abgAllianceTower_attackPlayer.txt_status, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_statusForTower_copy"));
      var __s105local1 = new __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent(__dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_DIALOG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, false);
      __s105local1.setConnection(this.dialogProperties.worldmapObjectVO.customConnections[0]);
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_abgAllianceTower_attackPlayer.mc_connection);
      this.dialogDisp.mc_abgAllianceTower_attackPlayer.mc_connection.addChild(__s105local1.disp);
    }
  };
  CastleStartAttackDialog.prototype.initChargeAttackInfo = function () {
    this.dialogDisp.mc_chargePoints.visible = false;
    this.dialogDisp.mc_chargeAttackBoost.visible = false;
    this.dialogDisp.mc_chargeAttackBoost.mouseChildren = false;
    this.dialogDisp.mc_chargePoints.mouseChildren = false;
    this.dialogDisp.mc_chargePoints.toolTipText = "currency_name_Tonic";
  };
  CastleStartAttackDialog.prototype.hideLoaded = function (__s111param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __s1param0.prototype.hideLoaded.call(this, __s111param0);
    if (this._castleList) {
      this._castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
    }
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.changeCasteList));
  };
  CastleStartAttackDialog.prototype.onSpiesChanged = function (__s114param0) {
    this.updateSpyAlert();
  };
  CastleStartAttackDialog.prototype.updateSpyAlert = function () {
    this.dialogDisp.spy_alert.visible = this.showSpyAlert();
    if (this.dialogDisp.spy_alert.visible) {
      var __s116local0 = true;
      var __s116local1 = "";
      if (__dep_export_CastleModel.CastleModel.spyData.getNumAvailableSpies(true) <= 0) {
        __s116local0 = false;
        __s116local1 = "spyWarning_noSpies";
      } else if (!this.dialogProperties.worldmapObjectVO.isInSpyLevelRange) {
        __s116local0 = false;
        __s116local1 = "ringmenu_toolTip_levelTooLow";
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.spy_alert.spy_button, __s116local0);
      this.dialogDisp.spy_alert.spy_button.toolTipText = __s116local1;
    }
  };
  CastleStartAttackDialog.prototype.onRemoveSpecialEvent = function (__s121param0) {
    if (__s121param0.specialEventVO.isOwnWmoVO(this.dialogProperties.worldmapObjectVO)) {
      this.hide();
    }
  };
  CastleStartAttackDialog.prototype.onClick = function (__s124param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s124param0.target)) {
      __s1param0.prototype.onClick.call(this, __s124param0);
      switch (__s124param0.target) {
        case this.dialogDisp.btn_yes:
          this.hide();
          this.onClickYes();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.spy_alert.spy_button:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyDialog.CastleSpyDialog, new __dep_export_CastleSpyDialogProperties.CastleSpyDialogProperties(this.dialogProperties.worldmapObjectVO, __dep_export_CastleSpyDialog.CastleSpyDialog.TAB_SPY));
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyInfo.C2SGetSpyInfo(this.dialogProperties.worldmapObjectVO.absAreaPosX, this.dialogProperties.worldmapObjectVO.absAreaPosY, this.dialogProperties.worldmapObjectVO.kingdomID));
          this.hide();
      }
    }
  };
  CastleStartAttackDialog.prototype.onClickYes = function () {
    switch (this.actionType) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        this.supportDefence();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        this.onSendTroups();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
        this.attackCastle();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        this.attackDungeon();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS:
        this.attackABGTower();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK:
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CapitalMapobjectVO")) {
          this.conquerCapital();
        } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "FactionCampMapobjectVO")) {
          this.conquerFactionCamp();
        } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "MetropolMapobjectVO")) {
          this.conquerMetropol();
        } else {
          this.conquerOutpost();
        }
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        this.attackBossDungeon();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        this.attackIsland();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
        this.attackVillage();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK:
        this.attackLandmark();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        this.attackCollector();
    }
  };
  CastleStartAttackDialog.prototype.attackCastle = function () {
    var __s135local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAttackCastleInfosVO.C2SGetAttackCastleInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, __s135local0, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackABGTower = function () {
    var __s137local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAttackABGTowerInfosVO.C2SGetAttackABGTowerInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, __s137local0, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackCollector = function () {
    var __s139local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCollectorAttackInfoVO.C2SGetCollectorAttackInfoVO(this.dialogProperties.worldmapObjectVO.absAreaPos, __s139local0, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.onSendTroups = function () {
    var __s141local0 = this._castleList.selectedData.absAreaPos;
    var __s141local1 = this.dialogProperties.worldmapObjectVO.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STroopSupportInfoVO.C2STroopSupportInfoVO(__s141local1, __s141local0, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.supportDefence = function () {
    var __s143local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSupportDefenceInfoVO.C2SSupportDefenceInfoVO(this.dialogProperties.worldmapObjectVO.absAreaPos, __s143local0));
  };
  CastleStartAttackDialog.prototype.attackDungeon = function () {
    if (this.dialogProperties.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_EVENT_DUNGEON || __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_DUNGEON)) {
      var __s145local0 = this._castleList.selectedData.absAreaPos;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAttackDungeonInfosVO.C2SGetAttackDungeonInfosVO(__s145local0, this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
    } else {
      this.hide();
    }
  };
  CastleStartAttackDialog.prototype.attackBossDungeon = function () {
    var __s149local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoBossDungeonVO.C2SAttackInfoBossDungeonVO(__s149local0, this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerOutpost = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetConquerOutpostInfosVO.C2SGetConquerOutpostInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerFactionCamp = function () {
    var __s153local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SConquerInfoFactioncampVO.C2SConquerInfoFactioncampVO(this.dialogProperties.worldmapObjectVO.absAreaPos, __s153local0, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerCapital = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetConquerCapitalInfosVO.C2SGetConquerCapitalInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerMetropol = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetConquerMetropolInfosVO.C2SGetConquerMetropolInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackVillage = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoVillageVO.C2SAttackInfoVillageVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackIsland = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoIslandVO.C2SAttackInfoIslandVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackLandmark = function () {
    var __s163local0 = this._castleList.selectedData.absAreaPos;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoLandmarkVO.C2SAttackInfoLandmarkVO(this.dialogProperties.worldmapObjectVO.absAreaPos, __s163local0, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  Object.defineProperty(CastleStartAttackDialog.prototype, "isActionTypeAnAttack", {
    get: function () {
      switch (this.actionType) {
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isPvPAttack", {
    get: function () {
      var __s168local0 = this.dialogProperties.worldmapObjectVO.ownerInfo ? this.dialogProperties.worldmapObjectVO.ownerInfo.playerID : -1;
      return this.isActionTypeAnAttack && (!__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s168local0) || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(__s168local0));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "actionType", {
    get: function () {
      return this.dialogProperties.selectedActionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartAttackDialog.NAME = "CastleStartAttackEx_ABGTower";
  CastleStartAttackDialog.FRAME_ICON_HONOR = 1;
  CastleStartAttackDialog.FRAME_ICON_NO_HONOR = 2;
  CastleStartAttackDialog.FRAME_ICON_FAME = 1;
  CastleStartAttackDialog.FRAME_ICON_NO_FAME = 2;
  return CastleStartAttackDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStartAttackDialog = __s0local1;
var __dep_export_CastleFameHelper = require("gge-module:export_CastleFameHelper");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ABGTowerConnectionsComponent = require("gge-module:export_ABGTowerConnectionsComponent");
var __dep_export_ABGTowerConnectionStateComponent = require("gge-module:export_ABGTowerConnectionStateComponent");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
