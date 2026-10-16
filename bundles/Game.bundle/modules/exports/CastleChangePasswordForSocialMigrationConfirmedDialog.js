Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_UserSocialLoginMigrationHelper = require("gge-module:export_UserSocialLoginMigrationHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function CastleChangePasswordForSocialMigrationConfirmedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleChangePasswordForSocialMigrationConfirmedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePasswordForSocialMigrationConfirmedDialog, __s1param0);
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_support], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("nk_savedAccount_title")));
    var __s5local0 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    __s5local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("nk_savedAccount_copy", [__dep_exact_92d05af59ee2ff30.Localize.datetime(__dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getDateOfChange(), __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), __dep_export_CastleModel.CastleModel.userData.userName, "[url=" + __dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getLinkByInstanceID(this.env.networkId) + "]" + __dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getLinkByInstanceID(this.env.networkId) + "[/url]"]));
    var __s5local1 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE2, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s5local2 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE2, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s5local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE2, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    __s5local0.linkFormats = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatsVO(__s5local1, __s5local2, __s5local3);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, __s5local0).htmlLinkClick.add(this.bindFunction(this.onClickLink));
    this.dialogDisp.btn_support.toolTipText = "generic_support";
    this.dialogDisp.btn_ok.visible = !this.env.loginIsKeyBased || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 86 || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 87;
    this.dialogDisp.btn_close.visible = !this.env.loginIsKeyBased || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 86 || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 87;
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.onClickSupport = function () {
    __dep_exact_9e901e8e2483a22f.SupportUtil.navigateToSupport(__dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, __dep_export_CastleModel.CastleModel.userData.userName, __dep_export_CastleModel.CastleModel.userData.playerID, __dep_export_CastleModel.CastleModel.userData.userID, __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode);
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.onClickLink = function (__s9param0, __s9param1) {
    try {
      var __s9local0 = new __dep_exact_81dacdf05bd32292.URLRequest(__s9param1);
      __dep_exact_81dacdf05bd32292.navigateToURL(__s9local0, "goodgamestudios");
    } catch (__s12local0) {
      __dep_exact_9e901e8e2483a22f.error("cant navigate to url");
    }
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    switch (__s14param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_support:
        this.onClickSupport();
    }
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.__initialize_static_members = function () {
    CastleChangePasswordForSocialMigrationConfirmedDialog.NAME = "CastleChangePasswordForSocialMigrationConfirmed";
  };
  return CastleChangePasswordForSocialMigrationConfirmedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleChangePasswordForSocialMigrationConfirmedDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
