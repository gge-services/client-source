Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetAllianceTopicsVO = require("gge-module:export_C2SGetAllianceTopicsVO");
var __dep_export_CastleAllianceForumEvent = require("gge-module:export_CastleAllianceForumEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleForumOverview(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._isWaitingForServerMessage = false;
    __s3local0._currentPage = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._parentLayer = __s3param1;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_newTopic.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_newTopic_button")).autoFitToBounds = true;
    __s3local0.subLayerDisp.mc_topicCount.toolTipText = "dialog_alliance_communication_hiddenTopics_tooltip";
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_titleTopic, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_header_topic"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_titleFrom, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_header_fromPlayer"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_titleLastPost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_header_lastReply"));
    __s3local0._topicItems = [];
    for (var __s3local1 = 0; __s3local1 < CastleForumOverview.TOPICS_PER_PAGE; ++__s3local1) {
      __s3local0._topicItems.push(new __dep_export_CastleForumTopicItemRenderer.CastleForumTopicItemRenderer(__s3local0.subLayerDisp["mc_item" + __s3local1], __s3local0._parentLayer));
    }
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_newTopic, __s3local0.subLayerDisp.btn_prevTopic, __s3local0.subLayerDisp.btn_nextTopic]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumOverview, __s1param0);
  CastleForumOverview.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_newTopic, !this.hasMaxTopics);
    this.onTopicOverviewUpdated();
    __dep_export_CastleModel.CastleModel.castleForumData.addEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW, this.bindFunction(this.onTopicOverviewUpdated));
    this.requestTopicData();
  };
  CastleForumOverview.prototype.requestTopicData = function () {
    if (!this._isWaitingForServerMessage) {
      this._isWaitingForServerMessage = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceTopicsVO.C2SGetAllianceTopicsVO());
    }
  };
  CastleForumOverview.prototype.onTopicOverviewUpdated = function (__s12param0 = null) {
    this._isWaitingForServerMessage = false;
    if (this.isSublayerActive) {
      if (this._currentPage > this.maxPage) {
        this._currentPage = this.maxPage;
      }
      for (var __s12local0 = 0; __s12local0 < CastleForumOverview.TOPICS_PER_PAGE; ++__s12local0) {
        var __s12local1 = this.topicStartIndex + __s12local0;
        if (__dep_export_CastleModel.CastleModel.castleForumData.topics && __s12local1 < __dep_export_CastleModel.CastleModel.castleForumData.topics.length) {
          var __s12local2 = __dep_export_CastleModel.CastleModel.castleForumData.topics[__s12local1];
          this._topicItems[__s12local0].topicVO = __s12local2;
          this._topicItems[__s12local0].onShow();
        } else {
          this._topicItems[__s12local0].topicVO = null;
          this._topicItems[__s12local0].onHide();
        }
      }
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_topicSite, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [this._currentPage + 1, this.maxPage + 1])).color = this.hasMaxTopics ? __dep_export_CastleAllianceForumData.CastleAllianceForumData.TEXTCOLOR_FULL : __dep_export_CastleAllianceForumData.CastleAllianceForumData.TEXTCOLOR_NONFULL;
      this.subLayerDisp.btn_prevTopic.visible = this._currentPage > 0;
      this.subLayerDisp.btn_nextTopic.visible = !(this._currentPage >= this.maxPage);
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_topicCount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_topicAmount", [__dep_export_CastleModel.CastleModel.castleForumData.topicCount, __dep_exact_26a421b704832cff.AllianceConst.MAX_TOPIC_COUNT])).autoFitToBounds = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_newTopic, !this.hasMaxTopics);
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_newTopic.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.subLayerDisp.btn_newTopic.enabled ? "dialog_alliance_communication_newTopic_button" : "dialog_alliance_communication_topicFull_button"));
      this.subLayerDisp.btn_newTopic.toolTipText = this.hasMaxTopics ? "dialog_alliance_communication_topicFull_tooltip" : "dialog_alliance_communication_newTopic_tooltip";
    }
  };
  Object.defineProperty(CastleForumOverview.prototype, "maxPage", {
    get: function () {
      if (!__dep_export_CastleModel.CastleModel.castleForumData.topics || __dep_export_CastleModel.CastleModel.castleForumData.topics.length <= 0) {
        return 0;
      } else {
        return __dep_exact_9e901e8e2483a22f.MathBase.ceil(__dep_export_CastleModel.CastleModel.castleForumData.topics.length / CastleForumOverview.TOPICS_PER_PAGE, 0) - 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumOverview.prototype, "topicStartIndex", {
    get: function () {
      return this._currentPage * CastleForumOverview.TOPICS_PER_PAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumOverview.prototype, "hasMaxTopics", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.castleForumData.topicCount >= __dep_exact_26a421b704832cff.AllianceConst.MAX_TOPIC_COUNT;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumOverview.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.castleForumData.removeEventListener(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW, this.bindFunction(this.onTopicOverviewUpdated));
    __s1param0.prototype.hide.call(this);
  };
  CastleForumOverview.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      switch (__s30param0.target) {
        case this.subLayerDisp.btn_newTopic:
          if (!this.hasMaxTopics) {
            this._parentLayer.changeCategory(__dep_export_CastleCommunicationForum.CastleCommunicationForum.CAT_NEW_TOPIC);
          }
          break;
        case this.subLayerDisp.btn_nextTopic:
          this._currentPage++;
          if (this._currentPage > this.maxPage) {
            this._currentPage = this.maxPage;
          }
          this.onTopicOverviewUpdated();
          break;
        case this.subLayerDisp.btn_prevTopic:
          this._currentPage--;
          if (this._currentPage < 0) {
            this._currentPage = 0;
          }
          this.onTopicOverviewUpdated();
      }
    }
  };
  CastleForumOverview.__initialize_static_members = function () {
    CastleForumOverview.TOPICS_PER_PAGE = 6;
  };
  return CastleForumOverview;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleForumOverview = __s0local0;
var __dep_export_CastleForumTopicItemRenderer = require("gge-module:export_CastleForumTopicItemRenderer");
var __dep_export_CastleCommunicationForum = require("gge-module:export_CastleCommunicationForum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
