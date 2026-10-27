import { AddExtraCurrencyVO } from "../../../ggs.dll/reconstructed/exports/AddExtraCurrencyVO";
import { BasicAddExtraCurrencyCommand } from "../../../ggs.dll/reconstructed/exports/BasicAddExtraCurrencyCommand";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleAddExtraCurrencyCommand extends BasicAddExtraCurrencyCommand {
  execute(argument0 = null) {
    var __s5local0 = argument0;
    super.execute(new AddExtraCurrencyVO(BasicController.getInstance().paymentHash, __s5local0.sourceId, __s5local0.shopTab));
  }
}
classImplementsInterfaces(CastleAddExtraCurrencyCommand, "ISimpleCommand");
