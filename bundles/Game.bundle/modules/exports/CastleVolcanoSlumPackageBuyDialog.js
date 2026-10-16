Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSlumPackageBuyDialog = require("gge-module:export_CastleSlumPackageBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastleVolcanoSlumPackageBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVolcanoSlumPackageBuyDialog, __s1param0);
  Object.defineProperty(CastleVolcanoSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      return CastleVolcanoSlumPackageBuyDialog.TITLE_TEXT_COLOR;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageBuyDialog.CastleSlumPackageBuyDialog.prototype, "titleTextColor").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVolcanoSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      return CastleVolcanoSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageBuyDialog.CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleVolcanoSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleVolcanoSlumPackageBuyDialog.NAME = "CastleVolcanoSlumPackageBuy";
    CastleVolcanoSlumPackageBuyDialog.TITLE_TEXT_COLOR = 5263178;
    CastleVolcanoSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME = 3;
  };
  return CastleVolcanoSlumPackageBuyDialog;
}(__dep_export_CastleSlumPackageBuyDialog.CastleSlumPackageBuyDialog);
exports.CastleVolcanoSlumPackageBuyDialog = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
