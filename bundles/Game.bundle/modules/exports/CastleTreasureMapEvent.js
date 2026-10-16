Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapEvent(__s3param0, __s3param1, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).treasureMapVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapEvent, __s1param0);
  CastleTreasureMapEvent.__initialize_static_members = function () {
    CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED = "treasuremap_data_updated";
    CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED = "unit_transfer_data_updated";
    CastleTreasureMapEvent.UNIT_TRANSFER_WERE_SEND = "unit_transfer_were_send";
    CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED = "resource_transfer_data_updated";
    CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND = "resource_transfer_were_send";
  };
  return CastleTreasureMapEvent;
}(createjs.Event);
exports.CastleTreasureMapEvent = __s0local0;
__s0local0.__initialize_static_members();
