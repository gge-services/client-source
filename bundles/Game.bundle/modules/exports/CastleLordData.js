Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGeneralAssignLord = require("gge-module:export_C2SGeneralAssignLord");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleLordData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._barons = [];
    __s3local0._commanders = [];
    __s3local0._defaultLords = new Map();
    __s3local0._defaultLordsWithoutEquipment = new Map();
    var __s3local1 = __s3param0.lords;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = __dep_exact_f855840627e6e145.int(__s3local4.lordID || "");
          var __s3local6 = new __dep_export_DefaultLordVO.DefaultLordVO();
          __s3local6.parseFromXml(__s3local4);
          __s3local0._defaultLords.set(__s3local5, __s3local6);
          var __s3local7 = new __dep_export_DefaultLordVO.DefaultLordVO();
          __s3local7.parseFromXml(__s3local4, false);
          __s3local0._defaultLordsWithoutEquipment.set(__s3local5, __s3local7);
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLordData, __s1param0);
  CastleLordData.prototype.parse_GLI = function (__s9param0) {
    if (__s9param0) {
      this._barons = [];
      this._commanders = [];
      for (var __s9local0 = 0, __s9local1 = __s9param0.B; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          var __s9local3 = new __dep_export_BaronVO.BaronVO();
          __s9local3.parseLord(__s9local2);
          if (this.isLordLocked(__s9local3.id)) {
            __s9local3.lock();
          }
          this._barons.push(__s9local3);
        }
      }
      for (var __s9local4 = 0, __s9local5 = __s9param0[__dep_exact_26a421b704832cff.CommKeys.COMMANDERS]; __s9local4 < __s9local5.length; __s9local4++) {
        var __s9local6 = __s9local5[__s9local4];
        if (__s9local6 !== undefined) {
          var __s9local7 = new __dep_export_CommanderVO.CommanderVO();
          __s9local7.parseLord(__s9local6);
          if (this.isLordLocked(__s9local7.id)) {
            __s9local7.lock();
          }
          this._commanders.push(__s9local7);
        }
      }
      this._barons.sort(this.bindFunction(this.onSortBaron));
      this._commanders.sort(this.bindFunction(this.onSortLord));
      for (var __s9local8 = 0; __s9local8 < this._commanders.length; __s9local8++) {
        this._commanders[__s9local8].playerIndex = __s9local8 + 1;
      }
      __dep_export_CastleModel.CastleModel.generalsData.updateAssignedLords();
      this.dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED));
    }
  };
  CastleLordData.prototype.onSortLord = function (__s22param0, __s22param1) {
    if (__s22param0.id > __s22param1.id) {
      return 1;
    } else if (__s22param1.id > __s22param0.id) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleLordData.prototype.onSortBaron = function (__s27param0, __s27param1) {
    if (__s27param0.baronOrderPosition > __s27param1.baronOrderPosition) {
      return 1;
    } else if (__s27param1.baronOrderPosition > __s27param0.baronOrderPosition) {
      return -1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleLordData.prototype, "numAvailableCommanders", {
    get: function () {
      var __s32local0 = 0;
      if (this._commanders != null) {
        for (var __s32local1 = 0, __s32local2 = this._commanders; __s32local1 < __s32local2.length; __s32local1++) {
          var __s32local3 = __s32local2[__s32local1];
          if (__s32local3 !== undefined && __s32local3.isAvailableForMovement) {
            __s32local0++;
          }
        }
      }
      return __s32local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "numAllCommanders", {
    get: function () {
      return this._commanders.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "numAvailableBarons", {
    get: function () {
      var __s40local0 = 0;
      if (this._barons != null) {
        for (var __s40local1 = 0, __s40local2 = this._barons; __s40local1 < __s40local2.length; __s40local1++) {
          var __s40local3 = __s40local2[__s40local1];
          if (__s40local3 !== undefined && __s40local3.isAvailableForMovement) {
            __s40local0++;
          }
        }
      }
      return __s40local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "numAllBarons", {
    get: function () {
      return this._barons.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "commanders", {
    get: function () {
      return this._commanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "barons", {
    get: function () {
      return this._barons;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordData.prototype.dummyCapitalBarons = function (__s52param0) {
    var __s52local0 = [];
    __s52local0.push(this.getDummyCapitalBaron(__s52param0));
    return __s52local0;
  };
  CastleLordData.prototype.getDummyCapitalBaron = function (__s54param0) {
    var __s54local0 = new __dep_export_BaronVO.BaronVO();
    __s54local0.isDummyBaron = true;
    __s54local0.picID = __dep_exact_26a421b704832cff.EquipmentConst.getBaronCapitalPick(__s54param0);
    return __s54local0;
  };
  Object.defineProperty(CastleLordData.prototype, "dummyMetropolBarons", {
    get: function () {
      var __s56local0 = [];
      __s56local0.push(this.getDummyMetropolBaron());
      return __s56local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordData.prototype.getDummyMetropolBaron = function () {
    var __s58local0 = new __dep_export_BaronVO.BaronVO();
    __s58local0.isDummyBaron = true;
    __s58local0.picID = __dep_exact_26a421b704832cff.EquipmentConst.PICK_BARON_METROPOL;
    return __s58local0;
  };
  Object.defineProperty(CastleLordData.prototype, "factionBarons", {
    get: function () {
      var __s60local0 = [];
      if (this._barons != null) {
        for (var __s60local1 = 0, __s60local2 = this._barons; __s60local1 < __s60local2.length; __s60local1++) {
          var __s60local3 = __s60local2[__s60local1];
          if (__s60local3 !== undefined && __s60local3.picID == __dep_exact_26a421b704832cff.EquipmentConst.PICK_BARON_FACTION) {
            __s60local0.push(__s60local3);
          }
        }
      }
      return __s60local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordData.prototype.getDefaultLordsByType = function (__s66param0) {
    var __s66local0 = [];
    if (this._defaultLords != null) {
      for (var __s66local1 = 0, __s66local2 = Array.from(this._defaultLords.values()); __s66local1 < __s66local2.length; __s66local1++) {
        var __s66local3 = __s66local2[__s66local1];
        if (__s66local3 !== undefined && __s66local3.type == __s66param0) {
          __s66local0.push(__s66local3);
        }
      }
    }
    return __s66local0;
  };
  CastleLordData.prototype.getDefaultLordByID = function (__s72param0) {
    return this._defaultLords.get(__s72param0);
  };
  CastleLordData.prototype.getDefaultLordWithoutEquipmentByID = function (__s74param0) {
    return this._defaultLordsWithoutEquipment.get(__s74param0);
  };
  CastleLordData.prototype.getCommanderByID = function (__s76param0) {
    if (this._commanders != null) {
      for (var __s76local0 = 0, __s76local1 = this._commanders; __s76local0 < __s76local1.length; __s76local0++) {
        var __s76local2 = __s76local1[__s76local0];
        if (__s76local2 !== undefined && __s76local2.id == __s76param0) {
          return __s76local2;
        }
      }
    }
    return null;
  };
  CastleLordData.prototype.getBaronByID = function (__s82param0) {
    if (this._barons != null) {
      for (var __s82local0 = 0, __s82local1 = this._barons; __s82local0 < __s82local1.length; __s82local0++) {
        var __s82local2 = __s82local1[__s82local0];
        if (__s82local2 !== undefined && __s82local2.id == __s82param0) {
          return __s82local2;
        }
      }
    }
    return null;
  };
  CastleLordData.prototype.getLordByID = function (__s88param0) {
    if (this.commanders != null) {
      for (var __s88local0 = 0, __s88local1 = this.commanders; __s88local0 < __s88local1.length; __s88local0++) {
        var __s88local2 = __s88local1[__s88local0];
        if (__s88local2 !== undefined && __s88local2.id == __s88param0) {
          return __s88local2;
        }
      }
    }
    if (this.barons != null) {
      for (var __s88local3 = 0, __s88local4 = this.barons; __s88local3 < __s88local4.length; __s88local3++) {
        var __s88local5 = __s88local4[__s88local3];
        if (__s88local5 !== undefined && __s88local5.id == __s88param0) {
          return __s88local5;
        }
      }
    }
    if (this._defaultLords != null) {
      return this._defaultLords.get(__s88param0);
    } else {
      return null;
    }
  };
  CastleLordData.prototype.getBaronByCastleMapObjectVO = function (__s100param0) {
    var __s100local0 = 0;
    __s100local0 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s100param0, "VillageMapobjectVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s100param0, "KingstowerMapobjectVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s100param0, "MonumentMapobjectVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s100param0, "LaboratoryMapobjectVO") ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s100param0.kingdomID).objectId) : __s100param0.objectId;
    return this.getBaronByCastleId(__s100local0);
  };
  CastleLordData.prototype.getBaronByCastleId = function (__s102param0) {
    if (this.barons != null) {
      for (var __s102local0 = 0, __s102local1 = this.barons; __s102local0 < __s102local1.length; __s102local0++) {
        var __s102local2 = __s102local1[__s102local0];
        if (__s102local2 !== undefined && __s102local2.lockedInCastleID == __s102param0) {
          return __s102local2;
        }
      }
    }
    return null;
  };
  CastleLordData.prototype.getTotalBaronEffectValue = function (__s108param0) {
    var __s108local0 = 0;
    if (this.barons != null) {
      for (var __s108local1 = 0, __s108local2 = this.barons; __s108local1 < __s108local2.length; __s108local1++) {
        var __s108local3 = __s108local2[__s108local1];
        if (__s108local3 !== undefined) {
          __s108local0 += __s108local3.getEffectValue(__s108param0);
        }
      }
    }
    return __s108local0;
  };
  CastleLordData.prototype.lockLord = function (__s114param0) {
    var __s114local0 = this.getLordByID(__s114param0);
    if (__s114local0) {
      this._lockedLordIDs ||= [];
      this._lockedLordIDs.push(__s114param0);
      __s114local0.lock();
    }
  };
  CastleLordData.prototype.unlockLords = function () {
    if (this.commanders != null) {
      for (var __s117local0 = 0, __s117local1 = this.commanders; __s117local0 < __s117local1.length; __s117local0++) {
        __s117local4 = __s117local1[__s117local0];
        if (__s117local4 !== undefined) {
          __s117local4.unlock();
        }
      }
    }
    if (this.barons != null) {
      for (var __s117local2 = 0, __s117local3 = this.barons; __s117local2 < __s117local3.length; __s117local2++) {
        var __s117local4;
        __s117local4 = __s117local3[__s117local2];
        if (__s117local4 !== undefined) {
          __s117local4.unlock();
        }
      }
    }
    this._lockedLordIDs = [];
  };
  CastleLordData.prototype.isLordLocked = function (__s127param0) {
    if (this._lockedLordIDs != null) {
      for (var __s127local0 = 0, __s127local1 = this._lockedLordIDs; __s127local0 < __s127local1.length; __s127local0++) {
        var __s127local2 = __s127local1[__s127local0];
        if (__s127local2 !== undefined && __s127param0 == __s127local2) {
          return true;
        }
      }
    }
    return false;
  };
  CastleLordData.prototype.assignGeneral = function (__s133param0, __s133param1 = null) {
    var __s133local0 = this.commanders.concat(this.barons);
    var __s133local1 = __s133param0 ? __s133local0.find(function (__s135param0) {
      return __s135param0.id == __s133param0.id;
    }) : null;
    if (__s133local1) {
      if (__s133param1) {
        var __s133local2 = __s133local0.find(function (__s139param0) {
          return __s139param0.assignedGeneralVO == __s133param1;
        });
        if (__s133local2) {
          __s133local2.assignedGeneralVO = null;
        }
      }
      __s133local1.assignedGeneralVO = __s133param1;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralAssignLord.C2SGeneralAssignLord(__s133local1.id, __s133param1 ? __s133param1.generalID : -1));
      __dep_export_CastleModel.CastleModel.generalsData.updateAssignedLords();
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED));
    }
  };
  CastleLordData.prototype.getAssignedLord = function (__s142param0) {
    return this.commanders.concat(this.barons).find(function (__s144param0) {
      return __s144param0.assignedGeneralVO == __s142param0;
    });
  };
  CastleLordData.DEFAULT_LORD_TYPE_PREMIUM = "Premium";
  CastleLordData.DEFAULT_LORD_TYPE_TREASUREMAP = "Treasuremap";
  return CastleLordData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleLordData = __s0local0;
var __dep_export_BaronVO = require("gge-module:export_BaronVO");
var __dep_export_DefaultLordVO = require("gge-module:export_DefaultLordVO");
var __dep_export_CommanderVO = require("gge-module:export_CommanderVO");
