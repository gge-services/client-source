Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleEilandUnitDealerEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEilandUnitDealerEventBuyDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandUnitDealerEventBuyDialog, __s1param0);
  CastleEilandUnitDealerEventBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.dialogDisp.mc_titleBG.gotoAndStop(3);
  };
  CastleEilandUnitDealerEventBuyDialog.__initialize_static_members = function () {
    CastleEilandUnitDealerEventBuyDialog.NAME = "CastleEilandUnitDealerEventBuy";
    CastleEilandUnitDealerEventBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  };
  return CastleEilandUnitDealerEventBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleEilandUnitDealerEventBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
