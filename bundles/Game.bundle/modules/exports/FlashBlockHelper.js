Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function FlashBlockHelper() {}
  FlashBlockHelper.isAccessBlocked = function (__s5param0) {
    return (!__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isTest || !FlashBlockHelper.ALLOW_ON_TEST) && FlashBlockHelper.BLOCK_ACCESS && (FlashBlockHelper.BLOCKED_KINGDOM_IDS.indexOf(__s5param0) > -1 || __dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(__s5param0) > -1);
  };
  FlashBlockHelper.checkFlashBlock = function (__s7param0) {
    return !!FlashBlockHelper.isAccessBlocked(__s7param0) && (__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDarkOkLabeledDialog.CastleDarkOkLabeledDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("dialog_clientVersion_switch_confirmDialog_header", FlashBlockHelper.getBlockerText(__s7param0), FlashBlockHelper.onConfirmSwitch, "dialog_clientVersion_confirmSwitch", FlashBlockHelper.onClose)), true);
  };
  FlashBlockHelper.getBlockerText = function (__s9param0) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID:
        __s9local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("event_title_3")];
        break;
      case __dep_exact_26a421b704832cff_5.WorldIsland.KINGDOM_ID:
        __s9local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("event_title_102")];
        break;
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY:
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD:
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD:
        __s9local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("event_title_4")];
        break;
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_EASY:
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_HARD:
        __s9local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("event_title_2")];
        break;
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY:
      case __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_UNDERWORLD_HARD:
        __s9local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("event_title_64")];
        break;
      case __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID:
      case __dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID:
      case __dep_exact_26a421b704832cff_2.WorldVolcano.KINGDOM_ID:
        __s9local0 = [__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s9param0).kingdomNameString];
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_clientVersion_switch_confirmDialog_genericFeature_mandatory_HTML5_copy", __s9local0);
  };
  FlashBlockHelper.onConfirmSwitch = function (__s12param0 = null) {
    __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsChangeGameClient");
  };
  FlashBlockHelper.onClose = function (__s14param0 = null) {};
  FlashBlockHelper.BLOCK_ACCESS = false;
  FlashBlockHelper.ALLOW_ON_TEST = true;
  FlashBlockHelper.BLOCKED_KINGDOM_IDS = [__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID, __dep_exact_26a421b704832cff_5.WorldIsland.KINGDOM_ID, __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID, __dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID, __dep_exact_26a421b704832cff_2.WorldVolcano.KINGDOM_ID];
  return FlashBlockHelper;
}();
exports.FlashBlockHelper = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDarkOkLabeledDialog = require("gge-module:export_CastleDarkOkLabeledDialog");
