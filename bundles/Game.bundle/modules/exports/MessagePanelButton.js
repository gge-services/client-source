Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleInboxDialogProperties = require("gge-module:export_CastleInboxDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function MessagePanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessagePanelButton, __s1param0);
  MessagePanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onMessagesUpdated));
    this.listenOnXPChanged();
  };
  MessagePanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onMessagesUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  MessagePanelButton.prototype.updateOnVisible = function () {
    __s1param0.prototype.updateOnVisible.call(this);
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnreadUnarchivedMessages([]));
    this.setAmount(__s9local0 > 0, __s9local0);
  };
  Object.defineProperty(MessagePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Message_Relicus;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  MessagePanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES;
  };
  MessagePanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_messages";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES]);
    }
  };
  MessagePanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog, new __dep_export_CastleInboxDialogProperties.CastleInboxDialogProperties());
  };
  MessagePanelButton.prototype.onMessagesUpdated = function (__s23param0) {
    this.update();
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  return MessagePanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.MessagePanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleMessageInboxDialog = require("gge-module:export_CastleMessageInboxDialog");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
