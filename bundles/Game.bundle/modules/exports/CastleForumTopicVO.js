Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleForumTopicVO() {
    this._topicId = -1;
    this._authorRank = -1;
    this._answerCount = -1;
    this._wasRead = false;
  }
  CastleForumTopicVO.prototype.parseGAT = function (__s5param0) {
    this._topicId = __dep_exact_f855840627e6e145.int(__s5param0.TID);
    this._topicName = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.N);
    this._author = __s5param0.CN;
    this._creationTimestamp = new Date(__s5param0.CT * 1000);
    this._authorRank = __dep_exact_f855840627e6e145.int(__s5param0.CR);
    this._visibleRankingGroups = __s5param0.RG;
    this._answerCount = __dep_exact_f855840627e6e145.int(__s5param0.RC);
    this._lastPosterName = __s5param0.LRN;
    this._lastPostTimestamp = new Date(__s5param0.LRT * 1000);
    this._wasRead = !!__s5param0.R;
  };
  CastleForumTopicVO.prototype.hasRightsToDeleteTopicOrAnswer = function () {
    return __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasTopicRightsToDeleteOrAnswerOrChangeVisibility(this.author, this.visibleRankingGroups);
  };
  Object.defineProperty(CastleForumTopicVO.prototype, "author", {
    get: function () {
      return this._author;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "topicName", {
    get: function () {
      return this._topicName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "creationTimestamp", {
    get: function () {
      return this._creationTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "visibleRankingGroups", {
    get: function () {
      return this._visibleRankingGroups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "topicId", {
    get: function () {
      return this._topicId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "answerCount", {
    get: function () {
      return this._answerCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "lastPosterName", {
    get: function () {
      return this._lastPosterName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "lastPostTimestamp", {
    get: function () {
      return this._lastPostTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "wasRead", {
    get: function () {
      return this._wasRead;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "authorRank", {
    get: function () {
      return this._authorRank;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumTopicVO;
}();
exports.CastleForumTopicVO = __s0local0;
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
