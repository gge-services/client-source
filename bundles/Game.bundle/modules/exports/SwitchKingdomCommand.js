Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SwitchKingdomCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SwitchKingdomCommand, __s1param0);
  SwitchKingdomCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s5param0));
    if (__s5local0 == -1 || !__dep_export_CastleModel.CastleModel.kingdomData.kingdomVOs.has(__s5local0)) {
      __s5local0 = 0;
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __s5local0) {
      if (__s5local0 == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        __dep_export_ClientConstCastle.ClientConstCastle.setWorldmapSize(__dep_exact_26a421b704832cff.FactionConst.MAP_WIDTH_IN_SECTORS, __dep_exact_26a421b704832cff.FactionConst.MAP_HEIGHT_IN_SECTORS);
      } else {
        __dep_export_ClientConstCastle.ClientConstCastle.setWorldmapSize(__dep_export_ClientConstCastle.ClientConstCastle.GGC_X, __dep_export_ClientConstCastle.ClientConstCastle.GGC_Y);
      }
      __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID = __s5local0;
      __dep_export_CastleModel.CastleModel.privateOfferData.onKingdomSwitched();
    }
  };
  return SwitchKingdomCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.SwitchKingdomCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
