import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicInitalizeControllerCommand } from "../../../ggs.dll/reconstructed/exports/BasicInitalizeControllerCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleSoundController } from "./CastleSoundController";
import { info } from "../../../ggs.dll/reconstructed/exports/info";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleInitalizeControllerCommand extends BasicInitalizeControllerCommand {
  initializeGameControllers() {
    info("Initialize controllers");
    this.layoutManager.onStartProgressbar();
    if (!BasicController.getInstance().soundController) {
      this.initSoundController(new CastleSoundController());
    }
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
classImplementsInterfaces(CastleInitalizeControllerCommand, "ISimpleCommand");
