Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ForumLinkComposer = require("gge-module:class_ForumLinkComposer");
var __dep_class_JavascriptCallOnSetForumHashFactory = require("gge-module:class_JavascriptCallOnSetForumHashFactory");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_ExternalInterfaceController = require("gge-module:class_ExternalInterfaceController");
var __s0local0 = function () {
  function ForumData() {}
  ForumData.prototype.updateCryptedForumHash = function (__s5param0) {
    this._rawServerForumHash = __s5param0;
    __dep_class_ExternalInterfaceController.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_class_JavascriptCallOnSetForumHashFactory.JavascriptCallOnSetForumHashFactory());
  };
  ForumData.prototype.getForumRootURL = function () {
    return __dep_class_ForumLinkComposer.ForumLinkComposer.composeForumURL(this._rawServerForumHash, this.isTest);
  };
  Object.defineProperty(ForumData.prototype, "rawServerForumHash", {
    get: function () {
      return this._rawServerForumHash;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForumData.prototype, "isTest", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isTest || __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isLocal;
    },
    enumerable: true,
    configurable: true
  });
  return ForumData;
}();
exports.ForumData = __s0local0;
