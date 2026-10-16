Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function EquippableEffectValueSupportUnits() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquippableEffectValueSupportUnits, __s1param0);
  Object.defineProperty(EquippableEffectValueSupportUnits.prototype, "textReplacements", {
    get: function () {
      return [Array.from(this._map.values()).reduce(function (__s7param0, __s7param1) {
        return __s7param0 + __s7param1;
      }, 0), this.getTroopPackageTypeByWodId()];
    },
    enumerable: true,
    configurable: true
  });
  EquippableEffectValueSupportUnits.prototype.getTroopPackageTypeByWodId = function () {
    var __s9local0 = this.getWodIds()[0];
    switch (__s9local0) {
      case EquippableEffectValueSupportUnits.TRAVELING_KNIGHTS_WOD_ID:
        return "troops_package_travellingKnight";
      case EquippableEffectValueSupportUnits.DEMON_WARRIORS_WOD_ID:
        return "troops_package_demonWarriors";
      case EquippableEffectValueSupportUnits.DESERT_ELITE_WOD_ID:
        return "troops_package_desertElite";
      case EquippableEffectValueSupportUnits.KINGSGUARD_WOD_ID:
        return "troops_package_kingsguard";
      default:
        var __s9local1 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s9local0);
        if (__s9local1) {
          if (__s9local1.level > 0) {
            return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text("levelX", [__s9local1.level]), __s9local1.getNameString()]);
          } else if (__s9local1) {
            return __s9local1.getNameString();
          } else {
            return "";
          }
        } else {
          return "";
        }
    }
  };
  EquippableEffectValueSupportUnits.prototype.getContextTextReplacements = function (__s17param0) {
    return this.textReplacements;
  };
  EquippableEffectValueSupportUnits.__initialize_static_members = function () {
    EquippableEffectValueSupportUnits.TRAVELING_KNIGHTS_WOD_ID = 655;
    EquippableEffectValueSupportUnits.DEMON_WARRIORS_WOD_ID = 714;
    EquippableEffectValueSupportUnits.DESERT_ELITE_WOD_ID = 723;
    EquippableEffectValueSupportUnits.KINGSGUARD_WOD_ID = 686;
  };
  return EquippableEffectValueSupportUnits;
}(require("gge-module:export_EffectValueMap").EffectValueMap);
exports.EquippableEffectValueSupportUnits = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
__s0local0.__initialize_static_members();
