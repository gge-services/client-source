Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleGemEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.gemInventory = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGemEvent, __s1param0);
  CastleGemEvent.GEM_INVENTORY_UPDATE = "GEM_INVENTORY_UPDATE";
  CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED = "FORGE_GEMCRAFT_EXECUTED";
  CastleGemEvent.GEM_BOUND_TO_EQUIP = "GEM_BOUND_TO_EQUIP";
  CastleGemEvent.GEM_CRAFTING_SUCCESS = "gemcraftedsuccess";
  CastleGemEvent.GEM_CRAFTING_FAILURE = "gemcraftedfailed";
  CastleGemEvent.GEM_CRAFTING_SERVER_ERROR = "gemcraftservererror";
  CastleGemEvent.GEM_SOLD = "gemsold";
  CastleGemEvent.INVENTORY_SPACE_LEFT = "geminventoryspaceleft";
  return CastleGemEvent;
}(createjs.Event);
exports.CastleGemEvent = __s0local0;
