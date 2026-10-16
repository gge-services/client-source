Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_CastleCrestSymbolDataEvent = require("gge-module:export_CastleCrestSymbolDataEvent");
var __dep_export_CastleArrayHelper = require("gge-module:export_CastleArrayHelper");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PremiumCrestSymbolVO = require("gge-module:export_PremiumCrestSymbolVO");
var __dep_export_StandardCrestSymbolVO = require("gge-module:export_StandardCrestSymbolVO");
var __s0local0 = function (__s1param0) {
  function CastleCrestSymbolData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._standardCrestSymbols = new Map();
    __s3local0._premiumCrestSymbols = new Map();
    __s3local0._npcCrestSymbols = new Map();
    __s3local0.createNPCSymbols();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCrestSymbolData, __s1param0);
  CastleCrestSymbolData.prototype.createNPCSymbols = function () {
    for (var __s5local0 = 0, __s5local1 = __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_IDS; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        this.createNPCCrestSymbol(__s5local2);
      }
    }
  };
  CastleCrestSymbolData.prototype.parseXML = function (__s10param0) {
    var __s10local0 = __s10param0.crestsymbols;
    if (__s10local0 != null) {
      for (var __s10local1 = 0, __s10local2 = __s10local0; __s10local1 < __s10local2.length; __s10local1++) {
        var __s10local3 = __s10local2[__s10local1];
        if (__s10local3 !== undefined) {
          if ((__s10local3.requiredAchievementID || "").length > 0) {
            this.createPremiumCrestSymbol(__s10local3);
          } else {
            this.createStandardCrestSymbol(__s10local3);
          }
        }
      }
    }
  };
  CastleCrestSymbolData.prototype.createNPCCrestSymbol = function (__s18param0) {
    var __s18local0 = new __dep_export_StandardCrestSymbolVO.StandardCrestSymbolVO(__s18param0);
    this._npcCrestSymbols.set(__s18param0, __s18local0);
  };
  CastleCrestSymbolData.prototype.parse_gus = function (__s20param0, __s20param1) {
    this._unlockedPremiumSymbols = [];
    this._boughtPremiumSymbols = [];
    if (__s20param0 != null) {
      for (var __s20local0 = 0, __s20local1 = __s20param0; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined) {
          var __s20local3 = this.getCrestSymbolVOByID(__s20local2);
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20local3, "PremiumCrestSymbolVO")) {
            this._unlockedPremiumSymbols.push(__s20local3);
          }
        }
      }
    }
    if (__s20param1 != null) {
      for (var __s20local4 = 0, __s20local5 = __s20param1; __s20local4 < __s20local5.length; __s20local4++) {
        var __s20local6 = __s20local5[__s20local4];
        if (__s20local6 !== undefined) {
          var __s20local7 = this.getCrestSymbolVOByID(__s20local6);
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20local7, "PremiumCrestSymbolVO")) {
            if (this._unlockedPremiumSymbols.indexOf(__s20local7) < 0) {
              this._unlockedPremiumSymbols.push(__s20local7);
            }
            this._boughtPremiumSymbols.push(__s20local7);
          }
        }
      }
    }
    this.broadcastUpdate();
  };
  CastleCrestSymbolData.prototype.broadcastUpdate = function () {
    this.dispatchEvent(new __dep_export_CastleCrestSymbolDataEvent.CastleCrestSymbolDataEvent(__dep_export_CastleCrestSymbolDataEvent.CastleCrestSymbolDataEvent.CREST_SYMBOL_DATA_UPDATED));
  };
  CastleCrestSymbolData.prototype.createStandardCrestSymbol = function (__s35param0) {
    var __s35local0 = parseInt(__s35param0.crestSymbolID || "");
    var __s35local1 = new __dep_export_StandardCrestSymbolVO.StandardCrestSymbolVO(__s35local0);
    this._standardCrestSymbols.set(__s35local0, __s35local1);
  };
  CastleCrestSymbolData.prototype.createPremiumCrestSymbol = function (__s37param0) {
    var __s37local0 = parseInt(__s37param0.crestSymbolID || "");
    var __s37local1 = new __dep_export_PremiumCrestSymbolVO.PremiumCrestSymbolVO(__s37local0);
    __s37local1.parseXML(__s37param0);
    this._premiumCrestSymbols.set(__s37local0, __s37local1);
  };
  Object.defineProperty(CastleCrestSymbolData.prototype, "standardCrestSymbols", {
    get: function () {
      return this._standardCrestSymbols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCrestSymbolData.prototype, "premiumCrestSymbols", {
    get: function () {
      return this._premiumCrestSymbols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCrestSymbolData.prototype, "unlockedPremiumSymbols", {
    get: function () {
      return this._unlockedPremiumSymbols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCrestSymbolData.prototype, "boughtPremiumSymbols", {
    get: function () {
      return this._boughtPremiumSymbols;
    },
    enumerable: true,
    configurable: true
  });
  CastleCrestSymbolData.prototype.getCrestSymbolVOByID = function (__s47param0) {
    var __s47local0;
    if (this.standardCrestSymbols.get(__s47param0)) {
      __s47local0 = this.standardCrestSymbols.get(__s47param0);
    } else if (this.premiumCrestSymbols.get(__s47param0)) {
      __s47local0 = this.premiumCrestSymbols.get(__s47param0);
    } else if (this._npcCrestSymbols.get(__s47param0)) {
      __s47local0 = this._npcCrestSymbols.get(__s47param0);
    }
    return __s47local0;
  };
  CastleCrestSymbolData.prototype.getRandomStandardSymbol = function () {
    var __s52local0 = this.getAllStandardSymbolIDsAsSortedArray();
    var __s52local1 = __dep_exact_f855840627e6e145.int(Math.random() * (__s52local0.length - 1));
    var __s52local2 = __dep_exact_f855840627e6e145.int(__s52local0[__s52local1]);
    return this.getCrestSymbolVOByID(__s52local2);
  };
  CastleCrestSymbolData.prototype.isSymbolUnlocked = function (__s54param0) {
    var __s54local0 = false;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s54param0, "PremiumCrestSymbolVO")) {
      if (__dep_export_CastleModel.CastleModel.crestSymbolData.unlockedPremiumSymbols && __dep_export_CastleModel.CastleModel.crestSymbolData.unlockedPremiumSymbols.indexOf(__s54param0) >= 0) {
        __s54local0 = true;
      }
    } else {
      __s54local0 = true;
    }
    return __s54local0;
  };
  CastleCrestSymbolData.prototype.isSymbolBought = function (__s59param0) {
    var __s59local0 = false;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s59param0, "PremiumCrestSymbolVO")) {
      if (__dep_export_CastleModel.CastleModel.crestSymbolData.boughtPremiumSymbols && __dep_export_CastleModel.CastleModel.crestSymbolData.boughtPremiumSymbols.indexOf(__s59param0) >= 0) {
        __s59local0 = true;
      }
    } else {
      __s59local0 = true;
    }
    return __s59local0;
  };
  CastleCrestSymbolData.prototype.getAllPremiumSymbolIDsAsSortedArray = function () {
    var __s64local0 = [];
    if (this._premiumCrestSymbols != null) {
      for (var __s64local1 = 0, __s64local2 = Array.from(this._premiumCrestSymbols.keys()); __s64local1 < __s64local2.length; __s64local1++) {
        var __s64local3 = __s64local2[__s64local1];
        if (__s64local3 !== undefined) {
          __s64local0.push(this._premiumCrestSymbols.get(__s64local3).id);
        }
      }
    }
    __s64local0.sort(__dep_export_CastleArrayHelper.numericSort);
    return __s64local0;
  };
  CastleCrestSymbolData.prototype.getAllStandardSymbolIDsAsSortedArray = function () {
    var __s70local0 = [];
    if (this._standardCrestSymbols != null) {
      for (var __s70local1 = 0, __s70local2 = Array.from(this._standardCrestSymbols.keys()); __s70local1 < __s70local2.length; __s70local1++) {
        var __s70local3 = __s70local2[__s70local1];
        if (__s70local3 !== undefined) {
          __s70local0.push(this._standardCrestSymbols.get(__s70local3).id);
        }
      }
    }
    __s70local0.sort(__dep_export_CastleArrayHelper.numericSort);
    return __s70local0;
  };
  CastleCrestSymbolData.prototype.getAllAvailableSymbols = function () {
    var __s76local0 = [];
    if (this._standardCrestSymbols != null) {
      for (var __s76local1 = 0, __s76local2 = Array.from(this._standardCrestSymbols.keys()); __s76local1 < __s76local2.length; __s76local1++) {
        var __s76local3 = __s76local2[__s76local1];
        if (__s76local3 !== undefined && __dep_exact_81dacdf05bd32292.instanceOfClass(this._standardCrestSymbols.get(__s76local3), "StandardCrestSymbolVO")) {
          __s76local0.push(this._standardCrestSymbols.get(__s76local3));
        }
      }
    }
    if (this._boughtPremiumSymbols != null) {
      for (var __s76local4 = 0, __s76local5 = this._boughtPremiumSymbols; __s76local4 < __s76local5.length; __s76local4++) {
        var __s76local6 = __s76local5[__s76local4];
        if (__s76local6 !== undefined) {
          __s76local0.push(__s76local6);
        }
      }
    }
    return __s76local0;
  };
  return CastleCrestSymbolData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleCrestSymbolData = __s0local0;
