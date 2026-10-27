import { BrowserUtil } from "../../../ggs.dll/reconstructed/exports/BrowserUtil";
import { CastleBasicController } from "./CastleBasicController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { SocialButtonTrackingEvent } from "./SocialButtonTrackingEvent";
import { URLRequest } from "../../../ggs.dll/reconstructed/exports/URLRequest";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleOpenDiscordCommand extends SimpleCommand {
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  execute(argument0 = null) {
    var __s5local0 = new URLRequest(CastleOpenDiscordCommand.DISCORD_URL);
    BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
    CommandController.instance.executeCommand(CastleBasicController.TRACK_SOCIAL_BUTTON, argument0 || [SocialButtonTrackingEvent.BUTTON_NAME_DISCORD]);
  }
  static DISCORD_URL = "https://www.discord.gg/goodgamestudios";
}
classImplementsInterfaces(CastleOpenDiscordCommand, "ISimpleCommand");
