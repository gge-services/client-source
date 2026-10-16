Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function () {
  function ForumLinkComposer() {}
  ForumLinkComposer.composeForumURL = function (__s5param0, __s5param1) {
    var __s5local0 = [];
    if (__s5param1) {
      __s5local0.push(ForumLinkComposer.URL_FORUM_STAGING);
    } else {
      __s5local0.push(ForumLinkComposer.URL_FORUM_PRODUCTION);
    }
    if (__s5param0 != "") {
      __s5local0.push(__s5param0);
    }
    return __s5local0.join("/");
  };
  ForumLinkComposer.composeForumURLWithoutAuth = function (__s10param0, __s10param1) {
    return ForumLinkComposer.URL_FORUM_PUBLIC.replace(ForumLinkComposer.DEFAULT_PLACEHOLDER, __s10param0).replace(ForumLinkComposer.DEFAULT_PLACEHOLDER, __s10param1);
  };
  ForumLinkComposer.URL_FORUM_STAGING = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://forum-loginserver-staging.goodgamestudios.com/vanilla";
  ForumLinkComposer.URL_FORUM_PRODUCTION = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://forum-loginserver.goodgamestudios.com/vanilla";
  ForumLinkComposer.URL_FORUM_PUBLIC = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{language}.board.goodgamestudios.com/{title}";
  ForumLinkComposer.DEFAULT_PLACEHOLDER = /\{.*?\}/;
  return ForumLinkComposer;
}();
exports.ForumLinkComposer = __s0local0;
