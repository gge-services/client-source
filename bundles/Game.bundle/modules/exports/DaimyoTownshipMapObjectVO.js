Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_WorldmapObjectFlagHelper = require("gge-module:export_WorldmapObjectFlagHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function DaimyoTownshipMapObjectVO() {
    var __s3local0 = this;
    __s3local0._totalCooldownTime = 0;
    __s3local0._skipCosts = 0;
    __s3local0._eventAutoScalingCampID = -1;
    __s3local0._baseMoatBonus = 0;
    __s3local0._baseGateBonus = 0;
    __s3local0._baseWallBonus = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "DaimyoTownship";
    __s3local0.type = "-";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DaimyoTownshipMapObjectVO, __s1param0);
  DaimyoTownshipMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0;
    var __s5local1 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (this.ownerInfo && __s5param0) {
      (__s5local0 = this.getCastleFlagClip(this.ownerInfo)).scaleX = __s5local0.scaleY *= __dep_export_CastleWorldmapCamera.CastleWorldmapCamera.ZOOM_MAX;
      __s5local1.addItem(__s5local0);
    }
    var __s5local2 = "DaimyoTownship_Mapobject_Rank" + this._daimyoXmlVO.rank;
    var __s5local3 = this.getAsExternalClip(__s5local2);
    __s5local1.addItem(__s5local3);
    if (__s5local3 && __s5local0) {
      __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s5local3, __s5local0);
    }
    return __s5local1;
  };
  DaimyoTownshipMapObjectVO.prototype.parseAreaInfo = function (__s9param0) {
    this.areaType = __s9param0[0];
    this.absAreaPosX = __s9param0[1];
    this.absAreaPosY = __s9param0[2];
    if (__s9param0.length > 3) {
      this.secondsSinceEspionage = __s9param0[3];
      this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._totalCooldownTime = __dep_exact_f855840627e6e145.int(__s9param0[6]);
      this._skipCosts = __dep_exact_f855840627e6e145.int(__s9param0[7]);
      this._eventAutoScalingCampID = __dep_exact_f855840627e6e145.int(__s9param0[8]);
      this._daimyoXmlVO = __dep_export_CastleModel.CastleModel.daimyoTownshipXmlData.getDaimyoTownshipByID(__s9param0[4], this._eventAutoScalingCampID);
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
      this._isVisibleOnMap = true;
      this._baseWallBonus = __s9param0[9];
      this._baseGateBonus = __s9param0[10];
      this._baseMoatBonus = __s9param0[11];
    } else {
      this._isVisibleOnMap = false;
    }
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var __s9local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s9local0).level;
    this._gateLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s9local1).level;
    this._moatLevel = 0;
    this._keepLevel = 5;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  DaimyoTownshipMapObjectVO.prototype.parseAreaInfoBattleLog = function (__s13param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s13param0);
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    this._daimyoXmlVO = __dep_export_CastleModel.CastleModel.daimyoTownshipXmlData.getDaimyoTownship(__s13param0.DAR, -1, __s13param0.DDCID);
  };
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION) && this._isVisibleOnMap;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoTownshipMapObjectVO.prototype.canBeSupported = function () {
    return true;
  };
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return true;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return false;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var __s33local0 = this._skipCosts;
      var __s33local1 = __dep_exact_f855840627e6e145.int(this.totalCooldownTime);
      return __s33local0 * this.remainingCooldownTimeInSeconds / __s33local1;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "skipCooldownCostC2").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "baseGateBonus").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "baseWallBonus").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "baseMoatBonus").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "eventAutoScalingCampID", {
    get: function () {
      return this._eventAutoScalingCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this._totalCooldownTime;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "totalCooldownTime").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.daimyoXmlVO) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_DASH_SPLIT, [__dep_exact_92d05af59ee2ff30.Localize.text("township"), __dep_exact_92d05af59ee2ff30.Localize.text("rank_value", [this.daimyoXmlVO.rank])]);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("township");
      }
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "daimyoXmlVO", {
    get: function () {
      return this._daimyoXmlVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.HOME_CASTLE;
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportCapacity", {
    get: function () {
      return this.daimyoXmlVO.unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportCapacityToolTipID", {
    get: function () {
      return "dialog_townshipSupport_limit_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportCapacityReachedToolTipID", {
    get: function () {
      return "dialog_townshipSupport_limit_warning_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "defenceCapacityToolTipID", {
    get: function () {
      return "dialog_townshipDefense_limit_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "defenceCapacityReachedToolTipID", {
    get: function () {
      return "dialog_townshipDefense_limit_warning_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportOverviewToolTip", {
    get: function () {
      return "dialog_townshipDefense_supportOverview_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportOverviewNoTroopsToolTipID", {
    get: function () {
      return "dialog_campEconomy_noTroopsStationed";
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoTownshipMapObjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.DaimyoTownshipMapObjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "ISupportCapacityVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleWorldmapCamera = require("gge-module:export_CastleWorldmapCamera");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
