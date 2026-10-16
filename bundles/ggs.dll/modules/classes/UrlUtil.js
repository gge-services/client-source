Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function () {
  function UrlUtil() {}
  UrlUtil.getCleanReferrer = function (__s5param0) {
    return UrlUtil.getProtocol(__s5param0) + "://" + UrlUtil.getServerName(__s5param0);
  };
  UrlUtil.getServerNameWithPort = function (__s7param0) {
    var __s7local0 = __s7param0.indexOf("/") + 2;
    var __s7local1 = __s7param0.indexOf("/", __s7local0);
    if (__s7local1 == -1) {
      return __s7param0.substring(__s7local0);
    } else {
      return __s7param0.substring(__s7local0, __s7local1);
    }
  };
  UrlUtil.getServerName = function (__s11param0) {
    var __s11local0 = UrlUtil.getServerNameWithPort(__s11param0);
    var __s11local1 = __s11local0.indexOf("]");
    if ((__s11local1 = __s11local1 > -1 ? __s11local0.indexOf(":", __s11local1) : __s11local0.indexOf(":")) > 0) {
      __s11local0 = __s11local0.substring(0, __s11local1);
    }
    return __s11local0;
  };
  UrlUtil.getProtocol = function (__s14param0) {
    var __s14local0 = __s14param0.indexOf("/");
    var __s14local1 = __s14param0.indexOf(":/");
    if (__s14local1 > -1 && __s14local1 < __s14local0) {
      return __s14param0.substring(0, __s14local1);
    } else if ((__s14local1 = __s14param0.indexOf("::")) > -1 && __s14local1 < __s14local0) {
      return __s14param0.substring(0, __s14local1);
    } else {
      return "";
    }
  };
  UrlUtil.isLocal = function (__s19param0) {
    return !!__s19param0 && __s19param0.indexOf(UrlUtil.FILE_PROTOCOL) != -1;
  };
  UrlUtil.isTestServer = function (__s21param0) {
    return !!__s21param0 && __s21param0.indexOf(UrlUtil.TEST_SERVER_FLAG) != -1;
  };
  UrlUtil.isLocaTest = function (__s23param0) {
    return !!__s23param0 && __s23param0.indexOf(UrlUtil.LOCATEST_FLAG) != -1;
  };
  UrlUtil.isLiveTest = function (__s25param0) {
    return !!__s25param0 && __s25param0.indexOf(UrlUtil.LIVETEST_FLAG) != -1;
  };
  UrlUtil.isPreClient = function (__s27param0) {
    return !!__s27param0 && __s27param0.indexOf(UrlUtil.PRECLIENT_FLAG) != -1;
  };
  UrlUtil.isProduction = function (__s29param0) {
    return !!__s29param0 && __s29param0.indexOf(UrlUtil.PRODUCTION_FLAG) != -1;
  };
  UrlUtil.FILE_PROTOCOL = "file:";
  UrlUtil.LOCATEST_FLAG = "-locatest";
  UrlUtil.LIVETEST_FLAG = "-livetest";
  UrlUtil.PRECLIENT_FLAG = "-preClient";
  UrlUtil.PRODUCTION_FLAG = "goodgamestudios.com";
  UrlUtil.TEST_SERVER_FLAG = __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS;
  return UrlUtil;
}();
exports.UrlUtil = __s0local0;
