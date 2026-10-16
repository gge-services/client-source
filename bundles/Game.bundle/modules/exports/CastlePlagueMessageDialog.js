Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SIsoRepairAllVO = require("gge-module:export_C2SIsoRepairAllVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastlePlagueMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlagueMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlagueMessageDialog, __s1param0);
  CastlePlagueMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_plagueMessage_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_plagueMessage_desc"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_repairAll]);
    this.repairAllButton = new __dep_export_ButtonRepairAllComponentExternal.ButtonRepairAllComponentExternal(this.dialogDisp.btn_repairAll);
  };
  CastlePlagueMessageDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.repairAllButton.initRepairAllButton(this.dialogProperties.castleID, this.dialogDisp.mc_premiumToolTip);
    this.dialogDisp.mc_buttonBg.visible = this.dialogDisp.btn_repairAll.visible;
  };
  CastlePlagueMessageDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_repairAll:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoRepairAllVO.C2SIsoRepairAllVO());
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastlePlagueMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlagueMessageDialog.__initialize_static_members = function () {
    CastlePlagueMessageDialog.NAME = "CastlePlagueMessage";
  };
  return CastlePlagueMessageDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePlagueMessageDialog = __s0local0;
var __dep_export_ButtonRepairAllComponentExternal = require("gge-module:export_ButtonRepairAllComponentExternal");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
