import { CastleDialogHandler } from "./CastleDialogHandler";
import { FactionEventMainDialog } from "./FactionEventMainDialog";
import { FactionEventMainDialogProperties } from "./FactionEventMainDialogProperties";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { OpenFactionInvasionEventMainDialogCommand } from "./OpenFactionInvasionEventMainDialogCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenFactionEventMainDialogCommand extends OpenFactionInvasionEventMainDialogCommand {
  constructor() {
    const __initial0 = 0;
    CONSTRUCTOR_HACK;
    super();
    this._subLayerID = __initial0;
  }
  addAssets(argument0) {
    super.addAssets(argument0);
    this._subLayerID = int(argument0 ? int(argument0) : -1);
  }
  open(argument0) {
    var __s7local0 = new FactionEventMainDialogProperties(this._subLayerID);
    __s7local0.titlesSublayer = argument0;
    CastleDialogHandler.getInstance().registerDefaultDialogs(FactionEventMainDialog, __s7local0);
  }
}
classImplementsInterfaces(OpenFactionEventMainDialogCommand, "ISimpleCommand");
