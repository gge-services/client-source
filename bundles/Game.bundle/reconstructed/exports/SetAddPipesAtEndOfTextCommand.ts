import { CastleModel } from "./CastleModel";
import { Localization } from "../../../ggs.dll/reconstructed/exports/Localization";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SetAddPipesAtEndOfTextCommand extends SimpleCommand {
  constructor(__s3param0 = false) {
    super(__s3param0);
  }
  execute(__s5param0 = null) {
    super.execute(__s5param0);
    var __s5local0 = CastleModel.localData.readAddPipesOnEndOfText();
    CastleModel.languageData.addPipeToEndOfString = __s5local0;
    Localization.usePipe = __s5local0;
  }
}
classImplementsInterfaces(SetAddPipesAtEndOfTextCommand, "ISimpleCommand");
