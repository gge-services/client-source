Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function (__s1param0) {
  function CastleNomadInvasionMerchantSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_nomadInvasion_desc"));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadInvasionMerchantSublayer, __s1param0);
  CastleNomadInvasionMerchantSublayer.prototype.getDescriptionText = function () {
    return "dialog_nomadInvasion_trader_desc";
  };
  CastleNomadInvasionMerchantSublayer.prototype.getCurrencies = function () {
    return [new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET)];
  };
  CastleNomadInvasionMerchantSublayer.prototype.getHelpText = function () {
    return "help_nomadinvasion";
  };
  CastleNomadInvasionMerchantSublayer.prototype.getMerchantScrollItem = function () {
    return __dep_export_CastleNomadInvasionMerchantScrollItem.CastleNomadInvasionMerchantScrollItem;
  };
  return CastleNomadInvasionMerchantSublayer;
}(require("gge-module:export_CastleAbstractInvasionMerchantSublayer").CastleAbstractInvasionMerchantSublayer);
exports.CastleNomadInvasionMerchantSublayer = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleNomadInvasionMerchantScrollItem = require("gge-module:export_CastleNomadInvasionMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
