import { CastleBasicController } from "./CastleBasicController";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CollectableRendererList } from "./CollectableRendererList";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { GoodgameTextFieldManager } from "../../../ggs.dll/reconstructed/exports/GoodgameTextFieldManager";
export class CastleComponent extends CollectableRendererList {
  destroy() {
    this.destroyCollectableRenderList();
  }
  static get textFieldManager() {
    return GoodgameTextFieldManager.getInstance();
  }
  static get dialogHandler() {
    return CastleDialogHandler.getInstance();
  }
  static get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  static get controller() {
    return CastleBasicController.getInstance();
  }
  static get castleEnv() {
    return EnvGlobalsHandler.globals;
  }
}
