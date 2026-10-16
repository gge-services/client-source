Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleUnitDealerEventBuyDialog() {
    return __s1param0.call(this, CastleUnitDealerEventBuyDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnitDealerEventBuyDialog, __s1param0);
  CastleUnitDealerEventBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.dialogDisp.mc_titleBG.gotoAndStop(3);
    this.dialogDisp.btn_info.visible = true;
  };
  CastleUnitDealerEventBuyDialog.__initialize_static_members = function () {
    CastleUnitDealerEventBuyDialog.NAME = "CastleUnitDealerEventBuy";
    CastleUnitDealerEventBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  };
  return CastleUnitDealerEventBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleUnitDealerEventBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
