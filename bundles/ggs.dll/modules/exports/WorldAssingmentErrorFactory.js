Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicLogObjectFactory = require("gge-module:class_BasicLogObjectFactory");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function WorldAssingmentErrorFactory(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._errorMessage = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(WorldAssingmentErrorFactory, __s1param0);
  WorldAssingmentErrorFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, WorldAssingmentErrorFactory.WORLD_ASSIGNMENT_ERROR.toString());
    __s5local0.logData.set(WorldAssingmentErrorFactory.PARAM_ERROR_MESSAGE, this._errorMessage);
    return __s5local0;
  };
  WorldAssingmentErrorFactory.WORLD_ASSIGNMENT_ERROR = 100;
  WorldAssingmentErrorFactory.PARAM_ERROR_MESSAGE = "errorMessage";
  return WorldAssingmentErrorFactory;
}(__dep_class_BasicLogObjectFactory.BasicLogObjectFactory);
exports.WorldAssingmentErrorFactory = __s0local0;
