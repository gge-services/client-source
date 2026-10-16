Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function KingstowerMapobjectVO() {
    var __s3local0 = this;
    __s3local0._occupierPId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Kingstower";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER;
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._occupierPId = -1;
    __s3local0._areaNameString = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingstowerMapobjectVO, __s1param0);
  KingstowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = "Kingstower_Mapobject";
    var __s5local2 = "Kingstower_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local2)) {
      __s5local1 = __s5local2;
    }
    var __s5local3 = this.getAsExternalClip(__s5local1);
    if (__s5param0 && this.ownerInfo && !this.ownerInfo.isDungeonOwner) {
      __s5local0.addItem(this.getKingstowerFlagClip(this.ownerInfo));
    }
    __s5local0.addItem(__s5local3);
    return __s5local0;
  };
  KingstowerMapobjectVO.prototype.getKingstowerFlagClip = function (__s9param0) {
    return this.getFlagClip(__s9param0, "Kingstower");
  };
  KingstowerMapobjectVO.prototype.parseAreaInfo = function (__s11param0) {
    this._areaType = __s11param0[0];
    this._absAreaPosX = __s11param0[1];
    this._absAreaPosY = __s11param0[2];
    this._objectId = __s11param0[3];
    this._occupierPId = __dep_exact_f855840627e6e145.int(__s11param0[4]);
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._kingdomID = __s11param0[5];
    this._secondsSinceEspionage = __s11param0[6];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.areaNameString = __s11param0[7];
    this._isVisibleOnMap = true;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var __s11local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s11local0).level;
    this._gateLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s11local1).level;
    this._moatLevel = 0;
    this._keepLevel = 0;
  };
  KingstowerMapobjectVO.prototype.parseGKL = function (__s13param0) {
    this.parseAreaInfo(__s13param0[0]);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(__s13param0[1]);
  };
  Object.defineProperty(KingstowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower"));
      } else {
        return this._areaNameString;
      }
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "worldmapToolTipDescription", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower_worldmap_tooltip_2"));
    },
    enumerable: true,
    configurable: true
  });
  KingstowerMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff_3.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(KingstowerMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return this._occupierPId == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "occupierPId", {
    get: function () {
      return this._occupierPId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "isPlayerOwned", {
    get: function () {
      return this._occupierPId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  KingstowerMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  KingstowerMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  Object.defineProperty(KingstowerMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isDungeonOwner;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.KINGDOM_CASTLE;
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  return KingstowerMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.KingstowerMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
