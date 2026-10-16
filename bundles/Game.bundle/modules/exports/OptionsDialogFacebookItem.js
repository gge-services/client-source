Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleFacebookEvent = require("gge-module:export_CastleFacebookEvent");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AOptionsDialogCollapsibleItem = require("gge-module:export_AOptionsDialogCollapsibleItem");
var __dep_export_CastleSaveAccountDialog = require("gge-module:export_CastleSaveAccountDialog");
var __dep_export_CastleSaveAccountDialogProperties = require("gge-module:export_CastleSaveAccountDialogProperties");
var __s0local0 = function (__s1param0) {
  function OptionsDialogFacebookItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_FacebookConnectItem"))(), __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.contentMC.btn_facebook], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_connectFacebook_title"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_connectFacebook_title"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogFacebookItem, __s1param0);
  OptionsDialogFacebookItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onFacebookUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onFacebookUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_ACTION_CANCELED, this.bindFunction(this.onFacebookUpdate));
  };
  OptionsDialogFacebookItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onFacebookUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onFacebookUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_ACTION_CANCELED, this.bindFunction(this.onFacebookUpdate));
  };
  OptionsDialogFacebookItem.prototype.updateItem = function () {
    __s1param0.prototype.updateItem.call(this);
    this.disp.visible = __dep_export_CastleFacebookModule.CastleFacebookModule.available && __dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook;
    if (this.disp.visible) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.contentMC.btn_facebook, true);
      this.updateFacebookTexts();
    }
  };
  OptionsDialogFacebookItem.prototype.updateFacebookTexts = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.contentMC.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_connectFacebook_alreadyConnected_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.contentMC.btn_facebook.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_facebookDisconnect"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
  };
  OptionsDialogFacebookItem.prototype.onFacebookUpdate = function (__s14param0) {
    this.updateSignal.dispatch();
  };
  OptionsDialogFacebookItem.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.contentMC.btn_facebook:
          this.handleDisconnectFacebook();
      }
    }
  };
  OptionsDialogFacebookItem.prototype.handleDisconnectFacebook = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.userData.hasEmail ? __dep_export_CastleSaveAccountDialog.CastleSaveAccountDialog.TYPE_SAVE_PASSWORD : __dep_export_CastleSaveAccountDialog.CastleSaveAccountDialog.TYPE_SAVE_ACCOUNT;
    if (__dep_export_CastleModel.CastleModel.userData.isEmailTemporary || __dep_export_CastleModel.CastleModel.userData.isPasswordTemporary || __dep_export_CastleModel.CastleModel.userData.isPlayerNameTemporary) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSaveAccountDialog.CastleSaveAccountDialog, new __dep_export_CastleSaveAccountDialogProperties.CastleSaveAccountDialogProperties(__s20local0, __dep_export_CastleSaveAccountDialog.CastleSaveAccountDialog.STYLE_MANDATORY, this.bindFunction(this.handleUnmapFacebook), null, true));
    } else {
      this.handleUnmapFacebook();
    }
  };
  OptionsDialogFacebookItem.prototype.handleUnmapFacebook = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.contentMC.btn_facebook, false);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.MAP_USER_TO_FACEBOOK, false);
  };
  return OptionsDialogFacebookItem;
}(__dep_export_AOptionsDialogCollapsibleItem.AOptionsDialogCollapsibleItem);
exports.OptionsDialogFacebookItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
