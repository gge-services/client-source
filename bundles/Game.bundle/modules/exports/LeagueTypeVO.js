Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LeagueTypeVO() {
    this._leaguetypeID = 0;
    this._eventID = 0;
    this._minLevel = 0;
    this._maxLevel = 0;
  }
  LeagueTypeVO.prototype.parseXML = function (__s5param0) {
    this._leaguetypeID = parseInt(__s5param0.leaguetypeID || "");
    this._eventID = parseInt(__s5param0.eventID || "");
    this._minLevel = parseInt(__s5param0.minLevel || "");
    this._maxLevel = parseInt(__s5param0.maxLevel || "");
  };
  Object.defineProperty(LeagueTypeVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeagueTypeVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeagueTypeVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeagueTypeVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  return LeagueTypeVO;
}();
exports.LeagueTypeVO = __s0local0;
