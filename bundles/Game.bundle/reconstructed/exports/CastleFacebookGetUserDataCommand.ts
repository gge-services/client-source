import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleStringHelper } from "./CastleStringHelper";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { OptionsDialog } from "./OptionsDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TrackingCache } from "../../../ggs.dll/reconstructed/exports/TrackingCache";
import { TrackingEventIds } from "../../../ggs.dll/reconstructed/exports/TrackingEventIds";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
class FacebookUserData {}
const __s0local1 = FacebookUserData;
export class CastleFacebookGetUserDataCommand extends SimpleCommand {
  execute(argument0) {
    CastleFacebookModule.getUserData(function (__s7param0) {
      if (__s7param0) {
        CastleModel.userData.facebookEmail = CastleStringHelper.parseToStringOrEmpty(__s7param0.email);
        new __s0local1();
        if (!argument0 && !CastleLayoutManager.getInstance().isDialogVisibleByName(OptionsDialog)) {
          return;
        }
        var __s7local0 = TrackingCache.getInstance().getEvent(TrackingEventIds.FACEBOOK_USER_DATA);
        __s7local0.playerId = CastleModel.userData.playerID;
        __s7local0.email = CastleModel.userData.facebookEmail;
        JSON.stringify(__s7param0);
        debug("Track FacebookUserData,playerId : " + __s7local0.getVars().playerId + ", email: " + __s7local0.getVars().email);
        console.warn("Track FacebookUserData,playerId : " + __s7local0.getVars().playerId + ", email: " + __s7local0.getVars().email + "\nFBData: " + JSON.stringify(__s7param0));
        TrackingCache.getInstance().sendEvent(TrackingEventIds.FACEBOOK_USER_DATA);
      }
    });
  }
}
classImplementsInterfaces(CastleFacebookGetUserDataCommand, "ISimpleCommand");
