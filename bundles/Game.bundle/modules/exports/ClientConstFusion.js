Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstFusion() {}
  ClientConstFusion.getAvailableLevelUps = function (__s5param0, __s5param1) {
    return Math.floor(-1.5 + Math.sqrt(9 / 4 + Math.pow(__s5param0, 2) + __s5param0 - 2 + __s5param1 * 0.2) + 1) - __s5param0;
  };
  ClientConstFusion.setCatalystTextfield = function (__s7param0, __s7param1) {
    var __s7local0 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s7param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_multiplied", [__s7param1.amount]));
    __s7param0.textColor = __s7param1.amount > 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.MODERN_RED;
    return __s7local0;
  };
  ClientConstFusion.alignAddTextField = function (__s9param0, __s9param1) {
    var __s9local0 = __s9param0;
    var __s9local1 = __s9param1;
    if (__s9local0 && __s9local1) {
      __s9local0.autoSize = __dep_exact_81dacdf05bd32292.TextFieldAutoSize.LEFT;
      __s9local1.autoSize = __dep_exact_81dacdf05bd32292.TextFieldAutoSize.LEFT;
      __s9local1.x = __s9local0.x + __s9local0.width + ClientConstFusion.ADD_TEXTFIELD_SPACE_X;
    }
  };
  ClientConstFusion.getSequenceCostIterationIndex = function (__s12param0, __s12param1) {
    var __s12local0 = __s12param1 % __s12param0;
    if (__s12local0 == 0) {
      __s12local0 = __s12param0;
    }
    return __s12local0;
  };
  ClientConstFusion.__initialize_static_members = function () {
    ClientConstFusion.FULL_ENERGY_PERCENTAGE = 100;
    ClientConstFusion.MAX_ENERGY_PERCENTAGE = 200;
    ClientConstFusion.POPOVER_ASSET_NAME_ACTION = "DecorationForgeActionPopover";
    ClientConstFusion.POPOVER_ASSET_NAME_COMPLETE = "DecorationForgeFusionCompletePopover";
    ClientConstFusion.CATALYST_CONVERSION_DIRECTION_ASSEMBLE = 0;
    ClientConstFusion.CATALYST_CONVERSION_DIRECTION_DISASSEMBLE = 1;
    ClientConstFusion.ADD_TEXTFIELD_SPACE_X = 5;
    ClientConstFusion.ACTION_POPOVER_FRAME_CUSTOM = 1;
    ClientConstFusion.ACTION_POPOVER_FRAME_LEVEL = 2;
    ClientConstFusion.ACTION_POPOVER_FRAME_DUST = 3;
    ClientConstFusion.ACTION_POPOVER_FRAME_ENERGY = 4;
    ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR = ClientConstFusion.FULL_ENERGY_PERCENTAGE / 100;
    ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR = ClientConstFusion.MAX_ENERGY_PERCENTAGE / 100;
  };
  return ClientConstFusion;
}();
exports.ClientConstFusion = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__s0local0.__initialize_static_members();
