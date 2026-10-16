Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TaxInfoVO = require("gge-module:export_TaxInfoVO");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleCollectTaxStartDialogProperties = require("gge-module:export_CastleCollectTaxStartDialogProperties");
var __dep_export_C2SGetTaxInfoVO = require("gge-module:export_C2SGetTaxInfoVO");
var __s0local0 = function (__s1param0) {
  function OpenActiveTaxDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenActiveTaxDialogCommand, __s1param0);
  OpenActiveTaxDialogCommand.prototype.execute = function (__s5param0 = null) {
    switch (__dep_export_CastleModel.CastleModel.taxData.taxInfoVO.taxState) {
      case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_NONE:
        __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrivedForTaxStatusNone));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetTaxInfoVO.C2SGetTaxInfoVO());
        break;
      case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_COLLECTING:
      case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog);
    }
  };
  OpenActiveTaxDialogCommand.prototype.onTXIArrivedForTaxStatusNone = function (__s8param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrivedForTaxStatusNone));
    if (__dep_export_CastleModel.CastleModel.taxData.taxInfoVO.population > 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCollectTaxStartDialog.CastleCollectTaxStartDialog, new __dep_export_CastleCollectTaxStartDialogProperties.CastleCollectTaxStartDialogProperties());
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_warning"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_nofolk_copy"), 2, null, null, false));
    }
  };
  return OpenActiveTaxDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenActiveTaxDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleCollectTaxProgressDialog = require("gge-module:export_CastleCollectTaxProgressDialog");
var __dep_export_CastleCollectTaxStartDialog = require("gge-module:export_CastleCollectTaxStartDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
