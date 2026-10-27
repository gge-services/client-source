import { AbstractMethodError } from "./AbstractMethodError";
import { CastleCommand } from "./CastleCommand";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleDispatchingCommand extends CastleCommand {
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    this.dispatchArrivedEvent(statusCode, responseFields);
    return false;
  }
  dispatchArrivedEvent(argument0, argument1) {
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(this.eventType, [argument0, argument1]));
  }
  get eventType() {
    throw new AbstractMethodError();
  }
}
classImplementsInterfaces(CastleDispatchingCommand, "IExecCommand");
