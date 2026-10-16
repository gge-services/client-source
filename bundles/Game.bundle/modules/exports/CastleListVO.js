Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleListVO() {
    this._ownerID = 0;
    this._castles = new Map();
    this._villages = [];
  }
  CastleListVO.prototype.parseCastleList = function (__s5param0, __s5param1) {
    this._castles = new Map();
    for (var __s5local0 = 0, __s5local1 = __s5param0.C; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = [];
        for (var __s5local4 = 0, __s5local5 = __s5local2.AI; __s5local4 < __s5local5.length; __s5local4++) {
          var __s5local6 = __s5local5[__s5local4];
          if (__s5local6 !== undefined) {
            var __s5local7 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5local6.AI);
            if (__s5local6.OGT) {
              __s5local7.remainingOpenGateTime = __dep_exact_f855840627e6e145.int(__s5local6.OGT);
            }
            if (__s5local6.OGC) {
              __s5local7.openGateCounter = __dep_exact_f855840627e6e145.int(__s5local6.OGC);
            }
            __s5local7.remainingAbandonOutpostTime = __dep_exact_f855840627e6e145.int(__s5local6.AOT);
            __s5local7.remainingCancelAbandonOutpostTime = __dep_exact_f855840627e6e145.int(__s5local6.CAT);
            __s5local7.remainingCooldownAbandonOutpostTime = __dep_exact_f855840627e6e145.int(__s5local6.TA);
            __s5local7.ownerInfo = __s5param1;
            __s5local3.push(__s5local7);
          }
        }
        __s5local3.sort(__dep_export_ClientConstSort.ClientConstSort.sortByMapObject);
        this._castles.set(__s5local2.KID, __s5local3);
      }
    }
  };
  CastleListVO.prototype.parseAllianceCity = function (__s15param0, __s15param1) {
    if (!!__s15param0 && !!__s15param0.AI && !(__s15param0.AI.length <= 0) && !(__s15param0.AI[0].length <= 0)) {
      var __s15local0 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s15param0.AI[0][0]);
      __s15local0.ownerInfo = __s15param1;
      var __s15local1 = this._castles.get(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
      __s15local1.push(__s15local0);
      __s15local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByMapObject);
    }
  };
  CastleListVO.prototype.parseABGTower = function (__s18param0) {
    if (__s18param0 && __s18param0.length != 0) {
      var __s18local0 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s18param0[0]);
      this._castles.get(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID).push(__s18local0);
    }
  };
  CastleListVO.prototype.parseVillageList = function (__s21param0, __s21param1) {
    this._villages = [];
    if (__s21param0) {
      for (var __s21local0 = 0, __s21local1 = __s21param0.VI; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined) {
          var __s21local3 = __s21local2[0];
          var __s21local4 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s21local3);
          __s21local4.ownerInfo = __s21param1;
          this._villages.push(__s21local4);
        }
      }
      this._villages.sort(this.bindFunction(this.villageSorter));
    }
  };
  CastleListVO.prototype.villageSorter = function (__s27param0, __s27param1) {
    if (__s27param0.kingdomID == __s27param1.kingdomID) {
      return __dep_exact_f855840627e6e145.int(__s27param0.areaNameString.localeCompare(__s27param1.areaNameString));
    } else if (__s27param0.kingdomID == __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID) {
      return -1;
    } else if (__s27param1.kingdomID == __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID) {
      return 1;
    } else {
      return __s27param0.kingdomID - __s27param1.kingdomID;
    }
  };
  CastleListVO.prototype.resetOpenGateCounter = function () {
    if (this._castles) {
      for (var __s33local0 = 0, __s33local1 = Array.from(this._castles.values()); __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2) {
          for (var __s33local3 = 0, __s33local4 = __s33local2; __s33local3 < __s33local4.length; __s33local3++) {
            var __s33local5 = __s33local4[__s33local3];
            if (__s33local5) {
              __s33local5.openGateCounter = 0;
            }
          }
        }
      }
    }
  };
  CastleListVO.prototype.addCastle = function (__s42param0, __s42param1) {
    if (!this._castles.get(__s42param1)) {
      this._castles.set(__s42param1, []);
    }
    this._castles.get(__s42param1).push(__s42param0);
  };
  CastleListVO.prototype.getFilteredList = function (__s45param0 = -1) {
    if (__s45param0 < 0) {
      var __s45local0 = [];
      if (this._castles != null) {
        for (var __s45local1 = 0, __s45local2 = Array.from(this._castles.values()); __s45local1 < __s45local2.length; __s45local1++) {
          var __s45local3 = __s45local2[__s45local1];
          if (__s45local3 !== undefined && __s45local3 != null) {
            for (var __s45local4 = 0, __s45local5 = __s45local3; __s45local4 < __s45local5.length; __s45local4++) {
              var __s45local6 = __s45local5[__s45local4];
              if (__s45local6 !== undefined) {
                __s45local0.push(__s45local6);
              }
            }
          }
        }
      }
      return __s45local0;
    }
    return this._castles.get(__s45param0);
  };
  CastleListVO.prototype.getMapVOByAreaType = function (__s55param0, __s55param1 = -1) {
    var __s55local0 = this.getFilteredList(__s55param1);
    if (__s55local0 != null) {
      for (var __s55local1 = 0, __s55local2 = __s55local0; __s55local1 < __s55local2.length; __s55local1++) {
        var __s55local3 = __s55local2[__s55local1];
        if (__s55local3 !== undefined && __s55local3.areaType == __s55param0) {
          return __s55local3;
        }
      }
    }
    return null;
  };
  CastleListVO.prototype.filter = function (__s61param0) {
    return this.getFilteredList().filter(__s61param0);
  };
  CastleListVO.prototype.getMainCastlesInKingdoms = function (__s63param0 = null) {
    var __s63local0 = false;
    var __s63local1 = this.getFilteredList();
    var __s63local2 = [];
    if (__s63local1 != null) {
      for (var __s63local3 = 0, __s63local4 = __s63local1; __s63local3 < __s63local4.length; __s63local3++) {
        var __s63local5 = __s63local4[__s63local3];
        if (__s63local5 !== undefined && (__s63local5.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE || __s63local5.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGDOM_CASTLE)) {
          if (__s63param0 && __s63param0.length > 0) {
            __s63local0 = false;
            for (var __s63local6 = 0; __s63local6 < __s63param0.length; ++__s63local6) {
              if (__s63local5.kingdomID == __s63param0[__s63local6]) {
                __s63local0 = true;
                break;
              }
            }
          }
          if (!__s63local0) {
            __s63local2.push(__s63local5);
          }
        }
      }
    }
    return __s63local2;
  };
  CastleListVO.prototype.getHomeCastle = function () {
    return this.getMapVOByAreaType(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE, __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
  };
  CastleListVO.prototype.getCapital = function () {
    return this.getMapVOByAreaType(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL);
  };
  CastleListVO.prototype.getMetropol = function () {
    return this.getMapVOByAreaType(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL, __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
  };
  CastleListVO.prototype.getMainFactionCastle = function () {
    var __s80local0 = this.getFilteredList(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID);
    if (__s80local0 != null) {
      for (var __s80local1 = 0, __s80local2 = __s80local0; __s80local1 < __s80local2.length; __s80local1++) {
        var __s80local3 = __s80local2[__s80local1];
        if (__s80local3 !== undefined && this.factionEventVO && __s80local3.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAMP && __s80local3.objectId == this.factionEventVO.mainCampID) {
          return __s80local3;
        }
      }
    }
    return null;
  };
  CastleListVO.prototype.getKingdomIdByCastleId = function (__s86param0) {
    var __s86local0 = this.getFilteredList();
    if (__s86local0 != null) {
      for (var __s86local1 = 0, __s86local2 = __s86local0; __s86local1 < __s86local2.length; __s86local1++) {
        var __s86local3 = __s86local2[__s86local1];
        if (__s86local3 !== undefined && __s86local3.objectId == __s86param0) {
          return __s86local3.kingdomID;
        }
      }
    }
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
  };
  Object.defineProperty(CastleListVO.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.getCastleVOByID = function (__s94param0, __s94param1 = -1) {
    var __s94local0 = this.getFilteredList(__s94param1);
    if (__s94local0 != null) {
      for (var __s94local1 = 0, __s94local2 = __s94local0; __s94local1 < __s94local2.length; __s94local1++) {
        var __s94local3 = __s94local2[__s94local1];
        if (__s94local3 !== undefined && __s94local3.objectId == __s94param0) {
          return __s94local3;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleListVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    set: function (__s102param0) {
      this._ownerID = __s102param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "list", {
    get: function () {
      var __s104local0 = this.getFilteredList();
      __s104local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByMapObject);
      __s104local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByKingdomIdAndKingstowerAtEnd);
      return __s104local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listForActionPanel", {
    get: function () {
      var __s106local0 = this.composeActionPanelList();
      __s106local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByKingdomId);
      return __s106local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listForPlayerInfo", {
    get: function () {
      var __s108local0 = [];
      __s108local0.push(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ISLE_RESOURCE);
      var __s108local1 = this.listOfCastlesWithoutAreaTypesAndEventCamps(__s108local0);
      __s108local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByMapObject);
      __s108local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByKingdomId);
      return __s108local1;
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.composeActionPanelList = function () {
    var __s110local0 = [];
    if (this._castles != null) {
      for (var __s110local1 = 0, __s110local2 = Array.from(this._castles.values()); __s110local1 < __s110local2.length; __s110local1++) {
        var __s110local3 = __s110local2[__s110local1];
        if (__s110local3 != null) {
          for (var __s110local4 = 0, __s110local5 = __s110local3; __s110local4 < __s110local5.length; __s110local4++) {
            var __s110local6 = __s110local5[__s110local4];
            if (__s110local6 !== undefined && (__s110local6.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAMP || this.factionEventVO && __s110local6.objectId == this.factionEventVO.mainCampID)) {
              __s110local0.push(__s110local6);
            }
          }
        }
      }
    }
    return __s110local0;
  };
  Object.defineProperty(CastleListVO.prototype, "playerInfoCastlerList", {
    get: function () {
      return this.composeActionPanelList().sort(this.bindFunction(this.villageSorter));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listOfAllFactionCamps", {
    get: function () {
      if (this._castles.get(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID)) {
        return this._castles.get(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID).sort(__dep_export_ClientConstSort.ClientConstSort.sortByFactionCamp);
      } else {
        return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.listOfCastlesWithoutAreaTypesAndEventCamps = function (__s125param0) {
    var __s125local0 = this.listOfCastlesWithoutEventCamps;
    var __s125local1 = [];
    var __s125local2 = false;
    if (__s125local0 != null) {
      for (var __s125local3 = 0, __s125local4 = __s125local0; __s125local3 < __s125local4.length; __s125local3++) {
        var __s125local5 = __s125local4[__s125local3];
        if (__s125local5 !== undefined) {
          __s125local2 = false;
          if (__s125param0 != null) {
            for (var __s125local6 = 0, __s125local7 = __s125param0; __s125local6 < __s125local7.length; __s125local6++) {
              var __s125local8 = __s125local7[__s125local6];
              if (__s125local8 !== undefined && __s125local5.areaType == __s125local8) {
                __s125local2 = true;
              }
            }
          }
          if (!__s125local2) {
            __s125local1.push(__s125local5);
          }
        }
      }
    }
    return __s125local1;
  };
  Object.defineProperty(CastleListVO.prototype, "listOfCastlesWithoutEventCamps", {
    get: function () {
      var __s136local0 = [];
      if (this.list != null) {
        for (var __s136local1 = 0, __s136local2 = this.list; __s136local1 < __s136local2.length; __s136local1++) {
          var __s136local3 = __s136local2[__s136local1];
          if (__s136local3 !== undefined && __s136local3.kingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
            __s136local0.push(__s136local3);
          }
        }
      }
      return __s136local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listWithoutOcupiedOutposts", {
    get: function () {
      var __s142local0 = [];
      if (this.list != null) {
        for (var __s142local1 = 0, __s142local2 = this.list; __s142local1 < __s142local2.length; __s142local1++) {
          var __s142local3 = __s142local2[__s142local1];
          if (__s142local3 !== undefined) {
            if (!__s142local3.isUnderConquerControl) {
              __s142local0.push(__s142local3);
            }
          }
        }
      }
      return __s142local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listWithoutLandmarksUnoccupied", {
    get: function () {
      var __s149local0 = [];
      if (this.list != null) {
        for (var __s149local1 = 0, __s149local2 = this.list; __s149local1 < __s149local2.length; __s149local1++) {
          var __s149local3 = __s149local2[__s149local1];
          if (__s149local3 !== undefined) {
            if (!__s149local3.isUnderConquerControl && (__s149local3.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE || __s149local3.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_OUTPOST)) {
              __s149local0.push(__s149local3);
            }
          }
        }
      }
      return __s149local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listWithoutOcupiedOrDestroyedFactionCamps", {
    get: function () {
      var __s156local0 = [];
      if (this.listOfAllFactionCamps != null) {
        for (var __s156local1 = 0, __s156local2 = this.listOfAllFactionCamps; __s156local1 < __s156local2.length; __s156local1++) {
          var __s156local3 = __s156local2[__s156local1];
          if (__s156local3 !== undefined) {
            if (!__s156local3.isUnderConquerControl && (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s156local3, "FactionInteractiveMapobjectVO") || !__s156local3.isDestroyed)) {
              __s156local0.push(__s156local3);
            }
          }
        }
      }
      return __s156local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "castleAmount", {
    get: function () {
      return this.getFilteredList().length;
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.getMainCastleByKingdomID = function (__s165param0) {
    var __s165local0 = this.getFilteredList(__s165param0);
    if (__s165local0 != null) {
      for (var __s165local1 = 0, __s165local2 = __s165local0; __s165local1 < __s165local2.length; __s165local1++) {
        var __s165local3 = __s165local2[__s165local1];
        if (__s165local3 !== undefined && __s165local3 && (__s165local3.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE || __s165local3.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGDOM_CASTLE || __s165local3.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAMP && __s165local3.objectId == this.factionEventVO.mainCampID)) {
          __s165local3.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._ownerID);
          return __s165local3;
        }
      }
    }
    return null;
  };
  CastleListVO.prototype.hasCastleInKingdom = function (__s171param0) {
    return this.getMainCastleByKingdomID(__s171param0) != null;
  };
  Object.defineProperty(CastleListVO.prototype, "sortedVillages", {
    get: function () {
      var __s173local0 = [];
      if (this._villages != null) {
        for (var __s173local1 = 0, __s173local2 = this._villages; __s173local1 < __s173local2.length; __s173local1++) {
          var __s173local3 = __s173local2[__s173local1];
          if (__s173local3 !== undefined) {
            if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s173local3, "ResourceIsleMapobjectVO")) {
              __s173local0.push(__s173local3);
            }
          }
        }
      }
      return __s173local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "hasVillages", {
    get: function () {
      return this.sortedVillages.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleListVO;
}();
exports.CastleListVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
