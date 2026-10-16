Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SChangeBookmark(__s3param0) {
    var __s3local0 = this;
    __s3local0.KID = 0;
    __s3local0.X = 0;
    __s3local0.Y = 0;
    __s3local0.IF = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).KID = __s3param0.kingdomId;
    __s3local0.X = __s3param0.posX;
    __s3local0.Y = __s3param0.posY;
    __s3local0.DN = __s3param0.name;
    __s3local0.IF = !!__s3param0.type.typeIndex;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SChangeBookmark, __s1param0);
  C2SChangeBookmark.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_CHANGE_BOOKMARK;
  };
  return C2SChangeBookmark;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SChangeBookmark = __s0local0;
