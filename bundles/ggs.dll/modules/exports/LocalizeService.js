Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_DynamicDurationFormat = require("gge-module:export_DynamicDurationFormat");
var __dep_export_SimpleDurationFormat = require("gge-module:export_SimpleDurationFormat");
var __dep_export_HTMLTextComposer = require("gge-module:export_HTMLTextComposer");
var __dep_class_DateTimeStyle = require("gge-module:class_DateTimeStyle");
var __s0local0 = function () {
  function LocalizeService(__s3param0, __s3param1) {
    this._processor = __s3param0;
    this._localizationService = __s3param1;
    this._htmlTextComposer = new __dep_export_HTMLTextComposer.HTMLTextComposer();
    this._simpleDurationFormat = new __dep_export_SimpleDurationFormat.SimpleDurationFormat(this._processor);
    this._dynamicDurationFormat = new __dep_export_DynamicDurationFormat.DynamicDurationFormat(this._processor);
  }
  LocalizeService.prototype.text = function (__s5param0, __s5param1 = null, __s5param2 = true) {
    if (this._localizationService.initialized) {
      var __s5local0 = this._processor.text(__s5param0, __s5param1, __s5param2);
      if (this._localizationService.usePipe && this._localizationService.pipe && !__s5local0.endsWith(this._localizationService.pipe)) {
        return __s5local0 + this._localizationService.pipe;
      } else {
        return __s5local0;
      }
    }
    return __s5param0;
  };
  LocalizeService.prototype.hasText = function (__s10param0) {
    var __s10local0 = false;
    if (this._localizationService.initialized) {
      __s10local0 = this._processor.hasText(__s10param0);
    }
    return __s10local0;
  };
  LocalizeService.prototype.number = function (__s13param0, __s13param1 = false, __s13param2 = -1, __s13param3 = false, __s13param4 = true) {
    var __s13local0 = __s13param0.toString();
    if (this._localizationService.initialized) {
      __s13local0 = this._processor.number(__s13param0, __s13param1, __s13param2, __s13param3, __s13param4) + this._localizationService.pipe;
    }
    return __s13local0;
  };
  LocalizeService.prototype.integer = function (__s16param0) {
    if (this._localizationService.initialized) {
      return this._processor.integer(__s16param0) + this._localizationService.pipe;
    }
  };
  LocalizeService.prototype.decimal = function (__s19param0) {
    if (this._localizationService.initialized) {
      return this._processor.decimal(__s19param0) + this._localizationService.pipe;
    }
  };
  LocalizeService.prototype.datetime = function (__s22param0, __s22param1 = __dep_class_DateTimeStyle.DateTimeStyle.SHORT, __s22param2 = __dep_class_DateTimeStyle.DateTimeStyle.SHORT) {
    var __s22local0 = __s22param0 ? __s22param0.toString() : "";
    if (this._localizationService.initialized) {
      __s22local0 = this._processor.datetime(__s22param0, __s22param1, __s22param2) + this._localizationService.pipe;
    }
    return __s22local0;
  };
  LocalizeService.prototype.digitalClock = function (__s25param0) {
    return this._processor.digitalClock(__s25param0);
  };
  LocalizeService.prototype.numberForArabic = function (__s27param0) {
    if (this._processor.isArabic) {
      return this._processor.number(__s27param0);
    } else {
      return __s27param0.toString();
    }
  };
  LocalizeService.prototype.time = function (__s31param0, __s31param1 = 2, __s31param2 = true, __s31param3 = null) {
    var __s31local0 = __s31param0.toString();
    if (this._localizationService.initialized) {
      __s31local0 = this._dynamicDurationFormat.apply(__s31param0, __s31param1, __s31param2, __s31param3);
    }
    return __s31local0;
  };
  LocalizeService.prototype.timeCustom = function (__s34param0, __s34param1, __s34param2 = null) {
    var __s34local0 = __s34param1.toString();
    if (this._localizationService.initialized) {
      __s34local0 = this._simpleDurationFormat.apply(__s34param0, __s34param1);
    }
    return __s34local0;
  };
  LocalizeService.prototype.htmlText = function (__s37param0) {
    var __s37local0 = "";
    if (this._localizationService.initialized) {
      __s37local0 = this._htmlTextComposer.by(__s37param0);
    }
    return __s37local0;
  };
  Object.defineProperty(LocalizeService.prototype, "processorType", {
    get: function () {
      return this._processor.processorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizeService.prototype, "localizeReplacements", {
    get: function () {
      return this._processor.localizeReplacements;
    },
    set: function (__s44param0) {
      this._processor.localizeReplacements = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  LocalizeService.prototype.updateCurrencyFormatter = function (__s46param0, __s46param1) {
    this._processor.updateCurrencyFormatter(__s46param0, __s46param1);
  };
  LocalizeService.prototype.formatCurrency = function (__s48param0, __s48param1 = false) {
    return this._processor.formateCurrency(__s48param0, __s48param1);
  };
  return LocalizeService;
}();
exports.LocalizeService = __s0local0;
