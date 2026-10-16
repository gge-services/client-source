Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACastlePointBoosterDialog = require("gge-module:export_ACastlePointBoosterDialog");
var __s0local0 = function (__s1param0) {
  function CastleKhanMedalBoosterDialog() {
    return __s1param0.call(this, CastleKhanMedalBoosterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKhanMedalBoosterDialog, __s1param0);
  Object.defineProperty(CastleKhanMedalBoosterDialog.prototype, "titleText", {
    get: function () {
      return "dialog_khanMedalBooster_title";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePointBoosterDialog.ACastlePointBoosterDialog.prototype, "titleText").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKhanMedalBoosterDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_khanMedalBooster_copy";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePointBoosterDialog.ACastlePointBoosterDialog.prototype, "descriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleKhanMedalBoosterDialog.prototype.bonusToolTipTextID = function () {
    return "dialog_khanMedalBooster_boost_tt";
  };
  CastleKhanMedalBoosterDialog.__initialize_static_members = function () {
    CastleKhanMedalBoosterDialog.NAME = "CastleKhanMedalBoosterExternal";
  };
  return CastleKhanMedalBoosterDialog;
}(__dep_export_ACastlePointBoosterDialog.ACastlePointBoosterDialog);
exports.CastleKhanMedalBoosterDialog = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
