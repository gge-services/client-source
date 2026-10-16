Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __dep_export_OptionsDialogProperties = require("gge-module:export_OptionsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleForumAdvertisementDialog() {
    return __s1param0.call(this, CastleForumAdvertisementDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumAdvertisementDialog, __s1param0);
  CastleForumAdvertisementDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_goToForum]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(CastleForumAdvertisementDialog.MESSAGE_TITLE));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_messageTip_body_15"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goToForum.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mailVerification_forum_title"));
  };
  CastleForumAdvertisementDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_goToForum:
        if (__dep_export_CastleModel.CastleModel.userData.email == __dep_exact_26a421b704832cff.PlayerConst.DEFAULT_MAIL && !__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_OptionsDialog.OptionsDialog, new __dep_export_OptionsDialogProperties.OptionsDialogProperties(__dep_export_OptionsDialog.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          return;
        }
        __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_OPEN_FORUM);
        this.finishForumAdvertisementMessages();
        this.hide();
    }
  };
  CastleForumAdvertisementDialog.prototype.finishForumAdvertisementMessages = function () {
    __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferQuestAccept(this.dialogProperties.messageVO.offerID, 1);
  };
  Object.defineProperty(CastleForumAdvertisementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumAdvertisementDialog.NAME = "CastleForumAdvertisement";
  CastleForumAdvertisementDialog.MESSAGE_TITLE = "dialog_messageTip_title_15";
  return CastleForumAdvertisementDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleForumAdvertisementDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
