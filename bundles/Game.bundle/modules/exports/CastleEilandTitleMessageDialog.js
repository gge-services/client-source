Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SReadMessagesVO = require("gge-module:export_C2SReadMessagesVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleEilandRankingDialogProperties = require("gge-module:export_CastleEilandRankingDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleEilandTitleMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEilandTitleMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleMessageDialog, __s1param0);
  CastleEilandTitleMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_cancel, this.dialogDisp.btn_titleMenu]);
    this.dialogDisp.btn_titleMenu.toolTipText = "dialog_eiland_titleMessage_titleOverview_tooltip";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleEilandTitleMessageDialog.prototype.applyProperties = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.messageVO.subject)).autoFitToBounds = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReadMessagesVO.C2SReadMessagesVO(this.dialogProperties.messageVO.messageID));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onGetTitleData));
  };
  CastleEilandTitleMessageDialog.prototype.onGetTitleData = function (__s9param0) {
    this.parseParams(__s9param0.params);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onGetTitleData));
  };
  CastleEilandTitleMessageDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onGetTitleData));
  };
  CastleEilandTitleMessageDialog.prototype.parseParams = function (__s13param0) {
    this.paramArray = __s13param0[0].split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.paramArray[0]);
    this.titleVO = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s13local0);
    this.kingName = this.paramArray[1];
  };
  CastleEilandTitleMessageDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_eiland_titleMessage"));
        break;
      case this.dialogDisp.btn_titleMenu:
        this.hide();
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandRankingDialog.CastleEilandRankingDialog, new __dep_export_CastleEilandRankingDialogProperties.CastleEilandRankingDialogProperties(__dep_export_CastleEilandRankingDialogProperties.CastleEilandRankingDialogProperties.SUBLAYER_TITLE));
    }
  };
  Object.defineProperty(CastleEilandTitleMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandTitleMessageDialog.prototype.adjustTextSize = function () {
    this.dialogDisp.txt_copy.wordWrap = true;
    this.dialogDisp.txt_copy.multiline = true;
    this.dialogDisp.txt_copy.autoSize = __dep_exact_81dacdf05bd32292.TextFieldAutoSize.CENTER;
  };
  CastleEilandTitleMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleMessageDialog.NAME = "CastleEilandTitleMessage";
  };
  return CastleEilandTitleMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEilandTitleMessageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEilandRankingDialog = require("gge-module:export_CastleEilandRankingDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
