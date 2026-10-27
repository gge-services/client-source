import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenEventDialogCommand extends SimpleCommand {
  execute(argument0?: any) {
    var __s5local0;
    if (argument0 === undefined) {
      argument0 = null;
    }
    var __s5local1 = true;
    if (instanceOfClass(argument0, "Array")) {
      if (argument0.length >= 1) {
        __s5local0 = argument0[0];
      }
      if (argument0.length >= 2) {
        __s5local1 = argument0[1];
      }
    } else {
      __s5local0 = argument0;
    }
    if (__s5local0) {
      __s5local0.openDialog(__s5local1);
    }
  }
}
classImplementsInterfaces(OpenEventDialogCommand, "ISimpleCommand");
