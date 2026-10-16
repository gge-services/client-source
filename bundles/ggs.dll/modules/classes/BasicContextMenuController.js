Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GoodgamePartners = require("gge-module:class_GoodgamePartners");
var __dep_export_ASupportData = require("gge-module:export_ASupportData");
var __dep_class_BrowserUtil = require("gge-module:class_BrowserUtil");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
require("gge-module:export_LoggerConfigurator").getLogger("BasicContextMenuController");
var __s0local0 = createjs.Event;
var __dep_class_ExportToWindowDebuggerClass = require("gge-module:class_ExportToWindowDebuggerClass");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local1 = function () {
  function BasicContextMenuController() {
    this._initialized = false;
  }
  Object.defineProperty(BasicContextMenuController, "instance", {
    get: function () {
      BasicContextMenuController._instance ||= new BasicContextMenuController();
      return BasicContextMenuController._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicContextMenuController.prototype, "ggsContextMenu", {
    get: function () {
      this._initialized;
      return this._ggsContextMenu;
    },
    enumerable: true,
    configurable: true
  });
  BasicContextMenuController.prototype.enableContextMenuItem = function (__s9param0) {
    if (this.contextMenuEnabled && this._ggsContextMenu) {
      for (var __s9local0 = 0, __s9local1 = this._ggsContextMenu.customItems; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2.caption === __s9param0 && !__s9local2.enabled) {
          __s9local2.enabled = true;
        }
      }
    }
  };
  BasicContextMenuController.prototype.disableContextMenuItem = function (__s15param0) {
    if (this.contextMenuEnabled && this._ggsContextMenu) {
      for (var __s15local0 = 0, __s15local1 = this._ggsContextMenu.customItems; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2.caption === __s15param0 && __s15local2.enabled) {
          __s15local2.enabled = false;
        }
      }
    }
  };
  BasicContextMenuController.prototype.refreshVersionInfo = function () {
    if (this._ggsContextMenu.customItems.length) {
      var __s21local0 = this._ggsContextMenu.customItems;
      this._ggsContextMenu.customItems = __s21local0;
    }
  };
  BasicContextMenuController.prototype.onXmlVersionSelected = function (__s24param0) {};
  BasicContextMenuController.prototype.onGgsLinkSelected = function (__s26param0) {
    __dep_class_BrowserUtil.BrowserUtil.executeNavigateToURL(new __dep_export_CSSMouseCursor.URLRequest(__dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://www.goodgamestudios.com"), "_blank");
  };
  BasicContextMenuController.prototype.onBlogSelected = function (__s28param0) {
    __dep_class_BrowserUtil.BrowserUtil.executeNavigateToURL(new __dep_export_CSSMouseCursor.URLRequest(__dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://blog.goodgamestudios.com/"), "_blank");
  };
  BasicContextMenuController.prototype.onFacebookSelected = function (__s30param0) {
    __dep_class_BrowserUtil.BrowserUtil.executeNavigateToURL(new __dep_export_CSSMouseCursor.URLRequest(__dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://www.facebook.com/GoodgameStudios"), "_blank");
  };
  BasicContextMenuController.prototype.onForumSelected = function (__s32param0) {
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_OPEN_FORUM);
  };
  BasicContextMenuController.prototype.onSupportSelected = function (__s34param0) {
    var __s34local0 = __dep_class_BasicModel.BasicModel.userData.userName;
    if (__s34local0 === undefined) {
      __s34local0 = "";
    }
    __dep_export_ASupportData.SupportUtil.navigateToSupport(__dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, __s34local0, __dep_class_BasicModel.BasicModel.userData.playerID, __dep_class_BasicModel.BasicModel.userData.userID, __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode);
  };
  Object.defineProperty(BasicContextMenuController.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicContextMenuController.prototype, "contextMenuEnabled", {
    get: function () {
      return this.env.networkId === __dep_class_GoodgamePartners.GoodgamePartners.NETWORK_GENERAL;
    },
    enumerable: true,
    configurable: true
  });
  BasicContextMenuController.FORUM_LABEL = "Forum";
  BasicContextMenuController.GGS_COPYRIGHT_LABEL = "(C) 2009-2016 Goodgame Studios";
  BasicContextMenuController.SUPPORT_LABEL = "Support";
  BasicContextMenuController.FACEBOOK_LABEL = "Facebook-Fansite";
  BasicContextMenuController.BLOG_LABEL = "Blog (our company blog)";
  __dep_exact_b45c75bfe6706b06.__decorate([__dep_class_ExportToWindowDebuggerClass.commentedOut(), __dep_exact_b45c75bfe6706b06.__metadata("design:type", Function), __dep_exact_b45c75bfe6706b06.__metadata("design:paramtypes", [String]), __dep_exact_b45c75bfe6706b06.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "enableContextMenuItem", null);
  __dep_exact_b45c75bfe6706b06.__decorate([__dep_class_ExportToWindowDebuggerClass.commentedOut(), __dep_exact_b45c75bfe6706b06.__metadata("design:type", Function), __dep_exact_b45c75bfe6706b06.__metadata("design:paramtypes", [String]), __dep_exact_b45c75bfe6706b06.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "disableContextMenuItem", null);
  __dep_exact_b45c75bfe6706b06.__decorate([__dep_class_ExportToWindowDebuggerClass.commentedOut(), __dep_exact_b45c75bfe6706b06.__metadata("design:type", Function), __dep_exact_b45c75bfe6706b06.__metadata("design:paramtypes", []), __dep_exact_b45c75bfe6706b06.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "refreshVersionInfo", null);
  __dep_exact_b45c75bfe6706b06.__decorate([__dep_class_ExportToWindowDebuggerClass.commentedOut(), __dep_exact_b45c75bfe6706b06.__metadata("design:type", Function), __dep_exact_b45c75bfe6706b06.__metadata("design:paramtypes", [__s0local0]), __dep_exact_b45c75bfe6706b06.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "onXmlVersionSelected", null);
  return BasicContextMenuController;
}();
exports.BasicContextMenuController = __s0local1;
