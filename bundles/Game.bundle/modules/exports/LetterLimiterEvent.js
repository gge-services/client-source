Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LetterLimiterEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LetterLimiterEvent, __s1param0);
  LetterLimiterEvent.__initialize_static_members = function () {
    LetterLimiterEvent.TEXT_LIMIT_EXCEEDED = "TEXT_LIMIT_EXCEEDED";
    LetterLimiterEvent.TEXT_LIMIT_REACHED = "TEXT_LIMIT_REACHED";
    LetterLimiterEvent.TEXT_CHANGED = "TEXT_CHANGED";
    LetterLimiterEvent.UPDATE_REMAINING_LETTERS = "UPDATE_REMAINING_LETTERS";
  };
  return LetterLimiterEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.LetterLimiterEvent = __s0local0;
__s0local0.__initialize_static_members();
