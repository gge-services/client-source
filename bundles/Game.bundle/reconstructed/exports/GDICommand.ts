import { CastleCommand } from "./CastleCommand";
import { CastleListVO } from "./CastleListVO";
import { CastleModel } from "./CastleModel";
import { CastlePlayerInfoEvent } from "./CastlePlayerInfoEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GDICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_DETAILPLAYERINFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = int(parsedResponse.O.OID);
        var __s9local2 = new CastleListVO();
        if (parsedResponse.gkl && parsedResponse.gkl.AI.length > 0) {
          this.addGKLToGC(parsedResponse);
        }
        if (parsedResponse.gml && parsedResponse.gml.AI.length > 0) {
          this.addGMLToGC(parsedResponse);
        }
        if (parsedResponse.gll && parsedResponse.gll.AI.length > 0) {
          this.addGLLToGC(parsedResponse);
        }
        var __s9local3 = CastleModel.otherPlayerData.parseOwnerInfo(parsedResponse.O);
        if (__s9local3 && parsedResponse.atl) {
          __s9local3.splitRunData.parse_ATL(parsedResponse.atl);
        }
        if (parsedResponse.gcl) {
          __s9local2.parseCastleList(parsedResponse.gcl, __s9local3);
        }
        if (parsedResponse.kgv) {
          __s9local2.parseVillageList(parsedResponse.kgv, __s9local3);
        }
        if (parsedResponse.gac) {
          __s9local2.parseAllianceCity(parsedResponse.gac, __s9local3);
        }
        if (parsedResponse.tie && parsedResponse.tie.T) {
          __s9local2.parseABGTower(parsedResponse.tie && parsedResponse.tie.T);
        }
        __s9local2.ownerID = __s9local1;
        this.controller.dispatchEvent(new CastlePlayerInfoEvent(CastlePlayerInfoEvent.GET_PLAYERINFO, [__s9local2]));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  addGKLToGC(__s20param0) {
    var __s20local0;
    for (var __s20local1 = 0, __s20local2 = __s20param0.gkl.AI; __s20local1 < __s20local2.length; __s20local1++) {
      var __s20local3 = __s20local2[__s20local1];
      if (__s20local3 !== undefined) {
        (__s20local0 = {} as any).AI = __s20local3[0];
        __s20param0.gcl.C[0].AI.push(__s20local0);
      }
    }
  }
  addGMLToGC(__s25param0) {
    var __s25local0;
    for (var __s25local1 = 0, __s25local2 = __s25param0.gml.AI; __s25local1 < __s25local2.length; __s25local1++) {
      var __s25local3 = __s25local2[__s25local1];
      if (__s25local3 !== undefined) {
        (__s25local0 = {} as any).AI = __s25local3[0];
        __s25param0.gcl.C[0].AI.push(__s25local0);
      }
    }
  }
  addGLLToGC(__s30param0) {
    var __s30local0;
    for (var __s30local1 = 0, __s30local2 = __s30param0.gll.AI; __s30local1 < __s30local2.length; __s30local1++) {
      var __s30local3 = __s30local2[__s30local1];
      if (__s30local3 !== undefined) {
        (__s30local0 = {} as any).AI = __s30local3[0];
        __s30param0.gcl.C[0].AI.push(__s30local0);
      }
    }
  }
}
classImplementsInterfaces(GDICommand, "IExecCommand");
