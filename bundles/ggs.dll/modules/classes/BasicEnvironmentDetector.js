Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("CoreJS.BasicEnvironmentDetector");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_export_detectFeatureBranchEnvironment = require("gge-module:export_detectFeatureBranchEnvironment");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local1 = function () {
  function BasicEnvironmentDetector() {}
  BasicEnvironmentDetector.detectRuntimeEnvironment = function (__s5param0, __s5param1) {
    if (__s5param0.loaderInfo.parameters[__dep_class_BasicConstants.BasicConstants.IS_TEST_PARAMETER]) {
      __s5param1.isTest = Boolean(__s5param0.loaderInfo.parameters[__dep_class_BasicConstants.BasicConstants.IS_TEST_PARAMETER]);
    } else {
      __s5param1.isTest = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.TEST_FOLDER) != -1;
      __s5param1.isTest = __s5param1.isTest || __s5param0.loaderInfo.url.indexOf("/gamesocial-test/") != -1;
      __s5param1.isTest = __s5param1.isTest || __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS) != -1;
      __s5param1.isTest = __s5param1.isTest || __dep_class_BasicConstants.BasicConstants.isLocalHost(__s5param0.loaderInfo.url);
    }
    if (__s5param0.loaderInfo.parameters[__dep_class_BasicConstants.BasicConstants.IS_LOCALE_PARAMETER]) {
      __s5param1.isTest = Boolean(__s5param0.loaderInfo.parameters[__dep_class_BasicConstants.BasicConstants.IS_LOCALE_PARAMETER]);
    }
    if (__s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.LIVE_TEST_FOLDER) != -1) {
      __s5param1.isLiveTest = true;
    }
    __s5param1.isLocal = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.LOCALE_URL) == 0 || __dep_class_BasicConstants.BasicConstants.isLocalHost(__s5param0.loaderInfo.url);
    __s5param1.isLocalHost = __dep_class_BasicConstants.BasicConstants.isLocalHost(__s5param0.loaderInfo.url);
    __s5param1.isPrivateTestServer = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.PRIVATE_TEST_SERVER_URL) != -1;
    __s5param1.isUsabilityTest = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.USABILITYTEST_FOLDER) != -1;
    __s5param1.isPreClient = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.PRECLIENT_FOLDER) != -1;
    __s5param1.isLocaTest = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.LOCA_TEST_FOLDER) != -1;
    __s5param1.isLocalHost = __s5param1.isLocal = true;
    __s5param1.isDevTest = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.DEV_TEST_FOLDER) != -1;
    __s5param1.isLiveBranchingEnvironment = __s5param0.loaderInfo.url.indexOf(__dep_class_BasicConstants.BasicConstants.LIVE_BRANCHING_ENVIRONMENT) != -1;
    var __s5local0 = __dep_export_detectFeatureBranchEnvironment.detectFeatureBranchEnvironment(__s5param0.loaderInfo.url);
    var __s5local1 = __s5local0.isFeatureBranch;
    var __s5local2 = __s5local0.id;
    var __s5local3 = __s5local0.environment;
    __s5param1.isFeatureBranchEnvironment = __s5local1;
    __s5param1.featureBranchId = __s5local2;
    __s5param1.featureBranchEnvironment = __s5local3;
    __dep_exact_39c566239c224ca4.info("isTest: " + __s5param1.isTest + ", isLiveTest: " + __s5param1.isLiveTest + ", isDev: " + __s5param1.isDevTest + ", isLocal: " + __s5param1.isLocal + ", isLocalHost: " + __s5param1.isLocalHost + ", isPrivateTestServer: " + __s5param1.isPrivateTestServer + ", isUsabilityTest: " + __s5param1.isUsabilityTest + ", env.isPreClient: " + __s5param1.isPreClient + ", isLiveBranchingEnvironment: " + __s5param1.isLiveBranchingEnvironment + ", isFeatureBranchEnvironment: " + __s5param1.isFeatureBranchEnvironment);
    __s0local0.debug("isTest: " + __s5param1.isTest + ", isLiveTest: " + __s5param1.isLiveTest + ", isDev: " + __s5param1.isDevTest + ", isLocal: " + __s5param1.isLocal + ", isLocalHost: " + __s5param1.isLocalHost + ", isPrivateTestServer: " + __s5param1.isPrivateTestServer + ", isUsabilityTest: " + __s5param1.isUsabilityTest + ", env.isPreClient: " + __s5param1.isPreClient + ", isLiveBranchingEnvironment: " + __s5param1.isLiveBranchingEnvironment + ", isFeatureBranchEnvironment: " + __s5param1.isFeatureBranchEnvironment);
  };
  return BasicEnvironmentDetector;
}();
exports.BasicEnvironmentDetector = __s0local1;
