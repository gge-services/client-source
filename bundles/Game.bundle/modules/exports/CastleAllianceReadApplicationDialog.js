Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceAnswerApplicationVO = require("gge-module:export_C2SAllianceAnswerApplicationVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceReadApplicationDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceReadApplicationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceReadApplicationDialog, __s1param0);
  CastleAllianceReadApplicationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_accept, this.dialogDisp.btn_deny, this.dialogDisp.btn_close, this.dialogDisp.btn_playerInfo, this.dialogDisp.btn_help]);
  };
  CastleAllianceReadApplicationDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._scrollComponent ||= new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_application, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.dialogDisp.btn_playerInfo.toolTipText = "ringmenu_playerInfo";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_read_messageFrom"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_topic")]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_applicationHeader"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_readAllianceApplicationInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_readApplicationInfo_confirm"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_senderrName, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.applicationVO.playerOwnerInfo.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_application, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.applicationVO.applicationText));
    this._scrollComponent.scrollToStart();
    this._scrollComponent.onShow();
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleAllianceReadApplicationDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this._scrollComponent.onHide();
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleAllianceReadApplicationDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_accept:
        this.onAcceptApplication();
        this.hide();
        break;
      case this.dialogDisp.btn_deny:
        this.onDenyApplication();
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_playerInfo:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.dialogProperties.applicationVO.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_alliance_accept_application"));
    }
  };
  CastleAllianceReadApplicationDialog.prototype.onDenyApplication = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceAnswerApplicationVO.C2SAllianceAnswerApplicationVO(this.dialogProperties.applicationVO.playerID, false));
  };
  CastleAllianceReadApplicationDialog.prototype.onAcceptApplication = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceAnswerApplicationVO.C2SAllianceAnswerApplicationVO(this.dialogProperties.applicationVO.playerID, true));
  };
  Object.defineProperty(CastleAllianceReadApplicationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceReadApplicationDialog.__initialize_static_members = function () {
    CastleAllianceReadApplicationDialog.NAME = "CastleReadAllianceApplicationEx";
  };
  return CastleAllianceReadApplicationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceReadApplicationDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
