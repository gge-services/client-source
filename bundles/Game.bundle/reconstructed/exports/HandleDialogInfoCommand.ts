import { BasicClientCommand } from "../../../ggs.dll/reconstructed/exports/BasicClientCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class HandleDialogInfoCommand extends BasicClientCommand {
  execute(__s5param0 = null) {
    super.execute();
    if (__s5param0) {
      if (!instanceOfClass(__s5param0, "DialogInfoVO")) {
        throw new Error("Argument must be a DialogInfoVO!");
      }
      var __s5local0 = __s5param0;
      if (__s5local0.dialogClass) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(__s5local0.dialogClass, __s5local0.properties);
      } else if (__s5local0.command) {
        CommandController.instance.executeCommand(__s5local0.command, __s5local0.parameter);
      }
    }
  }
}
classImplementsInterfaces(HandleDialogInfoCommand, "ISimpleCommand");
