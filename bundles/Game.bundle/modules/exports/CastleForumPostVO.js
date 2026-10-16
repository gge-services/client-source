Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleForumPostVO() {
    this._postId = -1;
    this._content = "";
    this._author = "";
    this._allianceRank = -1;
  }
  CastleForumPostVO.prototype.parseGTRItem = function (__s5param0) {
    this._postId = __dep_exact_f855840627e6e145.int(__s5param0.RID);
    this._content = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.RT);
    this._author = __s5param0.PN;
    this._allianceRank = __dep_exact_f855840627e6e145.int(__s5param0.AR);
    this._creationTimestamp = new Date(__s5param0.T * 1000);
  };
  Object.defineProperty(CastleForumPostVO.prototype, "postId", {
    get: function () {
      return this._postId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "content", {
    get: function () {
      return this._content;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "author", {
    get: function () {
      return this._author;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "creationTimestamp", {
    get: function () {
      return this._creationTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumPostVO;
}();
exports.CastleForumPostVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
