import { BasicDestroyGameCommand } from "../../../ggs.dll/reconstructed/exports/BasicDestroyGameCommand";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleIngameMessageHandler } from "./CastleIngameMessageHandler";
import { CastleModel } from "./CastleModel";
import { cxfResetCommandCache } from "./cxfResetCommandCache";
import { Iso } from "./Iso";
import { LordEffectHelper } from "./LordEffectHelper";
import { OpenTipDialogCommand } from "./OpenTipDialogCommand";
import { TweenMax } from "../../../ggs.dll/reconstructed/exports/TweenMax";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleDestroyGameCommand extends BasicDestroyGameCommand {
  destroyGameSpecificObjects() {
    cxfResetCommandCache();
    CastleDataHolder.instance.gbdParsed = false;
    CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
    CastleModel.settingsData.isLoginReady = false;
    CastleIngameMessageHandler.getInstance().destroy();
    LordEffectHelper.resetCategoryItems();
    OpenTipDialogCommand.repairShown = 0;
    TweenMax.killAll();
    Iso.destroy();
    CastleModel.resetModels();
  }
}
classImplementsInterfaces(CastleDestroyGameCommand, "ISimpleCommand");
