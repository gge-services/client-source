Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SGetSpyInfo = require("gge-module:export_C2SGetSpyInfo");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleStartAttackDialogProperties = require("gge-module:export_CastleStartAttackDialogProperties");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleNewMessageDialogProperties = require("gge-module:export_CastleNewMessageDialogProperties");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleSpyDialogProperties = require("gge-module:export_CastleSpyDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleOtherPlayerInfoPanel() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.OtherPlayerInfoPanel()) || this).itxt_name = __s3local0.textFieldManager.registerTextField(__s3local0.playerPanel.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_castleName = __s3local0.textFieldManager.registerTextField(__s3local0.playerPanel.txt_castleName, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_coordX = __s3local0.textFieldManager.registerTextField(__s3local0.playerPanel.txt_coordX, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_coordY = __s3local0.textFieldManager.registerTextField(__s3local0.playerPanel.txt_coordY, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOtherPlayerInfoPanel, __s1param0);
  CastleOtherPlayerInfoPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this._attackButton = new __dep_export_ButtonAttackComponent.ButtonAttackComponent(this.playerPanel.btn_attack);
    this._spyButton = new __dep_export_ButtonSpyComponent.ButtonSpyComponent(this.playerPanel.btn_spy);
    this.playerPanel.btn_message.mc_counter.visible = false;
    this.playerPanel.btn_message.toolTipText = "dialog_newMessage_sendMessage";
    this.playerPanel.btn_info.toolTipText = "ringmenu_playerInfo";
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SPY_DATA_CHANGED, this.bindFunction(this.onChangeSpyData));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeSpyData));
  };
  CastleOtherPlayerInfoPanel.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this.playerPanel.btn_attack:
          this.onAttackCastle();
          break;
        case this.playerPanel.btn_spy:
          this.onSpyCastle();
          break;
        case this.playerPanel.btn_message:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewMessageDialog.CastleNewMessageDialog, new __dep_export_CastleNewMessageDialogProperties.CastleNewMessageDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo.playerName));
          break;
        case this.playerPanel.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleOtherPlayerInfoPanel.prototype.show = function () {
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo, "OutpostMapobjectVO") || !(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.ownerInfo.playerID < 0)) {
      __s1param0.prototype.show.call(this);
      this.updateCastleInfo();
      this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateCastleInfo));
    }
  };
  CastleOtherPlayerInfoPanel.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateCastleInfo));
  };
  CastleOtherPlayerInfoPanel.prototype.onChangeSpyData = function (__s16param0) {
    this._spyButton.targetWMO = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
    this._spyButton.initSpyButton(true);
  };
  CastleOtherPlayerInfoPanel.prototype.updateCastleInfo = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      this.itxt_name.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.ownerInfo.playerName;
      this.itxt_castleName.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaNameString;
      this.itxt_coordX.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.absAreaPosX.toString();
      this.itxt_coordY.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.absAreaPosY.toString();
      this._attackButton.targetWMO = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
      this._attackButton.initAttackButton(true);
      this._spyButton.targetWMO = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
      this._spyButton.initSpyButton(true);
      var __s18local0 = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
      var __s18local1 = __dep_export_CastleModel.CastleModel.userData.playerID == __dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo.playerID;
      var __s18local2 = __dep_export_CastleModel.CastleModel.userData.canWriteMessageTo(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo) && !__s18local1;
      var __s18local3 = __s18local0 && !__s18local1;
      var __s18local4 = __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT);
      var __s18local5 = !!__s18local4 && __s18local4.currentPlayerAmount >= __s18local4.dailyLimit;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.playerPanel.btn_message, !__s18local5 && __s18local2 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages);
      this.playerPanel.btn_message.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.playerPanel.btn_message) ? __dep_export_CastleModel.CastleModel.userData.getMessageTooltip(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo) : __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
      if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages) {
        this.playerPanel.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
      }
      if (__s18local5) {
        this.playerPanel.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
      }
      this.playerPanel.btn_info.enableButton = __s18local3;
      this.playerPanel.btn_info.toolTipText = __s18local3 ? "ringmenu_playerInfo" : __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    }
  };
  CastleOtherPlayerInfoPanel.prototype.onAttackCastle = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff.CombatConst.MIN_ATTACK_PLAYER_LEVEL) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attackWithLowLevel", [__dep_exact_26a421b704832cff.CombatConst.MIN_ATTACK_PLAYER_LEVEL]), 4, null, null, false));
    } else if (__dep_export_CastleModel.CastleModel.userData.noobProtected || __dep_export_CastleModel.CastleModel.userData.isInPeaceMode) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attackWithNoobProtection"), 4, this.bindFunction(this.showAttackDialog)));
    } else {
      this.showAttackDialog();
    }
  };
  CastleOtherPlayerInfoPanel.prototype.showAttackDialog = function (__s28param0 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, new __dep_export_CastleStartAttackDialogProperties.CastleStartAttackDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK));
  };
  CastleOtherPlayerInfoPanel.prototype.onSpyCastle = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyDialog.CastleSpyDialog, new __dep_export_CastleSpyDialogProperties.CastleSpyDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyInfo.C2SGetSpyInfo(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.absAreaPosX, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.absAreaPosY, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID));
  };
  CastleOtherPlayerInfoPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth / 2;
      this.disp.y = -1;
    }
  };
  Object.defineProperty(CastleOtherPlayerInfoPanel.prototype, "playerPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleOtherPlayerInfoPanel.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SPY_DATA_CHANGED, this.bindFunction(this.onChangeSpyData));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeSpyData));
  };
  CastleOtherPlayerInfoPanel.__initialize_static_members = function () {
    CastleOtherPlayerInfoPanel.NAME = "CastleOtherPlayerInfoPanel";
  };
  return CastleOtherPlayerInfoPanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleOtherPlayerInfoPanel = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonAttackComponent = require("gge-module:export_ButtonAttackComponent");
var __dep_export_ButtonSpyComponent = require("gge-module:export_ButtonSpyComponent");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleNewMessageDialog = require("gge-module:export_CastleNewMessageDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
__s0local0.__initialize_static_members();
