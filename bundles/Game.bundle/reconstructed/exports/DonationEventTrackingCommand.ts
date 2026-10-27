import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { ClientConstTracking } from "./ClientConstTracking";
import { DonationEventTrackingEvent } from "./DonationEventTrackingEvent";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TrackingCache } from "../../../ggs.dll/reconstructed/exports/TrackingCache";
export class DonationEventTrackingCommand extends SimpleCommand {
  execute(argument0) {
    if (!TrackingCache.getInstance().getEvent(ClientConstTracking.DONATION_EVENT_ID)) {
      TrackingCache.getInstance().cacheEvent(ClientConstTracking.DONATION_EVENT_ID, new DonationEventTrackingEvent(EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = TrackingCache.getInstance().getEvent(ClientConstTracking.DONATION_EVENT_ID);
    __s5local0.playerId = BasicModel.userData.playerID;
    __s5local0.date = Math.round(new Date().time / 1000);
    __s5local0.actionType = argument0[0];
    TrackingCache.getInstance().sendEvent(ClientConstTracking.DONATION_EVENT_ID);
  }
}
