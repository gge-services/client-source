Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstURL = require("gge-module:export_ClientConstURL");
var __dep_export_CommandDelayController = require("gge-module:export_CommandDelayController");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_BetaTestNewsItemsProperties = require("gge-module:export_BetaTestNewsItemsProperties");
var __s0local0 = function (__s1param0) {
  function CastleWelcomeBetaTestDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWelcomeBetaTestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWelcomeBetaTestDialog, __s1param0);
  CastleWelcomeBetaTestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_welcome_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_welcome_subHeader_info"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_news_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_welcome_subHeader_news"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_info_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_discord, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_link_forumText"));
    this.dialogDisp.btn_discord.toolTipText = "dialog_testServer_forum_tooltip";
    this.dialogDisp.btn_facebook.toolTipText = "dialog_welcome_facebookButton";
    this.initBasicButtons([this.dialogDisp.btn_facebook, this.dialogDisp.btn_close, this.dialogDisp.btn_discord]);
    this.newsComponent = new __dep_export_AccordionComponent.AccordionComponent(this.dialogDisp.mc_newsComponent);
  };
  CastleWelcomeBetaTestDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.newsComponent.clear();
    for (var __s7local0 = 0, __s7local1 = this.dialogProperties.newsIDs; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2 !== undefined) {
        var __s7local3 = new __dep_export_BetaTestNewsItemsProperties.BetaTestNewsItemsProperties(__s7local2);
        var __s7local4 = new __dep_export_BetaTestNewsItem.BetaTestNewsItem(__s7local3);
        this.newsComponent.addItem(__s7local4);
      }
    }
    this.newsComponent.show();
  };
  CastleWelcomeBetaTestDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
    this.newsComponent.hide();
    __dep_export_CastleModel.CastleModel.tutorialData.startTutorialOnLoginComplete();
    __dep_export_CommandDelayController.CommandDelayController.getInstance().finishDelayOfAllCommands();
  };
  CastleWelcomeBetaTestDialog.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      switch (__s14param0.target) {
        case this.dialogDisp.btn_facebook:
          __dep_exact_9e901e8e2483a22f.BrowserUtil.executeNavigateToURL(new __dep_exact_81dacdf05bd32292.URLRequest(__dep_export_ClientConstURL.ClientConstURL.URL_OFICIAL_EMPIRE_FACEBOOK_PAGE));
          break;
        case this.dialogDisp.btn_discord:
          __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.OPEN_DISCORD);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleWelcomeBetaTestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomeBetaTestDialog.__initialize_static_members = function () {
    CastleWelcomeBetaTestDialog.NAME = "CastleWelcomeBetaTest";
  };
  return CastleWelcomeBetaTestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleWelcomeBetaTestDialog = __s0local0;
var __dep_export_AccordionComponent = require("gge-module:export_AccordionComponent");
var __dep_export_BetaTestNewsItem = require("gge-module:export_BetaTestNewsItem");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
