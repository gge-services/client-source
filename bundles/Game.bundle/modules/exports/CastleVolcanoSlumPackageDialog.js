Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSlumPackageDialog = require("gge-module:export_CastleSlumPackageDialog");
var __s0local0 = function (__s1param0) {
  function CastleVolcanoSlumPackageDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVolcanoSlumPackageDialog, __s1param0);
  Object.defineProperty(CastleVolcanoSlumPackageDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_VolcanoSlumPackageScrollItem.VolcanoSlumPackageScrollItem;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageDialog.CastleSlumPackageDialog.prototype, "merchantScrollItem").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleVolcanoSlumPackageDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.setSlumText("dialog_village_copy_vulcan");
  };
  Object.defineProperty(CastleVolcanoSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      return 3;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageDialog.CastleSlumPackageDialog.prototype, "backgroundFrame").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleVolcanoSlumPackageDialog.__initialize_static_members = function () {
    CastleVolcanoSlumPackageDialog.NAME = "CastleVolcanoSlumPackage";
  };
  return CastleVolcanoSlumPackageDialog;
}(__dep_export_CastleSlumPackageDialog.CastleSlumPackageDialog);
exports.CastleVolcanoSlumPackageDialog = __s0local0;
var __dep_export_VolcanoSlumPackageScrollItem = require("gge-module:export_VolcanoSlumPackageScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
