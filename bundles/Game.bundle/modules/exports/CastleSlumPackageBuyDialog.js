Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleSlumPackageBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSlumPackageBuyDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlumPackageBuyDialog, __s1param0);
  CastleSlumPackageBuyDialog.prototype.handleBuyButton = function () {
    var __s5local0 = this.slumBuyDialogProperties;
    if (__s5local0.activeSlumLevel < __s5local0.level) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.toolTipText = {
        t: "dialog_village_buy_levellock",
        p: [__s5local0.level]
      };
    } else {
      __s1param0.prototype.handleBuyButton.call(this);
    }
  };
  Object.defineProperty(CastleSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumPackageBuyDialog.prototype.applyPropertiesLoaded = function (__s13param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s13param0);
    this.setTitleTextColor(this.titleTextColor);
    this.dialogDisp.mc_titleBG.gotoAndStop(this.titleBackgroundFrame);
    this.dialogProperties.eventPackageVO;
    this.dialogDisp.mc_ring.visible = false;
  };
  Object.defineProperty(CastleSlumPackageBuyDialog.prototype, "slumBuyDialogProperties", {
    get: function () {
      return this.dialogProperties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleSlumPackageBuyDialog.ASSET_NAME = "CastleSlumPackageBuy";
  };
  return CastleSlumPackageBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleSlumPackageBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
