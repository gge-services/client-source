Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.DropShadowFilter;
var __s0local1 = createjs.GlowFilter;
var __s0local2 = function () {
  function BitmapFilterHelper() {}
  BitmapFilterHelper.createLowBrightnessButtonColorMatrixFilter = function () {
    var __s5local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s5local0.adjustBrightness(-50, -50, -50);
    return [__s5local0.filter];
  };
  BitmapFilterHelper.createButtonColorMatrixFilter = function () {
    var __s7local0 = new __dep_exact_84d43d9c404bd4d8.ButtonColorMatrix();
    __s7local0.desaturate();
    return [__s7local0.filter];
  };
  BitmapFilterHelper.createColorMatrixFilter = function () {
    var __s9local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s9local0.desaturate();
    return [__s9local0.filter];
  };
  BitmapFilterHelper.setColor = function (__s11param0, __s11param1) {
    if (__s11param0 != null) {
      for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          __s11local2.color = __s11param1;
        }
      }
    }
    return __s11param0;
  };
  BitmapFilterHelper.__initialize_static_members = function () {
    BitmapFilterHelper.NO_FILTER = [];
    BitmapFilterHelper.FILTER_GLOW_BUILDING_GREEN = [new __s0local1(65280, 1, 14, 14, 4)];
    BitmapFilterHelper.FILTER_GLOW_BUILDING_RED = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED, 1, 14, 14, 4)];
    BitmapFilterHelper.FILTER_GLOW_BUILDING_SPARKLE = [new __s0local1(16771970, 1, 40, 40, 1.75)];
    BitmapFilterHelper.FILTER_GLOW_DECO_HIGHLIGHT = [new __s0local1(3121405, 1, 6, 9, 5.75)];
    BitmapFilterHelper.FILTER_GLOW_KINGDOM_OVERVIEW = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE, 1, 16, 16)];
    BitmapFilterHelper.FILTER_GLOW_COLOSSUS = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE, 0.8, 40, 20, 3)];
    BitmapFilterHelper.FILTER_GLOW_LORD_SCROLL_ITEM = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE, 1, 20, 20, 1)];
    BitmapFilterHelper.FILTER_GLOW_ENABLED_EQUIPMENT_SLOT = [new __s0local1(11452231, 1, 4, 4, 100)];
    BitmapFilterHelper.FILTER_GLOW_ENABLED_GEM_SLOT = BitmapFilterHelper.FILTER_GLOW_ENABLED_EQUIPMENT_SLOT;
    BitmapFilterHelper.FILTER_GLOW_PREMIUM_PAYMENT = [new __s0local1(16774335, 1, 4.5, 4.5, 2, __dep_exact_81dacdf05bd32292.BitmapFilterQuality.HIGH)];
    BitmapFilterHelper.FILTER_GLOW_CURRENT_RESEARCH = [new __s0local1(4243711, 1, 20, 20, 2, __dep_exact_81dacdf05bd32292.BitmapFilterQuality.HIGH)];
    BitmapFilterHelper.FILTER_GLOW_SELECTED_RESEARCH_FILTER = [new __s0local1(16774335, 1, 20, 20, 2, __dep_exact_81dacdf05bd32292.BitmapFilterQuality.HIGH)];
    BitmapFilterHelper.FILTER_GLOW_ATTACK_ALERT_FRAME = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.ATTACK_ALERT_FRAME_COLOR, 1, 11, 11, 12, __dep_exact_81dacdf05bd32292.BitmapFilterQuality.MEDIUM)];
    BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE, 1, 8, 8, 10)];
    BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_UNAVAILABLE = [new __s0local1(13390647, 1, 4, 4, 100, 1)];
    BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_AVAILABLE = [new __s0local1(73493285, 1, 4, 4, 100)];
    BitmapFilterHelper.FILTER_GLOW_CRAFT_EQUIPMENT_HIGHLIGHT_SLOT = [new __s0local1(0, 1, 16, 16)];
    BitmapFilterHelper.FILTER_GLOW_EQUIPMENT_ENCHANTER_HIGHLIGHT_SLOT = BitmapFilterHelper.FILTER_GLOW_CRAFT_EQUIPMENT_HIGHLIGHT_SLOT;
    BitmapFilterHelper.FILTER_GLOW_CRAFTING_DRAGGED_MOUSE_OVER = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW, 1, 16, 16)];
    BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_NORMAL = [new __s0local1(16766077, 1, 5, 5, 50)];
    BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_LEGENDARY = [new __s0local1(15919575, 1, 5, 5, 50), new __s0local0(3, 45, __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK, 1, 0, 0, 0.35)];
    BitmapFilterHelper.FILTER_GLOW_CHEAT_SELECTED = [new __s0local1(4517444, 0.7, 6, 6)];
    BitmapFilterHelper.FILTER_GLOW_STANDARD = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE, 1, 20, 20, 100)];
    BitmapFilterHelper.FILTER_GLOW_BLUE = [new __s0local1(__dep_export_ClientConstColor.ClientConstColor.GENERIC_BLUE_EFFECT, 1, 4, 4, 100)];
    BitmapFilterHelper.FILTER_GLOW_MIGHT_POINTS = BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_NORMAL;
    BitmapFilterHelper.FILTER_COLOR_MATRIX = BitmapFilterHelper.createColorMatrixFilter();
    BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX = BitmapFilterHelper.createButtonColorMatrixFilter();
    BitmapFilterHelper.FILTER_BUTTON_COLOR_MATRIX_LOW_BRIGHTNESS = BitmapFilterHelper.createLowBrightnessButtonColorMatrixFilter();
  };
  return BitmapFilterHelper;
}();
exports.BitmapFilterHelper = __s0local2;
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__s0local2.__initialize_static_members();
