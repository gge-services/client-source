Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleStatusBarEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStatusBarEvent, __s1param0);
  CastleStatusBarEvent.__initialize_static_members = function () {
    CastleStatusBarEvent.ICONS_REPOSITIONED = "iconsRepositioned";
  };
  return CastleStatusBarEvent;
}(createjs.Event);
exports.CastleStatusBarEvent = __s0local0;
__s0local0.__initialize_static_members();
