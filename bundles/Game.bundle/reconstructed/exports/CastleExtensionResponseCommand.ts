import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { DictionaryUtil } from "../../../ggs.dll/reconstructed/exports/DictionaryUtil";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleExtensionResponseCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0;
    var __s5local1 = argument0;
    var __s5local2 = int(__s5local1.params[0]);
    if (DictionaryUtil.containsKey(BasicController.commandDict, __s5local1.cmdId)) {
      __s5local0 = BasicController.commandDict.get(__s5local1.cmdId);
      EnvGlobalsHandler.globals.lastUsedCommandName = __s5local1.cmdId;
      __s5local0.executeCommand(__s5local2, __s5local1.params);
      BasicController.getInstance().serverMessageArrived(__s5local1.cmdId);
    } else {
      console.warn("UNKNOWN COMMAND " + __s5local1.cmdId);
    }
  }
}
classImplementsInterfaces(CastleExtensionResponseCommand, "ISimpleCommand");
