import { BasicCommand } from "../../../ggs.dll/reconstructed/exports/BasicCommand";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { CastleBasicController } from "./CastleBasicController";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { CommandDelayController } from "./CommandDelayController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ServerErrorVO } from "../../../ggs.dll/reconstructed/exports/ServerErrorVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleCommand extends BasicCommand {
  constructor(...args) {
    super(...args);
  }
  get env() {
    return EnvGlobalsHandler.globals;
  }
  set env(value) {
    super.env = value;
  }
  executeCommand(argument0, argument1) {
    if (this.delayCommandController.isDelayedCommand(this.cmdId)) {
      this.delayCommandController.addDelayCommand(this.cmdId, this, [argument0, argument1]);
    } else {
      this.exec([argument0, argument1]);
    }
    return false;
  }
  exec(argument0) {
    throw new Error("method needs to be overriden");
  }
  showErrorDialog(argument0, argument1) {
    if (CastleModel.tutorialData.isTutorialActive) {
      switch (argument0) {
        case ERROR.INVALID_OBJECT_ID:
          return;
      }
    } else {
      CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_SERVER_ERROR, new ServerErrorVO(argument0, argument1, this.cmdId));
    }
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  get delayCommandController() {
    return CommandDelayController.getInstance();
  }
}
classImplementsInterfaces(CastleCommand, "IExecCommand");
