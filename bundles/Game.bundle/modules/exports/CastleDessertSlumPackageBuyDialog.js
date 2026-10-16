Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSlumPackageBuyDialog = require("gge-module:export_CastleSlumPackageBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastleDessertSlumPackageBuyDialog() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDessertSlumPackageBuyDialog, __s1param0);
  Object.defineProperty(CastleDessertSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      return CastleDessertSlumPackageBuyDialog.TITLE_TEXT_COLOR;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageBuyDialog.CastleSlumPackageBuyDialog.prototype, "titleTextColor").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDessertSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      return CastleDessertSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageBuyDialog.CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleDessertSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleDessertSlumPackageBuyDialog.NAME = "CastleDessertSlumPackageBuy";
    CastleDessertSlumPackageBuyDialog.TITLE_TEXT_COLOR = 212797;
    CastleDessertSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME = 1;
  };
  return CastleDessertSlumPackageBuyDialog;
}(__dep_export_CastleSlumPackageBuyDialog.CastleSlumPackageBuyDialog);
exports.CastleDessertSlumPackageBuyDialog = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
