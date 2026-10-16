Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleNameCastleDialog = require("gge-module:export_CastleNameCastleDialog");
var __dep_export_CastleNameCastleDialogProperties = require("gge-module:export_CastleNameCastleDialogProperties");
var __dep_export_CastleRenameCastleDialog = require("gge-module:export_CastleRenameCastleDialog");
var __dep_export_CastleRenameCastleDialogProperties = require("gge-module:export_CastleRenameCastleDialogProperties");
var __dep_export_C2SJoinAreaVO = require("gge-module:export_C2SJoinAreaVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function ARCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ARCCommand, __s1param0);
  Object.defineProperty(ARCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RENAME_CASTLE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ARCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s9local0.CID, __s9local0.KID);
        if (!__s9local0.P && __s9local1 && __s9local1.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinAreaVO.C2SJoinAreaVO(__s9local1.absAreaPosX, __s9local1.absAreaPosY, __s9local0.KID));
        }
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.USAGE_OF_BADWORDS:
        var __s9local2 = "";
        if ((__s9local0 = JSON.parse(__s9param1[1])).BW && __s9local0.BW[0]) {
          __s9local2 = __s9local0.BW[0];
        }
        this.showNameOrRenameDialog(__s9param1);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("alert_badword_textReplacement", [new __dep_exact_92d05af59ee2ff30.TextVO(__s9local2)])), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.TEXT_TOO_SHORT:
        this.showNameOrRenameDialog(__s9param1);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("alert_castlenameTooShort")), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.NOT_IN_OWNED_CASTLE:
      case __dep_exact_26a421b704832cff_1.ERROR.NO_FREE_RENAME:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30_1.Localize.text("target_not_owned")), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.NO_EVENT:
        break;
      default:
        this.showNameOrRenameDialog(__s9param1);
        this.showErrorDialog(__s9param0, __s9param1);
    }
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARC_ARRIVED, __s9param1));
    return false;
  };
  ARCCommand.prototype.showNameOrRenameDialog = function (__s14param0) {
    if (__s14param0[1]) {
      var __s14local0 = JSON.parse(__s14param0[1]);
      var __s14local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s14local0.CID, __s14local0.KID);
      if (!__s14local1) {
        if (__s14local1 = __dep_export_CastleModel.CastleModel.userData.kingstowerList.getVOByID(__s14local0.CID)) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameCastleDialog.CastleNameCastleDialog, new __dep_export_CastleNameCastleDialogProperties.CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
        if (__s14local1 = __dep_export_CastleModel.CastleModel.userData.monumentList.getVOByID(__s14local0.CID)) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameCastleDialog.CastleNameCastleDialog, new __dep_export_CastleNameCastleDialogProperties.CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
        if (__s14local1 = __dep_export_CastleModel.CastleModel.userData.laboratoryList.getVOByID(__s14local0.CID)) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameCastleDialog.CastleNameCastleDialog, new __dep_export_CastleNameCastleDialogProperties.CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
        if (__s14local1 = __dep_export_CastleModel.CastleModel.userData.villageList.getVillageByID(__s14local0.CID, __s14local0.KID)) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameCastleDialog.CastleNameCastleDialog, new __dep_export_CastleNameCastleDialogProperties.CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
      }
      if (__s14local0.P == 0) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameCastleDialog.CastleNameCastleDialog, new __dep_export_CastleNameCastleDialogProperties.CastleNameCastleDialogProperties(__dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s14local0.CID, __s14local0.KID), __s14local0.KID, __s14local0.CID), false, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_HIGH);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRenameCastleDialog.CastleRenameCastleDialog, new __dep_export_CastleRenameCastleDialogProperties.CastleRenameCastleDialogProperties(__s14local0.N, __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s14local0.CID, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID)), false);
      }
    }
  };
  return ARCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.ARCCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
