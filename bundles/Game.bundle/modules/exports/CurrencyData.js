Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_XmlCurrencyRangeVO = require("gge-module:export_XmlCurrencyRangeVO");
var __dep_export_XmlCurrencyVO = require("gge-module:export_XmlCurrencyVO");
var __dep_export_XmlResourceVO = require("gge-module:export_XmlResourceVO");
var __s0local0 = function (__s1param0) {
  function CurrencyData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._xmlCurrenciesById = new Map();
    __s3local0._xmlCurrenciesByName = new Map();
    __s3local0._xmlCurrenciesByKey = new Map();
    __s3local0._xmlResourceTypes = new Map();
    __s3local0._c1 = new __dep_export_CollectableItemC1VO.CollectableItemC1VO();
    __s3local0._c2 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO();
    __s3local0._genericCurrencies = new Map();
    __s3local0._currencyRanges = new Map();
    __s3local0._configXml = __s3param0;
    __s3local0.parseXml();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CurrencyData, __s1param0);
  CurrencyData.prototype.reset = function () {
    this._c1 = new __dep_export_CollectableItemC1VO.CollectableItemC1VO();
    this._c2 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO();
    this._genericCurrencies = new Map();
  };
  CurrencyData.prototype.parseXml = function () {
    this._xmlCurrenciesById = new Map();
    var __s7local0 = this._configXml.currencies;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = new __dep_export_XmlCurrencyVO.XmlCurrencyVO();
          __s7local4.parseXml(__s7local3);
          this._xmlCurrenciesById.set(__s7local4.id, __s7local4);
          this._xmlCurrenciesByName.set(__s7local4.name, __s7local4);
          this._xmlCurrenciesByKey.set(__s7local4.jsonKey, __s7local4);
        }
      }
    }
    this._xmlResourceTypes = new Map();
    var __s7local5 = this._configXml.resources;
    if (__s7local5 != null) {
      for (var __s7local6 = 0, __s7local7 = __s7local5; __s7local6 < __s7local7.length; __s7local6++) {
        var __s7local8 = __s7local7[__s7local6];
        if (__s7local8 !== undefined) {
          (__s7local12 = new __dep_export_XmlResourceVO.XmlResourceVO()).parseXml(__s7local8);
          this._xmlResourceTypes.set(__s7local12.resourceID, __s7local12);
        }
      }
    }
    this._currencyRanges = new Map();
    var __s7local9 = this._configXml.currencyTypes;
    if (__s7local9 != null) {
      for (var __s7local10 = 0, __s7local11 = __s7local9; __s7local10 < __s7local11.length; __s7local10++) {
        var __s7local12;
        var __s7local13 = __s7local11[__s7local10];
        if (__s7local13 !== undefined) {
          (__s7local12 = new __dep_export_XmlCurrencyRangeVO.XmlCurrencyRangeVO()).parseXml(__s7local13);
          this._currencyRanges.set(__s7local12.typeID, __s7local12);
        }
      }
    }
    this.parseAdditionalXmlNode("currencyCaps", "parseXmlCaps");
    this.parseAdditionalXmlNode("currencyRarenesses", "parseXmlRareness");
    this.parseAdditionalXmlNode("currencyMinutesSkipValues", "parseXmlMinutesSkipValues");
    this.parseAdditionalXmlNode("currencyHiddenLists", "parseXmlHiddenLists");
  };
  CurrencyData.prototype.parseAdditionalXmlNode = function (__s21param0, __s21param1) {
    var __s21local0 = this._configXml[__s21param0];
    if (__s21local0 != null) {
      for (var __s21local1 = 0, __s21local2 = __s21local0; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined) {
          var __s21local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("currencyID", __s21local3, -1));
          if (__s21local4 >= 0) {
            var __s21local5 = this._xmlCurrenciesById.get(__s21local4);
            if (__s21local5) {
              __s21local5[__s21param1](__s21local3);
            }
          }
        }
      }
    }
  };
  CurrencyData.prototype.parseSCE = function (__s29param0) {
    var __s29local0 = __s29param0;
    if (__s29local0) {
      for (var __s29local1 = 0; __s29local1 < __s29local0.length; ++__s29local1) {
        var __s29local2 = __s29local0[__s29local1][0];
        var __s29local3 = __dep_exact_f855840627e6e145.int(__s29local0[__s29local1][1]);
        if (!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._genericCurrencies, __s29local2)) {
          if (this.getXmlCurrencyByKey(__s29local2)) {
            this._genericCurrencies.set(__s29local2, __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.getXmlCurrencyByKey(__s29local2).id));
          } else {
            __dep_exact_9e901e8e2483a22f.error("CurrencyData.parseSCE(): Currency with key '" + __s29local2 + "' doesn't exist in items.xml. Entry ignored.");
          }
        }
        var __s29local4 = this._genericCurrencies.get(__s29local2);
        if (__s29local4) {
          __s29local4.amount = __s29local3;
        }
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED));
    }
  };
  CurrencyData.prototype.parseGCU = function (__s38param0) {
    if (__s38param0) {
      this._c1.amount = __s38param0[__dep_export_CollectableEnum.CollectableEnum.C1.serverKey];
      this._c2.amount = __s38param0[__dep_export_CollectableEnum.CollectableEnum.C2.serverKey];
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY));
    }
  };
  CurrencyData.prototype.getXmlCurrencyById = function (__s41param0) {
    return this._xmlCurrenciesById.get(__s41param0);
  };
  CurrencyData.prototype.getXmlCurrencyByName = function (__s43param0) {
    return this._xmlCurrenciesByName.get(__s43param0);
  };
  CurrencyData.prototype.getXmlCurrencyByKey = function (__s45param0) {
    return this._xmlCurrenciesByKey.get(__s45param0);
  };
  CurrencyData.prototype.getXmlCurrenciesByIdRange = function (__s47param0, __s47param1 = true) {
    var __s47local0 = [];
    if (this._xmlCurrenciesById != null) {
      for (var __s47local1 = 0, __s47local2 = Array.from(this._xmlCurrenciesById.values()); __s47local1 < __s47local2.length; __s47local1++) {
        var __s47local3 = __s47local2[__s47local1];
        if (__s47local3 !== undefined && __dep_export_ClientConstCurrency.ClientConstCurrency.isInIdRange(__s47param0, __s47local3.id)) {
          __s47local0.push(__s47local3);
        }
      }
    }
    if (__s47param1) {
      __s47local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByXmlCurrencyId);
    }
    return __s47local0;
  };
  CurrencyData.prototype.getCurrencyById = function (__s54param0) {
    var __s54local0 = this.getXmlCurrencyById(__s54param0);
    if (__s54local0 && __dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._genericCurrencies, __s54local0.jsonKey)) {
      var __s54local1 = this._genericCurrencies.get(__s54local0.jsonKey);
      if (__s54local1) {
        return __s54local1;
      }
    }
    return null;
  };
  CurrencyData.prototype.getCurrencyByKey = function (__s58param0) {
    return this._genericCurrencies.get(__s58param0);
  };
  CurrencyData.prototype.getCurrencyByType = function (__s60param0) {
    if (__s60param0) {
      switch (__s60param0.type) {
        case __dep_export_CollectableEnum.CollectableEnum.C1:
          return this.c1;
        case __dep_export_CollectableEnum.CollectableEnum.C2:
          return this.c2;
        default:
          return this.getCurrencyById(__s60param0.id);
      }
    }
    return null;
  };
  CurrencyData.prototype.getAmountById = function (__s64param0) {
    var __s64local0 = this.getCurrencyById(__s64param0);
    return __dep_exact_f855840627e6e145.int(__s64local0 ? __s64local0.amount : 0);
  };
  CurrencyData.prototype.getAmountByKey = function (__s66param0) {
    var __s66local0 = this.getCurrencyByKey(__s66param0);
    return __dep_exact_f855840627e6e145.int(__s66local0 ? __s66local0.amount : 0);
  };
  CurrencyData.prototype.getAmountByType = function (__s68param0) {
    var __s68local0 = this.getCurrencyByType(__s68param0);
    return __dep_exact_f855840627e6e145.int(__s68local0 ? __s68local0.amount : 0);
  };
  Object.defineProperty(CurrencyData.prototype, "c1Amount", {
    get: function () {
      return this._c1.amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyData.prototype, "c2Amount", {
    get: function () {
      return this._c2.amount;
    },
    enumerable: true,
    configurable: true
  });
  CurrencyData.prototype.getAffordableAmount = function (__s74param0) {
    var __s74local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    for (var __s74local1 = 0, __s74local2 = __s74param0.getCostTypes(); __s74local1 < __s74local2.length; __s74local1++) {
      var __s74local3 = __s74local2[__s74local1];
      var __s74local4 = __dep_exact_f855840627e6e145.int(__s74param0.getCost(__s74local3));
      if (__s74local4 > 0) {
        __s74local0 = __dep_exact_f855840627e6e145.int(Math.min(__s74local0, this.getAmountByType(__s74local3) / __s74local4));
      }
    }
    return __s74local0;
  };
  CurrencyData.prototype.getMinuteSkips = function () {
    var __s79local0 = [];
    if (this._genericCurrencies != null) {
      for (var __s79local1 = 0, __s79local2 = Array.from(this._genericCurrencies.keys()); __s79local1 < __s79local2.length; __s79local1++) {
        var __s79local3 = __s79local2[__s79local1];
        if (__s79local3 !== undefined) {
          var __s79local4 = this.getXmlCurrencyByKey(__s79local3);
          if (__s79local4 && __dep_export_ClientConstCurrency.ClientConstCurrency.isInIdRange(this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP), __s79local4.id)) {
            __s79local0.push(this._genericCurrencies.get(__s79local3));
          }
        }
      }
    }
    __s79local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByCurrencyId);
    return __s79local0;
  };
  CurrencyData.prototype.getCurrenciesByIdRange = function (__s86param0, __s86param1 = true) {
    var __s86local0 = [];
    if (this._genericCurrencies != null) {
      for (var __s86local1 = 0, __s86local2 = Array.from(this._genericCurrencies.values()); __s86local1 < __s86local2.length; __s86local1++) {
        var __s86local3 = __s86local2[__s86local1];
        if (__s86local3 !== undefined && __s86local3.isInIdRange(__s86param0)) {
          __s86local0.push(__s86local3);
        }
      }
    }
    if (__s86param1) {
      __s86local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByCurrencyId);
    }
    return __s86local0;
  };
  CurrencyData.prototype.getCurrenciesByIdRanges = function (__s93param0, __s93param1 = true) {
    var __s93local0 = [];
    if (this._genericCurrencies != null) {
      for (var __s93local1 = 0, __s93local2 = Array.from(this._genericCurrencies.values()); __s93local1 < __s93local2.length; __s93local1++) {
        var __s93local3 = __s93local2[__s93local1];
        if (__s93local3 !== undefined) {
          for (var __s93local4 = 0; __s93local4 < __s93param0.length; ++__s93local4) {
            if (__s93local3.isInIdRange(__s93param0[__s93local4])) {
              __s93local0.push(__s93local3);
              break;
            }
          }
        }
      }
    }
    if (__s93param1) {
      __s93local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByCurrencyId);
    }
    return __s93local0;
  };
  Object.defineProperty(CurrencyData.prototype, "genericCurrencies", {
    get: function () {
      return this._genericCurrencies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyData.prototype, "c1", {
    get: function () {
      return this._c1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyData.prototype, "c2", {
    get: function () {
      return this._c2;
    },
    enumerable: true,
    configurable: true
  });
  CurrencyData.prototype.getResourceXmlVO = function (__s109param0) {
    return this._xmlResourceTypes.get(__s109param0);
  };
  CurrencyData.prototype.getCurrencyRangeByID = function (__s111param0) {
    return this._currencyRanges.get(__s111param0).currencyIDRange;
  };
  CurrencyData.prototype.getGeneralItemsIdRange = function () {
    return [Math.min(this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS)[0], this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_XP)[0], this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_OFFERING)[0]), Math.max(this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS)[1], this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_XP)[1], this.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_GENERALS_ITEMS_OFFERING)[1])];
  };
  return CurrencyData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CurrencyData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
