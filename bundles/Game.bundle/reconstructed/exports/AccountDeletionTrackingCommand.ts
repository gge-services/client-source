import { AccountDeletionTrackingEvent } from "./AccountDeletionTrackingEvent";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { ClientConstTracking } from "./ClientConstTracking";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TrackingCache } from "../../../ggs.dll/reconstructed/exports/TrackingCache";
export class AccountDeletionTrackingCommand extends SimpleCommand {
  execute(__s5param0) {
    if (!TrackingCache.getInstance().getEvent(ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID)) {
      TrackingCache.getInstance().cacheEvent(ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID, new AccountDeletionTrackingEvent(EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = TrackingCache.getInstance().getEvent(ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID);
    __s5local0.playerId = BasicModel.userData.playerID;
    __s5local0.date = Math.round(new Date().time / 1000);
    __s5local0.actionType = __s5param0[0];
    TrackingCache.getInstance().sendEvent(ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID);
  }
}
