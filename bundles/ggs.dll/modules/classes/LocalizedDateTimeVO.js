Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Localize = require("gge-module:class_Localize");
var __dep_class_AbstractTextContentVO = require("gge-module:class_AbstractTextContentVO");
var __dep_class_DateTimeStyle = require("gge-module:class_DateTimeStyle");
var __s0local0 = function (__s1param0) {
  function LocalizedDateTimeVO(__s3param0 = null, __s3param1 = null, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._date = __s3param0 || new Date();
    __s3local0._dateStyle = __s3param1 || __dep_class_DateTimeStyle.DateTimeStyle.SHORT;
    __s3local0._timeStyle = __s3param2 || __s3local0._dateStyle;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocalizedDateTimeVO, __s1param0);
  Object.defineProperty(LocalizedDateTimeVO.prototype, "date", {
    get: function () {
      return this._date;
    },
    set: function (__s7param0) {
      this._date = __s7param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedDateTimeVO.prototype, "pattern", {
    get: function () {
      return this._pattern;
    },
    set: function (__s11param0) {
      this._pattern = __s11param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedDateTimeVO.prototype, "dateStyle", {
    get: function () {
      return this._dateStyle;
    },
    set: function (__s15param0) {
      this._dateStyle = __s15param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedDateTimeVO.prototype, "timeStyle", {
    get: function () {
      return this._timeStyle;
    },
    set: function (__s19param0) {
      this._timeStyle = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedDateTimeVO.prototype.compose = function () {
    return __dep_class_Localize.Localize.datetime(this._date, this._dateStyle, this._timeStyle);
  };
  LocalizedDateTimeVO.prototype.toString = function () {
    return LocalizedDateTimeVO.NAME + ", current date: " + this._date + ", date style: " + this._dateStyle + ", date pattern: " + this._pattern;
  };
  LocalizedDateTimeVO.NAME = "LocalizedDateTimeVO";
  return LocalizedDateTimeVO;
}(__dep_class_AbstractTextContentVO.AbstractTextContentVO);
exports.LocalizedDateTimeVO = __s0local0;
