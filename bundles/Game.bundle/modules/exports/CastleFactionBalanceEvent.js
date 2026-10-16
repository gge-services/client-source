Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleFactionBalanceEvent(__s3param0, __s3param1, __s3param2, __s3param3 = true, __s3param4 = false) {
    var __s3local0 = this;
    __s3local0.redFactionPlayerPercentAmount = 0;
    __s3local0.bluePlayers = 0;
    __s3local0.redPlayers = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).bluePlayers = __s3param1;
    __s3local0.redPlayers = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionBalanceEvent, __s1param0);
  CastleFactionBalanceEvent.__initialize_static_members = function () {
    CastleFactionBalanceEvent.FACTION_BALACE_UPDATED = "FACTION_BALACE_UPDATED";
  };
  return CastleFactionBalanceEvent;
}(createjs.Event);
exports.CastleFactionBalanceEvent = __s0local0;
__s0local0.__initialize_static_members();
