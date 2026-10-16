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
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstMessage = require("gge-module:export_ClientConstMessage");
var __dep_export_C2SAllianceSendApplicationVO = require("gge-module:export_C2SAllianceSendApplicationVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __dep_export_LetterLimiter = require("gge-module:export_LetterLimiter");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleApplyForMembershipDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleApplyForMembershipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleApplyForMembershipDialog, __s1param0);
  CastleApplyForMembershipDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_send, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_help]);
  };
  CastleApplyForMembershipDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_messageTo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_topic")]));
    this.itxt_receiverName = this.textFieldManager.registerTextField(this.dialogDisp.txt_receiverName, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.allianceVO.allianceName));
    this.itxt_header = this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_applicationHeader"));
    this._itxt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_yourtext = this.textFieldManager.registerTextField(this.dialogDisp.txt_yourtext, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_yourText"));
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._letterLimiter = new __dep_export_LetterLimiter.LetterLimiter(this.dialogDisp.mc_letterLimit, this._itxt_input);
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_input, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    __dep_exact_9e901e8e2483a22f.BasicLayoutManager.getInstance().revertFullscreen();
    this._itxt_input.maxChars = __dep_exact_26a421b704832cff.MessageConst.MAX_LENGTH_TEXT;
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block);
    this._scrollComponent.onShow();
    this._itxt_input.change.add(this.bindFunction(this.updateSendButton));
    this.updateSendButton();
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleApplyForMembershipDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this._letterLimiter.addEventListeners();
  };
  CastleApplyForMembershipDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this._letterLimiter.removeEventListeners();
  };
  CastleApplyForMembershipDialog.prototype.updateSendButton = function (__s13param0 = null) {
    switch (__dep_exact_f855840627e6e145.int(__dep_export_ClientConstMessage.ClientConstMessage.isValidText(this._itxt_input.text))) {
      case __dep_export_ClientConstMessage.ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = {
          t: "dialog_alliance_communication_shortText_tooltip",
          p: [__dep_export_ClientConstMessage.ClientConstMessage.MINIMUM_LENGTH]
        };
        break;
      case __dep_export_ClientConstMessage.ClientConstMessage.TEXT_INVALID_MISSING_TEXT:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_missingText";
        break;
      case __dep_export_ClientConstMessage.ClientConstMessage.TEXT_VALID:
      default:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_send, true);
        this.dialogDisp.btn_send.toolTipText = "dialog_alliance_applyForMembership";
    }
  };
  CastleApplyForMembershipDialog.prototype.hideLoaded = function (__s16param0 = null) {
    this._scrollComponent.onHide();
    this._itxt_input.change.remove(this.bindFunction(this.updateSendButton));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleApplyForMembershipDialog.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      __s1param0.prototype.onClick.call(this, __s18param0);
      switch (__s18param0.target) {
        case this.dialogDisp.btn_send:
          this.onSendApplication();
          this.hide();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_alliance_application"));
      }
    }
  };
  CastleApplyForMembershipDialog.prototype.onSendApplication = function () {
    var __s22local0 = this._itxt_input.text;
    if (__s22local0 && __s22local0 != "") {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceSendApplicationVO.C2SAllianceSendApplicationVO(this.dialogProperties.allianceVO.allianceId, __s22local0));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_message"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_missingText")));
    }
  };
  Object.defineProperty(CastleApplyForMembershipDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleApplyForMembershipDialog.__initialize_static_members = function () {
    CastleApplyForMembershipDialog.NAME = "CastleApplyForMembershipEx";
  };
  return CastleApplyForMembershipDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleApplyForMembershipDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
