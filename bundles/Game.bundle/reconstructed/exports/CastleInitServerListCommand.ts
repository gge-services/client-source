import { BasicClientCommand } from "../../../ggs.dll/reconstructed/exports/BasicClientCommand";
import { TestInstanceVO } from "../../../ggs.dll/reconstructed/exports/TestInstanceVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleInitServerListCommand extends BasicClientCommand {
  initAdditionalServer() {}
  createInstanceVO_EM(argument0, argument1, argument2, argument3, argument4, argument5 = 4) {
    var __s7local0 = new TestInstanceVO();
    __s7local0.ip = argument0;
    __s7local0.port = argument1;
    __s7local0.zone = argument2;
    __s7local0.zoneId = argument5;
    __s7local0.instanceId = argument3;
    __s7local0.instanceLocaId = argument4;
    return __s7local0;
  }
}
classImplementsInterfaces(CastleInitServerListCommand, "ISimpleCommand");
