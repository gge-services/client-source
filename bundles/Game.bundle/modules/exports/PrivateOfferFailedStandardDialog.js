Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function (__s1param0) {
  function PrivateOfferFailedStandardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleStandardOk"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateOfferFailedStandardDialog, __s1param0);
  PrivateOfferFailedStandardDialog.prototype.applyProperties = function () {
    if (this.offerProperties && this.offerProperties.offerVO) {
      var __s5local0;
      var __s5local1;
      var __s5local2 = this.offerProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG);
      __s5local0 = !__s5local2.dialogCustomization.T || __s5local2.dialogCustomization.T.length <= 0 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_privateOffer_whaleChest_offerend") : __dep_exact_92d05af59ee2ff30.Localize.text(__s5local2.dialogCustomization.T);
      __s5local1 = !__s5local2.dialogCustomization.C || __s5local2.dialogCustomization.C.length <= 0 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_privateOffer_whaleChest_offerend_description") : __dep_exact_92d05af59ee2ff30.Localize.text(__s5local2.dialogCustomization.C);
      this.properties = new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__s5local0, __s5local1);
    }
    __s1param0.prototype.applyProperties.call(this);
  };
  Object.defineProperty(PrivateOfferFailedStandardDialog.prototype, "offerProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferFailedStandardDialog.NAME = "PrivateOfferFailedStandardDialog";
  return PrivateOfferFailedStandardDialog;
}(require("gge-module:export_CastleStandardOkDialog").CastleStandardOkDialog);
exports.PrivateOfferFailedStandardDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
