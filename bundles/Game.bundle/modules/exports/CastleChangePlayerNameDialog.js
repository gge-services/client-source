Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_C2SChangePlayerName = require("gge-module:export_C2SChangePlayerName");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_C2SChangePlayerNameInfo = require("gge-module:export_C2SChangePlayerNameInfo");
var __s0local0 = function (__s1param0) {
  function CastleChangePlayerNameDialog() {
    return __s1param0.call(this, CastleChangePlayerNameDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePlayerNameDialog, __s1param0);
  CastleChangePlayerNameDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_newName_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newName_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_player_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newName_newName_desc2"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost_simple"));
    this._txtInput_username = this.textFieldManager.registerTextField(this.dialogDisp.mc_name.input_playername, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_enter")));
    this._defaultText = this._txtInput_username.text;
    this._txtInput_username.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._txtInput_username.multiline = false;
    this._txtInput_username.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig("StatusPopover"));
    this._popoverComponent.config.closeOnClick = true;
  };
  CastleChangePlayerNameDialog.prototype.onTyping = function () {
    var __s7local0 = [];
    for (var __s7local1 = 0; __s7local1 < arguments.length; __s7local1++) {
      __s7local0[__s7local1] = arguments[__s7local1];
    }
    this._txtInput_username.textContentVO.stringValue = this._txtInput_username.text.replace(/\n/g, "");
    this._txtInput_username.textContentVO.stringValue = this._txtInput_username.text.replace(/\t/g, "");
  };
  CastleChangePlayerNameDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this._popoverComponent.onShow();
    this.dialogDisp.mc_costs.mc_discount.visible = false;
    this.dialogDisp.mc_blacklistError.visible = false;
    this.dialogDisp.mc_name.mc_selected.visible = false;
    this._txtInput_username.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_username.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_username.keyUp.add(this.bindFunction(this.onTyping));
    this._popoverComponent.onSequenceCompleteSignal.add(this.bindFunction(this.onPopOverCompleted));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GNCI_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameInfo));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPNE_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameChanged));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangePlayerNameInfo.C2SChangePlayerNameInfo());
  };
  CastleChangePlayerNameDialog.prototype.applyPropertiesLoaded = function (__s13param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s13param0);
    this._txtInput_username.text = this._defaultText;
    this.dialogDisp.mc_costs.mc_discount.visible = this.dialogProperties.discount > 0;
    if (this.dialogProperties.discount) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_discount.txt_discount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_placeHolder_percentage", [this.dialogProperties.discount]));
    }
  };
  CastleChangePlayerNameDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (this._enableUI || __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.dialogDisp.btn_ok:
          if (__dep_export_CastleModel.CastleModel.changePlayerNameData.resetNameChangeCooldownTimestamp > 0) {
            return;
          }
          if (this.usernameIsValid()) {
            if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.dialogProperties.cost) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
            } else {
              this.changeName();
            }
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleChangePlayerNameDialog.prototype.onTextFieldFocusIn = function (__s24param0) {
    this.dialogDisp.mc_name.mc_selected.visible = true;
    this.dialogDisp.mc_blacklistError.visible = false;
    if (this._txtInput_username.text == this._defaultText) {
      this._txtInput_username.text = "";
    }
  };
  CastleChangePlayerNameDialog.prototype.onPopOverCompleted = function () {
    this._enableUI = true;
  };
  CastleChangePlayerNameDialog.prototype.onTextFieldFocusOut = function (__s29param0) {
    this.dialogDisp.mc_name.mc_selected.visible = false;
  };
  CastleChangePlayerNameDialog.prototype.usernameIsValid = function () {
    if (this._txtInput_username.text.charAt(0) == " " || this._txtInput_username.text.charAt(this._txtInput_username.text.length - 1) == " ") {
      this.showNameError("dialog_options_error_nameSpaces_desc");
      return false;
    }
    var __s31local0 = this._txtInput_username.text.trim();
    if (__s31local0.length == 0) {
      this.showNameError("error_name_empty");
      return false;
    } else if (this._txtInput_username.text.match("^[0-9]*$")) {
      this.showNameError("dialog_options_error_nameOnlyNumbers_desc");
      return false;
    } else if (__s31local0.length < __dep_exact_9e901e8e2483a22f.BasicModel.basicLocalization.getUsernameMinLength) {
      this.showNameError("error_name_too_short");
      return false;
    } else if (__dep_exact_9e901e8e2483a22f.TextValide.isUsernameValide(__s31local0)) {
      return this._txtInput_username.text != this._defaultText;
    } else {
      this.showNameError("errorCode_28");
      return false;
    }
  };
  CastleChangePlayerNameDialog.prototype.onServerResponsePlayerNameChanged = function (__s39param0) {
    var __s39local0 = __s39param0.params[0];
    if (__s39param0.params[1]) {
      __dep_export_CastleModel.CastleModel.userData.userName = this._txtInput_username.text;
      __dep_export_CastleModel.CastleModel.localData.saveUsername(__dep_export_CastleModel.CastleModel.userData.userName);
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_NAME));
      var __s39local1 = this._popoverComponent.getAssetDisp();
      __s39local1.mc_icon.gotoAndStop(__dep_export_ClientConstFusion.ClientConstFusion.ACTION_POPOVER_FRAME_LEVEL);
      this.textFieldManager.registerTextField(__s39local1.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s39local0)).autoFitToBounds = true;
      this._popoverComponent.startSequence();
      this.dialogProperties.cost = __dep_export_CastleModel.CastleModel.changePlayerNameData.getCurrentC2Cost;
      this._txtCost.textContentVO.stringValue = String(new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.cost));
      this.activateCooldown();
    } else {
      this.showNameError(__s39local0);
    }
  };
  CastleChangePlayerNameDialog.prototype.onServerResponsePlayerNameInfo = function (__s43param0) {
    var __s43local0 = __s43param0.params[0];
    var __s43local1 = __s43param0.params[1];
    this.dialogProperties.cost = __s43local0;
    this._txtCost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_costs1.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.cost));
    if (__s43local1 > 0) {
      this.activateCooldown();
    }
  };
  CastleChangePlayerNameDialog.prototype.activateCooldown = function () {
    if (!this._isCooldownActivated) {
      this._isCooldownActivated = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.toolTipText = "dialog_options_cooldown_tooltip";
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    }
  };
  CastleChangePlayerNameDialog.prototype.deactivateCoolDown = function () {
    this._isCooldownActivated = false;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.dialogDisp.btn_ok.toolTipText = null;
  };
  CastleChangePlayerNameDialog.prototype.onTimeUpdate = function (__s51param0 = null) {
    if (__dep_export_CastleModel.CastleModel.changePlayerNameData.resetNameChangeCooldownTimestamp <= 0) {
      this.deactivateCoolDown();
    }
  };
  CastleChangePlayerNameDialog.prototype.changeName = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangePlayerName.C2SChangePlayerName(__dep_exact_9e901e8e2483a22f.TextValide.getValideSmartFoxText(this._txtInput_username.text)));
    this._enableUI = false;
  };
  CastleChangePlayerNameDialog.prototype.showNameError = function (__s56param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_blacklistError.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s56param0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_blacklistError.visible = true;
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.mc_blacklistError, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleChangePlayerNameDialog.prototype.hideLoaded = function (__s58param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s58param0);
    this._txtInput_username.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_username.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_username.keyUp.remove(this.bindFunction(this.onTyping));
    this._popoverComponent.onSequenceCompleteSignal.remove(this.bindFunction(this.onPopOverCompleted));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GNCI_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameInfo));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPNE_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameChanged));
  };
  Object.defineProperty(CastleChangePlayerNameDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangePlayerNameDialog.__initialize_static_members = function () {
    CastleChangePlayerNameDialog.NAME = "CastleChangePlayerName";
  };
  return CastleChangePlayerNameDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleChangePlayerNameDialog = __s0local0;
__s0local0.__initialize_static_members();
