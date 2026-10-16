Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_ALordEffectItemCreator = require("gge-module:export_ALordEffectItemCreator");
var __s0local0 = function (__s1param0) {
  function DialogLordEffectItemCreator() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DialogLordEffectItemCreator, __s1param0);
  DialogLordEffectItemCreator.prototype.getTotalEffectMC = function (__s5param0 = null) {
    return new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LordEffecTotaltItem_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getDetailEffectMC = function () {
    return new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LordEffectDetailItem_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getSeperatorLineMC = function () {
    return new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LordEffectSeperator_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getCapGroupMC = function () {
    return new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LordEffectCapItem_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getMargin = function () {
    return DialogLordEffectItemCreator.MARGIN;
  };
  Object.defineProperty(DialogLordEffectItemCreator.prototype, "defaultFontColor", {
    get: function () {
      return DialogLordEffectItemCreator.DEFAULT_FONT_COLOR;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ALordEffectItemCreator.ALordEffectItemCreator.prototype, "defaultFontColor").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DialogLordEffectItemCreator.prototype, "malusFontColor", {
    get: function () {
      return DialogLordEffectItemCreator.MALUS_COLOR_0;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ALordEffectItemCreator.ALordEffectItemCreator.prototype, "malusFontColor").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  DialogLordEffectItemCreator.__initialize_static_members = function () {
    DialogLordEffectItemCreator.DEFAULT_FONT_COLOR = 15724527;
    DialogLordEffectItemCreator.MALUS_COLOR_0 = 16148070;
    DialogLordEffectItemCreator.MARGIN = new __dep_export_LayoutMargin.LayoutMargin(1, 1, 0, 0);
  };
  return DialogLordEffectItemCreator;
}(__dep_export_ALordEffectItemCreator.ALordEffectItemCreator);
exports.DialogLordEffectItemCreator = __s0local0;
__s0local0.__initialize_static_members();
