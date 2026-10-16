Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEvent, __s1param0);
  SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED = "onOwnRanksUpdated";
  SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED = "onContractsUpdated";
  SamuraiDaimyoEvent.ON_AREAS_UPDATED = "onAreasUpdated";
  SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED = "onNewEventEndDialogInfoArrived";
  return SamuraiDaimyoEvent;
}(createjs.Event);
exports.SamuraiDaimyoEvent = __s0local0;
