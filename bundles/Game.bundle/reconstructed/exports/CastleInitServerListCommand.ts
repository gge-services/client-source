import { BasicClientCommand } from "../../../ggs.dll/reconstructed/exports/BasicClientCommand";
import { TestInstanceVO } from "../../../ggs.dll/reconstructed/exports/TestInstanceVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleInitServerListCommand extends BasicClientCommand {
  initAdditionalServer() {}
  createInstanceVO_EM(__s7param0, __s7param1, __s7param2, __s7param3, __s7param4, __s7param5 = 4) {
    var __s7local0 = new TestInstanceVO();
    __s7local0.ip = __s7param0;
    __s7local0.port = __s7param1;
    __s7local0.zone = __s7param2;
    __s7local0.zoneId = __s7param5;
    __s7local0.instanceId = __s7param3;
    __s7local0.instanceLocaId = __s7param4;
    return __s7local0;
  }
}
classImplementsInterfaces(CastleInitServerListCommand, "ISimpleCommand");
