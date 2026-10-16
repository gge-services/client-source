Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleForumTopicDetailVO() {
    this._topicName = "";
  }
  CastleForumTopicDetailVO.prototype.parseGTR = function (__s5param0) {
    this._topicName = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.TN);
    this._visibleRankingGroups = __s5param0.RG;
    this._author = __s5param0.CN;
    this._posts = [];
    if (__s5param0.R) {
      for (var __s5local0 = 0; __s5local0 < __s5param0.R.length; ++__s5local0) {
        var __s5local1 = new __dep_export_CastleForumPostVO.CastleForumPostVO();
        __s5local1.parseGTRItem(__s5param0.R[__s5local0]);
        this._posts.push(__s5local1);
      }
    }
  };
  CastleForumTopicDetailVO.prototype.hasRightsToChangeVisibility = function () {
    return __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasTopicRightsToDeleteOrAnswerOrChangeVisibility(this.author, this.visibleRankingGroups);
  };
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "posts", {
    get: function () {
      return this._posts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "topicName", {
    get: function () {
      return this._topicName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "visibleRankingGroups", {
    get: function () {
      return this._visibleRankingGroups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "author", {
    get: function () {
      return this._author;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumTopicDetailVO;
}();
exports.CastleForumTopicDetailVO = __s0local0;
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleForumPostVO = require("gge-module:export_CastleForumPostVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
