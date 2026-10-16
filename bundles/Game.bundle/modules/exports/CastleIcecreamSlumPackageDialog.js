Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSlumPackageDialog = require("gge-module:export_CastleSlumPackageDialog");
var __s0local0 = function (__s1param0) {
  function CastleIcecreamSlumPackageDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleIcecreamSlumPackageDialog, __s1param0);
  Object.defineProperty(CastleIcecreamSlumPackageDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_IcecreamSlumPackageScrollItem.IcecreamSlumPackageScrollItem;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageDialog.CastleSlumPackageDialog.prototype, "merchantScrollItem").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleIcecreamSlumPackageDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.setSlumText("dialog_village_copy_ice");
  };
  Object.defineProperty(CastleIcecreamSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      return 1;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSlumPackageDialog.CastleSlumPackageDialog.prototype, "backgroundFrame").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleIcecreamSlumPackageDialog.__initialize_static_members = function () {
    CastleIcecreamSlumPackageDialog.NAME = "CastleIcecreamSlumPackage";
  };
  return CastleIcecreamSlumPackageDialog;
}(__dep_export_CastleSlumPackageDialog.CastleSlumPackageDialog);
exports.CastleIcecreamSlumPackageDialog = __s0local0;
var __dep_export_IcecreamSlumPackageScrollItem = require("gge-module:export_IcecreamSlumPackageScrollItem");
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
