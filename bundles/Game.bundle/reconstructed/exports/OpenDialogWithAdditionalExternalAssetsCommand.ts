import { AbstractMethodError } from "./AbstractMethodError";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleExternalPreloaderDialog } from "./CastleExternalPreloaderDialog";
import { CastleExternalPreloaderDialogProperties } from "./CastleExternalPreloaderDialogProperties";
import { CastleGoodgameExternalClip } from "./CastleGoodgameExternalClip";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenDialogWithAdditionalExternalAssetsCommand extends SimpleCommand {
  constructor() {
    const __initial0 = 0;
    const __initial1 = false;
    CONSTRUCTOR_HACK;
    super();
    this.loadingQueue = __initial0;
    this.allItemsLoading = __initial1;
  }
  openDialog() {
    throw new AbstractMethodError();
  }
  addAssets(argument0) {
    throw new AbstractMethodError();
  }
  execute(argument0 = null) {
    this.allItemsLoading = false;
    this.showPreloaderDialog();
    this.addAssets(argument0);
    this.allItemsLoading = true;
    this.checkProgress();
  }
  loadAsset(argument0, argument1) {
    this.loadingQueue++;
    var __s11local0 = new CastleGoodgameExternalClip(argument0, BasicModel.basicLoaderData.getVersionedItemAssetUrl(argument1), null, 0, false);
    if (__s11local0.isLoaded) {
      this.loadingComplete(__s11local0);
    } else {
      __s11local0.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
  }
  loadingComplete(argument0) {
    this.loadingQueue--;
    this.checkProgress();
  }
  checkProgress() {
    if (this.allItemsLoading && this.loadingQueue == 0) {
      this.hidePreloaderDialog();
      this.openDialog();
    }
  }
  showPreloaderDialog() {
    CastleDialogHandler.getInstance().registerDialogsWithType(CastleExternalPreloaderDialog, new CastleExternalPreloaderDialogProperties(null), false, CastleDialogConsts.PRIORITY_TOP, 0, CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  }
  hidePreloaderDialog() {
    CastleLayoutManager.getInstance().hideDialog(CastleExternalPreloaderDialog);
  }
}
classImplementsInterfaces(OpenDialogWithAdditionalExternalAssetsCommand, "ISimpleCommand");
