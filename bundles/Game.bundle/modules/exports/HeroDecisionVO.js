Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function HeroDecisionVO(__s3param0) {
    var __s3local0 = this;
    __s3local0.HID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).HID = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HeroDecisionVO, __s1param0);
  HeroDecisionVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_HERO_DECISION_COMMAND;
  };
  return HeroDecisionVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.HeroDecisionVO = __s0local0;
