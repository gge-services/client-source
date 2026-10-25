import { AttackScreenGeneralsTrackingEvent } from "./AttackScreenGeneralsTrackingEvent";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { ClientConstTracking } from "./ClientConstTracking";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TrackingCache } from "../../../ggs.dll/reconstructed/exports/TrackingCache";
export class AttackScreenGeneralsTrackingCommand extends SimpleCommand {
  execute(__s5param0) {
    if (!TrackingCache.getInstance().getEvent(ClientConstTracking.GENERALS_ATTACK_SCREEN)) {
      TrackingCache.getInstance().cacheEvent(ClientConstTracking.GENERALS_ATTACK_SCREEN, new AttackScreenGeneralsTrackingEvent(EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = TrackingCache.getInstance().getEvent(ClientConstTracking.GENERALS_ATTACK_SCREEN);
    __s5local0.playerId = BasicModel.userData.playerID;
    __s5local0.sessionEnd = Math.round(new Date().time / 1000);
    __s5local0.sessionStart = __s5param0[0];
    __s5local0.details = __s5param0[1];
    __s5local0.attackLaunched = __s5param0[2];
    TrackingCache.getInstance().sendEvent(ClientConstTracking.GENERALS_ATTACK_SCREEN);
  }
}
