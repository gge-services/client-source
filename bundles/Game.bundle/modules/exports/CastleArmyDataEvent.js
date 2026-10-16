Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleArmyDataEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.mapmovementVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArmyDataEvent, __s1param0);
  CastleArmyDataEvent.NEW_MOVEMENT = "newymovement";
  CastleArmyDataEvent.REMOVE_MOVEMENT = "removemovement";
  CastleArmyDataEvent.MOVEMENTS_CHANGED = "movementschanged";
  CastleArmyDataEvent.MOVEMENTS_REMOVED = "movementsremoved";
  CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED = "attackWarningsUpdated";
  return CastleArmyDataEvent;
}(createjs.Event);
exports.CastleArmyDataEvent = __s0local0;
