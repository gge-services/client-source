import { CastleModel } from "./CastleModel";
import { CastleVersionInformation } from "./CastleVersionInformation";
import { ClientConstCastle } from "./ClientConstCastle";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { NFOCommand } from "../../../ggs.dll/reconstructed/exports/NFOCommand";
export class NFOCastleCommand extends NFOCommand {
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        ClientConstCastle.setWorldmapSizeViaGGC(parsedResponse.sectorCountX, parsedResponse.sectorCountY);
        this.env.versionInformation.serverXMLVersion = parsedResponse.XML_EP;
        if (CastleModel.worldmapData) {
          CastleModel.worldmapData.reset();
        }
        CastleVersionInformation.versionInstance.serverXMLVersion = parsedResponse.XML_EP;
    }
    return super.executeCommand(statusCode, responseFields);
  }
}
