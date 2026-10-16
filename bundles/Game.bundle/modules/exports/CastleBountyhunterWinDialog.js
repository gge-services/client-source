Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __s0local0 = function (__s1param0) {
  function CastleBountyhunterWinDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBountyhunterWinDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBountyhunterWinDialog, __s1param0);
  CastleBountyhunterWinDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bountyhunterWin_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_winText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bountyhunter_title_won"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("reward"));
    this.itxt_c1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c2, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.dialogDisp.mc_c1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
  };
  CastleBountyhunterWinDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.itxt_c1.textContentVO.numberValue = this.dialogProperties.bountyPrizeC1;
    this.itxt_c2.textContentVO.numberValue = this.dialogProperties.bountyPrizeC2;
  };
  CastleBountyhunterWinDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleBountyhunterWinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBountyhunterWinDialog.__initialize_static_members = function () {
    CastleBountyhunterWinDialog.NAME = "CastleBountyHunterWinExternal";
  };
  return CastleBountyhunterWinDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBountyhunterWinDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
