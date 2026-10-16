Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleAdvancedTroopSelectionEvent = require("gge-module:export_CastleAdvancedTroopSelectionEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedTroopSelectionItemScrollList(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
    __dep_export_ButtonHelper.ButtonHelper.initSmallButtons([__s3local0._componentDisp.btn_up, __s3local0._componentDisp.btn_down]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedTroopSelectionItemScrollList, __s1param0);
  CastleAdvancedTroopSelectionItemScrollList.prototype.onValueChange = function (__s5param0) {
    this.dispatchEvent(new __dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent(__s5param0.scrollItem, __dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED));
  };
  CastleAdvancedTroopSelectionItemScrollList.prototype.updateItemList = function (__s7param0 = 0) {
    __s1param0.prototype.updateItemList.call(this, __s7param0);
    if (this.veList != null) {
      for (var __s7local0 = 0, __s7local1 = this.veList; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          if (__s7local2.visible) {
            __s7local2.addEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onValueChange));
          } else {
            __s7local2.removeEventListener(__dep_export_CastleAdvancedTroopSelectionEvent.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onValueChange));
          }
        }
      }
    }
  };
  CastleAdvancedTroopSelectionItemScrollList.prototype.updateLimits = function () {
    if (this.veList != null) {
      for (var __s15local0 = 0, __s15local1 = this.veList; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.updateSelection();
        }
      }
    }
  };
  return CastleAdvancedTroopSelectionItemScrollList;
}(require("gge-module:export_SliderItemScrollList").SliderItemScrollList);
exports.CastleAdvancedTroopSelectionItemScrollList = __s0local0;
