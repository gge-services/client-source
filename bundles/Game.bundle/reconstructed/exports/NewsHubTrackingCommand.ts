import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { ClientConstTracking } from "./ClientConstTracking";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { NewsHubTrackingEvent } from "./NewsHubTrackingEvent";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TrackingCache } from "../../../ggs.dll/reconstructed/exports/TrackingCache";
export class NewsHubTrackingCommand extends SimpleCommand {
  execute(argument0) {
    if (!TrackingCache.getInstance().getEvent(ClientConstTracking.NEWSHUB_OPENED_TRACKING_ID)) {
      TrackingCache.getInstance().cacheEvent(ClientConstTracking.NEWSHUB_OPENED_TRACKING_ID, new NewsHubTrackingEvent(EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = TrackingCache.getInstance().getEvent(ClientConstTracking.NEWSHUB_OPENED_TRACKING_ID);
    __s5local0.playerId = BasicModel.userData.playerID;
    __s5local0.date = Math.round(new Date().time / 1000);
    __s5local0.sourceName = argument0[0];
    TrackingCache.getInstance().sendEvent(ClientConstTracking.NEWSHUB_OPENED_TRACKING_ID);
  }
}
