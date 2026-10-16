Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceDeleteTopicAnswerVO = require("gge-module:export_C2SAllianceDeleteTopicAnswerVO");
var __dep_export_C2SAllianceTopicDeleteVO = require("gge-module:export_C2SAllianceTopicDeleteVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleForumDeleteDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleForumDeleteDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumDeleteDialog, __s1param0);
  CastleForumDeleteDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
  };
  CastleForumDeleteDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    var __s7local0 = "";
    var __s7local1 = "";
    switch (this.dialogProperties.dialogType) {
      case CastleForumDeleteDialog.TYPE_TOPIC:
        __s7local0 = "dialog_alliance_communication_eraseTopic_header";
        __s7local1 = "dialog_alliance_communication_eraseTopic_text";
        break;
      case CastleForumDeleteDialog.TYPE_POST:
        __s7local0 = "dialog_alliance_communication_eraseAnswer_header";
        __s7local1 = "dialog_alliance_communication_eraseAnswer_text";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local1));
  };
  CastleForumDeleteDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_ok:
        if (this.dialogProperties.dialogType == CastleForumDeleteDialog.TYPE_TOPIC) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceTopicDeleteVO.C2SAllianceTopicDeleteVO(this.dialogProperties.topicId));
        } else if (this.dialogProperties.dialogType == CastleForumDeleteDialog.TYPE_POST) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceDeleteTopicAnswerVO.C2SAllianceDeleteTopicAnswerVO(this.dialogProperties.topicId, this.dialogProperties.postId));
        }
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleForumDeleteDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumDeleteDialog.__initialize_static_members = function () {
    CastleForumDeleteDialog.NAME = "CastleForumDeleteTopicEx";
    CastleForumDeleteDialog.TYPE_TOPIC = "typeTopic";
    CastleForumDeleteDialog.TYPE_POST = "typePost";
  };
  return CastleForumDeleteDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleForumDeleteDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
