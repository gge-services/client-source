Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleForumHelper() {}
  CastleForumHelper.isForumVisible = function () {
    return !__dep_exact_9e901e8e2483a22f_6.GoodgamePartners.isSpilNetwork(CastleForumHelper.env.networkId) && CastleForumHelper.env.networkId != __dep_exact_9e901e8e2483a22f_6.GoodgamePartners.NETWORK_KANOBU && (!!CastleForumHelper.env.networkNewsByJS || !!CastleForumHelper.env.useexternallinks);
  };
  CastleForumHelper.assignForumButtonTooltip = function (__s7param0) {
    if (CastleForumHelper.env.networkNewsByJS) {
      __s7param0.toolTipText = "generic_group";
    } else {
      __s7param0.toolTipText = "generic_forum";
    }
  };
  CastleForumHelper.goToWiki = function () {
    if (CastleForumHelper.env.loginIsKeyBased && !CastleForumHelper.env.useexternallinks) {
      __dep_exact_9e901e8e2483a22f_4.ExternalInterfaceController.instance.executeJavaScriptFunction(__dep_exact_9e901e8e2483a22f_7.JavascriptFunctionName.REQUEST_GROUP);
    } else if (__dep_exact_9e901e8e2483a22f_5.GGSCountryController.instance.currentCountry.ggsLanguageCode == "de") {
      __dep_exact_9e901e8e2483a22f_1.BrowserUtil.executeNavigateToURL(new __dep_exact_81dacdf05bd32292.URLRequest(__dep_export_ClientConstURL.ClientConstURL.URL_WIKI_DE));
    } else {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_OPEN_FORUM);
    }
  };
  Object.defineProperty(CastleForumHelper, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumHelper;
}();
exports.CastleForumHelper = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstURL = require("gge-module:export_ClientConstURL");
