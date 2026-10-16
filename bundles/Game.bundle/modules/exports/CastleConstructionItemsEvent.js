Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsEvent, __s1param0);
  CastleConstructionItemsEvent.INVENTORY_UPDATED = "inventoryUpdated";
  CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED = "inventorySpaceUpdated";
  CastleConstructionItemsEvent.NEC_RECEIVED = "nec_received";
  CastleConstructionItemsEvent.AEC_RECEIVED = "aec_received";
  CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED = "last_expiration_saved";
  return CastleConstructionItemsEvent;
}(createjs.Event);
exports.CastleConstructionItemsEvent = __s0local0;
