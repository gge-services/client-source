Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("Hacks.WorldAssignment.LanguageOverride");
exports.forceEnglishForSupportAgents = function (__s1param0, __s1param1) {
  if (__s1param1) {
    __s0local0.warn("SUK / HYDRA / COMMUNITY-SUPPORT LOGIN --> Overriding Language from " + __s1param0.ggsLanguageCode + " to ENGLISH ");
    return Object.assign({}, __s1param0, {
      ggsLanguageCode: "en"
    });
  } else {
    return __s1param0;
  }
};
