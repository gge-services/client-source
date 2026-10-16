Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ConcreteEnvironmentData = require("gge-module:class_ConcreteEnvironmentData");
var __s0local0 = function (__s1param0) {
  function ConcreteEnvironment(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._data = new __dep_class_ConcreteEnvironmentData.ConcreteEnvironmentData();
    __s3local0._id = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ConcreteEnvironment, __s1param0);
  Object.defineProperty(ConcreteEnvironment.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironment.prototype, "patterns", {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironment.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironment.prototype, "detection", {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true
  });
  ConcreteEnvironment.prototype.isSupported = function () {
    return false;
  };
  return ConcreteEnvironment;
}(require("gge-module:class_ConcreteEnvironmentPatterns").ConcreteEnvironmentPatterns);
exports.ConcreteEnvironment = __s0local0;
