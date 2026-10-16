Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetDaimyoAllianceContractsEventVO = require("gge-module:export_C2SGetDaimyoAllianceContractsEventVO");
var __dep_export_C2SGetDaimyoAreasEventVO = require("gge-module:export_C2SGetDaimyoAreasEventVO");
var __dep_export_C2SGetDaimyoWarEffortsEventVO = require("gge-module:export_C2SGetDaimyoWarEffortsEventVO");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SamuraiEventEndDialogItemVO = require("gge-module:export_SamuraiEventEndDialogItemVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoAreaVO = require("gge-module:export_SamuraiDaimyoAreaVO");
var __dep_export_SamuraiDaimyoContractProgressVO = require("gge-module:export_SamuraiDaimyoContractProgressVO");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __dep_export_SamuraiDaimyoEvent = require("gge-module:export_SamuraiDaimyoEvent");
var __s0local0 = function () {
  function SamuraiDaimyoDataServer() {
    this._ownHighscoreRank = 0;
    this._ownHighscorePoints = 0;
    this._contractsCastles = [];
    this._contractsTownships = [];
    this._castles = [];
    this._townships = [];
    this._eventEndDialogData = [];
  }
  SamuraiDaimyoDataServer.prototype.requestGDW = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDaimyoWarEffortsEventVO.C2SGetDaimyoWarEffortsEventVO());
  };
  SamuraiDaimyoDataServer.prototype.parseGDW = function (__s7param0) {
    this._ownHighscoreRank = __dep_exact_f855840627e6e145.int(__s7param0.OR);
    this._ownHighscorePoints = __dep_exact_f855840627e6e145.int(__s7param0.TWE);
    this._castleWarEfforts = new Map();
    var __s7local0 = 0;
    var __s7local1 = 0;
    for (var __s7local2 = 0, __s7local3 = __s7param0.CWES; __s7local2 < __s7local3.length; __s7local2++) {
      var __s7local4 = __s7local3[__s7local2];
      if (__s7local4 !== undefined) {
        __s7local0 = __dep_exact_f855840627e6e145.int(__s7local4[0]);
        __s7local1 = __dep_exact_f855840627e6e145.int(__s7local4[1]);
        this._castleWarEfforts.set(__s7local0, __s7local1);
      }
    }
    this._townshipWarEfforts = new Map();
    for (var __s7local5 = 0, __s7local6 = __s7param0.TWES; __s7local5 < __s7local6.length; __s7local5++) {
      var __s7local7 = __s7local6[__s7local5];
      if (__s7local7 !== undefined) {
        __s7local0 = __dep_exact_f855840627e6e145.int(__s7local7[0]);
        __s7local1 = __dep_exact_f855840627e6e145.int(__s7local7[1]);
        this._townshipWarEfforts.set(__s7local0, __s7local1);
      }
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED));
  };
  SamuraiDaimyoDataServer.prototype.requestGDC = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDaimyoAllianceContractsEventVO.C2SGetDaimyoAllianceContractsEventVO());
  };
  SamuraiDaimyoDataServer.prototype.parseGDC = function (__s17param0) {
    if (__s17param0.DCC) {
      this._contractsCastles = [];
      for (var __s17local0 = 0, __s17local1 = __s17param0.DCC; __s17local0 < __s17local1.length; __s17local0++) {
        var __s17local2 = __s17local1[__s17local0];
        if (__s17local2 !== undefined) {
          this._contractsCastles.push(new __dep_export_SamuraiDaimyoContractProgressVO.SamuraiDaimyoContractProgressVO(__s17local2));
        }
      }
      this._contractsCastles.sort(SamuraiDaimyoDataServer.sortContracts);
    }
    if (__s17param0.DTC) {
      this._contractsTownships = [];
      for (var __s17local3 = 0, __s17local4 = __s17param0.DTC; __s17local3 < __s17local4.length; __s17local3++) {
        __s17local2 = __s17local4[__s17local3];
        this._contractsTownships.push(new __dep_export_SamuraiDaimyoContractProgressVO.SamuraiDaimyoContractProgressVO(__s17local2));
      }
      this._contractsTownships.sort(SamuraiDaimyoDataServer.sortContracts);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED));
  };
  SamuraiDaimyoDataServer.prototype.requestGDA = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDaimyoAreasEventVO.C2SGetDaimyoAreasEventVO());
  };
  SamuraiDaimyoDataServer.prototype.parseGDA = function (__s28param0) {
    if (__s28param0.DC) {
      this._castles = [];
      for (var __s28local0 = 0, __s28local1 = __s28param0.DC; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined) {
          this._castles.push(new __dep_export_SamuraiDaimyoAreaVO.SamuraiDaimyoAreaVO(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __s28local2));
        }
      }
      this._castles.sort(SamuraiDaimyoDataServer.sortAreas);
    }
    if (__s28param0.DT) {
      this._townships = [];
      for (var __s28local3 = 0, __s28local4 = __s28param0.DT; __s28local3 < __s28local4.length; __s28local3++) {
        __s28local2 = __s28local4[__s28local3];
        this._townships.push(new __dep_export_SamuraiDaimyoAreaVO.SamuraiDaimyoAreaVO(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP, __s28local2));
      }
      this._townships.sort(SamuraiDaimyoDataServer.sortAreas);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_AREAS_UPDATED));
  };
  SamuraiDaimyoDataServer.sortContracts = function (__s37param0, __s37param1) {
    return __s37param0.id - __s37param1.id;
  };
  SamuraiDaimyoDataServer.sortAreas = function (__s39param0, __s39param1) {
    return __s39param0.rank - __s39param1.rank;
  };
  SamuraiDaimyoDataServer.prototype.parseEventEndDialogData = function (__s41param0, __s41param1) {
    var __s41local0 = new __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO();
    __s41local0.parseServerObject(__s41param0, __s41param1);
    var __s41local1 = false;
    for (var __s41local2 = 0; __s41local2 < this._eventEndDialogData.length; ++__s41local2) {
      var __s41local3 = this._eventEndDialogData[__s41local2];
      if (__s41local0.itemType == __s41local3.itemType) {
        if (__s41local0.rank > 0) {
          __s41local3.rank = __s41local0.rank;
        }
        __s41local3.rewards.addList(__s41local0.rewards);
        __s41local1 = true;
        break;
      }
    }
    if (!__s41local1) {
      this._eventEndDialogData.push(__s41local0);
      this._eventEndDialogData.sort(this.bindFunction(this.sortData));
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED, [__s41param0, __s41param1]));
  };
  SamuraiDaimyoDataServer.prototype.clearEventEndDialogData = function () {
    this._eventEndDialogData = [];
  };
  SamuraiDaimyoDataServer.prototype.sortData = function (__s50param0, __s50param1) {
    return __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_SORT_ORDER.indexOf(__s50param0.itemType) - __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_SORT_ORDER.indexOf(__s50param1.itemType);
  };
  SamuraiDaimyoDataServer.prototype.getArea = function (__s52param0, __s52param1) {
    var __s52local0 = __s52param0 == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? this._castles : this._townships;
    if (__s52local0 != null) {
      for (var __s52local1 = 0, __s52local2 = __s52local0; __s52local1 < __s52local2.length; __s52local1++) {
        var __s52local3 = __s52local2[__s52local1];
        if (__s52local3 !== undefined && __s52param1 == __s52local3.rank) {
          return __s52local3;
        }
      }
    }
    return null;
  };
  SamuraiDaimyoDataServer.prototype.getXmlContract = function (__s58param0, __s58param1) {
    var __s58local0 = __s58param0 == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? this._contractsCastles : this._contractsTownships;
    var __s58local1 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractsList(__s58param0);
    if (__s58local0 != null) {
      for (var __s58local2 = 0, __s58local3 = __s58local0; __s58local2 < __s58local3.length; __s58local2++) {
        var __s58local4 = __s58local3[__s58local2];
        if (__s58local4 !== undefined && __s58local1 != null) {
          for (var __s58local5 = 0, __s58local6 = Array.from(__s58local1.values()); __s58local5 < __s58local6.length; __s58local5++) {
            var __s58local7 = __s58local6[__s58local5];
            if (__s58local7 !== undefined && __s58param1 == __s58local7.rank && __s58local4.id == __s58local7.id) {
              return __s58local7;
            }
          }
        }
      }
    }
    return null;
  };
  SamuraiDaimyoDataServer.prototype.getContractProgress = function (__s67param0, __s67param1) {
    var __s67local0 = __s67param0 == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? this._contractsCastles : this._contractsTownships;
    var __s67local1 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractsList(__s67param0);
    if (__s67local0 != null) {
      for (var __s67local2 = 0, __s67local3 = __s67local0; __s67local2 < __s67local3.length; __s67local2++) {
        var __s67local4 = __s67local3[__s67local2];
        if (__s67local4 !== undefined && __s67local1 != null) {
          for (var __s67local5 = 0, __s67local6 = Array.from(__s67local1.values()); __s67local5 < __s67local6.length; __s67local5++) {
            var __s67local7 = __s67local6[__s67local5];
            if (__s67local7 !== undefined && __s67param1 == __s67local7.rank && __s67local4.id == __s67local7.id) {
              return __s67local4;
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "ownHighscoreRank", {
    get: function () {
      return this._ownHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "ownHighscorePoints", {
    get: function () {
      return this._ownHighscorePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "contractsCastles", {
    get: function () {
      return this._contractsCastles;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "contractsTownships", {
    get: function () {
      return this._contractsTownships;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "castles", {
    get: function () {
      return this._castles;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "townships", {
    get: function () {
      return this._townships;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "eventEndDialogData", {
    get: function () {
      return this._eventEndDialogData;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoDataServer.prototype.getCastleWarEffort = function (__s90param0) {
    return __dep_exact_f855840627e6e145.int(this._castleWarEfforts.get(__s90param0) || 0);
  };
  SamuraiDaimyoDataServer.prototype.getTownshipWarEffort = function (__s92param0) {
    return __dep_exact_f855840627e6e145.int(this._townshipWarEfforts.get(__s92param0) || 0);
  };
  return SamuraiDaimyoDataServer;
}();
exports.SamuraiDaimyoDataServer = __s0local0;
