Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleJudgementDataEvent(__s3param0, __s3param1 = true, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJudgementDataEvent, __s1param0);
  CastleJudgementDataEvent.__initialize_static_members = function () {
    CastleJudgementDataEvent.NEW_JUDGEMENT_STARTED = "NEW_JUDGEMENT_STARTED";
    CastleJudgementDataEvent.JUDGEMENT_ENDED = "JUDGEMENT_ENDED";
  };
  return CastleJudgementDataEvent;
}(createjs.Event);
exports.CastleJudgementDataEvent = __s0local0;
__s0local0.__initialize_static_members();
