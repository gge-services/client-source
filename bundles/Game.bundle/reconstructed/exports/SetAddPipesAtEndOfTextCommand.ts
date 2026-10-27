import { CastleModel } from "./CastleModel";
import { Localization } from "../../../ggs.dll/reconstructed/exports/Localization";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SetAddPipesAtEndOfTextCommand extends SimpleCommand {
  constructor(argument0 = false) {
    super(argument0);
  }
  execute(argument0 = null) {
    super.execute(argument0);
    var __s5local0 = CastleModel.localData.readAddPipesOnEndOfText();
    CastleModel.languageData.addPipeToEndOfString = __s5local0;
    Localization.usePipe = __s5local0;
  }
}
classImplementsInterfaces(SetAddPipesAtEndOfTextCommand, "ISimpleCommand");
