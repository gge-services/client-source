Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __s0local0 = function (__s1param0) {
  function C2SAddBookmark(__s3param0) {
    var __s3local0 = this;
    __s3local0.K = 0;
    __s3local0.X = 0;
    __s3local0.Y = 0;
    __s3local0.TY = 0;
    __s3local0.TI = 0;
    __s3local0.IM = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).K = __s3param0.kingdomId;
    __s3local0.X = __s3param0.posX;
    __s3local0.Y = __s3param0.posY;
    __s3local0.N = __s3param0.name;
    __s3local0.TY = __dep_exact_f855840627e6e145.int(__s3param0.type.typeIndex);
    if (__s3param0.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
      __s3local0.TI = __dep_exact_f855840627e6e145.int(__s3param0.attackOrderDetails.attackTimeStamp);
      __s3local0.M = __s3local0.extractPlayerIDs(__s3param0.attackOrderDetails.assignedAttackers);
      __s3local0.IM = __dep_exact_f855840627e6e145.int(__s3param0.attackOrderDetails.sendMessageToAssignedAttackers ? 1 : 0);
    } else {
      __s3local0.TI = -1;
      __s3local0.M = [];
      __s3local0.IM = 0;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SAddBookmark, __s1param0);
  C2SAddBookmark.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_ADD_BOOKMARK;
  };
  C2SAddBookmark.prototype.extractPlayerIDs = function (__s9param0) {
    var __s9local0 = [];
    if (__s9param0 != null) {
      for (var __s9local1 = 0, __s9local2 = __s9param0; __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3 !== undefined) {
          __s9local0.push(__s9local3);
        }
      }
    }
    return __s9local0;
  };
  return C2SAddBookmark;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SAddBookmark = __s0local0;
