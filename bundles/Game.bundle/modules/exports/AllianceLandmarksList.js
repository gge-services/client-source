Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceLandmarksList() {
    this._capitals = [];
    this._metropols = [];
    this._kingstowers = [];
    this._monuments = [];
    this._laboratories = [];
    this._currentActiveSortAlgorithm = 0;
  }
  Object.defineProperty(AllianceLandmarksList.prototype, "completeListCount", {
    get: function () {
      return this.completeList.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "hasCapital", {
    get: function () {
      return this._capitals.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "hasMetropol", {
    get: function () {
      return this._metropols.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "hasKingstower", {
    get: function () {
      return this._kingstowers.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLandmarksList.prototype.getKingstowerBonus = function () {
    return __dep_exact_f855840627e6e145.int(this.kingstowers.length * __dep_exact_26a421b704832cff.OutpostConst.KINGS_TOWER_BONUS);
  };
  AllianceLandmarksList.prototype.getMonumentBonus = function () {
    var __s15local0 = 0;
    if (this._monuments != null) {
      for (var __s15local1 = 0, __s15local2 = this._monuments; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3.landmarkBonus > __s15local0) {
          __s15local0 = __dep_exact_f855840627e6e145.int(__s15local3.landmarkBonus);
        }
      }
    }
    return __s15local0;
  };
  AllianceLandmarksList.prototype.getLaboratoryKingdomResourceBonus = function (__s21param0) {
    var __s21local0 = 0;
    if (this._laboratories != null) {
      for (var __s21local1 = 0, __s21local2 = this._laboratories; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined && __s21local3.kingdomID == __s21param0 && __s21local3.landmarkBonus > __s21local0) {
          __s21local0 = __dep_exact_f855840627e6e145.int(__s21local3.landmarkBonus);
        }
      }
    }
    return __s21local0;
  };
  AllianceLandmarksList.prototype.getMetropolBonus = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.metropolBoost;
  };
  Object.defineProperty(AllianceLandmarksList.prototype, "fameBoost", {
    get: function () {
      var __s29local0 = 0;
      if (this._monuments != null) {
        for (var __s29local1 = 0, __s29local2 = this._monuments; __s29local1 < __s29local2.length; __s29local1++) {
          var __s29local3 = __s29local2[__s29local1];
          if (__s29local3 !== undefined && __s29local0 < __s29local3.landmarkBonus) {
            __s29local0 = __dep_exact_f855840627e6e145.int(__s29local3.landmarkBonus);
          }
        }
      }
      return __s29local0;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLandmarksList.prototype.parseCompleteLandmarksList = function (__s35param0) {
    this.parseCapitalList(__s35param0.ACA);
    this.parseMetropolList(__s35param0.ATC);
    this.parseKingstowerList(__s35param0.AKT);
    this.parseMonumentList(__s35param0.AMO);
    this.parseLaboratoryList(__s35param0.ALA);
  };
  AllianceLandmarksList.prototype.parseSLL = function (__s37param0) {
    this.parseLaboratoryList(__s37param0.ALA);
  };
  AllianceLandmarksList.prototype.parseCapitalList = function (__s39param0) {
    this._capitals = [];
    if (__s39param0) {
      for (var __s39local0 = 0; __s39local0 < __s39param0.length; ++__s39local0) {
        var __s39local1 = new __dep_export_CapitalMapobjectVO.CapitalMapobjectVO();
        __s39local1.parseAreaInfo(__s39param0[__s39local0]);
        this._capitals.push(__s39local1);
      }
    }
  };
  AllianceLandmarksList.prototype.parseMetropolList = function (__s44param0) {
    this._metropols = [];
    if (__s44param0) {
      for (var __s44local0 = 0; __s44local0 < __s44param0.length; ++__s44local0) {
        var __s44local1 = new __dep_export_MetropolMapobjectVO.MetropolMapobjectVO();
        __s44local1.parseAreaInfo(__s44param0[__s44local0]);
        this._metropols.push(__s44local1);
      }
    }
  };
  AllianceLandmarksList.prototype.parseKingstowerList = function (__s49param0) {
    this._kingstowers = [];
    if (__s49param0) {
      for (var __s49local0 = 0; __s49local0 < __s49param0.length; ++__s49local0) {
        var __s49local1 = new __dep_export_KingstowerMapobjectVO.KingstowerMapobjectVO();
        __s49local1.parseAreaInfo(__s49param0[__s49local0]);
        this._kingstowers.push(__s49local1);
      }
    }
  };
  AllianceLandmarksList.prototype.parseMonumentList = function (__s54param0) {
    this._monuments = [];
    if (__s54param0) {
      for (var __s54local0 = 0; __s54local0 < __s54param0.length; ++__s54local0) {
        var __s54local1 = new __dep_export_MonumentMapobjectVO.MonumentMapobjectVO();
        __s54local1.parseAreaInfo(__s54param0[__s54local0]);
        this._monuments.push(__s54local1);
      }
    }
  };
  AllianceLandmarksList.prototype.parseLaboratoryList = function (__s59param0) {
    this._laboratories = [];
    if (__s59param0) {
      for (var __s59local0 = 0; __s59local0 < __s59param0.length; ++__s59local0) {
        var __s59local1 = new __dep_export_LaboratoryMapobjectVO.LaboratoryMapobjectVO();
        __s59local1.parseAreaInfo(__s59param0[__s59local0]);
        this._laboratories.push(__s59local1);
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_LaboratoryEvent.LaboratoryEvent(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED));
    }
  };
  AllianceLandmarksList.prototype.getKingdomOrderIndex = function (__s64param0) {
    for (var __s64local0 = 0; __s64local0 < AllianceLandmarksList.KINGDOMS_ORDER.length; ++__s64local0) {
      if (__s64param0.kingdomID == AllianceLandmarksList.KINGDOMS_ORDER[__s64local0]) {
        return __s64local0;
      }
    }
    return -1;
  };
  AllianceLandmarksList.prototype.getLandmarksOrderIndex = function (__s69param0) {
    for (var __s69local0 = 0; __s69local0 < AllianceLandmarksList.LANDMARKS_ORDER.length; ++__s69local0) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s69param0, "LANDMARKS_ORDER[i]")) {
        return __s69local0;
      }
    }
    return -1;
  };
  AllianceLandmarksList.prototype.getLowLevelCompareFunction = function (__s74param0) {
    switch (__s74param0) {
      case AllianceLandmarksList.SORT_BY_USER:
        return this.bindFunction(this.lowLevelSortByUser);
      case AllianceLandmarksList.SORT_BY_LEVEL:
        return this.bindFunction(this.lowLevelSortByLevel);
      case AllianceLandmarksList.SORT_BY_KINGDOM:
        return this.bindFunction(this.lowLevelSortByKingdom);
      default:
      case AllianceLandmarksList.SORT_BY_LANDMARK:
        return this.bindFunction(this.lowLevelSortByLandmark);
    }
  };
  AllianceLandmarksList.prototype.getSortProcessesBySortType = function (__s77param0) {
    switch (__s77param0) {
      case AllianceLandmarksList.SORT_BY_USER:
        return AllianceLandmarksList.SORT_BY_USER_PROCESSES;
      case AllianceLandmarksList.SORT_BY_LEVEL:
        return AllianceLandmarksList.SORT_BY_LEVEL_PROCESSES;
      case AllianceLandmarksList.SORT_BY_KINGDOM:
        return AllianceLandmarksList.SORT_BY_KINGDOM_PROCESSES;
      default:
      case AllianceLandmarksList.SORT_BY_LANDMARK:
        return AllianceLandmarksList.SORT_BY_LANDMARK_PROCESSES;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByLandmark = function (__s80param0, __s80param1) {
    var __s80local0 = __dep_exact_f855840627e6e145.int(this.getLandmarksOrderIndex(__s80param0));
    var __s80local1 = __dep_exact_f855840627e6e145.int(this.getLandmarksOrderIndex(__s80param1));
    if (__s80local0 > __s80local1) {
      return 1;
    } else if (__s80local0 < __s80local1) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByUser = function (__s85param0, __s85param1) {
    if (__s85param0.ownerInfo.playerName > __s85param1.ownerInfo.playerName) {
      return 1;
    } else if (__s85param0.ownerInfo.playerName < __s85param1.ownerInfo.playerName) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByLevel = function (__s90param0, __s90param1) {
    if (__s90param0.ownerInfo.playerLevel < __s90param1.ownerInfo.playerLevel) {
      return 1;
    } else if (__s90param0.ownerInfo.playerLevel > __s90param1.ownerInfo.playerLevel) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByKingdom = function (__s95param0, __s95param1) {
    if (this.getKingdomOrderIndex(__s95param0) > this.getKingdomOrderIndex(__s95param1)) {
      return 1;
    } else if (this.getKingdomOrderIndex(__s95param0) < this.getKingdomOrderIndex(__s95param1)) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.highLevelSort = function (__s100param0, __s100param1) {
    for (var __s100local0 = this.getSortProcessesBySortType(this._currentActiveSortAlgorithm), __s100local1 = 0; __s100local1 < __s100local0.length; ++__s100local1) {
      var __s100local2 = __dep_exact_f855840627e6e145.int(this.getLowLevelCompareFunction(__s100local0[__s100local1])(__s100param0, __s100param1));
      if (__s100local2 != 0) {
        return __s100local2;
      }
    }
    return 0;
  };
  AllianceLandmarksList.prototype.getCompleteListBySortType = function (__s105param0, __s105param1 = false) {
    this._currentActiveSortAlgorithm = __s105param0;
    var __s105local0 = this.completeList.sort(this.bindFunction(this.highLevelSort));
    if (__s105param1) {
      __s105local0.reverse();
    }
    return __s105local0;
  };
  Object.defineProperty(AllianceLandmarksList.prototype, "completeList", {
    get: function () {
      var __s108local0 = [];
      return __s108local0 = (__s108local0 = (__s108local0 = (__s108local0 = (__s108local0 = __s108local0.concat(this.capitals)).concat(this.metropols)).concat(this.kingstowers)).concat(this.monuments)).concat(this.laboratories);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "capitals", {
    get: function () {
      return this._capitals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "metropols", {
    get: function () {
      return this._metropols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "kingstowers", {
    get: function () {
      return this._kingstowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "monuments", {
    get: function () {
      return this._monuments;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "laboratories", {
    get: function () {
      return this._laboratories;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLandmarksList.__initialize_static_members = function () {
    AllianceLandmarksList.SORT_BY_LANDMARK_PROCESSES = [AllianceLandmarksList.SORT_BY_LANDMARK, AllianceLandmarksList.SORT_BY_LEVEL, AllianceLandmarksList.SORT_BY_USER, AllianceLandmarksList.SORT_BY_KINGDOM];
    AllianceLandmarksList.SORT_BY_USER_PROCESSES = [AllianceLandmarksList.SORT_BY_USER, AllianceLandmarksList.SORT_BY_KINGDOM];
    AllianceLandmarksList.SORT_BY_LEVEL_PROCESSES = [AllianceLandmarksList.SORT_BY_LEVEL, AllianceLandmarksList.SORT_BY_USER, AllianceLandmarksList.SORT_BY_KINGDOM];
    AllianceLandmarksList.SORT_BY_KINGDOM_PROCESSES = [AllianceLandmarksList.SORT_BY_KINGDOM, AllianceLandmarksList.SORT_BY_LANDMARK, AllianceLandmarksList.SORT_BY_LEVEL, AllianceLandmarksList.SORT_BY_USER];
    AllianceLandmarksList.LANDMARKS_ORDER = [__dep_export_CapitalMapobjectVO.CapitalMapobjectVO, __dep_export_MetropolMapobjectVO.MetropolMapobjectVO, __dep_export_KingstowerMapobjectVO.KingstowerMapobjectVO, __dep_export_MonumentMapobjectVO.MonumentMapobjectVO, __dep_export_LaboratoryMapobjectVO.LaboratoryMapobjectVO];
    AllianceLandmarksList.KINGDOMS_ORDER = [__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, __dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID, __dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID, __dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID];
  };
  AllianceLandmarksList.SORT_BY_LANDMARK = 0;
  AllianceLandmarksList.SORT_BY_USER = 1;
  AllianceLandmarksList.SORT_BY_LEVEL = 2;
  AllianceLandmarksList.SORT_BY_KINGDOM = 3;
  return AllianceLandmarksList;
}();
exports.AllianceLandmarksList = __s0local0;
var __dep_export_CapitalMapobjectVO = require("gge-module:export_CapitalMapobjectVO");
var __dep_export_KingstowerMapobjectVO = require("gge-module:export_KingstowerMapobjectVO");
var __dep_export_LaboratoryMapobjectVO = require("gge-module:export_LaboratoryMapobjectVO");
var __dep_export_MetropolMapobjectVO = require("gge-module:export_MetropolMapobjectVO");
var __dep_export_MonumentMapobjectVO = require("gge-module:export_MonumentMapobjectVO");
var __dep_export_LaboratoryEvent = require("gge-module:export_LaboratoryEvent");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__s0local0.__initialize_static_members();
