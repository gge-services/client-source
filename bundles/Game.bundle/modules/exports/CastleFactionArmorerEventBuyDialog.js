Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleFactionArmorerEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionArmorerEventBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionArmorerEventBuyDialog, __s1param0);
  CastleFactionArmorerEventBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.setDescriptionText("dialog_faction_armorerBuy_desc");
  };
  CastleFactionArmorerEventBuyDialog.__initialize_static_members = function () {
    CastleFactionArmorerEventBuyDialog.NAME = "CastleFactionArmorerEventBuyExternal";
  };
  return CastleFactionArmorerEventBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleFactionArmorerEventBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
