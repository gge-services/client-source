Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function OpenDungenTreasureChestOfferCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenDungenTreasureChestOfferCommand, __s1param0);
  OpenDungenTreasureChestOfferCommand.prototype.execute = function (__s5param0 = null) {
    __s1param0.prototype.execute.call(this, __s5param0);
    var __s5local0 = __s5param0.offerID;
    var __s5local1 = __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(__s5local0);
    if (__s5local1) {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, __s5local1);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_PrivateOfferFailedStandardDialog.PrivateOfferFailedStandardDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_9e901e8e2483a22f.BasicModel.languageData.getTextById("dungeonTreasureChestOfferFailed_title"), __dep_exact_9e901e8e2483a22f.BasicModel.languageData.getTextById("dungeonTreasureChestOfferFailed_copy")));
    }
  };
  Object.defineProperty(OpenDungenTreasureChestOfferCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenDungenTreasureChestOfferCommand;
}(__dep_exact_9e901e8e2483a22f_3.SimpleCommand);
exports.OpenDungenTreasureChestOfferCommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_PrivateOfferFailedStandardDialog = require("gge-module:export_PrivateOfferFailedStandardDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
