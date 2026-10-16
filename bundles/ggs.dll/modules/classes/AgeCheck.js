Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_instantiationKey = require("gge-module:export_instantiationKey");
var __s0local0 = function (__s1param0) {
  function AgeCheck(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param5) || this;
    __s3local0._id = __s3param1;
    __s3local0._backgroundColor = __s3param2;
    __s3local0._age = __s3param3;
    __s3local0._textId = __s3param4;
    AgeCheck._values.push(__s3local0);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(AgeCheck, __s1param0);
  Object.defineProperty(AgeCheck, "values", {
    get: function () {
      return AgeCheck._values.concat();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "None", {
    get: function () {
      return AgeCheck._none;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "All", {
    get: function () {
      return AgeCheck._all;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "OverTwelve", {
    get: function () {
      return AgeCheck._overTwelve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "OverFifteen", {
    get: function () {
      return AgeCheck._overFifteen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "OverEighteen", {
    get: function () {
      return AgeCheck._overEighteen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "age", {
    get: function () {
      return this._age;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "textId", {
    get: function () {
      return this._textId;
    },
    enumerable: true,
    configurable: true
  });
  AgeCheck.getById = function (__s25param0) {
    return this.getByProperty(AgeCheck, "id", __s25param0, AgeCheck.None);
  };
  AgeCheck._values = [];
  AgeCheck._none = new AgeCheck("None", 0, 16777215, 0, "generic_alert_information", __dep_export_instantiationKey.BasicEnum.instantiationKey);
  AgeCheck._all = new AgeCheck("All", 1, 9225791, -1, "generic_alert_information", __dep_export_instantiationKey.BasicEnum.instantiationKey);
  AgeCheck._overTwelve = new AgeCheck("OverTwelve", 2, 5290987, 12, "generic_alert_information", __dep_export_instantiationKey.BasicEnum.instantiationKey);
  AgeCheck._overFifteen = new AgeCheck("OverFifteen", 3, 16765440, 15, "generic_alert_information", __dep_export_instantiationKey.BasicEnum.instantiationKey);
  AgeCheck._overEighteen = new AgeCheck("OverEighteen", 4, 14883619, 18, "generic_alert_information", __dep_export_instantiationKey.BasicEnum.instantiationKey);
  return AgeCheck;
}(__dep_export_instantiationKey.BasicEnum);
exports.AgeCheck = __s0local0;
