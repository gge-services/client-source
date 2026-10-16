Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventHighScoreDialogProperties(__s3param0 = -1, __s3param1 = -1, __s3param2 = -1) {
    return __s1param0.call(this, __dep_exact_26a421b704832cff_1.HighscoreConst.LONG_TERM_POINT_EVENT, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventHighScoreDialogProperties, __s1param0);
  Object.defineProperty(LongTermPointEventHighScoreDialogProperties, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventHighScoreDialogProperties.prototype, "numberOfLeagues", {
    get: function () {
      return LongTermPointEventHighScoreDialogProperties.eventVO.numberOfLeagues;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties.prototype, "numberOfLeagues").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventHighScoreDialogProperties;
}(__dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties);
exports.LongTermPointEventHighScoreDialogProperties = __s0local0;
