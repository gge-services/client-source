Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function FusionForgeHubDialogCatalysts(__s3param0) {
    var __s3local0 = this;
    __s3local0._lists = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogCatalysts, __s1param0);
  FusionForgeHubDialogCatalysts.prototype.init = function () {
    this.dialogDisp.mc_equipment.visible = false;
  };
  FusionForgeHubDialogCatalysts.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.updateCatalystLists();
    if (this._lists != null) {
      for (var __s7local0 = 0, __s7local1 = this._lists; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
          __s7local2.update();
        }
      }
    }
  };
  FusionForgeHubDialogCatalysts.prototype.hide = function () {
    if (this._lists != null) {
      for (var __s13local0 = 0, __s13local1 = this._lists; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.hide.call(this);
  };
  FusionForgeHubDialogCatalysts.prototype.updateCatalystLists = function () {
    if (this._lists) {
      if (this._lists != null) {
        for (var __s19local0 = 0, __s19local1 = this._lists; __s19local0 < __s19local1.length; __s19local0++) {
          var __s19local2 = __s19local1[__s19local0];
          if (__s19local2 !== undefined) {
            __s19local2.destroy();
          }
        }
      }
      this._lists = null;
    }
    this._lists = [];
    for (var __s19local3 = 0; __s19local3 < FusionForgeHubDialogCatalysts.LIST_PARAMS.length; ++__s19local3) {
      this._lists.push(new __dep_export_FusionForgeHubDialogCatalystsList.FusionForgeHubDialogCatalystsList(this.dialogDisp.getChildByName(FusionForgeHubDialogCatalysts.LIST_PARAMS[__s19local3][0]), FusionForgeHubDialogCatalysts.LIST_PARAMS[__s19local3][1]));
    }
  };
  Object.defineProperty(FusionForgeHubDialogCatalysts.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  FusionForgeHubDialogCatalysts.__initialize_static_members = function () {
    FusionForgeHubDialogCatalysts.LIST_PARAMS = [["mc_deco", __dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID]];
  };
  return FusionForgeHubDialogCatalysts;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.FusionForgeHubDialogCatalysts = __s0local0;
var __dep_export_FusionForgeHubDialogCatalystsList = require("gge-module:export_FusionForgeHubDialogCatalystsList");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
