import { AddExtraCurrencyVO } from "../../../ggs.dll/reconstructed/exports/AddExtraCurrencyVO";
import { BasicAddExtraCurrencyCommand } from "../../../ggs.dll/reconstructed/exports/BasicAddExtraCurrencyCommand";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
export class CastleAddExtraCurrencyCommand extends BasicAddExtraCurrencyCommand {
  execute(__s5param0 = null) {
    var __s5local0 = __s5param0;
    super.execute(new AddExtraCurrencyVO(BasicController.getInstance().paymentHash, __s5local0.sourceId, __s5local0.shopTab));
  }
}
