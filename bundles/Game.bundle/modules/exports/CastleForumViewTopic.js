Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceAnswerTopicVO = require("gge-module:export_C2SAllianceAnswerTopicVO");
var __dep_export_C2SGetAllianceTopicRepliesVO = require("gge-module:export_C2SGetAllianceTopicRepliesVO");
var __dep_export_CastleAllianceForumEvent = require("gge-module:export_CastleAllianceForumEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleForumViewTopicScrollComponent = require("gge-module:export_CastleForumViewTopicScrollComponent");
var __dep_export_CastleForumVisibilityDialogProperties = require("gge-module:export_CastleForumVisibilityDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleForumViewTopic(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._parentLayer = __s3param1;
    __s3local0._postScrollComponent = new __dep_export_CastleForumViewTopicScrollComponent.CastleForumViewTopicScrollComponent(__s3local0.subLayerDisp);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_jumpToAnswer.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_goToAnswer_button")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_visibility.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_selectRanks_button")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.subLayerDisp.btn_back.toolTipText = "dialog_alliance_communication_button_toOverview";
    __s3local0.subLayerDisp.btn_visibility.toolTipText = "dialog_alliance_communication_selectRanks_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_back, __s3local0.subLayerDisp.btn_visibility, __s3local0.subLayerDisp.btn_jumpToAnswer, __s3local0.subLayerDisp.btn_answer, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_slider, __s3local0.subLayerDisp.btn_down]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumViewTopic, __s1param0);
  CastleForumViewTopic.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.clearSublayer();
    __dep_export_CastleModel.CastleModel.castleForumData.addEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED, this.bindFunction(this.onPostCreationAccepted));
    __dep_export_CastleModel.CastleModel.castleForumData.addEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL, this.bindFunction(this.onTopicDetailUpdated));
    this.requestTopicData();
  };
  CastleForumViewTopic.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.castleForumData.removeEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL, this.bindFunction(this.onTopicDetailUpdated));
    __dep_export_CastleModel.CastleModel.castleForumData.removeEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED, this.bindFunction(this.onPostCreationAccepted));
    if (this._postScrollComponent) {
      this._postScrollComponent.onHide();
    }
    if (this._answerComponent) {
      this._answerComponent.onHide();
    }
    __s1param0.prototype.hide.call(this);
  };
  CastleForumViewTopic.prototype.onPostCreationAccepted = function (__s11param0) {
    if (this._answerComponent) {
      this._answerComponent.resetComponent();
    }
  };
  CastleForumViewTopic.prototype.destroyPosts = function () {
    if (this._posts) {
      for (var __s14local0 = 0; __s14local0 < this._posts.length; ++__s14local0) {
        this._posts[__s14local0].onHide();
        this.subLayerDisp.mc_posts.mc_placeHolder.removeChild(this._posts[__s14local0].itemDisp);
      }
    }
  };
  CastleForumViewTopic.prototype.clearSublayer = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_answerCount, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_topicName, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    if (this._answerComponent) {
      this._answerComponent.onHide();
      this._answerComponent = null;
    }
    this.destroyPosts();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_posts.mc_placeHolder);
    this._posts = [];
    this.subLayerDisp.btn_visibility.visible = false;
  };
  CastleForumViewTopic.prototype.requestTopicData = function () {
    if (!this._isWaitingForServerMessage) {
      this._isWaitingForServerMessage = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceTopicRepliesVO.C2SGetAllianceTopicRepliesVO(CastleForumViewTopic.currentShownTopicId));
    }
  };
  CastleForumViewTopic.prototype.onTopicDetailUpdated = function (__s25param0 = null) {
    if (this.isSublayerActive) {
      if (__s25param0 && __s25param0.params && __s25param0.params[0]) {
        this._parentLayer.changeCategory(__dep_export_CastleCommunicationForum.CastleCommunicationForum.CAT_OVERVIEW);
      } else {
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_answerCount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_header_answers_number", ["" + this.topicDetail.posts.length, "" + __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLIES_TO_TOPIC])).autoFitToBounds = true;
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_topicName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.topicDetail.topicName)).autoFitToBounds = true;
        this.subLayerDisp.btn_visibility.visible = this.topicDetail.hasRightsToChangeVisibility();
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_answer, !this.hasMaxPosts);
        this._postScrollComponent.onShow();
        this.createAnswerMc();
        this.createPostsWithContent();
        this.rePositionPostsAndAnswer();
        if (!this._isWaitingForServerMessage && this._posts.length > 1) {
          this._postScrollComponent.scrollToEnd();
        }
        this.updateFullMode();
        this._answerComponent.updateAnswerButton();
        this._isWaitingForServerMessage = false;
        if (this._posts.length > 1) {
          this._postScrollComponent.scrollToEnd();
        }
      }
    }
  };
  CastleForumViewTopic.prototype.updateFullMode = function () {
    this.subLayerDisp.txt_answerCount.textColor = this.hasMaxPosts ? __dep_export_CastleAllianceForumData.CastleAllianceForumData.TEXTCOLOR_FULL : __dep_export_CastleAllianceForumData.CastleAllianceForumData.TEXTCOLOR_NONFULL;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_jumpToAnswer, !this.hasMaxPosts);
    this.subLayerDisp.btn_jumpToAnswer.toolTipText = this.hasMaxPosts ? "dialog_alliance_communication_topicFullRed_tooltip" : "dialog_alliance_communication_goToAnswer_tooltip";
  };
  CastleForumViewTopic.prototype.rePositionPostsAndAnswer = function () {
    if (this._posts) {
      var __s34local0 = 0;
      for (var __s34local1 = 0; __s34local1 < this._posts.length; ++__s34local1) {
        this._posts[__s34local1].itemDisp.x = CastleForumViewTopic.POST_X_OFFSET;
        this._posts[__s34local1].itemDisp.y = __s34local0 + CastleForumViewTopic.POST_Y_OFFSET;
        __s34local0 += __dep_exact_f855840627e6e145.int(this._posts[__s34local1].itemDisp.height + CastleForumViewTopic.POST_Y_SPACE);
      }
      if (this.answerDisp) {
        this.answerDisp.x = CastleForumViewTopic.POST_X_OFFSET;
        this.answerDisp.y = __s34local0 + CastleForumViewTopic.POST_Y_OFFSET + CastleForumViewTopic.ADDITIONAL_Y_SPACE_FOR_ANSWER;
      }
    }
  };
  CastleForumViewTopic.prototype.createPostsWithContent = function () {
    if (this.topicDetail.posts) {
      this.destroyPosts();
      this._posts = [];
      var __s40local0 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleForumTopicPost");
      for (var __s40local1 = 0; __s40local1 < this.topicDetail.posts.length; ++__s40local1) {
        var __s40local2 = new __s40local0();
        __s40local2.name = "mc_post" + __s40local1;
        this.subLayerDisp.mc_posts.mc_placeHolder.addChild(__s40local2);
        __s40local2.x = __s40local2.y = 0;
        var __s40local3 = new __dep_export_CastleForumPostRenderer.CastleForumPostRenderer(__s40local2, this.topicDetail.posts[__s40local1]);
        __s40local3.fillWithContent();
        this._posts.push(__s40local3);
        __s40local3.onShow();
      }
      this._posts.sort(__dep_export_ClientConstSort.ClientConstSort.sortForumTopicPostsByCreationDate(false));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_slider, this._posts.length > 1);
      this.subLayerDisp.btn_slider.mouseEnabled = this._posts.length > 1;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_down, this._posts.length > 1);
    }
  };
  CastleForumViewTopic.prototype.createAnswerMc = function () {
    if (this.subLayerDisp.mc_posts.mc_placeHolder.getChildByName("mc_answer")) {
      if (this._answerComponent) {
        this._answerComponent.topicDetailVO = this.topicDetail;
      }
    } else {
      if (this._answerComponent) {
        this._answerComponent.onHide();
      }
      var __s45local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleForumAnswerTopic"))();
      this.subLayerDisp.mc_posts.mc_placeHolder.addChild(__s45local0);
      __s45local0.name = "mc_answer";
      __s45local0.x = __s45local0.y = 0;
      this._answerComponent = new __dep_export_CastleForumAnswerRenderer.CastleForumAnswerRenderer(this, __s45local0, this.subLayerDisp.btn_answer, this.topicDetail);
      this._answerComponent.onShow();
      this._postScrollComponent.removeExtraListeners();
      this._postScrollComponent.addExtraListeners();
    }
  };
  CastleForumViewTopic.prototype.onSendingAnswer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceAnswerTopicVO.C2SAllianceAnswerTopicVO(CastleForumViewTopic.currentShownTopicId, this._answerComponent.getAnswerText()));
  };
  CastleForumViewTopic.prototype.onClick = function (__s53param0) {
    __s1param0.prototype.onClick.call(this, __s53param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      switch (__s53param0.target) {
        case this.subLayerDisp.btn_back:
          this._parentLayer.changeCategory(__dep_export_CastleCommunicationForum.CastleCommunicationForum.CAT_OVERVIEW);
          break;
        case this.subLayerDisp.btn_jumpToAnswer:
          this._postScrollComponent.scrollToEnd();
          if (this._answerComponent) {
            this._answerComponent.focusTextfield();
          }
          break;
        case this.subLayerDisp.btn_visibility:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleForumVisibilityDialog.CastleForumVisibilityDialog, new __dep_export_CastleForumVisibilityDialogProperties.CastleForumVisibilityDialogProperties(this.topicDetail.visibleRankingGroups, CastleForumViewTopic.currentShownTopicId));
      }
    }
  };
  Object.defineProperty(CastleForumViewTopic.prototype, "hasMaxPosts", {
    get: function () {
      return !this.topicDetail || !this.topicDetail.posts || this.topicDetail.posts.length >= __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLIES_TO_TOPIC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopic.prototype, "topicDetail", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.castleForumData.topicDetail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopic.prototype, "answerDisp", {
    get: function () {
      return this.subLayerDisp.mc_posts.mc_placeHolder.getChildByName("mc_answer");
    },
    enumerable: true,
    configurable: true
  });
  CastleForumViewTopic.__initialize_static_members = function () {
    CastleForumViewTopic.POST_X_OFFSET = 0;
    CastleForumViewTopic.POST_Y_OFFSET = 0;
    CastleForumViewTopic.POST_Y_SPACE = 10;
    CastleForumViewTopic.ADDITIONAL_Y_SPACE_FOR_ANSWER = 20;
  };
  CastleForumViewTopic.currentShownTopicId = -1;
  return CastleForumViewTopic;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleForumViewTopic = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleForumAnswerRenderer = require("gge-module:export_CastleForumAnswerRenderer");
var __dep_export_CastleForumPostRenderer = require("gge-module:export_CastleForumPostRenderer");
var __dep_export_CastleForumVisibilityDialog = require("gge-module:export_CastleForumVisibilityDialog");
var __dep_export_CastleCommunicationForum = require("gge-module:export_CastleCommunicationForum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
