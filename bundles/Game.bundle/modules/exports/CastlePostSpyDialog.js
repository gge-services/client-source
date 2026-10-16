Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_C2SCreateSpyMovementVO = require("gge-module:export_C2SCreateSpyMovementVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_ACastlePostActionDialog = require("gge-module:export_ACastlePostActionDialog");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __s0local0 = function (__s1param0) {
  function CastlePostSpyDialog(__s3param0 = null) {
    return __s1param0.call(this, __s3param0 || CastlePostSpyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostSpyDialog, __s1param0);
  CastlePostSpyDialog.prototype.showLoaded = function (__s5param0 = null) {
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 169, 147);
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  CastlePostSpyDialog.prototype.spyCastle = function () {
    var __s7local0 = this.spyVO.worldmapObjectVO;
    if (this.hasEnoughEventTime(__s7local0)) {
      var __s7local1 = this.selectedHorse;
      var __s7local2 = __dep_exact_f855840627e6e145.int(__s7local1 ? __s7local1.wodId : -1);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateSpyMovementVO.C2SCreateSpyMovementVO(this.spyVO.startCastleId, __s7local0.absAreaPosX, __s7local0.absAreaPosY, this.spyVO.spiesInUse, this.spyVO.spyType, this.spyVO.spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE ? this.spyVO.damage : this.spyVO.accuracy, __s7local2, __s7local0.kingdomID, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds()));
      if (this.dialogProperties.hideFunction) {
        this.dialogProperties.hideFunction();
      }
      this.hide();
    }
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "spyVO", {
    get: function () {
      return this.dialogProperties.startSpyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSpyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.prototype.startTravelAction = function () {
    this.spyCastle();
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "distance", {
    get: function () {
      return this.spyVO.distance;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "distance").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSpyDialog.prototype, "cost", {
    get: function () {
      return this.spyVO.cost;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "cost").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSpyDialog.prototype, "unlockedHorses", {
    get: function () {
      var __s25local0 = __dep_export_CastleModel.CastleModel.permanentCastleData.getCastleByWorldAreaId(this.spyVO.startCastleId, this.spyVO.worldmapObjectVO.kingdomID);
      if (__s25local0 && __s25local0.horsesVO) {
        return __s25local0.horsesVO.horses;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.prototype.getTravelBoost = function (__s29param0) {
    return __dep_exact_f855840627e6e145.int(__s29param0.spyBoost);
  };
  CastlePostSpyDialog.prototype.getBoostCostC1 = function (__s31param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.SpyConst.getHorseCostC1(this.distance, this.spyVO.spiesInUse, __s31param0.costFactorC1, this.spyVO.risk)));
  };
  CastlePostSpyDialog.prototype.getBoostCostC2 = function (__s33param0) {
    if (__s33param0.isPayedWithPegasusTickets) {
      return 0;
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.SpyConst.getHorseCostC2(this.distance, this.spyVO.spiesInUse, __s33param0.costFactorC2)));
    }
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "normalTravelTime", {
    get: function () {
      return this.spyVO.getTravelTime(this.spyVO.spyType, this.dialogProperties.startSpyVO.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DUNGEON);
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "normalTravelTime").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.prototype.getBoostedTravelTime = function (__s41param0) {
    var __s41local0 = 0;
    __s41local0 = this.spyVO.spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE ? __dep_exact_26a421b704832cff.SpyConst.TRAVELSPEED_SABOTAGE : __dep_exact_26a421b704832cff.SpyConst.TRAVELSPEED_SPY;
    var __s41local1 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ESPIONAGE_SPEED_BOOST).strength / 100;
    __s41local1 += __dep_export_CastleModel.CastleModel.userData.getGlobalConstructionItemEffectByType(__dep_export_CastleEffectEnum.CastleEffectEnum.ESPIONAGESPEEDBOOST) / 100;
    __s41local1 += __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, -1, this.dialogProperties.startSpyVO.worldmapObjectVO.areaType, this.dialogProperties.startSpyVO.worldmapObjectVO.spaceID).strength / 100;
    __s41local1 += __dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.dialogProperties.startSpyVO.worldmapObjectVO.areaType, this.dialogProperties.startSpyVO.worldmapObjectVO.spaceID) / 100;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.TravelConst.getTravelTimeWithHorse(__s41local0, this.distance, __s41local1, __s41param0, 0, this.distance, false));
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      return this.spyVO.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "shipsInsteadOfHorses").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.NAME = "CastlePostSpy";
  return CastlePostSpyDialog;
}(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog);
exports.CastlePostSpyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
