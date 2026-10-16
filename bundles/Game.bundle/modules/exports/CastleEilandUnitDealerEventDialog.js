Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleEilandUnitDealerEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEilandUnitDealerEventDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandUnitDealerEventDialog, __s1param0);
  Object.defineProperty(CastleEilandUnitDealerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleEilandUnitDealerEventScrollItem.CastleEilandUnitDealerEventScrollItem;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandUnitDealerEventDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_toolShop_copy")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_unitLimit.visible = false;
  };
  CastleEilandUnitDealerEventDialog.__initialize_static_members = function () {
    CastleEilandUnitDealerEventDialog.NAME = "CastleEilandUnitDealerEventExternal";
    CastleEilandUnitDealerEventDialog.ASSET_NAME = "CastleUnitEvent";
  };
  return CastleEilandUnitDealerEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleEilandUnitDealerEventDialog = __s0local0;
var __dep_export_CastleEilandUnitDealerEventScrollItem = require("gge-module:export_CastleEilandUnitDealerEventScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
