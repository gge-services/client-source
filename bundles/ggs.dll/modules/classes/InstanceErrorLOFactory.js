Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function InstanceErrorLOFactory(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(InstanceErrorLOFactory, __s1param0);
  InstanceErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, InstanceErrorLOFactory.INSTANCE_ERROR.toString());
    return __s5local0;
  };
  InstanceErrorLOFactory.NO_INSTANCES_FOR_CURRENT_COUNTRY_FOUND = 12001;
  InstanceErrorLOFactory.CONNECT_TO_INSTANCE_NULL = 12002;
  InstanceErrorLOFactory.INVALID_COUNTRY_NETWORK_CONFIGURATION = 12003;
  InstanceErrorLOFactory.INSTANCE_COUNTRYCODE_EMPTY_LIST = 12004;
  InstanceErrorLOFactory.INSTANCE_ERROR = 12;
  return InstanceErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.InstanceErrorLOFactory = __s0local0;
