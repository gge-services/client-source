Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTournamentEventFinishDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.messageID = 0;
    __s3local0.ownRank = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).messageID = __s3param0;
    __s3local0.ownRank = __s3param1;
    __s3local0.rewardsList = [];
    if (__s3param2 != null) {
      for (var __s3local1 = 0, __s3local2 = __s3param2; __s3local1 < __s3local2.length; __s3local1++) {
        var __s3local3 = __s3local2[__s3local1];
        if (__s3local3 !== undefined) {
          __s3local0.rewardsList.push(__dep_export_CastleModel.CastleModel.rewardData.getListById(__s3local3));
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTournamentEventFinishDialogProperties, __s1param0);
  return CastleTournamentEventFinishDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTournamentEventFinishDialogProperties = __s0local0;
