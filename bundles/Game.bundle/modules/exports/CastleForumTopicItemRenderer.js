Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleForumDeleteDialogProperties = require("gge-module:export_CastleForumDeleteDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleForumTopicItemRenderer(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._canDeleteTopicOrAnswer = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._categoryLayer = __s3param1;
    __s3local0.itemDisp.btn_deleteTopic.toolTipText = "dialog_alliance_communication_tooltip_eraseTopic";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.itemDisp.btn_deleteTopic);
    __s3local0.disp.changeTextFieldCacheScale(2);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumTopicItemRenderer, __s1param0);
  CastleForumTopicItemRenderer.prototype.onShow = function () {
    if (this._topicVO) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(this._topicVO.topicName)).autoFitToBounds = true;
      var __s5local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(this._topicVO.creationTimestamp);
      var __s5local1 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeStringFromDate(this._topicVO.creationTimestamp, __dep_export_CastleModel.CastleModel.languageData.getTextById, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_fromName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this._topicVO.author)).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_fromDate, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s5local0));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_fromTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s5local1));
      var __s5local2 = "";
      var __s5local3 = "";
      if (this._topicVO.lastPostTimestamp.valueOf() >= 0) {
        __s5local2 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(this._topicVO.lastPostTimestamp);
        __s5local3 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeStringFromDate(this._topicVO.lastPostTimestamp, __dep_export_CastleModel.CastleModel.languageData.getTextById, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
      }
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_lastPostName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this._topicVO.lastPosterName)).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_lastPostDate, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s5local2));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_lastPostTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s5local3));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_answer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_header_answers_number", ["" + this._topicVO.answerCount, "" + __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLIES_TO_TOPIC]));
    }
    this.updateBackground();
    this.updateRankFields();
    this.itemDisp.visible = true;
    this.itemDisp.btn_deleteTopic.visible = false;
    this._canDeleteTopicOrAnswer = __dep_exact_26a421b704832cff.AllianceConst.hasAdminRightsForTopicAndAnswers(__dep_export_CastleModel.CastleModel.userData.allianceRank, this.topicVO.authorRank) || this.topicVO.author == __dep_export_CastleModel.CastleModel.userData.userName;
    __s1param0.prototype.onShow.call(this);
  };
  CastleForumTopicItemRenderer.prototype.onHide = function () {
    this.itemDisp.visible = false;
    __s1param0.prototype.onHide.call(this);
  };
  CastleForumTopicItemRenderer.prototype.updateBackground = function () {
    var __s11local0 = CastleForumTopicItemRenderer.NORMAL_BACKGROUND_FRAME;
    var __s11local1 = "dialog_alliance_communication_topicRead_tooltip";
    if (this.topicVO) {
      if (this.topicVO.wasRead) {
        if (this.topicVO.answerCount >= __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLIES_TO_TOPIC) {
          __s11local0 = CastleForumTopicItemRenderer.FULL_TOPIC_BACKGROUND_FRAME;
          __s11local1 = "dialog_alliance_communication_topicFullRed_tooltip";
        }
      } else {
        __s11local0 = CastleForumTopicItemRenderer.NEW_POST_BACKGROUND_FRAME;
        __s11local1 = "dialog_alliance_communication_topicUnred_tooltip";
      }
    }
    this.itemDisp.mc_background.gotoAndStop(__s11local0);
    this.itemDisp.mc_toolTipMask.toolTipText = __s11local1;
  };
  CastleForumTopicItemRenderer.prototype.updateRankFields = function () {
    if (this.topicVO) {
      var __s17local0 = this.topicVO.visibleRankingGroups.slice().sort();
      var __s17local1 = __dep_exact_f855840627e6e145.int(__s17local0.indexOf(__dep_exact_26a421b704832cff.AllianceConst.RANKING_GROUP_LEADER));
      if (__s17local1 >= 0 && __s17local0.length > 1) {
        __s17local0.splice(__s17local1, 1);
      }
      if (__s17local0.length == __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT - 1)) {
        __s17local0.splice(2, 1);
      }
      for (var __s17local2 = 0; __s17local2 < CastleForumTopicItemRenderer.RANKFIELD_COUNT; ++__s17local2) {
        if (!(__s17local0[__s17local2] < 0) && !(__s17local0[__s17local2] > __dep_exact_26a421b704832cff.AllianceConst.RANKING_GROUP_APPLICANT)) {
          if (__s17local2 < __s17local0.length) {
            this.itemDisp["mc_rank" + __s17local2].visible = true;
            this.itemDisp["mc_rank" + __s17local2].gotoAndStop(__s17local0[__s17local2] + 1);
            this.itemDisp["mc_rank" + __s17local2].toolTipText = __dep_export_CastleAllianceForumData.CastleAllianceForumData.getVisibilityToolTip(__s17local0[__s17local2]);
          } else {
            this.itemDisp["mc_rank" + __s17local2].visible = false;
            this.itemDisp["mc_rank" + __s17local2].toolTipText = null;
          }
          this.itemDisp["mc_rank" + __s17local2].mouseChildren = false;
        }
      }
    }
  };
  CastleForumTopicItemRenderer.prototype.onClick = function (__s27param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      __s1param0.prototype.onClick.call(this, __s27param0);
      switch (__s27param0.target) {
        case this.itemDisp.btn_deleteTopic:
          if (this.topicVO) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleForumDeleteDialog.CastleForumDeleteDialog, new __dep_export_CastleForumDeleteDialogProperties.CastleForumDeleteDialogProperties(__dep_export_CastleForumDeleteDialog.CastleForumDeleteDialog.TYPE_TOPIC, this.topicVO.topicId));
          }
          break;
        default:
          this.onItemClick();
      }
    }
  };
  CastleForumTopicItemRenderer.prototype.onItemClick = function () {
    __dep_export_CastleForumViewTopic.CastleForumViewTopic.currentShownTopicId = this.topicVO.topicId;
    this._categoryLayer.changeCategory(__dep_export_CastleCommunicationForum.CastleCommunicationForum.CAT_VIEW_TOPIC);
  };
  CastleForumTopicItemRenderer.prototype.onRollOver = function (__s34param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    if (this._canDeleteTopicOrAnswer) {
      this.itemDisp.btn_deleteTopic.visible = true;
    }
    this.itemDisp.scaleX = this.itemDisp.scaleY = 1.02;
  };
  CastleForumTopicItemRenderer.prototype.onRollOut = function (__s37param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    this.itemDisp.btn_deleteTopic.visible = false;
    this.itemDisp.scaleX = __s37param0.target.scaleY = 1;
  };
  Object.defineProperty(CastleForumTopicItemRenderer.prototype, "itemDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicItemRenderer.prototype, "topicVO", {
    get: function () {
      return this._topicVO;
    },
    set: function (__s43param0) {
      this._topicVO = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumTopicItemRenderer.__initialize_static_members = function () {
    CastleForumTopicItemRenderer.RANKFIELD_COUNT = 3;
    CastleForumTopicItemRenderer.NORMAL_BACKGROUND_FRAME = 1;
    CastleForumTopicItemRenderer.NEW_POST_BACKGROUND_FRAME = 2;
    CastleForumTopicItemRenderer.FULL_TOPIC_BACKGROUND_FRAME = 3;
  };
  return CastleForumTopicItemRenderer;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleForumTopicItemRenderer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleCommunicationForum = require("gge-module:export_CastleCommunicationForum");
var __dep_export_CastleForumViewTopic = require("gge-module:export_CastleForumViewTopic");
var __dep_export_CastleForumDeleteDialog = require("gge-module:export_CastleForumDeleteDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
