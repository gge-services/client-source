Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleDestroyGameCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDestroyGameCommand, __s1param0);
  CastleDestroyGameCommand.prototype.destroyGameSpecificObjects = function () {
    __dep_export_cxfResetCommandCache.cxfResetCommandCache();
    __dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed = false;
    __dep_export_CastleDataHolder.CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
    __dep_export_CastleModel.CastleModel.settingsData.isLoginReady = false;
    __dep_export_CastleIngameMessageHandler.CastleIngameMessageHandler.getInstance().destroy();
    __dep_export_LordEffectHelper.LordEffectHelper.resetCategoryItems();
    __dep_export_OpenTipDialogCommand.OpenTipDialogCommand.repairShown = 0;
    __dep_exact_608de47b6498f9b0.TweenMax.killAll();
    __dep_export_Iso.Iso.destroy();
    __dep_export_CastleModel.CastleModel.resetModels();
  };
  return CastleDestroyGameCommand;
}(__dep_exact_9e901e8e2483a22f.BasicDestroyGameCommand);
exports.CastleDestroyGameCommand = __s0local0;
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleIngameMessageHandler = require("gge-module:export_CastleIngameMessageHandler");
var __dep_export_OpenTipDialogCommand = require("gge-module:export_OpenTipDialogCommand");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
