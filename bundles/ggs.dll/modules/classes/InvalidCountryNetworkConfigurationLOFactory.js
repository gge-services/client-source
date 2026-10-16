Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function InvalidCountryNetworkConfigurationLOFactory(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._ggsCountryCode = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(InvalidCountryNetworkConfigurationLOFactory, __s1param0);
  InvalidCountryNetworkConfigurationLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(InvalidCountryNetworkConfigurationLOFactory.PARAM_GGS_COUNTRY_CODE, this._ggsCountryCode);
    return __s5local0;
  };
  InvalidCountryNetworkConfigurationLOFactory.PARAM_GGS_COUNTRY_CODE = "ggsCountryCode";
  return InvalidCountryNetworkConfigurationLOFactory;
}(require("gge-module:class_InstanceErrorLOFactory").InstanceErrorLOFactory);
exports.InvalidCountryNetworkConfigurationLOFactory = __s0local0;
