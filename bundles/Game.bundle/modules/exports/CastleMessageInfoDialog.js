Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMessageTipDialog = require("gge-module:export_CastleMessageTipDialog");
var __s0local0 = function (__s1param0) {
  function CastleMessageInfoDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageInfoDialog, __s1param0);
  Object.defineProperty(CastleMessageInfoDialog.prototype, "infoDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInfoDialog.prototype, "messageHelpId", {
    get: function () {
      return "dialog_info_message_help_" + this.infoDialogProperties.infoId;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog.prototype, "messageHelpId").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInfoDialog.prototype, "messageDescriptionId", {
    get: function () {
      return "dialog_info_message_description_" + this.infoDialogProperties.infoId;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog.prototype, "messageDescriptionId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInfoDialog.prototype, "messageTitleId", {
    get: function () {
      return "dialog_info_message_title_" + this.infoDialogProperties.infoId;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog.prototype, "messageTitleId").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageInfoDialog;
}(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog);
exports.CastleMessageInfoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
