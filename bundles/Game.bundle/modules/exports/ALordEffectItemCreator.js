Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ALordEffectItemCreator() {}
  ALordEffectItemCreator.prototype.createTotalEffectItem = function (__s5param0) {
    var __s5local0 = new __dep_export_LordEffectItem.LordEffectItem(this.getTotalEffectMC(__s5param0), this.getMargin(), this.defaultFontColor, this.malusFontColor);
    if (__s5param0.length > 1) {
      var __s5local1 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(__s5param0);
      __s5local0.applyText(this.getTotalEffectText(__s5param0), __s5local1.strength < 0);
    } else {
      __s5local0.applyText(this.getEffectText(__s5param0[0]), __s5param0[0].effect.effectType.type.isMalusType ? __s5param0[0].effectValue.strength > 0 : __s5param0[0].effectValue.strength < 0);
      __s5local0.applySources(__s5param0[0]);
    }
    return __s5local0;
  };
  ALordEffectItemCreator.prototype.createDetailEffectItem = function (__s9param0, __s9param1 = true) {
    var __s9local0 = new __dep_export_LordEffectItem.LordEffectItem(this.getDetailEffectMC(), this.getMargin(), this.defaultFontColor, this.malusFontColor);
    __s9local0.applyText(this.getEffectText(__s9param0, __s9param1), __s9param0.effect.effectType.type.isMalusType ? __s9param0.effectValue.strength > 0 : __s9param0.effectValue.strength < 0);
    __s9local0.applySources(__s9param0);
    return __s9local0;
  };
  ALordEffectItemCreator.prototype.createCappedEffectGroupItem = function (__s11param0) {
    var __s11local0 = this;
    var __s11local1 = new __dep_export_LordEffectCapGroupItem.LordEffectCapGroupItem(this.getCapGroupMC(), this.getMargin(), this.defaultFontColor, this.malusFontColor);
    __s11local1.applyText(__dep_exact_92d05af59ee2ff30.Localize.text("effect_category_commonEffectCap", [__s11param0[0].maxValueStrength]));
    __s11param0.forEach(function (__s13param0) {
      var __s13local0 = __s11local0.createDetailEffectItem(__s13param0, false);
      __s11local1.addEffectItem(__s13local0);
    });
    return __s11local1;
  };
  ALordEffectItemCreator.prototype.getTotalEffectText = function (__s15param0) {
    var __s15local0 = __s15param0[0].effect;
    if (this._filterStrategy.isGroupActive(__s15local0.effectCategory, __s15local0.effectGroup)) {
      var __s15local1 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(__s15param0);
      var __s15local2 = __s15local1.textReplacements;
      var __s15local3 = __s15param0[0].raidBossNameReplacement;
      if (__s15local3 != null) {
        (__s15local2 = __s15local2 ? __s15local2.slice() : []).push(__s15local3);
      }
      if (__s15local1.strength < 0) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("effect_group_" + __s15local0.effectCategory + "_" + __s15local0.effectGroup + "_active_malus", __s15local2);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("effect_group_" + __s15local0.effectCategory + "_" + __s15local0.effectGroup + "_active", __s15local2);
      }
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text("effect_group_" + __s15local0.effectCategory + "_" + __s15local0.effectGroup + "_passive");
  };
  ALordEffectItemCreator.prototype.createSeperatorLine = function () {
    return new __dep_export_MovieClipLayoutable.MovieClipLayoutable(this.getSeperatorLineMC(), this.getMargin());
  };
  ALordEffectItemCreator.prototype.getEffectText = function (__s23param0, __s23param1 = true) {
    if (__s23param1) {
      var __s23local0 = __s23param0;
      if (__dep_export_instanceOf_ILordEffectText.instanceOf_ILordEffectText(__s23param0)) {
        var __s23local1 = __dep_exact_81dacdf05bd32292.castAs(__s23local0, "ILordEffectText");
        if (__s23local1) {
          return __s23local1.lordEffectText();
        }
      }
    }
    return __s23param0.descriptionText;
  };
  ALordEffectItemCreator.prototype.getTotalEffectMC = function (__s28param0 = null) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getDetailEffectMC = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getCapGroupMC = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getSeperatorLineMC = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getMargin = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ALordEffectItemCreator.prototype, "defaultFontColor", {
    get: function () {
      return __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALordEffectItemCreator.prototype, "malusFontColor", {
    get: function () {
      return ALordEffectItemCreator.MALUS_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALordEffectItemCreator.prototype, "filterStrategy", {
    set: function (__s42param0) {
      this._filterStrategy = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  ALordEffectItemCreator.__initialize_static_members = function () {
    ALordEffectItemCreator.MALUS_COLOR = 14357270;
  };
  return ALordEffectItemCreator;
}();
exports.ALordEffectItemCreator = __s0local0;
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_instanceOf_ILordEffectText = require("gge-module:export_instanceOf_ILordEffectText");
var __dep_export_LordEffectCapGroupItem = require("gge-module:export_LordEffectCapGroupItem");
var __dep_export_LordEffectItem = require("gge-module:export_LordEffectItem");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
__s0local0.__initialize_static_members();
