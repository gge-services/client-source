Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleInventoryComponentEvent(__s3param0, __s3param1, __s3param2 = null, __s3param3 = true, __s3param4 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).unitVO = __s3param1;
    __s3local0.crestVO = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInventoryComponentEvent, __s1param0);
  CastleInventoryComponentEvent.__initialize_static_members = function () {
    CastleInventoryComponentEvent.CLICK_ITEM = "CLICK_ITEM";
    CastleInventoryComponentEvent.SCROLL_INVENTORY = "SCROLL_INVENTORY";
  };
  return CastleInventoryComponentEvent;
}(createjs.Event);
exports.CastleInventoryComponentEvent = __s0local0;
__s0local0.__initialize_static_members();
