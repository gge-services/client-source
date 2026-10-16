Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenPrivateOfferDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenPrivateOfferDialogCommand, __s1param0);
  OpenPrivateOfferDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_81dacdf05bd32292_1.castAs(__s5param0, "PrivateOfferVO");
    if (__s5local0) {
      var __s5local1 = __dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogName(__s5local0);
      if (__s5local1) {
        var __s5local2 = __dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(__s5local1);
        if (__s5local2) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s5local2, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s5local0), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY);
        }
      }
    }
  };
  return OpenPrivateOfferDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenPrivateOfferDialogCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivateOfferDialogCreator = require("gge-module:export_CastlePrivateOfferDialogCreator");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
