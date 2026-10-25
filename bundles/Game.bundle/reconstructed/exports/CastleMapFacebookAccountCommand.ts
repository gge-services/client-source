import { C2SMapFacebookVO } from "./C2SMapFacebookVO";
import { CastleBasicController } from "./CastleBasicController";
import { CastleFacebookEvent } from "./CastleFacebookEvent";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleFacebookSDKEvent } from "./CastleFacebookSDKEvent";
import { CastleLogoutEvent } from "./CastleLogoutEvent";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class CastleMapFacebookAccountCommand extends SimpleCommand {
  execute(__s5param0) {
    this.removeListeners();
    if (__s5param0) {
      this.controller.addEventListener(CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
      this.controller.addEventListener(CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
      this.controller.addEventListener(CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
      CastleFacebookModule.login();
    } else {
      this.unmap();
    }
  }
  onFbCancel(__s9param0) {
    this.controller.removeEventListener(CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.controller.dispatchEvent(new CastleFacebookEvent(CastleFacebookEvent.FACEBOOK_ACTION_CANCELED));
  }
  onFBLoggedIn(__s11param0) {
    this.controller.removeEventListener(CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.map();
  }
  map() {
    this.addMappingListeners();
    this.controller.addEventListener(CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    CastleModel.userData.isConnectedToFacebook = true;
    CastleModel.localData.saveFacebookID(CastleFacebookModule.userID);
    CastleModel.smartfoxClient.sendCommandVO(new C2SMapFacebookVO(true, CastleFacebookModule.userID, CastleFacebookModule.accessToken, CastleFacebookModule.appID));
  }
  onLogout(__s15param0) {
    this.removeMappingListeners();
    this.controller.removeEventListener(CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
  }
  unmap() {
    this.addMappingListeners();
    this.controller.addEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
    CastleModel.smartfoxClient.sendCommandVO(new C2SMapFacebookVO(false, CastleFacebookModule.userID, CastleFacebookModule.accessToken, CastleFacebookModule.appID));
  }
  onUnmapFailed(__s19param0) {
    this.controller.removeEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
    CastleModel.userData.isConnectedToFacebook = true;
  }
  addMappingListeners() {
    this.controller.addEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.addEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  }
  removeMappingListeners() {
    this.controller.removeEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.removeEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  }
  onMappingUpdated(__s25param0) {
    this.removeMappingListeners();
    if (CastleModel.userData.isConnectedToFacebook) {
      __s0local0.debug("Facebook_User <--> Player mapped successfully");
      CastleModel.localData.saveFacebookID(CastleFacebookModule.userID);
      CommandController.instance.executeCommand(IngameClientCommands.GET_FACEBOOK_USER_DATA, false);
    } else {
      __s0local0.debug("Facebook_User <--> Player UNmapped successfully");
      this.controller.removeEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
      if (CastleFacebookModule.hasAuthResponse) {
        CastleFacebookModule.revokeLogin();
      }
      CastleModel.userData.resetFacebookData();
    }
  }
  removeListeners() {
    this.controller.removeEventListener(CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.removeEventListener(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
    this.controller.removeEventListener(CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
}
