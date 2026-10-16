Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleUnitsVO() {
    this._unlockedSoldiers = [];
    this._lockedSoldiers = [];
    this._unlockedTools = [];
    this._lockedTools = [];
    this._eventTools = [];
    this._eventPackages = [];
    this._bufferedFighscreenTools = [];
  }
  CastleUnitsVO.prototype.parseParamObject = function (__s5param0) {
    this._unlockedSoldiers = [];
    this._unlockedAuxiliaries = [];
    this._unlockedTools = [];
    this._lockedSoldiers = [];
    this._lockedAuxiliaries = [];
    this._lockedTools = [];
    if (__s5param0) {
      var __s5local0;
      var __s5local1;
      for (var __s5local2 = 0, __s5local3 = __s5param0.U; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          __s5local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(__s5local4), "BasicUnitVO");
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "SoldierUnitVO")) {
            if (__s5local0.isAuxiliary) {
              this._unlockedAuxiliaries.push(__s5local0);
            } else {
              this._unlockedSoldiers.push(__s5local0);
            }
          } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "ToolUnitVO")) {
            this._unlockedTools.push(__s5local0);
          }
        }
      }
      for (var __s5local5 = 0, __s5local6 = __s5param0.L; __s5local5 < __s5local6.length; __s5local5++) {
        var __s5local7 = __s5local6[__s5local5];
        if (__s5local7 !== undefined) {
          __s5local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(__s5local7), "BasicUnitVO");
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local1, "SoldierUnitVO")) {
            if (__s5local1.isAuxiliary) {
              this._lockedAuxiliaries.push(__s5local1);
            } else {
              this._lockedSoldiers.push(__s5local1);
            }
          }
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local1, "ToolUnitVO")) {
            this._lockedTools.push(__s5local1);
          }
        }
      }
      this._unlockedSoldiers.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderRecruit);
      this._unlockedAuxiliaries.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderRecruit);
      this._lockedSoldiers.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderRecruit);
      this._lockedAuxiliaries.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderRecruit);
      this._unlockedTools.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderRecruit);
      this._lockedTools.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderRecruit);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED));
      this.updateEventTools();
    }
  };
  CastleUnitsVO.prototype.updateEventTools = function () {
    this._eventTools = [];
    this._eventPackages = [];
    for (var __s22local0 = [__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ARMORER, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_BERIMOND, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADHUNTER, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_SAMURAI, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_ISLAND], __s22local1 = 0; __s22local1 < __s22local0.length; ++__s22local1) {
      this.addRunningPackageEventToEventToolsList(__s22local0[__s22local1]);
    }
    this.invalidateFighscreenToolsList();
  };
  CastleUnitsVO.prototype.addRunningPackageEventToEventToolsList = function (__s26param0) {
    var __s26local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s26param0), "BuyPackagesEventVO");
    if (__s26local0) {
      var __s26local1 = __s26local0.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, 0);
      if (__s26local1 != null) {
        for (var __s26local2 = 0, __s26local3 = __s26local1; __s26local2 < __s26local3.length; __s26local2++) {
          var __s26local4 = __s26local3[__s26local2];
          if (__s26local4 !== undefined) {
            for (var __s26local5 = 0, __s26local6 = __s26local4.rewards.list; __s26local5 < __s26local6.length; __s26local5++) {
              var __s26local7 = __s26local6[__s26local5];
              if (__s26local7 !== undefined) {
                var __s26local8 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s26local7, "CollectableItemUnitVO") ? __s26local7.unitVO : null;
                if (__s26local8) {
                  this._eventTools.push(__s26local8);
                  this._eventPackages.push(__s26local4);
                }
              }
            }
          }
        }
      }
    }
  };
  CastleUnitsVO.prototype.invalidateFighscreenToolsList = function () {
    this._bufferedFighscreenTools = null;
  };
  CastleUnitsVO.prototype.createFightscreenToolsList = function () {
    var __s39local0 = [].concat(this._unlockedTools);
    var __s39local1 = false;
    var __s39local2 = 0;
    for (var __s39local3 = 0; __s39local3 < this._eventTools.length; ++__s39local3) {
      __s39local2 = __dep_exact_f855840627e6e145.int(this._eventTools[__s39local3].wodId);
      __s39local1 = false;
      for (var __s39local4 = 0; __s39local4 < __s39local0.length; ++__s39local4) {
        if (__s39local2 == __s39local0[__s39local4].wodId) {
          __s39local1 = true;
          break;
        }
      }
      if (!__s39local1) {
        __s39local0.push(this._eventTools[__s39local3]);
      }
    }
    return __s39local0;
  };
  CastleUnitsVO.prototype.isLocked = function (__s47param0) {
    return this._lockedSoldiers.indexOf(__s47param0) > -1 || this._lockedTools.indexOf(__s47param0) > -1;
  };
  CastleUnitsVO.prototype.isLockedByWodId = function (__s49param0) {
    for (var __s49local0 = 0, __s49local1 = this._lockedSoldiers; __s49local0 < __s49local1.length; __s49local0++) {
      var __s49local2 = __s49local1[__s49local0];
      if (__s49local2 !== undefined && __s49local2.wodId == __s49param0) {
        return true;
      }
    }
    for (var __s49local3 = 0, __s49local4 = this._lockedTools; __s49local3 < __s49local4.length; __s49local3++) {
      var __s49local5 = __s49local4[__s49local3];
      if (__s49local5 !== undefined && __s49local5.wodId == __s49param0) {
        return true;
      }
    }
    return false;
  };
  CastleUnitsVO.prototype.isUnlocked = function (__s57param0) {
    return this._unlockedSoldiers.indexOf(__s57param0) > -1 || this._unlockedTools.indexOf(__s57param0) > -1;
  };
  CastleUnitsVO.prototype.getUnlockedSoldiersByUnitType = function (__s59param0, __s59param1 = true, __s59param2 = false, __s59param3 = false) {
    return this.getFilteredListByUnitType(this._unlockedSoldiers, __s59param0, __s59param1, __s59param2, __s59param3);
  };
  CastleUnitsVO.prototype.getLockedSoldiersByUnitType = function (__s61param0, __s61param1 = true, __s61param2 = false, __s61param3 = false) {
    return this.getFilteredListByUnitType(this._lockedSoldiers, __s61param0, __s61param1, __s61param2, __s61param3);
  };
  CastleUnitsVO.prototype.getUnlockedToolsByUnitType = function (__s63param0) {
    return this.getFilteredListByUnitType(this._unlockedTools, __s63param0, true, false);
  };
  CastleUnitsVO.prototype.getLockedToolsByUnitType = function (__s65param0) {
    return this.getFilteredListByUnitType(this._lockedTools, __s65param0, true, false);
  };
  CastleUnitsVO.prototype.getWorkshopToolsByUnitType = function (__s67param0) {
    var __s67local0 = this.unlockedTools.concat(this.lockedTools);
    var __s67local1 = [];
    if (__s67local0 != null) {
      for (var __s67local2 = 0, __s67local3 = __s67local0; __s67local2 < __s67local3.length; __s67local2++) {
        var __s67local4 = __s67local3[__s67local2];
        if (__s67local4 !== undefined) {
          if (__s67local4.unitType == __s67param0 && (__s67local4.unitBuildingType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP || __s67local4.unitBuildingType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP)) {
            __s67local1.push(__s67local4);
          }
        }
      }
    }
    return __s67local1;
  };
  CastleUnitsVO.prototype.getFightscreenToolsByUnitType = function (__s74param0) {
    return this.getFilteredListByUnitType(this.getFightscreenTools(), __s74param0, true, false);
  };
  CastleUnitsVO.prototype.getFilteredListByUnitType = function (__s76param0, __s76param1, __s76param2 = true, __s76param3 = false, __s76param4 = false) {
    var __s76local0 = [];
    if (__s76param0 != null) {
      for (var __s76local1 = 0, __s76local2 = __s76param0; __s76local1 < __s76local2.length; __s76local1++) {
        var __s76local3 = __s76local2[__s76local1];
        if (__s76local3 !== undefined && __s76local3.unitType == __s76param1) {
          if (__s76local3) {
            if (__s76param2 || __s76param3 && __s76local3.meadSupply > 0 || !__s76param3 && __s76local3.foodSupply) {
              __s76local0.push(__s76local3);
            } else if (__s76param2 || __s76param4 && __s76local3.beefSupply > 0 || !__s76param4 && __s76local3.foodSupply) {
              __s76local0.push(__s76local3);
            }
          } else {
            __s76local0.push(__s76local3);
          }
        }
      }
    }
    return __s76local0;
  };
  Object.defineProperty(CastleUnitsVO.prototype, "eventTools", {
    get: function () {
      return this._eventTools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "unlockedSoldiers", {
    get: function () {
      return this._unlockedSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "unlockedAuxiliaries", {
    get: function () {
      return this._unlockedAuxiliaries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "lockedSoldiers", {
    get: function () {
      return this._lockedSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "lockedAuxiliaries", {
    get: function () {
      return this._lockedSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "unlockedTools", {
    get: function () {
      return this._unlockedTools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "lockedTools", {
    get: function () {
      return this._lockedTools;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitsVO.prototype.getFightscreenTools = function () {
    if (__dep_export_CastleModel.CastleModel.userData.level == 6) {
      this.updateEventTools();
    }
    if (!this._bufferedFighscreenTools || __dep_export_CastleModel.CastleModel.userData.level == 6) {
      this._bufferedFighscreenTools = this.createFightscreenToolsList();
    }
    return this._bufferedFighscreenTools;
  };
  CastleUnitsVO.prototype.getAssociatedEventPackage = function (__s104param0) {
    if (this._eventPackages != null) {
      for (var __s104local0 = 0, __s104local1 = this._eventPackages; __s104local0 < __s104local1.length; __s104local0++) {
        var __s104local2 = __s104local1[__s104local0];
        if (__s104local2 !== undefined) {
          for (var __s104local3 = 0, __s104local4 = __s104local2.rewards.list; __s104local3 < __s104local4.length; __s104local3++) {
            var __s104local5 = __s104local4[__s104local3];
            if (__s104local5 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s104local5, "CollectableItemUnitVO") && __s104local5.unitVO && __s104param0 == __s104local5.unitVO.wodId) {
              return __s104local2;
            }
          }
        }
      }
    }
    return null;
  };
  CastleUnitsVO.prototype.onSpecialEventUpdated = function () {
    this.updateEventTools();
  };
  return CastleUnitsVO;
}();
exports.CastleUnitsVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
