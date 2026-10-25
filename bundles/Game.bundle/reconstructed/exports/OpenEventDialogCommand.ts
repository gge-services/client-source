import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenEventDialogCommand extends SimpleCommand {
  execute(__s5param0?: any) {
    var __s5local0;
    if (__s5param0 === undefined) {
      __s5param0 = null;
    }
    var __s5local1 = true;
    if (instanceOfClass(__s5param0, "Array")) {
      if (__s5param0.length >= 1) {
        __s5local0 = __s5param0[0];
      }
      if (__s5param0.length >= 2) {
        __s5local1 = __s5param0[1];
      }
    } else {
      __s5local0 = __s5param0;
    }
    if (__s5local0) {
      __s5local0.openDialog(__s5local1);
    }
  }
}
