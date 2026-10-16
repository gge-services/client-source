Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleUserCastleListDetailed() {
    this._detailedCastleList = new Map();
  }
  CastleUserCastleListDetailed.prototype.parseData = function (__s5param0) {
    this._detailedCastleList = new Map();
    if (__s5param0.C) {
      var __s5local0;
      var __s5local1;
      for (var __s5local2 = 0, __s5local3 = __s5param0.C; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          __s5local0 = [];
          for (var __s5local5 = 0, __s5local6 = __s5local4.AI; __s5local5 < __s5local6.length; __s5local5++) {
            var __s5local7 = __s5local6[__s5local5];
            if (__s5local7 !== undefined) {
              (__s5local1 = new __dep_export_DetailedCastleVO.DetailedCastleVO()).kingdomID = __dep_exact_f855840627e6e145.int(__s5local4.KID);
              __s5local1.parseData(__s5local7);
              __s5local0.push(__s5local1);
            }
          }
          this._detailedCastleList.set(__s5local4.KID, __s5local0);
        }
      }
      this.controller.dispatchEvent(new __dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED));
    }
  };
  CastleUserCastleListDetailed.prototype.parse_rue = function (__s14param0) {
    if (__s14param0) {
      var __s14local0 = __dep_exact_f855840627e6e145.int(__s14param0.AID);
      var __s14local1 = __dep_exact_f855840627e6e145.int(__s14param0.SID);
      var __s14local2 = this.getVObyCastleID(__s14local0, __s14local1);
      if (__s14local2) {
        var __s14local3 = __dep_exact_f855840627e6e145.int(__s14param0.WID);
        var __s14local4 = __dep_exact_f855840627e6e145.int(__s14param0.NUA);
        __s14local2.unitInventory.setUnit(__s14local3, __s14local4);
      }
    }
  };
  CastleUserCastleListDetailed.prototype.getVObyCastleID = function (__s18param0, __s18param1) {
    var __s18local0 = this._detailedCastleList.get(__s18param1);
    if (__s18local0) {
      for (var __s18local1 = 0, __s18local2 = __s18local0; __s18local1 < __s18local2.length; __s18local1++) {
        var __s18local3 = __s18local2[__s18local1];
        if (__s18local3 !== undefined && __s18local3.areaID == __s18param0) {
          return __s18local3;
        }
      }
    }
    return null;
  };
  CastleUserCastleListDetailed.prototype.getMainCastleByKingdomID = function (__s24param0) {
    var __s24local0 = this._detailedCastleList.get(__s24param0);
    if (__s24local0 != null) {
      for (var __s24local1 = 0, __s24local2 = __s24local0; __s24local1 < __s24local2.length; __s24local1++) {
        var __s24local3 = __s24local2[__s24local1];
        if (__s24local3 !== undefined && __s24local3.getIsMyMainCastle(__s24param0)) {
          return __s24local3;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleUserCastleListDetailed.prototype, "detailedCastleList", {
    get: function () {
      return this._detailedCastleList;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserCastleListDetailed.prototype.updateDetailVO = function (__s32param0) {
    var __s32local0 = this.getVObyCastleID(__s32param0.castleID, __s32param0.kingdomID);
    if (__s32local0) {
      for (var __s32local1 = 0, __s32local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s32local1 < __s32local2.length; __s32local1++) {
        var __s32local3 = __s32local2[__s32local1];
        if (__s32local3 !== undefined) {
          __s32local0.setResource(__s32local3, __s32param0.resources.getAmountOrDefaultByType(__s32local3));
        }
      }
    }
  };
  CastleUserCastleListDetailed.prototype.getFilteredCastlesList = function (__s38param0) {
    var __s38local0 = [];
    if (this.detailedCastleList != null) {
      for (var __s38local1 = 0, __s38local2 = Array.from(this.detailedCastleList.keys()); __s38local1 < __s38local2.length; __s38local1++) {
        var __s38local3 = __s38local2[__s38local1];
        if (__s38local3 !== undefined) {
          var __s38local4 = this.detailedCastleList.get(__s38local3);
          if (__s38local4 != null) {
            for (var __s38local5 = 0, __s38local6 = __s38local4; __s38local5 < __s38local6.length; __s38local5++) {
              var __s38local7 = __s38local6[__s38local5];
              if (__s38local7 !== undefined && __s38param0(__s38local7)) {
                __s38local0.push(__s38local7);
              }
            }
          }
        }
      }
    }
    __s38local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortDetailedCastleVOByKingdomID);
    return __s38local0;
  };
  CastleUserCastleListDetailed.prototype.getCastlesWithBarracksList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterHasBarracks);
  };
  CastleUserCastleListDetailed.prototype.getCastlesWithWorkshopsList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterHasWorkshop);
  };
  CastleUserCastleListDetailed.prototype.getAllCastlesList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterTrue);
  };
  CastleUserCastleListDetailed.prototype.getCastlesWithHospitalsList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterHasHospital);
  };
  CastleUserCastleListDetailed.filterHasBarracks = function (__s56param0) {
    return __s56param0.hasBarracks;
  };
  CastleUserCastleListDetailed.filterHasWorkshop = function (__s58param0) {
    return __s58param0.hasSiegeWorkshop || __s58param0.hasDefenseWorkshop;
  };
  CastleUserCastleListDetailed.filterTrue = function (__s60param0) {
    return true;
  };
  CastleUserCastleListDetailed.filterHasHospital = function (__s62param0) {
    return __s62param0.hasHospital;
  };
  Object.defineProperty(CastleUserCastleListDetailed.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleUserCastleListDetailed;
}();
exports.CastleUserCastleListDetailed = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_DetailedCastleVO = require("gge-module:export_DetailedCastleVO");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
