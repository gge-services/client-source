import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { ClientConstTracking } from "./ClientConstTracking";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { SsoUserMoveTrackingEvent } from "./SsoUserMoveTrackingEvent";
import { TrackingCache } from "../../../ggs.dll/reconstructed/exports/TrackingCache";
export class SsoUserMoveTrackingCommand extends SimpleCommand {
  execute(argument0) {
    if (!TrackingCache.getInstance().getEvent(ClientConstTracking.SSO_USER_MOVE_TRACKING_ID)) {
      TrackingCache.getInstance().cacheEvent(ClientConstTracking.SSO_USER_MOVE_TRACKING_ID, new SsoUserMoveTrackingEvent(EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = TrackingCache.getInstance().getEvent(ClientConstTracking.SSO_USER_MOVE_TRACKING_ID);
    __s5local0.playerId = BasicModel.userData.playerID;
    __s5local0.date = Math.round(new Date().time / 1000);
    __s5local0.actionType = argument0[0];
    __s5local0.login_method = EnvGlobalsHandler.globals.loginIsKeyBased ? SsoUserMoveTrackingEvent.LOGIN_WITH_SSO : SsoUserMoveTrackingEvent.LOGIN_WITH_PASSWORD;
    TrackingCache.getInstance().sendEvent(ClientConstTracking.SSO_USER_MOVE_TRACKING_ID);
  }
}
