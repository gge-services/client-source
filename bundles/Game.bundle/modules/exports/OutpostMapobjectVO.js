Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_WorldmapObjectFlagHelper = require("gge-module:export_WorldmapObjectFlagHelper");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function OutpostMapobjectVO() {
    var __s3local0 = this;
    __s3local0._woodAmount = 0;
    __s3local0._stoneAmount = 0;
    __s3local0._fieldAmount = 0;
    __s3local0._useFlag = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Outpost";
    __s3local0.group = "Mapobject";
    __s3local0._isVisibleOnMap = true;
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._areaType = __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_OUTPOST;
    __s3local0._keepLevel = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OutpostMapobjectVO, __s1param0);
  OutpostMapobjectVO.prototype.getEmptyOutpostContainer = function () {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    var __s5local2 = "Outpost_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local1)) {
      __s5local0.addItem(this.getAsExternalClip(__s5local1));
    } else if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local2)) {
      __s5local0.addItem(this.getAsExternalClip(__s5local2));
    } else {
      var __s5local3 = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount;
      __s5local0.addItem(this.getAsExternalClip(__s5local3));
      __s5local0.addItem(this.getAsExternalClip("Outpost_Empty"));
    }
    return __s5local0;
  };
  OutpostMapobjectVO.prototype.getPlayerOwnedOutpostContainer = function (__s10param0) {
    var __s10local0;
    if (__s10param0 === undefined) {
      __s10param0 = true;
    }
    var __s10local1;
    var __s10local2;
    var __s10local3 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s10local4 = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin || !__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s10local4)) {
      __s10local3.addItem(this.getBackgroundClip());
    }
    if (__s10param0) {
      __s10local0 = this.getOutpostFlagClip(this.ownerInfo);
      if (this.ownerInfo.hasVIPFlag) {
        __s10local0.scaleX = __s10local0.scaleY *= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      } else {
        __s10local0.scaleX = __s10local0.scaleY = __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      }
      __s10local3.addItem(__s10local0);
    }
    var __s10local5 = this.equipmentUniqueIdSkin > 0 ? __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    if (__s10local5 && __s10local5.hasSkinInfo()) {
      __s10local1 = "Outpost_Mapobject_Special_" + __s10local5.skinAssetID;
      __s10local2 = __s10local5.skinDefinesOutpostResourceAssets ? "Outpost_Mapobject_Special_" + __s10local5.skinAssetID + "_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_Icon" : "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_Icon";
    } else {
      __s10local1 = "Outpost_Mapobject_Level" + (this.outpostLevel > 0 ? this.outpostLevel : 1);
      __s10local2 = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_Icon";
    }
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s10local4)) {
      __s10local2 = __s10local4;
      __s10local3.addItem(this.getAsExternalClip(__s10local2));
    }
    var __s10local6 = "Outpost_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s10local6)) {
      __s10local1 = __s10local6;
    } else {
      __s10local3.addItem(this.getAsExternalClip(__s10local2));
    }
    var __s10local7 = this.getAsExternalClip(__s10local1);
    __s10local3.addItem(__s10local7);
    if (__s10local7 && __s10local0) {
      __dep_export_WorldmapObjectFlagHelper.WorldmapObjectFlagHelper.watchAndFix(__s10local7, __s10local0);
    }
    return __s10local3;
  };
  OutpostMapobjectVO.prototype.getOutpostFlagClip = function (__s23param0) {
    return this.getFlagClip(__s23param0, "Outpost");
  };
  OutpostMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s25param0, __s25param1, __s25param2 = false) {
    if (!this.ownerInfo || this.ownerInfo && this.ownerInfo.playerID == 0 || this.ownerInfo && this.ownerInfo.isOutpostOwner) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "CapitalMapobjectVO")) {
        return this.getEmptyCapitalContainer();
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "MetropolMapobjectVO")) {
        return this.getEmptyMetropolisContainer();
      } else {
        return this.getEmptyOutpostContainer();
      }
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "CapitalMapobjectVO")) {
      return this.getPlayerOwnedCapitalContainer(__s25param0);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this, "MetropolMapobjectVO")) {
      return this.getPlayerOwnedMetropolisContainer(__s25param0);
    } else {
      return this.getPlayerOwnedOutpostContainer(__s25param0);
    }
  };
  OutpostMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s34param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s34param0);
    this.outpostType = __s34param0.RT;
  };
  Object.defineProperty(OutpostMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("outpost"));
      } else {
        return this._areaNameString;
      }
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "outpostLevel", {
    get: function () {
      return this._keepLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "outpostType", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "outpostType").get.call(this);
    },
    set: function (__s46param0) {
      this._outpostType = __s46param0;
      if (!(__s46param0 < 0)) {
        this._woodAmount = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldConst.OUTPOST_TYPE_LIST[this._outpostType][3]);
        this._stoneAmount = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldConst.OUTPOST_TYPE_LIST[this._outpostType][4]);
        this._fieldAmount = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldConst.OUTPOST_TYPE_LIST[this._outpostType][5]);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "resAmountString", {
    get: function () {
      var __s49local0 = "";
      if (this._fieldAmount > this._woodAmount && this._fieldAmount > this._stoneAmount) {
        if (this._fieldAmount > 0) {
          __s49local0 += String(__dep_exact_92d05af59ee2ff30.Localize.text("resAmount_food", [this._fieldAmount]) + " ");
        }
        if (this._woodAmount > 0) {
          __s49local0 += String(__dep_exact_92d05af59ee2ff30.Localize.text("resAmount_wood", [this._woodAmount]) + " ");
        }
        if (this._stoneAmount > 0) {
          __s49local0 += String(__dep_exact_92d05af59ee2ff30.Localize.text("resAmount_stone", [this._stoneAmount]));
        }
      } else {
        if (this._woodAmount > 0) {
          __s49local0 += String(__dep_exact_92d05af59ee2ff30.Localize.text("resAmount_wood", [this._woodAmount]) + " ");
        }
        if (this._stoneAmount > 0) {
          __s49local0 += String(__dep_exact_92d05af59ee2ff30.Localize.text("resAmount_stone", [this._stoneAmount]) + " ");
        }
        if (this._fieldAmount > 0) {
          __s49local0 += String(__dep_exact_92d05af59ee2ff30.Localize.text("resAmount_food", [this._fieldAmount]));
        }
      }
      return __s49local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "woodAmount", {
    get: function () {
      return this._woodAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "stoneAmount", {
    get: function () {
      return this._stoneAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "fieldAmount", {
    get: function () {
      return this._fieldAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isUnderConquerControl", {
    get: function () {
      return this._occupierID > 0;
    },
    set: function (__s67param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "isUnderConquerControl").set.call(this, __s67param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isConqueredByMe", {
    get: function () {
      var __s69local0 = this.controllerWorldMapOwnerInfoVO;
      return !!__s69local0 && __s69local0.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    set: function (__s71param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "isConqueredByMe").set.call(this, __s71param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isConqueredByAllianceMember", {
    get: function () {
      var __s73local0 = this.controllerWorldMapOwnerInfoVO;
      return !!__s73local0 && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(__s73local0);
    },
    enumerable: true,
    configurable: true
  });
  OutpostMapobjectVO.prototype.canBeConquered = function () {
    var __s75local0 = this.ownerInfo;
    var __s75local1 = this.isOwnMapobject && this.isUnderConquerControl;
    return (!__s75local0 || !!__s75local0.isOutpostOwner || !(this.ownerInfo.playerID > 0)) && !__s75local1 && !this.isConqueredByAllianceMember;
  };
  OutpostMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    var __s77local0 = this.ownerInfo;
    var __s77local1 = this.isOwnMapobject;
    var __s77local2 = __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(__s77local0);
    var __s77local3 = !!__s77local0 && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(__s77local0.allianceID) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED;
    var __s77local4 = !!__s77local0 && !__s77local0.isOutpostOwner && this.ownerInfo.playerID > 0;
    return !__s77local1 && !__s77local2 && !this.isConqueredByAllianceMember && !this.isConqueredByMe && __s77local4 && !__s77local3;
  };
  OutpostMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.hasOutpostsInKingdom(this.kingdomID) && !this.isUnderConquerControl;
  };
  OutpostMapobjectVO.prototype.canBeSupported = function () {
    return !!this.ownerInfo && !!(this.ownerInfo.playerID > 0) && (this.isOwnMapobject ? !this.isUnderConquerControl && !this.canBeTroupsSended() : this.isConqueredByAllianceMember || this.isConqueredByMe || __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isUnderConquerControl);
  };
  OutpostMapobjectVO.prototype.canBePlagueAttacked = function () {
    return !!this.ownerInfo && !!(this.ownerInfo.playerID > 0) && (!this.isOwnMapobject && !this.isConqueredByMe && !this.ownerInfo.isOutpostOwner || this.isOwnMapobject && this.isUnderConquerControl);
  };
  OutpostMapobjectVO.prototype.canBeAttacked = function () {
    if (this.ownerInfo && !this.ownerInfo.isOutpostOwner && this.ownerInfo.playerID > 0) {
      var __s85local0 = this.isOwnMapobject;
      var __s85local1 = __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
      var __s85local2 = !this.isConqueredByAllianceMember && !this.isConqueredByMe;
      var __s85local3 = this.ownerInfo.remainingPeaceTime < 1;
      var __s85local4 = __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED;
      var __s85local5 = (__s85local0 || __s85local1 || !__s85local4) && this.isUnderConquerControl && this.remainingCooldownTimeInSeconds < 1;
      return !__s85local0 && !__s85local1 && __s85local2 && __s85local3 && __s85local4 || __s85local5;
    }
    return false;
  };
  OutpostMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && this.ownerInfo.remainingPeaceTime > 1 && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && !this.ownerInfo.isRuin && this.ownerInfo.playerID > 0;
    },
    set: function (__s92param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeTraded").set.call(this, __s92param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return true;
    },
    set: function (__s96param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeVisited").set.call(this, __s96param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      if (this.isOwnMapobject) {
        return this.isUnderConquerControl;
      } else {
        return !this.isConqueredByMe;
      }
    },
    set: function (__s102param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s102param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return !this.isOwnMapobject && this._ownerInfo != null && !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
    },
    set: function (__s106param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSabotaged").set.call(this, __s106param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return this.ownerInfo != null && !this.isOwnMapobject && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner);
    },
    set: function (__s110param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s110param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      var __s112local0 = Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "ownerInfo").get.call(this);
      __s112local0 ||= __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_exact_26a421b704832cff_1.OutpostConst.OUTPOST_DEFAULT_OWNER_ID);
      return __s112local0;
    },
    set: function (__s114param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "ownerInfo").set.call(this, __s114param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      if (this.isUnderConquerControl) {
        return __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierID);
      } else {
        return this.ownerInfo;
      }
    },
    set: function (__s120param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO").set.call(this, __s120param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isConqueredByRealAlliedAlliance", {
    get: function () {
      return !!this.controllerWorldMapOwnerInfoVO && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.controllerWorldMapOwnerInfoVO.allianceID) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK;
    },
    set: function (__s126param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s126param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isConqueredByMe || this.isOwnMapobject && !this.isUnderConquerControl;
    },
    enumerable: true,
    configurable: true
  });
  return OutpostMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.OutpostMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
