Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function () {
  function ClientConstReCaptcha() {}
  ClientConstReCaptcha.getSiteKey = function () {
    if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isLocal) {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY_LOCAL;
    } else if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isTest) {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY_TEST;
    } else {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY;
    }
  };
  ClientConstReCaptcha.RECAPTCHA_SITE_KEY_LOCAL = "6Lf0aFooAAAAAASMeebUEt4Y9ir7jbXfLCPEWnrA";
  ClientConstReCaptcha.RECAPTCHA_SITE_KEY_TEST = "6Lf0aFooAAAAAASMeebUEt4Y9ir7jbXfLCPEWnrA";
  ClientConstReCaptcha.RECAPTCHA_SITE_KEY = "6Lc7w34oAAAAAFKhfmln41m96VQm4MNqEdpCYm-k";
  return ClientConstReCaptcha;
}();
exports.ClientConstReCaptcha = __s0local0;
