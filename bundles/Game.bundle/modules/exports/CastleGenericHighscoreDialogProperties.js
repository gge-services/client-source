Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleGenericHighscoreDialogProperties(__s3param0, __s3param1 = -1, __s3param2 = -1, __s3param3 = -1, __s3param4 = -1, __s3param5 = -1) {
    var __s3local0 = this;
    __s3local0._preselectedLeagueId = 0;
    __s3local0._preselectedOwnRank = 0;
    __s3local0._highscoreType = 0;
    __s3local0._numberOfLeagues = 0;
    __s3local0._ownLeagueID = 0;
    __s3local0._eventID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._numberOfLeagues = __s3param1;
    __s3local0._highscoreType = __s3param0;
    __s3local0._preselectedLeagueId = __s3param2;
    __s3local0._preselectedOwnRank = __s3param3;
    __s3local0._eventID = __s3param5;
    __s3local0._ownLeagueID = __s3param4 > -1 ? __s3param4 : __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericHighscoreDialogProperties, __s1param0);
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "preselectedLeagueId", {
    get: function () {
      return this._preselectedLeagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "preselectedOwnRank", {
    get: function () {
      return this._preselectedOwnRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "highscoreType", {
    get: function () {
      return this._highscoreType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "numberOfLeagues", {
    get: function () {
      return this._numberOfLeagues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "ownLeagueID", {
    get: function () {
      return this._ownLeagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericHighscoreDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleGenericHighscoreDialogProperties = __s0local0;
