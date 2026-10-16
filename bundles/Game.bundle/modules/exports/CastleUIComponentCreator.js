Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function CastleUIComponentCreator() {}
  CastleUIComponentCreator.prototype.createFlashComponent = function (__s5param0) {
    if (__s5param0 && typeof __s5param0 == "function") {
      return new __s5param0();
    }
    switch (__s5param0) {
      case __dep_export_CastleReconnectDialog.CastleReconnectDialog.NAME:
        return new __dep_export_CastleReconnectDialog.CastleReconnectDialog();
      case __dep_export_CastleStandardOkDialog.CastleStandardOkDialog.NAME:
        return new __dep_export_CastleStandardOkDialog.CastleStandardOkDialog();
      case __dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog.NAME:
        return new __dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog();
    }
    if ((__s5param0 = __dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(__s5param0.toString())) && typeof __s5param0 == "function") {
      return new __s5param0();
    }
    if (__dep_exact_9e901e8e2483a22f.EnvironmentProvider.instance.globals.isLocal) {
      throw new Error("Unknown component: " + __s5param0);
    }
    return new __dep_export_CastleStandardOkDialog.CastleStandardOkDialog();
  };
  return CastleUIComponentCreator;
}();
exports.CastleUIComponentCreator = __s0local0;
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleReconnectDialog = require("gge-module:export_CastleReconnectDialog");
var __dep_export_CastlePrivateOfferDialogCreator = require("gge-module:export_CastlePrivateOfferDialogCreator");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUIComponentCreator");
