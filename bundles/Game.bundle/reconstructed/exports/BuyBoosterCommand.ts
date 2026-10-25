import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BoosterConst } from "../../../ggs.dll/reconstructed/exports/BoosterConst";
import { C2SCaravanOverloaderStartVO } from "./C2SCaravanOverloaderStartVO";
import { C2SInstructorStartVO } from "./C2SInstructorStartVO";
import { C2SMarauderStartVO } from "./C2SMarauderStartVO";
import { C2SOverseerStartVO } from "./C2SOverseerStartVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleNoMoneyC2Dialog } from "./CastleNoMoneyC2Dialog";
import { CastleNoMoneyC2DialogProperties } from "./CastleNoMoneyC2DialogProperties";
import { CastlePremiumBoostData } from "./CastlePremiumBoostData";
import { ClientConstSF } from "./ClientConstSF";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class BuyBoosterCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = int(__s5local0.finalCostsC2);
    if (CastleModel.currencyData.c2Amount < __s5local1) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC2Dialog, new CastleNoMoneyC2DialogProperties());
    } else {
      switch (__s5local0.id) {
        case BoosterConst.INSTRUCTOR:
          CastleModel.smartfoxClient.sendCommandVO(new C2SInstructorStartVO(CastleModel.boosterSaleData.getOfferId(BoosterConst.INSTRUCTOR)));
          break;
        case BoosterConst.MARAUDER:
          CastleModel.smartfoxClient.sendCommandVO(new C2SMarauderStartVO(CastleModel.boosterSaleData.getOfferId(BoosterConst.MARAUDER)));
          break;
        case BoosterConst.OVERSEER_FOOD:
          CastleModel.smartfoxClient.sendCommandVO(new C2SOverseerStartVO(CastlePremiumBoostData.BOOST_FOOD, CastleModel.boosterSaleData.getOfferId(BoosterConst.OVERSEER_FOOD)));
          break;
        case BoosterConst.OVERSEER_STONE:
          CastleModel.smartfoxClient.sendCommandVO(new C2SOverseerStartVO(CastlePremiumBoostData.BOOST_STONE, CastleModel.boosterSaleData.getOfferId(BoosterConst.OVERSEER_STONE)));
          break;
        case BoosterConst.OVERSEER_WOOD:
          CastleModel.smartfoxClient.sendCommandVO(new C2SOverseerStartVO(CastlePremiumBoostData.BOOST_WOOD, CastleModel.boosterSaleData.getOfferId(BoosterConst.OVERSEER_WOOD)));
          break;
        case BoosterConst.OVERSEER_MEAD:
          CastleModel.smartfoxClient.sendCommandVO(new C2SOverseerStartVO(CastlePremiumBoostData.BOOST_MEAD, CastleModel.boosterSaleData.getOfferId(BoosterConst.OVERSEER_MEAD)));
          break;
        case BoosterConst.OVERSEER_BEEF:
          CastleModel.smartfoxClient.sendCommandVO(new C2SOverseerStartVO(CastlePremiumBoostData.BOOST_BEEF, CastleModel.boosterSaleData.getOfferId(BoosterConst.OVERSEER_BEEF)));
          break;
        case BoosterConst.OVERSEER_HONEY:
          CastleModel.smartfoxClient.sendCommandVO(new C2SOverseerStartVO(CastlePremiumBoostData.BOOST_HONEY, CastleModel.boosterSaleData.getOfferId(BoosterConst.OVERSEER_HONEY)));
          break;
        case BoosterConst.TAX:
          var __s5local2 = JSON.stringify({
            PO: CastleModel.boosterSaleData.getOfferId(BoosterConst.TAX)
          });
          BasicController.getInstance().sendServerMessageAndWait(ClientConstSF.C2S_BRIBE_TAX_COLLECTOR, [__s5local2], ClientConstSF.S2C_BRIBE_TAX_COLLECTOR);
          break;
        case BoosterConst.CARAVAN_OVERLOADER:
          CastleModel.smartfoxClient.sendCommandVO(new C2SCaravanOverloaderStartVO(CastleModel.boosterSaleData.getOfferId(BoosterConst.CARAVAN_OVERLOADER)));
      }
    }
  }
}
