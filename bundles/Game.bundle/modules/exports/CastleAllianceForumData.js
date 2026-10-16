Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleAllianceForumEvent = require("gge-module:export_CastleAllianceForumEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAllianceForumData() {
    var __s3local0 = this;
    __s3local0._topicCount = 0;
    __s3local0._unreadTopicsCount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceForumData, __s1param0);
  CastleAllianceForumData.prototype.parseGAT = function (__s5param0) {
    this._topicCount = __dep_exact_f855840627e6e145.int(__s5param0.TC);
    this._topics = [];
    for (var __s5local0 = 0; __s5local0 < __s5param0.T.length; ++__s5local0) {
      var __s5local1 = new __dep_export_CastleForumTopicVO.CastleForumTopicVO();
      __s5local1.parseGAT(__s5param0.T[__s5local0]);
      this._topics.push(__s5local1);
    }
    this._topics.sort(this.bindFunction(this.sortTopicList));
    this.dispatchEvent(new __dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW));
  };
  CastleAllianceForumData.prototype.sortTopicList = function (__s9param0, __s9param1) {
    if (__s9param0.lastPostTimestamp < __s9param1.lastPostTimestamp) {
      return 1;
    } else if (__s9param0.lastPostTimestamp > __s9param1.lastPostTimestamp) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleAllianceForumData.prototype.parseGTR = function (__s14param0) {
    this._topicDetail = new __dep_export_CastleForumTopicDetailVO.CastleForumTopicDetailVO();
    this._topicDetail.parseGTR(__s14param0);
    this.dispatchEvent(new __dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL));
  };
  CastleAllianceForumData.prototype.onDetailTopicWasNotFound = function () {
    this.dispatchEvent(new __dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL, [true]));
  };
  CastleAllianceForumData.prototype.parseUTC = function (__s18param0) {
    this._unreadTopicsCount = __dep_exact_f855840627e6e145.int(__s18param0.UTC);
    this.dispatchEvent(new __dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent(__dep_export_CastleAllianceForumEvent.CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED));
  };
  Object.defineProperty(CastleAllianceForumData.prototype, "topicDetail", {
    get: function () {
      return this._topicDetail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceForumData.prototype, "topics", {
    get: function () {
      return this._topics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceForumData.prototype, "topicCount", {
    get: function () {
      return this._topicCount;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceForumData.hasTopicRightsToDeleteOrAnswerOrChangeVisibility = function (__s26param0, __s26param1) {
    if (!__s26param1 || !__s26param0) {
      return false;
    }
    if (__dep_export_CastleModel.CastleModel.userData.userName == __s26param0) {
      return true;
    }
    for (var __s26local0 = 0; __s26local0 < __s26param1.length; ++__s26local0) {
      if (__dep_exact_26a421b704832cff.AllianceConst.hasAdminRightsForTopicAndAnswers(__dep_export_CastleModel.CastleModel.userData.allianceRank, __s26param1[__s26local0])) {
        return true;
      }
    }
    return false;
  };
  CastleAllianceForumData.canDeletePost = function (__s33param0) {
    return __dep_exact_26a421b704832cff.AllianceConst.hasAdminRightsForTopicAndAnswers(__dep_export_CastleModel.CastleModel.userData.allianceRank, __s33param0.allianceRank) || __s33param0.author == __dep_export_CastleModel.CastleModel.userData.userName;
  };
  CastleAllianceForumData.getVisibilityToolTip = function (__s35param0) {
    return "dialog_alliance_communication_selectRanks_rank" + __s35param0 + "_tooltip";
  };
  CastleAllianceForumData.getPreselectedTopicVisibility = function () {
    for (var __s37local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.getRankingGroupFromRank(__dep_export_CastleModel.CastleModel.userData.allianceRank)), __s37local1 = [], __s37local2 = 0; __s37local2 <= __s37local0; ++__s37local2) {
      __s37local1.push(__s37local2);
    }
    return __s37local1;
  };
  CastleAllianceForumData.isTopicFull = function (__s41param0) {
    return !!__s41param0 && !!__s41param0.posts && __s41param0.posts.length >= __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLIES_TO_TOPIC;
  };
  CastleAllianceForumData.getForumValidText = function (__s43param0) {
    return __dep_exact_9e901e8e2483a22f.TextValide.getValideSmartFoxJSONTextMessage(__dep_export_ClientConstUtils.ClientConstUtils.getTrimmedText(__s43param0));
  };
  CastleAllianceForumData.hasValidPostText = function (__s45param0) {
    var __s45local0 = CastleAllianceForumData.getForumValidText(__s45param0);
    return __s45local0.length >= __dep_exact_26a421b704832cff.AllianceConst.MIN_FORUM_TEXT_LENGTH && __s45local0.length <= __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLY_TEXT;
  };
  CastleAllianceForumData.hasValidTopicName = function (__s47param0) {
    var __s47local0 = CastleAllianceForumData.getForumValidText(__s47param0);
    return __s47local0.length >= __dep_exact_26a421b704832cff.AllianceConst.MIN_FORUM_TEXT_LENGTH && __s47local0.length <= __dep_exact_26a421b704832cff.AllianceConst.MAX_TOPIC_TEXT;
  };
  Object.defineProperty(CastleAllianceForumData.prototype, "unreadTopicsCount", {
    get: function () {
      return this._unreadTopicsCount;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceForumData.__initialize_static_members = function () {
    CastleAllianceForumData.TEXTCOLOR_FULL = 13369344;
    CastleAllianceForumData.TEXTCOLOR_NONFULL = 4601387;
  };
  CastleAllianceForumData.LAST_SEARCHED_LANGUAGE = "";
  return CastleAllianceForumData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleAllianceForumData = __s0local0;
var __dep_export_CastleForumTopicDetailVO = require("gge-module:export_CastleForumTopicDetailVO");
var __dep_export_CastleForumTopicVO = require("gge-module:export_CastleForumTopicVO");
__s0local0.__initialize_static_members();
