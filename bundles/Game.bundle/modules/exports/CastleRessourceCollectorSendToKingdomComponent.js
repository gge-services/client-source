Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRessourceCollectorSendToKingdomComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = this;
    __s3local0.taxrate = 0;
    __s3local0.isSubscriptionBuffed = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).taxrate = __s3param1;
    __s3local0.donateComponent.mc_tax.mc_taxIcon.toolTipText = "kingdom_sendResources_malus";
    __s3local0.donateComponent.mc_sendToKingdom.mc_resToKingdom.toolTipText = "kingdom_sendResources_resourcesReallyArrived";
    __s3local0.itxt_tax = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.donateComponent.mc_tax.txt_tax, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_sendTo = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.donateComponent.mc_sendToKingdom.txt_sendToKingdom, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    if (__s3param4) {
      __s3param4.toolTipText = "storage_capacity";
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param4.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s3param2, __s3param3])).autoFitToBounds = true;
    }
    __s3local0.isSubscriptionBuffed = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRessourceCollectorSendToKingdomComponent, __s1param0);
  CastleRessourceCollectorSendToKingdomComponent.prototype.setAmountText = function () {
    __s1param0.prototype.setAmountText.call(this);
    var __s6local0 = Math.round(this.getSelectedAmount() * (1 - this.taxrate));
    this.donateComponent.mc_tax.visible = __s6local0 > 0;
    this.donateComponent.mc_sendToKingdom.visible = __s6local0 > 0;
    this.itxt_tax.textContentVO.numberValue = __s6local0;
    this.itxt_sendTo.textContentVO.numberValue = this.getSelectedAmount() - __s6local0;
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_tax, this.isSubscriptionBuffed, 20, new __s0local0(-30, -12));
  };
  return CastleRessourceCollectorSendToKingdomComponent;
}(__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent);
exports.CastleRessourceCollectorSendToKingdomComponent = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
