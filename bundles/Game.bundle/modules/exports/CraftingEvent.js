Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CraftingEvent(__s3param0, __s3param1 = -1, __s3param2 = -1, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).queueID = __s3param1;
    __s3local0.kingdomID = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingEvent, __s1param0);
  CraftingEvent.CRAFTING_QUEUE_UPDATED = "CRAFTING_QUEUE_UPDATED";
  CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON = "BRIEFLY_DISABLE_CRAFT_BUTTON";
  return CraftingEvent;
}(createjs.Event);
exports.CraftingEvent = __s0local0;
