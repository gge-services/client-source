Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function SocialDataEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SocialDataEvent, __s1param0);
  SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED = "socialPlayerNameChanged";
  SocialDataEvent.LOGIN_KEYS_REFRESHED = "loginKeysRefreshed";
  return SocialDataEvent;
}(createjs.Event);
exports.SocialDataEvent = __s0local0;
