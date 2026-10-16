Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_C2SCaravanOverloaderStartVO = require("gge-module:export_C2SCaravanOverloaderStartVO");
var __dep_export_C2SInstructorStartVO = require("gge-module:export_C2SInstructorStartVO");
var __dep_export_C2SMarauderStartVO = require("gge-module:export_C2SMarauderStartVO");
var __dep_export_C2SOverseerStartVO = require("gge-module:export_C2SOverseerStartVO");
var __s0local0 = function (__s1param0) {
  function BuyBoosterCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuyBoosterCommand, __s1param0);
  BuyBoosterCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0.finalCostsC2);
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < __s5local1) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    } else {
      switch (__s5local0.id) {
        case __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SInstructorStartVO.C2SInstructorStartVO(__dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.MARAUDER:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarauderStartVO.C2SMarauderStartVO(__dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.MARAUDER)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_FOOD:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_FOOD, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_FOOD)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_STONE:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_STONE, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_STONE)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_WOOD:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_WOOD, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_WOOD)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_MEAD:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_MEAD, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_MEAD)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BEEF:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_BEEF, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BEEF)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_HONEY:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_HONEY, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_HONEY)));
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.TAX:
          var __s5local2 = JSON.stringify({
            PO: __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.TAX)
          });
          __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendServerMessageAndWait(__dep_export_ClientConstSF.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR, [__s5local2], __dep_export_ClientConstSF.ClientConstSF.S2C_BRIBE_TAX_COLLECTOR);
          break;
        case __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCaravanOverloaderStartVO.C2SCaravanOverloaderStartVO(__dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER)));
      }
    }
  };
  return BuyBoosterCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.BuyBoosterCommand = __s0local0;
var __dep_export_CastlePremiumBoostData = require("gge-module:export_CastlePremiumBoostData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
