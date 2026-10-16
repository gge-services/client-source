Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function OpenKingdomTeaserCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenKingdomTeaserCommand, __s1param0);
  OpenKingdomTeaserCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0;
    var __s5local1;
    var __s5local2 = __s5param0;
    if (__s5local2.kingdomVO) {
      __s5local2.titleTextID = "dialog_kingdomTeaser_header" + __s5local2.kingdomVO.kID;
      __s5local2.minLevel = __dep_exact_f855840627e6e145.int(__s5local2.kingdomVO.minLevel);
      __s5local0 = "KingdomTeaserBackground" + __s5local2.kingdomVO.kID;
    } else {
      __s5local2.titleTextID = "dialog_kingdomteaser_copy1";
      __s5local2.minLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.minNonPremiumUnlockLevelForKingdoms);
      __s5local0 = "KingdomTeaserAllKingdomsBackground";
    }
    __s5local1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local0);
    __s5local2.backgroundImage = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __s5local1, null, 0, false);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleKingdomTeaserDialog.CastleKingdomTeaserDialog, __s5local2);
  };
  return OpenKingdomTeaserCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.OpenKingdomTeaserCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleKingdomTeaserDialog = require("gge-module:export_CastleKingdomTeaserDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
