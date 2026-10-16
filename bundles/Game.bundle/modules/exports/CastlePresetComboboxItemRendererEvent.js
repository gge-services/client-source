Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastlePresetComboboxItemRendererEvent(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, true, true) || this).presetVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePresetComboboxItemRendererEvent, __s1param0);
  CastlePresetComboboxItemRendererEvent.__initialize_static_members = function () {
    CastlePresetComboboxItemRendererEvent.OPTIONS = "presetComboboxItemOptions";
  };
  return CastlePresetComboboxItemRendererEvent;
}(createjs.Event);
exports.CastlePresetComboboxItemRendererEvent = __s0local0;
__s0local0.__initialize_static_members();
