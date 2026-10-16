Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePostPostAttackFactionDialogProperties = require("gge-module:export_CastlePostPostAttackFactionDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function CRACommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CRACommand, __s1param0);
  Object.defineProperty(CRACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_CREATE_ARMY_ATTACK_MOVEMENT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CRACommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    if (__s9param1 && __s9param1.length > 0) {
      try {
        __s9local0 = JSON.parse(__s9param1[1]);
      } catch (__s13local0) {}
    }
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local0.gcu);
        __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfoArray(__s9local0.O);
        __dep_export_CastleModel.CastleModel.armyData.parseMapMovementArray([__s9local0.AAM]);
        break;
      case __dep_exact_26a421b704832cff.ERROR.MOVEMENT_HAS_NO_UNITS:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_100_noPlaceholder")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ATTACK_IN_PROGRESS:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostPostAttackFactionDialog.CastlePostPostAttackFactionDialog, new __dep_export_CastlePostPostAttackFactionDialogProperties.CastlePostPostAttackFactionDialogProperties(__s9local0.TS, __s9local0.AS));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ALREADY_TO_MANY_OUTPOSTS:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("noAbailableBarons")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ATTACK_TOO_MANY_UNITS:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_313")));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return CRACommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.CRACommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastlePostPostAttackFactionDialog = require("gge-module:export_CastlePostPostAttackFactionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
