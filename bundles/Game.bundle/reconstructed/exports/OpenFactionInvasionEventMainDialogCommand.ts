import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFactionInvasionEventDialog } from "./CastleFactionInvasionEventDialog";
import { FactionInvasionDialogProperties } from "./FactionInvasionDialogProperties";
import { getDefinitionByName } from "../../../ggs.dll/reconstructed/exports/getDefinitionByName";
import { OpenDialogWithAdditionalExternalAssetsCommand } from "./OpenDialogWithAdditionalExternalAssetsCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenFactionInvasionEventMainDialogCommand extends OpenDialogWithAdditionalExternalAssetsCommand {
  addAssets(__s5param0) {
    this.loadAsset("GallantryTitlesSublayer", "GallantryTitlesSublayer");
  }
  openDialog() {
    var __s7local0 = this.getSublayerMc();
    this.open(__s7local0);
  }
  open(__s9param0) {
    var __s9local0 = new FactionInvasionDialogProperties();
    __s9local0.titlesSublayer = __s9param0;
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleFactionInvasionEventDialog, __s9local0);
  }
  getSublayerMc() {
    return new (getDefinitionByName("GallantryTitlesSublayer"))();
  }
}
classImplementsInterfaces(OpenFactionInvasionEventMainDialogCommand, "ISimpleCommand");
