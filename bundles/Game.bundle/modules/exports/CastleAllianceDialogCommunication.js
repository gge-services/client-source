Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetAllianceUnreadTopicsCount = require("gge-module:export_C2SGetAllianceUnreadTopicsCount");
var __dep_export_CastleAllianceForumEvent = require("gge-module:export_CastleAllianceForumEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogCommunication(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentCategory = CastleAllianceDialogCommunication.CAT_NONE;
    __s3local0._isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogCommunication, __s1param0);
  CastleAllianceDialogCommunication.prototype.init = function () {
    this._subLayers = new Map();
    this._subLayers.set(CastleAllianceDialogCommunication.CAT_CHAT, new __dep_export_CastleCommunicationChat.CastleCommunicationChat(this.subLayerDisp.cat_chat));
    this._subLayers.set(CastleAllianceDialogCommunication.CAT_FORUM, new __dep_export_CastleCommunicationForum.CastleCommunicationForum(this.subLayerDisp.cat_forum));
    this._categoryButtonNames = new Map();
    this._categoryButtonNames.set(CastleAllianceDialogCommunication.CAT_CHAT, "btn_cat_chat");
    this._categoryButtonNames.set(CastleAllianceDialogCommunication.CAT_FORUM, "btn_cat_forum");
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_cat_chat.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allianceChat")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_cat_forum.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_communication_forum")).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.subLayerDisp.btn_cat_chat, 1.02);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.subLayerDisp.btn_cat_forum, 1.02);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.subLayerDisp.btn_cat_chat, this.subLayerDisp.btn_cat_forum]);
  };
  CastleAllianceDialogCommunication.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.castleForumData.addEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED, this.bindFunction(this.onTopicsCountUpdated));
    this.subLayerDisp.btn_cat_chat.mc_messageCounter.visible = false;
    this.subLayerDisp.btn_cat_forum.mc_messageCounter.visible = false;
    this.changeCategory(CastleAllianceDialogCommunication.CAT_CHAT);
    this.subLayerDisp.btn_cat_forum.visible = !__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay();
  };
  CastleAllianceDialogCommunication.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.castleForumData.removeEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED, this.bindFunction(this.onTopicsCountUpdated));
    if (this._currentCategory != CastleAllianceDialogCommunication.CAT_NONE) {
      this._subLayers.get(this._currentCategory).hide();
      this._currentCategory = CastleAllianceDialogCommunication.CAT_NONE;
    }
  };
  CastleAllianceDialogCommunication.prototype.requestTopicCountData = function () {
    this._isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceUnreadTopicsCount.C2SGetAllianceUnreadTopicsCount());
  };
  CastleAllianceDialogCommunication.prototype.onTopicsCountUpdated = function (__s14param0 = null) {
    this._isWaitingForServerMessage = false;
    var __s14local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.castleForumData.unreadTopicsCount);
    this.subLayerDisp.btn_cat_forum.mc_messageCounter.visible = this._currentCategory != CastleAllianceDialogCommunication.CAT_FORUM && __s14local0 > 0;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_cat_forum.mc_messageCounter.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO("" + __s14local0));
  };
  CastleAllianceDialogCommunication.prototype.changeCategory = function (__s16param0) {
    if (this._currentCategory != __s16param0) {
      if (this._currentCategory != CastleAllianceDialogCommunication.CAT_NONE) {
        this._subLayers.get(this._currentCategory).hide();
      }
      this._subLayers.get(__s16param0).show(this._params);
      this._currentCategory = __s16param0;
      if (this._currentCategory != CastleAllianceDialogCommunication.CAT_FORUM) {
        this.requestTopicCountData();
      } else {
        this.onTopicsCountUpdated();
      }
      this.updateCategoryButtons();
    }
  };
  CastleAllianceDialogCommunication.prototype.updateCategoryButtons = function () {
    if (this._categoryButtonNames != null) {
      for (var __s22local0 = 0, __s22local1 = Array.from(this._categoryButtonNames.keys()); __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          var __s22local3 = this._categoryButtonNames.get(__s22local2);
          var __s22local4 = __s22local2 == this._currentCategory;
          this.subLayerDisp[__s22local3].mc_background.gotoAndStop(__s22local4 ? 1 : 2);
        }
      }
    }
  };
  CastleAllianceDialogCommunication.prototype.onClick = function (__s28param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target)) {
      switch (__s28param0.target) {
        case this.subLayerDisp.btn_cat_chat:
          this.changeCategory(CastleAllianceDialogCommunication.CAT_CHAT);
          break;
        case this.subLayerDisp.btn_cat_forum:
          this.changeCategory(CastleAllianceDialogCommunication.CAT_FORUM);
      }
    }
  };
  CastleAllianceDialogCommunication.prototype.showHelp = function () {
    switch (this._currentCategory) {
      case CastleAllianceDialogCommunication.CAT_CHAT:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceChat"));
        break;
      case CastleAllianceDialogCommunication.CAT_FORUM:
        this._subLayers.get(CastleAllianceDialogCommunication.CAT_FORUM).showHelp();
    }
  };
  CastleAllianceDialogCommunication.__initialize_static_members = function () {
    CastleAllianceDialogCommunication.CAT_CHAT = "cat_chat";
    CastleAllianceDialogCommunication.CAT_FORUM = "cat_forum";
    CastleAllianceDialogCommunication.CAT_NONE = "cat_none";
  };
  return CastleAllianceDialogCommunication;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceDialogCommunication = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCommunicationChat = require("gge-module:export_CastleCommunicationChat");
var __dep_export_CastleCommunicationForum = require("gge-module:export_CastleCommunicationForum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
