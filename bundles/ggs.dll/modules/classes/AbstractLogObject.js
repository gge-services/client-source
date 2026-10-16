Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function () {
  function AbstractLogObject() {
    this.logData = new Map();
    this.isEssentialFilled = false;
  }
  Object.defineProperty(AbstractLogObject.prototype, "subErrorId", {
    get: function () {
      return this.logData.get(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_SUB_ERROR_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractLogObject.prototype, "data", {
    get: function () {
      var __s7local0 = {};
      this.logData.forEach(function (__s9param0, __s9param1) {
        __s7local0[__s9param1] = __s9param0;
      });
      return __s7local0;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractLogObject;
}();
exports.AbstractLogObject = __s0local0;
