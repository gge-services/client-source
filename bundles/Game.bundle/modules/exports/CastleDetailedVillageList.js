Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __s0local0 = function () {
  function CastleDetailedVillageList() {
    this._villageList = [];
    this._privateVillageList = [];
  }
  CastleDetailedVillageList.prototype.parseKGV = function (__s5param0) {
    if (__s5param0) {
      this._villageList = [];
      this._privateVillageList = [];
      for (var __s5local0 = 0, __s5local1 = __s5param0.VI; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_CastleKingdomVillageInfoVO.CastleKingdomVillageInfoVO();
          __s5local3.parseParamObject(__s5local2);
          __s5local3.villageMapObjectVO.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
          this._villageList.push(__s5local3);
        }
      }
      if (__s5param0.PV) {
        for (var __s5local4 = 0, __s5local5 = __s5param0[__dep_exact_26a421b704832cff.CommKeys.PRIVATE_RESOURCE_VILLAGES]; __s5local4 < __s5local5.length; __s5local4++) {
          var __s5local6 = __s5local5[__s5local4];
          if (__s5local6 !== undefined) {
            var __s5local7 = __dep_export_CastleModel.CastleModel.privateResourceVillageData.getVillageByID(__s5local6[__dep_exact_26a421b704832cff.CommKeys.XML_VILLAGE_ID]);
            if (__s5local7) {
              var __s5local8 = new __dep_export_PrivateResourceVillageVO.PrivateResourceVillageVO(__s5local6[__dep_exact_26a421b704832cff.CommKeys.VILLAGE_ID], __s5local7);
              this._privateVillageList.push(__s5local8);
            }
          }
        }
      }
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_VILLAGELIST));
    }
  };
  CastleDetailedVillageList.prototype.getSortedVillageListByKingdomID = function (__s16param0) {
    if (__s16param0 == -1) {
      return this.completeList;
    }
    var __s16local0 = [];
    if (this._villageList != null) {
      for (var __s16local1 = 0, __s16local2 = this._villageList; __s16local1 < __s16local2.length; __s16local1++) {
        var __s16local3 = __s16local2[__s16local1];
        if (__s16local3 !== undefined && __s16local3.villageMapObjectVO.kingdomID == __s16param0) {
          __s16local0.push(__s16local3);
        }
      }
    }
    __s16local0.sort(this.bindFunction(this.sortByAreaID));
    return __s16local0;
  };
  CastleDetailedVillageList.prototype.sortByAreaID = function (__s23param0, __s23param1) {
    if (__s23param0.villageMapObjectVO.objectId > __s23param1.villageMapObjectVO.objectId) {
      return 1;
    } else if (__s23param0.villageMapObjectVO.objectId < __s23param1.villageMapObjectVO.objectId) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleDetailedVillageList.prototype.getAmountInKingdomID = function (__s28param0) {
    var __s28local0 = 0;
    if (this._villageList != null) {
      for (var __s28local1 = 0, __s28local2 = this._villageList; __s28local1 < __s28local2.length; __s28local1++) {
        var __s28local3 = __s28local2[__s28local1];
        if (__s28local3 !== undefined && __s28local3.villageMapObjectVO.kingdomID == __s28param0) {
          __s28local0++;
        }
      }
    }
    return __s28local0;
  };
  Object.defineProperty(CastleDetailedVillageList.prototype, "completeList", {
    get: function () {
      return this._villageList;
    },
    enumerable: true,
    configurable: true
  });
  CastleDetailedVillageList.prototype.getBonusStringByKingdomID = function (__s36param0, __s36param1) {
    var __s36local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s36param0).villagesInfo;
    if (!__s36local0) {
      return "0 %";
    }
    var __s36local1 = __dep_exact_f855840627e6e145.int(this.getPublicVillageCountByRessourceType(__s36param0, __s36param1) * __s36local0["productivity" + __s36param1 + "Boost"]);
    var __s36local2 = __dep_exact_f855840627e6e145.int(this.getPrivateVillagesStrength(__s36param0, __s36param1));
    return __dep_exact_92d05af59ee2ff30.Localize.text("value_percentage", [__s36local1 + __s36local2]);
  };
  CastleDetailedVillageList.prototype.getPrivateVillagesStrength = function (__s39param0, __s39param1) {
    var __s39local0 = 0;
    if (this._privateVillageList != null) {
      for (var __s39local1 = 0, __s39local2 = this._privateVillageList; __s39local1 < __s39local2.length; __s39local1++) {
        var __s39local3 = __s39local2[__s39local1];
        if (__s39local3 !== undefined && __s39local3.villageInfo.kingdomID == __s39param0 && __s39local3.villageInfo.typeString == __s39param1) {
          __s39local0 += __dep_exact_f855840627e6e145.int(__s39local3.villageInfo.bonus.strength);
        }
      }
    }
    return __s39local0;
  };
  CastleDetailedVillageList.prototype.getPublicVillageCountByRessourceType = function (__s45param0, __s45param1) {
    if (!__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s45param0).villagesInfo) {
      return 0;
    }
    var __s45local0 = 0;
    if (this._villageList != null) {
      for (var __s45local1 = 0, __s45local2 = this._villageList; __s45local1 < __s45local2.length; __s45local1++) {
        var __s45local3 = __s45local2[__s45local1];
        if (__s45local3 !== undefined && __s45local3.villageMapObjectVO.kingdomID == __s45param0 && __s45local3.villageMapObjectVO.typeName == __s45param1) {
          __s45local0++;
        }
      }
    }
    return __s45local0;
  };
  CastleDetailedVillageList.prototype.getCountByRessourceType = function (__s52param0, __s52param1) {
    if (!__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s52param0).villagesInfo) {
      return 0;
    }
    var __s52local0 = 0;
    if (this._villageList != null) {
      for (var __s52local1 = 0, __s52local2 = this._villageList; __s52local1 < __s52local2.length; __s52local1++) {
        var __s52local3 = __s52local2[__s52local1];
        if (__s52local3 !== undefined && __s52local3.villageMapObjectVO.kingdomID == __s52param0 && __s52local3.villageMapObjectVO.typeName == __s52param1) {
          __s52local0++;
        }
      }
    }
    if (this._privateVillageList != null) {
      for (var __s52local4 = 0, __s52local5 = this._privateVillageList; __s52local4 < __s52local5.length; __s52local4++) {
        var __s52local6 = __s52local5[__s52local4];
        if (__s52local6 !== undefined && __s52local6.villageInfo.kingdomID == __s52param0 && __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(__s52local6.villageInfo.type) == __s52param1) {
          __s52local0++;
        }
      }
    }
    return __s52local0;
  };
  CastleDetailedVillageList.prototype.getCountByResourceTypeIncludingCurrentConquerMovements = function (__s63param0, __s63param1) {
    var __s63local0 = __dep_exact_f855840627e6e145.int(this.getCountByRessourceType(__s63param0, __s63param1));
    var __s63local1 = __dep_export_CastleModel.CastleModel.armyData.getAllMyMovementsByTargetType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_VILLAGE, __s63param0);
    if (__s63local1 != null) {
      for (var __s63local2 = 0, __s63local3 = __s63local1; __s63local2 < __s63local3.length; __s63local2++) {
        var __s63local4 = __s63local3[__s63local2];
        if (__s63local4 !== undefined && __s63local4.targetArea.typeName == __s63param1 && __dep_exact_81dacdf05bd32292.instanceOfClass(__s63local4, "ArmyAttackMapmovementVO")) {
          __s63local0++;
        }
      }
    }
    return __s63local0;
  };
  CastleDetailedVillageList.prototype.getCountByKingdomID = function (__s69param0) {
    if (!__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s69param0).villagesInfo) {
      return 0;
    }
    var __s69local0 = 0;
    if (this._villageList != null) {
      for (var __s69local1 = 0, __s69local2 = this._villageList; __s69local1 < __s69local2.length; __s69local1++) {
        var __s69local3 = __s69local2[__s69local1];
        if (__s69local3 !== undefined && __s69local3.villageMapObjectVO.kingdomID == __s69param0) {
          __s69local0++;
        }
      }
    }
    return __s69local0;
  };
  CastleDetailedVillageList.prototype.getVillageByID = function (__s76param0, __s76param1) {
    if (this._villageList != null) {
      for (var __s76local0 = 0, __s76local1 = this._villageList; __s76local0 < __s76local1.length; __s76local0++) {
        var __s76local2 = __s76local1[__s76local0];
        if (__s76local2 !== undefined && __s76local2.villageMapObjectVO.objectId === __s76param0 && __s76local2.villageMapObjectVO.kingdomID == __s76param1) {
          return __s76local2.villageMapObjectVO;
        }
      }
    }
    return null;
  };
  CastleDetailedVillageList.prototype.getPrivateVillageList = function (__s82param0, __s82param1) {
    var __s82local0 = [];
    if (this._privateVillageList != null) {
      for (var __s82local1 = 0, __s82local2 = this._privateVillageList; __s82local1 < __s82local2.length; __s82local1++) {
        var __s82local3 = __s82local2[__s82local1];
        if (__s82local3 !== undefined && __s82local3.villageInfo.kingdomID == __s82param0 && __s82local3.villageInfo.type == __s82param1) {
          __s82local0.push(__s82local3);
        }
      }
    }
    __s82local0.sort(this.bindFunction(this.sortByLevel));
    return __s82local0;
  };
  CastleDetailedVillageList.prototype.sortByLevel = function (__s88param0, __s88param1) {
    return __dep_exact_f855840627e6e145.int(__s88param1.villageInfo.villageLevel - __s88param0.villageInfo.villageLevel);
  };
  Object.defineProperty(CastleDetailedVillageList.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleDetailedVillageList;
}();
exports.CastleDetailedVillageList = __s0local0;
var __dep_export_CastleKingdomVillageInfoVO = require("gge-module:export_CastleKingdomVillageInfoVO");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateResourceVillageVO = require("gge-module:export_PrivateResourceVillageVO");
