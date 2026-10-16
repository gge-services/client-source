Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function NFOCastleCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NFOCastleCommand, __s1param0);
  NFOCastleCommand.prototype.executeCommand = function (__s5param0, __s5param1) {
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s5local0 = JSON.parse(__s5param1[1]);
        __dep_export_ClientConstCastle.ClientConstCastle.setWorldmapSizeViaGGC(__s5local0.sectorCountX, __s5local0.sectorCountY);
        this.env.versionInformation.serverXMLVersion = __s5local0.XML_EP;
        if (__dep_export_CastleModel.CastleModel.worldmapData) {
          __dep_export_CastleModel.CastleModel.worldmapData.reset();
        }
        __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.serverXMLVersion = __s5local0.XML_EP;
    }
    return __s1param0.prototype.executeCommand.call(this, __s5param0, __s5param1);
  };
  return NFOCastleCommand;
}(__dep_exact_9e901e8e2483a22f.NFOCommand);
exports.NFOCastleCommand = __s0local0;
