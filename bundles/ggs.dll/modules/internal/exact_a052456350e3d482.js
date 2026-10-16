Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_export_PageIntegrationErrorFactory = require("gge-module:export_PageIntegrationErrorFactory");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicLoader");
exports.loadCacheBreaker = function () {
  if (window.parent !== window.self || window.location.hostname.indexOf("local") >= 0 || window.document.location.hostname.indexOf("local") >= 0 || window.location.port === "8080" || window.location.port === "8081") {
    var __s1local0 = document.createElement("script");
    var __s1local1 = document.getElementById("CacheBreaker");
    if (__s1local1) {
      __s1local0.src = __s1local1.getAttribute("href");
      document.body.appendChild(__s1local0);
    } else {
      __s0local0.error("Unable to find the HTML link element with id 'CacheBreaker'.");
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_export_PageIntegrationErrorFactory.PageIntegrationErrorFactory(__dep_export_PageIntegrationErrorFactory.PageIntegrationErrorFactory.CACHE_BREAKER_ELEMENT_MISSING, "Unable to find the HTML link element with id 'CacheBreaker'."));
    }
  } else {
    __s0local0.error("Trying to run game without usage of an valid integration page.");
  }
};
