Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ProcessorTypeConstants = require("gge-module:class_ProcessorTypeConstants");
var __dep_class_TextsParser = require("gge-module:class_TextsParser");
var __dep_class_AbstractTextContentVO = require("gge-module:class_AbstractTextContentVO");
var __dep_class_DateTimeStyle = require("gge-module:class_DateTimeStyle");
var __dep_exact_efe5e4d3a8a47875 = require("gge-module:exact_efe5e4d3a8a47875");
var __dep_exact_342019d7ed274365 = require("gge-module:exact_342019d7ed274365");
var __dep_export_LeastRecentUsedCache = require("gge-module:export_LeastRecentUsedCache");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_NOBREAK_SPACE_CHAR = require("gge-module:export_NOBREAK_SPACE_CHAR");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("LocalizationJS.GlobalizeTextProcessor");
var __dep_exact_6433a064ab5b65c9 = require("gge-module:exact_6433a064ab5b65c9");
function __s0local1() {}
__dep_exact_6433a064ab5b65c9.pluralGenerator = __dep_exact_6433a064ab5b65c9.prototype.pluralGenerator = function (__s3param0) {
  return __s0local1;
};
var __s0local2 = function () {
  function GlobalizeTextProcessor(__s7param0, __s7param1 = true) {
    this._cldrURL = __s7param0;
    this._isCaseSensitive = __s7param1;
    this._initialized = false;
    this._localizeReplacements = false;
    this.loadedLocales = new Set(["en", "de"]);
    this.cachedTranslations = new __dep_export_LeastRecentUsedCache.LeastRecentUsedCache();
    this._isCaseSensitive = __s7param1;
  }
  Object.defineProperty(GlobalizeTextProcessor.prototype, "languageVO", {
    set: function (__s9param0) {
      this._languageVO = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  GlobalizeTextProcessor.prototype.initialize = function (__s11param0, __s11param1, __s11param2) {
    this._initialized = true;
    this.languageVO = __s11param0;
    __dep_exact_6433a064ab5b65c9.load(__s11param2 || __dep_exact_efe5e4d3a8a47875.CLDRJSONData);
    __dep_exact_6433a064ab5b65c9.locale(this._languageVO.locale);
    if (!this.loadedLocales.has(this._languageVO.locale)) {
      this.loadedLocales.add(this._languageVO.locale);
    }
    this.changeNumberFormatters();
    if (__s11param1 != null) {
      this.setTexts(__s11param1);
    } else {
      __s0local0.warn("the json translations file is empty");
    }
    this.clearCaches();
  };
  GlobalizeTextProcessor.prototype.setLanguageAsync = function (__s16param0, __s16param1) {
    var __s16local0 = this;
    this.languageVO = __s16param0;
    return new Promise(function (__s18param0, __s18param1) {
      if (!__s16local0._initialized) {
        __s18param1("the default CLDR data is not loaded : en, de, supplemental");
      }
      __s16local0.setLocaleAsync(__s16local0._languageVO.locale).then(function () {
        if (__s16param1) {
          __s16local0.setTexts(__s16param1);
        }
        __s16local0.changeNumberFormatters();
        __s18param0();
      }).catch(function (__s24param0) {
        __s18param1("The CLDR JSON failed: " + __s24param0);
      });
    });
  };
  GlobalizeTextProcessor.prototype.setLocaleAsync = function (__s26param0) {
    var __s26local0 = this;
    this.clearCaches();
    return new Promise(function (__s28param0, __s28param1) {
      if (__s26local0.loadedLocales.has(__s26param0)) {
        __dep_exact_6433a064ab5b65c9.locale(__s26param0);
        __s28param0();
      } else {
        __s26local0.downloadCLDRAsync(__s26param0).then(__s28param0).catch(__s28param1);
      }
    });
  };
  GlobalizeTextProcessor.prototype.finalize = function () {
    if (this._initialized) {
      this._initialized = false;
      this.languageVO = null;
      this.clearCaches();
    }
  };
  GlobalizeTextProcessor.prototype.getLocale = function () {
    __s0local0.debug("this.languageVO.locale ", this._languageVO.locale, "  Globalize.locale ", __dep_exact_6433a064ab5b65c9.locale().locale);
    return this._languageVO.locale;
  };
  GlobalizeTextProcessor.prototype.getTimeZone = function () {
    __s0local0.warn("getTimeZone: not implemented");
    return "";
  };
  GlobalizeTextProcessor.prototype.objectToLowerCase = function (__s39param0) {
    return Object.keys(__s39param0).reduce(function (__s41param0, __s41param1) {
      __s41param0[__s41param1.toLowerCase()] = __s39param0[__s41param1];
      return __s41param0;
    }, {});
  };
  GlobalizeTextProcessor.prototype.setTexts = function (__s43param0) {
    this._textsVersionNo = __dep_class_TextsParser.TextsParser.parseVersionNo(__s43param0);
    this._textsDeployTime = __dep_class_TextsParser.TextsParser.parseDeployTime(__s43param0);
    __s43param0 = this._isCaseSensitive ? __s43param0 : this.objectToLowerCase(__s43param0);
    var __s43local0 = JSON.stringify(__s43param0);
    if (this._languageVO.isLanguageWrittenRightToLeft) {
      __s43local0 = __dep_export_NOBREAK_SPACE_CHAR.reversePunctuation(__s43local0);
    }
    var __s43local1 = JSON.parse(__s43local0);
    delete __s43local1["@metadata"];
    var __s43local2 = {
      [this._languageVO.locale]: __s43local1
    };
    __dep_exact_6433a064ab5b65c9.loadMessages(__s43local2);
  };
  GlobalizeTextProcessor.prototype.setData = function (__s46param0) {};
  GlobalizeTextProcessor.prototype.hasText = function (__s48param0) {
    if (typeof __s48param0 != "string") {
      return false;
    }
    var __s48local0 = this._isCaseSensitive ? __s48param0 : __s48param0.toLowerCase();
    return !!__dep_exact_6433a064ab5b65c9.cldr.get(["globalize-messages/" + this._languageVO.locale, __s48local0]);
  };
  GlobalizeTextProcessor.prototype.getText = function (__s51param0, __s51param1 = null) {
    if (typeof __s51param0 != "string") {
      return __s51param0;
    }
    var __s51local0 = this._isCaseSensitive ? __s51param0 : __s51param0.toLowerCase();
    var __s51local1 = this.cachedTranslations.get(__s51local0);
    if (!__s51local1) {
      if (__s51local1 = __dep_exact_6433a064ab5b65c9.cldr.get(["globalize-messages/" + this._languageVO.locale, __s51local0]) || "") {
        this.cachedTranslations.put(__s51local0, __s51local1);
      }
    }
    return exports.doReplacements(__s51param1, __s51local1, this._languageVO.isLanguageWrittenRightToLeft);
  };
  GlobalizeTextProcessor.prototype.isEmpty = function (__s56param0) {
    return __s56param0 === null || Object.keys(__s56param0).length === 0;
  };
  GlobalizeTextProcessor.prototype.text = function (__s58param0, __s58param1, __s58param2) {
    var __s58local0;
    if (__s58param1 === undefined) {
      __s58param1 = null;
    }
    if (__s58param2 === undefined) {
      __s58param2 = true;
    }
    var __s58local1 = {};
    if (!this.isEmpty(__s58param1)) {
      var __s58local2;
      var __s58local3 = undefined;
      for (__s58local2 in __s58param1) {
        if (__s58local2.length !== 0) {
          if ((__s58local3 = __s58param1[__s58local2]) instanceof __dep_class_AbstractTextContentVO.AbstractTextContentVO) {
            __s58local1[__s58local2] = __s58local3.compose();
          } else if (this._localizeReplacements && __s58local3 !== "") {
            if (isNaN(Number(__s58local3))) {
              __s58local1[__s58local2] = this.getText(__s58local3) || __s58local3;
            } else {
              __s58local1[__s58local2] = this.number(Number(__s58local3), !this._languageVO.isLanguageWrittenRightToLeft, -1, this._languageVO.isLanguageWrittenRightToLeft, __s58param2);
            }
          } else {
            __s58local1[__s58local2] = __s58local3;
          }
        } else {
          __s58local1[__s58local2] = "";
        }
      }
    }
    if (typeof __s58param0 == "string" && __s58param0 !== "") {
      if (!(__s58local0 = this.getText(__s58param0, __s58param1 ? __s58local1 : null))) {
        __s58local0 = __s58param0;
      }
    } else {
      __s58local0 = "";
    }
    return __s58local0;
  };
  GlobalizeTextProcessor.prototype.number = function (__s75param0, __s75param1, __s75param2, __s75param3, __s75param4) {
    var __s75local0;
    var __s75local1;
    if (__s75param1 === undefined) {
      __s75param1 = false;
    }
    if (__s75param2 === undefined) {
      __s75param2 = -1;
    }
    if (__s75param3 === undefined) {
      __s75param3 = false;
    }
    if (__s75param4 === undefined) {
      __s75param4 = true;
    }
    var __s75local2 = __s75param0.toString().substring(__s75param0.toString().indexOf(".") + 1).length;
    __s75local1 = __s75local2 === __s75param0.toString().length ? 0 : __s75local2;
    var __s75local3 = __s75param1 && !this._languageVO.neverUseAbbreviations;
    var __s75local4 = __s75local1;
    if (__s75param2 > -1) {
      __s75local4 = __s75param2;
    } else if (this._languageVO.fractionalDigits > -1) {
      __s75local4 = this._languageVO.fractionalDigits;
    }
    var __s75local5 = this._languageVO.trailingZeros ? __s75local4 : 0;
    this._numberFormatter = __dep_exact_6433a064ab5b65c9.numberFormatter({
      maximumFractionDigits: __s75local4,
      minimumFractionDigits: __s75local5,
      useGrouping: __s75param4
    });
    __s75local0 = __s75local3 ? this.shortenLargeNumber(__s75param0, __s75param3) : this._numberFormatter(__s75param0);
    if (!this._languageVO.leadingZero) {
      __s75local0 = __s75local0.replace(/^0+/, "");
    }
    return __s75local0;
  };
  GlobalizeTextProcessor.prototype.integer = function (__s84param0) {
    return this._integerFormatter(__s84param0);
  };
  GlobalizeTextProcessor.prototype.decimal = function (__s86param0) {
    return this._decimalFormatter(__s86param0);
  };
  GlobalizeTextProcessor.prototype.updateCurrencyFormatter = function (__s88param0, __s88param1) {
    if (__s88param0 !== this._currencyCode || __s88param1 !== this._currencySymbol) {
      var __s88local0 = !/^[A-Z]{3}$/.test(__s88param1);
      this._currencyFormatter = __dep_exact_6433a064ab5b65c9.currencyFormatter(__s88param0, {
        style: __s88local0 ? "symbol" : "code",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    }
  };
  GlobalizeTextProcessor.prototype.formateCurrency = function (__s91param0, __s91param1 = false) {
    return this._currencyFormatter(__s91param0);
  };
  GlobalizeTextProcessor.prototype.datetime = function (__s93param0, __s93param1 = __dep_class_DateTimeStyle.DateTimeStyle.SHORT, __s93param2 = __dep_class_DateTimeStyle.DateTimeStyle.SHORT) {
    if (!__s93param0) {
      (__s93param0 = new Date()).setTime(0);
    }
    var __s93local0 = "";
    if (__s93param1 !== __dep_class_DateTimeStyle.DateTimeStyle.NONE) {
      __s93local0 = __dep_exact_6433a064ab5b65c9.formatDate(__s93param0, {
        date: this.dateTimeStyleMapping(__s93param1)
      });
    }
    if (__s93param2 !== __dep_class_DateTimeStyle.DateTimeStyle.NONE) {
      if (__s93local0.length > 0) {
        __s93local0 = __s93local0 + " " + __dep_exact_6433a064ab5b65c9.formatDate(__s93param0, {
          time: this.timeStyleMapping(__s93param2)
        });
      } else {
        __s93local0 += __dep_exact_6433a064ab5b65c9.formatDate(__s93param0, {
          time: this.timeStyleMapping(__s93param2)
        });
      }
    }
    return __s93local0;
  };
  GlobalizeTextProcessor.prototype.digitalClock = function (__s100param0) {
    if (this._languageVO.isLanguageWrittenRightToLeft) {
      return __s0local3(__s100param0, this._integerFormatter);
    } else {
      return __s100param0;
    }
  };
  GlobalizeTextProcessor.prototype.downloadCLDRAsync = function (__s104param0) {
    var __s104local0 = this;
    var __s104local1 = this._cldrURL + "/" + __s104param0 + ".json";
    return new Promise(function (__s106param0, __s106param1) {
      new __dep_exact_342019d7ed274365.URLLoaderService(__s104local1).load().then(JSON.parse).then(function (__s108param0) {
        __dep_exact_6433a064ab5b65c9.load(__s108param0);
        __dep_exact_6433a064ab5b65c9.locale(__s104param0);
        __s104local0.loadedLocales.add(__s104param0);
        __s106param0();
      }).catch(__s106param1);
    });
  };
  GlobalizeTextProcessor.prototype.dateTimeStyleMapping = function (__s110param0) {
    var __s110local0 = "none";
    switch (__s110param0) {
      case __dep_class_DateTimeStyle.DateTimeStyle.FULL:
        __s110local0 = "full";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.LONG:
        __s110local0 = "long";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.MEDIUM:
        __s110local0 = "medium";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.SHORT:
        __s110local0 = "short";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.CUSTOM:
        __s110local0 = "custom";
        break;
      default:
        __s110local0 = __s110param0;
    }
    return __s110local0;
  };
  GlobalizeTextProcessor.prototype.shortenLargeNumber = function (__s113param0, __s113param1) {
    var __s113local0 = ["generic_kForThousand", "generic_mForMillion"];
    var __s113local1 = __s113param0.toString();
    var __s113local2 = 0;
    if (__s113param0 < this._languageVO.abbreviationThreshold && __s113param0 > -this._languageVO.abbreviationThreshold) {
      __s113local1 = this._numberFormatter(__s113param0);
    } else {
      for (var __s113local3 = __s113local0.length - 1; __s113local3 >= 0; __s113local3--) {
        if (__s113param0 <= -(__s113local2 = Math.pow(1000, __s113local3 + 1)) || __s113param0 >= __s113local2) {
          __s113local1 = this._numberFormatter(__s113param0 / __s113local2) + (__s113param1 ? " " : "") + this.getText(__s113local0[__s113local3]);
          break;
        }
      }
    }
    return __s113local1;
  };
  GlobalizeTextProcessor.prototype.clearCaches = function () {
    this.cachedTranslations.clear();
  };
  GlobalizeTextProcessor.prototype.changeNumberFormatters = function () {
    this._integerFormatter = __dep_exact_6433a064ab5b65c9.numberFormatter({
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      useGrouping: true
    });
    this._decimalFormatter = __dep_exact_6433a064ab5b65c9.numberFormatter({
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      useGrouping: false
    });
  };
  GlobalizeTextProcessor.prototype.timeStyleMapping = function (__s124param0) {
    var __s124local0 = "none";
    switch (__s124param0) {
      case __dep_class_DateTimeStyle.DateTimeStyle.FULL:
        __s124local0 = "full";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.LONG:
        __s124local0 = "long";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.MEDIUM:
        __s124local0 = "medium";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.SHORT:
        __s124local0 = "short";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.CUSTOM:
        __s124local0 = "custom";
        break;
      case __dep_class_DateTimeStyle.DateTimeStyle.FULL:
        __s124local0 = "medium";
        break;
      default:
        __s124local0 = __s124param0;
    }
    return __s124local0;
  };
  Object.defineProperty(GlobalizeTextProcessor.prototype, "isArabic", {
    get: function () {
      return this._languageVO.isLanguageWrittenRightToLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "processorType", {
    get: function () {
      return __dep_class_ProcessorTypeConstants.ProcessorTypeConstants.PROCESSOR_GLOBALIZE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "initialized", {
    get: function () {
      return this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "localizeReplacements", {
    get: function () {
      return this._localizeReplacements;
    },
    set: function (__s135param0) {
      this._localizeReplacements = __s135param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "textsVersionNo", {
    get: function () {
      return this._textsVersionNo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "textsDeployTime", {
    get: function () {
      return this._textsDeployTime;
    },
    enumerable: true,
    configurable: true
  });
  return GlobalizeTextProcessor;
}();
exports.GlobalizeTextProcessor = __s0local2;
function __s0local3(__s141param0, __s141param1, __s141param2 = true) {
  return __s141param0.split(":").map(function (__s143param0) {
    return __s141param1(parseInt(__s143param0));
  }).join(":");
}
exports.doReplacements = function (__s145param0, __s145param1, __s145param2 = true) {
  if (__s145param1) {
    var __s145local0 = __s145param0 && Object.keys(__s145param0);
    if (__s145local0) {
      if (__s145param2 && __s145local0.length == 1 && __s145param1) {
        var __s145local1 = __s145local0[0];
        if (__s145param0[__s145local1] && /^[A-Za-z0-9]*$/.test(__s145param0[__s145local1])) {
          __s145param1 = __dep_export_NOBREAK_SPACE_CHAR.reverseSinglePlaceholder(__s145param1);
        }
      }
      __s145local0.forEach(function (__s151param0) {
        var __s151local0 = __s145param0[__s151param0];
        var __s151local1 = new RegExp("\\{" + __s151param0 + "}", "ig");
        __s145param1 = __s145param1.replace(__s151local1, __s151local0);
      });
    }
  }
  return __s145param1;
};
