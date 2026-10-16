Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastlePlayerInfoEvent = require("gge-module:export_CastlePlayerInfoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAttackDialogProperties = require("gge-module:export_CastleAttackDialogProperties");
var __dep_export_AttackDialog = require("gge-module:export_AttackDialog");
var __dep_export_C2SGetDetailPlayerInfo = require("gge-module:export_C2SGetDetailPlayerInfo");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function AIICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIICommand, __s1param0);
  Object.defineProperty(AIICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ATTACK_INFO_ISLAND;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AIICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.controller.removeEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
        this.paramObj = JSON.parse(__s9param1[1]);
        var __s9local0 = __dep_export_CastleModel.CastleModel.attackData.parse_AII(this.paramObj);
        if (__s9local0.targetArea && !__s9local0.targetArea.ownerInfo && __s9local0.targetArea.occupierPId > 0) {
          this.controller.addEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailPlayerInfo.C2SGetDetailPlayerInfo(__s9local0.targetArea.occupierPId));
          return true;
        }
        this.openDialog(__s9local0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  AIICommand.prototype.onPlayerInfoGained = function () {
    this.controller.removeEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
    var __s13local0 = __dep_export_CastleModel.CastleModel.attackData.parse_AII(this.paramObj);
    this.openDialog(__s13local0);
  };
  AIICommand.prototype.openDialog = function (__s15param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AttackDialog.AttackDialog, new __dep_export_CastleAttackDialogProperties.CastleAttackDialogProperties(__s15param0));
  };
  return AIICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.AIICommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
