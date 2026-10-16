Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleNomadHunterEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleNomadHunterEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadHunterEventDialog, __s1param0);
  CastleNomadHunterEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_nomadHunter_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_nomadHunter_desc_detail")).autoFitToBounds = true;
  };
  Object.defineProperty(CastleNomadHunterEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleNomadHunterEventScrollItem.CastleNomadHunterEventScrollItem;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadHunterEventDialog.__initialize_static_members = function () {
    CastleNomadHunterEventDialog.NAME = "CastleNomadHunterEvent";
  };
  return CastleNomadHunterEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleNomadHunterEventDialog = __s0local0;
var __dep_export_CastleNomadHunterEventScrollItem = require("gge-module:export_CastleNomadHunterEventScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
