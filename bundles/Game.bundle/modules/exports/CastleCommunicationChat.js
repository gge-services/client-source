Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleChatEvent = require("gge-module:export_CastleChatEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleChatVO = require("gge-module:export_CastleChatVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleCommunicationChat(__s3param0) {
    var __s3local0 = this;
    __s3local0._memberListStartIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_onlineTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_online"));
    __s3local0._itxt_miniChatVisible = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_miniChatVisible, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_minichat"));
    __s3local0._itxt_miniChatVisible.autoFitToBounds = true;
    __s3local0.subLayerDisp.mc_chatComponent.btn_enter.toolTipText = "dialog_alliance_communication_sendAnswer_button";
    __s3local0._miniChatCheckBox = __s3local0.subLayerDisp.cbx_miniChatVisible;
    __dep_export_ButtonHelper.ButtonHelper.initCheckBox(__s3local0._miniChatCheckBox);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_down]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCommunicationChat, __s1param0);
  CastleCommunicationChat.prototype.show = function (__s5param0) {
    this.chatComponent ||= new __dep_export_CastleChatComponent.CastleChatComponent(new __dep_export_CastleChatVO.CastleChatVO(this.subLayerDisp.mc_chatComponent.txt_chat, this.subLayerDisp.mc_chatComponent.txt_input, this.subLayerDisp.mc_chatComponent.btn_enter, this.subLayerDisp.mc_chatComponent.mc_blockChat, this.subLayerDisp.mc_chatComponent.btn_up, this.subLayerDisp.mc_chatComponent.btn_down, this.subLayerDisp.mc_chatComponent.btn_slider, this.subLayerDisp.mc_chatComponent.mc_sliderLine));
    this.chatComponent.onShow();
    if (!__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this.chatComponent.focusInput();
    }
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._miniChatCheckBox, __dep_export_CastleModel.CastleModel.settingsData.miniChatVisible);
    __dep_export_CastleModel.CastleModel.chatData.isBigAllianceChatOpen = true;
    __s1param0.prototype.show.call(this, __s5param0);
    this.fillOnlineList();
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceInfoUpdated));
    __dep_export_CastleModel.CastleModel.chatData.addEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessage));
  };
  CastleCommunicationChat.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.chatData.isBigAllianceChatOpen = false;
    this.chatComponent.onHide();
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceInfoUpdated));
    __dep_export_CastleModel.CastleModel.chatData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessage));
    __s1param0.prototype.hide.call(this);
  };
  CastleCommunicationChat.prototype.onAllianceInfoUpdated = function (__s10param0) {
    this.fillOnlineList();
  };
  CastleCommunicationChat.prototype.onNewMessage = function (__s12param0) {
    this.fillOnlineList();
  };
  CastleCommunicationChat.prototype.onMouseUp = function (__s14param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s14param0.target, "CastleAllianceChatOnlineMemberItem")) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s14param0.target.properties.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
    switch (__s14param0.target) {
      case this.subLayerDisp.btn_down:
        this._memberListStartIndex++;
        this.fillOnlineList();
        break;
      case this.subLayerDisp.btn_up:
        this._memberListStartIndex--;
        this.fillOnlineList();
        break;
      case this._miniChatCheckBox:
        __dep_export_CastleModel.CastleModel.settingsData.miniChatVisible = !__dep_export_CastleModel.CastleModel.settingsData.miniChatVisible;
        __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._miniChatCheckBox, __dep_export_CastleModel.CastleModel.settingsData.miniChatVisible);
    }
  };
  CastleCommunicationChat.prototype.fillOnlineList = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_onlineListHolder);
    var __s18local0 = this._params[0].getOnlineUserList();
    if (__s18local0.length <= CastleCommunicationChat.MEMBER_PER_PAGE) {
      this._memberListStartIndex = 0;
    }
    this.subLayerDisp.btn_up.visible = this._memberListStartIndex > 0;
    this.subLayerDisp.btn_down.visible = __s18local0.length - this._memberListStartIndex > CastleCommunicationChat.MEMBER_PER_PAGE;
    for (var __s18local1 = 0; __s18local1 < CastleCommunicationChat.MEMBER_PER_PAGE; ++__s18local1) {
      var __s18local2 = this._memberListStartIndex + __s18local1;
      if (__s18local2 >= __s18local0.length) {
        break;
      }
      var __s18local3 = new Library.CastleInterfaceElements.CastleAllianceChatOnlineMemberItem();
      __s18local3.mouseChildren = false;
      this.textFieldManager.registerTextField(__s18local3.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s18local0[__s18local2].playerName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      __s18local3.properties = __s18local0[__s18local2];
      __s18local3.y = __s18local1 * CastleCommunicationChat.MEMBERITEM_HEIGHT;
      this.subLayerDisp.mc_onlineListHolder.addChild(__s18local3);
    }
  };
  CastleCommunicationChat.prototype.onMouseOver = function (__s24param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s24param0.target, "CastleAllianceChatOnlineMemberItem")) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleCommunicationChat.__initialize_static_members = function () {
    CastleCommunicationChat.MEMBERITEM_HEIGHT = 15;
    CastleCommunicationChat.MEMBER_PER_PAGE = 18;
  };
  return CastleCommunicationChat;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleCommunicationChat = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleChatComponent = require("gge-module:export_CastleChatComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
