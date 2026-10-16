Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleDefenceData() {
    this._unitPercentLeft = 0;
    this._unitPercentMiddle = 0;
    this._unitPercentRight = 0;
    this._wallUnitCount = 0;
    this._wallUnitSlotCount = 0;
    this._unitCompositionLeft = 0;
    this._unitCompositionMiddle = 0;
    this._unitCompositionRight = 0;
    this._unitCompositionKeep = 0;
    this._keepUnitCount = 0;
    this._keepUnitSlotCount = 0;
    this._allianceUnitYardLimit = 0;
    this._remainingSupportUnits = 0;
    this._wallDefence = 0;
    this._moatDefence = 0;
    this._gateDefence = 0;
    this._lordID = -1;
    this._minAttackUnitsToConsumeTools = 0;
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
  }
  CastleDefenceData.prototype.parse_DFC = function (__s5param0) {
    if (__s5param0) {
      this._unitInventory.clear();
      this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
      this._areaInfo = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.A);
      if (!this._areaInfo) {
        console.error("Area Info is null. Server Object:\n" + JSON.stringify(__s5param0));
      }
      this._homeDWorkshopLevel = __s5param0.HDWL;
      this._itemsKeep = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_KEEP, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_KEEP, this._areaInfo.keepLevel);
      if (!__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay) {
        this._itemsKeepSupport = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_SUPPORT_TOOLS, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP, this._homeDWorkshopLevel);
      }
      var __s5local0 = __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_LEFTWALL;
      var __s5local1 = __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_MIDDLEWALL;
      var __s5local2 = __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_RIGHTWALL;
      var __s5local3 = __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_LEFTWALL;
      var __s5local4 = __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_MIDDLEWALL;
      var __s5local5 = __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_RIGHTWALL;
      if (this.areaInfo.kingdomID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
        __s5local0 = __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_LEFTWALL_FACTION;
        __s5local1 = __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_MIDDLEWALL_FACTION;
        __s5local2 = __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_RIGHTWALL_FACTION;
        __s5local3 = __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_LEFTWALL_FACTION;
        __s5local4 = __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_MIDDLEWALL_FACTION;
        __s5local5 = __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_RIGHTWALL_FACTION;
      }
      this._itemsLeftWall = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__s5local0, __s5local3, this._areaInfo.wallLevel, Number.MAX_VALUE, __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_SKILLS_LEFTWALL, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_SKILLS_LEFTWALL);
      this._itemsMiddleWall = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__s5local1, __s5local4, this._areaInfo.wallLevel + this._areaInfo.gateLevel);
      this._itemsRightWall = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__s5local2, __s5local5, this._areaInfo.wallLevel, Number.MAX_VALUE, __dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_SKILLS_RIGHTWALL, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_SKILLS_RIGHTWALL);
      this._itemsLeftMoat = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_LEFTMOAT, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_LEFTMOAT, this._areaInfo.moatLevel);
      this._itemsMiddleMoat = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_MIDDLEMOAT, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_MIDDLEMOAT, this._areaInfo.moatLevel);
      this._itemsRightMoat = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff_1.DefenseConst.ITEMS_RIGHTMOAT, __dep_exact_26a421b704832cff_1.DefenseConst.LEVELS_RIGHTMOAT, this._areaInfo.moatLevel);
      this.parse_DFW(__s5param0.dfw);
      this.parse_DFK(__s5param0.dfk);
      this.parse_DFM(__s5param0.dfm);
      this._prioRange = __s5param0.PR;
      this._prioMelee = __s5param0.PM;
      this._gateDefence = __dep_exact_f855840627e6e145.int(__s5param0.GD);
      if (__s5param0.L) {
        this._lordID = __dep_exact_f855840627e6e145.int(__s5param0.L.ID);
        var __s5local6 = __dep_export_CastleModel.CastleModel.lordData.getLordByID(this._lordID);
        if (__s5local6) {
          __s5local6.parseLord(__s5param0.L);
        }
      }
      this.controller.dispatchEvent(new __dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent(__dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.GET_DEFENCE_INFOS));
    }
  };
  CastleDefenceData.prototype.parse_DFW = function (__s13param0) {
    if (__s13param0 && this._itemsLeftWall) {
      this._itemsLeftWall.fillFromParamArray(__s13param0.L.S);
      this._itemsMiddleWall.fillFromParamArray(__s13param0.M.S);
      this._itemsRightWall.fillFromParamArray(__s13param0.R.S);
      this._unitPercentLeft = __dep_exact_f855840627e6e145.int(__s13param0.L.UP);
      this._unitPercentMiddle = __dep_exact_f855840627e6e145.int(__s13param0.M.UP);
      this._unitPercentRight = __dep_exact_f855840627e6e145.int(__s13param0.R.UP);
      this._unitCompositionLeft = __dep_exact_f855840627e6e145.int(__s13param0.L.UC);
      this._unitCompositionMiddle = __dep_exact_f855840627e6e145.int(__s13param0.M.UC);
      this._unitCompositionRight = __dep_exact_f855840627e6e145.int(__s13param0.R.UC);
      this._wallUnitCount = __dep_exact_f855840627e6e145.int(__s13param0.U);
      this._wallUnitSlotCount = __dep_exact_f855840627e6e145.int(__s13param0.US);
      this._wallDefence = __dep_exact_f855840627e6e145.int(__s13param0.D);
      this.controller.dispatchEvent(new __dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent(__dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.DEFENCELIST_CHANGED));
    }
  };
  CastleDefenceData.prototype.parse_DFK = function (__s16param0) {
    if (__s16param0 && this._itemsKeep) {
      this._itemsKeep.fillFromParamArray(__s16param0.S);
      if (this._itemsKeepSupport) {
        this._itemsKeepSupport.fillFromParamArray(__s16param0.STS);
      }
      this._allianceUnitYardLimit = __dep_exact_f855840627e6e145.int(__s16param0.AUYL);
      this._keepUnitSlotCount = __dep_exact_f855840627e6e145.int(__s16param0.UYL) - this._allianceUnitYardLimit;
      this._keepUnitCount = Math.min(this._keepUnitSlotCount, __dep_exact_f855840627e6e145.int(__s16param0.U));
      this._unitCompositionKeep = __dep_exact_f855840627e6e145.int(__s16param0.UC);
      this._remainingSupportUnits = Math.max(0, __dep_exact_f855840627e6e145.int(__s16param0.U) - this._keepUnitSlotCount);
      this._minAttackUnitsToConsumeTools = __dep_exact_f855840627e6e145.int(__s16param0.MAUCT);
      if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer || this.areaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
        this._keepUnitSlotCount = Number.POSITIVE_INFINITY;
      }
      this.controller.dispatchEvent(new __dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent(__dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.DEFENCELIST_CHANGED));
    }
  };
  CastleDefenceData.prototype.parse_DFM = function (__s21param0) {
    if (__s21param0 && this._itemsLeftMoat && this._itemsMiddleMoat && this._itemsRightMoat) {
      this._itemsLeftMoat.fillFromParamArray(__s21param0.LS);
      this._itemsMiddleMoat.fillFromParamArray(__s21param0.MS);
      this._itemsRightMoat.fillFromParamArray(__s21param0.RS);
      this._moatDefence = __dep_exact_f855840627e6e145.int(__s21param0.D);
      this.controller.dispatchEvent(new __dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent(__dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.DEFENCELIST_CHANGED));
    }
  };
  CastleDefenceData.prototype.getAmountOfEquippedUnits = function (__s24param0) {
    var __s24local0 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s24param0);
    return __dep_exact_f855840627e6e145.int(this._itemsKeep.getTotalAmountOfUntit(__s24local0) + this._itemsLeftMoat.getTotalAmountOfUntit(__s24local0) + this._itemsLeftWall.getTotalAmountOfUntit(__s24local0) + this._itemsMiddleMoat.getTotalAmountOfUntit(__s24local0) + this._itemsMiddleWall.getTotalAmountOfUntit(__s24local0) + this._itemsRightMoat.getTotalAmountOfUntit(__s24local0) + this._itemsRightWall.getTotalAmountOfUntit(__s24local0));
  };
  CastleDefenceData.prototype.getDefenceCastleName = function () {
    if (this._areaInfo) {
      return this._areaInfo.areaNameString;
    } else {
      return "";
    }
  };
  CastleDefenceData.prototype.getLevelKeep = function () {
    return this._areaInfo.keepLevel;
  };
  CastleDefenceData.prototype.getLevelGate = function () {
    return this._areaInfo.gateLevel;
  };
  CastleDefenceData.prototype.getLevelWall = function () {
    return this._areaInfo.wallLevel;
  };
  CastleDefenceData.prototype.getLevelWallGate = function () {
    return this._areaInfo.wallLevel + this._areaInfo.gateLevel;
  };
  CastleDefenceData.prototype.getLevelTower = function () {
    return this._areaInfo.towerLevel;
  };
  Object.defineProperty(CastleDefenceData.prototype, "itemsKeep", {
    get: function () {
      return this._itemsKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsKeepSupport", {
    get: function () {
      return this._itemsKeepSupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsLeftWall", {
    get: function () {
      return this._itemsLeftWall;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsMiddleWall", {
    get: function () {
      return this._itemsMiddleWall;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsRightWall", {
    get: function () {
      return this._itemsRightWall;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitPercentLeft", {
    get: function () {
      return this._unitPercentLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitPercentMiddle", {
    get: function () {
      return this._unitPercentMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitPercentRight", {
    get: function () {
      return this._unitPercentRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionLeft", {
    get: function () {
      return this._unitCompositionLeft;
    },
    set: function (__s58param0) {
      this._unitCompositionLeft = __s58param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionMiddle", {
    get: function () {
      return this._unitCompositionMiddle;
    },
    set: function (__s62param0) {
      this._unitCompositionMiddle = __s62param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionRight", {
    get: function () {
      return this._unitCompositionRight;
    },
    set: function (__s66param0) {
      this._unitCompositionRight = __s66param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionKeep", {
    get: function () {
      return this._unitCompositionKeep;
    },
    set: function (__s70param0) {
      this._unitCompositionKeep = __s70param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "keepUnitCount", {
    get: function () {
      return this._keepUnitCount;
    },
    set: function (__s74param0) {
      this._keepUnitCount = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "keepUnitSlotCount", {
    get: function () {
      return this._keepUnitSlotCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "wallDefence", {
    get: function () {
      return this._wallDefence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "gateDefence", {
    get: function () {
      return this._gateDefence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "wallUnitCount", {
    get: function () {
      return Math.ceil(this._wallUnitCount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "wallUnitSlotCount", {
    get: function () {
      return Math.ceil(this._wallUnitSlotCount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "moatDefence", {
    get: function () {
      return this._moatDefence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsLeftMoat", {
    get: function () {
      return this._itemsLeftMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsMiddleMoat", {
    get: function () {
      return this._itemsMiddleMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsRightMoat", {
    get: function () {
      return this._itemsRightMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "areaInfo", {
    get: function () {
      return this._areaInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "prioRange", {
    get: function () {
      return this._prioRange;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "prioMelee", {
    get: function () {
      return this._prioMelee;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "minAttackUnitsToConsumeTools", {
    get: function () {
      return this._minAttackUnitsToConsumeTools;
    },
    set: function (__s108param0) {
      this._minAttackUnitsToConsumeTools = __s108param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "homeDWorkshopLevel", {
    get: function () {
      return this._homeDWorkshopLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "allianceUnitYardLimit", {
    get: function () {
      return this._allianceUnitYardLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "remainingSupportUnits", {
    get: function () {
      return this._remainingSupportUnits;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDefenceData;
}();
exports.CastleDefenceData = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleFightItemContainer = require("gge-module:export_CastleFightItemContainer");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_CastleDefenceDataEvent = require("gge-module:export_CastleDefenceDataEvent");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
