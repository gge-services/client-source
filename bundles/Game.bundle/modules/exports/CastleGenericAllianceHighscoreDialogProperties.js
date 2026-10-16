Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleGenericAllianceHighscoreDialogProperties(__s3param0, __s3param1 = -1, __s3param2 = -1, __s3param3 = -1, __s3param4 = -1) {
    var __s3local0 = this;
    __s3local0.preselectedLeagueId = 0;
    __s3local0.preselectedOwnRank = 0;
    __s3local0.highscoreType = 0;
    __s3local0.numberOfLeagues = 0;
    __s3local0._eventID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).numberOfLeagues = __s3param1;
    __s3local0.highscoreType = __s3param0;
    __s3local0.preselectedLeagueId = __s3param2;
    __s3local0.preselectedOwnRank = __s3param3;
    __s3local0._eventID = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericAllianceHighscoreDialogProperties, __s1param0);
  Object.defineProperty(CastleGenericAllianceHighscoreDialogProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericAllianceHighscoreDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleGenericAllianceHighscoreDialogProperties = __s0local0;
