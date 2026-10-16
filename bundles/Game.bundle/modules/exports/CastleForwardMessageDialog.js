Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_C2SForwardBattleLogVO = require("gge-module:export_C2SForwardBattleLogVO");
var __dep_export_C2SForwardSpyLogVO = require("gge-module:export_C2SForwardSpyLogVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_ForwardMessageListItem = require("gge-module:export_ForwardMessageListItem");
var __dep_export_ForwardMessageListItemVO = require("gge-module:export_ForwardMessageListItemVO");
var __s0local0 = function (__s1param0) {
  function CastleForwardMessageDialog() {
    var __s3local0 = this;
    __s3local0._dataLoaded = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleForwardMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForwardMessageDialog, __s1param0);
  CastleForwardMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._dataLoaded = false;
    this.dialogDisp.btn_honor_left.toolTipText = "honor";
    this.dialogDisp.btn_honor_right.toolTipText = "honor";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_allRight.toolTipText = "dialog_forwardMessage_addAll";
    this.dialogDisp.btn_allLeft.toolTipText = "dialog_forwardMessage_removeAll";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_forwardlog_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_member, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_newMessage_messageTo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level_right, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level_left, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name_right, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name_left, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name"));
    this._messageListLeft = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(this.dialogDisp.mc_container_left);
    this._messageListRight = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(this.dialogDisp.mc_container_right);
    this._messageListLeft.scrollItemClass = __dep_export_ForwardMessageListItem.ForwardMessageListItem;
    this._messageListRight.scrollItemClass = __dep_export_ForwardMessageListItem.ForwardMessageListItem;
    this._messageListLeft.initList();
    this._messageListRight.initList();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_forward, this.dialogDisp.btn_cancel, this.dialogDisp.mc_container_left.btn_up, this.dialogDisp.mc_container_left.btn_down, this.dialogDisp.mc_container_right.btn_up, this.dialogDisp.mc_container_right.btn_down, this.dialogDisp.btn_allRight, this.dialogDisp.btn_allLeft]);
  };
  CastleForwardMessageDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (!this._dataLoaded) {
      __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendCommandVOAndWait(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
      return;
    }
    this.deleteAllReceivers();
    this.checkEnableForwardButton();
    if (this._dataLoaded) {
      this._messageListLeft.addEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
      this._messageListRight.addEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
    }
  };
  CastleForwardMessageDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this._messageListLeft.removeEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
    this._messageListRight.removeEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onClickItem));
    this._dataLoaded = false;
  };
  CastleForwardMessageDialog.prototype.onAllianceDataUpdate = function (__s13param0) {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    this._dataLoaded = true;
    this.show();
  };
  CastleForwardMessageDialog.prototype.onClickItem = function (__s15param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0.originTarget, "MovieClip")) {
      if (__s15param0.originTarget.name == "btn_moveRight") {
        this.selectItem(__s15param0.scrollItem.scrollItemVO);
      } else if (__s15param0.originTarget.name == "btn_moveLeft") {
        this.deselectItem(__s15param0.scrollItem.scrollItemVO);
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s15param0.scrollItem.scrollItemVO.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleForwardMessageDialog.prototype.fillList = function (__s21param0, __s21param1) {
    var __s21local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.memberList.sort(this.bindFunction(this.compareFunction));
    if (__s21local0 != null) {
      for (var __s21local1 = 0, __s21local2 = __s21local0; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined && __s21local3.playerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
          var __s21local4 = new __dep_export_ForwardMessageListItemVO.ForwardMessageListItemVO();
          __s21local4.playerID = __s21local3.playerID;
          __s21local4.name = __s21local3.playerName;
          __s21local4.honor = __s21local3.honor;
          __s21local4.level = __s21local3.playerLevel;
          __s21local4.isReceiver = __s21param1;
          __s21param0.pushContent(__s21local4);
        }
      }
    }
    __s21param0.initList();
  };
  CastleForwardMessageDialog.prototype.clearList = function (__s27param0) {
    __s27param0.clear();
    __s27param0.initList();
  };
  CastleForwardMessageDialog.prototype.compareFunction = function (__s29param0, __s29param1) {
    if (__s29param0.playerLevel == __s29param1.playerLevel) {
      return __s29param1.honor - __s29param0.honor;
    } else {
      return __s29param1.playerLevel - __s29param0.playerLevel;
    }
  };
  CastleForwardMessageDialog.prototype.onClick = function (__s33param0) {
    __s1param0.prototype.onClick.call(this, __s33param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      switch (__s33param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_forward:
          this.sendMessage();
          break;
        case this.dialogDisp.btn_allLeft:
          this.deleteAllReceivers();
          break;
        case this.dialogDisp.btn_allRight:
          this.selectAll();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
      this.checkEnableForwardButton();
    }
  };
  CastleForwardMessageDialog.prototype.sendMessage = function () {
    var __s37local0;
    var __s37local1;
    switch (this.dialogProperties.messageType) {
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG:
        __s37local1 = __dep_export_C2SForwardBattleLogVO.C2SForwardBattleLogVO;
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SPY_PLAYER:
        __s37local1 = __dep_export_C2SForwardSpyLogVO.C2SForwardSpyLogVO;
    }
    if (__s37local1 && this._messageListRight.voList) {
      __s37local0 = new Array(this._messageListRight.voList.length);
      for (var __s37local2 = 0; __s37local2 < this._messageListRight.voList.length; ++__s37local2) {
        __s37local0[__s37local2] = this._messageListRight.voList[__s37local2].playerID;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __s37local1(__s37local0, this.dialogProperties.messageID));
    }
    this.hide();
  };
  CastleForwardMessageDialog.prototype.deleteAllReceivers = function () {
    this.clearList(this._messageListLeft);
    this.clearList(this._messageListRight);
    this.fillList(this._messageListLeft, false);
  };
  CastleForwardMessageDialog.prototype.selectAll = function () {
    this.clearList(this._messageListLeft);
    this.clearList(this._messageListRight);
    this.fillList(this._messageListRight, true);
  };
  CastleForwardMessageDialog.prototype.selectItem = function (__s47param0) {
    this._messageListLeft.removeContent(__s47param0);
    __s47param0.isReceiver = true;
    this._messageListRight.pushContent(__s47param0);
    this._messageListLeft.initList(this._messageListLeft.currentStartIndex);
    this._messageListRight.initList(this._messageListRight.currentStartIndex);
  };
  CastleForwardMessageDialog.prototype.checkEnableForwardButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_forward, this._messageListRight.voList && this._messageListRight.voList.length > 0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_forward)) {
      this.dialogDisp.btn_forward.toolTipText = "";
    } else {
      this.dialogDisp.btn_forward.toolTipText = "dialog_forwardMessage_addRecipient";
    }
  };
  CastleForwardMessageDialog.prototype.deselectItem = function (__s53param0) {
    this._messageListRight.removeContent(__s53param0);
    __s53param0.isReceiver = false;
    this._messageListLeft.pushContent(__s53param0);
    this._messageListLeft.initList(this._messageListLeft.currentStartIndex);
    this._messageListRight.initList(this._messageListRight.currentStartIndex);
  };
  CastleForwardMessageDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_forwardlog_help"));
  };
  Object.defineProperty(CastleForwardMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForwardMessageDialog.__initialize_static_members = function () {
    CastleForwardMessageDialog.NAME = "CastleForwardMessageExt";
  };
  return CastleForwardMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleForwardMessageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
