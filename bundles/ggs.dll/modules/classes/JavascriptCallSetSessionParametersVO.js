Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptFunctionName = require("gge-module:class_JavascriptFunctionName");
var __s0local0 = function () {
  return function JavascriptCallSetSessionParametersVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8, __s3param9, __s3param10) {
    this.functionName = __dep_class_JavascriptFunctionName.JavascriptFunctionName.SET_SESSION_PARAMETERS;
    var __s3local0 = {
      gameId: __s3param0,
      networkId: __s3param1,
      instanceId: __s3param2,
      playerId: __s3param3,
      accountId: __s3param4,
      languageCode: __s3param5,
      countryCode: __s3param6,
      pln: __s3param7,
      displayName: __s3param8,
      versionClient: __s3param9,
      versionServer: __s3param10
    };
    this.parameters = [__s3local0];
  };
}();
exports.JavascriptCallSetSessionParametersVO = __s0local0;
