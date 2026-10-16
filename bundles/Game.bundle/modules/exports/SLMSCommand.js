Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_UserSocialLoginMigrationHelper = require("gge-module:export_UserSocialLoginMigrationHelper");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleChangePasswordForSocialMigrationDialog = require("gge-module:export_CastleChangePasswordForSocialMigrationDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleChangePasswordForSocialMigrationConfirmedDialog = require("gge-module:export_CastleChangePasswordForSocialMigrationConfirmedDialog");
var __s0local0 = function (__s1param0) {
  function SLMSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SLMSCommand, __s1param0);
  Object.defineProperty(SLMSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SOCIAL_LOGIN_MIGRATION_STATUS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SLMSCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        if ((!!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer || __dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getNameByInstanceID(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId) != " ") && __s9local0.hasPassword !== undefined) {
          if (Boolean(__s9local0.hasPassword)) {
            __dep_export_CastleModel.CastleModel.userData.toShowDialogsAfterJAA.push(__dep_export_CastleChangePasswordForSocialMigrationConfirmedDialog.CastleChangePasswordForSocialMigrationConfirmedDialog);
          } else {
            if (__dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.isVisible) {
              __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
            }
            __dep_export_CastleModel.CastleModel.userData.toShowDialogsAfterJAA.push(__dep_export_CastleChangePasswordForSocialMigrationDialog.CastleChangePasswordForSocialMigrationDialog);
          }
        }
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return SLMSCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SLMSCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
