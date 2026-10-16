Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceTopicCreateVO = require("gge-module:export_C2SAllianceTopicCreateVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleForumVisibilityDialogProperties = require("gge-module:export_CastleForumVisibilityDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleForumNewTopic(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._topicNameText = "";
    __s3local0._contentText = "";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._parentLayer = __s3param1;
    __s3local0._itxt_topicName = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_topicName, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_communication_text_title")));
    __s3local0._itxt_content = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_content, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0._itxt_topicName.change.add(__s3local0.bindFunction(__s3local0.onTopicNameTextChanged));
    __s3local0._itxt_content.change.add(__s3local0.bindFunction(__s3local0.onContentTextChanged));
    __s3local0._itxt_topicName.maxChars = __dep_exact_26a421b704832cff.AllianceConst.MAX_TOPIC_TEXT;
    __s3local0._itxt_content.maxChars = __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLY_TEXT;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_communication_newTopic_button"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_submit.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_communication_sendTopic_button")).autoFitToBounds = true;
    __s3local0.subLayerDisp.btn_back.toolTipText = "dialog_alliance_communication_button_toOverview";
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_visibility.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_communication_selectRanks_button")).autoFitToBounds = true;
    __s3local0.subLayerDisp.btn_visibility.toolTipText = "dialog_alliance_communication_selectRanks_tooltip";
    __s3local0._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(__s3local0.subLayerDisp.txt_content, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_down, __s3local0.subLayerDisp.btn_slider, __s3local0.subLayerDisp.mc_slider));
    __s3local0._scrollComponent.hideArrowsOnScrollToEdges = true;
    __s3local0._scrollComponent.invisibleOnFit = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_back, __s3local0.subLayerDisp.btn_visibility, __s3local0.subLayerDisp.btn_submit, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_slider]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumNewTopic, __s1param0);
  CastleForumNewTopic.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this._itxt_topicName.clearText();
    this._itxt_content.clearText();
    CastleForumNewTopic.visibleRankingGroups = __dep_export_CastleAllianceForumData.CastleAllianceForumData.getPreselectedTopicVisibility();
    this.addEventListener();
    this.updateSubmitButton();
    this._scrollComponent.onShow();
    this._itxt_topicName.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_communication_text_title");
  };
  CastleForumNewTopic.prototype.addEventListener = function () {
    if (this._itxt_topicName.keyUp.numListeners <= 0) {
      this._itxt_topicName.focusIn.add(this.bindFunction(this.onFocusInTopicName));
      this._itxt_topicName.focusOut.add(this.bindFunction(this.onFocusOutTopicName));
    }
  };
  CastleForumNewTopic.prototype.onFocusInTopicName = function (__s10param0) {
    if (this._itxt_topicName.text == __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_communication_text_title")) {
      this._itxt_topicName.clearText();
    }
    this._itxt_topicName.setSelection(0, this._itxt_topicName.text.length);
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.onFocusOutTopicName = function (__s13param0) {
    if (this._itxt_topicName.text == "") {
      this._itxt_topicName.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_communication_text_title");
    }
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.onTopicNameTextChanged = function (__s16param0) {
    if (__dep_export_CastleAllianceForumData.CastleAllianceForumData.getForumValidText(this._itxt_topicName.text).length > __dep_exact_26a421b704832cff.AllianceConst.MAX_TOPIC_TEXT) {
      this._itxt_topicName.textContentVO.stringValue = this._topicNameText;
    } else {
      this._topicNameText = this._itxt_topicName.text;
    }
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.onContentTextChanged = function (__s20param0) {
    if (__dep_export_CastleAllianceForumData.CastleAllianceForumData.getForumValidText(this._itxt_content.text).length > __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLY_TEXT) {
      this._itxt_content.textContentVO.stringValue = this._contentText;
    } else {
      this._contentText = this._itxt_content.text;
    }
    this.updateSubmitButton();
  };
  CastleForumNewTopic.prototype.getTopicNameText = function () {
    var __s24local0 = this._itxt_topicName.text;
    if (__s24local0 == __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_communication_text_title")) {
      return "";
    } else {
      return __s24local0;
    }
  };
  CastleForumNewTopic.prototype.updateSubmitButton = function () {
    var __s28local0 = __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasValidTopicName(this.getTopicNameText());
    var __s28local1 = __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasValidPostText(this._itxt_content.text);
    var __s28local2 = true;
    if (this.canSubmitTopic) {
      this.subLayerDisp.btn_submit.toolTipText = null;
    } else {
      __s28local2 = false;
      this.subLayerDisp.btn_submit.toolTipText = !__s28local0 && __s28local1 ? {
        t: "dialog_alliance_communication_shortTitle_tooltip",
        p: [__dep_exact_26a421b704832cff.AllianceConst.MIN_FORUM_TEXT_LENGTH]
      } : __s28local0 && !__s28local1 ? {
        t: "dialog_alliance_communication_shortText_tooltip",
        p: [__dep_exact_26a421b704832cff.AllianceConst.MIN_FORUM_TEXT_LENGTH]
      } : {
        t: "dialog_alliance_communication_shortTextTitle_tooltip",
        p: [__dep_exact_26a421b704832cff.AllianceConst.MIN_FORUM_TEXT_LENGTH]
      };
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_submit, __s28local2);
  };
  Object.defineProperty(CastleForumNewTopic.prototype, "canSubmitTopic", {
    get: function () {
      return __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasValidTopicName(this.getTopicNameText()) && __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasValidPostText(this._itxt_content.text);
    },
    enumerable: true,
    configurable: true
  });
  CastleForumNewTopic.prototype.hide = function () {
    this._scrollComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleForumNewTopic.prototype.onClick = function (__s36param0) {
    __s1param0.prototype.onClick.call(this, __s36param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      switch (__s36param0.target) {
        case this.subLayerDisp.btn_submit:
          if (this.canSubmitTopic) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceTopicCreateVO.C2SAllianceTopicCreateVO(this.getTopicNameText(), CastleForumNewTopic.visibleRankingGroups, this._itxt_content.text));
            this._parentLayer.changeCategory(__dep_export_CastleCommunicationForum.CastleCommunicationForum.CAT_OVERVIEW);
          }
          break;
        case this.subLayerDisp.btn_back:
          this._parentLayer.changeCategory(__dep_export_CastleCommunicationForum.CastleCommunicationForum.CAT_OVERVIEW);
          break;
        case this.subLayerDisp.btn_visibility:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleForumVisibilityDialog.CastleForumVisibilityDialog, new __dep_export_CastleForumVisibilityDialogProperties.CastleForumVisibilityDialogProperties(CastleForumNewTopic.visibleRankingGroups));
      }
    }
  };
  return CastleForumNewTopic;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleForumNewTopic = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleForumVisibilityDialog = require("gge-module:export_CastleForumVisibilityDialog");
var __dep_export_CastleCommunicationForum = require("gge-module:export_CastleCommunicationForum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
