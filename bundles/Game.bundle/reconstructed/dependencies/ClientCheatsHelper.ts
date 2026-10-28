import { C2SBugReportVO } from "./C2SBugReportVO";
import { CastleModel } from "./CastleModel";
import { ClientCheats } from "./ClientCheats";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class ClientCheatsHelper {
  static cheatObject: any;

  static performCommand(argument0) {
    (() => {
      const sourceObject = ClientCheatsHelper;
      const sourceKey = "cheatObject";
      const previousValue = sourceObject[sourceKey];
      return !previousValue ? sourceObject[sourceKey] = new ClientCheats() : previousValue;
    })();
    for (var __s5local0 = 0; __s5local0 < argument0.length && ClientCheatsHelper.notAlpha(argument0.charCodeAt(__s5local0));) {
      __s5local0++;
    }
    var __s5local1 = int(argument0.indexOf(" ", __s5local0));
    if (__s5local1 < 0) {
      __s5local1 = int(argument0.length);
    }
    var __s5local2 = argument0.substring(__s5local0, __s5local1);
    var __s5local3 = argument0.substr(__s5local1 + 1).split(" ");
    var __s5local4 = [];
    var __s5local5 = ClientCheatsHelper.cheatObject[__s5local2];
    if (__s5local5 && typeof __s5local5 == "function") {
      for (var __s5local6 = 0; __s5local6 < __s5local5.length; __s5local6++) {
        var __s5local7 = __s5local3[__s5local6];
        if (__s5local7) {
          __s5local4[__s5local6] = ClientCheatsHelper.parseValue(__s5local7);
        }
      }
      __s5local5.apply(ClientCheatsHelper.cheatObject, __s5local4);
    } else {
      if (argument0.charAt(0) != "/") {
        argument0 = "/" + argument0;
      }
      CastleModel.smartfoxClient.sendCommandVO(new C2SBugReportVO(argument0));
    }
  }
  static parseValue(argument0) {
    if (argument0.match(/true|false/)) {
      return argument0 == "true";
    }
    if (argument0.match(/["'].*["']/)) {
      return argument0 = argument0.replace(/["']/g, "");
    }
    if (argument0.match(/(.*,+.*)|(\[.*])/)) {
      for (var __s16local0 = (argument0 = argument0.replace(/\[|]/g, "")).split(","), __s16local1 = [], __s16local2 = 0; __s16local2 < __s16local0.length; __s16local2++) {
        __s16local1[__s16local2] = ClientCheatsHelper.parseValue(__s16local0[__s16local2]);
      }
      return __s16local1;
    }
    var __s16local3 = parseFloat(argument0);
    return __s16local3 || argument0;
  }
  static notAlpha(argument0) {
    return argument0 > 122 || argument0 < 65 || argument0 > 90 && argument0 < 97;
  }
}
