Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACastlePointBoosterDialog = require("gge-module:export_ACastlePointBoosterDialog");
var __s0local0 = function (__s1param0) {
  function CastleRageBoosterDialog() {
    return __s1param0.call(this, CastleRageBoosterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRageBoosterDialog, __s1param0);
  Object.defineProperty(CastleRageBoosterDialog.prototype, "titleText", {
    get: function () {
      return "dialog_rageBooster_title";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePointBoosterDialog.ACastlePointBoosterDialog.prototype, "titleText").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRageBoosterDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_rageBooster_copy";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePointBoosterDialog.ACastlePointBoosterDialog.prototype, "descriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRageBoosterDialog.prototype.bonusToolTipTextID = function () {
    return "dialog_rageBooster_boost_tt";
  };
  CastleRageBoosterDialog.__initialize_static_members = function () {
    CastleRageBoosterDialog.NAME = "CastleRageBoosterExternal";
  };
  return CastleRageBoosterDialog;
}(__dep_export_ACastlePointBoosterDialog.ACastlePointBoosterDialog);
exports.CastleRageBoosterDialog = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
